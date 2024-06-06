import React from 'react'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'


function Signup () {
 const schema = yup.object().shape({

 FirstName: yup.string().required("Your first name is required"),
 lastName: yup.string().required("Your last name is required"),
 PhoneNumber: yup.number().min(11).max(11).required("Your phone Number is not correct"),
 email: yup.string().email().required("Your email is required"),
 officeAddress: yup.string().required("Your office address is required"),
 dateOfbirth: yup.number().integer().min(16).max(200).required("Your age must be 16 and above"),
 country: yup.string().required("Your country is required"),
 stateOforigin: yup.string().required("Your State is required"),
 password: yup.string().min(4).max(30).required(),
 confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password dont match").required(),



});

const{register, handleSubmit, formState: {errors}} = useForm({
  resolver: yupResolver(schema)
});
  

 const onSubmit=(data)=>{
      handleSubmit(data)


    }
  return (
    <>
      <div>
        <form >
          <label>First Name: </label> <input type='text' placeholder="First Name..." {...register("First Name")}/>
          
          <p>{errors.FirstName?.message}</p>
          
          <label>Last Name: </label> <input type='text' placeholder="Last Name..." {...register("Last Name")} />
          
          <p>{errors.LastName?.message}</p>
          
          <label>Phone Number: </label> <input type='Number' placeholder="Phone Number..." {...register("Phone number")} />
          
          <p>{errors.PhoneNumber?.message}</p>
          
          <label>Email: </label> <input type='text' placeholder="Email..." {...register("Email")}/>
          
          <p>{errors.email?.message}</p>
          
          <label>Office Address: </label> <input type='text' placeholder="Office address..." {...register("Office address")}/>
         
          <p>{errors.officeAddress?.message}</p>
          
          <label>Date Of Birth: </label><input type='Number' placeholder="Date of Birth..." {...register("Date of Birth")}/>
          
          <p>{errors.dateOfbirthe?.message}</p>

          
          <label>Country : </label> <select {...register("Country")}>
            <option>Nigeria</option>
            <option>South Africa</option>
            <option>America</option>
            <option>Ghana</option>
            <option>united kingdom</option>
            <option>Egypt</option>
          </select>
          
          <br></br>
          
          <label>State Of Origin: </label> <select {...register("State of Origin")}>
          <option>Abia</option>
            <option>Akwa Ibom</option>
            <option>Anambara</option>
            <option>Bauchi</option>
            <option>Bayelsa</option>
            <option>Imo </option>
          </select>
          
          
          <br></br>
          
          <label>Password: </label> <input type='text' placeholder="Password..." {...register("Password")}/>
          
          <br></br>
          <label>Confirm Password: </label> <input type='text' placeholder="Confirm password..." {...register("Confirm password")}/>
          <br></br>
          <input type='submit' onSubmit={()=>handleSubmit(onSubmit)}/>
        </form>
      </div>
    </>
  )
}

export default Signup