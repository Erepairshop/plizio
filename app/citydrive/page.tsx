"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Car } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RewardReveal from "@/components/RewardReveal";
import ResultCard from "@/components/ResultCard";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import { getSkinDef, getActiveSkin } from "@/lib/skins";

// ═══════════════════════════════════════════════
//  TYPES
// ═══════════════════════════════════════════════
type GameState = "menu" | "countdown" | "playing" | "result" | "reward";

interface CarData {
  x: number; z: number; angle: number; speed: number;
  maxSpeed: number; accel: number; handling: number;
  color: string; name: string;
}
interface MissionData {
  id: number; type: "delivery" | "parking" | "coins";
  px: number; pz: number; dx: number; dz: number;
  pickedUp: boolean; completed: boolean;
  points: number; label: string;
  coins?: { x: number; z: number }[]; coinsLeft?: number;
}
interface BuildingDef { x: number; z: number; w: number; d: number; h: number; glow: string; style: number }
interface TreeDef { x: number; z: number; s: number }
interface HudData {
  score: number; missions: number; inCar: number; speed: number;
  carColor: string; msg: string; msgT: number;
  px: number; pz: number; angle: number;
}

// ═══════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════
const T = 4;
const BLOCK = 7;
const COLS = 70;
const ROWS = 70;
const WW = COLS * T;
const WD = ROWS * T;
const BLOCKS_X = Math.floor(COLS / BLOCK);
const BLOCKS_Z = Math.floor(ROWS / BLOCK);
const WALK_SPD = 8;
const ENTER_DIST = 6;
const FRIC = 0.97;
const TOTAL_M = 15;

const GLOWS = ["#FF2D78", "#00D4FF", "#B44DFF", "#00FF88", "#FFD700", "#FF6B00", "#FF4488", "#44FFCC"];

// ═══════════════════════════════════════════════
//  PARK BLOCKS (deterministic ~20%)
// ═══════════════════════════════════════════════
const PARK_SET = new Set<string>();
for (let bz = 0; bz < BLOCKS_Z; bz++)
  for (let bx = 0; bx < BLOCKS_X; bx++) {
    const hash = (bx * 7 + bz * 13 + bx * bz * 3) % 10;
    if (hash < 2 && bx > 0 && bz > 0 && bx < BLOCKS_X - 1 && bz < BLOCKS_Z - 1) PARK_SET.add(`${bx}-${bz}`);
  }

// ═══════════════════════════════════════════════
//  WORLD GENERATION
// ═══════════════════════════════════════════════
function isRoadTile(col: number, row: number) {
  return col % BLOCK < 2 || row % BLOCK < 2;
}
function isParkBlock(col: number, row: number) {
  const bx = Math.floor(col / BLOCK), bz = Math.floor(row / BLOCK);
  return PARK_SET.has(`${bx}-${bz}`);
}
function isSolid(x: number, z: number): boolean {
  const c = Math.floor(x / T), r = Math.floor(z / T);
  if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return true;
  if (isRoadTile(c, r)) return false;
  if (c % BLOCK === 2 || c % BLOCK === 6 || r % BLOCK === 2 || r % BLOCK === 6) return false;
  if (isParkBlock(c, r)) return false;
  return true;
}
function solidBox(x: number, z: number, hw: number, hd: number) {
  return isSolid(x - hw, z - hd) || isSolid(x + hw, z - hd) || isSolid(x - hw, z + hd) || isSolid(x + hw, z + hd);
}

function genBuildings(): BuildingDef[] {
  const bs: BuildingDef[] = [];
  for (let bz = 0; bz < BLOCKS_Z; bz++)
    for (let bx = 0; bx < BLOCKS_X; bx++) {
      if (PARK_SET.has(`${bx}-${bz}`)) continue;
      const h = 6 + ((bx * 7 + bz * 13) % 22);
      const style = (bx + bz * 3) % 4;
      bs.push({
        x: (bx * BLOCK + 4.5) * T,
        z: (bz * BLOCK + 4.5) * T,
        w: 2.6 * T, d: 2.6 * T, h,
        glow: GLOWS[(bx * 3 + bz * 5) % GLOWS.length],
        style,
      });
    }
  return bs;
}

function genTrees(): TreeDef[] {
  const trees: TreeDef[] = [];
  PARK_SET.forEach(key => {
    const [bx, bz] = key.split("-").map(Number);
    const cx = (bx * BLOCK + 4.5) * T, cz = (bz * BLOCK + 4.5) * T;
    const count = 4 + ((bx * 3 + bz * 7) % 4);
    for (let i = 0; i < count; i++) {
      const seed = bx * 100 + bz * 10 + i;
      const ax = Math.sin(seed * 1.7) * 4.5;
      const az = Math.cos(seed * 2.3) * 4.5;
      trees.push({ x: cx + ax, z: cz + az, s: 0.7 + (seed % 5) * 0.15 });
    }
  });
  // Sidewalk trees
  for (let bz = 0; bz < BLOCKS_Z; bz++)
    for (let bx = 0; bx < BLOCKS_X; bx++) {
      if ((bx + bz) % 3 !== 0) continue;
      const tx = (bx * BLOCK + 2.5) * T;
      const tz = (bz * BLOCK + 2.5) * T;
      trees.push({ x: tx, z: tz, s: 0.6 });
    }
  return trees;
}

function initCars(): CarData[] {
  return [
    { x: 1 * T, z: 5 * T, angle: 0, speed: 0, maxSpeed: 40, accel: 25, handling: 3.0, color: "#FF2D55", name: "Sport" },
    { x: 15 * T, z: 8 * T, angle: Math.PI / 2, speed: 0, maxSpeed: 30, accel: 20, handling: 3.2, color: "#00D4FF", name: "Sedan" },
    { x: 22 * T, z: 1 * T, angle: 0, speed: 0, maxSpeed: 22, accel: 16, handling: 3.8, color: "#00FF88", name: "Truck" },
    { x: 35 * T, z: 30 * T, angle: Math.PI, speed: 0, maxSpeed: 35, accel: 22, handling: 3.2, color: "#FFD700", name: "Taxi" },
    { x: 50 * T, z: 50 * T, angle: -Math.PI / 2, speed: 0, maxSpeed: 50, accel: 32, handling: 2.8, color: "#B44DFF", name: "Racer" },
    { x: 8 * T, z: 45 * T, angle: 0, speed: 0, maxSpeed: 45, accel: 28, handling: 2.9, color: "#FF6B00", name: "Muscle" },
    { x: 60 * T, z: 15 * T, angle: Math.PI, speed: 0, maxSpeed: 38, accel: 24, handling: 3.5, color: "#44FFCC", name: "Electric" },
  ];
}

function roadPos3D() {
  let r: number, c: number;
  do { r = Math.floor(Math.random() * ROWS); c = Math.floor(Math.random() * COLS); } while (!isRoadTile(c, r));
  return { x: c * T + T / 2, z: r * T + T / 2 };
}

function genMission(id: number): MissionData {
  const types: MissionData["type"][] = ["delivery", "parking", "coins"];
  const type = types[id % 3];
  const p = roadPos3D(), d = roadPos3D();
  if (type === "coins") {
    const coins = Array.from({ length: 5 }, () => roadPos3D());
    return { id, type, px: coins[0].x, pz: coins[0].z, dx: 0, dz: 0, pickedUp: false, completed: false, points: 50, label: "Collect 5 coins", coins, coinsLeft: 5 };
  }
  if (type === "parking") return { id, type, px: p.x, pz: p.z, dx: 0, dz: 0, pickedUp: false, completed: false, points: 80, label: "Park at marker" };
  return { id, type, px: p.x, pz: p.z, dx: d.x, dz: d.z, pickedUp: false, completed: false, points: 100, label: "Deliver package" };
}

