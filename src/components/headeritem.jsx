import React from "react";

function HeaderItem({ text, onClick, active }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className={`cursor-pointer select-none text-xs sm:text-sm px-2 py-1 rounded transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
          active ? "text-white font-medium bg-white/[0.06]" : "text-neutral-400 hover:text-white hover:bg-white/[0.03]"
        }`}
      >
        {text}
      </button>
    </li>
  );
}

export default HeaderItem;
