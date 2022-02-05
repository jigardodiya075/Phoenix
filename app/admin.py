from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(Portfolio)
class PortfolioModelAdmin(admin.ModelAdmin):
    list_display = ['id','portfolio_image']

@admin.register(Contact)
class ContactModelAdmin(admin.ModelAdmin):
    list_display = ['id','name','email','subject','message']
