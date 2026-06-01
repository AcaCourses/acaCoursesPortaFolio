export default function Publications() {
  const publications = [
    {
      title: "HOUSTON, TENEMOS UN §PROBLEMA? ARQUITECTURAS DE SOFTWARE QUE NO PUEDEN FALLAR",
      source: "Publicación propia",
      date: "21 oct. 2025",
      summary: "Análisis de arquitecturas de software resilientes y patrones de diseño para sistemas de misión crítica.",
      link: "#",
    },
    {
      title: "Curso Básico de React Native",
      source: "Medium",
      date: "26 abr. 2021",
      summary: "Guía introductoria al desarrollo móvil con React Native, cubriendo componentes, navegación y hooks.",
      link: "#",
    },
    {
      title: "THE STRUCTURE OF WEITES",
      source: "STEMATIX Magazine",
      date: "29 dic. 2020",
      summary: "Artículo sobre estructuras matemáticas y su aplicación en computación.",
      link: "#",
    },
    {
      title: "React Native Login & Hooks",
      source: "Medium",
      date: "2021",
      summary: "Tutorial práctico sobre autenticación y manejo de estado con React Hooks en aplicaciones móviles.",
      link: "#",
    },
  ];

  return (
    <section id="publicaciones" className="py-16 sm:py-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-3"
            style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
          >
            Publicaciones
          </h2>
          <p className="text-[#5A5A5A] text-base sm:text-lg max-w-[65ch]">
            Artículos técnicos y contribuciones a la comunidad de desarrollo.
          </p>
        </div>

        {/* Publications grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="bg-white border border-[#E0E0DE] rounded-xl p-5 sm:p-6 hover:border-[#013B75]/20 hover:shadow-sm transition-all duration-200"
            >
              <h3 className="text-[#1A1A1A] font-semibold text-base leading-tight mb-2">
                {pub.title}
              </h3>
              <p className="text-[#8A8A8A] text-xs mb-3">
                {pub.source} · {pub.date}
              </p>
              <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4 line-clamp-3">
                {pub.summary}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#013B75] text-sm font-medium hover:underline"
              >
                Mostrar publicación
                <i className="ri-external-link-line text-xs"></i>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
