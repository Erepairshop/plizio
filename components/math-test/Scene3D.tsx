"use client";

import { useMemo, useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from "three";

const NEON_COLORS = ["#FF2D78", "#00D4FF", "#00FF88", "#FFD700", "#B44DFF"];

function FloatingShape({
  position, scale, speed, rotSpeed, color, shapeType,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
  rotSpeed: number;
  color: string;
  shapeType: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const startY = position[1];
  const startX = position[0];

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.003 * rotSpeed;
    ref.current.rotation.y += 0.005 * rotSpeed;
    ref.current.rotation.z += 0.002 * rotSpeed;
    ref.current.position.y = startY + Math.sin(state.clock.elapsedTime * speed) * 0.8;
    ref.current.position.x = startX + Math.sin(state.clock.elapsedTime * speed * 0.7 + 1) * 0.3;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {shapeType === 0 && <boxGeometry args={[1, 1, 1]} />}
      {shapeType === 1 && <octahedronGeometry args={[0.7]} />}
      {shapeType === 2 && <dodecahedronGeometry args={[0.6]} />}
      {shapeType === 3 && <icosahedronGeometry args={[0.6]} />}
      {shapeType === 4 && <tetrahedronGeometry args={[0.7]} />}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.5}
        wireframe={shapeType % 2 === 0}
      />
    </mesh>
  );
}

function MathBackground() {
  const groupRef = useRef<THREE.Group>(null);
  const shapes = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10 - 3,
        ] as [number, number, number],
        scale: 0.2 + Math.random() * 0.5,
        speed: 0.2 + Math.random() * 0.6,
        rotSpeed: 0.5 + Math.random() * 1.5,
        color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
        shapeType: Math.floor(Math.random() * 5),
      })),
    [],
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
    </group>
  );
}

export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.4} color="#FFD700" />
      <pointLight position={[-10, -5, 5]} intensity={0.3} color="#00D4FF" />
      <pointLight position={[0, 8, -5]} intensity={0.2} color="#FF2D78" />
      <fog attach="fog" args={["#0A0A1A", 8, 25]} />
      <MathBackground />
    </Canvas>
  );
}
