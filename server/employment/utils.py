from pdf2image import convert_from_path
import pytesseract
import cv2
import requests

def extract_text_from_document(document):
    images = convert_from_path(document.path)
    extracted_text = ""

    for i, image in enumerate(images):
        image_path = f'page{i}.jpg'
        enhanced_path = f'enhanced{i}.jpg'

        image.save(image_path, 'JPEG')
        img = cv2.imread(image_path)
        blur = cv2.GaussianBlur(img, (3, 3), 0)
        cv2.imwrite(enhanced_path, blur)

        text = pytesseract.image_to_string(enhanced_path)
        lines = text.split("\n")

        extracted_text += "\n".join(lines)

    return extracted_text


def analyse(file):
    text = str(extract_text_from_document(pdf_path=file))

    prompt = """Can you analyse the following P16 tax pdf data and present it in a readable format.
            The extracted data may not be accurate, for example an 8 might extracted as $ or 0, 
            choose whichever makes sense. If a document seems like it's not a p16, return a json that says so.
            Do not write anything else outside the curly brases, just write the data in this format:
            {
                "Employee Information": {
                "Name": employee_name,
                "Address": employee_address,
                "Marital Status": employee_marital_status,
                "Income Tax File No": employee_income_tax_file_no
                },
                "Employer Information": {
                "Name": employer_name,
                "Address": employer_address
                },
                "Income and Deductions": {
                "Gross Salary": gross_salary,
                "Current Contributions to Approved Pension Fund": current_contributions_to_approved_pension_fund,
                "5% Compulsory Savings": five_percent_compulsory_savings,
                "Medical Aid Subscriptions": medical_aid_subscriptions,
                "Taxable Income": taxable_income,
                "Income Tax Occupied": income_tax_occupied
                },
                "Totals": {
                "Gross Salary": gross_salary_total,
                "Deductions": deductions_total,
                "Net Income": net_income_total
                }.
                The pdf text is """ + text

    url = "https://openai80.p.rapidapi.com/chat/completions"

    payload = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ]
    }
    headers = {
        "content-type": "application/json",
        "X-RapidAPI-Key": "d029daee8dmshb6dacbcbea43658p1d3509jsn461b056b6e56",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com"
    }

    response = requests.post(url, json=payload, headers=headers)

    return(response.json()["choices"][0]["message"]["content"])


