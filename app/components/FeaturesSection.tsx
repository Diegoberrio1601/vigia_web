const FEATURES = [
  {
    id: "ai",
    icon: "🧠",
    tag: "Módulo IA",
    tagColor: "#3b82f6",
    title: "VigIA AI — Tu Abogado de Bolsillo",
    subtitle: "Respuestas legales en menos de 5 segundos",
    description:
      "El módulo de IA está entrenado en toda la normatividad de tránsito colombiana. Cuando un oficial te detiene, puedes preguntarle a VigIA y obtener la respuesta correcta antes de que él termine de hablar.",
    capabilities: [
      { icon: "📖", text: "Ley 769/2002 – Código Nacional de Tránsito completo" },
      { icon: "🚔", text: "Ley 1801/2016 – Código Nacional de Policía" },
      { icon: "💰", text: "Tabla de multas: infracciones A, B, C, D, E, F, G, H, I, J" },
      { icon: "📋", text: "Resoluciones del Ministerio de Transporte" },
      { icon: "🎯", text: "Cita artículos exactos con numeración de ley" },
      { icon: "🗣️", text: "Frases literales para decirle al oficial" },
      { icon: "🚫", text: "Indica si procede inmovilización o no" },
    ],
    color: "#3b82f6",
  },
  {
    id: "grabacion",
    icon: "🎥",
    tag: "Grabación",
    tagColor: "#06b6d4",
    title: "Centro de Grabación Segura",
    subtitle: "Tu evidencia digital, protegida y siempre disponible",
    description:
      "En Colombia es un derecho constitucional grabar cualquier procedimiento policial. VigIA te facilita ejercerlo con una grabación de alta calidad, pensada para ser válida como evidencia judicial.",
    capabilities: [
      { icon: "📹", text: "Graba video y audio de alta calidad desde tu dispositivo" },
      { icon: "💾", text: "Almacenamiento local (IndexedDB) — tus videos no van a la nube" },
      { icon: "🔒", text: "Privacidad total: nadie más tiene acceso a tus grabaciones" },
      { icon: "⚡", text: "Inicia la grabación en un toque, sin configuración" },
      { icon: "🔀", text: "Graba mientras consultas la IA simultáneamente (multitarea)" },
      { icon: "📥", text: "Descarga directa al almacenamiento de tu dispositivo" },
      { icon: "⚖️", text: "Grabaciones con calidad para presentar ante autoridades" },
    ],
    color: "#06b6d4",
  },
  {
    id: "consultas",
    icon: "🌐",
    tag: "Consultas Oficiales",
    tagColor: "#8b5cf6",
    title: "RUNT y SIMIT Integrados",
    subtitle: "Toda tu información vehicular a un clic",
    description:
      "VigIA centraliza el acceso a las plataformas oficiales del Estado colombiano. Sin buscar en múltiples sitios, sin confundirte con URLs desactualizadas.",
    capabilities: [
      { icon: "🔍", text: "RUNT: Consulta estado de licencia de conducir" },
      { icon: "🚗", text: "RUNT: Información completa del vehículo por placa" },
      { icon: "📄", text: "RUNT: Trámites vehiculares y transferencias" },
      { icon: "💳", text: "SIMIT: Consulta de multas y comparendos activos" },
      { icon: "⚠️", text: "SIMIT: Estado de acuerdos de pago vigentes" },
      { icon: "🏛️", text: "Acceso directo sin redirecciones engañosas" },
      { icon: "⏱️", text: "Estados de carga informativos mientras consultas" },
    ],
    color: "#8b5cf6",
  },
  {
    id: "vehiculos",
    icon: "🚗",
    tag: "Perfil & Vehículos",
    tagColor: "#6366f1",
    title: "Gestión de Vehículos Inteligente",
    subtitle: "Nunca más se te vence el SOAT sin saberlo",
    description:
      "Registra tu vehículo en VigIA y el sistema te alertará con anticipación antes de que venzan tus documentos obligatorios. Sin multas por descuido, sin sustos en la vía.",
    capabilities: [
      { icon: "🏷️", text: "Registra múltiples placas y vehículos en un perfil" },
      { icon: "🔔", text: "Alertas de vencimiento de SOAT con días de anticipación" },
      { icon: "🔧", text: "Recordatorios de Revisión Técnico-Mecánica (RTM)" },
      { icon: "📅", text: "Calendario de documentos viales personalizado" },
      { icon: "🚙", text: "Modelo, año y características del vehículo" },
      { icon: "📊", text: "Panel de control con estado de todos tus documentos" },
      { icon: "☁️", text: "Sincronización segura con Firebase si tienes cuenta" },
    ],
    color: "#6366f1",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="funciones"
      style={{
        padding: "7rem 2rem",
        background: "linear-gradient(180deg, var(--bg-primary) 0%, #0d1526 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(139,92,246,0.12)",
            border: "1px solid rgba(139,92,246,0.3)",
            borderRadius: "50px", padding: "5px 16px",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8rem", color: "#c4b5fd", fontWeight: 500,
            marginBottom: "1rem",
          }}>
            Funcionalidades
          </span>
          <h2 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800, lineHeight: 1.15,
            color: "#f1f5f9", marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}>
            Todo lo que VigIA{" "}
            <span className="gradient-text-purple">hace por ti</span>
          </h2>
          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "1.05rem", color: "var(--text-secondary)",
            maxWidth: "580px", margin: "0 auto", lineHeight: 1.7,
          }}>
            Cuatro módulos diseñados para que nunca estés desprotegido en la vía.
          </p>
        </div>

        {/* Feature blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {FEATURES.map((f, i) => (
            <div
              key={f.id}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2.5rem",
                alignItems: "center",
                direction: i % 2 === 1 ? "rtl" : "ltr",
              }}
            >
              {/* Text block */}
              <div style={{ direction: "ltr" }}>
                <span style={{
                  display: "inline-block",
                  background: `${f.color}18`,
                  border: `1px solid ${f.color}40`,
                  borderRadius: "50px", padding: "4px 14px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.78rem", color: f.color, fontWeight: 600,
                  marginBottom: "1rem",
                }}>
                  {f.tag}
                </span>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800, color: "#f1f5f9",
                  marginBottom: "0.5rem", lineHeight: 1.2,
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem", color: f.color,
                  fontWeight: 500, marginBottom: "1rem",
                }}>
                  {f.subtitle}
                </p>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.95rem", color: "var(--text-secondary)",
                  lineHeight: 1.7, marginBottom: "1.5rem",
                }}>
                  {f.description}
                </p>
              </div>

              {/* Capability card */}
              <div style={{ direction: "ltr" }}>
                <div style={{
                  background: "var(--glass-bg)",
                  backdropFilter: "blur(16px)",
                  border: `1px solid ${f.color}25`,
                  borderRadius: "20px",
                  padding: "1.75rem",
                  boxShadow: `0 8px 32px ${f.color}15`,
                }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "12px",
                    marginBottom: "1.25rem",
                    paddingBottom: "1rem",
                    borderBottom: `1px solid ${f.color}20`,
                  }}>
                    <span style={{ fontSize: "1.8rem" }}>{f.icon}</span>
                    <span style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700, fontSize: "1rem", color: "#f1f5f9",
                    }}>
                      Capacidades
                    </span>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                    {f.capabilities.map(({ icon, text }) => (
                      <li key={text} style={{
                        display: "flex", alignItems: "flex-start", gap: "10px",
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.875rem", color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}>
                        <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
