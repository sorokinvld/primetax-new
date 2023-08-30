import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";
import cover from '../assets/financial-data-animate.svg';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/login')
    }

    function handleSignUp() {
        navigate('/signup');
    }

    return (
        <div className="bg-[#edf7f6]">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="PrimeTax logo"
                        className="w-12 h-12 mr-4 mb-2"
                    />
                    <h1 className="text-xl font-bold text-[#23595A]">PrimeTax</h1>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-gray-700 hover:text-3aafa9 transition duration-300 ease-in-out">
                        Home
                    </a>
                    <a href="#" className="text-gray-700 hover:text-3aafa9 transition duration-300 ease-in-out">
                        Features
                    </a>
                    <a href="#" className="text-gray-700 hover:text-3aafa9 transition duration-300 ease-in-out">
                        Contact
                    </a>
                    <button onClick={handleLogin} className="bg-primary-800 text-white py-2 px-4 rounded-full shadow-lg  hover:bg-primary-900 hover:scale-[1.1] transition duration-500 ease-in-out">
                        Login
                    </button>
                </div>
                <div className="md:hidden flex items-center">
                    <FaBars className="text-gray-700 text-xl" />
                </div>
            </div>
            <div className="relative">
                {/* <div className="h-32 w-32 bg-gradient-to-br from-primary-900/20 to-primary-500 rounded-full absolute top-0 left-20" data-aos="zoom-in" data-aos-duration="1000"></div> */}
                <div className="container mx-auto px-4 flex items-start mt-16 absolute z-10">
                    <div className="items-center text-center flex flex-col w-1/2">
                        <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-[#00ffff] mb-10" data-aos='fade-up' data-aos-duration="700">
                            The <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary-700 relative inline-block m-2" data-aos-delay="200" data-aos='fade-up' data-aos-duration="700">
                                <span className="relative text-white">Ultimate</span>
                            </span>online tax filing system
                        </h2>
                        <p className="px-4 text-gray-600" data-aos='fade-up' data-aos-duration="700" data-aos-delay="200"> Forget about the hassle and confusion of doing your taxes by yourself. Our smart and automated service will do all the work for you in minutes, with guaranteed accuracy and security.</p>
                        <br />
                        <div data-aos='zoom-in' data-aos-duration="700" data-aos-delay="400">
                            <button onClick={handleSignUp} className="bg-primary-900 mb-10 text-white py-3 px-6 rounded-full shadow-lg  hover:bg-primary-900 hover:scale-[1.1] transition duration-500 ease-in-out" >
                                Get started for free
                            </button>
                        </div>
                    </div>
                    <br />
                    <div className="w-1/2" data-aos='zoom-in' data-aos-duration="700" >
                        <img
                            src={cover}
                            alt="Online filing"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
