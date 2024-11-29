from rest_framework import serializers
from .models import Serie, Category
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class SerieSerializer(serializers.ModelSerializer):
    category_description = serializers.SerializerMethodField()
    class Meta:
        model=Serie
        fields='__all__'
        
    def get_category_description(self, obj):
        return obj.category.description

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'description')

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        # Obtener el token original
        token = super().get_token(user)


        # Agregar datos personalizados al token
        token['name'] = user.username  # O user.get_full_name()
        token['email'] = user.email

        return token