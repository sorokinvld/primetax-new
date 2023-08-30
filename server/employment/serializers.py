from rest_framework import serializers
from .models import EmploymentDetails, PensionDetails, Expenses

class EmploymentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentDetails
        fields = "__all__"

class PensionDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PensionDetails
        fields = "__all__"

class ExpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenses
        fields = "__all__"

        
        