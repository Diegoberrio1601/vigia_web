"use client";
const REASONS = [
  {
    icon: "⚡",
    title: "Velocidad en el momento crítico",
    desc: "Cuando un oficial te detiene tienes segundos para entender tus derechos. VigIA te da respuesta legal antes de que el procedimiento inicie. No hay tiempo para buscar en Google.",
    color: "#f59e0b",
    stat: "< 5 seg",
    statLabel: "respuesta IA",
  },
  {
    icon: "🔒",
    title: "Tu privacidad, intacta",
    desc: "Las grabaciones se guardan en tu dispositivo, nunca en la nube sin tu permiso. Tu información vehicular está cifrada. No vendemos ni compartimos tus datos.",
    color: "#10b981",
    stat: "100%",
    statLabel: "privacidad local",
  },
  {
    icon: "📚",
    title: "Basado en fuentes oficiales",
    desc: "No es una 'interpretación'. VigIA cita artículos exactos de leyes vigentes y publicadas por el Estado colombiano. La IA no inventa, informa.",
    color: "#3b82f6",
    stat: "4 leyes",
    statLabel: "en la base de conocimiento",
  },
  {
    icon: "🎯",
    title: "Diseñado para el ciudadano, no para abogados",
    desc: "Traducimos lenguaje jurídico complejo a respuestas que cualquier conductor puede entender y usar en el momento. Sin tecnicismos innecesarios.",
    color: "#8b5cf6",
    stat: "Lenguaje",
    statLabel: "ciudadano simple",
  },
  {
    icon: "🚫",
    title: "No hay excusa para el abuso",
    desc: "Con VigIA, los oficiales saben que el conductor conoce sus derechos y está grabando. Esto disuade procedimientos irregulares y promueve la transparencia.",
    color: "#06b6d4",
    stat: "Art. 21",
    statLabel: "respaldo legal",
  },
  {
    icon: "🇨🇴",
    title: "Hecha para Colombia",
    desc: "No es una app genérica traducida. VigIA fue concebida, diseñada y entrenada específicamente para el contexto jurídico y vial de Colombia.",
    color: "#6366f1",
    stat: "100%",
    statLabel: "colombiana",
  },
];

export default function WhySection() {
  return (
    <section
      id="porque"
      style={{
        padding: "7rem 2rem",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute", top: "30%", right: "-8%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(245,158,11,0.12)",
            border: "1px solid rgba(245,158,11,0.3)",
            borderRadius: "50px", padding: "5px 16px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8rem", color: "#fcd34d", fontWeight: 500,
            marginBottom: "1rem",
          }}>
            ¿Por qué VigIA?
          </span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, lineHeight: 1.15,
            color: "#f1f5f9", marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}>
            6 razones para tener VigIA{" "}
            <span className="gradient-text-cyan">siempre contigo</span>
          </h2>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1.05rem", color: "var(--text-secondary)",
            maxWidth: "560px", margin: "0 auto", lineHeight: 1.7,
          }}>
            No esperes a que te paren en la vía para pensar en esto. El conocimiento preventivo es el mejor escudo.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {REASONS.map(({ icon, title, desc, color, stat, statLabel }) => (
            <div
              key={title}
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--glass-border)",
                borderRadius: "20px",
                padding: "1.75rem",
                transition: "all 0.3s ease",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.borderColor = `${color}40`;
                el.style.boxShadow = `0 16px 40px ${color}18`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "var(--glass-border)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "13px",
                  background: `${color}18`,
                  border: `1px solid ${color}35`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem",
                }}>
                  {icon}
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.4rem", fontWeight: 800,
                    color: color, lineHeight: 1,
                  }}>
                    {stat}
                  </div>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.7rem", color: "var(--text-muted)",
                  }}>
                    {statLabel}
                  </div>
                </div>
              </div>

              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: "1rem",
                color: "#f1f5f9", lineHeight: 1.3,
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.875rem", color: "var(--text-muted)",
                lineHeight: 1.65, flexGrow: 1,
              }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
