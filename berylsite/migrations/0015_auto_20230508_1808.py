# Generated by Django 3.2.18 on 2023-05-08 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('berylsite', '0014_alter_greetingmessage_message'),
    ]

    operations = [
        migrations.AddField(
            model_name='bootmodel',
            name='description',
            field=models.TextField(default='yeloe', max_length=100),
        ),
        migrations.AddField(
            model_name='clothmodel',
            name='description',
            field=models.TextField(default='yeloe', max_length=100),
        ),
    ]