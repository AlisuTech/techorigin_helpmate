import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { useDispatch, useSelector } from "react-redux";
import "./Signup.css";
import { getCountriesAndCities } from "../../../services/countryService";
import { useNavigate } from "react-router-dom";
import { signupServiceProvider } from "../../../app/serviceProvider/serviceProviderSlice";
import { serviceProviderSchema } from "../../../validations/serviceProviderValidation";

function ServiceProvider() {
  const { status, error } = useSelector((state) => state.serviceProvider);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(serviceProviderSchema),
  });
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const selectedCountry = watch("country");

  useEffect(() => {
    const fetchCountriesAndCities = async () => {
      try {
        const data = await getCountriesAndCities();
        const uniqueCountries = [...new Set(data.map((item) => item.country))];
        setCountries(uniqueCountries);
        setCities(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountriesAndCities();
  }, []);
  const filteredCities = cities.filter(
    (city) => city.country === selectedCountry
  );

  const onServiceProviderSubmit = (data) => {
    console.log(data);
    dispatch(signupServiceProvider(data));
  };

  useEffect(() => {
    if (status === "succeeded") {
      console.log("success");
      navigate("/login");
    } 

  }, [status, navigate]);


  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && <p>Sign up succeeded!</p>}
      {status === "failed" && <p>Error: {error.message}</p>}
      <div className="bg-main">
        <div>
          <div className="bg-form">
            <p className="sign-up"> Sign up</p> <br></br>
            <p className="create-account">Create your account</p>
            <label htmlFor="firstName">First Name: </label>{" "}
            <input
              className="place-holder"
              type="text"
              id="firstName"
              placeholder="First Name..."
              {...register("firstName")}
            />
            <p>{errors.firstName?.message}</p>
            <label htmlFor="lastName">Last Name: </label>{" "}
            <input
              className="place-holder"
              type="text"
              id="lastName"
              placeholder="Last Name..."
              {...register("lastName")}
            />
            <p>{errors.lastName?.message}</p>
            <label htmlFor="number">Phone Number: </label>{" "}
            <input
              className="place-holder"
              type="Number"
              id="number"
              placeholder="Phone Number..."
              {...register("phoneNumber")}
            />
            <p>{errors.phoneNumber?.message}</p>
            <label htmlFor="email">Email: </label>{" "}
            <input
              className="place-holder"
              type="text"
              id="email"
              placeholder="Email..."
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <label htmlFor="dob">Date Of Birth: </label>
            <input
              className="place-holder"
              type="date"
              id="dob"
              placeholder="Date of Birth..."
              {...register("dateOfBirth")}
            />
            <p>{errors.dateOfbirth?.message}</p>
            <label>Country : </label>{" "}
            <select className="place-holder" {...register("country")}>
              <option value="">Select Country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <br></br>
            <label>State Of Origin: </label>{" "}
            <select className="place-holder" {...register("stateOfOrigin")}>
              <option value="">Select City</option>
              {filteredCities.map((city, index) => (
                <option key={index} value={city.city}>
                  {city.city}
                </option>
              ))}
            </select>
            <br></br>

            <label htmlFor="officeAdd">Office Address: </label>{" "}
            <input
              className="place-holder"
              type="text"
              id="officeAdd"
              placeholder="Office address..."
              {...register("officeAddress")}
            />
            <p>{errors.officeAddress?.message}</p>
            <br></br>

            <label htmlFor="price">Price: </label>{" "}
            <input
                className="place-holder"
                type="number"
                id="price"
                placeholder="Price..."
                {...register("price")}
            />
            <p>{errors.price?.message}</p>
            <br></br>

            <label htmlFor="pwd">Password: </label>{" "}
            <input
              className="place-holder"
              type="text"
              id="pwd"
              placeholder="Password..."
              {...register("password")}
            />
            <br></br>
            <label htmlFor="confirmPwd">Confirm Password: </label>{" "}
            <input
              className="place-holder"
              type="text"
              id="confirmPwd"
              placeholder="Confirm password..."
              {...register("confirmPassword")}
            />
            <br></br>
            <button
              type="button"
              className="submit"
              onClick={handleSubmit(onServiceProviderSubmit)}
            >
              Submit
            </button>
          </div>
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
}

export default ServiceProvider;