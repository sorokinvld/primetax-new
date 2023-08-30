import React, { useState } from "react";
import axios from '../../../interceptors/axios';

const Page10 = ({pk, user, handleNext }) => {

    const [accountHolder, setAccountHolder] = useState(""); // stores the entered account holder name
    const [country, setCountry] = useState(""); // stores the entered country name
    const [selectedBank, setSelectedBank] = useState(""); // stores the selected bank name
    const [selectedBranch, setSelectedBranch] = useState(""); // stores the selected branch name
    const [accountNumber, setAccountNumber] = useState(""); // stores the entered account number
    const [accountType, setAccountType] = useState(""); // stores the entered account type
    const [bankDetails, setBankDetails] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
        axios.get(`/bank/?user=${pk}`).
        then((response)=>{
            console.log(response.data)
            setBankDetails(response.data)
        })
    },[])

    const banks = [
        {
            name: "Standard Lesotho Bank",
            branches: ["Maseru", "Teyateyaneng", "Mafeteng", "Mohale's Hoek"],
            swiftCode: "SBICLSMX",
        },
        {
            name: "Nedbank Lesotho",
            branches: ["Maseru", "Leribe", "Butha-Buthe", "Qacha's Nek"],
            swiftCode: "NEDLLSMX",
        },
        {
            name: "First National Bank Lesotho",
            branches: ["Maseru", "Mafeteng", "Berea", "Thaba-Tseka"],
            swiftCode: "FIRNLSMX",
        },
    ];

    function handleAccountHolderChange(event) {
        setAccountHolder(event.target.value);
    }

    function handleCountryChange(event) {
        setCountry(event.target.value);
    }

    function handleBankChange(event) {
        setSelectedBank(event.target.value);
        setSelectedBranch(""); // reset branch selection
    }

    function handleBranchChange(event) {
        setSelectedBranch(event.target.value);
    }

    function handleAccountNumberChange(event) {
        setAccountNumber(event.target.value);
    }

    function handleAccountTypeChange(event) {
        setAccountType(event.target.value);
    }

    function handleAdd() {
        if (
            accountHolder &&
            country &&
            selectedBank &&
            selectedBranch &&
            accountNumber &&
            accountType
        ) {
            setBankDetails([
                ...bankDetails,
                {
                    accountHolder,
                    country,
                    bankName: selectedBank,
                    branchName: selectedBranch,
                    accountNumber,
                    accountType,
                    swiftCode: banks.find((bank) => bank.name === selectedBank).swiftCode,
                },
            ]);

            let formData = new FormData();

            formData.append("user", pk)
            formData.append("account_holder", accountHolder)
            formData.append("country", country)
            formData.append("bank_name", selectedBank)
            formData.append("branch_name", selectedBranch)
            formData.append("account_number", accountNumber)
            formData.append("account_type", accountType)
            formData.append("swift_code", banks.find((bank) => bank.name === selectedBank).swiftCode)

            axios.post("/bank/", formData).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.error(error)
            })

            formData = new FormData()

            setAccountHolder("");
            setCountry("");
            setSelectedBank("");
            setSelectedBranch("");
            setAccountNumber("");
            setAccountType("");
            setError("")
        } else {
            alert("Please enter all the details");
        }
    }

    function validate() {
        if (bankDetails.length === 0) {
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
        <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
            <div className="card" data-aos="zoom-in">
                <div className="card-header">
                    <h4>Bank Details</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label className="form-label" for="account-holder">
                            Name of Account Holder:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="account-holder"
                            name="account-holder"
                            value={accountHolder}
                            onChange={handleAccountHolderChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="country">
                            Country where Bank is Located:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            value={country}
                            onChange={handleCountryChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="bank-name">
                            Bank Name:
                        </label>
                        <select
                            className="form-control"
                            id="bank-name"
                            name="bank-name"
                            value={selectedBank}
                            onChange={handleBankChange}
                        >
                            <option value="" disabled>
                                Select a bank
                            </option>
                            {banks.map((bank) => (
                                <option key={bank.name} value={bank.name}>
                                    {bank.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {selectedBank && (
                        <div className="form-group">
                            <label className="form-label" htmlFor="branch-name">
                                Branch:
                            </label>
                            <select
                                className="form-control"
                                id="branch-name"
                                name="branch-name"
                                value={selectedBranch}
                                onChange={handleBranchChange}
                            >
                                <option value="" disabled>
                                    Select a branch
                                </option>
                                {banks
                                    .find((bank) => bank.name === selectedBank)
                                    .branches.map((branch) => (
                                        <option key={branch} value={branch}>
                                            {branch}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    )}
                    <div className="form-group">
                        <label className="form-label" for="account-number">
                            Account Number:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="account-number"
                            name="account-number"
                            value={accountNumber}
                            onChange={handleAccountNumberChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="account-type">
                            Account Type:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="account-type"
                            name="account-type"
                            value={accountType}
                            onChange={handleAccountTypeChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="swift-code">
                            Swift Code:
                        </label>
                        <input
                            className="form-control"
                            id="swift-code"
                            name="swift-code"
                            type="text"
                            value={
                                selectedBank ? banks.find((bank) => bank.name === selectedBank).swiftCode : ""
                            }
                            readOnly
                        />
                    </div>
                    <button type="button" className="btn-outlined" onClick={handleAdd}>
                        Add to List
                    </button>

                    <div className="mt-3">
                        <h5 className="text-primary-800">Bank Accounts({bankDetails.length})</h5>
                        
                    </div>
                    {error && <p className="error">{error}</p>}
                    <br />
                    <div className='flex justify-center'>
                        <button type="submit" className="btn" onClick={handleNextStep}>
                            Next
                        </button>
                        <div className='mr-8' />
                        <button className="btn-outlined" onClick={handleNext}>Skip</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page10