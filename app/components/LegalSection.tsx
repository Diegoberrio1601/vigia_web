"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Scale, Gavel, Book } from "lucide-react";

export default function LegalSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const LAWS = [
    { 
      id: "art21", 
      title: "Ley 1801 de 2016 · Art. 21", 
      text: "TODO ciudadano tiene derecho a grabar los procedimientos de policía. Nadie puede impedirlo segun la corte constitucional.", 
      icon: <Scale className="text-blue-500" />, 
      parallax: y1 
    },
    { 
      id: "codigo", 
      title: "Ley 769 de 2002", 
      text: "Código Nacional de Tránsito Terrestre. La biblia del conductor en Colombia actualizada para 2026.", 
      icon: <Book className="text-blue-500" />, 
      parallax: y2 
    },
    { 
      id: "constitucion", 
      title: "Constitución Política", 
      text: "Debido proceso (Art. 29) y el derecho fundamental a la defensa ante las autoridades.", 
      icon: <Gavel className="text-blue-500" />, 
      parallax: y3 
    }
  ];

  return (
    <section id="legal" ref={containerRef} className="section-padding relative bg-secondary overflow-hidden border-t border-white/5">
      <div className="container-wide">
        <div className="text-center mb-24 md:mb-36">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8"
          >
            Sustento Normativo
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 gradient-heading tracking-tighter"
          >
            Tus Derechos son la Ley.
          </motion.h2>
          <p className="text-dim text-lg md:text-xl max-w-xl mx-auto font-black italic opacity-80 leading-relaxed">
            VigIA es una herramienta técnica basada estrictamente en la legislación colombiana vigente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {LAWS.map((law, idx) => (
            <motion.div
              key={idx}
              style={{ y: law.parallax }}
              className="glow-card p-12 lg:p-14 flex flex-col gap-12 bg-slate-900 border-none shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              <div className="p-6 rounded-[2rem] bg-blue-500/10 w-fit border border-blue-500/20 shadow-xl">
                {law.icon}
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black tracking-tight uppercase italic text-white/90">{law.title}</h3>
                <p className="text-dim leading-relaxed font-black text-sm md:text-md italic opacity-90 border-l-4 border-blue-500/40 pl-6">
                  "{law.text}"
                </p>
              </div>
              <div className="pt-10 border-t border-white/5 mt-auto">
                 <div className="text-[10px] uppercase font-black tracking-[0.4em] text-blue-500/40">Sincronización Legal 2026</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
