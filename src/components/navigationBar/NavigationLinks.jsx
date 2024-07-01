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
      icon: "ri-building-line",
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
            <div className={`flex border-blue items-center cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${getLinkClassName('')}`}>
              {link.name}
              {isDepartmentsOpen && (
                <ul className="dropdown-menu  mt-2 py-2 w-2x">
                  {link.subItems.map((subItem, j) => (
                    <li key={j} className="p-1 border-[green] w-full">
                      <Link
                        to={subItem.url}
                        className={`block w-fit border-[yellow] h-full ${getLinkClassName(subItem.url)}`}
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
            // Links without dropdown
            <Link
              to={link.url}
              onClick={handleLinkClick1}
              className={`flex items-center w-full h-full relative after:absolutex after:left-0 after:bottom-0 after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${getLinkClassName(link.url)}`}
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
