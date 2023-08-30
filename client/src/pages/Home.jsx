import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import axios from '../interceptors/axios';
import { useNavigate } from 'react-router-dom';
import Joyride, { STATUS, ACTIONS, EVENTS } from 'react-joyride';

const Home = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const navigate = useNavigate();
    const [user, setUser] = useState('')

    const handleToggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const [run, setRun] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);

    const steps = [
        {
            target: '.logo',
            content: 'Welcome to PrimeTax tax filing system',
            disableBeacon: true
        },
        {
            target: '.services',
            content: 'This is our services bar. Here you can find different options to help you with your tax needs.',
        },
        {
            target: '.register',
            content: 'You can register for an account to access your tax information and manage your payments.',
        },
        {
            target: '.payment',
            content: 'You can get payment options to choose the best way to pay your taxes or get a refund.',
        },
        {
            target: '.calculator',
            content: 'You can calculate your tax liability to estimate how much tax you owe or how much refund you can get.',
        },
        {
            target: '.support',
            content: 'You can ask questions about this system to get help from our support team or find answers in our FAQ section.',
        },
        {
            target: '.individuals',
            content: 'This is our individuals bar. Here you can find different options to help you with your personal tax matters.',
        },
        {
            target: '.file',
            content: 'You can file your tax return online using our simple and secure system. You will need your income and deduction details to complete the process.',
        },
        {
            target: '.refund',
            content: 'You can apply for a tax refund if you overpaid your taxes during the year. You will need to provide your bank account details and proof of payment to receive the refund.',
        },
        {
            target: '.exemption',
            content: 'You can apply for a tax exemption if you qualify for any of the special categories, such as senior citizen, disabled person, or low-income earner. You will need to provide your personal and income information and supporting documents to prove your eligibility.',
        },
        {
            target: '.payment',
            content: 'You can make a payment if you owe any taxes to the government. You can choose from various payment methods, such as credit card, bank transfer, or cash. You will need to provide your payment reference number and amount to complete the transaction.',
        },

    ];


    useEffect(() => {
        axios.get('/auth/user/')
            .then((response) => {
                const pk = response.data.pk
                axios.get(`/users/${pk}/`)
                    .then((response) => {
                        setUser(response.data)
                        if(response.data.is_new)
                        {
                            setRun(true)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    const handleJoyrideCallback = async (data) => {
        const { action, index, status, type } = data;
        if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
            const newIndex = index + (action === ACTIONS.PREV ? -1 : 1);

            const formData = new FormData()

            formData.append("is_new",false)

            axios.put(`/users/${user.user}/`, formData)
                .then((response)=>{
                    console.log(response.data)
                })
                .catch((error)=>{
                    console.log(error)
                })

            if (newIndex === 2) {
                navigate('services/registration');
                setStepIndex(newIndex);
            } else if (newIndex === 7) {
                navigate('individuals/tax-return');
                setStepIndex(newIndex);
            } else {
                setStepIndex(newIndex);
            }
        } else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            navigate('dashboard');
            setRun(false);
        }
    };


    return (
        <div>
            <Joyride
                steps={steps}
                run={run}
                continuous={true}
                showProgress={true}
                showSkipButton={true}
                stepIndex={stepIndex}
                callback={handleJoyrideCallback}
                styles={{
                    options: {
                        primaryColor: '#f04',
                        zIndex: 1000,
                    },
                }}
                disableCloseOnEsc={true}
                disableOverlayClose={true}
            />

            <div className='flex flex-col h-screen overflow-hidden'>
                <Navbar onToggleSidebar={handleToggleSidebar} />
                <div className='flex-1 flex overflow-hidden'>
                    <Sidebar visible={sidebarVisible} />
                    <div className='flex-1 overflow-auto'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );

};


export default Home