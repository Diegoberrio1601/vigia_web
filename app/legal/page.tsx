import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { Shield, FileText, Scale, Database, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface DocumentMeta {
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
  color: string;
}

const DOCUMENTS: DocumentMeta[] = [
  {
    title: "Términos y Condiciones",
    description: "Las reglas del juego. Entiende tus derechos y responsabilidades al usar VigIA.",
    slug: "terminos-y-condiciones",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    color: "blue"
  },
  {
    title: "Política de Privacidad",
    description: "Cómo protegemos tu información y el por qué tus grabaciones son solo tuyas.",
    slug: "politica-de-privacidad",
    icon: <Shield className="w-8 h-8 text-indigo-600" />,
    color: "indigo"
  },
  {
    title: "Política de Tratamiento de Datos",
    description: "Nuestro compromiso con la Ley 1581 (Habeas Data) y la transparencia total.",
    slug: "politica-tratamiento-datos",
    icon: <Database className="w-8 h-8 text-emerald-600" />,
    color: "emerald"
  }
];

export const metadata: Metadata = {
  title: "Marco Legal – VigIA",
  description: "Conoce los fundamentos legales, términos de servicio y políticas de privacidad de VigIA. Transparencia total para el conductor colombiano.",
  alternates: {
    canonical: "/legal",
  },
};

export default function LegalPage() {
  return (
    <div className="relative min-h-screen bg-primary">
      <Navbar />
      
      <main className="container-wide py-32 md:py-48 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-4 text-center md:text-left">
            <div className="relative w-16 h-16 mb-8 mx-auto md:mx-0 shadow-2xl shadow-blue-500/20 rounded-2xl overflow-hidden">
               <Image src="/logo-vigia.png" alt="VigIA Logo" fill sizes="64px" className="object-cover" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-text-main">
              Marco <span className="text-blue-600">Legal</span>
            </h1>
            <p className="text-xl text-text-muted font-medium max-w-2xl leading-relaxed">
              VigIA es una herramienta diseñada bajo los más altos estándares de transparencia y legalidad en Colombia. Aquí puedes consultar nuestros documentos oficiales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DOCUMENTS.map((doc) => (
              <Link 
                key={doc.slug} 
                href={`/legal/${doc.slug}`}
                className="group p-8 md:p-10 glow-card flex flex-col gap-8"
              >
                <div className="p-4 rounded-2xl bg-primary dark:bg-muted w-fit shadow-sm group-hover:scale-110 transition-transform duration-500 border border-border">
                  {doc.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-blue-600 transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-text-muted font-medium leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-xs">
                  <span>Leer Documento</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-secondary/50 border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm">
             <div className="p-5 rounded-full bg-blue-600/10 text-blue-600">
                <Scale size={32} />
             </div>
             <div className="space-y-2 text-center md:text-left">
                <h4 className="text-xl font-bold text-text-main italic">"La ignorancia de la ley no sirve de excusa."</h4>
                <p className="text-text-muted font-medium">
                  Art. 9 del Código Civil Colombiano. VigIA te ayuda a que esa ignorancia no sea una barrera.
                </p>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
