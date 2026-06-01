"use client";

import { useEffect, useRef, useState } from "react";

interface Credential {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  link?: string;
  category: string;
}

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const credentials: Credential[] = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issued: "2024",
      expires: "2027",
      category: "Cloud",
      link: "#",
    },
    {
      name: "Implement Cloud Security Fundamentals on Google Cloud",
      issuer: "Google",
      issued: "may. 2026",
      expires: "may. 2030",
      category: "Cloud",
      link: "#",
    },
    {
      name: "Generative AI Leader",
      issuer: "Google",
      issued: "2025",
      category: "AI",
      link: "#",
    },
    {
      name: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle",
      issued: "2024",
      category: "Cloud",
      link: "#",
    },
    {
      name: "IBM AI Engineering",
      issuer: "IBM",
      issued: "2023",
      category: "AI",
      link: "#",
    },
    {
      name: "Formação em React Native",
      issuer: "Alura",
      issued: "2021",
      category: "Professional",
      link: "#",
    },
    {
      name: "English Proficiency Certificate",
      issuer: "Voxy",
      issued: "2022",
      category: "Complementarias",
      link: "#",
    },
  ];

  const filters = ["Todos", "Cloud", "AI", "Professional", "Complementarias"];

  const filtered =
    activeFilter === "Todos"
      ? credentials
      : credentials.filter((c) => c.category === activeFilter);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current || isDragging) return;
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isDragging, activeFilter]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftState(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section id="credenciales" className="py-16 sm:py-24 bg-[#F7F6F2]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-3"
            style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
          >
            Certificaciones y Credenciales
          </h2>
          <p className="text-[#5A5A5A] text-base sm:text-lg max-w-[65ch]">
            Credenciales verificables de Google, Oracle, AWS, IBM y más.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer min-h-[44px] ${
                activeFilter === filter
                  ? "bg-[#013B75] text-white"
                  : "bg-white border border-[#E0E0DE] text-[#5A5A5A] hover:border-[#013B75]/30 hover:text-[#013B75]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Credentials carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {filtered.map((cred, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start bg-white border border-[#E0E0DE] rounded-xl p-5 hover:border-[#013B75]/20 hover:shadow-sm transition-all duration-200"
            >
              {/* Issuer icon */}
              <div className="w-10 h-10 rounded-lg bg-[#F7F6F2] flex items-center justify-center mb-3">
                <i className={`text-[#013B75] text-lg ${
                  cred.issuer.includes("Google") ? "ri-google-line" :
                  cred.issuer.includes("Oracle") ? "ri-database-2-line" :
                  cred.issuer.includes("Amazon") || cred.issuer.includes("AWS") ? "ri-cloud-line" :
                  cred.issuer.includes("IBM") ? "ri-brain-line" :
                  "ri-award-line"
                }`}></i>
              </div>

              <h3 className="text-[#1A1A1A] font-semibold text-sm leading-tight mb-2 line-clamp-2">
                {cred.name}
              </h3>

              <p className="text-[#8A8A8A] text-xs mb-1">{cred.issuer}</p>
              <p className="text-[#8A8A8A] text-xs">
                Expedición: {cred.issued}
                {cred.expires && ` · Vencimiento: ${cred.expires}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
