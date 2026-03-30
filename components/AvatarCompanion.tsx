'use client';

import { useRef, useEffect, useState, useMemo, Suspense, type ReactNode } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { SkinDef } from '@/lib/skins';
import type { FaceDef } from '@/lib/faces';
import type { TopDef, BottomDef, ShoeDef, CapeDef, GlassesDef, GloveDef } from '@/lib/clothing';
import type { HatDef, TrailDef } from '@/lib/accessories';
import type { HairDef } from '@/lib/hair';
import {
  type AvatarAttachmentSpec,
  getCapeAttachmentSpec,
  getGlassesAttachmentSpec,
  getHairAttachmentSpec,
  getHatAttachmentSpec,
  getTrailAttachmentSpec,
} from '@/lib/avatarAttachments';
import { type AvatarGender, getAvatarScale } from '@/lib/gender';

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
  activeHair?: HairDef | null;
  // When true, the avatar canvas passes clicks through to underlying elements
  passThrough?: boolean;
  // When true, enables touch/mouse orbit controls for 360° rotation
  orbitControls?: boolean;
}

type AvatarAnimKey =
  | 'idle'
  | 'focused'
  | 'happy'
  | 'disappointed'
  | 'victory'
  | 'surprised'
  | 'confused'
  | 'laughing'
  | 'wave'
  | 'dance'
  | 'spin'
  | 'ambient';

// Prefer semantically matching clips, but allow fallback selection if the GLB changes later.
const ANIM_CANDIDATES: Record<AvatarAnimKey, string[]> = {
  idle: ['Short_Breathe_and_Look_Around', 'Thoughtful_Walk', 'Talk_Passionately'],
  focused: ['Talk_Passionately', 'Short_Breathe_and_Look_Around', 'Thoughtful_Walk'],
  happy: ['Happy_jump_f', 'Motivational_Cheer', 'Cheer_with_Both_Hands'],
  disappointed: ['falling_down', 'Thoughtful_Walk', 'Short_Breathe_and_Look_Around'],
  victory: ['Cheer_with_Both_Hands', 'Motivational_Cheer', 'Happy_jump_f'],
  surprised: ['Dont_You_Dare', 'Wave_One_Hand', 'Short_Breathe_and_Look_Around'],
  confused: ['Thoughtful_Walk', 'Short_Breathe_and_Look_Around', 'Talk_Passionately'],
  laughing: ['Motivational_Cheer', 'Cheer_with_Both_Hands', 'Happy_jump_f'],
  wave: ['Wave_One_Hand', 'Motivational_Cheer', 'Cheer_with_Both_Hands'],
  dance: ['Stand_Clap_and_Sit_Down', 'Motivational_Cheer', 'Happy_jump_f'],
  spin: ['Cheer_with_Both_Hands', 'Stand_Clap_and_Sit_Down', 'Motivational_Cheer'],
  ambient: ['Wave_One_Hand', 'Motivational_Cheer', 'Short_Breathe_and_Look_Around', 'Talk_Passionately'],
};

const WALK_ANIM = 'Walking';
const RUN_ANIM = 'Running';
const FADE_DURATION = 0.5;
const IDLE_TRICK_REACTIONS: AvatarAnimKey[] = ['wave', 'dance', 'spin', 'laughing', 'surprised'];

function pickFirstExistingClip(actions: Record<string, THREE.AnimationAction>, candidates: string[]) {
  return candidates.find((name) => Boolean(actions[name])) || '';
}

// ── GLB hat loader ──────────────────────────────────────────
function AttachmentBoneGroup({
  bone,
  spec,
  children,
}: {
  bone: THREE.Bone;
  spec: AvatarAttachmentSpec;
  children: ReactNode;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    bone.add(group);

    // spec.position and spec.scale are in world-space units.
    // Since bone.add() puts the group in bone-local space, we must divide
    // by the bone's effective world scale to get the correct local values.
    bone.updateWorldMatrix(true, false);
    const boneWorldScale = new THREE.Vector3();
    bone.matrixWorld.decompose(new THREE.Vector3(), new THREE.Quaternion(), boneWorldScale);

    const sx = boneWorldScale.x || 1;
    const sy = boneWorldScale.y || 1;
    const sz = boneWorldScale.z || 1;

    const pos = spec.position as [number, number, number];
    group.position.set(pos[0] / sx, pos[1] / sy, pos[2] / sz);

    const scaleVal = Array.isArray(spec.scale)
      ? (spec.scale as [number, number, number])
      : [spec.scale as number, spec.scale as number, spec.scale as number];
    group.scale.set(scaleVal[0] / sx, scaleVal[1] / sy, scaleVal[2] / sz);

    const rot = spec.rotation as [number, number, number];
    group.rotation.set(rot[0], rot[1], rot[2]);

    return () => { bone.remove(group); };
  }, [bone, spec]);

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
}

