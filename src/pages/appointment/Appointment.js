import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { appointmentSchema } from "../../validations/appointmentValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./Appointment.css";
import Photo2 from "../../assets/psychological/Photo2.jpeg";
import { createAppointment } from "../../app/appointment/appointmentSlice";
import { fetchDepartmentsAndServiceProviders } from "../../app/serviceProvider/serviceProviderSlice";
import Loader from "../../components/Loader";

const Appointment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { serviceProviders, departments } = useSelector((state) => state.serviceProvider);
  const { status, error, loading } = useSelector((state) => state.appointment);
  const user = useSelector((state) => state.user.user);
  const userId = user ? user.id : null;

  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(appointmentSchema),
  });
  const selectedDepartment = watch("department");

  useEffect(() => {
    dispatch(fetchDepartmentsAndServiceProviders());
  }, [dispatch]);

  useEffect(() => {
    console.log("Fetched Service Providers:", serviceProviders);
    console.log("Fetched Departments:", departments);
    console.log("User ID:", userId);
  }, [serviceProviders, departments, userId]);

  const filteredServiceProviders = useMemo(() => {
    return serviceProviders 
      ? serviceProviders.filter((item) => item.department === selectedDepartment)
      : [];
  }, [serviceProviders, selectedDepartment]);

  useEffect(() => {
    console.log("Filtered Service Providers:", filteredServiceProviders);
  }, [filteredServiceProviders, selectedDepartment]);

  const onSubmit = (data) => {
    if (!userId) {
      alert("User is not logged in. Please log in to book an appointment.");
      return;
    }
    const appointmentData = { ...data, userId };
    console.log('Appointment Data:', appointmentData);  // Log the appointment data
    dispatch(createAppointment(appointmentData)).then((result) => {
      if (result.error) {
        console.error("Error creating appointment:", result.error);
      } else {
        navigate("/appointment");
      }
    });
  };

  if (status === 'loading') {
    console.log("loading")
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    console.log("failed")
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-5 border-yellow">
        <div className="border-green ">
          <div className="border-green">
            <h2 className="text-3xl font-bold mb-4">Appointment Booking</h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg">
                    Preferred Date of appointment:
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    {...register("date")}
                    className="mt-1 w-full border rounded px-3 py-2 border-blue"
                  />
                </div>
                <div>
                  <label className="block text-lg">Time of appointment:</label>
                  <input
                    type="time"
                    name="time"
                    required
                    {...register("time")}
                    className="mt-1 w-full border rounded px-3 py-2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                    {departments.filter(department => department).map((department, index) => (
                      <option key={index} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-lg" htmlFor="service_provider">
                    Service Provider:
                  </label>
                  <select
                    className="mt-1 w-full border rounded px-3 py-2"
                    id="service_provider"
                    {...register("serviceProvider")}
                  >
                    <option value="">Select Service Provider</option>
                    {filteredServiceProviders.map((serviceProvider, index) => (
                      <option
                        key={index}
                        value={serviceProvider?._id} // Safely access _id
                      >
                        {serviceProvider?.firstName} {serviceProvider?.lastName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Payment Details</h3>
                <label className="block mt-2">
                  <input type="checkbox" className="mr-2" />
                  Credit/Debit Card
                </label>
              </div>
              <div>
                <label className="block text-lg">
                  Do you want a free three session trial?
                </label>
                <div className="flex space-x-4 mt-1">
                  <label>
                    <input
                      type="radio"
                      name="trial"
                      value="yes"
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="trial"
                      value="no"
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <button
                  type="submit"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                  Book
                </button>
                <button
                  type="reset"
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                  Reset
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                {loading && <Loader />}
              </div>
            </form>
          </div>
        </div>
        <div className="border-red md:w-[30rem] md:block hidden w-[20rem]">
          <img src={Photo2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Appointment;
