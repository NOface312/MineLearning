from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    USER_TYPE = (
        ('Admin', 'Admin'),
        ('Moderator', 'Начальник участка'),
        ('Regular', 'Regular')
    )
    name = models.CharField(blank=True, max_length=120)
    surname = models.CharField(blank=True, max_length=120)
    login = models.CharField(blank=True, max_length=120)
    user_type = models.CharField(
        max_length=30, choices=USER_TYPE, blank=True, null=True)
    email = models.EmailField(max_length=120, unique=True)

    def __str__(self):
        title = self.FIO
        return title
