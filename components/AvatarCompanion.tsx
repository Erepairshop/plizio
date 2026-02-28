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

function Character({ mood, skinColor = '#ffd4a3', outfitColor = '#4a90e2' }: AvatarCompanionProps) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const moodRef = useRef(mood);
  const animTimeRef = useRef(0);

  useEffect(() => {
    moodRef.current = mood;
    animTimeRef.current = 0;
  }, [mood]);

  useFrame((state, delta) => {
    if (!groupRef.current || !headRef.current || !bodyRef.current) return;

    animTimeRef.current += delta;
    const t = animTimeRef.current;
    const currentMood = moodRef.current;

    // Smooth transition to neutral state
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

    // Mood-specific animations
    switch (currentMood) {
      case 'idle': {
        // Subtle breathing - body vertical bob
        bodyRef.current.position.y = Math.sin(t * 2) * 0.04;
        break;
      }

      case 'focused': {
        // Slight forward lean
        const lean = Math.sin(t * 1.5) * 0.06;
        groupRef.current.rotation.z = lean;
        bodyRef.current.position.y = Math.sin(t * 2) * 0.02;
        break;
      }

      case 'happy': {
        // Jump and bounce (1.2 seconds)
        if (t < 1.2) {
          const progress = t / 1.2;
          const bounce = Math.sin(progress * Math.PI * 2) * 0.25;
          groupRef.current.position.y = Math.max(0, bounce);
          groupRef.current.rotation.y = progress * Math.PI * 0.4;
        }
        break;
      }

      case 'disappointed': {
        // Head down gradually (1.2 seconds)
        if (t < 1.2) {
          const progress = Math.min(1, t / 1.2);
          headRef.current.rotation.x = progress * 0.4;
        }
        break;
      }

      case 'victory': {
        // Big jump and spin (2 seconds)
        if (t < 2) {
          const progress = t / 2;
          const jump = Math.sin(progress * Math.PI) * 0.5;
          groupRef.current.position.y = jump;
          groupRef.current.rotation.y += 0.12; // Continuous spin
        }
        break;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.2}>
      {/* Body: simple box */}
      <mesh ref={bodyRef} position={[0, 0, 0]}>
        <boxGeometry args={[0.4, 0.6, 0.3]} />
        <meshPhongMaterial color={outfitColor} flatShading={false} />
      </mesh>

      {/* Head: sphere */}
      <mesh ref={headRef} position={[0, 0.55, 0]}>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshPhongMaterial color={skinColor} />
      </mesh>

      {/* Left Arm: cylinder */}
      <mesh position={[-0.35, 0.15, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.42, 6]} />
        <meshPhongMaterial color={skinColor} />
      </mesh>

      {/* Right Arm: cylinder */}
      <mesh position={[0.35, 0.15, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.42, 6]} />
        <meshPhongMaterial color={skinColor} />
      </mesh>

      {/* Left Leg: cylinder */}
      <mesh position={[-0.15, -0.45, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.45, 6]} />
        <meshPhongMaterial color="#2c2c2c" />
      </mesh>

      {/* Right Leg: cylinder */}
      <mesh position={[0.15, -0.45, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.45, 6]} />
        <meshPhongMaterial color="#2c2c2c" />
      </mesh>

      {/* Left Eye: small sphere */}
      <mesh position={[-0.09, 0.68, 0.24]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshPhongMaterial color="black" />
      </mesh>

      {/* Right Eye: small sphere */}
      <mesh position={[0.09, 0.68, 0.24]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshPhongMaterial color="black" />
      </mesh>

      {/* Mouth: simple box */}
      <mesh position={[0, 0.5, 0.26]}>
        <boxGeometry args={[0.12, 0.04, 0.02]} />
        <meshPhongMaterial color="#c9736d" />
      </mesh>
    </group>
  );
}

export default function AvatarCompanion({
  mood = 'idle',
  skinColor = '#ffd4a3',
  outfitColor = '#4a90e2',
  fixed = true,
}: AvatarCompanionProps) {
  const positionClass = fixed ? 'fixed bottom-4 right-4 z-40' : 'relative w-full h-full';
  const pointerClass = fixed ? 'pointer-events-none' : 'pointer-events-auto';

  return (
    <div className={`${positionClass} ${pointerClass} w-52 h-52`}>
      <Canvas
        camera={{ position: [0, 0.2, 2.2], fov: 45 }}
        frameloop="always"
        gl={{
          antialias: false,
          powerPreference: 'low-power',
          alpha: true,
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <directionalLight position={[-5, 3, 3]} intensity={0.3} />
        <Character mood={mood} skinColor={skinColor} outfitColor={outfitColor} />
      </Canvas>
    </div>
  );
}
