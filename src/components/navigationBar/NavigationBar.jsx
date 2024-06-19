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
// import NavLink from '../CustomNavLink'
import CustomNavLink from '../CustomNavLink'


const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();


  const toggleBtn = ()=> {
    setIsMenuOpen(!isMenuOpen);
  }

  const activateUser = () => {
    dispatch(selectAppointment(true));
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSidebarOpen(false)
  }

  const showSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
          <CustomNavLink
            to="/"
            className="helpmate text-white"
            closeMenu={closeMenu}
          >
            Helpmate
          </CustomNavLink>
        </div>

        {/* bars */}
        <ul className={isSidebarOpen ? "sidebar border-redx" : "hidden"}>
          <div className='border-yellowx text-white flex justify-between'>
            <li onClick={showSidebar}>
              <i class="fa-solid fa-xmark cursor-pointer"></i>
            </li>
            <img
                src={user}
                alt=""
                className="w-[40px] border-greenx rounded-[50%] cursor-pointer ml-[30px]"
                onClick={toggleBtn}
              />
          </div>
          
          <li>
            <CustomNavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              closeMenu={closeMenu}
            >
              Home
            </CustomNavLink>
          </li>
          <li>
            <div className="dropdown ">
              <button
                class="btn dropdown-toggle ms-0 ps-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Departments
              </button>
              <ul className="dropdown-menu">
                <li>
                  <CustomNavLink to="/medical" closeMenu={closeMenu}>
                    Medical
                  </CustomNavLink>
                </li>
                <li>
                  <CustomNavLink to="/education" closeMenu={closeMenu}>
                    Education
                  </CustomNavLink>
                </li>
                <li>
                  <CustomNavLink to="/psychological" closeMenu={closeMenu}>
                    Psychological
                  </CustomNavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <CustomNavLink
              to="/login"
              className="btn btn-primary font-bold text-[15px]"
              closeMenu={closeMenu}
            >
              Log In
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink
              to="/choice"
              className="btn btn-primary font-bold text-[15px]"
              closeMenu={closeMenu}
            >
              Register
            </CustomNavLink>
          </li>
        </ul>


        <ul className="w-[100%] text-right md:hidden lg:block hidden">
          <li>
            <CustomNavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              closeMenu={closeMenu}
            >
              Home
            </CustomNavLink>
          </li>
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
                  <CustomNavLink to="/medical" closeMenu={closeMenu}>
                    Medical
                  </CustomNavLink>
                </li>
                <li>
                  <CustomNavLink to="/education" closeMenu={closeMenu}>
                    Education
                  </CustomNavLink>
                </li>
                <li>
                  <CustomNavLink to="/psychological" closeMenu={closeMenu}>
                    Psychological
                  </CustomNavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <CustomNavLink
              to="/login"
              className="btn btn-primary font-bold text-[15px]"
              closeMenu={closeMenu}
            >
              Log In
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink
              to="/choice"
              className="btn btn-primary font-bold text-[15px]"
              closeMenu={closeMenu}
            >
              Register
            </CustomNavLink>
          </li>
        </ul>

        <img
          src={user}
          alt=""
          className="w-[40px] border-greenx lg:block hidden rounded-[50%] cursor-pointer ml-[30px]"
          onClick={toggleBtn}
        />

        <li onClick={showSidebar}>
          <i className="fa-solid fa-bars lg:hidden block  cursor-pointer"></i>
        </li>

        {/* profile */}
        <div
          className={`${
            isMenuOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden"
          } sub-menu-wrap border-greenx absolute top-[100%] xl:left-[78%] md:left-[30%] lg:left-[60%]  left-[10%] max-h-0 overflow-hidden w-[320px]`}
          id="subMenu"
        >
          <div className="sub-menu bg-[#adbbda] p-[20px] ">
            <div className="user-info border-yellowx flex items-center">
              <img
                src={user}
                alt=""
                className="w-[60px] border-greenx rounded-[50%] me-[15px] cursor-pointer"
              />
              <h3 className="font-[500]">Gideon Edoghotu</h3>
            </div>
            <hr className="h-[1px] w-[100%] bg-[#ccc] mt-4" />

            <CustomNavLink className="sub-menu-link" closeMenu={closeMenu}>
              <img src={profile} alt="" />
              <p>Edit Profile</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </CustomNavLink>

            <CustomNavLink
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
            </CustomNavLink>

            <CustomNavLink className="sub-menu-link" closeMenu={closeMenu}>
              <img src={setting} alt="" />
              <p>Settings & Privacy</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </CustomNavLink>

            <CustomNavLink className="sub-menu-link" closeMenu={closeMenu}>
              <img src={help} alt="" />
              <p>Help & Support</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </CustomNavLink>

            <CustomNavLink className="sub-menu-link" closeMenu={closeMenu}>
              <img src={logout} alt="" />
              <p>Logout</p>
              <span>
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </CustomNavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar