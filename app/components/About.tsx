"use client";

import { useEffect, useRef, useState } from "react";

interface Credential {
  issuer: string;
  name: string;
  issued: string;
  expires?: string;
  link: string;
}

const credentials: Credential[] = [
  { issuer: "AWS", name: "Solutions Architect – Associate", issued: "2024", expires: "2027", link: "#" },
  { issuer: "Google", name: "Cloud Security Fundamentals", issued: "may. 2026", expires: "may. 2030", link: "#" },
  { issuer: "Google", name: "Generative AI Leader", issued: "2025", link: "#" },
  { issuer: "Oracle", name: "Cloud Infrastructure Foundations", issued: "2024", link: "#" },
  { issuer: "IBM", name: "AI Engineering", issued: "2023", link: "#" },
];

export default function About() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 280;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // Auto-scroll credentials carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current || isDragging) return;
      const { scrollLeft: sl, scrollWidth, clientWidth } = carouselRef.current;
      if (sl + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 260, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <section id="sobre-mi" className="py-16 sm:py-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <div className="mb-10">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-3"
            style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
          >
            Sobre el profesor
          </h2>
          <p className="text-[#5A5A5A] text-base sm:text-lg max-w-[65ch]">
            Docencia, desarrollo de software e inteligencia artificial aplicadas a la formación de talento tecnológico.
          </p>
        </div>

        {/* Main card surface */}
        <div className="bg-white border border-[#E0E0DE] rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12">
            {/* ─── LEFT COLUMN: Identity ─── */}
            <div className="lg:col-span-2 space-y-6">
              {/* Identity block */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#013B75] to-[#1a5296] flex items-center justify-center mb-4 shadow-md">
                  <i className="ri-user-line text-white text-4xl"></i>
                </div>
                <h3 className="text-[#1A1A1A] font-semibold text-xl">Diego Romero Mora</h3>
                <p className="text-[#5A5A5A] text-sm mt-1">Profesor · Desarrollador · Mentor</p>
                <p className="text-[#013B75] text-sm font-medium mt-1">
                  Profesor de Asignatura en FES Acatlán, UNAM
                </p>
              </div>

              {/* LinkedIn CTA */}
              <a
                href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#013B75] text-white font-medium px-5 py-2.5 rounded-lg hover:bg-[#012a57] transition-all duration-200 hover:shadow-md text-sm min-h-[44px] w-full sm:w-auto justify-center lg:justify-start"
              >
                <i className="ri-linkedin-box-fill text-lg"></i>
                Ver más en LinkedIn
                <i className="ri-arrow-right-up-line text-sm"></i>
              </a>

              {/* Metric chips */}
              <div className="flex flex-wrap gap-2">
                {[
                  "4+ años",
                  "1 curso insignia",
                  "Cloud · IA · Web",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="bg-[#013B75]/5 text-[#013B75] text-xs font-medium px-3 py-1.5 rounded-full border border-[#013B75]/10"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* ─── RIGHT COLUMN: Evidence ─── */}
            <div className="lg:col-span-3 space-y-6">
              {/* Featured publication */}
              <div>
                <h4 className="text-[#8A8A8A] text-xs font-semibold uppercase tracking-wider mb-3">
                  Publicación destacada
                </h4>
                <a
                  href="https://heyzine.com/flip-book/962233e534.html#page/12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#F7F6F2] border border-[#E0E0DE] rounded-xl p-4 sm:p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer block"
                >
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#013B75]/10 flex items-center justify-center flex-shrink-0">
                      <i className="ri-article-line text-[#013B75] text-lg sm:text-xl"></i>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-[#1A1A1A] font-semibold text-xs sm:text-sm leading-tight mb-1 group-hover:text-[#013B75] transition-colors break-words">
                        HOUSTON, TENEMOS UN §PROBLEMA? ARQUITECTURAS DE SOFTWARE QUE NO PUEDEN FALLAR
                      </h5>
                      <p className="text-[#8A8A8A] text-xs mb-2">21 oct. 2025</p>
                      <p className="text-[#5A5A5A] text-xs leading-relaxed line-clamp-2">
                        Análisis de arquitecturas de software resilientes, patrones de diseño para sistemas de misión crítica y lecciones de ingeniería a escala.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[#E0E0DE] flex items-center justify-between">
                    <span className="text-[#013B75] text-xs font-medium group-hover:underline">
                      Leer más
                    </span>
                    <i className="ri-arrow-right-up-line text-[#013B75] text-sm"></i>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#8A8A8A] text-xs mt-2 hover:text-[#013B75] transition-colors"
                >
                  Más publicaciones y artículos en LinkedIn
                  <i className="ri-external-link-line"></i>
                </a>
              </div>

              {/* Career summary */}
              <div>
                <h4 className="text-[#8A8A8A] text-xs font-semibold uppercase tracking-wider mb-3">
                  Resumen profesional
                </h4>
                <div className="space-y-3">
                  {[
                    {
                      role: "Profesor de Asignatura",
                      place: "FES Acatlán, UNAM",
                      detail: "Formación de talento en desarrollo web con tecnología de vanguardia.",
                    },
                    {
                      role: "Senior AI Automation Engineer",
                      place: "Teradata",
                      detail: "Arquitectura de Agentic Workflows y Multi-Agent Systems empresariales.",
                    },
                    {
                      role: "Experiencia previa",
                      place: "Solera · Insulet · CTIN",
                      detail: "Software engineering, cloud testing y desarrollo full-stack.",
                    },
                  ].map((exp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D9A500] mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-[#1A1A1A] text-sm font-medium">
                          {exp.role} <span className="text-[#8A8A8A] font-normal">— {exp.place}</span>
                        </p>
                        <p className="text-[#5A5A5A] text-xs">{exp.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#8A8A8A] text-xs mt-3 hover:text-[#013B75] transition-colors"
                >
                  Ver trayectoria completa en LinkedIn
                  <i className="ri-external-link-line"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ─── FULL WIDTH: Credentials carousel ─── */}
          <div className="mt-8 pt-8 border-t border-[#E0E0DE]">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[#8A8A8A] text-xs font-semibold uppercase tracking-wider">
                Credenciales
              </h4>
              <div className="flex gap-1">
                <button
                  onClick={() => scroll("left")}
                  className="w-7 h-7 rounded-full border border-[#E0E0DE] flex items-center justify-center hover:border-[#013B75] hover:text-[#013B75] transition-colors text-[#5A5A5A] cursor-pointer"
                  aria-label="Anterior"
                >
                  <i className="ri-arrow-left-s-line text-sm"></i>
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-7 h-7 rounded-full border border-[#E0E0DE] flex items-center justify-center hover:border-[#013B75] hover:text-[#013B75] transition-colors text-[#5A5A5A] cursor-pointer"
                  aria-label="Siguiente"
                >
                  <i className="ri-arrow-right-s-line text-sm"></i>
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 cursor-grab active:cursor-grabbing -mx-4 px-4 sm:mx-0 sm:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[240px] snap-start bg-[#F7F6F2] border border-[#E0E0DE] rounded-xl p-4 hover:border-[#013B75]/20 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded bg-[#013B75]/10 flex items-center justify-center">
                      <i className={`text-[#013B75] text-xs ${
                        cred.issuer === "AWS" ? "ri-cloud-line" :
                        cred.issuer === "Google" ? "ri-google-line" :
                        cred.issuer === "Oracle" ? "ri-database-2-line" :
                        cred.issuer === "IBM" ? "ri-brain-line" :
                        "ri-award-line"
                      }`}></i>
                    </div>
                    <span className="text-[#8A8A8A] text-xs font-medium">{cred.issuer}</span>
                  </div>
                  <h5 className="text-[#1A1A1A] text-xs font-semibold leading-tight mb-1.5 line-clamp-2">
                    {cred.name}
                  </h5>
                  <p className="text-[#8A8A8A] text-[10px]">
                    {cred.issued}{cred.expires ? ` · Exp. ${cred.expires}` : ""}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#8A8A8A] text-xs mt-2 hover:text-[#013B75] transition-colors"
            >
              Más credenciales en LinkedIn
              <i className="ri-external-link-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
