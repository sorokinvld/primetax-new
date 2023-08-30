from rest_framework import permissions
from rest_framework.parsers import MultiPartParser
from .models import EmploymentDetails, PensionDetails, Expenses
from .serializers import EmploymentDetailsSerializer, PensionDetailsSerializer, ExpensesSerializer
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser
from rest_framework import viewsets
from rest_framework.response import Response
from .utils import analyse, extract_text_from_document
from rest_framework import status
from django.conf import settings
from django_filters.rest_framework import DjangoFilterBackend


class EmploymentDetailsView (viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = EmploymentDetailsSerializer
    queryset = EmploymentDetails.objects.all()
    parser_class = (MultiPartParser,)
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user']
    
    # def create(self, request):
    #     serializer = self.serializer_class(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         file = request.FILES['p16_form'].name
    #         file_path = request.FILES['p16_form'].name[len(settings.MEDIA_URL):]
    #         print(file_path)
        
    #         return Response({'text': file_path, 'confirm': True}, status=status.HTTP_200_OK)
    #     else:
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PensionDetailsView (viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = PensionDetailsSerializer
    queryset = PensionDetails.objects.all ()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user'] 
        
class ExpensesView (viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = ExpensesSerializer
    queryset = Expenses.objects.all ()
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user']

