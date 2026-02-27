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
  isNPC: boolean; pushVx: number; pushVz: number; aiTimer: number;
  slowTimer: number; origMaxSpeed: number;
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
  nitro: number; nitroActive: boolean;
  drifting: boolean; driftScore: number;
  shake: number; weather: number;
}

// ═══════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════
const T = 4;
const BLOCK = 10;
const COLS = 181;
const ROWS = 181;
const NPC_COUNT = 20;
const DOWNTOWN_START = 12; // blocks >= this are downtown
const WW = COLS * T;
const WD = ROWS * T;
const BLOCKS_X = Math.floor(COLS / BLOCK);
const BLOCKS_Z = Math.floor(ROWS / BLOCK);
const WALK_SPD = 8;
const ENTER_DIST = 6;
const FRIC = 0.97;
const TOTAL_M = 15;
const NITRO_MAX = 100;
const NITRO_DRAIN = 30; // per sec (~3.3 sec burst)
const NITRO_CHARGE = 0.85; // per sec (~2 min recharge)
const NITRO_BOOST = 1.8;
const DRIFT_MIN_SPEED = 10;
const TIRE_MARK_MAX = 400;
const WEATHER_CYCLE = 90; // seconds
const WEATHERS = [
  { fog: "#141828", amb: 1.8, ambC: "#aabbee", sun: 2.2 },  // night
  { fog: "#1a2838", amb: 1.4, ambC: "#8899bb", sun: 1.5 },  // rain
  { fog: "#1a1a30", amb: 1.0, ambC: "#667799", sun: 1.0 },  // fog
  { fog: "#2a1828", amb: 2.0, ambC: "#ffaa77", sun: 2.5 },  // sunset
];

const GLOWS = ["#FF2D78", "#00D4FF", "#B44DFF", "#00FF88", "#FFD700", "#FF6B00", "#FF4488", "#44FFCC"];

// ═══════════════════════════════════════════════
//  CAR TYPES & STARS CURRENCY
// ═══════════════════════════════════════════════
interface CarType {
  id: string; name: string; price: number; color: string;
  maxSpeed: number; accel: number; handling: number;
  driftMult: number; nitroEff: number;
  desc: string;
}
const CAR_TYPES: CarType[] = [
  { id: "starter", name: "Starter", price: 0, color: "#FF2D55", maxSpeed: 35, accel: 20, handling: 2.5, driftMult: 0.8, nitroEff: 0.8, desc: "Reliable beginner car" },
  { id: "sedan", name: "Sedan", price: 2, color: "#00AAFF", maxSpeed: 40, accel: 25, handling: 3.0, driftMult: 1.0, nitroEff: 0.9, desc: "Balanced all-rounder" },
  { id: "muscle", name: "Muscle", price: 5, color: "#FF6600", maxSpeed: 50, accel: 30, handling: 2.0, driftMult: 1.5, nitroEff: 1.0, desc: "Raw power, drift king" },
  { id: "racer", name: "Racer", price: 10, color: "#00FF88", maxSpeed: 60, accel: 32, handling: 3.5, driftMult: 1.2, nitroEff: 1.2, desc: "Speed + handling" },
  { id: "supercar", name: "Supercar", price: 20, color: "#B44DFF", maxSpeed: 72, accel: 38, handling: 4.0, driftMult: 1.0, nitroEff: 1.5, desc: "Ultimate machine" },
];

const STARS_KEY = "citydrive_stars";
const OWNED_CARS_KEY = "citydrive_owned_cars";
const ACTIVE_CAR_KEY = "citydrive_active_car";

function getStars(): number { try { return parseInt(localStorage.getItem(STARS_KEY) || "0", 10); } catch { return 0; } }
function setStars(n: number) { try { localStorage.setItem(STARS_KEY, String(n)); } catch {} }
function addStars(n: number) { setStars(getStars() + n); }
function getOwnedCars(): string[] { try { return JSON.parse(localStorage.getItem(OWNED_CARS_KEY) || '["starter"]'); } catch { return ["starter"]; } }
function setOwnedCars(ids: string[]) { try { localStorage.setItem(OWNED_CARS_KEY, JSON.stringify(ids)); } catch {} }
function getActiveCar(): string { try { return localStorage.getItem(ACTIVE_CAR_KEY) || "starter"; } catch { return "starter"; } }
function setActiveCar(id: string) { try { localStorage.setItem(ACTIVE_CAR_KEY, id); } catch {} }
function getCarType(id: string): CarType { return CAR_TYPES.find(c => c.id === id) || CAR_TYPES[0]; }

// ═══════════════════════════════════════════════
//  TIME TRIAL DEFINITIONS
// ═══════════════════════════════════════════════
interface TimeTrial {
  checkpoints: { x: number; z: number }[];
  currentCP: number;
  timeLeft: number;
  active: boolean;
  reward: number;
  completed: boolean;
}
const TIME_TRIAL_DURATION = 45; // seconds
const TIME_TRIAL_CPS = 5; // checkpoints per trial
const TIME_TRIAL_REWARD = 3; // stars per completion

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
  return col % BLOCK < 3 || row % BLOCK < 3;
}
function isParkBlock(col: number, row: number) {
  const bx = Math.floor(col / BLOCK), bz = Math.floor(row / BLOCK);
  return PARK_SET.has(`${bx}-${bz}`);
}
function isSolid(x: number, z: number): boolean {
  const c = Math.floor(x / T), r = Math.floor(z / T);
  if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return true;
  if (isRoadTile(c, r)) return false;
  // Sidewalk tiles adjacent to roads
  if (c % BLOCK === 3 || c % BLOCK === BLOCK - 1 || r % BLOCK === 3 || r % BLOCK === BLOCK - 1) return false;
  if (isParkBlock(c, r)) return false;
  return true;
}
function solidBox(x: number, z: number, hw: number, hd: number) {
  return isSolid(x - hw, z - hd) || isSolid(x + hw, z - hd) || isSolid(x - hw, z + hd) || isSolid(x + hw, z + hd);
}

const DOWNTOWN_GLOWS = ["#00CCFF", "#0088FF", "#44BBFF", "#66DDFF", "#00AADD", "#3399FF"];
function genBuildings(): BuildingDef[] {
  const bs: BuildingDef[] = [];
  for (let bz = 0; bz < BLOCKS_Z; bz++)
    for (let bx = 0; bx < BLOCKS_X; bx++) {
      if (PARK_SET.has(`${bx}-${bz}`)) continue;
      const isDT = bx >= DOWNTOWN_START || bz >= DOWNTOWN_START;
      const h = isDT ? 15 + ((bx * 7 + bz * 13) % 30) : 6 + ((bx * 7 + bz * 13) % 22);
      const style = isDT ? 2 + ((bx + bz) % 2) : (bx + bz * 3) % 4;
      bs.push({
        x: (bx * BLOCK + 6.5) * T,
        z: (bz * BLOCK + 6.5) * T,
        w: 4 * T, d: 4 * T, h,
        glow: isDT ? DOWNTOWN_GLOWS[(bx * 3 + bz * 5) % DOWNTOWN_GLOWS.length] : GLOWS[(bx * 3 + bz * 5) % GLOWS.length],
        style,
      });
    }
  return bs;
}

