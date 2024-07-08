import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { signupServiceProvider } from "../../../app/serviceProvider/serviceProviderSlice";
import { serviceProviderSchema } from "../../../validations/serviceProviderValidation";
import { getDepartments } from "../../../services/categoryService";

function ServiceProvider() {
  const { status, error } = useSelector((state) => state.serviceProvider);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(serviceProviderSchema),
  });
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = () => {
      const uniqueDepartments = [
        ...new Set(getDepartments.map((item) => item.department)),
      ];
      setDepartments(uniqueDepartments);
    };

    fetchDepartments();
  }, []);

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
      {status === "failed" && <p>Error: {error?.message}</p>}
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
            <label htmlFor="email">Email: </label>{" "}
            <input
              className="place-holder"
              type="text"
              id="email"
              placeholder="Email..."
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <div>
              <label className="block text-lg" htmlFor="department">
                Department:
              </label>
              <select
                className="mt-1 w-full border rounded px-3 py-2"
                id="department"
                {...register("department")}
              >
                <option value="">Select Department</option>
                {departments.map((department, index) => (
                  <option key={index} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

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
        </div>
      </div>
    </>
  );
}

export default ServiceProvider;
