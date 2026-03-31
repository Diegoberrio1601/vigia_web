"use client";
import { motion } from "framer-motion";
import { Scale, Gavel, BookOpen, Shield, Video } from "lucide-react";

const LAWS = [
  {
    title: "Derecho a Documentar",
    description: "Nadie puede impedirte grabar un procedimiento policial. Es tu garantía de transparencia (Art. 21 Ley 1801).",
    law: "Art. 21 Ley 1801",
    icon: <Video className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Debido Proceso",
    description: "La autoridad debe seguir pasos exactos. Si los saltan, el procedimiento es nulo. VigIA te guía.",
    law: "Art. 29 Constitución",
    icon: <Shield className="w-8 h-8 text-indigo-600" />
  },
  {
    title: "Verdad Normativa",
    description: "Deja de adivinar. Consulta los protocolos que los agentes están obligados a seguir pero rara vez mencionan.",
    law: "Protocolos Oficiales",
    icon: <BookOpen className="w-8 h-8 text-emerald-600" />
  }
];

export default function LegalSection() {
  return (
    <section id="legal" className="py-24 md:py-40 bg-primary transition-colors duration-500 border-t border-border">
      <div className="container-wide">
        <div className="max-w-3xl mb-20 md:mb-28 mx-auto">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-xs mb-6"
          >
            <div className="w-10 h-[2px] bg-current" />
            Sustento Normativo
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-text-main">
              Tu mayor defensa es conocer <br />
              <span className="text-blue-600 dark:text-blue-500">lo que ellos omiten.</span>
            </h2>
            <p className="text-xl text-text-muted font-medium leading-relaxed">
              El sistema se beneficia de tu silencio. Pero el Art. 21 de la Ley 1801 y el Código de Tránsito son claros: tienes derecho a grabar, a ser escuchado y a exigir el debido proceso.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LAWS.map((law, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-secondary dark:bg-muted border border-border flex flex-col gap-8 transition-all hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="p-5 rounded-2xl bg-primary dark:bg-muted w-fit shadow-sm group-hover:scale-110 transition-transform duration-500 border border-border">
                 {law.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-text-main">{law.title}</h3>
                <div className="w-12 h-1 bg-blue-600/20 dark:bg-blue-500/20 rounded-full" />
                <p className="text-text-muted font-medium leading-relaxed">
                  {law.description}
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-border flex items-center justify-between">
                 <div className="flex items-center gap-2">
                   <Shield size={14} className="text-blue-600 dark:text-blue-500" />
                   <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 dark:text-blue-400">{law.law}</span>
                 </div>
                 <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted opacity-50">Vigencia 2026</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
