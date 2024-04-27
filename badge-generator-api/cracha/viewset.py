from django.http import HttpResponse
from rest_framework import viewsets, status
from rest_framework.decorators import action
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from jasper_report.services import JasperReportService

from .models import Badge
from .serializers import BadgeSerializer


class BadgeViewSet(viewsets.ModelViewSet):
    """
        Endpoints badge data registred in a system
    """
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer