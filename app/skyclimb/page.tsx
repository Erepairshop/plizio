"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Trophy, ArrowUp, RotateCcw, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import RewardReveal from "@/components/RewardReveal";
import { calculateRarity, saveCard, generateCardId, type CardRarity } from "@/lib/cards";

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

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

interface Zone {
  name: string;
  bgTop: string;
  bgBot: string;
  platColor: string;
  accentColor: string;
  starCount: number;
}

type GameState = "menu" | "playing" | "dead" | "level-complete" | "reward";

// ─── CONSTANTS ──────────────────────────────────────
const CANVAS_W = 400;
const CANVAS_H = 700;
const PLAYER_W = 24;
const PLAYER_H = 24;
const GRAVITY = 0.38;
const JUMP_FORCE = -10.5;
const MOVE_SPEED = 5.5;
const PLAT_H = 12;
const LEVEL_HEIGHT = 8000;

const ZONES: Zone[] = [
  { name: "City", bgTop: "#0A0A1A", bgBot: "#121230", platColor: "#00D4FF", accentColor: "#00D4FF", starCount: 0 },
  { name: "Clouds", bgTop: "#0A1025", bgBot: "#152040", platColor: "#00FF88", accentColor: "#00FF88", starCount: 3 },
  { name: "Night Sky", bgTop: "#050510", bgBot: "#0A0A20", platColor: "#B44DFF", accentColor: "#B44DFF", starCount: 15 },
  { name: "Space", bgTop: "#000005", bgBot: "#05000F", platColor: "#FF2D78", accentColor: "#FF2D78", starCount: 30 },
  { name: "Neon Void", bgTop: "#000000", bgBot: "#0A000A", platColor: "#FFD700", accentColor: "#FFD700", starCount: 20 },
];

// ─── LEVEL GENERATION ───────────────────────────────
function generateLevel(level: number): { platforms: Platform[]; goalY: number } {
  const platforms: Platform[] = [];
  const difficulty = Math.min(level, 10);

  // Starting platform
  platforms.push({ x: CANVAS_W / 2 - 50, y: CANVAS_H - 60, w: 100, type: "normal" });

  const platformCount = 35 + level * 5;
  const verticalSpacing = LEVEL_HEIGHT / platformCount;

  for (let i = 1; i <= platformCount; i++) {
    const y = CANVAS_H - 60 - i * verticalSpacing;
    const x = 20 + Math.random() * (CANVAS_W - 120);

    // Determine platform type based on difficulty
    const roll = Math.random();
    let type: Platform["type"] = "normal";
    let w = 80 - difficulty * 3;

    if (difficulty >= 2 && roll < 0.1 * difficulty) {
      type = "moving";
    } else if (difficulty >= 4 && roll < 0.05 * difficulty) {
      type = "crumble";
    } else if (difficulty >= 3 && roll < 0.08 * difficulty) {
      type = "small";
      w = 40;
    }

    w = Math.max(w, 35);

    const plat: Platform = { x, y, w, type };

    if (type === "moving") {
      plat.origX = x;
      plat.moveDir = Math.random() > 0.5 ? 1 : -1;
      plat.moveRange = 40 + Math.random() * 60;
      plat.moveSpeed = 0.8 + difficulty * 0.2;
    }

    if (type === "crumble") {
      plat.crumbleTimer = 0;
      plat.touched = false;
    }

    platforms.push(plat);
  }

  // Goal platform at top
  const goalY = CANVAS_H - 60 - (platformCount + 1) * verticalSpacing;
  platforms.push({ x: CANVAS_W / 2 - 40, y: goalY, w: 80, type: "normal" });

  return { platforms, goalY };
}

