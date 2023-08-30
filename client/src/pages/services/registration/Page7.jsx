import React from 'react';
import { useForm } from "react-hook-form";
import axios from '../../../interceptors/axios';


const Page7 = ({ pk, user, handleNext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        let formData = new FormData();
        formData.append('postal_address', data.postalAddress);
        formData.append('physical_address', data.physicalAddress);
        formData.append('home_phone_number', data.homePhone);
        formData.append('phone_number', data.cellPhone);
        formData.append('office_phone_number', data.officePhone);
        formData.append('fax', data.faxNumber);


        axios.put(`/users/${pk}/`, formData, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response);
                handleNext()
            })
            .catch((error) => console.error(error))

        }  

    return (
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
            <div className="card" data-aos="zoom-in">
                <div className="card-header">
                    <h4>Correspondence Details</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="postalAddress">
                                What is your Postal Address?
                            </label>
                            <textarea
                                type="text"
                                className="form-control flex flex-col"
                                id="postalAddress"
                                name="postalAddress"
                                placeholder={user.postal_address}
                                {...register("postalAddress", {
                                    required: true,
                                    minLength: 10,
                                    maxLength: 100,
                                })}
                            />
                            {/* display error messages if any */}
                            {errors.postalAddress && (
                                <p className="error">
                                    Postal address is required and must be between 10 and 100 characters.
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="physicalAddress">
                                What is your Physical Address?
                            </label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="physicalAddress"
                                name="physicalAddress"
                                placeholder={user.physical_address}
                                {...register("physicalAddress", {
                                    required: true,
                                    minLength: 10,
                                    maxLength: 100,
                                })}
                            />
                            {errors.physicalAddress && (
                                <p className="error">
                                    Physical address is required and must be between 10 and 100 characters.
                                </p>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="homePhone">
                                What is your Home Phone Number?
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="homePhone"
                                name="homePhone"
                                placeholder={user.home_phone_number}
                                {...register("homePhone", {
                                    pattern: /^\d{8}$/,
                                })}
                            />
                            {errors.homePhone && (
                                <p className="error">Home phone number must be 8 digits.</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="officePhone">
                                What is your Office Phone Number?
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="officePhone"
                                name="officePhone"
                                placeholder={user.office_phone_number}
                                {...register("officePhone", {
                                    pattern: /^\d{8}$/,
                                })}
                            />
                            {errors.officePhone && (
                                <p className="error">Office phone number must be 8 digits.</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="cellPhone">
                                What is your Cell Phone Number?
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="cellPhone"
                                name="cellPhone"
                                placeholder={user.phone_number}
                                {...register("cellPhone", {
                                    required: true,
                                    pattern: /^\d{8}$/,
                                })}
                            />
                            {errors.cellPhone && (
                                <p className="error">Cell phone number is required and must be 8 digits.</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="faxNumber">
                                What is your Fax Number?
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="faxNumber"
                                name="faxNumber"
                                placeholder={user.fax}
                                {...register("faxNumber", {
                                    pattern: /^\d{8}$/,
                                })}
                            />
                            {errors.faxNumber && (
                                <p className="error">Fax number must be 8 digits.</p>
                            )}
                        </div>
                        <br />
                        <div className='flex justify-center'>
                            <button type="submit" className="btn">Next</button>
                            <div className='mr-8' />
                            {user.postal_address 
                            && user.physical_address
                            && user.phone_number
                            && <button className="btn-outlined" onClick={handleNext}>Skip</button>}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Page7