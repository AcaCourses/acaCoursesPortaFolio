import Image from "next/image";
import logoFesa from "./assets/imgs/logoFesaDiego.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Paper grain — very faint texture */}
      <div className="absolute inset-0 opacity-[0.018] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>

      {/* Faint ruled lines — notebook feel, horizontal only */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-ruled"></div>

      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 w-full py-32 sm:py-0">
        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-6 lg:gap-8 items-center">

          {/* ─── LEFT: Editorial headline ─── */}
          <div>
            {/* Kicker */}
            <p className="text-[#8A8680] text-[11px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2 animate-fade-up">
              <span className="w-5 h-px bg-[#C4960A]/50"></span>
              FES Acatlán · UNAM
            </p>

            {/* Headline — editorial serif, "Docente" as ink accent */}
            <h1
              className="font-normal text-[#2C2A26] mb-6 animate-fade-up-delay-1"
              style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.08" }}
            >
              <span className="block text-[3rem] sm:text-[3.8rem] md:text-[4.2rem]">
                Diego Romero Mora
              </span>
              <span className="block text-[2rem] sm:text-[2.5rem] md:text-[2.8rem] text-[#2B4C5E] underline-hand mt-1">
                Docencia y Tecnología
              </span>
            </h1>

            {/* Subtitle — human, specific */}
            <p className="text-[#2C2A26] text-base sm:text-[17px] max-w-[52ch] mb-6 leading-[1.7] animate-fade-up-delay-2">
              Docencia orientada a proyectos reales en desarrollo web, cloud computing e IA aplicada. La teoría se convierte en productos, portafolio y experiencia profesional.
            </p>

            {/* Metadata line — quiet, editorial annotation */}
            <div className="mb-10 animate-fade-up-delay-3">
              <p className="text-[#8A8680] text-[11px] sm:text-xs tracking-[0.04em] flex items-center gap-2">
                <span className="text-[#C4960A]/80 text-[9px] font-semibold uppercase tracking-widest mr-1">Líneas</span>
                Desarrollo web
                <span className="text-[#C4960A]/50">·</span>
                Cloud
                <span className="text-[#C4960A]/50">·</span>
                IA aplicada
                <span className="text-[#C4960A]/50">·</span>
                ABP
              </p>
            </div>

            {/* CTA — ink-on-paper editorial button */}
            <div className="flex flex-wrap gap-3 animate-fade-up-delay-4">
              <a
                href="#cursos"
                className="group inline-flex items-center gap-2.5 bg-[#2B4C5E] text-[#FAF8F4] font-medium px-5 py-2.5 rounded-[5px] text-sm min-h-[42px] shadow-[0_1px_4px_rgba(43,76,94,0.12)] hover:bg-[#1F3A48] hover:-translate-y-px hover:shadow-[0_3px_10px_rgba(43,76,94,0.16)] transition-all duration-180"
              >
                Ver cursos
                <i className="ri-arrow-down-s-line text-xs opacity-70 group-hover:translate-y-0.5 transition-transform duration-180"></i>
              </a>
            </div>
          </div>

          {/* ─── RIGHT: Ficha docente — nota archivada ─── */}
          <div className="animate-fade-up-delay-4 flex justify-center lg:justify-end">
            <div className="note-card rounded-xl relative w-full max-w-[320px] overflow-hidden">

              {/* Tape strip — single memorable gesture */}
              <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[56px] h-[13px] bg-[#C8C3AA]/30 rounded-[1px] rotate-[-0.8deg] z-10"></div>

              {/* Margin line — left notebook edge */}
              <div className="absolute top-0 left-[22px] bottom-0 w-px bg-[#B45046]/[0.09]"></div>

              <div className="px-7 pt-7 pb-5 text-left">
                {/* Ficha label */}
                <p className="text-[#8A8680] text-[8px] uppercase tracking-[0.18em] font-medium mb-4">
                  Ficha docente
                </p>

                {/* Roles — left-aligned, hierarchical */}
                <p className="text-[#2B4C5E] text-[12px] font-medium mb-1">
                  Profesor de Asignatura · FES Acatlán, UNAM
                </p>
                <p className="text-[#5C5850] text-[11px] mb-1">
                  Senior AI Automation Engineer · Teradata
                </p>
                <p className="text-[#8A8680] text-[10px] italic mb-4">
                  Egresado MAC · Maestría en Ciencia de Datos
                </p>

                {/* Separator — dashed, archival */}
                <div className="w-full h-px border-t border-dashed border-[#DDD9D2]/70 mb-3"></div>

                {/* Tags — small ink labels */}
                <div className="flex gap-1.5 mb-4">
                  {["Web", "Cloud", "IA"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[#5C5850] text-[9px] font-medium px-2 py-0.5 rounded border border-[#DDD9D2] bg-[#FAF8F4]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer note */}
                <p className="text-[#8A8680] text-[8px] pt-2 border-t border-[#DDD9D2]/40">
                  Semestre 2025-2 · Actualizado jun 2026
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
