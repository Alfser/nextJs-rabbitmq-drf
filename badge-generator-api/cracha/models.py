from django.db import models

# Create your models here.

class Badge(models.Model):
    name = models.CharField(verbose_name="Name", max_length=100, blank=False, null=False)
    email = models.CharField(verbose_name="Email", max_length=100, blank=False, null=True)
    registration = models.CharField(verbose_name="Registration", max_length=20, blank=False, null=False)
    office = models.CharField(verbose_name="Office", max_length=100, blank=False, null=True)
    photo = models.CharField(verbose_name="Foto", max_length=30, blank=False, null=True)
    isReady = models.BooleanField(verbose_name="Ready?", null=True)

    class Meta:
        verbose_name = "Badge"    
        verbose_name_plural = "Badges"