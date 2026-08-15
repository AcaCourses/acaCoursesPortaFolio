"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";

export default function Courses() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const courses = [
    {
      id: "git-mac-fes",
      name: "Taller de Shell, Git y GitHub",
      semester: "UNAM FES Acatlán · MAC",
      hours: "Curso intensivo · 3 días",
      summary:
        "Capacitación para la carrera de MAC y profesores. Aprende desde los comandos básicos en la terminal de Shell hasta la gestión de ramas con Git y el despliegue automático de portafolios en GitHub Pages.",
      experience: [
        "Navegación y automatización básica con scripts de Shell",
        "Control de versiones local: commits, ramas y fusiones sin conflictos",
        "Colaboración remota en GitHub y entrega con GitHub Classroom",
        "Publicación automática de sitio web/CV en GitHub Pages",
        "Construcción de portafolio y diploma oficial de la FES Acatlán"
      ],
      url: "https://github-course-tan.vercel.app/",
      tags: ["Shell", "Git", "GitHub", "GitHub Pages", "FES Acatlán"],
      status: "Activo",
      icon: "ri-github-fill",
      accent: "#2B4C5E",
      flagship: true,
    },
    {
      id: "web-dev",
      name: "Desarrollo de Aplicaciones Web",
      semester: "UNAM FES Acatlán · 2025-2",
      hours: "Semestral · 64 horas",
      summary:
        "Los estudiantes construyen una aplicación full-stack real desde cero: diseñan, desarrollan, prueban y despliegan su propio producto digital con herramientas modernas de la industria.",
      experience: [
        "Proyecto final desplegado en producción real con dominio público",
        "Flujo de trabajo colaborativo con Git, ramas y pull requests",
        "Arquitectura modular de componentes y rutas API backend",
        "Bases de datos relacionales, autenticación e imágenes",
        "Portafolio profesional interactivo como evidencia tangible"
      ],
      url: "https://webacatlan-ptjj.vercel.app/",
      tags: ["Next.js", "TypeScript", "Supabase", "Vercel", "GitHub"],
      status: "Disponible",
      icon: "ri-global-line",
      accent: "#1A5F7A",
      flagship: false,
    },
    {
      id: "cloud-comp",
      name: "Cómputo en la Nube",
      semester: "UNAM FES Acatlán · 2025-2",
      hours: "Semestral · 64 horas",
      summary:
        "Curso enfocado en arquitectura cloud, servicios distribuidos y despliegue profesional. El alumno aprende a diseñar, operar y escalar infraestructura con proveedores líderes.",
      experience: [
        "Infraestructura como código y despliegue automatizado en la nube",
        "Servicios serverless, contenedores y orquestación",
        "Monitoreo, estimación de costos y buenas prácticas de seguridad",
        "Trabajo colaborativo y documentación técnica de nivel industrial",
        "Proyecto integrador desplegado en entornos cloud reales"
      ],
      url: "https://cloud-computing-beta-plum.vercel.app/",
      tags: ["AWS", "GCP", "DevOps", "Arquitectura", "Docker"],
      status: "Disponible",
      icon: "ri-cloud-line",
      accent: "#1B6B4A",
      flagship: false,
    }
  ];

  const roadmapItems = [
    { label: "IA aplicada", icon: "ri-robot-2-line" },
    { label: "Agentes autónomos", icon: "ri-mind-map" },
    { label: "Automatización", icon: "ri-loop-left-line" },
    { label: "Datos e ingeniería", icon: "ri-database-2-line" },
  ];

  // Auto rotate cards unless user interacts
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % courses.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoplay, courses.length]);

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % courses.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleSelect = (idx: number) => {
    setIsAutoplay(false);
    setActiveIndex(idx);
  };

  return (
    <section id="cursos" className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-[#D9A500]/10 text-[#C4960A] text-xs font-semibold px-3 py-1 rounded-full border border-[#D9A500]/20 mb-3">
              <i className="ri-sparkling-line"></i>
              Capacitación & Cursos Universitarios
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-3"
              style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
            >
              Cursos y <span className="underline-hand">experiencias</span> de aprendizaje
            </h2>
            <p className="text-[#5A5A5A] text-base sm:text-lg max-w-[65ch]">
              Talles intensivos y materias de licenciatura en la UNAM FES Acatlán diseñados con metodología práctica, repositorios de código real y despliegue continuo.
            </p>
          </div>

          {/* Controller buttons for card deck */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Curso anterior"
              className="w-10 h-10 rounded-full border border-[#E0E0DE] bg-white text-[#2C2A26] flex items-center justify-center hover:bg-[#F7F6F2] hover:border-[#2B4C5E] transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-lg"></i>
            </button>

            {/* Stack indicators */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-white border border-[#E0E0DE] rounded-full shadow-sm">
              {courses.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => handleSelect(idx)}
                  aria-label={`Ir al curso ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-7 bg-[#2B4C5E]"
                      : "w-2.5 bg-[#E0E0DE] hover:bg-[#8A8680]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Siguiente curso"
              className="w-10 h-10 rounded-full border border-[#E0E0DE] bg-white text-[#2C2A26] flex items-center justify-center hover:bg-[#F7F6F2] hover:border-[#2B4C5E] transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <i className="ri-arrow-right-line text-lg"></i>
            </button>
          </div>
        </div>

        {/* ─── STACKED CARDS CONTAINER ─── */}
        <div className="relative h-[620px] sm:h-[580px] md:h-[540px] mb-16">
          {courses.map((course, idx) => {
            const total = courses.length;
            const offset = (idx - activeIndex + total) % total;

            const isCurrent = offset === 0;
            const isSecond = offset === 1;
            const isThird = offset === 2;

            let translateY = 0;
            let scale = 1;
            let zIndex = total - offset;
            let opacity = 1;

            if (isCurrent) {
              translateY = 0;
              scale = 1;
              opacity = 1;
            } else if (isSecond) {
              translateY = 20;
              scale = 0.96;
              opacity = 0.88;
            } else if (isThird) {
              translateY = 40;
              scale = 0.92;
              opacity = 0.70;
            } else {
              translateY = 55;
              scale = 0.88;
              opacity = 0;
            }

            return (
              <div
                key={course.id}
                onClick={() => !isCurrent && handleSelect(idx)}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-out ${
                  !isCurrent ? "cursor-pointer select-none hover:translate-y-3" : ""
                }`}
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  transformOrigin: "top center",
                  zIndex: zIndex,
                  opacity: opacity,
                }}
              >
                <div className="note-card rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#DDD9D2] shadow-xl flex flex-col h-[520px] sm:h-[480px]">
                  {/* Card Banner / Header Identical for all */}
                  <div
                    className="relative px-5 py-4 border-b border-[#E0E0DE] flex flex-wrap items-center justify-between gap-3 shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${course.accent}12, ${course.accent}04)`
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm shrink-0"
                        style={{ backgroundColor: course.accent }}
                      >
                        <i className={`${course.icon} text-xl`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold tracking-wide uppercase text-[#8A8680]">
                            {course.semester}
                          </span>
                          <span className="text-[#DDD9D2]">•</span>
                          <span className="text-[11px] font-medium text-[#5C5850]">
                            {course.hours}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#2C2A26] leading-tight">
                          {course.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-[#3E7A22]/10 text-[#3E7A22] text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-[#3E7A22]/20">
                        {course.status}
                      </span>
                      {course.flagship && (
                        <span className="bg-[#2B4C5E] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                          Novedad
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content Body - Identical Structure & Height for all */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1 overflow-hidden justify-between">
                    {/* Summary */}
                    <div>
                      <p className="text-sm sm:text-base text-[#5C5850] leading-relaxed mb-4">
                        {course.summary}
                      </p>

                      {/* Qué vive el estudiante */}
                      <div className="mb-4">
                        <p className="text-[#2C2A26] text-xs font-semibold uppercase tracking-wider mb-2">
                          Qué vive el estudiante
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-1.5">
                          {course.experience.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[#5C5850] text-[13px] leading-snug">
                              <i className="ri-checkbox-circle-line text-[#3E7A22] text-sm shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Area: Stack Tags & CTA Button */}
                    <div className="pt-3 border-t border-[#E0E0DE] flex flex-wrap items-center justify-between gap-3 shrink-0">
                      <div className="flex flex-wrap gap-1.5">
                        {course.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#F5F3EF] border border-[#DDD9D2] text-[#5C5850] text-[11px] font-mono px-2 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium px-4 py-2 rounded-xl border border-[#2B4C5E]/30 text-[#2B4C5E] transition-all duration-150 hover:bg-[#2B4C5E] hover:text-[#FAF8F4] active:scale-95 shadow-xs ml-auto"
                      >
                        Ver página del curso
                        <i className="ri-arrow-right-up-line" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── ROADMAP DOCENTE ─── */}
        <Reveal variant="clip-up">
          <div className="note-card rounded-2xl p-6 sm:p-8 relative overflow-hidden mt-2">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D9A500]/40 via-[#D9A500]/10 to-transparent" />

            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <span className="inline-block bg-[#D9A500]/10 text-[#C4960A] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#D9A500]/20 mb-3">
                  Líneas en desarrollo
                </span>
                <h4 className="text-[#2C2A26] font-semibold text-lg mb-2">Roadmap docente</h4>
                <p className="text-[#5C5850] text-sm leading-relaxed max-w-[50ch]">
                  Nuevas asignaturas en diseño, centradas en inteligencia artificial aplicada, agentes autónomos y automatización de procesos para la siguiente generación de profesionales.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:w-[280px]">
                {roadmapItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-[#F5F3EF] border border-[#DDD9D2] rounded-lg px-3 py-2.5"
                  >
                    <i className={`${item.icon} text-[#C4960A] text-base`} />
                    <span className="text-[#5C5850] text-[11px] font-medium leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Continuity note */}
        <p className="text-center text-[#8A8680] text-sm italic mt-8">
          Este portafolio crecerá con nuevas asignaturas centradas en desarrollo, cloud e inteligencia artificial.
        </p>
      </div>
    </section>
  );
}


