# Generated by Django 2.0.9 on 2018-11-16 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20181116_1632'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('male', 'Male'), ('not-speified', 'Not-speified'), ('female', 'Female')], max_length=80, null=True),
        ),
    ]
