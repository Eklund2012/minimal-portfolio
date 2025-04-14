import React from "react";

function TimelineItem({year, title, duration, details}) {
  return (
    <ol className="flex flex-col md:flex-row realative border-l border-stone-200 rounded-lg">
        <li className="mb-3 ml-4 bg-[#2A2A2A] p-2 rounded-lg shadow-md hover:shadow-stone-500 cursor-pointer">
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
                    {year}
                </span>
                <h3 className="text-lg font-semibold text-white">
                    {title}
                </h3>
                <div className="my-1 text-sm font-normal leading-none text-stone-400">
                    {duration}
                </div>
                <p className="my-2 text-base font-normal text-stone-500 text-white">
                    {details}
                </p>
            </p>
        </li>
    </ol>
  );
}

export default TimelineItem;