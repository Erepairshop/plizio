'use client';
import * as THREE from 'three';
import type { CapeDef } from '@/lib/clothing';
import type { TrailDef } from '@/lib/accessories';

function hueToColor(h: number): string {
  const s = 1, l = 0.55;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const v = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * v).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function CapeMesh({ cape, t }: { cape: CapeDef; t: number }) {
  const wave1 = Math.sin(t * 1.4) * 0.016;
  const wave2 = Math.sin(t * 1.1 + 0.6) * 0.012;
  const flutter = Math.sin(t * 2.1) * 0.025;

  const isRainbow = cape.id === 'cape_rainbow';
  const capeColor    = isRainbow ? hueToColor((t * 45) % 360)           : cape.color;
  const capeEmissive = isRainbow ? hueToColor(((t * 45) + 120) % 360)   : cape.emissive;
  const capeEI       = isRainbow ? 0.7                                   : cape.emissiveIntensity;

  const mat = (col: string, ei: number) => (
    <meshStandardMaterial color={col} emissive={capeEmissive} emissiveIntensity={ei} roughness={0.65} side={THREE.DoubleSide} />
  );

  return (
    <group>
      {/* Clasp brooch at nape */}
      <mesh position={[0, 0.34, -0.17]}>
        <sphereGeometry args={[0.028, 8, 6]} />
        <meshStandardMaterial color={capeEmissive} emissive={capeEmissive} emissiveIntensity={1.0} metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Shoulder drape */}
      <mesh position={[0, 0.24, -0.04]}>
        <cylinderGeometry args={[0.26, 0.24, 0.06, 12, 1, true, Math.PI * 0.65, Math.PI * 0.7]} />
        {mat(capeColor, capeEI * 0.6)}
      </mesh>
      {/* Upper back panel */}
      <mesh position={[0, 0.06 + wave1 * 0.3, -0.04 + wave2 * 0.2]} rotation={[flutter * 0.15, 0, 0]}>
        <cylinderGeometry args={[0.24, 0.22, 0.32, 10, 2, true, Math.PI * 0.7, Math.PI * 0.6]} />
        {mat(isRainbow ? hueToColor(((t * 45) + 60) % 360) : capeColor, capeEI * 0.35)}
      </mesh>
      {/* Mid panel */}
      <mesh position={[0, -0.22 + wave1 * 0.7, -0.06 + wave2 * 0.5]} rotation={[flutter * 0.3, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.19, 0.30, 10, 2, true, Math.PI * 0.72, Math.PI * 0.56]} />
        {mat(isRainbow ? hueToColor(((t * 45) + 150) % 360) : capeColor, capeEI * 0.4)}
      </mesh>
      {/* Lower panel */}
      <mesh position={[0, -0.46 + wave1 * 1.2, -0.08 + wave2 * 0.9]} rotation={[flutter * 0.5, 0, 0]}>
        <cylinderGeometry args={[0.19, 0.12, 0.24, 8, 2, true, Math.PI * 0.75, Math.PI * 0.5]} />
        {mat(isRainbow ? hueToColor(((t * 45) + 240) % 360) : capeColor, capeEI * 0.45)}
      </mesh>
      {/* Bottom tip */}
      <mesh position={[0, -0.60 + wave1 * 1.6, -0.10 + wave2 * 1.2]} rotation={[0.1 + flutter * 0.7, 0, 0]}>
        <sphereGeometry args={[0.08, 8, 4, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        {mat(isRainbow ? hueToColor(((t * 45) + 300) % 360) : capeColor, capeEI * 0.5)}
      </mesh>
    </group>
  );
}

const TRAIL_PARTICLES = [
  { pos: [0, -0.72, 0]    as [number,number,number], s: 0.060, phase: 0.0 },
  { pos: [-0.05, -0.85, 0] as [number,number,number], s: 0.045, phase: 0.8 },
  { pos: [0.06, -0.95, 0.02] as [number,number,number], s: 0.040, phase: 1.6 },
  { pos: [0, -1.05, -0.01] as [number,number,number], s: 0.030, phase: 2.4 },
  { pos: [0.04, -1.14, 0] as [number,number,number], s: 0.022, phase: 3.2 },
];

export function TrailMesh({ trail, t }: { trail: TrailDef; t: number }) {
  return (
    <group>
      {TRAIL_PARTICLES.map((p, i) => {
        const alpha = (1 - i / TRAIL_PARTICLES.length) * (0.5 + 0.3 * Math.sin(t * 3 + p.phase));
        const scale = p.s * (0.8 + 0.3 * Math.sin(t * 2 + p.phase));
        return (
          <mesh key={i} position={p.pos} scale={scale}>
            <sphereGeometry args={[1, 6, 6]} />
            <meshStandardMaterial
              color={trail.color}
              emissive={trail.emissive}
              emissiveIntensity={1.2}
              transparent
              opacity={alpha}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}
