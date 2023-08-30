import React, { useEffect, useState } from "react";
import axios from '../../../interceptors/axios';

const Page9 = ({ pk, user, handleNext }) => {
    const [option, setOption] = useState("");
    const [employer, setEmployer] = useState("");
    const [activity, setActivity] = useState("");
    const [empDetails, setEmpDetails] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`employment/?user=${pk}`).
            then((response) => {
                console.log(response.data)
                setEmpDetails(response.data)
            })
    }, [])

    function handleOptionChange(event) {
        setOption(event.target.value);
    }

    function handleEmployerChange(event) {
        setEmployer(event.target.value);
    }

    function handleActivityChange(event) {
        setActivity(event.target.value);
    }

    function handleAdd() {
        if (option === "employer" && employer) {
            let formData = new FormData();

            formData.append("employer_name", employer)
            formData.append("user", pk)

            axios.post("/employment/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })

        } else if (option === "activity" && activity) {

            let formData = new FormData();
            formData.append("user", pk)

            formData.append("activity", activity)

            axios.post("/employment/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })
        }

        setOption('');
        setActivity('');
        setEmployer('');
        setError('')

        axios.get(`employment/?user=${pk}`).
            then((response) => {
                console.log(response.data)
                setEmpDetails(response.data)
            })
    }

    function validate() {
        if (empDetails.length === 0) {
            setError("Please add at least one item to the list.");
            return false;
        } else {
            setError("");
            return true;
        }
    }

    function handleNextStep() {
        if (validate()) {
            handleNext();
        }
    }

    return (
        <div className="w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg">
            <div className="card" data-aos="zoom-in">
                <div className="card-header">
                    <h4>Employment Details</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label className="form-label" htmlFor="option">
                            Please choose one of the following options:
                        </label>
                        <select
                            className="form-control"
                            id="option"
                            name="option"
                            value={option}
                            onChange={handleOptionChange}
                        >
                            <option value="">Select an option</option>
                            <option value="employer">Name of employer</option>
                            <option value="activity">
                                Nature of other income-generating activity
                            </option>
                        </select>
                    </div>

                    {option === "employer" && (
                        <div className="form-group">
                            <label className="form-label" htmlFor="employer">
                                What is the Name of Your Employer?
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="employer"
                                name="employer"
                                value={employer}
                                onChange={handleEmployerChange}
                            />
                        </div>
                    )}

                    {option === "activity" && (
                        <div className="form-group">
                            <label className="form-label" htmlFor="activity">
                                What is the Nature of Other Income-Generating Activity Subject to
                                Tax in Lesotho During the Past 12 Months?
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="activity"
                                name="activity"
                                value={activity}
                                onChange={handleActivityChange}
                            />
                        </div>
                    )}

                    <button type="button" className="btn-outlined" onClick={handleAdd}>
                        Add to List
                    </button>

                    <div className="mt-3">
                        <p className="text-primary-800">Employment Details({empDetails.length})</p>
                        <br />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <br />

                    <div className='flex justify-center'>
                        <button type="submit" className="btn" onClick={handleNextStep}>
                            Next
                        </button>
                        <div className='mr-8' />
                        {empDetails.length != 0 && <button className="btn-outlined" onClick={handleNext}>Skip</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page9;
