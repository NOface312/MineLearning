from django.db import models
from datetime import datetime, date, time
from django.utils import timezone


class Course(models.Model):
    title = models.CharField(blank=True, max_length=120, null=True)
    preview = models.TextField(null=True)
    description = models.TextField(null=True)
    poster = models.ImageField(upload_to="course/", null=True)

    def __str__(self):
        title = self.title
        return title
