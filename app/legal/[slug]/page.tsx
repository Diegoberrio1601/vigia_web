import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Calendar, ShieldCheck, Clock } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MarkdownRenderer from "../../components/MarkdownRenderer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const FILE_MAP: Record<string, string> = {
  "terminos-y-condiciones": "TERMINOS_Y_CONDICIONES.md",
  "politica-de-privacidad": "POLITICA_DE_PRIVACIDAD.md",
  "politica-tratamiento-datos": "POLITICA_TRATAMIENTO_DATOS.md",
};

export default async function LegalDocPage({ params }: PageProps) {
  const { slug } = await params;
  const fileName = FILE_MAP[slug];

  if (!fileName) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "doc", "legal", fileName);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf8");

  // Simple extraction of the first H1 for the title (if exists)
  const titleMatch = content.match(/^# (.*)$/m);
  const title = titleMatch ? titleMatch[1] : "Documento Legal";

  return (
    <div className="relative min-h-screen bg-primary">
      <Navbar />

      <main className="container-wide py-32 md:py-48 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link 
            href="/legal" 
            className="group flex items-center gap-2 text-text-muted hover:text-blue-600 transition-colors font-bold uppercase tracking-widest text-xs mb-12"
          >
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Volver a Legal
          </Link>

          {/* Header */}
          <div className="mb-16 space-y-8">
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-main">
              {title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-[10px] uppercase font-bold tracking-widest text-text-muted">
               <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-border">
                  <Clock size={12} className="text-blue-600" />
                  <span>Lectura: ~5 min</span>
               </div>
               <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-border">
                  <Calendar size={12} className="text-blue-600" />
                  <span>Vigencia: 2026</span>
               </div>
               <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-border">
                  <ShieldCheck size={12} className="text-blue-600" />
                  <span>Documento Oficial</span>
               </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="p-8 md:p-16 bg-secondary/30 border border-border rounded-[2.5rem] shadow-sm relative overflow-hidden backdrop-blur-sm">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10 rounded-full" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 blur-[100px] -z-10 rounded-full" />
             
             <MarkdownRenderer content={content} />
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-20 p-10 bg-blue-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-600/20">
             <div className="space-y-2 text-center md:text-left">
                <h4 className="text-2xl font-black">¿Dudas sobre este documento?</h4>
                <p className="font-medium opacity-90">Nuestro equipo legal está atento a tus inquietudes.</p>
             </div>
             <a 
              href="mailto:legal@vigia.app" 
              className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all active:scale-95 shadow-lg"
             >
                Contactar Legal
             </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
