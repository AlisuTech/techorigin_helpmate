import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { SOCIAL_MEDIA } from "./Menus";


const Footer = () => {

  return (
    <footer className="bg-[--color-blue-100] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7">
        <ItemsContainer/>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons SOCIAL_MEDIA={SOCIAL_MEDIA} />
      </div>
    </footer>
  );
};

export default Footer;