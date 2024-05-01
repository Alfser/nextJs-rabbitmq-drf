from .client import MQConsumer
class MQService:
    mq_consumer = None
    
    def __init__(self) -> None:
        self.mq_consumer = MQConsumer()
        
    def start_consuming(self, queue: str, callback):
        self.mq_consumer.start_consume_from_queue(queue, callback)
    
    def consume_all(self, queue: str):
        return self.mq_consumer.consume(queue)
    
    def consume(self, queue: str):
        return self.mq_consumer.consume_get(queue)
    
    def close_connection(self):
        self.mq_consumer.close_connection()