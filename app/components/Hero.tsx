export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F6F2] bg-grid"
    >
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 w-full py-32 sm:py-0">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content - 60% */}
          <div className="lg:col-span-3">
            <p className="text-[#5A5A5A] text-xs sm:text-sm uppercase tracking-[0.15em] mb-4 animate-fade-up">
              Portafolio Docente · FES Acatlán · UNAM
            </p>

            <h1
              className="font-normal text-[#1A1A1A] mb-5 animate-fade-up-delay-1"
              style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl block">Portafolio</span>
              <span className="text-4xl sm:text-5xl md:text-6xl text-[#013B75]">Docente</span>
            </h1>

            <p className="text-[#1A1A1A] text-lg sm:text-xl max-w-[65ch] mb-4 leading-relaxed animate-fade-up-delay-2">
              Formando profesionales capaces de construir soluciones digitales con tecnología de vanguardia
            </p>

            <p className="text-[#5A5A5A] text-base mb-8 animate-fade-up-delay-3">
              Desarrollo web · Cloud Computing · IA aplicada · Aprendizaje basado en proyectos
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up-delay-4">
              <a
                href="#cursos"
                className="inline-flex items-center gap-2 bg-[#013B75] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#012a57] transition-all duration-200 hover:shadow-lg text-sm min-h-[44px]"
              >
                Ver cursos
                <i className="ri-arrow-right-line"></i>
              </a>

            </div>
          </div>

          {/* Right - Resume card - 40% */}
          <div className="lg:col-span-2 animate-fade-up-delay-4">
            <div className="bg-white border border-[#E0E0DE] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#013B75] to-[#1a5296] flex items-center justify-center mx-auto mb-5">
                <i className="ri-user-line text-white text-3xl"></i>
              </div>

              <h3 className="text-[#1A1A1A] font-semibold text-lg text-center mb-1">
                Diego Romero Mora
              </h3>

              <div className="text-center space-y-1 mb-5">
                <p className="text-[#5A5A5A] text-sm">
                  Profesor de Asignatura – FES Acatlán, UNAM
                </p>
                <p className="text-[#5A5A5A] text-sm">
                  Senior AI Automation Engineer – Teradata
                </p>
                <p className="text-[#8A8A8A] text-xs">
                  Egresado MAC · Maestría en Ciencia de Datos
                </p>
              </div>

              <div className="flex justify-center gap-2">
                <span className="bg-[#013B75]/10 text-[#013B75] text-xs font-medium px-3 py-1 rounded-full">
                  Web
                </span>
                <span className="bg-[#013B75]/10 text-[#013B75] text-xs font-medium px-3 py-1 rounded-full">
                  Cloud
                </span>
                <span className="bg-[#013B75]/10 text-[#013B75] text-xs font-medium px-3 py-1 rounded-full">
                  IA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
