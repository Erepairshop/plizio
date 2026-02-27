"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trophy, Lock, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { type CardRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";

// ═══════════════════════════════════════════════
//  TYPES & CONSTANTS
// ═══════════════════════════════════════════════
type GameState = "menu" | "countdown" | "playing" | "complete" | "failed" | "reward";

interface CarType {
  id: string; name: string; price: number; color: string;
  maxSpeed: number; accel: number; handling: number;
  canDrift: boolean; canNitro: boolean;
}
const CAR_TYPES: CarType[] = [
  { id: "starter", name: "Starter", price: 0, color: "#999999", maxSpeed: 19, accel: 15, handling: 2.5, canDrift: false, canNitro: false },
  { id: "sedan", name: "Sedan", price: 2, color: "#0066FF", maxSpeed: 25, accel: 18, handling: 2.8, canDrift: false, canNitro: false },
  { id: "muscle", name: "Muscle", price: 5, color: "#FF6600", maxSpeed: 32, accel: 22, handling: 2.5, canDrift: true, canNitro: false },
  { id: "racer", name: "Racer", price: 10, color: "#FF2222", maxSpeed: 38, accel: 26, handling: 3.2, canDrift: true, canNitro: false },
  { id: "supercar", name: "Supercar", price: 20, color: "#9933FF", maxSpeed: 45, accel: 30, handling: 3.5, canDrift: true, canNitro: true },
];

const ACTIVE_CAR_KEY = "citydrive_active_car";
function getActiveCar(): string { try { return localStorage.getItem(ACTIVE_CAR_KEY) || "starter"; } catch { return "starter"; } }
function getCarType(id: string): CarType { return CAR_TYPES.find(c => c.id === id) || CAR_TYPES[0]; }

const LEVEL_KEY = "racetrack_completed";
function getCompletedLevels(): number[] {
  try { return JSON.parse(localStorage.getItem(LEVEL_KEY) || "[]"); } catch { return []; }
}
function markLevelComplete(level: number) {
  const c = getCompletedLevels();
  if (!c.includes(level)) { c.push(level); localStorage.setItem(LEVEL_KEY, JSON.stringify(c)); }
}

const STREAK_KEY = "racetrack_win_streak";
function getWinStreak(): number { try { return parseInt(localStorage.getItem(STREAK_KEY) || "0"); } catch { return 0; } }
function setWinStreak(n: number) { try { localStorage.setItem(STREAK_KEY, String(n)); } catch {} }

const NITRO_MAX = 100;
const NITRO_DRAIN = 35;
const NITRO_BOOST = 1.6;
const AI_COUNT = 6;
const AI_COLORS = ["#FF4444", "#44FF44", "#4488FF", "#FFAA00", "#FF44FF", "#44FFFF"];
const AI_NAMES = ["Blaze", "Viper", "Storm", "Fury", "Shadow", "Drift"];

// ═══════════════════════════════════════════════
//  TRACK GENERATION
// ═══════════════════════════════════════════════
interface TrackPoint { x: number; z: number }
interface OilSlick { x: number; z: number; radius: number }
interface TrackSeg { mx: number; mz: number; len: number; angle: number }
interface LevelDef {
  id: number; name: string; trackWidth: number; trackLength: number;
  points: TrackPoint[]; oilSlicks: OilSlick[]; timeLimit: number;
}

function makeRng(seed: number) {
  let s = seed;
  return () => { s = (s * 16807 + 12345) % 2147483647; return (s & 0x7fffffff) / 2147483647; };
}

function generateLevel(id: number): LevelDef {
  const d = id;
  const trackW = 24 + d * 1.5;
  const trackL = 200 + d * 60;
  const segLen = 25;
  const numSegs = Math.floor(trackL / segLen);
  const rng = makeRng(id * 7919);
  const points: TrackPoint[] = [{ x: 0, z: 0 }];
  let cx = 0;
  const maxTurn = 6 + d * 1.2;
  for (let i = 1; i <= numSegs; i++) {
    cx += (rng() - 0.5) * maxTurn;
    cx = Math.max(-50, Math.min(50, cx));
    if (d >= 5 && rng() < 0.15 + d * 0.02) {
      cx += (rng() > 0.5 ? 1 : -1) * (5 + d * 0.8);
      cx = Math.max(-55, Math.min(55, cx));
    }
    points.push({ x: cx, z: -i * segLen });
  }
  const oilCount = 2 + Math.floor(d * 1.2);
  const oilSlicks: OilSlick[] = [];
  for (let i = 0; i < oilCount; i++) {
    const si = 2 + Math.floor(rng() * (numSegs - 3));
    const p = points[si];
    oilSlicks.push({ x: p.x + (rng() - 0.5) * trackW * 0.5, z: p.z + rng() * segLen, radius: 2 + rng() * 2 });
  }
  return { id, name: `Level ${id}`, trackWidth: trackW, trackLength: trackL, points, oilSlicks, timeLimit: 25 + d * 8 };
}

