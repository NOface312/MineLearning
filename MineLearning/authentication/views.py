from rest_framework import status, permissions
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *
from .serializers import *
from django.conf import settings


class ObtainTokenPairWithColorView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class TEST_API_LIST(APIView):

    def get(self, request):
        print(request.user)
        json = {"hello": "world"}
        return Response(json, status=status.HTTP_201_CREATED)

class CustomUserCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format='json'):
        data = request.data
        serializer = CustomUserSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


"""class CustomUserChangeProfileSerializer(APIView):
    def get_object(self, pk):
        try:
            print(self.request.user)
            return self.request.user
        except:
            raise Http404

    def put(self, request, pk, format='json'):
        user = self.get_object(pk)
        serializer = WorkshopSerializer(workshop, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)"""

@api_view(['GET'])
def current_user(request):
    serializer = CustomUserSerializer(request.user)
    return Response(serializer.data)


class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
