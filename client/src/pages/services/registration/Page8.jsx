import React, { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import axios from '../../../interceptors/axios';


const Page8 = ({ pk, user, handleNext }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [progress, setProgress] = useState(0);


    const [maritalStatus, setMaritalStatus] = useState("");
    const [marriedType, setMarriedType] = useState("");
    const [showMarriedDetails, setShowMarriedDetails] = useState(false);
    const [showUploadField, setShowUploadField] = useState(false);

    useEffect(()=>{
        if(user.marital_status)
        setMaritalStatus(user.marital_status)

        if(user.marriage_type)
        setMarriedType(user.marriage_type)

        if(user.marital_status == "married")
        setShowMarriedDetails(true)
    },[])

    const handleMaritalStatusChange = (event) => {
        const selectedValue = event.target.value;
        setMaritalStatus(selectedValue);
        if (selectedValue === "married") {
            setShowMarriedDetails(true);
        } else {
            setShowMarriedDetails(false);
        }
    };

    const handleMarriedTypeClick = (event) => {
        const clickedValue = event.target.value;
        setMarriedType(clickedValue);
        if (clickedValue === "antenuptial") {
            setShowUploadField(true);
        } else {
            setShowUploadField(false);
        }
    };

    const onSubmit = (data) => {
        let formData = new FormData();

        formData.append("marital_status", maritalStatus);

        if (maritalStatus === "married") {
            formData.append("marriage_type", marriedType);
            formData.append("spouse_name", data.spouseName);
            formData.append("spouse_maiden_name", data.spouseMaidenName);
            formData.append("spouse_tin", data.spouseTIN);

            if (marriedType === "antenuptial") {
                const agreement = new FormData();

                agreement.append("document_type", "Antenuptial Agreement")
                agreement.append("user", pk)
                agreement.append("document", data.upload[0]);

                for (let [key, value] of agreement.entries()) {
                    console.log(key, value);
                }

                uploadFile(agreement);
            }
        }

        axios
            .put(`/users/${pk}/`, formData, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log(response.data);
                handleNext();
            })
            .catch((error) => console.error(error));
    };

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
            <div className="card" data-aos="zoom-in">
                <div className="card-header">
                    <h4>Marital Details</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="marital-status">
                                What is your Marital status?
                            </label>
                            <select
                                className="form-control"
                                name="marital-status"
                                value={ maritalStatus}
                                onChange={handleMaritalStatusChange}

                            >
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="separated">Separated</option>
                                <option value="widowed">Widowed</option>
                            </select>

                        </div>

                        {showMarriedDetails && (
                            <div
                                className="form-group married-details"
                                data-aos="fade-up"
                            >
                                <label className="form-label" htmlFor="married-type">
                                    What is your Marriege type?
                                </label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="married-type"
                                        value={user.marriage_type}
                                        checked={marriedType === "incommunity"}
                                        onClick={handleMarriedTypeClick}
                                        {...register("married-type", { required: !user.marriage_type })}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="married-type-community"
                                    >
                                        Community of property
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="married-type"
                                        value="antenuptial"
                                        checked={marriedType === "antenuptial"}
                                        onClick={handleMarriedTypeClick}
                                        {...register("married-type", { required: true })}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="married-type-antenuptial"
                                    >
                                        Antenuptial Agreement
                                    </label>
                                </div>
                                {errors["married-type"] && (
                                    <p className="error">Marriage type is required.</p>
                                )}
                                {showUploadField && (
                                    <div
                                        className="form-group"
                                        id="uploadField"
                                        data-aos="fade-in"
                                    >
                                        <label
                                            className="form-label"
                                            htmlFor="upload"
                                        >
                                            Upload a certified copy of agreement:
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control-file"
                                            id="upload"
                                            name="upload"
                                            // register the input with validation rules
                                            {...register("upload", { required: true })}
                                        />
                                        {errors.upload && (
                                            <p className="error">
                                                Upload file is required.
                                            </p>
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
                                )}
                                <br />
                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="spouseName"
                                    >
                                        What is your Spouse's Name?
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="spouseName"
                                        name="spouseName"
                                        placeholder={user.spouse_name}
                                        {...register("spouseName", {
                                            required: !user.spouse_name
                                        })}
                                    />
                                    {errors.spouseName && (
                                        <p className="error">
                                            Spouse name is required
                                        </p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="spouseMaidenName"
                                    >
                                        What is your Spouse's Maiden Name?
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="spouseMaidenName"
                                        name="spouseMaidenName"
                                        placeholder={user.spouse_maiden_name}
                                        {...register("spouseMaidenName", {
                                            required: !user.spouse_maiden_name && !user.title === "Mr",
                                        })}
                                    />
                                    {errors.spouseMaidenName && (
                                        <p className="error">
                                            Spouse maiden name is required
                                        </p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label
                                        className="form-label"
                                        htmlFor="spouseTIN"
                                    >
                                        What is your Spouse's TIN (If Any)?
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="spouseTIN"
                                        name="spouseTIN"
                                        placeholder={user.spouse_tin}
                                        {...register("spouseTIN")}
                                    />
                                    {/* {errors.spouseTIN && (
                                        <p className="error">
                                            Spouse TIN must be 10 digits if provided.
                                        </p>
                                    )} */}
                                </div>
                            </div>
                        )}
                        <br />
                        <div className='flex justify-center'>
                            <button type="submit" className="btn">Next</button>
                            <div className='mr-8' />
                            {user.marital_status
                                && <button className="btn-outlined" onClick={handleNext}>Skip</button>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page8;
