import React, { useState } from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import CustomNavLink from '../customs/CustomNavLink';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="border-blue position-sticky top-0 flex flex-col items-start justify-between bg-[--color-blue-100]">
        <CustomNavLink
          to="/"
          className="title text-decoration-none text-white text-[1.5rem] m-4 font-bold"
        >
          HelpMate
        </CustomNavLink>
        <div className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex w-full mb-2 justify-center items-center flex-col`}>
          <div className="menu position-absolute md:hidden top-[0.75rem] right-2 flex-col justify-between w-9 h-8">
            <span onClick={toggleMenu}>
              <i className="fa-solid border-redx fa-bars fa-2x cursor-pointer"></i>
            </span>
          </div>

          {/* <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex w-full mb-2 justify-center items-center flex-col`}
          >
            <ul className="border-red w-full flex flex-col items-center ps-0">
              <li className="border-yellow w-full text-center">
                <CustomNavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About
                </CustomNavLink>
              </li>
              <li className="border-yellow w-full text-center">
                <CustomNavLink to="/services">Services</CustomNavLink>
              </li>
              <li className="border-yellow w-full text-center">
                <CustomNavLink to="/contact">Contact</CustomNavLink>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="menu position-absolute md:hidden top-[0.75rem] right-2 flex-col justify-between w-9 h-8">
          <span onClick={toggleMenu}>
            <i className="fa-solid border-red fa-bars fa-2x cursor-pointer"></i>
          </span>
        </div>

        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex w-full mb-2 justify-center items-center flex-col`}>
          <ul className="border-red w-full flex flex-col items-center ps-0">
            <li className='border-yellow w-full text-center'>
              <CustomNavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </CustomNavLink>
            </li>
            <li className='border-yellow w-full text-center'>
              <CustomNavLink to="/services">Services</CustomNavLink>
            </li>
            <li className='border-yellow w-full text-center'>
              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;



/**
 * 
 * import React, { useState } from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom'
import CustomNavLink from '../customs/CustomNavLink';

const NavigationBar = () => {
  
  return (
    <>
      <nav className="border-blue position-sticky top-0 flex justify-between items-center bg-[--color-blue-100]">
        <CustomNavLink
          to="/"
          className="title text-decoration-none text-white text-[1.5rem] m-4 font-bold"
        >
          HelpMate
        </CustomNavLink>
        <div className="menu position-absolute md:hidden block top-[0.75rem] right-2 flex-col justify-between w-9 h-8">
          <span>
            <i class="fa-solid border-red fa-bars fa-2x cursor-pointer"></i>
          </span>
        </div>
        <div className='hidden md:block'>
          <ul className="border-red ps-0 flex">
            <li>
              <CustomNavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/services">Services</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar
 * 
 */


/**
 * 
 * const NavigationBar = () => {
  
  return (
    <>
      <nav className="border-blue position-sticky top-0 flex flex-col items-start justify-between items-centerx bg-[--color-blue-100]">
        <CustomNavLink
          to="/"
          className="title text-decoration-none text-white text-[1.5rem] m-4 font-bold"
        >
          HelpMate
        </CustomNavLink>
        <div className="menu  position-absolute hiddenx top-[0.75rem] right-2 flex-col justify-between w-9 h-8">
          <span>
            <i class="fa-solid border-red fa-bars fa-2x cursor-pointer"></i>
          </span>
        </div>
        <div className='hiddenx md:blockx w-[100%] mb-2 justify-center items-center flex flex-col'>
          <ul className="border-red w-[100%] flex flex-col items-center ps-0 ">
            <li className='border-yellow w-[100%] text-center'>
              <CustomNavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </CustomNavLink>
            </li>
            <li className='border-yellow w-[100%] text-center'>
              <CustomNavLink to="/services">Services</CustomNavLink>
            </li>
            <li className='border-yellow w-[100%] text-center'>
              <CustomNavLink to="/contact">Contact</CustomNavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

 * 
 */