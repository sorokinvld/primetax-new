from rest_framework import serializers
from .models import UserProfile, Document, BankDetail


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"

class DocumentSerializer(serializers.ModelSerializer):
    document = serializers.FileField (max_length=100, allow_empty_file=False)
    class Meta:
        model = Document
        fields = "__all__"

class BankDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankDetail
        fields = "__all__"