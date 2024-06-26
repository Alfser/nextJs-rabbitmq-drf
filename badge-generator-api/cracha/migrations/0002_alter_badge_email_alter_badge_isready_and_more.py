# Generated by Django 5.0.4 on 2024-04-29 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cracha', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='badge',
            name='email',
            field=models.CharField(max_length=100, null=True, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='badge',
            name='isReady',
            field=models.BooleanField(null=True, verbose_name='Ready?'),
        ),
        migrations.AlterField(
            model_name='badge',
            name='office',
            field=models.CharField(max_length=100, null=True, verbose_name='Office'),
        ),
        migrations.AlterField(
            model_name='badge',
            name='photo',
            field=models.CharField(max_length=30, null=True, verbose_name='Foto'),
        ),
    ]
