import React, { useState } from 'react';
import Card from '../components/Card';
import fold from '../assets/fold.png';
import product from '../assets/product.png';
import run from '../assets/run.png';
import woman from '../assets/woman.png';
import TaxRates from './dashboard/TaxRates';
import NewsFeed from './dashboard/NewsFeed';
import ImportantDates from './dashboard/ImportantDates';
import PayBills from './dashboard/PayBills';

const Dashboard = () => {

    const [selectedId, setSelectedId] = useState(0)

    return (
        <section className=''>
            <div className='container px-10 pt-16 mx-auto'>
                <div className='flex flex-wrap -m-4 justify-between'>
                    <Card index={1} setId={setSelectedId} img={fold} label={"Read more"} title={"News and Updates"} content={"To get the latest information and changes to tax regulations and procedures. Stay informed and up-to-date with tax compliance requirements."} delay={"100"} />
                    <Card index={2} setId={setSelectedId} img={product} label={"View Dates"} title={"Important Dates"} content={"Ensure that you do not miss your filing period. Avoid penalties and ensure that you meet your tax obligations on time."} delay={"300"} />
                    <Card index={3} setId={setSelectedId} img={run} label={"Read more"} title={"Tax Rates"} content={"Know and understand the tax rates that apply to your specific situation and ensure accurate tax filing and payment for the current year."} delay={"500"} />
                    <Card index={4} setId={setSelectedId} img={woman} label={"View Details"} title={"Pay Tax Bill"} content={"For more information on where to pay yor tax bill and the methods of payment convenient to you, follow the link below"} delay={"700"} />
                </div>
            </div>
            <br />
            {selectedId != 0 &&

                <div className='fixed inset-0 bg-gray-900 bg-opacity-50 items-center overflow-auto'>
                    <div id='info' className=' mx-10 bg-white shadow-2xl rounded-md p-10 pb-40'>
                        <div className='text-end'>
                            <button className='right-0 items-end bg-teal-200 rounded-full m-2 p-2' onClick={() => setSelectedId(0)}>X</button>
                        </div>
                        <br />
                        {selectedId == 1 && <NewsFeed />}
                        {selectedId == 2 && <ImportantDates />}
                        {selectedId == 3 && <TaxRates />}
                        {selectedId == 4 && <PayBills />}
                    </div>
                </div>}
            {selectedId == 0 && <div id='info' style={{ display: 'none' }}></div>}
            <br />
        </section>
    )
}

export default Dashboard

