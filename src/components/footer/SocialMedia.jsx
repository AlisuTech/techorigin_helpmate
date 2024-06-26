import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-5 border-greenx ">
      <div className="h-8 cursor-pointer hover:scale-110 duration-300">
        <i class="fa-brands fa-facebook fa-2x"></i>
      </div>
      <div className="h-8 cursor-pointer hover:scale-110 duration-300">
        <i class="fa-brands fa-twitter fa-2x"></i>
      </div>
      <div className="h-8 cursor-pointer hover:scale-110 duration-300">
        <i class="fa-brands fa-instagram fa-2x"></i>
      </div>
    </div>
  );
};

export default SocialMedia;
