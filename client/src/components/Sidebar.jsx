import React, { useEffect, useState } from 'react';
import person from '../assets/person.jpg';
import { NavLink, useNavigate } from "react-router-dom";
import axios from '../interceptors/axios';

const Sidebar = ({ visible }) => {
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    
    function handleNavigation(){
        navigate('edit-profile')
    }

    useEffect(()=>{
        axios.get('/auth/user/')
        .then((response) => {
            setUser(response.data)
        })
        .catch((error) => {
            console.error(error);
        });
    },[])

    return (
        <div className={`w-48 bg-[#2B7A78] h-screen ${visible ? "hidden" : ""} `}>
            <div className="flex flex-col items-center px-4 pt-4 pb-8 border-y border-white/10">
                <img src={person} alt="Profile" className="h-16 w-16 bg-white p-2 rounded-full" />
                <span className="text-white mt-2 text-sm">{user.username }</span>
                <button onClick={handleNavigation} className="text-white text-xs py-2 px-4 border rounded mt-4 hover:text-primary-900 hover:bg-white"><i
                    className="fas fa-edit"></i> Edit Profile</button>  </div>
            <nav id='sidebar' className="px-2 py-4 space-y-2">
                <NavLink to='dashboard' className='sidebar-item'>
                    <i className="fa fa-home mr-3"></i>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to='calendar' className='sidebar-item'>
                    <i className="fa fa-calendar mr-3"></i>
                    <span>Calendar</span>
                </NavLink>
                <NavLink to='nofications' className='sidebar-item'>
                    <i className="fa fa-bell mr-3"></i>
                    <span>Notifications</span>

                </NavLink>
                <NavLink to='help' className='sidebar-item'>
                    <i className="fa fa-question-circle mr-3"></i>
                    <span>Help</span>
                </NavLink>
            </nav>
        </div>

    )
}

export default Sidebar