function GLBAttachment({ spec, bone }: { spec: AvatarAttachmentSpec; bone: THREE.Bone }) {
  const gltf = useLoader(GLTFLoader, spec.assetPath!);
  const attachmentScene = useMemo(() => {
    const clone = gltf.scene.clone(true);
    clone.traverse((child) => {
      if (!(child as THREE.Mesh).isMesh) return;
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.MeshStandardMaterial;
      if (!material?.isMeshStandardMaterial) return;
      const next = material.clone();
      if (spec.color) next.color.set(spec.color);
      if (spec.emissive) {
        next.emissive.set(spec.emissive);
        next.emissiveIntensity = spec.emissiveIntensity ?? 0.2;
      }
      mesh.material = next;
    });
    return clone;
  }, [gltf, spec.color, spec.emissive, spec.emissiveIntensity]);

  return (
    <AttachmentBoneGroup bone={bone} spec={spec}>
      <primitive object={attachmentScene} />
    </AttachmentBoneGroup>
  );
}

function glowMaterial(color: string, emissive?: string, emissiveIntensity = 0.2) {
  return (
    <meshStandardMaterial
      color={color}
      emissive={emissive || color}
      emissiveIntensity={emissive ? emissiveIntensity : emissiveIntensity * 0.35}
      roughness={0.55}
      metalness={0.2}
    />
  );
}

