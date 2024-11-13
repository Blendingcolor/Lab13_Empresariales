from django.contrib import admin

# Register your models here.
from .models import Serie
from .models import Category

admin.site.register(Category)
admin.site.register(Serie)