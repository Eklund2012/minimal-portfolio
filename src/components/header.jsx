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
        <button
          type="button"
          className="cursor-pointer font-medium text-sm tracking-tight text-white hover:text-neutral-200 transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] rounded px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          onClick={() => handleScroll("hero")}
          aria-label="Scroll to top"
        >
          David Eklund
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ol className="flex gap-2 text-sm">
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
          type="button"
          className="md:hidden p-1.5 text-neutral-400 hover:text-white hover:bg-white/[0.06] rounded active:scale-95 transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-4 h-4" aria-hidden="true" />
          ) : (
            <Menu className="w-4 h-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#0a0a0a] border-b border-white/[0.08] px-6 py-4"
        >
          <ol className="flex flex-col gap-2 text-sm">
            {header.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className={`w-full text-left cursor-pointer py-1.5 px-2 rounded transition-all duration-200 ease-out hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 ${
                    activeSection === item.target ? "text-white font-medium bg-white/[0.06]" : "text-neutral-400 hover:text-white"
                  }`}
                  onClick={() => handleScroll(item.target)}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
  );
}

export default Header;
