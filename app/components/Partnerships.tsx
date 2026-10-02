"use client";

import Image from "next/image";
import Reveal from "./Reveal";

import awsLogo from "./assets/imgs/Academy-Member-Institution-logo_color_270x120.png";
import gcpLogo from "./assets/imgs/Google-Cloud-logo.png";
import fellowshipLogo from "./assets/imgs/google-he-ai-fellowship-removebg-preview.png";

// ─── Data ─────────────────────────────────────────────────────────────────────

const agreements = [
  {
    id: "aws-academy",
    rotation: "-0.4deg",
    stampColor: "#2B4C5E",
    stampBorderColor: "rgba(43,76,94,0.25)",
    stampLabel: "ACREDITACIÓN DOCENTE AUTORIZADA · FES ACATLÁN",
    role: "Central Point of Contact (CPOC) & Educator",
    org: "AWS Academy",
    orgSub: "Member Institution",
    hito: "Habilitación de laboratorios oficiales tipo Sandbox para alumnos de la carrera de Matemáticas Aplicadas y Computación.",
    items: [
      "Aprovisionamiento de infraestructura elástica real sin costo financiero ni tarjetas de crédito para el alumno.",
      "Preparación formal para AWS Certified Cloud Practitioner y Solutions Architect – Associate.",
    ],
    logo: awsLogo,
    logoAlt: "AWS Academy Member Institution",
    // wide horizontal logo — constrain width
    logoStyle: { maxWidth: "160px", maxHeight: "72px" },
    polaroidCaption: "Sesión de VPCs y balanceadores en vivo — Lab 04",
    polaroidBg: "#EBF5FB",
    polaroidIcon: "ri-server-line",
    polaroidIconColor: "#2B4C5E",
    postItBg: "#FDFD96",
    postItColor: "#6B6000",
    postItRot: "2deg",
    postItText: "Entornos Sandbox 100% financiados por AWS Academy",
    tapeColor: "rgba(226,222,201,0.72)",
    tapeBorder: "rgba(197,192,182,0.55)",
    verifyUrl: "#",
    accentColor: "#2B4C5E",
    accentLight: "rgba(43,76,94,0.08)",
  },
  {
    id: "gcp-launchpad",
    rotation: "0.2deg",
    stampColor: "#C4960A",
    stampBorderColor: "rgba(196,150,10,0.28)",
    stampLabel: "CAMPUS IMPLEMENTATION PARTNER",
    role: "Campus Champion & Docente Implementador",
    org: "Google Cloud Career",
    orgSub: "Launchpad · Skills Boost",
    hito: "Integración del ecosistema Google Cloud Skills Boost en la currícula ordinaria de asignaturas universitarias.",
    items: [
      "Rutas guiadas de autoaprendizaje y laboratorios interactivos con créditos institucionales incluidos.",
      "Emisión de Skill Badges oficiales verificables para perfiles de LinkedIn de los alumnos.",
    ],
    logo: gcpLogo,
    logoAlt: "Google Cloud",
    // square icon — keep it compact
    logoStyle: { maxWidth: "80px", maxHeight: "80px" },
    polaroidCaption: "Primer deploy serverless verificado en Cloud Skills Boost",
    polaroidBg: "#FEF9EC",
    polaroidIcon: "ri-cloud-line",
    polaroidIconColor: "#C4960A",
    postItBg: "#E6F4EA",
    postItColor: "#1A5C2A",
    postItRot: "-1.5deg",
    postItText: "Rutas de Cloud Architecture & Data con insignias verificables",
    tapeColor: "rgba(251,188,5,0.22)",
    tapeBorder: "rgba(196,150,10,0.30)",
    verifyUrl: "#",
    accentColor: "#C4960A",
    accentLight: "rgba(196,150,10,0.08)",
  },
  {
    id: "google-fellowship",
    rotation: "-0.2deg",
    stampColor: "#7B3FA0",
    stampBorderColor: "rgba(123,63,160,0.25)",
    stampLabel: "INAUGURAL COHORT · LATAM 2026",
    role: "Google Higher Ed Faculty AI Fellow",
    org: "Google for Education",
    orgSub: "Higher Ed Faculty AI Fellowship",
    hito: "Selección en la primera generación de educadores universitarios líderes en IA en América Latina.",
    items: [
      "Incorporación de arquitecturas de agentes, RAG y modelos de lenguaje de última generación directo al plan de clase.",
      "Red de colaboración académica internacional con pares de toda la región.",
    ],
    logo: fellowshipLogo,
    logoAlt: "Google Higher Ed Faculty AI Fellowship",
    // portrait logo — allow natural height
    logoStyle: { maxWidth: "110px", maxHeight: "110px" },
    polaroidCaption: "Diseñando la docencia en IA para los próximos 5 años",
    polaroidBg: "#F3EDF9",
    polaroidIcon: "ri-robot-2-line",
    polaroidIconColor: "#7B3FA0",
    postItBg: "#FCE8E6",
    postItColor: "#7A1A0A",
    postItRot: "1deg",
    postItText: "Docencia universitaria conectada con la frontera de la IA",
    tapeColor: "rgba(123,63,160,0.15)",
    tapeBorder: "rgba(123,63,160,0.25)",
    verifyUrl: "#",
    accentColor: "#7B3FA0",
    accentLight: "rgba(123,63,160,0.08)",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function StampLogo({
  logo,
  logoAlt,
  logoStyle,
  stampColor,
  stampBorderColor,
  stampLabel,
  tapeColor,
  tapeBorder,
}: {
  logo: Parameters<typeof Image>[0]["src"];
  logoAlt: string;
  logoStyle: React.CSSProperties;
  stampColor: string;
  stampBorderColor: string;
  stampLabel: string;
  tapeColor: string;
  tapeBorder: string;
}) {
  return (
    <div className="relative flex flex-col items-center mb-5 mt-4">
      {/* Washi tape */}
      <div
        className="absolute -top-4 left-1/2 z-20 w-14 h-5 rounded-sm pointer-events-none"
        style={{
          transform: "translateX(-50%) rotate(-1deg)",
          background: tapeColor,
          border: `1px solid ${tapeBorder}`,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      />

      {/* Stamp frame — dashed perimeter simulating perforation */}
      <div
        className="relative flex items-center justify-center rounded-md p-3"
        style={{
          background: "#FFFDF9",
          border: `2px dashed ${stampBorderColor}`,
          boxShadow: "0 1px 4px rgba(44,42,38,0.06)",
          minWidth: "140px",
          minHeight: "80px",
        }}
      >
        {/* Logo — each has its own max-size so they all look balanced */}
        <Image
          src={logo}
          alt={logoAlt}
          className="object-contain"
          style={{
            ...logoStyle,
            filter: "saturate(0.85) contrast(0.95)",
          }}
          width={200}
          height={120}
        />

        {/* Postmark overlay — semi-transparent circular ink stamp */}
        <div
          className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full flex items-center justify-center pointer-events-none"
          style={{
            border: `2px solid ${stampColor}`,
            opacity: 0.28,
          }}
        >
          <div
            className="text-center leading-tight font-mono"
            style={{ color: stampColor, fontSize: "5px", fontWeight: 700, letterSpacing: "0.04em" }}
          >
            <div>UNAM</div>
            <div style={{ fontSize: "4px" }}>CERTIFICADO</div>
            <div>OFICIAL</div>
            <div>2026</div>
          </div>
        </div>
      </div>

      {/* Stamp label kicker */}
      <p
        className="mt-3 text-center font-mono tracking-widest uppercase"
        style={{ fontSize: "8px", color: stampColor, opacity: 0.75 }}
      >
        {stampLabel}
      </p>
    </div>
  );
}

function PolaroidBlock({
  caption,
  bg,
  icon,
  iconColor,
}: {
  caption: string;
  bg: string;
  icon: string;
  iconColor: string;
}) {
  return (
    <div
      className="relative group mx-auto mb-4 polaroid-block"
      style={{ maxWidth: "200px" }}
    >
      {/* Photo frame */}
      <div
        className="rounded-sm overflow-hidden"
        style={{
          background: "#fff",
          border: "1px solid #E0E0DE",
          boxShadow: "0 2px 8px rgba(44,42,38,0.10), 0 1px 2px rgba(44,42,38,0.05)",
          padding: "8px 8px 28px",
          transition: "transform 200ms cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      >
        {/* Image area */}
        <div
          className="w-full rounded-sm flex items-center justify-center"
          style={{
            height: "100px",
            background: bg,
            position: "relative",
          }}
        >
          <i className={`${icon} text-4xl`} style={{ color: iconColor, opacity: 0.55 }} />
          {/* subtle ruled lines overlay */}
          <div
            className="absolute inset-0 rounded-sm pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(transparent, transparent 11px, rgba(160,175,190,0.09) 11px, rgba(160,175,190,0.09) 12px)`,
            }}
          />
        </div>

        {/* Handwritten caption */}
        <p
          className="text-center mt-1 leading-snug"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "10px",
            color: "#5C5850",
            fontStyle: "italic",
          }}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}

function PostIt({
  text,
  bg,
  color,
  rotation,
}: {
  text: string;
  bg: string;
  color: string;
  rotation: string;
}) {
  return (
    <div
      className="relative mt-auto px-3 py-2 text-xs leading-snug font-medium rounded-sm"
      style={{
        background: bg,
        color: color,
        transform: `rotate(${rotation})`,
        boxShadow:
          "2px 2px 6px rgba(44,42,38,0.10), inset -1px -1px 0 rgba(0,0,0,0.04)",
        borderTop: `1px solid ${bg === "#FDFD96" ? "#E8E200" : bg === "#E6F4EA" ? "#A8D5B5" : "#F4B8B2"}`,
        maxWidth: "100%",
        lineHeight: "1.35",
      }}
    >
      {/* Fold corner */}
      <div
        className="absolute bottom-0 right-0 w-4 h-4 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.08) 50%)`,
          borderRadius: "0 0 2px 0",
        }}
      />
      «{text}»
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Partnerships() {
  return (
    <section
      id="convenios"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ borderLeft: "3px solid rgba(180,80,70,0.10)" }}
    >
      {/* Milimetric grid background overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(221,217,210,0.40) 1px, transparent 1px),
            linear-gradient(90deg, rgba(221,217,210,0.40) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 relative">

        {/* ─── Editorial Header ─── */}
        <Reveal variant="fade">
          <div className="mb-12 sm:mb-16 max-w-[68ch]">
            {/* Kicker */}
            <span
              className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: "#8A8680", letterSpacing: "0.18em" }}
            >
              EXPEDIENTE DE VINCULACIÓN · CONVENIOS 2026
            </span>

            {/* Title */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#1A1A1A]"
              style={{
                fontFamily: "'Instrument Serif', serif",
                lineHeight: "1.12",
              }}
            >
              Infraestructura oficial en manos de los{" "}
              <span className="underline-hand">estudiantes</span>
            </h2>

            {/* Pull quote */}
            <blockquote
              className="text-base sm:text-lg leading-relaxed margin-line italic"
              style={{ color: "#5C5850" }}
            >
              «No simulamos la industria ni enseñamos sobre diapositivas. Gestionamos accesos
              institucionales directos para que cada estudiante opere en consolas reales, con
              presupuestos asignados y credenciales emitidas directamente por las organizaciones
              que construyen la nube.»
            </blockquote>
          </div>
        </Reveal>

        {/* ─── Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {agreements.map((ag, i) => (
            <Reveal key={ag.id} variant="clip-up" delay={i * 120}>
              <article
                className="note-card rounded-2xl flex flex-col overflow-visible relative group/card"
                style={{
                  transform: `rotate(${ag.rotation})`,
                  transformOrigin: "top center",
                  transition:
                    "transform 240ms cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 240ms cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = "rotate(0deg) translateY(-4px)";
                  el.style.boxShadow =
                    "0 8px 32px rgba(44,42,38,0.10), 0 20px 48px rgba(44,42,38,0.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.transform = `rotate(${ag.rotation}) translateY(0)`;
                  el.style.boxShadow = "";
                }}
              >
                {/* Colored accent stripe at top */}
                <div
                  className="h-1 w-full rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${ag.accentColor}80, ${ag.accentColor}20)`,
                  }}
                />

                <div className="p-5 sm:p-6 flex flex-col flex-1 gap-0">
                  {/* Stamp + Logo */}
                  <StampLogo
                    logo={ag.logo}
                    logoAlt={ag.logoAlt}
                    logoStyle={ag.logoStyle}
                    stampColor={ag.stampColor}
                    stampBorderColor={ag.stampBorderColor}
                    stampLabel={ag.stampLabel}
                    tapeColor={ag.tapeColor}
                    tapeBorder={ag.tapeBorder}
                  />

                  {/* Org name */}
                  <div className="mb-3 text-center">
                    <p
                      className="font-bold text-base leading-tight"
                      style={{ color: "#2C2A26" }}
                    >
                      {ag.org}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#8A8680" }}>
                      {ag.orgSub}
                    </p>
                  </div>

                  {/* Divider – ruled line */}
                  <div
                    className="w-full mb-4"
                    style={{ borderBottom: "1px solid rgba(221,217,210,0.8)" }}
                  />

                  {/* Polaroid photo block */}
                  <PolaroidBlock
                    caption={ag.polaroidCaption}
                    bg={ag.polaroidBg}
                    icon={ag.polaroidIcon}
                    iconColor={ag.polaroidIconColor}
                  />

                  {/* Role badge */}
                  <div className="mb-3">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wider"
                      style={{
                        background: ag.accentLight,
                        color: ag.accentColor,
                        borderColor: `${ag.accentColor}30`,
                      }}
                    >
                      <i className="ri-shield-check-line text-xs" />
                      {ag.role}
                    </span>
                  </div>

                  {/* Hito */}
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "#5C5850" }}
                  >
                    {ag.hito}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-4 flex-1">
                    {ag.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[12px] leading-snug"
                        style={{ color: "#5C5850" }}
                      >
                        <i
                          className="ri-quill-pen-line text-sm shrink-0 mt-0.5"
                          style={{ color: ag.accentColor }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Post-it note */}
                  <PostIt
                    text={ag.postItText}
                    bg={ag.postItBg}
                    color={ag.postItColor}
                    rotation={ag.postItRot}
                  />

                  {/* Footer: verify link */}
                  <div
                    className="mt-4 pt-3 flex justify-end"
                    style={{ borderTop: "1px solid rgba(221,217,210,0.7)" }}
                  >
                    <a
                      href={ag.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ink-link inline-flex items-center gap-1.5 text-[12px] font-medium"
                      style={{ color: ag.accentColor }}
                    >
                      Verificar credencial del convenio
                      <i className="ri-arrow-right-up-line text-sm" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ─── Footer note ─── */}
        <Reveal variant="fade" delay={480}>
          <p
            className="text-center text-sm italic mt-10"
            style={{ color: "#8A8680" }}
          >
            Convenios activos que garantizan infraestructura real sin costo para cada alumno inscrito.
          </p>
        </Reveal>
      </div>

    </section>
  );
}
