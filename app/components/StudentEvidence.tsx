"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import img from "./assets/imgs/TalentLand.jpg";
import OracleD from "./assets/imgs/Oracle DeepDive.jpg";
import  GBuild from "./assets/imgs/BuildWithIA.png";
import NextPlay from "./assets/imgs/NextPlay.jpg";
import DataBreakfast from "./assets/imgs/DataForB.png";
import AWSome from "./assets/imgs/AWSome.png";
import Inmersion from "./assets/imgs/Inmersion.png";
import MongoDB from "./assets/imgs/Mongo.png";
import INFOTEC from "./assets/imgs/info.png";

 // TODO: reemplazar con imagen real
export default function StudentEvidence() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    <section id="evidencia" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">

        {/* ─── 1. HERO VISUAL ─── */}
        <div className="rounded-2xl overflow-hidden bg-[#013B75] mb-12 sm:mb-16">
          <div className="grid lg:grid-cols-2">
            {/* Left: Image - rotating */}
            <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden bg-[#0a1e3d]">
              {allImages.map((imgSrc, i) => (
                <Image
                  key={i}
                  src={imgSrc}
                  alt="Ecosistema de aprendizaje"
                  fill
                  className={`object-contain p-4 transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
            {/* Right: Text */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span className="text-[#D9A500] text-xs font-semibold uppercase tracking-wider mb-3">
                Experiencia extendida del curso
              </span>
              <h2
                className="text-white text-3xl sm:text-4xl mb-4"
                style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
              >
                Ecosistema de Aprendizaje
              </h2>
              <p className="text-white/80 text-base leading-relaxed max-w-[50ch]">
                Más que una clase, el curso conecta a los estudiantes con conferencias, workshops, comunidades y espacios donde circulan las tecnologías que ya usa la industria.
              </p>
              <p className="text-white/60 text-sm mt-4 italic">
                "Estos estudiantes no solo toman clase; se mueven en el ecosistema donde ocurren la IA, el cloud y el desarrollo moderno."
              </p>
            </div>
          </div>
        </div>

        {/* ─── 2. EVENTOS DESTACADOS ─── */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-[#1A1A1A] font-semibold text-sm uppercase tracking-wide mb-6">
            Eventos destacados
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredEvents.map((event, index) => (
              <div
                key={index}
                className="group bg-white border border-[#E0E0DE] rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden bg-[#F7F6F2]">
                  {event.image && (
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {/* Fallback */}
                  {!event.image && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className="ri-image-add-line text-[#E0E0DE] text-4xl"></i>
                    </div>
                  )}
                  {/* Type badge */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#013B75] text-xs font-medium px-2.5 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h4 className="text-[#1A1A1A] font-semibold text-base mb-1">
                    {event.name}
                  </h4>
                  <p className="text-[#8A8A8A] text-xs mb-2">{event.location}</p>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed">
                    {event.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 3. CARRUSEL DE EVENTOS SECUNDARIOS ─── */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[#1A1A1A] font-semibold text-sm uppercase tracking-wide">
              Más eventos del ecosistema
            </h3>
            <div className="flex gap-1.5">
              <button
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full border border-[#E0E0DE] flex items-center justify-center hover:border-[#013B75] hover:text-[#013B75] transition-colors text-[#5A5A5A] cursor-pointer"
                aria-label="Anterior"
              >
                <i className="ri-arrow-left-s-line"></i>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full border border-[#E0E0DE] flex items-center justify-center hover:border-[#013B75] hover:text-[#013B75] transition-colors text-[#5A5A5A] cursor-pointer"
                aria-label="Siguiente"
              >
                <i className="ri-arrow-right-s-line"></i>
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {secondaryEvents.map((event, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] sm:w-[300px] snap-start bg-[#F7F6F2] border border-[#E0E0DE] rounded-xl overflow-hidden hover:border-[#013B75]/20 hover:shadow-sm transition-all duration-200"
              >
                {/* Mini image banner */}
                <div className="h-24 relative overflow-hidden bg-gradient-to-br from-[#013B75]/5 to-[#013B75]/10">
                  {"image" in event && event.image ? (
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <i className="ri-image-add-line text-[#E0E0DE] text-2xl"></i>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-[#013B75] text-[10px] font-medium px-2 py-0.5 rounded-full">
                    {event.type}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-[#1A1A1A] font-medium text-sm leading-tight mb-1">
                    {event.name}
                  </h4>
                  <span className="text-[#8A8A8A] text-xs">{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 4. QUÉ VIVEN LOS ESTUDIANTES ─── */}
        <div>
          <h3 className="text-[#1A1A1A] font-semibold text-sm uppercase tracking-wide mb-6">
            Qué viven los estudiantes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-5 rounded-xl border border-[#E0E0DE] bg-[#F7F6F2] hover:border-[#013B75]/15 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D9A500]/10 flex items-center justify-center mx-auto mb-3">
                  <i className={`${benefit.icon} text-[#D9A500] text-lg`}></i>
                </div>
                <h4 className="text-[#1A1A1A] font-semibold text-sm mb-1">
                  {benefit.title}
                </h4>
                <p className="text-[#5A5A5A] text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
