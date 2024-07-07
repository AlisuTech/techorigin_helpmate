import React, { useState, useEffect, useCallback } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import Dropdown from "react-bootstrap/Dropdown";
import profileImage from "../../assets/img/img1_1.jpg"; // Replace with your image path

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleLinkClick = () => {
    setOpen(false); // Close the mobile menu when a link is clicked
  };

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-[--color-blue-100] py-4 px-3 text-[17px] items-center flex justify-between border-red fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link to="/" className="text-white text-[25px]" onClick={handleLinkClick}>
        HelpMate
      </Link>
      <ul className="md:flex hidden items-center gap-10">
        {/* <NavigationLinks handleLinkClick={handleLinkClick} /> */}
        <Link to='/'>Home</Link>
        <Dropdown className="test">
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="test">
            Departments
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="relative inline-block text-left">
          <div
            className="flex items-center bg-white p-2 rounded-full border shadow-sm cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <svg
              className="w-4 h-4 ml-2 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </ul>
      {/* Mobile Nav */}
      <ul
        className={`fixed top-0 z-50 bg-[#3d52a0] border-yellow text-[18px] w-2/3 h-screen shadow-2xl
          md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
          ${open ? "right-0" : "-right-full"}`}
      >
        <NavigationLinks handleLinkClick={handleLinkClick} />
      </ul>

      <div
        className="text-2xl md:hidden z-50 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <ion-icon
          className={`nav-icon ${open ? "open" : "closed"}`}
          name={`${open ? "close" : "menu"}`}
        ></ion-icon>
      </div>
    </nav>
  );
};

export default NavigationBar;
