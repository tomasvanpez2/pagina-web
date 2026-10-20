"use client";

import React, { useState } from "react";
import HairlineDivider from "@/components/ui/HairlineDivider";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  deliverables: string[];
  techStack: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "frontend-awwwards",
    number: "01 //",
    title: "Ingeniería Frontend Awwwards-Level",
    subtitle: "Desarrollo Creativo • WebGL • R3F • GSAP",
    description:
      "Construimos experiencias web inmersivas con animaciones complejas sincronizadas con el scroll del usuario, shaders personalizados en GLSL y orquestación por hardware. Cero saltos, cero reflows.",
    deliverables: [
      "[Sitios web insignia para marcas líderes]",
      "[Shaders procedurales e interacción 3D reactiva]",
      "[Integración con headless CMS de alta disponibilidad]",
      "[Optimización Core Web Vitals al 99+]",
    ],
    techStack: "Next.js (App Router) • React Three Fiber • GSAP • Lenis • TypeScript",
  },
  {
    id: "art-direction",
    number: "02 //",
    title: "Dirección de Arte & Sistemas Visuales",
    subtitle: "Tipografía Editorial • Tensión Espacial • Motion Design",
    description:
      "Definimos la identidad digital de marcas que rehúyen de lo común. Diseñamos un lenguaje visual propio con tipografías display de alto contraste, rejillas asimétricas intencionales y sistemas de movimiento narrativo.",
    deliverables: [
      "[Diseño de UI/UX a medida con estética Quiet Luxury]",
      "[Guías maestras de diseño y tokens de interacción]",
      "[Prototipado interactivo de alta fidelidad]",
      "[Curaduría iconográfica y audiovisual]",
    ],
    techStack: "Figma • After Effects • Blender • Motion Specifications",
  },
  {
    id: "headless-ecommerce",
    number: "03 //",
    title: "E-Commerce Headless & Plataformas Transaccionales",
    subtitle: "Comercio de Lujo • Velocidad Extrema • Cero Fricción",
    description:
      "Desconectamos el frontend tradicional para brindar una velocidad de navegación instantánea entre colecciones, carritos interactivos fluidos y experiencias de compra que elevan el valor percibido del producto.",
    deliverables: [
      "[Tiendas insignia headless para [Marcas de Moda / Lujo / Tech]]",
      "[Transiciones de página continuas sin recarga]",
      "[Arquitectura desacoplada Shopify Plus / Medusa]",
      "[Conversión optimizada mediante micro-interacciones]",
    ],
    techStack: "Shopify Storefront API • Next.js Commerce • Stripe • Edge Caching",
  },
  {
    id: "performance-audit",
    number: "04 //",
    title: "Optimización de Rendimiento & Auditoría Extrema",
    subtitle: "60 FPS Garantizados • Core Web Vitals • GPU Pipeline",
    description:
      "Auditoría adversarial de código y pipeline gráfico. Diagnosticamos cuellos de botella de renderizado, optimizamos matrices de WebGL y reescribimos animaciones defectuosas para garantizar fluidez absoluta.",
    deliverables: [
      "[Auditoría completa de reflows y render time]",
      "[Compresión y transcodificación de assets 3D a [Draco / KTX2]]",
      "[Garantía contractual de fluidez a 60 FPS]",
      "[Preparación y despliegue global en Edge Networks]",
    ],
    techStack: "Chrome DevTools Tracing • WebGL Profiler • Lighthouse • Vercel Edge",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string>(services[0].id);

  return (
    <section id="servicios" className="relative w-full py-28 px-6 md:px-12 bg-[#080808] border-t border-white/[0.08]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <HairlineDivider
          label="003 // CAPACIDADES DEL ESTUDIO"
          sublabel="ARQUITECTURA DE ESPECIALIDADES"
        />

        {/* Section Title & Philosophy */}
        <div className="pt-8 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-light leading-[1.05] text-[#f5f5f3]">
              Diseño de interacción concebido sin plantillas y ejecutado a nivel de ingeniería de precisión.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#8e8e93]">
            <span>CAPACIDAD TÉCNICA: <strong className="text-white font-normal">[MAX 3 PROYECTOS SIMULTÁNEOS]</strong></span>
            <span>MODELO DE TRABAJO: <strong className="text-white font-normal">EQUIPO DEDICADO DE ÉLITE</strong></span>
          </div>
        </div>

        {/* Interactive Services List */}
        <div className="border-t border-white/[0.08]">
          {services.map((service) => {
            const isOpen = activeService === service.id;
            return (
              <div
                key={service.id}
                data-service-row
                onClick={() => setActiveService(isOpen ? "" : service.id)}
                data-cursor="pointer"
                className={`group border-b border-white/[0.08] transition-colors duration-300 ${
                  isOpen ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                }`}
              >
                {/* Header Row */}
                <div className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-2 text-xs font-mono tracking-[0.25em] text-[#8e8e93] group-hover:text-white transition-colors">
                    {service.number}
                  </div>

                  <div className="md:col-span-6">
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-[#f5f5f3] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#8e8e93] mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="md:col-span-3 text-xs font-mono text-[#55555a] hidden md:block">
                    {service.techStack}
                  </div>

                  <div className="md:col-span-1 flex justify-end">
                    <span
                      className={`text-sm font-mono transition-transform duration-300 text-white/60 group-hover:text-white ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </div>
                </div>

                {/* Expandable Technical Breakdown */}
                {isOpen && (
                  <div className="pb-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-white/[0.04]">
                    <div className="lg:col-start-3 lg:col-span-5">
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8e8e93] block mb-3">
                        PROPUESTA DE VALOR
                      </span>
                      <p className="text-sm font-light text-[#8e8e93] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8e8e93] block mb-3">
                        ENTREGABLES ESPECÍFICOS
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs font-mono text-white/80"
                          >
                            <span className="text-[#55555a]">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
