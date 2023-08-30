import React from 'react'

const TaxRates = () => {
    return (
        <div className='tax-rates flex flex-wrap justify-center'>
            <div className='w-2/5 mr-2'>
                <h1 className='font-bold text-lg mb-4'>INCOME TAX</h1>

                <h2 className='font-bold mb-2'>Personal Income Tax (PIT) (Employees and Sole Traders)</h2>

                <p>Two marginal rates are applicable when calculating PIT. 20% and 30%</p>
                <br />

                <h2 className='font-bold mb-2'>Company Income Tax (CIT)</h2>

                <p>For manufacturing companies and commercial farming 10%</p>
                <p>Other companies 25%</p>
                <br />

                <h2 className='font-bold mb-2'>Withholding Tax</h2>

                <p>The applicable rates for WHT are classified as follows:

                    Resident contractors 5%

                    Non-Resident Contractors 10%

                    Non-Residents (Technical services) 7.5% (For RSA only)</p>
            </div>
            <br />
            <div className='w-2/5 ml-2'>
                <h1 className='font-bold mb-2'>Fringe Benefit Tax (FBT)</h1>

                <p> Fringe Benefit Tax is chargeable on taxable amount at the rate of 40%</p>
                <br />
                <h1 className='font-bold text-lg mb-4'>VALUE ADDED TAX (VAT)</h1>

                <p>Rates for VAT are as follows:</p>
                <br />
                <ul >
                    <li>0% - Exports and basic commodities</li>
                    <li> 9% - Electricity</li>
                    <li>12% - Telecommunications</li>
                    <li> 15% - Other goods and services</li>
                </ul>

            </div>
        </div>
    )
}

export default TaxRates