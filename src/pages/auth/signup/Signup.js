import React from 'react'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { DevTool } from '@hookform/devtools';
import { userSchema } from '../../../validations/userValidation';


function Signup () {

const{register, handleSubmit, control, formState: {errors}} = useForm({
  resolver: yupResolver(userSchema)
});
  
 const onSubmit=(data)=>{
      console.log(data)
    }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='firstName'>First Name: </label> <input type='text' id='firstName' placeholder="First Name..." {...register("firstName")}/>
          
          <p>{errors.firstName?.message}</p>
          
          <label htmlFor='lastName'>Last Name: </label> <input type='text' id='lastName' placeholder="Last Name..." {...register("lastName")} />
          
          <p>{errors.lastName?.message}</p>
          
          <label>Phone Number: </label> <input type='Number' placeholder="Phone Number..." {...register("phoneNumber")} />
          
          <p>{errors.phoneNumber?.message}</p>
          
          <label>Email: </label> <input type='text' id='email' placeholder="Email..." {...register("email")}/>
          
          <p>{errors.email?.message}</p>
          
          <label>Office Address: </label> <input type='text' placeholder="Office address..." {...register("officeAddress")}/>
         
          <p>{errors.officeAddress?.message}</p>
          
          <label>Date Of Birth: </label><input type='Number' placeholder="Date of Birth..." {...register("dateOfBirth")}/>
          
          <p>{errors.dateOfbirth?.message}</p>

          
          <label>Country : </label> <select {...register("country")}>
            <option>Nigeria</option>
            <option>South Africa</option>
            <option>America</option>
            <option>Ghana</option>
            <option>united kingdom</option>
            <option>Egypt</option>
          </select>
          
          <br></br>
          
          <label>State Of Origin: </label> <select {...register("stateOfOrigin")}>
            <option>Abia</option>
            <option>Akwa Ibom</option>
            <option>Anambara</option>
            <option>Bauchi</option>
            <option>Bayelsa</option>
            <option>Imo </option>
          </select>
          <br></br>
          <label>Password: </label> <input type='text' placeholder="Password..." {...register("password")}/>
          <br></br>
          <label>Confirm Password: </label> <input type='text' placeholder="Confirm password..." {...register("confirmPassword")}/>
          <br></br>
          <input type='submit'/>
        </form>
        <DevTool control={control}/>
      </div>
    </>
  )
}

export default Signup