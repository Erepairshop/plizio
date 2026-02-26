"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Trophy, ArrowUp, RotateCcw, Home } from "lucide-react";
import RewardReveal from "@/components/RewardReveal";
import { saveCard, generateCardId, type CardRarity } from "@/lib/cards";

// ─── TYPES ──────────────────────────────────────────
interface Platform3D {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  type: "ground" | "rock" | "step" | "bridge" | "moving" | "crumble";
  moveAxis?: "x" | "z";
  moveRange?: number;
  moveSpeed?: number;
  origX?: number;
  origZ?: number;
  crumbleTimer?: number;
  touched?: boolean;
  trees?: { ox: number; oz: number; s: number }[];
  rocks?: { ox: number; oz: number; s: number }[];
}

type GameState = "menu" | "playing" | "dead" | "level-complete" | "reward";

// ─── CONSTANTS ──────────────────────────────────────
const GRAVITY = 0.025;
const JUMP_FORCE = 0.38;
const MOVE_SPEED = 0.04;
const RUN_SPEED = 0.07;
const PLAYER_RADIUS = 0.3;
const CAM_DISTANCE = 9;
const CAM_HEIGHT = 4.5;
const FRICTION = 0.82;
const ACCEL = 0.05;

// ─── LEVEL GENERATION (PATH-BASED) ─────────────────
function generateLevel(level: number): { platforms: Platform3D[]; goalIdx: number } {
  const platforms: Platform3D[] = [];
  const difficulty = Math.min(level, 10);
  let cx = 0, cy = 0, cz = 0;

  function addTrees(p: Platform3D, count: number) {
    p.trees = [];
    for (let i = 0; i < count; i++) {
      p.trees.push({
        ox: (Math.random() - 0.5) * Math.max(p.w - 2, 1),
        oz: (Math.random() - 0.5) * Math.max(p.d - 2, 1),
        s: 0.6 + Math.random() * 0.6,
      });
    }
  }

  function addRocks(p: Platform3D, count: number) {
    p.rocks = [];
    for (let i = 0; i < count; i++) {
      p.rocks.push({
        ox: (Math.random() - 0.5) * Math.max(p.w - 1, 0.5),
        oz: (Math.random() - 0.5) * Math.max(p.d - 1, 0.5),
        s: 0.2 + Math.random() * 0.4,
      });
    }
  }

  // Start platform
  const start: Platform3D = { x: 0, y: -0.5, z: 0, w: 8, d: 8, h: 1, type: "ground" };
  addTrees(start, 3);
  addRocks(start, 2);
  platforms.push(start);

  const segCount = 8 + level * 2;

  for (let s = 0; s < segCount; s++) {
    const roll = Math.random();
    const lat = (Math.random() - 0.5) * 2;

    if (s < 2 || roll < 0.30) {
      // Ground path — wide walkable terrain
      const depth = 6 + Math.random() * 8;
      const w = 5 + Math.random() * 4;
      cz += depth / 2 + 1.5;
      cx += lat;
      cy += 0.1 + Math.random() * 0.3;
      const p: Platform3D = {
        x: cx, y: cy - 0.5, z: cz,
        w, d: depth, h: 1 + Math.random() * 0.5,
        type: "ground",
      };
      addTrees(p, 1 + Math.floor(Math.random() * 3));
      addRocks(p, Math.floor(Math.random() * 3));
      platforms.push(p);
      cz += depth / 2;
    } else if (roll < 0.50) {
      // Gap jump
      const gap = 1.2 + difficulty * 0.08;
      const d = 4 + Math.random() * 3;
      cz += gap + d / 2;
      cy += 0.1 + Math.random() * 0.3;
      cx += lat * 0.4;
      const p: Platform3D = {
        x: cx, y: cy - 0.4, z: cz,
        w: 4 + Math.random() * 3, d, h: 0.8 + Math.random() * 0.5,
        type: "rock",
      };
      addRocks(p, 1 + Math.floor(Math.random() * 2));
      platforms.push(p);
      cz += d / 2;
    } else if (roll < 0.68) {
      // Staircase — rock steps going up
      const steps = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < steps; i++) {
        cz += 3.0;
        cy += 0.6 + Math.random() * 0.4;
        cx += (Math.random() - 0.5) * 1.0;
        platforms.push({
          x: cx, y: cy - 0.25, z: cz,
          w: 2.5 + Math.random() * 1.5, d: 2.5 + Math.random(),
          h: 0.5 + Math.random() * 0.3,
          type: "step",
        });
      }
    } else if (roll < 0.80) {
      // Narrow bridge
      const bLen = 5 + Math.random() * 5;
      cz += bLen / 2 + 1.5;
      cx += lat * 0.3;
      platforms.push({
        x: cx, y: cy - 0.1, z: cz,
        w: 1.5 + Math.random() * 0.5, d: bLen, h: 0.25,
        type: "bridge",
      });
      cz += bLen / 2;
    } else if (difficulty >= 3 && roll < 0.90) {
      // Moving platform
      cz += 3.5;
      cy += 0.3;
      platforms.push({
        x: cx, y: cy, z: cz, w: 3.5, d: 3.5, h: 0.4,
        type: "moving",
        origX: cx, origZ: cz,
        moveAxis: Math.random() > 0.5 ? "x" : "z",
        moveRange: 1.5 + Math.random() * 2,
        moveSpeed: 0.4 + difficulty * 0.1,
      });
      cz += 4;
    } else if (difficulty >= 4) {
      // Crumble platforms
      const count = 2 + Math.floor(Math.random() * 2);
      for (let i = 0; i < count; i++) {
        cz += 2.5;
        cy += 0.2;
        cx += (Math.random() - 0.5) * 1.5;
        platforms.push({
          x: cx, y: cy, z: cz, w: 3, d: 3, h: 0.3,
          type: "crumble",
          crumbleTimer: 0, touched: false,
        });
      }
    }
  }

  // Goal platform
  cz += 4;
  cy += 0.3;
  const goal: Platform3D = {
    x: cx, y: cy - 0.5, z: cz + 3,
    w: 7, d: 7, h: 1,
    type: "ground",
  };
  addTrees(goal, 2);
  platforms.push(goal);

  return { platforms, goalIdx: platforms.length - 1 };
}

