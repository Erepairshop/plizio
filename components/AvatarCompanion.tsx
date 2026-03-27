'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
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

// ── Mood → GLB animation mapping ──────────────────────────
const MOOD_ANIM: Record<string, string> = {
  idle: 'Short_Breathe_and_Look_Around',
  focused: 'Talk_Passionately',
  happy: 'Happy_jump_f',
  disappointed: 'falling_down',
  victory: 'Cheer_with_Both_Hands',
  surprised: 'Dont_You_Dare',
  confused: 'Thoughtful_Walk',
  laughing: 'Motivational_Cheer',
  wave: 'Wave_One_Hand',
  dance: 'Stand_Clap_and_Sit_Down',
  spin: 'Cheer_with_Both_Hands',
};

const WALK_ANIM = 'Walking';
const RUN_ANIM = 'Running';
const FADE_DURATION = 0.5;

// ── GLB hat loader ──────────────────────────────────────────
function HatAttachment({ headBone }: { headBone: THREE.Bone }) {
  const gltf = useLoader(GLTFLoader, '/models/tester_cap.glb');
  const hatScene = useMemo(() => {
    const clone = gltf.scene.clone(true);
    clone.scale.setScalar(1);
    clone.position.set(0, 0.1, 0);
    return clone;
  }, [gltf]);

  useEffect(() => {
    headBone.add(hatScene);
    return () => { headBone.remove(hatScene); };
  }, [headBone, hatScene]);

  return null;
}

// ── MAIN 3D CHARACTER (GLB-based) ───────────────────────────
function RobotCharacter({
  mood,
  isWalking = false,
  facing,
  jumpTrigger,
  activeSkin,
  activeHat,
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
  const reactionMoodRef = useRef<string>('idle');
  const reactionDurationRef = useRef(0.6);

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

  // Find Head bone for hat attachment
  const headBone = useMemo(() => {
    let found: THREE.Bone | null = null;
    scene.traverse((child) => {
      if ((child as THREE.Bone).isBone && child.name === 'Head') {
        found = child as THREE.Bone;
      }
    });
    return found;
  }, [scene]);

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
    const idleClip = MOOD_ANIM.idle;
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

  // Sync mood changes
  useEffect(() => { moodRef.current = mood; }, [mood]);
  useEffect(() => { isWalkingRef.current = isWalking; }, [isWalking]);
  useEffect(() => { facingRef.current = facing; }, [facing]);

  // Handle mood → animation
  useEffect(() => {
    if (isWalkingRef.current) return; // walking overrides mood
    const clip = MOOD_ANIM[mood] || MOOD_ANIM.idle;
    fadeToAction(clip, true);
  }, [mood]);

  // Handle walking state
  useEffect(() => {
    if (isWalking) {
      fadeToAction(WALK_ANIM, true);
    } else {
      const clip = MOOD_ANIM[moodRef.current] || MOOD_ANIM.idle;
      fadeToAction(clip, true);
    }
  }, [isWalking]);

  // Handle jump triggers (reactions)
  useEffect(() => {
    if (jumpTrigger?.reaction) {
      jumpTimerRef.current = 0;
      reactionMoodRef.current = jumpTrigger.reaction;
      reactionDurationRef.current = ['wave', 'dance', 'spin'].includes(jumpTrigger.reaction) ? 1.4 : 0.6;

      const clip = MOOD_ANIM[jumpTrigger.reaction] || MOOD_ANIM.happy;
      fadeToAction(clip, false);
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
          fadeToAction(WALK_ANIM, true);
        } else {
          const clip = MOOD_ANIM[moodRef.current] || MOOD_ANIM.idle;
          fadeToAction(clip, true);
        }
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
      {activeHat && headBone && <HatAttachment headBone={headBone} />}
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
      </Canvas>
    </div>
  );
}
