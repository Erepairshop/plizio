'use client';

import { useRef, useEffect, useState, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { SkinDef } from '@/lib/skins';
import type { FaceDef } from '@/lib/faces';
import type { TopDef, BottomDef, ShoeDef, CapeDef, GlassesDef, GloveDef } from '@/lib/clothing';
import type { HatDef, TrailDef } from '@/lib/accessories';
import type { HairDef } from '@/lib/hair';
import { type AvatarGender, getAvatarScale } from '@/lib/gender';
import { RobotAttachments } from '@/components/avatar/RobotAttachments';

export interface AvatarCompanionProps {
  mood: 'idle' | 'focused' | 'happy' | 'disappointed' | 'victory' | 'surprised' | 'confused' | 'laughing';
  isWalking?: boolean;
  facing?: 'se' | 'sw' | 'ne' | 'nw';
  skinColor?: string;
  outfitColor?: string;
  fixed?: boolean;
  jumpTrigger?: { reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin' | null; timestamp: number };
  gender?: AvatarGender;
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
  passThrough?: boolean;
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
  | 'spin';

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
};

const WALK_ANIM = 'Walking';
const RUN_ANIM = 'Running';
const FADE_DURATION = 0.5;
const IDLE_TRICK_REACTIONS: AvatarAnimKey[] = ['wave', 'dance', 'spin', 'laughing', 'surprised'];

function pickFirstExistingClip(actions: Record<string, THREE.AnimationAction>, candidates: string[]) {
  return candidates.find((name) => Boolean(actions[name])) || '';
}

function RobotCharacter({
  mood,
  isWalking = false,
  facing,
  jumpTrigger,
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

  const scene = useMemo(() => {
    const clone = gltf.scene.clone(true);
    clone.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      const material = child.material;
      if (Array.isArray(material)) return;
      if (!material || !(material instanceof THREE.MeshStandardMaterial)) return;
      const next = material.clone();
      if (activeSkin && activeSkin.id !== 'default') {
        next.color.set(activeSkin.bodyColor);
        next.emissive.set(activeSkin.emissive);
        next.emissiveIntensity = activeSkin.emissiveIntensity * 0.3;
      }
      next.roughness = 0.6;
      next.metalness = 0.1;
      child.material = next;
    });
    return clone;
  }, [gltf, activeSkin?.id, activeSkin?.bodyColor, activeSkin?.emissive, activeSkin?.emissiveIntensity]);

  const bones = useMemo(() => {
    const found: Partial<Record<string, THREE.Bone>> = {};
    scene.traverse((child) => {
      if ((child as THREE.Bone).isBone) {
        found[child.name] = child as THREE.Bone;
      }
    });
    return {
      Head: found.Head,
      Spine01: found.Spine01,
      Spine02: found.Spine02,
      Hips: found.Hips,
      LeftHand: found.LeftHand,
      RightHand: found.RightHand,
      LeftFoot: found.LeftFoot,
      RightFoot: found.RightFoot,
    };
  }, [scene]);

  useEffect(() => {
    const mixer = new THREE.AnimationMixer(scene);
    mixerRef.current = mixer;
    const actions: Record<string, THREE.AnimationAction> = {};
    gltf.animations.forEach((clip) => {
      actions[clip.name] = mixer.clipAction(clip, scene);
    });
    actionsRef.current = actions;

    const idleClip = pickFirstExistingClip(actions, ANIM_CANDIDATES.idle);
    if (idleClip && actions[idleClip]) {
      actions[idleClip].reset().play();
      currentActionRef.current = idleClip;
    }

    return () => {
      mixer.stopAllAction();
      mixer.uncacheRoot(scene);
    };
  }, [gltf, scene]);

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

  useEffect(() => { moodRef.current = mood; }, [mood]);
  useEffect(() => { isWalkingRef.current = isWalking; }, [isWalking]);
  useEffect(() => { facingRef.current = facing; }, [facing]);

  useEffect(() => {
    if (isWalkingRef.current || jumpTimerRef.current >= 0) return;
    playMoodClip(mood);
  }, [mood]);

  useEffect(() => {
    if (isWalking) {
      const walkClip = actionsRef.current[WALK_ANIM] ? WALK_ANIM : RUN_ANIM;
      if (actionsRef.current[walkClip]) fadeToAction(walkClip, true);
    } else {
      playMoodClip(moodRef.current);
    }
  }, [isWalking]);

  useEffect(() => {
    if (!jumpTrigger?.reaction) return;
    jumpTimerRef.current = 0;
    reactionDurationRef.current = ['wave', 'dance', 'spin'].includes(jumpTrigger.reaction) ? 1.4 : 0.6;
    ambientTimerRef.current = 7 + Math.random() * 5;
    playMoodClip(jumpTrigger.reaction, false);
  }, [jumpTrigger?.timestamp]);

  useFrame((_, delta) => {
    if (!groupRef.current || !mixerRef.current) return;
    mixerRef.current.update(delta);

    if (jumpTimerRef.current >= 0) {
      jumpTimerRef.current += delta / reactionDurationRef.current;
      if (jumpTimerRef.current > 1) {
        jumpTimerRef.current = -1;
        if (isWalkingRef.current) {
          const walkClip = actionsRef.current[WALK_ANIM] ? WALK_ANIM : RUN_ANIM;
          if (actionsRef.current[walkClip]) fadeToAction(walkClip, true);
        } else {
          playMoodClip(moodRef.current);
        }
      }
    }

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

    const facingMap: Record<string, number> = {
      se: Math.PI / 4,
      sw: -Math.PI / 4,
      ne: Math.PI * 3 / 4,
      nw: -Math.PI * 3 / 4,
    };
    const targetY = facingRef.current ? (facingMap[facingRef.current] ?? 0) : 0;
    const currentY = groupRef.current.rotation.y;
    let diff = targetY - currentY;
    while (diff > Math.PI) diff -= 2 * Math.PI;
    while (diff < -Math.PI) diff += 2 * Math.PI;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(currentY, currentY + diff, 0.14);
  });

  return (
    <group ref={groupRef} position={[0, -1.85, 0]} scale={0.85}>
      <primitive object={scene} />
      <RobotAttachments
        bones={bones}
        activeHat={activeHat}
        activeGlasses={activeGlasses}
        activeCape={activeCape}
        activeTrail={activeTrail}
        activeHair={activeHair}
        activeFace={activeFace}
        activeTop={activeTop}
        activeBottom={activeBottom}
        activeShoe={activeShoe}
        activeGloves={activeGloves}
      />
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
  activeHair,
  passThrough = false,
  orbitControls = false,
}: AvatarCompanionProps) {
  const positionClass = fixed ? 'fixed z-50' : 'relative w-full h-full';
  const [avatarScale] = useState(() => (fixed ? getAvatarScale() : 1));
  const [localJump, setLocalJump] = useState<{
    reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin' | null;
    timestamp: number;
  }>({ reaction: null, timestamp: 0 });

  const effectiveJump = jumpTrigger || localJump;
  const reactions: Array<'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin'> = [
    'happy', 'surprised', 'victory', 'confused', 'laughing', 'wave', 'dance', 'spin',
  ];

  const handleClick = () => {
    const reaction = reactions[Math.floor(Math.random() * reactions.length)];
    setLocalJump({ reaction, timestamp: Date.now() });
  };

  const glowCol = activeSkin && activeSkin.id !== 'default' ? activeSkin.emissive : '#88aaff';
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
            enableZoom
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
