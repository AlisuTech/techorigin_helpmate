import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { appointmentSchema } from '../../validations/appointmentValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { signupServiceProvider } from '../../app/serviceProvider/serviceProviderSlice';
import { getDepartmentsAndServiceProvider } from '../../services/categoryService';

const Appointment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [departments, setDepartments] = useState([]);
  const [serviceProviders, setServiceProviders] = useState([]);

  //changed
  const {
    register,
    handleSubmit,
    watch,
  } = useForm({
    resolver: yupResolver(appointmentSchema),
  });
  const selectedDepartment = watch("department");

  const onServiceProviderSubmit = (data) => {
    console.log(data);
    dispatch(signupServiceProvider(data));
    navigate("/login");
  };

  useEffect(() => {
    const fetchDepartmentsAndServiceProviders = () => {
      const data = getDepartmentsAndServiceProvider;
      const uniqueDepartments = [...new Set(data.map((item) => item.department))];
      setDepartments(uniqueDepartments);
      setServiceProviders(data);
    };

    fetchDepartmentsAndServiceProviders();
  }, []);

  const filteredServiceProviders = serviceProviders.filter((item) => item.department === selectedDepartment);

  return (
    <>
      <div>
        <h2>Book an Appointment</h2>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" required {...register("date")}/>
        
        <label for="time">Time:</label>
        <input type="time" id="time" name="time" required {...register("time")}/>

        <label for="department">Department:</label>
        <select id="department" {...register("department")}>
            <option value="">Select Department</option>
            {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            
        </select>

        <label for="service_provider">Service Provider:</label>
        <select id="serviceProvider" {...register("serviceProvider")}>
            <option value="">Select Service Provider</option>
            {filteredServiceProviders.map((serviceProvider, index) => (
                <option key={index} value={serviceProvider.serviceProvider}>
                  {serviceProvider.serviceProvider}
                </option>
              ))}
            
        </select>

        <button type='button' onClick={handleSubmit(onServiceProviderSubmit)}>Book Appointment</button>

      </div>
      
    </>
  )
}

export default Appointment
/**
 * 
 *  <div class="backgrounddiv">
        <div class="bookappointment2">
        <div class="bookappointment fonts">Book Appointment</div></div><br><br>
        <div class="userdiv"><i class="fas fa-user fa-7x icon icons"></i><br>
            <b>Hello,....</b>
        </div>
        
        <div>
            <p>Preferred Date of appointment: &nbsp;<input type="date" placeholder="Date" class="inputdesign">
            </p>
            <p> Service Provider: &nbsp;<input list="search" class="inputdesign" /><datalist id="search">
                        <option>DR.Gideon</option>
                        <option>DR. Jose</option>
                        <option>DR. Ihuoma</option>
                        <option>DR. victory</option>
                        <option>DR. Joy</option>
                        <option>DR. Humphrey</option>
                        <option>DR. Esohe</option>
                    </datalist></p>
            <p> Time of appointment: &nbsp;<input type="time" placeholder="time" class="inputdesign"></p>
        </div>
        <br>
        <div class="paymentdetails fonts2"> Payment Details</div>
        <div>
            <p><strong>Payment Method</strong>
                <span> <input type="checkbox" id="creditcard" ;>
                    <label for="creditcard" ;>Credit/Debit Card</label></span>
            </p>
            <p> Do you want a free three session trial?</p>
            <p> <input type="radio" name="choose" id="yes">
                <label for="yes">Yes</label>
                    <input type="radio" name="choose" id="no">
                    <label for="no">No</label>
            </p>
        </div>
        <div>
            <button class="buttons">Cancel</button>&nbsp;&nbsp;&nbsp;<button class="buttons">Book Now</button>
        </div>
    </div>
 * 
 */