"use client";

import { Suspense, type RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { HeroOrb, type Pointer } from "./HeroOrb";

/**
 * Lightweight R3F stage: one expressive mesh lit by three brand-colored
 * lights for the iridescent palette play. Clamped DPR + a single draw
 * group keeps it cheap. Mounted client-only (no SSR) by the Hero.
 */
export default function HeroScene({
  pointer,
}: {
  pointer: RefObject<Pointer>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[5, 5, 5]} intensity={70} color="#8c00ff" />
      <pointLight position={[-6, -3, 2]} intensity={55} color="#ff3f7f" />
      <pointLight position={[0, 4, -4]} intensity={40} color="#ffc400" />
      <Suspense fallback={null}>
        <HeroOrb pointer={pointer} />
      </Suspense>
    </Canvas>
  );
}
