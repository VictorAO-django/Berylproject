# Generated by Django 3.2.18 on 2023-02-16 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('berylsite', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='bootmodel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=30)),
                ('amount', models.IntegerField()),
                ('date_added', models.DateField(auto_now_add=True)),
                ('valid', models.CharField(max_length=5)),
            ],
        ),
    ]