function genTrees(): TreeDef[] {
  const trees: TreeDef[] = [];
  PARK_SET.forEach(key => {
    const [bx, bz] = key.split("-").map(Number);
    const cx = (bx * BLOCK + 6.5) * T, cz = (bz * BLOCK + 6.5) * T;
    const count = 4 + ((bx * 3 + bz * 7) % 4);
    for (let i = 0; i < count; i++) {
      const seed = bx * 100 + bz * 10 + i;
      const ax = Math.sin(seed * 1.7) * 6;
      const az = Math.cos(seed * 2.3) * 6;
      trees.push({ x: cx + ax, z: cz + az, s: 0.7 + (seed % 5) * 0.15 });
    }
  });
  // Sidewalk trees (every 4th block)
  for (let bz = 0; bz < BLOCKS_Z; bz++)
    for (let bx = 0; bx < BLOCKS_X; bx++) {
      if ((bx + bz) % 4 !== 0) continue;
      const tx = (bx * BLOCK + 3.5) * T;
      const tz = (bz * BLOCK + 3.5) * T;
      trees.push({ x: tx, z: tz, s: 0.6 });
    }
  return trees;
}

const NPC_COLORS = ["#00D4FF","#FFD700","#00FF88","#B44DFF","#FF6B00","#44FFCC","#FF8888","#88CCFF","#DDAA44","#77DD77","#DD77DD","#77DDDD","#AA7744","#AABB55","#5588CC","#CC5588","#88FF88","#FF88CC","#CCFF44","#44AAFF"];
const NPC_NAMES = ["Sedan","Sedan","Truck","Taxi","Sedan","Sedan","Truck","Sedan","Taxi","Sedan","Sedan","Truck","Sedan","Taxi","Sedan","Truck","Sedan","Taxi","Sedan","Truck"];
function initCars(carTypeId?: string): CarData[] {
  const base = { pushVx: 0, pushVz: 0, aiTimer: 0, slowTimer: 0, origMaxSpeed: 0 };
  const ct = getCarType(carTypeId || getActiveCar());
  const playerCar: CarData = { x: 1 * T, z: 1 * T, angle: 0, speed: 0, maxSpeed: ct.maxSpeed, accel: ct.accel, handling: ct.handling, color: ct.color, name: ct.name, isNPC: false, ...base, origMaxSpeed: ct.maxSpeed };
  const dirs = [0, Math.PI / 2, Math.PI, Math.PI * 1.5];
  const npcs: CarData[] = [];
  for (let i = 0; i < NPC_COUNT; i++) {
    const bx = (i * 2 + 1) % BLOCKS_X, bz = (i * 3 + 1) % BLOCKS_Z;
    // Spawn NPC on road: tile 1 of the block (center of 3-tile road)
    const ms = 10 + (i % 5) * 3;
    npcs.push({
      x: (bx * BLOCK + 1) * T, z: (bz * BLOCK + 1) * T, angle: dirs[i % 4],
      speed: 0, maxSpeed: ms, accel: 12, handling: 2.0,
      color: NPC_COLORS[i], name: NPC_NAMES[i], isNPC: true, ...base, origMaxSpeed: ms,
    });
  }
  return [playerCar, ...npcs];
}

function roadPos3D() {
  let r: number, c: number;
  do { r = Math.floor(Math.random() * ROWS); c = Math.floor(Math.random() * COLS); } while (!isRoadTile(c, r));
  return { x: c * T + T / 2, z: r * T + T / 2 };
}

function genMission(id: number): MissionData {
  const types: MissionData["type"][] = ["delivery", "parking", "coins"];
  const type = types[id % 3];
  const p = roadPos3D();
  if (type === "coins") {
    const coins = Array.from({ length: 5 }, () => roadPos3D());
    return { id, type, px: coins[0].x, pz: coins[0].z, dx: 0, dz: 0, pickedUp: false, completed: false, points: 50, label: "Collect 5 coins", coins, coinsLeft: 5 };
  }
  if (type === "parking") return { id, type, px: p.x, pz: p.z, dx: 0, dz: 0, pickedUp: false, completed: false, points: 80, label: "Park at marker" };
  // Delivery: ensure pickup and dropoff are far apart (min 80 units)
  let d = roadPos3D();
  for (let tries = 0; tries < 20; tries++) {
    const dist = Math.sqrt((d.x - p.x) ** 2 + (d.z - p.z) ** 2);
    if (dist > 80) break;
    d = roadPos3D();
  }
  return { id, type, px: p.x, pz: p.z, dx: d.x, dz: d.z, pickedUp: false, completed: false, points: 100, label: "Deliver package" };
}

// ═══════════════════════════════════════════════
//  ANIMATED 3D COMPONENTS
// ═══════════════════════════════════════════════
// ── Tire Marks (instanced) ──
function TireMarks({ marks }: { marks: React.RefObject<{ x: number; z: number; a: number }[]> }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  useFrame(() => {
    if (!meshRef.current) return;
    const arr = marks.current;
    for (let i = 0; i < TIRE_MARK_MAX; i++) {
      if (i < arr.length) {
        const m = arr[i];
        dummy.position.set(m.x, 0.02, m.z);
        dummy.rotation.set(-Math.PI / 2, 0, m.a);
        dummy.scale.setScalar(1);
      } else {
        dummy.scale.setScalar(0);
      }
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, TIRE_MARK_MAX]} frustumCulled={false}>
      <planeGeometry args={[0.3, 1.2]} />
      <meshStandardMaterial color="#111" transparent opacity={0.5} />
    </instancedMesh>
  );
}

// ── Nitro Flame Effect ──
function NitroFlame({ carsRef, plRef }: { carsRef: React.RefObject<CarData[]>; plRef: React.RefObject<{ inCar: number }> }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const idx = plRef.current.inCar;
    if (idx < 0) { ref.current.visible = false; return; }
    const car = carsRef.current[idx];
    ref.current.visible = true;
    ref.current.position.set(car.x - Math.sin(car.angle) * 2.5, 0.35, car.z - Math.cos(car.angle) * 2.5);
    ref.current.rotation.y = car.angle;
    const t = state.clock.elapsedTime;
    const flicker = 0.7 + Math.sin(t * 30) * 0.3;
    ref.current.scale.set(flicker, 0.5 + Math.sin(t * 25) * 0.3, 1 + Math.sin(t * 20) * 0.4);
  });
  return (
    <group ref={ref}>
      <mesh>
        <coneGeometry args={[0.35, 1.5, 6]} />
        <meshStandardMaterial color="#FF6600" emissive="#FF4400" emissiveIntensity={4} transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0, -0.2]}>
        <coneGeometry args={[0.2, 1.0, 6]} />
        <meshStandardMaterial color="#FFCC00" emissive="#FFAA00" emissiveIntensity={5} transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// ── Rain Particles ──
