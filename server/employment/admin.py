from django.contrib import admin
from .models import EmploymentDetails, PensionDetails, Expenses

admin.site.register(EmploymentDetails)
admin.site.register(PensionDetails)
admin.site.register(Expenses)
