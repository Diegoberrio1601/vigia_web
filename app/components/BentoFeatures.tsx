"use client";
import { motion } from "framer-motion";
import { Brain, Video, Search, Car, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    title: "IA Legal Especializada",
    description: "Un abogado experto en tránsito disponible 24/7. Respuestas basadas en el Código Nacional de Tránsito y jurisprudencia colombiana actualizada.",
    icon: <Brain className="text-blue-400" size={32} />,
    className: "lg:col-span-8 lg:row-span-1",
    color: "from-blue-500/20 to-transparent",
    animation: "typing"
  },
  {
    title: "Grabación Segura",
    description: "Documenta procedimientos con validez judicial inmediata y almacenamiento seguro local.",
    icon: <Video className="text-purple-400" size={32} />,
    className: "lg:col-span-4 lg:row-span-1",
    color: "from-purple-500/20 to-transparent",
  },
  {
    title: "Consultas Oficiales",
    description: "RUNT y SIMIT al instante. Verifica multas y estado de licencia sin salir de la app.",
    icon: <Search className="text-cyan-400" size={32} />,
    className: "lg:col-span-6 lg:row-span-1",
    color: "from-cyan-500/20 to-transparent"
  },
  {
    title: "Gestión de Vehículos",
    description: "Alertas preventivas de SOAT y Tecnomecánica.",
    icon: <Car className="text-indigo-400" size={32} />,
    className: "lg:col-span-6 lg:row-span-1",
    color: "from-indigo-500/20 to-transparent"
  }
];

export default function BentoFeatures() {
  return (
    <section id="funciones" className="section-padding relative overflow-hidden bg-secondary border-t border-b border-white/5">
      <div className="container-wide">
        <div className="text-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8"
          >
            Capacidades de VigIA
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 gradient-heading tracking-tighter"
          >
            Todo lo que necesitas, <br /> en un solo lugar.
          </motion.h2>
          <p className="text-dim max-w-2xl mx-auto text-lg md:text-xl font-bold italic opacity-80 leading-relaxed">
            VigIA combina tecnología con conocimiento legal para protegerte en las vías colombianas con herramientas diseñadas para el ciudadano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 pb-16">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glow-card p-10 md:p-14 flex flex-col gap-10 ${feature.className} bg-slate-900 border-none shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]`}
            >
              <div className="p-5 rounded-3xl bg-blue-500/10 border border-blue-500/20 w-fit shadow-xl">
                {feature.icon}
              </div>
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-black tracking-tighter">{feature.title}</h3>
                <p className="text-dim text-lg leading-relaxed font-bold opacity-80">{feature.description}</p>
              </div>
              
              {feature.animation === "typing" && (
                <div className="mt-6 p-6 md:p-8 rounded-[2rem] bg-black/80 border border-white/5 font-mono text-xs text-blue-400 font-black shadow-3xl">
                   <div className="flex gap-2.5 mb-5 opacity-40">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:0.2s]" />
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse [animation-delay:0.4s]" />
                   </div>
                   <div className="opacity-60 italic tracking-tight mb-2">Simulando respuesta legal...</div>
                   <div className="text-white font-black italic tracking-tighter leading-relaxed">
                     "Infracción C-2: Estacionar en sitios prohibidos. El artículo 127 del CNT especifica que..."
                   </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
