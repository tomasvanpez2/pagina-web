"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Deterministic seed-based particle generation (100% pure at module level)
const PARTICLE_COUNT = 380;
const PARTICLE_POSITIONS = (() => {
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  let seed = 42;
  const pseudoRandom = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const radius = 2.4 + pseudoRandom() * 2.2;
    const theta = pseudoRandom() * Math.PI * 2;
    const phi = Math.acos(2 * pseudoRandom() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
})();

export default function AbstractMascot() {
  const groupRef = useRef<THREE.Group>(null);
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Smoothed target coordinates
  const mouseTarget = useRef({ x: 0, y: 0 });
  const scrollTarget = useRef(0);

  useFrame((state, delta) => {
    // Damped mouse follow
    mouseTarget.current.x = THREE.MathUtils.lerp(
      mouseTarget.current.x,
      state.pointer.x * 0.8,
      0.06
    );
    mouseTarget.current.y = THREE.MathUtils.lerp(
      mouseTarget.current.y,
      state.pointer.y * 0.8,
      0.06
    );

    // Track scroll velocity / offset
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    scrollTarget.current = THREE.MathUtils.lerp(
      scrollTarget.current,
      scrollY * 0.0015,
      0.08
    );

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35 + mouseTarget.current.x * 0.2;
      groupRef.current.rotation.x =
        mouseTarget.current.y * 0.4 + scrollTarget.current * 0.5;
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.8) * 0.12 -
        scrollTarget.current * 0.4;
    }

    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.x += delta * 0.2;
      outerSphereRef.current.rotation.z += delta * 0.15;
    }

    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.6;
      innerCoreRef.current.rotation.x += delta * 0.3;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2.2) * 0.04;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
      ringRef.current.rotation.x =
        Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08;
      particlesRef.current.rotation.x = mouseTarget.current.y * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Outer Faceted Prism Cage */}
      <mesh ref={outerSphereRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshPhysicalMaterial
          color="#f5f5f3"
          roughness={0.12}
          metalness={0.1}
          transmission={0.88}
          thickness={1.2}
          ior={1.45}
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Second Semi-transparent Shimmer Hull */}
      <mesh>
        <dodecahedronGeometry args={[1.15, 0]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.85}
          wireframe={true}
          transparent={true}
          opacity={0.18}
        />
      </mesh>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={innerCoreRef}>
        <octahedronGeometry args={[0.75, 0]} />
        <meshStandardMaterial
          color="#eae6df"
          roughness={0.25}
          metalness={0.9}
          emissive="#d4af37"
          emissiveIntensity={0.25}
          wireframe={false}
        />
      </mesh>

      {/* Orbiting Equatorial Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.0, 0.015, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent={true} opacity={0.4} />
      </mesh>

      {/* Particle Atmosphere */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[PARTICLE_POSITIONS, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#f5f5f3"
          transparent={true}
          opacity={0.65}
          sizeAttenuation={true}
        />
      </points>
    </group>
  );
}
