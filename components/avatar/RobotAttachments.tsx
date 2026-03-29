'use client';

import { useMemo, type ReactNode } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { Bone } from 'three';
import type { HatDef, TrailDef } from '@/lib/accessories';
import type { HairDef } from '@/lib/hair';
import type { FaceDef } from '@/lib/faces';
import type {
  TopDef,
  BottomDef,
  ShoeDef,
  CapeDef,
  GlassesDef,
  GloveDef,
} from '@/lib/clothing';
import {
  getBottomAttachmentSpec,
  getCapeAttachmentSpec,
  getFaceAttachmentSpec,
  getGlassesAttachmentSpec,
  getGloveAttachmentSpec,
  getHairAttachmentSpec,
  getHatAttachmentSpec,
  getShoeAttachmentSpec,
  getTopAttachmentSpec,
  getTrailAttachmentSpec,
  type AvatarAttachmentBone,
  type AvatarAttachmentSpec,
} from '@/lib/avatarAttachments';
import { HatMesh } from '@/components/avatar/HatMesh';
import { GlassesMesh } from '@/components/avatar/GlassesMesh';
import { CapeMesh, TrailMesh } from '@/components/avatar/CapeMesh';

type BoneMap = Partial<Record<AvatarAttachmentBone, Bone>>;

function asVectorScale(scale: number | [number, number, number]): [number, number, number] {
  return Array.isArray(scale) ? scale : [scale, scale, scale];
}

function AttachmentModel({ assetPath, spec }: { assetPath: string; spec: AvatarAttachmentSpec }) {
  const gltf = useLoader(GLTFLoader, assetPath);
  const clone = useMemo(() => {
    const scene = gltf.scene.clone(true);
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const material = child.material;
      if (Array.isArray(material)) return;
      if (!material || !(material instanceof THREE.MeshStandardMaterial)) return;
      const next = material.clone();
      if (spec.color) next.color.set(spec.color);
      if (spec.emissive) next.emissive.set(spec.emissive);
      if (typeof spec.emissiveIntensity === 'number') next.emissiveIntensity = spec.emissiveIntensity;
      child.material = next;
    });
    return scene;
  }, [gltf, spec.assetPath, spec.color, spec.emissive, spec.emissiveIntensity]);

  return <primitive object={clone} />;
}

function BoneAttachment({
  bone,
  spec,
  children,
}: {
  bone: Bone;
  spec: AvatarAttachmentSpec;
  children: ReactNode;
}) {
  const scale = asVectorScale(spec.scale);
  return (
    <primitive object={bone}>
      <group position={spec.position as [number, number, number]} rotation={spec.rotation as [number, number, number]} scale={scale}>
        {spec.assetPath ? <AttachmentModel assetPath={spec.assetPath} spec={spec} /> : children}
      </group>
    </primitive>
  );
}

function HairFallback({ hair, spec }: { hair: HairDef; spec: AvatarAttachmentSpec }) {
  const baseColor = new THREE.Color(hair.color);
  const highlight = spec.secondaryColor
    ? new THREE.Color(spec.secondaryColor)
    : hair.highlight
      ? new THREE.Color(hair.highlight)
      : baseColor.clone().lerp(new THREE.Color('#ffffff'), 0.18);
  return (
    <group>
      <mesh position={[0, 0.16, -0.02]} scale={[1.02, 0.88, 0.92]}>
        <sphereGeometry args={[0.21, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.58]} />
        <meshStandardMaterial color={baseColor} emissive={spec.emissive || hair.color} emissiveIntensity={spec.emissiveIntensity || 0} roughness={0.78} />
      </mesh>
      <mesh position={[0, 0.08, 0.14]} scale={[0.88, 0.42, 0.28]}>
        <sphereGeometry args={[0.18, 16, 8]} />
        <meshStandardMaterial color={highlight} roughness={0.7} />
      </mesh>
      {hair.id === 'hair_rainbow' && (
        <mesh position={[0, 0.2, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.12, 0.012, 8, 24]} />
          <meshStandardMaterial color="#ff69b4" emissive="#ffd700" emissiveIntensity={0.4} roughness={0.15} />
        </mesh>
      )}
    </group>
  );
}

