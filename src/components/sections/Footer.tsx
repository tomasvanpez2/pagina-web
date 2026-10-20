"use client";

import React from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import HairlineDivider from "@/components/ui/HairlineDivider";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative w-full pt-28 pb-16 px-6 md:px-12 bg-[#080808] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <HairlineDivider
          label="006 // INICIACIÓN DE ENCARGOS"
          sublabel="DISPONIBILIDAD PARA EL PRÓXIMO TRIMESTRE"
        />

        {/* Monumental CTA */}
        <div className="py-20 lg:py-28 text-left">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8e8e93] block mb-4">
            [¿TU PROYECTO ESTÁ LISTO?]
          </span>
          <h2 className="font-serif text-[clamp(2.8rem,7vw,7.8rem)] font-light leading-[0.95] tracking-[-0.03em] text-[#f5f5f3] max-w-5xl">
            Construyamos algo que nadie pueda{" "}
            <span className="italic font-normal underline decoration-white/20 underline-offset-8">
              ignorar.
            </span>
          </h2>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <MagneticButton
              href="mailto:[contacto@estudio.com]"
              strength={0.35}
              className="px-10 py-5 rounded-full bg-white text-black font-mono text-sm uppercase tracking-[0.2em] font-medium hover:bg-[#eae6df] transition-all"
            >
              [contacto@estudio.com] ↗
            </MagneticButton>

            <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#8e8e93]">
              RESPUESTA DIRECTA DEL LEAD EN MENOS DE [24 HORAS]
            </span>
          </div>
        </div>

        {/* Studio Details Asymmetrical Grid */}
        <div className="pt-16 pb-12 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-xs font-mono">
          {/* Column 1: Studio Identity */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-white uppercase tracking-[0.2em] font-medium block">
              [Nombre del Estudio]
            </span>
            <p className="text-[#8e8e93] leading-relaxed max-w-sm">
              Estudio independiente de desarrollo frontend creativo, dirección de arte e ingeniería de interacción para empresas globales.
            </p>
            <span className="text-[#55555a] block">
              REGISTRO: [EST-2026-HQ] • TODOS LOS DERECHOS RESERVADOS.
            </span>
          </div>

          {/* Column 2: Physical & Virtual Presence */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#55555a] block mb-3">
              UBICACIÓN PRINCIPAL
            </span>
            <span className="text-white block">[Avenida Principal 100, Oficina 400]</span>
            <span className="text-[#8e8e93] block">[Ciudad, Código Postal, País]</span>
            <span className="text-[#55555a] block">HUSO HORARIO: [UTC -5 / GMT]</span>
          </div>

          {/* Column 3: Communication Channels */}
          <div className="lg:col-span-3 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#55555a] block mb-3">
              CANALES PRIVADOS
            </span>
            <a
              href="#"
              data-cursor="pointer"
              className="text-[#8e8e93] hover:text-white transition-colors block"
            >
              [Twitter / X: @estudio]
            </a>
            <a
              href="#"
              data-cursor="pointer"
              className="text-[#8e8e93] hover:text-white transition-colors block"
            >
              [LinkedIn: /company/estudio]
            </a>
            <a
              href="#"
              data-cursor="pointer"
              className="text-[#8e8e93] hover:text-white transition-colors block"
            >
              [GitHub: /estudio-creative]
            </a>
            <a
              href="#"
              data-cursor="pointer"
              className="text-[#8e8e93] hover:text-white transition-colors block"
            >
              [ReadCV: /estudio]
            </a>
          </div>

          {/* Column 4: Quality & Specs */}
          <div className="lg:col-span-2 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#55555a] block mb-3">
              ESTÁNDAR TÉCNICO
            </span>
            <span className="text-emerald-400 block">• 100% TYPED TYPESCRIPT</span>
            <span className="text-[#8e8e93] block">• GSAP & LENIS RAF</span>
            <span className="text-[#8e8e93] block">• WEBGL SHADER ACCEL</span>
            <span className="text-[#55555a] block">• ZERO REFLOWS PIPELINE</span>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.25em] text-[#55555a]">
          <div>
            DESARROLLADO CON ORGULLO TÉCNICO • [AÑO 2026]
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              [AVISO LEGAL]
            </a>
            <a href="#" className="hover:text-white transition-colors">
              [PRIVACIDAD DE DATOS]
            </a>
            <a href="#" className="hover:text-white transition-colors">
              [MAPA DEL SITIO]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
