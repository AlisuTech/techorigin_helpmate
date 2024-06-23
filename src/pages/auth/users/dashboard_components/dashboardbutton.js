import React from 'react';
import { FaPlus } from "react-icons/fa"; 
import '../dashboard/Dashboard.css'
import { Link } from 'react-router-dom';

const Dashboardbutton = () => {
    return (
      <div>
          <Link to='/appointment' className="appointment-button">
            <FaPlus /> Appointment
          </Link>
      </div>
    );
}

export default Dashboardbutton;
