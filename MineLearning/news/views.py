from news.models import New
from rest_framework import generics, views
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
)

from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from rest_framework.response import Response

from .serializers import (
    NewListSerializer,
    NewDeleteSerializer,
    NewCreateSerializer,
    NewUpdateSerializer,
    NewDetailSerializer
)


class NewListAPIView(generics.ListAPIView):
    queryset = New.objects.all()
    serializer_class = NewListSerializer
    permission_classes = [AllowAny]


class NewCreateAPIView(generics.CreateAPIView):
    serializer_class = NewCreateSerializer
    queryset = New.objects.all()
    permission_classes = [IsAdminUser]


class NewDetailAPIView(generics.RetrieveAPIView):
    queryset = New.objects.all()
    serializer_class = NewDetailSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'


class NewDeleteAPIView(generics.DestroyAPIView):
    queryset = New.objects.all()
    serializer_class = NewDeleteSerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'slug'


class NewUpdateAPIView(generics.UpdateAPIView):
    queryset = New.objects.all()
    serializer_class = NewUpdateSerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'slug'
