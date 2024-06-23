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
              <div className="dropdown">
                <button className="dropbtn">Departments <i className="fas fa-caret-down"></i></button>
                <div className="dropdown-content">
                  <Link to="/medical">Medical</Link>
                  {/* <Link to="/careerMentorship">Career</Link> */}
                  <Link to="/psychological">Psychological</Link>
                </div>
              </div>
              <Link to="/user">user Dashboard</Link>
              <Link to="/service_provider">service Dashboard</Link>
              <Link to="/login">Log In</Link>
              <Link to="/choice">Register</Link>
              <Link to="/service_provider_profile">Profile</Link>
              <Link to="/appointment">Book an Appointment</Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavigationBar