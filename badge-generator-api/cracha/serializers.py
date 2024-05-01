from rest_framework import serializers

from .models import Badge
from .services import BadgeService

class BadgeSerializer(serializers.ModelSerializer):
    badge_service = None
    
    def __init__(self, instance=None, data=..., **kwargs):
        self.badge_service = BadgeService()
        super().__init__(instance, data, **kwargs)
    
    class Meta:
        model = Badge
        fields = '__all__'