const RAIN_COUNT = 300;
function RainParticles({ active }: { active: boolean }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const offsets = useMemo(() => Array.from({ length: RAIN_COUNT }, () => ({
    x: Math.random() * 80 - 40, y: Math.random() * 30, z: Math.random() * 80 - 40, speed: 15 + Math.random() * 15,
  })), []);
  useFrame((state, dt) => {
    if (!meshRef.current || !active) { if (meshRef.current) meshRef.current.visible = false; return; }
    meshRef.current.visible = true;
    const cam = state.camera.position;
    for (let i = 0; i < RAIN_COUNT; i++) {
      const r = offsets[i];
      r.y -= r.speed * dt;
      if (r.y < 0) { r.y = 25 + Math.random() * 10; r.x = (Math.random() - 0.5) * 80; r.z = (Math.random() - 0.5) * 80; }
      dummy.position.set(cam.x + r.x, r.y, cam.z + r.z);
      dummy.scale.set(0.03, 0.6, 0.03);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, RAIN_COUNT]} frustumCulled={false}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#aaccff" transparent opacity={0.3} />
    </instancedMesh>
  );
}

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
  const personRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.position.y = 2.5 + Math.sin(t * 2) * 0.5;
      ref.current.rotation.y = t * 0.8;
    }
    if (personRef.current) {
      // Waiting person pulse
      const pulse = 1.0 + Math.sin(t * 3) * 0.05;
      personRef.current.scale.setScalar(pulse);
    }
  });
  const col = pickedUp ? "#00FF88" : "#FFD700";
  return (
    <group position={[x, 0, z]}>
      {/* Floating package marker */}
      <group ref={ref} position={[0, 2.5, 0]}>
        <mesh>
          <boxGeometry args={[1.0, 1.0, 1.0]} />
          <meshStandardMaterial color={col} emissive={col} emissiveIntensity={1.5} />
        </mesh>
        <mesh>
          <boxGeometry args={[1.05, 0.12, 0.12]} />
          <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0, -2, 0]}>
          <cylinderGeometry args={[0.02, 0.5, 3.5, 6]} />
          <meshStandardMaterial color={col} emissive={col} emissiveIntensity={0.6} />
        </mesh>
      </group>
      {/* Waiting person at delivery point */}
      {pickedUp && (
        <group ref={personRef} position={[1.5, 0, 0]}>
          {/* Body */}
          <mesh position={[0, 0.5, 0]}>
            <boxGeometry args={[0.4, 0.5, 0.25]} />
            <meshStandardMaterial color="#00CC66" emissive="#00CC66" emissiveIntensity={0.3} />
          </mesh>
          {/* Head */}
          <mesh position={[0, 0.9, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color="#FFCC88" emissive="#FFCC88" emissiveIntensity={0.2} />
          </mesh>
          {/* Legs */}
          <mesh position={[-0.1, 0.15, 0]}>
            <boxGeometry args={[0.12, 0.3, 0.12]} />
            <meshStandardMaterial color="#336" />
          </mesh>
          <mesh position={[0.1, 0.15, 0]}>
            <boxGeometry args={[0.12, 0.3, 0.12]} />
            <meshStandardMaterial color="#336" />
          </mesh>
          {/* Glow ring under person */}
          <mesh rotation-x={-Math.PI / 2} position={[0, 0.02, 0]}>
            <ringGeometry args={[1.0, 1.4, 12]} />
            <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={1.0} side={THREE.DoubleSide} />
          </mesh>
        </group>
      )}
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
function MiniMap({ hudRef, missionsRef, carsRef }: { hudRef: React.RefObject<HudData>; missionsRef: React.RefObject<MissionData[]>; carsRef?: React.RefObject<CarData[]> }) {
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

      // Roads (3 tiles wide)
      ctx.fillStyle = "#2a2a40";
      for (let i = 0; i < BLOCKS_X; i++) {
        const p = i * BLOCK * T * sc;
        ctx.fillRect(p, 0, T * 3 * sc, S);
        ctx.fillRect(0, p, S, T * 3 * sc);
      }

      // Buildings & Parks
      for (let bz = 0; bz < BLOCKS_Z; bz++)
        for (let bx = 0; bx < BLOCKS_X; bx++) {
          const cx = (bx * BLOCK + 6.5) * T * sc;
          const cz = (bz * BLOCK + 6.5) * T * sc;
          const w = 4 * T * sc;
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
            ctx.shadowBlur = m.pickedUp ? 12 : 6;
            // Pulsing radius when package is picked up
            const rad = m.pickedUp ? 3.5 + Math.sin(Date.now() / 200) * 1.5 : 3.5;
            ctx.beginPath(); ctx.arc(tx, tz, rad, 0, Math.PI * 2); ctx.fill();
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

      // NPC cars as small dots
      if (carsRef?.current) {
        for (let i = 1; i < carsRef.current.length; i++) {
          const c = carsRef.current[i];
          if (!c.isNPC) continue;
          ctx.fillStyle = "#666";
          ctx.beginPath(); ctx.arc(c.x * sc, c.z * sc, 1.5, 0, Math.PI * 2); ctx.fill();
        }
        // Player's own car (index 0) - always shown
        const pc = carsRef.current[0];
        ctx.fillStyle = "#FF2D55";
        ctx.shadowColor = "#FF2D55";
        ctx.shadowBlur = 6;
        ctx.beginPath(); ctx.arc(pc.x * sc, pc.z * sc, 3, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
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
  brakeRef: React.RefObject<boolean>;
  nitroActiveRef: React.RefObject<boolean>;
  hudRef: React.RefObject<HudData>;
  missionsRef: React.RefObject<MissionData[]>;
  gameDataRef: React.RefObject<SaveData | null>;
  carsDataRef: React.RefObject<CarData[]>;
  timeTrialRef: React.RefObject<TimeTrial | null>;
  onEnd: () => void;
}

const GameScene = React.memo(function GameScene({ running, resuming, keysRef, touchRef, actionRef, brakeRef, nitroActiveRef, hudRef, missionsRef, gameDataRef, carsDataRef, timeTrialRef, onEnd }: SceneProps) {
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
  const prevSpaceRef = useRef(false);
  const prevERef = useRef(false);
  const nitroToggle = useRef(false);
  const nitroFuel = useRef(NITRO_MAX);
  const driftState = useRef({ active: false, score: 0, timer: 0, totalScore: 0 });
  const tireMarks = useRef<{ x: number; z: number; a: number }[]>([]);
  const shakeRef = useRef(0);
  const weatherState = useRef({ type: 0, timer: 0 });
  const ambLightRef = useRef<THREE.AmbientLight>(null);
  const fogRef = useRef<THREE.Fog>(null);

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
      carsDataRef.current = cars;
      missionsRef.current = saved.missionData;
    } else {
      carsRef.current = initCars();
      carsDataRef.current = carsRef.current;
      // Spawn player next to their car
      plRef.current = { x: 1 * T + 3, z: 1 * T, angle: 0, inCar: -1 };
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
    // Space: brake when in car (held), enter/exit on first press
    const spaceHeld = keys.has(" ");
    const spaceJustPressed = spaceHeld && !prevSpaceRef.current;
    prevSpaceRef.current = spaceHeld;
    if (p.inCar >= 0) {
      if (spaceHeld) brake = true;
      if (spaceJustPressed && Math.abs(carsRef.current[p.inCar].speed) < 2) act = true;
    } else {
      if (spaceJustPressed) act = true;
    }
    // Touch/mobile brake & nitro
    if (brakeRef.current) brake = true;
    // E or Shift key toggle nitro (press once = on, press again = off)
    const eHeld = keys.has("e") || keys.has("E") || keys.has("Shift");
    const eJustPressed = eHeld && !prevERef.current;
    prevERef.current = eHeld;
    if (eJustPressed) { nitroToggle.current = !nitroToggle.current; nitroActiveRef.current = nitroToggle.current; }
    // nitroActiveRef is toggled by UI button (onClick) — sync back to nitroToggle
    if (nitroActiveRef.current && !nitroToggle.current) nitroToggle.current = true;
    if (!nitroActiveRef.current && nitroToggle.current) nitroToggle.current = false;
    const wantNitro = nitroToggle.current;
    if (actionRef.current) { act = true; actionRef.current = false; }
    if (touch.active) {
      const dx = touch.cx - touch.sx, dy = touch.cy - touch.sy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d > 10) { mx = dx / d; mz = -dy / d; }
    }

    // ── Driving ──
    if (p.inCar >= 0) {
      const car = carsRef.current[p.inCar];
      // Nitro (toggle mode — auto-off when empty)
      const hasFuel = nitroFuel.current > 0;
      const nitroOn = wantNitro && hasFuel && Math.abs(car.speed) > 1;
      if (nitroOn) {
        nitroFuel.current = Math.max(0, nitroFuel.current - NITRO_DRAIN * dt);
        if (nitroFuel.current <= 0) {
          // Auto-off: reset both toggles
          nitroToggle.current = false;
          nitroActiveRef.current = false;
        }
      } else if (!wantNitro) {
        // Only recharge when user turned nitro OFF
        nitroFuel.current = Math.min(NITRO_MAX, nitroFuel.current + NITRO_CHARGE * dt);
      }
      hud.nitro = nitroFuel.current;
      // Show toggle state in HUD (even if not boosting yet due to low speed)
      hud.nitroActive = wantNitro && hasFuel;
      const effectiveMax = nitroOn ? car.maxSpeed * NITRO_BOOST : car.maxSpeed;
      const effectiveAccel = nitroOn ? car.accel * 1.6 : car.accel;

      // Steering (before brake so drift detection works)
      const speedFactor = Math.max(0.5, 1.0 - (Math.abs(car.speed) / car.maxSpeed) * 0.4);
      if (Math.abs(car.speed) > 0.5) car.angle -= mx * car.handling * speedFactor * dt * (car.speed > 0 ? 1 : -1);

      // Drift detection: brake + steering + speed
      const isDrifting = brake && Math.abs(mx) > 0.3 && Math.abs(car.speed) > DRIFT_MIN_SPEED;
      const ds = driftState.current;

      // Acceleration / Braking / Drift
      if (isDrifting) {
        // Drift: very light braking — keep momentum while sliding
        car.speed *= 0.993;
        if (!ds.active) { ds.active = true; ds.score = 0; }
        const dMult = getCarType(getActiveCar()).driftMult;
        ds.score = Math.min(50, ds.score + Math.abs(car.speed) * dt * 0.5 * dMult);
        ds.timer = 1.5;
        // Tire marks during drift
        const tm = tireMarks.current;
        tm.push({ x: car.x - Math.cos(car.angle) * 0.8, z: car.z + Math.sin(car.angle) * 0.8, a: car.angle });
        tm.push({ x: car.x + Math.cos(car.angle) * 0.8, z: car.z - Math.sin(car.angle) * 0.8, a: car.angle });
        if (tm.length > TIRE_MARK_MAX) tm.splice(0, tm.length - TIRE_MARK_MAX);
      } else if (mz !== 0 && !brake) {
        car.speed += mz * effectiveAccel * dt;
      } else if (brake) {
        // Braking: gentle at high speed, firm at low speed
        const speedRatio = Math.min(1, Math.abs(car.speed) / car.maxSpeed);
        const brakeFactor = 0.82 + speedRatio * 0.15; // 0.82 at 0 → 0.97 at max
        car.speed *= brakeFactor;
        if (Math.abs(car.speed) < 0.5) car.speed = 0;
        // Brake skid marks at high speed
        if (Math.abs(car.speed) > 15) {
          const tm = tireMarks.current;
          tm.push({ x: car.x - Math.cos(car.angle) * 0.8, z: car.z + Math.sin(car.angle) * 0.8, a: car.angle });
          tm.push({ x: car.x + Math.cos(car.angle) * 0.8, z: car.z - Math.sin(car.angle) * 0.8, a: car.angle });
          if (tm.length > TIRE_MARK_MAX) tm.splice(0, tm.length - TIRE_MARK_MAX);
        }
      } else {
        car.speed *= FRIC;
      }
      car.speed = Math.max(-car.maxSpeed * 0.4, Math.min(effectiveMax, car.speed));
      if (Math.abs(car.speed) < 0.15) car.speed = 0;

      // Drift end — award points + stars for big drifts
      if (!isDrifting && ds.active) {
        const bonus = Math.round(ds.score);
        if (bonus > 5) {
          hud.score += bonus;
          // Award 1 star for drifts >= 25 pts, 2 stars for >= 40 pts
          const starBonus = bonus >= 40 ? 2 : bonus >= 25 ? 1 : 0;
          if (starBonus > 0) { addStars(starBonus); hud.msg = `DRIFT +${bonus}! ★+${starBonus}`; } else { hud.msg = `DRIFT +${bonus}!`; }
          hud.msgT = 2;
        }
        ds.totalScore += bonus; ds.active = false;
      }
      if (ds.timer > 0) ds.timer -= dt;
      hud.drifting = ds.active; hud.driftScore = Math.round(ds.score);

      // Movement
      const fx = Math.sin(car.angle), fz = Math.cos(car.angle);
      const nx = car.x + fx * car.speed * dt, nz = car.z + fz * car.speed * dt;
      const prevSpeed = car.speed;
      if (!solidBox(nx, nz, 0.8, 1.4)) { car.x = nx; car.z = nz; }
      else if (!solidBox(nx, car.z, 0.8, 1.4)) { car.x = nx; car.speed *= 0.8; }
      else if (!solidBox(car.x, nz, 0.8, 1.4)) { car.z = nz; car.speed *= 0.8; }
      else car.speed *= -0.15;
      // Collision shake
      if (Math.abs(prevSpeed) > 5 && Math.abs(car.speed) < Math.abs(prevSpeed) * 0.5) {
        shakeRef.current = Math.min(1, Math.abs(prevSpeed) / 30);
      }
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
      // Player car → NPC collision (push + slow NPC for ~60s)
      for (let i = 0; i < carsRef.current.length; i++) {
        if (i === p.inCar) continue;
        const npc = carsRef.current[i];
        const ddx = npc.x - car.x, ddz = npc.z - car.z;
        const dist = Math.sqrt(ddx * ddx + ddz * ddz);
        if (dist < 3.5 && dist > 0) {
          const push = Math.abs(car.speed) * 0.7;
          npc.pushVx += (ddx / dist) * push;
          npc.pushVz += (ddz / dist) * push;
          car.speed *= 0.85;
          shakeRef.current = Math.max(shakeRef.current, 0.4);
          // Slow NPC to walkable speed for 60 seconds
          if (Math.abs(car.speed) > 5) {
            npc.slowTimer = 60;
            npc.maxSpeed = 4; // ~walking speed so player can catch up on foot
          }
        }
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

    // ── NPC AI — lane-keeping + NPC-NPC avoidance ──
    for (let i = 0; i < carsRef.current.length; i++) {
      const npc = carsRef.current[i];
      if (!npc.isNPC || i === p.inCar) continue;
      // Apply push momentum
      if (Math.abs(npc.pushVx) > 0.1 || Math.abs(npc.pushVz) > 0.1) {
        const pnx = npc.x + npc.pushVx * dt, pnz = npc.z + npc.pushVz * dt;
        if (!solidBox(pnx, pnz, 0.8, 1.4)) { npc.x = pnx; npc.z = pnz; }
        npc.pushVx *= 0.90; npc.pushVz *= 0.90;
      }
      // Slow timer countdown — restore speed after collision cooldown
      if (npc.slowTimer > 0) {
        npc.slowTimer -= dt;
        if (npc.slowTimer <= 0) {
          npc.maxSpeed = npc.origMaxSpeed;
          npc.slowTimer = 0;
        }
      }
      const nfx = Math.sin(npc.angle), nfz = Math.cos(npc.angle);
      // Check for player ahead (stop for pedestrian)
      const dp = Math.sqrt((npc.x - p.x) ** 2 + (npc.z - p.z) ** 2);
      const dotP = dp > 0 ? ((p.x - npc.x) * nfx + (p.z - npc.z) * nfz) / dp : 0;
      const playerAhead = p.inCar < 0 && dp < 8 && dotP > 0.6;
      // Check for other NPCs ahead (avoid rear-end collisions)
      let npcAhead = false;
      for (let j = 0; j < carsRef.current.length; j++) {
        if (j === i || j === p.inCar) continue;
        const other = carsRef.current[j];
        const ddx = other.x - npc.x, ddz = other.z - npc.z;
        const dist = Math.sqrt(ddx * ddx + ddz * ddz);
        if (dist < 10 && dist > 0) {
          const dot = (ddx * nfx + ddz * nfz) / dist;
          if (dot > 0.7) { npcAhead = true; break; }
        }
      }
      // Check road ahead
      const ax = npc.x + nfx * 5, az = npc.z + nfz * 5;
      const blocked = solidBox(ax, az, 0.8, 1.4);
      if (playerAhead || blocked) {
        npc.speed *= 0.88;
        if (blocked && npc.speed < 1) {
          const la = npc.angle + Math.PI / 2, ra = npc.angle - Math.PI / 2;
          const lOk = !solidBox(npc.x + Math.sin(la) * 5, npc.z + Math.cos(la) * 5, 0.8, 1.4);
          const rOk = !solidBox(npc.x + Math.sin(ra) * 5, npc.z + Math.cos(ra) * 5, 0.8, 1.4);
          if (lOk && rOk) npc.angle += (Math.random() > 0.5 ? 1 : -1) * Math.PI / 2;
          else if (lOk) npc.angle = la;
          else if (rOk) npc.angle = ra;
          else npc.angle += Math.PI;
        }
      } else if (npcAhead) {
        // Slow down gently when another NPC is ahead
        npc.speed *= 0.95;
      } else {
        npc.speed += (npc.maxSpeed - npc.speed) * dt * 1.5;
        // Random turn at intersections (wider roads: col%BLOCK < 3)
        npc.aiTimer -= dt;
        if (npc.aiTimer <= 0) {
          const nc = Math.floor(npc.x / T), nr = Math.floor(npc.z / T);
          if (nc % BLOCK < 3 && nr % BLOCK < 3 && Math.random() < 0.2) {
            npc.angle += (Math.random() > 0.5 ? 1 : -1) * Math.PI / 2;
            npc.aiTimer = 4;
          }
        }
      }
      // Lane-keeping: gently steer NPC toward road center lane
      const nc = Math.floor(npc.x / T), nr = Math.floor(npc.z / T);
      const isOnXRoad = nc % BLOCK < 3;
      const isOnZRoad = nr % BLOCK < 3;
      if (isOnXRoad && !isOnZRoad) {
        // On vertical road — keep X position near lane center
        const roadCenterX = (Math.floor(nc / BLOCK) * BLOCK + 1.5) * T;
        const laneOffset = Math.abs(nfz) > 0.5 ? (nfz > 0 ? T * 0.7 : -T * 0.7) : 0;
        const targetX = roadCenterX + laneOffset;
        npc.x += (targetX - npc.x) * dt * 1.2;
      } else if (isOnZRoad && !isOnXRoad) {
        // On horizontal road — keep Z position near lane center
        const roadCenterZ = (Math.floor(nr / BLOCK) * BLOCK + 1.5) * T;
        const laneOffset = Math.abs(nfx) > 0.5 ? (nfx > 0 ? T * 0.7 : -T * 0.7) : 0;
        const targetZ = roadCenterZ + laneOffset;
        npc.z += (targetZ - npc.z) * dt * 1.2;
      }
      // Move NPC
      if (Math.abs(npc.speed) > 0.1) {
        const nnx = npc.x + nfx * npc.speed * dt, nnz = npc.z + nfz * npc.speed * dt;
        if (!solidBox(nnx, nnz, 0.8, 1.4)) { npc.x = nnx; npc.z = nnz; }
        else npc.speed *= 0.3;
      }
      npc.x = Math.max(2, Math.min(WW - 2, npc.x));
      npc.z = Math.max(2, Math.min(WD - 2, npc.z));
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
    let missionCompleted = false;
    for (const m of ms) {
      if (m.completed) continue;
      if (m.type === "delivery") {
        if (!m.pickedUp) {
          if (Math.sqrt((p.x - m.px) ** 2 + (p.z - m.pz) ** 2) < 4) {
            m.pickedUp = true; hud.msg = "📦 Picked up!"; hud.msgT = 2;
          }
        } else {
          if (Math.sqrt((p.x - m.dx) ** 2 + (p.z - m.dz) ** 2) < 4) {
            m.completed = true; hud.score += m.points; hud.missions++;
            addStars(1); hud.msg = `📦 +${m.points} pts! ★+1`; hud.msgT = 2; missionCompleted = true;
          }
        }
      } else if (m.type === "parking" && p.inCar >= 0) {
        const c = carsRef.current[p.inCar];
        if (Math.sqrt((c.x - m.px) ** 2 + (c.z - m.pz) ** 2) < 3.5 && Math.abs(c.speed) < 1) {
          m.completed = true; hud.score += m.points; hud.missions++;
          addStars(1); hud.msg = `🅿️ +${m.points} pts! ★+1`; hud.msgT = 2; missionCompleted = true;
        }
      } else if (m.type === "coins" && m.coins) {
        for (let i = m.coins.length - 1; i >= 0; i--) {
          if (Math.sqrt((p.x - m.coins[i].x) ** 2 + (p.z - m.coins[i].z) ** 2) < 3) {
            m.coins.splice(i, 1); m.coinsLeft = m.coins.length; hud.score += 10;
            hud.msg = `🪙 ${5 - m.coins.length}/5 coins (+10)`; hud.msgT = 2;
          }
        }
        if (m.coins.length === 0 && !m.completed) {
          m.completed = true; hud.score += m.points; hud.missions++;
          addStars(1); hud.msg = `🪙 +${m.points} bonus! ★+1`; hud.msgT = 2; missionCompleted = true;
        }
      }
    }
    // Spawn new missions to keep at least 3 active
    const active = ms.filter(m => !m.completed).length;
    if (active < 3 && midRef.current < TOTAL_M) {
      while (ms.filter(m => !m.completed).length < 3 && midRef.current < TOTAL_M) {
        ms.push(genMission(midRef.current++));
      }
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
    // Camera shake
    if (shakeRef.current > 0.01) {
      const s = shakeRef.current;
      camera.position.x += (Math.random() - 0.5) * s * 2;
      camera.position.y += (Math.random() - 0.5) * s * 1;
      shakeRef.current *= 0.88;
    }
    hud.shake = shakeRef.current;
    camera.lookAt(camLookSmooth.current);

    // ── Weather cycle ──
    const ws = weatherState.current;
    ws.timer += dt;
    if (ws.timer > WEATHER_CYCLE) { ws.timer = 0; ws.type = (ws.type + 1) % WEATHERS.length; }
    hud.weather = ws.type;
    const w = WEATHERS[ws.type];
    if (fogRef.current) { fogRef.current.color.lerp(new THREE.Color(w.fog), dt * 0.5); }
    if (ambLightRef.current) {
      ambLightRef.current.intensity += (w.amb - ambLightRef.current.intensity) * dt * 0.5;
      ambLightRef.current.color.lerp(new THREE.Color(w.ambC), dt * 0.5);
    }

    // ── Time Trial logic ──
    const tt = timeTrialRef.current;
    if (tt && tt.active && p.inCar >= 0) {
      tt.timeLeft -= dt;
      if (tt.timeLeft <= 0) {
        // Failed
        tt.active = false; tt.completed = false;
        timeTrialRef.current = null;
        hud.msg = "TIME TRIAL FAILED!"; hud.msgT = 3;
      } else {
        // Check checkpoint proximity
        const cp = tt.checkpoints[tt.currentCP];
        if (cp && Math.sqrt((p.x - cp.x) ** 2 + (p.z - cp.z) ** 2) < 6) {
          tt.currentCP++;
          if (tt.currentCP >= tt.checkpoints.length) {
            // Completed!
            tt.active = false; tt.completed = true;
            addStars(TIME_TRIAL_REWARD);
            hud.score += 150;
            hud.msg = `TIME TRIAL COMPLETE! ★+${TIME_TRIAL_REWARD}`; hud.msgT = 3;
            timeTrialRef.current = null;
          } else {
            hud.msg = `CP ${tt.currentCP}/${tt.checkpoints.length}`; hud.msgT = 1.5;
          }
        }
      }
    }

    if (hud.msgT > 0) hud.msgT -= dt;
  });

  return (
    <>
      <color attach="background" args={["#141828"]} />
      <fog ref={fogRef} attach="fog" args={["#141828", 180, 500]} />
      <ambientLight ref={ambLightRef} intensity={1.8} color="#aabbee" />
      <hemisphereLight args={["#6688cc", "#334466", 0.9]} />
      <directionalLight position={[80, 120, 60]} intensity={2.2} color="#eef0ff" />
      <directionalLight position={[-60, 80, -40]} intensity={0.7} color="#8899cc" />

      {/* Ground */}
      <mesh rotation-x={-Math.PI / 2} position={[WW / 2, -0.05, WD / 2]}>
        <planeGeometry args={[WW + 60, WD + 60]} />
        <meshStandardMaterial color="#1e1e36" />
      </mesh>

      {/* Road surfaces — 3-tile wide (2 lanes) */}
      {Array.from({ length: BLOCKS_X }, (_, i) => {
        const cx = (i * BLOCK + 1.5) * T;
        return (
          <group key={`road-${i}`}>
            {/* Vertical road strip */}
            <mesh rotation-x={-Math.PI / 2} position={[cx, 0.01, WD / 2]}>
              <planeGeometry args={[T * 3, WD]} />
              <meshStandardMaterial color="#3a3a55" />
            </mesh>
            {/* Horizontal road strip */}
            <mesh rotation-x={-Math.PI / 2} position={[WW / 2, 0.01, cx]}>
              <planeGeometry args={[WW, T * 3]} />
              <meshStandardMaterial color="#3a3a55" />
            </mesh>
            {/* Center lane divider (yellow dashed) */}
            <mesh rotation-x={-Math.PI / 2} position={[cx, 0.02, WD / 2]}>
              <planeGeometry args={[0.15, WD]} />
              <meshStandardMaterial color="#aa9933" />
            </mesh>
            <mesh rotation-x={-Math.PI / 2} position={[WW / 2, 0.02, cx]}>
              <planeGeometry args={[WW, 0.15]} />
              <meshStandardMaterial color="#aa9933" />
            </mesh>
            {/* White edge lines */}
            <mesh rotation-x={-Math.PI / 2} position={[cx - T * 1.4, 0.02, WD / 2]}>
              <planeGeometry args={[0.08, WD]} />
              <meshStandardMaterial color="#666" />
            </mesh>
            <mesh rotation-x={-Math.PI / 2} position={[cx + T * 1.4, 0.02, WD / 2]}>
              <planeGeometry args={[0.08, WD]} />
              <meshStandardMaterial color="#666" />
            </mesh>
          </group>
        );
      })}

      {/* Buildings — simplified for performance (2 meshes each) */}
      {buildings.map((b, i) => (
        <group key={`b-${i}`} position={[b.x, 0, b.z]}>
          <mesh position={[0, b.h / 2, 0]}>
            <boxGeometry args={[b.w, b.h, b.d]} />
            <meshStandardMaterial color="#2a2a48" roughness={0.6} />
          </mesh>
          <mesh position={[0, b.h + 0.05, 0]}>
            <boxGeometry args={[b.w, 0.15, b.d]} />
            <meshStandardMaterial color={b.glow} emissive={b.glow} emissiveIntensity={0.4} />
          </mesh>
        </group>
      ))}

      {/* Park areas */}
      {Array.from(PARK_SET).map(key => {
        const [bx, bz] = key.split("-").map(Number);
        const cx = (bx * BLOCK + 6.5) * T, cz = (bz * BLOCK + 6.5) * T;
        return (
          <group key={`park-${key}`}>
            <mesh rotation-x={-Math.PI / 2} position={[cx, 0.02, cz]}>
              <planeGeometry args={[5 * T, 5 * T]} />
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

      {/* Street lights (no pointLights for performance — emissive only) */}
      {Array.from({ length: Math.ceil(BLOCKS_X / 2) }, (_, iz) =>
        Array.from({ length: Math.ceil(BLOCKS_Z / 2) }, (_, ix) => {
          const lx = (ix * BLOCK * 2 + 3) * T, lz = (iz * BLOCK * 2 + 3) * T;
          if (lx >= WW || lz >= WD) return null;
          return (
            <group key={`sl-${ix}-${iz}`} position={[lx, 0, lz]}>
              <mesh position={[0, 2.5, 0]}>
                <cylinderGeometry args={[0.08, 0.08, 5, 4]} />
                <meshStandardMaterial color="#444" />
              </mesh>
              <mesh position={[0, 5, 0]}>
                <sphereGeometry args={[0.35, 4, 4]} />
                <meshStandardMaterial color="#FFE8AA" emissive="#FFE8AA" emissiveIntensity={4} />
              </mesh>
            </group>
          );
        })
      ).flat()}

      {/* Cars — player Sport detailed, NPC traffic simplified */}
      {carsRef.current.map((car, i) => {
        const isPlayer = !car.isNPC;
        const darkColor = new THREE.Color(car.color).multiplyScalar(0.4).getStyle();
        return (
        <group key={i} ref={el => { carMeshes.current[i] = el; }}>
          {isPlayer ? (
            <>
              {/* ═══ PLAYER SPORT CAR — detailed ═══ */}
              <mesh position={[0, 0.38, 0]}>
                <boxGeometry args={[2.2, 0.55, 4.6]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.25} />
              </mesh>
              <mesh position={[0, 0.48, 1.6]} rotation={[0.18, 0, 0]}>
                <boxGeometry args={[2.05, 0.18, 1.6]} />
                <meshStandardMaterial color={car.color} metalness={0.7} roughness={0.25} />
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
              <mesh position={[-0.65, 0.42, 2.31]}>
                <boxGeometry args={[0.6, 0.08, 0.06]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={2.5} />
              </mesh>
              <mesh position={[0.65, 0.42, 2.31]}>
                <boxGeometry args={[0.6, 0.08, 0.06]} />
                <meshStandardMaterial color="#FFFFFF" emissive="#FFFFFF" emissiveIntensity={2.5} />
              </mesh>
              <mesh position={[0, 0.48, -2.33]}>
                <boxGeometry args={[2.0, 0.06, 0.06]} />
                <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1.8} />
              </mesh>
              {[[-0.95, 1.3], [0.95, 1.3], [-0.95, -1.3], [0.95, -1.3]].map(([wx, wz], wi) => (
                <group key={`w-${wi}`} position={[wx, 0.28, wz]}>
                  <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.32, 0.32, 0.28, 8]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
                  </mesh>
                  <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.18, 0.18, 0.3, 6]} />
                    <meshStandardMaterial color="#888" metalness={0.9} roughness={0.15} />
                  </mesh>
                </group>
              ))}
            </>
          ) : (
            <>
              {/* ═══ NPC TRAFFIC — simple box + wheels (5 meshes) ═══ */}
              <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[2.0, 0.8, 4.2]} />
                <meshStandardMaterial color={car.color} metalness={0.3} roughness={0.5} />
              </mesh>
              <mesh position={[0, 1.1, -0.3]}>
                <boxGeometry args={[1.7, 0.5, 1.8]} />
                <meshStandardMaterial color={car.color} metalness={0.3} roughness={0.5} />
              </mesh>
              {[[-0.9, 1.3], [0.9, 1.3], [-0.9, -1.3], [0.9, -1.3]].map(([wx, wz], wi) => (
                <mesh key={`w-${wi}`} position={[wx, 0.25, wz]} rotation={[0, 0, Math.PI / 2]}>
                  <cylinderGeometry args={[0.28, 0.28, 0.22, 6]} />
                  <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
                </mesh>
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

      {/* Tire marks */}
      <TireMarks marks={tireMarks} />

      {/* Nitro flame (only visible when nitro active) */}
      {hudRef.current.nitroActive && <NitroFlame carsRef={carsRef} plRef={plRef} />}

      {/* Rain (weather type 1) */}
      <RainParticles active={weatherState.current.type === 1} />

      {/* Time Trial checkpoints */}
      {timeTrialRef.current?.active && timeTrialRef.current.checkpoints.map((cp, i) => {
        if (i < timeTrialRef.current!.currentCP) return null;
        const isCurrent = i === timeTrialRef.current!.currentCP;
        return (
          <group key={`tt-${i}`} position={[cp.x, 0, cp.z]}>
            <mesh rotation-x={-Math.PI / 2} position={[0, 0.15, 0]}>
              <ringGeometry args={[isCurrent ? 3 : 2, isCurrent ? 4 : 2.8, 16]} />
              <meshStandardMaterial color={isCurrent ? "#FFD700" : "#FFD700"} emissive="#FFD700" emissiveIntensity={isCurrent ? 3 : 0.8} side={THREE.DoubleSide} transparent opacity={isCurrent ? 1 : 0.4} />
            </mesh>
            {isCurrent && (
              <mesh position={[0, 4, 0]}>
                <coneGeometry args={[0.6, 1.5, 4]} />
                <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={3} />
              </mesh>
            )}
          </group>
        );
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
  const [showGarage, setShowGarage] = useState(false);
  const [stars, setStarsState] = useState(() => typeof window !== "undefined" ? getStars() : 0);
  const [ownedCars, setOwnedCarsState] = useState(() => typeof window !== "undefined" ? getOwnedCars() : ["starter"]);
  const [activeCar, setActiveCarState] = useState(() => typeof window !== "undefined" ? getActiveCar() : "starter");
  const joystickKnobRef = useRef<HTMLDivElement>(null);
  const timeTrialRef = useRef<TimeTrial | null>(null);
  const timeTrialCooldown = useRef(30); // seconds until first trial spawns

  const keysRef = useRef(new Set<string>());
  const touchRef = useRef({ active: false, sx: 0, sy: 0, cx: 0, cy: 0 });
  const actionRef = useRef(false);
  const brakeRef = useRef(false);
  const nitroActiveRef = useRef(false);
  const hudRef = useRef<HudData>({ score: 0, missions: 0, inCar: -1, speed: 0, carColor: "#fff", msg: "", msgT: 0, px: 4, pz: 4, angle: 0, nitro: NITRO_MAX, nitroActive: false, drifting: false, driftScore: 0, shake: 0, weather: 0 });
  const missionsRef = useRef<MissionData[]>([]);
  const carsDataRef = useRef<CarData[]>([]);
  const gameDataRef = useRef<SaveData | null>(null);

  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) { setGameState("playing"); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, countdown]);

  useEffect(() => {
    if (gameState !== "playing") return;
    const i = setInterval(() => {
      setHudTick(t => t + 1);
      // Sync stars display
      setStarsState(getStars());
      // Time trial spawn logic
      if (!timeTrialRef.current) {
        timeTrialCooldown.current -= 0.25;
        if (timeTrialCooldown.current <= 0) {
          const cps: { x: number; z: number }[] = [];
          for (let j = 0; j < TIME_TRIAL_CPS; j++) cps.push(roadPos3D());
          timeTrialRef.current = { checkpoints: cps, currentCP: 0, timeLeft: TIME_TRIAL_DURATION, active: true, reward: TIME_TRIAL_REWARD, completed: false };
          timeTrialCooldown.current = 60; // next trial in 60s after this one ends
        }
      }
    }, 250);
    return () => clearInterval(i);
  }, [gameState]);

  useEffect(() => {
    const dn = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (e.key === " ") e.preventDefault();
      if ((e.key === "g" || e.key === "G") && gameState === "playing") setShowGarage(prev => !prev);
    };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", dn);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", dn); window.removeEventListener("keyup", up); };
  }, [gameState]);

  useEffect(() => {
    if (gameState !== "result" || cardSaved) return;
    const total = 1400;
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
  const buyCar = (id: string) => {
    const ct = getCarType(id);
    const s = getStars();
    if (s < ct.price || ownedCars.includes(id)) return;
    setStars(s - ct.price);
    const newOwned = [...ownedCars, id];
    setOwnedCars(newOwned);
    setOwnedCarsState(newOwned);
    setStarsState(s - ct.price);
  };
  const selectCar = (id: string) => {
    if (!ownedCars.includes(id)) return;
    setActiveCar(id);
    setActiveCarState(id);
  };

  // Actual max: 5 delivery(100) + 5 parking(80) + 5 coins(50+50bonus) = 500+400+500 = 1400
  const totalForRarity = 1400;
  const rarity = calculateRarity(Math.min(finalScore, totalForRarity), totalForRarity, 1);
  const hud = hudRef.current;

  return (
    <div className="fixed inset-0 bg-[#0a0e1a] overflow-hidden select-none" style={{ touchAction: "none" }}>
      <Canvas camera={{ fov: 65, near: 0.1, far: 550, position: [4, 8, -8] }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
        <GameScene running={gameState === "playing"} resuming={resuming} keysRef={keysRef} touchRef={touchRef} actionRef={actionRef} brakeRef={brakeRef} nitroActiveRef={nitroActiveRef} hudRef={hudRef} missionsRef={missionsRef} gameDataRef={gameDataRef} carsDataRef={carsDataRef} timeTrialRef={timeTrialRef} onEnd={endGame} />
      </Canvas>

      {/* HUD overlay */}
      {gameState === "playing" && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Exit button */}
          <button onClick={saveAndExit} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center pointer-events-auto active:bg-white/20 transition-all z-30">
            <span className="text-white/70 font-bold text-lg leading-none">✕</span>
          </button>

          {/* Score + Stars */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-orange-500/30">
            <div className="flex items-center justify-between gap-3">
              <div className="text-orange-400 font-black text-xl">{hud.score} <span className="text-xs text-white/40">PTS</span></div>
              <div className="text-purple-400 font-black text-sm">★{stars}</div>
            </div>
            <div className="text-white/50 text-[10px]">{hud.missions}/{TOTAL_M} completed</div>
            <div className="w-full h-1 bg-white/10 rounded-full mt-1">
              <div className="h-full rounded-full bg-orange-500/70 transition-all" style={{ width: `${(hud.missions / TOTAL_M) * 100}%` }} />
            </div>
          </div>

          {/* Garage button */}
          <button onClick={() => setShowGarage(true)} className="absolute top-3 left-[180px] w-9 h-9 rounded-full bg-black/70 backdrop-blur-sm border border-purple-400/40 flex items-center justify-center pointer-events-auto active:bg-purple-500/30 transition-all z-30">
            <span className="text-lg">🏎️</span>
          </button>

          {/* Time Trial HUD */}
          {timeTrialRef.current?.active && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-yellow-500/40">
              <div className="text-yellow-400 font-black text-sm text-center">TIME TRIAL</div>
              <div className="text-white font-black text-xl text-center">{Math.ceil(timeTrialRef.current.timeLeft)}s</div>
              <div className="text-white/50 text-[10px] text-center">CP {timeTrialRef.current.currentCP}/{timeTrialRef.current.checkpoints.length} • ★{timeTrialRef.current.reward}</div>
            </div>
          )}

          {/* Mini-map */}
          <MiniMap hudRef={hudRef} missionsRef={missionsRef} carsRef={carsDataRef} />

          {/* Speed gauge + Nitro bar */}
          {hud.inCar >= 0 && (
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-xl px-5 py-2 border border-white/10">
              <div className="text-white font-black text-lg text-center">{Math.round(hud.speed * 3.6)} <span className="text-xs text-white/40">km/h</span></div>
              <div className="w-24 h-1.5 bg-white/10 rounded-full mt-1">
                <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, (hud.speed / 50) * 100)}%`, backgroundColor: hud.carColor }} />
              </div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <button onClick={() => { nitroActiveRef.current = !nitroActiveRef.current; }} className="text-[10px] font-black px-2 py-1 rounded-md pointer-events-auto transition-all cursor-pointer border" style={{ color: hud.nitroActive ? "#FF6600" : "#00CCFF", backgroundColor: hud.nitroActive ? "rgba(255,102,0,0.3)" : "rgba(0,200,255,0.1)", borderColor: hud.nitroActive ? "rgba(255,102,0,0.5)" : "rgba(0,200,255,0.3)" }}>NOS</button>
                <div className="w-20 h-2 bg-white/10 rounded-full relative">
                  <div className="h-full rounded-full transition-all" style={{ width: `${hud.nitro}%`, backgroundColor: hud.nitroActive ? "#FF6600" : hud.nitro < 100 ? "#555" : "#00CCFF" }} />
                </div>
                <span className="text-[8px] text-white/30 w-8">{hud.nitro < 100 && !hud.nitroActive ? `${Math.ceil((NITRO_MAX - hud.nitro) / NITRO_CHARGE)}s` : ""}</span>
              </div>
            </div>
          )}

          {/* Drift score popup */}
          {hud.drifting && hud.driftScore > 3 && (
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
              <div className="text-orange-400 font-black text-3xl text-center animate-pulse drop-shadow-lg">
                DRIFT
              </div>
              <div className="text-white font-black text-xl text-center">+{hud.driftScore}</div>
            </div>
          )}

          {/* Speed lines overlay at high speed */}
          {hud.inCar >= 0 && hud.speed > 25 && (
            <div className="absolute inset-0 pointer-events-none" style={{
              background: `radial-gradient(ellipse at center, transparent 40%, rgba(255,255,255,${Math.min(0.12, (hud.speed - 25) / 200)}) 100%)`,
            }} />
          )}

          {/* Weather indicator */}
          <div className="absolute top-14 left-3 text-[10px] text-white/30">
            {["NIGHT", "RAIN", "FOG", "SUNSET"][hud.weather]}
          </div>

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
                  {m.type === "delivery" ? (m.pickedUp ? "📦 Deliver!" : "📦 Pick up") : m.type === "parking" ? "🅿️ Park here" : `🪙 ${5 - (m.coinsLeft ?? 5)}/5 coins`}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-3 left-3 text-[9px] text-white/20">
            WASD: move • SPACE: brake/enter • E/SHIFT: nitro • G: garage
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
          <button className="absolute right-4 bottom-24 w-14 h-14 rounded-full bg-red-500/30 border-2 border-red-400/50 z-20 flex items-center justify-center text-white text-xs font-black active:bg-red-500/60 active:scale-95 transition-all"
            onTouchStart={() => brakeRef.current = true} onTouchEnd={() => brakeRef.current = false}>
            <span className="text-white/90">BRAKE</span>
          </button>
          <button className="absolute right-24 bottom-4 rounded-full z-20 flex items-center justify-center text-xs font-black active:scale-95 transition-all"
            style={{ width: 56, height: 56, backgroundColor: nitroActiveRef.current ? "rgba(255,102,0,0.5)" : "rgba(0,200,255,0.3)", borderWidth: 2, borderColor: nitroActiveRef.current ? "rgba(255,102,0,0.7)" : "rgba(0,200,255,0.5)" }}
            onTouchStart={e => { e.preventDefault(); nitroActiveRef.current = !nitroActiveRef.current; }}>
            <span style={{ color: nitroActiveRef.current ? "#FF8800" : "#66DDFF" }}>NOS</span>
          </button>
        </>
      )}

      {/* GARAGE / SHOP OVERLAY */}
      <AnimatePresence>
        {showGarage && gameState === "playing" && (
          <motion.div className="absolute inset-0 z-40 flex items-center justify-center bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ scale: 0.92, y: 15 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring", damping: 20 }}
              className="w-full max-w-md mx-4 bg-[#12152a] rounded-2xl border border-purple-500/30 overflow-hidden max-h-[85vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏎️</span>
                  <h2 className="text-white font-black text-lg">GARAGE</h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-purple-400 font-black text-lg">★{stars}</div>
                  <button onClick={() => setShowGarage(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 transition-all">✕</button>
                </div>
              </div>
              {/* Car list */}
              <div className="overflow-y-auto flex-1 p-4 space-y-3">
                {CAR_TYPES.map(ct => {
                  const owned = ownedCars.includes(ct.id);
                  const isActive = activeCar === ct.id;
                  const canBuy = !owned && stars >= ct.price;
                  return (
                    <div key={ct.id} className={`rounded-xl p-4 border transition-all ${isActive ? "border-purple-500/60 bg-purple-500/10" : owned ? "border-white/15 bg-white/5" : "border-white/8 bg-white/[0.02]"}`}>
                      <div className="flex items-start gap-3">
                        {/* Car color swatch */}
                        <div className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: ct.color + "33", borderColor: ct.color + "66", borderWidth: 2 }}>
                          <div className="w-6 h-4 rounded-sm" style={{ backgroundColor: ct.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-sm">{ct.name}</span>
                            {isActive && <span className="text-[9px] bg-purple-500/30 text-purple-300 px-1.5 py-0.5 rounded-full font-bold">ACTIVE</span>}
                            {!owned && <span className="text-yellow-400 text-xs font-bold">★{ct.price}</span>}
                          </div>
                          <p className="text-white/40 text-[10px] mt-0.5">{ct.desc}</p>
                          {/* Stats bars */}
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-2">
                            {[
                              { label: "SPD", val: ct.maxSpeed / 72, color: "#00FF88" },
                              { label: "HDL", val: ct.handling / 4, color: "#00AAFF" },
                              { label: "DFT", val: ct.driftMult / 1.5, color: "#FF6600" },
                              { label: "NOS", val: ct.nitroEff / 1.5, color: "#B44DFF" },
                            ].map(s => (
                              <div key={s.label} className="flex items-center gap-1.5">
                                <span className="text-[9px] text-white/30 w-6">{s.label}</span>
                                <div className="flex-1 h-1.5 bg-white/10 rounded-full">
                                  <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, s.val * 100)}%`, backgroundColor: s.color }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Action button */}
                      <div className="mt-3">
                        {isActive ? (
                          <div className="text-center text-purple-400/60 text-xs font-bold">SELECTED</div>
                        ) : owned ? (
                          <button onClick={() => selectCar(ct.id)} className="w-full py-2 rounded-lg bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold hover:bg-purple-500/30 active:scale-[0.98] transition-all pointer-events-auto">SELECT</button>
                        ) : canBuy ? (
                          <button onClick={() => buyCar(ct.id)} className="w-full py-2 rounded-lg bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 text-xs font-bold hover:bg-yellow-500/30 active:scale-[0.98] transition-all pointer-events-auto">BUY ★{ct.price}</button>
                        ) : (
                          <div className="text-center text-white/20 text-xs font-bold">★{ct.price} NEEDED</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="px-5 py-3 border-t border-white/10 text-center text-white/30 text-[10px]">
                Earn ★ from missions, drifts & time trials
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
