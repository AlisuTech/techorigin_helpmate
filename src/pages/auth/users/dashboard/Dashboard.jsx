import React from 'react'
import { NavLink } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to="/appointment" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            aria-current="page">
            Book Appointment
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/appointment-history" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            aria-current="page">
            Upcoming Appointment
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            aria-current="page">
            Past Appointments
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link disabled" aria-disabled="true">
            Disabled
          </NavLink>
        </li> */}
      </ul>
    </>
  );
}

export default Dashboard

/**
 * <div class="grid grid-rows-3 grid-flow-col gap-4 border-green">
        <div class="row-span-3 border-red">
            <ServiceProviderList/>
        </div>
        <div class="col-span-2 border-yellow">
            <div>hello</div>
        </div>
        <div class="row-span-1 col-span-2 border-blue">03</div>
      </div>
 * 
 */