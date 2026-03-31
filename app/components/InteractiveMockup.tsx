"use client";
import { motion } from "framer-motion";
import { MessageSquare, Shield, CheckCircle } from "lucide-react";

export default function InteractiveMockup() {
  return (
    <section
      id="demo"
      className="section-padding relative overflow-hidden bg-primary py-32 md:py-48"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Chat Side (Left) */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-20 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-10 md:p-14 glow-card rounded-[4rem] border border-border shadow-3xl bg-card"
            >
              {/* Chat UI */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-xs font-black text-white">V</div>
                <div className="text-xs font-bold uppercase tracking-widest text-text-muted">Defensor IA: Tu derecho, tu palabra</div>
              </div>
              <div className="flex items-center gap-6 mb-12 pb-8 border-b border-border">
                <div>
                  <div className="font-black text-2xl tracking-tight text-text-main">
                    VigIA AI Legal
                  </div>
                  <div className="text-[11px] text-emerald-500 flex items-center gap-2 font-black uppercase tracking-[0.2em] mt-1">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />{" "}
                    En línea
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="self-end max-w-[80%] p-4 rounded-2xl rounded-tr-none bg-blue-600 text-white text-sm font-medium shadow-lg shadow-blue-500/20">
                  ¿Es legal que me inmovilicen el carro por no llevar el cinturón? El agente dice que sí.
                </div>
                
                <div className="self-start max-w-[80%] p-4 rounded-2xl rounded-tl-none bg-card border border-border text-text-main text-sm shadow-sm leading-relaxed">
                  <span className="font-bold text-blue-600 dark:text-blue-500">Falso.</span> Según el <span className="font-bold">Art. 131</span> del Código Nacional de Tránsito, la infracción C.06 no permite la inmovilización. El agente está abusando de su desconocimiento. Cite el artículo y exija que solo se realice el comparendo.
                </div>
              </div>
            </motion.div>
          </div>

          {/* Text Side (Right) */}
          <div className="order-1 lg:order-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-text-main leading-tight">
                  La ley no se inventa, <br />
                  <span className="text-blue-600 dark:text-blue-500">se aplica.</span>
                </h3>
                <p className="text-lg text-text-muted font-medium leading-relaxed">
                  Las escuelas de conducción te dan el pase, pero no el conocimiento. VigIA te prepara para el mundo real, donde conocer un solo artículo puede ser la diferencia entre seguir tu camino o perder tu vehículo injustamente.
                </p>
              </motion.div>
              <div className="space-y-12 mt-12">
                {[
                  {
                    title: "Ley Exacta, Sin Dudas",
                    text: "No te bases en interpretaciones del agente. VigIA te da el Código de Tránsito y la jurisprudencia que te protege.",
                    icon: <CheckCircle className="text-blue-500" />,
                  },
                  {
                    title: "Defensa con Argumentos",
                    text: "Te entregamos las palabras y artículos precisos para frenar un procedimiento arbitrario en el acto.",
                    icon: <CheckCircle className="text-blue-500" />,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.5 }}
                    className="flex gap-10 group"
                  >
                    <div className="mt-2.5 p-1.5 rounded-full bg-blue-500/10 h-fit transition-transform group-hover:scale-125">
                      {item.icon}
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-black text-2xl md:text-3xl tracking-tighter text-text-main">
                        {item.title}
                      </h4>
                      <p className="text-text-muted text-lg md:text-xl font-bold opacity-80 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
