import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deselectAppointment } from '../app/user/appointmentSlice';

const CustomNavLink = ({ to, children, onClick, closeMenu, ...props}) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(deselectAppointment());
    if (closeMenu) {
        closeMenu();
      }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <NavLink to={to} onClick={handleClick} {...props}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
