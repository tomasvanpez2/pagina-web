"use client";

import React, { useState } from "react";
import HairlineDivider from "@/components/ui/HairlineDivider";
import MagneticButton from "@/components/ui/MagneticButton";

interface Project {
  id: string;
  serial: string;
  title: string;
  category: string;
  year: string;
  scope: string;
  results: string;
  gradient: string;
  accent: string;
}

const projects: Project[] = [
  {
    id: "alpha",
    serial: "ARCH // 001",
    title: "[Proyecto Alpha]",
    category: "[Fintech & Capital Institucional]",
    year: "[2026]",
    scope: "[Next.js App Router • Shaders WebGL • GSAP Parallax • 0ms Latencia]",
    results: "[+185% Tiempo de Sesión • Sitio del Día Nominado Awwwards]",
    gradient: "from-[#1a1a1c] via-[#121214] to-[#0a0a0c]",
    accent: "rgba(234, 230, 223, 0.15)",
  },
  {
    id: "beta",
    serial: "ARCH // 002",
    title: "[Proyecto Beta]",
    category: "[Moda & Alta Costura Digital]",
    year: "[2025]",
    scope: "[Headless Shopify • Visualizador 3D React Three Fiber • Tipografía Cinética]",
    results: "[+42% Ratio de Conversión • Reconocimiento FWA of the Day]",
    gradient: "from-[#161618] via-[#101012] to-[#08080a]",
    accent: "rgba(212, 175, 55, 0.12)",
  },
  {
    id: "gamma",
    serial: "ARCH // 003",
    title: "[Proyecto Gamma]",
    category: "[Arquitectura & Espacios Escultóricos]",
    year: "[2025]",
    scope: "[Experiencia Inmersiva WebGL • Audio Espacial Procedural • Lenis Sync]",
    results: "[Reconocimiento Internacional • Más de [500k] Visitas Únicas]",
    gradient: "from-[#1c1c1e] via-[#111113] to-[#080809]",
    accent: "rgba(255, 255, 255, 0.1)",
  },
];

export default function SelectedWorks() {
  const [activeProject, setActiveProject] = useState<string>(projects[0].id);

  return (
    <section id="archivo" className="relative w-full py-28 px-6 md:px-12 bg-[#080808] border-t border-white/[0.08]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <HairlineDivider
          label="004 // ARCHIVO DE CASOS SELECTOS"
          sublabel="PRODUCCIÓN PRIVADA & ENCARGOS"
        />

        {/* Section Title */}
        <div className="pt-8 pb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,5rem)] font-light leading-[1.05] text-[#f5f5f3]">
              Casos de estudio donde la técnica desafía lo predecible.
            </h2>
          </div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#8e8e93]">
            [EN FOCO: {projects.find((p) => p.id === activeProject)?.serial ?? "ARCH // 001"}] • [60 FPS]
          </div>
        </div>

        {/* Asymmetrical Project Showcase */}
        <div className="space-y-24">
          {projects.map((proj, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={proj.id}
                data-project-card
                onMouseEnter={() => setActiveProject(proj.id)}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Visual Preview Container (Asymmetric Column Widths) */}
                <div
                  className={`relative group ${
                    isEven
                      ? "lg:col-span-7 lg:order-2"
                      : "lg:col-span-7 lg:order-1"
                  }`}
                >
                  <div
                    data-cursor="view"
                    data-cursor-text="EXPLORAR"
                    className="relative w-full aspect-[16/10] overflow-hidden rounded-sm border border-white/[0.08] bg-[#111112] transition-transform duration-500 ease-out group-hover:border-white/30"
                  >
                    {/* Background Shader Gradient Simulator */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} transition-transform duration-700 ease-out group-hover:scale-105`}
                    />

                    {/* Architectural Wireframe Geometry Lines */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
                          {proj.serial}
                        </span>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40">
                          {proj.year}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="h-[1px] w-12 bg-white/30 group-hover:w-24 transition-all duration-500" />
                        <span className="font-serif text-3xl md:text-5xl font-light text-white/90 block">
                          {proj.title}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8e8e93] block">
                          {proj.category}
                        </span>
                      </div>

                      <div className="flex justify-between items-end text-[10px] font-mono text-[#55555a] uppercase tracking-wider">
                        <span>LATENCIA: 0.14s</span>
                        <span>CORE WEB VITALS: 99</span>
                      </div>
                    </div>

                    {/* Subtle Glass Noise Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${proj.accent}, transparent 70%)`,
                      }}
                    />
                  </div>
                </div>

                {/* Metadata & Technical Editorial Column */}
                <div
                  className={`flex flex-col justify-center space-y-6 ${
                    isEven
                      ? "lg:col-span-5 lg:order-1 lg:pr-8"
                      : "lg:col-span-5 lg:order-2 lg:pl-8"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#8e8e93]">
                    <span className="text-white">{proj.serial}</span>
                    <span className="text-[#55555a]">•</span>
                    <span>{proj.category}</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-light text-[#f5f5f3]">
                    {proj.title}
                  </h3>

                  <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#55555a] block mb-1">
                        ALCANCE TECNOLÓGICO
                      </span>
                      <p className="text-xs font-mono text-[#8e8e93] leading-relaxed">
                        {proj.scope}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#55555a] block mb-1">
                        IMPACTO COMERCIAL REGISTRADO
                      </span>
                      <p className="text-xs font-mono text-white/90 leading-relaxed">
                        {proj.results}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <MagneticButton
                      strength={0.2}
                      className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-mono uppercase tracking-[0.2em] text-[#f5f5f3] hover:bg-white hover:text-black hover:border-white transition-all"
                    >
                      Solicitar Demostración Privada →
                    </MagneticButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
