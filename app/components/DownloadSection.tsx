"use client";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

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

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9] text-text-main"
        >
          Tu respaldo legal <br /> 
          siempre <span className="text-blue-600 dark:text-blue-500 italic">contigo.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-2xl text-text-muted max-w-3xl mx-auto mb-20 leading-relaxed font-medium"
        >
          Sé de los primeros en experimentar la seguridad jurídica nivel experto. VigIA estará disponible pronto para iOS y Android.
        </motion.p>

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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-24 flex flex-col items-center gap-6"
         >
            <p className="text-text-muted font-bold uppercase tracking-widest text-xs">O únete a la lista de espera</p>
            <form className="flex w-full max-w-md p-1.5 rounded-2xl bg-primary dark:bg-card border border-border backdrop-blur-md">
               <input 
                 type="email" 
                 placeholder="tu@email.com" 
                 className="flex-1 bg-transparent px-4 py-3 outline-none text-text-main placeholder:text-text-muted"
               />
               <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center gap-2">
                  <Mail size={18} />
                  <span>Avisarme</span>
               </button>
            </form>
         </motion.div>
      </div>
    </section>
  );
}
