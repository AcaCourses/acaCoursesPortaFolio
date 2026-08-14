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

        {/* ─── COMPACT GOOGLE FELLOWSHIP CARD ─── */}
        <div className="animate-fade-up-delay-4 flex justify-center mt-5">
          <a
            href="https://edu.google.com/for-educators/communities/higher-ed-faculty-ai-fellowship/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block p-[0.5px] rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Animated Gemini Border Glow (ONLY appears on hover, ultra thin 0.5px) */}
            <div className="absolute inset-0 rounded-xl gemini-border-animated opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Inner Rectangle Container (Clean background, NO shadow) */}
            <div className="relative w-[340px] sm:w-[420px] px-4 py-3 sm:px-5 sm:py-3.5 rounded-[11.5px] bg-[#FFFDF9] border border-[#DDD9D2]/70 group-hover:border-transparent transition-colors duration-300 text-left">
              
              {/* Card Content Grid */}
              <div className="flex items-center gap-3.5 relative z-10">
                
                {/* Left: Standalone Gemini Icon (Center glow, spins as it glides left) */}
                <div className="flex-shrink-0 relative flex items-center justify-center animate-gemini-center-slide z-20">
                  <Image
                    src={geminiIcon}
                    alt="Google Gemini Fellow"
                    width={28}
                    height={28}
                    className="object-contain transition-transform duration-300 ease-out"
                  />
                </div>

                {/* Right: Info & Text (Typewriter effect reveal AFTER logo finishes transition) */}
                <div className="flex-1 min-w-0 animate-typewriter-reveal">
                  <h3 className="text-[#2C2A26] font-semibold text-xs sm:text-sm tracking-tight leading-tight group-hover:text-[#2B4C5E] transition-colors duration-200 flex items-center justify-between gap-1.5 whitespace-nowrap">
                    <span>Google Higher Ed Faculty AI Fellow LATAM</span>
                    <i className="ri-arrow-right-up-line text-xs text-[#8A8680] group-hover:text-[#4285F4] transition-colors duration-200 flex-shrink-0 ml-1"></i>
                  </h3>

                  <p className="text-[#5C5850] text-[11px] leading-tight mt-0.5 italic whitespace-nowrap">
                    Fellowship de IA para Docentes de Educación Superior · 2026
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
