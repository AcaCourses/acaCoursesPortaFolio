export default function Courses() {
  const upcomingCourses = [
    {
      name: "Cloud Computing",
      description: "Curso orientado a arquitectura cloud, servicios distribuidos, despliegue y buenas prácticas en la nube.",
      tags: ["AWS", "GCP", "DevOps", "Arquitectura"],
      status: "Próximamente",
    },
    {
      name: "Nuevas asignaturas",
      description: "Líneas temáticas en desarrollo centradas en inteligencia artificial aplicada y sistemas modernos.",
      tags: ["IA", "Agentes", "Automatización"],
      status: "En preparación",
    },
  ];

  return (
    <section id="cursos" className="py-16 sm:py-24 bg-[#F7F6F2]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-3"
              style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
            >
              Cursos y experiencias de aprendizaje
            </h2>
            <p className="text-[#5A5A5A] text-base sm:text-lg max-w-[65ch]">
              Cada curso combina teoría, práctica y herramientas de la industria para que los estudiantes construyan proyectos reales, aprendan a colaborar y desarrollen un portafolio profesional.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-[#D9A500]/10 text-[#D9A500] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#D9A500]/20 whitespace-nowrap self-start sm:self-auto">
            <i className="ri-sparkling-line"></i>
            Oferta en crecimiento
          </span>
        </div>

        {/* ─── CURSO PRINCIPAL ─── */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Left: Course card with preview */}
          <div className="lg:col-span-3">
            <a
              href="https://webacatlan-ptjj.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl border border-[#E0E0DE] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Preview header */}
              <div className="bg-gradient-to-br from-[#013B75] to-[#1a5296] p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D9A500]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <i className="ri-global-line text-[#D9A500] text-2xl"></i>
                    </div>
                    <span className="inline-block bg-[#3E7A22]/20 text-[#7cdb4a] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#3E7A22]/30">
                      Disponible
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-2xl sm:text-3xl mb-2">
                    Desarrollo de Aplicaciones Web
                  </h3>
                  <span className="inline-block bg-white/10 text-white/90 text-xs font-medium px-3 py-1 rounded-full">
                    Semestre 2025-2
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 sm:p-8">
                <p className="text-[#5A5A5A] text-base leading-relaxed mb-6 max-w-[65ch]">
                  Curso intensivo de 64 horas donde los alumnos construyen aplicaciones full-stack con Next.js, TypeScript, Supabase y despliegue en Vercel. Metodologías ágiles, CI/CD y trabajo colaborativo con GitHub.
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E0E0DE]">
                  <span className="text-[#013B75] font-medium text-sm group-hover:underline">
                    Ver página del curso
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#013B75]/5 flex items-center justify-center group-hover:bg-[#013B75] transition-colors">
                    <i className="ri-arrow-right-up-line text-[#013B75] group-hover:text-white transition-colors"></i>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Technologies */}
            <div>
              <h4 className="text-[#1A1A1A] font-semibold text-sm uppercase tracking-wide mb-3">
                Tecnologías
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Supabase", "Vercel", "GitHub"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white border border-[#E0E0DE] text-[#1A1A1A] text-xs font-medium px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-[#1A1A1A] font-semibold text-sm uppercase tracking-wide mb-3">
                Resultados
              </h4>
              <ul className="space-y-3">
                {[
                  "Proyectos full-stack desplegados en producción",
                  "Trabajo en equipos con metodologías ágiles",
                  "Integración continua y despliegue automático",
                  "Gamificación y evaluación por pares",
                ].map((result, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#5A5A5A]">
                    <i className="ri-check-line text-[#3E7A22] mt-0.5 flex-shrink-0"></i>
                    {result}
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology */}
            <div>
              <h4 className="text-[#1A1A1A] font-semibold text-sm uppercase tracking-wide mb-3">
                Metodología
              </h4>
              <div className="space-y-2">
                {[
                  { icon: "ri-team-line", text: "Scrum con sprints semanales" },
                  { icon: "ri-git-branch-line", text: "Git Flow y code reviews" },
                  { icon: "ri-trophy-line", text: "Gamificación por equipos" },
                  { icon: "ri-presentation-line", text: "Demo days y retrospectivas" },
                ].map((method, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#5A5A5A]">
                    <i className={`${method.icon} text-[#D9A500]`}></i>
                    {method.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── CURSOS PRÓXIMOS ─── */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {upcomingCourses.map((course, i) => (
            <div
              key={i}
              className="bg-white border border-[#E0E0DE] rounded-2xl p-6 hover:border-[#013B75]/15 hover:shadow-sm transition-all duration-200"
            >
              <span className="inline-block bg-[#D9A500]/10 text-[#D9A500] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#D9A500]/20 mb-4">
                {course.status}
              </span>
              <h4 className="text-[#1A1A1A] font-semibold text-lg mb-2">{course.name}</h4>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F7F6F2] border border-[#E0E0DE] text-[#8A8A8A] text-[10px] font-medium px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Continuity note */}
        <p className="text-center text-[#8A8A8A] text-sm italic">
          Este portafolio crecerá con nuevas asignaturas centradas en desarrollo, cloud e inteligencia artificial.
        </p>
      </div>
    </section>
  );
}
