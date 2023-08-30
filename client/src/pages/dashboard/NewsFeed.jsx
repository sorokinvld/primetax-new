import React from 'react';
import RSL from '../../assets/rsl.png'

const NewsFeed = () => {
    return (
        <div className='news-feed'>
            <h1 className='font-bold text-xl mb-4'>News Feed</h1>
            <div className='flex'>
                <img src={RSL} alt="RSL"/>
                <div>
                    <a href='https://venturesafrica.com/apostories/lesotho-revenue-authority-lra-launches-e-customs-tariff/' target='_blank'>Lesotho Revenue Authority (LRA) Launches E-Customs Tariff</a>

                    <p>7 July 2022 - 
                        It reduces delays in obtaining information on goods classification and applicable duties and taxes ...</p>
                    <a href="https://venturesafrica.com/apostories/lesotho-revenue-authority-lra-launches-e-customs-tariff/" target='_blank' className='text-sm'>Read More</a>
                </div>
            </div>
            <br />
            <div className='flex'>
                <img src={RSL} alt="RSL"/>
                <div>
                    <a href='https://lestimes.com/m-pesa-launches-patala-ka-m-pesa/' target='_blank'>M-Pesa launches Patala Ka M-Pesa</a>
                    <p>28 May 2022 - 
                        ...service expected to simplify online purchases Bereng Mpaki/Tsoloane Mohlomi M-PESA users can now make online purchases from their ...</p>
                    <a href="https://lestimes.com/m-pesa-launches-patala-ka-m-pesa/" target='_blank' className='text-sm'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed