import React, { useState } from 'react';
import AlertDialog from '../../../components/AlertDialog';
import { useNavigate } from 'react-router-dom';

const Page = ({ user, handleNext }) => {

    const navigate = useNavigate();

    const handleClickNext = () => {
        if (user.is_registered) {
            handleNext();
        }
        else {
            handleClickOpen("You have not yet completed the registration, please continue to register")
        }
    }

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')

    const handleClickOpen = (message) => {
        setOpen(true);
        setMessage(message);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/app/services/registration')
    };

    return (
        <div className='p-4 lg:w-1/3' data-aos="zoom-in">
            <div className='h-full bg-white shadow px-8 pt-12 pb-8 rounded-lg overflow-hidden text-center'>
                <h1 className='title-font sm:text-2xl text-xl font-medium text-primary-900 mb-3' data-aos="fade-up" data-aos-duration="700"> Individual Income Tax Return</h1>
                <p className='mx-auto leading-relaxed text-base text-slate-600' data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">If you are a resident individual who has income from employment,
                    pension or other sources, you can use this system to file your tax return online. It’s easy, fast and secure. To get started, click on the button below.</p>
                <br />
                <button className='btn' onClick={handleClickNext}>Begin filing</button>
            </div>
            <AlertDialog open={open} handleClose={handleClose} message={message} />
        </div>
    )
}

export default Page