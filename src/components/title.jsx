import React from "react";

function Title({ children, id, subtitle }) {
  return (
    <div id={id || undefined} className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#ededed]">
        {children}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default Title;