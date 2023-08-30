import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';

const Services = () => {
  return (
    <section className="text-center w-full">
      <nav className="bg-white sticky shadow-md top-0 z-10" data-aos="fade-down" data-aos-duration="700">
        <ul id='nav2' className="nav2">
          <li className='register'><NavLink to='registration'>Registration</NavLink></li>
          <li className='payment'><NavLink to='payment-reference'>Payment Reference</NavLink></li>
          <li className='calculator'><NavLink to='tax-computation'>Tax Computation</NavLink></li>
          <li className='support'><NavLink to='questions&support'>Questions and Support</NavLink></li>
        </ul>
      </nav>
      <div className="overflow-auto" data-aos="zoom-in">
        <Outlet/>
      </div>
    </section>

  )
}

export default Services