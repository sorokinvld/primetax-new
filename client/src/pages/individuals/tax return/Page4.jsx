import React, { useState } from "react";
import axios from '../../../interceptors/axios';

const Page4 = ({ pk, user, handleNext }) => {

    const [travelExpensesChecked, setTravelExpensesChecked] = useState(false);
    const [educationExpensesChecked, setEducationExpensesChecked] = useState(false);
    const [technicalBooksChecked, setTechnicalBooksChecked] = useState(false);
    const [motorVehicleExpensesChecked, setMotorVehicleExpensesChecked] = useState(false);
    const [homeOfficeExpensesChecked, setHomeOfficeExpensesChecked] = useState(false);
    const [superannuationFundChecked, setSuperannuationFundChecked] = useState(false);
    const [donationsChecked, setDonationsChecked] = useState(false);

    function handleTravelExpensesChange(event) {
        setTravelExpensesChecked(event.target.checked);
    }

    function handleEducationExpensesChange(event) {
        setEducationExpensesChecked(event.target.checked);
    }

    function handleTechnicalBooksChange(event) {
        setTechnicalBooksChecked(event.target.checked);
    }

    function handleMotorVehicleExpensesChange(event) {
        setMotorVehicleExpensesChecked(event.target.checked);
    }

    function handleHomeOfficeExpensesChange(event) {
        setHomeOfficeExpensesChecked(event.target.checked);
    }

    function handleSuperannuationFundChange(event) {
        setSuperannuationFundChecked(event.target.checked);
    }

    function handleDonationsChange(event) {
        setDonationsChecked(event.target.checked);
    }

    function handleNextStep() {

        let formData = new FormData();

        if (travelExpensesChecked) {
            const travelExpenses = document.getElementById("travel-expenses").value

            formData.append("expense", "Travel Expenses");
            formData.append("amount", travelExpenses);
            formData.append("user", pk)

            axios.post("/expenses/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })

            formData = new FormData();
        }
        if (educationExpensesChecked) {
            const educationExpenses = document.getElementById("education-expenses").value

            formData.append("expense", "Education Expenses");
            formData.append("amount", educationExpenses);
            formData.append("user", pk)

            axios.post("/expenses/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })

            formData = new FormData();

        }
        if (technicalBooksChecked) {
            const technicalBooks = document.getElementById("technical-books").value
            formData.append("technical_books", technicalBooks);

            formData.append("expense", "Technial Books");
            formData.append("amount", travelExpenses);
            formData.append("user", pk)

            axios.post("/expenses/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })

            formData = new FormData();

        }
        if (motorVehicleExpensesChecked) {
            const motorVehicleExpenses = document.getElementById("motor-vehicle-expenses").value
            
            formData.append("expense", "Motor Vehicle Expenses");
            formData.append("amount", motorVehicleExpenses);
            formData.append("user", pk)

            axios.post("/expenses/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })

            formData = new FormData();
        }
        if (homeOfficeExpensesChecked) {
            const homeOfficeExpenses = document.getElementById("home-office-expenses").value
            formData.append("home_office_expenses", homeOfficeExpenses);

            formData.append("expense", "Home Office Expense");
            formData.append("amount", homeOfficeExpenses);
            formData.append("user", pk)

            axios.post("/expenses/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })

            formData = new FormData();
        }
        if (superannuationFundChecked) {
            const superannuationFund = document.getElementById("superannuation-fund").value

            formData.append("expense", "Superannuation Fund");
            formData.append("amount", superannuationFund);
            formData.append("user", pk)

            axios.post("/expenses/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })

            formData = new FormData();
        }
        if (donationsChecked) {
            const donations = document.getElementById("donations").value

            formData.append("expense", "Donations");
            formData.append("amount", donations);
            formData.append("user", pk)

            axios.post("/expenses/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })

            formData = new FormData();
        }

        handleNext();
    }

    return (
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
            <div className="card" data-aos="zoom-in">
                <div className="card-header">
                    <h4>Unreimbursed Employment-Related Expenses and Donations</h4>
                </div>
                <div className="card-body">
                    <p className="text-xs font-bold"><span className='text-red-600'>
                        Caution:</span> Before you complete this section, see instructions for
                        requirements you must meet <span><a className='text-blue-500 underline' href="http://" target="_blank"
                            rel="noopener noreferrer">here</a></span>.
                    </p>
                    <br />
                    <p className='bg-gray-200 rounded p-4 text-sm'>Please select the categories that apply to you and enter the amount you spent
                        or donated in the past year.</p>
                    <br />
                    <div>
                        <div className="form-group">
                            <div className="flex justify-start">
                                <input
                                    type="checkbox"
                                    className="form-check mr-2"
                                    id="travel-expenses-checkbox"
                                    name="expense"
                                    value="travel-expenses"
                                    onChange={handleTravelExpensesChange}
                                />
                                <label
                                    className="form-label text-start"
                                    for="travel-expenses-checkbox"
                                >
                                    Travel expenses incurred for work:
                                </label>
                            </div>
                            {travelExpensesChecked && (
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="form-control"
                                    id="travel-expenses"
                                    name="travel-expenses"
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <div className="flex justify-start">
                                <input
                                    type="checkbox"
                                    className="form-check mr-2"
                                    id="education-expenses-checkbox"
                                    name="expense"
                                    value="education-expenses"
                                    onChange={handleEducationExpensesChange}
                                />
                                <label
                                    className="form-label text-start"
                                    for="education-expenses-checkbox"
                                >
                                    Education expenses to improve work knowledge and skills:
                                </label>
                            </div>
                            {educationExpensesChecked && (
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="form-control"
                                    id="education-expenses"
                                    name="education-expenses"
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <div className="flex justify-start">
                                <input
                                    type="checkbox"
                                    className="form-check mr-2"
                                    id="technical-books-checkbox"
                                    name="expense"
                                    value="technical-books"
                                    onChange={handleTechnicalBooksChange}
                                />
                                <label
                                    className="form-label text-start"
                                    for="technical-books-checkbox"
                                >
                                    Expenses for technical and trade books and journals and association
                                    subscriptions:
                                </label>
                            </div>
                            {technicalBooksChecked && (
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="form-control"
                                    id="technical-books"
                                    name="technical-books"
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <div className="flex justify-start">
                                <input
                                    type="checkbox"
                                    className="form-check mr-2"
                                    id="motor-vehicle-expenses-checkbox"
                                    name="expense"
                                    value="motor-vehicle-expenses"
                                    onChange={handleMotorVehicleExpensesChange}
                                />
                                <label
                                    className="form-label text-start"
                                    for="motor-vehicle-expenses-checkbox"
                                >
                                    Motor vehicle expenses incurred for work:
                                </label>
                            </div>
                            {motorVehicleExpensesChecked && (
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="form-control"
                                    id="motor-vehicle-expenses"
                                    name="motor-vehicle-expenses"
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <div className="flex justify-start">
                                <input
                                    type="checkbox"
                                    className="form-check mr-2"
                                    id="home-office-expenses-checkbox"
                                    name="expense"
                                    value="home-office-expenses"
                                    onChange={handleHomeOfficeExpensesChange}
                                />
                                <label
                                    className="form-label text-start"
                                    for="home-office-expenses-checkbox"
                                >
                                    Home office expenses:
                                </label>
                            </div>
                            {homeOfficeExpensesChecked && (
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="form-control"
                                    id="home-office-expenses"
                                    name="home-office-expenses"
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <div className="flex justify-start">
                                <input
                                    type="checkbox"
                                    className="form-check mr-2"
                                    id="superannuation-fund-checkbox"
                                    name="expense"
                                    value="superannuation-fund"
                                    onChange={handleSuperannuationFundChange}
                                />
                                <label
                                    className="form-label text-start"
                                    for="superannuation-fund-checkbox"
                                >
                                    Contributions you made to a complying superannuation fund:
                                </label>
                            </div>
                            {superannuationFundChecked && (
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="form-control"
                                    id="superannuation-fund"
                                    name="superannuation-fund"
                                />
                            )}
                        </div>
                        <div className="form-group">
                            <div className="flex justify-start">
                                <input
                                    type="checkbox"
                                    className="form-check mr-2"
                                    id="donations-checkbox"
                                    name="expense"
                                    value="donations"
                                    onChange={handleDonationsChange}
                                />
                                <label
                                    className="form-label text-start"
                                    for="donations-checkbox"
                                >
                                    Donations paid to the Lesotho Sports and Recreation Commission:
                                </label>
                            </div>
                            {donationsChecked && (
                                <input
                                    type="number"
                                    placeholder="Enter Amount"
                                    className="form-control"
                                    id="donations"
                                    name="donations"
                                />
                            )}
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn" onClick={handleNextStep}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page4