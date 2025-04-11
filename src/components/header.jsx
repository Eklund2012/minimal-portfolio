import React from "react";
import header from "../data/header";
import HeaderItem from "./headeritem";

function Header() {
  const handleScroll = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden md:block bg-[#1F1F1F] py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div
          className="text-[#00FFD1] text-2xl font-bold tracking-wide cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          My Portfolio
        </div>
        <ol className="flex gap-8 text-white text-base font-medium">
          {header.map((item, index) => (
            <HeaderItem
              key={index}
              text={item.text}
              onClick={() => handleScroll(item.target)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Header;
