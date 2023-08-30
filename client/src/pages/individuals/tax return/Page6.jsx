import React, { useEffect } from 'react';
import axios from '../../../interceptors/axios';

const Page6 = ({ pk, user }) => {

    useEffect(()=>{

        const formData = new FormData();
        formData.append("user", pk)

        axios.post("/tax/", formData).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error)
        })
    },[])

    return (
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
            <div className="card" data-aos="zoom-in">
                <div className="card-header">
                    <h4>Success</h4>

                </div>
                <div className='card-body'>
                    <p>Dear {user.title} {user.last_name}, you have successfully applied for tax return</p>
                </div>
            </div>
        </div>
    )
}

export default Page6