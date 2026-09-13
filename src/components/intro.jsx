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
        Software engineer specializing in backend systems, Go, and Python.
      </p>

      {/* Factual Bio */}
      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 max-w-2xl font-normal">
        MSc Computer Science student at <span className="text-neutral-200 font-medium">Karlstad University</span>. I write backend services, CLI tools, and automation scripts, with coursework focused on distributed systems, computer networks, and cybersecurity.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        <button
          onClick={() => scrollTo("projects")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs sm:text-sm font-medium bg-[#ededed] hover:bg-white text-[#0a0a0a] transition-colors duration-150 cursor-pointer"
        >
          <span>View Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs sm:text-sm font-medium border border-white/[0.12] hover:border-white/[0.24] hover:bg-white/[0.04] text-neutral-300 hover:text-white transition-colors duration-150 cursor-pointer"
        >
          <Mail className="w-3.5 h-3.5 text-neutral-400" />
          <span>Contact Me</span>
        </button>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-5 text-xs text-neutral-400">
        <a
          href="https://github.com/Eklund2012"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-neutral-200 transition-colors duration-150"
          aria-label="GitHub Profile"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
        <span className="text-neutral-700">/</span>
        <a
          href="https://www.linkedin.com/in/david-eklund02"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-neutral-200 transition-colors duration-150"
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