"use client";
import { motion } from "framer-motion";
import { Check, X, ShieldAlert } from "lucide-react";

const CAN = [
  "Citar leyes vigentes y actualizadas.",
  "Verificar deudas en RUNT y SIMIT.",
  "Documentar procedimientos policiales.",
  "Alertar sobre vencimientos de SOAT."
];

const CANNOT = [
  "Realizar representaciones de abogados.",
  "Interferir en el proceso policial.",
  "Garantizar inmunidad ante infracciones."
];

export default function LimitsSection() {
  return (
    <section id="limits" className="section-padding relative overflow-hidden bg-primary border-t border-white/5 pb-48">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
          {/* Can */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 p-12 md:p-16 rounded-[4rem] bg-emerald-500/5 border border-emerald-500/10 shadow-3xl"
          >
            <div className="flex items-center gap-6 mb-12">
               <div className="p-4 rounded-3xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-400">
                  <Check size={32} />
               </div>
               <h3 className="text-3xl font-black italic tracking-tighter text-white uppercase tracking-[0.1em]">Puede</h3>
            </div>
            <ul className="space-y-10">
               {CAN.map((item, i) => (
                  <li key={i} className="flex gap-6 text-slate-200 font-bold text-lg md:text-xl leading-relaxed italic opacity-90">
                     <span className="text-emerald-500 text-3xl leading-none">•</span>
                     {item}
                  </li>
               ))}
            </ul>
          </motion.div>

          {/* Cannot */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-1 p-12 md:p-16 rounded-[4rem] bg-red-500/5 border border-red-500/10 shadow-3xl"
          >
            <div className="flex items-center gap-6 mb-12">
               <div className="p-4 rounded-3xl bg-red-500/15 border border-red-500/20 text-red-400">
                  <X size={32} />
               </div>
               <h3 className="text-3xl font-black italic tracking-tighter text-white uppercase tracking-[0.1em]">No Puede</h3>
            </div>
            <ul className="space-y-10">
               {CANNOT.map((item, i) => (
                  <li key={i} className="flex gap-6 text-slate-200 font-bold text-lg md:text-xl leading-relaxed italic opacity-90">
                     <span className="text-red-500 text-3xl leading-none">•</span>
                     {item}
                  </li>
               ))}
            </ul>
          </motion.div>
        </div>

        {/* Warning Toast */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-32 p-10 md:p-14 rounded-[3rem] border border-blue-500/10 bg-blue-500/5 flex flex-col md:flex-row items-center md:items-start gap-10 shadow-2xl shadow-blue-950/20"
        >
           <div className="p-6 rounded-[2rem] bg-blue-500/10 shadow-2xl shrink-0 border border-blue-500/20">
              <ShieldAlert className="text-blue-500" size={48} />
           </div>
           <div className="space-y-5 text-center md:text-left">
              <h4 className="text-2xl font-black text-blue-500 uppercase tracking-[0.4em] italic leading-none">IMPORTANTE</h4>
              <p className="font-bold italic text-xl md:text-2xl text-dim leading-relaxed tracking-tight">
                 VigIA es una plataforma informativa experta. Proveemos conocimiento legal inmediato pero <span className="text-white font-black underline decoration-blue-500 decoration-4 underline-offset-8">bajo ningún motivo</span> reemplazamos la asesoría jurídica personalizada de un abogado profesional colegiado.
              </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
