"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AbstractMascot from "./AbstractMascot";

export default function SceneContainer() {
  return (
    <div className="relative w-full h-full min-h-[380px] lg:min-h-[550px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        className="w-full h-full !absolute inset-0"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 3]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-4, -3, -2]} intensity={0.8} color="#d4af37" />
        <pointLight position={[0, 4, 2]} intensity={0.5} color="#eae6df" />

        <Suspense fallback={null}>
          <AbstractMascot />
        </Suspense>
      </Canvas>
    </div>
  );
}
