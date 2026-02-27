"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Car } from "lucide-react";
import Link from "next/link";
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
interface BuildingDef { x: number; z: number; w: number; d: number; h: number; glow: string }

// ═══════════════════════════════════════════════
//  CONSTANTS
// ═══════════════════════════════════════════════
const T = 4; // tile size in 3D units
const COLS = 36;
const ROWS = 36;
const WW = COLS * T;
const WD = ROWS * T;
const WALK_SPD = 8;
const ENTER_DIST = 6;
const FRIC = 0.97;
const TOTAL_M = 8; // total missions (free play, no timer)

const GLOWS = ["#FF2D78", "#00D4FF", "#B44DFF", "#00FF88", "#FFD700", "#FF6B00"];

// ═══════════════════════════════════════════════
//  WORLD GENERATION
// ═══════════════════════════════════════════════
function isRoadTile(col: number, row: number) {
  return col % 7 < 2 || row % 7 < 2;
}
function isSolid(x: number, z: number): boolean {
  const c = Math.floor(x / T), r = Math.floor(z / T);
  if (c < 0 || c >= COLS || r < 0 || r >= ROWS) return true;
  if (isRoadTile(c, r)) return false;
  if (c % 7 === 2 || c % 7 === 6 || r % 7 === 2 || r % 7 === 6) return false;
  return true; // building
}
function solidBox(x: number, z: number, hw: number, hd: number) {
  return isSolid(x - hw, z - hd) || isSolid(x + hw, z - hd) || isSolid(x - hw, z + hd) || isSolid(x + hw, z + hd);
}

function genBuildings(): BuildingDef[] {
  const bs: BuildingDef[] = [];
  for (let bz = 0; bz < 5; bz++)
    for (let bx = 0; bx < 5; bx++) {
      const h = 8 + ((bx * 7 + bz * 13) % 17);
      bs.push({ x: (bx * 7 + 4) * T, z: (bz * 7 + 4) * T, w: 3 * T - 0.5, d: 3 * T - 0.5, h, glow: GLOWS[(bx * 3 + bz * 5) % 6] });
    }
  return bs;
}

