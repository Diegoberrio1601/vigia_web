"use client";
export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(15,23,42,0.95)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "4rem 2rem 2rem",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                V
              </div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                VigIA
              </span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: "240px" }}>
              Vigilancia + Inteligencia Artificial. Empoderando a conductores colombianos con conocimiento jurídico en tiempo real.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Secciones
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                ["Qué es VigIA", "#que-es"],
                ["Funciones", "#funciones"],
                ["Marco Legal", "#legal"],
                ["Puede / No puede", "#limites"],
                ["Por qué usarla", "#porque"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#3b82f6")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Marco Legal
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                "Ley 769/2002 – Código Nacional de Tránsito",
                "Ley 1801/2016 – Código Nacional de Policía",
                "Art. 21 – Derecho a grabar",
                "Tabla de infracciones A–J",
              ].map((item) => (
                <li key={item} style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.5 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 style={{ color: "var(--text-primary)", fontWeight: 600, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
              Disponible próximamente
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "App Store (iOS)", icon: "🍎" },
                { label: "Google Play (Android)", icon: "🤖" },
              ].map(({ label, icon }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(30,41,59,0.8)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            © 2026 VigIA. Plataforma informativa. No constituye asesoría jurídica.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            Hecho con ❤️ para conductores colombianos
          </p>
        </div>
      </div>
    </footer>
  );
}
