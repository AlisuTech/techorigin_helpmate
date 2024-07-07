import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { userSchema } from "../../../validations/userValidation";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../../app/user/userSlice";
import "./Signup.css";
import { getCountriesAndCities } from "../../../services/countryService";
import image from "../../../assets/signup/signup.jpg";
import { useNavigate } from "react-router-dom";

function Signup() {
    const { status, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
            {status === "failed" && <p>Error: {error?.message}</p>}
            <div>
                <div>
                    <div className="bg-main">

                        <div className="bg-form">
                            <p className="sign-up"> Sign up</p>
                            <p className="create-account">Create a new account to continue</p>

                            <div className="form-arrange">
                                <div>

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
                                    <p>{errors.dateOfBirth?.message}</p>
                                </div>

                                <div>
                                    <label>Country: </label>{" "}
                                    <select className="place-holder" {...register("country")}>
                                        <option value="">Select Country</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    <br></br> <br />
                                    <label>State Of Origin: </label>{" "}
                                    <select className="place-holder" {...register("stateOfOrigin")}>
                                        <option value="">Select City</option>
                                        {filteredCities.map((city, index) => (
                                            <option key={index} value={city.city}>
                                                {city.city}
                                            </option>
                                        ))}
                                    </select>
                                    <br></br> <br />
                                    <label htmlFor="pwd">Password: </label>{" "}
                                    <input
                                        className="place-holder"
                                        type="text"
                                        id="pwd"
                                        placeholder="Password..."
                                        {...register("password")}
                                    />
                                    <br></br> <br />
                                    <label htmlFor="confirmPwd">Confirm Password: </label>{" "}
                                    <input
                                        className="place-holder"
                                        type="text"
                                        id="confirmPwd"
                                        placeholder="Confirm password..."
                                        {...register("confirmPassword")}
                                    />
                                </div>
                            </div>

                            <br></br>
                            <button
                                type="button"
                                className="submit"
                                onClick={handleSubmit(onUserSubmit)}
                            >
                                Submit
                            </button>
                            <p className="log-in">I'm already a member! <span className="create-account">Login here</span></p>
                        </div>


                        <div className="form-image">
                            <img src={image} alt='' className ="form-img" />
                        </div>
                    </div>
                    {/* <DevTool control={control} /> */}
                </div>
            </div>
        </>
    );
}

export default Signup;