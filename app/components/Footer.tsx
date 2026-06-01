export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-10">
          {/* Brand */}
          <div>
            <p className="font-semibold text-base mb-2">
              <span className="text-[#D9A500]">DRM</span> · Prof. Diego Romero
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Facultad de Estudios Superiores Acatlán, UNAM.
              <br />
              Matemáticas Aplicadas y Computación.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#D9A500] font-medium text-xs uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Inicio", id: "inicio" },
                { label: "Sobre el Profesor", id: "sobre-mi" },
                { label: "Curso", id: "cursos" },
                { label: "CV", id: "cv" },
                { label: "Credenciales", id: "credenciales" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-white/60 hover:text-[#D9A500] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D9A500] font-medium text-xs uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-[#D9A500] text-sm"></i>
                <a href="mailto:923475@pcpuma.acatlan.unam.mx" className="text-white/60 hover:text-[#D9A500] transition-colors text-sm">
                  923475@pcpuma.acatlan.unam.mx
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-linkedin-box-line text-[#D9A500] text-sm"></i>
                <a
                  href="https://www.linkedin.com/in/diego-romero-mora-1094a41a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#D9A500] transition-colors text-sm"
                >
                  Diego Romero Mora
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line text-[#D9A500] text-sm"></i>
                <span className="text-white/60 text-sm">FES Acatlán, UNAM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2026 Diego Romero Mora. Portafolio Docente — FES Acatlán, UNAM.
          </p>
        </div>
      </div>
    </footer>
  );
}
