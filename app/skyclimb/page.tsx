"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Trophy, ArrowUp, RotateCcw, Home } from "lucide-react";
import RewardReveal from "@/components/RewardReveal";
import { saveCard, generateCardId, type CardRarity } from "@/lib/cards";

// ─── TYPES ──────────────────────────────────────────
interface Platform {
  x: number;
  y: number;
  w: number;
  type: "normal" | "moving" | "crumble" | "small";
  moveDir?: number;
  moveRange?: number;
  moveSpeed?: number;
  origX?: number;
  crumbleTimer?: number;
  touched?: boolean;
}

type GameState = "menu" | "playing" | "dead" | "level-complete" | "reward";

// ─── CONSTANTS ──────────────────────────────────────
const WORLD_W = 10; // world units width
const PLAYER_SIZE = 0.35;
const GRAVITY = 0.018;
const JUMP_FORCE = 0.38;
const MOVE_SPEED = 0.18;
const PLAT_H = 0.15;
const LEVEL_HEIGHT = 120;

const ZONE_COLORS = [
  { plat: "#00D4FF", bg: [0.04, 0.04, 0.1], accent: "#00D4FF" },
  { plat: "#00FF88", bg: [0.04, 0.06, 0.15], accent: "#00FF88" },
  { plat: "#B44DFF", bg: [0.02, 0.02, 0.08], accent: "#B44DFF" },
  { plat: "#FF2D78", bg: [0.0, 0.0, 0.03], accent: "#FF2D78" },
  { plat: "#FFD700", bg: [0.0, 0.0, 0.0], accent: "#FFD700" },
];

// ─── LEVEL GENERATION ───────────────────────────────
function generateLevel(level: number): { platforms: Platform[]; goalY: number } {
  const platforms: Platform[] = [];
  const difficulty = Math.min(level, 10);

  // Starting platform (wide)
  platforms.push({ x: WORLD_W / 2, y: 0, w: 3, type: "normal" });

  const platformCount = 35 + level * 5;
  const verticalSpacing = LEVEL_HEIGHT / platformCount;

  for (let i = 1; i <= platformCount; i++) {
    const y = i * verticalSpacing;
    const x = 0.8 + Math.random() * (WORLD_W - 1.6);

    const roll = Math.random();
    let type: Platform["type"] = "normal";
    let w = 2.2 - difficulty * 0.08;

    if (difficulty >= 2 && roll < 0.1 * difficulty) {
      type = "moving";
    } else if (difficulty >= 4 && roll < 0.05 * difficulty) {
      type = "crumble";
    } else if (difficulty >= 3 && roll < 0.08 * difficulty) {
      type = "small";
      w = 1.0;
    }

    w = Math.max(w, 0.9);

    const plat: Platform = { x, y, w, type };

    if (type === "moving") {
      plat.origX = x;
      plat.moveDir = Math.random() > 0.5 ? 1 : -1;
      plat.moveRange = 1.0 + Math.random() * 1.5;
      plat.moveSpeed = 0.8 + difficulty * 0.2;
    }

    if (type === "crumble") {
      plat.crumbleTimer = 0;
      plat.touched = false;
    }

    platforms.push(plat);
  }

  // Goal platform
  const goalY = (platformCount + 1) * verticalSpacing;
  platforms.push({ x: WORLD_W / 2, y: goalY, w: 2.5, type: "normal" });

  return { platforms, goalY };
}

// ─── GAME STATE REF ─────────────────────────────────
interface GameData {
  playerX: number;
  playerY: number;
  velX: number;
  velY: number;
  onGround: boolean;
  platforms: Platform[];
  goalY: number;
  cameraY: number;
  moveLeft: boolean;
  moveRight: boolean;
  dead: boolean;
  levelComplete: boolean;
  level: number;
  time: number;
  facingRight: boolean;
  walkCycle: number;
}

function createGameData(): GameData {
  return {
    playerX: WORLD_W / 2,
    playerY: 0.8,
    velX: 0,
    velY: 0,
    onGround: false,
    platforms: [],
    goalY: 0,
    cameraY: 0,
    moveLeft: false,
    moveRight: false,
    dead: false,
    levelComplete: false,
    level: 1,
    time: 0,
    facingRight: true,
    walkCycle: 0,
  };
}

// ─── 3D CHARACTER ───────────────────────────────────
function Character({ gameRef }: { gameRef: React.RefObject<GameData> }) {
  const groupRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Mesh>(null);
  const rightLegRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Group>(null);

  const bodyMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#ffffff",
    emissive: "#00D4FF",
    emissiveIntensity: 0.3,
  }), []);

  const headMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#ffffff",
    emissive: "#00D4FF",
    emissiveIntensity: 0.4,
  }), []);

  const limbMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#cccccc",
    emissive: "#0088AA",
    emissiveIntensity: 0.2,
  }), []);

  const eyeMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#0A0A1A",
    emissive: "#000000",
    emissiveIntensity: 0,
  }), []);

  useFrame((_, delta) => {
    if (!groupRef.current || !gameRef.current) return;
    const g = gameRef.current;

    // Position
    groupRef.current.position.set(g.playerX, g.playerY + PLAYER_SIZE, 0);

    // Facing direction
    if (bodyRef.current) {
      const targetRotY = g.facingRight ? 0 : Math.PI;
      bodyRef.current.rotation.y += (targetRotY - bodyRef.current.rotation.y) * 0.15;
    }

    // Walk animation
    const isMoving = Math.abs(g.velX) > 0.01;
    const isAirborne = !g.onGround;

    if (isMoving && !isAirborne) {
      g.walkCycle += delta * 12;
    }

    const legSwing = isAirborne ? 0.3 : (isMoving ? Math.sin(g.walkCycle) * 0.6 : 0);
    const armSwing = isAirborne ? -0.5 : (isMoving ? Math.sin(g.walkCycle + Math.PI) * 0.4 : 0);

    // Jump squash/stretch
    let scaleY = 1;
    let scaleXZ = 1;
    if (isAirborne) {
      if (g.velY > 0.1) {
        // Going up - stretch
        scaleY = 1.15;
        scaleXZ = 0.9;
      } else if (g.velY < -0.05) {
        // Falling - squash slightly
        scaleY = 0.9;
        scaleXZ = 1.1;
      }
    }

    if (groupRef.current) {
      groupRef.current.scale.set(scaleXZ, scaleY, scaleXZ);
    }

    // Animate limbs
    if (leftLegRef.current) leftLegRef.current.rotation.x = legSwing;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -legSwing;
    if (leftArmRef.current) leftArmRef.current.rotation.x = armSwing;
    if (rightArmRef.current) rightArmRef.current.rotation.x = -armSwing;

    // Update emissive color based on zone
    const zoneIdx = Math.min(Math.floor(g.playerY / (LEVEL_HEIGHT / 5)), 4);
    const zoneColor = ZONE_COLORS[Math.max(0, zoneIdx)].accent;
    const c = new THREE.Color(zoneColor);
    bodyMat.emissive = c;
    headMat.emissive = c;
    limbMat.emissive = c.clone().multiplyScalar(0.6);
  });

  return (
    <group ref={groupRef}>
      <group ref={bodyRef}>
        {/* Head */}
        <mesh position={[0, 0.42, 0]} material={headMat}>
          <boxGeometry args={[0.28, 0.28, 0.28]} />
        </mesh>

        {/* Eyes */}
        <mesh position={[0.06, 0.44, 0.14]} material={eyeMat}>
          <boxGeometry args={[0.06, 0.06, 0.02]} />
        </mesh>
        <mesh position={[-0.06, 0.44, 0.14]} material={eyeMat}>
          <boxGeometry args={[0.06, 0.06, 0.02]} />
        </mesh>

        {/* Body */}
        <mesh position={[0, 0.15, 0]} material={bodyMat}>
          <boxGeometry args={[0.3, 0.35, 0.2]} />
        </mesh>

        {/* Left Arm */}
        <mesh ref={leftArmRef} position={[0.22, 0.2, 0]} material={limbMat}>
          <boxGeometry args={[0.1, 0.32, 0.1]} />
        </mesh>

        {/* Right Arm */}
        <mesh ref={rightArmRef} position={[-0.22, 0.2, 0]} material={limbMat}>
          <boxGeometry args={[0.1, 0.32, 0.1]} />
        </mesh>

        {/* Left Leg */}
        <mesh ref={leftLegRef} position={[0.08, -0.12, 0]} material={limbMat}>
          <boxGeometry args={[0.12, 0.3, 0.12]} />
        </mesh>

        {/* Right Leg */}
        <mesh ref={rightLegRef} position={[-0.08, -0.12, 0]} material={limbMat}>
          <boxGeometry args={[0.12, 0.3, 0.12]} />
        </mesh>
      </group>
    </group>
  );
}

// ─── 3D PLATFORM ────────────────────────────────────
function PlatformMesh({ plat, gameRef }: { plat: Platform; gameRef: React.RefObject<GameData> }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const color = useMemo(() => {
    if (plat.type === "moving") return "#00FF88";
    if (plat.type === "crumble") return "#FF2D78";
    if (plat.type === "small") return "#FFD700";
    return "#00D4FF";
  }, [plat.type]);

  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    color,
    emissive: color,
    emissiveIntensity: 0.4,
    transparent: true,
    opacity: 1,
  }), [color]);

  useFrame(() => {
    if (!meshRef.current || !gameRef.current) return;
    const g = gameRef.current;

    // Moving platform
    if (plat.type === "moving" && plat.origX !== undefined) {
      plat.x = plat.origX + Math.sin(g.time * 0.03 * (plat.moveSpeed || 1)) * (plat.moveRange || 1);
    }

    // Crumble
    if (plat.type === "crumble" && plat.touched) {
      const t = plat.crumbleTimer || 0;
      mat.opacity = Math.max(0, 1 - t / 30);
      if (t > 30) {
        meshRef.current.visible = false;
        return;
      }
    }

    meshRef.current.position.set(plat.x, plat.y, 0);
    meshRef.current.visible = true;
  });

  return (
    <mesh ref={meshRef} position={[plat.x, plat.y, 0]} material={mat}>
      <boxGeometry args={[plat.w, PLAT_H, 0.8]} />
    </mesh>
  );
}

// ─── GOAL CARD (3D) ─────────────────────────────────
function GoalCard({ goalY, gameRef }: { goalY: number; gameRef: React.RefObject<GameData> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (!meshRef.current || !gameRef.current) return;
    const t = gameRef.current.time;
    meshRef.current.rotation.y = t * 0.02;
    meshRef.current.position.y = goalY + 1.2 + Math.sin(t * 0.04) * 0.15;
    if (glowRef.current) {
      glowRef.current.intensity = 2 + Math.sin(t * 0.05) * 0.8;
      glowRef.current.position.copy(meshRef.current.position);
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[WORLD_W / 2, goalY + 1.2, 0]}>
        <boxGeometry args={[0.6, 0.8, 0.05]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} />
      </mesh>
      <pointLight ref={glowRef} color="#FFD700" intensity={2} distance={5} position={[WORLD_W / 2, goalY + 1.2, 0]} />
    </>
  );
}

// ─── STARS ──────────────────────────────────────────
function Stars() {
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = Math.random() * LEVEL_HEIGHT * 1.5;
      arr[i * 3 + 2] = -5 - Math.random() * 15;
    }
    return arr;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.08} transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

// ─── GAME LOOP + CAMERA ─────────────────────────────
function GameLoop({
  gameRef,
  onDie,
  onGoal,
}: {
  gameRef: React.RefObject<GameData>;
  onDie: () => void;
  onGoal: () => void;
}) {
  const { camera } = useThree();

  useFrame((_, delta) => {
    if (!gameRef.current) return;
    const g = gameRef.current;
    if (g.dead || g.levelComplete) return;

    const dt = Math.min(delta * 60, 3);
    g.time += dt;

    // Input
    if (g.moveLeft) {
      g.velX = -MOVE_SPEED;
      g.facingRight = false;
    } else if (g.moveRight) {
      g.velX = MOVE_SPEED;
      g.facingRight = true;
    } else {
      g.velX *= 0.85;
    }

    // Physics
    g.velY -= GRAVITY * dt;
    g.playerX += g.velX * dt;
    g.playerY += g.velY * dt;

    // Wrap horizontal
    if (g.playerX < -0.5) g.playerX = WORLD_W + 0.5;
    if (g.playerX > WORLD_W + 0.5) g.playerX = -0.5;

    // Platform collision (only when falling)
    g.onGround = false;
    for (const plat of g.platforms) {
      // Update moving
      if (plat.type === "moving" && plat.origX !== undefined) {
        plat.x = plat.origX + Math.sin(g.time * 0.03 * (plat.moveSpeed || 1)) * (plat.moveRange || 1);
      }

      // Update crumble
      if (plat.type === "crumble" && plat.touched) {
        plat.crumbleTimer = (plat.crumbleTimer || 0) + dt;
        if ((plat.crumbleTimer || 0) > 30) continue;
      }

      // Collision check (when falling)
      if (g.velY <= 0) {
        const halfW = plat.w / 2;
        const withinX = g.playerX > plat.x - halfW && g.playerX < plat.x + halfW;
        const feetY = g.playerY;
        const platTop = plat.y + PLAT_H / 2;
        const withinY = feetY >= platTop - 0.15 && feetY <= platTop + 0.1;

        if (withinX && withinY) {
          g.playerY = platTop + 0.01;
          g.velY = JUMP_FORCE;
          g.onGround = true;

          if (plat.type === "crumble") {
            plat.touched = true;
          }
        }
      }
    }

    // Camera follow (smooth)
    const targetCamY = g.playerY + 2;
    g.cameraY += (targetCamY - g.cameraY) * 0.05 * dt;
    camera.position.set(WORLD_W / 2, g.cameraY, 12);
    camera.lookAt(WORLD_W / 2, g.cameraY - 1, 0);

    // Death check (fell too far below camera)
    if (g.playerY < g.cameraY - 8) {
      g.dead = true;
      onDie();
      return;
    }

    // Goal check
    if (g.playerY >= g.goalY - 0.5) {
      g.levelComplete = true;
      onGoal();
    }
  });

  return null;
}

// ─── 3D SCENE ───────────────────────────────────────
function Scene3D({
  gameRef,
  onDie,
  onGoal,
}: {
  gameRef: React.RefObject<GameData>;
  onDie: () => void;
  onGoal: () => void;
}) {
  const g = gameRef.current;
  if (!g) return null;

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={0.6} />

      <Stars />

      {/* Platforms */}
      {g.platforms.map((plat, i) => (
        <PlatformMesh key={i} plat={plat} gameRef={gameRef} />
      ))}

      {/* Goal card */}
      <GoalCard goalY={g.goalY} gameRef={gameRef} />

      {/* Character */}
      <Character gameRef={gameRef} />

      {/* Side walls (visual guide) */}
      <mesh position={[-0.1, LEVEL_HEIGHT / 2, 0]}>
        <boxGeometry args={[0.02, LEVEL_HEIGHT * 2, 1]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.03} />
      </mesh>
      <mesh position={[WORLD_W + 0.1, LEVEL_HEIGHT / 2, 0]}>
        <boxGeometry args={[0.02, LEVEL_HEIGHT * 2, 1]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.03} />
      </mesh>

      <GameLoop gameRef={gameRef} onDie={onDie} onGoal={onGoal} />
    </>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────
export default function SkyClimbPage() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [level, setLevel] = useState(1);
  const [highestLevel, setHighestLevel] = useState(1);
  const [rewardRarity, setRewardRarity] = useState<CardRarity>("bronze");
  const gameRef = useRef<GameData>(createGameData());

  // Load highest level
  useEffect(() => {
    const saved = localStorage.getItem("plizio_skyclimb_highest");
    if (saved) setHighestLevel(parseInt(saved));
  }, []);

  // Controls
  useEffect(() => {
    if (gameState !== "playing") return;
    const g = gameRef.current;

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const x = e.touches[0].clientX;
      const mid = window.innerWidth / 2;
      g.moveLeft = x < mid;
      g.moveRight = x >= mid;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 0) {
        g.moveLeft = false;
        g.moveRight = false;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") g.moveLeft = true;
      if (e.key === "ArrowRight" || e.key === "d") g.moveRight = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a") g.moveLeft = false;
      if (e.key === "ArrowRight" || e.key === "d") g.moveRight = false;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      g.moveLeft = false;
      g.moveRight = false;
    };
  }, [gameState]);

  const startGame = useCallback((lvl: number) => {
    const { platforms, goalY } = generateLevel(lvl);
    const g = gameRef.current;
    g.playerX = WORLD_W / 2;
    g.playerY = 0.8;
    g.velX = 0;
    g.velY = 0;
    g.onGround = false;
    g.platforms = platforms;
    g.goalY = goalY;
    g.cameraY = 2;
    g.moveLeft = false;
    g.moveRight = false;
    g.dead = false;
    g.levelComplete = false;
    g.level = lvl;
    g.time = 0;
    g.facingRight = true;
    g.walkCycle = 0;

    setLevel(lvl);
    setGameState("playing");
  }, []);

  const handleDie = useCallback(() => {
    setGameState("dead");
  }, []);

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
    <main className="min-h-screen flex flex-col items-center justify-center bg-bg relative">
      {/* Menu */}
      {gameState === "menu" && (
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Mountain
            size={48}
            className="text-neon-green"
            style={{ filter: "drop-shadow(0 0 15px rgba(0,255,136,0.5))" }}
          />

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs">
            {Array.from({ length: Math.min(highestLevel + 1, 20) }, (_, i) => i + 1).map((lvl) => {
              const unlocked = lvl <= highestLevel;
              const isNext = lvl === highestLevel + 1 && highestLevel < 20;
              return (
                <motion.button
                  key={lvl}
                  onClick={() => (unlocked || isNext) ? startGame(lvl) : null}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold border-2 ${
                    unlocked
                      ? "bg-card border-neon-green/30 text-neon-green"
                      : isNext
                      ? "bg-card border-gold/30 text-gold"
                      : "bg-card/50 border-white/5 text-white/10"
                  }`}
                  style={
                    unlocked
                      ? { boxShadow: "0 0 10px rgba(0,255,136,0.15)" }
                      : isNext
                      ? { boxShadow: "0 0 10px rgba(255,215,0,0.15)" }
                      : undefined
                  }
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
            <motion.div
              className="flex items-center gap-2 text-neon-green/50 text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Trophy size={14} />
              LVL {highestLevel}
            </motion.div>
          )}
        </motion.div>
      )}

      {/* 3D Game */}
      {gameState === "playing" && (
        <div className="w-full h-screen touch-none">
          <Canvas
            camera={{ position: [WORLD_W / 2, 4, 12], fov: 55 }}
            gl={{ antialias: true }}
            style={{ background: "#050510" }}
          >
            <Scene3D gameRef={gameRef} onDie={handleDie} onGoal={handleGoal} />
          </Canvas>

          {/* HUD overlay */}
          <div className="fixed top-4 left-0 right-0 z-10 flex justify-center pointer-events-none">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-3">
              <Mountain size={14} className="text-neon-green" />
              <span className="text-white/40 font-mono text-sm font-bold">LVL {level}</span>
            </div>
          </div>

          {/* Touch hint */}
          <div className="fixed bottom-8 left-0 right-0 z-10 flex justify-center pointer-events-none">
            <div className="flex gap-12 text-white/10 text-xs font-bold">
              <span>◀ TAP</span>
              <span>TAP ▶</span>
            </div>
          </div>
        </div>
      )}

      {/* Death */}
      <AnimatePresence>
        {gameState === "dead" && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm px-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <Mountain size={56} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 15px rgba(255,45,120,0.5))" }} />
            </motion.div>

            <motion.div className="text-white/30 text-sm font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              LVL {level}
            </motion.div>

            <motion.div className="flex gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <motion.button
                onClick={() => startGame(level)}
                className="bg-neon-green/10 border border-neon-green/30 text-neon-green px-6 py-3 rounded-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw size={18} />
              </motion.button>
              <motion.button
                onClick={() => setGameState("menu")}
                className="bg-neon-purple/10 border border-neon-purple/30 text-neon-purple px-6 py-3 rounded-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home size={18} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reward */}
      {gameState === "reward" && (
        <RewardReveal
          rarity={rewardRarity}
          game="skyclimb"
          score={level}
          total={level}
          onDone={() => setGameState("level-complete")}
        />
      )}

      {/* Level complete */}
      <AnimatePresence>
        {gameState === "level-complete" && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm px-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
              <ArrowUp size={56} className="text-neon-green" style={{ filter: "drop-shadow(0 0 15px rgba(0,255,136,0.5))" }} />
            </motion.div>
            <motion.div
              className="text-neon-green text-2xl font-black"
              style={{ textShadow: "0 0 15px rgba(0,255,136,0.4)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              LVL {level}
            </motion.div>
            <motion.div className="flex gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              {level < 20 && (
                <motion.button
                  onClick={() => startGame(level + 1)}
                  className="bg-neon-green/10 border border-neon-green/30 text-neon-green px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp size={18} />
                  {level + 1}
                </motion.button>
              )}
              <motion.button
                onClick={() => setGameState("menu")}
                className="bg-neon-purple/10 border border-neon-purple/30 text-neon-purple px-6 py-3 rounded-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home size={18} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

// ─── HELPERS ────────────────────────────────────────
function getLevelRarity(level: number): CardRarity {
  if (level >= 15) return "legendary";
  if (level >= 8) return "gold";
  if (level >= 4) return "silver";
  return "bronze";
}
