# Generated by Django 3.2.18 on 2023-04-12 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment', '0003_auto_20230412_2135'),
    ]

    operations = [
        migrations.AddField(
            model_name='payment',
            name='tx_ref',
            field=models.CharField(default='accessories0000001', max_length=25),
        ),
    ]
