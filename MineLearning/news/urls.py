from django.urls import path
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from .views import New_API_DETAIL, New_API_LIST

urlpatterns = [
    path('<int:pk>/', New_API_DETAIL.as_view(), name='get_news_detail'),
    path('', New_API_LIST.as_view(), name='get_news_list'),
]
