import React from 'react'
import { useForm } from 'react-hook-form';
import axios from '../../../interceptors/axios';

const Page6 = ({ pk, user, handleNext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        let formData = new FormData();
        if(data.birthCountry)
        formData.append('birth_contry', data.birthCountry);
        if(data.residenceCountry)
        formData.append('residence_country', data.residenceCountry);
        if(data.citizenshipCountry)
        formData.append('citizenship_country', data.citizenshipCountry);

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
                    <h4>Residence Details</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className='form-label' for="birthCountry">What is Your Country of Birth?</label>
                            <input type="text" className="form-control" id="birthCountry"
                                name="birthCountry" placeholder={user.birth_contry} {...register("birthCountry", { required: !user.birth_contry })} />
                            {errors["birthCountry"] && <span class="error">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='form-label' for="residenceCountry">What is Your Country of Residence?</label>
                            <input type="text" className="form-control" id="residenceCountry"
                                name="residenceCountry" placeholder={user.residence_country}
                                {...register("residenceCountry", { required: !user.residence_country })} />
                            {errors["residenceCountry"] && <span class="error">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='form-label' for="citizenshipCountry">What is Your Country of
                                Citizenship?</label>
                            <input type="text" className="form-control" id="citizenshipCountry"
                                name="citizenshipCountry" placeholder={user.citizenship_country}
                                {...register("citizenshipCountry", { required: !user.citizenship_country })} />
                            {errors["citizenshipCountry"] && <span class="error">This field is required</span>}
                        </div>
                        <br />
                        <div className='flex justify-center'>
                            <button type="submit" className="btn">Next</button>
                            <div className='mr-8' />
                            {user.birth_contry
                                && user.residence_country
                                && user.citizenship_country
                                && <button className="btn-outlined" onClick={handleNext}>Skip</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page6
