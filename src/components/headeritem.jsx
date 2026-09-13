import React from "react";

function HeaderItem({ text, onClick, active }) {
  return (
    <li
      className={`cursor-pointer select-none text-xs sm:text-sm transition-colors duration-150 ${
        active ? "text-white font-medium" : "text-neutral-400 hover:text-white"
      }`}
      onClick={onClick}
    >
      {text}
    </li>
  );
}

export default HeaderItem;
