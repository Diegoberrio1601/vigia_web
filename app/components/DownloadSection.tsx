"use client";
export default function DownloadSection() {
  return (
    <section
      id="descargar"
      style={{
        padding: "8rem 2rem",
        background: "linear-gradient(135deg, #0f172a 0%, #1a1040 50%, #0f172a 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "20%", left: "15%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "10%",
          width: 350, height: 350, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          filter: "blur(50px)",
        }} />
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(99,102,241,0.15)",
          border: "1px solid rgba(99,102,241,0.35)",
          borderRadius: "50px", padding: "6px 18px", marginBottom: "2rem",
          fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem",
          color: "#a5b4fc", fontWeight: 500,
        }}>
          🚀 Próximamente disponible
        </div>

        <h2 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          fontWeight: 800, lineHeight: 1.1,
          color: "#f1f5f9", marginBottom: "1.25rem",
          letterSpacing: "-0.02em",
        }}>
          Descarga VigIA y{" "}
          <span className="gradient-text-shimmer">conoce tus derechos</span>
          {" "}desde hoy
        </h2>

        <p style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1.1rem", color: "var(--text-secondary)",
          maxWidth: "520px", margin: "0 auto 3rem",
          lineHeight: 1.7,
        }}>
          Disponible para iOS y Android. Lleva a VigIA contigo en todo momento — porque no sabes cuándo la vas a necesitar.
        </p>

        {/* Store buttons */}
        <div style={{
          display: "flex", gap: "1rem", justifyContent: "center",
          flexWrap: "wrap", marginBottom: "3rem",
        }}>
          {[
            { icon: "🍎", store: "App Store", sub: "Para iPhone y iPad", id: "download-ios" },
            { icon: "🤖", store: "Google Play", sub: "Para Android", id: "download-android" },
          ].map(({ icon, store, sub, id }) => (
            <div
              key={store}
              id={id}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                background: "rgba(30,41,59,0.8)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "1rem 2rem",
                transition: "all 0.3s ease",
                cursor: "default",
                minWidth: "200px",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(99,102,241,0.4)";
                el.style.boxShadow = "0 12px 40px rgba(99,102,241,0.2)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.1)";
                el.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: "2rem" }}>{icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.7rem", color: "var(--text-muted)",
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  marginBottom: "2px",
                }}>
                  Próximamente en
                </div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1.05rem", fontWeight: 700, color: "#f1f5f9",
                }}>
                  {store}
                </div>
                <div style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.75rem", color: "var(--text-muted)",
                }}>
                  {sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature pills */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "0.65rem",
          justifyContent: "center", maxWidth: "600px", margin: "0 auto",
        }}>
          {[
            "🧠 IA Legal en < 5 seg",
            "🎥 Grabación segura",
            "🌐 RUNT & SIMIT",
            "🚗 Gestión vehicular",
            "🔒 Privacidad total",
            "🇨🇴 100% colombiana",
            "⚖️ Art. 21 Ley 1801",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                display: "inline-block",
                background: "rgba(30,41,59,0.9)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50px", padding: "6px 14px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem", color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
