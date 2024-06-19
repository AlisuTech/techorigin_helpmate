import React, { useState } from 'react'
import './NavigationBar.css'
import user from '../../assets/user.png'
import profile from '../../assets/profile.png'
import setting from '../../assets/setting.png'
import help from '../../assets/help.png'
import logout from '../../assets/logout.png'
import { useDispatch } from 'react-redux'
import { selectAppointment } from '../../app/user/appointmentSlice';
import NavLink from '../NavLink'


const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();


  const toggleBtn = ()=> {
    setIsMenuOpen(!isMenuOpen);
  }

  const activateUser = () => {
    dispatch(selectAppointment(true));
  }

  // const closeMenu = () => {
  //   setIsMenuOpen(false);
  // }

  return (
    <>
      <nav className="bg-[#adbbda] w-[100%] py-4 px-4 flex items-center justify-between relative">
        <div className="text-[35px] font-[600]">HelpMate</div>
        <ul className="w-[100%] text-right">
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/features">Features</NavLink></li>
          <li><NavLink>About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Departments <i className="fas fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <NavLink to="/medical">Medical</NavLink>
                <NavLink to="/education">Education</NavLink>
                <NavLink to="/psychological">Psychological</NavLink>
              </div>
            </div>
          </li>
          <li><NavLink to="/user">user Dashboard</NavLink></li>
          <li><NavLink to="/service_provider">service Dashboard</NavLink></li>
          <li><NavLink to="/login">Log In</NavLink></li>
          <li><NavLink to="/choice">Register</NavLink></li>
          <li><NavLink to="/service_provider_profile">Profile</NavLink></li>
          <li><NavLink to="/appointment">Book an Appointment</NavLink></li>
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
            <div className="user-info border-yellow flex items-center">
              <img
                src={user}
                alt=""
                className="w-[60px] border-green rounded-[50%] me-[15px] cursor-pointer"
              />
              <h3 className="font-[500]">Gideon Edoghotu</h3>
            </div>
            <hr className="h-[1px] w-[100%] bg-[#ccc] mt-4" />

            <NavLink className="sub-menu-link">
              <img src={profile} alt="" />
              <p>Edit Profile</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>

            <NavLink onClick={activateUser} className="sub-menu-link border-green" >
              <img src={profile} alt="" />
              <p>Appointment History</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>

            <NavLink className="sub-menu-link">
              <img src={setting} alt="" />
              <p>Settings & Privacy</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>

            <NavLink className="sub-menu-link">
              <img src={help} alt="" />
              <p>Help & Support</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>

            <NavLink className="sub-menu-link">
              <img src={logout} alt="" />
              <p>Logout</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>
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
              <NavLink to="/">Home</NavLink>
              <NavLink >About</NavLink>
              <div className="dropdown">
                <button className="dropbtn">Departments <i className="fas fa-caret-down"></i></button>
                <div className="dropdown-content">
                  <NavLink to="/medical">Medical</NavLink>
                  <NavLink to="/education">Education</NavLink>
                  <NavLink to="/psychological">Psychological</NavLink>
                </div>
              </div>
              <NavLink to="/user">user Dashboard</NavLink>
              <NavLink to="/service_provider">service Dashboard</NavLink>
              <NavLink to="/login">Log In</NavLink>
              <NavLink to="/choice">Register</NavLink>
              <NavLink to="/service_provider_profile">Profile</NavLink>
              <NavLink to="/appointment">Book an Appointment</NavLink>
              <div className='border-red'>
                <img src={user} alt='' className='w-[40px] border-green rounded-[50%] cursor-pointer ml-[30px]'/>

              </div>
          </ul>
        </div>
      </nav>
 * 
 * 
 */