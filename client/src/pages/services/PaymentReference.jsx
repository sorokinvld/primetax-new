import React, { useState } from "react";
import useBankDetails from "../../hooks/useBankDetails"; // A custom hook to get the bank details
import RadioButton from "../../components/RadioButton"; // A custom component to render a radio button
import Table from "../../components/Table"; // A custom component to render a table

const PaymentReference = () => {
  // Use the custom hook to get the bank details
  const bankDetails = useBankDetails();

  // Create a state variable to store the selected bank account value
  // Initialize it with a valid value that matches one of the keys in the bankDetails object
  const [selectedValue, setSelectedValue] = useState(
    "standard-lesotho-bank-income-tax-income"
  );

  // Create a function to handle the radio button change
  function handleChange(event) {
    // Update the selectedValue state variable with the value of the clicked radio button
    setSelectedValue(event.target.value);
  }

  // Create a map object to store the bank account names and their corresponding values
  const bankAccounts = new Map([
    [
      "STANDARD LESOTHO BANK (Income Tax Income)",
      "standard-lesotho-bank-income-tax-income",
    ],
    [
      "STANDARD LESOTHO BANK (Value Added Tax Account)",
      "standard-lesotho-bank-value-added-tax-account",
    ],
    [
      "STANDARD LESOTHO BANK (Toll Fees Account)",
      "standard-lesotho-bank-toll-fees-account",
    ],
    ["NETBANK LESOTHO (Income Tax Income)", "netbank-lesotho-income-tax-income"],
    [
      "NETBANK LESOTHO (Value Added Tax Account)",
      "netbank-lesotho-value-added-tax-account",
    ],
    ["FIRST NATIONAL BANK (Income Tax Income)", "first-national-bank-income-tax-income"],
    [
      "FIRST NATIONAL BANK (Value Added Tax (VAT) Account)",
      "first-national-bank-value-added-tax-vat-account",
    ],
  ]);

  // Create an array of headings for the table
  const headings = [
    "Account name",
    "Account No",
    "Account type",
    "Branch name",
    "Branch code",
  ];

  return (
    <div className="w-full items-center justify-center flex p-10" data-aos="zoom-in">
      <div className=" bg-white p-10 flex flex-col items-center justify-center text-center text-gray-900">
        <p className="text-sm">
          The Client is advised to carefully note the RSL banking details
          provided below and to ensure that a correct account is used when a
          payment is made:
        </p>

        <div className="mb-4 mt-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            {bankDetails[selectedValue] && (
              <Table
                data={bankDetails[selectedValue]}
                headings={headings}
                className="border border-gray-300 w-full text-left"
                headClassName="bg-gray-100 text-primary-900"
                rowClassName="border-b border-gray-300"
                cellClassName="p-2"
              />
            )}
          </div>

        <div className="container mx-auto p-4" data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
          <h1 className="text-xl font-bold text-primary-900">Select an account</h1>
          <form className="mt-4">
            <div className="flex flex-col space-y-2">
              {[...bankAccounts].map(([name, value]) => (
                <RadioButton
                  key={value}
                  name="bank-account"
                  value={value}
                  label={name}
                  checked={selectedValue === value}
                  onChange={handleChange}
                />
              ))}
            </div>
          </form>

          
        </div>
      </div>
    </div>
  );
};

export default PaymentReference;
