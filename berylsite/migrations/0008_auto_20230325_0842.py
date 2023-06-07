# Generated by Django 3.2.18 on 2023-03-25 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('berylsite', '0007_auto_20230217_2212'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bootmodel',
            name='code',
            field=models.CharField(default='boot-00001', max_length=20),
        ),
        migrations.AlterField(
            model_name='bootmodel',
            name='valid',
            field=models.CharField(choices=[('A', 'Available'), ('N', 'Not Available')], max_length=15),
        ),
        migrations.AlterField(
            model_name='clothmodel',
            name='code',
            field=models.CharField(default='cloth-00001', max_length=20),
        ),
        migrations.AlterField(
            model_name='clothmodel',
            name='valid',
            field=models.CharField(choices=[('Y', 'Available'), ('N', 'Not Availabele')], max_length=15),
        ),
    ]
