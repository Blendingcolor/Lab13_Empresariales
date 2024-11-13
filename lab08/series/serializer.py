from rest_framework import serializers
from .models import Serie, Category

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
        fields = '__all__'
