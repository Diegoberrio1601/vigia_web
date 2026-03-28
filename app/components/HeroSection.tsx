"use client";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-primary overflow-hidden border-b border-white/5">
      <div className="mesh-bg" />
      <div className="noise-overlay" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black uppercase tracking-widest mb-10">
              <Shield size={14} />
              <span>Protección Legal 2026</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-10 gradient-heading tracking-tighter">
              Tus derechos <br />
              <span className="text-blue-500">no se detienen</span> <br />
              en la vía.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-dim max-w-lg mb-12 leading-relaxed font-bold opacity-80">
              IA especializada en tránsito, grabación judicial y consultas RUNT/SIMIT en segundos. Seguridad jurídica real para conductores.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5 mb-16">
              <button className="shimmer-btn bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 transition-all">
                Próximamente <ArrowRight size={18} />
              </button>
              <button className="px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs border border-white/10 hover:bg-white/5 transition-all flex items-center gap-3">
                Ver Demo <Play size={16} />
              </button>
            </motion.div>

            {/* SIMIT Runt Separated */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 opacity-30">
               <div className="text-[10px] font-black tracking-[0.4em] uppercase">Sincronizado con bases oficiales</div>
               <div className="flex gap-8 font-black italic text-3xl md:text-4xl tracking-tighter">SIMIT RUNT</div>
            </motion.div>
          </motion.div>

          {/* Smartphone Mockup - Clean and Centered */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative lg:ml-auto w-full max-w-[420px] mx-auto lg:mx-0"
          >
             <div className="relative mx-auto w-[280px] h-[580px] bg-slate-950 rounded-[3.5rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-30" />
                <div className="absolute inset-0 p-6 pt-16 flex flex-col gap-6 bg-gradient-to-b from-blue-900/10 to-transparent">
                   <div className="w-full h-10 bg-blue-500/10 rounded-2xl" />
                   <div className="p-5 rounded-3xl bg-blue-600/5 border border-white/5 shadow-inner">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg mb-4 shadow-lg shadow-blue-500/20" />
                      <div className="w-full h-2.5 bg-white/20 rounded-full mb-2" />
                      <div className="w-3/4 h-2.5 bg-white/10 rounded-full" />
                   </div>
                   <div className="flex-1" />
                   <div className="w-full h-14 bg-blue-600/80 rounded-2xl flex items-center justify-center font-black text-xs uppercase tracking-widest opacity-90 border border-white/5 shadow-xl">
                      Cargando IA...
                   </div>
                </div>
             </div>

             {/* Accents - Contained within parent */}
             <div className="absolute top-20 -right-4 md:-right-8 p-6 glow-card border-blue-500/30 bg-blue-600/10 shadow-3xl">
                <div className="text-blue-400 font-black text-3xl tracking-tighter">5s</div>
                <div className="text-[9px] font-black uppercase opacity-60 tracking-widest">Respuesta IA</div>
             </div>

             <div className="absolute bottom-20 -left-4 md:-left-8 p-6 glow-card border-purple-500/30 bg-purple-600/10 shadow-3xl">
                <div className="text-purple-400 font-black text-3xl tracking-tighter">100%</div>
                <div className="text-[9px] font-black uppercase opacity-60 tracking-widest">Validez Legal</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
