import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import "../App.css"

function Form() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [submit, setSubmit] = useState(false)
    const onSubmit =  () => {
        setSubmit(true)
      }

  return (

    <div className='wrpper'>
        {submit && (<h2>Registration Successful !</h2>)}
        <form action="">
            <input placeholder='First Name' 
            type="text"             
            {...register("firstName", {
                required: "First Name is required!" 
            })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <input placeholder='Last Name'
            {...register("name", {
                required: "Last name is required!" 
            })}
            />
            {errors.name && <p>{errors.name.message}</p>}


            <input placeholder='Email' 
            {...register("email", {
                required: "Email is required!",
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email"
                }  
            })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input placeholder='Phone'
            {...register("phoneNumber", {
                required: "Phone number is required!",
                minLength: {
                    value: 10,
                    message: "Phone number must have at least 10 numbers"
                },
            })}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

            <button onClick={handleSubmit(onSubmit)}>Submit</button>
        </form>
      
    </div>
  )
}

export default Form