function getTrackCenterX(z: number, pts: TrackPoint[]): number {
  if (z >= pts[0].z) return pts[0].x;
  if (z <= pts[pts.length - 1].z) return pts[pts.length - 1].x;
  let lo = 0, hi = pts.length - 1;
  while (lo < hi - 1) { const m = (lo + hi) >> 1; if (pts[m].z >= z) lo = m; else hi = m; }
  const a = pts[lo], b = pts[hi];
  const t = (z - a.z) / (b.z - a.z);
  return a.x + (b.x - a.x) * (1 - Math.cos(t * Math.PI)) / 2;
}

function getTrackCurvature(z: number, pts: TrackPoint[]): number {
  const d = 1.5;
  const x0 = getTrackCenterX(z - d, pts), x1 = getTrackCenterX(z, pts), x2 = getTrackCenterX(z + d, pts);
  return Math.abs((x2 - 2 * x1 + x0) / (d * d));
}

function buildTrackSegs(pts: TrackPoint[]): TrackSeg[] {
  return pts.slice(0, -1).map((a, i) => {
    const b = pts[i + 1];
    const len = Math.sqrt((b.x - a.x) ** 2 + (b.z - a.z) ** 2);
    return { mx: (a.x + b.x) / 2, mz: (a.z + b.z) / 2, len, angle: Math.atan2(b.x - a.x, b.z - a.z) };
  });
}

// ═══════════════════════════════════════════════
//  AI RACERS
// ═══════════════════════════════════════════════
interface RacerData {
  x: number; z: number; angle: number; speed: number;
  maxSpeed: number; accel: number; handling: number;
  color: string; name: string; aggression: number;
  laneOffset: number; flipped: boolean;
}

function initAIRacers(playerCar: CarType): RacerData[] {
  const racers: RacerData[] = [];
  for (let i = 0; i < AI_COUNT; i++) {
    const speedDrop = 0.7 + ((AI_COUNT - 1 - i) / (AI_COUNT - 1)) * 2.3;
    const row = Math.floor(i / 2), col = i % 2;
    racers.push({
      x: col === 0 ? -3.5 : 3.5, z: 8 + row * 6,
      angle: Math.PI, speed: 0,
      maxSpeed: playerCar.maxSpeed - speedDrop,
      accel: playerCar.accel * (0.88 + (i / (AI_COUNT - 1)) * 0.1),
      handling: 2.5 + i * 0.12,
      color: AI_COLORS[i], name: AI_NAMES[i],
      aggression: 0.2 + (i / (AI_COUNT - 1)) * 0.6,
      laneOffset: (i - AI_COUNT / 2) * 2.5,
      flipped: false,
    });
  }
  return racers;
}

// ═══════════════════════════════════════════════
//  3D RACE SCENE
// ═══════════════════════════════════════════════
interface HudData {
  speed: number; time: number; position: number; totalRacers: number;
  nitro: number; nitroActive: boolean; onOil: boolean; flipped: boolean;
}

interface RaceSceneProps {
  level: LevelDef; carType: CarType; running: boolean;
  onFinish: (pos: number, time: number) => void;
  onFail: (reason: string) => void;
  hudRef: React.RefObject<HudData>;
  nitroActiveRef: React.RefObject<boolean>;
  keysRef: React.RefObject<Set<string>>;
  touchRef: React.RefObject<{ active: boolean; sx: number; sy: number; cx: number; cy: number }>;
}

