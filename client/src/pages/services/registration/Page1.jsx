import React, { useEffect, useState } from 'react'
import AlertDialog from '../../../components/AlertDialog';
import axios from '../../../interceptors/axios';

const Page1 = ({pk, user,  handleNext }) => {

    const [tin, setTin] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setTin(user.tin)
    }, [])

    function validateTinNumber(tinNumber) {
        if (typeof tinNumber !== "string") {
            return false;
        }

        tinNumber = tinNumber.trim();

        if (tinNumber.length !== 9 && tinNumber.length !== 11) {
            return false;
        }

        if (tinNumber[tinNumber.length - 2] !== "-") {
            return false;
        }

        if (!/^\d+-?\d*$/.test(tinNumber)) {
            return false;
        }

        return true;
    }

    function validateForm(event) {
        event.preventDefault()

        const tinInput = document.getElementById("tinNumber");
        const tinNumber = tinInput.value;

        if (!validateTinNumber(tinNumber)) {
            handleClickOpen()
            return false;
        }

        const userData = {}

        userData.tin = tinNumber;

        const userDataString = JSON.stringify(userData);

        axios.put(`/users/${pk}/`,userDataString, {headers: {'Content-Type': 'application/json'}})
        .then((response)=>{
            console.log(response);
            handleNext()
        })
        .catch((error)=>console.error(error))

        return false;
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [option, setOption] = useState(null);
    function handleOptionChange(e) {
        setOption(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (option === "continue") {
            console.log("Continuing registration with Tin number " + tin);
            handleNext();
            setError('')
        } else if (option === "change") {
            console.log("Changing Tin number to a different one");
            setTin('');
            setError('')
        } else if (option === "cancel") {
            console.log("Cancelling registration");
            window.location.reload();
            setError('')
        } else {
            setError("Please select an option")
        }
    }

    return (
        <div className="card" data-aos="zoom-in">
            <div className="card-body">
                {tin ?
                    <div>
                        <form onSubmit={handleSubmit}>
                            <p>
                                Hello, it seems that you are already registered with a Tin number {tin}. Do you want to continue registration with this number or use a different one? Please choose one of the options below.
                            </p>
                            <br />
                            <div>
                                <input
                                    className='form-check-input'
                                    type="radio"
                                    id="continue"
                                    name="option"
                                    value="continue"
                                    checked={option === "continue"}
                                    onChange={handleOptionChange}
                                />
                                <label className='form-check-label' htmlFor="continue">Continue registration with Tin number {tin}.</label>
                            </div>
                            <div>
                                <input
                                    className='form-check-input'
                                    type="radio"
                                    id="change"
                                    name="option"
                                    value="change"
                                    checked={option === "change"}
                                    onChange={handleOptionChange}
                                />
                                <label className='form-check-label'
                                    htmlFor="change">Use a different Tin number.</label>
                            </div>
                            <div>
                                <input
                                    className='form-check-input'
                                    type="radio"
                                    id="cancel"
                                    name="option"
                                    value="cancel"
                                    checked={option === "cancel"}
                                    onChange={handleOptionChange}
                                />
                                <label className='form-check-label' htmlFor="cancel">Cancel registration.</label>
                            </div>
                            <br />
                            <button className='btn' type="submit">Submit</button>
                        </form>                    </div> :
                    <form className='space-y-6'>
                        <div className="form-group">
                            <label HtmlFor="tinNumber" className="form-label">TIN Number:</label>
                            <input type="text" className="form-control" id="tinNumber" name="tinNumber"
                                placeholder="Enter TIN number" />
                        </div>
                        <small className="form-text text-muted mt-5">
                            Don't have a TIN number? <a href="#" className="underline text-primary text-blue-500">Click here</a>
                        </small>
                        {error && <p className='error'>{error}</p>}
                        <button type="submit" className="btn" onClick={validateForm}>Next</button>
                    </form>}
            </div>
            <AlertDialog open={open} handleClose={handleClose} message={"Please enter a valid TIN number"} />
        </div>
    )
}

export default Page1