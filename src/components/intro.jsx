import React from "react";

function Intro() {
  return (
    <div className="flex items-center
    justify-center flex-col text-center pt-20
    pb-6">
      <h1 className="text-4xl md:text-7xl mb-1
      md:mb-3 font-bold">David Eklund</h1>
      <p clasName="text-base md:text-xl mb-3 
      font-medium">Computer science student @ Karlstad University</p>
      <p className="text-sm max-w-xl mb-6
      font-bold">Passionate computer science student at Karlstad University, 
      eager to dive into software development, AI, and web technologies. 
      Constantly learning, building, and solving problems to create innovative solutions.</p>
    </div>
  );
}

export default Intro;