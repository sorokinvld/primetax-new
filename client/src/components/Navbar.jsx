import React from 'react';
import logo from '../assets/logo.png';
import { NavLink, useNavigate } from "react-router-dom";
import instance from '../interceptors/axios';

const Navbar = ({ onToggleSidebar }) => {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.removeItem('token');
        delete instance.defaults.headers.common['Authorization'];
        navigate('/')
    }

    return (
        <div className="flex items-center justify-between bg-primary-900 shadow-md px-6 w-full">
            <a className="flex title-font font-medium items-center justify-start text-gray-900 mb-4 md:mb-0 h-14 w-24">
                <button onClick={onToggleSidebar}><i className="fa-solid fa-bars text-white mr-2" /></button>
                <img src={logo} className='logo mx-4 h-10 w-10 mb-2' alt="PrimeTax logo" />
                <span className="text-xl text-[#FEFFFF]">PrimeTax</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-sm justify-center text-[#FEFFFF]">
                <NavLink to="services/registration" className="services mr-10 hover:font-bold">Services</NavLink>
                <NavLink to="individuals/tax-return" className="individuals mr-10 hover:font-bold">Individuals</NavLink>
                <NavLink to="act&laws" className="actslaws mr-10 hover:font-bold">Acts & Laws</NavLink>
            </nav>
            <button onClick={handleLogout}
                className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 text-primary-900 text-sm rounded-full mt-4 md:mt-0">Log
                out
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    )
}

export default Navbar