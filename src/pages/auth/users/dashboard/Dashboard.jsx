import React from 'react'
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/appointment-history" className="nav-link activex" aria-current="page">
            Book Appointment
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link activex" aria-current="page">
            Upcoming Appointment
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">
            Past Appointments
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled" aria-disabled="true">
            Disabled
          </Link>
        </li>
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

/**
 * <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="appointment-history" className="nav-link active" aria-current="page">
            Active
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">
            Link
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link disabled" aria-disabled="true">
            Disabled
          </Link>
        </li>
      </ul>
 * 
 */