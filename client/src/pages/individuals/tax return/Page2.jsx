import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from '../../../interceptors/axios';

const Page2 = ({ pk, user, handleNext }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [error, setError] = useState("");
    const [progress, setProgress] = useState(0);

    const [empDetailsList, setEmpDetailsList] = useState([])

    const onAdd = (data) => {
        setEmpDetailsList([...empDetailsList, data])
        setError("")
        data.user = pk;
        data.p16_form = data.p16Form[0]
        data.p16Form = null;
        console.log("DATA")
        console.log(data)
        console.log("DATA")
        uploadFile(data).then((response) => {
            console.log(response.data);
        }).catch((error) => console.error(error))

        // reset()
    }

    const uploadFile = async (formData) => {
        try {
            let response = await axios.post(`/employment/`, formData, {
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

    const onNext = () => {
        if (empDetailsList.length === 0) {
            setError("Please add at least one employment detail")
        } else {
            handleNext()
            console.log("MOVING ON...")
        }
    }

    return (
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
            <div class="card" data-aos="zoom-in">
                <div class="card-header">
                    <h4>Employment Information</h4>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onAdd)}>
                        <div class="form-group">
                            <label className='form-label' for="employer_name">Name of Employer:</label>
                            <input type="text" class="form-control" id="employer_name"
                                name="employer_name" {...register("employer_name", { required: true })} />
                            {errors["employer_name"] && <span class="error">This field is required</span>}
                        </div>
                        <div class="form-group">
                            <label className='form-label' for="employer_tin">Employer's TIN:</label>
                            <input type="text" class="form-control" id="employer_tin"
                                name="employer_tin" {...register("employer_tin", { required: true })} />
                            {errors["employer_tin"] && <span class="error">This field is required</span>}
                        </div>
                        <div class="form-group">
                            <label className='form-label' for="employed_from">Employed from:</label>
                            <input type="date" class="form-control" id="employed_from"
                                name="employed_from" {...register("employed_from", { required: true })} />
                            {errors["employed_from"] && <span class="error">This field is required</span>}
                        </div>
                        <div class="form-group">
                            <label className='form-label' for="employed_until">Employed until:</label>
                            <input type="date" class="form-control" id="employed_until"
                                name="employed_until" {...register("employed_until", { required: true })} />
                            {errors["employed_until"] && <span class="error">This field is required</span>}
                        </div>
                        <div class="form-group">
                            <label className='form-label' for="gross_income">Gross employment income:</label>
                            <input type="number" class="form-control" id="gross_income"
                                name="gross_income" {...register("gross_income", { required: true, min: 0 })} />
                            {errors["gross_income"] && errors["gross_income"].type === "required" && <span class="error">This field is required</span>}
                            {errors["gross_income"] && errors["gross_income"].type === "min" && <span class="error">This field must be positive</span>}
                        </div>
                        <div class="form-group">
                            <label className='form-label' for="p16Form">Please attach Form P16:</label>
                            <input type="file" class="form-control-file" id="p16Form" name="p16Form"
                                {...register("p16Form", { required: true })} />
                            {errors["p16Form"] && <span class="error">This field is required</span>}
                            {progress != 0 && progress != 100 && <div className="progress flex justify-center">
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
                        <button type="submit" class="btn-outlined text-sm">Add
                            to List</button>
                    </form>

                    <div class="mt-3">
                        <h5>Employment Details:</h5>
                        <ol className='details-list' id="emp-details-list">
                            {empDetailsList.map((item, index) => (
                                <li key={index}>
                                    <p className='form-label'>Name of Employer: {item["employer_name"]}</p>
                                    <p className='form-label'>Employer's TIN: {item["employer_tin"]}</p>
                                    <p className='form-label'>Employed from: {item["employed_from"]}</p>
                                    <p className='form-label'>Employed until: {item["employed_until"]}</p>
                                    <p className='form-label'>Gross employment income: {item["gross_income"]}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <br />
                    <div className='flex justify-center'>
                        <button type="button" class="btn" onClick={onNext}>Next</button>                            <div className='mr-8' />
                        <button type="button" className="btn-outlined"
                            onClick={handleNext}>Skip</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page2
