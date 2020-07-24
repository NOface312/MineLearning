from django.db import models
from datetime import datetime, date, time
from django.utils import timezone


class Course(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(blank=True, max_length=120, null=True)
    preview = models.TextField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    poster = models.ImageField(blank=True, upload_to="course/", null=True)
    release_date = models.DateField(auto_now_add=True, null=True)

    def __str__(self):
        title = self.title
        return title