const RaceScene = React.memo(function RaceScene({ level, carType, running, onFinish, onFail, hudRef, nitroActiveRef, keysRef, touchRef }: RaceSceneProps) {
  const { camera } = useThree();
  const carRef = useRef({ x: 0, z: 5, angle: Math.PI, speed: 0, flipped: false });
  const carMeshRef = useRef<THREE.Group>(null);
  const aiRef = useRef<RacerData[]>(initAIRacers(carType));
  const aiMeshes = useRef<(THREE.Group | null)[]>(new Array(AI_COUNT).fill(null));
  const timerRef = useRef(level.timeLimit);
  const doneRef = useRef(false);
  const aiDone = useRef<Set<number>>(new Set());
  const flipAnim = useRef(0);
  const trackSegs = useMemo(() => buildTrackSegs(level.points), [level]);

  useFrame((_, delta) => {
    if (!running || doneRef.current) return;
    const dt = Math.min(delta, 0.05);
    const car = carRef.current;
    const keys = keysRef.current;
    const touch = touchRef.current;
    const hud = hudRef.current;
    const pts = level.points;
    const halfW = level.trackWidth / 2;

    timerRef.current -= dt;
    if (timerRef.current <= 0) { doneRef.current = true; onFail("time"); return; }
    hud.time = timerRef.current;

    // Flip animation
    if (car.flipped) {
      flipAnim.current += dt * 3;
      if (carMeshRef.current) {
        carMeshRef.current.rotation.z = flipAnim.current * Math.PI * 2;
        carMeshRef.current.position.y = 0.4 + Math.sin(flipAnim.current * Math.PI) * 3;
      }
      if (flipAnim.current > 1) { doneRef.current = true; onFail("flipped"); }
      return;
    }

    // Input
    let ai2 = 0, si = 0;
    if (keys.has("w") || keys.has("ArrowUp") || keys.has("W")) ai2 = 1;
    if (keys.has("s") || keys.has("ArrowDown") || keys.has("S")) ai2 = -0.5;
    if (keys.has("a") || keys.has("ArrowLeft") || keys.has("A")) si = 1;
    if (keys.has("d") || keys.has("ArrowRight") || keys.has("D")) si = -1;
    if (touch.active) {
      const dx = touch.cx - touch.sx, dy = touch.cy - touch.sy;
      if (Math.sqrt(dx * dx + dy * dy) > 10) {
        ai2 = Math.max(-0.5, Math.min(1, -dy / 50));
        si = Math.max(-1, Math.min(1, -dx / 50));
      }
    }

    // Oil slick check
    let onOil = false;
    for (const o of level.oilSlicks) {
      if (Math.sqrt((car.x - o.x) ** 2 + (car.z - o.z) ** 2) < o.radius + 1) { onOil = true; break; }
    }
    hud.onOil = onOil;

    // Nitro
    let spdMul = 1;
    if (carType.canNitro && nitroActiveRef.current && hud.nitro > 0) {
      spdMul = NITRO_BOOST;
      hud.nitro = Math.max(0, hud.nitro - NITRO_DRAIN * dt);
    }

    // Player physics
    const hdl = onOil ? carType.handling * 0.4 : carType.handling;
    const fric = onOil ? 0.95 : 0.98;
    car.speed += ai2 * carType.accel * dt;
    car.speed *= fric;
    car.speed = Math.max(-carType.maxSpeed * spdMul * 0.3, Math.min(carType.maxSpeed * spdMul, car.speed));
    if (Math.abs(car.speed) > 1) car.angle += si * hdl * dt * (car.speed > 0 ? 1 : -1);
    const nx = car.x + Math.sin(car.angle) * car.speed * dt;
    const nz = car.z + Math.cos(car.angle) * car.speed * dt;
    const cx = getTrackCenterX(nz, pts);
    if (nx < cx - halfW + 1.5 || nx > cx + halfW - 1.5) { car.speed *= -0.3; }
    else { car.x = Math.max(cx - halfW + 1.5, Math.min(cx + halfW - 1.5, nx)); car.z = nz; }

    // AI update
    const ais = aiRef.current;
    for (let i = 0; i < AI_COUNT; i++) {
      const r = ais[i];
      if (r.flipped || aiDone.current.has(i)) continue;
      if (r.z <= pts[pts.length - 1].z + 5) { aiDone.current.add(i); continue; }
      const aiCx = getTrackCenterX(r.z - 10, pts);
      const steer = Math.max(-1, Math.min(1, (aiCx + r.laneOffset - r.x) * 0.1));
      const curv = getTrackCurvature(r.z, pts);
      const turnSlow = Math.max(0.6, 1 - curv * 3);
      let aiOil = false;
      for (const o of level.oilSlicks) {
        if (Math.sqrt((r.x - o.x) ** 2 + (r.z - o.z) ** 2) < o.radius + 1) { aiOil = true; break; }
      }
      const aiMax = r.maxSpeed * turnSlow * (aiOil ? 0.85 : 1);
      r.speed += r.accel * dt;
      r.speed *= aiOil ? 0.95 : 0.98;
      r.speed = Math.min(aiMax, r.speed);
      if (Math.abs(r.speed) > 1) r.angle += steer * (aiOil ? r.handling * 0.5 : r.handling) * dt;
      const anx = r.x + Math.sin(r.angle) * r.speed * dt;
      const anz = r.z + Math.cos(r.angle) * r.speed * dt;
      const atc = getTrackCenterX(anz, pts);
      r.x = Math.max(atc - halfW + 2, Math.min(atc + halfW - 2, anx));
      r.z = anz;
      const m = aiMeshes.current[i];
      if (m) { m.position.set(r.x, 0.4, r.z); m.rotation.y = r.angle; }
    }

    // Player vs AI collision
    const pCurv = getTrackCurvature(car.z, pts);
    const inTurn = pCurv > 0.08 && Math.abs(car.speed) > carType.maxSpeed * 0.4;
    for (let i = 0; i < AI_COUNT; i++) {
      const r = ais[i];
      if (r.flipped) continue;
      const dx = car.x - r.x, dz = car.z - r.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < 3.5 && dist > 0) {
        const push = (3.5 - dist) * 0.5;
        const pnx = dx / dist, pnz = dz / dist;
        car.x += pnx * push * 0.6; r.x -= pnx * push * 0.4;
        car.z += pnz * push * 0.3; r.z -= pnz * push * 0.3;
        const sDiff = Math.abs(r.speed - car.speed);
        if (inTurn && sDiff > 3 && r.aggression > 0.3) {
          const flipC = r.aggression * (sDiff / 15) * (pCurv / 0.15);
          if (flipC > 0.5) { car.flipped = true; hud.flipped = true; flipAnim.current = 0; }
        }
        car.speed *= 0.9; r.speed *= 0.95;
      }
    }

    // AI vs AI collision
    for (let i = 0; i < AI_COUNT; i++) for (let j = i + 1; j < AI_COUNT; j++) {
      const a = ais[i], b = ais[j];
      if (a.flipped || b.flipped) continue;
      const dx = a.x - b.x, dz = a.z - b.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < 3 && dist > 0) {
        const p = (3 - dist) * 0.3, n1 = dx / dist, n2 = dz / dist;
        a.x += n1 * p; b.x -= n1 * p; a.z += n2 * p * 0.2; b.z -= n2 * p * 0.2;
      }
    }

    hud.speed = Math.abs(car.speed);
    hud.nitroActive = carType.canNitro && nitroActiveRef.current && hud.nitro > 0;

    // Position calc
    const prog = -car.z;
    let pos = 1;
    for (let i = 0; i < AI_COUNT; i++) { if (aiDone.current.has(i) || -ais[i].z > prog) pos++; }
    hud.position = pos;
    hud.totalRacers = AI_COUNT + 1;

    // Finish
    if (car.z <= pts[pts.length - 1].z + 5) {
      doneRef.current = true;
      onFinish(pos, level.timeLimit - timerRef.current);
      return;
    }

    if (carMeshRef.current) { carMeshRef.current.position.set(car.x, 0.4, car.z); carMeshRef.current.rotation.y = car.angle; }
    const camX = car.x - Math.sin(car.angle) * 12;
    const camZ = car.z - Math.cos(car.angle) * 12;
    camera.position.lerp(new THREE.Vector3(camX, 6, camZ), 0.1);
    camera.lookAt(car.x, 1, car.z);
  });

  return (
    <>
      <color attach="background" args={["#0a0e1a"]} />
      <fog attach="fog" args={["#0a0e1a", 80, 250]} />
      <ambientLight intensity={1.2} color="#8899cc" />
      <directionalLight position={[30, 50, 20]} intensity={2} color="#eef0ff" />
      <hemisphereLight args={["#6688cc", "#334466", 0.8]} />

      {/* Ground */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.05, -level.trackLength / 2]}>
        <planeGeometry args={[300, level.trackLength + 200]} />
        <meshStandardMaterial color="#1a1a30" />
      </mesh>

      {/* Track segments */}
      {trackSegs.map((s, i) => (
        <mesh key={`t${i}`} position={[s.mx, -0.01, s.mz]} rotation-y={s.angle}>
          <boxGeometry args={[level.trackWidth, 0.02, s.len + 1]} />
          <meshStandardMaterial color="#3a3a55" />
        </mesh>
      ))}

      {/* Barriers */}
      {level.points.map((p, i) => {
        if (i >= level.points.length - 1) return null;
        const np = level.points[i + 1];
        const a = Math.atan2(np.x - p.x, np.z - p.z);
        const hw = level.trackWidth / 2;
        const rpx = -Math.cos(a) * hw, rpz = Math.sin(a) * hw;
        return (
          <React.Fragment key={`b${i}`}>
            <mesh position={[p.x + rpx, 0.4, p.z + rpz]}>
              <boxGeometry args={[0.6, 0.8, 0.6]} />
              <meshStandardMaterial color="#4444FF" emissive="#4444FF" emissiveIntensity={0.8} />
            </mesh>
            <mesh position={[p.x - rpx, 0.4, p.z - rpz]}>
              <boxGeometry args={[0.6, 0.8, 0.6]} />
              <meshStandardMaterial color="#4444FF" emissive="#4444FF" emissiveIntensity={0.8} />
            </mesh>
          </React.Fragment>
        );
      })}

      {/* Start line */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.03, 0]}>
        <planeGeometry args={[level.trackWidth - 1, 1]} />
        <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={1} />
      </mesh>

      {/* Finish line */}
      <mesh rotation-x={-Math.PI / 2} position={[level.points[level.points.length - 1].x, 0.03, level.points[level.points.length - 1].z]}>
        <planeGeometry args={[level.trackWidth - 1, 1.5]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} />
      </mesh>
      <pointLight position={[level.points[level.points.length - 1].x, 3, level.points[level.points.length - 1].z]} color="#FFD700" intensity={3} distance={15} />

      {/* Oil slicks */}
      {level.oilSlicks.map((o, i) => (
        <mesh key={`oil${i}`} rotation-x={-Math.PI / 2} position={[o.x, 0.02, o.z]}>
          <circleGeometry args={[o.radius, 12]} />
          <meshStandardMaterial color="#1a1a0a" emissive="#332200" emissiveIntensity={0.3} transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Player car */}
      <group ref={carMeshRef} position={[0, 0.4, 5]}>
        <mesh position={[0, 0.3, 0]}><boxGeometry args={[1.8, 0.6, 3.5]} /><meshStandardMaterial color={carType.color} emissive={carType.color} emissiveIntensity={0.2} /></mesh>
        <mesh position={[0, 0.7, -0.3]}><boxGeometry args={[1.5, 0.4, 1.8]} /><meshStandardMaterial color={carType.color} emissive={carType.color} emissiveIntensity={0.15} /></mesh>
        <mesh position={[0, 0.6, 0.8]}><boxGeometry args={[1.4, 0.35, 0.05]} /><meshStandardMaterial color="#1a1a2e" transparent opacity={0.7} /></mesh>
        <mesh position={[0.6, 0.3, 1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} /></mesh>
        <mesh position={[-0.6, 0.3, 1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} /></mesh>
        <mesh position={[0.6, 0.3, -1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1} /></mesh>
        <mesh position={[-0.6, 0.3, -1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1} /></mesh>
        {[[-0.95, 0, 1], [0.95, 0, 1], [-0.95, 0, -1], [0.95, 0, -1]].map(([wx, wy, wz], wi) => (
          <mesh key={wi} position={[wx, wy, wz]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.3, 0.3, 0.2, 8]} /><meshStandardMaterial color="#1a1a1a" />
          </mesh>
        ))}
        <spotLight position={[0, 0.5, 2]} target-position={[0, 0, 10]} angle={0.5} intensity={2} distance={20} color="#FFE4B5" />
      </group>

      {/* AI cars */}
      {aiRef.current.map((r, i) => (
        <group key={`ai${i}`} ref={el => { aiMeshes.current[i] = el; }} position={[r.x, 0.4, r.z]} rotation-y={r.angle}>
          <mesh position={[0, 0.3, 0]}><boxGeometry args={[1.8, 0.6, 3.5]} /><meshStandardMaterial color={r.color} emissive={r.color} emissiveIntensity={0.3} /></mesh>
          <mesh position={[0, 0.7, -0.3]}><boxGeometry args={[1.5, 0.4, 1.8]} /><meshStandardMaterial color={r.color} emissive={r.color} emissiveIntensity={0.2} /></mesh>
          {[[-0.95, 0, 1], [0.95, 0, 1], [-0.95, 0, -1], [0.95, 0, -1]].map(([wx, wy, wz], wi) => (
            <mesh key={wi} position={[wx, wy, wz]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.3, 0.3, 0.2, 8]} /><meshStandardMaterial color="#1a1a1a" />
            </mesh>
          ))}
        </group>
      ))}

      {/* Light posts every 4th waypoint */}
      {level.points.filter((_, i) => i % 4 === 0).map((p, i) => (
        <group key={`lp${i}`}>
          <mesh position={[p.x - level.trackWidth / 2 - 2, 2.5, p.z]}>
            <cylinderGeometry args={[0.1, 0.1, 5, 4]} /><meshStandardMaterial color="#333344" />
          </mesh>
          <pointLight position={[p.x - level.trackWidth / 2 - 2, 5, p.z]} color="#8888FF" intensity={1} distance={15} />
          <mesh position={[p.x + level.trackWidth / 2 + 2, 2.5, p.z]}>
            <cylinderGeometry args={[0.1, 0.1, 5, 4]} /><meshStandardMaterial color="#333344" />
          </mesh>
          <pointLight position={[p.x + level.trackWidth / 2 + 2, 5, p.z]} color="#8888FF" intensity={1} distance={15} />
        </group>
      ))}
    </>
  );
});

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════
export default function RacetrackPage() {
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState>("menu");
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [countdown, setCountdown] = useState(3);
  const [finishPosition, setFinishPosition] = useState(1);
  const [finishTime, setFinishTime] = useState(0);
  const [failReason, setFailReason] = useState("");
  const [cardSaved, setCardSaved] = useState(false);
  const [showMilestone, setShowMilestone] = useState(false);
  const [hudTick, setHudTick] = useState(0);
  const joystickKnobRef = useRef<HTMLDivElement>(null);
  const keysRef = useRef(new Set<string>());
  const touchRef = useRef({ active: false, sx: 0, sy: 0, cx: 0, cy: 0 });
  const nitroActiveRef = useRef(false);
  const hudRef = useRef<HudData>({ speed: 0, time: 0, position: 1, totalRacers: AI_COUNT + 1, nitro: NITRO_MAX, nitroActive: false, onOil: false, flipped: false });
  const carType = useMemo(() => getCarType(getActiveCar()), []);
  const level = useMemo(() => generateLevel(selectedLevel), [selectedLevel]);
  const completedLevels = typeof window !== "undefined" ? getCompletedLevels() : [];

  useEffect(() => { if (gameState !== "playing") return; const i = setInterval(() => setHudTick(t => t + 1), 100); return () => clearInterval(i); }, [gameState]);
  useEffect(() => { if (gameState !== "countdown") return; if (countdown <= 0) { setGameState("playing"); return; } const t = setTimeout(() => setCountdown(c => c - 1), 1000); return () => clearTimeout(t); }, [gameState, countdown]);
  useEffect(() => {
    const dn = (e: KeyboardEvent) => { keysRef.current.add(e.key); if (e.key === " ") e.preventDefault(); if ((e.key === "e" || e.key === "E" || e.key === "Shift") && carType.canNitro) nitroActiveRef.current = !nitroActiveRef.current; };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", dn); window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", dn); window.removeEventListener("keyup", up); };
  }, [carType]);

  useEffect(() => {
    if (gameState !== "reward" || cardSaved) return;
    const streak = getWinStreak();
    let rarity: CardRarity;
    if (finishPosition === 1 && streak >= 2) rarity = "legendary";
    else if (finishPosition === 1) rarity = "gold";
    else if (finishPosition === 2) rarity = "silver";
    else rarity = "bronze";
    if (finishPosition === 1) setWinStreak(streak + 1); else setWinStreak(0);
    const score = Math.max(0, (AI_COUNT + 1 - finishPosition) * 100 + selectedLevel * 50);
    const total = AI_COUNT * 100 + selectedLevel * 50;
    saveCard({ id: generateCardId(), game: "racetrack", theme: `level-${selectedLevel}`, rarity, score, total, date: new Date().toISOString() });
    incrementTotalGames(); updateStats({});
    if (finishPosition <= 3) markLevelComplete(selectedLevel);
    setCardSaved(true);
  }, [gameState, cardSaved, finishPosition, selectedLevel]);

  const startLevel = (lvl: number) => {
    setSelectedLevel(lvl); setCountdown(3); setCardSaved(false); setFailReason("");
    hudRef.current = { speed: 0, time: 0, position: 1, totalRacers: AI_COUNT + 1, nitro: NITRO_MAX, nitroActive: false, onOil: false, flipped: false };
    nitroActiveRef.current = false; setGameState("countdown");
  };
  const handleFinish = useCallback((pos: number, time: number) => { setFinishPosition(pos); setFinishTime(time); setGameState("complete"); }, []);
  const handleFail = useCallback((reason: string) => { setFailReason(reason); setGameState("failed"); }, []);

  const posRarity = useMemo((): CardRarity => {
    const s = typeof window !== "undefined" ? getWinStreak() : 0;
    if (finishPosition === 1 && s >= 2) return "legendary";
    if (finishPosition === 1) return "gold";
    if (finishPosition === 2) return "silver";
    return "bronze";
  }, [finishPosition]);
  const totalScore = useMemo(() => Math.max(0, (AI_COUNT + 1 - finishPosition) * 100 + selectedLevel * 50), [finishPosition, selectedLevel]);
  const totalForRarity = useMemo(() => AI_COUNT * 100 + selectedLevel * 50, [selectedLevel]);
  const hud = hudRef.current;
  const posLabel = (p: number) => p === 1 ? "1st" : p === 2 ? "2nd" : p === 3 ? "3rd" : `${p}th`;
  const posColor = (p: number) => p === 1 ? "#FFD700" : p === 2 ? "#C0C0C0" : p === 3 ? "#CD7F32" : "#666";

  return (
    <div className="fixed inset-0 bg-[#0a0e1a] overflow-hidden select-none" style={{ touchAction: "none" }}>
      {/* MENU */}
      {gameState === "menu" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center overflow-y-auto pb-8">
          <div className="w-full max-w-md px-4 pt-6">
            <div className="flex items-center justify-between mb-6">
              <Link href="/citydrive"><motion.div className="bg-white/5 border border-white/8 p-2.5 rounded-xl cursor-pointer" whileTap={{ scale: 0.9 }}><ArrowLeft size={18} className="text-white/60" /></motion.div></Link>
              <h1 className="text-white font-black text-xl tracking-wide flex items-center gap-2"><Trophy size={20} className="text-[#BB44FF]" /> RACE TRACK</h1>
              <div className="text-white/30 text-xs font-bold">{carType.name}</div>
            </div>
            <div className="bg-white/[0.03] border border-[#BB44FF]/20 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${carType.color}20` }}><div className="text-lg">🏎️</div></div>
                <div>
                  <div className="text-white font-bold text-sm">{carType.name}</div>
                  <div className="text-white/30 text-[10px]">{Math.round(carType.maxSpeed * 3.6)} km/h{carType.canDrift ? " | Drift" : ""}{carType.canNitro ? " | Nitro" : ""}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-[#FFD700] text-[10px] font-bold">Win Streak</div>
                  <div className="text-white font-black text-lg">{typeof window !== "undefined" ? getWinStreak() : 0}</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2.5">
              {Array.from({ length: 20 }, (_, i) => {
                const lvl = i + 1, done = completedLevels.includes(lvl), open = lvl === 1 || completedLevels.includes(lvl - 1);
                return (
                  <motion.button key={lvl} onClick={() => open && startLevel(lvl)}
                    className={`relative aspect-square rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all ${done ? "bg-[#BB44FF]/10 border-[#BB44FF]/30" : open ? "bg-white/[0.04] border-white/10" : "bg-white/[0.02] border-white/5 opacity-40"}`}
                    whileTap={open ? { scale: 0.95 } : undefined} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: open ? 1 : 0.4, scale: 1 }} transition={{ delay: i * 0.02 }}>
                    {open ? (<><span className="text-white font-black text-lg">{lvl}</span>{done && <Check size={12} className="text-[#BB44FF]" />}</>) : <Lock size={16} className="text-white/20" />}
                  </motion.button>
                );
              })}
            </div>
            <div className="mt-4 bg-white/[0.03] border border-white/5 rounded-xl p-3">
              <div className="flex items-center justify-between"><span className="text-white/30 text-[10px] font-bold">PROGRESS</span><span className="text-white/50 text-xs font-black">{completedLevels.length}/20</span></div>
              <div className="w-full h-1.5 bg-white/5 rounded-full mt-2"><div className="h-full rounded-full bg-[#BB44FF]/60 transition-all" style={{ width: `${(completedLevels.length / 20) * 100}%` }} /></div>
            </div>
          </div>
        </div>
      )}

      {/* GAME */}
      {(gameState === "playing" || gameState === "countdown") && (
        <>
          <Canvas camera={{ fov: 65, near: 0.1, far: 300, position: [0, 6, 15] }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
            <RaceScene level={level} carType={carType} running={gameState === "playing"} onFinish={handleFinish} onFail={handleFail} hudRef={hudRef} nitroActiveRef={nitroActiveRef} keysRef={keysRef} touchRef={touchRef} />
          </Canvas>
          {gameState === "playing" && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-xl px-5 py-2 border border-[#BB44FF]/30">
                <div className="flex items-center gap-3">
                  <div><div className="text-[10px] text-white/40">POS</div><div className="font-black text-2xl" style={{ color: posColor(hud.position) }}>{posLabel(hud.position)}</div></div>
                  <div className="w-px h-8 bg-white/10" />
                  <div><div className="text-[10px] text-white/40">TIME</div><div className="text-white font-black text-2xl">{Math.ceil(hud.time)}s</div></div>
                </div>
                <div className="text-[#BB44FF] font-black text-[10px] text-center">LEVEL {selectedLevel}</div>
              </div>
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-xl px-5 py-2 border border-white/10">
                <div className="text-white font-black text-lg text-center">{Math.round(hud.speed * 3.6)} <span className="text-xs text-white/40">km/h</span></div>
                {hud.onOil && <div className="text-yellow-400 text-[10px] font-bold text-center animate-pulse">OIL SLICK!</div>}
                {carType.canNitro && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <button onClick={() => { nitroActiveRef.current = !nitroActiveRef.current; }} className="text-[10px] font-black px-2 py-1 rounded-md pointer-events-auto transition-all cursor-pointer border"
                      style={{ color: hud.nitroActive ? "#FF6600" : "#00CCFF", backgroundColor: hud.nitroActive ? "rgba(255,102,0,0.3)" : "rgba(0,200,255,0.1)", borderColor: hud.nitroActive ? "rgba(255,102,0,0.5)" : "rgba(0,200,255,0.3)" }}>NOS</button>
                    <div className="w-20 h-2 bg-white/10 rounded-full"><div className="h-full rounded-full transition-all" style={{ width: `${hud.nitro}%`, backgroundColor: hud.nitroActive ? "#FF6600" : "#00CCFF" }} /></div>
                  </div>
                )}
              </div>
              <button onClick={() => router.push("/citydrive")} className="absolute top-3 left-3 bg-black/70 border border-white/20 rounded-xl px-3 py-2 flex items-center gap-1.5 pointer-events-auto z-30 active:bg-white/20 transition-all">
                <ArrowLeft size={14} className="text-white/60" /><span className="text-white/60 text-[10px] font-bold">CITY</span>
              </button>
              <button onClick={() => setGameState("menu")} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center pointer-events-auto z-30">
                <span className="text-white/70 font-bold text-lg">✕</span>
              </button>
              <div className="absolute bottom-3 left-3 text-[9px] text-white/20">WASD: drive{carType.canNitro ? " | E: nitro" : ""}</div>
            </div>
          )}
          {gameState === "playing" && (
            <>
              <div className="absolute left-4 bottom-4 z-20" style={{ width: 140, height: 140 }}
                onTouchStart={e => { e.preventDefault(); const t = e.touches[0]; const rect = e.currentTarget.getBoundingClientRect(); const cx2 = rect.left + 70, cy = rect.top + 70; touchRef.current = { active: true, sx: cx2, sy: cy, cx: t.clientX, cy: t.clientY }; const knob = joystickKnobRef.current; if (knob) { knob.style.transition = 'none'; knob.style.left = `${42 + (t.clientX - cx2)}px`; knob.style.top = `${42 + (t.clientY - cy)}px`; } }}
                onTouchMove={e => { e.preventDefault(); const t = e.touches[0]; touchRef.current.cx = t.clientX; touchRef.current.cy = t.clientY; const dx = t.clientX - touchRef.current.sx, dy = t.clientY - touchRef.current.sy; const d = Math.sqrt(dx*dx+dy*dy); const max = 50; const cl = d > max ? max / d : 1; const knob = joystickKnobRef.current; if (knob) { knob.style.left = `${42 + dx * cl}px`; knob.style.top = `${42 + dy * cl}px`; } }}
                onTouchEnd={() => { touchRef.current.active = false; const knob = joystickKnobRef.current; if (knob) { knob.style.transition = 'all 0.15s'; knob.style.left = '42px'; knob.style.top = '42px'; } }}>
                <div className="absolute inset-0 rounded-full border-2 border-white/20 bg-white/5" />
                <div ref={joystickKnobRef} className="absolute w-14 h-14 rounded-full bg-white/30 border-2 border-white/50" style={{ left: 42, top: 42 }} />
              </div>
              {carType.canNitro && (
                <button className="absolute right-4 bottom-4 rounded-full z-20 flex items-center justify-center text-xs font-black active:scale-95"
                  style={{ width: 56, height: 56, backgroundColor: nitroActiveRef.current ? "rgba(255,102,0,0.5)" : "rgba(0,200,255,0.3)", borderWidth: 2, borderColor: nitroActiveRef.current ? "rgba(255,102,0,0.7)" : "rgba(0,200,255,0.5)" }}
                  onTouchStart={e => { e.preventDefault(); nitroActiveRef.current = !nitroActiveRef.current; }}>
                  <span style={{ color: nitroActiveRef.current ? "#FF8800" : "#66DDFF" }}>NOS</span>
                </button>
              )}
            </>
          )}
        </>
      )}

      {/* COUNTDOWN */}
      <AnimatePresence>
        {gameState === "countdown" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div key={countdown} initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} className="text-7xl font-black text-[#BB44FF]">{countdown > 0 ? countdown : "GO!"}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPLETE */}
      <AnimatePresence>
        {gameState === "complete" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="w-full max-w-sm bg-[#0d1117] border border-[#BB44FF]/20 rounded-3xl p-6 text-center" initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring" }}>
              <div className="text-5xl mb-2">{finishPosition === 1 ? "🏆" : finishPosition <= 3 ? "🏅" : "🏁"}</div>
              <h2 className="font-black text-3xl" style={{ color: posColor(finishPosition) }}>{posLabel(finishPosition)} Place!</h2>
              <p className="text-white/50 text-sm mt-1">Level {selectedLevel}</p>
              <div className="mt-3 space-y-1">
                <div className="text-white/50 text-sm">Time: <span className="text-white font-bold">{finishTime.toFixed(1)}s</span></div>
                <div className="text-sm font-bold" style={{ color: posColor(finishPosition) }}>
                  {finishPosition === 1 ? "GOLD CARD!" : finishPosition === 2 ? "SILVER CARD!" : "BRONZE CARD"}
                </div>
                {finishPosition === 1 && (
                  <div className="text-[#BB44FF] text-xs mt-1">
                    Win streak: {getWinStreak() + 1} {getWinStreak() + 1 >= 3 ? "→ LEGENDARY!" : getWinStreak() >= 1 ? "→ 1 more for Legendary!" : ""}
                  </div>
                )}
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => setGameState("reward")} className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#BB44FF] to-[#8800FF] hover:opacity-90 transition-all">View Card</button>
                <button onClick={() => setGameState("menu")} className="flex-1 py-3 rounded-xl font-bold text-sm text-white/60 bg-white/5 border border-white/10">Back</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAILED */}
      <AnimatePresence>
        {gameState === "failed" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="w-full max-w-sm bg-[#0d1117] border border-red-500/20 rounded-3xl p-6 text-center" initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring" }}>
              <div className="text-4xl mb-2">{failReason === "flipped" ? "🔄" : "💥"}</div>
              <h2 className="text-red-400 font-black text-2xl">{failReason === "flipped" ? "Flipped!" : "Time\u0027s Up!"}</h2>
              <p className="text-white/40 text-sm mt-2">{failReason === "flipped" ? "You got bumped off in a turn!" : `Ran out of time on Level ${selectedLevel}`}</p>
              <div className="flex gap-3 mt-5">
                <button onClick={() => startLevel(selectedLevel)} className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-500 to-orange-500">Retry</button>
                <button onClick={() => setGameState("menu")} className="flex-1 py-3 rounded-xl font-bold text-sm text-white/60 bg-white/5 border border-white/10">Back</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* REWARD */}
      {gameState === "reward" && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/95 p-4">
          <RewardReveal rarity={posRarity} game="racetrack" score={totalScore} total={totalForRarity} onDone={() => { setGameState("menu"); setShowMilestone(true); }} />
        </div>
      )}

      {showMilestone && <MilestonePopup />}
    </div>
  );
}
