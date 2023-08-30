import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Document from '../assets/online-document-animate.svg';
import { Link } from "react-router-dom";
import AlertDialog from "../components/AlertDialog";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Spinner from "../components/Spinner";

const Register = () => {
    const navigate = useNavigate();


    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    const handleClickOpen = (message) => {
        setOpen(true);
        setMessage(message);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/login')
    };

    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault(); 

        setLoading(true)

        const formData = new FormData();

        formData.append("email", data.email)
        formData.append("password1", data.password)
        formData.append("password2", data.password)
        formData.append("username", data.username)
        
        axios.post('http://localhost:8000/api/auth/register/',
            formData,
        )
            .then((response) => {
                console.log(response);
                handleClickOpen("You have successfully registered!");
                setLoading(false);
            })
            .catch(err => {
                console.log(err.response.data);
                setLoading(false);

                let errorResponse = err.response.data;
                let usernameError = document.getElementById('username-error');
                let emailError = document.getElementById('email-error');
                
                if (errorResponse.username && Array.isArray(errorResponse.username)) {
                    usernameError.textContent = errorResponse.username[0];
                } else {
                    usernameError.textContent = '';
                }
                if (errorResponse.email && Array.isArray(errorResponse.email)) {
                    emailError.textContent = errorResponse.email[0];
                } else {
                    emailError.textContent = '';
                }


            });
    };


    return (
        <section className="flex overflow-hidden" >
            <div className='w-1/2 h-screen items-center flex p-5' data-aos="zoom-in">
                {<img src={Document} alt="" />}
            </div>
            {
                <div className='w-1/2' data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-primary-900 md:text-2xl ">
                                    Create and account
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input id="email" type="email" {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                                        {errors.email && <span className='error'>{errors.email.message}</span>}
                                        <span id="email-error" className="error"></span>
                                    </div>
                                    <div>
                                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                                        <input type="text" name="username" id="username" {...register("username", { required: "Username is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                                        {errors.username && <span className='error'>{errors.username.message}</span>}
                                        <span id="username-error" className="error"></span>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" {...register("password", { required: true, minLength: 8 })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                        {errors.password && errors.password.type === "required" && <span className='error'>Password is required</span>}
                                        {errors.password && errors.password.type === "minLength" && <span className='error'>Password must be at least 8 characters long</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                        <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" {...register("confirmPassword", { required: true, validate: value => value === watch('password') })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                                        {errors.confirmPassword && errors.confirmPassword.type === "required" && <span className='error'>Confirm password is required</span>}
                                        {errors.confirmPassword && errors.confirmPassword.type === "validate" && <span className='error'>Passwords do not match</span>}
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" {...register("terms", { required: true })} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    {errors.terms && errors.terms.type === "required" && <span className='error'>You must agree to the terms and conditions</span>}
                                    {loading ?
                                        <Spinner /> :
                                        <button type="submit" className="w-full text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                                    }                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <Link to="/login" className="font-medium text-primary-800 hover:underline">Login</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <AlertDialog open={open} handleClose={handleClose} message={message} />
                </div>
            }
        </section>
    )
}

export default Register

