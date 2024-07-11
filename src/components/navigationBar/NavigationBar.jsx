import React, { useState, useEffect, useCallback } from "react";
import "./NavigationBar.css";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import profileImage from "../../assets/img/img1_1.jpg"; // Replace with your image path
import { useDispatch, useSelector } from "react-redux";
import { activateUserLoggedIn, logoutUser } from "../../app/user/userSlice";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const isUserLogged = useSelector((state) => state.user.isUserLogged);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(activateUserLoggedIn(false))
    dispatch(logoutUser())
    // dispatch('/login')
  }

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

        <Dropdown className="dropdown-menu-2">
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="custom-toggle dropdown-menu-2"
          >
            Menu <i className="fa-solid fa-angle-down custom-arrow"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className="border-yellow menu">
            <Dropdown.Item href="#/action-1" className="item">
              {!isUserLogged && (
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Login
                </Link>
              )}
              {isUserLogged && (
                <Link
                  to="/appointment"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Appointments
                </Link>
              )}
              {isUserLogged && (
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Edit Profile
                </Link>
              )}
              {isUserLogged && (
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Settings
                </Link>
              )}
              {isUserLogged && (
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Logout
                </Link>
              )}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
        <Dropdown className="dropdown-menu-2">
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="custom-toggle dropdown-menu-2"
          >
            Menu <i className="fa-solid fa-angle-down custom-arrow"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className="border-yellow menu">
            <Dropdown.Item href="#/action-1" className="item">
              {isUserLogged && (
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Login
                </Link>
              )}
              {!isUserLogged && (
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Edit Profile
                </Link>
              )}
              {!isUserLogged && (
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Settings
                </Link>
              )}
              {!isUserLogged && (
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700"
                >
                  Logout
                </Link>
              )}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
