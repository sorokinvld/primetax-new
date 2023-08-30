from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events
from django.utils import timezone
from django_apscheduler.models import DjangoJobExecution
import sys
from django.core.mail import send_mail


def send_an_email_reminder():
    subject = 'Tax return reminder!'
    message = f'Hello {global_instance.user.username}, please remember to file for a tax return soon!.'
    from_email = 'info@PrimeTax.com'
    to_email = [global_instance.user.email]

    send_mail(subject, message, from_email, to_email)


def start(instance):
    global global_instance

    try:
        global_instance = instance
        scheduler = BackgroundScheduler()
        scheduler.add_jobstore(DjangoJobStore(), "default")
        scheduler.add_job(send_an_email_reminder, 'interval', minutes=2, id=instance.user.username,
                          name='file_for_tax_return', jobstore='default', replace_existing=True)
        register_events(scheduler)
        scheduler.start()
        print("Scheduler started...", file=sys.stdout)
    except Exception as e:
        print(e)
