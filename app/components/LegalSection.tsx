"use client";
const LAWS = [
  {
    badge: "Ley 1801/2016 · Art. 21",
    title: "El Superpoder: Derecho a Grabar",
    quote:
      '"Todo procedimiento policivo podrá ser grabado mediante cualquier medio de las tecnologías de información y comunicación, sin que ninguna persona pueda impedirlo, so pena de incurrir en falta disciplinaria."',
    explanation:
      "Este artículo es la base legal de VigIA. Grabar un procedimiento de tránsito es tu derecho. Si un oficial intenta impedirte grabar, incurre en una falta disciplinaria. VigIA te facilita ejercer este derecho de forma inmediata.",
    color: "#3b82f6",
    icon: "📹",
  },
  {
    badge: "Ley 769/2002",
    title: "Código Nacional de Tránsito",
    quote:
      '"Establece las normas que regirán en el territorio nacional en materia de tránsito de personas, animales y vehículos por las vías públicas."',
    explanation:
      "Es la ley principal que regula todo lo relacionado con vehículos, licencias, infracciones y procedimientos de tránsito en Colombia. VigIA tiene toda esta ley en su base de conocimiento.",
    color: "#06b6d4",
    icon: "📖",
  },
  {
    badge: "Ley 769/2002 · Art. 135",
    title: "Competencia para Imponer Comparendos",
    quote:
      '"Solo los agentes de tránsito están facultados para imponer comparendos por infracciones de tránsito, no la Policía Nacional de Vigilancia."',
    explanation:
      "Este es uno de los argumentos más importantes: si te detiene un policía de vigilancia (no de tránsito), no puede imponerte un comparendo de tránsito. VigIA te informa sobre esto de forma inmediata.",
    color: "#8b5cf6",
    icon: "⚖️",
  },
  {
    badge: "Debido Proceso",
    title: "Derecho al Debido Proceso",
    quote:
      '"Toda persona tiene derecho a un proceso justo y transparente. La grabación es una herramienta para garantizar ese derecho."',
    explanation:
      "La Constitución Política de Colombia garantiza el derecho al debido proceso. Grabar un procedimiento es una forma de garantizar la transparencia y protegerte de abusos o procedimientos irregulares.",
    color: "#6366f1",
    icon: "🏛️",
  },
];

export default function LegalSection() {
  return (
    <section
      id="legal"
      style={{
        padding: "7rem 2rem",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute", bottom: "-5%", left: "-5%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "50px", padding: "5px 16px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8rem", color: "#93c5fd", fontWeight: 500,
            marginBottom: "1rem",
          }}>
            Marco Legal Colombiano
          </span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, lineHeight: 1.15,
            color: "#f1f5f9", marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}>
            Las leyes que te{" "}
            <span className="gradient-text-blue">protegen en la vía</span>
          </h2>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1.05rem", color: "var(--text-secondary)",
            maxWidth: "580px", margin: "0 auto", lineHeight: 1.7,
          }}>
            VigIA está construida sobre el derecho colombiano. Aquí te explicamos los artículos clave que respaldan cada función de la app.
          </p>
        </div>

        {/* Law cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
          gap: "1.5rem",
        }}>
          {LAWS.map((law) => (
            <div
              key={law.badge}
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(16px)",
                border: `1px solid ${law.color}25`,
                borderRadius: "20px",
                padding: "2rem",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = `${law.color}50`;
                el.style.boxShadow = `0 16px 48px ${law.color}18`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = `${law.color}25`;
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "12px",
                  background: `${law.color}18`,
                  border: `1px solid ${law.color}35`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.4rem", flexShrink: 0,
                }}>
                  {law.icon}
                </div>
                <div>
                  <span style={{
                    display: "inline-block",
                    background: `${law.color}18`,
                    border: `1px solid ${law.color}40`,
                    borderRadius: "6px", padding: "2px 10px",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.72rem", color: law.color, fontWeight: 600,
                    marginBottom: "4px",
                  }}>
                    {law.badge}
                  </span>
                  <h3 style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700, fontSize: "1rem",
                    color: "#f1f5f9", lineHeight: 1.3,
                  }}>
                    {law.title}
                  </h3>
                </div>
              </div>

              {/* Quote */}
              <blockquote style={{
                background: `${law.color}10`,
                border: `1px solid ${law.color}20`,
                borderLeft: `3px solid ${law.color}`,
                borderRadius: "0 10px 10px 0",
                padding: "1rem 1.25rem",
                margin: "0 0 1rem",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}>
                {law.quote}
              </blockquote>

              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
              }}>
                {law.explanation}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{
          marginTop: "3rem",
          background: "rgba(245,158,11,0.08)",
          border: "1px solid rgba(245,158,11,0.25)",
          borderRadius: "16px",
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
        }}>
          <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>⚠️</span>
          <div>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem", color: "#fcd34d",
              fontWeight: 600, marginBottom: "4px",
            }}>
              Aviso importante
            </p>
            <p style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.85rem", color: "#fbbf24",
              opacity: 0.8, lineHeight: 1.6,
            }}>
              VigIA proporciona información legal de carácter general basada en la normatividad pública colombiana. No constituye asesoría jurídica profesional. Para casos concretos y complejos, consulte siempre a un abogado licenciado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
