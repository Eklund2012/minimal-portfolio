import React from "react";

function TimelineItem({ year, title, duration, details }) {
  return (
    <li className="relative pl-6 pb-8 last:pb-0">
      {/* Subtle guide node */}
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-400 border-2 border-[#0a0a0a]" />

      {/* Card */}
      <div className="p-5 rounded-lg bg-[#111111] border border-white/[0.08]">
        {/* Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-neutral-300 font-medium">
              {year}
            </span>
            <span className="text-neutral-600 text-xs">·</span>
            <span className="text-xs text-neutral-400 font-mono">
              {duration}
            </span>
          </div>

          <span className="text-xs text-neutral-400">
            Karlstad University
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-semibold text-[#ededed] mb-2">
          {title}
        </h3>

        {/* Details */}
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          {details}
        </p>
      </div>
    </li>
  );
}

export default TimelineItem;