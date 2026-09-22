import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0a0a] py-8 text-neutral-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand info */}
        <div>
          <span className="text-neutral-300 font-medium">David Eklund</span>
          <span className="mx-2 text-neutral-600 select-none" aria-hidden="true">·</span>
          <span>Software Engineer & MSc Student</span>
        </div>

        {/* Links & Scroll to top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Eklund2012"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-1 rounded px-1.5 py-0.5 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/david-eklund02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out flex items-center gap-1 rounded px-1.5 py-0.5 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            title="Scroll to top of page"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;