import React from "react";

function HeaderItem({ text }) {
  return (
    <li className="cursor-pointer hover:text-[#00FFD1] transition duration-200">
      {text}
    </li>
  );
}

export default HeaderItem;
