"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Qué es VigIA", href: "#que-es" },
  { label: "Funciones", href: "#funciones" },
  { label: "Marco Legal", href: "#legal" },
  { label: "Puede / No puede", href: "#limites" },
  { label: "Por qué usarla", href: "#porque" },
  { label: "Descargar", href: "#descargar" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(15,23,42,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "10px",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 800,
              color: "#fff",
              boxShadow: "0 0 18px rgba(99,102,241,0.5)",
              flexShrink: 0,
            }}
          >
            V
          </div>
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VigIA
          </span>
        </Link>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "0.25rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "var(--text-secondary)",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  padding: "6px 14px",
                  borderRadius: "8px",
                  transition: "all 0.2s ease",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#fff";
                  (e.target as HTMLElement).style.background = "rgba(99,102,241,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "var(--text-secondary)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#descargar"
          id="nav-cta"
          style={{
            textDecoration: "none",
            background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            color: "#fff",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 600,
            fontSize: "0.875rem",
            padding: "9px 22px",
            borderRadius: "50px",
            boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(-2px)";
            (e.target as HTMLElement).style.boxShadow = "0 8px 30px rgba(99,102,241,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(0)";
            (e.target as HTMLElement).style.boxShadow = "0 4px 20px rgba(99,102,241,0.35)";
          }}
          className="hidden-mobile"
        >
          Descargar App →
        </a>

        {/* Hamburger */}
        <button
          id="menu-toggle"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          className="show-mobile"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: "#94a3b8",
                borderRadius: 2,
                transition: "all 0.3s",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(15,23,42,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            padding: "1.5rem 2rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                textDecoration: "none",
                color: "var(--text-secondary)",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#descargar"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "1rem",
              textDecoration: "none",
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              color: "#fff",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "10px 24px",
              borderRadius: "50px",
            }}
          >
            Descargar App →
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