// ═══════════════════════════════════════════════
//  ANIMATED 3D COMPONENTS
// ═══════════════════════════════════════════════
function AnimatedCoin({ x, z }: { x: number; z: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 3;
    ref.current.position.y = 1.5 + Math.sin(t * 2.5 + x) * 0.3;
  });
  return (
    <group ref={ref} position={[x, 1.5, z]}>
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 0.12, 12]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1.5} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 8]} />
        <meshStandardMaterial color="#FFA500" emissive="#FFA500" emissiveIntensity={0.8} />
      </mesh>
      {/* Glow ring */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.5, 0]}>
        <ringGeometry args={[0.0, 0.7, 16]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.4} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function AnimatedDelivery({ x, z, pickedUp }: { x: number; z: number; pickedUp: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = 2.5 + Math.sin(t * 2) * 0.5;
    ref.current.rotation.y = t * 0.8;
  });
  const col = pickedUp ? "#00FF88" : "#FFD700";
  return (
    <group ref={ref} position={[x, 2.5, z]}>
      {/* Package */}
      <mesh>
        <boxGeometry args={[1.0, 1.0, 1.0]} />
        <meshStandardMaterial color={col} emissive={col} emissiveIntensity={1.5} />
      </mesh>
      {/* Ribbon */}
      <mesh>
        <boxGeometry args={[1.05, 0.12, 0.12]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.8} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.12, 0.12, 1.05]} />
        <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.8} />
      </mesh>
      {/* Light beam below */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.02, 0.5, 3.5, 6]} />
        <meshStandardMaterial color={col} emissive={col} emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

function AnimatedParking({ x, z }: { x: number; z: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const pulse = 1.0 + Math.sin(t * 3) * 0.15;
    ref.current.scale.set(pulse, 1, pulse);
    ref.current.rotation.y = t * 0.3;
  });
  return (
    <group ref={ref} position={[x, 0.1, z]}>
      <mesh rotation-x={-Math.PI / 2}>
        <ringGeometry args={[2, 2.5, 16]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={1.5} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation-x={-Math.PI / 2}>
        <ringGeometry args={[1.0, 1.3, 16]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.8} side={THREE.DoubleSide} />
      </mesh>
      {/* P letter pillar */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={2} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 2, 4]} />
        <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

// ═══════════════════════════════════════════════
//  ANIMATED PLAYER CHARACTER (matches skyclimb)
// ═══════════════════════════════════════════════
interface PlayerCharProps {
  plRef: React.RefObject<{ x: number; z: number; angle: number; inCar: number }>;
  prevPos: React.RefObject<{ x: number; z: number }>;
}
function PlayerCharacter({ plRef, prevPos }: PlayerCharProps) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyGroupRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const walkCycleRef = useRef(0);

  const skin = useMemo(() => getSkinDef(getActiveSkin()), []);
  const bodyMat = useMemo(() => new THREE.MeshStandardMaterial({ color: skin.bodyColor, emissive: skin.emissive, emissiveIntensity: skin.emissiveIntensity }), [skin]);
  const headMat = useMemo(() => new THREE.MeshStandardMaterial({ color: skin.headColor, emissive: skin.emissive, emissiveIntensity: skin.emissiveIntensity + 0.1 }), [skin]);
  const limbMat = useMemo(() => new THREE.MeshStandardMaterial({ color: skin.limbColor, emissive: skin.emissive, emissiveIntensity: skin.emissiveIntensity * 0.6 }), [skin]);
  const eyeMat = useMemo(() => new THREE.MeshStandardMaterial({ color: skin.id === "robot" ? "#00FF00" : "#0A0A1A", emissive: skin.id === "robot" ? "#00FF00" : "#000000", emissiveIntensity: skin.id === "robot" ? 0.8 : 0 }), [skin]);
  const shoeMat = useMemo(() => new THREE.MeshStandardMaterial({ color: skin.shoeColor, emissive: skin.emissive, emissiveIntensity: 0.15 }), [skin]);

  useFrame((_, delta) => {
    const p = plRef.current;
    if (!groupRef.current || !p) return;
    groupRef.current.visible = p.inCar < 0;
    groupRef.current.position.set(p.x, 0, p.z);

    if (bodyGroupRef.current) {
      let diff = p.angle - bodyGroupRef.current.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      bodyGroupRef.current.rotation.y += diff * 0.15;
    }

    const dx = p.x - prevPos.current.x, dz = p.z - prevPos.current.z;
    const isMoving = Math.abs(dx) > 0.01 || Math.abs(dz) > 0.01;
    prevPos.current.x = p.x; prevPos.current.z = p.z;

    if (isMoving) walkCycleRef.current += delta * 12;
    else walkCycleRef.current *= 0.9;

    const legSwing = isMoving ? Math.sin(walkCycleRef.current) * 0.7 : 0;
    const armSwing = isMoving ? Math.sin(walkCycleRef.current + Math.PI) * 0.5 : 0;

    if (leftLegRef.current) leftLegRef.current.rotation.x = legSwing;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -legSwing;
    if (leftArmRef.current) leftArmRef.current.rotation.x = armSwing;
    if (rightArmRef.current) rightArmRef.current.rotation.x = -armSwing;
  });

  return (
    <group ref={groupRef}>
      <group ref={bodyGroupRef}>
        {/* Head */}
        <mesh position={[0, 0.82, 0]} material={headMat}>
          <boxGeometry args={[0.36, 0.36, 0.36]} />
        </mesh>
        {/* Eyes */}
        <mesh position={[0.08, 0.85, 0.18]} material={eyeMat}>
          <boxGeometry args={[0.07, 0.07, 0.02]} />
        </mesh>
        <mesh position={[-0.08, 0.85, 0.18]} material={eyeMat}>
          <boxGeometry args={[0.07, 0.07, 0.02]} />
        </mesh>
        {/* Body */}
        <mesh position={[0, 0.42, 0]} material={bodyMat}>
          <boxGeometry args={[0.38, 0.42, 0.24]} />
        </mesh>
        {/* Left arm */}
        <group ref={leftArmRef} position={[0.28, 0.55, 0]}>
          <mesh position={[0, -0.17, 0]} material={limbMat}>
            <boxGeometry args={[0.12, 0.36, 0.12]} />
          </mesh>
        </group>
        {/* Right arm */}
        <group ref={rightArmRef} position={[-0.28, 0.55, 0]}>
          <mesh position={[0, -0.17, 0]} material={limbMat}>
            <boxGeometry args={[0.12, 0.36, 0.12]} />
          </mesh>
        </group>
        {/* Left leg */}
        <group ref={leftLegRef} position={[0.1, 0.2, 0]}>
          <mesh position={[0, -0.17, 0]} material={limbMat}>
            <boxGeometry args={[0.14, 0.28, 0.14]} />
          </mesh>
          <mesh position={[0, -0.33, 0.02]} material={shoeMat}>
            <boxGeometry args={[0.15, 0.08, 0.2]} />
          </mesh>
        </group>
        {/* Right leg */}
        <group ref={rightLegRef} position={[-0.1, 0.2, 0]}>
          <mesh position={[0, -0.17, 0]} material={limbMat}>
            <boxGeometry args={[0.14, 0.28, 0.14]} />
          </mesh>
          <mesh position={[0, -0.33, 0.02]} material={shoeMat}>
            <boxGeometry args={[0.15, 0.08, 0.2]} />
          </mesh>
        </group>
        {/* Skin glow */}
        {skin.particle && (
          <pointLight position={[0, 0.5, 0]} color={skin.particle} intensity={skin.emissiveIntensity * 2} distance={3} />
        )}
      </group>
    </group>
  );
}

