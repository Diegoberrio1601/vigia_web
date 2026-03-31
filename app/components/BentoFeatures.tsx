"use client";
import { motion } from "framer-motion";
import { Video, Search, Car, ShieldCheck, Zap, Bell } from "lucide-react";

const FEATURES = [
  {
    title: "Testigo Digital Incorruptible",
    description: "Tus grabaciones no desaparecen. Evidencia protegida bajo la ley colombiana para demostrar la verdad.",
    icon: <Video className="text-blue-600 dark:text-blue-400" size={28} />,
    className: "lg:col-span-7 lg:row-span-2",
    accent: "bg-blue-500/10",
    visual: (
      <div className="relative mt-8 h-48 w-full bg-secondary dark:bg-muted rounded-2xl overflow-hidden border border-border">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full border-4 border-red-500 animate-pulse flex items-center justify-center">
              <div className="w-4 h-4 bg-red-500 rounded-sm" />
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">Rec: 00:42:15</div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between">
           <div className="w-1/3 h-1.5 bg-blue-500/30 rounded-full" />
           <div className="w-1/4 h-1.5 bg-blue-500/10 rounded-full" />
        </div>
      </div>
    )
  },
  {
    title: "Verdad Jurídica al Instante",
    description: "Que no te digan que tienes deudas que no existen. Consulta SIMIT y RUNT con un solo toque.",
    icon: <Search className="text-emerald-600 dark:text-emerald-400" size={28} />,
    className: "lg:col-span-5 lg:row-span-1",
    accent: "bg-emerald-500/10",
  },
  {
    title: "Escudo Anti-Multas",
    description: "Garantiza tus deberes para exigir tus derechos. Nunca más una multa por un descuido documental.",
    icon: <Bell className="text-amber-600 dark:text-amber-400" size={28} />,
    className: "lg:col-span-5 lg:row-span-1",
    accent: "bg-amber-500/10",
  },
  {
    title: "Defensor IA 24/7",
    description: "Conoce la norma exacta antes de que te la impongan. Respuestas del Código de Tránsito para frenar abusos.",
    icon: <Zap className="text-purple-600 dark:text-purple-400" size={28} />,
    className: "lg:col-span-12 lg:row-span-1",
    accent: "bg-purple-500/10",
    isWide: true
  }
];

export default function BentoFeatures() {
  return (
    <section id="funciones" className="py-24 md:py-40 bg-secondary dark:bg-primary/50 transition-colors duration-500">
      <div className="container-wide">
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-xs mb-6"
          >
            <div className="w-10 h-[2px] bg-current" />
            Ecosistema VigIA
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-text-main"
          >
            Herramientas de <span className="text-blue-600 dark:text-blue-500">defensa</span> para el ciudadano real.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-xl text-text-muted font-medium leading-relaxed"
          >
            VigIA no solo graba; te empodera con información oficial y respaldo técnico para que transites con total tranquilidad por todo el país.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-card border border-border ${feature.className} transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 blur-[80px] -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${feature.accent}`} />
              
              <div className="flex items-center justify-between mb-8">
                <div className={`p-4 rounded-2xl ${feature.accent} border border-white/5 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                  {feature.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-secondary dark:bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                   <Zap size={14} className="text-text-muted" />
                </div>
              </div>

              <div className={`flex flex-col ${feature.isWide ? 'md:flex-row md:items-center md:gap-12' : ''}`}>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-text-main group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted font-medium leading-relaxed font-secondary">
                    {feature.description}
                  </p>
                </div>
                {feature.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
