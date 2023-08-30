from django.contrib import admin
from .models import UserProfile, Document, BankDetail

admin.site.register(UserProfile)
admin.site.register(Document)
admin.site.register(BankDetail)

