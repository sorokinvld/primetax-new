import { useState, useEffect } from "react";

function useBankDetails() {
    const [bankDetails, setBankDetails] = useState({});

    useEffect(() => {
        function fetchBankDetails() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        "standard-lesotho-bank-income-tax-income": {
                            "Account name": "Income Tax Income",
                            "Account No": "9080000000001",
                            "Account type": "Current",
                            "Branch name": "Maseru",
                            "Branch code": "062067",
                        },
                        "standard-lesotho-bank-value-added-tax-account": {
                            "Account name": "Value Added Tax Account",
                            "Account No": "9080000000002",
                            "Account type": "Current",
                            "Branch name": "Maseru",
                            "Branch code": "062067",
                        },
                        "standard-lesotho-bank-toll-fees-account": {
                            "Account name": "Toll Fees Account",
                            "Account No": "9080000000003",
                            "Account type": "Current",
                            "Branch name": "Maseru",
                            "Branch code": "062067",
                        },
                        "netbank-lesotho-income-tax-income": {
                            "Account name": "Income Tax Income",
                            "Account No": "200000000001",
                            "Account type": "Current",
                            "Branch name": "Maseru Mall",
                            "Branch code": "390161",
                        },
                        "netbank-lesotho-value-added-tax-account": {
                            "Account name": "Value Added Tax Account",
                            "Account No": "200000000002",
                            "Account type": "Current",
                            "Branch name": "Maseru Mall",
                            "Branch code": "390161",
                        },
                        "first-national-bank-income-tax-income": {
                            "Account name": "Income Tax Income",
                            "Account No": "62400000001",
                            "Account type": "Current",
                            "Branch name": "(FNB) Kingsway Branch Maseru Lesotho ",
                            "Branch code": "40034",
                        },
                        "first-national-bank-value-added-tax-vat-account": {
                            "Account name": "Value Added Tax (VAT) Account",
                            "Account No": "62400000002",
                            "Account type": "Current",
                            "Branch name": "(FNB) Kingsway Branch Maseru Lesotho ",
                            "Branch code": "50032",
                        },
                    });
                }, 0);
            });
        }

        fetchBankDetails().then((data) => { setBankDetails(data); });
    }, []);

    return bankDetails;
}

export default useBankDetails;