// ─── GAME DATA ──────────────────────────────────────
interface GameData {
  px: number; py: number; pz: number;
  vx: number; vy: number; vz: number;
  onGround: boolean;
  platforms: Platform3D[];
  goalIdx: number;
  dead: boolean;
  levelComplete: boolean;
  level: number;
  time: number;
  facingAngle: number;
  moveX: number;
  moveZ: number;
  jumpPressed: boolean;
  jumpUsed: boolean;
  camTheta: number;
  camPhi: number;
  walkCycle: number;
  isRunning: boolean;
}

function createGameData(): GameData {
  return {
    px: 0, py: 1, pz: 0,
    vx: 0, vy: 0, vz: 0,
    onGround: false,
    platforms: [],
    goalIdx: 0,
    dead: false,
    levelComplete: false,
    level: 1,
    time: 0,
    facingAngle: 0,
    moveX: 0,
    moveZ: 0,
    jumpPressed: false,
    jumpUsed: false,
    camTheta: 0,
    camPhi: 0.3,
    walkCycle: 0,
    isRunning: false,
  };
}

// ─── CHARACTER (BOX-MAN) ────────────────────────────
function Character({ gameRef }: { gameRef: React.RefObject<GameData> }) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyGroupRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  const bodyMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#ffffff", emissive: "#00D4FF", emissiveIntensity: 0.3,
  }), []);
  const headMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#ffffff", emissive: "#00D4FF", emissiveIntensity: 0.4,
  }), []);
  const limbMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#cccccc", emissive: "#0088AA", emissiveIntensity: 0.2,
  }), []);
  const eyeMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#0A0A1A" }), []);
  const shoeMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#222222", emissive: "#00D4FF", emissiveIntensity: 0.15,
  }), []);

  useFrame((_, delta) => {
    if (!groupRef.current || !gameRef.current) return;
    const g = gameRef.current;

    groupRef.current.position.set(g.px, g.py, g.pz);

    if (bodyGroupRef.current) {
      const targetRot = g.facingAngle;
      let diff = targetRot - bodyGroupRef.current.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      bodyGroupRef.current.rotation.y += diff * 0.15;
    }

    const isMoving = Math.abs(g.vx) > 0.01 || Math.abs(g.vz) > 0.01;
    const isAirborne = !g.onGround;

    if (isMoving && !isAirborne) {
      g.walkCycle += delta * (g.isRunning ? 14 : 10);
    } else if (!isMoving) {
      g.walkCycle *= 0.9;
    }

    const legSwing = isAirborne
      ? (g.vy > 0 ? 0.4 : -0.2)
      : (isMoving ? Math.sin(g.walkCycle) * 0.7 : 0);
    const armSwing = isAirborne
      ? (g.vy > 0 ? -0.8 : -0.3)
      : (isMoving ? Math.sin(g.walkCycle + Math.PI) * 0.5 : 0);

    let scaleY = 1, scaleXZ = 1;
    if (isAirborne) {
      if (g.vy > 0.15) { scaleY = 1.12; scaleXZ = 0.92; }
      else if (g.vy < -0.1) { scaleY = 0.92; scaleXZ = 1.08; }
    }

    if (groupRef.current) {
      groupRef.current.scale.set(scaleXZ, scaleY, scaleXZ);
    }

    if (leftLegRef.current) leftLegRef.current.rotation.x = legSwing;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -legSwing;
    if (leftArmRef.current) leftArmRef.current.rotation.x = armSwing;
    if (rightArmRef.current) rightArmRef.current.rotation.x = -armSwing;
  });

  return (
    <group ref={groupRef}>
      <group ref={bodyGroupRef}>
        <mesh position={[0, 0.82, 0]} material={headMat}>
          <boxGeometry args={[0.36, 0.36, 0.36]} />
        </mesh>
        <mesh position={[0.08, 0.85, 0.18]} material={eyeMat}>
          <boxGeometry args={[0.07, 0.07, 0.02]} />
        </mesh>
        <mesh position={[-0.08, 0.85, 0.18]} material={eyeMat}>
          <boxGeometry args={[0.07, 0.07, 0.02]} />
        </mesh>
        <mesh position={[0, 0.42, 0]} material={bodyMat}>
          <boxGeometry args={[0.38, 0.42, 0.24]} />
        </mesh>
        <group ref={leftArmRef} position={[0.28, 0.55, 0]}>
          <mesh position={[0, -0.17, 0]} material={limbMat}>
            <boxGeometry args={[0.12, 0.36, 0.12]} />
          </mesh>
        </group>
        <group ref={rightArmRef} position={[-0.28, 0.55, 0]}>
          <mesh position={[0, -0.17, 0]} material={limbMat}>
            <boxGeometry args={[0.12, 0.36, 0.12]} />
          </mesh>
        </group>
        <group ref={leftLegRef} position={[0.1, 0.2, 0]}>
          <mesh position={[0, -0.17, 0]} material={limbMat}>
            <boxGeometry args={[0.14, 0.28, 0.14]} />
          </mesh>
          <mesh position={[0, -0.33, 0.02]} material={shoeMat}>
            <boxGeometry args={[0.15, 0.08, 0.2]} />
          </mesh>
        </group>
        <group ref={rightLegRef} position={[-0.1, 0.2, 0]}>
          <mesh position={[0, -0.17, 0]} material={limbMat}>
            <boxGeometry args={[0.14, 0.28, 0.14]} />
          </mesh>
          <mesh position={[0, -0.33, 0.02]} material={shoeMat}>
            <boxGeometry args={[0.15, 0.08, 0.2]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

// ─── TREE DECORATION ────────────────────────────────
function TreeDeco({ px, py, pz, s }: { px: number; py: number; pz: number; s: number }) {
  return (
    <group position={[px, py, pz]}>
      <mesh position={[0, 0.4 * s, 0]}>
        <cylinderGeometry args={[0.05 * s, 0.09 * s, 0.8 * s, 5]} />
        <meshStandardMaterial color="#5c3a1e" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.85 * s, 0]}>
        <coneGeometry args={[0.35 * s, 0.6 * s, 5]} />
        <meshStandardMaterial color="#1a5c0a" roughness={0.85} />
      </mesh>
      <mesh position={[0, 1.2 * s, 0]}>
        <coneGeometry args={[0.25 * s, 0.45 * s, 5]} />
        <meshStandardMaterial color="#1f6b10" roughness={0.85} />
      </mesh>
    </group>
  );
}

