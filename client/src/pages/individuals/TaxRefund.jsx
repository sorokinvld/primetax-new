import React from 'react'

const TaxRefund = () => {
  return (
    <div className='w-full items-center justify-center flex' data-aos='zoom-in'>
      <div className='w-2/3 bg-white p-10 flex flex-col items-center justify-center text-start text-gray-900'>
        <p className='mb-3 text-sm' data-aos='fade-up' data-aos-duration="700" data-aos-delay="300">
          <h1 className='font-bold mb-2 text-primary-900'>What is a Tax Refund?</h1>

          A tax refund is a sum of money that a person receives from the government if they paid more in taxes than they were required
          to for a particular tax year. This typically occurs when a person has overpaid on their taxes, and they are entitled to a refund of
          the excess amount. The refund is issued by the government's tax agency, subject to certain conditions being met by the taxpayer.
        </p>
        <p className='mb-3 text-sm' data-aos='fade-up' data-aos-duration="700" data-aos-delay="500">
          <h1 className='font-bold mb-2 text-primary-900'>
            Who is entitled to tax refund?
          </h1>
          There are different types of individuals and entities that may qualify for a tax refund. These include individual taxpayers,
          businesses, temporary importers and exporters, diplomats and diplomatic missions, tax-exempt organizations such as
          non-governmental organizations (NGOs) and public international organizations, as well as non-residents. Depending on the
          specific circumstances of each case and the tax laws in the relevant jurisdiction, these parties may be entitled to a refund of
          taxes paid.
        </p>
        <p className='mb-3 text-sm' data-aos='fade-up' data-aos-duration="700" data-aos-delay="700">
          <h1 className='font-bold mb-2 text-primary-900'>
            How does a Taxpayer apply for a tax refund?
          </h1>
          If a taxpayer wants to apply for a tax refund, they need to submit a written application to the Commissioner Core Operations,
          as long as they are a registered client. Once the application is received, a tax audit will be conducted to verify the tax refund claim
          before it can be processed. The tax audit will typically take up to three months, depending on the complexity of the case. Once
          the audit is completed, the Revenue Services Lesotho (RSL) will process the tax refund within twelve working days.

          For those seeking a refund claim for provisional tax on temporary importation, they must also submit a written application
          addressed to the Commissioner Core Operations, along with original receipts, a memo issued by Customs Border Officials,
          and SAD 500 CN1 and CN2 forms issued upon entry, as well as declaration documents upon re-export. By submitting these
          documents, the importer can claim a tax refund on the temporary importation.
        </p>
      </div>
    </div>

  )
}

export default TaxRefund