import React, { useState, useEffect } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import NavigationLinks from "./NavigationLinks";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleLinkClick = () => {
    setOpen(false); // Close the mobile menu when a link is clicked
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`bg-[--color-blue-100] py-4 px-3 font-Poppins font-bold text-[17px] items-center flex justify-between fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link to="/" className="logo text-[25px]" onClick={handleLinkClick}>
        HelpMate
      </Link>
      <ul className="md:flex hidden items-center gap-10">
        <NavigationLinks handleLinkClick={handleLinkClick} />
      </ul>
      {/* Mobile Nav */}
      <ul
        className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
          md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
          ${open ? "right-0" : "-right-full"}`}
      >
        <NavigationLinks handleLinkClick={handleLinkClick} />
      </ul>

      <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
        <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
      </div>
    </nav>
  );
};

export default NavigationBar;
