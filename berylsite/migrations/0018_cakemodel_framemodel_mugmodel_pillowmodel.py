# Generated by Django 3.2.18 on 2023-06-03 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('berylsite', '0017_auto_20230509_0414'),
    ]

    operations = [
        migrations.CreateModel(
            name='cakemodel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('picture', models.CharField(blank=True, max_length=50)),
                ('amount', models.IntegerField()),
                ('date_added', models.DateField(auto_now_add=True)),
                ('valid', models.CharField(choices=[('Y', 'Available'), ('N', 'Not Availabele')], max_length=15)),
                ('code', models.CharField(default='cloth-00001', max_length=20)),
                ('description', models.TextField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='framemodel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('picture', models.CharField(blank=True, max_length=50)),
                ('amount', models.IntegerField()),
                ('date_added', models.DateField(auto_now_add=True)),
                ('valid', models.CharField(choices=[('Y', 'Available'), ('N', 'Not Availabele')], max_length=15)),
                ('code', models.CharField(default='cloth-00001', max_length=20)),
                ('description', models.TextField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='mugmodel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('picture', models.CharField(blank=True, max_length=50)),
                ('amount', models.IntegerField()),
                ('date_added', models.DateField(auto_now_add=True)),
                ('valid', models.CharField(choices=[('Y', 'Available'), ('N', 'Not Availabele')], max_length=15)),
                ('code', models.CharField(default='cloth-00001', max_length=20)),
                ('description', models.TextField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='pillowmodel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('picture', models.CharField(blank=True, max_length=50)),
                ('amount', models.IntegerField()),
                ('date_added', models.DateField(auto_now_add=True)),
                ('valid', models.CharField(choices=[('Y', 'Available'), ('N', 'Not Availabele')], max_length=15)),
                ('code', models.CharField(default='cloth-00001', max_length=20)),
                ('description', models.TextField(max_length=100)),
            ],
        ),
    ]
