from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from random import randint
import time
from django.http import Http404
import jwt
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters, generics


class Lesson_API_DETAIL(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get_object(self, pk):
        try:
            return Lesson.objects.get(pk=pk)
        except Lesson.DoesNotExist:
            raise Http404

    def get(self, request, pk, format='json'):
        lesson = self.get_object(pk)
        serializer = LessonSerializer(lesson)
        return Response(serializer.data)


class Lesson_API_LIST(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['=title', '=course__title']
    ordering_fields = '__all__'
