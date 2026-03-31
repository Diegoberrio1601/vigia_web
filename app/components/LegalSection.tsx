"use client";
import { motion } from "framer-motion";
import { Scale, Gavel, BookOpen, Shield } from "lucide-react";

const LAWS = [
  { 
    id: "art21", 
    title: "Ley 1801 de 2016 · Art. 21", 
    text: "Todo ciudadano tiene derecho a grabar los procedimientos de policía. La transparencia es un derecho fundamental respaldado por la Corte Constitucional.", 
    icon: <Scale className="text-blue-600 dark:text-blue-500" />, 
  },
  { 
    id: "codigo", 
    title: "Ley 769 de 2002", 
    text: "Código Nacional de Tránsito Terrestre. La normativa base para todos los conductores en Colombia, integrada y consultable en tiempo real.", 
    icon: <BookOpen className="text-blue-600 dark:text-blue-500" />, 
  },
  { 
    id: "constitucion", 
    title: "Constitución Política", 
    text: "El Artículo 29 garantiza el Debido Proceso. VigIA asegura que tus derechos sean respetados mediante evidencia técnica inalterable.", 
    icon: <Gavel className="text-blue-600 dark:text-blue-500" />, 
  }
];

export default function LegalSection() {
  return (
    <section id="legal" className="py-24 md:py-40 bg-primary transition-colors duration-500 border-t border-border">
      <div className="container-wide">
        <div className="max-w-3xl mb-20 md:mb-28">
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-xs mb-6"
          >
            <div className="w-10 h-[2px] bg-current" />
            Sustento Normativo
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-text-main"
          >
            Tu defensa es la <span className="text-blue-600 dark:text-blue-500">Ley</span>.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-xl text-text-muted font-medium leading-relaxed"
          >
            VigIA no es solo una app; es una herramienta técnica diseñada bajo el marco legal colombiano para garantizar el ejercicio pleno de tus derechos.
          </motion.p>
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
                <p className="text-text-muted font-medium leading-relaxed italic">
                  "{law.text}"
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-border flex items-center gap-2">
                 <Shield size={14} className="text-blue-600 dark:text-blue-500" />
                 <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">Vigencia 2026</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
