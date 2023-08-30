from django.db import models
from django.contrib.auth.models import User

class TaxFiling(models.Model):
    filing_date = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.filing_date}"
