# Generated by Django 4.0.2 on 2022-02-25 14:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_contact'),
    ]

    operations = [
        migrations.CreateModel(
            name='Counting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('yearofestablishment', models.PositiveIntegerField(default=0)),
                ('workinghours', models.PositiveIntegerField(default=0)),
                ('happyclient', models.PositiveIntegerField(default=0)),
                ('completedproject', models.PositiveIntegerField(default=0)),
            ],
        ),
    ]
