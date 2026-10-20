"use client";

import React from "react";
import HairlineDivider from "@/components/ui/HairlineDivider";

export default function Manifesto() {
  return (
    <section id="manifesto-section" className="relative w-full py-28 px-6 md:px-12 bg-[#080808] border-t border-white/[0.08]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <HairlineDivider
          label="002 // FILOSOFÍA DE PRODUCCIÓN"
          sublabel="EL FIN DE LAS PLANTILLAS GENÉRICAS"
        />

        {/* Asymmetrical Grid Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          {/* Left Column: Technical Annotation */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8e8e93]">
                [DIAGNÓSTICO DEL MERCADO]
              </span>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#8e8e93] leading-relaxed">
                El 94% de las webs corporativas actuales son intercambiables: la misma grilla predecible, los mismos componentes clonados y la misma ausencia de alma.
              </p>
              <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#55555a] leading-relaxed">
                Nosotros concebimos cada interfaz como un objeto de alta relojería: cada milisegundo de animación, cada transición de cámara y cada pixel responde a un propósito narrativo premeditado.
              </p>
            </div>

            <div className="pt-12 border-t border-white/[0.06] hidden lg:block">
              <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#55555a] block mb-2">
                CRITERIO DE CALIDAD
              </span>
              <span className="text-xl font-serif italic text-white/90">
                &ldquo;Si parece una plantilla, se descarta.&rdquo;
              </span>
            </div>
          </div>

          {/* Right Column: Monumental Editorial Statement */}
          <div className="lg:col-span-8 lg:pl-8">
            <h2 data-manifesto-text className="font-serif text-[clamp(2rem,4.5vw,4.2rem)] font-light leading-[1.12] text-[#f5f5f3] tracking-[-0.02em]">
              Una presencia digital excepcional no es un lujo cosmético; es el multiplicador más rentable de tu reputación comercial.
            </h2>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/[0.08]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8e8e93] block mb-2">
                  01 / RENDIMIENTO SIN COMPROMISOS
                </span>
                <p className="text-sm font-light text-[#8e8e93] leading-relaxed">
                  Experiencias tridimensionales interactivas que cargan en menos de <strong className="text-white font-normal">[1.2 segundos]</strong> y mantienen <strong className="text-white font-normal">[60 fotogramas por segundo]</strong> en cualquier dispositivo moderno.
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8e8e93] block mb-2">
                  02 / IDENTIDAD INIMITABLE
                </span>
                <p className="text-sm font-light text-[#8e8e93] leading-relaxed">
                  No reciclamos librerías genéricas de componentes. Todo el sistema visual, desde los shaders GLSL hasta los micro-gestos del cursor, es desarrollado a medida para <strong className="text-white font-normal">[Nombre de la Marca]</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