function ProceduralAttachment({ spec, bone }: { spec: AvatarAttachmentSpec; bone: THREE.Bone }) {
  const color = spec.color || '#ffffff';
  const secondaryColor = spec.secondaryColor || '#ffffff';
  const emissive = spec.emissive || color;
  const emissiveIntensity = spec.emissiveIntensity ?? 0.2;

  let content: ReactNode = null;

  if (spec.slot === 'hat') {
    switch (spec.variant) {
      case 'halo':
        content = (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.2, 0.03, 12, 32]} />
            {glowMaterial(color, emissive, emissiveIntensity)}
          </mesh>
        );
        break;
      case 'horns':
        content = (
          <>
            <mesh position={[-0.11, 0.02, 0]} rotation={[0.2, 0, 0.35]}>
              <coneGeometry args={[0.05, 0.18, 10]} />
              {glowMaterial(color, emissive, emissiveIntensity)}
            </mesh>
            <mesh position={[0.11, 0.02, 0]} rotation={[0.2, 0, -0.35]}>
              <coneGeometry args={[0.05, 0.18, 10]} />
              {glowMaterial(color, emissive, emissiveIntensity)}
            </mesh>
          </>
        );
        break;
      case 'antenna':
        content = (
          <>
            <mesh position={[0, 0.07, 0]}>
              <cylinderGeometry args={[0.012, 0.012, 0.22, 8]} />
              {glowMaterial('#9aa4b2', '#9aa4b2', 0.08)}
            </mesh>
            <mesh position={[0, 0.2, 0]}>
              <sphereGeometry args={[0.045, 12, 12]} />
              {glowMaterial(color, emissive, emissiveIntensity)}
            </mesh>
          </>
        );
        break;
      case 'bunnyears':
        content = (
          <>
            <mesh position={[-0.09, 0.16, 0]} rotation={[0, 0, -0.18]}>
              <capsuleGeometry args={[0.04, 0.22, 6, 10]} />
              {glowMaterial(color, emissive, emissiveIntensity * 0.5)}
            </mesh>
            <mesh position={[0.09, 0.16, 0]} rotation={[0, 0, 0.18]}>
              <capsuleGeometry args={[0.04, 0.22, 6, 10]} />
              {glowMaterial(color, emissive, emissiveIntensity * 0.5)}
            </mesh>
          </>
        );
        break;
      case 'wizard':
        content = (
          <>
            <mesh position={[0, 0.04, 0]}>
              <cylinderGeometry args={[0.18, 0.24, 0.08, 20]} />
              {glowMaterial(color, emissive, emissiveIntensity * 0.3)}
            </mesh>
            <mesh position={[0, 0.23, 0]}>
              <coneGeometry args={[0.17, 0.34, 20]} />
              {glowMaterial(color, emissive, emissiveIntensity)}
            </mesh>
          </>
        );
        break;
      case 'helmet':
      case 'viking':
      case 'ninja':
        content = (
          <mesh position={[0, 0.02, 0.01]}>
            <sphereGeometry args={[0.22, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.62]} />
            {glowMaterial(color, emissive, emissiveIntensity * 0.4)}
          </mesh>
        );
        break;
      case 'crown':
      default:
        content = (
          <>
            <mesh position={[0, 0.04, 0]}>
              <cylinderGeometry args={[0.18, 0.2, 0.12, 20]} />
              {glowMaterial(color, emissive, emissiveIntensity * 0.55)}
            </mesh>
            <mesh position={[-0.11, 0.14, 0]}>
              <coneGeometry args={[0.03, 0.1, 8]} />
              {glowMaterial(color, emissive, emissiveIntensity)}
            </mesh>
            <mesh position={[0, 0.16, 0]}>
              <coneGeometry args={[0.035, 0.12, 8]} />
              {glowMaterial(color, emissive, emissiveIntensity)}
            </mesh>
            <mesh position={[0.11, 0.14, 0]}>
              <coneGeometry args={[0.03, 0.1, 8]} />
              {glowMaterial(color, emissive, emissiveIntensity)}
            </mesh>
          </>
        );
        break;
    }
  } else if (spec.slot === 'glasses') {
    switch (spec.variant) {
      case 'monocle':
        content = (
          <>
            <mesh position={[0.08, 0, 0]}>
              <torusGeometry args={[0.07, 0.012, 10, 24]} />
              {glowMaterial(color, color, 0.05)}
            </mesh>
            <mesh position={[0.08, 0, 0.01]}>
              <circleGeometry args={[0.055, 24]} />
              {glowMaterial(secondaryColor, emissive, emissiveIntensity)}
            </mesh>
          </>
        );
        break;
      case 'visor':
        content = (
          <>
            <mesh>
              <boxGeometry args={[0.42, 0.13, 0.04]} />
              {glowMaterial(secondaryColor, emissive, emissiveIntensity)}
            </mesh>
            <mesh position={[0, 0, -0.016]}>
              <boxGeometry args={[0.46, 0.03, 0.02]} />
              {glowMaterial(color, color, 0.1)}
            </mesh>
          </>
        );
        break;
      default:
        content = (
          <>
            <mesh position={[-0.1, 0, 0]}>
              <torusGeometry args={[0.07, 0.012, 10, 24]} />
              {glowMaterial(color, color, 0.05)}
            </mesh>
            <mesh position={[0.1, 0, 0]}>
              <torusGeometry args={[0.07, 0.012, 10, 24]} />
              {glowMaterial(color, color, 0.05)}
            </mesh>
            <mesh position={[0, 0, -0.01]}>
              <boxGeometry args={[0.08, 0.015, 0.015]} />
              {glowMaterial(color, color, 0.05)}
            </mesh>
            <mesh position={[-0.1, 0, 0.01]}>
              <circleGeometry args={[0.055, 24]} />
              {glowMaterial(secondaryColor, emissive, emissiveIntensity * 0.7)}
            </mesh>
            <mesh position={[0.1, 0, 0.01]}>
              <circleGeometry args={[0.055, 24]} />
              {glowMaterial(secondaryColor, emissive, emissiveIntensity * 0.7)}
            </mesh>
          </>
        );
        break;
    }
  } else if (spec.slot === 'cape') {
    if (spec.variant === 'angel' || spec.variant === 'demon') {
      const wingColor = spec.variant === 'angel' ? '#f8fafc' : color;
      content = (
        <>
          <mesh position={[-0.16, -0.05, -0.04]} rotation={[0.1, 0, 0.25]}>
            <boxGeometry args={[0.12, 0.34, 0.02]} />
            {glowMaterial(wingColor, emissive, emissiveIntensity * 0.6)}
          </mesh>
          <mesh position={[0.16, -0.05, -0.04]} rotation={[0.1, 0, -0.25]}>
            <boxGeometry args={[0.12, 0.34, 0.02]} />
            {glowMaterial(wingColor, emissive, emissiveIntensity * 0.6)}
          </mesh>
        </>
      );
    } else {
      content = (
        <mesh position={[0, -0.24, -0.03]} rotation={[0.08, 0, 0]}>
          <boxGeometry args={[0.34, 0.54, 0.03]} />
          {glowMaterial(color, emissive, emissiveIntensity)}
        </mesh>
      );
    }
  } else if (spec.slot === 'trail') {
    const orbPositions: Array<[number, number, number]> = [
      [0, 0, 0],
      [0.1, -0.05, -0.08],
      [-0.1, -0.1, -0.16],
      [0.06, -0.16, -0.24],
    ];
    content = (
      <>
        {orbPositions.map((pos, index) => (
          <mesh key={index} position={pos}>
            <sphereGeometry args={[0.05 - index * 0.008, 12, 12]} />
            {glowMaterial(color, emissive, emissiveIntensity)}
          </mesh>
        ))}
      </>
    );
  } else if (spec.slot === 'hair') {
    content = (
      <>
        <mesh position={[0, 0.02, -0.02]}>
          <sphereGeometry args={[0.22, 18, 14, 0, Math.PI * 2, 0, Math.PI * 0.58]} />
          {glowMaterial(color, color, 0.05)}
        </mesh>
        <mesh position={[0, 0.06, -0.14]}>
          <boxGeometry args={[0.22, 0.12, 0.09]} />
          {glowMaterial(secondaryColor, color, 0.04)}
        </mesh>
      </>
    );
  }

  if (!content) return null;

  return (
    <AttachmentBoneGroup bone={bone} spec={spec}>
      {content}
    </AttachmentBoneGroup>
  );
}

