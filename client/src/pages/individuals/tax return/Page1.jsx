import React, { useState } from 'react';
import axios from '../../../interceptors/axios';
import { useForm } from "react-hook-form";

const Page1 = ({ pk, user, handleNext }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (info) => {
        const data = {
            last_name: info.last_name,
            first_name: info.first_name,
            maiden_name: document.getElementById("maiden-name").value,
            postal_address: document.getElementById("postal-address").value,
            physical_address: document.getElementById("physical-address").value,
            village_suburb: document.getElementById("village-suburb").value,
            district: document.getElementById("district").value,
            contact_telephone_number: document.getElementById("contact-telephone-number").value,
            occupation: document.getElementById("occupation").value,
            tin: document.getElementById("tin").value,
            postal_code: document.getElementById("postal-code").value,
            spouse_name: document.getElementById("full-name-spouse") ? document.getElementById("full-name-spouse").value : null,
            spouse_tin: document.getElementById("tin-spouse") ? document.getElementById("tin-spouse").value : null
        };

        const formData = new FormData();

        for (let key in data) {
            if (data[key]) {
                formData.append(key, data[key]);
            }
        }


        axios.put(`/users/${pk}/`, formData, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response.data)
                handleNext();
            })
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg overflow-auto'>
            <div className="card" data-aos="zoom-in">
                <div className="card-header">
                    <h4>Please Confirm Your Details</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="form-group">
                            <label className='form-label' htmlFor="surname">Surname:</label>
                            <input type="text" className="form-control" id="surname"
                                placeholder={user.last_name} name="surname"  {...register("last_name", { required: !user.last_name })} />
                            {errors.last_name && <span className='error'>Last name is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="forenames">First Name:</label>
                            <input type="text" className="form-control" id="forenames"
                                placeholder={user.first_name} name="forenames" {...register("first_name", { required: !user.first_name })} />
                            {errors.first_name && <span className='error'>First name is required</span>}
                        </div>

                        <div className="form-group">
                            <label className='form-label' htmlFor="maiden-name">Maiden Name:</label>
                            <input type="text" className="form-control" id="maiden-name"
                                placeholder={user.maiden_name} name="maiden-name" {...register("maiden_name", { required: user.title == "Mrs" })} />
                            {errors.maiden_name && <span className='error'>Maiden name is required</span>}

                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="postal-address">Postal Address (P/Bag or P.O Box):</label>
                            <textarea type="text" className="form-control" id="postal-address"
                                placeholder={user.postal_address} name="postal-address" />
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="physical-address">Physical Address (street name or chief’s
                                name):</label>
                            <input type="text" className="form-control" id="physical-address"
                                placeholder={user.physical_address} name="physical-address" />
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="village-suburb">Village/Suburb:</label>
                            <input type="text" className="form-control" id="village-suburb"
                                placeholder={user.village_suburb} name="village-suburb" />
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="district">District:</label>
                            <input type="text" className="form-control" id="district"
                                placeholder={user.district} name="district" />
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="contact-telephone-number">Contact Telephone Number:</label>
                            <input type="tel" className="form-control" id="contact-telephone-number"
                                placeholder={user.phone_number} name="contact-telephone-number" />
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="occupation">Occupation:</label>
                            <input type="text" className="form-control" id="occupation"
                                placeholder={user.occupation} name="occupation" />
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="tin">TIN:</label>
                            <input type="text" className="form-control" id="tin" placeholder={user.tin}
                                name="tin" />
                        </div>
                        <div className="form-group">
                            <label className='form-label' htmlFor="postal-code">Postal Code:</label>
                            <input type="text" className="form-control" id="postal-code"
                                placeholder={user.postal_code} name="postal-code" />
                        </div>
                        {user.marital_status == "married" && <div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="full-name-spouse">Full Name(s) of Spouse:</label>
                                <input type="text" className="form-control" id="full-name-spouse"
                                    placeholder={user.spouse_name} name="full-name-spouse" />
                            </div>
                            <div className="form-group">
                                <label className='form-label' htmlFor="tin-spouse">Spouse TIN:</label>
                                <input type="text" className="form-control" id="tin-spouse"
                                    placeholder={user.spouse_tin} name="tin-spouse" />
                            </div></div>}
                        <br />
                        <button type="submit" className="btn">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page1