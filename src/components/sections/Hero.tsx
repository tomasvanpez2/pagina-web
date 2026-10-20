"use client";

import React from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import ClientScene from "@/components/three/ClientScene";

interface HeroProps {
  children3D?: React.ReactNode;
}

export default function Hero({ children3D }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
      {/* 3D Scene Layer (Positioned asymmetrically on the right) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="relative w-full h-full max-w-[1600px] mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full md:w-3/5 lg:w-1/2 h-[500px] lg:h-[700px] pointer-events-auto">
            {children3D ?? <ClientScene />}
          </div>
        </div>
      </div>

      {/* Top Editorial Index & Spatial Framing */}
      <div data-hero-meta className="relative z-10 max-w-[1600px] mx-auto w-full pt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.25em] uppercase text-[#8e8e93]">
            <span className="text-[#f5f5f3] font-semibold">001 //</span>
            <span>MANIFIESTO DE ARRANQUE</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-mono tracking-[0.2em] uppercase text-[#8e8e93]">
            <span>EDICIÓN ARCHIVO [2026]</span>
            <span className="text-[#55555a] hidden sm:inline">•</span>
            <span className="hidden sm:inline">DISCIPLINA: DESARROLLO CREATIVO & GLSL</span>
          </div>
        </div>
      </div>

      {/* Main Asymmetric Headline & Spatial Tension */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full my-auto py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Title Container - Spans 10 columns for visceral impact */}
          <div className="lg:col-span-10 xl:col-span-9">
            <h1 data-hero-headline className="font-serif text-[clamp(2.8rem,7vw,7.6rem)] font-light leading-[0.94] tracking-[-0.03em] text-[#f5f5f3]">
              Tu negocio merece una web{" "}
              <span className="italic font-normal text-white underline decoration-white/20 underline-offset-8">
                extraordinaria.
              </span>
            </h1>
          </div>

          {/* Asymmetric Side Note */}
          <div data-hero-meta className="lg:col-span-2 xl:col-span-3 lg:pb-4 flex flex-col items-start gap-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#55555a]">
              [ESTÁNDAR: QUIET LUXURY]
            </span>
            <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#8e8e93] leading-relaxed max-w-[280px]">
              Rechazamos lo ordinario. Forjamos plataformas digitales que transforman percepción en autoridad incuestionable.
            </p>
          </div>
        </div>

        {/* Narrative Paragraph & Secondary CTA Hook */}
        <div data-hero-desc className="mt-16 pt-10 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 lg:col-span-4">
            <p className="text-sm md:text-base font-light text-[#8e8e93] leading-relaxed">
              En <strong className="text-white font-medium">[Nombre del Estudio]</strong> fusionamos dirección de arte avant-garde, shaders 3D en tiempo real y arquitectura de software de ultra-alta velocidad para empresas que lideran su categoría.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 md:pl-8">
            <div className="flex flex-col gap-1 text-[11px] font-mono uppercase tracking-widest text-[#55555a]">
              <span>TIEMPO MEDIO DE ENTREGA: <strong className="text-white font-normal">[4 - 8 SEMANAS]</strong></span>
              <span>STACK CERTIFICADO: <strong className="text-white font-normal">NEXT.JS • R3F • GSAP</strong></span>
            </div>

            <div className="flex items-center gap-4">
              <MagneticButton
                href="#archivo"
                strength={0.3}
                dataCursor="view"
                className="px-7 py-3 rounded-full bg-white text-black font-mono text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#eae6df] transition-all"
              >
                Explorar Trabajos
              </MagneticButton>
              <MagneticButton
                href="#contacto"
                strength={0.25}
                className="px-6 py-3 rounded-full border border-white/20 text-xs font-mono uppercase tracking-[0.2em] text-[#f5f5f3] hover:border-white transition-all"
              >
                Hablar con el Lead
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] font-mono tracking-[0.25em] uppercase text-[#55555a]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            MOTOR: 60FPS STABLE
          </span>
          <span>•</span>
          <span>GPU ACCELERATED PIPELINE</span>
        </div>
        <div className="flex items-center gap-3 text-[#8e8e93]">
          <span>SCROLL DOWN PARA DESCUBRIR</span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
}
