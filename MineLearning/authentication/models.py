from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.postgres.fields import JSONField


class CustomUser(AbstractUser):
    USER_TYPE = (
        ('Admin', 'Admin'),
        ('Regular', 'Regular')
    )
    name = models.CharField(blank=True, max_length=120)
    surname = models.CharField(blank=True, max_length=120)
    second_name = models.CharField(blank=True, max_length=120)
    rights = JSONField(default=dict)
    progress = JSONField(default=dict)
    email = models.EmailField(max_length=120, unique=True)

    def __str__(self):
        title = self.username
        return title