// ─── COMPONENT ──────────────────────────────────────
export default function SkyClimbPage() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  const [gameState, setGameState] = useState<GameState>("menu");
  const [level, setLevel] = useState(1);
  const [highestLevel, setHighestLevel] = useState(1);
  const [rewardRarity, setRewardRarity] = useState<CardRarity>("bronze");

  // Game state refs (for animation loop)
  const gameRef = useRef({
    playerX: CANVAS_W / 2 - PLAYER_W / 2,
    playerY: CANVAS_H - 100,
    velX: 0,
    velY: 0,
    onGround: false,
    platforms: [] as Platform[],
    goalY: 0,
    cameraY: 0,
    highestY: CANVAS_H - 100,
    moveLeft: false,
    moveRight: false,
    particles: [] as Particle[],
    stars: [] as { x: number; y: number; size: number; alpha: number }[],
    dead: false,
    levelComplete: false,
    level: 1,
    time: 0,
  });

  // Load highest level from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("plizio_skyclimb_highest");
    if (saved) setHighestLevel(parseInt(saved));
  }, []);

  // Get zone for current scroll position
  const getZone = useCallback((scrollY: number): Zone => {
    const zoneHeight = LEVEL_HEIGHT / ZONES.length;
    const idx = Math.min(Math.floor(scrollY / zoneHeight), ZONES.length - 1);
    return ZONES[Math.max(0, idx)];
  }, []);

  // Generate stars for background
  const generateStars = useCallback((count: number) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * CANVAS_W,
      y: Math.random() * LEVEL_HEIGHT * 1.5,
      size: 0.5 + Math.random() * 2,
      alpha: 0.3 + Math.random() * 0.7,
    }));
  }, []);

  // Start game
  const startGame = useCallback((lvl: number) => {
    const { platforms, goalY } = generateLevel(lvl);
    const g = gameRef.current;
    g.playerX = CANVAS_W / 2 - PLAYER_W / 2;
    g.playerY = CANVAS_H - 100;
    g.velX = 0;
    g.velY = 0;
    g.onGround = false;
    g.platforms = platforms;
    g.goalY = goalY;
    g.cameraY = 0;
    g.highestY = CANVAS_H - 100;
    g.particles = [];
    g.stars = generateStars(40);
    g.dead = false;
    g.levelComplete = false;
    g.level = lvl;
    g.time = 0;

    setLevel(lvl);
    setGameState("playing");
  }, [generateStars]);

  // Touch/mouse controls
  useEffect(() => {
    if (gameState !== "playing") return;
    const g = gameRef.current;

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      const x = touch.clientX;
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

  // Spawn particles
  const spawnParticles = useCallback((x: number, y: number, color: string, count: number) => {
    const g = gameRef.current;
    for (let i = 0; i < count; i++) {
      g.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 3 - 1,
        life: 1,
        color,
        size: 2 + Math.random() * 3,
      });
    }
  }, []);

  // Game loop
  useEffect(() => {
    if (gameState !== "playing") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.67, 3); // cap at 3x speed
      lastTime = now;

      const g = gameRef.current;
      if (g.dead || g.levelComplete) {
        frameRef.current = 0;
        return;
      }

      g.time += dt;

      // ─── INPUT ─────────────────
      if (g.moveLeft) g.velX = -MOVE_SPEED;
      else if (g.moveRight) g.velX = MOVE_SPEED;
      else g.velX *= 0.85; // friction

      // ─── PHYSICS ───────────────
      g.velY += GRAVITY * dt;
      g.playerX += g.velX * dt;
      g.playerY += g.velY * dt;

      // Wrap around horizontally
      if (g.playerX < -PLAYER_W) g.playerX = CANVAS_W;
      if (g.playerX > CANVAS_W) g.playerX = -PLAYER_W;

      // ─── PLATFORM COLLISION ────
      g.onGround = false;
      for (const plat of g.platforms) {
        // Update moving platforms
        if (plat.type === "moving" && plat.origX !== undefined) {
          plat.x = plat.origX + Math.sin(g.time * 0.03 * (plat.moveSpeed || 1)) * (plat.moveRange || 50);
        }

        // Update crumble platforms
        if (plat.type === "crumble" && plat.touched) {
          plat.crumbleTimer = (plat.crumbleTimer || 0) + dt;
          if (plat.crumbleTimer > 30) continue; // gone
        }

        // Check collision (only when falling)
        if (g.velY >= 0) {
          const withinX = g.playerX + PLAYER_W > plat.x && g.playerX < plat.x + plat.w;
          const withinY = g.playerY + PLAYER_H >= plat.y && g.playerY + PLAYER_H <= plat.y + PLAT_H + g.velY * dt + 4;

          if (withinX && withinY) {
            g.playerY = plat.y - PLAYER_H;
            g.velY = JUMP_FORCE;
            g.onGround = true;

            if (plat.type === "crumble") {
              plat.touched = true;
            }

            // Landing particles
            const zone = getZone(-g.cameraY);
            spawnParticles(g.playerX + PLAYER_W / 2, plat.y, zone.accentColor, 4);
          }
        }
      }

      // ─── CAMERA ────────────────
      if (g.playerY < g.highestY) {
        g.highestY = g.playerY;
      }
      const targetCamY = -(g.playerY - CANVAS_H * 0.4);
      g.cameraY += (targetCamY - g.cameraY) * 0.08 * dt;

      // ─── DEATH CHECK ───────────
      if (g.playerY - g.cameraY > CANVAS_H + 100) {
        g.dead = true;
        setGameState("dead");
        return;
      }

      // ─── GOAL CHECK ────────────
      if (g.playerY <= g.goalY + 20) {
        g.levelComplete = true;
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
        return;
      }

      // ─── PARTICLES ─────────────
      g.particles = g.particles.filter((p) => {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += 0.1 * dt;
        p.life -= 0.03 * dt;
        return p.life > 0;
      });

      // ─── RENDER ────────────────
      const scrollY = -g.cameraY;
      const zone = getZone(scrollY);

      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
      bgGrad.addColorStop(0, zone.bgTop);
      bgGrad.addColorStop(1, zone.bgBot);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // Stars
      ctx.save();
      for (const star of g.stars) {
        const sy = star.y + g.cameraY * 0.3;
        if (sy > -10 && sy < CANVAS_H + 10) {
          ctx.globalAlpha = star.alpha * 0.6;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(star.x, sy, star.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // Translate for camera
      ctx.save();
      ctx.translate(0, g.cameraY);

      // ─── DRAW PLATFORMS ────────
      for (const plat of g.platforms) {
        if (plat.type === "crumble" && plat.touched && (plat.crumbleTimer || 0) > 30) continue;

        const screenY = plat.y + g.cameraY;
        if (screenY < -20 || screenY > CANVAS_H + 20) continue;

        let color = zone.platColor;
        let alpha = "FF";

        if (plat.type === "moving") {
          color = "#00FF88";
        } else if (plat.type === "crumble") {
          color = "#FF2D78";
          const timer = plat.crumbleTimer || 0;
          alpha = timer > 0 ? Math.max(0, Math.round(255 * (1 - timer / 30))).toString(16).padStart(2, "0") : "FF";
        } else if (plat.type === "small") {
          color = "#FFD700";
        }

        // Platform glow
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = color + alpha;

        // Rounded rect
        const r = 4;
        ctx.beginPath();
        ctx.moveTo(plat.x + r, plat.y);
        ctx.lineTo(plat.x + plat.w - r, plat.y);
        ctx.quadraticCurveTo(plat.x + plat.w, plat.y, plat.x + plat.w, plat.y + r);
        ctx.lineTo(plat.x + plat.w, plat.y + PLAT_H - r);
        ctx.quadraticCurveTo(plat.x + plat.w, plat.y + PLAT_H, plat.x + plat.w - r, plat.y + PLAT_H);
        ctx.lineTo(plat.x + r, plat.y + PLAT_H);
        ctx.quadraticCurveTo(plat.x, plat.y + PLAT_H, plat.x, plat.y + PLAT_H - r);
        ctx.lineTo(plat.x, plat.y + r);
        ctx.quadraticCurveTo(plat.x, plat.y, plat.x + r, plat.y);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ─── DRAW GOAL ────────────
      const goalScreenY = g.goalY + g.cameraY;
      if (goalScreenY > -60 && goalScreenY < CANVAS_H + 60) {
        // Glowing card at the top
        ctx.save();
        const pulse = Math.sin(g.time * 0.05) * 5;
        ctx.shadowColor = "#FFD700";
        ctx.shadowBlur = 15 + pulse;
        ctx.fillStyle = "#FFD700";
        ctx.fillRect(CANVAS_W / 2 - 15, g.goalY - 40 - pulse * 0.3, 30, 40);
        ctx.shadowBlur = 0;

        // Star on card
        ctx.fillStyle = "#0A0A1A";
        ctx.font = "bold 18px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("★", CANVAS_W / 2, g.goalY - 15);
        ctx.restore();
      }

      // ─── DRAW PLAYER ──────────
      const px = g.playerX;
      const py = g.playerY;

      // Trail effect
      if (Math.abs(g.velY) > 2) {
        ctx.globalAlpha = 0.15;
        ctx.fillStyle = zone.accentColor;
        ctx.fillRect(px + 4, py + PLAYER_H, PLAYER_W - 8, Math.min(Math.abs(g.velY) * 3, 30));
        ctx.globalAlpha = 1;
      }

      // Player body (neon square with glow)
      ctx.shadowColor = zone.accentColor;
      ctx.shadowBlur = 12;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(px + 2, py + 2, PLAYER_W - 4, PLAYER_H - 4);
      ctx.shadowBlur = 0;

      // Eyes
      ctx.fillStyle = "#0A0A1A";
      const eyeDir = g.moveLeft ? -1 : g.moveRight ? 1 : 0;
      ctx.fillRect(px + 7 + eyeDir, py + 8, 3, 4);
      ctx.fillRect(px + 14 + eyeDir, py + 8, 3, 4);

      // ─── DRAW PARTICLES ────────
      for (const p of g.particles) {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }
      ctx.globalAlpha = 1;

      ctx.restore();

      // ─── HUD ───────────────────
      // Height indicator (left side)
      const progress = Math.max(0, Math.min(1, scrollY / LEVEL_HEIGHT));
      const barH = CANVAS_H - 40;
      const barX = 12;
      ctx.fillStyle = "rgba(255,255,255,0.05)";
      ctx.fillRect(barX, 20, 4, barH);
      ctx.fillStyle = zone.accentColor;
      ctx.fillRect(barX, 20 + barH * (1 - progress), 4, barH * progress);

      // Level text (top center)
      ctx.fillStyle = "rgba(255,255,255,0.15)";
      ctx.font = "bold 14px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`LVL ${g.level}`, CANVAS_W / 2, 30);

      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [gameState, getZone, spawnParticles]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-bg">
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

          {/* Level selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs">
            {Array.from({ length: Math.min(highestLevel + 1, 20) }, (_, i) => i + 1).map((lvl) => {
              const unlocked = lvl <= highestLevel;
              const isNext = lvl === highestLevel + 1 && highestLevel < 20;
              return (
                <motion.button
                  key={lvl}
                  onClick={() => unlocked ? startGame(lvl) : isNext ? startGame(lvl) : null}
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
                  whileHover={unlocked || isNext ? { scale: 1.1 } : {}}
                  whileTap={unlocked || isNext ? { scale: 0.95 } : {}}
                  disabled={!unlocked && !isNext}
                >
                  {lvl}
                </motion.button>
              );
            })}
          </div>

          {/* Highscore */}
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

      {/* Game Canvas */}
      {gameState === "playing" && (
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="max-w-full touch-none"
          style={{
            width: "min(100vw, 400px)",
            height: "min(100vh, 700px)",
            imageRendering: "pixelated",
          }}
        />
      )}

      {/* Death screen */}
      <AnimatePresence>
        {gameState === "dead" && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm px-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="text-neon-pink text-4xl font-black"
              style={{ textShadow: "0 0 20px rgba(255,45,120,0.5)" }}
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <Mountain size={56} className="text-neon-pink" />
            </motion.div>

            <motion.div
              className="text-white/30 text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              LVL {level}
            </motion.div>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
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

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
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
