"use client";

import dynamic from "next/dynamic";
import React from "react";

const SceneContainer = dynamic(
  () => import("@/components/three/SceneContainer"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[380px] lg:min-h-[550px] flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border border-white/[0.08] animate-pulse" />
          <div className="absolute w-24 h-24 rounded-full border border-white/[0.12] animate-ping opacity-40" />
          <span className="absolute text-[9px] font-mono uppercase tracking-[0.3em] text-[#55555a]">
            INIT WEBGL2
          </span>
        </div>
      </div>
    ),
  }
);

export default function ClientScene() {
  return <SceneContainer />;
}