// ─── ROCK DECORATION ────────────────────────────────
function RockDeco({ px, py, pz, s }: { px: number; py: number; pz: number; s: number }) {
  return (
    <mesh position={[px, py + s * 0.15, pz]}>
      <dodecahedronGeometry args={[s * 0.3, 0]} />
      <meshStandardMaterial color="#7a7a6a" roughness={0.95} />
    </mesh>
  );
}

// ─── PLATFORM MESH ──────────────────────────────────
function PlatformMesh({ plat, gameRef, isGoal }: { plat: Platform3D; gameRef: React.RefObject<GameData>; isGoal: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  const colors = useMemo(() => {
    if (isGoal) return { c: "#4a9d38", e: "#FFD700", i: 0.25 };
    switch (plat.type) {
      case "ground": return { c: "#3a7d28", e: "#1a3d10", i: 0.05 };
      case "rock": return { c: "#7a7a7a", e: "#333333", i: 0.03 };
      case "step": return { c: "#8a8278", e: "#444038", i: 0.03 };
      case "bridge": return { c: "#8B6914", e: "#443208", i: 0.05 };
      case "moving": return { c: "#00FF88", e: "#00FF88", i: 0.3 };
      case "crumble": return { c: "#FF4466", e: "#FF4466", i: 0.3 };
      default: return { c: "#3a7d28", e: "#1a3d10", i: 0.05 };
    }
  }, [plat.type, isGoal]);

  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    color: colors.c,
    emissive: colors.e,
    emissiveIntensity: colors.i,
    roughness: plat.type === "bridge" ? 0.7 : 0.85,
    transparent: plat.type === "crumble",
    opacity: 1,
  }), [colors, plat.type]);

  // Side material for ground platforms (brown earth)
  const sideMat = useMemo(() => {
    if (plat.type === "ground") {
      return new THREE.MeshStandardMaterial({
        color: "#5c3a1e",
        emissive: "#2a1808",
        emissiveIntensity: 0.03,
        roughness: 0.9,
      });
    }
    return null;
  }, [plat.type]);

  useFrame(() => {
    if (!meshRef.current || !gameRef.current) return;
    const g = gameRef.current;

    if (plat.type === "moving") {
      if (plat.moveAxis === "x" && plat.origX !== undefined) {
        plat.x = plat.origX + Math.sin(g.time * 0.03 * (plat.moveSpeed || 1)) * (plat.moveRange || 1);
      } else if (plat.moveAxis === "z" && plat.origZ !== undefined) {
        plat.z = plat.origZ + Math.sin(g.time * 0.03 * (plat.moveSpeed || 1)) * (plat.moveRange || 1);
      }
    }

    if (plat.type === "crumble" && plat.touched) {
      const t = plat.crumbleTimer || 0;
      mat.opacity = Math.max(0, 1 - t / 40);
      if (t > 40) { meshRef.current.visible = false; return; }
    }

    meshRef.current.position.set(plat.x, plat.y, plat.z);

    if (isGoal && glowRef.current) {
      glowRef.current.position.set(plat.x, plat.y + plat.h / 2 + 1, plat.z);
      glowRef.current.intensity = 3 + Math.sin(g.time * 0.04) * 1;
    }
  });

  const platTop = plat.y + plat.h / 2;

  return (
    <>
      {/* Main platform body */}
      {plat.type === "ground" && sideMat ? (
        // Ground: green top, brown sides
        <group ref={meshRef as unknown as React.RefObject<THREE.Group>}>
          {/* Top face (thin green layer) */}
          <mesh position={[plat.x, plat.y + plat.h / 2 - 0.05, plat.z]} material={mat} receiveShadow castShadow>
            <boxGeometry args={[plat.w, 0.1, plat.d]} />
          </mesh>
          {/* Earth body below */}
          <mesh position={[plat.x, plat.y - 0.05, plat.z]} material={sideMat} receiveShadow castShadow>
            <boxGeometry args={[plat.w, plat.h - 0.1, plat.d]} />
          </mesh>
        </group>
      ) : (
        <mesh ref={meshRef} position={[plat.x, plat.y, plat.z]} material={mat} receiveShadow castShadow>
          <boxGeometry args={[plat.w, plat.h, plat.d]} />
        </mesh>
      )}

      {/* Tree decorations */}
      {plat.trees?.map((t, i) => (
        <TreeDeco
          key={`t${i}`}
          px={plat.x + t.ox}
          py={platTop}
          pz={plat.z + t.oz}
          s={t.s}
        />
      ))}

      {/* Rock decorations */}
      {plat.rocks?.map((r, i) => (
        <RockDeco
          key={`r${i}`}
          px={plat.x + r.ox}
          py={platTop}
          pz={plat.z + r.oz}
          s={r.s}
        />
      ))}

      {/* Goal effects */}
      {isGoal && (
        <>
          <pointLight ref={glowRef} color="#FFD700" intensity={3} distance={10}
            position={[plat.x, platTop + 1, plat.z]} />
          <GoalTrophy pos={[plat.x, platTop + 1.5, plat.z]} gameRef={gameRef} />
        </>
      )}
    </>
  );
}

