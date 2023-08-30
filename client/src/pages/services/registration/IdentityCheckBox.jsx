import React, { useState } from "react";
import Page3 from "./Page3"; // import your passport component
import Page4 from "./Page4"; // import your foreign ID component
import Page5 from "./Page5"; // import your other ID component

const IdentityCheckbox = ({ pk, user, handleNext }) => {
    const [passportChecked, setPassportChecked] = useState(false);
    const [foreignIdChecked, setForeignIdChecked] = useState(false);
    const [otherIdChecked, setOtherIdChecked] = useState(false);
    const [index, setIndex] = useState(0);
    const [error, setError] = useState('');

    const handlePassportChange = (e) => {
        setPassportChecked(e.target.checked);
        setError('');
        if (e.target.checked) {
            setIndex(1)
        }
        else {
            setIndex(0)
        }
    };

    const handleSelected = () => {
        setIndex(0)
    }

    const handleForeignIdChange = (e) => {
        setForeignIdChecked(e.target.checked);
        setError('');
        if (e.target.checked) {
            setIndex(2)
        }
        else {
            setIndex(0)
        }
    };

    const handleOtherIdChange = (e) => {
        setOtherIdChecked(e.target.checked);
        setError('');
        if (e.target.checked) {
            setIndex(3)
        }
        else {
            setIndex(0)
        }

    };

    const handleNextSubmit = () => {
        if (!passportChecked && !foreignIdChecked && !otherIdChecked) {
            setError("Please select at least one option");
        } else {
            handleNext();
        }
    };

    return (
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
            <div className="card">
                <div className="card-header">
                    <h3>Choose one or more ways to verify your identity.</h3>
                </div>
                {index == 0 && <div className="card-body flex flex-col items-center">
                    <div className="flex flex-col items-start">
                        <label className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={passportChecked}
                                onChange={handlePassportChange}
                            />
                            <span className="form-check-label">Passport</span>
                        </label>
                        <label className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={foreignIdChecked}
                                onChange={handleForeignIdChange}
                            />
                            <span className="form-check-label">Foreign ID</span>
                        </label>
                        <label className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={otherIdChecked}
                                onChange={handleOtherIdChange}
                            />
                            <span className="form-check-label">Other Identity document</span>
                        </label>
                    </div>
                    {error && <span className="error">{error}</span>}
                </div>}
                {passportChecked && index == 1 && <Page3 pk={pk} user={user} handleNext={handleSelected} />}
                {foreignIdChecked && index == 2 && <Page4 pk={pk} user={user} handleNext={handleSelected} />}
                {otherIdChecked && index == 3 && <Page5 pk={pk} user={user} handleNext={handleSelected} />}
                {index == 0 && <div className='flex justify-center'>
                    <button type="submit" className="btn" onClick={handleNextSubmit}>Next</button>
                </div>}
                <br />
            </div>
        </div>
    );
};

export default IdentityCheckbox;
