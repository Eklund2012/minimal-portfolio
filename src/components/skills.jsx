import React from "react";
import skillsData from "../data/skills";
import Title from "./title";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-16 sm:my-20">
      <Title subtitle="Languages, tools, and technical areas I work with.">
        Skills / Tech Stack
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="p-5 rounded-lg bg-[#111111] border border-white/[0.08] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-sm font-medium text-[#ededed] mb-1.5">
                {category.category}
              </h3>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-block px-2 py-0.5 rounded text-xs font-normal bg-neutral-900 text-neutral-300 border border-white/[0.06] font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
