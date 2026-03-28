"use client";
import { motion } from "framer-motion";
import { Zap, Lock, BookOpen, UserCheck, EyeOff, Globe } from "lucide-react";

const REASONS = [
  { icon: <Zap />, title: "Velocidad Crítica", desc: "Respuesta en menos de 5 segundos cuando más lo necesitas ante una autoridad en plena vía." },
  { icon: <Lock />, title: "Privacidad Total", desc: "Tus grabaciones y datos están cifrados localmente en tu dispositivo primario." },
  { icon: <BookOpen />, title: "Fuentes Oficiales", desc: "Citas exactas de leyes vigentes colombianas 2026, sin interpretaciones ni errores." },
  { icon: <UserCheck />, title: "Lenguaje Ciudadano", desc: "Traducimos el derecho penal y de tránsito complejo para que cualquiera lo entienda." },
  { icon: <EyeOff />, title: "Disuasión Efectiva", desc: "El conocimiento y la grabación detienen de inmediato cualquier intento de abuso." },
  { icon: <Globe />, title: "100% Nacional", desc: "Hecha por y para colombianos, ajustada a nuestro marco jurídico único." }
];

export default function WhySection() {
  return (
    <section id="porque" className="section-padding relative overflow-hidden bg-secondary border-t border-white/5 py-32 md:py-48">
      <div className="container-wide">
        <div className="text-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8"
          >
            Ventaja VigIA
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 gradient-heading tracking-tighter"
          >
            ¿Por qué usar VigIA?
          </motion.h2>
          <p className="text-dim text-lg md:text-xl max-w-2xl mx-auto font-black italic opacity-80 leading-relaxed">
            El conocimiento preventivo es tu mejor escudo en la vía pública colombiana. Protegemos tu integridad personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {REASONS.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col gap-10 p-12 md:p-14 glow-card border-none bg-slate-900 shadow-3xl transition-all hover:bg-slate-950 group"
            >
              <div className="w-16 h-16 rounded-[1.75rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-xl group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <div className="space-y-4">
                <h4 className="font-black text-2xl md:text-3xl tracking-tighter text-white/95">{reason.title}</h4>
                <p className="text-dim text-md md:text-lg leading-relaxed font-bold opacity-80">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
