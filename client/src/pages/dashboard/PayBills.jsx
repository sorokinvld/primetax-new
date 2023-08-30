import React from 'react'

const PayBills = () => {
    return (
        <div className='paybills'>
            <h1 className='font-bold text-lg mb-4'>Pay Your Tax Bills</h1>
            <div className='flex'>
                <div className='container mr-4'>
                    <h2>The Client can make a payment of tax due at the following places:</h2>
                    <ul>
                        <li>RSL Banking Hall Maseru</li>
                        <li>First National Bank</li>
                        <li>Nedbank</li>
                        <li>Standard Lesotho Bank</li>
                        <li>Lesotho Post Bank (VAT Only)</li>
                    </ul>
                </div>
                <div className='container'>

                    <h2> The Client can pay tax due using the following methods of payment:</h2>
                    <ul>
                        <li> Cash</li>
                        <li>point of Sale (POS)</li>
                        <li>Bank Deposit</li>
                        <li>Electronic funds Transfer (EFT)</li>
                    </ul>
                </div>
            </div>
            <br />
            <div>
                <h2>Methods of Payment:</h2>

                <h3>Cash Payment</h3>

                Cash payment can be made at the commercial banks and at RSL banking Hall in Maseru only. No cash payment shall be made at RSL Digital Service Centres.

                <h3> Direct (Bank) Deposit</h3>

                The direct or bank deposit can be made at the above mentioned commercial banks only.

                <h3>Debit Card (Local banks only- standard bank debit cards)</h3>

                Currently RSL accept payments made by Standard Lesotho Bank debit card. Credit cards are not acceptable.

                <h3>Electronic funds Transfer (EFT)</h3>

                This is a widely acceptable means of payment, however when using this method of payment the Client must ensure that the correct account and tax type account (correct referencing) is made.

                Importantly, on making a tax payment, the Client shall be issued with a proof of payment (e.g receipt) by the relevant authorities. It is the responsibility of the Client to ensure that a proof of payment is obtained.

                <br />
                <br />
                <br />

                <div className='w-full flex justify-center'>
                    <button className='bg-primary-800 py-4 px-8 rounded-full text-white' onClick={window.open('/app/')}>
                        Payment references
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PayBills