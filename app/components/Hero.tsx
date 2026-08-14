import Image from "next/image";
import geminiIcon from "./assets/imgs/icons8-gemini-32.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Paper grain — very faint texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      {/* Faint ruled lines — notebook feel */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-ruled"></div>

      <div className="max-w-[840px] mx-auto px-6 sm:px-8 w-full text-center relative z-10">
        {/* Kicker */}
        <p className="text-[#8A8680] text-[11px] uppercase tracking-[0.22em] mb-6 flex items-center justify-center gap-2 animate-fade-up">
          <span className="w-5 h-px bg-[#C4960A]/50"></span>
          FES Acatlán · UNAM
          <span className="w-5 h-px bg-[#C4960A]/50"></span>
        </p>

        {/* Headline — editorial serif */}
        <h1
          className="font-normal text-[#2C2A26] mb-6 animate-fade-up-delay-1"
          style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.08" }}
        >
          <span className="block text-[3.2rem] sm:text-[4.2rem] md:text-[4.8rem] tracking-tight">
            Diego Romero Mora
          </span>
          <span className="block text-[2rem] sm:text-[2.6rem] md:text-[3rem] text-[#2B4C5E] underline-hand mt-1">
            Docencia y Tecnología
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#2C2A26] text-base sm:text-lg max-w-[56ch] mx-auto mb-6 leading-[1.75] animate-fade-up-delay-2">
          Docencia orientada a proyectos reales en desarrollo web, cloud computing e IA aplicada. La teoría se convierte en productos, portafolio y experiencia profesional.
        </p>

        {/* Metadata line */}
        <div className="mb-8 animate-fade-up-delay-3 flex items-center justify-center">
          <p className="text-[#8A8680] text-xs sm:text-sm tracking-[0.04em] flex flex-wrap items-center justify-center gap-2">
            <span className="text-[#C4960A] text-[10px] font-semibold uppercase tracking-widest mr-1">
              Líneas:
            </span>
            <span>Desarrollo web</span>
            <span className="text-[#C4960A]/60">·</span>
            <span>Cloud</span>
            <span className="text-[#C4960A]/60">·</span>
            <span>IA aplicada</span>
            <span className="text-[#C4960A]/60">·</span>
            <span>ABP</span>
          </p>
        </div>

        {/* ─── GOOGLE FELLOWSHIP RECOGNITION CARD ─── */}
        <div className="animate-fade-up-delay-4 flex justify-center mt-6">
          <a
            href="https://edu.google.com/for-educators/communities/higher-ed-faculty-ai-fellowship/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-[560px] p-5 sm:p-6 rounded-2xl bg-[#FFFDF9]/95 border border-[#C4960A]/20 hover:border-[#C4960A]/60 shadow-[0_4px_24px_rgba(43,76,94,0.06)] hover:shadow-[0_16px_40px_rgba(196,150,10,0.15)] hover:-translate-y-2 scale-100 hover:scale-[1.015] transition-all duration-300 ease-out backdrop-blur-md overflow-hidden text-left block cursor-pointer"
          >
            {/* Top Washi Tape Detail — Archival Touch */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#C8C3AA]/35 backdrop-blur-xs rounded-xs border-b border-[#B0AB94]/25 pointer-events-none z-20"></div>

            {/* Animated shimmer sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4960A]/12 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>

            {/* Card Content Grid */}
            <div className="flex items-start gap-4 sm:gap-5 relative z-10">
              
              {/* Left: Standalone Gemini Icon */}
              <div className="flex-shrink-0 relative flex items-center justify-center pt-1">
                <Image
                  src={geminiIcon}
                  alt="Google Gemini Fellow"
                  width={34}
                  height={34}
                  className="object-contain group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300 ease-out drop-shadow-[0_2px_8px_rgba(196,150,10,0.25)]"
                />
              </div>

              {/* Middle/Right: Info & Text */}
              <div className="flex-1 min-w-0">
                {/* Header Pills */}
                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C4960A]/10 border border-[#C4960A]/25 text-[#C4960A] text-[10px] font-bold uppercase tracking-[0.16em] group-hover:bg-[#C4960A]/18 group-hover:border-[#C4960A]/40 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4960A] animate-ping"></span>
                    Selected Fellow 2026
                  </div>
                  <span className="text-[#8A8680] text-[10px] font-medium tracking-wide">
                    Google for Education · LATAM
                  </span>
                </div>

                {/* Main Title with Dynamic Arrow */}
                <h3 className="text-[#2C2A26] font-semibold text-base sm:text-lg tracking-tight leading-snug group-hover:text-[#2B4C5E] transition-colors duration-200 flex items-center justify-between gap-2">
                  <span>Google Higher Ed Faculty AI Fellow LATAM</span>
                  <i className="ri-arrow-right-up-line text-base text-[#8A8680] group-hover:text-[#C4960A] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-300 flex-shrink-0"></i>
                </h3>

                {/* Subtitle / Description */}
                <p className="text-[#5C5850] text-xs sm:text-[13px] leading-relaxed mt-1 italic">
                  Fellowship de IA para Docentes de Educación Superior · Liderando la transformación académica y la innovación responsable con IA.
                </p>
              </div>
            </div>

            {/* Bottom Subtle Footer Link Tag */}
            <div className="mt-3.5 pt-2.5 border-t border-[#DDD9D2]/50 flex items-center justify-between text-[10px] text-[#8A8680]">
              <span className="flex items-center gap-1">
                <i className="ri-award-line text-[#C4960A]"></i>
                Generación Inaugural 2026
              </span>
              <span className="relative text-[#2B4C5E] font-medium transition-colors group-hover:text-[#1F3A48]">
                Conocer programa oficial ↗
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#2B4C5E] group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
