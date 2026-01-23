import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, alt }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title} project`} className="block">
            <div className="border-2 border-stone-900 rounded-md overflow-hidden bg-[#2A2A2A] hover:bg-[#121212] transition-transform transform hover:scale-105 duration-300 hover:shadow-lg hover:shadow-stone-500 max-w-full">
                <img
                    src={imgUrl}
                    alt={alt}
                    className="w-full h-36 md:h-48 object-cover cursor-pointer"
                />
                <div className="w-full p-4">
                    <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold justify-start flex">{title}</h3>
                    <div className="flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm max-w-full">
                        {stack.map((item, index) => (
                            <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md bg-stone-900 whitespace-nowrap">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default PortfolioItem;