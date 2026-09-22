import React, { useState } from "react";
import Title from "./title";
import { Send, Mail, MapPin, Check, Copy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "david.eklund9@proton.me";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <Title subtitle="Email me directly or send a message using the form.">
        Contact / Links
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        {/* Contact info & Links */}
        <div className="md:col-span-5 p-5 sm:p-6 rounded-lg bg-[#111111] hover:bg-[#131313] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-200 ease-out flex flex-col justify-between h-full">
          <div>
            <h3 className="text-sm font-medium text-[#ededed] mb-1.5">
              Direct Contact
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-5">
              Available for software engineering positions, internships, and technical questions.
            </p>

            <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0" aria-hidden="true" />
                <span>Karlstad, Sweden</span>
              </div>

              <div className="flex items-center gap-2.5 text-neutral-300 relative">
                <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${emailAddress}`}
                  aria-label={`Send email to ${emailAddress}`}
                  className="hover:text-white transition-all duration-200 ease-out truncate rounded focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 hover:underline underline-offset-4"
                >
                  {emailAddress}
                </a>

                {/* Copy button with relative container for smooth tooltip */}
                <div className="relative ml-auto flex items-center">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1.5 rounded text-neutral-400 hover:text-white hover:bg-white/[0.06] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    title={copied ? "Email copied!" : "Copy email address"}
                    aria-label={copied ? "Email address copied to clipboard" : "Copy email address to clipboard"}
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                  </button>

                  {/* Smooth unobtrusive confirmation tooltip */}
                  <div
                    role="status"
                    aria-live="polite"
                    className={`absolute -top-9 right-0 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1e1e1e] border border-white/[0.14] text-[11px] font-medium text-neutral-200 shadow-xl whitespace-nowrap transition-all duration-200 ease-out z-10 ${
                      copied
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-1 scale-95"
                    }`}
                  >
                    <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                    <span>Copied to clipboard!</span>
                    <span className="absolute -bottom-1 right-2.5 w-2 h-2 bg-[#1e1e1e] border-b border-r border-white/[0.14] rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.06]">
            <div className="text-xs text-neutral-400 font-medium mb-2.5">Profiles</div>
            <div className="flex gap-2.5">
              <a
                href="https://github.com/Eklund2012"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-neutral-900 border border-white/[0.08] hover:border-white/[0.22] hover:bg-neutral-800 text-xs font-normal text-neutral-300 hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/david-eklund02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-neutral-900 border border-white/[0.08] hover:border-white/[0.22] hover:bg-neutral-800 text-xs font-normal text-neutral-300 hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="md:col-span-7 p-5 sm:p-6 rounded-lg bg-[#111111] hover:bg-[#131313] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-200 ease-out">
          <h3 className="text-sm font-medium text-[#ededed] mb-1.5">
            Send a Message
          </h3>
          <p className="text-xs text-neutral-400 leading-relaxed mb-5">
            Fill out the form below to reach out directly.
          </p>

          <form
            action="https://getform.io/f/agdpzoqb"
            method="POST"
            className="flex flex-col gap-3.5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-neutral-400 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 bg-[#0a0a0a] border border-white/[0.08] hover:border-white/[0.16] focus:border-white/[0.28] focus:bg-[#0c0c0c] rounded text-xs sm:text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] transition-all duration-200 ease-out"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-neutral-400 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-3 py-2 bg-[#0a0a0a] border border-white/[0.08] hover:border-white/[0.16] focus:border-white/[0.28] focus:bg-[#0c0c0c] rounded text-xs sm:text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] transition-all duration-200 ease-out"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-neutral-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message..."
                required
                className="w-full px-3 py-2 bg-[#0a0a0a] border border-white/[0.08] hover:border-white/[0.16] focus:border-white/[0.28] focus:bg-[#0c0c0c] rounded text-xs sm:text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] transition-all duration-200 ease-out resize-none"
              />
            </div>

            <button
              type="submit"
              className="group mt-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-xs sm:text-sm font-medium bg-[#ededed] hover:bg-white text-[#0a0a0a] shadow-sm hover:shadow-[0_4px_14px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer w-full sm:w-auto self-start"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
