from django.urls import path
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import Course_API_DETAIL, Course_API_LIST

urlpatterns = [
    path('<int:pk>/', Course_API_DETAIL.as_view(), name='get_course_detail'),
    path('', Course_API_LIST.as_view(), name='get_courses_list'),
]
