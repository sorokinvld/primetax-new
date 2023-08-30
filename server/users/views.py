from rest_framework import viewsets
from .models import UserProfile
from .serializers import UserProfileSerializer
from rest_framework import generics, permissions
from rest_framework.parsers import MultiPartParser
from .models import Document, BankDetail
from .serializers import DocumentSerializer, BankDetailsSerializer
from django_filters.rest_framework import DjangoFilterBackend


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    lookup_field = 'user'


class DocumentViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = DocumentSerializer
    queryset = Document.objects.all()
    parser_class = (MultiPartParser,)
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user','document_type']

class BankViewSet (viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = BankDetailsSerializer
    queryset = BankDetail.objects.all ()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user']
