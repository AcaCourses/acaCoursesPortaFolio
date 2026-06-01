"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via Intersection Observer
  useEffect(() => {
    const sectionIds = ["inicio", "sobre-mi", "cursos", "evidencia", "contacto"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Inicio", id: "inicio" },
    { label: "Profesor", id: "sobre-mi" },
    { label: "Cursos", id: "cursos" },
    { label: "Evidencia", id: "evidencia" },
    { label: "Contacto", id: "contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "nav-paper shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="cursor-pointer flex items-baseline gap-2"
          >
            <span
              className="text-[#2C2A26] text-base font-bold tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              DRM
            </span>
            <span className="hidden sm:inline text-[#8A8680] text-[11px] font-normal tracking-wide">
              Portafolio Docente
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-[13px] tracking-[0.01em] cursor-pointer transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B4C5E] rounded pb-0.5 ${
                  activeSection === link.id
                    ? "text-[#2B4C5E] font-medium"
                    : "text-[#5C5850] font-normal hover:text-[#2B4C5E]"
                }`}
              >
                {link.label}
                {/* Active / hover underline */}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-[#2B4C5E] rounded-full transition-all duration-200 ${
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#2C2A26] text-2xl cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F4] flex flex-col pt-20 px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-lg py-3 px-4 rounded-xl transition-colors cursor-pointer min-h-[44px] ${
                  activeSection === link.id
                    ? "text-[#2B4C5E] font-semibold bg-[#2B4C5E]/5"
                    : "text-[#2C2A26] font-medium hover:bg-[#2B4C5E]/5 active:bg-[#2B4C5E]/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
