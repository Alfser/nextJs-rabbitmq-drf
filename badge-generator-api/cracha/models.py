from django.db import models

# Create your models here.

class Badge(models.Model):
    name = models.CharField(verbose_name="Name", max_length=100)
    email = models.CharField(verbose_name="Email", max_length=100)
    registration = models.CharField(verbose_name="Registration", max_length=20)
    office = models.CharField(verbose_name="Office", max_length=100)
    photo = models.CharField(verbose_name="Foto", max_length=30)
    isReady = models.BooleanField(verbose_name="Ready?")

    class Meta:
        verbose_name = "Badge"    
        verbose_name_plural = "Badges"