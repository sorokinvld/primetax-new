import React from 'react'

const TaxExemption = () => {
  return (
    <div className='w-full items-center justify-center flex' data-aos='zoom-in'>
      <div className='w-2/3 bg-white p-10 flex flex-col items-center justify-center text-center text-gray-900'>
        <p className='text-start text-sm' data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">Sec 47 of the VAT Act 2001 provides instances where VAT exemption may be granted. These categories include Public
          International Orgnaisations as listed in Schedule 1 of the Act, contractors engaged in aid projects and certain organisations
          to the extent that they provide charitable activities. “Charitable activities” is defined as ‘….. provision of food, meals, board,
          and or lodging or other necessities, comforts, or amenities to any person whom the Commissioner General is satisfied are in
          need. This therefore means that in order for the exemption to apply, the qualifying organisation should be providing charitable
          activities for a nature listed in the definition above and these should be provided to persons who lack the basic necessities of life.</p>
        <br />
        <div className='text-start' data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
          <p className='text-md font-bold'>Individual</p>
          <p className='mb-2 text-sm'>Apply in writing to Commissioner Core Operations and attach copies of pro-forma Invoices of goods to be exempted
          </p>
          <p className='text-md font-bold'>Charitable Organisation</p>
          <p className='mb-2 text-sm'>
            Apply in writing to Commissioner Core Operations and attach copies of the constitution of the charitable organization
            and pro-forma invoices of goods to be exempted

          </p>
        </div>
        <br />
        <p className='text-sm font-bold text-primary-900' data-aos="fade-up" data-aos-duration="700" data-aos-delay="600">N.B: Application must be made prior to importation of goods.</p>

      </div>
    </div>
  )
}

export default TaxExemption