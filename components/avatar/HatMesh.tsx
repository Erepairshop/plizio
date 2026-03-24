'use client';
import * as THREE from 'three';
import type { HatDef } from '@/lib/accessories';

// ── Individual hat renderers ──────────────────────────────
function CrownHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.26, 0]}>
      <mesh>
        <cylinderGeometry args={[0.21, 0.21, 0.07, 12]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.3} metalness={0.6} />
      </mesh>
      {[-0.12, 0, 0.12].map((x, i) => (
        <mesh key={i} position={[x, 0.08, 0]}>
          <coneGeometry args={[0.04, 0.12, 6]} />
          <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei + 0.2} roughness={0.2} metalness={0.7} />
        </mesh>
      ))}
      {[-0.08, 0.08].map((x, i) => (
        <mesh key={i} position={[x, 0.01, 0.2]}>
          <sphereGeometry args={[0.025, 6, 6]} />
          <meshStandardMaterial color="#ff3399" emissive="#ff3399" emissiveIntensity={0.8} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function CapHat({ hat }: { hat: HatDef }) {
  const { color: col } = hat;
  return (
    <group position={[0, 0.2, 0]} rotation={[0.1, 0, 0]}>
      <mesh>
        <sphereGeometry args={[0.22, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color={col} roughness={0.7} />
      </mesh>
      <mesh position={[0, -0.04, 0.14]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.36, 0.04, 0.22]} />
        <meshStandardMaterial color={col} roughness={0.7} />
      </mesh>
    </group>
  );
}

function HaloHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <mesh position={[0, 0.38, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.18, 0.025, 8, 24]} />
      <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.1} metalness={0.8} />
    </mesh>
  );
}

function HornsHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.22, 0]}>
      <mesh position={[-0.1, 0, 0]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.045, 0.16, 6]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.4} />
      </mesh>
      <mesh position={[0.1, 0, 0]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.045, 0.16, 6]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.4} />
      </mesh>
    </group>
  );
}

function BunnyEarsHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  const innerCol = new THREE.Color(col).lerp(new THREE.Color('#FF8CAD'), 0.6).getStyle();
  const earProps = (side: -1 | 1) => (
    <group position={[side * 0.09, 0.06, 0]} rotation={[0.15, 0, side * -0.2]}>
      <mesh scale={[1, 1, 0.4]}>
        <capsuleGeometry args={[0.04, 0.22, 4, 8]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.008]} scale={[0.6, 0.8, 0.3]}>
        <capsuleGeometry args={[0.035, 0.18, 4, 8]} />
        <meshStandardMaterial color={innerCol} roughness={0.4} />
      </mesh>
    </group>
  );
  return (
    <group position={[0, 0.22, 0]}>
      {earProps(-1)}
      {earProps(1)}
    </group>
  );
}

function TopHatHat({ hat }: { hat: HatDef }) {
  const { color: col } = hat;
  return (
    <group position={[0, 0.23, 0]}>
      <mesh>
        <cylinderGeometry args={[0.16, 0.16, 0.22, 12]} />
        <meshStandardMaterial color={col} roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.11, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.03, 12]} />
        <meshStandardMaterial color={col} roughness={0.8} />
      </mesh>
    </group>
  );
}

function HelmetHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <mesh position={[0, 0.18, 0]}>
      <sphereGeometry args={[0.24, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
      <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.3} metalness={0.5} />
    </mesh>
  );
}

function AntennaHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.24, 0]}>
      <mesh>
        <cylinderGeometry args={[0.012, 0.012, 0.2, 6]} />
        <meshStandardMaterial color={col} roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[0, 0.12, 0]}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.2} />
      </mesh>
    </group>
  );
}

function WizardHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.22, 0]}>
      <mesh>
        <coneGeometry args={[0.2, 0.42, 12]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei * 0.5} roughness={0.7} />
      </mesh>
      {[[-0.08, 0.12, 0.16], [0.09, 0.06, 0.14]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.022, 5, 5]} />
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function BeanieHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.19, 0]}>
      <mesh>
        <sphereGeometry args={[0.22, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.85} />
      </mesh>
      <mesh position={[0, -0.06, 0]}>
        <cylinderGeometry args={[0.225, 0.225, 0.06, 12]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei * 0.5} roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.17, 0]}>
        <sphereGeometry args={[0.055, 8, 8]} />
        <meshStandardMaterial color={em || col} emissive={em} emissiveIntensity={ei + 0.2} roughness={0.7} />
      </mesh>
    </group>
  );
}

function BucketHat({ hat }: { hat: HatDef }) {
  const { color: col } = hat;
  return (
    <group position={[0, 0.2, 0]}>
      <mesh>
        <cylinderGeometry args={[0.16, 0.18, 0.18, 12]} />
        <meshStandardMaterial color={col} roughness={0.8} />
      </mesh>
      <mesh position={[0, -0.09, 0]}>
        <cylinderGeometry args={[0.28, 0.26, 0.04, 12]} />
        <meshStandardMaterial color={col} roughness={0.8} />
      </mesh>
    </group>
  );
}

function PartyHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.22, 0]}>
      <mesh>
        <coneGeometry args={[0.16, 0.36, 10]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei * 0.4} roughness={0.6} />
      </mesh>
      {[[-0.06, 0.05, 0.14], [0.06, 0.10, 0.12], [0, 0.0, 0.15]].map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.018, 6, 6]} />
          <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function FedoraHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.22, 0]}>
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.155, 0.17, 0.20, 12]} />
        <meshStandardMaterial color={col} roughness={0.75} />
      </mesh>
      <mesh position={[0, 0.175, 0]} scale={[1, 0.4, 1]}>
        <sphereGeometry args={[0.16, 10, 8]} />
        <meshStandardMaterial color={col} roughness={0.75} />
      </mesh>
      <mesh position={[0, -0.01, 0]}>
        <cylinderGeometry args={[0.28, 0.30, 0.03, 14]} />
        <meshStandardMaterial color={col} roughness={0.75} />
      </mesh>
      <mesh position={[0, 0.01, 0]}>
        <cylinderGeometry args={[0.175, 0.175, 0.04, 12]} />
        <meshStandardMaterial color={em} emissive={em} emissiveIntensity={ei * 0.5} roughness={0.5} />
      </mesh>
    </group>
  );
}

function VikingHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.19, 0]}>
      <mesh>
        <sphereGeometry args={[0.22, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.52]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei * 0.4} roughness={0.35} metalness={0.55} />
      </mesh>
      <mesh position={[0, -0.04, 0.20]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.04, 0.14, 0.03]} />
        <meshStandardMaterial color={col} roughness={0.35} metalness={0.55} />
      </mesh>
      {([-1, 1] as const).map((side, i) => (
        <mesh key={i} position={[side * 0.22, 0.02, 0]} rotation={[0, 0, side * 0.5]}>
          <coneGeometry args={[0.045, 0.18, 8]} />
          <meshStandardMaterial color="#F0E0C0" roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function NinjaHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.18, 0]}>
      <mesh>
        <sphereGeometry args={[0.21, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
        <meshStandardMaterial color={col} roughness={0.9} />
      </mesh>
      <mesh position={[0, -0.02, 0]} rotation={[0.1, 0, 0]}>
        <cylinderGeometry args={[0.215, 0.215, 0.05, 12]} />
        <meshStandardMaterial color={em} emissive={em} emissiveIntensity={ei * 0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.05, -0.20]}>
        <sphereGeometry args={[0.04, 8, 6]} />
        <meshStandardMaterial color={col} roughness={0.9} />
      </mesh>
    </group>
  );
}

function SnapbackHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.2, 0]} rotation={[-0.05, 0, 0]}>
      <mesh>
        <cylinderGeometry args={[0.20, 0.20, 0.15, 12]} />
        <meshStandardMaterial color={col} roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.075, 0]}>
        <cylinderGeometry args={[0.20, 0.20, 0.015, 12]} />
        <meshStandardMaterial color={em || col} emissive={em} emissiveIntensity={ei * 0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0, -0.06, 0.16]} rotation={[0.05, 0, 0]}>
        <boxGeometry args={[0.40, 0.035, 0.20]} />
        <meshStandardMaterial color={col} roughness={0.7} />
      </mesh>
    </group>
  );
}

function BandanaHat({ hat }: { hat: HatDef }) {
  const { color: col, emissive: em, emissiveIntensity: ei } = hat;
  return (
    <group position={[0, 0.16, 0]}>
      <mesh rotation={[0.08, 0, 0]}>
        <torusGeometry args={[0.195, 0.038, 8, 20]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei * 0.4} roughness={0.8} />
      </mesh>
      <mesh position={[0.18, 0.01, -0.08]} rotation={[0, 0.4, 0.2]}>
        <boxGeometry args={[0.06, 0.04, 0.06]} />
        <meshStandardMaterial color={col} roughness={0.8} />
      </mesh>
    </group>
  );
}

// ── Lookup map ────────────────────────────────────────────
const HAT_COMPONENTS: Partial<Record<HatDef['type'], (hat: HatDef) => React.ReactNode>> = {
  crown:     (hat) => <CrownHat hat={hat} />,
  cap:       (hat) => <CapHat hat={hat} />,
  halo:      (hat) => <HaloHat hat={hat} />,
  horns:     (hat) => <HornsHat hat={hat} />,
  bunnyears: (hat) => <BunnyEarsHat hat={hat} />,
  tophat:    (hat) => <TopHatHat hat={hat} />,
  helmet:    (hat) => <HelmetHat hat={hat} />,
  antenna:   (hat) => <AntennaHat hat={hat} />,
  wizard:    (hat) => <WizardHat hat={hat} />,
  beanie:    (hat) => <BeanieHat hat={hat} />,
  bucket:    (hat) => <BucketHat hat={hat} />,
  party:     (hat) => <PartyHat hat={hat} />,
  fedora:    (hat) => <FedoraHat hat={hat} />,
  viking:    (hat) => <VikingHat hat={hat} />,
  ninja:     (hat) => <NinjaHat hat={hat} />,
  snapback:  (hat) => <SnapbackHat hat={hat} />,
  bandana:   (hat) => <BandanaHat hat={hat} />,
};

export function HatMesh({ hat }: { hat: HatDef; skinColor?: string }) {
  const renderer = HAT_COMPONENTS[hat.type];
  return renderer ? <>{renderer(hat)}</> : null;
}
