from rest_framework import routers

from .viewset import BadgeViewSet


routers = routers.DefaultRouter()
routers.register(r'crachas', BadgeViewSet)