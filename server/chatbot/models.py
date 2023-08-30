from django.db import models
from django.contrib.auth.models import User

class Chat(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,null=True)
    question = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now=True,auto_created=True)
