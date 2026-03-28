"use client";
import { motion } from "framer-motion";
import { MessageSquare, Shield, CheckCircle } from "lucide-react";

export default function InteractiveMockup() {
  return (
    <section id="demo" className="section-padding relative overflow-hidden bg-primary py-32 md:py-48">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Chat Side (Left) */}
          <div className="relative order-2 lg:order-1">
             <div className="absolute -inset-20 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative p-10 md:p-14 glow-card rounded-[4rem] border border-white/5 shadow-3xl bg-slate-950/90"
             >
                {/* Chat UI */}
                <div className="flex items-center gap-6 mb-12 pb-8 border-b border-white/10">
                   <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                      <MessageSquare size={32} className="text-white" />
                   </div>
                   <div>
                      <div className="font-black text-2xl tracking-tight">VigIA AI Legal</div>
                      <div className="text-[11px] text-emerald-400 flex items-center gap-2 font-black uppercase tracking-[0.2em] mt-1">
                         <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" /> En línea
                      </div>
                   </div>
                </div>

                <div className="space-y-8 mb-12">
                   <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.5 }}
                     className="p-8 rounded-[2rem] bg-slate-900 border border-white/5 max-w-[90%] ml-auto shadow-xl"
                   >
                      <p className="text-lg text-slate-100 font-bold tracking-tight">¿Pueden inmovilizar mi vehículo por no cargar el SOAT físico si lo tengo digital?</p>
                   </motion.div>

                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 2 }}
                     className="p-10 rounded-[2.5rem] bg-blue-600/10 border border-blue-500/20 max-w-full shadow-3xl"
                   >
                      <div className="flex gap-3 items-center mb-6">
                         <Shield size={18} className="text-blue-500" />
                         <span className="text-xs uppercase font-black text-blue-500 tracking-[0.3em] font-mono">Respuesta Jurídica</span>
                      </div>
                      <p className="text-xl md:text-2xl text-white font-black leading-tight mb-4">
                         No, no procede inmovilización.
                      </p>
                      <p className="text-md text-dim leading-relaxed font-bold opacity-80">
                         Según la Circular del Ministerio de Transporte y leyes 2026, el SOAT digital tiene la misma validez que el físico. Cite la Ley 2050 de 2020.
                      </p>
                   </motion.div>
                </div>

                <div className="w-full h-16 bg-black rounded-3xl flex items-center px-10 text-dim text-xs font-black italic border border-white/5 shadow-inner">
                   <div className="flex gap-2.5 mr-6 opacity-30">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                   </div>
                   <span className="uppercase tracking-[0.4em] opacity-40">Analizando Jurisprudencia...</span>
                </div>
             </motion.div>
          </div>

          {/* Text Side (Right) */}
          <div className="order-1 lg:order-2">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-12"
             >
                <div className="text-blue-500 font-black uppercase tracking-[0.4em] text-[11px]">Eficacia Inmediata</div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black gradient-heading tracking-tighter leading-[0.9] mb-12">
                   Tus derechos <br /> en 5 segundos.
                </h2>
                <div className="space-y-12">
                   {[
                      { 
                         title: "Respuesta al Instante", 
                         text: "Análisis del Código Nacional de Tránsito y toda la jurisprudencia en tiempo real.", 
                         icon: <CheckCircle className="text-blue-500" /> 
                      },
                      { 
                         title: "Citas Legales Directas", 
                         text: "Te entregamos la ley exacta para que hables con propiedad frente a la autoridad.", 
                         icon: <CheckCircle className="text-blue-500" /> 
                      }
                   ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        className="flex gap-10 group"
                      >
                         <div className="mt-2.5 p-1.5 rounded-full bg-blue-500/10 h-fit transition-transform group-hover:scale-125">
                            {item.icon}
                         </div>
                         <div className="space-y-3">
                            <h4 className="font-black text-2xl md:text-3xl tracking-tighter text-white">{item.title}</h4>
                            <p className="text-dim text-lg md:text-xl font-bold opacity-80 leading-relaxed">{item.text}</p>
                         </div>
                      </motion.div>
                   ))}
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
