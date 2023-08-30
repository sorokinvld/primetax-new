import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from '../../../interceptors/axios'


const Page5 = ({ pk, user, handleNext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [progress, setProgress] = useState(0);
    const [otherIdentities, setotherIdentities] = useState([])

    const onSubmit = (data) => {

        const date = new Date(data.expiryDate);

        const formattedDate = date.toISOString();

        let formData = new FormData();
        formData.append('document', data.otherIdentity[0]);
        formData.append('document_type',"other")
        formData.append('document_name',data.identityType)
        formData.append('document_number', data.identityNumber)
        formData.append('country', data.country)
        formData.append('expiry_date', formattedDate)
        formData.append('user', pk)

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        uploadFile(formData)
            .then((response) => {
                console.log(response.data);
                setProgress(0);
                handleNext();
            })
            .catch((error) => {
                console.log(error.message);
                setProgress(0);
            });
    };

    useEffect(()=>{
        axios.get(`/upload/file/?user=${pk}&document_type=other`).
        then((response)=>{
            console.log(response.data)
            setotherIdentities(response.data)
        })
    },[])

    const uploadFile = async (formData) => {
        try {
            let response = await axios.post(`/upload/file/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    let percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setProgress(percentCompleted);
                },
            });
            return response;
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
            <div className="card" data-aos="zoom-in">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className='form-label' for="identityType">What is the Other Form of Identity?</label>
                            <input type="text" className="form-control" id="identityType"
                                name="identityType" placeholder="Enter identity type" {...register("identityType", { required: true })} />
                            {errors["identityType"] && <span class="error">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='form-label' for="identityNumber">What is Identity Card Number?</label>
                            <input type="text" className="form-control" id="identityNumber"
                                name="identityNumber" placeholder="Enter identity card number" {...register("identityNumber", { required: true })} />
                            {errors["identityNumber"] && <span class="error">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='form-label' for="expiryDate">What is the Expiry Date?</label>
                            <input type="date" className="form-control" id="expiryDate"
                                name="expiryDate" placeholder="Enter expiry date" {...register("expiryDate", { required: true })} />
                            {errors["expiryDate"] && <span class="error">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='form-label' for="country">Enter Country of Issuance</label>
                            <input type="text" className="form-control" id="country"
                                name="country" {...register("country", { required: true })} />
                            {errors["country"] && <span class="error">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='form-label' for="otherIdentity">Upload the identity
                                document:</label>
                            <input type="file" id="otherIdentity" name="otherIdentity" className="form-control-file"
                                {...register("otherIdentity", { required: true })} />
                            {errors["otherIdentity"] && <span class="error">This field is required</span>}
                            {progress != 0 && <div className="progress flex justify-center">
                                <div
                                    className="progress-bar text-center"
                                    role="progressbar"
                                    style={{ width: `${progress}%` }}
                                    aria-valuenow={progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {progress}%
                                </div>
                            </div>}
                        </div>
                        <p className="text-primary-800">Other Uploaded Identity Documents({otherIdentities.length})</p>
                        {otherIdentities.map((passport)=>(
                            <li key={passport.id}>{passport.document_type}</li>
                        ))}
                        <br />
                        <div className='flex justify-center'>
                            <button type="submit" className="btn">Submit</button>
                            <div className='mr-8' />
                            {otherIdentities.length !=0 && <button className="btn-outlined" onClick={handleNext}>Skip</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page5