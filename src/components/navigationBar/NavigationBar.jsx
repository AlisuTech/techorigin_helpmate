import React, { useState } from 'react'
import './NavigationBar.css'
import user from '../../assets/user.png'
import profile from '../../assets/profile.png'
import setting from '../../assets/setting.png'
import help from '../../assets/help.png'
import logout from '../../assets/logout.png'
import logo from '../../assets/logo_3.png'

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav className="bg-[#3d52a0] w-[100%] py-4 px-4 flex items-center justify-between relative">
        <div className="text-[35px] font-[600] flex items-center">
          <img
            src={logo}
            alt=""
            className="w-[60px] border-greenx rounded-[50%] me-[15px] cursor-pointer"
          />
          <NavLink to="/" className="helpmate text-white" closeMenu={closeMenu}>
            Helpmate
          </NavLink>
        </div>
        <ul className="w-[100%] text-right">
          <li>
            <NavLink to="/" closeMenu={closeMenu}>
              Home
            </NavLink>
          </li>
          {/* <li><NavLink to="/features" closeMenu={closeMenu}>Features</NavLink></li> */}
          {/* <li><NavLink closeMenu={closeMenu}>About</NavLink></li> */}
          {/* <li><NavLink to="/contact" closeMenu={closeMenu}>Contact</NavLink></li> */}
          <li>
            <div className="dropdown ">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Departments
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/medical" closeMenu={closeMenu}>
                    Medical
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/education" closeMenu={closeMenu}>
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/psychological" closeMenu={closeMenu}>
                    Psychological
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          {/* <li>
            <NavLink to="/service_provider" closeMenu={closeMenu}>
              service Dashboard
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/login" className='btn btn-primary font-bold text-[15px]' closeMenu={closeMenu}>
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink to="/choice" className='btn btn-primary font-bold text-[15px]' closeMenu={closeMenu}>
              Register
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/service_provider_profile" closeMenu={closeMenu}>
              Profile
            </NavLink>
          </li> */}
          {/* <li><NavLink to="/appointment" closeMenu={closeMenu}>Book an Appointment</NavLink></li> */}
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

            <NavLink className="sub-menu-link" closeMenu={closeMenu}>
              <img src={profile} alt="" />
              <p>Edit Profile</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>

            <NavLink
              onClick={activateUser}
              to="/appointment"
              className="sub-menu-link border-greenx"
              closeMenu={closeMenu}
            >
              <img src={profile} alt="" />
              <p>Appointment</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>

            <NavLink className="sub-menu-link" closeMenu={closeMenu}>
              <img src={setting} alt="" />
              <p>Settings & Privacy</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>

            <NavLink className="sub-menu-link" closeMenu={closeMenu}>
              <img src={help} alt="" />
              <p>Help & Support</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>

            <NavLink className="sub-menu-link" closeMenu={closeMenu}>
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