function GoalTrophy({ pos, gameRef }: { pos: number[]; gameRef: React.RefObject<GameData> }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (!ref.current || !gameRef.current) return;
    ref.current.rotation.y = gameRef.current.time * 0.02;
    ref.current.position.y = pos[1] + Math.sin(gameRef.current.time * 0.03) * 0.2;
  });
  return (
    <mesh ref={ref} position={[pos[0], pos[1], pos[2]]}>
      <boxGeometry args={[0.5, 0.7, 0.08]} />
      <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} />
    </mesh>
  );
}

// ─── CLOUDS ─────────────────────────────────────────
function Clouds() {
  const clouds = useMemo(() => {
    return Array.from({ length: 25 }, () => ({
      x: (Math.random() - 0.5) * 120,
      y: 12 + Math.random() * 25,
      z: (Math.random() - 0.5) * 120,
      sx: 2 + Math.random() * 4,
      sy: 0.5 + Math.random() * 1,
      sz: 1.5 + Math.random() * 3,
    }));
  }, []);

  return (
    <>
      {clouds.map((c, i) => (
        <mesh key={i} position={[c.x, c.y, c.z]}>
          <boxGeometry args={[c.sx, c.sy, c.sz]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.25} roughness={1} />
        </mesh>
      ))}
    </>
  );
}

