'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { SkinDef } from '@/lib/skins';
import type { FaceDef } from '@/lib/faces';
import type { TopDef, BottomDef, ShoeDef, CapeDef, GlassesDef, GloveDef } from '@/lib/clothing';
import type { HatDef, TrailDef } from '@/lib/accessories';
import type { AvatarGender } from '@/lib/gender';

export interface AvatarCompanionProps {
  mood: 'idle' | 'focused' | 'happy' | 'disappointed' | 'victory' | 'surprised' | 'confused' | 'laughing';
  // Movement
  isWalking?: boolean;
  facing?: 'se' | 'sw' | 'ne' | 'nw';
  // Legacy fallback colors
  skinColor?: string;
  outfitColor?: string;
  fixed?: boolean;
  jumpTrigger?: { reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin' | null; timestamp: number };
  // Gender
  gender?: AvatarGender;
  // Full shop customization
  activeSkin?: SkinDef | null;
  activeFace?: FaceDef | null;
  activeTop?: TopDef | null;
  activeBottom?: BottomDef | null;
  activeShoe?: ShoeDef | null;
  activeCape?: CapeDef | null;
  activeGlasses?: GlassesDef | null;
  activeGloves?: GloveDef | null;
  activeHat?: HatDef | null;
  activeTrail?: TrailDef | null;
  // When true, the avatar canvas passes clicks through to underlying elements
  passThrough?: boolean;
}

function nextBlink() {
  return 3 + Math.random() * 4;
}

// ── HAT GEOMETRY ────────────────────────────────────────
function HatMesh({ hat, skinColor }: { hat: HatDef; skinColor: string }) {
  const col = hat.color;
  const em = hat.emissive;
  const ei = hat.emissiveIntensity;

  if (hat.type === 'crown') {
    return (
      <group position={[0, 0.26, 0]}>
        {/* Band */}
        <mesh>
          <cylinderGeometry args={[0.21, 0.21, 0.07, 12]} />
          <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.3} metalness={0.6} />
        </mesh>
        {/* Points */}
        {[-0.12, 0, 0.12].map((x, i) => (
          <mesh key={i} position={[x, 0.08, 0]}>
            <coneGeometry args={[0.04, 0.12, 6]} />
            <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei + 0.2} roughness={0.2} metalness={0.7} />
          </mesh>
        ))}
        {/* Gems */}
        {[-0.08, 0.08].map((x, i) => (
          <mesh key={i} position={[x, 0.01, 0.2]}>
            <sphereGeometry args={[0.025, 6, 6]} />
            <meshStandardMaterial color="#ff3399" emissive="#ff3399" emissiveIntensity={0.8} roughness={0.1} />
          </mesh>
        ))}
      </group>
    );
  }
  if (hat.type === 'cap') {
    return (
      <group position={[0, 0.2, 0]} rotation={[0.1, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.22, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial color={col} roughness={0.7} />
        </mesh>
        {/* Brim */}
        <mesh position={[0, -0.04, 0.14]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[0.36, 0.04, 0.22]} />
          <meshStandardMaterial color={col} roughness={0.7} />
        </mesh>
      </group>
    );
  }
  if (hat.type === 'halo') {
    return (
      <mesh position={[0, 0.38, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.18, 0.025, 8, 24]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.1} metalness={0.8} />
      </mesh>
    );
  }
  if (hat.type === 'horns') {
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
  if (hat.type === 'tophat') {
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
  if (hat.type === 'helmet') {
    return (
      <mesh position={[0, 0.18, 0]}>
        <sphereGeometry args={[0.24, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei} roughness={0.3} metalness={0.5} />
      </mesh>
    );
  }
  if (hat.type === 'antenna') {
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
  if (hat.type === 'wizard') {
    return (
      <group position={[0, 0.22, 0]}>
        <mesh>
          <coneGeometry args={[0.2, 0.42, 12]} />
          <meshStandardMaterial color={col} emissive={em} emissiveIntensity={ei * 0.5} roughness={0.7} />
        </mesh>
        {/* Stars on hat */}
        {[[-0.08, 0.12, 0.16], [0.09, 0.06, 0.14]].map(([x, y, z], i) => (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.022, 5, 5]} />
            <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} />
          </mesh>
        ))}
      </group>
    );
  }
  return null;
}

// ── GLASSES MESH ─────────────────────────────────────────
function GlassesMesh({ glasses }: { glasses: GlassesDef }) {
  const col = glasses.color;
  const lens = glasses.lensColor;

  if (glasses.type === 'sunglasses' || glasses.type === 'thug') {
    return (
      <group position={[0, 0.04, 0.2]}>
        {/* Left lens */}
        <mesh position={[-0.075, 0, 0]}>
          <boxGeometry args={[0.06, 0.032, 0.01]} />
          <meshStandardMaterial color={lens} roughness={0.1} metalness={0.3} transparent opacity={0.85} />
        </mesh>
        {/* Right lens */}
        <mesh position={[0.075, 0, 0]}>
          <boxGeometry args={[0.06, 0.032, 0.01]} />
          <meshStandardMaterial color={lens} roughness={0.1} metalness={0.3} transparent opacity={0.85} />
        </mesh>
        {/* Bridge */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.04, 0.012, 0.008]} />
          <meshStandardMaterial color={col} roughness={0.3} metalness={0.4} />
        </mesh>
        {/* Arms */}
        <mesh position={[-0.115, 0, -0.04]} rotation={[0, 0.5, 0]}>
          <boxGeometry args={[0.065, 0.01, 0.008]} />
          <meshStandardMaterial color={col} roughness={0.4} />
        </mesh>
        <mesh position={[0.115, 0, -0.04]} rotation={[0, -0.5, 0]}>
          <boxGeometry args={[0.065, 0.01, 0.008]} />
          <meshStandardMaterial color={col} roughness={0.4} />
        </mesh>
      </group>
    );
  }
  if (glasses.type === 'round') {
    return (
      <group position={[0, 0.04, 0.2]}>
        {[-0.072, 0.072].map((x, i) => (
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

// ── CAPE MESH ────────────────────────────────────────────
function CapeMesh({ cape, t }: { cape: CapeDef; t: number }) {
  const waveY = Math.sin(t * 1.5) * 0.02;
  const waveZ = Math.sin(t * 1.2) * 0.015;
  return (
    <group position={[0, 0.08, -0.17]}>
      {/* Upper cape */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.48, 0.06, 0.04]} />
        <meshStandardMaterial color={cape.color} emissive={cape.emissive} emissiveIntensity={cape.emissiveIntensity * 0.5} roughness={0.6} side={THREE.DoubleSide} />
      </mesh>
      {/* Main flowing body */}
      <mesh position={[0, -0.22 + waveY, -0.04 + waveZ]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[0.44, 0.4, 0.025]} />
        <meshStandardMaterial color={cape.color} emissive={cape.emissive} emissiveIntensity={cape.emissiveIntensity * 0.3} roughness={0.65} side={THREE.DoubleSide} />
      </mesh>
      {/* Bottom tapered section */}
      <mesh position={[0, -0.46 + waveY * 1.5, -0.05 + waveZ * 1.5]} rotation={[-0.12, 0, 0]}>
        <boxGeometry args={[0.36, 0.22, 0.018]} />
        <meshStandardMaterial color={cape.color} emissive={cape.emissive} emissiveIntensity={cape.emissiveIntensity * 0.4} roughness={0.65} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// ── TRAIL MESH ───────────────────────────────────────────
function TrailMesh({ trail, t }: { trail: TrailDef; t: number }) {
  const particles = [
    { pos: [0, -0.72, 0], s: 0.06, phase: 0 },
    { pos: [-0.05, -0.85, 0], s: 0.045, phase: 0.8 },
    { pos: [0.06, -0.95, 0.02], s: 0.04, phase: 1.6 },
    { pos: [0, -1.05, -0.01], s: 0.03, phase: 2.4 },
    { pos: [0.04, -1.14, 0], s: 0.022, phase: 3.2 },
  ];
  return (
    <group>
      {particles.map((p, i) => {
        const alpha = (1 - i / particles.length) * (0.5 + 0.3 * Math.sin(t * 3 + p.phase));
        const scale = p.s * (0.8 + 0.3 * Math.sin(t * 2 + p.phase));
        return (
          <mesh key={i} position={p.pos as [number, number, number]} scale={scale}>
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

// ── FACE / EYES / MOUTH ──────────────────────────────────
function FaceFeatures({
  face,
  skinColor,
  mouthRef,
  leftLidRef,
  rightLidRef,
  leftIrisRef,
  rightIrisRef,
  leftBrowRef,
  rightBrowRef,
}: {
  face: FaceDef | null;
  skinColor: string;
  mouthRef: React.RefObject<THREE.Object3D | null>;
  leftLidRef: React.RefObject<THREE.Mesh | null>;
  rightLidRef: React.RefObject<THREE.Mesh | null>;
  leftIrisRef: React.RefObject<THREE.Mesh | null>;
  rightIrisRef: React.RefObject<THREE.Mesh | null>;
leftBrowRef: React.RefObject<THREE.Object3D | null>;
rightBrowRef: React.RefObject<THREE.Object3D | null>;
}) {
  const eyeCol  = face?.eyeColor  || '#2a2a2a';
  const mouthCol = face?.mouthColor || '#b06060';
  const eyeType   = face?.eyeType   || 'dot';
  const mouthType = face?.mouthType || 'smile';
  const skinDark = new THREE.Color(skinColor).multiplyScalar(0.82).getStyle();

  // ── Eyebrow params per expression ─────────────────────
  const browY =
    eyeType === 'surprised' ? 0.115 :
    eyeType === 'angry'     ? 0.096 :
    eyeType === 'sad'       ? 0.097 :
    0.1;
  // +ve = inner end down (angry frown) | -ve = inner end up (sad droop)
  const leftBrowRotZ =
    eyeType === 'angry'     ?  0.40 :
    eyeType === 'sad'       ? -0.28 :
    eyeType === 'surprised' ?  0.05 :
    eyeType === 'happy'     ?  0.04 :
    0.07;
  const rightBrowRotZ = -leftBrowRotZ;

  // Iris sphere size for normal types
  const irisSize = eyeType === 'round' ? 0.028 : eyeType === 'dot' ? 0.018 : 0.024;
  // Special eye types use overlay meshes instead of a sphere iris
  const specialEye = eyeType === 'happy' || eyeType === 'x' || eyeType === 'heart' || eyeType === 'star';

  // ── Per-eye renderer ───────────────────────────────────
  const renderEye = (
    side: -1 | 1,
    irisRef: React.RefObject<THREE.Mesh | null>,
    lidRef:  React.RefObject<THREE.Mesh | null>,
    browRef: React.RefObject<THREE.Object3D | null>,
  ) => {
    const x   = side * 0.08;
    const bx  = side * 0.085;
    const sx  = side === -1 ? -0.075 : 0.085;
    const isWinkClosed = eyeType === 'wink' && side === -1;
    const browRotZ = side === -1 ? leftBrowRotZ : rightBrowRotZ;

    return (
      <>
{/* Eye white — almond-shaped, subtle */}
{!specialEye && !isWinkClosed && (
  <group position={[x, 0.04, 0.188]}>
    {/* Sclera — smaller, more almond */}
    <mesh scale={[0.88, 0.58, 0.32]}>
      <sphereGeometry args={[0.048, 10, 8]} />
      <meshStandardMaterial color="#f8f5f0" roughness={0.25} />
    </mesh>
    {/* Upper eyelid crease — subtle skin-tone shadow */}
    <mesh position={[0, 0.018, 0.010]} scale={[0.92, 0.25, 0.38]}>
      <sphereGeometry args={[0.048, 8, 6]} />
      <meshStandardMaterial color={skinDark} roughness={0.7} transparent opacity={0.3} />
    </mesh>
  </group>
)}

        {/* Angry squint: skin-coloured overlay covers top of eye white */}
        {eyeType === 'angry' && (
          <mesh position={[x, 0.073, 0.234]}>
            <boxGeometry args={[0.094, 0.048, 0.009]} />
            <meshStandardMaterial color={skinColor} roughness={0.6} />
          </mesh>
        )}

        {/* Iris ref mesh */}
        <mesh ref={irisRef} position={[x, 0.04, 0.215]}>
          <sphereGeometry args={[specialEye || isWinkClosed ? 0.001 : irisSize, 8, 8]} />
          <meshStandardMaterial color={eyeCol} roughness={0.3} />
        </mesh>
        {/* Pupil — dark center dot for realism */}
        {!specialEye && !isWinkClosed && (
          <mesh position={[x, 0.04, 0.222]}>
            <sphereGeometry args={[irisSize * 0.45, 6, 6]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.4} />
          </mesh>
        )}

        {/* ── Special eye overlays ──────────────────────── */}

        {/* Happy: ^ arc (torusGeometry top-half arch) */}
        {eyeType === 'happy' && (
          <mesh position={[x, 0.04, 0.236]}>
            <torusGeometry args={[0.027, 0.009, 6, 12, Math.PI]} />
            <meshStandardMaterial color={eyeCol} roughness={0.35} />
          </mesh>
        )}

        {/* Wink closed eye: horizontal line */}
        {isWinkClosed && (
          <mesh position={[x, 0.04, 0.236]}>
            <boxGeometry args={[0.068, 0.011, 0.006]} />
            <meshStandardMaterial color={eyeCol} roughness={0.4} />
          </mesh>
        )}

        {/* X eyes: cross of two bars */}
        {eyeType === 'x' && (
          <>
            <mesh position={[x, 0.04, 0.229]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.058, 0.013, 0.005]} />
              <meshStandardMaterial color={eyeCol} roughness={0.4} />
            </mesh>
            <mesh position={[x, 0.04, 0.229]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.058, 0.013, 0.005]} />
              <meshStandardMaterial color={eyeCol} roughness={0.4} />
            </mesh>
          </>
        )}

        {/* Heart eyes: 3-sphere heart shape */}
        {eyeType === 'heart' && (
          <>
            <mesh position={[x - 0.011, 0.050, 0.233]}>
              <sphereGeometry args={[0.019, 8, 6]} />
              <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={0.7} roughness={0.2} />
            </mesh>
            <mesh position={[x + 0.011, 0.050, 0.233]}>
              <sphereGeometry args={[0.019, 8, 6]} />
              <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={0.7} roughness={0.2} />
            </mesh>
            <mesh position={[x, 0.032, 0.230]} scale={[1.4, 1.15, 1]}>
              <sphereGeometry args={[0.020, 8, 6]} />
              <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={0.7} roughness={0.2} />
            </mesh>
          </>
        )}

        {/* Star eyes: 4 crossing bars + bright centre */}
        {eyeType === 'star' && (
          <>
            {([0, Math.PI / 4, Math.PI / 2, Math.PI * 3 / 4] as number[]).map((rot, i) => (
              <mesh key={i} position={[x, 0.04, 0.231]} rotation={[0, 0, rot]}>
                <boxGeometry args={[0.064, 0.013, 0.005]} />
                <meshStandardMaterial color={eyeCol} emissive={eyeCol} emissiveIntensity={1.0} roughness={0.1} />
              </mesh>
            ))}
            <mesh position={[x, 0.04, 0.235]}>
              <sphereGeometry args={[0.011, 6, 6]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1.5} roughness={0.05} />
            </mesh>
          </>
        )}

        {/* Specular highlight (not for wink-closed, happy arc, or x-eyes) */}
        {!isWinkClosed && eyeType !== 'happy' && eyeType !== 'x' && (
          <>
            <mesh position={[sx, 0.048, 0.230]}>
              <sphereGeometry args={[0.008, 6, 6]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
            </mesh>
            {/* Secondary smaller highlight */}
            <mesh position={[x + side * 0.005, 0.032, 0.228]}>
              <sphereGeometry args={[0.004, 5, 5]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
            </mesh>
          </>
        )}

        {/* Eyelid (blink animation target) */}
        <mesh ref={lidRef} position={[x, 0.065, 0.225]} scale={[1, 0.01, 1]}>
          <sphereGeometry args={[0.052, 8, 4, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} side={THREE.DoubleSide} />
        </mesh>

 {/* Eyebrow — natural arch shape */}
<group ref={browRef} position={[bx, browY, 0.2]} rotation={[0, 0, browRotZ]}>
  {/* Main brow body — slightly curved via scale */}
  <mesh scale={[1.0, 1.0, 1.0]}>
    <boxGeometry args={[0.052, 0.013, 0.007]} />
    <meshStandardMaterial color="#3a2816" roughness={0.7} />
  </mesh>
  {/* Inner thicker end */}
  <mesh position={[side * -0.016, 0.001, 0.001]} scale={[0.35, 1.2, 1.0]}>
    <boxGeometry args={[0.052, 0.013, 0.007]} />
    <meshStandardMaterial color="#3a2816" roughness={0.7} />
  </mesh>
  {/* Outer tapered end */}
  <mesh position={[side * 0.020, -0.002, 0.0]} scale={[0.28, 0.55, 0.8]}>
    <boxGeometry args={[0.052, 0.013, 0.007]} />
    <meshStandardMaterial color="#4a3826" roughness={0.75} />
  </mesh>
</group>
      </>
    );
  };

  return (
    <>
      {/* Blush */}
      {face?.blush && (
        <>
          <mesh position={[-0.12, 0.0, 0.18]}>
            <sphereGeometry args={[0.042, 8, 6]} />
            <meshStandardMaterial color={face.blushColor || '#FF9999'} transparent opacity={0.42} roughness={0.9} />
          </mesh>
          <mesh position={[0.12, 0.0, 0.18]}>
            <sphereGeometry args={[0.042, 8, 6]} />
            <meshStandardMaterial color={face.blushColor || '#FF9999'} transparent opacity={0.42} roughness={0.9} />
          </mesh>
        </>
      )}

      {/* Eyes */}
      {renderEye(-1, leftIrisRef,  leftLidRef,  leftBrowRef)}
      {renderEye( 1, rightIrisRef, rightLidRef, rightBrowRef)}

      {/* ── MOUTH ─────────────────────────────────────────── */}
      {mouthType === 'none' ? null

: mouthType === 'smile' ? (
  <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.2]}>
    {/* Felső ajak */}
    <mesh position={[0, 0.014, 0.013]} scale={[1.0, 0.55, 0.6]}>
      <sphereGeometry args={[0.042, 10, 6]} />
      <meshStandardMaterial color={mouthCol} roughness={0.45} />
    </mesh>
    {/* Cupid's bow csúcs bal */}
    <mesh position={[-0.018, 0.022, 0.015]} scale={[0.45, 0.38, 0.5]}>
      <sphereGeometry args={[0.028, 8, 5]} />
      <meshStandardMaterial color={mouthCol} roughness={0.45} />
    </mesh>
    {/* Cupid's bow csúcs jobb */}
    <mesh position={[0.018, 0.022, 0.015]} scale={[0.45, 0.38, 0.5]}>
      <sphereGeometry args={[0.028, 8, 5]} />
      <meshStandardMaterial color={mouthCol} roughness={0.45} />
    </mesh>
    {/* Alsó ajak */}
    <mesh position={[0, -0.008, 0.015]} scale={[1.05, 0.52, 0.65]}>
      <sphereGeometry args={[0.042, 10, 6]} />
      <meshStandardMaterial color={mouthCol} roughness={0.42} />
    </mesh>
    {/* Ajak közepe árnyék vonal */}
    <mesh position={[0, 0.004, 0.018]}>
      <boxGeometry args={[0.068, 0.006, 0.004]} />
      <meshStandardMaterial color="#8a4040" roughness={0.6} />
    </mesh>
    {/* Szájzug bal */}
    <mesh position={[-0.038, 0.004, 0.012]} scale={[0.35, 0.35, 0.4]}>
      <sphereGeometry args={[0.018, 6, 5]} />
      <meshStandardMaterial color="#9a5050" roughness={0.6} />
    </mesh>
    {/* Szájzug jobb */}
    <mesh position={[0.038, 0.004, 0.012]} scale={[0.35, 0.35, 0.4]}>
      <sphereGeometry args={[0.018, 6, 5]} />
      <meshStandardMaterial color="#9a5050" roughness={0.6} />
    </mesh>
  </group>

      ) : mouthType === 'grin' ? (
        /* Wide ∪ arc + white teeth strip */
        <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.2]}>
          <mesh position={[0, 0.012, 0.013]} rotation={[0, 0, Math.PI]}>
            <torusGeometry args={[0.050, 0.011, 6, 16, Math.PI]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
          <mesh position={[0, -0.014, 0.018]}>
            <boxGeometry args={[0.076, 0.022, 0.007]} />
            <meshStandardMaterial color="#f4f0e8" roughness={0.3} />
          </mesh>
        </group>

      ) : mouthType === 'sad' ? (
        /* Downward-drooping ∩ arc (frown) */
        <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.2]}>
          <mesh position={[0, -0.012, 0.013]}>
            <torusGeometry args={[0.036, 0.010, 6, 16, Math.PI]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
        </group>

      ) : mouthType === 'neutral' ? (
        /* Thin horizontal bar */
        <mesh ref={mouthRef as React.Ref<THREE.Mesh>} position={[0, -0.1, 0.213]}>
          <boxGeometry args={[0.066, 0.011, 0.009]} />
          <meshStandardMaterial color={mouthCol} roughness={0.5} />
        </mesh>

      ) : mouthType === 'open' ? (
        /* Full torus ring (O-shape) + dark interior */
        <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.2]}>
          <mesh position={[0, 0, 0.014]} scale={[1, 0.75, 1]}>
            <torusGeometry args={[0.034, 0.014, 6, 12]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0, 0.012]}>
            <circleGeometry args={[0.028, 10]} />
            <meshStandardMaterial color="#1a0808" roughness={0.9} />
          </mesh>
        </group>

      ) : mouthType === 'tongue' ? (
        <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.2]}>
          <mesh position={[0, 0, 0.012]}>
            <boxGeometry args={[0.075, 0.022, 0.010]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
          <mesh position={[0, -0.026, 0.010]}>
            <sphereGeometry args={[0.026, 8, 6]} />
            <meshStandardMaterial color="#FF6B8A" roughness={0.6} />
          </mesh>
        </group>

      ) : mouthType === 'cat' ? (
        <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.2]}>
          <mesh position={[-0.026, 0, 0.012]} rotation={[0, 0, -0.42]}>
            <boxGeometry args={[0.034, 0.013, 0.008]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
          <mesh position={[0.026, 0, 0.012]} rotation={[0, 0, 0.42]}>
            <boxGeometry args={[0.034, 0.013, 0.008]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
          <mesh position={[0, 0, 0.012]}>
            <sphereGeometry args={[0.013, 6, 6]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
        </group>

      ) : mouthType === 'fangs' ? (
        <group ref={mouthRef as React.Ref<THREE.Group>} position={[0, -0.1, 0.2]}>
          <mesh position={[0, 0, 0.013]}>
            <boxGeometry args={[0.090, 0.028, 0.012]} />
            <meshStandardMaterial color={mouthCol} roughness={0.5} />
          </mesh>
          {([-0.025, 0.025] as number[]).map((fx, i) => (
            <mesh key={i} position={[fx, -0.025, 0.013]}>
              <coneGeometry args={[0.011, 0.032, 4]} />
              <meshStandardMaterial color="#ffffff" roughness={0.3} />
            </mesh>
          ))}
        </group>

      ) : null}
    </>
  );
}

// ── MAIN CHARACTER ────────────────────────────────────────
function Character({
  mood,
  isWalking = false,
  facing,
  skinColor: legacySkinColor = '#e8c9a0',
  outfitColor: legacyOutfitColor = '#6b8fad',
  jumpTrigger,
  gender = 'girl',
  activeSkin,
  activeFace,
  activeTop,
  activeBottom,
  activeShoe,
  activeCape,
  activeGlasses,
  activeGloves,
  activeHat,
  activeTrail,
}: AvatarCompanionProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftLidRef = useRef<THREE.Mesh | null>(null);
  const rightLidRef = useRef<THREE.Mesh | null>(null);
  const leftIrisRef = useRef<THREE.Mesh | null>(null);
  const rightIrisRef = useRef<THREE.Mesh | null>(null);
 const leftBrowRef = useRef<THREE.Object3D | null>(null);
const rightBrowRef = useRef<THREE.Object3D | null>(null);
  const mouthRef = useRef<THREE.Mesh | null>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftForearmRef = useRef<THREE.Group | null>(null);
  const rightForearmRef = useRef<THREE.Group | null>(null);
  const leftShoulderRef = useRef<THREE.Mesh>(null);
  const rightShoulderRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const moodRef = useRef(mood);
  const isWalkingRef = useRef(isWalking);
  const facingRef = useRef(facing);
  const tRef = useRef(0);
  const blinkTimer = useRef(0);
  const blinkNext = useRef(nextBlink());
  const blinkPhase = useRef(-1);
  const jumpTimer = useRef(-1);
  const reactionDurationRef = useRef(0.6);
  const reactionMoodRef = useRef<'idle' | 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin'>('idle');
  const [frameT, setFrameT] = useState(0);

  // ── Resolve colors from items ──────────────────────────
  // Default skin (id='default') = treat same as no skin → warm fallback colors
  const hasRealSkin = activeSkin && activeSkin.id !== 'default';
  const actualSkinColor = hasRealSkin ? activeSkin!.headColor : legacySkinColor;
  const actualLimbColor = hasRealSkin ? activeSkin!.limbColor : legacySkinColor;
  const skinEmissive = hasRealSkin ? activeSkin!.emissive : null;
  const skinEmissiveIntensity = hasRealSkin ? activeSkin!.emissiveIntensity * 0.3 : 0;

  const actualBodyColor = activeTop ? activeTop.color : (hasRealSkin ? activeSkin!.bodyColor : legacyOutfitColor);
  const actualBodyAccent = activeTop?.accent || actualBodyColor;
  const actualLegColor = activeBottom ? activeBottom.color : (hasRealSkin ? activeSkin!.limbColor : '#1e3a5f');
  const actualShoeColor = activeShoe ? activeShoe.color : (hasRealSkin ? activeSkin!.shoeColor : '#3a2010');
  const actualHandColor = activeGloves ? activeGloves.color : actualLimbColor;
  const skinDark = new THREE.Color(actualSkinColor).multiplyScalar(0.82).getStyle();

  // Hair color (warm chestnut brown for default, or skin's headColor for fantasy skins)
  const hairColor = hasRealSkin ? activeSkin!.headColor : '#4a2e10';

  useEffect(() => {
    moodRef.current = mood;
    tRef.current = 0;
  }, [mood]);

  useEffect(() => { isWalkingRef.current = isWalking; }, [isWalking]);
  useEffect(() => { facingRef.current = facing; }, [facing]);

  useEffect(() => {
    if (jumpTrigger?.reaction) {
      jumpTimer.current = 0;
      reactionMoodRef.current = jumpTrigger.reaction;
      reactionDurationRef.current = ['wave', 'dance', 'spin'].includes(jumpTrigger.reaction) ? 1.4 : 0.6;
    }
  }, [jumpTrigger?.timestamp]);

  useFrame((_state, delta) => {
    if (!groupRef.current || !headRef.current || !bodyRef.current) return;

    tRef.current += delta;
    blinkTimer.current += delta;
    setFrameT(tRef.current);

    if (jumpTimer.current >= 0) {
      jumpTimer.current += delta / reactionDurationRef.current;
      if (jumpTimer.current > 1) jumpTimer.current = -1;
    }

    const t = tRef.current;
    type AnyMood = 'idle' | 'focused' | 'happy' | 'disappointed' | 'victory' | 'surprised' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin';
    let m: AnyMood = moodRef.current;
    if (jumpTimer.current >= 0) m = reactionMoodRef.current;

    const lerp = THREE.MathUtils.lerp;

    let jumpHeight = 0;
    if (jumpTimer.current >= 0) {
      jumpHeight = Math.sin(jumpTimer.current * Math.PI) * 0.35;
    }

    groupRef.current.position.y = lerp(groupRef.current.position.y, jumpHeight, 0.15);
    // Facing direction (only when not in a spin/dance reaction)
    if (jumpTimer.current < 0) {
      // se=screen-right (+45°), sw=screen-left (-45°), ne=away-right (+135°), nw=away-left (-135°)
      const facingMap: Record<string, number> = {
        se:  Math.PI / 4,        //  +45° — right profile toward camera
        sw: -Math.PI / 4,        //  -45° — left profile toward camera
        ne:  Math.PI * 3 / 4,    // +135° — back-right (away from camera)
        nw: -Math.PI * 3 / 4,    // -135° — back-left  (away from camera)
      };
      const facingTargetY = facingRef.current ? (facingMap[facingRef.current] ?? 0) : 0;
      // Normalize angle diff so lerp always takes the shortest rotation path
      const curY = groupRef.current.rotation.y;
      let diff = facingTargetY - curY;
      while (diff >  Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      groupRef.current.rotation.y = lerp(curY, curY + diff, 0.14);
    }
    groupRef.current.rotation.z = lerp(groupRef.current.rotation.z, 0, 0.1);
    headRef.current.rotation.x = lerp(headRef.current.rotation.x, 0, 0.1);
    headRef.current.rotation.y = lerp(headRef.current.rotation.y, 0, 0.1);
    headRef.current.rotation.z = lerp(headRef.current.rotation.z, 0, 0.1);
    bodyRef.current.scale.x = lerp(bodyRef.current.scale.x, 1, 0.12);
    bodyRef.current.scale.y = lerp(bodyRef.current.scale.y, 1, 0.12);
    bodyRef.current.position.y = lerp(bodyRef.current.position.y, 0, 0.1);

    if (leftLegRef.current && rightLegRef.current) {
      let legScale = 1;
      if (jumpTimer.current >= 0) legScale = 1 - 0.3 * Math.sin(jumpTimer.current * Math.PI);
      leftLegRef.current.scale.y = lerp(leftLegRef.current.scale.y, legScale, 0.15);
      rightLegRef.current.scale.y = lerp(rightLegRef.current.scale.y, legScale, 0.15);
      if (jumpTimer.current >= 0) {
        leftLegRef.current.position.y = lerp(leftLegRef.current.position.y, -0.52, 0.15);
        rightLegRef.current.position.y = lerp(rightLegRef.current.position.y, -0.52, 0.15);
      }
    }

    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.15, 0.1);
      leftArmRef.current.rotation.x = lerp(leftArmRef.current.rotation.x, 0.12, 0.1);
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.15, 0.1);
      rightArmRef.current.rotation.x = lerp(rightArmRef.current.rotation.x, 0.12, 0.1);
    }
    if (leftForearmRef.current) {
      leftForearmRef.current.rotation.x = lerp(leftForearmRef.current.rotation.x, 0, 0.1);
      leftForearmRef.current.rotation.z = lerp(leftForearmRef.current.rotation.z, 0, 0.1);
    }
    if (rightForearmRef.current) {
      rightForearmRef.current.rotation.x = lerp(rightForearmRef.current.rotation.x, 0, 0.1);
      rightForearmRef.current.rotation.z = lerp(rightForearmRef.current.rotation.z, 0, 0.1);
    }
    // Leg rotation reset (when not in reaction and not walking)
    if (jumpTimer.current < 0 && !isWalkingRef.current && leftLegRef.current && rightLegRef.current) {
      leftLegRef.current.rotation.x = lerp(leftLegRef.current.rotation.x || 0, 0, 0.08);
      rightLegRef.current.rotation.x = lerp(rightLegRef.current.rotation.x || 0, 0, 0.08);
    }

    // Walk animation — alternating arms and legs
    if (isWalkingRef.current && jumpTimer.current < 0 &&
        leftArmRef.current && rightArmRef.current &&
        leftLegRef.current && rightLegRef.current) {
      const wf = Math.PI * 3.2; // walk cycle frequency
      const armSwing = Math.sin(t * wf) * 0.48;
      const legSwing = Math.sin(t * wf) * 0.38;
      leftArmRef.current.rotation.x = armSwing;
      rightArmRef.current.rotation.x = -armSwing;
      leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.08, 0.12);
      rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.08, 0.12);
      leftLegRef.current.rotation.x = -legSwing;
      rightLegRef.current.rotation.x = legSwing;
      // Subtle body bob
      if (bodyRef.current) {
        bodyRef.current.position.y = lerp(bodyRef.current.position.y, Math.abs(Math.sin(t * wf)) * 0.012, 0.2);
      }
    }

    if (leftShoulderRef.current && rightShoulderRef.current) {
      leftShoulderRef.current.rotation.z = lerp(leftShoulderRef.current.rotation.z, 0, 0.1);
      leftShoulderRef.current.rotation.x = lerp(leftShoulderRef.current.rotation.x, 0, 0.1);
      rightShoulderRef.current.rotation.z = lerp(rightShoulderRef.current.rotation.z, 0, 0.1);
      rightShoulderRef.current.rotation.x = lerp(rightShoulderRef.current.rotation.x, 0, 0.1);
    }

    // Blink
    if (blinkPhase.current < 0) {
      if (blinkTimer.current >= blinkNext.current) {
        blinkPhase.current = 0;
        blinkTimer.current = 0;
      }
    }
    if (blinkPhase.current >= 0) {
      blinkPhase.current += delta / 0.12;
      if (blinkPhase.current > 2) {
        blinkPhase.current = -1;
        blinkTimer.current = 0;
        blinkNext.current = nextBlink();
      }
    }
    const lidClose = blinkPhase.current >= 0
      ? (blinkPhase.current <= 1 ? blinkPhase.current : 2 - blinkPhase.current)
      : 0;
    if (leftLidRef.current) leftLidRef.current.scale.y = 0.01 + lidClose * 1.2;
    if (rightLidRef.current) rightLidRef.current.scale.y = 0.01 + lidClose * 1.2;
    // Eyebrow raise during blink
    if (leftBrowRef.current) leftBrowRef.current.position.y = 0.1 + lidClose * 0.025;
    if (rightBrowRef.current) rightBrowRef.current.position.y = 0.1 + lidClose * 0.025;

    // Gaze
    if (leftIrisRef.current && rightIrisRef.current) {
      const gazeX = Math.sin(t * 0.4) * 0.008;
      const gazeY = Math.sin(t * 0.3 + 0.7) * 0.005;
      leftIrisRef.current.position.x = -0.08 + gazeX;
      leftIrisRef.current.position.y = 0.04 + gazeY;
      rightIrisRef.current.position.x = 0.08 + gazeX;
      rightIrisRef.current.position.y = 0.04 + gazeY;
    }

    // Mouth reset
    if (mouthRef.current) {
      mouthRef.current.scale.x = lerp(mouthRef.current.scale.x, 1, 0.12);
      mouthRef.current.scale.y = lerp(mouthRef.current.scale.y, 1, 0.12);
      mouthRef.current.position.y = lerp(mouthRef.current.position.y, -0.1, 0.12);
    }

    // Jump reactions — full body
    if (jumpTimer.current >= 0) {
      const jp = jumpTimer.current;
      switch (reactionMoodRef.current) {
        case 'happy': {
          headRef.current.rotation.x = Math.sin(jp * Math.PI * 2) * 0.15;
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 3) * 0.07;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - Math.sin(jp * Math.PI) * 1.1;
            rightArmRef.current.rotation.z = 0.15 + Math.sin(jp * Math.PI) * 1.1;
            leftArmRef.current.rotation.x = -Math.sin(jp * Math.PI) * 0.35;
            rightArmRef.current.rotation.x = -Math.sin(jp * Math.PI) * 0.35;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 2) * 0.45;
            rightForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 2 + 0.6) * 0.45;
          }
          if (leftLegRef.current && rightLegRef.current) {
            leftLegRef.current.rotation.x = Math.sin(jp * Math.PI * 2) * 0.28;
            rightLegRef.current.rotation.x = Math.sin(jp * Math.PI * 2 + Math.PI) * 0.28;
          }
          break;
        }
        case 'surprised': {
          const shoot = Math.min(1, jp * 5);
          headRef.current.rotation.x = -0.3 * shoot;
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 2) * 0.04;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - shoot * 1.0;
            rightArmRef.current.rotation.z = 0.15 + shoot * 1.0;
            leftArmRef.current.rotation.x = -shoot * 0.55;
            rightArmRef.current.rotation.x = -shoot * 0.55;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = -shoot * 0.7;
            rightForearmRef.current.rotation.x = -shoot * 0.7;
          }
          if (leftLegRef.current && rightLegRef.current) {
            leftLegRef.current.rotation.x = shoot * 0.12;
            rightLegRef.current.rotation.x = -shoot * 0.12;
          }
          break;
        }
        case 'victory': {
          const arm = Math.min(1, jp * 2.5);
          headRef.current.rotation.x = -0.3 * Math.min(1, jp * 2);
          groupRef.current.rotation.y += 0.08;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - arm * 1.4;
            rightArmRef.current.rotation.z = 0.15 + arm * 1.4;
            leftArmRef.current.rotation.x = -arm * 0.55;
            rightArmRef.current.rotation.x = -arm * 0.55;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = -Math.min(1, jp * 3) * 0.5;
            rightForearmRef.current.rotation.x = -Math.min(1, jp * 3) * 0.5;
          }
          if (leftLegRef.current && rightLegRef.current) {
            leftLegRef.current.rotation.x = Math.sin(jp * Math.PI * 4) * 0.22;
            rightLegRef.current.rotation.x = Math.sin(jp * Math.PI * 4 + Math.PI) * 0.22;
          }
          break;
        }
        case 'confused': {
          headRef.current.rotation.x = 0.2;
          headRef.current.rotation.z = 0.22 * Math.min(1, jp * 3);
          if (rightArmRef.current) {
            rightArmRef.current.rotation.z = 0.15 + Math.min(1, jp * 3) * 0.75;
            rightArmRef.current.rotation.x = -Math.min(1, jp * 3) * 0.65;
          }
          if (rightForearmRef.current) {
            rightForearmRef.current.rotation.x = -Math.min(1, jp * 2) * 0.85;
          }
          if (leftArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - Math.min(1, jp * 2) * 0.18;
            leftArmRef.current.rotation.x = 0.18;
          }
          if (leftForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 3) * 0.12;
          }
          break;
        }
        case 'laughing': {
          headRef.current.rotation.y = Math.sin(jp * Math.PI * 5) * 0.18;
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 5 + 0.5) * 0.13;
          groupRef.current.rotation.z = Math.sin(jp * Math.PI * 3) * 0.07;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.x = 0.5 + Math.sin(jp * Math.PI * 4) * 0.1;
            rightArmRef.current.rotation.x = 0.5 + Math.sin(jp * Math.PI * 4) * 0.1;
            leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.08, 0.15);
            rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.08, 0.15);
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = 0.65 + Math.sin(jp * Math.PI * 4) * 0.12;
            rightForearmRef.current.rotation.x = 0.65 + Math.sin(jp * Math.PI * 4) * 0.12;
          }
          break;
        }
        case 'wave': {
          headRef.current.rotation.y = -0.18;
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 2) * 0.05;
          groupRef.current.rotation.y = Math.sin(jp * Math.PI) * 0.1;
          if (rightArmRef.current) {
            rightArmRef.current.rotation.z = 0.15 + Math.min(1, jp * 4) * 1.2;
            rightArmRef.current.rotation.x = -Math.min(1, jp * 4) * 0.35;
          }
          if (rightForearmRef.current) {
            rightForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 6) * 0.55;
            rightForearmRef.current.rotation.z = Math.sin(jp * Math.PI * 6) * 0.18;
          }
          if (leftArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 + Math.sin(jp * Math.PI * 1.5) * 0.08;
            leftArmRef.current.rotation.x = 0.1;
          }
          if (leftForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 2) * 0.1;
          }
          break;
        }
        case 'dance': {
          const dFreq = jp * Math.PI * 4;
          headRef.current.rotation.z = Math.sin(dFreq) * 0.13;
          headRef.current.rotation.y = Math.sin(dFreq * 0.5) * 0.15;
          groupRef.current.rotation.z = Math.sin(dFreq * 0.5) * 0.06;
          bodyRef.current.position.y = Math.abs(Math.sin(dFreq)) * 0.045;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -0.15 - Math.abs(Math.sin(dFreq)) * 0.75;
            rightArmRef.current.rotation.z = 0.15 + Math.abs(Math.sin(dFreq + Math.PI)) * 0.75;
            leftArmRef.current.rotation.x = Math.sin(dFreq) * 0.22;
            rightArmRef.current.rotation.x = Math.sin(dFreq + Math.PI) * 0.22;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(dFreq + Math.PI * 0.5) * 0.45;
            rightForearmRef.current.rotation.x = Math.sin(dFreq - Math.PI * 0.5) * 0.45;
          }
          if (leftLegRef.current && rightLegRef.current) {
            leftLegRef.current.rotation.x = Math.sin(dFreq) * 0.18;
            rightLegRef.current.rotation.x = Math.sin(dFreq + Math.PI) * 0.18;
          }
          if (leftShoulderRef.current && rightShoulderRef.current) {
            leftShoulderRef.current.position.y = 0.26 + Math.sin(dFreq) * 0.022;
            rightShoulderRef.current.position.y = 0.26 + Math.sin(dFreq + Math.PI) * 0.022;
          }
          break;
        }
        case 'spin': {
          groupRef.current.rotation.y += 0.11;
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -1.0, 0.15);
            rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 1.0, 0.15);
            leftArmRef.current.rotation.x = 0;
            rightArmRef.current.rotation.x = 0;
          }
          if (leftForearmRef.current && rightForearmRef.current) {
            leftForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 4) * 0.3;
            rightForearmRef.current.rotation.x = Math.sin(jp * Math.PI * 4 + Math.PI) * 0.3;
          }
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 6) * 0.1;
          bodyRef.current.position.y = Math.sin(jp * Math.PI * 2) * 0.03;
          break;
        }
      }
    }

    // Mood animations
    switch (m) {
      case 'idle': {
        const breathA = Math.sin(t * 1.3) * 0.02;
        bodyRef.current.position.y = breathA;
        groupRef.current.rotation.z = Math.sin(t * 0.65) * 0.035;
        headRef.current.rotation.z = Math.sin(t * 0.55 + 1.2) * 0.025;
        headRef.current.rotation.y = Math.sin(t * 0.4 + 0.5) * 0.02;
        if (leftArmRef.current && rightArmRef.current) {
          leftArmRef.current.rotation.z = -0.15 + Math.sin(t * 0.75) * 0.045;
          rightArmRef.current.rotation.z = 0.15 - Math.sin(t * 0.75 + 0.8) * 0.045;
          leftArmRef.current.rotation.x = 0.1 + Math.sin(t * 0.6 + 0.3) * 0.03;
          rightArmRef.current.rotation.x = 0.1 + Math.sin(t * 0.55) * 0.03;
        }
        if (leftForearmRef.current && rightForearmRef.current) {
          leftForearmRef.current.rotation.x = Math.sin(t * 0.9) * 0.07;
          rightForearmRef.current.rotation.x = Math.sin(t * 0.85 + 0.6) * 0.07;
        }
        if (leftShoulderRef.current && rightShoulderRef.current) {
          const sBreath = Math.sin(t * 1.3) * 0.006;
          leftShoulderRef.current.position.y = 0.26 + sBreath;
          rightShoulderRef.current.position.y = 0.26 + sBreath;
        }
        if (leftLegRef.current && rightLegRef.current) {
          const wShift = Math.sin(t * 0.5) * 0.007;
          leftLegRef.current.position.y = -0.52 + wShift;
          rightLegRef.current.position.y = -0.52 - wShift;
        }
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.1 + Math.sin(t * 1.0) * 0.04;
          mouthRef.current.scale.y = 0.7;
          mouthRef.current.position.y = -0.1;
        }
        break;
      }
      case 'focused': {
        const fBreath = Math.sin(t * 1.8) * 0.012;
        bodyRef.current.position.y = fBreath;
        headRef.current.rotation.y = Math.sin(t * 0.3) * 0.01;
        headRef.current.rotation.z = Math.sin(t * 0.25 + 0.5) * 0.01;
        groupRef.current.rotation.z = Math.sin(t * 1.2) * 0.012;
        if (mouthRef.current) {
          mouthRef.current.scale.x = 0.85;
          mouthRef.current.scale.y = 0.45;
          mouthRef.current.position.y = -0.1;
        }
        break;
      }
      case 'happy': {
        if (t < 1.4) {
          const p = t / 1.4;
          const jumpH = Math.sin(p * Math.PI) * 0.38;
          const ss = Math.sin(p * Math.PI);
          bodyRef.current.scale.y = 1 + ss * 0.1;
          bodyRef.current.scale.x = 1 - ss * 0.06;
          groupRef.current.position.y = Math.max(0, jumpH);
          groupRef.current.rotation.y = p * Math.PI * 0.3;
          if (leftArmRef.current && rightArmRef.current) {
            const armUp = Math.min(1, p * 1.8);
            leftArmRef.current.rotation.z = -0.15 - armUp * 0.8;
            rightArmRef.current.rotation.z = 0.15 + armUp * 0.8;
            leftArmRef.current.rotation.x = 0;
            rightArmRef.current.rotation.x = 0;
          }
          if (leftShoulderRef.current && rightShoulderRef.current) {
            leftShoulderRef.current.position.y = 0.26 + p * 0.02;
            rightShoulderRef.current.position.y = 0.26 + p * 0.02;
          }
        }
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.5;
          mouthRef.current.scale.y = 1.2;
          mouthRef.current.position.y = -0.11;
        }
        break;
      }
      case 'disappointed': {
        if (t < 2.0) {
          const p = Math.min(1, t / 2.0);
          const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;
          headRef.current.rotation.x = lerp(headRef.current.rotation.x, eased * 0.24, 0.08);
          if (leftShoulderRef.current && rightShoulderRef.current) {
            const shoulderTilt = eased * 0.08;
            leftShoulderRef.current.rotation.z = shoulderTilt;
            rightShoulderRef.current.rotation.z = shoulderTilt;
          }
        }
        bodyRef.current.position.y = lerp(bodyRef.current.position.y, -0.008, 0.12);
        if (leftArmRef.current && rightArmRef.current) {
          leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.1, 0.12);
          rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.1, 0.12);
          leftArmRef.current.rotation.x = lerp(leftArmRef.current.rotation.x, 0.08, 0.12);
          rightArmRef.current.rotation.x = lerp(rightArmRef.current.rotation.x, 0.08, 0.12);
        }
        if (mouthRef.current) {
          mouthRef.current.scale.x = 0.75;
          mouthRef.current.scale.y = 0.3;
          mouthRef.current.position.y = -0.1;
        }
        break;
      }
      case 'victory': {
        if (t < 2.8) {
          const p = t / 2.8;
          const jumpH = Math.sin(p * Math.PI) * 0.6;
          groupRef.current.position.y = Math.max(0, jumpH);
          groupRef.current.rotation.y += 0.065;
          if (leftArmRef.current && rightArmRef.current) {
            const arm = Math.min(1, p * 2.5);
            leftArmRef.current.rotation.z = -0.15 - arm * 1.1;
            rightArmRef.current.rotation.z = 0.15 + arm * 1.1;
            leftArmRef.current.rotation.x = -arm * 0.3;
            rightArmRef.current.rotation.x = -arm * 0.3;
          }
          if (leftShoulderRef.current && rightShoulderRef.current) {
            leftShoulderRef.current.position.y = 0.26 + (t / 2.8) * 0.03;
            rightShoulderRef.current.position.y = 0.26 + (t / 2.8) * 0.03;
          }
        }
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.6;
          mouthRef.current.scale.y = 1.5;
          mouthRef.current.position.y = -0.11;
        }
        break;
      }
    }

    if (m !== 'disappointed') {
      groupRef.current.rotation.x = lerp(groupRef.current.rotation.x, 0, 0.1);
    }
  });

  // Boy hair: short, spiky
  // Girl hair: longer with side tufts
  const isGirl = gender === 'girl';
  // Body shape: boy slightly wider, girl default — human proportions
  const bodyW = isGirl ? 0.40 : 0.43;
  const bodyH = isGirl ? 0.58 : 0.60;

  return (
    <group ref={groupRef} position={[0, -0.05, 0]} scale={0.78}>

      {/* ══ TRAIL ════════════════════════════════════════ */}
      {activeTrail && <TrailMesh trail={activeTrail} t={frameT} />}

      {/* ══ CAPE (behind body) ═══════════════════════════ */}
      {activeCape && <CapeMesh cape={activeCape} t={frameT} />}

      {/* ══ BODY ══════════════════════════════════════ */}
<mesh ref={bodyRef} position={[0, 0, 0]}>
  <boxGeometry args={[bodyW, bodyH, 0.28]} />
  <meshStandardMaterial
    color={actualBodyColor}
    emissive={skinEmissive || '#000000'}
    emissiveIntensity={skinEmissiveIntensity}
    roughness={0.68}
    metalness={0.04}
  />
</mesh>


{/* ── Shirt collar / accent ─────────────────────── */}
{activeTop && (
  <>
    {/* Gallér */}
    <mesh position={[0, 0.32, 0.05]}>
      <boxGeometry args={[0.24, 0.05, 0.05]} />
      <meshStandardMaterial color={actualBodyAccent} roughness={0.6} />
    </mesh>
    {/* Gallér bal szárny */}
    <mesh position={[-0.06, 0.30, 0.08]} rotation={[0, 0.3, 0.15]}>
      <boxGeometry args={[0.08, 0.038, 0.018]} />
      <meshStandardMaterial color={actualBodyAccent} roughness={0.6} />
    </mesh>
    {/* Gallér jobb szárny */}
    <mesh position={[0.06, 0.30, 0.08]} rotation={[0, -0.3, -0.15]}>
      <boxGeometry args={[0.08, 0.038, 0.018]} />
      <meshStandardMaterial color={actualBodyAccent} roughness={0.6} />
    </mesh>
  </>
)}

{/* ── Gombok ────────────────────────────────────── */}
{[0.18, 0.08, -0.02].map((y, i) => (
  <mesh key={i} position={[0, y, 0.145]}>
    <cylinderGeometry args={[0.012, 0.012, 0.008, 8]} />
    <meshStandardMaterial color={actualBodyAccent} roughness={0.4} metalness={0.3} />
  </mesh>
))}

{/* ── Bal zseb ──────────────────────────────────── */}
<mesh position={[-0.10, 0.05, 0.145]}>
  <boxGeometry args={[0.072, 0.065, 0.008]} />
  <meshStandardMaterial color={actualBodyColor} roughness={0.72} />
</mesh>
{/* Bal zseb szegély */}
<mesh position={[-0.10, 0.05, 0.148]}>
  <boxGeometry args={[0.075, 0.068, 0.004]} />
  <meshStandardMaterial color={actualBodyAccent} roughness={0.65} transparent opacity={0.5} />
</mesh>

{/* ── Jobb zseb ─────────────────────────────────── */}
<mesh position={[0.10, 0.05, 0.145]}>
  <boxGeometry args={[0.072, 0.065, 0.008]} />
  <meshStandardMaterial color={actualBodyColor} roughness={0.72} />
</mesh>
{/* Jobb zseb szegély */}
<mesh position={[0.10, 0.05, 0.148]}>
  <boxGeometry args={[0.075, 0.068, 0.004]} />
  <meshStandardMaterial color={actualBodyAccent} roughness={0.65} transparent opacity={0.5} />
</mesh>

{/* ── Nadrág vonal (derék) ──────────────────────── */}
<mesh position={[0, -0.26, 0.02]}>
  <boxGeometry args={[bodyW + 0.02, 0.018, 0.29]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.82} />
</mesh>
{/* Nadrág öv csat */}
<mesh position={[0, -0.255, 0.148]}>
  <boxGeometry args={[0.055, 0.028, 0.008]} />
  <meshStandardMaterial color="#8a7050" roughness={0.4} metalness={0.5} />
</mesh>

      {/* ══ SHOULDERS ══════════════════════════════════════ */}
      <mesh ref={leftShoulderRef} position={[-0.24, 0.26, 0]}>
        <sphereGeometry args={[0.085, 8, 6]} />
        <meshStandardMaterial
          color={actualBodyColor}
          emissive={skinEmissive || '#000000'}
          emissiveIntensity={skinEmissiveIntensity}
          roughness={0.7}
          metalness={0.04}
        />
      </mesh>
      <mesh ref={rightShoulderRef} position={[0.24, 0.26, 0]}>
        <sphereGeometry args={[0.085, 8, 6]} />
        <meshStandardMaterial
          color={actualBodyColor}
          emissive={skinEmissive || '#000000'}
          emissiveIntensity={skinEmissiveIntensity}
          roughness={0.7}
          metalness={0.04}
        />
      </mesh>

      {/* ══ NECK ════════════════════════════════════════════ */}
      <mesh position={[0, 0.40, 0]}>
        <cylinderGeometry args={[0.07, 0.085, 0.16, 8]} />
        <meshStandardMaterial
          color={actualSkinColor}
          emissive={skinEmissive || '#000000'}
          emissiveIntensity={skinEmissiveIntensity * 0.3}
          roughness={0.6}
          metalness={0.02}
        />
      </mesh>

      {/* ══ HEAD GROUP ══════════════════════════════════════ */}
      <group ref={headRef} position={[0, 0.58, 0]}>
        {/* Head */}
        <mesh>
          <sphereGeometry args={[0.18, 16, 12]} />
          <meshStandardMaterial
            color={actualSkinColor}
            emissive={skinEmissive || '#000000'}
            emissiveIntensity={skinEmissiveIntensity * 0.5}
            roughness={0.55}
            metalness={0.02}
          />
        </mesh>
{/* Chin */}
<mesh position={[0, -0.12, 0.05]} scale={[0.65, 0.32, 0.60]}>
  <sphereGeometry args={[0.10, 10, 6]} />
  <meshStandardMaterial color={skinDark} roughness={0.7} metalness={0} />
</mesh>

{/* ── ARCCSONT bal ──────────────────────────── */}
<mesh position={[-0.10, -0.03, 0.155]} scale={[0.45, 0.35, 0.28]}>
  <sphereGeometry args={[0.055, 8, 6]} />
  <meshStandardMaterial color={actualSkinColor} roughness={0.58} metalness={0.01} />
</mesh>

{/* ── ARCCSONT jobb ─────────────────────────── */}
<mesh position={[0.10, -0.03, 0.155]} scale={[0.45, 0.35, 0.28]}>
  <sphereGeometry args={[0.055, 8, 6]} />
  <meshStandardMaterial color={actualSkinColor} roughness={0.58} metalness={0.01} />
</mesh>

{/* ── HOMLOK enyhe kiemelkedés ──────────────── */}
<mesh position={[0, 0.10, 0.168]} scale={[0.75, 0.35, 0.20]}>
  <sphereGeometry args={[0.09, 8, 6]} />
  <meshStandardMaterial color={actualSkinColor} roughness={0.55} metalness={0.01} />
</mesh>

        {/* Face features (eyes, mouth, blush) */}
        <FaceFeatures
          face={activeFace || null}
          skinColor={actualSkinColor}
          mouthRef={mouthRef}
          leftLidRef={leftLidRef}
          rightLidRef={rightLidRef}
          leftIrisRef={leftIrisRef}
          rightIrisRef={rightIrisRef}
          leftBrowRef={leftBrowRef}
          rightBrowRef={rightBrowRef}
        />

        {/* Glasses on face */}
        {activeGlasses && <GlassesMesh glasses={activeGlasses} />}

        {/* ── HAIR ─────────────────────────────────── */}
        {isGirl ? (
          /* Girl: long hair — dome cap + side curtains + fringe */
          <>
            {/* Main cap — top half of head only, pulled back */}
            <mesh position={[0, 0.02, -0.02]} scale={[1.07, 1.05, 1.02]}>
              <sphereGeometry args={[0.18, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.48]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Back volume */}
            <mesh position={[0, -0.02, -0.06]} scale={[1.04, 1.08, 0.95]}>
              <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Left long curtain — pulled back, thinner */}
            <mesh position={[-0.16, -0.10, -0.02]} scale={[0.36, 1.1, 0.42]}>
              <sphereGeometry args={[0.13, 10, 8]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Right long curtain — pulled back, thinner */}
            <mesh position={[0.16, -0.10, -0.02]} scale={[0.36, 1.1, 0.42]}>
              <sphereGeometry args={[0.13, 10, 8]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Front fringe — small, above eyebrows only */}
            <mesh position={[0, 0.10, 0.16]} rotation={[0.65, 0, 0]} scale={[1.05, 0.28, 0.32]}>
              <sphereGeometry args={[0.09, 8, 6]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
          </>
        ) : (
          /* Boy: clean short cap + small fringe */
          <>
            {/* Main cap — top of head, not covering face */}
            <mesh position={[0, 0.02, -0.02]} scale={[1.07, 1.05, 1.02]}>
              <sphereGeometry args={[0.18, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.44]} />
              <meshStandardMaterial color={hairColor} roughness={0.75} metalness={0.02} />
            </mesh>
            {/* Back volume — gives shape */}
            <mesh position={[0, 0, -0.04]} scale={[1.05, 1.04, 0.92]}>
              <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.48]} />
              <meshStandardMaterial color={hairColor} roughness={0.75} metalness={0.02} />
            </mesh>
            {/* Front fringe strip — smaller, above eyebrows */}
            <mesh position={[0, 0.10, 0.15]} rotation={[0.70, 0, 0]} scale={[0.95, 0.25, 0.30]}>
              <sphereGeometry args={[0.09, 8, 6]} />
              <meshStandardMaterial color={hairColor} roughness={0.75} metalness={0.02} />
            </mesh>
          </>
        )}
{/* ── NOSE — small bridge + tip ────────────── */}
<group position={[0, -0.01, 0.18]}>
  {/* Nose bridge */}
  <mesh position={[0, 0.015, 0]} scale={[0.35, 0.55, 0.35]}>
    <sphereGeometry args={[0.030, 8, 6]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.50} />
  </mesh>
  {/* Nose tip — slightly warmer/darker */}
  <mesh position={[0, -0.008, 0.006]} scale={[0.48, 0.35, 0.38]}>
    <sphereGeometry args={[0.030, 8, 6]} />
    <meshStandardMaterial color={skinDark} roughness={0.55} transparent opacity={0.7} />
  </mesh>
