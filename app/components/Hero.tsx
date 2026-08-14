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

        {/* ─── GOOGLE FELLOWSHIP BADGE ─── */}
        <div className="animate-fade-up-delay-4 flex justify-center mt-2">
          <div className="group relative inline-flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-[#FFFDF9]/90 border border-[#C4960A]/35 shadow-[0_4px_20px_rgba(196,150,10,0.1)] hover:shadow-[0_6px_28px_rgba(43,76,94,0.18)] hover:border-[#2B4C5E]/50 transition-all duration-300 backdrop-blur-md overflow-hidden cursor-default">
            
            {/* Animated shimmer highlight effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C4960A]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            {/* Glowing icon badge container */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#2B4C5E]/10 via-[#C4960A]/15 to-[#4285F4]/10 p-2 border border-[#C4960A]/30 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={geminiIcon}
                alt="Google Gemini Fellow"
                width={24}
                height={24}
                className="object-contain animate-pulse duration-[3000ms]"
              />
            </div>

            {/* Badge Text Content */}
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-[#C4960A] text-[9px] font-bold uppercase tracking-[0.18em]">
                  Fellowship 2026
                </span>
                <span className="w-1 h-1 rounded-full bg-[#C4960A]/60"></span>
                <span className="text-[#2B4C5E] text-[9px] font-semibold tracking-wide">
                  Google for Education
                </span>
              </div>
              <h3 className="text-[#2C2A26] font-semibold text-xs sm:text-sm tracking-tight leading-tight mt-0.5 group-hover:text-[#2B4C5E] transition-colors">
                Google Higher Ed Faculty AI Fellow LATAM
              </h3>
            </div>

            {/* Subtle spark icon */}
            <i className="ri-sparkling-fill text-[#C4960A] text-sm opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300 ml-1"></i>
          </div>
        </div>

      </div>
    </section>
  );
}
