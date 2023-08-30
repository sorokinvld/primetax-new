import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from '../../../interceptors/axios'

const Page3 = ({ pk, user, handleNext }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [progress, setProgress] = useState(0);
    const [passports, setPassports] = useState([])

    const onSubmit = (data) => {

        const date = new Date(data.passportExpiry);

        const formattedDate = date.toISOString();

        let formData = new FormData();
        formData.append('document', data.passport[0]);
        formData.append('document_type', "passport")
        formData.append('document_number', data.passportNumber)
        formData.append('country', data.passportCountry)
        formData.append('expiry_date', formattedDate)
        formData.append('user', pk)

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
        axios.get(`/upload/file/?user=${pk}&document_type=passport`).
        then((response)=>{
            console.log(response.data)
            setPassports(response.data)
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
        <div className="w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg">
            <div class="card" data-aos="zoom-in">
                <div class="card-body">
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group">
                            <label className="form-label" for="passport-number">
                                Enter a Valid Passport Number
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="passport-number"
                                name="passport-number"
                                {...register("passportNumber", {
                                    required: "A passport number is required",
                                    pattern: {
                                        value: /^[A-Z]{2}[0-9]{7}$/, // a simple regex for passport number format
                                        message: "A passport number must start with two letters and have 7 digits",
                                    },
                                })}
                            />
                            {errors.passportNumber && (
                                <span className="error">{errors.passportNumber.message}</span>
                            )}
                        </div>
                        <div class="form-group">
                            <label className="form-label" for="passport-expiry">
                                Enter a Passport Expiry Date
                            </label>
                            <input
                                type="date"
                                class="form-control"
                                id="passport-expiry"
                                name="passport-expiry"
                                {...register("passportExpiry", {
                                    required: "A passport expiry date is required",
                                    validate: (value) =>
                                        value > new Date().toISOString().slice(0, 10) ||
                                        "A passport expiry date must be in the future",
                                })}
                            />
                            {errors.passportExpiry && (
                                <span className="error">{errors.passportExpiry.message}</span>
                            )}    const [passports, setPassports] = useState([])

                        </div>
                        <div class="form-group">
                            <label className="form-label" for="passport-country">
                                Enter a Country of Issuance
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="passport-country"
                                name="passport-country"
                                {...register("passportCountry", {
                                    required: "A country of issuance is required",

                                })}
                            />
                            {errors.passportCountry && <span className="error">{errors.passportCountry.message}</span>}
                        </div>
                        <div class="form-group">
                            <label className="form-label" for="passport">
                                Upload a certified copy of your passport:
                            </label>
                            <input
                                type="file"
                                id="passport"
                                name="passport"
                                class="form-control-file"
                                {...register("passport", {
                                    required: "A passport file is required",
                                })}
                            />
                            {errors.passport && (
                                <span className="error">{errors.passport.message}</span>
                            )}
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
                        <p className="text-primary-800">Uploaded passports({passports.length})</p>
                        {passports.map((passport)=>(
                            <li key={passport.id}>{passport.document_number}</li>
                        ))}
                        <br />

                        <div className='flex justify-center'>
                            <button type="submit" className="btn">Submit</button>
                            <div className='mr-8' />
                            {passports.length !=0 && <button className="btn-outlined" onClick={handleNext}>Skip</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page3;
