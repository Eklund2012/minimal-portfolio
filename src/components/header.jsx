import React, { useState, useEffect } from "react";
import header from "../data/header";
import HeaderItem from "./headeritem";
import { Menu, X } from "lucide-react";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = header.map(item => document.getElementById(item.target)).filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (target) => {
    setMobileMenuOpen(false);
    if (target === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <div
          className="cursor-pointer font-medium text-sm tracking-tight text-white hover:text-neutral-300 transition-colors duration-150"
          onClick={() => handleScroll("hero")}
          aria-label="Scroll to top"
        >
          David Eklund
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ol className="flex gap-6 text-sm">
            {header.map((item, index) => (
              <HeaderItem
                key={index}
                text={item.text}
                active={activeSection === item.target}
                onClick={() => handleScroll(item.target)}
              />
            ))}
          </ol>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1.5 text-neutral-400 hover:text-white rounded focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/[0.08] px-6 py-4">
          <ol className="flex flex-col gap-3 text-sm">
            {header.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer py-1 transition-colors duration-150 ${
                  activeSection === item.target ? "text-white font-medium" : "text-neutral-400"
                }`}
                onClick={() => handleScroll(item.target)}
              >
                {item.text}
              </li>
            ))}
          </ol>
        </div>
      )}
    </header>
  );
}

export default Header;
