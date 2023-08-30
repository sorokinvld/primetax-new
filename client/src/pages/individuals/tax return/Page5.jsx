import React, { useState } from "react";
import { useForm } from "react-hook-form"; 
import axios from '../../../interceptors/axios';
// Import useForm hook

const Page5 = ({pk, user,  handleNext }) => {
  const [pensions, setPensions] = useState([]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleAddPension = (data) => {

    setPensions([
      ...pensions,
      {
        payerName: data.pension_payer,
        payerTin: data.pension_payer_tin,
        startDate: data.pension_start,
        endDate: data.pension_end,
      },
    ]);


    data.user = pk;

    console.log(data)


    axios.post("/pension/", data).then((response) => {
      console.log(response.data);
  }).catch((error) => {
      console.error(error)
  })
    reset()

  }
  return (
    <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
      <div className="card" data-aos="zoom-in">
        <div className="card-header">
          <h4>Pension Income</h4>
        </div>
        <div className="card-body">

          <p
            className='bg-gray-200 rounded p-4 text-sm text-primary-900'>
            Fill in your pension income that is taxable in Lesotho. Do not include any
            pension income from foreign employment or war pension or gratuity if you
            retired before 11 March 1993.</p>
          <br />
          <form onSubmit={handleSubmit(handleAddPension)}>
            <div className="form-group">
              <label className="form-label" htmlFor="pension_payer">
                Name of employer or pension payer:
              </label>
              <input
                type="text"
                className="form-control"
                id="pension_payer"
                name="pension_payer"
                {...register("pension_payer", { required: true })}
              />
              {errors["pension_payer"] && <span class="error">This field is required</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="pension_payer_tin">
                Employer or pension payer TINs:
              </label>
              <input
                type="text"
                className="form-control"
                id="pension_payer_tin"
                name="pension_payer_tin"
                {...register("pension_payer_tin", { required: true })}
              />
              {errors["pension_payer_tin"] && <span class="error">This field is required</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="pension_start">
                Pension start date:
              </label>
              <input
                type="date"
                className="form-control"
                id="pension_start"
                name="pension_start"
                {...register("pension_start", { required: true })}
              />
              {errors["pension_start"] && <span class="error">This field is required</span>}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="pension_end">
                Pension end date:
              </label>
              <input
                type="date"
                className="form-control"
                id="pension_end"
                name="pension_end"
                {...register("pension_end", { required: true })}
              />
              {errors["pension_end"] && <span class="error">This field is required</span>}
            </div>
            <button type="submit" className="btn-outlined text-sm" id="add-pension-btn">
              Add to List
            </button>
          </form>


          <div className="mt-3">
            <h5>Pension Details:</h5>
            <ol className="details-list" id="pension-details-list">
              {pensions.map((item) => (
                <li key={item.payerTin}>
                  {item.payerName} - {item.payerTin} - {item.startDate} -{" "}
                  {item.endDate}
                </li>
              ))}
            </ol>
          </div>
          <br />
          <button type="button" className="btn" onClick={handleNext}>
            Finish
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page5