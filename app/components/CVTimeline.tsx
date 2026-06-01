"use client";

import { useState } from "react";

interface Experience {
  date: string;
  role: string;
  company: string;
  type: string;
  description: string[];
  tags: string[];
}

export default function CVTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences: Experience[] = [
    {
      date: "feb. 2026 – actualidad · 4 meses",
      role: "Profesor de Asignatura",
      company: "Facultad de Estudios Superiores Acatlán",
      type: "Contrato temporal",
      description: [
        "Profesor que imparte asignaturas pertenecientes a la currícula de la licenciatura en Matemáticas Aplicadas y Computación de la división de matemáticas e ingeniería del plan de estudios 2014.",
        "Desarrollo Web (2026): curso intensivo con Next.js, TypeScript, Supabase, metodologías ágiles y despliegue en producción.",
      ],
      tags: ["Docencia", "Web", "Cloud"],
    },
    {
      date: "dic. 2025 – actualidad · 6 meses",
      role: "Senior AI Automation Engineer",
      company: "Teradata",
      type: "Jornada completa · CDMX · Híbrido",
      description: [
        "Arquitecto de Agentic Workflows y Multi-Agent Systems (MAS) que transforman operaciones empresariales.",
        "Uso de LangGraph, MCP/FastMCP, FastAPI, LLM (Claude, etc.), RAG, Function Calling.",
      ],
      tags: ["IA", "Cloud", "Automatización"],
    },
    {
      date: "oct. 2024 – dic. 2025 · 1 año 2 meses",
      role: "Cloud Test Engineer",
      company: "Insulet Corporation",
      type: "Jornada completa",
      description: [
        "Ingeniería de pruebas en entornos cloud para dispositivos médicos IoT.",
      ],
      tags: ["Cloud", "QA", "IoT"],
    },
    {
      date: "jul. 2023 – oct. 2024 · 1 año 3 meses",
      role: "Software Engineer II",
      company: "Solera",
      type: "Jornada completa · México",
      description: [
        "Desarrollo de soluciones de software a escala para la industria automotriz y de seguros.",
      ],
      tags: ["Backend", "Full Stack"],
    },
    {
      date: "ene. 2023 – jul. 2023 · 7 meses",
      role: "Software Engineer",
      company: "Solera",
      type: "Jornada completa",
      description: [
        "Desarrollo e integración de APIs y microservicios.",
      ],
      tags: ["Backend", "APIs"],
    },
    {
      date: "2022 – 2023",
      role: "Full Stack Developer",
      company: "CTIN",
      type: "Jornada completa",
      description: [
        "Desarrollo de aplicaciones web full-stack con tecnologías modernas.",
      ],
      tags: ["Full Stack", "Web"],
    },
    {
      date: "2021 – 2022",
      role: "Software Engineer Entry Level",
      company: "Solera",
      type: "Jornada completa",
      description: [
        "Primer rol profesional en ingeniería de software. Desarrollo y mantenimiento de sistemas internos.",
      ],
      tags: ["Backend", "Junior"],
    },
  ];

  return (
    <section id="cv" className="py-16 sm:py-24">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] mb-3"
            style={{ fontFamily: "'Instrument Serif', serif", lineHeight: "1.15" }}
          >
            Trayectoria Profesional
          </h2>
          <p className="text-[#5A5A5A] text-base sm:text-lg max-w-[65ch]">
            Desarrollo de software, cloud, IA aplicada y docencia universitaria.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-[#E0E0DE]"></div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-16">
                {/* Dot */}
                <div className={`absolute left-2.5 sm:left-4.5 top-6 w-3 h-3 rounded-full border-2 ${
                  index === 0 ? "bg-[#013B75] border-[#013B75]" : "bg-white border-[#E0E0DE]"
                }`}></div>

                <div
                  className={`bg-white border rounded-xl p-5 sm:p-6 cursor-pointer transition-all duration-200 ${
                    expandedIndex === index
                      ? "border-[#013B75]/20 shadow-sm"
                      : "border-[#E0E0DE] hover:border-[#013B75]/10 hover:shadow-sm"
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-[#1A1A1A] font-semibold text-base">{exp.role}</h3>
                      <p className="text-[#5A5A5A] text-sm">{exp.company} · {exp.type}</p>
                    </div>
                    <span className="text-[#8A8A8A] text-xs sm:text-sm whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>

                  {expandedIndex === index && (
                    <div className="mt-3 pt-3 border-t border-[#E0E0DE]">
                      <ul className="space-y-2 mb-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-[#5A5A5A] text-sm leading-relaxed">
                            {desc}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#F7F6F2] text-[#5A5A5A] text-xs px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {expandedIndex !== index && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#F7F6F2] text-[#5A5A5A] text-xs px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
