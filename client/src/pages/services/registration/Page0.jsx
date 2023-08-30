import React from 'react'

const Page0 = ({handleNext}) => {
    return (
        <div className='p-4 lg:w-1/3' data-aos="zoom-in">
            <div className='h-full bg-white shadow px-8 pt-12 pb-8 rounded-lg overflow-hidden text-center'>
                <h1 className='title-font sm:text-2xl text-xl font-medium text-primary-900 mb-3' data-aos="fade-up" data-aos-duration="700">Individual Taxpayer Registration</h1>
                <p className='mx-auto leading-relaxed text-base text-slate-600' data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">You are about to register as an individual taxpayer with the tax authority. This registration is only for individuals who are not sole traders.
                    Please provide accurate and complete information in this registration. To begin, please press the Register button below.👇</p>
                <br />
                <button className='btn' onClick={handleNext}>Register</button>
            </div>
        </div>
    )
}

export default Page0