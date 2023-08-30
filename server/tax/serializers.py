from rest_framework import serializers
from .models import TaxFiling

class TaxFilingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaxFiling
        fields = "__all__"