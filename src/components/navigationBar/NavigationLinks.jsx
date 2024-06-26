import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationLinks = ({ handleLinkClick }) => {
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const location = useLocation();

  const links = [
    {
      name: "Home",
      url: "/",
      icon: "ri-home-7-line",
    },
    {
      name: "Departments",
      icon: "fa-solid fa-angle-down",
      subItems: [
        { name: "Education", url: "/careerMentorship" },
        { name: "Medical", url: "/medical" },
        { name: "Psychological", url: "/psychological" },
      ],
    },
    {
      name: "Login",
      url: "/login",
      icon: "ri-login-box-line",
    },
  ];

  const handleLinkClick1 = () => {
    setIsDepartmentsOpen(false);
    handleLinkClick(); // Close the mobile menu
  };

  const getLinkClassName = (url) => (
    location.pathname === url ? 'active' : ''
  );

  return (
    <>
      {links.map((link, i) => (
        <li
          key={i}
          className={`relative w-fit p-2 nav-link ${link.name === 'Login' ? 'login' : ''} ${getLinkClassName(link.url)}`}
          onMouseEnter={() => link.subItems && setIsDepartmentsOpen(true)}
          onMouseLeave={() => link.subItems && setIsDepartmentsOpen(false)}
        >
          {link.subItems ? (
            //dropdown style
            <div className={`cursor-pointer ${getLinkClassName('')}`}>
              {link.name}
              {<i className={`ms-2 ${link.icon}`}></i>}
              {isDepartmentsOpen && (
                <ul className="dropdown-menu  mt-2 py-2 w-2x">
                  {link.subItems.map((subItem, j) => (
                    <li key={j} className="p-1">
                      <Link
                        to={subItem.url}
                        className={`${getLinkClassName(subItem.url)}`}
                        onClick={handleLinkClick1}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            // Links without dropdown and active
            <Link
              to={link.url}
              onClick={handleLinkClick1}
              className={`${getLinkClassName(link.url)}`}
            >
              {link.name}
            </Link>
          )}
        </li>
      ))}
    </>
  );
};

export default NavigationLinks;
