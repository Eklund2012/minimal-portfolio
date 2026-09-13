import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

function PortfolioItem({ title, description, imgUrl, stack, github, demo, alt }) {
  return (
    <div className="rounded-lg overflow-hidden bg-[#111111] border border-white/[0.08] hover:border-white/[0.16] transition-colors duration-150 flex flex-col h-full">
      {/* Project Preview */}
      <div className="w-full aspect-video overflow-hidden bg-[#0a0a0a] border-b border-white/[0.08]">
        <img
          src={imgUrl}
          alt={alt || title}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-base font-semibold text-[#ededed] mb-1.5">
            {title}
          </h3>

          {description && (
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
              {description}
            </p>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {stack.map((item, index) => (
              <span
                key={index}
                className="inline-block px-2 py-0.5 text-xs font-normal rounded bg-neutral-900 text-neutral-300 border border-white/[0.06] font-mono"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2.5 pt-4 border-t border-white/[0.06] mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-neutral-900 hover:bg-neutral-800 border border-white/[0.08] hover:border-white/[0.16] text-neutral-300 hover:text-white transition-colors duration-150"
              aria-label={`View ${title} source code on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-[#ededed] hover:bg-white text-[#0a0a0a] transition-colors duration-150"
              aria-label={`View live demo of ${title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;