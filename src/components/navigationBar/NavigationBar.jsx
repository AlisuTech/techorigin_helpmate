import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <>
      <nav className="grid md:grid-cols-2 grid-cols-1 bg-[#adbbda] py-4 px-4 space-y-4 md:space-y-0">
        <div className='text-[35px] font-[600]'>HelpMate</div>
        <div className='md:text-end'>
          <ul className='my-auto space-x-4'>
              <Link to="/">Home</Link>
              <Link >About</Link>
              <div className="dropdown border-red">
                <button className="dropbtn border-greenx">Departments <i className="fas fa-caret-down"></i></button>
                <div className="dropdown-content border-yellow">
                  <Link to="/medical">Medical</Link>
                  <Link to="/education">Education</Link>
                  <Link to="/psychological">Psychological</Link>
                </div>
              </div>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Register</Link>
              <Link to="/appointment">Book an Appointment</Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar