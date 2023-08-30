

const ImportantDates = ({ props }) => {
    return (
        <div className="news flex flex-wrap justify-center">
            <div className="bg-primary-900 w-2/5 h-72 text-white p-10 m-5">
                <h1 className="text-center mb-6 font-bold text-lg">Personal Income Tax</h1>
                <ul>
                    <li className="mb-2">30th September (1st Installment)</li>
                    <li className="mb-2">31st December (2nd Installment)</li>
                    <li className="mb-2">31st March (3rd Installment)</li>
                    <li className="mb-2">30th June (Return & Final Payment)</li>
                </ul>
            </div>
            <div className="bg-primary-900 w-2/5 h-72 text-white p-10 m-5">
                <h1 className="text-center mb-6 font-bold text-lg">Company Income Tax (CIT)</h1>
                <ul>
                    <li className="mb-2">30th September (1st Installment)</li>
                    <li className="mb-2">31st December (2nd Installment)</li>
                    <li className="mb-2">31st March (3rd Installment)</li>
                    <li className="mb-2">30th June (Return & Final Payment)</li>
                </ul>
            </div>
            <div className="bg-primary-900 w-2/5 h-72 text-white p-10 m-5">
                <h1 className="text-center mb-6 font-bold text-lg">Fringe Benefits Tax</h1>
                <ul>
                    <li className="mb-2">30th June - Return & Payment (1st Quarter)</li>
                    <li className="mb-2">30th September - Return & Payment (2nd Quarter)</li>
                    <li className="mb-2">31st December - Return & Payment (3rd Quarter)</li>
                    <li className="mb-2">31st March - Return &  Payment (4th Quarter)</li>

                </ul>
            </div>
            <div className="bg-primary-900 w-2/5 h-72 text-white p-10 m-5">
                <h1 className="text-center mb-6 font-bold text-lg">Pay As You Earn (PAYE)</h1>
                <ul>
                    <li className="mb-2">15th Every Month - Return & Payment Of The Previous Month</li>
                </ul>
            </div>
            <div className="bg-primary-900 w-2/5 h-72 text-white p-10 m-5">
            <h1 className="text-center mb-6 font-bold text-lg">VAT returns for VAT vendors</h1>
            <ul>
                <li className="mb-2">20th Every Month (Return & Paymentof The Previous Month)</li>
            </ul>
            </div>
        </div>
    )
}

export default ImportantDates