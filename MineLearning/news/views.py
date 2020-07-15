from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from random import randint
import time


class New_API_DETAIL(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get_object(self, pk):
        try:
            return New.objects.get(pk=pk)
        except New.DoesNotExist:
            raise Http404

    def get(self, request, pk, format='json'):
        New = self.get_object(pk)
        serializer = NewSerializer(New)
        print(serializer.data)
        return Response(serializer.data)


class New_API_LIST(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def get(self, request):
        new = New.objects.all()
        serializer = NewSerializer(new, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
