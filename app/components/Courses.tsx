import Reveal from "./Reveal";

export default function Courses() {
  const courses = [
    {
      name: "Desarrollo de Aplicaciones Web",
      semester: "Semestre 2025-2",
      hours: "64 horas",
      summary:
        "Los estudiantes construyen una aplicación full-stack real desde cero: diseñan, desarrollan, prueban y despliegan su propio producto digital con herramientas de la industria.",
      experience: [
        "Proyecto final desplegado en producción",
        "Flujo de trabajo con Git, ramas y pull requests",
        "Arquitectura de componentes y API routes",
        "Base de datos, autenticación y almacenamiento",
        "Portafolio profesional como evidencia",
      ],
      url: "https://webacatlan-ptjj.vercel.app/",
      tags: ["Next.js", "TypeScript", "Supabase", "Vercel", "GitHub"],
      status: "Disponible",
      icon: "ri-global-line",
      accent: "#2B4C5E",
      flagship: true,
    },
    {
      name: "Cómputo en la Nube",
      semester: "Semestre 2025-2",
      hours: "64 horas",
      summary:
        "Curso enfocado en arquitectura cloud, servicios distribuidos y despliegue profesional. El alumno aprende a diseñar, operar y escalar infraestructura con proveedores líderes.",
      experience: [
        "Infraestructura como código y despliegue automatizado",
        "Servicios serverless, contenedores y orquestación",
        "Monitoreo, costos y buenas prácticas de seguridad",
        "Trabajo colaborativo y documentación técnica",
        "Proyecto integrador en entorno cloud real",
      ],
      url: "https://cloud-computing-beta-plum.vercel.app/",
      tags: ["AWS", "GCP", "DevOps", "Arquitectura"],
      status: "Disponible",
      icon: "ri-cloud-line",
      accent: "#1B6B4A",
      flagship: false,
    },
  ];

  const roadmap = [
    { label: "IA aplicada", icon: "ri-robot-2-line" },
    { label: "Agentes autónomos", icon: "ri-mind-map" },
    { label: "Automatización", icon: "ri-loop-left-line" },
    { label: "Datos e ingeniería", icon: "ri-database-2-line" },
  ];

  return (
    <section id="cursos" className="py-16 sm:py-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-3"
              style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
            >
              Cursos y <span className="underline-hand">experiencias</span> de aprendizaje
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

        {/* ─── CURSOS ACTIVOS ─── */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {courses.map((course, i) => (
            <Reveal key={i} variant="clip" delay={i * 80}>
            <div
              className="note-card rounded-2xl overflow-hidden flex flex-col"
            >
              {/* ── Portada estática ── */}
              <div
                className="relative w-full px-5 pt-5 pb-4 border-b border-[#E0E0DE]"
                style={{ background: `linear-gradient(135deg, ${course.accent}08, ${course.accent}03)` }}
              >
                {/* Browser mockup frame */}
                <div className="rounded-lg border border-[#E0E0DE] bg-white overflow-hidden shadow-sm">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#F7F6F2] border-b border-[#E0E0DE]">
                    <span className="w-2 h-2 rounded-full bg-[#E0E0DE]" />
                    <span className="w-2 h-2 rounded-full bg-[#E0E0DE]" />
                    <span className="w-2 h-2 rounded-full bg-[#E0E0DE]" />
                    <span className="ml-2 text-[9px] text-[#8A8A8A] font-mono truncate">
                      {course.url.replace("https://", "")}
                    </span>
                  </div>
                  <div className="flex items-center justify-center py-8" style={{ background: `linear-gradient(160deg, ${course.accent}12, ${course.accent}05)` }}>
                    <div className="text-center">
                      <i className={`${course.icon} text-4xl`} style={{ color: course.accent }} />
                      <p className="text-[11px] font-medium mt-2" style={{ color: course.accent }}>
                        {course.name}
                      </p>
                    </div>
                  </div>
                </div>
                {course.flagship && (
                  <span className="absolute top-3 right-3 bg-[#2B4C5E] text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                    Insignia
                  </span>
                )}
              </div>

              {/* ── Card body ── */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-[#3E7A22]/10 text-[#3E7A22] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#3E7A22]/20">
                    {course.status}
                  </span>
                  <span className="text-[#8A8A8A] text-[10px]">{course.semester}</span>
                  <span className="text-[#8A8A8A] text-[10px] ml-auto">{course.hours}</span>
                </div>

                {/* Título */}
                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">{course.name}</h3>

                {/* Resumen */}
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                  {course.summary}
                </p>

                {/* Experiencia */}
                <div className="mb-4 flex-1">
                  <p className="text-[#1A1A1A] text-xs font-semibold uppercase tracking-wide mb-2">
                    Qué vive el estudiante
                  </p>
                  <ul className="space-y-1.5">
                    {course.experience.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[#5A5A5A] text-[13px] leading-snug">
                        <i className="ri-checkbox-circle-line text-[#3E7A22] text-sm mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F7F6F2] border border-[#E0E0DE] text-[#8A8A8A] text-[10px] font-medium px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-[#2B4C5E]/25 text-[#2B4C5E] transition-all duration-150 hover:bg-[#2B4C5E] hover:text-[#FAF8F4] hover:border-[#2B4C5E]"
                >
                  Ver página del curso
                  <i className="ri-arrow-right-up-line" />
                </a>
              </div>
            </div>
            </Reveal>
          ))}
        </div>

        {/* ─── ROADMAP DOCENTE ─── */}
        <Reveal variant="clip-up">
        <div className="note-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D9A500]/40 via-[#D9A500]/10 to-transparent" />

          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex-1">
              <span className="inline-block bg-[#D9A500]/10 text-[#D9A500] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#D9A500]/20 mb-3">
                Líneas en desarrollo
              </span>
              <h4 className="text-[#1A1A1A] font-semibold text-lg mb-2">Roadmap docente</h4>
              <p className="text-[#5A5A5A] text-sm leading-relaxed max-w-[50ch]">
                Nuevas asignaturas en diseño, centradas en inteligencia artificial aplicada, agentes autónomos y automatización de procesos para la siguiente generación de profesionales.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:w-[280px]">
              {roadmap.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-[#F7F6F2] border border-[#E0E0DE] rounded-lg px-3 py-2.5"
                >
                  <i className={`${item.icon} text-[#D9A500] text-base`} />
                  <span className="text-[#5A5A5A] text-[11px] font-medium leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </Reveal>

        {/* Continuity note */}
        <p className="text-center text-[#8A8A8A] text-sm italic mt-8">
          Este portafolio crecerá con nuevas asignaturas centradas en desarrollo, cloud e inteligencia artificial.
        </p>
      </div>
    </section>
  );
}
