import React, {useEffect, useState } from 'react';
import Page0 from './registration/Page0';
import Page1 from './registration/Page1';
import Page2 from './registration/Page2';
import Page3 from './registration/Page3';
import Page4 from './registration/Page4';
import Page5 from './registration/Page5';
import Page6 from './registration/Page6';
import Page7 from './registration/Page7';
import Page8 from './registration/Page8';
import Page9 from './registration/Page9';
import Page10 from './registration/Page10';
import Page11 from './registration/Page11';
import axios from '../../interceptors/axios';
import IdentityCheckbox from './registration/IdentityCheckBox';


const Registration = () => {
    const [page, setPage] = useState(0);
    const [user, setUser] = useState('');
    const [pk , setPk] = useState(0);

    useEffect(() => {
        axios.get('/auth/user/')
            .then((response) => {
                setPk(response.data.pk)
                axios.get(`/users/${response.data.pk}`)
                    .then((response) => {
                        console.log(response.data)
                        setUser(response.data)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    const handleNext = () => {
        setPage(page + 1)
    }

    return (
        <div className='container px-5 py-6 mx-auto'>
            <div className='container flex flex-wrap justify-center'>
                {page === 0 && <Page0 handleNext={handleNext} />}
                {page === 1 && <Page1 pk={pk} user ={user} handleNext={handleNext} />}
                {page === 2 && <Page2 pk={pk} user ={user} handleNext={handleNext} />}
                {page === 3 && <IdentityCheckbox pk={pk} user ={user} handleNext={handleNext} />}
                {page === 4 && <Page6 pk={pk} user ={user} handleNext={handleNext} />}
                {page === 5 && <Page7 pk={pk} user ={user} handleNext={handleNext} />}
                {page === 6 && <Page8 pk={pk} user ={user} handleNext={handleNext} />}
                {page === 7 && <Page9 pk={pk} user ={user} handleNext={handleNext} />}
                {page === 8 && <Page10 pk={pk} user ={user} handleNext={handleNext} />}
                {page === 9 && <Page11 pk={pk} user ={user} handleNext={handleNext} />} 
            </div>
        </div>
    )
}

export default Registration