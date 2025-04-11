import React from "react";

function HeaderItem({ text, onClick }) {
  return (
    <li className="cursor-pointer hover:text-[#00FFD1] transition-colors duration-200 relative group"
        onClick={onClick}
    >
      <span>{text}</span>
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00FFD1] transition-all duration-300 group-hover:w-full"></span>
    </li>
  );
}

export default HeaderItem;
