"use client";
import { motion } from "framer-motion";
import { Check, X, ShieldAlert } from "lucide-react";

const CAN = [
  "Citar leyes vigentes y actualizadas.",
  "Entregarte el artículo exacto del Código de Tránsito en segundos.",
  "Documentar abusos con evidencia técnica protegida en la nube.",
  "Blindarte contra multas por olvido de SOAT o Técnico-Mecánica.",
  "Confirmar tu estado real en SIMIT/RUNT para evitar cobros fantasma."
];

const CANNOT = [
  "Reemplazar la asesoría de un abogado.",
  "Interferir físicamente en procesos policiales.",
  "Garantizar la anulación de comparendos.",
  "Actuar como autoridad de tránsito."
];

export default function LimitsSection() {
  return (
    <section id="limites" className="py-24 md:py-40 bg-secondary dark:bg-primary/80 transition-colors duration-500">
      <div className="container-wide">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-text-main">
            Nuestras reglas para <span className="text-blue-600 dark:text-blue-500">tu protección</span>.
          </h2>
          <p className="text-xl text-text-muted font-medium leading-relaxed">
            Somos tu escudo, no tu abogado litigante. VigIA te empodera con conocimiento educativo para prevenir abusos en tiempo real.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Can */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 rounded-[2.5rem] bg-card border border-emerald-500/20 shadow-xl shadow-emerald-500/5 flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 border border-emerald-500/20">
                <Check size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text-main uppercase tracking-tight">VigIA Puede</h3>
            </div>
            <ul className="space-y-6">
              {CAN.map((item, i) => (
                <li key={i} className="flex gap-4 text-text-muted font-medium text-lg leading-relaxed">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cannot */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 rounded-[2.5rem] bg-card border border-red-500/20 shadow-xl shadow-red-500/5 flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-600 dark:text-red-500 border border-red-500/20">
                <X size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text-main uppercase tracking-tight">No Puede</h3>
            </div>
            <ul className="space-y-6">
              {CANNOT.map((item, i) => (
                <li key={i} className="flex gap-4 text-text-muted font-medium text-lg leading-relaxed">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Warning Note */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20 p-8 md:p-12 rounded-[2.5rem] bg-blue-600 dark:bg-blue-600 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-blue-500/20"
        >
          <div className="p-5 rounded-2xl bg-white/10 border border-white/20 shrink-0">
            <ShieldAlert size={40} className="text-white" />
          </div>
          <div className="text-center md:text-left space-y-3">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-80">Nota de Responsabilidad</h4>
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              VigIA es una plataforma de apoyo e información legal. Proveemos conocimiento técnico inmediato, pero <span className="underline decoration-white/40 underline-offset-8">no reemplazamos</span> la asesoría de un abogado profesional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
