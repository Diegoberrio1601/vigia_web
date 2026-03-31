"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Qué es VigIA", href: "#que-es" },
  { label: "Funciones", href: "#funciones" },
  { label: "Marco Legal", href: "#legal" },
  { label: "Saber más", href: "#limites" },
  { label: "Por qué", href: "#porque" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-scrolled={scrolled}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent data-[scrolled=true]:bg-white/80 dark:data-[scrolled=true]:bg-primary/80 data-[scrolled=true]:backdrop-blur-xl data-[scrolled=true]:border-border py-4"
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
           <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white shadow-lg shadow-blue-500/20">V</div>
           <span className="text-2xl font-black tracking-tighter text-text-main">VigIA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-secondary/50 dark:bg-muted/50 border border-border backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="px-5 py-2 rounded-xl text-sm font-bold text-text-muted hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-white/5 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link 
            href="#descargar"
            className="hidden sm:flex px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 items-center gap-2 group"
          >
            Descargar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* Mobile Toggle */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-secondary dark:bg-muted text-text-muted"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-primary overflow-hidden"
          >
            <div className="container-wide py-8 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 rounded-2xl bg-secondary dark:bg-muted text-lg font-bold text-text-main"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="#descargar"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-6 py-5 rounded-2xl bg-blue-600 text-white font-bold text-center text-lg shadow-xl shadow-blue-600/20"
              >
                Comenzar ahora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