function AvatarAttachment({
  spec,
  bone,
}: {
  spec: AvatarAttachmentSpec | null;
  bone: THREE.Bone | null;
}) {
  if (!spec || !bone) return null;
  if (spec.assetPath) return <GLBAttachment spec={spec} bone={bone} />;
  return <ProceduralAttachment spec={spec} bone={bone} />;
}

// ── MAIN 3D CHARACTER (GLB-based) ───────────────────────────
function RobotCharacter({
  mood,
  isWalking = false,
  facing,
  jumpTrigger,
  activeSkin,
  activeCape,
  activeGlasses,
  activeHat,
  activeTrail,
  activeHair,
}: AvatarCompanionProps) {
  const gltf = useLoader(GLTFLoader, '/models/avatar_optimized.glb');

  const groupRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionsRef = useRef<Record<string, THREE.AnimationAction>>({});
  const currentActionRef = useRef<string>('');
  const moodRef = useRef(mood);
  const isWalkingRef = useRef(isWalking);
  const facingRef = useRef(facing);
  const jumpTimerRef = useRef(-1);
  const reactionDurationRef = useRef(0.6);
  const ambientTimerRef = useRef(4 + Math.random() * 5);

  // Clone scene so multiple instances don't conflict
  const scene = useMemo(() => {
    const clone = gltf.scene.clone(true);
    // Apply skin colors to all meshes
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat && mat.isMeshStandardMaterial) {
          const newMat = mat.clone();
          if (activeSkin && activeSkin.id !== 'default') {
            newMat.color.set(activeSkin.bodyColor);
            newMat.emissive.set(activeSkin.emissive);
            newMat.emissiveIntensity = activeSkin.emissiveIntensity * 0.3;
          }
          newMat.roughness = 0.6;
          newMat.metalness = 0.1;
          mesh.material = newMat;
        }
      }
    });
    return clone;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gltf, activeSkin?.id, activeSkin?.bodyColor]);

  const bones = useMemo(() => {
    const found: Record<string, THREE.Bone> = {};
    scene.traverse((child) => {
      if ((child as THREE.Bone).isBone) {
        found[child.name] = child as THREE.Bone;
      }
    });
    return found;
  }, [scene]);

  const hatSpec = useMemo(() => getHatAttachmentSpec(activeHat || null), [activeHat]);
  const glassesSpec = useMemo(() => getGlassesAttachmentSpec(activeGlasses || null), [activeGlasses]);
  const capeSpec = useMemo(() => getCapeAttachmentSpec(activeCape || null), [activeCape]);
  const trailSpec = useMemo(() => getTrailAttachmentSpec(activeTrail || null), [activeTrail]);
  const hairSpec = useMemo(() => getHairAttachmentSpec(activeHair || null), [activeHair]);

  // Setup animation mixer and actions
  useEffect(() => {
    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;
    const actions: Record<string, THREE.AnimationAction> = {};

    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip, scene);
      actions[clip.name] = action;
    });
    actionsRef.current = actions;

    // Start idle animation
    const idleClip = pickFirstExistingClip(actions, ANIM_CANDIDATES.idle);
    if (actions[idleClip]) {
      actions[idleClip].reset().play();
      currentActionRef.current = idleClip;
    }

    return () => {
      mixer.stopAllAction();
      mixer.uncacheRoot(scene);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene]);

  // Crossfade to a new animation clip
  const fadeToAction = (clipName: string, loop = true) => {
    const actions = actionsRef.current;
    if (!actions[clipName] || currentActionRef.current === clipName) return;

    const prev = actions[currentActionRef.current];
    const next = actions[clipName];

    next.reset();
    next.setLoop(loop ? THREE.LoopRepeat : THREE.LoopOnce, loop ? Infinity : 1);
    next.clampWhenFinished = !loop;
    next.fadeIn(FADE_DURATION);
    next.play();

    if (prev) prev.fadeOut(FADE_DURATION);

    currentActionRef.current = clipName;
  };

  const playMoodClip = (animKey: AvatarAnimKey, loop = true) => {
    const clipName = pickFirstExistingClip(actionsRef.current, ANIM_CANDIDATES[animKey]);
    if (clipName) fadeToAction(clipName, loop);
  };

  // Sync mood changes
  useEffect(() => { moodRef.current = mood; }, [mood]);
  useEffect(() => { isWalkingRef.current = isWalking; }, [isWalking]);
  useEffect(() => { facingRef.current = facing; }, [facing]);

  // Handle mood → animation
  useEffect(() => {
    if (isWalkingRef.current || jumpTimerRef.current >= 0) return;
    playMoodClip(mood);
  }, [mood]);

  // Handle walking state
  useEffect(() => {
    if (isWalking) {
      const walkClip = actionsRef.current[WALK_ANIM] ? WALK_ANIM : RUN_ANIM;
      if (actionsRef.current[walkClip]) fadeToAction(walkClip, true);
    } else {
      playMoodClip(moodRef.current);
    }
  }, [isWalking]);

  // Handle jump triggers (reactions)
  useEffect(() => {
    if (jumpTrigger?.reaction) {
      jumpTimerRef.current = 0;
      reactionDurationRef.current = ['wave', 'dance', 'spin'].includes(jumpTrigger.reaction) ? 1.4 : 0.6;
      ambientTimerRef.current = 7 + Math.random() * 5;
      playMoodClip(jumpTrigger.reaction, false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jumpTrigger?.timestamp]);

  // Main animation loop
  useFrame((_, delta) => {
    if (!groupRef.current || !mixerRef.current) return;

    // Update mixer
    mixerRef.current.update(delta);

    // Jump reaction timer
    if (jumpTimerRef.current >= 0) {
      jumpTimerRef.current += delta / reactionDurationRef.current;
      if (jumpTimerRef.current > 1) {
        jumpTimerRef.current = -1;
        // Return to idle or walking
        if (isWalkingRef.current) {
          const walkClip = actionsRef.current[WALK_ANIM] ? WALK_ANIM : RUN_ANIM;
          if (actionsRef.current[walkClip]) fadeToAction(walkClip, true);
        } else {
          playMoodClip(moodRef.current);
        }
      }
    }

    // Give the robot occasional personality when it is just hanging around.
    if (!isWalkingRef.current && jumpTimerRef.current < 0) {
      ambientTimerRef.current -= delta;
      if (ambientTimerRef.current <= 0) {
        ambientTimerRef.current = 8 + Math.random() * 8;
        const ambientReaction = IDLE_TRICK_REACTIONS[Math.floor(Math.random() * IDLE_TRICK_REACTIONS.length)];
        reactionDurationRef.current = ['wave', 'dance', 'spin'].includes(ambientReaction) ? 1.4 : 0.6;
        jumpTimerRef.current = 0;
        playMoodClip(ambientReaction, false);
      }
    }

    // Facing direction
    const lerp = THREE.MathUtils.lerp;
    const facingMap: Record<string, number> = {
      se: Math.PI / 4,
      sw: -Math.PI / 4,
      ne: Math.PI * 3 / 4,
      nw: -Math.PI * 3 / 4,
    };
    const facingTargetY = facingRef.current ? (facingMap[facingRef.current] ?? 0) : 0;
    const curY = groupRef.current.rotation.y;
    let diff = facingTargetY - curY;
    while (diff > Math.PI) diff -= 2 * Math.PI;
    while (diff < -Math.PI) diff += 2 * Math.PI;
    groupRef.current.rotation.y = lerp(curY, curY + diff, 0.14);
  });

  return (
    <group ref={groupRef} position={[0, -1.85, 0]} scale={0.85}>
      <primitive object={scene} />
      <AvatarAttachment spec={hairSpec} bone={hairSpec ? bones[hairSpec.anchor] || null : null} />
      <AvatarAttachment spec={hatSpec} bone={hatSpec ? bones[hatSpec.anchor] || null : null} />
      <AvatarAttachment spec={glassesSpec} bone={glassesSpec ? bones[glassesSpec.anchor] || null : null} />
      <AvatarAttachment spec={capeSpec} bone={capeSpec ? bones[capeSpec.anchor] || null : null} />
      <AvatarAttachment spec={trailSpec} bone={trailSpec ? bones[trailSpec.anchor] || null : null} />
    </group>
  );
}

// ── EXPORTED COMPONENT (same API as before) ──────────────────
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
  activeHair,
  passThrough = false,
  orbitControls = false,
}: AvatarCompanionProps) {
  const positionClass = fixed ? 'fixed z-50' : 'relative w-full h-full';
  const [avatarScale] = useState(() => fixed ? getAvatarScale() : 1);
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

  // CSS drop-shadow glow
  const glowCol = (activeSkin && activeSkin.id !== 'default') ? activeSkin.emissive : '#88aaff';
  const glowFilter = `drop-shadow(0 0 5px ${glowCol}60) drop-shadow(0 0 14px ${glowCol}28) drop-shadow(0 0 28px ${glowCol}10)`;

  return (
    <div
      className={`${positionClass} ${passThrough ? 'pointer-events-none' : 'pointer-events-auto cursor-pointer'} ${fixed ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48' : ''}`}
      style={fixed ? {
        bottom: 'max(20px, calc(env(safe-area-inset-bottom) + 20px))',
        right: '20px',
        filter: glowFilter,
        transform: avatarScale !== 1 ? `scale(${avatarScale})` : undefined,
        transformOrigin: 'bottom right',
      } : {
        filter: glowFilter,
      }}
      onClick={passThrough ? undefined : handleClick}
    >
      <Canvas
        camera={{ position: [0, 1.2, 4.0], fov: 50 }}
        frameloop="always"
        gl={{ antialias: false, powerPreference: 'low-power', alpha: true, stencil: false }}
        style={{ background: 'transparent', ...(passThrough ? { pointerEvents: 'none' as const } : {}) }}
      >
        {/* ── LIGHTING (same as before) ─────────────────────── */}
        <hemisphereLight color="#f8f0e8" groundColor="#c0b0a0" intensity={1.1} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[-3, 5, 3]} intensity={0.9} color="#fff8ee" />
        <pointLight position={[0.3, 0.9, 2.0]} intensity={0.65} color="#fff4e8" distance={5} decay={1.8} />
        <directionalLight position={[2, 1, -2]} intensity={0.3} color="#ccdaff" />
        <directionalLight position={[0, -1, 2]} intensity={0.35} color="#ffeedd" />
        <directionalLight position={[0, 1, -3]} intensity={0.95} color="#aac8ff" />
        <directionalLight position={[-2, 0, -2]} intensity={0.45} color="#c0d8ff" />
        <directionalLight position={[2, 0.5, -2.5]} intensity={0.35} color="#b8d0ff" />
        {orbitControls && (
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={1.5}
            maxDistance={4.5}
            minPolarAngle={Math.PI * 0.15}
            maxPolarAngle={Math.PI * 0.85}
            target={[0, 0.5, 0]}
          />
        )}
        <Suspense fallback={null}>
        <RobotCharacter
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
          activeHair={activeHair}
        />
        </Suspense>
      </Canvas>
    </div>
  );
}
