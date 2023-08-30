import React, { useEffect, useState } from 'react';
import axios from '../interceptors/axios';
import { useForm } from "react-hook-form";
import Spinner from '../components/Spinner';
import AlertDialog from '../components/AlertDialog';

const EditProfile = () => {
    const [user, setUser] = useState('')
    const [userProfile, setUserProfile] = useState('');
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data, e) => {
        setLoading(true)

        const userData = {};

        const pk = user.pk

        userData.user = pk;

        if (data.forenames) {
            userData.first_name = data.forenames;
        }
        if (data.surname) {
            userData.last_name = data.surname;
        }
        if (data.postalAddress) {
            userData.postal_address = data.postalAddress;
        }
        if (data.physicalAddress) {
            userData.physical_address = data.physicalAddress;
        }
        if (data.villageSuburb) {
            userData.village_suburb = data.villageSuburb;
        }
        if (data.district) {
            userData.district = data.district;
        }
        if (data.phoneNumber) {
            userData.phone_number = data.phoneNumber;
        }
        if (data.occupation) {
            userData.occupation = data.occupation;
        }
        if (data.postalCode) {
            userData.postal_code = data.postalCode;
        }

        const userDataString = JSON.stringify(userData);

        console.log(userDataString);

        axios.put(`/users/${pk}/`, userDataString, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response)
                setLoading(false)
                setOpen(true)
                setMessage("Profile updated!")
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                setOpen(true)
                setMessage("An error occured! ")
            })
    }

    useEffect(() => {
        axios.get('/auth/user/')
            .then((response) => {
                setUser(response.data)
                const pk = response.data.pk
                axios.get(`/users/${pk}/`)
                    .then((res) => {
                        console.log(res.data)
                        setUserProfile(res.data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })


            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='container px-5 py-6 mx-auto'>
                <div className='container flex flex-wrap justify-center'>
                    <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
                        <div className="card" data-aos="zoom-in">
                            <div className="card-header text-center">
                                <h4>Edit profile</h4>
                            </div>
                            <div className="card-body text-center">
                                <div className="form-group">
                                    <label className='form-label' htmlFor="emailemail">Email Address:</label>
                                    <input type="email" className="form-control" {...register("email")}
                                        placeholder={user.email} name="emailemail" readOnly />
                                </div>
                                <div className="form-group">
                                    <label className='form-label' htmlFor="surname">Surname:</label>
                                    <input type="text" className="form-control" {...register("surname")}
                                        placeholder={userProfile.last_name} name="surname" />
                                </div>
                                <div className="form-group">
                                    <label className='form-label' htmlFor="forenames">Forenames:</label>
                                    <input type="text" className="form-control" {...register("forenames")}
                                        placeholder={userProfile.first_name} name="forenames" />
                                </div>
                                <div className="form-group">
                                    <label className='form-label' htmlFor="postalAddress">Postal Address (P/Bag or P.O Box):</label>
                                    <textarea type="text" className="form-control" {...register("postalAddress")}
                                        placeholder={userProfile.postal_address} name="postalAddress" />
                                </div>
                                <div className="form-group">
                                    <label className='form-label' htmlFor="physicalAddress">Physical Address (street name or chief’s
                                        name):</label>
                                    <input type="text" className="form-control" {...register("physicalAddress")}
                                        placeholder={userProfile.physical_address} name="physicalAddress" />
                                </div>
                                <div className="form-group">
                                    <label className='form-label' htmlFor="villageSuburb">Village/Suburb:</label>
                                    <input type="text" className="form-control" {...register("villageSuburb")}
                                        placeholder={userProfile.village_suburb} name="villageSuburb" />
                                </div>
                                <div className="form-group">
                                    <label className='form-label' htmlFor="district">District:</label>
                                    <input type="text" className="form-control" {...register("district")}
                                        placeholder={userProfile.district} name="district" />
                                </div>
                                <div className="form-group">
                                    <label className='form-label' htmlFor="phoneNumber">Contact Number:</label>
                                    <input type="tel" className="form-control" {...register("phoneNumber")}
                                        placeholder={userProfile.phone_number} name="phoneNumber" />
                                </div>
                                <div className="form-group">
                                    <label className='form-label' htmlFor="occupation">Occupation:</label>
                                    <input type="text" className="form-control" {...register("occupation")}
                                        placeholder={userProfile.occupation} name="occupation" />
                                </div>
                                <div className="form-group">
                                    <label className='form-label' htmlFor="postalCode">Postal Code:</label>
                                    <input type="text" className="form-control" {...register("postalCode", { maxLength: 3 })}
                                        placeholder={userProfile.postal_code} name="postalCode" />
                                    {errors.postalCode && <span className='error'>{errors.postalCode.message}</span>} {/* use error message from register */}
                                </div>
                                <br />
                                {loading ?
                                    <Spinner />
                                    :
                                    <button type="submit" className="btn">Save</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AlertDialog open={open} handleClose={handleClose} message={message} />
        </form>
    )
}

export default EditProfile