// ─── DISTANT MOUNTAINS ──────────────────────────────
function DistantMountains() {
  const mountains = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const r = 55 + Math.random() * 25;
      arr.push({
        x: Math.cos(angle) * r,
        z: Math.sin(angle) * r,
        height: 12 + Math.random() * 22,
        width: 6 + Math.random() * 10,
      });
    }
    return arr;
  }, []);

  return (
    <>
      {mountains.map((m, i) => (
        <mesh key={i} position={[m.x, m.height / 2 - 8, m.z]}>
          <coneGeometry args={[m.width, m.height, 4]} />
          <meshStandardMaterial color="#4a6a88" roughness={0.95} />
        </mesh>
      ))}
    </>
  );
}

// ─── GAME LOOP ──────────────────────────────────────
function GameLoop({ gameRef, onDie, onGoal }: {
  gameRef: React.RefObject<GameData>;
  onDie: () => void;
  onGoal: () => void;
}) {
  const { camera } = useThree();
  const vec = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    if (!gameRef.current) return;
    const g = gameRef.current;
    if (g.dead || g.levelComplete) return;

    const dt = Math.min(delta * 60, 3);
    g.time += dt;

    // ─── MOVEMENT (relative to camera) ─────
    const camAngle = g.camTheta;
    const inputLen = Math.sqrt(g.moveX * g.moveX + g.moveZ * g.moveZ);
    const speed = inputLen > 0.7 ? RUN_SPEED : MOVE_SPEED;
    g.isRunning = inputLen > 0.7;

    if (inputLen > 0.05) {
      // Camera forward (from camera toward player)
      const fwdX = Math.sin(camAngle);
      const fwdZ = Math.cos(camAngle);
      // Camera right (Three.js right-hand: facing +Z, right is -X)
      const rightX = -Math.cos(camAngle);
      const rightZ = Math.sin(camAngle);

      const worldDirX = fwdX * g.moveZ + rightX * g.moveX;
      const worldDirZ = fwdZ * g.moveZ + rightZ * g.moveX;

      const targetVx = worldDirX * speed * Math.min(inputLen, 1) * dt;
      const targetVz = worldDirZ * speed * Math.min(inputLen, 1) * dt;
      g.vx += (targetVx - g.vx) * ACCEL;
      g.vz += (targetVz - g.vz) * ACCEL;

      g.facingAngle = Math.atan2(worldDirX, worldDirZ);
    } else {
      g.vx *= FRICTION;
      g.vz *= FRICTION;
    }

    // Jump
    if (g.jumpPressed && g.onGround && !g.jumpUsed) {
      g.vy = JUMP_FORCE;
      g.onGround = false;
      g.jumpUsed = true;
    }
    if (!g.jumpPressed) {
      g.jumpUsed = false;
    }

    // Gravity
    g.vy -= GRAVITY * dt;

    // Apply velocity
    g.px += g.vx;
    g.py += g.vy * dt;
    g.pz += g.vz;

    // ─── PLATFORM COLLISION (variable height) ─────
    g.onGround = false;
    for (const plat of g.platforms) {
      if (plat.type === "crumble" && plat.touched) {
        plat.crumbleTimer = (plat.crumbleTimer || 0) + dt;
        if ((plat.crumbleTimer || 0) > 40) continue;
      }

      if (g.vy > 0) continue;

      const halfW = plat.w / 2;
      const halfD = plat.d / 2;
      const platTop = plat.y + plat.h / 2;

      const withinX = g.px > plat.x - halfW + 0.1 && g.px < plat.x + halfW - 0.1;
      const withinZ = g.pz > plat.z - halfD + 0.1 && g.pz < plat.z + halfD - 0.1;
      const withinY = g.py >= platTop - 0.3 && g.py <= platTop + 0.15;

      if (withinX && withinZ && withinY) {
        g.py = platTop + 0.01;
        g.vy = 0;
        g.onGround = true;

        if (plat.type === "crumble") plat.touched = true;
      }
    }

    // ─── DEATH ────────
    if (g.py < -10) {
      g.dead = true;
      onDie();
      return;
    }

    // ─── GOAL CHECK ──────────────────
    const goal = g.platforms[g.goalIdx];
    if (goal) {
      const dx = g.px - goal.x;
      const dz = g.pz - goal.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < 2.5 && g.py > goal.y - 0.5 && g.py < goal.y + 3) {
        g.levelComplete = true;
        onGoal();
        return;
      }
    }

    // ─── CAMERA ──────────────────────
    const camX = g.px - Math.sin(g.camTheta) * CAM_DISTANCE;
    const camZ = g.pz - Math.cos(g.camTheta) * CAM_DISTANCE;
    const camY = g.py + CAM_HEIGHT + Math.sin(g.camPhi) * 2;

    vec.set(camX, camY, camZ);
    camera.position.lerp(vec, 0.06 * dt);
    camera.lookAt(g.px, g.py + 0.8, g.pz);
  });

  return null;
}

