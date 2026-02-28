'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AvatarCompanionProps {
  mood: 'idle' | 'focused' | 'happy' | 'disappointed' | 'victory';
  skinColor?: string;
  outfitColor?: string;
  fixed?: boolean;
}

// Randomized blink interval (4–6 seconds)
function nextBlinkInterval() {
  return 4 + Math.random() * 2;
}

function Character({ mood, skinColor = '#e8c9a0', outfitColor = '#6b8fad' }: AvatarCompanionProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const leftPupilRef = useRef<THREE.Mesh>(null);
  const rightPupilRef = useRef<THREE.Mesh>(null);
  const mouthRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const moodRef = useRef(mood);
  const animTimeRef = useRef(0);
  const blinkTimeRef = useRef(0);
  const blinkIntervalRef = useRef(nextBlinkInterval());

  useEffect(() => {
    moodRef.current = mood;
    animTimeRef.current = 0;
  }, [mood]);

  useFrame((state, delta) => {
    if (!groupRef.current || !headRef.current || !bodyRef.current) return;

    animTimeRef.current += delta;
    blinkTimeRef.current += delta;
    const t = animTimeRef.current;
    const currentMood = moodRef.current;

    // ── Smooth lerp to neutral ────────────────────────────
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, 0, 0.12);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, 0.12);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, 0, 0.12);
    headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, 0, 0.12);
    headRef.current.rotation.z = THREE.MathUtils.lerp(headRef.current.rotation.z, 0, 0.12);

    // Reset body scale
    bodyRef.current.scale.x = THREE.MathUtils.lerp(bodyRef.current.scale.x, 1, 0.15);
    bodyRef.current.scale.y = THREE.MathUtils.lerp(bodyRef.current.scale.y, 1, 0.15);

    // Arms lerp to resting angle (slight outward)
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, -0.12, 0.12);
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, 0.12, 0.12);
    }

    // ── Randomized blink (4–6 sec) ───────────────────────
    if (leftEyeRef.current && rightEyeRef.current) {
      const sinceBlink = blinkTimeRef.current;
      let blinkScale = 1;
      if (sinceBlink >= blinkIntervalRef.current) {
        const blinkPhase = sinceBlink - blinkIntervalRef.current;
        if (blinkPhase < 0.15) {
          // Close
          blinkScale = 1 - Math.sin((blinkPhase / 0.15) * Math.PI) * 0.95;
        } else {
          // Reset, schedule next blink
          blinkTimeRef.current = 0;
          blinkIntervalRef.current = nextBlinkInterval();
        }
      }
      leftEyeRef.current.scale.y = blinkScale;
      rightEyeRef.current.scale.y = blinkScale;
    }

    // ── Subtle pupil drift (idle life) ───────────────────
    if (leftPupilRef.current && rightPupilRef.current) {
      const px = Math.sin(t * 0.7) * 0.006;
      const py = Math.cos(t * 0.5) * 0.004;
      leftPupilRef.current.position.x = -0.08 + px;
      leftPupilRef.current.position.y = 0.55 + py;
      rightPupilRef.current.position.x = 0.08 + px;
      rightPupilRef.current.position.y = 0.55 + py;
    }

    // ── Mouth default reset ──────────────────────────────
    if (mouthRef.current) {
      mouthRef.current.scale.x = THREE.MathUtils.lerp(mouthRef.current.scale.x, 1, 0.15);
      mouthRef.current.scale.y = THREE.MathUtils.lerp(mouthRef.current.scale.y, 1, 0.15);
      mouthRef.current.position.y = THREE.MathUtils.lerp(mouthRef.current.position.y, 0.42, 0.15);
    }

    // ── Mood-specific animations ─────────────────────────
    switch (currentMood) {
      case 'idle': {
        // Smooth breathing
        const breath = Math.sin(t * 1.4) * 0.025;
        bodyRef.current.position.y = breath;

        // Subtle torso tilt oscillation (2-3 degrees)
        groupRef.current.rotation.z = Math.sin(t * 0.8) * 0.035;

        // Subtle arm swing
        if (leftArmRef.current && rightArmRef.current) {
          leftArmRef.current.rotation.z = -0.12 + Math.sin(t * 0.9) * 0.04;
          rightArmRef.current.rotation.z = 0.12 - Math.sin(t * 0.9) * 0.04;
        }

        // Leg weight transfer
        if (leftLegRef.current && rightLegRef.current) {
          const shift = Math.sin(t * 0.6) * 0.008;
          leftLegRef.current.position.y = -0.45 + shift;
          rightLegRef.current.position.y = -0.45 - shift;
        }

        // Micro mouth movement + small smile curve
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.1 + Math.sin(t * 1.2) * 0.05;
          mouthRef.current.scale.y = 0.7;
          mouthRef.current.position.y = 0.42;
        }

        // Subtle head micro-movement
        headRef.current.rotation.z = Math.sin(t * 0.6) * 0.02;
        break;
      }

      case 'focused': {
        // Slight lean with subtle sway
        const lean = Math.sin(t * 1.5) * 0.035;
        groupRef.current.rotation.z = lean;
        bodyRef.current.position.y = Math.sin(t * 2) * 0.015;

        // Focused → straight line mouth
        if (mouthRef.current) {
          mouthRef.current.scale.x = 0.9;
          mouthRef.current.scale.y = 0.5;
          mouthRef.current.position.y = 0.42;
        }
        break;
      }

      case 'happy': {
        // Jump with squash & stretch
        if (t < 1.2) {
          const p = t / 1.2;
          const jumpH = Math.sin(p * Math.PI) * 0.35;

          // Squash at start/end, stretch at peak
          const ss = Math.sin(p * Math.PI);
          bodyRef.current.scale.y = 1 + ss * 0.08;
          bodyRef.current.scale.x = 1 - ss * 0.05;

          groupRef.current.position.y = Math.max(0, jumpH);
          groupRef.current.rotation.y = p * Math.PI * 0.25;

          // Arms up
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -0.12 - p * 0.7;
            rightArmRef.current.rotation.z = 0.12 + p * 0.7;
          }
        }
        // Wide smile
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.4;
          mouthRef.current.scale.y = 1.1;
          mouthRef.current.position.y = 0.41;
        }
        break;
      }

      case 'disappointed': {
        // Slow ease-out head tilt
        if (t < 1.5) {
          const p = Math.min(1, t / 1.5);
          const eased = 1 - Math.pow(1 - p, 3);
          headRef.current.rotation.x = eased * 0.45;
        }
        // Slight body droop
        bodyRef.current.position.y = -0.02;

        // Arms hang lower
        if (leftArmRef.current && rightArmRef.current) {
          leftArmRef.current.rotation.z = -0.05;
          rightArmRef.current.rotation.z = 0.05;
        }

        // Sad mouth
        if (mouthRef.current) {
          mouthRef.current.scale.x = 0.8;
          mouthRef.current.scale.y = 0.35;
          mouthRef.current.position.y = 0.4;
        }
        break;
      }

      case 'victory': {
        // Big jump + spin + arms up
        if (t < 2.5) {
          const p = t / 2.5;
          const jumpH = Math.sin(p * Math.PI) * 0.55;
          groupRef.current.position.y = Math.max(0, jumpH);
          groupRef.current.rotation.y += 0.07;

          // Arms raised
          if (leftArmRef.current && rightArmRef.current) {
            const arm = Math.min(1, p * 2.5);
            leftArmRef.current.rotation.z = -0.12 - arm * 1.0;
            rightArmRef.current.rotation.z = 0.12 + arm * 1.0;
          }
        }
        // Open smile
        if (mouthRef.current) {
          mouthRef.current.scale.x = 1.5;
          mouthRef.current.scale.y = 1.4;
          mouthRef.current.position.y = 0.41;
        }
        break;
      }
    }
  });

  // Slightly darker skin for underside shading
  const skinDark = new THREE.Color(skinColor).multiplyScalar(0.85).getStyle();

  return (
    <group ref={groupRef} position={[0, -0.1, 0]} scale={0.9}>

      {/* ── Body ─────────────────────────────────────── */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.48, 0.52, 0.28]} />
        <meshStandardMaterial color={outfitColor} roughness={0.7} metalness={0.05} />
      </mesh>
      {/* Shoulder rounding (two small spheres) */}
      <mesh position={[-0.24, 0.2, 0]}>
        <sphereGeometry args={[0.09, 8, 8]} />
        <meshStandardMaterial color={outfitColor} roughness={0.7} metalness={0.05} />
      </mesh>
      <mesh position={[0.24, 0.2, 0]}>
        <sphereGeometry args={[0.09, 8, 8]} />
        <meshStandardMaterial color={outfitColor} roughness={0.7} metalness={0.05} />
      </mesh>

      {/* ── Head group (for tilt/rotation) ───────────── */}
      <group ref={headRef} position={[0, 0.5, 0]}>
        {/* Main head sphere */}
        <mesh>
          <sphereGeometry args={[0.23, 16, 12]} />
          <meshStandardMaterial color={skinColor} roughness={0.6} metalness={0.02} />
        </mesh>
        {/* Bottom chin shading sphere (darker) */}
        <mesh position={[0, -0.06, 0.02]} scale={[1, 0.5, 0.9]}>
          <sphereGeometry args={[0.18, 10, 6]} />
          <meshStandardMaterial color={skinDark} roughness={0.7} metalness={0} />
        </mesh>

        {/* ── Left Eye ───────────────────────────────── */}
        <mesh position={[-0.08, 0.06, 0.2]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.3} />
        </mesh>
        <mesh ref={leftEyeRef} position={[-0.08, 0.06, 0.22]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshStandardMaterial color="#222222" roughness={0.4} />
        </mesh>
        {/* Pupil (tiny highlight dot) */}
        <mesh ref={leftPupilRef} position={[-0.08, 0.055, 0.235]}>
          <sphereGeometry args={[0.008, 6, 6]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>

        {/* ── Right Eye ──────────────────────────────── */}
        <mesh position={[0.08, 0.06, 0.2]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.3} />
        </mesh>
        <mesh ref={rightEyeRef} position={[0.08, 0.06, 0.22]}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshStandardMaterial color="#222222" roughness={0.4} />
        </mesh>
        <mesh ref={rightPupilRef} position={[0.08, 0.055, 0.235]}>
          <sphereGeometry args={[0.008, 6, 6]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>

        {/* ── Mouth ──────────────────────────────────── */}
        <mesh ref={mouthRef} position={[0, -0.08, 0.21]}>
          <boxGeometry args={[0.09, 0.03, 0.015]} />
          <meshStandardMaterial color="#b86b6b" roughness={0.5} />
        </mesh>
      </group>

      {/* ── Left Arm (pivot from shoulder) ───────────── */}
      <group ref={leftArmRef} position={[-0.3, 0.15, 0]} rotation={[0, 0, -0.12]}>
        <mesh position={[0, -0.17, 0]}>
          <cylinderGeometry args={[0.065, 0.075, 0.34, 6]} />
          <meshStandardMaterial color={skinColor} roughness={0.65} metalness={0.02} />
        </mesh>
      </group>

      {/* ── Right Arm (pivot from shoulder) ──────────── */}
      <group ref={rightArmRef} position={[0.3, 0.15, 0]} rotation={[0, 0, 0.12]}>
        <mesh position={[0, -0.17, 0]}>
          <cylinderGeometry args={[0.065, 0.075, 0.34, 6]} />
          <meshStandardMaterial color={skinColor} roughness={0.65} metalness={0.02} />
        </mesh>
      </group>

      {/* ── Left Leg ─────────────────────────────────── */}
      <mesh ref={leftLegRef} position={[-0.12, -0.45, 0.02]}>
        <cylinderGeometry args={[0.09, 0.1, 0.42, 6]} />
        <meshStandardMaterial color="#3d3d3d" roughness={0.8} />
      </mesh>

      {/* ── Right Leg ────────────────────────────────── */}
      <mesh ref={rightLegRef} position={[0.12, -0.45, -0.02]}>
        <cylinderGeometry args={[0.09, 0.1, 0.42, 6]} />
        <meshStandardMaterial color="#3d3d3d" roughness={0.8} />
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
  const pointerClass = fixed ? 'pointer-events-none' : 'pointer-events-auto';

  return (
    <div
      className={`${positionClass} ${pointerClass} w-48 h-48`}
      style={fixed ? { bottom: '14px', right: '14px' } : {}}
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
        {/* Hemisphere light for soft sky/ground gradient */}
        <hemisphereLight color="#e8e0d8" groundColor="#8a7a6a" intensity={0.45} />
        {/* Soft ambient fill */}
        <ambientLight intensity={0.35} />
        {/* Main key light from top-left */}
        <directionalLight position={[-3, 5, 3]} intensity={0.55} color="#fff5e8" />
        {/* Rim light from back-right for depth */}
        <directionalLight position={[2, 1, -2]} intensity={0.15} color="#d0e0ff" />
        <Character mood={mood} skinColor={skinColor} outfitColor={outfitColor} />
      </Canvas>
    </div>
  );
}
