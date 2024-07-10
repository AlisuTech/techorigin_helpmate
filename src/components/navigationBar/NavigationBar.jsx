import React, { useState, useEffect, useCallback } from "react";
import "./NavigationBar.css";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import profileImage from "../../assets/img/img1_1.jpg"; // Replace with your image path

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const location = useLocation();

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

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <nav
      className={`bg-[--color-blue-100] py-4 px-3 text-[17px] items-center flex justify-between fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link
        to="/"
        className="text-white logo text-[25px]"
        onClick={handleLinkClick}
      >
        HelpMate
      </Link>
      <ul className="md:flex hidden items-center gap-10 border-red">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Dropdown className="dropdown-menu-1">
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="toggle"
          >
            Departments
          </Dropdown.Toggle>
          <Dropdown.Menu className="border-yellow menu">
            <Dropdown.Item href="#/action-1" className="item">
              <Link
                to="/career"
                className={location.pathname === "/career" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Career
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="item">
              <Link
                to="/medical"
                className={location.pathname === "/medical" ? "active" : ""}
              >
                Medical
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="item">
              <Link
                to="/psychological"
                className={
                  location.pathname === "/psychological" ? "active" : ""
                }
              >
                Psychological
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="relative inline-block text-left">
          <div
            className="flex items-center p-2 rounded-full border shadow-sm cursor-pointer"
            onClick={toggleProfileDropdown}
          >
            {/* <img
              src={profileImage}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            /> */}
            <div className="font-bold text-white ">Menu</div>
            <i class="fa-solid fa-angle-down px-2 text-white"></i>
          </div>
          {profileDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[--color-blue-100] ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <Link
                  to="/login"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Login
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Edit Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Logout
                </Link>
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
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Dropdown className="dropdown-menu-1">
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="toggle p-0"
          >
            Departments
          </Dropdown.Toggle>
          <Dropdown.Menu className="border-yellow menu">
            <Dropdown.Item href="#/action-1" className="item">
              <Link
                to="/career"
                className={location.pathname === "/career" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Career
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="item">
              <Link
                to="/medical"
                className={location.pathname === "/medical" ? "active" : ""}
              >
                Medical
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="item">
              <Link
                to="/psychological"
                className={
                  location.pathname === "/psychological" ? "active" : ""
                }
              >
                Psychological
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="relative inline-block text-left">
          <div
            className="flex items-center w-fit p-2 rounded-full border shadow-sm cursor-pointer"
            onClick={toggleProfileDropdown}
          >
            {/* <img
              src={profileImage}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            /> */}
            <div className="font-bold text-white ">Menu</div>
            <i class="fa-solid fa-angle-down px-2 text-white"></i>
          </div>
          {profileDropdownOpen && (
            <div className="origin-top-right absolute right-30 mt-2 w-48 rounded-md shadow-lg bg-[--color-blue-100] ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <Link
                  to="/login"
                  onClick={() => setProfileDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Login
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Edit Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Logout
                </Link>
              </div>
            </div>
          )}
        </div>
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
