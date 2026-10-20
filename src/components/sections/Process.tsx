"use client";

import React from "react";
import HairlineDivider from "@/components/ui/HairlineDivider";

interface Phase {
  step: string;
  duration: string;
  title: string;
  objective: string;
  activities: string[];
}

const phases: Phase[] = [
  {
    step: "FASE 01 //",
    duration: "[SEMANA 01 - 02]",
    title: "Inmersión, Desconstrucción & Tesis de Marca",
    objective:
      "Desmontamos las convenciones predecibles de tu sector. Analizamos la psicología de tu cliente de mayor valor y definimos la narrativa que te diferenciará radicalmente del 99% de competidores.",
    activities: [
      "[Entrevistas de alineación con directores de producto / fundadores]",
      "[Auditoría heurística y de rendimiento de la web anterior]",
      "[Definición del manifiesto de diseño y moodboard editorial]",
      "[Arquitectura de información y wireframes con tensión espacial]",
    ],
  },
  {
    step: "FASE 02 //",
    duration: "[SEMANA 02 - 04]",
    title: "Dirección de Arte & Prototipado Interactivo",
    objective:
      "Diseñamos el sistema visual completo: contrastes tipográficos, paleta cromática de alta fidelidad, micro-interacciones del cursor y modelado de objetos y shaders para la experiencia interactiva.",
    activities: [
      "[Composición visual de alta fidelidad para desktop y móvil]",
      "[Diseño de estados de micro-movimiento y transiciones]",
      "[Modelado o shaders GLSL procedurales para WebGL]",
      "[Aprobación integral con el cliente antes de escribir una sola línea de código]",
    ],
  },
  {
    step: "FASE 03 //",
    duration: "[SEMANA 04 - 06]",
    title: "Desarrollo Creativo, Shaders & Smooth Scroll",
    objective:
      "Convertimos el diseño en software de nivel industrial. Implementamos la arquitectura Next.js (App Router), orquestamos GSAP sincronizado a Lenis y optimizamos el pipeline GPU para lograr 60 FPS estables.",
    activities: [
      "[Construcción modular en React y TypeScript estricto]",
      "[Vinculación de animaciones al requestAnimationFrame de Lenis]",
      "[Montaje de escenas WebGL con React Three Fiber]",
      "[Zero layout shifts y optimización extrema de assets]",
    ],
  },
  {
    step: "FASE 04 //",
    duration: "[SEMANA 06 - 08]",
    title: "Auditoría Adversarial, QA & Despliegue Global",
    objective:
      "Sometemos el artefacto digital a pruebas de estrés: compatibilidad multiplataforma, modo de movimiento reducido, auditoría de accesibilidad WCAG y orquestación en la red perimetral de Vercel.",
    activities: [
      "[Auditoría de 60fps en pantallas modestas y dispositivos móviles]",
      "[Verificación de Core Web Vitals en producción]",
      "[Entrega de documentación técnica para el equipo interno]",
      "[Lanzamiento global sin tiempo de inactividad]",
    ],
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative w-full py-28 px-6 md:px-12 bg-[#080808] border-t border-white/[0.08]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <HairlineDivider
          label="005 // METODOLOGÍA RIGUROSA"
          sublabel="EL MÉTODO DE PRODUCCIÓN"
        />

        {/* Section Title */}
        <div className="pt-8 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-light leading-[1.05] text-[#f5f5f3]">
              Cuatro fases innegociables para garantizar un resultado de clase mundial.
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs font-mono uppercase tracking-[0.2em] text-[#8e8e93]">
            [PROCESO PREDECIBLE • RESULTADOS EXTRAORDINARIOS]
          </div>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase) => (
            <div
              key={phase.step}
              data-process-card
              className="flex flex-col justify-between p-8 rounded-sm border border-white/[0.08] bg-[#111112]/60 hover:border-white/25 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.25em] uppercase text-[#8e8e93] pb-6 border-b border-white/[0.06]">
                  <span className="text-white font-medium">{phase.step}</span>
                  <span className="text-[#55555a]">{phase.duration}</span>
                </div>

                <h3 className="font-serif text-2xl font-light text-[#f5f5f3] mt-6 mb-4">
                  {phase.title}
                </h3>

                <p className="text-xs font-light text-[#8e8e93] leading-relaxed mb-6">
                  {phase.objective}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#55555a] block mb-3">
                  ACCIONES CLAVE
                </span>
                <ul className="space-y-2">
                  {phase.activities.map((act, i) => (
                    <li
                      key={i}
                      className="text-[11px] font-mono text-white/70 flex items-start gap-1.5"
                    >
                      <span className="text-[#8e8e93]">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
