import React from "react";
import PaymentButton from '../../components/PaymentButton';
import mpesa from '../../assets/mpesa.jpg';
import ecocash from '../../assets/ecocash.jpg';
import chaperone from '../../assets/chaperone.jpg';

const MakePayment = () => {
  const paymentProviders = [
    {
      image: mpesa,
      steps: {
        name: "MPesa",
        list: [
          "Open the PayPal app on your phone.",
          "Scan the QR code on the screen.",
          "Confirm the amount and tap Pay.",
        ],
      },
      delay: "100"
    },
    {
      image: chaperone,
      steps: {
        name: "Chaperone",
        list: [
          "Double-click the side button on your iPhone.",
          "Hold your iPhone near the reader with your finger on Touch ID or face on Face ID.",
          "Wait for Done and a checkmark to appear on the screen.",
        ],
      },
      delay: "300"
    },
    {
      image: ecocash,
      steps: {
        name: "Ecocash",
        list: [
          "Open the Venmo app on your phone.",
          "Tap the Scan button and scan the QR code on the screen.",
          "Enter the amount and tap Pay.",
        ],

      },
      delay: "500"
    },


  ];

  return (
    <div className="container mx-auto px-20">
      <div className="bg-white mx-auto p-10">
        <h1 className="text-2xl font-bold mb-8">Choose a payment option</h1>
        <div className="mt-4">
          {paymentProviders.map((provider) => (
            <PaymentButton
              key={provider.image}
              image={provider.image}
              steps={provider.steps}
              delay={provider.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
