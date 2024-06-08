import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import { DevTool } from '@hookform/devtools';
import { userSchema } from '../../../validations/userValidation';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../../app/user/userSlice';
import './Signup.css'
import { getCountriesAndCities } from '../../../services/countryService';


function Signup () {

  const { status, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const{register, handleSubmit, watch, control, formState: {errors}} = useForm({
    resolver: yupResolver(userSchema)
  });
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const selectedCountry = watch('country');

  useEffect(() => {
    const fetchCountriesAndCities = async () => {
      try {
        const data = await getCountriesAndCities();
        const uniqueCountries = [...new Set(data.map(item => item.country))];
        setCountries(uniqueCountries);
        setCities(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountriesAndCities();
  }, []);
  const filteredCities = cities.filter(city => city.country === selectedCountry);
  
 const onSubmit=(data)=>{
      console.log(data)
      dispatch(signupUser(data));
    }
  return (
    <>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <p>Sign up succeeded!</p>}
      {status === 'failed' && <p>Error: {error}</p>}
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
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
          </select>
          
          <br></br>
          
          <label>State Of Origin: </label> <select {...register("stateOfOrigin")}>
          <option value="">Select City</option>
          {filteredCities.map((city, index) => (
            <option key={index} value={city.city}>{city.city}</option>
          ))}
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