import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

function Intro() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 flex items-center justify-center flex-col text-center px-4 max-w-3xl mx-auto">
      {/* Name */}
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#ededed] mb-3">
        David Eklund
      </h1>

      {/* Direct Statement of What I Do */}
      <p className="text-base sm:text-lg text-neutral-400 font-normal mb-5">
        Software Engineer & MSc Student.
      </p>

      {/* Factual Bio */}
      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-2xl font-normal">
        MSc Computer Science student at <span className="text-neutral-200 font-medium">Karlstad University</span>. Currently learning AI/ML and optimization techniques, as well as advanced wireless networks.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <button
          onClick={() => scrollTo("projects")}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded text-xs sm:text-sm font-medium bg-[#ededed] hover:bg-white text-[#0a0a0a] shadow-sm hover:shadow-[0_4px_14px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer"
        >
          <span>View Projects</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs sm:text-sm font-medium border border-white/[0.12] hover:border-white/[0.28] hover:bg-white/[0.05] text-neutral-300 hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer"
          aria-label="Scroll to contact section"
        >
          <Mail className="w-3.5 h-3.5 text-neutral-400" aria-hidden="true" />
          <span>Contact Me</span>
        </button>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-5 text-xs text-neutral-400">
        <a
          href="https://github.com/Eklund2012"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out rounded px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
        <span className="text-neutral-600 select-none" aria-hidden="true">/</span>
        <a
          href="https://www.linkedin.com/in/david-eklund02"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 ease-out rounded px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          aria-label="LinkedIn Profile"
        >
          <LinkedinIcon className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Intro;