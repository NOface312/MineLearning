from django.db import models
from datetime import datetime, date, time
from django.utils import timezone



class New(models.Model):
    title = models.CharField(blank=True, max_length=120, null=True)
    preview = models.TextField(null=True)
    description = models.TextField(null=True)
    poster = models.ImageField(upload_to="news/", null=True)
    release_date = models.DateField(auto_now_add=True)

    def __str__(self):
        title = self.title
        return title
