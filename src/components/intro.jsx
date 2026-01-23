import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-3 pb-3">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">David Eklund</h1>
      <p clasName="text-lg md:text-xl mb-3 font-medium">Software Engineer & MSc Computer Science Student</p>
      <p className="text-base max-w-xl font-bold">
    Passionate about crafting clean scalable and secure systems. 
    Currently pursuing my Master's in Computer Science at Karlstad University.
      </p>
    </div>
  );
}

export default Intro;