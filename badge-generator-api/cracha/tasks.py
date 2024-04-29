from celery import Celery
from django.conf import settings
from .services import BadgeService
app = Celery('tasks_app', broker=f'amqp://{settings.MQ_USER}:{settings.MQ_PASSWORD}@{settings.MQ_HOST}:{settings.MQ_PORT}')

@app.task
def consume_from_badge_queue():
    BadgeService().consume_all_from_queue()