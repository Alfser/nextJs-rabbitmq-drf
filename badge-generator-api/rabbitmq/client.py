from pika import BlockingConnection, URLParameters
from pika.credentials import PlainCredentials
from pika.exceptions import AMQPConnectionError, KeyboardInterrupt
from retry import retry
from django.conf import settings
import json

class RabbitMQClient():
    BADGE_QUEUE='badge_queue'
    connection = None
    channel = None
    data_dict: dict = dict
    
    @retry((AMQPConnectionError, ), tries=3, delay=4)
    def connect(self):
        
        if self.is_connected():
            return
        
        print("connecting")
        url = f"amqp://{settings.MQ_USER}:{settings.MQ_PASSWORD}@{settings.MQ_HOST}:{settings.MQ_PORT}"
        paramerers = URLParameters(url=url)
        self.connection = BlockingConnection(parameters=paramerers)
        self.channel = self.connection.channel()
        
    def is_connected(self):
        return self.connection and self.connection.is_open
    
    def close_connection(self):
        if self.is_connected():
            self.connection.close()
            self.channel.close()
            self.channel = self.connection = None

class MQProducer(RabbitMQClient):
    def send_to_queue(self, queue: str, data: bytes | str):
        self.connect()
        self.channel.queue_declare(queue=queue, durable=False)
        self.channel.basic_publish(exchange='', routing_key=queue, body=data)
        print(f"sent message {data} to queue {queue}")
        self.close_connection()

class MQConsumer(RabbitMQClient):
    def start_consume_from_queue(self, queue: str, callback):
        self.connect()
        self.channel.queue_declare(queue=queue, durable=False)
        self.channel.basic_consume(
            queue=queue,
            on_message_callback=callback,
            auto_ack=True
        )
        self.channel.start_consuming()