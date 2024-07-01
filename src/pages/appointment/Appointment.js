import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { appointmentSchema } from "../../validations/appointmentValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signupServiceProvider } from "../../app/serviceProvider/serviceProviderSlice";
import { getDepartmentsAndServiceProvider } from "../../services/categoryService";
import "./Appointment.css";
import Photo2 from "../../assets/psychological/Photo2.jpeg";
import MakePayment from "./MakePayment";

const Appointment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [departments, setDepartments] = useState([]);
  const [serviceProviders, setServiceProviders] = useState([]);

  const { register, handleSubmit, watch } = useForm({
    resolver: yupResolver(appointmentSchema),
  });
  const selectedDepartment = watch("department");

  const onServiceProviderSubmit = (data) => {
    console.log(data);
    dispatch(signupServiceProvider(data));
    navigate("/login");
  };

  const Cancel = (data) => {
    console.log(data);
    navigate("/login");
  };

  useEffect(() => {
    const fetchDepartmentsAndServiceProviders = () => {
      const data = getDepartmentsAndServiceProvider;
      const uniqueDepartments = [
        ...new Set(data.map((item) => item.department)),
      ];
      setDepartments(uniqueDepartments);
      setServiceProviders(data);
    };

    fetchDepartmentsAndServiceProviders();
  }, []);

  const filteredServiceProviders = serviceProviders.filter(
    (item) => item.department === selectedDepartment
  );

  return (
    <>
      <div>
        <div></div>

        <div class="backgrounddiv text-black">
          <div class="display">
            <div class="textpadding ">
              <div class="bookappointment2">
                <div class="bookappointment fonts "> APPOINTMENT</div>
                <br />
              </div>

              <div class="fontsa bookappointment ">BOOKING</div>

              <div class="userdiv">
                {/* <i class="fas fa-user fa-7x icon icons"></i> */}
                <br />
                <b></b>
                <br />
              </div>

              <div>
                <br />

                <p>
                  Preferred Date of appointment: &nbsp;
                  <input
                    className="inputdesign"
                    type="date"
                    id="date"
                    name="date"
                    required
                    {...register("date")}
                  />
                </p>
                <br />
                <p>
                  <label className=" font-bold" for="service_provider">
                    Service Provider: &nbsp;
                  </label>
                  <select
                    id="service_provider"
                    {...register("serviceProvider")}
                  >
                    <option value="">Select Service Provider</option>
                    {filteredServiceProviders.map((serviceProvider, index) => (
                      <option
                        key={index}
                        value={serviceProvider.serviceProvider}
                      >
                        {serviceProvider.serviceProvider}
                      </option>
                    ))}
                  </select>
                </p>
                <br />
                <p>
                  <label className=" font-bold" for="time">
                    Time of appointment: &nbsp;
                  </label>
                  <input
                    className="inputdesign"
                    type="time"
                    id="time"
                    name="time"
                    required
                    {...register("time")}
                  />
                  <label className=" font-bold" for="department">
                    Department:
                  </label>
                  <select id="department" {...register("department")}>
                    <option value="">Select Department</option>
                    {departments.map((department, index) => (
                      <option key={index} value={department}>
                        {department}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
              <br />
              <br />
              <br />
              <div class="paymentdetails fonts2"> Payment Details</div>
              <div>
                <br />
                <p>
                  <strong class="paycolor">Payment Method</strong>
                  <span>
                    {" "}
                    <input type="checkbox" id="creditcard" />
                    <label for="creditcard">Credit/Debit Card</label>
                  </span>
                </p>
                <br />
                <p> Do you want a free three session trial?</p>
                <p>
                  {" "}
                  <input type="radio" name="choose" id="yes" />
                  <label for="yes" className="pe-3">
                    Yes
                  </label>
                  <input type="radio" name="choose" id="no" />
                  <label for="no">No</label>
                </p>
              </div>
              <br />
              <br />
              <div>
                {/* <button type='button' className='buttons' onClick={handleSubmit(onServiceProviderSubmit)}>Book Now</button> */}
                <button type='button' className='buttons' data-bs-toggle='modal' data-bs-target='#exampleModal'>Book Now</button>
                <button type='button' className='buttons' onClick={Cancel}>Cancel</button>
              </div>
            </div>
            <div>
              <img src={Photo2} alt="book" class="img1" />
            </div>
          </div>
        </div>
      </div>

      {/* Include the modal for payment */}
      <MakePayment id='exampleModal' title='Proceed'/>
    </>
  );
};

export default Appointment;