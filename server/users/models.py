from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):

    TITLE_CHOICES = [
        ('Mr', 'Mr'),
        ('Ms', 'Ms'),
        ('Mrs', 'Mrs'),
        ('Miss', 'Miss'),
    ]
    MARITAL_STATUS_CHOICES = [
        ('single', 'single'),
        ('married', 'married'),
        ('divorced', 'divorced'),
        ('widowed', 'widowed'),
    ]

    MARRIAGE_TYPE_CHOICES = [
        ('incommunity', 'incommunity'),
        ('antenuptial', 'antenuptial'),
        ('other', 'other'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE,null=True)
    first_name = models.CharField(max_length=20,blank=True)
    last_name = models.CharField(max_length=20, blank=True)
    title = models.CharField(max_length=5,blank=True, choices=TITLE_CHOICES)
    maiden_name = models.CharField(max_length=20,blank=True)
    postal_address = models.TextField(max_length=100, blank=True)
    physical_address = models.TextField(max_length=100, blank=True)
    village_suburb = models.CharField(max_length=50, blank=True)
    district = models.CharField(max_length=50, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)
    home_phone_number = models.CharField(max_length=15, blank=True)
    office_phone_number = models.CharField(max_length=15, blank=True)
    fax = models.CharField(max_length=15, blank=True)
    other_email = models.CharField(max_length=50,blank=True)
    occupation = models.CharField(max_length=50, blank=True)
    tin = models.CharField(max_length=20, blank=True)
    postal_code = models.CharField(max_length=10, blank=True)
    date_of_birth = models.DateTimeField(null=True, blank=True)
    birth_contry = models.CharField(max_length=20, blank=True)
    residence_country = models.CharField(max_length=20,blank=True)
    citizenship_country = models.CharField(max_length=20,blank=True)
    marital_status = models.CharField(max_length=10, choices=MARITAL_STATUS_CHOICES,blank=True)
    spouse_name = models.CharField(max_length=50, null=True, blank=True)
    spouse_tin = models.CharField(max_length=15,null=True,blank=True)
    marriage_type = models.CharField(max_length=30, choices=MARRIAGE_TYPE_CHOICES, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True,null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)  
    is_new = models.BooleanField(default=True)
    is_registered = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username}"  

    
def upload_to(instance, filename):
    return 'documents/{filename}'.format(filename=filename)

class Document(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="documents",null=True,blank=True)
    document_type = models.CharField(max_length=100, blank=True)
    document_number = models.CharField(max_length=20, blank=True)
    expiry_date = models.DateTimeField(blank=True,null=True)
    country = models.CharField(max_length=20, blank=True)
    document = models.FileField(upload_to=upload_to, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True,null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)

    def __str__(self):
        return f"{self.user.username} - {self.document_type} - {self.document_number}"
    
class BankDetail(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bank_details",null=True,blank=True)
    account_holder = models.CharField(max_length=50, null=True, blank=True) 
    country = models.CharField(max_length=50, null=True, blank=True) 
    bank_name = models.CharField(max_length=100, null=True, blank=True) 
    branch_name = models.CharField(max_length=100, null=True, blank=True) 
    account_number = models.CharField(max_length=20, null=True, blank=True) 
    account_type = models.CharField(max_length=20, null=True, blank=True) 
    swift_code = models.CharField(max_length=20, null=True, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True,null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.created_at}"