function FaceFallback({ face }: { face: FaceDef }) {
  const eyeColor = face.eyeColor || '#10151d';
  const mouthColor = face.mouthColor || '#10151d';
  const isSpecialEyes = ['heart', 'star', 'x', 'wink', 'happy'].includes(face.eyeType);
  return (
    <group position={[0, 0.03, 0.18]}>
      {face.eyeType === 'wink' ? (
        <>
          <mesh position={[-0.075, 0.03, 0]}>
            <boxGeometry args={[0.048, 0.012, 0.008]} />
            <meshStandardMaterial color={eyeColor} />
          </mesh>
          <mesh position={[0.075, 0.03, 0]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial color={eyeColor} emissive={eyeColor} emissiveIntensity={0.15} />
          </mesh>
        </>
      ) : (
        ([-0.075, 0.075] as const).map((x, idx) => (
          <mesh key={idx} position={[x, 0.03, 0]}>
            <sphereGeometry args={[isSpecialEyes ? 0.024 : 0.018, 8, 8]} />
            <meshStandardMaterial color={eyeColor} emissive={eyeColor} emissiveIntensity={isSpecialEyes ? 0.25 : 0.1} />
          </mesh>
        ))
      )}
      {face.eyeType === 'heart' && (
        ([-0.075, 0.075] as const).map((x, idx) => (
          <mesh key={idx} position={[x, 0.03, 0.008]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.028, 0.028, 0.01]} />
            <meshStandardMaterial color={eyeColor} emissive={eyeColor} emissiveIntensity={0.5} />
          </mesh>
        ))
      )}
      {face.eyeType === 'star' && (
        ([-0.075, 0.075] as const).flatMap((x) => [0, Math.PI / 4].map((rot) => ({ x, rot }))).map(({ x, rot }, idx) => (
          <mesh key={idx} position={[x, 0.03, 0.006]} rotation={[0, 0, rot]}>
            <boxGeometry args={[0.038, 0.01, 0.008]} />
            <meshStandardMaterial color={eyeColor} emissive={eyeColor} emissiveIntensity={0.55} />
          </mesh>
        ))
      )}
      <mesh position={[0, -0.045, 0]}>
        <torusGeometry args={[face.mouthType === 'grin' ? 0.048 : 0.036, 0.008, 6, 16, Math.PI]} />
        <meshStandardMaterial color={mouthColor} emissive={mouthColor} emissiveIntensity={face.mouthType === 'open' ? 0.3 : 0.08} />
      </mesh>
      {face.blush && face.blushColor && (
        <>
          <mesh position={[-0.11, -0.01, 0]}>
            <sphereGeometry args={[0.022, 8, 8]} />
            <meshStandardMaterial color={face.blushColor} transparent opacity={0.65} />
          </mesh>
          <mesh position={[0.11, -0.01, 0]}>
            <sphereGeometry args={[0.022, 8, 8]} />
            <meshStandardMaterial color={face.blushColor} transparent opacity={0.65} />
          </mesh>
        </>
      )}
    </group>
  );
}

function TopFallback({ top }: { top: TopDef }) {
  return (
    <group>
      <mesh position={[0, -0.03, 0]} scale={top.type === 'armor' ? [1.08, 1.05, 1.1] : [1.02, 0.98, 1.04]}>
        <boxGeometry args={[0.42, 0.52, 0.3]} />
        <meshStandardMaterial color={top.color} roughness={top.type === 'suit' ? 0.45 : 0.72} metalness={top.type === 'armor' ? 0.35 : 0.08} />
      </mesh>
      {top.accent && (
        <mesh position={[0, 0.08, 0.155]} scale={[0.7, 0.12, 0.06]}>
          <boxGeometry args={[0.42, 0.52, 0.3]} />
          <meshStandardMaterial color={top.accent} roughness={0.55} metalness={top.type === 'armor' ? 0.25 : 0.05} />
        </mesh>
      )}
    </group>
  );
}

function BottomFallback({ bottom }: { bottom: BottomDef }) {
  return (
    <group>
      <mesh position={[0, -0.11, 0]} scale={[1.04, 0.85, 1.04]}>
        <boxGeometry args={[0.28, 0.26, 0.24]} />
        <meshStandardMaterial color={bottom.color} roughness={0.72} />
      </mesh>
      {bottom.type === 'skirt' && (
        <mesh position={[0, -0.22, 0]}>
          <cylinderGeometry args={[0.23, 0.16, 0.18, 10, 1, true]} />
          <meshStandardMaterial color={bottom.color} roughness={0.75} side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
}

function GloveFallback({ glove }: { glove: GloveDef }) {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.068, 10, 8]} />
        <meshStandardMaterial color={glove.color} roughness={0.62} metalness={glove.id.includes('mech') ? 0.3 : 0.08} />
      </mesh>
      <mesh position={[0, 0.055, 0]}>
        <cylinderGeometry args={[0.03, 0.045, 0.05, 8]} />
        <meshStandardMaterial color={glove.color} roughness={0.7} />
      </mesh>
    </group>
  );
}

function ShoeFallback({ shoe }: { shoe: ShoeDef }) {
  return (
    <group position={[0, -0.015, 0.02]}>
      <mesh>
        <boxGeometry args={[0.14, 0.07, 0.24]} />
        <meshStandardMaterial color={shoe.color} roughness={0.6} metalness={shoe.type === 'formal' ? 0.18 : 0.05} />
      </mesh>
      {shoe.sole && (
        <mesh position={[0, -0.04, 0]}>
          <boxGeometry args={[0.15, 0.02, 0.25]} />
          <meshStandardMaterial color={shoe.sole} roughness={0.8} />
        </mesh>
      )}
    </group>
  );
}

