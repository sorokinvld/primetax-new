import React from 'react';
import Image from '../assets/404.svg';

const NotFound = () => {
  return (
    <div className='justify-center flex h-screen'>
      <img className='w-1/3' src={Image} alt="404 error" />
    </div>
  )
}

export default NotFound