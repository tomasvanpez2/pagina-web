"use client";

import React, { useEffect, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Header() {
  const [time, setTime] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "UTC",
        }) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand & Studio Location */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              data-cursor="pointer"
              className="group flex items-baseline gap-2 text-sm font-mono tracking-[0.18em] uppercase text-[#f5f5f3] hover:text-white transition-colors"
            >
              <span className="font-semibold">[Nombre del Estudio]</span>
              <span className="text-[10px] text-[#8e8e93] font-normal hidden sm:inline">
                ©2026
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-[#8e8e93] border-l border-white/[0.08] pl-6 tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>[Ciudad, País]</span>
              <span className="text-[#55555a]">•</span>
              <span className="text-[#f5f5f3]/80 tabular-nums">
                {time || "00:00:00 UTC"}
              </span>
            </div>
          </div>

          {/* Minimal Desktop Navigation */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-8 text-[12px] font-mono uppercase tracking-[0.2em] text-[#8e8e93]"
          >
            <a
              href="#servicios"
              data-cursor="pointer"
              className="hover:text-[#f5f5f3] transition-colors relative py-1"
            >
              Servicios
            </a>
            <a
              href="#archivo"
              data-cursor="pointer"
              className="hover:text-[#f5f5f3] transition-colors relative py-1"
            >
              Archivo
            </a>
            <a
              href="#proceso"
              data-cursor="pointer"
              className="hover:text-[#f5f5f3] transition-colors relative py-1"
            >
              Proceso
            </a>
            <a
              href="#contacto"
              data-cursor="pointer"
              className="hover:text-[#f5f5f3] transition-colors relative py-1"
            >
              Contacto
            </a>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <span className="hidden xl:inline text-[11px] font-mono text-[#8e8e93] tracking-wider uppercase">
              Disponibilidad: <span className="text-white">[Q2/Q3 2026]</span>
            </span>

            <div className="hidden sm:block">
              <MagneticButton
                href="#contacto"
                strength={0.25}
                className="px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.04] text-[11px] font-mono uppercase tracking-[0.2em] text-[#f5f5f3] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Iniciar Conversación
              </MagneticButton>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <span
                className={`w-4 h-[1px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-1"
                }`}
              />
              <span
                className={`w-4 h-[1px] bg-white transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-[0px]" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú móvil"
          className="fixed inset-0 z-30 md:hidden bg-[#080808]/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-28"
        >
          <nav className="flex flex-col gap-6 text-xl font-serif text-[#f5f5f3]">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/[0.08] pb-4 flex justify-between items-baseline"
            >
              <span>Servicios</span>
              <span className="text-xs font-mono text-[#8e8e93]">01 //</span>
            </a>
            <a
              href="#archivo"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/[0.08] pb-4 flex justify-between items-baseline"
            >
              <span>Archivo de Trabajos</span>
              <span className="text-xs font-mono text-[#8e8e93]">02 //</span>
            </a>
            <a
              href="#proceso"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/[0.08] pb-4 flex justify-between items-baseline"
            >
              <span>Metodología</span>
              <span className="text-xs font-mono text-[#8e8e93]">03 //</span>
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-white/[0.08] pb-4 flex justify-between items-baseline"
            >
              <span>Contacto Directo</span>
              <span className="text-xs font-mono text-[#8e8e93]">04 //</span>
            </a>
          </nav>

          <div className="space-y-4 pt-6 border-t border-white/[0.08] text-xs font-mono">
            <div className="text-[#8e8e93]">
              ESTADO: <span className="text-emerald-400">DISPONIBLE Q2/Q3 [2026]</span>
            </div>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-4 rounded-full bg-white text-black text-center uppercase tracking-[0.2em] font-medium"
            >
              Iniciar Conversación
            </a>
          </div>
        </div>
      )}
    </>
  );
}
