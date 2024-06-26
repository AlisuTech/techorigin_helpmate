import React, { useState } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";
import LogoImg from '../../assets/img/7xvwc4oo-removebg-preview.png'

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <nav className="bg-[--color-blue-100] py-4 px-3 font-Poppins font-bold text-[17px] items-center flex justify-between border-green">
      {/* <img src={LogoImg} alt="" className="border-green h-[50px] w-[190px] bg-green text-white" /> */}
      <Link to="/" className="logo text-[25px]" onClick={handleLinkClick}>HelpMate</Link>
      <ul className="md:flex hidden items-center gap-10">
        <NavigationLinks handleLinkClick={handleLinkClick} />
      </ul>
      {/* Mobile Nav */}
      <ul
        className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
          md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
          ${open ? "right-0" : "-right-full"}`}
      >
        <NavigationLinks handleLinkClick={handleLinkClick} className="border-yellow" />
      </ul>

      <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
      </div>
    </nav>
  );
};

export default NavigationBar;
