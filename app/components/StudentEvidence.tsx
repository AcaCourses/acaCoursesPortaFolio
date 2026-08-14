"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img from "./assets/imgs/TalentLand.jpg";
import OracleD from "./assets/imgs/Oracle DeepDive.jpg";
import GBuild from "./assets/imgs/BuildWithIA.png";
import NextPlay from "./assets/imgs/NextPlay.jpg";
import DataBreakfast from "./assets/imgs/DataForB.png";
import AWSome from "./assets/imgs/AWSome.png";
import Inmersion from "./assets/imgs/Inmersion.png";
import MongoDB from "./assets/imgs/Mongo.png";
import INFOTEC from "./assets/imgs/info.png";
import oktaImg from "./assets/imgs/okta.png";
import bbvaImg from "./assets/imgs/logo-bbva-960x640.jpg";
import googleImg from "./assets/imgs/icons8-google-48.png";
import redhatImg from "./assets/imgs/icons8-red-hat-48.png";
import awsImg from "./assets/imgs/icons8-aws-48.png";
import buildWithIaImg from "./assets/imgs/BuildWithIA.png";

// TODO: reemplazar con imagen real
export default function StudentEvidence() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const postItCarouselRef = useRef<HTMLDivElement>(null);
  const [isDraggingPostIts, setIsDraggingPostIts] = useState(false);
  const [startXPostIts, setStartXPostIts] = useState(0);
  const [scrollLeftPostIts, setScrollLeftPostIts] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 320;
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

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current || isDragging) return;
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isDragging]);

  const scrollPostIts = (direction: "left" | "right") => {
    if (!postItCarouselRef.current) return;
    const scrollAmount = 260;
    postItCarouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handlePostItsMouseDown = (e: React.MouseEvent) => {
    if (!postItCarouselRef.current) return;
    setIsDraggingPostIts(true);
    setStartXPostIts(e.pageX - postItCarouselRef.current.offsetLeft);
    setScrollLeftPostIts(postItCarouselRef.current.scrollLeft);
  };

  const handlePostItsMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingPostIts || !postItCarouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - postItCarouselRef.current.offsetLeft;
    const walk = (x - startXPostIts) * 1.5;
    postItCarouselRef.current.scrollLeft = scrollLeftPostIts - walk;
  };

  const handlePostItsMouseUp = () => setIsDraggingPostIts(false);

  // Auto-scroll post-its
  useEffect(() => {
    const interval = setInterval(() => {
      if (!postItCarouselRef.current || isDraggingPostIts) return;
      const { scrollLeft, scrollWidth, clientWidth } = postItCarouselRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        postItCarouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        postItCarouselRef.current.scrollBy({ left: 260, behavior: "smooth" });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isDraggingPostIts]);

  // All images for hero rotation
  const allImages = [img, OracleD, GBuild, NextPlay, DataBreakfast, AWSome, Inmersion, MongoDB, INFOTEC];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % allImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [allImages.length]);

  const featuredEvents = [
    {
      name: "Talent Land",
      type: "Festival Tech",
      location: "CDMX",
      value: "Conexión con comunidad tech",
      image: img,
    },
    {
      name: "Oracle DeepDive",
      type: "Workshop",
      location: "CDMX",
      value: "Tendencias en IA y cloud",
      image: OracleD,
    },
    {
      name: "Google Build with AI Series",
      type: "Workshop",
      location: "CDMX",
      value: "Aprendizaje aplicado con herramientas actuales",
      image: GBuild,
    },
  ];

  const secondaryEvents = [
    { name: "Nextplay LIVE Presented by Zillow", type: "Conferencia", location: "Mexico City", image: NextPlay },
    { name: "Data for Breakfast by Snowflake", type: "Conferencia", location: "CDMX", image: DataBreakfast },
    { name: "AWSome Women Summit LATAM 2026", type: "Summit", location: "CDMX", image: AWSome },
    { name: "Inmersión de Agentes de IA", type: "Bootcamp", location: "Virtual", image: Inmersion },
    { name: "MongoDB Building AI Agents", type: "Workshop", location: "Virtual", image: MongoDB },
    { name: "INFOTEC – Google Cloud Data Analytics Certificate", type: "Certificación", location: "CDMX", image: INFOTEC },
  ];

  const postItEvents = [
    {
      name: "IA Identity Summit",
      company: "Okta",
      image: oktaImg,
      rotate: "-rotate-1",
      bgColor: "bg-[#FFFDF9]",
    },
    {
      name: "Mujeres en Tech",
      company: "BBVA Spark",
      image: bbvaImg,
      rotate: "rotate-1",
      bgColor: "bg-[#FAF7ED]",
    },
    {
      name: "Discover what’s next: WWDC26",
      company: "Apple",
      icon: "ri-apple-fill",
      rotate: "-rotate-2",
      bgColor: "bg-[#FFFDF9]",
    },
    {
      name: "Cloud Native CDMX",
      company: "Google",
      image: googleImg,
      rotate: "rotate-2",
      bgColor: "bg-[#F5F3EF]",
    },
    {
      name: "Ansible Automates CDMX 2026",
      company: "Red Hat",
      image: redhatImg,
      rotate: "-rotate-1",
      bgColor: "bg-[#FAF7ED]",
    },
    {
      name: "DevDays Latam: Go Agentic with Serverless",
      company: "AWS",
      image: awsImg,
      rotate: "rotate-1",
      bgColor: "bg-[#FFFDF9]",
    },
    {
      name: "Google Data Cloud & Apigee: AI Evolution Summit",
      company: "Google",
      image: googleImg,
      rotate: "-rotate-2",
      bgColor: "bg-[#F5F3EF]",
    },
    {
      name: "AWS Summit 2026",
      company: "AWS",
      image: awsImg,
      rotate: "rotate-2",
      bgColor: "bg-[#FAF7ED]",
    },
    {
      name: "Build With IA",
      company: "Google",
      image: googleImg,
      rotate: "-rotate-1",
      bgColor: "bg-[#FFFDF9]",
    },
    {
      name: "Quantum Day Latino",
      company: "Google",
      image: googleImg,
      rotate: "rotate-1",
      bgColor: "bg-[#FAF7ED]",
    },
    {
      name: "Agentic League",
      company: "AWS",
      image: awsImg,
      rotate: "-rotate-2",
      bgColor: "bg-[#F5F3EF]",
    },
  ];

  const successStories = [
    {
      name: "Daniel Velázquez",
      program: "Walmart Spark Me Up",
      company: "Walmart",
      role: "Finance Analyst Intern – Fraud Prevention, Refunds & Strategic Initiatives",
      period: "Ago. 2026 - Actualidad",
      location: "Área metropolitana de CDMX",
      areas: ["Category Strategy", "Fraud Prevention", "Risk Assessment", "E-Commerce"],
      description:
        "Desempeño en el departamento de Anti-Fraud enfocado en la integridad financiera, monitoreo de vendedores, evaluación de riesgos y optimización de procesos para iniciativas estratégicas de comercio electrónico.",
      linkedin: "https://www.linkedin.com/company/2646/",
      initials: "DV",
    },
    {
      name: "Emiliano Ruiz",
      program: "Walmart Spark Me Up",
      company: "Walmart",
      role: "Customer Service Strategy Intern – Customer Experience & Analytics",
      period: "Ago. 2026 - Actualidad",
      location: "Área metropolitana de CDMX",
      areas: ["Estrategia de Servicio", "Desarrollo E-Commerce", "Modelización de Datos", "Customer Experience"],
      description:
        "Desarrollo de modelos analíticos avanzados para la optimización estratégica del servicio al cliente y soluciones omnicanal orientadas al crecimiento del ecosistema e-commerce.",
      linkedin: "https://www.linkedin.com/company/2646/",
      initials: "ER",
    },
  ];

  const benefits = [
    {
      icon: "ri-contacts-line",
      title: "Networking",
      description: "Conexión directa con reclutadores y empresas del ecosistema tech.",
    },
    {
      icon: "ri-presentation-line",
      title: "Conferencias",
      description: "Charlas de expertos en IA, cloud y desarrollo moderno.",
    },
    {
      icon: "ri-tools-line",
      title: "Workshops",
      description: "Talleres prácticos con las herramientas que usa la industria.",
    },
    {
      icon: "ri-lightbulb-flash-line",
      title: "Casos reales",
      description: "Exposición a problemas y soluciones reales de IA y cloud.",
    },
    {
      icon: "ri-briefcase-line",
      title: "Internships",
      description: "Posibilidad de prácticas profesionales en empresas tecnológicas.",
    },
  ];

  return (
    <section id="evidencia" className="py-16 sm:py-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">

        {/* ─── 1. HOJA PRINCIPAL — Editorial, no banner corporativo ─── */}
        <div className="paper-surface bg-ruled rounded-2xl overflow-hidden mb-14 sm:mb-20 relative">
          {/* Tape micro-detail on top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#C8C3AA]/30 rounded-b-sm z-10"></div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] min-h-[360px]">
            {/* Left: Rotating evidence photo — framed as clipping */}
            <div className="relative overflow-hidden m-5 sm:m-7 rounded-xl border border-[#DDD9D2]">
              <div className="absolute inset-0 bg-[#1a2a3a]">
                {allImages.map((imgSrc, i) => (
                  <Image
                    key={i}
                    src={imgSrc}
                    alt="Evidencia del ecosistema"
                    fill
                    className={`object-contain p-5 transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
              {/* Archival caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#FFFDF9]/90 border-t border-[#DDD9D2] px-3 py-1.5">
                <p className="text-[#5C5850] text-[10px] italic flex items-center gap-1.5">
                  <i className="ri-camera-line text-[#8A8680] text-[9px]"></i>
                  Registro fotográfico — Ecosistema de aprendizaje 2025-2026
                </p>
              </div>
            </div>

            {/* Right: Editorial text — margin-line for notebook feel */}
            <div className="p-7 sm:p-9 lg:py-10 flex flex-col justify-center margin-line">
              <span className="text-[#C4960A] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 inline-flex items-center gap-2">
                <span className="w-4 h-px bg-[#C4960A]"></span>
                Experiencia extendida del curso
              </span>
              <h2
                className="text-[#2C2A26] text-3xl sm:text-4xl mb-4"
                style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
              >
                Ecosistema de <span className="underline-hand">Aprendizaje</span>
              </h2>
              <p className="text-[#5C5850] text-sm leading-relaxed max-w-[46ch]">
                Más que una clase, el curso conecta a los estudiantes con conferencias, workshops, comunidades y espacios donde circulan las tecnologías que ya usa la industria.
              </p>
              <p className="text-[#8A8680] text-xs mt-5 border-l-2 border-[#C4960A]/25 pl-3 italic leading-relaxed">
                "Estos estudiantes no solo toman clase; se mueven en el ecosistema donde ocurren la IA, el cloud y el desarrollo moderno."
              </p>
            </div>
          </div>
        </div>

        {/* ─── 2. FICHAS DE EVIDENCIA — 1 protagonista + 2 soporte ─── */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-6 h-px bg-[#DDD9D2]"></span>
            <h3 className="text-[#2C2A26] font-semibold text-xs uppercase tracking-[0.15em]">
              Evidencias del ecosistema
            </h3>
            <span className="flex-1 h-px bg-[#DDD9D2]"></span>
            <span className="text-[#8A8680] text-[10px] italic hidden sm:inline">fichas de registro</span>
          </div>

          {/* Asymmetric grid — card 0 is protagonist */}
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
            {/* PROTAGONIST card — larger, tape detail, more breathing room */}
            <div className="group note-card tape-detail rounded-xl overflow-hidden">
              <div className="aspect-[16/9] relative overflow-hidden bg-[#F5F3EF]">
                <Image
                  src={featuredEvents[0].image}
                  alt={featuredEvents[0].name}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#2B4C5E] text-white text-[10px] font-semibold px-2.5 py-1 rounded">
                  {featuredEvents[0].type}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h4 className="text-[#2C2A26] font-semibold text-base mb-1.5 leading-tight">
                  {featuredEvents[0].name}
                </h4>
                <p className="text-[#8A8680] text-[11px] mb-2.5 flex items-center gap-1.5">
                  <i className="ri-map-pin-2-line text-[9px]"></i>
                  {featuredEvents[0].location}
                </p>
                <p className="text-[#5C5850] text-sm leading-relaxed">
                  → {featuredEvents[0].value}
                </p>
              </div>
            </div>

            {/* SECONDARY cards — stacked, compact, more textual */}
            <div className="flex flex-col gap-5">
              {featuredEvents.slice(1).map((event, index) => (
                <div
                  key={index}
                  className="group note-card rounded-xl overflow-hidden flex flex-row sm:flex-row"
                >
                  {/* Smaller side image */}
                  <div className="w-28 sm:w-36 relative flex-shrink-0 overflow-hidden bg-[#F5F3EF]">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  {/* Text as field note */}
                  <div className="p-4 flex flex-col justify-center flex-1 min-w-0">
                    <span className="text-[#2B4C5E] text-[9px] font-semibold uppercase tracking-wider mb-1.5 inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2B4C5E]/40"></span>
                      {event.type}
                    </span>
                    <h4 className="text-[#2C2A26] font-semibold text-sm mb-1 leading-tight">
                      {event.name}
                    </h4>
                    <p className="text-[#8A8680] text-[10px] mb-1.5 flex items-center gap-1">
                      <i className="ri-map-pin-2-line text-[8px]"></i>
                      {event.location}
                    </p>
                    <p className="text-[#5C5850] text-[11px] leading-relaxed italic">
                      → {event.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 3. BITÁCORA DEL ECOSISTEMA — Archivo curatorial ─── */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-[#DDD9D2]"></span>
              <h3 className="text-[#2C2A26] font-semibold text-xs uppercase tracking-[0.15em]">
                Bitácora del ecosistema
              </h3>
              <span className="text-[#8A8680] text-[10px] italic hidden sm:inline ml-2">— archivo de experiencias</span>
            </div>
            {/* Navigation as page-turning controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-7 h-7 rounded border border-[#DDD9D2] flex items-center justify-center hover:border-[#2B4C5E] hover:text-[#2B4C5E] transition-colors text-[#8A8680] cursor-pointer bg-[#FFFDF9]"
                aria-label="Página anterior"
              >
                <i className="ri-arrow-left-s-line text-xs"></i>
              </button>
              <span className="text-[#8A8680] text-[9px]">◆</span>
              <button
                onClick={() => scroll("right")}
                className="w-7 h-7 rounded border border-[#DDD9D2] flex items-center justify-center hover:border-[#2B4C5E] hover:text-[#2B4C5E] transition-colors text-[#8A8680] cursor-pointer bg-[#FFFDF9]"
                aria-label="Página siguiente"
              >
                <i className="ri-arrow-right-s-line text-xs"></i>
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 cursor-grab active:cursor-grabbing -mx-6 px-6 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {secondaryEvents.map((event, i) => {
              // Vary card widths for editorial rhythm
              const isWide = i % 3 === 0;
              return (
                <div
                  key={i}
                  className={`flex-shrink-0 snap-start note-card rounded-xl overflow-hidden ${isWide ? "w-[300px] sm:w-[320px]" : "w-[240px] sm:w-[260px]"}`}
                >
                  {/* Image — varied heights for rhythm */}
                  <div className={`relative overflow-hidden bg-[#F5F3EF] ${isWide ? "h-36" : "h-24"}`}>
                    {"image" in event && event.image ? (
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#2B4C5E]/5 to-[#2B4C5E]/10">
                        <i className="ri-file-text-line text-[#DDD9D2] text-2xl"></i>
                      </div>
                    )}
                    {/* Type as color-coded sticker by category */}
                    <span className={`absolute top-2 left-2 text-[9px] font-semibold px-2 py-0.5 rounded uppercase tracking-wide ${event.type === "Workshop" ? "bg-[#2B4C5E]/90 text-white" :
                        event.type === "Summit" ? "bg-[#C4960A]/90 text-white" :
                          event.type === "Bootcamp" ? "bg-[#6B4C3B]/85 text-white" :
                            event.type === "Certificación" ? "bg-[#2D6A4F]/85 text-white" :
                              "bg-[#FFFDF9]/90 text-[#2B4C5E] border border-[#DDD9D2]/50"
                      }`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="p-3.5">
                    <h4 className="text-[#2C2A26] font-medium text-xs leading-tight mb-1.5">
                      {event.name}
                    </h4>
                    <p className="text-[#8A8680] text-[10px] flex items-center gap-1 mb-1.5">
                      <i className="ri-map-pin-2-line text-[8px]"></i>
                      {event.location}
                    </p>
                    {/* Micro-description for curatorial context */}
                    {isWide && (
                      <p className="text-[#5C5850] text-[10px] italic leading-relaxed border-t border-[#DDD9D2]/50 pt-1.5 mt-1">
                        Experiencia que amplía el alcance del aula
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── 3.5 OTROS EVENTOS — Banner tipo Post-its pegados ─── */}
        <div className="mb-14 sm:mb-20 bg-[#F5F3EF]/60 border border-[#DDD9D2]/70 rounded-2xl p-5 sm:p-7 relative overflow-hidden">
          {/* Top subtle tape line */}
          <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#C4960A]/20 to-transparent"></div>

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#C4960A]"></span>
              <h3 className="text-[#2C2A26] font-semibold text-xs sm:text-sm uppercase tracking-[0.15em]">
                Hemos asistido a los siguientes eventos juntos
              </h3>
              <span className="text-[#8A8680] text-[10px] italic hidden md:inline ml-2">
                — notas adhesivas de la bitácora
              </span>
            </div>
            {/* Navigation controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollPostIts("left")}
                className="w-7 h-7 rounded border border-[#DDD9D2] flex items-center justify-center hover:border-[#2B4C5E] hover:text-[#2B4C5E] transition-colors text-[#8A8680] cursor-pointer bg-[#FFFDF9]"
                aria-label="Eventos anteriores"
              >
                <i className="ri-arrow-left-s-line text-xs"></i>
              </button>
              <span className="text-[#8A8680] text-[9px]">◆</span>
              <button
                onClick={() => scrollPostIts("right")}
                className="w-7 h-7 rounded border border-[#DDD9D2] flex items-center justify-center hover:border-[#2B4C5E] hover:text-[#2B4C5E] transition-colors text-[#8A8680] cursor-pointer bg-[#FFFDF9]"
                aria-label="Eventos siguientes"
              >
                <i className="ri-arrow-right-s-line text-xs"></i>
              </button>
            </div>
          </div>

          <div
            ref={postItCarouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-3 px-1 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handlePostItsMouseDown}
            onMouseMove={handlePostItsMouseMove}
            onMouseUp={handlePostItsMouseUp}
            onMouseLeave={handlePostItsMouseUp}
          >
            {postItEvents.map((item, idx) => (
              <div
                key={idx}
                className={`flex-shrink-0 snap-start relative w-[230px] sm:w-[250px] p-4 rounded-xl border border-[#DDD9D2] ${item.bgColor} ${item.rotate} shadow-sm hover:shadow-md hover:scale-[1.02] hover:rotate-0 transition-all duration-300 flex items-center justify-between gap-3 group`}
              >
                {/* Washi tape detail on top of post-it */}
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-[#C8C3AA]/40 backdrop-blur-xs rounded-xs border-b border-[#B0AB94]/30 pointer-events-none"></div>

                {/* Left: Event Name & Company */}
                <div className="flex-1 min-w-0 pr-1">
                  <h4 className="text-[#2C2A26] font-semibold text-xs sm:text-[13px] leading-snug group-hover:text-[#2B4C5E] transition-colors line-clamp-2">
                    {item.name}
                  </h4>
                  <span className="text-[#8A8680] text-[10px] font-medium mt-1.5 inline-flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#C4960A]"></span>
                    by {item.company}
                  </span>
                </div>

                {/* Right: Company Logo / Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/90 p-1.5 border border-[#DDD9D2]/70 shadow-xs flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.company}
                      width={36}
                      height={36}
                      className="object-contain max-h-full max-w-full"
                    />
                  ) : (
                    <i className={`${item.icon} text-2xl text-[#2C2A26]`}></i>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 3.8 CASOS DE ÉXITO — Fichas de Trayectoria Profesional ─── */}
        <div id="casos-de-exito" className="mb-14 sm:mb-20 scroll-mt-24">
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-[#DDD9D2]"></span>
              <h3 className="text-[#2C2A26] font-semibold text-xs uppercase tracking-[0.15em]">
                Casos de Éxito & Impacto Profesional
              </h3>
              <span className="text-[#8A8680] text-[10px] italic hidden sm:inline ml-2">
                — estudiantes vinculados a posiciones estratégicas
              </span>
            </div>
            <span className="text-[#3E7A22] text-[10px] font-semibold px-2.5 py-1 rounded bg-[#3E7A22]/10 border border-[#3E7A22]/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7A22] animate-pulse"></span>
              Spark Me Up · Walmart
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group paper-surface note-card rounded-2xl p-6 sm:p-7 relative overflow-hidden transition-all duration-300 hover:shadow-md border border-[#DDD9D2]"
              >
                {/* Washi tape detail */}
                <div className="absolute -top-1.5 left-8 w-14 h-3 bg-[#C8C3AA]/35 rounded-b-xs border-b border-[#B0AB94]/25"></div>

                {/* Top header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar circle */}
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2B4C5E]/10 via-[#C4960A]/12 to-[#2B4C5E]/5 border border-[#DDD9D2] flex items-center justify-center text-[#2C2A26] font-bold text-sm shadow-xs">
                      {story.initials}
                    </div>
                    <div>
                      <h4 className="text-[#2C2A26] font-semibold text-base leading-tight group-hover:text-[#2B4C5E] transition-colors">
                        {story.name}
                      </h4>
                      <p className="text-[#8A8680] text-[11px] font-medium flex items-center gap-1 mt-0.5">
                        <i className="ri-building-line text-[10px] text-[#C4960A]"></i>
                        {story.program} · {story.company}
                      </p>
                    </div>
                  </div>

                  <span className="text-[#8A8680] text-[10px] italic bg-[#F5F3EF] px-2 py-0.5 rounded border border-[#DDD9D2]/60">
                    Perfil Estudiante
                  </span>
                </div>

                {/* Role title */}
                <div className="mb-3.5 bg-[#FAF8F4] p-3 rounded-xl border border-[#DDD9D2]/70">
                  <span className="text-[#2B4C5E] text-[9px] font-bold uppercase tracking-widest block mb-1">
                    Posición Estratégica
                  </span>
                  <p className="text-[#2C2A26] font-semibold text-xs sm:text-[13px] leading-snug">
                    {story.role}
                  </p>
                </div>

                {/* Strategic area tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {story.areas.map((area, i) => (
                    <span
                      key={i}
                      className="text-[#5C5850] text-[10px] font-medium px-2.5 py-0.5 rounded-full border border-[#DDD9D2] bg-[#FFFDF9]"
                    >
                      #{area}
                    </span>
                  ))}
                </div>

                {/* Description quote */}
                <p className="text-[#5C5850] text-xs leading-relaxed italic border-l-2 border-[#C4960A]/40 pl-3 mb-4 bg-[#F5F3EF]/40 py-2 rounded-r-lg">
                  "{story.description}"
                </p>

                {/* Card footer */}
                <div className="pt-3 border-t border-[#DDD9D2]/50 flex items-center justify-between text-[11px]">
                  <span className="text-[#8A8680] text-[10px] flex items-center gap-1">
                    <i className="ri-calendar-line text-[9px]"></i>
                    {story.period}
                  </span>
                  <a
                    href={story.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2B4C5E] font-medium hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Ver empresa</span>
                    <i className="ri-arrow-right-up-line text-xs"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 4. OUTCOMES DEL RECORRIDO — Apuntes de observación ─── */}
        <div className="paper-surface rounded-xl p-6 sm:p-8">
          {/* Header with editorial annotation */}
          <div className="flex items-start gap-3 mb-6">
            <span className="text-[#C4960A] text-lg mt-0.5">✦</span>
            <div>
              <h3 className="text-[#2C2A26] font-semibold text-sm mb-0.5">
                Lo que viven los estudiantes
              </h3>
              <p className="text-[#8A8680] text-[10px] italic">
                Outcomes observados en el recorrido del ecosistema
              </p>
            </div>
          </div>

          {/* Observation notes — staggered, not uniform grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`rounded-lg border border-[#DDD9D2]/60 p-3.5 bg-[#FFFDF9] hover:border-[#2B4C5E]/15 transition-colors ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
              >
                <div className="flex items-start gap-2.5">
                  <i className={`${benefit.icon} text-[#C4960A] text-sm mt-0.5`}></i>
                  <div className="min-w-0">
                    <h4 className="text-[#2C2A26] font-semibold text-[11px] mb-0.5">
                      {benefit.title}
                    </h4>
                    <p className="text-[#5C5850] text-[10px] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Small handwritten-style annotation at bottom */}
          <p className="text-[#8A8680] text-[10px] italic mt-5 text-right">
            — Notas del ecosistema, semestre 2025-2
          </p>
        </div>

      </div>
    </section>
  );
}
