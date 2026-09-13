import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0a0a] py-8 text-neutral-500 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand info */}
        <div>
          <span className="text-neutral-300 font-medium">David Eklund</span>
          <span className="mx-2 text-neutral-700">·</span>
          <span>Software Engineer & MSc Student</span>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Eklund2012"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors duration-150 flex items-center gap-1"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/david-eklund02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors duration-150 flex items-center gap-1"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-1 rounded text-neutral-500 hover:text-neutral-300 transition-colors duration-150 cursor-pointer"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;