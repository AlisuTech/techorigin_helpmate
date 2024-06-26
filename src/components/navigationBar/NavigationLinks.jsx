import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationLinks = ({handleLinkClick}) => {
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const location = useLocation();
  
  const links = [
    {
      name: "Home",
      url: "/",
      icon: "ri-home-7-line",
    },
    {
      name: "About",
      url: "/about",
      icon: "ri-information-line",
    },
    {
      name: "Departments",
      icon: "ri-building-line",
      subItems: [
        { name: "HR", url: "/departments/hr" },
        { name: "Engineering", url: "/departments/engineering" },
        { name: "Marketing", url: "/departments/marketing" },
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
  };

  const getLinkClassName = (url) => (
    location.pathname === url ? 'active' : ''
  );

  return (
    <>
      {links.map((link, i) => (
        <li
          key={i}
          className={`relative hover:bg-[#5a70c8] hover:rounded-md p-2 ${getLinkClassName(link.url)}`}
          onMouseEnter={() => link.subItems && setIsDepartmentsOpen(true)}
          onMouseLeave={() => link.subItems && setIsDepartmentsOpen(false)}
        >
          {link.subItems ? (
            <div className="flex items-center cursor-pointer">
              <i className={`mr-2 ${link.icon}`}></i>
              {link.name}
            </div>
          ) : (
            <Link to={link.url} Click={handleLinkClick} className="flex items-center w-full h-full" onClick={handleLinkClick}>
              <i className={`mr-2 ${link.icon}`}></i>
              {link.name}
            </Link>
          )}
          {link.subItems && isDepartmentsOpen && (
            <ul className="absolute left-0 top-full bg-[#3d52a0] rounded-md border-green">
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
