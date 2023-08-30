from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ChatSerializer
from .models import Chat
from rest_framework import status
import requests

prompt = """Act as a chatbot for PrimeTax website. I will ask a question related to tax and you will use the website https://www.rsl.org.ls/
            to find the answer.DO NOT REPLY TO QUESTIONS UNRELATED TO TAX, simply say, "I cannot reply to questions unrelated to tax or this website". If the requested information is not avaiable,
            simply state that information is not avaiable on this website or RSL website, and then give me an answer based on
            from another source and give the link to the source. Apply text formatting for ReactMarkdown.
            For questions related to this website, here is some info:
            {
                link: 'services',
                description: 'This is our services bar.',
            },
            {
                link: 'services/register',
                description: 'You can register for an account to access your tax information and manage your payments.',
            },
            {
                link: 'services/payment',
                description: 'You can get payment options to choose the best way to pay your taxes or get a refund.',
            },
            {
                link: 'services/calculator',
                description: 'You can calculate your tax liability to estimate how much tax you owe or how much refund you can get.',
            },
            {
                link: 'individuals',
                description: 'This is our individuals bar. Here you can find different options to help you with your personal tax matters.',
            },
            {
                link: 'individuals/file',
                description: 'You can file your tax return online using our simple and secure system. You will need your income and deduction details to complete the process.',
            },
            {
                link: 'individuals/refund',
                description: 'You can apply for a tax refund if you overpaid your taxes during the year. You will need to provide your bank account details and proof of payment to receive the refund.',
            },
            {
                link: 'individuals/exemption',
                description: 'You can apply for a tax exemption if you qualify for any of the special categories, such as senior citizen, disabled person, or low-income earner. You will need to provide your personal and income information and supporting documents to prove your eligibility.',
            },
            {
                link: 'individuals/payment',
                description: 'You can make a payment if you owe any taxes to the government. You can choose from various payment methods, such as credit card, bank transfer, or cash. You will need to provide your payment reference number and amount to complete the transaction.',
            },
            
            " My question is: """


@api_view(['GET', 'POST'])
def chat(request):

    if request.method == 'GET':
        chat = Chat.objects.all()
        serializer = ChatSerializer(chat, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ChatSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            print("Thinking...")

            url = "https://openai80.p.rapidapi.com/chat/completions"

            payload = {
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt+request.data.get("question")
                    }
                ]
            }
            headers = {
                "content-type": "application/json",
                "X-RapidAPI-Key": "d029daee8dmshb6dacbcbea43658p1d3509jsn461b056b6e56",
                "X-RapidAPI-Host": "openai80.p.rapidapi.com"
            }

            try:
                response = requests.post(url, json=payload, headers=headers)
                message = response.json()["choices"][0]["message"]["content"]
            except:
                message = "An error occured, please try again later"

            answer = {"answer": message}

            return Response(answer, status=status.HTTP_201_CREATED)

        return Response(serializer.errors)
