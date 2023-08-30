import React from 'react';
import Verify from '../assets/verified-animate.svg';
import { Link, useNavigate, useParams } from "react-router-dom";

const EmailVerification = () => {
  // const { verificationCode } = useParams();

  // console.log("TOKEN: ")
  // console.log(verificationCode);
  return (
    <div className='h-screen justify-center flex flex-col items-center'>
        <img className='w-1/4' src={Verify} alt="Email verified" data-aos="zoom-in" data-aos-duration="700"/>
        <br />
        <p data-aos="fade-up" data-aos-duration="700">Your email is successfully verified, login <a href='/login' className='underline text-primary-800'>here</a> </p>
    </div>
  )
}

export default EmailVerification
