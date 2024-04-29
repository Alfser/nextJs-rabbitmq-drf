from .models import Badge
from rabbitmq.services import MQService
from rabbitmq.client import RabbitMQClient
import uuid
import json


class BadgeService:
    __mq_servie: MQService = None
    
    def __init__(self) -> None:
        self.__mq_servie = MQService()

    def create(self, **kwargs)-> Badge:
        return Badge.objects.create(**kwargs)
    
    def consume_all_from_queue(self):
        while True:    
            method, properties, body = self.__mq_servie.consume(RabbitMQClient.BADGE_QUEUE)
            if body:
                data = json.loads(body)
                self.create(**{
                    'name': data.get('firstName')+" "+data.get('lastName'),
                    "email": data.get('email'),
                    'registration': str(uuid.uuid4()),
                    'office': None,
                    'photo': None,
                    'isReady': False
                })
                self.__mq_servie.mq_consumer.channel.basic_ack(method.delivery_tag)    
            else:
                print('No messages in the queue. Exiting...')
                break
        self.__mq_servie.close_connection()

    def start_mq_consuming(self):
        self.__mq_servie.start_consuming(RabbitMQClient.BADGE_QUEUE, self.__callback__)
        
    def __callback__(self, ch, method, properties, body):
        print(f"[JSON] Receve {json.loads(body)}")
    