// ─── SCENE ──────────────────────────────────────────
function Scene3D({ gameRef, onDie, onGoal }: {
  gameRef: React.RefObject<GameData>;
  onDie: () => void;
  onGoal: () => void;
}) {
  const g = gameRef.current;
  if (!g) return null;

  return (
    <>
      <ambientLight intensity={0.45} color="#c8d8e8" />
      <directionalLight position={[15, 25, 10]} intensity={1.1} color="#fff5e0" castShadow />
      <hemisphereLight args={["#87CEEB", "#3a5c28", 0.35]} />

      <fog attach="fog" args={["#b8d0e0", 35, 110]} />

      <Clouds />
      <DistantMountains />

      {g.platforms.map((plat, i) => (
        <PlatformMesh key={i} plat={plat} gameRef={gameRef} isGoal={i === g.goalIdx} />
      ))}

      <Character gameRef={gameRef} />

      <GameLoop gameRef={gameRef} onDie={onDie} onGoal={onGoal} />
    </>
  );
}

// ─── VIRTUAL JOYSTICK ───────────────────────────────
function VirtualJoystick({ gameRef }: { gameRef: React.RefObject<GameData> }) {
  const stickRef = useRef<HTMLDivElement>(null);
  const knobRef = useRef<HTMLDivElement>(null);
  const touchIdRef = useRef<number | null>(null);
  const originRef = useRef({ x: 0, y: 0 });

  const handleStart = useCallback((e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    if (!touch || !stickRef.current) return;
    touchIdRef.current = touch.identifier;
    const rect = stickRef.current.getBoundingClientRect();
    originRef.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }, []);

  const handleMove = useCallback((e: React.TouchEvent) => {
    if (touchIdRef.current === null || !gameRef.current) return;
    for (let i = 0; i < e.touches.length; i++) {
      const t = e.touches[i];
      if (t.identifier === touchIdRef.current) {
        const rawDx = t.clientX - originRef.current.x;
        const rawDy = t.clientY - originRef.current.y;
        const maxDist = 40;
        const rawLen = Math.sqrt(rawDx * rawDx + rawDy * rawDy);
        const dist = Math.min(rawLen, maxDist);
        const norm = dist / maxDist;

        if (rawLen > 2) {
          gameRef.current.moveX = (rawDx / rawLen) * norm;
          gameRef.current.moveZ = (-rawDy / rawLen) * norm;
        } else {
          gameRef.current.moveX = 0;
          gameRef.current.moveZ = 0;
        }

        if (knobRef.current && rawLen > 0) {
          const clamp = Math.min(rawLen, maxDist);
          knobRef.current.style.transform = `translate(${(rawDx / rawLen) * clamp}px, ${(rawDy / rawLen) * clamp}px)`;
        }
        break;
      }
    }
  }, [gameRef]);

  const handleEnd = useCallback(() => {
    touchIdRef.current = null;
    if (gameRef.current) {
      gameRef.current.moveX = 0;
      gameRef.current.moveZ = 0;
    }
    if (knobRef.current) {
      knobRef.current.style.transform = "translate(0px, 0px)";
    }
  }, [gameRef]);

  return (
    <div
      ref={stickRef}
      className="absolute bottom-8 left-8 w-28 h-28 rounded-full bg-black/20 border border-white/15 flex items-center justify-center backdrop-blur-sm"
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onTouchCancel={handleEnd}
    >
      <div ref={knobRef} className="w-12 h-12 rounded-full bg-white/20 border border-white/30" />
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────
export default function SkyClimbPage() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [level, setLevel] = useState(1);
  const [highestLevel, setHighestLevel] = useState(1);
  const [rewardRarity, setRewardRarity] = useState<CardRarity>("bronze");
  const gameRef = useRef<GameData>(createGameData());

  useEffect(() => {
    const saved = localStorage.getItem("plizio_skyclimb_highest");
    if (saved) setHighestLevel(parseInt(saved));
  }, []);

  // Keyboard + mouse controls
  useEffect(() => {
    if (gameState !== "playing") return;
    const g = gameRef.current;
    const keys = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.add(e.key.toLowerCase());
      if (e.key === " ") { e.preventDefault(); g.jumpPressed = true; }
      updateMovement();
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.delete(e.key.toLowerCase());
      if (e.key === " ") g.jumpPressed = false;
      updateMovement();
    };

    function updateMovement() {
      let mx = 0, mz = 0;
      if (keys.has("w") || keys.has("arrowup")) mz = 1;
      if (keys.has("s") || keys.has("arrowdown")) mz = -1;
      if (keys.has("a") || keys.has("arrowleft")) mx = -1;
      if (keys.has("d") || keys.has("arrowright")) mx = 1;
      g.moveX = mx;
      g.moveZ = mz;
    }

    let isMouseDown = false;
    let lastMouseX = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      lastMouseX = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const dx = e.clientX - lastMouseX;
      lastMouseX = e.clientX;
      g.camTheta += dx * 0.005;
    };

    const handleMouseUp = () => { isMouseDown = false; };

    let camTouchId: number | null = null;
    let camLastX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const rightSide = t.clientX > window.innerWidth * 0.5;
        const notJumpBtn = t.clientY < window.innerHeight - 200;
        if (rightSide && notJumpBtn && camTouchId === null) {
          camTouchId = t.identifier;
          camLastX = t.clientX;
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      for (let i = 0; i < e.touches.length; i++) {
        const t = e.touches[i];
        if (t.identifier === camTouchId) {
          const dx = t.clientX - camLastX;
          camLastX = t.clientX;
          g.camTheta += dx * 0.008;
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === camTouchId) {
          camTouchId = null;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      g.moveX = 0;
      g.moveZ = 0;
      g.jumpPressed = false;
    };
  }, [gameState]);

  const startGame = useCallback((lvl: number) => {
    const { platforms, goalIdx } = generateLevel(lvl);
    const g = gameRef.current;
    Object.assign(g, createGameData());
    g.platforms = platforms;
    g.goalIdx = goalIdx;
    g.level = lvl;
    g.py = 1;
    setLevel(lvl);
    setGameState("playing");
  }, []);

  const handleDie = useCallback(() => setGameState("dead"), []);

  const handleGoal = useCallback(() => {
    const g = gameRef.current;
    const rarity = getLevelRarity(g.level);
    setRewardRarity(rarity);
    saveCard({
      id: generateCardId(),
      game: "skyclimb",
      theme: `level-${g.level}`,
      rarity,
      score: g.level,
      total: g.level,
      date: new Date().toISOString(),
    });
    const newHighest = Math.max(g.level, parseInt(localStorage.getItem("plizio_skyclimb_highest") || "1"));
    localStorage.setItem("plizio_skyclimb_highest", newHighest.toString());
    setHighestLevel(newHighest);
    setGameState("reward");
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-bg relative overflow-hidden">
      {/* Menu */}
      {gameState === "menu" && (
        <motion.div className="flex flex-col items-center gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Mountain size={48} className="text-neon-green" style={{ filter: "drop-shadow(0 0 15px rgba(0,255,136,0.5))" }} />
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs">
            {Array.from({ length: Math.min(highestLevel + 1, 20) }, (_, i) => i + 1).map((lvl) => {
              const unlocked = lvl <= highestLevel;
              const isNext = lvl === highestLevel + 1 && highestLevel < 20;
              return (
                <motion.button
                  key={lvl}
                  onClick={() => (unlocked || isNext) ? startGame(lvl) : null}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold border-2 ${
                    unlocked ? "bg-card border-neon-green/30 text-neon-green"
                    : isNext ? "bg-card border-gold/30 text-gold"
                    : "bg-card/50 border-white/5 text-white/10"
                  }`}
                  style={unlocked ? { boxShadow: "0 0 10px rgba(0,255,136,0.15)" }
                    : isNext ? { boxShadow: "0 0 10px rgba(255,215,0,0.15)" } : undefined}
                  whileHover={(unlocked || isNext) ? { scale: 1.1 } : {}}
                  whileTap={(unlocked || isNext) ? { scale: 0.95 } : {}}
                  disabled={!unlocked && !isNext}
                >
                  {lvl}
                </motion.button>
              );
            })}
          </div>
          {highestLevel > 1 && (
            <motion.div className="flex items-center gap-2 text-neon-green/50 text-sm font-bold"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <Trophy size={14} /> LVL {highestLevel}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* 3D Game */}
      {gameState === "playing" && (
        <div className="fixed inset-0 touch-none">
          <Canvas camera={{ fov: 60 }} gl={{ antialias: true }}
            style={{ background: "linear-gradient(180deg, #4a8fca 0%, #87CEEB 40%, #b8d0e0 100%)" }}>
            <Scene3D gameRef={gameRef} onDie={handleDie} onGoal={handleGoal} />
          </Canvas>

          {/* HUD */}
          <div className="fixed top-4 left-0 right-0 z-10 flex justify-center pointer-events-none">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-3">
              <Mountain size={14} className="text-neon-green" />
              <span className="text-white/80 font-mono text-sm font-bold">LVL {level}</span>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="fixed inset-0 z-10 pointer-events-none sm:hidden">
            <div className="pointer-events-auto">
              <VirtualJoystick gameRef={gameRef} />
            </div>
            <button
              className="pointer-events-auto absolute bottom-8 right-8 w-20 h-20 rounded-full bg-white/15 border-2 border-white/25 flex items-center justify-center active:bg-white/30 active:scale-95 transition-transform backdrop-blur-sm"
              onTouchStart={(e) => { e.preventDefault(); if (gameRef.current) gameRef.current.jumpPressed = true; }}
              onTouchEnd={(e) => { e.preventDefault(); if (gameRef.current) gameRef.current.jumpPressed = false; }}
            >
              <ArrowUp size={28} className="text-white" />
            </button>
          </div>

          {/* PC controls hint */}
          <div className="fixed bottom-4 left-0 right-0 z-10 hidden sm:flex justify-center pointer-events-none">
            <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-4 text-white/40 text-xs font-mono">
              <span>WASD</span>
              <span>SPACE ↑</span>
              <span>MOUSE ↻</span>
            </div>
          </div>
        </div>
      )}

      {/* Death */}
      <AnimatePresence>
        {gameState === "dead" && (
          <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm px-4 gap-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div initial={{ scale: 2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }}>
              <Mountain size={56} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 15px rgba(255,45,120,0.5))" }} />
            </motion.div>
            <motion.div className="text-white/30 text-sm font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              LVL {level}
            </motion.div>
            <motion.div className="flex gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <motion.button onClick={() => startGame(level)}
                className="bg-neon-green/10 border border-neon-green/30 text-neon-green px-6 py-3 rounded-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <RotateCcw size={18} />
              </motion.button>
              <motion.button onClick={() => setGameState("menu")}
                className="bg-neon-purple/10 border border-neon-purple/30 text-neon-purple px-6 py-3 rounded-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Home size={18} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reward */}
      {gameState === "reward" && (
        <RewardReveal rarity={rewardRarity} game="skyclimb" score={level} total={level}
          onDone={() => setGameState("level-complete")} />
      )}

      {/* Level complete */}
      <AnimatePresence>
        {gameState === "level-complete" && (
          <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm px-4 gap-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
              <ArrowUp size={56} className="text-neon-green" style={{ filter: "drop-shadow(0 0 15px rgba(0,255,136,0.5))" }} />
            </motion.div>
            <motion.div className="text-neon-green text-2xl font-black" style={{ textShadow: "0 0 15px rgba(0,255,136,0.4)" }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              LVL {level}
            </motion.div>
            <motion.div className="flex gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              {level < 20 && (
                <motion.button onClick={() => startGame(level + 1)}
                  className="bg-neon-green/10 border border-neon-green/30 text-neon-green px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-sm"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ArrowUp size={18} /> {level + 1}
                </motion.button>
              )}
              <motion.button onClick={() => setGameState("menu")}
                className="bg-neon-purple/10 border border-neon-purple/30 text-neon-purple px-6 py-3 rounded-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Home size={18} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function getLevelRarity(level: number): CardRarity {
  if (level >= 15) return "legendary";
  if (level >= 8) return "gold";
  if (level >= 4) return "silver";
  return "bronze";
}
