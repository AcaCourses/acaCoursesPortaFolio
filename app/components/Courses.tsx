"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";

export default function Courses() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const courses = [
    {
      id: "git-mac-fes",
      name: "Taller de Shell, Git y GitHub · UNAM FES Acatlán",
      institution: "UNAM FES Acatlán · MAC",
      subtitle: "Del terminal al portafolio",
      badge: "Curso Intensivo · 3 días",
      summary:
        "Capacitación intensiva para la carrera de Matemáticas Aplicadas y Computación (MAC) y profesores sobre el uso de Shell, Git, GitHub y GitHub Classroom.",
      accent: "#2B4C5E",
      url: "https://github-course-tan.vercel.app/",
      enrollUrl: "https://github-course-tan.vercel.app/#inscripcion",
      programUrl: "https://github-course-tan.vercel.app/#programa",
      icon: "ri-github-fill",
      flagship: true,
      status: "Capacitación Activa",
      tags: ["Shell", "Git", "GitHub", "GitHub Pages", "GitHub Classroom", "UNAM FES Acatlán"],
      roadmap: [
        {
          step: "01",
          title: "Paso 01 · Shell",
          desc: "Navega tu sistema de archivos, ejecuta comandos y automatiza tareas. La base de cualquier entorno técnico profesional.",
          icon: "ri-terminal-box-line",
          details: [
            "Navegación y sistema: cd, ls, mkdir, rm — muévete y organiza tu entorno.",
            "Variables y entorno: Configura el PATH y personaliza tu sesión de shell.",
            "Pipes y filtros: Encadena comandos con |, redirige con > y filtra con grep.",
            "Scripts .sh: Escribe tus primeros scripts para automatizar tareas repetitivas."
          ]
        },
        {
          step: "02",
          title: "Paso 02 · Flujos de trabajo (Git)",
          desc: "Entiende cómo colaboran los equipos: ramas, revisiones y merge requests sin conflictos ni sorpresas.",
          icon: "ri-git-branch-line",
          details: [
            "Commits: Fotografía tu proyecto registrando cada cambio con precisión.",
            "Ramas (branches): Experimenta en aislamiento sin romper el código base.",
            "Merge & Rebase: Integra el trabajo colaborativo sin conflictos.",
            "Historial: Viaja en el tiempo con git log y git checkout."
          ]
        },
        {
          step: "03",
          title: "Paso 03 · Versiones & GitHub",
          desc: "Git en la nube. Colabora, gestiona entregas y construye tu perfil profesional.",
          icon: "ri-cloud-line",
          details: [
            "Repositorios remotos: Sube tu código y accede desde cualquier dispositivo.",
            "Pull Requests: Propón cambios y colabora en proyectos académicos y open source.",
            "Student Pack: Acceso gratuito a herramientas profesionales.",
            "Tu CV en GitHub: Tu perfil de GitHub como evidencia real de tus capacidades."
          ]
        },
        {
          step: "04",
          title: "Paso 04 · Deploy en Internet",
          desc: "Publica tu sitio web con GitHub Pages. Una URL real lista para compartir desde el último día del curso.",
          icon: "ri-global-line",
          details: [
            "Publicación sin servidores: Deploy automático con cada git push.",
            "URL pública: tu-usuario.github.io/portafolio lista para incluir en tu CV.",
            "Certificación: diploma de la FES Acatlán al completar el taller."
          ]
        }
      ],
      resultInfo: {
        title: "Un portafolio publicado en internet antes de salir del salón",
        pipeline: ["Repositorio", "Editas tu CV", "Commit", "Push", "Deploy automático", "URL pública"],
        diplomaText: "Al completar el taller recibirás tu diploma de la FES Acatlán. Súbelo a LinkedIn y demuestra tus habilidades."
      }
    },
    {
      id: "web-dev",
      name: "Desarrollo de Aplicaciones Web",
      institution: "FES Acatlán · Semestre 2025-2",
      subtitle: "Construcción Full-Stack de Productos Digitales",
      badge: "Semestral · 64 horas",
      summary:
        "Los estudiantes construyen una aplicación full-stack real desde cero: diseñan, desarrollan, prueban y despliegan su propio producto digital con herramientas de la industria.",
      accent: "#1A5F7A",
      url: "https://webacatlan-ptjj.vercel.app/",
      enrollUrl: "https://webacatlan-ptjj.vercel.app/",
      programUrl: "https://webacatlan-ptjj.vercel.app/",
      icon: "ri-global-line",
      flagship: false,
      status: "Disponible",
      tags: ["Next.js", "TypeScript", "Supabase", "Vercel", "GitHub"],
      experience: [
        "Proyecto final desplegado en producción real con dominio público",
        "Flujo de trabajo colaborativo con Git, ramas y pull requests",
        "Arquitectura modular de componentes y rutas API backend",
        "Bases de datos relacionales, autenticación e imágenes",
        "Portafolio profesional como evidencia tangible"
      ]
    },
    {
      id: "cloud-comp",
      name: "Cómputo en la Nube",
      institution: "FES Acatlán · Semestre 2025-2",
      subtitle: "Arquitectura Cloud, Serverless & DevOps",
      badge: "Semestral · 64 horas",
      summary:
        "Curso enfocado en arquitectura cloud, servicios distribuidos y despliegue profesional. El alumno aprende a diseñar, operar y escalar infraestructura con proveedores líderes.",
      accent: "#1B6B4A",
      url: "https://cloud-computing-beta-plum.vercel.app/",
      enrollUrl: "https://cloud-computing-beta-plum.vercel.app/",
      programUrl: "https://cloud-computing-beta-plum.vercel.app/",
      icon: "ri-cloud-line",
      flagship: false,
      status: "Disponible",
      tags: ["AWS", "GCP", "DevOps", "Arquitectura", "Docker"],
      experience: [
        "Infraestructura como código y despliegue automatizado en la nube",
        "Servicios serverless, contenedores y orquestación",
        "Monitoreo, estimación de costos y buenas prácticas de seguridad",
        "Trabajo colaborativo y documentación técnica de nivel industrial",
        "Proyecto integrador desplegado en entornos cloud reales"
      ]
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
              className="w-10 h-10 rounded-full border border-[#E0E0DE] bg-white text-[#2C2A26] flex items-center justify-center hover:bg-[#F7F6F2] hover:border-[#2B4C5E] transition-all shadow-sm active:scale-95"
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
                  className={`h-2.5 rounded-full transition-all duration-300 ${
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
              className="w-10 h-10 rounded-full border border-[#E0E0DE] bg-white text-[#2C2A26] flex items-center justify-center hover:bg-[#F7F6F2] hover:border-[#2B4C5E] transition-all shadow-sm active:scale-95"
            >
              <i className="ri-arrow-right-line text-lg"></i>
            </button>
          </div>
        </div>

        {/* ─── STACKED CARDS CONTAINER ─── */}
        <div className="relative min-h-[720px] sm:min-h-[760px] md:min-h-[700px] mb-16">
          {courses.map((course, idx) => {
            // Calculate stack position relative to active index
            const total = courses.length;
            // offset: 0 is active, 1 is next card behind, 2 is card behind that
            const offset = (idx - activeIndex + total) % total;

            const isCurrent = offset === 0;
            const isSecond = offset === 1;
            const isThird = offset === 2;

            // Compute card transforms for standard card overlay / stacked deck feel
            let translateY = 0;
            let scale = 1;
            let zIndex = total - offset;
            let opacity = 1;

            if (isCurrent) {
              translateY = 0;
              scale = 1;
              opacity = 1;
            } else if (isSecond) {
              translateY = 22;
              scale = 0.96;
              opacity = 0.88;
            } else if (isThird) {
              translateY = 44;
              scale = 0.92;
              opacity = 0.70;
            } else {
              translateY = 60;
              scale = 0.88;
              opacity = 0;
            }

            return (
              <div
                key={course.id}
                onClick={() => !isCurrent && handleSelect(idx)}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-out ${
                  !isCurrent ? "cursor-pointer select-none hover:translate-y-4" : ""
                }`}
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  transformOrigin: "top center",
                  zIndex: zIndex,
                  opacity: opacity,
                  pointerEvents: isCurrent ? "auto" : "auto"
                }}
              >
                <div className="note-card rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#DDD9D2] shadow-xl">
                  {/* Top banner / header */}
                  <div
                    className="relative px-6 py-4 border-b border-[#E0E0DE] flex flex-wrap items-center justify-between gap-3"
                    style={{
                      background: `linear-gradient(135deg, ${course.accent}12, ${course.accent}05)`
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
                        <span className="text-[11px] font-semibold tracking-wide uppercase text-[#8A8680] block">
                          {course.institution}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#2C2A26] leading-tight">
                          {course.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {course.flagship && (
                        <span className="bg-[#2B4C5E] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                          Novedad · FES Acatlán MAC
                        </span>
                      )}
                      <span className="bg-white/80 backdrop-blur border border-[#DDD9D2] text-[#2C2A26] text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                        {course.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 sm:p-8">
                    {/* Course Header Info */}
                    <div className="mb-6">
                      <p className="text-base sm:text-lg text-[#2C2A26] font-medium mb-3 leading-relaxed">
                        {course.summary}
                      </p>

                      {/* Action buttons (CTAs) */}
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        {course.enrollUrl && (
                          <a
                            href={course.enrollUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#2B4C5E] hover:bg-[#1A3340] text-white font-medium text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95"
                          >
                            Inscríbete al taller
                            <i className="ri-arrow-right-line" />
                          </a>
                        )}
                        {course.programUrl && (
                          <a
                            href={course.programUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white border border-[#DDD9D2] hover:border-[#2B4C5E] text-[#2C2A26] hover:text-[#2B4C5E] font-medium text-sm px-4 py-2.5 rounded-xl transition-all shadow-xs"
                          >
                            Ver programa / sitio oficial
                            <i className="ri-external-link-line" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* SPECIAL SECTION: TALLER GIT FES ACATLÁN ROADMAP */}
                    {course.roadmap && (
                      <div className="space-y-6 pt-2 border-t border-[#E0E0DE]">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A8680] flex items-center gap-2">
                              <i className="ri-map-pin-2-line text-[#C4960A]" />
                              Tu recorrido · Road Map del Taller
                            </h4>
                            <span className="text-xs text-[#8A8680] font-mono">
                              Shell › Git › GitHub › Pages
                            </span>
                          </div>

                          {/* 4 Steps Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            {course.roadmap.map((st) => (
                              <div
                                key={st.step}
                                className="p-3.5 rounded-xl bg-[#F7F6F2] border border-[#E0E0DE] hover:border-[#2B4C5E]/30 transition-all flex flex-col justify-between"
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[11px] font-bold text-[#C4960A] font-mono">
                                      {st.step}
                                    </span>
                                    <i className={`${st.icon} text-lg text-[#2B4C5E]`} />
                                  </div>
                                  <h5 className="font-semibold text-xs text-[#2C2A26] mb-1">
                                    {st.title}
                                  </h5>
                                  <p className="text-[11px] text-[#5C5850] leading-snug">
                                    {st.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Result / Deploy Showcase Banner */}
                        {course.resultInfo && (
                          <div className="rounded-xl bg-gradient-to-r from-[#2B4C5E]/10 via-[#2B4C5E]/5 to-transparent border border-[#2B4C5E]/20 p-4 sm:p-5">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="space-y-1">
                                <span className="inline-block bg-[#3E7A22]/15 text-[#3E7A22] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#3E7A22]/30">
                                  El resultado del curso
                                </span>
                                <h4 className="text-sm sm:text-base font-bold text-[#2C2A26]">
                                  {course.resultInfo.title}
                                </h4>
                                <p className="text-xs text-[#5C5850]">
                                  {course.resultInfo.diplomaText}
                                </p>
                              </div>

                              {/* Deploy Pipeline Flow visual */}
                              <div className="bg-white p-3 rounded-lg border border-[#DDD9D2] shrink-0 shadow-xs">
                                <div className="text-[10px] font-mono font-bold text-[#8A8680] mb-1 text-center">
                                  GitHub Pages Deploy Flow
                                </div>
                                <div className="flex items-center gap-1 text-[11px] text-[#2C2A26] font-mono overflow-x-auto py-0.5">
                                  <span className="bg-[#F7F6F2] px-1.5 py-0.5 rounded border border-[#E0E0DE]">📁 Repo</span>
                                  <span>›</span>
                                  <span className="bg-[#F7F6F2] px-1.5 py-0.5 rounded border border-[#E0E0DE]">✏️ Edit</span>
                                  <span>›</span>
                                  <span className="bg-[#2B4C5E] text-white px-1.5 py-0.5 rounded">git push</span>
                                  <span>›</span>
                                  <span className="bg-[#3E7A22] text-white px-1.5 py-0.5 rounded">🌐 URL pública</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Standard Course Experience list for other courses */}
                    {course.experience && (
                      <div className="pt-4 border-t border-[#E0E0DE]">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A8680] mb-3">
                          Lo que experimenta el estudiante
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2.5">
                          {course.experience.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-[#5C5850] leading-snug">
                              <i className="ri-checkbox-circle-line text-[#3E7A22] text-sm shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Stack tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-5 pt-3 border-t border-[#E0E0DE]">
                      <span className="text-[11px] text-[#8A8680] font-medium mr-1">Stack:</span>
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#F5F3EF] border border-[#DDD9D2] text-[#5C5850] text-[11px] font-mono px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── ROADMAP DOCENTE ─── */}
        <Reveal variant="clip-up">
          <div className="note-card rounded-2xl p-6 sm:p-8 relative overflow-hidden mt-6">
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

