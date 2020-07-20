from django.urls import path
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import Lesson_API_DETAIL, Lesson_API_LIST

urlpatterns = [
    path('<int:pk>/', Lesson_API_DETAIL.as_view(), name='get_lesson_detail'),
    path('', Lesson_API_LIST.as_view(), name='get_lessons_list'),
]
