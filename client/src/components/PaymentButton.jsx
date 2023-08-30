import React, { useState } from "react";

const PaymentButton = ({ image, steps, delay }) => {
    const [showSteps, setShowSteps] = useState(false);

    const handleClick = () => {
        setShowSteps(!showSteps);
    };

    return (
        <div className="flex flex-col items-center mb-8">
            <button
                className="w-72 bg-cover h-16 bg-white shadow-lg bg-center rounded-lg"
                style={{ backgroundImage: `url(${image})` }}
                onClick={handleClick} data-aos="fade-up" data-aos-delay={delay} data-aos-duration="700"
            ></button>
            {showSteps && (
                <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
                    <h3 className="text-lg font-bold">How to pay with {steps.name}</h3>
                    <ol className="list-decimal list-inside">
                        {steps.list.map((step) => (
                            <li key={step} className="text-sm py-1">
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            )}

        </div>
    );
};

export default PaymentButton