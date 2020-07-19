from django.db import models
from datetime import datetime, date, time
from django.utils import timezone



class New(models.Model):
    title = models.CharField(max_length=120, null=True, blank=True)
    preview = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    poster = models.ImageField(upload_to="news/", null=True, blank=True)
    release_date = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        title = self.title
        return title
