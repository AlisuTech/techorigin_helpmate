import React, { useState } from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'
import user from '../../assets/user.png'
import profile from '../../assets/profile.png'
import setting from '../../assets/setting.png'
import help from '../../assets/help.png'
import logout from '../../assets/logout.png'



const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBtn = ()=> {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="bg-[#adbbda] w-[100%] py-4 px-4 flex items-center justify-between relative">
        <div className="text-[35px] font-[600]">HelpMate</div>
        <ul className="w-[100%] text-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link>About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Departments <i className="fas fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/medical">Medical</Link>
                <Link to="/education">Education</Link>
                <Link to="/psychological">Psychological</Link>
              </div>
            </div>
          </li>
          <li><Link to="/user">user Dashboard</Link></li>
          <li><Link to="/service_provider">service Dashboard</Link></li>
          <li><Link to="/login">Log In</Link></li>
          {/* <li><Link to="/choice">Register</Link></li>
          <li><Link to="/service_provider_profile">Profile</Link></li>
          <li><Link to="/appointment">Book an Appointment</Link></li> */}
        </ul>
        <img
          src={user}
          alt=""
          className="w-[40px] border-greenx rounded-[50%] cursor-pointer ml-[30px]"
          onClick={toggleBtn}
        />

        <div
          className={`${
            isMenuOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          } sub-menu-wrap border-greenx absolute top-[100%] right-[10%] max-h-0 overflow-hidden w-[320px]`}
          id="subMenu"
        >
          <div className="sub-menu bg-white p-[20px] m-[10px]">
            <div className="user-info border-yellowx flex items-center">
              <img
                src={user}
                alt=""
                className="w-[60px] border-greenx rounded-[50%] me-[15px] cursor-pointer"
              />
              <h3 className="font-[500]">Gideon Edoghotu</h3>
            </div>
            <hr className="h-[1px] w-[100%] bg-[#ccc] mt-4" />

            <Link className="sub-menu-link">
              <img src={profile} alt="" />
              <p>Edit Profile</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </Link>

            <Link className="sub-menu-link">
              <img src={setting} alt="" />
              <p>Settings & Privacy</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </Link>

            <Link className="sub-menu-link">
              <img src={help} alt="" />
              <p>Help & Support</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </Link>

            <Link className="sub-menu-link">
              <img src={logout} alt="" />
              <p>Logout</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar

/**
 * <nav className="grid md:grid-cols-2 grid-cols-1 bg-[#adbbda] py-4 px-4 space-y-4 md:space-y-0">
        <div className='text-[35px] font-[600]'>HelpMate</div>
        <div className='md:text-end'>
          <ul className='my-auto space-x-4'>
              <Link to="/">Home</Link>
              <Link >About</Link>
              <div className="dropdown">
                <button className="dropbtn">Departments <i className="fas fa-caret-down"></i></button>
                <div className="dropdown-content">
                  <Link to="/medical">Medical</Link>
                  <Link to="/education">Education</Link>
                  <Link to="/psychological">Psychological</Link>
                </div>
              </div>
              <Link to="/user">user Dashboard</Link>
              <Link to="/service_provider">service Dashboard</Link>
              <Link to="/login">Log In</Link>
              <Link to="/choice">Register</Link>
              <Link to="/service_provider_profile">Profile</Link>
              <Link to="/appointment">Book an Appointment</Link>
              <div className='border-red'>
                <img src={user} alt='' className='w-[40px] border-green rounded-[50%] cursor-pointer ml-[30px]'/>

              </div>
          </ul>
        </div>
      </nav>
 * 
 * 
 */