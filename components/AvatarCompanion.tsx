'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AvatarCompanionProps {
  mood: 'idle' | 'focused' | 'happy' | 'disappointed' | 'victory' | 'surprised' | 'confused' | 'laughing';
  skinColor?: string;
  outfitColor?: string;
  fixed?: boolean;
  jumpTrigger?: { reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | null; timestamp: number };
}

// Random blink interval between 3–7 seconds
function nextBlink() {
  return 3 + Math.random() * 4;
}

function Character({ mood, skinColor = '#e8c9a0', outfitColor = '#6b8fad', jumpTrigger }: AvatarCompanionProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftLidRef = useRef<THREE.Mesh>(null);
  const rightLidRef = useRef<THREE.Mesh>(null);
  const leftIrisRef = useRef<THREE.Mesh>(null);
  const rightIrisRef = useRef<THREE.Mesh>(null);
  const mouthRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftShoulderRef = useRef<THREE.Mesh>(null);
  const rightShoulderRef = useRef<THREE.Mesh>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const moodRef = useRef(mood);
  const tRef = useRef(0);
  const blinkTimer = useRef(0);
  const blinkNext = useRef(nextBlink());
  const blinkPhase = useRef(-1); // -1 = not blinking, 0..1 = blink progress
  const jumpTimer = useRef(-1); // -1 = not jumping, 0..1 = jump progress
  const reactionMoodRef = useRef<'idle' | 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing'>('idle');

  useEffect(() => {
    moodRef.current = mood;
    tRef.current = 0;
  }, [mood]);

  useEffect(() => {
    if (jumpTrigger?.reaction) {
      jumpTimer.current = 0;
      reactionMoodRef.current = jumpTrigger.reaction;
    }
  }, [jumpTrigger?.timestamp]);

  useFrame((_state, delta) => {
    if (!groupRef.current || !headRef.current || !bodyRef.current) return;

    tRef.current += delta;
    blinkTimer.current += delta;

    // Jump animation
    if (jumpTimer.current >= 0) {
      jumpTimer.current += delta / 0.6; // 0.6s jump duration
      if (jumpTimer.current > 1) {
        jumpTimer.current = -1;
      }
    }

    const t = tRef.current;
    let m = moodRef.current;

    // Override mood during jump reaction
    if (jumpTimer.current >= 0) {
      m = reactionMoodRef.current;
    }

    const lerp = THREE.MathUtils.lerp;

    // ════════════════════════════════════════════════════════
    // JUMP PHYSICS: Arc up and down
    // ════════════════════════════════════════════════════════
    let jumpHeight = 0;
    if (jumpTimer.current >= 0) {
      // Parabolic jump arc
      const jumpProgress = jumpTimer.current;
      jumpHeight = Math.sin(jumpProgress * Math.PI) * 0.35; // Peak at 0.35 units
    }

    // ════════════════════════════════════════════════════════
    // BASE: Smooth lerp everything toward neutral
    // ════════════════════════════════════════════════════════
    groupRef.current.position.y = lerp(groupRef.current.position.y, jumpHeight, 0.15);
    groupRef.current.rotation.y = lerp(groupRef.current.rotation.y, 0, 0.1);
    groupRef.current.rotation.z = lerp(groupRef.current.rotation.z, 0, 0.1);
    headRef.current.rotation.x = lerp(headRef.current.rotation.x, 0, 0.1);
    headRef.current.rotation.y = lerp(headRef.current.rotation.y, 0, 0.1);
    headRef.current.rotation.z = lerp(headRef.current.rotation.z, 0, 0.1);
    bodyRef.current.scale.x = lerp(bodyRef.current.scale.x, 1, 0.12);
    bodyRef.current.scale.y = lerp(bodyRef.current.scale.y, 1, 0.12);
    bodyRef.current.position.y = lerp(bodyRef.current.position.y, 0, 0.1);

    // ════════════════════════════════════════════════════════
    // LEGS: Pull up during jump
    // ════════════════════════════════════════════════════════
    if (leftLegRef.current && rightLegRef.current) {
      let legScale = 1;
      if (jumpTimer.current >= 0) {
        // Compress legs during jump (0.7 at peak)
        legScale = 0.7 + Math.cos(jumpTimer.current * Math.PI) * 0.3;
      }
      leftLegRef.current.scale.y = lerp(leftLegRef.current.scale.y, legScale, 0.15);
      rightLegRef.current.scale.y = lerp(rightLegRef.current.scale.y, legScale, 0.15);
    }

    // Arms rest at slight outward + slight elbow bend (forward rotation)
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.15, 0.1);
      leftArmRef.current.rotation.x = lerp(leftArmRef.current.rotation.x, 0.12, 0.1);
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.15, 0.1);
      rightArmRef.current.rotation.x = lerp(rightArmRef.current.rotation.x, 0.12, 0.1);
    }

    // Shoulders reset to neutral
    if (leftShoulderRef.current && rightShoulderRef.current) {
      leftShoulderRef.current.rotation.z = lerp(leftShoulderRef.current.rotation.z, 0, 0.1);
      leftShoulderRef.current.rotation.x = lerp(leftShoulderRef.current.rotation.x, 0, 0.1);
      rightShoulderRef.current.rotation.z = lerp(rightShoulderRef.current.rotation.z, 0, 0.1);
      rightShoulderRef.current.rotation.x = lerp(rightShoulderRef.current.rotation.x, 0, 0.1);
    }

    // ════════════════════════════════════════════════════════
    // BLINK: Real eyelid geometry (scale Y of lid mesh)
    // 3–7 sec random interval, 0.12s close + 0.12s open
    // ════════════════════════════════════════════════════════
    if (blinkPhase.current < 0) {
      // Not blinking – check timer
      if (blinkTimer.current >= blinkNext.current) {
        blinkPhase.current = 0;
        blinkTimer.current = 0;
      }
    }
    if (blinkPhase.current >= 0) {
      blinkPhase.current += delta / 0.12; // 0.12s half-cycle
      if (blinkPhase.current > 2) {
        // Blink done
        blinkPhase.current = -1;
        blinkTimer.current = 0;
        blinkNext.current = nextBlink();
      }
    }
    const lidClose = blinkPhase.current >= 0
      ? (blinkPhase.current <= 1
        ? blinkPhase.current           // closing 0→1
        : 2 - blinkPhase.current)      // opening 1→0
      : 0;

    if (leftLidRef.current) leftLidRef.current.scale.y = 0.01 + lidClose * 1.2;
    if (rightLidRef.current) rightLidRef.current.scale.y = 0.01 + lidClose * 1.2;

    // ════════════════════════════════════════════════════════
    // EYES: Slow gaze drift toward screen center
    // ════════════════════════════════════════════════════════
    if (leftIrisRef.current && rightIrisRef.current) {
      // Very slow, smooth drift – not cursor tracking
      const gazeX = Math.sin(t * 0.4) * 0.008;
      const gazeY = Math.sin(t * 0.3 + 0.7) * 0.005;
      leftIrisRef.current.position.x = -0.08 + gazeX;
      leftIrisRef.current.position.y = 0.04 + gazeY;
      rightIrisRef.current.position.x = 0.08 + gazeX;
      rightIrisRef.current.position.y = 0.04 + gazeY;
    }

    // ════════════════════════════════════════════════════════
    // MOUTH: Default reset
    // ════════════════════════════════════════════════════════
    if (mouthRef.current) {
      mouthRef.current.scale.x = lerp(mouthRef.current.scale.x, 1, 0.12);
      mouthRef.current.scale.y = lerp(mouthRef.current.scale.y, 1, 0.12);
      mouthRef.current.position.y = lerp(mouthRef.current.position.y, -0.1, 0.12);
    }

    // ════════════════════════════════════════════════════════
    // JUMP REACTIONS: Head movements during jump
    // ════════════════════════════════════════════════════════
    if (jumpTimer.current >= 0) {
      const jp = jumpTimer.current;
      switch (reactionMoodRef.current) {
        case 'happy': {
          // Head looks up excitedly
          headRef.current.rotation.x = Math.sin(jp * Math.PI * 2) * 0.15;
          break;
        }
        case 'surprised': {
          // Head tilts back
          headRef.current.rotation.x = -0.2;
          break;
        }
        case 'victory': {
          // Head looks up triumphantly
          headRef.current.rotation.x = -0.25;
          groupRef.current.rotation.z = Math.sin(jp * Math.PI * 1.5) * 0.1;
          break;
        }
        case 'confused': {
          // Head tilts forward confused
          headRef.current.rotation.x = 0.2;
          break;
        }
        case 'laughing': {
          // Head bounces side to side while laughing
          headRef.current.rotation.y = Math.sin(jp * Math.PI * 3) * 0.15;
          headRef.current.rotation.z = Math.sin(jp * Math.PI * 3 + 0.5) * 0.1;
          break;
        }
      }
    }

    // ════════════════════════════════════════════════════════
    // MOOD ANIMATIONS (layered, multi-frequency)
    // ════════════════════════════════════════════════════════
    switch (m) {
      case 'idle': {
        // ── Layer 1: Breathing (body only, NOT head) ──────
        const breathA = Math.sin(t * 1.3) * 0.02;
        bodyRef.current.position.y = breathA;

        // ── Layer 2: Torso tilt (slow sway ±2°) ──────────
        groupRef.current.rotation.z = Math.sin(t * 0.65) * 0.035;

        // ── Layer 3: Head micro-sway (rotation only) ─────
        headRef.current.rotation.z = Math.sin(t * 0.55 + 1.2) * 0.025;
        headRef.current.rotation.y = Math.sin(t * 0.4 + 0.5) * 0.02;

        // ── Layer 4: Arm swing (offset timing each arm) ──
        if (leftArmRef.current && rightArmRef.current) {
          leftArmRef.current.rotation.z = -0.15 + Math.sin(t * 0.75) * 0.04;
          rightArmRef.current.rotation.z = 0.15 - Math.sin(t * 0.75 + 0.8) * 0.04;
        }

        // ── Layer 5: Shoulder breathing ──────────────────
        if (leftShoulderRef.current && rightShoulderRef.current) {
          const sBreath = Math.sin(t * 1.3) * 0.006;
          leftShoulderRef.current.position.y = 0.2 + sBreath;
          rightShoulderRef.current.position.y = 0.2 + sBreath;
        }

        // ── Layer 6: Leg weight shift ────────────────────
        if (leftLegRef.current && rightLegRef.current) {
          const wShift = Math.sin(t * 0.5) * 0.007;
          leftLegRef.current.position.y = -0.44 + wShift;
          rightLegRef.current.position.y = -0.44 - wShift;
        }

        // ── Mouth: small smile + micro movement ─────────
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.1 + Math.sin(t * 1.0) * 0.04;
          mouthRef.current.scale.y = 0.7;
          mouthRef.current.position.y = -0.1;
        }
        break;
      }

      case 'focused': {
        // Minimal movement, stable posture (no head tilt down)
        const fBreath = Math.sin(t * 1.8) * 0.012;
        bodyRef.current.position.y = fBreath;

        // Head stays neutral - just subtle micro-movements
        headRef.current.rotation.y = Math.sin(t * 0.3) * 0.01;
        headRef.current.rotation.z = Math.sin(t * 0.25 + 0.5) * 0.01;

        // Very subtle body sway
        groupRef.current.rotation.z = Math.sin(t * 1.2) * 0.012;

        // Straight mouth
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

          // Squash & stretch
          const ss = Math.sin(p * Math.PI);
          bodyRef.current.scale.y = 1 + ss * 0.1;
          bodyRef.current.scale.x = 1 - ss * 0.06;

          groupRef.current.position.y = Math.max(0, jumpH);
          groupRef.current.rotation.y = p * Math.PI * 0.3;

          // Arms up
          if (leftArmRef.current && rightArmRef.current) {
            const armUp = Math.min(1, p * 1.8);
            leftArmRef.current.rotation.z = -0.15 - armUp * 0.8;
            rightArmRef.current.rotation.z = 0.15 + armUp * 0.8;
            leftArmRef.current.rotation.x = 0;
            rightArmRef.current.rotation.x = 0;
          }

          // Shoulder lift
          if (leftShoulderRef.current && rightShoulderRef.current) {
            leftShoulderRef.current.position.y = 0.2 + p * 0.02;
            rightShoulderRef.current.position.y = 0.2 + p * 0.02;
          }
        }
        // Wide smile
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
          // Ease-out: slow start, fast end (better for disappointment)
          const eased = p < 0.5 ? 2 * p * p : -1 + (4 - 2 * p) * p;

          // Head tilt down: 10–15° (0.175–0.26 radians)
          headRef.current.rotation.x = lerp(headRef.current.rotation.x, eased * 0.24, 0.08);

          // Shoulders tilt forward: 3–5° (0.05–0.087 radians)
          if (leftShoulderRef.current && rightShoulderRef.current) {
            const shoulderTilt = eased * 0.08;
            leftShoulderRef.current.rotation.z = shoulderTilt;
            rightShoulderRef.current.rotation.z = shoulderTilt;
          }
        }

        // Minimal body droop (stays connected)
        bodyRef.current.position.y = lerp(bodyRef.current.position.y, -0.008, 0.12);

        // Arms stay mostly resting, minimal inward rotation
        if (leftArmRef.current && rightArmRef.current) {
          leftArmRef.current.rotation.z = lerp(leftArmRef.current.rotation.z, -0.1, 0.12);
          rightArmRef.current.rotation.z = lerp(rightArmRef.current.rotation.z, 0.1, 0.12);
          leftArmRef.current.rotation.x = lerp(leftArmRef.current.rotation.x, 0.08, 0.12);
          rightArmRef.current.rotation.x = lerp(rightArmRef.current.rotation.x, 0.08, 0.12);
        }

        // Sad mouth (narrow)
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

          // Arms raised high
          if (leftArmRef.current && rightArmRef.current) {
            const arm = Math.min(1, p * 2.5);
            leftArmRef.current.rotation.z = -0.15 - arm * 1.1;
            rightArmRef.current.rotation.z = 0.15 + arm * 1.1;
            leftArmRef.current.rotation.x = -arm * 0.3;
            rightArmRef.current.rotation.x = -arm * 0.3;
          }

          // Shoulders up
          if (leftShoulderRef.current && rightShoulderRef.current) {
            leftShoulderRef.current.position.y = 0.2 + p * 0.03;
            rightShoulderRef.current.position.y = 0.2 + p * 0.03;
          }
        }
        // Big open smile
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.6;
          mouthRef.current.scale.y = 1.5;
          mouthRef.current.position.y = -0.11;
        }
        break;
      }
    }

    // Reset groupRef.rotation.x for non-disappointed moods
    if (m !== 'disappointed') {
      groupRef.current.rotation.x = lerp(groupRef.current.rotation.x, 0, 0.1);
    }
  });

  const skinDark = new THREE.Color(skinColor).multiplyScalar(0.82).getStyle();

  return (
    <group ref={groupRef} position={[0, -0.08, 0]} scale={0.88}>

      {/* ══ BODY ═══════════════════════════════════════ */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.28]} />
        <meshStandardMaterial color={outfitColor} roughness={0.72} metalness={0.04} />
      </mesh>

      {/* ══ SHOULDERS ══════════════════════════════════ */}
      <mesh ref={leftShoulderRef} position={[-0.26, 0.2, 0]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshStandardMaterial color={outfitColor} roughness={0.72} metalness={0.04} />
      </mesh>
      <mesh ref={rightShoulderRef} position={[0.26, 0.2, 0]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshStandardMaterial color={outfitColor} roughness={0.72} metalness={0.04} />
      </mesh>

      {/* ══ HEAD GROUP ═════════════════════════════════ */}
      <group ref={headRef} position={[0, 0.5, 0]}>
        {/* Main head */}
        <mesh>
          <sphereGeometry args={[0.22, 16, 12]} />
          <meshStandardMaterial color={skinColor} roughness={0.55} metalness={0.02} />
        </mesh>
        {/* Chin underside shading */}
        <mesh position={[0, -0.07, 0.02]} scale={[1, 0.45, 0.85]}>
          <sphereGeometry args={[0.17, 10, 6]} />
          <meshStandardMaterial color={skinDark} roughness={0.7} metalness={0} />
        </mesh>

        {/* ── LEFT EYE ─────────────────────────────── */}
        {/* White */}
        <mesh position={[-0.08, 0.04, 0.19]}>
          <sphereGeometry args={[0.042, 8, 8]} />
          <meshStandardMaterial color="#f2f2f2" roughness={0.25} />
        </mesh>
        {/* Iris (gaze-tracking) */}
        <mesh ref={leftIrisRef} position={[-0.08, 0.04, 0.215]}>
          <sphereGeometry args={[0.023, 8, 8]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.35} />
        </mesh>
        {/* Specular dot */}
        <mesh position={[-0.075, 0.048, 0.23]}>
          <sphereGeometry args={[0.007, 6, 6]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.6} />
        </mesh>
        {/* Eyelid (real geometry, scales Y to close) */}
        <mesh ref={leftLidRef} position={[-0.08, 0.065, 0.2]} scale={[1, 0.01, 1]}>
          <sphereGeometry args={[0.047, 8, 4, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} side={THREE.DoubleSide} />
        </mesh>

        {/* ── RIGHT EYE ────────────────────────────── */}
        <mesh position={[0.08, 0.04, 0.19]}>
          <sphereGeometry args={[0.042, 8, 8]} />
          <meshStandardMaterial color="#f2f2f2" roughness={0.25} />
        </mesh>
        <mesh ref={rightIrisRef} position={[0.08, 0.04, 0.215]}>
          <sphereGeometry args={[0.023, 8, 8]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.35} />
        </mesh>
        <mesh position={[0.085, 0.048, 0.23]}>
          <sphereGeometry args={[0.007, 6, 6]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.6} />
        </mesh>
        <mesh ref={rightLidRef} position={[0.08, 0.065, 0.2]} scale={[1, 0.01, 1]}>
          <sphereGeometry args={[0.047, 8, 4, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} side={THREE.DoubleSide} />
        </mesh>

        {/* ── MOUTH ────────────────────────────────── */}
        <mesh ref={mouthRef} position={[0, -0.1, 0.2]}>
          <boxGeometry args={[0.085, 0.028, 0.012]} />
          <meshStandardMaterial color="#b06060" roughness={0.5} />
        </mesh>
      </group>

      {/* ══ LEFT ARM (pivot at shoulder) ═══════════════ */}
      <group ref={leftArmRef} position={[-0.31, 0.16, 0]} rotation={[0.12, 0, -0.15]}>
        <mesh position={[0, -0.16, 0]}>
          <cylinderGeometry args={[0.06, 0.07, 0.32, 6]} />
          <meshStandardMaterial color={skinColor} roughness={0.62} metalness={0.02} />
        </mesh>
      </group>

      {/* ══ RIGHT ARM (pivot at shoulder) ══════════════ */}
      <group ref={rightArmRef} position={[0.31, 0.16, 0]} rotation={[0.12, 0, 0.15]}>
        <mesh position={[0, -0.16, 0]}>
          <cylinderGeometry args={[0.06, 0.07, 0.32, 6]} />
          <meshStandardMaterial color={skinColor} roughness={0.62} metalness={0.02} />
        </mesh>
      </group>

      {/* ══ LEFT LEG ══════════════════════════════════ */}
      <mesh ref={leftLegRef} position={[-0.13, -0.44, 0.015]}>
        <cylinderGeometry args={[0.095, 0.105, 0.42, 6]} />
        <meshStandardMaterial color="#3c3c3c" roughness={0.82} />
      </mesh>

      {/* ══ RIGHT LEG ═════════════════════════════════ */}
      <mesh ref={rightLegRef} position={[0.13, -0.44, -0.015]}>
        <cylinderGeometry args={[0.095, 0.105, 0.42, 6]} />
        <meshStandardMaterial color="#3c3c3c" roughness={0.82} />
      </mesh>
    </group>
  );
}

export default function AvatarCompanion({
  mood = 'idle',
  skinColor = '#e8c9a0',
  outfitColor = '#6b8fad',
  fixed = true,
}: AvatarCompanionProps) {
  const positionClass = fixed ? 'fixed z-40' : 'relative w-full h-full';
  const pointerClass = fixed ? 'pointer-events-auto' : 'pointer-events-auto';
  const [jumpTrigger, setJumpTrigger] = useState<{
    reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | null;
    timestamp: number;
  }>({ reaction: null, timestamp: 0 });

  // 5 different reactions on click
  const reactions: Array<'happy' | 'surprised' | 'victory' | 'confused' | 'laughing'> = [
    'happy',
    'surprised',
    'victory',
    'confused',
    'laughing',
  ];

  const handleAvatarClick = () => {
    const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
    setJumpTrigger({ reaction: randomReaction, timestamp: Date.now() });
  };

  return (
    <div
      className={`${positionClass} ${pointerClass} w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 cursor-pointer`}
      style={fixed ? {
        bottom: 'max(20px, calc(env(safe-area-inset-bottom) + 20px))',
        right: '20px'
      } : {}}
      onClick={handleAvatarClick}
    >
      <Canvas
        camera={{ position: [0, 0.1, 2.2], fov: 38 }}
        frameloop="always"
        gl={{
          antialias: false,
          powerPreference: 'low-power',
          alpha: true,
          stencil: false,
        }}
        style={{ background: 'transparent' }}
      >
        {/* Warm hemisphere light */}
        <hemisphereLight color="#f0e8dd" groundColor="#8a7a6a" intensity={0.5} />
        {/* Soft ambient fill */}
        <ambientLight intensity={0.3} />
        {/* Warm key light from top-left */}
        <directionalLight position={[-3, 5, 3]} intensity={0.5} color="#fff0e0" />
        {/* Cool rim light for depth */}
        <directionalLight position={[2, 1, -2]} intensity={0.12} color="#d0e0ff" />
        <Character mood={mood} skinColor={skinColor} outfitColor={outfitColor} jumpTrigger={jumpTrigger} />
      </Canvas>
    </div>
  );
}
