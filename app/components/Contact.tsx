export default function Contact() {
  return (
    <section id="contacto" className="py-16 sm:py-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-4"
            style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
          >
            Contacto
          </h2>
          <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed mb-8 max-w-[55ch] mx-auto">
            Si te interesa colaborar, charlar sobre docencia, proyectos o internships para mis estudiantes, escríbeme.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:923475@pcpuma.acatlan.unam.mx"
              className="inline-flex items-center gap-2 bg-[#013B75] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#012a57] transition-colors text-sm min-h-[44px]"
            >
              <i className="ri-mail-line"></i>
              923475@pcpuma.acatlan.unam.mx
            </a>
            <a
              href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#E0E0DE] text-[#1A1A1A] font-medium px-6 py-3 rounded-lg hover:border-[#013B75] hover:text-[#013B75] transition-colors text-sm min-h-[44px]"
            >
              <i className="ri-linkedin-box-line"></i>
              Diego Romero Mora
            </a>
          </div>

          <p className="text-[#8A8A8A] text-sm mt-6">
            <i className="ri-map-pin-line mr-1"></i>
            FES Acatlán, UNAM · Ciudad de México
          </p>
        </div>
      </div>
    </section>
  );
}
