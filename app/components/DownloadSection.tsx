"use client";
import { motion } from "framer-motion";
import { Apple, Smartphone, ArrowRight } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="descargar" className="section-padding relative overflow-hidden flex items-center justify-center min-h-[80vh] bg-primary border-t border-white/5 py-48 md:py-64">
      <div className="mesh-bg opacity-30" />
      
      <div className="container-wide text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[11px] font-black uppercase tracking-[0.5em] mb-16 shadow-3xl"
        >
          🚀 Próximamente en 2026
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black mb-16 gradient-heading tracking-tighter leading-[0.85] italic"
        >
          Tu escudo legal <br /> en tu bolsillo.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-3xl text-dim max-w-4xl mx-auto mb-24 leading-relaxed font-black italic opacity-80 tracking-tighter"
        >
          Sé el primero en saber cuando VigIA esté disponible. Lleva la ley colombiana contigo y protege tus derechos en 2026.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-10 md:gap-16"
        >
          <div className="flex items-center gap-10 px-12 md:px-14 py-8 md:py-10 rounded-[3rem] bg-slate-900 border border-white/10 opacity-30 cursor-not-allowed shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all grayscale">
            <Apple size={48} className="text-white" />
            <div className="text-left">
              <div className="text-[11px] uppercase font-black opacity-50 tracking-[0.3em] mb-2">Próximamente</div>
              <div className="font-black text-2xl tracking-tighter">App Store</div>
            </div>
          </div>

          <div className="flex items-center gap-10 px-12 md:px-14 py-8 md:py-10 rounded-[3rem] bg-slate-900 border border-white/10 opacity-30 cursor-not-allowed shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all grayscale">
            <Smartphone size={48} className="text-white" />
            <div className="text-left">
              <div className="text-[11px] uppercase font-black opacity-50 tracking-[0.3em] mb-2">Próximamente</div>
              <div className="font-black text-2xl tracking-tighter">Google Play</div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-32"
        >
           <button className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs md:text-sm border-b-4 border-blue-500/20 pb-4 hover:border-blue-500 transition-all shadow-blue-500/20 shadow-2xl">
              Unirse a la lista de espera <ArrowRight className="inline-block ml-4 w-6 h-6" />
           </button>
        </motion.div>
      </div>
    </section>
  );
}
