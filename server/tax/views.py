from rest_framework import permissions
from .models import TaxFiling
from .serializers import TaxFilingSerializer
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

class TaxFilingView (viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = TaxFilingSerializer
    queryset = TaxFiling.objects.all ()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user']
