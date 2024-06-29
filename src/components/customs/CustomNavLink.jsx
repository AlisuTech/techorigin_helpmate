import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, children, ...props}) => {

  return (
    <NavLink to={to} {...props}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;