"use client";

import { useMemo, useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import * as THREE from "three";

function ParticleDot({
  pos, scale, speed, color,
}: {
  pos: [number, number, number];
  scale: number;
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x = pos[0] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    ref.current.position.y = pos[1] + Math.cos(state.clock.elapsedTime * speed * 0.8) * 0.5;
    ref.current.position.z = pos[2] + Math.sin(state.clock.elapsedTime * speed * 0.6 + 1) * 0.3;
  });

  return (
    <mesh ref={ref} position={pos} scale={scale}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1} />
    </mesh>
  );
}

function GradeShape({ grade }: { grade: number }) {
  const ref = useRef<THREE.Group>(null);
  const gradeColor = grade >= 4 ? "#FFD700" : grade === 3 ? "#00D4FF" : grade === 2 ? "#FF6B00" : "#FF2D78";

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });

  const particles = useMemo(
    () =>
      Array.from({ length: grade >= 4 ? 40 : 20 }, () => ({
        pos: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4,
        ] as [number, number, number],
        scale: 0.03 + Math.random() * 0.08,
        speed: 0.5 + Math.random() * 2,
      })),
    [grade],
  );

  return (
    <group ref={ref}>
      {grade === 5 && (
        <mesh>
          <dodecahedronGeometry args={[1.5]} />
          <meshStandardMaterial color={gradeColor} emissive={gradeColor} emissiveIntensity={0.8} wireframe />
        </mesh>
      )}
      {grade === 4 && (
        <mesh>
          <octahedronGeometry args={[1.3]} />
          <meshStandardMaterial color={gradeColor} emissive={gradeColor} emissiveIntensity={0.6} wireframe />
        </mesh>
      )}
      {grade === 3 && (
        <mesh>
          <icosahedronGeometry args={[1.2]} />
          <meshStandardMaterial color={gradeColor} emissive={gradeColor} emissiveIntensity={0.4} wireframe />
        </mesh>
      )}
      {grade <= 2 && (
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color={gradeColor} emissive={gradeColor} emissiveIntensity={0.3} wireframe />
        </mesh>
      )}
      {particles.map((p, i) => (
        <ParticleDot key={i} {...p} color={gradeColor} />
      ))}
    </group>
  );
}

export function GradeScene({ grade }: { grade: number }) {
  const gradeColor = grade >= 4 ? "#FFD700" : grade === 3 ? "#00D4FF" : grade === 2 ? "#FF6B00" : "#FF2D78";
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: "200px", height: "200px" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color={gradeColor} />
      <pointLight position={[-5, -3, 3]} intensity={0.3} color="#fff" />
      <GradeShape grade={grade} />
    </Canvas>
  );
}