</group>
        {/* ── BAL FÜL ───────────────────────────────── */}
<group position={[-0.178, 0.01, 0]}>
  <mesh scale={[0.38, 0.62, 0.22]}>
    <sphereGeometry args={[0.10, 10, 8]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.65} />
  </mesh>
  <mesh position={[0.018, 0, 0.005]} scale={[0.22, 0.38, 0.18]}>
    <sphereGeometry args={[0.10, 8, 6]} />
    <meshStandardMaterial color={skinDark} roughness={0.75} />
  </mesh>
  <mesh position={[0.025, -0.018, 0.022]} scale={[0.18, 0.22, 0.15]}>
    <sphereGeometry args={[0.06, 6, 5]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.65} />
  </mesh>
</group>

{/* ── JOBB FÜL ──────────────────────────────── */}
<group position={[0.178, 0.01, 0]}>
  <mesh scale={[0.38, 0.62, 0.22]}>
    <sphereGeometry args={[0.10, 10, 8]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.65} />
  </mesh>
  <mesh position={[-0.018, 0, 0.005]} scale={[0.22, 0.38, 0.18]}>
    <sphereGeometry args={[0.10, 8, 6]} />
    <meshStandardMaterial color={skinDark} roughness={0.75} />
  </mesh>
  <mesh position={[-0.025, -0.018, 0.022]} scale={[0.18, 0.22, 0.15]}>
    <sphereGeometry args={[0.06, 6, 5]} />
    <meshStandardMaterial color={actualSkinColor} roughness={0.65} />
  </mesh>
