import React from "react";
import SocialMedia from "./SocialMedia";


const Footer = () => {
  const Links = [
    { title: "Location", links: ["America", "Asia", "Eurpoe", "Africa"] },
    { title: "Contact", links: ["About Me", "Teams", "Profile", "FAQ"] },
    { title: "Legals", links: ["Privacy", "Disclaimer", "Terms", "Company"] },
  ];
  return (
    <footer className="pt-2 md:px-24 px-4 bg-footer_bg">
      {/* <NewsLetter /> */}
      <div className="flex md:flex-row flex-col gap-20">
        <div className="flex-1">
          <div className="h-12 font-bold text-[40px]" >HelpMate</div>
          <p className="md:w-1/2 leading-relaxed text-sm text-gray-600 pt-7">
            We care about your physical wellbeing and that's why we are here.
          </p>
          <SocialMedia />
        </div>
        <div className="flex-1 flex flex-wrap gap-20">
          {Links.map((link, i) => (
            <ul key={i}>
              <h1 className="font-semibold pb-3">{link.title}</h1>
              {link.links.map((lk, idx) => (
                <li key={idx} className="py-1 text-sm text-gray-600">
                  {lk}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <p className="text-center py-0 mt-6 text-sm text-gray-600">
        Copyright © 2024. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;