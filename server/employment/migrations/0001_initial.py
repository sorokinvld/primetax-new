# Generated by Django 3.2.12 on 2023-06-12 10:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import employment.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='PensionDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pension_payer', models.CharField(blank=True, max_length=100)),
                ('pension_payer_tin', models.CharField(blank=True, max_length=20)),
                ('pension_start', models.DateField(blank=True, null=True)),
                ('pension_end', models.DateField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pension_details', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Expenses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expense', models.CharField(blank=True, max_length=100)),
                ('amount', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='expenses', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='EmploymentDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employer_name', models.CharField(blank=True, max_length=100)),
                ('activity', models.CharField(blank=True, max_length=100)),
                ('employer_tin', models.CharField(blank=True, max_length=20)),
                ('employed_from', models.DateField(blank=True, null=True)),
                ('employed_until', models.DateField(blank=True, null=True)),
                ('unemployed_from', models.DateField(blank=True, null=True)),
                ('unemployed_until', models.DateField(blank=True, null=True)),
                ('gross_income', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('p16_form', models.FileField(blank=True, null=True, upload_to=employment.models.upload_to)),
                ('employer_address', models.TextField(blank=True, null=True)),
                ('gross_salary', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('current_contributions_to_approved_pension_fund', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('five_percent_compulsory_savings', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('medical_aid_subscriptions', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('taxable_income', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('income_tax_occupied', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('gross_salary_total', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('deductions_total', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('net_income_total', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('updated_at', models.DateTimeField(auto_now=True, null=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='employment_details', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
