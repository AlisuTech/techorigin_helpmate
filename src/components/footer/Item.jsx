import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h3 className="mb-1 font-semibold">{title}</h3>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-[--color-blue-101] duration-300
            text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
