import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deselectAppointment } from '../app/user/appointmentSlice';

const NavLink = ({ to, children, onClick, closeMenu, ...props}) => {
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
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
