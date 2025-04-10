import React from "react";
import header from "../data/header";
import HeaderItem from "./headeritem";

function Header() {
  return (
    <div className="bg-[#2A2A2A] py-6">
      <ol className="flex flex-wrap justify-center gap-6 text-white text-lg">
        {header.map((item, index) => (
          <HeaderItem key={index} text={item.text} />
        ))}
      </ol>
    </div>
  );
}

export default Header;
