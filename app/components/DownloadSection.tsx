"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Briefcase, TrendingUp } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="descargar" className="relative py-32 md:py-48 overflow-hidden bg-secondary dark:bg-muted transition-colors duration-500">
      {/* Background with Dark Theme forced for impact */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-transparent blur-[120px]" />
      </div>
      
      <div className="container-wide text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[12px] font-bold uppercase tracking-widest mb-12"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Lanzamiento 2026
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-text-main">
            No esperes al siguiente retén <br />
            <span className="text-blue-600 dark:text-blue-500">para conocer tus derechos.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-muted font-medium mb-12 leading-relaxed">
            Toma el control de tu seguridad hoy mismo. Descarga el escudo que el sistema no quiere que tengas y empieza a conducir con la verdad de tu lado.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* App Store Badge - Official Style */}
          <button className="group relative h-[60px] w-[180px] transition-transform hover:scale-105 active:scale-95 grayscale opacity-50 cursor-not-allowed">
            <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <rect width="135" height="40" rx="6.4" fill="black" />
              <path d="M18.15 22.75c-.03 2.5 2.1 3.71 2.13 3.73-.01.05-.33 1.14-1.1 2.26-.66.97-1.35 1.93-2.43 1.95-1.07.02-1.41-.63-2.63-.63-1.23 0-1.6.61-2.63.65-1.03.04-1.83-1.05-2.5-2.02-1.37-1.97-2.42-5.58-1.01-8.03.7-1.22 1.96-1.99 3.23-2.01 1.01-.02 1.96.68 2.58.68.61 0 1.76-.84 2.94-.72.49.02 1.88.2 2.78 1.51-.07.04-1.66.97-1.65 2.8s-.01.01-.01.01zM15.42 16.94c.54-.66.9-1.57.8-2.48-.78.03-1.73.52-2.29 1.18-.5.58-.94 1.51-.82 2.4.87.07 1.77-.45 2.31-1.1z" fill="white" />
              <text x="35" y="18" fill="white" fontSize="7" fontWeight="500" fontFamily="sans-serif">Download on the</text>
              <text x="35" y="32" fill="white" fontSize="14" fontWeight="600" fontFamily="sans-serif">App Store</text>
            </svg>
          </button>

          {/* Google Play Badge - Official Style */}
          <button className="group relative h-[60px] w-[202px] transition-transform hover:scale-105 active:scale-95 grayscale opacity-50 cursor-not-allowed">
            <svg viewBox="0 0 151 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <rect width="151" height="40" rx="6.4" fill="black" />
              <path d="M12.5 10L12.5 30L26 20L12.5 10Z" fill="#00E676" />
              <path d="M12.5 10L22 19L26 20L12.5 10Z" fill="#4DB6AC" />
              <path d="M12.5 30L22 21L26 20L12.5 30Z" fill="#388E3C" />
              <path d="M12.5 10L10 12.5V27.5L12.5 30V10Z" fill="#FFD54F" />
              <text x="35" y="18" fill="white" fontSize="7" fontWeight="500" fontFamily="sans-serif">GET IT ON</text>
              <text x="35" y="32" fill="white" fontSize="14" fontWeight="600" fontFamily="sans-serif">Google Play</text>
            </svg>
          </button>
        </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-24 md:mt-32 max-w-5xl mx-auto"
         >
            <div className="flex flex-col items-center mb-16">
               <h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tight text-text-main">
                 Únete a la <span className="text-blue-600">misión</span>
               </h3>
               <p className="text-text-muted font-medium max-w-xl">
                 Estamos construyendo el futuro del derecho preventivo en las vías colombianas. ¿Quieres formar parte del cambio?
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               {/* Careers */}
               <a 
                 href="mailto:diegoberrio1601@gmail.com?subject=Interés en unirme al equipo de VigIA" 
                 className="group p-10 glow-card flex flex-col gap-8 bg-primary/40"
               >
                  <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-600 w-fit group-hover:scale-110 transition-transform duration-500">
                     <Briefcase size={28} />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold text-text-main group-hover:text-blue-600 transition-colors">Trabaja con Nosotros</h4>
                     <p className="text-text-muted font-medium leading-relaxed">
                        Buscamos abogados, desarrolladores y activistas apasionados por la justicia y la tecnología. Envíanos tu perfil.
                     </p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-border flex items-center justify-between text-blue-600 font-bold uppercase tracking-widest text-[10px]">
                     <span>Enviar Perfil</span>
                     <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
               </a>

               {/* Investment */}
               <a 
                 href="mailto:diegoberrio1601@gmail.com?subject=Consulta sobre inversión / alianzas con VigIA" 
                 className="group p-10 glow-card flex flex-col gap-8 bg-primary/40"
               >
                  <div className="p-4 rounded-2xl bg-emerald-600/10 text-emerald-600 w-fit group-hover:scale-110 transition-transform duration-500">
                     <TrendingUp size={28} />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-2xl font-bold text-text-main group-hover:text-emerald-600 transition-colors">Inversión y Alianzas</h4>
                     <p className="text-text-muted font-medium leading-relaxed">
                        Buscamos socios estratégicos e inversionistas que compartan nuestra visión de escalabilidad e impacto ciudadano.
                     </p>
                  </div>
                  <div className="mt-auto pt-6 border-t border-border flex items-center justify-between text-emerald-600 font-bold uppercase tracking-widest text-[10px]">
                     <span>Contactar Socios</span>
                     <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
               </a>
            </div>
         </motion.div>
      </div>
    </section>
  );
}
