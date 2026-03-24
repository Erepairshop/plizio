'use client';
import type { GlassesDef } from '@/lib/clothing';

export function GlassesMesh({ glasses }: { glasses: GlassesDef }) {
  const col = glasses.color;
  const lens = glasses.lensColor;

  if (glasses.type === 'sunglasses' || glasses.type === 'thug') {
    return (
      <group position={[0, 0.04, 0.2]}>
        {([-0.075, 0.075] as const).map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <boxGeometry args={[0.06, 0.032, 0.01]} />
            <meshStandardMaterial color={lens} roughness={0.1} metalness={0.3} transparent opacity={0.85} />
          </mesh>
        ))}
        <mesh>
          <boxGeometry args={[0.04, 0.012, 0.008]} />
          <meshStandardMaterial color={col} roughness={0.3} metalness={0.4} />
        </mesh>
        {([-0.115, 0.115] as const).map((x, i) => (
          <mesh key={i} position={[x, 0, -0.04]} rotation={[0, i === 0 ? 0.5 : -0.5, 0]}>
            <boxGeometry args={[0.065, 0.01, 0.008]} />
            <meshStandardMaterial color={col} roughness={0.4} />
          </mesh>
        ))}
      </group>
    );
  }

  if (glasses.type === 'round') {
    return (
      <group position={[0, 0.04, 0.2]}>
        {([-0.072, 0.072] as const).map((x, i) => (
          <mesh key={i} position={[x, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.028, 0.007, 6, 16]} />
            <meshStandardMaterial color={col} roughness={0.3} metalness={0.5} />
          </mesh>
        ))}
        <mesh>
          <boxGeometry args={[0.032, 0.008, 0.006]} />
          <meshStandardMaterial color={col} roughness={0.3} metalness={0.5} />
        </mesh>
      </group>
    );
  }

  if (glasses.type === 'visor') {
    return (
      <mesh position={[0, 0.02, 0.21]}>
        <boxGeometry args={[0.22, 0.045, 0.01]} />
        <meshStandardMaterial color={lens} emissive={col} emissiveIntensity={0.4} transparent opacity={0.7} roughness={0.05} />
      </mesh>
    );
  }

  if (glasses.type === 'monocle') {
    return (
      <group position={[0.07, 0.04, 0.21]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.032, 0.007, 6, 16]} />
          <meshStandardMaterial color={col} roughness={0.2} metalness={0.7} />
        </mesh>
        <mesh position={[0, 0, 0.002]}>
          <circleGeometry args={[0.028, 12]} />
          <meshStandardMaterial color={lens} transparent opacity={0.3} roughness={0.1} />
        </mesh>
      </group>
    );
  }

  return null;
}
