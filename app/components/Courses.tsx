export default function Courses() {
  const courses = [
    {
      name: "Desarrollo de Aplicaciones Web",
      semester: "Semestre 2025-2",
      description: "Curso intensivo de 64 horas donde los alumnos construyen aplicaciones full-stack con Next.js, TypeScript, Supabase y despliegue en Vercel. Metodologías ágiles, CI/CD y trabajo colaborativo con GitHub.",
      url: "https://webacatlan-ptjj.vercel.app/",
      tags: ["Next.js", "TypeScript", "Supabase", "Vercel", "GitHub"],
      status: "Disponible",
      icon: "ri-global-line",
    },
    {
      name: "Cómputo en la Nube",
      semester: "Semestre 2025-2",
      description: "Curso orientado a arquitectura cloud, servicios distribuidos, despliegue y buenas prácticas en la nube con proveedores líderes del mercado.",
      url: "https://cloud-computing-beta-plum.vercel.app/",
      tags: ["AWS", "GCP", "DevOps", "Arquitectura"],
      status: "Disponible",
      icon: "ri-cloud-line",
    },
  ];

  const upcomingCourses = [
    {
      name: "Nuevas asignaturas",
      description: "Líneas temáticas en desarrollo centradas en inteligencia artificial aplicada y sistemas modernos.",
      tags: ["IA", "Agentes", "Automatización"],
      status: "En preparación",
    },
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

        {/* ─── CURSOS ACTIVOS ─── */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white border border-[#E0E0DE] rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Iframe preview */}
              <div className="relative w-full aspect-[16/10] bg-[#f0f0f0] overflow-hidden border-b border-[#E0E0DE]">
                <iframe
                  src={course.url}
                  title={course.name}
                  className="w-full h-full pointer-events-none"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
                {/* Overlay to allow clicking the card */}
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Abrir ${course.name}`}
                />
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#013B75]/10 flex items-center justify-center">
                    <i className={`${course.icon} text-[#013B75] text-lg`}></i>
                  </div>
                  <span className="inline-block bg-[#3E7A22]/10 text-[#3E7A22] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#3E7A22]/20">
                    {course.status}
                  </span>
                  <span className="text-[#8A8A8A] text-[10px] ml-auto">{course.semester}</span>
                </div>

                <h3 className="text-[#1A1A1A] font-semibold text-lg mb-2">{course.name}</h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F7F6F2] border border-[#E0E0DE] text-[#5A5A5A] text-[10px] font-medium px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#013B75] text-sm font-medium hover:underline"
                >
                  Ver página del curso
                  <i className="ri-arrow-right-up-line"></i>
                </a>
              </div>
            </div>
          ))}
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