// ═══════════════════════════════════════════════
//  MINIMAP COMPONENT
// ═══════════════════════════════════════════════
function MiniMap({ hudRef, missionsRef }: { hudRef: React.RefObject<HudData>; missionsRef: React.RefObject<MissionData[]> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const S = 140;
      const sc = S / Math.max(WW, WD);

      // Background
      ctx.fillStyle = "#0d1020";
      ctx.fillRect(0, 0, S, S);

      // Roads
      ctx.fillStyle = "#2a2a40";
      for (let i = 0; i < BLOCKS_X; i++) {
        const p = (i * BLOCK + 0.5) * T * sc;
        ctx.fillRect(p, 0, T * 2 * sc, S);
        ctx.fillRect(0, p, S, T * 2 * sc);
      }

      // Buildings & Parks
      for (let bz = 0; bz < BLOCKS_Z; bz++)
        for (let bx = 0; bx < BLOCKS_X; bx++) {
          const cx = (bx * BLOCK + 4.5) * T * sc;
          const cz = (bz * BLOCK + 4.5) * T * sc;
          const w = 2.6 * T * sc;
          if (PARK_SET.has(`${bx}-${bz}`)) {
            ctx.fillStyle = "#1a3a22";
            ctx.fillRect(cx - w / 2, cz - w / 2, w, w);
          } else {
            ctx.fillStyle = "#252540";
            ctx.fillRect(cx - w / 2, cz - w / 2, w, w);
          }
        }

      // Missions
      const ms = missionsRef.current;
      if (ms) {
        for (const m of ms) {
          if (m.completed) continue;
          if (m.type === "delivery") {
            const tx = (m.pickedUp ? m.dx : m.px) * sc;
            const tz = (m.pickedUp ? m.dz : m.pz) * sc;
            ctx.fillStyle = m.pickedUp ? "#00FF88" : "#FFD700";
            ctx.shadowColor = ctx.fillStyle;
            ctx.shadowBlur = 6;
            ctx.beginPath(); ctx.arc(tx, tz, 3.5, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 0;
          } else if (m.type === "parking") {
            ctx.fillStyle = "#00D4FF";
            ctx.shadowColor = "#00D4FF";
            ctx.shadowBlur = 6;
            ctx.beginPath(); ctx.arc(m.px * sc, m.pz * sc, 3.5, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 0;
          } else if (m.type === "coins" && m.coins) {
            ctx.fillStyle = "#FFD700";
            ctx.shadowColor = "#FFD700";
            ctx.shadowBlur = 4;
            for (const c of m.coins) {
              ctx.beginPath(); ctx.arc(c.x * sc, c.z * sc, 2, 0, Math.PI * 2); ctx.fill();
            }
            ctx.shadowBlur = 0;
          }
        }
      }

      // Player
      const hud = hudRef.current;
      const px = hud.px * sc, pz = hud.pz * sc;
      const a = hud.angle;

      // Direction triangle
      ctx.fillStyle = hud.inCar >= 0 ? hud.carColor : "#FFFFFF";
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(px + Math.sin(a) * 6, pz + Math.cos(a) * 6);
      ctx.lineTo(px + Math.sin(a + 2.5) * 3.5, pz + Math.cos(a + 2.5) * 3.5);
      ctx.lineTo(px + Math.sin(a - 2.5) * 3.5, pz + Math.cos(a - 2.5) * 3.5);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const interval = setInterval(draw, 150);
    return () => clearInterval(interval);
  }, [hudRef, missionsRef]);

  return (
    <canvas ref={canvasRef} width={140} height={140}
      className="absolute top-3 right-3 z-10 rounded-xl border border-white/20 backdrop-blur-sm"
      style={{ width: 140, height: 140, background: "rgba(0,0,0,0.5)" }} />
  );
}

// ═══════════════════════════════════════════════
//  3D GAME SCENE
// ═══════════════════════════════════════════════
interface SaveData {
  player: { x: number; z: number; angle: number; inCar: number };
  score: number; missions: number; missionId: number;
  cars: { x: number; z: number; angle: number; speed: number }[];
  missionData: MissionData[];
}
const SAVE_KEY = "citydrive_save";
function saveToStorage(data: SaveData) { try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); } catch {} }
function loadFromStorage(): SaveData | null { try { const s = localStorage.getItem(SAVE_KEY); return s ? JSON.parse(s) : null; } catch { return null; } }
function clearSave() { try { localStorage.removeItem(SAVE_KEY); } catch {} }

interface SceneProps {
  running: boolean;
  resuming: boolean;
  keysRef: React.RefObject<Set<string>>;
  touchRef: React.RefObject<{ active: boolean; sx: number; sy: number; cx: number; cy: number }>;
  actionRef: React.RefObject<boolean>;
  hudRef: React.RefObject<HudData>;
  missionsRef: React.RefObject<MissionData[]>;
  gameDataRef: React.RefObject<SaveData | null>;
  onEnd: () => void;
}

