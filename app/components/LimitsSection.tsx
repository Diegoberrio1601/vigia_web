const CAN_DO = [
  "Consultar el Código Nacional de Tránsito (Ley 769/2002) completo",
  "Conocer las multas y sanciones de infracciones A hasta J",
  "Grabar procedimientos del agente de tránsito (derecho legal – Art. 21)",
  "Verificar si un oficial tiene competencia para imponer un comparendo",
  "Consultar el estado de tu licencia de conducción en el RUNT",
  "Ver multas y comparendos activos en el SIMIT",
  "Obtener frases textuales para ejercer tus derechos ante un oficial",
  "Registrar tus vehículos y recibir alertas de vencimiento del SOAT",
  "Conocer si procede inmovilización de tu vehículo según la infracción",
  "Acceder a resoluciones del Ministerio de Transporte",
  "Guardar tus grabaciones localmente de forma privada",
  "Usar la app sin conexión para funciones principales",
];

const CANNOT_DO = [
  "Sustituir la asesoría de un abogado licenciado en Colombia",
  "Garantizar el resultado de un proceso disciplinario o judicial",
  "Cancelar o anular comparendos directamente desde la app",
  "Acceder a información privada o clasificada de ningún organismo",
  "Pagar multas o realizar trámites oficiales directamente",
  "Suplir la presentación física ante organismos de tránsito",
  "Asesorar sobre delitos de tránsito (eso requiere abogado penalista)",
  "Grabar sin consentimiento en espacios privados (no es para eso)",
  "Actuar como representante legal en ningún proceso",
  "Garantizar la actualización inmediata de cambios normativos",
];

export default function LimitsSection() {
  return (
    <section
      id="limites"
      style={{
        padding: "7rem 2rem",
        background: "linear-gradient(180deg, #0d1526 0%, var(--bg-primary) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4.5rem" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(99,102,241,0.12)",
            border: "1px solid rgba(99,102,241,0.3)",
            borderRadius: "50px", padding: "5px 16px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8rem", color: "#a5b4fc", fontWeight: 500,
            marginBottom: "1rem",
          }}>
            Alcances y Límites
          </span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, lineHeight: 1.15,
            color: "#f1f5f9", marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}>
            Qué{" "}
            <span className="gradient-text-blue">puede</span>
            {" "}y qué{" "}
            <span style={{
              background: "linear-gradient(135deg, #f87171, #ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              no puede
            </span>
            {" "}hacer VigIA
          </h2>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1.05rem", color: "var(--text-secondary)",
            maxWidth: "580px", margin: "0 auto", lineHeight: 1.7,
          }}>
            Queremos ser 100% transparentes sobre lo que VigIA ofrece y cuáles son sus límites. La honestidad es parte de nuestra misión.
          </p>
        </div>

        {/* Two columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
          gap: "1.5rem",
        }}>
          {/* CAN DO */}
          <div style={{
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.2)",
            borderRadius: "20px",
            padding: "2rem",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              marginBottom: "1.75rem",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: "10px",
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem",
              }}>
                ✅
              </div>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: "1.15rem",
                color: "#34d399",
              }}>
                VigIA SÍ puede ayudarte a...
              </h3>
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CAN_DO.map((item) => (
                <li key={item} style={{
                  display: "flex", alignItems: "flex-start", gap: "10px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.875rem", color: "var(--text-secondary)",
                  lineHeight: 1.55,
                }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "rgba(16,185,129,0.2)",
                    border: "1px solid rgba(16,185,129,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.65rem", color: "#34d399", flexShrink: 0,
                    marginTop: "2px",
                  }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CANNOT DO */}
          <div style={{
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: "20px",
            padding: "2rem",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              marginBottom: "1.75rem",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: "10px",
                background: "rgba(239,68,68,0.15)",
                border: "1px solid rgba(239,68,68,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem",
              }}>
                ❌
              </div>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700, fontSize: "1.15rem",
                color: "#f87171",
              }}>
                VigIA NO puede...
              </h3>
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {CANNOT_DO.map((item) => (
                <li key={item} style={{
                  display: "flex", alignItems: "flex-start", gap: "10px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.875rem", color: "var(--text-secondary)",
                  lineHeight: 1.55,
                }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: "50%",
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.35)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.65rem", color: "#f87171", flexShrink: 0,
                    marginTop: "2px",
                  }}>
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
