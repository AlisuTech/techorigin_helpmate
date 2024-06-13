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