import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from '../../../interceptors/axios';

const Page3 = ({ pk, user, handleNext }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    handleNext()
  }

  const [unempDetails, setUnempDetails] = useState([])

  const handleAddToList = () => {
    const from = document.getElementById("unemployed-from").value
    const until = document.getElementById("unemployed-until").value
    if (from && until) {
      const newItem = { from, until }
      setUnempDetails([...unempDetails, newItem])

      let formData = new FormData();

      formData.append("unemployed_from", from)
      formData.append("unemployed_until", until)
      formData.append("user", pk)

      axios.post("/employment/", formData).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error)
      })

      formData = new FormData();
      reset()
    }
  }

  return (
    <div className='w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg'>
      <div class="card" data-aos="zoom-in">
        <div class="card-header">
          <h4>Employment Information</h4>
        </div>
        <div class="card-body">

          <p>Enter the dates when you were unemployed in the Tax Year</p>
          <br />
          <div class="form-group">
            <label className='form-label' for="unemployed-from">Unemployed from:</label>
            <input type="date" class="form-control" id="unemployed-from"
              name="unemployed-from" {...register("unemployed-from", {
                required: true,
                validate: (value) =>
                  value <= new Date().toISOString().slice(0, 10) ||
                  true,
              })} />
            {errors["unemployed-from"] && <span class="error">This field is required</span>}
          </div>
          <div class="form-group">
            <label className='form-label' for="unemployed-until">Unemployed until:</label>
            <input type="date" class="form-control" id="unemployed-until"
              name="unemployed-until" {...register("unemployed-until", {
                required: true,
                validate: (value) =>
                  value <= new Date().toISOString().slice(0, 10) ||
                  true,
              })} />
            {errors["unemployed-until"] && <span class="error">This field is required</span>}
          </div>
          <button type="button" class="btn-outlined text-sm" onClick={handleSubmit(handleAddToList)}>Add
            to List</button>

          <div class="mt-3">
            <h5>Unemployment Details:</h5>
            <ul id="unemp-details-list">
              {unempDetails.map((item, index) => (
                <li className='form-label' key={index}>From: {item.from} Until: {item.until}</li>
              ))}
            </ul>
          </div>
          <br />
          <div className='flex justify-center'>
            {/* Use handleSubmit to wrap the onSubmit function */}
            <button type="submit" class="btn" onClick={handleSubmit(onSubmit)}>Next</button>
            <div className='mr-8' />
            {/* Use handleNext as the onClick handler for skip button */}
            <button class="btn-outlined" onClick={handleNext}>Skip</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page3
