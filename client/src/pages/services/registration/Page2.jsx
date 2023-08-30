import axios from '../../../interceptors/axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Page2 = ({ pk, user, handleNext }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        const userData = {}

        if (data.title) {
            userData.title = data.title;
        }

        if (data.maidenName) {
            userData.maiden_name = data.maidenName
        }

        if (data.dob) {
            const date = new Date(data.dob);

            const formattedDate = date.toISOString();

            userData.date_of_birth = formattedDate;
        }

        console.log(userData)

        const userDataString = JSON.stringify(userData);

        console.log(userDataString);

        axios.put(`/users/${pk}/`, userDataString, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response);
                handleNext()
            })
            .catch((error) => console.error(error))
    };

    const [inputType, setInputType] = useState("text");

    return (
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
            <div className="card" data-aos="zoom-in">
                <div className="card-header">
                    <h4>Personal Details</h4>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className='form-label' htmlFor="title">What is your title?</label>
                            <select className="form-control" id="title" {...register("title", {
                                required: !user.title,
                                value: user.title,
                            })}>
                                <option value="" disabled>{user.title ? user.title : "Select a title"}</option>
                                <option>Mr</option>
                                <option>Ms</option>
                                <option>Mrs</option>
                                <option>Miss</option>
                            </select>
                            {errors.title && <span className='error'>A title is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="maiden-name">What is your maiden name (if any)?</label>
                            <input type="text" placeholder={user.maiden_name} className="form-control" id="maiden-name" {...register('maidenName')} />
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="dob">What is your date of birth?</label>
                            <input type={inputType}
                                placeholder="Date of birth"
                                onFocus={() => setInputType("date")}
                                onBlur={() => inputType === "date" && setInputType("text")}
                                className="form-control" name='dob' id="dob"
                                {...register("dob", {
                                    required: !user.date_of_birth,
                                    value: new Date(user.date_of_birth).toISOString().slice(0, 10),
                                    validate: (value) =>
                                        value <= new Date().toISOString().slice(0, 10) ||
                                        "Date of birth cannot be in the future",
                                })}
                            />
                            {errors.dob && errors.dob.type === "required" && (
                                <span className="error">A date of birth is required</span>
                            )}
                            {errors.dob && errors.dob.type === "validate" && (
                                <span className="error">{errors.dob.message}</span>
                            )}
                        </div>
                        <br />
                        <div className='flex justify-center'>
                            <button type="submit" className="btn">Submit</button>
                            <div className='mr-8' />
                            {user.date_of_birth && user.title && <button className="btn-outlined" onClick={handleNext}>Skip</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page2