function DualBoneAccessory({
  leftBone,
  rightBone,
  spec,
  children,
}: {
  leftBone: Bone;
  rightBone: Bone;
  spec: AvatarAttachmentSpec;
  children: ReactNode;
}) {
  const scale = asVectorScale(spec.scale);
  return (
    <>
      <primitive object={leftBone}>
        <group position={spec.position as [number, number, number]} rotation={spec.rotation as [number, number, number]} scale={scale}>
          {children}
        </group>
      </primitive>
      <primitive object={rightBone}>
        <group position={spec.position as [number, number, number]} rotation={spec.rotation as [number, number, number]} scale={scale}>
          {children}
        </group>
      </primitive>
    </>
  );
}

export function RobotAttachments({
  bones,
  activeHat,
  activeGlasses,
  activeCape,
  activeTrail,
  activeHair,
  activeFace,
  activeTop,
  activeBottom,
  activeShoe,
  activeGloves,
}: {
  bones: BoneMap;
  activeHat?: HatDef | null;
  activeGlasses?: GlassesDef | null;
  activeCape?: CapeDef | null;
  activeTrail?: TrailDef | null;
  activeHair?: HairDef | null;
  activeFace?: FaceDef | null;
  activeTop?: TopDef | null;
  activeBottom?: BottomDef | null;
  activeShoe?: ShoeDef | null;
  activeGloves?: GloveDef | null;
}) {
  const hatSpec = getHatAttachmentSpec(activeHat || null);
  const glassesSpec = getGlassesAttachmentSpec(activeGlasses || null);
  const capeSpec = getCapeAttachmentSpec(activeCape || null);
  const trailSpec = getTrailAttachmentSpec(activeTrail || null);
  const hairSpec = getHairAttachmentSpec(activeHair || null);
  const faceSpec = getFaceAttachmentSpec(activeFace || null);
  const topSpec = getTopAttachmentSpec(activeTop || null);
  const bottomSpec = getBottomAttachmentSpec(activeBottom || null);
  const shoeSpec = getShoeAttachmentSpec(activeShoe || null);
  const gloveSpec = getGloveAttachmentSpec(activeGloves || null);

  return (
    <>
      {hairSpec && activeHair && bones.Head && (
        <BoneAttachment bone={bones.Head} spec={hairSpec}>
          <HairFallback hair={activeHair} spec={hairSpec} />
        </BoneAttachment>
      )}
      {hatSpec && activeHat && bones.Head && (
        <BoneAttachment bone={bones.Head} spec={hatSpec}>
          <HatMesh hat={activeHat} />
        </BoneAttachment>
      )}
      {glassesSpec && activeGlasses && bones.Head && (
        <BoneAttachment bone={bones.Head} spec={glassesSpec}>
          <GlassesMesh glasses={activeGlasses} />
        </BoneAttachment>
      )}
      {faceSpec && activeFace && bones.Head && (
        <BoneAttachment bone={bones.Head} spec={faceSpec}>
          <FaceFallback face={activeFace} />
        </BoneAttachment>
      )}
      {topSpec && activeTop && bones.Spine01 && (
        <BoneAttachment bone={bones.Spine01} spec={topSpec}>
          <TopFallback top={activeTop} />
        </BoneAttachment>
      )}
      {capeSpec && activeCape && bones.Spine02 && (
        <BoneAttachment bone={bones.Spine02} spec={capeSpec}>
          <CapeMesh cape={activeCape} t={0} />
        </BoneAttachment>
      )}
      {bottomSpec && activeBottom && bones.Hips && (
        <BoneAttachment bone={bones.Hips} spec={bottomSpec}>
          <BottomFallback bottom={activeBottom} />
        </BoneAttachment>
      )}
      {trailSpec && activeTrail && bones.Hips && (
        <BoneAttachment bone={bones.Hips} spec={trailSpec}>
          <TrailMesh trail={activeTrail} t={0} />
        </BoneAttachment>
      )}
      {gloveSpec && activeGloves && bones.LeftHand && bones.RightHand && (
        <DualBoneAccessory leftBone={bones.LeftHand} rightBone={bones.RightHand} spec={gloveSpec}>
          <GloveFallback glove={activeGloves} />
        </DualBoneAccessory>
      )}
      {shoeSpec && activeShoe && bones.LeftFoot && bones.RightFoot && (
        <DualBoneAccessory leftBone={bones.LeftFoot} rightBone={bones.RightFoot} spec={shoeSpec}>
          <ShoeFallback shoe={activeShoe} />
        </DualBoneAccessory>
      )}
    </>
  );
}
