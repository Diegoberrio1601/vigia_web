"use client";
import { motion } from "framer-motion";
import { Zap, Lock, BookOpen, UserCheck, Shield, Globe } from "lucide-react";

const REASONS = [
  { icon: <Zap size={24} />, title: "Respuesta Inmediata", desc: "Información crítica en menos de 5 segundos, justo cuando más lo necesitas en la vía." },
  { icon: <Lock size={24} />, title: "Privacidad Blindada", desc: "Tus grabaciones y datos están cifrados de extremo a extremo, tú tienes el control total." },
  { icon: <BookOpen size={24} />, title: "Fuentes Oficiales", desc: "Datos extraídos directamente de bases oficiales RUNT, SIMIT y el Código Nacional de Tránsito." },
  { icon: <UserCheck size={24} />, title: "Lenguaje Claro", desc: "Traducimos términos jurídicos complejos a un lenguaje sencillo que cualquier ciudadano entiende." },
  { icon: <Shield size={24} />, title: "Disuación Efectiva", desc: "El conocimiento preventivo y la tecnología de grabación actúan como un escudo ante posibles abusos." },
  { icon: <Globe size={24} />, title: "ADN Colombiano", desc: "Desarrollada específicamente bajo el marco técnico y legal de nuestro país." }
];

export default function WhySection() {
  return (
    <section id="porque" className="py-24 md:py-40 bg-primary transition-colors duration-500 border-t border-border">
      <div className="container-wide">
        <div className="max-w-3xl mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-xs mb-6"
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
            ¿Por qué <span className="text-blue-600 dark:text-blue-500 text-italic italic">confiar</span> en nosotros?
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg md:text-xl text-text-muted font-medium leading-relaxed"
          >
            Combinamos tecnología de punta con la legislación vigente para ofrecerte la mayor seguridad preventiva del mercado colombiano.
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