const GameScene = React.memo(function GameScene({ running, resuming, keysRef, touchRef, actionRef, hudRef, missionsRef, gameDataRef, onEnd }: SceneProps) {
  const { camera } = useThree();
  const buildings = useMemo(genBuildings, []);
  const trees = useMemo(genTrees, []);

  const carsRef = useRef(initCars());
  const plRef = useRef({ x: 1 * T, z: 1 * T, angle: 0, inCar: -1 });
  const midRef = useRef(0);
  const carMeshes = useRef<(THREE.Group | null)[]>([]);
  const prevPosRef = useRef({ x: 1 * T, z: 1 * T });
  const camTarget = useRef(new THREE.Vector3(1 * T, 6, 1 * T - 10));
  const camLook = useRef(new THREE.Vector3(1 * T, 1, 1 * T));
  const camAngle = useRef(0);
  const camLookSmooth = useRef(new THREE.Vector3(1 * T, 1, 1 * T));
  const saveTickRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    const saved = resuming ? loadFromStorage() : null;
    if (saved) {
      plRef.current = { ...saved.player };
      hudRef.current.score = saved.score;
      hudRef.current.missions = saved.missions;
      midRef.current = saved.missionId;
      const cars = initCars();
      saved.cars.forEach((sc, i) => { if (cars[i]) { cars[i].x = sc.x; cars[i].z = sc.z; cars[i].angle = sc.angle; cars[i].speed = sc.speed; } });
      carsRef.current = cars;
      missionsRef.current = saved.missionData;
    } else {
      carsRef.current = initCars();
      plRef.current = { x: 1 * T, z: 1 * T, angle: 0, inCar: -1 };
      hudRef.current.score = 0;
      hudRef.current.missions = 0;
      midRef.current = 0;
      const ms: MissionData[] = [];
      for (let i = 0; i < 4; i++) ms.push(genMission(midRef.current++));
      missionsRef.current = ms;
    }
  }, [running]);

  useFrame((_, rawDt) => {
    if (!running) return;
    const dt = Math.min(rawDt, 0.05);
    const p = plRef.current;
    const hud = hudRef.current;
    const keys = keysRef.current;
    const touch = touchRef.current;

    // ── Input ──
    let mx = 0, mz = 0, brake = false, act = false;
    if (keys.has("ArrowUp") || keys.has("w") || keys.has("W")) mz = 1;
    if (keys.has("ArrowDown") || keys.has("s") || keys.has("S")) mz = -1;
    if (keys.has("ArrowLeft") || keys.has("a") || keys.has("A")) mx = -1;
    if (keys.has("ArrowRight") || keys.has("d") || keys.has("D")) mx = 1;
    if (keys.has("Shift")) brake = true;
    if (keys.has(" ")) { act = true; keys.delete(" "); }
    if (actionRef.current) { act = true; actionRef.current = false; }
    if (touch.active) {
      const dx = touch.cx - touch.sx, dy = touch.cy - touch.sy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d > 10) { mx = dx / d; mz = -dy / d; }
    }

    // ── Driving ──
    if (p.inCar >= 0) {
      const car = carsRef.current[p.inCar];
      if (mz !== 0) car.speed += mz * car.accel * dt;
      else car.speed *= brake ? 0.90 : FRIC;
      car.speed = Math.max(-car.maxSpeed * 0.4, Math.min(car.maxSpeed, car.speed));
      if (Math.abs(car.speed) < 0.15) car.speed = 0;
      // Speed-dependent steering: faster = less sensitive
      const speedFactor = Math.max(0.5, 1.0 - (Math.abs(car.speed) / car.maxSpeed) * 0.4);
      if (Math.abs(car.speed) > 0.5) car.angle -= mx * car.handling * speedFactor * dt * (car.speed > 0 ? 1 : -1);
      const fx = Math.sin(car.angle), fz = Math.cos(car.angle);
      const nx = car.x + fx * car.speed * dt, nz = car.z + fz * car.speed * dt;
      if (!solidBox(nx, nz, 0.8, 1.4)) { car.x = nx; car.z = nz; }
      else if (!solidBox(nx, car.z, 0.8, 1.4)) { car.x = nx; car.speed *= 0.8; }
      else if (!solidBox(car.x, nz, 0.8, 1.4)) { car.z = nz; car.speed *= 0.8; }
      else car.speed *= -0.15;
      car.x = Math.max(2, Math.min(WW - 2, car.x));
      car.z = Math.max(2, Math.min(WD - 2, car.z));
      p.x = car.x; p.z = car.z; p.angle = car.angle;
      hud.inCar = p.inCar; hud.speed = Math.abs(car.speed); hud.carColor = car.color;

      if (act && Math.abs(car.speed) < 2) {
        const ex = car.x + Math.cos(car.angle) * 3, ez = car.z - Math.sin(car.angle) * 3;
        if (!solidBox(ex, ez, 0.4, 0.4)) { p.x = ex; p.z = ez; }
        p.inCar = -1; car.speed = 0; hud.inCar = -1;
        hud.msg = "Exited!"; hud.msgT = 2;
      }
    } else {
      // ── Walking (camera-relative) ──
      const len = Math.sqrt(mx * mx + mz * mz);
      if (len > 0.1) {
        const ca = camAngle.current;
        const fwX = Math.sin(ca), fwZ = Math.cos(ca);
        const rtX = -Math.cos(ca), rtZ = Math.sin(ca);
        const wmx = mx * rtX + mz * fwX, wmz = mx * rtZ + mz * fwZ;
        const nx = p.x + (wmx / len) * WALK_SPD * dt, nz = p.z + (wmz / len) * WALK_SPD * dt;
        if (!solidBox(nx, nz, 0.3, 0.3)) { p.x = nx; p.z = nz; }
        else if (!solidBox(nx, p.z, 0.3, 0.3)) { p.x = nx; }
        else if (!solidBox(p.x, nz, 0.3, 0.3)) { p.z = nz; }
        const targetAngle = Math.atan2(wmx, wmz);
        let aDiff = targetAngle - p.angle;
        while (aDiff > Math.PI) aDiff -= Math.PI * 2;
        while (aDiff < -Math.PI) aDiff += Math.PI * 2;
        p.angle += aDiff * Math.min(0.04 * dt * 60, 1);
      }
      hud.inCar = -1;
      if (act) {
        for (let i = 0; i < carsRef.current.length; i++) {
          const c = carsRef.current[i];
          if (Math.sqrt((p.x - c.x) ** 2 + (p.z - c.z) ** 2) < ENTER_DIST) {
            p.inCar = i; hud.msg = `${c.name} - ${Math.round(c.maxSpeed * 3.6)} km/h`; hud.msgT = 2; break;
          }
        }
      }
    }

    // ── Update HUD position data (for mini-map) ──
    hud.px = p.x; hud.pz = p.z; hud.angle = p.angle;

    // ── Save game data periodically (every ~60 frames) ──
    saveTickRef.current++;
    if (saveTickRef.current % 60 === 0) {
      gameDataRef.current = {
        player: { x: p.x, z: p.z, angle: p.angle, inCar: p.inCar },
        score: hud.score, missions: hud.missions, missionId: midRef.current,
        cars: carsRef.current.map(c => ({ x: c.x, z: c.z, angle: c.angle, speed: c.speed })),
        missionData: missionsRef.current,
      };
    }

    // ── Missions ──
    const ms = missionsRef.current;
    let changed = false;
    for (const m of ms) {
      if (m.completed) continue;
      if (m.type === "delivery") {
        if (!m.pickedUp) { if (Math.sqrt((p.x - m.px) ** 2 + (p.z - m.pz) ** 2) < 4) { m.pickedUp = true; hud.msg = "📦 Picked up!"; hud.msgT = 2; changed = true; } }
        else { if (Math.sqrt((p.x - m.dx) ** 2 + (p.z - m.dz) ** 2) < 4) { m.completed = true; hud.score += m.points; hud.missions++; hud.msg = `+${m.points} pts!`; hud.msgT = 2; changed = true; } }
      } else if (m.type === "parking" && p.inCar >= 0) {
        const c = carsRef.current[p.inCar];
        if (Math.sqrt((c.x - m.px) ** 2 + (c.z - m.pz) ** 2) < 3.5 && Math.abs(c.speed) < 1) {
          m.completed = true; hud.score += m.points; hud.missions++; hud.msg = `🅿️ +${m.points}!`; hud.msgT = 2; changed = true;
        }
      } else if (m.type === "coins" && m.coins) {
        for (let i = m.coins.length - 1; i >= 0; i--) {
          if (Math.sqrt((p.x - m.coins[i].x) ** 2 + (p.z - m.coins[i].z) ** 2) < 3) {
            m.coins.splice(i, 1); m.coinsLeft = m.coins.length; hud.score += 10;
            hud.msg = `🪙 ${m.coins.length} left`; hud.msgT = 2; changed = true;
          }
        }
        if (m.coins.length === 0) { m.completed = true; hud.missions++; hud.msg = `🪙 +${m.points}!`; hud.msgT = 2; }
      }
    }
    if (changed) {
      const active = ms.filter(m => !m.completed).length;
      if (active < 3 && midRef.current < TOTAL_M) ms.push(genMission(midRef.current++));
    }
    if (hud.missions >= TOTAL_M) { onEnd(); return; }

    // ── Update 3D objects ──
    for (let i = 0; i < carsRef.current.length; i++) {
      const c = carsRef.current[i], g = carMeshes.current[i];
      if (g) { g.position.set(c.x, 0, c.z); g.rotation.y = c.angle; }
    }
    // Player character updated by PlayerCharacter component via plRef

    // ── Camera ──
    const cd = p.inCar >= 0 ? 18 : 10;
    const ch = p.inCar >= 0 ? 10 : 7;
    let angleDiff = p.angle - camAngle.current;
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
    const angleSpeed = p.inCar >= 0 ? 0.12 : 0.08;
    camAngle.current += angleDiff * Math.min(angleSpeed * dt * 60, 1);
    const sa = camAngle.current;
    camTarget.current.set(p.x - Math.sin(sa) * cd, ch, p.z - Math.cos(sa) * cd);
    const followSpeed = p.inCar >= 0 ? 0.15 : 0.22;
    camLookSmooth.current.lerp(camLook.current.set(p.x, p.inCar >= 0 ? 1.5 : 1.2, p.z), Math.min(followSpeed * dt * 60, 1));
    camera.position.lerp(camTarget.current, Math.min(followSpeed * dt * 60, 1));
    camera.lookAt(camLookSmooth.current);

    if (hud.msgT > 0) hud.msgT -= dt;
  });

  return (
    <>
      <color attach="background" args={["#141828"]} />
      <fog attach="fog" args={["#141828", 120, 320]} />
      <ambientLight intensity={1.8} color="#aabbee" />
      <hemisphereLight args={["#6688cc", "#334466", 0.9]} />
      <directionalLight position={[80, 120, 60]} intensity={2.2} color="#eef0ff" />
      <directionalLight position={[-60, 80, -40]} intensity={0.7} color="#8899cc" />

      {/* Ground */}
      <mesh rotation-x={-Math.PI / 2} position={[WW / 2, -0.05, WD / 2]}>
        <planeGeometry args={[WW + 60, WD + 60]} />
        <meshStandardMaterial color="#1e1e36" />
      </mesh>

      {/* Road surfaces */}
      {Array.from({ length: BLOCKS_X }, (_, i) => {
        const pos = (i * BLOCK + 0.5) * T;
        return (
          <group key={`road-${i}`}>
            <mesh rotation-x={-Math.PI / 2} position={[pos + T / 2, 0.01, WD / 2]}>
              <planeGeometry args={[T * 2, WD]} />
              <meshStandardMaterial color="#3a3a55" />
            </mesh>
            <mesh rotation-x={-Math.PI / 2} position={[WW / 2, 0.01, pos + T / 2]}>
              <planeGeometry args={[WW, T * 2]} />
              <meshStandardMaterial color="#3a3a55" />
            </mesh>
            <mesh rotation-x={-Math.PI / 2} position={[pos + T / 2, 0.02, WD / 2]}>
              <planeGeometry args={[0.12, WD]} />
              <meshStandardMaterial color="#aa9933" />
            </mesh>
          </group>
        );
      })}

      {/* Buildings */}
      {buildings.map((b, i) => (
        <group key={`b-${i}`} position={[b.x, 0, b.z]}>
          <mesh position={[0, b.h / 2, 0]}>
            <boxGeometry args={[b.w, b.h, b.d]} />
            <meshStandardMaterial color="#2a2a48" roughness={0.6} />
          </mesh>
          {/* Subtle color accent line at base (no emissive = no mobile vibration) */}
          <mesh position={[0, 0.08, b.d / 2 + 0.05]}>
            <boxGeometry args={[b.w - 0.5, 0.15, 0.06]} />
            <meshStandardMaterial color={b.glow} />
          </mesh>
          <mesh position={[0, 0.08, -b.d / 2 - 0.05]}>
            <boxGeometry args={[b.w - 0.5, 0.15, 0.06]} />
            <meshStandardMaterial color={b.glow} />
          </mesh>
          {/* Neon top edge */}
          <mesh position={[0, b.h + 0.05, 0]}>
            <boxGeometry args={[b.w, 0.15, b.d]} />
            <meshStandardMaterial color={b.glow} emissive={b.glow} emissiveIntensity={0.4} />
          </mesh>
          {/* Window rows */}
          {b.style < 2 && Array.from({ length: Math.min(Math.floor(b.h / 3), 6) }, (_, wi) => (
            <mesh key={`win-${wi}`} position={[0, 2.5 + wi * 3, b.d / 2 + 0.05]}>
              <planeGeometry args={[b.w * 0.7, 1.2]} />
              <meshStandardMaterial color={b.glow} emissive={b.glow} emissiveIntensity={0.3} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Park areas */}
      {Array.from(PARK_SET).map(key => {
        const [bx, bz] = key.split("-").map(Number);
        const cx = (bx * BLOCK + 4.5) * T, cz = (bz * BLOCK + 4.5) * T;
        return (
          <group key={`park-${key}`}>
            <mesh rotation-x={-Math.PI / 2} position={[cx, 0.02, cz]}>
              <planeGeometry args={[3 * T, 3 * T]} />
              <meshStandardMaterial color="#1a3a20" />
            </mesh>
          </group>
        );
      })}

      {/* Trees */}
      {trees.map((t, i) => (
        <group key={`tree-${i}`} position={[t.x, 0, t.z]}>
          <mesh position={[0, t.s * 1.5, 0]}>
            <cylinderGeometry args={[0.1 * t.s, 0.15 * t.s, t.s * 3, 5]} />
            <meshStandardMaterial color="#5a3a1a" />
          </mesh>
          <mesh position={[0, t.s * 3.5, 0]}>
            <coneGeometry args={[t.s * 1.2, t.s * 2.5, 6]} />
            <meshStandardMaterial color="#2a6a2a" />
          </mesh>
        </group>
      ))}

      {/* Street lights */}
      {Array.from({ length: Math.ceil(BLOCKS_X / 2) }, (_, iz) =>
        Array.from({ length: Math.ceil(BLOCKS_Z / 2) }, (_, ix) => {
          const lx = (ix * 14 + 2) * T, lz = (iz * 14 + 2) * T;
          if (lx >= WW || lz >= WD) return null;
          return (
            <group key={`sl-${ix}-${iz}`} position={[lx, 0, lz]}>
              <mesh position={[0, 2.5, 0]}>
                <cylinderGeometry args={[0.08, 0.08, 5, 4]} />
                <meshStandardMaterial color="#444" />
              </mesh>
              <mesh position={[0, 5, 0]}>
                <sphereGeometry args={[0.35, 6, 6]} />
                <meshStandardMaterial color="#FFE8AA" emissive="#FFE8AA" emissiveIntensity={3} />
              </mesh>
              <pointLight position={[0, 5, 0]} color="#FFE088" intensity={8} distance={28} />
            </group>
          );
        })
      ).flat()}

      {/* Cars */}
      {carsRef.current.map((car, i) => {
        const isSport = car.name === "Sport" || car.name === "Racer" || car.name === "Muscle";
        const isTruck = car.name === "Truck";
        const darkColor = new THREE.Color(car.color).multiplyScalar(0.4).getStyle();
        return (
        <group key={i} ref={el => { carMeshes.current[i] = el; }}>
          {isSport ? (
            <>
              {/* ═══ SPORT / RACER / MUSCLE — detailed supercar ═══ */}
              <mesh position={[0, 0.38, 0]}>
                <boxGeometry args={[2.2, 0.55, 4.6]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.25} />
              </mesh>
              <mesh position={[0, 0.48, 1.6]} rotation={[0.18, 0, 0]}>
                <boxGeometry args={[2.05, 0.18, 1.6]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.25} />
              </mesh>
              <mesh position={[0, 0.12, 2.35]}>
                <boxGeometry args={[2.3, 0.08, 0.35]} />
                <meshStandardMaterial color="#111" metalness={0.3} roughness={0.8} />
              </mesh>
              <mesh position={[0, 0.22, 2.32]}>
                <boxGeometry args={[1.0, 0.18, 0.12]} />
                <meshStandardMaterial color="#080808" roughness={0.9} />
              </mesh>
              <mesh position={[-0.72, 0.22, 2.32]}>
                <boxGeometry args={[0.35, 0.16, 0.12]} />
                <meshStandardMaterial color="#080808" roughness={0.9} />
              </mesh>
              <mesh position={[0.72, 0.22, 2.32]}>
                <boxGeometry args={[0.35, 0.16, 0.12]} />
                <meshStandardMaterial color="#080808" roughness={0.9} />
              </mesh>
              <mesh position={[0, 0.88, -0.2]}>
                <boxGeometry args={[1.6, 0.52, 1.9]} />
                <meshStandardMaterial color={darkColor} metalness={0.6} roughness={0.3} />
              </mesh>
              <mesh position={[0, 0.82, 0.85]} rotation={[-0.55, 0, 0]}>
                <boxGeometry args={[1.55, 0.04, 1.1]} />
                <meshStandardMaterial color="#1a2a44" metalness={0.9} roughness={0.1} />
              </mesh>
              <mesh position={[0, 0.82, -1.1]} rotation={[0.45, 0, 0]}>
                <boxGeometry args={[1.4, 0.04, 0.7]} />
                <meshStandardMaterial color="#1a2a44" metalness={0.9} roughness={0.1} />
              </mesh>
              <mesh position={[0, 0.55, -1.5]}>
                <boxGeometry args={[2.1, 0.3, 1.2]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.25} />
              </mesh>
              {[-0.35, 0, 0.35].map((ox, vi) => (
                <mesh key={`vent-${vi}`} position={[ox, 0.72, -1.5]}>
                  <boxGeometry args={[0.2, 0.04, 0.8]} />
                  <meshStandardMaterial color="#111" roughness={0.9} />
                </mesh>
              ))}
              <mesh position={[-1.13, 0.42, -0.15]}>
                <boxGeometry args={[0.08, 0.22, 0.8]} />
                <meshStandardMaterial color="#111" roughness={0.9} />
              </mesh>
              <mesh position={[1.13, 0.42, -0.15]}>
                <boxGeometry args={[0.08, 0.22, 0.8]} />
                <meshStandardMaterial color="#111" roughness={0.9} />
              </mesh>
              <mesh position={[-1.08, 0.15, 0]}>
                <boxGeometry args={[0.12, 0.18, 3.8]} />
                <meshStandardMaterial color="#111" metalness={0.3} roughness={0.7} />
              </mesh>
              <mesh position={[1.08, 0.15, 0]}>
                <boxGeometry args={[0.12, 0.18, 3.8]} />
                <meshStandardMaterial color="#111" metalness={0.3} roughness={0.7} />
              </mesh>
              <mesh position={[0, 1.05, -2.15]}>
                <boxGeometry args={[2.3, 0.06, 0.4]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.25} />
              </mesh>
              <mesh position={[-1.1, 0.95, -2.15]}>
                <boxGeometry args={[0.06, 0.25, 0.4]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.3} />
              </mesh>
              <mesh position={[1.1, 0.95, -2.15]}>
                <boxGeometry args={[0.06, 0.25, 0.4]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.3} />
              </mesh>
              <mesh position={[-0.6, 0.85, -2.15]}>
                <boxGeometry args={[0.08, 0.35, 0.08]} />
                <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
              </mesh>
              <mesh position={[0.6, 0.85, -2.15]}>
                <boxGeometry args={[0.08, 0.35, 0.08]} />
                <meshStandardMaterial color="#222" metalness={0.5} roughness={0.5} />
              </mesh>
              <mesh position={[0, 0.1, -2.32]}>
                <boxGeometry args={[1.8, 0.15, 0.25]} />
                <meshStandardMaterial color="#111" roughness={0.9} />
              </mesh>
              {[-0.5, -0.17, 0.17, 0.5].map((ox, fi) => (
                <mesh key={`fin-${fi}`} position={[ox, 0.1, -2.32]}>
                  <boxGeometry args={[0.03, 0.12, 0.24]} />
                  <meshStandardMaterial color="#222" roughness={0.8} />
                </mesh>
              ))}
              <mesh position={[-0.4, 0.18, -2.38]}>
                <cylinderGeometry args={[0.08, 0.08, 0.12, 8]} />
                <meshStandardMaterial color="#444" metalness={0.9} roughness={0.2} />
              </mesh>
              <mesh position={[0.4, 0.18, -2.38]}>
                <cylinderGeometry args={[0.08, 0.08, 0.12, 8]} />
                <meshStandardMaterial color="#444" metalness={0.9} roughness={0.2} />
              </mesh>
              <mesh position={[-0.65, 0.42, 2.31]}>
                <boxGeometry args={[0.6, 0.08, 0.06]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={2.5} />
              </mesh>
              <mesh position={[0.65, 0.42, 2.31]}>
                <boxGeometry args={[0.6, 0.08, 0.06]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={2.5} />
              </mesh>
              <mesh position={[-0.65, 0.32, 2.31]}>
                <boxGeometry args={[0.45, 0.03, 0.06]} />
                <meshStandardMaterial color={car.color} emissive={car.color} emissiveIntensity={1.5} />
              </mesh>
              <mesh position={[0.65, 0.32, 2.31]}>
                <boxGeometry args={[0.45, 0.03, 0.06]} />
                <meshStandardMaterial color={car.color} emissive={car.color} emissiveIntensity={1.5} />
              </mesh>
              <mesh position={[0, 0.48, -2.33]}>
                <boxGeometry args={[2.0, 0.06, 0.06]} />
                <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1.8} />
              </mesh>
              <mesh position={[-0.85, 0.42, -2.33]}>
                <boxGeometry args={[0.25, 0.12, 0.06]} />
                <meshStandardMaterial color="#FF0000" emissive="#FF2200" emissiveIntensity={1.2} />
              </mesh>
              <mesh position={[0.85, 0.42, -2.33]}>
                <boxGeometry args={[0.25, 0.12, 0.06]} />
                <meshStandardMaterial color="#FF0000" emissive="#FF2200" emissiveIntensity={1.2} />
              </mesh>
              <mesh position={[-1.15, 0.78, 0.4]}>
                <boxGeometry args={[0.18, 0.1, 0.2]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.3} />
              </mesh>
              <mesh position={[1.15, 0.78, 0.4]}>
                <boxGeometry args={[0.18, 0.1, 0.2]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.3} />
              </mesh>
              {[[-0.95, 1.3], [0.95, 1.3], [-0.95, -1.3], [0.95, -1.3]].map(([wx, wz], wi) => (
                <group key={`w-${wi}`} position={[wx, 0.28, wz]}>
                  <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.32, 0.32, 0.28, 12]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
                  </mesh>
                  <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.2, 0.2, 0.3, 8]} />
                    <meshStandardMaterial color="#888" metalness={0.9} roughness={0.15} />
                  </mesh>
                  <mesh rotation={[0, 0, Math.PI / 2]} position={[wx > 0 ? 0.01 : -0.01, 0, 0]}>
                    <cylinderGeometry args={[0.08, 0.08, 0.32, 6]} />
                    <meshStandardMaterial color="#aaa" metalness={0.9} roughness={0.1} />
                  </mesh>
                  <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.18, 0.18, 0.05, 8]} />
                    <meshStandardMaterial color="#553322" metalness={0.6} roughness={0.4} />
                  </mesh>
                </group>
              ))}
              <mesh position={[0, 0.02, 0]}>
                <boxGeometry args={[1.8, 0.02, 3.6]} />
                <meshStandardMaterial color={car.color} emissive={car.color} emissiveIntensity={0.6} />
              </mesh>
            </>
          ) : isTruck ? (
            <>
              <mesh position={[0, 0.7, 0]}>
                <boxGeometry args={[2.4, 1.4, 4.8]} />
                <meshStandardMaterial color={car.color} metalness={0.2} roughness={0.6} />
              </mesh>
              <mesh position={[0, 1.7, -0.5]}>
                <boxGeometry args={[2.2, 0.9, 2.4]} />
                <meshStandardMaterial color={car.color} metalness={0.2} roughness={0.6} />
              </mesh>
              <mesh position={[0, 1.55, 0.55]} rotation={[-0.4, 0, 0]}>
                <boxGeometry args={[2.0, 0.04, 1.0]} />
                <meshStandardMaterial color="#1a2a44" metalness={0.8} roughness={0.1} />
              </mesh>
              <mesh position={[0, 0.7, 2.45]}>
                <boxGeometry args={[1.8, 0.3, 0.1]} />
                <meshStandardMaterial color="#FFFF99" emissive="#FFFF99" emissiveIntensity={1.5} />
              </mesh>
              <mesh position={[0, 0.7, -2.45]}>
                <boxGeometry args={[2.0, 0.25, 0.1]} />
                <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1.0} />
              </mesh>
              {[[-1.1, 1.5], [1.1, 1.5], [-1.1, -1.5], [1.1, -1.5]].map(([wx, wz], wi) => (
                <group key={`w-${wi}`} position={[wx, 0.35, wz]}>
                  <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.38, 0.38, 0.32, 10]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
                  </mesh>
                  <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.22, 0.22, 0.34, 6]} />
                    <meshStandardMaterial color="#666" metalness={0.8} roughness={0.2} />
                  </mesh>
                </group>
              ))}
            </>
          ) : (
            <>
              <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[2.0, 0.85, 4.4]} />
                <meshStandardMaterial color={car.color} metalness={0.4} roughness={0.4} />
              </mesh>
              <mesh position={[0, 0.45, 1.5]} rotation={[0.1, 0, 0]}>
                <boxGeometry args={[1.9, 0.2, 1.0]} />
                <meshStandardMaterial color={car.color} metalness={0.4} roughness={0.4} />
              </mesh>
              <mesh position={[0, 1.15, -0.3]}>
                <boxGeometry args={[1.75, 0.6, 2.2]} />
                <meshStandardMaterial color={car.color} metalness={0.4} roughness={0.4} />
              </mesh>
              <mesh position={[0, 1.1, 0.7]} rotation={[-0.4, 0, 0]}>
                <boxGeometry args={[1.65, 0.04, 1.0]} />
                <meshStandardMaterial color="#1a2a44" metalness={0.85} roughness={0.1} />
              </mesh>
              <mesh position={[0, 1.1, -1.25]} rotation={[0.35, 0, 0]}>
                <boxGeometry args={[1.5, 0.04, 0.65]} />
                <meshStandardMaterial color="#1a2a44" metalness={0.85} roughness={0.1} />
              </mesh>
              <mesh position={[0, 0.5, 2.22]}>
                <boxGeometry args={[1.6, 0.2, 0.08]} />
                <meshStandardMaterial color="#FFFF99" emissive="#FFFF99" emissiveIntensity={1.8} />
              </mesh>
              <mesh position={[0, 0.5, -2.22]}>
                <boxGeometry args={[1.7, 0.18, 0.08]} />
                <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1.0} />
              </mesh>
              {[[-0.9, 1.3], [0.9, 1.3], [-0.9, -1.3], [0.9, -1.3]].map(([wx, wz], wi) => (
                <group key={`w-${wi}`} position={[wx, 0.25, wz]}>
                  <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.3, 0.3, 0.26, 10]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
                  </mesh>
                  <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.18, 0.18, 0.28, 6]} />
                    <meshStandardMaterial color="#777" metalness={0.8} roughness={0.2} />
                  </mesh>
                </group>
              ))}
            </>
          )}
        </group>
        );
      })}

      {/* Player character (same as skyclimb) */}
      <PlayerCharacter plRef={plRef} prevPos={prevPosRef} />

      {/* Animated Mission markers */}
      {missionsRef.current?.filter(m => !m.completed).map(m => {
        if (m.type === "delivery") {
          const tx = m.pickedUp ? m.dx : m.px, tz = m.pickedUp ? m.dz : m.pz;
          return <AnimatedDelivery key={`m-${m.id}`} x={tx} z={tz} pickedUp={m.pickedUp} />;
        } else if (m.type === "parking") {
          return <AnimatedParking key={`m-${m.id}`} x={m.px} z={m.pz} />;
        } else if (m.type === "coins" && m.coins) {
          return m.coins.map((c, ci) => <AnimatedCoin key={`c-${m.id}-${ci}`} x={c.x} z={c.z} />);
        }
        return null;
      })}
    </>
  );
});

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════
export default function CityDrivePage() {
  const router = useRouter();
  const initSave = typeof window !== "undefined" ? !!loadFromStorage() : false;
  const [gameState, setGameState] = useState<GameState>(initSave ? "menu" : "playing");
  const [countdown, setCountdown] = useState(3);
  const [finalScore, setFinalScore] = useState(0);
  const [finalMissions, setFinalMissions] = useState(0);
  const [cardSaved, setCardSaved] = useState(false);
  const [showMilestone, setShowMilestone] = useState(false);
  const [hudTick, setHudTick] = useState(0);
  const [resuming, setResuming] = useState(false);
  const [hasSave, setHasSave] = useState(initSave);
  const joystickKnobRef = useRef<HTMLDivElement>(null);

  const keysRef = useRef(new Set<string>());
  const touchRef = useRef({ active: false, sx: 0, sy: 0, cx: 0, cy: 0 });
  const actionRef = useRef(false);
  const hudRef = useRef<HudData>({ score: 0, missions: 0, inCar: -1, speed: 0, carColor: "#fff", msg: "", msgT: 0, px: 4, pz: 4, angle: 0 });
  const missionsRef = useRef<MissionData[]>([]);
  const gameDataRef = useRef<SaveData | null>(null);

  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) { setGameState("playing"); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, countdown]);

  useEffect(() => {
    if (gameState !== "playing") return;
    const i = setInterval(() => setHudTick(t => t + 1), 500);
    return () => clearInterval(i);
  }, [gameState]);

  useEffect(() => {
    const dn = (e: KeyboardEvent) => { keysRef.current.add(e.key); if (e.key === " ") e.preventDefault(); };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", dn);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", dn); window.removeEventListener("keyup", up); };
  }, []);

  useEffect(() => {
    if (gameState !== "result" || cardSaved) return;
    const total = TOTAL_M * 100;
    const s = hudRef.current.score;
    const rarity = calculateRarity(Math.min(s, total), total, 1);
    saveCard({ id: generateCardId(), game: "citydrive", theme: "city", rarity, score: s, total, date: new Date().toISOString() });
    incrementTotalGames();
    updateStats({});
    setCardSaved(true);
  }, [gameState, cardSaved]);

  const endGame = useCallback(() => {
    clearSave();
    setHasSave(false);
    setFinalScore(hudRef.current.score);
    setFinalMissions(hudRef.current.missions);
    setGameState("result");
  }, []);
  const saveAndExit = useCallback(() => {
    if (gameDataRef.current) {
      saveToStorage(gameDataRef.current);
    }
    router.push("/");
  }, [router]);
  const startGame = () => { setResuming(false); clearSave(); setHasSave(false); setGameState("playing"); };
  const continueGame = () => { setResuming(true); setGameState("playing"); };
  const playAgain = () => { setCardSaved(false); setResuming(false); clearSave(); setHasSave(false); setGameState("playing"); };

  const totalForRarity = TOTAL_M * 100;
  const rarity = calculateRarity(Math.min(finalScore, totalForRarity), totalForRarity, 1);
  const hud = hudRef.current;

  return (
    <div className="fixed inset-0 bg-[#0a0e1a] overflow-hidden select-none" style={{ touchAction: "none" }}>
      <Canvas camera={{ fov: 65, near: 0.1, far: 350, position: [4, 8, -8] }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
        <GameScene running={gameState === "playing"} resuming={resuming} keysRef={keysRef} touchRef={touchRef} actionRef={actionRef} hudRef={hudRef} missionsRef={missionsRef} gameDataRef={gameDataRef} onEnd={endGame} />
      </Canvas>

      {/* HUD overlay */}
      {gameState === "playing" && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Exit button */}
          <button onClick={saveAndExit} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center pointer-events-auto active:bg-white/20 transition-all z-30">
            <span className="text-white/70 font-bold text-lg leading-none">✕</span>
          </button>

          {/* Score */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-orange-500/30">
            <div className="text-orange-400 font-black text-xl">{hud.score} <span className="text-xs text-white/40">PTS</span></div>
            <div className="text-white/50 text-[10px]">{hud.missions}/{TOTAL_M} missions</div>
          </div>

          {/* Mini-map */}
          <MiniMap hudRef={hudRef} missionsRef={missionsRef} />

          {/* Speed gauge */}
          {hud.inCar >= 0 && (
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-xl px-5 py-2 border border-white/10">
              <div className="text-white font-black text-lg text-center">{Math.round(hud.speed * 3.6)} <span className="text-xs text-white/40">km/h</span></div>
              <div className="w-24 h-1.5 bg-white/10 rounded-full mt-1">
                <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, (hud.speed / 50) * 100)}%`, backgroundColor: hud.carColor }} />
              </div>
            </div>
          )}

          {/* Message toast */}
          {hud.msgT > 0 && (
            <div className="absolute top-14 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-lg px-4 py-1.5 border border-white/10">
              <div className="text-white font-bold text-sm">{hud.msg}</div>
            </div>
          )}

          {/* Mission list */}
          <div className="absolute top-[155px] right-3 space-y-1.5 max-w-[150px]">
            {missionsRef.current?.filter(m => !m.completed).map(m => (
              <div key={m.id} className="bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/10 text-[10px]">
                <span className="text-white/80">
                  {m.type === "delivery" ? "📦" : m.type === "parking" ? "🅿️" : "🪙"} {m.label}
                  {m.coinsLeft !== undefined ? ` (${m.coinsLeft})` : ""}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-3 left-3 text-[9px] text-white/20">
            WASD: move • SPACE: enter/exit • v3
          </div>
        </div>
      )}

      {/* Touch controls */}
      {gameState === "playing" && (
        <>
          <div className="absolute left-4 bottom-4 z-20" style={{ width: 140, height: 140 }}
            onTouchStart={e => { e.preventDefault(); const t = e.touches[0]; const rect = e.currentTarget.getBoundingClientRect(); const cx = rect.left + 70, cy = rect.top + 70; touchRef.current = { active: true, sx: cx, sy: cy, cx: t.clientX, cy: t.clientY }; const knob = joystickKnobRef.current; if (knob) { knob.style.transition = 'none'; knob.style.left = `${42 + (t.clientX - cx)}px`; knob.style.top = `${42 + (t.clientY - cy)}px`; } }}
            onTouchMove={e => { e.preventDefault(); const t = e.touches[0]; touchRef.current.cx = t.clientX; touchRef.current.cy = t.clientY; const dx = t.clientX - touchRef.current.sx, dy = t.clientY - touchRef.current.sy; const d = Math.sqrt(dx*dx+dy*dy); const max = 50; const clamp = d > max ? max / d : 1; const knob = joystickKnobRef.current; if (knob) { knob.style.left = `${42 + dx * clamp}px`; knob.style.top = `${42 + dy * clamp}px`; } }}
            onTouchEnd={() => { touchRef.current.active = false; const knob = joystickKnobRef.current; if (knob) { knob.style.transition = 'all 0.15s'; knob.style.left = '42px'; knob.style.top = '42px'; } }}
          >
            <div className="absolute inset-0 rounded-full border-2 border-white/20 bg-white/5" />
            <div ref={joystickKnobRef} className="absolute w-14 h-14 rounded-full bg-white/30 border-2 border-white/50 shadow-lg shadow-white/10"
              style={{ left: 42, top: 42 }} />
            <div className="absolute top-1 left-1/2 -translate-x-1/2 text-white/20 text-xs">▲</div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-white/20 text-xs">▼</div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 text-white/20 text-xs">◀</div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 text-white/20 text-xs">▶</div>
          </div>
          <button className="absolute right-4 bottom-4 w-18 h-18 rounded-full bg-orange-500/40 border-2 border-orange-400/70 z-20 flex items-center justify-center text-white font-bold text-base active:bg-orange-500/70 active:scale-95 transition-all"
            style={{ width: 72, height: 72 }}
            onTouchStart={e => { e.preventDefault(); actionRef.current = true; }}>
            <span className="text-2xl">🚗</span>
          </button>
          <button className="absolute right-4 bottom-24 w-14 h-14 rounded-full bg-red-500/30 border-2 border-red-400/50 z-20 flex items-center justify-center text-white text-sm active:bg-red-500/60 active:scale-95 transition-all"
            onTouchStart={() => keysRef.current.add("Shift")} onTouchEnd={() => keysRef.current.delete("Shift")}>
            <span className="text-xl">🛑</span>
          </button>
        </>
      )}

      {/* MENU */}
      <AnimatePresence>
        {gameState === "menu" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/90"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ scale: 0.9, y: 10 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring" }}
              className="text-center space-y-4 px-6">
              <div className="text-5xl mb-2">🏎️</div>
              <h2 className="text-2xl font-black text-white">Saved game found</h2>
              <p className="text-white/50 text-sm">Continue from where you left off?</p>
              <div className="space-y-3 pt-2">
                <button onClick={continueGame} className="w-full max-w-xs py-3 rounded-xl font-black text-lg text-white bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 transition-all shadow-lg shadow-green-500/30 active:scale-95">CONTINUE</button>
                <button onClick={startGame} className="w-full max-w-xs py-3 rounded-xl font-black text-lg text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all shadow-lg shadow-orange-500/30 active:scale-95">NEW GAME</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {gameState === "countdown" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div key={countdown} initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
              className="text-7xl font-black text-orange-400">{countdown > 0 ? countdown : "GO!"}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {gameState === "result" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="w-full max-w-sm">
              <ResultCard score={finalScore} total={totalForRarity} gameName="City Drive" gameIcon={<Car size={18} />} onPlayAgain={playAgain} />
              <div className="text-center mt-3 text-white/40 text-xs">{finalMissions}/{TOTAL_M} missions completed</div>
              <button onClick={() => setGameState("reward")} className="mt-3 w-full py-2 rounded-lg bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-bold hover:bg-orange-500/30 transition-all">View Card →</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {gameState === "reward" && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/95 p-4">
          <RewardReveal rarity={rarity} game="citydrive" score={finalScore} total={totalForRarity}
            onDone={() => { setGameState("menu"); setShowMilestone(true); }} />
        </div>
      )}

      {showMilestone && <MilestonePopup />}
    </div>
  );
}
