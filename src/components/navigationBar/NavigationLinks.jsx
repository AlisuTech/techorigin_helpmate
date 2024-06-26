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
          className={`relative hover:bg-[#5a70c8] hover:rounded-md p-2 ${getLinkClassName(link.url)} nav-link`}
          onMouseEnter={() => link.subItems && setIsDepartmentsOpen(true)}
          onMouseLeave={() => link.subItems && setIsDepartmentsOpen(false)}
        >
          {link.subItems ? (
            <div className="flex items-center cursor-pointer">
              <i className={`mr-2 ${link.icon}`}></i>
              {link.name}
            </div>
          ) : (
            <Link to={link.url} onClick={handleLinkClick1} className="flex items-center w-full h-full">
              <i className={`mr-2 ${link.icon}`}></i>
              {link.name}
            </Link>
          )}
          {link.subItems && isDepartmentsOpen && (
            <ul className="dropdown-menu">
              {link.subItems.map((subItem, j) => (
                <li key={j} className={`hover:bg-[#2a3a7a] p-2 w-full ${getLinkClassName(subItem.url)}`}>
                  <Link
                    to={subItem.url}
                    className="block w-full h-full"
                    onClick={handleLinkClick1}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default NavigationLinks;
