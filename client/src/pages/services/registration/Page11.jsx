import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AlertDialog from "../../../components/AlertDialog";
import { useNavigate } from 'react-router-dom';
import axios from "../../../interceptors/axios";


const Page11 = ({pk, user }) => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            declaration: false,
        },
    });

    const { errors } = formState;

    function onSubmit(data) {
        const formData = new FormData();
        formData.append("is_registered", true)

        axios.put(`users/${pk}/`,formData).
        then((response)=>{console.log(response.data)}).
        catch((error)=>console.error(error))


        handleClickOpen("You have successfully completed your registration")
    }

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('')

    const handleClickOpen = (message) => {
        setOpen(true);
        setMessage(message);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/app/dashboard')
    };

    return (
        <div className="w-full bg-white justify-center items-center flex py-10 px-5 rounded-lg">
            <div class="card" data-aos="zoom-in">
                <div class="card-header">
                    <h4>Declaration</h4>
                </div>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-check">
                            <input
                                class="form-check-input mt-1 mr-2"
                                type="checkbox"
                                value=""
                                id="declaration-check"
                                {...register("declaration", {
                                    required: "You must agree to the declaration",
                                })}
                            />
                            <label class="" for="declaration-check">
                                I confirm that the information I have provided is true and correct
                                to the best of my knowledge and belief. I understand that false or
                                misleading information may result in prosecution
                            </label>
                        </div>
                        {errors.declaration && ( // Conditionally render the error message
                            <p className="error">{errors.declaration.message}</p>
                        )}
                        <br />
                        <button type="submit" class="btn">
                            Accept
                        </button>
                    </form>
                </div>
            </div>
            <AlertDialog open={open} handleClose={handleClose} message={message} />
        </div>
    );
};

export default Page11;
