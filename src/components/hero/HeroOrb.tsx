"use client";

import { useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sparkles } from "@react-three/drei";
import type { Group, Mesh } from "three";
import { MathUtils, BackSide } from "three";

export interface Pointer {
  x: number;
  y: number;
}

/**
 * The hero's living centerpiece: a glossy, gently morphing orb wrapped
 * in a luminous wireframe shell. It leans toward the cursor in real
 * time. All work happens on transforms inside useFrame → 60fps.
 */
export function HeroOrb({ pointer }: { pointer: RefObject<Pointer> }) {
  const group = useRef<Group>(null);
  const shell = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const { x, y } = pointer.current;

    // Ease the orb toward where the cursor is pointing.
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      x * 0.6,
      4,
      delta,
    );
    group.current.rotation.x = MathUtils.damp(
      group.current.rotation.x,
      -y * 0.45,
      4,
      delta,
    );
    group.current.position.x = MathUtils.damp(
      group.current.position.x,
      x * 0.35,
      3,
      delta,
    );
    group.current.position.y = MathUtils.damp(
      group.current.position.y,
      -y * 0.25,
      3,
      delta,
    );

    if (shell.current) {
      shell.current.rotation.y -= delta * 0.12;
      shell.current.rotation.z += delta * 0.05;
      const s = 1.32 + Math.sin(state.clock.elapsedTime * 1.4) * 0.02;
      shell.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.1}>
      <group ref={group}>
        {/* Core blob */}
        <mesh castShadow>
          <icosahedronGeometry args={[1.25, 14]} />
          <MeshDistortMaterial
            color="#8c00ff"
            emissive="#450693"
            emissiveIntensity={0.55}
            roughness={0.12}
            metalness={0.65}
            distort={0.42}
            speed={1.8}
          />
        </mesh>

        {/* Luminous wireframe shell */}
        <mesh ref={shell}>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshBasicMaterial
            color="#ff3f7f"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>

        {/* Inner rim glow */}
        <mesh scale={1.72}>
          <sphereGeometry args={[1.25, 32, 32]} />
          <meshBasicMaterial
            color="#8c00ff"
            transparent
            opacity={0.06}
            side={BackSide}
          />
        </mesh>

        {/* Drifting gold motes */}
        <Sparkles
          count={42}
          scale={5.5}
          size={3.4}
          speed={0.35}
          color="#ffc400"
          opacity={0.7}
        />
      </group>
    </Float>
  );
}
