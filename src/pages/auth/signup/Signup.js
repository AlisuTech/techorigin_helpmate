import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { userSchema } from "../../../validations/userValidation";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../../app/user/userSlice";
import "./Signup.css";
import { getCountriesAndCities } from "../../../services/countryService";
import { useNavigate } from "react-router-dom";
import { signupServiceProvider } from "../../../app/serviceProvider/serviceProviderSlice";

function Signup() {
  const { status, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userType, setUserType] = useState("user");
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
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

  const onUserSubmit = (data) => {
    console.log(data);
    dispatch(signupUser(data));
    navigate("/login");
  };
  const onServiceProviderSubmit = (data) => {
    console.log(data);
    dispatch(signupServiceProvider(data));
    navigate("/login");
  };

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && <p>Sign up succeeded!</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <div className="bg-main">
        <div>
          {/* User Type Selection */}
          <div>
            <label>
              <input
                type="radio"
                value="user"
                checked={userType === "user"}
                onChange={() => setUserType("user")}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                value="serviceProvider"
                checked={userType === "serviceProvider"}
                onChange={() => setUserType("serviceProvider")}
              />
              ServiceProvider
            </label>
          </div>

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
            <label>Phone Number: </label>{" "}
            <input
              className="place-holder"
              type="Number"
              placeholder="Phone Number..."
              {...register("phoneNumber")}
            />
            <p>{errors.phoneNumber?.message}</p>
            <label>Email: </label>{" "}
            <input
              className="place-holder"
              type="text"
              id="Email"
              placeholder="Email..."
              {...register("Email")}
            />
            <p>{errors.email?.message}</p>
            <label>Date Of Birth: </label>
            <input
              className="place-holder"
              type="Number"
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
            <label>Password: </label>{" "}
            <input
              className="place-holder"
              type="text"
              placeholder="Password..."
              {...register("password")}
            />
            <br></br>
            <label>Confirm Password: </label>{" "}
            <input
              className="place-holder"
              type="text"
              placeholder="Confirm password..."
              {...register("confirmPassword")}
            />
            <br></br>
            {userType === "user" && (
              <button
                type="button"
                className="submit"
                onClick={handleSubmit(onUserSubmit)}
              >
                Submit
              </button>
            )}
            {userType === "serviceProvider" && (
              <>
                <label>Office Address: </label>{" "}
                <input
                  className="place-holder"
                  type="text"
                  placeholder="Office address..."
                  {...register("officeAddress")}
                />
                <p>{errors.officeAddress?.message}</p>
                <button
                  type="button"
                  className="submit"
                  onClick={handleSubmit(onServiceProviderSubmit)}
                >
                  Submit
                </button>
              </>
            )}
          </div>

          <DevTool control={control} />
        </div>
      </div>
    </>
  );
}

export default Signup;
