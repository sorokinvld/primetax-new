import React, { useState } from "react";

function TaxCalculator() {
  const [salary, setSalary] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateTax = () => {
    // multiply salary by 12 to get annual salary
    let annualSalary = salary * 12;
    let taxableIncome = annualSalary - 60000;
    let taxRate = 0;
    if (taxableIncome > 0) {
      if (taxableIncome <= 100000) {
        taxRate = 0.22;
      } else if (taxableIncome <= 200000) {
        taxRate = 0.27;
      } else if (taxableIncome <= 400000) {
        taxRate = 0.35;
      } else {
        taxRate = 0.37;
      }
      // multiply tax by 12 to get annual tax
      setTax(taxableIncome * taxRate / 12);
    } else {
      setTax(0);
    }
  };

  const handleInput = (e) => {
    let value = e.target.value;
    if (/^\d*$/.test(value)) {
      setSalary(value);
    }
  };

  const handleButton = (value) => {
    let button = document.getElementById(value);
    button.classList.add("transform", "scale-95");
    setTimeout(() => {
      button.classList.remove("transform", "scale-95");
    }, 100);
    switch (value) {
      case "C":
        setSalary(0);
        setTax(0)
        break;
      case "<":
        setSalary(salary.slice(0, -1));
        break;
      case "=":
        calculateTax();
        break;
      default:
        setSalary(salary + value);
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h1 className="text-xl text-primary-900 font-bold mb-4">
          PAYE Tax Calculator
        </h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center space-x-2">
            <label htmlFor="salary" className="text-slate-600 text-sm">
              Monthly Gross Income
            </label>
            <input
              id="salary"
              type="number"
              min="0"
              value={salary}
              onChange={handleInput}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <label htmlFor="tax" className="text-slate-600 text-sm">
              Monthly Tax
            </label>
            <input
              id="tax"
              type="number"
              value={tax}
              disabled
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-400">This is the calculated result based on your income.</p>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              id="C"
              type="button"
              onClick={() => handleButton("C")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              C
            </button>
            <button
              id="<"
              type="button"
              onClick={() => handleButton("<")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              &lt;
            </button>
            <button
              id="7"
              type="button"
              onClick={() => handleButton("7")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              7
            </button>
            <button
              id="8"
              type="button"
              onClick={() => handleButton("8")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              8
            </button>
            <button
              id="9"
              type="button"
              onClick={() => handleButton("9")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              9
            </button>
            <button
              id="4"
              type="button"
              onClick={() => handleButton("4")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              4
            </button>
            <button
              id="5"
              type="button"
              onClick={() => handleButton("5")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              5
            </button>
            <button
              id="6"
              type="button"
              onClick={() => handleButton("6")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              6
            </button>
            <button
              id="1"
              type="button"
              onClick={() => handleButton("1")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              1
            </button>
            <button
              id="2"
              type="button"
              onClick={() => handleButton("2")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              2
            </button>
            <button
              id="3"
              type="button"
              onClick={() => handleButton("3")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              3
            </button>
            <button
              id="0"
              type="button"
              onClick={() => handleButton("0")}
              className="bg-gray-200 text-gray-800 font-semibold py-2 rounded-md hover:bg-gray-300"
            >
              0
            </button>
            <button
              id="="
              type="submit"
              onClick={() => handleButton("=")}
              className="col-span-4 bg-primary-900 text-white font-semibold py-2 rounded-md hover:bg-primary-800"
            >
              =
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaxCalculator;