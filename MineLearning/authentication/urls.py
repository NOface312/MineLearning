from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import (
     ObtainTokenPairWithColorView, 
     CustomUserCreate,
     CustomUserChangeData,
     LogoutAndBlacklistRefreshTokenForUserView,
     TEST_API_LIST,
     CustomUserChangePassword
)
from rest_framework_simplejwt.views import (
    TokenVerifyView,
)

urlpatterns = [
    path('auth/user/create/', CustomUserCreate.as_view(), name="create_user"),
    path('auth/user/data/', CustomUserChangeData.as_view(), name="user_data"),
    path('auth/user/change/password/',
         CustomUserChangePassword.as_view(), name="user_password"),
    path('auth/token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/test/get/', TEST_API_LIST.as_view(), name='test_shit'),
    path('auth/blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(),
         name='blacklist'),
    path('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
