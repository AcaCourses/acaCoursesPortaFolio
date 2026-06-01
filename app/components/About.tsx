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

        {/* Section header — editorial */}
        <div className="mb-10">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#2C2A26] mb-3"
            style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
          >
            Sobre el <span className="underline-hand">profesor</span>
          </h2>
          <p className="text-[#5C5850] text-sm sm:text-base max-w-[60ch] leading-relaxed">
            Docencia, desarrollo de software e inteligencia artificial aplicadas a la formación de talento tecnológico.
          </p>
        </div>

        {/* ═══ HOJA DE PRESENTACIÓN — Dossier personal ═══ */}
        <div className="paper-surface rounded-2xl p-5 sm:p-7 md:p-9 lg:p-10 bg-ruled relative">
          {/* Tape detail at top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-[#C8C3AA]/30 rounded-b-sm"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* ─── LEFT: Ficha personal ─── */}
            <div className="lg:col-span-2 space-y-5">
              {/* Monogram plate — replaces generic icon */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-20 h-20 rounded-xl border-2 border-[#2C2A26]/10 bg-[#FFFDF9] flex items-center justify-center mb-4 relative">
                  <span
                    className="text-[#2C2A26] text-2xl font-bold tracking-tight"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    DRM
                  </span>
                  {/* Small stamp accent */}
                  <span className="absolute -bottom-1.5 -right-1.5 bg-[#C4960A]/15 text-[#C4960A] text-[7px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider border border-[#C4960A]/20">
                    UNAM
                  </span>
                </div>
                <h3
                  className="text-[#2C2A26] text-xl sm:text-2xl"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Diego Romero Mora
                </h3>
                <p className="text-[#5C5850] text-sm mt-1">Profesor · Desarrollador · Mentor</p>
                <p className="text-[#2B4C5E] text-xs font-medium mt-2 inline-flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#2B4C5E]/50"></span>
                  Profesor de Asignatura en FES Acatlán
                </p>
              </div>

              {/* Metric marks — editorial chips */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {[
                  "4+ años docencia",
                  "Cloud · IA · Web",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="text-[#5C5850] text-[10px] font-medium px-2.5 py-1 rounded border border-[#DDD9D2] bg-[#FFFDF9]"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* LinkedIn — discrete, editorial link */}
              <a
                href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2B4C5E] text-xs font-medium border border-[#2B4C5E]/20 px-4 py-2 rounded-lg hover:border-[#2B4C5E]/40 hover:bg-[#2B4C5E]/3 transition-all duration-200 min-h-[40px]"
              >
                <i className="ri-linkedin-box-fill text-sm"></i>
                Ver perfil en LinkedIn
                <i className="ri-arrow-right-up-line text-[10px] opacity-60"></i>
              </a>
            </div>

            {/* ─── RIGHT: Evidencia editorial ─── */}
            <div className="lg:col-span-3 space-y-7">

              {/* PUBLICACIÓN DESTACADA — Nota editorial mínima */}
              <div>
                <a
                  href="https://heyzine.com/flip-book/962233e534.html#page/12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-md border border-[#DDD9D2]/70 bg-[#FFFDF9] hover:border-[#DDD9D2] hover:shadow-sm transition-all duration-150"
                >
                  <i className="ri-article-line text-[#2B4C5E] text-sm flex-shrink-0"></i>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#2C2A26] text-[11px] font-medium leading-tight line-clamp-1 group-hover:text-[#2B4C5E] transition-colors">
                      Houston, tenemos un problema? Arquitecturas que no pueden fallar
                    </p>
                    <p className="text-[#8A8680] text-[8px] mt-0.5">
                      Oct 2025 · Artículo publicado
                    </p>
                  </div>
                  <i className="ri-arrow-right-up-line text-[#8A8680] text-[10px] group-hover:text-[#2B4C5E] transition-colors flex-shrink-0"></i>
                </a>
              </div>

              {/* RESUMEN PROFESIONAL — Apuntes curatoriales */}
              <div>
                <h4 className="text-[#8A8680] text-[10px] font-semibold uppercase tracking-[0.15em] mb-4">
                  Trayectoria profesional
                </h4>
                <div className="space-y-4 margin-line">
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
                      {/* Editorial asterisk instead of plain dot */}
                      <span className="text-[#C4960A] text-[10px] mt-1 flex-shrink-0 leading-none">✳</span>
                      <div>
                        <p className="text-[#2C2A26] text-sm font-medium leading-snug">
                          {exp.role}
                          <span className="text-[#8A8680] font-normal text-xs"> — {exp.place}</span>
                        </p>
                        <p className="text-[#5C5850] text-[11px] leading-relaxed mt-0.5">{exp.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#8A8680] text-[10px] mt-3 ink-link"
                >
                  Ver trayectoria completa en LinkedIn
                  <i className="ri-external-link-line text-[9px]"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ─── CREDENCIALES — Fichas archivadas ─── */}
          <div className="mt-9 pt-7 border-t border-[#DDD9D2]/70">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h4 className="text-[#8A8680] text-[10px] font-semibold uppercase tracking-[0.15em]">
                  Credenciales seleccionadas
                </h4>
                <span className="text-[#8A8680] text-[9px] italic hidden sm:inline">— archivo de certificaciones</span>
              </div>
              {/* Page-turn navigation */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scroll("left")}
                  className="w-6 h-6 rounded border border-[#DDD9D2] flex items-center justify-center hover:border-[#2B4C5E] hover:text-[#2B4C5E] transition-colors text-[#8A8680] cursor-pointer bg-[#FFFDF9]"
                  aria-label="Anterior"
                >
                  <i className="ri-arrow-left-s-line text-xs"></i>
                </button>
                <span className="text-[#DDD9D2] text-[8px]">◆</span>
                <button
                  onClick={() => scroll("right")}
                  className="w-6 h-6 rounded border border-[#DDD9D2] flex items-center justify-center hover:border-[#2B4C5E] hover:text-[#2B4C5E] transition-colors text-[#8A8680] cursor-pointer bg-[#FFFDF9]"
                  aria-label="Siguiente"
                >
                  <i className="ri-arrow-right-s-line text-xs"></i>
                </button>
              </div>
            </div>

            <div
              ref={carouselRef}
              className="flex gap-3 overflow-x-auto overflow-y-visible snap-x snap-mandatory pt-2 pb-2 cursor-grab active:cursor-grabbing -mx-5 px-5 sm:mx-0 sm:px-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[220px] snap-start rounded-lg border border-[#DDD9D2] bg-[#FFFDF9] p-3.5 hover:border-[#2B4C5E]/20 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200"
                >
                  {/* Issuer as colored top-bar accent */}
                  <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-[#DDD9D2]/50">
                    <i className={`text-[#2B4C5E] text-xs ${
                      cred.issuer === "AWS" ? "ri-cloud-line" :
                      cred.issuer === "Google" ? "ri-google-line" :
                      cred.issuer === "Oracle" ? "ri-database-2-line" :
                      cred.issuer === "IBM" ? "ri-brain-line" :
                      "ri-award-line"
                    }`}></i>
                    <span className="text-[#2B4C5E] text-[10px] font-semibold uppercase tracking-wide">{cred.issuer}</span>
                  </div>
                  <h5 className="text-[#2C2A26] text-[11px] font-semibold leading-tight mb-2 line-clamp-2">
                    {cred.name}
                  </h5>
                  <p className="text-[#8A8680] text-[9px] flex items-center gap-1">
                    <i className="ri-calendar-line text-[8px]"></i>
                    {cred.issued}{cred.expires ? ` · Exp. ${cred.expires}` : ""}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#8A8680] text-[10px] mt-3 ink-link"
            >
              Más credenciales en LinkedIn
              <i className="ri-external-link-line text-[9px]"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
