from rest_framework import viewsets
from .models import Serie, Category
from .serializer import SerieSerializer, CategorySerializer

class SerieViewSet(viewsets.ModelViewSet):
    queryset = Serie.objects.all().order_by('-release_date')
    serializer_class = SerieSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('description')
    serializer_class = CategorySerializer