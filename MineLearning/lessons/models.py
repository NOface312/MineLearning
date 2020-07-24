from django.db import models
from datetime import datetime, date, time
from django.utils import timezone
from courses.models import Course
from authentication.models import CustomUser

class Lesson(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(blank=True, max_length=120, null=True)
    preview = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    poster = models.ImageField(upload_to="lesson/", null=True, blank=True)
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="lessons",
        related_query_name="lesson",
    )
    release_date = models.DateField(auto_now_add=True)

    def __str__(self):
        title = self.title
        return title
