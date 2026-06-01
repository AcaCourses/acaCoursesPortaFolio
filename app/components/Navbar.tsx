"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
            ? "bg-[#F7F6F2]/90 backdrop-blur-[10px] shadow-sm border-b border-[#E0E0DE]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1120px] mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="font-semibold text-[#1A1A1A] text-sm tracking-tight cursor-pointer"
          >
            <span className="text-[#013B75]">DRM</span>
            <span className="hidden sm:inline text-[#5A5A5A] font-normal ml-2">
              Portafolio Docente
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-[#5A5A5A] hover:text-[#013B75] transition-colors text-sm font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#013B75] rounded"
              >
                {link.label}
              </button>
            ))}

          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#1A1A1A] text-2xl cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F7F6F2] flex flex-col pt-20 px-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-[#1A1A1A] text-lg font-medium py-3 px-4 rounded-xl hover:bg-[#013B75]/5 active:bg-[#013B75]/10 transition-colors cursor-pointer min-h-[44px]"
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
