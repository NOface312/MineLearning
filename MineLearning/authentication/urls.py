from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import (
     ObtainTokenPairWithColorView, 
     CustomUserCreate,
     LogoutAndBlacklistRefreshTokenForUserView,
     TEST_API_LIST
)

urlpatterns = [
    path('auth/user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('auth/token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/test/get/', TEST_API_LIST.as_view(), name='test_shit'),
    path('auth/blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(),
         name='blacklist'),
]
