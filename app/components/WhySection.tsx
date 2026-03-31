"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Database, ArrowUpRight } from "lucide-react";

const REASONS = [
  { 
    title: "Conocimiento es Seguridad", 
    desc: "No permitas que te impongan multas por artículos que no aplican. Nuestra IA te da la base legal exacta en segundos.", 
    icon: <ShieldCheck size={24} /> 
  },
  { 
    title: "La Verdad es Inalterable", 
    desc: "Una grabación normal se puede borrar. La de VigIA es evidencia técnica protegida en la nube desde el inicio.", 
    icon: <Database size={24} /> 
  },
  { 
    title: "Escudo Anti-Cobros", 
    desc: "El sistema espera que olvides tus documentos para facturar. VigIA te blinda contra el olvido y el abuso administrativo.", 
    icon: <ArrowUpRight size={24} /> 
  }
];

export default function WhySection() {
  return (
    <section id="porque" className="py-24 md:py-40 bg-primary transition-colors duration-500 border-t border-border">
      <div className="container-wide">
        <div className="max-w-3xl mb-20 md:mb-28 mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-xs mb-6"
          >
            <div className="w-10 h-[2px] bg-current" />
            La Ventaja VigIA
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-text-main"
          >
            ¿Por qué VigIA es tu <span className="text-blue-600 dark:text-blue-500">prioridad</span> hoy?
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-xl text-text-muted font-medium leading-relaxed"
          >
            Porque en la calle estás solo contra un sistema que conoce la ley mejor que tú y la usa en tu contra. VigIA equilibra la balanza.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-10 rounded-[2.5rem] bg-secondary dark:bg-muted border border-border flex flex-col gap-8 transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="p-4 rounded-xl bg-primary dark:bg-muted w-fit shadow-sm group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-all duration-300 border border-border text-text-muted">
                {reason.icon}
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-xl md:text-2xl tracking-tight text-text-main">{reason.title}</h4>
                <p className="text-text-muted font-medium leading-relaxed italic">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
