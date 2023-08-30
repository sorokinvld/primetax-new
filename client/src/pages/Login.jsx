import React, { useState } from 'react';
import axios from 'axios';
import done from '../assets/done-animate.svg';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import AlertDialog from '../components/AlertDialog';
import Spinner from '../components/Spinner';
import instance from '../interceptors/axios';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault();
        setLoading(true)

        const userData = JSON.stringify({
            email: data.email,
            password: data.password,
        });
        

        axios({
            method: 'POST',
            url: 'http://localhost:8000/api/auth/login/',
            headers: {
                'Content-Type': 'application/json',
            },
            data: userData,            
        })
            .then(res => {
                const token = res.data.key;
                setLoading(false)
                localStorage.setItem('token', token)
                instance.defaults.headers.common['Authorization'] = `Token ${token}`;

                navigate('/app/dashboard')
            })
            .catch(err => {
                console.log(err);
                handleClickOpen(err.response.data.non_field_errors ? err.response.data.non_field_errors[0] : (err.response.data.email[0] || err.response.data.username[0] || "An unknown error occurred"))
                setLoading(false)
            });
    };

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')

    const handleClickOpen = (message) => {
        setOpen(true);
        setMessage(message);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/login')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section className="flex overflow-hidden">
                <div className='w-1/2 h-screen items-center flex p-5' data-aos="zoom-in">
                    <img src={done} className='w-full' alt="" />
                </div>
                <div className='w-1/2' data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-primary-900 md:text-2xl">
                                    Sign in to your account
                                </h1>
                                <div className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email or Username</label>
                                        <input type="email" name="email" id="email" {...register("email", { required: "An email is required" })} placeholder="name@example.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        {errors.email && <span className='error'>{errors.email.message}</span>} {/* use error message from register */}
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" {...register("password", { required: "Password is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        {errors.password && <span className='error'>{errors.password.message}</span>} {/* use error message from register */}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 ">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-900 hover:underline">Forgot password?</a>
                                    </div>
                                    {loading ?
                                        <Spinner />
                                        : <button type="submit" className="w-full text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                    }

                                    <p className="text-sm font-light text-gray-500">
                                        Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-800 hover:underline">Sign up</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AlertDialog open={open} handleClose={handleClose} message={message} />
        </form>

    )
}

export default Login
