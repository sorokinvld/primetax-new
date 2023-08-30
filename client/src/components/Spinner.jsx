import React from 'react'
import loadingImage from '../assets/loading.svg';


const Spinner = () => {
    return (
        <div className='flex justify-center'><img src={loadingImage} alt="" className='text-center h-12 w-12 rounded-full' /></div>
    )
}

export default Spinner