from django.db.models.signals import post_save
from django.contrib.auth.models import User
from users.models import UserProfile
from django.core.mail import send_mail


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
        print("CREATED USER ACCOUNT")
        subject = 'Welcome to our site'
        message = f'Hello {instance.username}, thank you for signing up. Here is some additional information for you...'
        from_email = 'info@PrimeTax.com'
        to_email = [instance.email]

        send_mail(subject, message, from_email, to_email)

post_save.connect(create_user_profile, sender=User)