</group>
        {/* Hat on top of head */}
        {activeHat && <HatMesh hat={activeHat} skinColor={actualSkinColor} />}
      </group>

      {/* ══ LEFT ARM (shoulder→elbow→hand) ══════════════════ */}
      <group ref={leftArmRef} position={[-0.28, 0.22, 0]} rotation={[0.12, 0, -0.15]}>
{/* Upper arm */}
<mesh position={[0, -0.12, 0]}>
  <cylinderGeometry args={[0.045, 0.052, 0.24, 6]} />
  <meshStandardMaterial
    color={actualLimbColor}
    emissive={skinEmissive || '#000000'}
    emissiveIntensity={skinEmissiveIntensity * 0.4}
    roughness={0.62}
    metalness={0.02}
  />
</mesh>
{/* Könyök bump */}
<mesh position={[0, -0.24, -0.01]} scale={[0.72, 0.52, 0.62]}>
  <sphereGeometry args={[0.052, 8, 6]} />
  <meshStandardMaterial
    color={actualLimbColor}
    emissive={skinEmissive || '#000000'}
    emissiveIntensity={skinEmissiveIntensity * 0.4}
    roughness={0.68}
    metalness={0.02}
  />
</mesh>
        {/* Forearm + hand (pivot = elbow at y=-0.24) */}
        <group ref={leftForearmRef} position={[0, -0.24, 0]}>
          <mesh position={[0, -0.09, 0]}>
            <cylinderGeometry args={[0.04, 0.045, 0.18, 6]} />
            <meshStandardMaterial
              color={actualLimbColor}
              emissive={skinEmissive || '#000000'}
              emissiveIntensity={skinEmissiveIntensity * 0.4}
              roughness={0.62}
              metalness={0.02}
            />
          </mesh>
{/* ── BAL KÉZFEJ & UJJAK ───────────────────── */}
<group position={[0, -0.20, 0]}>
  {/* Tenyér */}
  <mesh scale={[1.1, 0.72, 0.62]}>
    <sphereGeometry args={[0.058, 10, 8]} />
    <meshStandardMaterial color={actualHandColor} emissive={skinEmissive || '#000000'} emissiveIntensity={skinEmissiveIntensity * 0.3} roughness={0.55} />
  </mesh>
  {/* Mutatóujj */}
  <mesh position={[-0.030, -0.062, 0.008]} rotation={[0.15, 0, 0.08]}>
    <cylinderGeometry args={[0.013, 0.016, 0.072, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Középső ujj */}
  <mesh position={[-0.010, -0.068, 0.008]} rotation={[0.12, 0, 0.02]}>
    <cylinderGeometry args={[0.014, 0.016, 0.078, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Gyűrűsujj */}
  <mesh position={[0.012, -0.064, 0.008]} rotation={[0.14, 0, -0.05]}>
    <cylinderGeometry args={[0.013, 0.015, 0.072, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Kisujj */}
  <mesh position={[0.032, -0.056, 0.006]} rotation={[0.18, 0, -0.12]}>
    <cylinderGeometry args={[0.011, 0.013, 0.058, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Hüvelykujj */}
  <mesh position={[-0.052, -0.022, 0.010]} rotation={[0.1, 0, -0.75]}>
    <cylinderGeometry args={[0.013, 0.016, 0.056, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
</group>
        </group>
      </group>

      {/* ══ RIGHT ARM (shoulder→elbow→hand) ══════════════════ */}
      <group ref={rightArmRef} position={[0.28, 0.22, 0]} rotation={[0.12, 0, 0.15]}>
        {/* Upper arm */}
        <mesh position={[0, -0.12, 0]}>
          <cylinderGeometry args={[0.045, 0.052, 0.24, 6]} />
          <meshStandardMaterial
            color={actualLimbColor}
            emissive={skinEmissive || '#000000'}
            emissiveIntensity={skinEmissiveIntensity * 0.4}
            roughness={0.62}
            metalness={0.02}
          />
        </mesh>
        {/* Forearm + hand (pivot = elbow at y=-0.24) */}
        <group ref={rightForearmRef} position={[0, -0.24, 0]}>
          <mesh position={[0, -0.09, 0]}>
            <cylinderGeometry args={[0.04, 0.045, 0.18, 6]} />
            <meshStandardMaterial
              color={actualLimbColor}
              emissive={skinEmissive || '#000000'}
              emissiveIntensity={skinEmissiveIntensity * 0.4}
              roughness={0.62}
              metalness={0.02}
            />
          </mesh>
{/* ── JOBB KÉZFEJ & UJJAK ──────────────────── */}
<group position={[0, -0.20, 0]}>
  {/* Tenyér */}
  <mesh scale={[1.1, 0.72, 0.62]}>
    <sphereGeometry args={[0.058, 10, 8]} />
    <meshStandardMaterial color={actualHandColor} emissive={skinEmissive || '#000000'} emissiveIntensity={skinEmissiveIntensity * 0.3} roughness={0.55} />
  </mesh>
  {/* Mutatóujj */}
  <mesh position={[-0.030, -0.062, 0.008]} rotation={[0.15, 0, 0.08]}>
    <cylinderGeometry args={[0.013, 0.016, 0.072, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Középső ujj */}
  <mesh position={[-0.010, -0.068, 0.008]} rotation={[0.12, 0, 0.02]}>
    <cylinderGeometry args={[0.014, 0.016, 0.078, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Gyűrűsujj */}
  <mesh position={[0.012, -0.064, 0.008]} rotation={[0.14, 0, -0.05]}>
    <cylinderGeometry args={[0.013, 0.015, 0.072, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Kisujj */}
  <mesh position={[0.032, -0.056, 0.006]} rotation={[0.18, 0, -0.12]}>
    <cylinderGeometry args={[0.011, 0.013, 0.058, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
  {/* Hüvelykujj — tükrözve */}
  <mesh position={[0.052, -0.022, 0.010]} rotation={[0.1, 0, 0.75]}>
    <cylinderGeometry args={[0.013, 0.016, 0.056, 5]} />
    <meshStandardMaterial color={actualHandColor} roughness={0.58} />
  </mesh>
</group>
        </group>
      </group>

      {/* ══ LEFT LEG ════════════════════════════════════════ */}
<mesh ref={leftLegRef} position={[-0.11, -0.52, 0.015]}>
  <cylinderGeometry args={[0.072, 0.082, 0.52, 6]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.82} />
</mesh>
{/* Bal térd bump */}
<mesh position={[-0.11, -0.58, 0.038]} scale={[0.68, 0.48, 0.52]}>
  <sphereGeometry args={[0.075, 8, 6]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.85} />
</mesh>
   {/* Bal talp */}
<mesh position={[-0.11, -0.795, 0.05]}>
  <boxGeometry args={[0.13, 0.055, 0.22]} />
  <meshStandardMaterial color={activeShoe?.sole || '#222222'} roughness={0.95} />
</mesh>
{/* Bal cipőfelsőrész */}
<mesh position={[-0.11, -0.755, 0.04]} scale={[1.0, 0.72, 0.88]}>
  <sphereGeometry args={[0.075, 10, 7]} />
  <meshStandardMaterial color={actualShoeColor} roughness={0.75} />
</mesh>
{/* Bal cipőorr */}
<mesh position={[-0.11, -0.768, 0.115]} scale={[0.88, 0.52, 0.48]}>
  <sphereGeometry args={[0.065, 8, 6]} />
  <meshStandardMaterial color={actualShoeColor} roughness={0.72} />
</mesh>
{/* Bal cipőfűző */}
<mesh position={[-0.11, -0.748, 0.042]}>
  <boxGeometry args={[0.072, 0.008, 0.072]} />
  <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
</mesh>
{/* Bal cipőfűző kereszt */}
<mesh position={[-0.11, -0.748, 0.042]} rotation={[0, Math.PI / 2, 0]}>
  <boxGeometry args={[0.072, 0.008, 0.022]} />
  <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
</mesh>

      {/* ══ RIGHT LEG ═══════════════════════════════════════ */}
 <mesh ref={rightLegRef} position={[0.11, -0.52, -0.015]}>
  <cylinderGeometry args={[0.072, 0.082, 0.52, 6]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.82} />
</mesh>
{/* Jobb térd bump */}
<mesh position={[0.11, -0.58, 0.038]} scale={[0.68, 0.48, 0.52]}>
  <sphereGeometry args={[0.075, 8, 6]} />
  <meshStandardMaterial color={actualLegColor} roughness={0.85} />
</mesh>
{/* Jobb talp */}
<mesh position={[0.11, -0.795, 0.05]}>
  <boxGeometry args={[0.13, 0.055, 0.22]} />
  <meshStandardMaterial color={activeShoe?.sole || '#222222'} roughness={0.95} />
</mesh>
{/* Jobb cipőfelsőrész */}
<mesh position={[0.11, -0.755, 0.04]} scale={[1.0, 0.72, 0.88]}>
  <sphereGeometry args={[0.075, 10, 7]} />
  <meshStandardMaterial color={actualShoeColor} roughness={0.75} />
</mesh>
{/* Jobb cipőorr */}
<mesh position={[0.11, -0.768, 0.115]} scale={[0.88, 0.52, 0.48]}>
  <sphereGeometry args={[0.065, 8, 6]} />
  <meshStandardMaterial color={actualShoeColor} roughness={0.72} />
</mesh>
{/* Jobb cipőfűző */}
<mesh position={[0.11, -0.748, 0.042]}>
  <boxGeometry args={[0.072, 0.008, 0.072]} />
  <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
</mesh>
{/* Jobb cipőfűző kereszt */}
<mesh position={[0.11, -0.748, 0.042]} rotation={[0, Math.PI / 2, 0]}>
  <boxGeometry args={[0.072, 0.008, 0.022]} />
  <meshStandardMaterial color="#f0f0f0" roughness={0.9} />
</mesh>
    </group>
  );
}

export default function AvatarCompanion({
  mood = 'idle',
  isWalking = false,
  facing,
  skinColor = '#e8c9a0',
  outfitColor = '#6b8fad',
  fixed = true,
  jumpTrigger,
  gender = 'girl',
  activeSkin,
  activeFace,
  activeTop,
  activeBottom,
  activeShoe,
  activeCape,
  activeGlasses,
  activeGloves,
  activeHat,
  activeTrail,
  passThrough = false,
}: AvatarCompanionProps) {
  const positionClass = fixed ? 'fixed z-50' : 'relative w-full h-full';
  const [localJump, setLocalJump] = useState<{
    reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin' | null;
    timestamp: number;
  }>({ reaction: null, timestamp: 0 });

  const effectiveJump = jumpTrigger || localJump;

  const reactions: Array<'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin'> = [
    'happy', 'surprised', 'victory', 'confused', 'laughing', 'wave', 'dance', 'spin',
  ];

  const handleClick = () => {
    const r = reactions[Math.floor(Math.random() * reactions.length)];
    setLocalJump({ reaction: r, timestamp: Date.now() });
  };

  return (
    <div
      className={`${positionClass} ${passThrough ? 'pointer-events-none' : 'pointer-events-auto cursor-pointer'} ${fixed ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' : ''}`}
      style={fixed ? {
        bottom: 'max(20px, calc(env(safe-area-inset-bottom) + 20px))',
        right: '20px',
      } : {}}
      onClick={passThrough ? undefined : handleClick}
    >
      <Canvas
        camera={{ position: [0, 0.15, 2.6], fov: 44 }}
        frameloop="always"
        gl={{ antialias: false, powerPreference: 'low-power', alpha: true, stencil: false }}
        style={{ background: 'transparent', ...(passThrough ? { pointerEvents: 'none' as const } : {}) }}
      >
        <hemisphereLight color="#f8f0e8" groundColor="#a09080" intensity={0.7} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[-3, 5, 3]} intensity={0.65} color="#fff8ee" />
        <directionalLight position={[2, 1, -2]} intensity={0.2} color="#ccdaff" />
        <directionalLight position={[0, -2, 3]} intensity={0.1} color="#ffe8c8" />
        <Character
          mood={mood}
          isWalking={isWalking}
          facing={facing}
          skinColor={skinColor}
          outfitColor={outfitColor}
          jumpTrigger={effectiveJump}
          gender={gender}
          activeSkin={activeSkin}
          activeFace={activeFace}
          activeTop={activeTop}
          activeBottom={activeBottom}
          activeShoe={activeShoe}
          activeCape={activeCape}
          activeGlasses={activeGlasses}
          activeGloves={activeGloves}
          activeHat={activeHat}
          activeTrail={activeTrail}
        />
      </Canvas>
    </div>
  );
}
