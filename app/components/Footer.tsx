"use client";
import { Shield } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 bg-secondary border-t border-border transition-colors duration-500">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-500/20">V</div>
                <span className="text-2xl font-black tracking-tighter text-text-main">VigIA</span>
             </div>
             <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-10">
              VigIA democratiza el acceso a la ley colombiana. Nuestra misión es empoderar al ciudadano con conocimiento real para prevenir abusos en la vía y garantizar el debido proceso.
            </p>
          </div>

          {/* Links */}
          <div>
             <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-text-main">Navegación</h4>
             <ul className="space-y-4">
                <li><Link href="#hero" className="text-text-muted hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-medium">Inicio</Link></li>
                <li><Link href="#funciones" className="text-text-muted hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-medium">Funcionalidades</Link></li>
                <li><Link href="#legal" className="text-text-muted hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-medium">Marco Legal</Link></li>
                <li><Link href="#porque" className="text-text-muted hover:text-blue-600 dark:hover:text-blue-500 transition-colors font-medium">Por qué VigIA</Link></li>
             </ul>
          </div>

          {/* Legal Notice */}
          <div>
             <h4 className="font-bold text-sm uppercase tracking-widest mb-8 text-text-main">Aviso Legal</h4>
             <p className="text-xs text-text-muted leading-relaxed font-medium italic">
                VigIA es una herramienta informativa técnica. No reemplaza la asesoría personalizada de un abogado profesional colegiado.
             </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-xs font-bold uppercase tracking-widest text-text-muted">
             © {currentYear} VigIA Colombia. Todos los derechos reservados.
           </div>
           <div className="flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-text-muted">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Términos</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Contacto</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
