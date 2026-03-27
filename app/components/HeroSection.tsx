"use client";
export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0f172a 0%, #1a1040 50%, #0f172a 100%)",
        padding: "8rem 2rem 4rem",
      }}
    >
      {/* Background glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "15%", left: "10%",
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: 450, height: 450, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 800, height: 800, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Content */}
      <div style={{ maxWidth: "900px", textAlign: "center", position: "relative", zIndex: 2 }}>
        {/* Badge */}
        <div className="animate-fade-up" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(99,102,241,0.15)",
          border: "1px solid rgba(99,102,241,0.35)",
          borderRadius: "50px", padding: "6px 18px", marginBottom: "2rem",
          fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem",
          color: "#a5b4fc", fontWeight: 500,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366f1", display: "inline-block", boxShadow: "0 0 8px #6366f1" }} />
          LegalTech para conductores colombianos
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-100" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
          fontWeight: 800,
          lineHeight: 1.08,
          marginBottom: "1.5rem",
          letterSpacing: "-0.02em",
          color: "#f1f5f9",
        }}>
          Tus derechos{" "}
          <span className="gradient-text-shimmer">no se detienen</span>
          <br />en la vía
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up delay-200" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          color: "var(--text-secondary)",
          maxWidth: "640px",
          margin: "0 auto 2.5rem",
          lineHeight: 1.7,
          fontWeight: 400,
        }}>
          VigIA te da acceso instantáneo a tu asesor legal de tránsito, te permite grabar procedimientos con validez judicial y consultar el RUNT y SIMIT — todo en un solo lugar.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300" style={{
          display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap",
          marginBottom: "4rem",
        }}>
          <a href="#funciones" id="hero-explore-btn" style={{
            textDecoration: "none",
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            color: "#fff",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600, fontSize: "1rem",
            padding: "14px 32px", borderRadius: "50px",
            boxShadow: "0 8px 32px rgba(99,102,241,0.4)",
            transition: "all 0.3s ease",
            display: "inline-flex", alignItems: "center", gap: "8px",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "translateY(-3px)";
            el.style.boxShadow = "0 12px 40px rgba(99,102,241,0.55)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 8px 32px rgba(99,102,241,0.4)";
          }}>
            🔍 Explorar funciones
          </a>
          <a href="#legal" id="hero-legal-btn" style={{
            textDecoration: "none",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#f1f5f9",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500, fontSize: "1rem",
            padding: "14px 32px", borderRadius: "50px",
            transition: "all 0.3s ease",
            display: "inline-flex", alignItems: "center", gap: "8px",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(99,102,241,0.5)";
            el.style.background = "rgba(99,102,241,0.1)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement;
            el.style.borderColor = "rgba(255,255,255,0.15)";
            el.style.background = "transparent";
          }}>
            ⚖️ Ver marco legal
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up delay-400" style={{
          display: "flex", justifyContent: "center", gap: "3rem",
          flexWrap: "wrap",
        }}>
          {[
            { value: "5 seg", label: "Respuesta legal" },
            { value: "100%", label: "Basado en ley colombiana" },
            { value: "4 módulos", label: "Todo integrado" },
          ].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "2rem", fontWeight: 700,
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>{value}</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", fontFamily: "'Outfit', sans-serif" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
        opacity: 0.5,
      }}>
        <span style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "'Outfit', sans-serif" }}>Desplázate</span>
        <div style={{
          width: 1, height: 40,
          background: "linear-gradient(to bottom, var(--accent-indigo), transparent)",
        }} />
      </div>
    </section>
  );
}
