# Generated by Django 3.2.18 on 2023-02-17 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('berylsite', '0005_bootmodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='clothmodel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('picture', models.CharField(blank=True, max_length=50)),
                ('amount', models.IntegerField()),
                ('date_added', models.DateField(auto_now_add=True)),
                ('valid', models.CharField(choices=[('Y', 'Valid'), ('N', 'Not Valid')], max_length=15)),
            ],
        ),
    ]
