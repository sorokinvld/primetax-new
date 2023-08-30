from django.db import models
from django.contrib.auth.models import User

def upload_to(instance, filename):
  return 'p-16/{filename}'.format(filename=filename)

class EmploymentDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="employment_details",null=True,blank=True)
    employer_name = models.CharField(max_length=100,blank=True)
    activity = models.CharField(max_length=100,blank=True)
    employer_tin = models.CharField(max_length=20,blank=True)
    employed_from = models.DateField(blank=True,null=True)
    employed_until = models.DateField(blank=True,null=True)
    unemployed_from = models.DateField(blank=True,null=True)
    unemployed_until = models.DateField(blank=True,null=True)
    gross_income = models.DecimalField(max_digits=10,null=True, decimal_places=2,blank=True)
    p16_form = models.FileField(upload_to=upload_to,blank=True,null=True)
    employer_address = models.TextField(blank=True,null=True) 
    gross_salary = models.DecimalField(max_digits=10, decimal_places=2,null=True, blank=True) 
    current_contributions_to_approved_pension_fund = models.DecimalField(max_digits=10, decimal_places=2,null=True, blank=True) 
    five_percent_compulsory_savings = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    medical_aid_subscriptions = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    taxable_income = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    income_tax_occupied = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    gross_salary_total = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    deductions_total = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    net_income_total = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True,null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True) 

    def __str__(self):
        return f"{self.user.username} - {self.created_at}"


class PensionDetails(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="pension_details",null=True,blank=True)
    pension_payer = models.CharField(max_length=100,blank=True)
    pension_payer_tin = models.CharField(max_length=20,blank=True)
    pension_start = models.DateField(blank=True,null=True)
    pension_end = models.DateField(blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True,null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)

    def __str__(self):
        return f"{self.user.username} - {self.created_at}" 

class Expenses(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="expenses",null=True,blank=True)
    expense = models.CharField(max_length=100,blank=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True,null=True)
    updated_at = models.DateTimeField(auto_now=True,null=True)

    def __str__(self):
        return f"{self.user.username} - {self.created_at}"
