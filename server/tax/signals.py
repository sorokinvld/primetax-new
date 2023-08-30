from django.db.models.signals import post_save
from django.core.mail import send_mail
from .models import TaxFiling
from .scheduler import start

def send_email_on_tax_filing(sender, instance, created, **kwargs):
    if created:
        subject = 'Tax return filed successfully'
        message = f'Hello {instance.user.username}, you have succesfully filed for tax return.'
        from_email = 'info@PrimeTax.com'
        to_email = [instance.user.email]

        send_mail(subject, message, from_email, to_email)
        start(instance)

post_save.connect(send_email_on_tax_filing, sender=TaxFiling)
