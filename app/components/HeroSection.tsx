"use client";
import { motion, Variants } from "framer-motion";
import { Shield, ArrowRight, Video, Search, Car } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 bg-primary transition-colors duration-500" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[12px] font-bold uppercase tracking-wider mb-8">
              <div className="relative w-4 h-4 overflow-hidden rounded-[4px]">
                <Image src="/logo-vigia.png" alt="VigIA Logo Mark" fill sizes="16px" className="object-cover" />
              </div>
              <span>Tu Escudo Legal en la Vía</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-text-main">
              Que el desconocimiento <br />
              <span className="text-blue-600 dark:text-blue-500">no sea el beneficio</span> <br />
              del abuso.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-muted max-w-xl mb-12 leading-relaxed font-medium">
              En la escuela no te enseñaron tus derechos, y de eso se aprovechan. VigIA te entrega el conocimiento real de la norma colombiana para que conduzcas protegido, consciente y con la ley de tu lado.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <Link 
                href="#descargar"
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-1 active:translate-y-0 flex items-center gap-3"
              >
                Protégeme ahora <ArrowRight size={20} />
              </Link>
              <button className="px-8 py-4 rounded-2xl border border-border bg-card/50 hover:bg-secondary text-text-main font-bold text-lg transition-all">
                Ver mis derechos
              </button>
            </motion.div>

            {/* Core Pillars */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-border w-full">
               <div className="flex flex-col gap-2">
                  <Video className="text-blue-600 dark:text-blue-500 w-6 h-6" />
                  <div className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Evidencia</div>
                  <div className="text-sm font-black text-text-main italic uppercase tracking-tighter">Incontestable</div>
               </div>
               <div className="flex flex-col gap-2">
                  <Search className="text-blue-600 dark:text-blue-500 w-6 h-6" />
                  <div className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Estado Legal</div>
                  <div className="text-sm font-black text-text-main italic uppercase tracking-tighter">Real e Inmediato</div>
               </div>
               <div className="flex flex-col gap-2">
                  <Car className="text-blue-600 dark:text-blue-500 w-6 h-6" />
                  <div className="text-[11px] font-bold uppercase tracking-widest text-text-muted">Control</div>
                  <div className="text-sm font-black text-text-main italic uppercase tracking-tighter">Documental</div>
               </div>
            </motion.div>
          </motion.div>

          {/* Smartphone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="relative lg:ml-auto w-full max-w-[450px]"
          >
             {/* Floating Effect Wrapper */}
             <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10"
             >
                <div className="relative mx-auto w-[280px] h-[580px] bg-mockup-bg rounded-[3.5rem] border-[10px] border-mockup-frame shadow-2xl overflow-hidden ring-1 ring-white/10">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-mockup-frame rounded-b-2xl z-30 flex items-center justify-center">
                      <div className="w-10 h-1 rounded-full bg-slate-400 dark:bg-slate-800" />
                   </div>
                   
                   <div className="absolute inset-0 p-6 pt-16 flex flex-col gap-4 bg-gradient-to-b from-blue-600/10 to-indigo-600/10">
                      {/* App Mockup UI */}
                      <div className="w-full h-8 bg-black/20 dark:bg-white/5 rounded-xl border border-white/5" />
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20">
                          <div className="relative w-8 h-8 rounded-lg overflow-hidden mb-3">
                            <Image src="/logo-vigia.png" alt="VigIA App Icon" fill sizes="32px" className="object-cover shadow-lg" />
                          </div>
                          <div className="w-full h-2 bg-slate-300 dark:bg-white/20 rounded-full mb-1.5" />
                          <div className="w-2/3 h-2 bg-slate-200 dark:bg-white/10 rounded-full" />
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                          <div className="w-full h-2 bg-slate-200 dark:bg-white/20 rounded-full mb-1.5" />
                          <div className="w-1/2 h-2 bg-slate-100 dark:bg-white/10 rounded-full" />
                        </div>
                      </div>
                      <div className="mt-auto p-4 rounded-2xl bg-red-600/90 text-white font-bold text-[10px] uppercase tracking-widest text-center shadow-lg shadow-red-600/20 border border-white/10">
                        Grabación Iniciada
                      </div>
                   </div>
                </div>

                {/* Floating Tags */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -top-6 -right-6 p-4 rounded-2xl bg-card border border-border shadow-2xl z-20 flex flex-col gap-1"
                >
                  <div className="text-blue-600 text-xs font-black uppercase tracking-widest">Estado</div>
                  <div className="text-text-main font-bold text-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Protegido
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute bottom-12 -left-12 p-4 rounded-2xl bg-card border border-border shadow-2xl z-20"
                >
                  <div className="flex gap-4">
                    <div className="flex flex-col">
                      <div className="text-text-muted text-[10px] font-black uppercase tracking-widest">RUNT</div>
                      <div className="text-text-main font-black text-xl italic uppercase tracking-tighter leading-none">OK</div>
                    </div>
                    <div className="w-[1px] h-full self-stretch bg-border" />
                    <div className="flex flex-col">
                      <div className="text-text-muted text-[10px] font-black uppercase tracking-widest">SIMIT</div>
                      <div className="text-text-main font-black text-xl italic uppercase tracking-tighter leading-none">Activo</div>
                    </div>
                  </div>
                </motion.div>
             </motion.div>

             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/5 dark:bg-blue-600/10 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
