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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 my-16 sm:my-20">
      <Title subtitle="Email me directly or send a message using the form.">
        Contact / Links
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        {/* Contact info & Links */}
        <div className="md:col-span-5 p-5 sm:p-6 rounded-lg bg-[#111111] border border-white/[0.08] flex flex-col justify-between h-full">
          <div>
            <h3 className="text-sm font-medium text-[#ededed] mb-1.5">
              Direct Contact
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-5">
              Available for software engineering positions, internships, and technical questions.
            </p>

            <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <span>Karlstad, Sweden</span>
              </div>

              <div className="flex items-center gap-2.5 text-neutral-300">
                <Mail className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                <a
                  href={`mailto:${emailAddress}`}
                  className="hover:text-white transition-colors duration-150 truncate"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-1 text-neutral-500 hover:text-white transition-colors duration-150 cursor-pointer ml-auto"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-neutral-300" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/[0.06]">
            <div className="text-xs text-neutral-500 mb-2.5">Profiles</div>
            <div className="flex gap-2.5">
              <a
                href="https://github.com/Eklund2012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-neutral-900 border border-white/[0.08] hover:border-white/[0.18] text-xs font-normal text-neutral-300 hover:text-white transition-colors duration-150"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/david-eklund02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-neutral-900 border border-white/[0.08] hover:border-white/[0.18] text-xs font-normal text-neutral-300 hover:text-white transition-colors duration-150"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="md:col-span-7 p-5 sm:p-6 rounded-lg bg-[#111111] border border-white/[0.08]">
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
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 bg-[#0a0a0a] border border-white/[0.08] focus:border-white/[0.24] rounded text-xs sm:text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none transition-colors duration-150"
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
                placeholder="your.email@example.com"
                required
                className="w-full px-3 py-2 bg-[#0a0a0a] border border-white/[0.08] focus:border-white/[0.24] rounded text-xs sm:text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none transition-colors duration-150"
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
                className="w-full px-3 py-2 bg-[#0a0a0a] border border-white/[0.08] focus:border-white/[0.24] rounded text-xs sm:text-sm text-neutral-200 placeholder:text-neutral-600 focus:outline-none transition-colors duration-150 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded text-xs sm:text-sm font-medium bg-[#ededed] hover:bg-white text-[#0a0a0a] transition-colors duration-150 cursor-pointer w-full sm:w-auto self-start"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;