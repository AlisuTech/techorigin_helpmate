import React from "react";

const SocialIcons = ({ SOCIAL_MEDIA }) => {
  return (
    <div className="text-blackx">
      {SOCIAL_MEDIA.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer hover:scale-110 inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-[--color-blue-101] hover:bg-white]
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;