import React, { useState } from "react";

import "./NavigationBar.css";
import { Link, NavLink } from "react-router-dom";

const  NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#3d52a0]">
      <Link to="/" className="title">
        HelpMate
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {/* <span></span>
        <span></span>
        <span></span> */}
        <i class="ri-menu-line text-[35px]"></i>
        {/* <i class="ri-close-line text-[35px]"></i> */}
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <div className="dropdown border-yellowx w-[100%]">
            <button 
              className="dropdown-toggle border-greenx w-[100%] btn-link"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Departments
            </button>
            <ul className="dropdown-menu border-yellow space-y-1">
                <li>
                  <NavLink to="/medical" >
                    Medical
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/careerMentorship" >
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/psychological">
                    Psychological
                  </NavLink>
                </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink to="/choice">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Sign In</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar