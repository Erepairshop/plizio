"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trophy, Lock, Star, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getActive as getClothingActive, getTopDef, getBottomDef, getShoeDef as getShoeItemDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getHatDef, getActiveHat, getTrailDef, getActiveTrail } from "@/lib/accessories";
import { getSpecialCardCount } from "@/lib/specialCards";

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
  const completed = getCompletedLevels();
  if (!completed.includes(level)) {
    completed.push(level);
    localStorage.setItem(LEVEL_KEY, JSON.stringify(completed));
  }
}

const NITRO_MAX = 100;
const NITRO_DRAIN = 35;
const NITRO_BOOST = 1.6;

// ═══════════════════════════════════════════════
//  LEVEL DEFINITIONS (20 levels)
// ═══════════════════════════════════════════════
interface Obstacle {
  x: number; z: number; w: number; d: number; h: number;
  color: string;
  moving?: { axis: "x" | "z"; range: number; speed: number };
}

interface Checkpoint {
  x: number; z: number;
}

interface LevelDef {
  id: number;
  name: string;
  trackWidth: number;
  trackLength: number;
  timeLimit: number; // seconds
  obstacles: Obstacle[];
  checkpoints: Checkpoint[];
  startX: number;
  startZ: number;
  finishX: number;
  finishZ: number;
}

function generateLevel(id: number): LevelDef {
  const difficulty = id; // 1-20
  const trackW = 20 + difficulty * 2; // wider tracks at higher levels
  const trackL = 150 + difficulty * 40; // longer tracks at higher levels
  const timeLimit = 30 + difficulty * 5; // more time for longer tracks
  const obstacleCount = 3 + difficulty * 2; // more obstacles

  const obstacles: Obstacle[] = [];
  const checkpoints: Checkpoint[] = [];

  // Generate checkpoints evenly along the track
  const cpCount = 3 + Math.floor(difficulty / 4);
  for (let i = 1; i <= cpCount; i++) {
    checkpoints.push({ x: 0, z: -(trackL / (cpCount + 1)) * i });
  }

  // Generate obstacles based on difficulty
  for (let i = 0; i < obstacleCount; i++) {
    const zPos = -(trackL / (obstacleCount + 1)) * (i + 1);
    const obstType = (i + difficulty) % 5;

    if (obstType === 0) {
      // Wall from left side
      const wallW = trackW * 0.4 + Math.random() * trackW * 0.2;
      obstacles.push({
        x: -trackW / 2 + wallW / 2, z: zPos, w: wallW, d: 1.5, h: 3,
        color: "#FF3333",
      });
    } else if (obstType === 1) {
      // Wall from right side
      const wallW = trackW * 0.4 + Math.random() * trackW * 0.2;
      obstacles.push({
        x: trackW / 2 - wallW / 2, z: zPos, w: wallW, d: 1.5, h: 3,
        color: "#FF3333",
      });
    } else if (obstType === 2) {
      // Center pillar
      obstacles.push({
        x: (Math.random() - 0.5) * trackW * 0.5, z: zPos, w: 3, d: 3, h: 4,
        color: "#FF6600",
      });
    } else if (obstType === 3 && difficulty >= 5) {
      // Moving wall (from level 5+)
      obstacles.push({
        x: 0, z: zPos, w: trackW * 0.35, d: 1.5, h: 3,
        color: "#FFD700",
        moving: { axis: "x", range: trackW * 0.25, speed: 2 + difficulty * 0.3 },
      });
    } else if (obstType === 4 && difficulty >= 8) {
      // Double moving walls (from level 8+)
      obstacles.push({
        x: -trackW * 0.2, z: zPos, w: trackW * 0.25, d: 1.5, h: 3,
        color: "#FF00FF",
        moving: { axis: "x", range: trackW * 0.15, speed: 3 + difficulty * 0.2 },
      });
      obstacles.push({
        x: trackW * 0.2, z: zPos - 8, w: trackW * 0.25, d: 1.5, h: 3,
        color: "#FF00FF",
        moving: { axis: "x", range: trackW * 0.15, speed: -(3 + difficulty * 0.2) },
      });
    } else {
      // Chicane (narrow gap)
      const gapSize = Math.max(5, trackW * 0.3 - difficulty * 0.3);
      const gapPos = (Math.random() - 0.5) * (trackW - gapSize) * 0.5;
      // Left wall
      const leftW = (trackW / 2 + gapPos - gapSize / 2);
      if (leftW > 1) {
        obstacles.push({
          x: -trackW / 2 + leftW / 2, z: zPos, w: leftW, d: 1.5, h: 3,
          color: "#00AAFF",
        });
      }
      // Right wall
      const rightW = (trackW / 2 - gapPos - gapSize / 2);
      if (rightW > 1) {
        obstacles.push({
          x: trackW / 2 - rightW / 2, z: zPos, w: rightW, d: 1.5, h: 3,
          color: "#00AAFF",
        });
      }
    }

    // Extra random pillars at higher difficulties
    if (difficulty >= 10 && i % 3 === 0) {
      obstacles.push({
        x: (Math.random() - 0.5) * trackW * 0.6, z: zPos + 15, w: 2, d: 2, h: 5,
        color: "#CC0000",
      });
    }

    // Ramps at higher levels
    if (difficulty >= 12 && i % 4 === 0) {
      obstacles.push({
        x: (Math.random() - 0.5) * trackW * 0.3, z: zPos + 25, w: 6, d: 8, h: 1.5,
        color: "#00FF88",
      });
    }
  }

  return {
    id,
    name: `Level ${id}`,
    trackWidth: trackW,
    trackLength: trackL,
    timeLimit,
    obstacles,
    checkpoints,
    startX: 0,
    startZ: 5,
    finishX: 0,
    finishZ: -trackL,
  };
}

// ═══════════════════════════════════════════════
//  3D RACE SCENE
// ═══════════════════════════════════════════════
interface RaceSceneProps {
  level: LevelDef;
  carType: CarType;
  running: boolean;
  onFinish: (time: number, cps: number) => void;
  onFail: () => void;
  hudRef: React.RefObject<{ speed: number; time: number; cp: number; totalCp: number; nitro: number; nitroActive: boolean }>;
  nitroActiveRef: React.RefObject<boolean>;
  keysRef: React.RefObject<Set<string>>;
  touchRef: React.RefObject<{ active: boolean; sx: number; sy: number; cx: number; cy: number }>;
}

const RaceScene = React.memo(function RaceScene({ level, carType, running, onFinish, onFail, hudRef, nitroActiveRef, keysRef, touchRef }: RaceSceneProps) {
  const { camera } = useThree();
  const carRef = useRef({ x: level.startX, z: level.startZ, angle: Math.PI, speed: 0 });
  const carMeshRef = useRef<THREE.Group>(null);
  const timerRef = useRef(level.timeLimit);
  const cpRef = useRef(0);
  const finishedRef = useRef(false);
  const obstacleTimerRef = useRef(0);

  useFrame((_, delta) => {
    if (!running || finishedRef.current) return;
    const dt = Math.min(delta, 0.05);
    const car = carRef.current;
    const keys = keysRef.current;
    const touch = touchRef.current;
    const hud = hudRef.current;

    // Timer
    timerRef.current -= dt;
    if (timerRef.current <= 0) {
      finishedRef.current = true;
      onFail();
      return;
    }
    hud.time = timerRef.current;

    // Input
    let accelInput = 0, steerInput = 0;
    if (keys.has("w") || keys.has("ArrowUp") || keys.has("W")) accelInput = 1;
    if (keys.has("s") || keys.has("ArrowDown") || keys.has("S")) accelInput = -0.5;
    if (keys.has("a") || keys.has("ArrowLeft") || keys.has("A")) steerInput = 1;
    if (keys.has("d") || keys.has("ArrowRight") || keys.has("D")) steerInput = -1;

    // Touch joystick
    if (touch.active) {
      const dx = touch.cx - touch.sx, dy = touch.cy - touch.sy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d > 10) {
        accelInput = Math.max(-0.5, Math.min(1, -dy / 50));
        steerInput = Math.max(-1, Math.min(1, -dx / 50));
      }
    }

    // Nitro
    let speedMult = 1;
    if (carType.canNitro && nitroActiveRef.current && hud.nitro > 0) {
      speedMult = NITRO_BOOST;
      hud.nitro = Math.max(0, hud.nitro - NITRO_DRAIN * dt);
    }

    // Physics
    const maxSpd = carType.maxSpeed * speedMult;
    car.speed += accelInput * carType.accel * dt;
    car.speed *= 0.98; // friction
    car.speed = Math.max(-maxSpd * 0.3, Math.min(maxSpd, car.speed));

    if (Math.abs(car.speed) > 1) {
      car.angle += steerInput * carType.handling * dt * (car.speed > 0 ? 1 : -1);
    }

    const nx = car.x + Math.sin(car.angle) * car.speed * dt;
    const nz = car.z + Math.cos(car.angle) * car.speed * dt;

    // Track boundary collision
    const halfW = level.trackWidth / 2;
    let blocked = false;
    if (nx < -halfW + 1.5 || nx > halfW - 1.5) {
      blocked = true;
      car.speed *= -0.3;
    }

    // Obstacle collision
    obstacleTimerRef.current += dt;
    for (const obs of level.obstacles) {
      let ox = obs.x;
      if (obs.moving) {
        const t = obstacleTimerRef.current;
        if (obs.moving.axis === "x") ox += Math.sin(t * obs.moving.speed) * obs.moving.range;
      }
      const hw = obs.w / 2 + 1.2, hd = obs.d / 2 + 1.2;
      if (Math.abs(nx - ox) < hw && Math.abs(nz - obs.z) < hd) {
        blocked = true;
        car.speed *= -0.3;
        break;
      }
    }

    if (!blocked) {
      car.x = Math.max(-halfW + 1.5, Math.min(halfW - 1.5, nx));
      car.z = nz;
    }

    hud.speed = Math.abs(car.speed);
    hud.nitroActive = carType.canNitro && nitroActiveRef.current && hud.nitro > 0;

    // Checkpoints
    const cp = level.checkpoints[cpRef.current];
    if (cp && Math.abs(car.x - cp.x) < halfW && Math.abs(car.z - cp.z) < 8) {
      cpRef.current++;
      hud.cp = cpRef.current;
    }
    hud.totalCp = level.checkpoints.length;

    // Finish line
    if (car.z <= level.finishZ + 5) {
      finishedRef.current = true;
      const elapsed = level.timeLimit - timerRef.current;
      onFinish(elapsed, cpRef.current);
      return;
    }

    // Update car mesh
    if (carMeshRef.current) {
      carMeshRef.current.position.set(car.x, 0.4, car.z);
      carMeshRef.current.rotation.y = car.angle;
    }

    // Camera follow
    const camDist = 12;
    const camH = 6;
    const targetX = car.x - Math.sin(car.angle) * camDist;
    const targetZ = car.z - Math.cos(car.angle) * camDist;
    camera.position.lerp(new THREE.Vector3(targetX, camH, targetZ), 0.1);
    camera.lookAt(car.x, 1, car.z);
  });

  return (
    <>
      <color attach="background" args={["#0a0e1a"]} />
      <fog attach="fog" args={["#0a0e1a", 80, 250]} />
      <ambientLight intensity={1.2} color="#8899cc" />
      <directionalLight position={[30, 50, 20]} intensity={2} color="#eef0ff" />
      <hemisphereLight args={["#6688cc", "#334466", 0.8]} />

      {/* Track ground */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.01, -level.trackLength / 2]}>
        <planeGeometry args={[level.trackWidth, level.trackLength + 40]} />
        <meshStandardMaterial color="#3a3a55" />
      </mesh>

      {/* Track walls (transparent guide lines) */}
      <mesh position={[-level.trackWidth / 2, 0.5, -level.trackLength / 2]}>
        <boxGeometry args={[0.3, 1, level.trackLength + 40]} />
        <meshStandardMaterial color="#4444FF" emissive="#4444FF" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>
      <mesh position={[level.trackWidth / 2, 0.5, -level.trackLength / 2]}>
        <boxGeometry args={[0.3, 1, level.trackLength + 40]} />
        <meshStandardMaterial color="#4444FF" emissive="#4444FF" emissiveIntensity={0.5} transparent opacity={0.6} />
      </mesh>

      {/* Track center line (dashed) */}
      {Array.from({ length: Math.floor(level.trackLength / 10) }, (_, i) => (
        <mesh key={`cl-${i}`} rotation-x={-Math.PI / 2} position={[0, 0.02, -i * 10 - 5]}>
          <planeGeometry args={[0.15, 4]} />
          <meshStandardMaterial color="#666688" emissive="#666688" emissiveIntensity={0.3} />
        </mesh>
      ))}

      {/* Start line */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.03, level.startZ]}>
        <planeGeometry args={[level.trackWidth - 1, 1]} />
        <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={1} />
      </mesh>

      {/* Finish line */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.03, level.finishZ]}>
        <planeGeometry args={[level.trackWidth - 1, 1.5]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} />
      </mesh>
      <pointLight position={[0, 3, level.finishZ]} color="#FFD700" intensity={3} distance={15} />

      {/* Checkpoints */}
      {level.checkpoints.map((cp, i) => {
        const passed = i < cpRef.current;
        return (
          <group key={`cp-${i}`}>
            <mesh rotation-x={-Math.PI / 2} position={[0, 0.02, cp.z]}>
              <planeGeometry args={[level.trackWidth - 1, 0.5]} />
              <meshStandardMaterial color={passed ? "#333344" : "#00FFAA"} emissive={passed ? "#000" : "#00FFAA"} emissiveIntensity={passed ? 0 : 0.8} />
            </mesh>
          </group>
        );
      })}

      {/* Obstacles */}
      {level.obstacles.map((obs, i) => (
        <ObstacleMesh key={`obs-${i}`} obs={obs} timer={obstacleTimerRef} />
      ))}

      {/* Car */}
      <group ref={carMeshRef} position={[level.startX, 0.4, level.startZ]}>
        {/* Body */}
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[1.8, 0.6, 3.5]} />
          <meshStandardMaterial color={carType.color} emissive={carType.color} emissiveIntensity={0.2} />
        </mesh>
        {/* Roof */}
        <mesh position={[0, 0.7, -0.3]}>
          <boxGeometry args={[1.5, 0.4, 1.8]} />
          <meshStandardMaterial color={carType.color} emissive={carType.color} emissiveIntensity={0.15} />
        </mesh>
        {/* Windshield */}
        <mesh position={[0, 0.6, 0.8]}>
          <boxGeometry args={[1.4, 0.35, 0.05]} />
          <meshStandardMaterial color="#1a1a2e" transparent opacity={0.7} />
        </mesh>
        {/* Headlights */}
        <mesh position={[0.6, 0.3, 1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} /></mesh>
        <mesh position={[-0.6, 0.3, 1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={2} /></mesh>
        {/* Taillights */}
        <mesh position={[0.6, 0.3, -1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1} /></mesh>
        <mesh position={[-0.6, 0.3, -1.75]}><boxGeometry args={[0.3, 0.15, 0.05]} /><meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={1} /></mesh>
        {/* Wheels */}
        {[[-0.95, 0, 1], [0.95, 0, 1], [-0.95, 0, -1], [0.95, 0, -1]].map(([wx, wy, wz], wi) => (
          <mesh key={wi} position={[wx, wy, wz]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.3, 0.3, 0.2, 8]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        ))}
        {/* Headlight beams */}
        <spotLight position={[0, 0.5, 2]} target-position={[0, 0, 10]} angle={0.5} intensity={2} distance={20} color="#FFE4B5" />
      </group>

      {/* Side scenery - barriers and lights */}
      {Array.from({ length: Math.floor(level.trackLength / 20) }, (_, i) => (
        <group key={`scenery-${i}`}>
          {/* Left light post */}
          <mesh position={[-level.trackWidth / 2 - 2, 2.5, -i * 20 - 10]}>
            <cylinderGeometry args={[0.1, 0.1, 5, 4]} />
            <meshStandardMaterial color="#333344" />
          </mesh>
          <pointLight position={[-level.trackWidth / 2 - 2, 5, -i * 20 - 10]} color="#8888FF" intensity={1} distance={15} />
          {/* Right light post */}
          <mesh position={[level.trackWidth / 2 + 2, 2.5, -i * 20 - 10]}>
            <cylinderGeometry args={[0.1, 0.1, 5, 4]} />
            <meshStandardMaterial color="#333344" />
          </mesh>
          <pointLight position={[level.trackWidth / 2 + 2, 5, -i * 20 - 10]} color="#8888FF" intensity={1} distance={15} />
        </group>
      ))}

      {/* Ground outside track */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.05, -level.trackLength / 2]}>
        <planeGeometry args={[200, level.trackLength + 100]} />
        <meshStandardMaterial color="#1a1a30" />
      </mesh>
    </>
  );
});

// Obstacle mesh with optional movement
function ObstacleMesh({ obs, timer }: { obs: Obstacle; timer: React.RefObject<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current || !obs.moving) return;
    const t = timer.current;
    if (obs.moving.axis === "x") {
      meshRef.current.position.x = obs.x + Math.sin(t * obs.moving.speed) * obs.moving.range;
    }
  });

  return (
    <mesh ref={meshRef} position={[obs.x, obs.h / 2, obs.z]}>
      <boxGeometry args={[obs.w, obs.h, obs.d]} />
      <meshStandardMaterial
        color={obs.color}
        emissive={obs.color}
        emissiveIntensity={obs.moving ? 0.5 : 0.2}
        transparent={!!obs.moving}
        opacity={obs.moving ? 0.85 : 1}
      />
    </mesh>
  );
}

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════
export default function RacetrackPage() {
  const router = useRouter();
  const [gameState, setGameState] = useState<GameState>("menu");
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [countdown, setCountdown] = useState(3);
  const [finishTime, setFinishTime] = useState(0);
  const [finishCPs, setFinishCPs] = useState(0);
  const [cardSaved, setCardSaved] = useState(false);
  const [showMilestone, setShowMilestone] = useState(false);
  const [hudTick, setHudTick] = useState(0);
  const joystickKnobRef = useRef<HTMLDivElement>(null);

  const keysRef = useRef(new Set<string>());
  const touchRef = useRef({ active: false, sx: 0, sy: 0, cx: 0, cy: 0 });
  const nitroActiveRef = useRef(false);
  const hudRef = useRef({ speed: 0, time: 0, cp: 0, totalCp: 0, nitro: NITRO_MAX, nitroActive: false });

  const carType = useMemo(() => getCarType(getActiveCar()), []);
  const level = useMemo(() => generateLevel(selectedLevel), [selectedLevel]);
  const completedLevels = typeof window !== "undefined" ? getCompletedLevels() : [];

  // HUD refresh
  useEffect(() => {
    if (gameState !== "playing") return;
    const i = setInterval(() => setHudTick(t => t + 1), 100);
    return () => clearInterval(i);
  }, [gameState]);

  // Countdown
  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) { setGameState("playing"); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, countdown]);

  // Keyboard
  useEffect(() => {
    const dn = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (e.key === " ") e.preventDefault();
      if ((e.key === "e" || e.key === "E" || e.key === "Shift") && carType.canNitro) {
        nitroActiveRef.current = !nitroActiveRef.current;
      }
    };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", dn);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", dn); window.removeEventListener("keyup", up); };
  }, [carType]);

  // Card save
  useEffect(() => {
    if (gameState !== "reward" || cardSaved) return;
    const totalTime = level.timeLimit;
    const timeScore = Math.max(0, totalTime - finishTime);
    const cpBonus = finishCPs * 20;
    const score = Math.round(timeScore * 10 + cpBonus + selectedLevel * 50);
    const total = Math.round(totalTime * 10 + level.checkpoints.length * 20 + selectedLevel * 50);
    const rarity = calculateRarity(Math.min(score, total), total, 1);
    saveCard({
      id: generateCardId(),
      game: "racetrack",
      theme: `level-${selectedLevel}`,
      rarity,
      score,
      total,
      date: new Date().toISOString(),
    });
    incrementTotalGames();
    updateStats({});
    markLevelComplete(selectedLevel);
    setCardSaved(true);
  }, [gameState, cardSaved, finishTime, finishCPs, selectedLevel, level]);

  const startLevel = (lvl: number) => {
    setSelectedLevel(lvl);
    setCountdown(3);
    setCardSaved(false);
    hudRef.current = { speed: 0, time: level.timeLimit, cp: 0, totalCp: 0, nitro: NITRO_MAX, nitroActive: false };
    nitroActiveRef.current = false;
    setGameState("countdown");
  };

  const handleFinish = useCallback((time: number, cps: number) => {
    setFinishTime(time);
    setFinishCPs(cps);
    setGameState("complete");
  }, []);

  const handleFail = useCallback(() => {
    setGameState("failed");
  }, []);

  const totalScore = useMemo(() => {
    const totalTime = level.timeLimit;
    const timeScore = Math.max(0, totalTime - finishTime);
    return Math.round(timeScore * 10 + finishCPs * 20 + selectedLevel * 50);
  }, [finishTime, finishCPs, selectedLevel, level]);

  const totalForRarity = useMemo(() => {
    return Math.round(level.timeLimit * 10 + level.checkpoints.length * 20 + selectedLevel * 50);
  }, [level, selectedLevel]);

  const rarity = useMemo(() => calculateRarity(Math.min(totalScore, totalForRarity), totalForRarity, 1), [totalScore, totalForRarity]);

  const hud = hudRef.current;

  return (
    <div className="fixed inset-0 bg-[#0a0e1a] overflow-hidden select-none" style={{ touchAction: "none" }}>

      {/* ═══ LEVEL SELECT MENU ═══ */}
      {gameState === "menu" && (
        <div className="absolute inset-0 z-20 flex flex-col items-center overflow-y-auto pb-8">
          <div className="w-full max-w-md px-4 pt-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <Link href="/citydrive">
                <motion.div className="bg-white/5 border border-white/8 p-2.5 rounded-xl cursor-pointer"
                  whileTap={{ scale: 0.9 }}>
                  <ArrowLeft size={18} className="text-white/60" />
                </motion.div>
              </Link>
              <h1 className="text-white font-black text-xl tracking-wide flex items-center gap-2">
                <Trophy size={20} className="text-[#BB44FF]" /> RACE TRACK
              </h1>
              <div className="text-white/30 text-xs font-bold">
                {carType.name}
              </div>
            </div>

            {/* Car info */}
            <div className="bg-white/[0.03] border border-[#BB44FF]/20 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${carType.color}20` }}>
                  <div className="text-lg">🏎️</div>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{carType.name}</div>
                  <div className="text-white/30 text-[10px]">
                    {Math.round(carType.maxSpeed * 3.6)} km/h
                    {carType.canDrift ? " | Drift" : ""}
                    {carType.canNitro ? " | Nitro" : ""}
                  </div>
                </div>
              </div>
            </div>

            {/* Level grid */}
            <div className="grid grid-cols-4 gap-2.5">
              {Array.from({ length: 20 }, (_, i) => {
                const lvl = i + 1;
                const completed = completedLevels.includes(lvl);
                const unlocked = lvl === 1 || completedLevels.includes(lvl - 1);
                return (
                  <motion.button
                    key={lvl}
                    onClick={() => unlocked && startLevel(lvl)}
                    className={`relative aspect-square rounded-2xl border flex flex-col items-center justify-center gap-1 transition-all ${
                      completed ? "bg-[#BB44FF]/10 border-[#BB44FF]/30" :
                      unlocked ? "bg-white/[0.04] border-white/10" :
                      "bg-white/[0.02] border-white/5 opacity-40"
                    }`}
                    whileTap={unlocked ? { scale: 0.95 } : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: unlocked ? 1 : 0.4, scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                  >
                    {unlocked ? (
                      <>
                        <span className="text-white font-black text-lg">{lvl}</span>
                        {completed && <Check size={12} className="text-[#BB44FF]" />}
                      </>
                    ) : (
                      <Lock size={16} className="text-white/20" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Progress */}
            <div className="mt-4 bg-white/[0.03] border border-white/5 rounded-xl p-3">
              <div className="flex items-center justify-between">
                <span className="text-white/30 text-[10px] font-bold">PROGRESS</span>
                <span className="text-white/50 text-xs font-black">{completedLevels.length}/20</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full mt-2">
                <div className="h-full rounded-full bg-[#BB44FF]/60 transition-all" style={{ width: `${(completedLevels.length / 20) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ GAME CANVAS ═══ */}
      {(gameState === "playing" || gameState === "countdown") && (
        <>
          <Canvas camera={{ fov: 65, near: 0.1, far: 300, position: [0, 6, 15] }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
            <RaceScene level={level} carType={carType} running={gameState === "playing"} onFinish={handleFinish} onFail={handleFail} hudRef={hudRef} nitroActiveRef={nitroActiveRef} keysRef={keysRef} touchRef={touchRef} />
          </Canvas>

          {/* HUD overlay */}
          {gameState === "playing" && (
            <div className="absolute inset-0 z-10 pointer-events-none">
              {/* Timer + Level */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm rounded-xl px-5 py-2 border border-[#BB44FF]/30">
                <div className="text-[#BB44FF] font-black text-[10px] text-center">LEVEL {selectedLevel}</div>
                <div className="text-white font-black text-2xl text-center">{Math.ceil(hud.time)}s</div>
                <div className="text-white/40 text-[10px] text-center">CP {hud.cp}/{hud.totalCp}</div>
              </div>

              {/* Speed */}
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-xl px-5 py-2 border border-white/10">
                <div className="text-white font-black text-lg text-center">{Math.round(hud.speed * 3.6)} <span className="text-xs text-white/40">km/h</span></div>
                {carType.canNitro && (
                  <div className="flex items-center gap-1.5 mt-1">
                    <button onClick={() => { nitroActiveRef.current = !nitroActiveRef.current; }} className="text-[10px] font-black px-2 py-1 rounded-md pointer-events-auto transition-all cursor-pointer border"
                      style={{ color: hud.nitroActive ? "#FF6600" : "#00CCFF", backgroundColor: hud.nitroActive ? "rgba(255,102,0,0.3)" : "rgba(0,200,255,0.1)", borderColor: hud.nitroActive ? "rgba(255,102,0,0.5)" : "rgba(0,200,255,0.3)" }}>NOS</button>
                    <div className="w-20 h-2 bg-white/10 rounded-full">
                      <div className="h-full rounded-full transition-all" style={{ width: `${hud.nitro}%`, backgroundColor: hud.nitroActive ? "#FF6600" : "#00CCFF" }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Back button */}
              <button onClick={() => setGameState("menu")} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center pointer-events-auto z-30">
                <span className="text-white/70 font-bold text-lg">✕</span>
              </button>

              <div className="absolute bottom-3 left-3 text-[9px] text-white/20">
                WASD: drive{carType.canNitro ? " | E: nitro" : ""}
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

      {/* ═══ COUNTDOWN ═══ */}
      <AnimatePresence>
        {gameState === "countdown" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div key={countdown} initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
              className="text-7xl font-black text-[#BB44FF]">{countdown > 0 ? countdown : "GO!"}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ LEVEL COMPLETE ═══ */}
      <AnimatePresence>
        {gameState === "complete" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="w-full max-w-sm bg-[#0d1117] border border-[#BB44FF]/20 rounded-3xl p-6 text-center"
              initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring" }}>
              <div className="text-4xl mb-2">🏁</div>
              <h2 className="text-white font-black text-2xl">Level {selectedLevel} Complete!</h2>
              <div className="mt-3 space-y-1">
                <div className="text-white/50 text-sm">Time: <span className="text-white font-bold">{finishTime.toFixed(1)}s</span></div>
                <div className="text-white/50 text-sm">Checkpoints: <span className="text-white font-bold">{finishCPs}/{level.checkpoints.length}</span></div>
                <div className="text-[#BB44FF] font-black text-xl mt-2">{totalScore} pts</div>
              </div>
              <div className="flex gap-3 mt-5">
                <button onClick={() => setGameState("reward")}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#BB44FF] to-[#8800FF] hover:opacity-90 transition-all">
                  View Card
                </button>
                <button onClick={() => setGameState("menu")}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white/60 bg-white/5 border border-white/10">
                  Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ LEVEL FAILED ═══ */}
      <AnimatePresence>
        {gameState === "failed" && (
          <motion.div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.div className="w-full max-w-sm bg-[#0d1117] border border-red-500/20 rounded-3xl p-6 text-center"
              initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring" }}>
              <div className="text-4xl mb-2">💥</div>
              <h2 className="text-red-400 font-black text-2xl">Time&apos;s Up!</h2>
              <p className="text-white/40 text-sm mt-2">You ran out of time on Level {selectedLevel}</p>
              <div className="flex gap-3 mt-5">
                <button onClick={() => startLevel(selectedLevel)}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-500 to-orange-500">
                  Retry
                </button>
                <button onClick={() => setGameState("menu")}
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white/60 bg-white/5 border border-white/10">
                  Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ REWARD REVEAL ═══ */}
      {gameState === "reward" && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0e1a]/95 p-4">
          <RewardReveal rarity={rarity} game="racetrack" score={totalScore} total={totalForRarity}
            onDone={() => { setGameState("menu"); setShowMilestone(true); }} />
        </div>
      )}

      {showMilestone && <MilestonePopup />}
    </div>
  );
}
