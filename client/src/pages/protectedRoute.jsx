import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Verify from '../assets/403.svg';
import Spinner from '../components/Spinner';
import axios from '../interceptors/axios';

const ProtectedRoute = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/auth/user/')
      .then((response) => {
        setEmail(response.data.email)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (email) {
      setLoading(false);
    }
  }, [email]);

  if (loading) {
    console.log("loading...")
    return (
      <div className='flex flex-col h-screen justify-center items-center'>
        <Spinner />
      </div>
    )
  } else {
    if (!email) {
      return (
        <div className='h-screen justify-center flex flex-col items-center'>
          <img className='w-1/4' src={Verify} alt="Email verified" data-aos="zoom-in" data-aos-duration="700" />
          <br />
          <p data-aos="fade-up" data-aos-duration="700">You are not authorized to view this page, login <a href='/login' className='underline text-primary-800'>here</a> </p>
        </div>
      )
    }

    return <Outlet />
  }



}
export default ProtectedRoute