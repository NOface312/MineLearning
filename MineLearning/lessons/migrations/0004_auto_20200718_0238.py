# Generated by Django 3.0.8 on 2020-07-17 23:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0003_auto_20200718_0007'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lesson',
            old_name='content',
            new_name='description',
        ),
    ]
