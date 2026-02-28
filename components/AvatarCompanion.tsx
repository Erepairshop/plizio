'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AvatarCompanionProps {
  mood: 'idle' | 'focused' | 'happy' | 'disappointed' | 'victory';
  skinColor?: string;
  outfitColor?: string;
  fixed?: boolean; // default true, false for relative positioning
}

function Character({ mood, skinColor = '#e8c9a0', outfitColor = '#5a8ec5' }: AvatarCompanionProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const mouthRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const moodRef = useRef(mood);
  const animTimeRef = useRef(0);
  const blinkTimeRef = useRef(0);

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

    // Smooth transition to neutral state (lerp)
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      0,
      0.15
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      0,
      0.15
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      0,
      0.15
    );
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x,
      0,
      0.15
    );

    // Reset arms to neutral
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = THREE.MathUtils.lerp(
        leftArmRef.current.rotation.z,
        0,
        0.15
      );
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = THREE.MathUtils.lerp(
        rightArmRef.current.rotation.z,
        0,
        0.15
      );
    }

    // Blink animation
    if (leftEyeRef.current && rightEyeRef.current) {
      const blinkCycle = blinkTimeRef.current % 3; // Blink every 3 seconds
      const isBlinking = blinkCycle > 2.8;
      const blinkAmount = isBlinking ? Math.sin((blinkCycle - 2.8) * Math.PI / 0.2) * 0.35 : 0;
      leftEyeRef.current.scale.y = Math.max(0, 1 - blinkAmount);
      rightEyeRef.current.scale.y = Math.max(0, 1 - blinkAmount);
    }

    // Update mouth based on mood
    if (mouthRef.current) {
      mouthRef.current.scale.x = 1;
      mouthRef.current.scale.y = 1;
      mouthRef.current.position.y = 0.5;
    }

    // Mood-specific animations
    switch (currentMood) {
      case 'idle': {
        // Smooth subtle breathing (sin-based)
        const breathing = Math.sin(t * 1.5) * 0.03;
        bodyRef.current.position.y = breathing;
        if (mouthRef.current) {
          mouthRef.current.scale.y = 0.8; // Small smile
        }
        break;
      }

      case 'focused': {
        // Slight forward lean with subtle sway
        const lean = Math.sin(t * 1.5) * 0.04;
        groupRef.current.rotation.z = lean;
        bodyRef.current.position.y = Math.sin(t * 2) * 0.02;
        if (mouthRef.current) {
          mouthRef.current.scale.y = 0.6; // Straight line
        }
        break;
      }

      case 'happy': {
        // Jump with squash & stretch (1.2 seconds)
        if (t < 1.2) {
          const progress = t / 1.2;
          const jumpHeight = Math.sin(progress * Math.PI) * 0.4;

          // Squash on takeoff, stretch on landing
          const squashStretch = Math.sin(progress * Math.PI) * 0.15;
          bodyRef.current.scale.y = 1 - squashStretch * 0.1;
          bodyRef.current.scale.x = 1 + squashStretch * 0.08;

          groupRef.current.position.y = Math.max(0, jumpHeight);
          groupRef.current.rotation.y = progress * Math.PI * 0.3;

          // Arm raise on happy
          if (leftArmRef.current && rightArmRef.current) {
            leftArmRef.current.rotation.z = -progress * 0.8;
            rightArmRef.current.rotation.z = progress * 0.8;
          }
        }
        if (mouthRef.current) {
          mouthRef.current.scale.y = 1.2; // Wide smile
        }
        break;
      }

      case 'disappointed': {
        // Slow head tilt down (1.2 seconds)
        if (t < 1.2) {
          const progress = Math.min(1, t / 1.2);
          // Ease-out animation
          const eased = 1 - Math.pow(1 - progress, 3);
          headRef.current.rotation.x = eased * 0.5;
        }
        if (mouthRef.current) {
          mouthRef.current.scale.y = 0.4; // Sad curved mouth
          mouthRef.current.position.y = 0.4;
        }
        break;
      }

      case 'victory': {
        // Big jump + spin + arm raise (2 seconds)
        if (t < 2) {
          const progress = t / 2;
          const jumpHeight = Math.sin(progress * Math.PI) * 0.6;
          groupRef.current.position.y = Math.max(0, jumpHeight);
          groupRef.current.rotation.y += 0.08; // Continuous spin

          // Arm raise for victory
          if (leftArmRef.current && rightArmRef.current) {
            const armRaise = Math.min(1, progress * 2);
            leftArmRef.current.rotation.z = -armRaise * 0.9;
            rightArmRef.current.rotation.z = armRaise * 0.9;
          }
        }
        if (mouthRef.current) {
          mouthRef.current.scale.y = 1.3; // Open smile
        }
        break;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={0.95}>
      {/* Body: slightly wider */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.55, 0.3]} />
        <meshLambertMaterial color={outfitColor} />
      </mesh>

      {/* Head: slightly smaller */}
      <mesh ref={headRef} position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshLambertMaterial color={skinColor} />
      </mesh>

      {/* Left Arm: shorter, closer to body */}
      <mesh ref={leftArmRef} position={[-0.32, 0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.35, 6]} />
        <meshLambertMaterial color={skinColor} />
      </mesh>

      {/* Right Arm: shorter, closer to body */}
      <mesh ref={rightArmRef} position={[0.32, 0.1, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.35, 6]} />
        <meshLambertMaterial color={skinColor} />
      </mesh>

      {/* Left Leg: thicker */}
      <mesh position={[-0.12, -0.45, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.45, 6]} />
        <meshLambertMaterial color="#3a3a3a" />
      </mesh>

      {/* Right Leg: thicker */}
      <mesh position={[0.12, -0.45, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.45, 6]} />
        <meshLambertMaterial color="#3a3a3a" />
      </mesh>

      {/* Left Eye: proper sphere with white */}
      <mesh position={[-0.08, 0.63, 0.22]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshLambertMaterial color="#ffffff" />
      </mesh>
      <mesh ref={leftEyeRef} position={[-0.08, 0.63, 0.225]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshLambertMaterial color="#1a1a1a" />
      </mesh>

      {/* Right Eye: proper sphere with white */}
      <mesh position={[0.08, 0.63, 0.22]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshLambertMaterial color="#ffffff" />
      </mesh>
      <mesh ref={rightEyeRef} position={[0.08, 0.63, 0.225]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshLambertMaterial color="#1a1a1a" />
      </mesh>

      {/* Mouth: simple curved shape (box for now, scales with mood) */}
      <mesh ref={mouthRef} position={[0, 0.5, 0.24]}>
        <boxGeometry args={[0.1, 0.04, 0.02]} />
        <meshLambertMaterial color="#c17a7a" />
      </mesh>
    </group>
  );
}

export default function AvatarCompanion({
  mood = 'idle',
  skinColor = '#e8c9a0',
  outfitColor = '#5a8ec5',
  fixed = true,
}: AvatarCompanionProps) {
  const positionClass = fixed ? 'fixed z-40' : 'relative w-full h-full';
  const pointerClass = fixed ? 'pointer-events-none' : 'pointer-events-auto';

  return (
    <div
      className={`${positionClass} ${pointerClass} w-52 h-52`}
      style={fixed ? { bottom: '12px', right: '12px' } : {}}
    >
      <Canvas
        camera={{ position: [0, 0.15, 2.3], fov: 40 }}
        frameloop="always"
        gl={{
          antialias: false,
          powerPreference: 'low-power',
          alpha: true,
          stencil: false,
        }}
        style={{ background: 'transparent' }}
      >
        {/* Soft ambient light */}
        <ambientLight intensity={0.5} color="#ffffff" />
        {/* Main directional light from top-left */}
        <directionalLight position={[3, 4, 2]} intensity={0.6} color="#ffffff" />
        {/* Fill light */}
        <directionalLight position={[-2, 1, 3]} intensity={0.2} color="#ffffff" />
        <Character mood={mood} skinColor={skinColor} outfitColor={outfitColor} />
      </Canvas>
    </div>
  );
}