function initCars(): CarData[] {
  return [
    { x: 1 * T, z: 5 * T, angle: 0, speed: 0, maxSpeed: 40, accel: 25, handling: 2.8, color: "#FF2D55", name: "Sport" },
    { x: 11 * T, z: 8 * T, angle: Math.PI / 2, speed: 0, maxSpeed: 30, accel: 20, handling: 3.2, color: "#00D4FF", name: "Sedan" },
    { x: 15 * T, z: 1 * T, angle: 0, speed: 0, maxSpeed: 22, accel: 16, handling: 3.8, color: "#00FF88", name: "Truck" },
    { x: 25 * T, z: 22 * T, angle: Math.PI, speed: 0, maxSpeed: 35, accel: 22, handling: 3.0, color: "#FFD700", name: "Taxi" },
    { x: 8 * T, z: 29 * T, angle: -Math.PI / 2, speed: 0, maxSpeed: 50, accel: 32, handling: 2.5, color: "#B44DFF", name: "Racer" },
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
//  3D GAME SCENE
// ═══════════════════════════════════════════════
interface SceneProps {
  running: boolean;
  keysRef: React.RefObject<Set<string>>;
  touchRef: React.RefObject<{ active: boolean; sx: number; sy: number; cx: number; cy: number }>;
  actionRef: React.RefObject<boolean>;
  hudRef: React.RefObject<{ score: number; missions: number; inCar: number; speed: number; carColor: string; msg: string; msgT: number }>;
  missionsRef: React.RefObject<MissionData[]>;
  onEnd: () => void;
}

const GameScene = React.memo(function GameScene({ running, keysRef, touchRef, actionRef, hudRef, missionsRef, onEnd }: SceneProps) {
  const { camera } = useThree();
  const buildings = useMemo(genBuildings, []);
  const skin = useMemo(() => getSkinDef(getActiveSkin()), []);

  const carsRef = useRef(initCars());
  const plRef = useRef({ x: 1 * T, z: 1 * T, angle: 0, inCar: -1 });
  const midRef = useRef(0);
  const carMeshes = useRef<(THREE.Group | null)[]>([]);
  const plMesh = useRef<THREE.Group>(null);
  const markerMeshes = useRef<(THREE.Mesh | null)[]>([]);
  const coinMeshes = useRef<THREE.Mesh[]>([]);
  const camTarget = useRef(new THREE.Vector3(1 * T, 6, 1 * T - 10));
  const camLook = useRef(new THREE.Vector3(1 * T, 1, 1 * T));
  const camAngle = useRef(0);
  const camLookSmooth = useRef(new THREE.Vector3(1 * T, 1, 1 * T));

  // Init on start
  useEffect(() => {
    if (!running) return;
    carsRef.current = initCars();
    plRef.current = { x: 1 * T, z: 1 * T, angle: 0, inCar: -1 };
    hudRef.current.score = 0;
    hudRef.current.missions = 0;
    midRef.current = 0;
    const ms: MissionData[] = [];
    for (let i = 0; i < 3; i++) ms.push(genMission(midRef.current++));
    missionsRef.current = ms;
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
      if (Math.abs(car.speed) > 0.5) car.angle += mx * car.handling * dt * (car.speed > 0 ? 1 : -1);
      const fx = Math.sin(car.angle), fz = Math.cos(car.angle);
      const nx = car.x + fx * car.speed * dt, nz = car.z + fz * car.speed * dt;
      if (!solidBox(nx, nz, 1.2, 2.2)) { car.x = nx; car.z = nz; } else car.speed *= -0.3;
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
      // ── Walking (camera-relative: movement always matches screen directions) ──
      const len = Math.sqrt(mx * mx + mz * mz);
      if (len > 0.1) {
        // Use CAMERA angle for forward/right so movement matches what user sees on screen
        const ca = camAngle.current;
        const fwX = Math.sin(ca), fwZ = Math.cos(ca);
        const rtX = Math.cos(ca), rtZ = -Math.sin(ca);
        const wmx = mx * rtX + mz * fwX, wmz = mx * rtZ + mz * fwZ;
        const nx = p.x + (wmx / len) * WALK_SPD * dt, nz = p.z + (wmz / len) * WALK_SPD * dt;
        if (!solidBox(nx, nz, 0.3, 0.3)) { p.x = nx; p.z = nz; }
        p.angle = Math.atan2(wmx, wmz);
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
      if (active < 2 && midRef.current < TOTAL_M) ms.push(genMission(midRef.current++));
    }
    // End condition: all missions done
    if (hud.missions >= TOTAL_M) { onEnd(); return; }

    // ── Update 3D objects ──
    for (let i = 0; i < carsRef.current.length; i++) {
      const c = carsRef.current[i], g = carMeshes.current[i];
      if (g) { g.position.set(c.x, 0, c.z); g.rotation.y = c.angle; }
    }
    if (plMesh.current) {
      plMesh.current.visible = p.inCar < 0;
      plMesh.current.position.set(p.x, 0, p.z);
      plMesh.current.rotation.y = p.angle;
    }

    // ── Camera (tight follow, stays behind car/player) ──
    const cd = p.inCar >= 0 ? 16 : 10;
    const ch = p.inCar >= 0 ? 9 : 7;
    // Fast angle tracking - camera stays behind, not floaty sideways
    let angleDiff = p.angle - camAngle.current;
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
    const angleSpeed = p.inCar >= 0 ? 0.15 : 0.2;
    camAngle.current += angleDiff * Math.min(angleSpeed * dt * 60, 1);
    const sa = camAngle.current;
    camTarget.current.set(p.x - Math.sin(sa) * cd, ch, p.z - Math.cos(sa) * cd);
    // Tight position + look-at follow
    const followSpeed = p.inCar >= 0 ? 0.18 : 0.22;
    camLookSmooth.current.lerp(camLook.current.set(p.x, p.inCar >= 0 ? 1.5 : 1.2, p.z), Math.min(followSpeed * dt * 60, 1));
    camera.position.lerp(camTarget.current, Math.min(followSpeed * dt * 60, 1));
    camera.lookAt(camLookSmooth.current);

    // Message timer
    if (hud.msgT > 0) hud.msgT -= dt;
  });

  return (
    <>
      <color attach="background" args={["#0a0e1a"]} />
      <fog attach="fog" args={["#0a0e1a", 50, 150]} />
      <ambientLight intensity={0.9} color="#8899cc" />
      <hemisphereLight args={["#334488", "#1a1a2e", 0.5]} />
      <directionalLight position={[60, 100, 40]} intensity={1.2} color="#ccd4ee" />
      <directionalLight position={[-40, 60, -30]} intensity={0.4} color="#6677aa" />

      {/* Ground (dark area outside roads) */}
      <mesh rotation-x={-Math.PI / 2} position={[WW / 2, -0.05, WD / 2]}>
        <planeGeometry args={[WW + 40, WD + 40]} />
        <meshStandardMaterial color="#1a1a2e" />
      </mesh>

      {/* Road surfaces - lighter asphalt */}
      {Array.from({ length: 5 }, (_, i) => {
        const pos = (i * 7 + 0.5) * T;
        return (
          <group key={`road-${i}`}>
            {/* Vertical road strip */}
            <mesh rotation-x={-Math.PI / 2} position={[pos + T / 2, 0.01, WD / 2]}>
              <planeGeometry args={[T * 2, WD]} />
              <meshStandardMaterial color="#2a2a3e" />
            </mesh>
            {/* Horizontal road strip */}
            <mesh rotation-x={-Math.PI / 2} position={[WW / 2, 0.01, pos + T / 2]}>
              <planeGeometry args={[WW, T * 2]} />
              <meshStandardMaterial color="#2a2a3e" />
            </mesh>
            {/* Center lane marking - vertical (non-transparent for perf) */}
            <mesh rotation-x={-Math.PI / 2} position={[pos + T / 2, 0.02, WD / 2]}>
              <planeGeometry args={[0.12, WD]} />
              <meshStandardMaterial color="#665500" />
            </mesh>
          </group>
        );
      })}

      {/* Buildings */}
      {buildings.map((b, i) => (
        <group key={i} position={[b.x, 0, b.z]}>
          {/* Main building body */}
          <mesh position={[0, b.h / 2, 0]}>
            <boxGeometry args={[b.w, b.h, b.d]} />
            <meshStandardMaterial color="#1e1e32" roughness={0.7} />
          </mesh>
          {/* Neon base band - opaque for performance */}
          <mesh position={[0, 0.6, 0]}>
            <boxGeometry args={[b.w + 0.15, 1.5, b.d + 0.15]} />
            <meshStandardMaterial color={b.glow} emissive={b.glow} emissiveIntensity={0.8} />
          </mesh>
          {/* Neon top edge */}
          <mesh position={[0, b.h + 0.1, 0]}>
            <boxGeometry args={[b.w + 0.25, 0.3, b.d + 0.25]} />
            <meshStandardMaterial color={b.glow} emissive={b.glow} emissiveIntensity={0.6} />
          </mesh>
        </group>
      ))}

      {/* Street lights - reduced to every other intersection for performance */}
      {Array.from({ length: 3 }, (_, iz) =>
        Array.from({ length: 3 }, (_, ix) => {
          const lx = (ix * 14 + 2) * T, lz = (iz * 14 + 2) * T;
          return (
            <group key={`sl-${ix}-${iz}`} position={[lx, 0, lz]}>
              <mesh position={[0, 2.5, 0]}>
                <cylinderGeometry args={[0.08, 0.08, 5, 4]} />
                <meshStandardMaterial color="#333" />
              </mesh>
              <mesh position={[0, 5, 0]}>
                <sphereGeometry args={[0.3, 6, 6]} />
                <meshStandardMaterial color="#FFE088" emissive="#FFE088" emissiveIntensity={2} />
              </mesh>
            </group>
          );
        })
      ).flat()}

      {/* Cars - simplified geometry for performance */}
      {carsRef.current.map((car, i) => (
        <group key={i} ref={el => { carMeshes.current[i] = el; }}>
          {/* Body */}
          <mesh position={[0, 0.55, 0]}>
            <boxGeometry args={[2, 1, 4.2]} />
            <meshStandardMaterial color={car.color} metalness={0.3} roughness={0.5} />
          </mesh>
          {/* Cabin */}
          <mesh position={[0, 1.3, -0.3]}>
            <boxGeometry args={[1.7, 0.7, 2.2]} />
            <meshStandardMaterial color={car.color} metalness={0.3} roughness={0.5} />
          </mesh>
          {/* Headlight bar */}
          <mesh position={[0, 0.55, 2.15]}>
            <boxGeometry args={[1.5, 0.25, 0.1]} />
            <meshStandardMaterial color="#FFFF99" emissive="#FFFF99" emissiveIntensity={1.5} />
          </mesh>
          {/* Tail light bar */}
          <mesh position={[0, 0.55, -2.15]}>
            <boxGeometry args={[1.6, 0.2, 0.1]} />
            <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={0.8} />
          </mesh>
          {/* Wheel axles as boxes instead of 4 cylinders */}
          <mesh position={[0, 0.25, 1.3]}>
            <boxGeometry args={[2.4, 0.5, 0.4]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
          <mesh position={[0, 0.25, -1.3]}>
            <boxGeometry args={[2.4, 0.5, 0.4]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        </group>
      ))}

      {/* Player - simplified */}
      <group ref={plMesh}>
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[0.7, 1.0, 0.5]} />
          <meshStandardMaterial color={skin.bodyColor} emissive={skin.emissive} emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.28, 8, 8]} />
          <meshStandardMaterial color={skin.headColor} emissive={skin.emissive} emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[0.6, 0.3, 0.45]} />
          <meshStandardMaterial color={skin.limbColor} />
        </mesh>
      </group>

      {/* Mission markers - no PointLights for performance */}
      {missionsRef.current?.filter(m => !m.completed).map(m => {
        const mks: React.ReactElement[] = [];
        if (m.type === "delivery") {
          const tx = m.pickedUp ? m.dx : m.px, tz = m.pickedUp ? m.dz : m.pz;
          const col = m.pickedUp ? "#00FF88" : "#FFD700";
          mks.push(
            <group key={`m-${m.id}`} position={[tx, 2.5, tz]}>
              <mesh>
                <boxGeometry args={[1.2, 1.2, 1.2]} />
                <meshStandardMaterial color={col} emissive={col} emissiveIntensity={1.2} />
              </mesh>
            </group>
          );
        } else if (m.type === "parking") {
          mks.push(
            <group key={`m-${m.id}`} position={[m.px, 0.1, m.pz]}>
              <mesh rotation-x={-Math.PI / 2}>
                <ringGeometry args={[2, 2.5, 12]} />
                <meshStandardMaterial color="#00D4FF" emissive="#00D4FF" emissiveIntensity={1.2} side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        } else if (m.type === "coins" && m.coins) {
          m.coins.forEach((c, ci) => {
            mks.push(
              <group key={`c-${m.id}-${ci}`} position={[c.x, 1.5, c.z]}>
                <mesh>
                  <cylinderGeometry args={[0.4, 0.4, 0.15, 8]} />
                  <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={1.2} metalness={0.8} />
                </mesh>
              </group>
            );
          });
        }
        return mks;
      })}
    </>
  );
});

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════
export default function CityDrivePage() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [countdown, setCountdown] = useState(3);
  const [finalScore, setFinalScore] = useState(0);
  const [finalMissions, setFinalMissions] = useState(0);
  const [cardSaved, setCardSaved] = useState(false);
  const [showMilestone, setShowMilestone] = useState(false);
  const [hudTick, setHudTick] = useState(0);
  const joystickKnobRef = useRef<HTMLDivElement>(null);

  const keysRef = useRef(new Set<string>());
  const touchRef = useRef({ active: false, sx: 0, sy: 0, cx: 0, cy: 0 });
  const actionRef = useRef(false);
  const hudRef = useRef({ score: 0, missions: 0, inCar: -1, speed: 0, carColor: "#fff", msg: "", msgT: 0 });
  const missionsRef = useRef<MissionData[]>([]);

  // Countdown
  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) { setGameState("playing"); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, countdown]);

  // HUD refresh
  useEffect(() => {
    if (gameState !== "playing") return;
    const i = setInterval(() => setHudTick(t => t + 1), 500);
    return () => clearInterval(i);
  }, [gameState]);

  // Keyboard
  useEffect(() => {
    const dn = (e: KeyboardEvent) => { keysRef.current.add(e.key); if (e.key === " ") e.preventDefault(); };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", dn);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", dn); window.removeEventListener("keyup", up); };
  }, []);

  // Save card
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
    setFinalScore(hudRef.current.score);
    setFinalMissions(hudRef.current.missions);
    setGameState("result");
  }, []);
  const startGame = () => { setGameState("playing"); };
  const playAgain = () => { setCardSaved(false); setGameState("playing"); };

  const totalForRarity = TOTAL_M * 100;
  const rarity = calculateRarity(Math.min(finalScore, totalForRarity), totalForRarity, 1);
  const hud = hudRef.current;

  return (
    <div className="fixed inset-0 bg-[#0a0e1a] overflow-hidden select-none" style={{ touchAction: "none" }}>
      {/* 3D Canvas (always mounted) */}
      <Canvas camera={{ fov: 65, near: 0.1, far: 160, position: [4, 8, -8] }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
        <GameScene running={gameState === "playing"} keysRef={keysRef} touchRef={touchRef} actionRef={actionRef} hudRef={hudRef} missionsRef={missionsRef} onEnd={endGame} />
      </Canvas>

      {/* HUD overlay */}
      {gameState === "playing" && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Score */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2 border border-orange-500/30">
            <div className="text-orange-400 font-black text-xl">{hud.score} <span className="text-xs text-white/40">PTS</span></div>
            <div className="text-white/50 text-[10px]">{hud.missions}/{TOTAL_M} missions</div>
          </div>

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
          <div className="absolute top-16 left-3 space-y-1.5">
            {missionsRef.current?.filter(m => !m.completed).map(m => (
              <div key={m.id} className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/10 text-[10px]">
                <span className="text-white/80">
                  {m.type === "delivery" ? "📦" : m.type === "parking" ? "🅿️" : "🪙"} {m.label}
                  {m.coinsLeft !== undefined ? ` (${m.coinsLeft})` : ""}
                </span>
              </div>
            ))}
          </div>

          {/* Controls hint + version */}
          <div className="absolute bottom-3 left-3 text-[9px] text-white/20">
            WASD: move • SPACE: enter/exit • v2
          </div>
        </div>
      )}

      {/* Touch controls - visible joystick */}
      {gameState === "playing" && (
        <>
          {/* Joystick area */}
          <div className="absolute left-4 bottom-4 z-20" style={{ width: 140, height: 140 }}
            onTouchStart={e => { e.preventDefault(); const t = e.touches[0]; const rect = e.currentTarget.getBoundingClientRect(); const cx = rect.left + 70, cy = rect.top + 70; touchRef.current = { active: true, sx: cx, sy: cy, cx: t.clientX, cy: t.clientY }; const knob = joystickKnobRef.current; if (knob) { knob.style.transition = 'none'; knob.style.left = `${42 + (t.clientX - cx)}px`; knob.style.top = `${42 + (t.clientY - cy)}px`; } }}
            onTouchMove={e => { e.preventDefault(); const t = e.touches[0]; touchRef.current.cx = t.clientX; touchRef.current.cy = t.clientY; const dx = t.clientX - touchRef.current.sx, dy = t.clientY - touchRef.current.sy; const d = Math.sqrt(dx*dx+dy*dy); const max = 50; const clamp = d > max ? max / d : 1; const knob = joystickKnobRef.current; if (knob) { knob.style.left = `${42 + dx * clamp}px`; knob.style.top = `${42 + dy * clamp}px`; } }}
            onTouchEnd={() => { touchRef.current.active = false; const knob = joystickKnobRef.current; if (knob) { knob.style.transition = 'all 0.15s'; knob.style.left = '42px'; knob.style.top = '42px'; } }}
          >
            {/* Joystick base */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 bg-white/5" />
            {/* Joystick knob - positioned via ref for zero re-renders */}
            <div ref={joystickKnobRef} className="absolute w-14 h-14 rounded-full bg-white/30 border-2 border-white/50 shadow-lg shadow-white/10"
              style={{ left: 42, top: 42 }} />
            {/* Direction arrows */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 text-white/20 text-xs">▲</div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-white/20 text-xs">▼</div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 text-white/20 text-xs">◀</div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 text-white/20 text-xs">▶</div>
          </div>
          {/* Action button (enter/exit car) */}
          <button className="absolute right-4 bottom-4 w-18 h-18 rounded-full bg-orange-500/40 border-2 border-orange-400/70 z-20 flex items-center justify-center text-white font-bold text-base active:bg-orange-500/70 active:scale-95 transition-all"
            style={{ width: 72, height: 72 }}
            onTouchStart={e => { e.preventDefault(); actionRef.current = true; }}>
            <span className="text-2xl">🚗</span>
          </button>
          {/* Brake button */}
          <button className="absolute right-4 bottom-24 w-14 h-14 rounded-full bg-red-500/30 border-2 border-red-400/50 z-20 flex items-center justify-center text-white text-sm active:bg-red-500/60 active:scale-95 transition-all"
            onTouchStart={() => keysRef.current.add("Shift")} onTouchEnd={() => keysRef.current.delete("Shift")}>
            <span className="text-xl">🛑</span>
          </button>
        </>
      )}

      {/* MENU */}
      <AnimatePresence>
        {gameState === "menu" && (
          <motion.div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#0a0e1a]/95"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring" }}>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🏎️</div>
                <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">CITY DRIVE</h1>
                <p className="text-white/50 text-sm mt-2 max-w-xs mx-auto">Explore the neon city, drive cars, complete missions!</p>
              </div>
              <div className="space-y-3 mb-8 px-4 max-w-sm mx-auto">
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
                  <span className="text-lg">🚗</span>
                  <div className="text-xs text-white/70"><b className="text-white">5 cars</b> — different speeds & handling</div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
                  <span className="text-lg">🌃</span>
                  <div className="text-xs text-white/70"><b className="text-white">3D city</b> — free roam, no time limit</div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
                  <span className="text-lg">📦</span>
                  <div className="text-xs text-white/70"><b className="text-white">8 missions</b> — deliver, park, collect</div>
                </div>
              </div>
              <div className="text-center space-y-3 px-4">
                <div className="text-[10px] text-white/30 mb-2">WASD / arrows: move • SPACE: enter/exit car</div>
                <button onClick={startGame} className="w-full max-w-xs py-3 rounded-xl font-black text-lg text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all shadow-lg shadow-orange-500/30 active:scale-95">START</button>
                <Link href="/" className="block text-white/40 text-sm hover:text-white/60 mt-4">← Back</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COUNTDOWN */}
      <AnimatePresence>
        {gameState === "countdown" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div key={countdown} initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
              className="text-7xl font-black text-orange-400">{countdown > 0 ? countdown : "GO!"}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RESULT */}
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

      {/* REWARD */}
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
