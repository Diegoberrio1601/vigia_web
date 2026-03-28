"use client";
import { Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-primary relative overflow-hidden">
      <div className="mesh-bg opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
           <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl italic text-white shadow-lg shadow-blue-500/20">V</div>
              <span className="text-2xl font-black italic tracking-tighter">VigIA</span>
           </div>
           <p className="text-dim text-sm max-w-sm mb-8 leading-relaxed">
              La plataforma de LegalTech líder en Colombia para el empoderamiento y protección de conductores en todo el territorio nacional. Tus derechos son nuestra prioridad.
           </p>
        </div>

        {/* Links */}
        <div>
           <h4 className="font-bold text-sm uppercase tracking-widest mb-6 opacity-60">Enlaces rápidos</h4>
           <div className="space-y-3 flex flex-col">
              <a href="#hero" className="text-dim hover:text-white transition-all text-sm w-fit">Inicio</a>
              <a href="#funciones" className="text-dim hover:text-white transition-all text-sm w-fit">Funcionalidades</a>
              <a href="#legal" className="text-dim hover:text-white transition-all text-sm w-fit">Marco Legal</a>
              <a href="#porque" className="text-dim hover:text-white transition-all text-sm w-fit">Por qué VigIA</a>
           </div>
        </div>

        {/* Legal Notice */}
        <div>
           <h4 className="font-bold text-sm uppercase tracking-widest mb-6 opacity-60">Aviso Legal</h4>
           <p className="text-[10px] text-dim leading-relaxed uppercase opacity-40">
              VigIA es una herramienta informativa. El uso de la información suministrada es responsabilidad del usuario. No reemplaza la asesoría de un abogado.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-dim font-bold uppercase tracking-widest">
         <div>© {currentYear} VigIA Colombia. Todos los derechos reservados.</div>
         <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors">Términos</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Contáctanos</a>
         </div>
      </div>
    </footer>
  );
}
