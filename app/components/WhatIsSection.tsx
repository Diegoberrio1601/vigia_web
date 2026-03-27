"use client";
const PILLARS = [
  {
    icon: "🧠",
    title: "IA Legal Especializada",
    desc: "Un abogado experto en tránsito en tu bolsillo. Responde en segundos con artículos exactos del Código Nacional de Tránsito.",
    color: "#3b82f6",
  },
  {
    icon: "🎥",
    title: "Grabación Segura",
    desc: "Documenta procedimientos policiales con validez judicial usando la cámara y micrófono de tu dispositivo.",
    color: "#06b6d4",
  },
  {
    icon: "🌐",
    title: "Consultas Oficiales",
    desc: "Accede a RUNT y SIMIT directamente. Verifica multas, comparendos, licencias y estado vehicular al instante.",
    color: "#8b5cf6",
  },
  {
    icon: "🚗",
    title: "Gestión de Vehículos",
    desc: "Registra tus placas y recibe alertas antes de que venza tu SOAT, Tecnomecánica y otros documentos.",
    color: "#6366f1",
  },
];

export default function WhatIsSection() {
  return (
    <section
      id="que-es"
      style={{
        padding: "7rem 2rem",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div style={{
        position: "absolute", top: "50%", right: "-10%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(6,182,212,0.12)",
            border: "1px solid rgba(6,182,212,0.3)",
            borderRadius: "50px", padding: "5px 16px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8rem", color: "#67e8f9", fontWeight: 500,
            marginBottom: "1rem",
          }}>
            ¿Qué es VigIA?
          </span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, lineHeight: 1.15,
            color: "#f1f5f9", marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}>
            Tu escudo legal en cada{" "}
            <span className="gradient-text-blue">procedimiento de tránsito</span>
          </h2>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1.1rem", color: "var(--text-secondary)",
            maxWidth: "600px", margin: "0 auto", lineHeight: 1.7,
          }}>
            VigIA (Vigilancia + IA) es una plataforma LegalTech que combina inteligencia artificial, grabación segura y consultas oficiales para empoderar a los conductores colombianos con conocimiento jurídico en tiempo real.
          </p>
        </div>

        {/* Pillars grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}>
          {PILLARS.map(({ icon, title, desc, color }) => (
            <div
              key={title}
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--glass-border)",
                borderRadius: "20px",
                padding: "2rem",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.borderColor = `${color}44`;
                el.style.boxShadow = `0 12px 40px ${color}22`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--glass-border)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: "14px",
                background: `${color}20`,
                border: `1px solid ${color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem", marginBottom: "1.25rem",
              }}>
                {icon}
              </div>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: "1.1rem",
                color: "#f1f5f9", marginBottom: "0.75rem",
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem", color: "var(--text-secondary)",
                lineHeight: 1.65,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mission quote */}
        <div style={{
          marginTop: "3rem",
          background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.08))",
          border: "1px solid rgba(99,102,241,0.25)",
          borderRadius: "20px",
          padding: "2.5rem",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "#a5b4fc", fontStyle: "italic", lineHeight: 1.6, marginBottom: "0.75rem",
          }}>
            "VigIA no vende información (que es pública), vende <strong style={{ color: "#c4b5fd" }}>conveniencia y seguridad</strong>."
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            — Propuesta de valor de VigIA
          </p>
        </div>
      </div>
    </section>
  );
}
