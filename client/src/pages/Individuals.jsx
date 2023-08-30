import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Individuals = () => {
  return (
    <section className="text-center w-full">
      <nav className="bg-white sticky shadow-md top-0 z-10" data-aos="fade-down" data-aos-duration="700">
        <ul id='nav2' className="nav2">
          <li className='file'><NavLink to='tax-return' >File for Tax Return</NavLink></li>
          <li className='refund'><NavLink to='tax-refund'>Apply for Tax Refund</NavLink></li>
          <li className='exemption'><NavLink to='tax-exemption'>Apply for Tax Exemption</NavLink></li>
          <li className='payment'><NavLink to='payment'>Make Payment</NavLink></li>
        </ul>
      </nav>
      <div className="overflow-auto" data-aos="zoom-in">
        <Outlet />
      </div>
    </section>
  )
}

export default Individuals