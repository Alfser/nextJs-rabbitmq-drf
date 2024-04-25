"""
URL configuration for api project.

"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from cracha.routers import routers as cracha_routers

schema_view = get_schema_view(
    openapi.Info(
        title="Badges API example using Django and RabbitMQ",
        default_version='v1',
        description="Badges API example using Django and RabbitMQ",
        terms_of_service="https://www.example.com/terms/",
        contact=openapi.Contact(email="j.janilson12@gmail.com"),
        license=openapi.License(name="Apache 2 License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(cracha_routers.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/v1/swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/v1/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
