import React, { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from '../../../interceptors/axios'


const Page4 = ({ pk, user, handleNext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [progress, setProgress] = useState(0);
    const [foreignIds, setForeignIds] = useState([])


    const onSubmit = (data) => {

        const date = new Date(data.foreignExpiry);

        const formattedDate = date.toISOString();

        let formData = new FormData();
        formData.append('document', data.foreign[0]);
        formData.append('document_type', "foreign_id")
        formData.append('document_number', data.foreignNumber)
        formData.append('country', data.foreignCountry)
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
        axios.get(`/upload/file/?user=${pk}&document_type=foreign_id`).
        then((response)=>{
            console.log(response.data)
            setForeignIds(response.data)
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
                            <label className='form-label' for="foreignNumber">Enter Foreign Identity Number</label>
                            <input type="text" className="form-control" id="foreignNumber"
                                name="foreignNumber" {...register("foreignNumber", { required: true })} />
                            {errors["foreignNumber"] && <span class="error">This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label className='form-label' for="foreignCountry">Enter Country of Issuance</label>
                            <input type="text" className="form-control" id="foreignCountry"
                                name="foreignCountry" {...register("foreignCountry", { required: true })} />
                            {errors["foreignCountry"] && <span class="error">This field is required</span>}
                        </div>
                        <div class="form-group">
                            <label className="form-label" for="foreign-expiry">
                                Enter a foreign Expiry Date
                            </label>
                            <input
                                type="date"
                                class="form-control"
                                id="foreign-expiry"
                                name="foreign-expiry"
                                {...register("foreignExpiry", {
                                    required: "A foreign ID expiry date is required",
                                    validate: (value) =>
                                        value > new Date().toISOString().slice(0, 10) ||
                                        "A foreign expiry date must be in the future",
                                })}
                            />
                            {errors.foreignExpiry && (
                                <span className="error">{errors.foreignExpiry.message}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label className='form-label' for="foreign">Upload a certified copy of your identity
                                document:</label>
                            <input type="file" id="foreign" name="foreign" className="form-control-file"
                                {...register("foreign", { required: true })} />
                            {errors["foreign"] && <span class="error">This field is required</span>}
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
                        <p className="text-primary-800">Uploaded foreign IDs({foreignIds.length})</p>
                        {foreignIds.map((foreign_id)=>(
                            <li key={foreign_id.id}>{foreign_id.document_number}</li>
                        ))}
                        <br />
                        <br />
                        <div className='flex justify-center'>
                            <button type="submit" className="btn">Submit</button>
                            <div className='mr-8' />
                            {foreignIds.length !=0 && <button className="btn-outlined" onClick={handleNext}>Skip</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Page4
