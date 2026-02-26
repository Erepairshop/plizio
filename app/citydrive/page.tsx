"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Home, RotateCcw, MapPin, Package, Clock, Zap, X } from "lucide-react";
import Link from "next/link";
import RewardReveal from "@/components/RewardReveal";
import ResultCard from "@/components/ResultCard";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import { getSkinDef, getActiveSkin } from "@/lib/skins";

// ─── TYPES ─────────────────────────────────────
type GameState = "menu" | "countdown" | "playing" | "result" | "reward";
interface Vec2 { x: number; y: number }

interface CarEntity {
  x: number; y: number; angle: number; speed: number;
  maxSpeed: number; accel: number; handling: number;
  color: string; name: string; w: number; h: number;
}

interface Mission {
  id: number; type: "delivery" | "parking" | "coins";
  px: number; py: number; // pickup / target
  dx: number; dy: number; // dropoff (delivery only)
  pickedUp: boolean; completed: boolean;
  points: number; label: string;
  coins?: Vec2[]; coinsLeft?: number;
}

// ─── CONSTANTS ─────────────────────────────────
const TILE = 28;
const COLS = 36;
const ROWS = 36;
const WORLD_W = COLS * TILE;
const WORLD_H = ROWS * TILE;
const GAME_TIME = 90;
const WALK_SPEED = 120;
const ENTER_DIST = 36;
const FRICTION = 0.97;
const TOTAL_MISSIONS = 6;

// Tile types
const T_ROAD = 0, T_SIDEWALK = 1, T_BUILDING = 2;

// ─── MAP GENERATION ────────────────────────────
// Roads every 7 tiles (2 wide), smaller blocks, more streets
function genMap(): number[][] {
  const m: number[][] = [];
  for (let r = 0; r < ROWS; r++) {
    m[r] = [];
    for (let c = 0; c < COLS; c++) {
      const hr = r % 7 < 2;
      const vr = c % 7 < 2;
      if (hr || vr) m[r][c] = T_ROAD;
      else if (r % 7 === 2 || r % 7 === 6 || c % 7 === 2 || c % 7 === 6) m[r][c] = T_SIDEWALK;
      else m[r][c] = T_BUILDING;
    }
  }
  return m;
}

function isSolid(map: number[][], px: number, py: number, hw: number, hh: number): boolean {
  const checks = [
    [px - hw, py - hh], [px + hw, py - hh],
    [px - hw, py + hh], [px + hw, py + hh],
  ];
  for (const [cx, cy] of checks) {
    const col = Math.floor(cx / TILE);
    const row = Math.floor(cy / TILE);
    if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return true;
    if (map[row][col] === T_BUILDING) return true;
  }
  return false;
}

// ─── BUILDING COLORS (seeded) ──────────────────
function buildingColor(r: number, c: number): string {
  // Darker, muted building colors - city at night
  const palette = ["#0f0f25", "#10102a", "#0d0d20", "#121230", "#0e0e22", "#111128"];
  return palette[(r * 3 + c * 5) % palette.length];
}
function buildingGlow(r: number, c: number): string {
  const colors = ["#FF2D78", "#00D4FF", "#B44DFF", "#00FF88", "#FFD700", "#FF6B00"];
  return colors[(r * 3 + c * 7) % colors.length];
}
// Roof accent color for buildings
function roofColor(r: number, c: number): string {
  const palette = ["#1a1a3a", "#151535", "#181840", "#1c1c38"];
  return palette[(r * 2 + c * 4) % palette.length];
}

// ─── ROAD POSITION HELPERS ─────────────────────
// Get a pixel position that's guaranteed to be on a road tile
function roadPos(roadIdx: number, crossIdx: number): { x: number; y: number } {
  // roadIdx and crossIdx are road-line indices (0,1,2...)
  // Each road line starts at tile = idx * 7, and is 2 tiles wide
  return {
    x: (crossIdx * 7 + 1) * TILE,
    y: (roadIdx * 7 + 1) * TILE,
  };
}

// ─── INIT CARS ─────────────────────────────────
function initCars(): CarEntity[] {
  // All cars placed on road tiles (using road grid intersections and straights)
  return [
    { x: roadPos(0, 1).x, y: roadPos(0, 1).y + 3 * TILE, angle: 0, speed: 0, maxSpeed: 260, accel: 200, handling: 2.8, color: "#FF2D55", name: "Sport", w: 20, h: 34 },
    { x: roadPos(1, 2).x + 3 * TILE, y: roadPos(1, 2).y, angle: Math.PI / 2, speed: 0, maxSpeed: 200, accel: 160, handling: 3.2, color: "#00D4FF", name: "Sedan", w: 18, h: 32 },
    { x: roadPos(2, 0).x, y: roadPos(2, 0).y + 4 * TILE, angle: 0, speed: 0, maxSpeed: 150, accel: 130, handling: 3.8, color: "#00FF88", name: "Truck", w: 22, h: 38 },
    { x: roadPos(3, 3).x + 4 * TILE, y: roadPos(3, 3).y, angle: Math.PI, speed: 0, maxSpeed: 220, accel: 180, handling: 3.0, color: "#FFD700", name: "Taxi", w: 18, h: 32 },
    { x: roadPos(1, 4).x, y: roadPos(1, 4).y + 2 * TILE, angle: -Math.PI / 2, speed: 0, maxSpeed: 300, accel: 240, handling: 2.5, color: "#B44DFF", name: "Racer", w: 18, h: 34 },
  ];
}

// ─── MISSION GENERATION ────────────────────────
function roadTile(): Vec2 {
  let r: number, c: number;
  do {
    r = Math.floor(Math.random() * ROWS);
    c = Math.floor(Math.random() * COLS);
  } while (r % 7 >= 2 && c % 7 >= 2); // must be on road
  return { x: c * TILE + TILE / 2, y: r * TILE + TILE / 2 };
}

function genMission(id: number): Mission {
  const types: Mission["type"][] = ["delivery", "parking", "coins"];
  const type = types[id % 3];
  const p = roadTile();
  const d = roadTile();

  if (type === "coins") {
    const coins: Vec2[] = [];
    for (let i = 0; i < 5; i++) coins.push(roadTile());
    return { id, type, px: coins[0].x, py: coins[0].y, dx: 0, dy: 0, pickedUp: false, completed: false, points: 50, label: "Collect 5 coins", coins, coinsLeft: 5 };
  }
  if (type === "parking") {
    return { id, type, px: p.x, py: p.y, dx: 0, dy: 0, pickedUp: false, completed: false, points: 80, label: "Park at marker" };
  }
  return { id, type, px: p.x, py: p.y, dx: d.x, dy: d.y, pickedUp: false, completed: false, points: 100, label: "Deliver package" };
}

// ─── MAIN COMPONENT ────────────────────────────
export default function CityDrivePage() {
  const [gameState, setGameState] = useState<GameState>("menu");
  const [countdown, setCountdown] = useState(3);
  const [finalScore, setFinalScore] = useState(0);
  const [finalMissions, setFinalMissions] = useState(0);
  const [cardSaved, setCardSaved] = useState(false);
  const [showMilestone, setShowMilestone] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mapRef = useRef<number[][]>(genMap());
  const carsRef = useRef<CarEntity[]>(initCars());
  const playerRef = useRef({ x: 1 * TILE, y: 1 * TILE, angle: 0, speed: 0, inCar: -1 });
  const missionsRef = useRef<Mission[]>([]);
  const keysRef = useRef<Set<string>>(new Set());
  const scoreRef = useRef(0);
  const missionsCompletedRef = useRef(0);
  const timeRef = useRef(GAME_TIME);
  const lastTimeRef = useRef(0);
  const rafRef = useRef(0);
  const camRef = useRef({ x: 0, y: 0 });
  const camModeRef = useRef(0); // 0=bird, 1=follow, 2=chase
  const camAngleRef = useRef(0); // smooth camera angle
  const camZoomRef = useRef(1);
  const missionIdRef = useRef(0);
  const messageRef = useRef<{ text: string; time: number } | null>(null);
  const touchRef = useRef<{ active: boolean; sx: number; sy: number; cx: number; cy: number }>({ active: false, sx: 0, sy: 0, cx: 0, cy: 0 });
  const actionTouchRef = useRef(false);

  // Get skin
  const skinRef = useRef(getSkinDef(getActiveSkin()));

  // ─── COUNTDOWN ─────────────────────────────
  useEffect(() => {
    if (gameState !== "countdown") return;
    if (countdown <= 0) {
      // Init game
      carsRef.current = initCars();
      playerRef.current = { x: 1 * TILE, y: 1 * TILE, angle: 0, speed: 0, inCar: -1 };
      scoreRef.current = 0;
      missionsCompletedRef.current = 0;
      timeRef.current = GAME_TIME;
      missionIdRef.current = 0;
      const ms: Mission[] = [];
      for (let i = 0; i < 3; i++) ms.push(genMission(missionIdRef.current++));
      missionsRef.current = ms;
      setGameState("playing");
      return;
    }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [gameState, countdown]);

  // ─── GAME LOOP ─────────────────────────────
  const update = useCallback((dt: number) => {
    const p = playerRef.current;
    const map = mapRef.current;
    const keys = keysRef.current;
    const touch = touchRef.current;

    // Timer
    timeRef.current -= dt;
    if (timeRef.current <= 0) {
      timeRef.current = 0;
      endGame();
      return;
    }

    // Input
    let moveX = 0, moveY = 0, braking = false, action = false;
    if (keys.has("ArrowUp") || keys.has("w") || keys.has("W")) moveY = -1;
    if (keys.has("ArrowDown") || keys.has("s") || keys.has("S")) moveY = 1;
    if (keys.has("ArrowLeft") || keys.has("a") || keys.has("A")) moveX = -1;
    if (keys.has("ArrowRight") || keys.has("d") || keys.has("D")) moveX = 1;
    if (keys.has("Shift")) braking = true;
    if (keys.has(" ")) { action = true; keys.delete(" "); }
    if (actionTouchRef.current) { action = true; actionTouchRef.current = false; }

    // Touch joystick
    if (touch.active) {
      const tdx = touch.cx - touch.sx;
      const tdy = touch.cy - touch.sy;
      const dist = Math.sqrt(tdx * tdx + tdy * tdy);
      if (dist > 10) {
        moveX = tdx / dist;
        moveY = tdy / dist;
      }
    }

    if (p.inCar >= 0) {
      // ─── DRIVING ───
      const car = carsRef.current[p.inCar];
      const forward = moveY < -0.3 ? 1 : moveY > 0.3 ? -1 : 0;
      const turn = moveX;

      if (forward !== 0) {
        car.speed += forward * car.accel * dt;
      } else {
        car.speed *= braking ? 0.92 : FRICTION;
      }
      car.speed = Math.max(-car.maxSpeed * 0.4, Math.min(car.maxSpeed, car.speed));
      if (Math.abs(car.speed) < 2) car.speed = 0;

      if (Math.abs(car.speed) > 10) {
        car.angle += turn * car.handling * dt * (car.speed > 0 ? 1 : -1);
      }

      const nx = car.x + Math.sin(car.angle) * car.speed * dt;
      const ny = car.y - Math.cos(car.angle) * car.speed * dt;

      if (!isSolid(map, nx, ny, car.w / 2, car.h / 2)) {
        car.x = nx;
        car.y = ny;
      } else {
        car.speed *= -0.3;
      }

      // Clamp to world
      car.x = Math.max(car.w, Math.min(WORLD_W - car.w, car.x));
      car.y = Math.max(car.h, Math.min(WORLD_H - car.h, car.y));
      p.x = car.x;
      p.y = car.y;
      p.angle = car.angle;

      // Exit car
      if (action && Math.abs(car.speed) < 20) {
        const ex = car.x + Math.cos(car.angle) * 30;
        const ey = car.y + Math.sin(car.angle) * 30;
        if (!isSolid(map, ex, ey, 6, 6)) {
          p.x = ex; p.y = ey;
        }
        p.inCar = -1;
        p.speed = 0;
        car.speed = 0;
        showMsg("Exited!");
      }
    } else {
      // ─── WALKING ───
      const len = Math.sqrt(moveX * moveX + moveY * moveY);
      if (len > 0.1) {
        const nx = p.x + (moveX / len) * WALK_SPEED * dt;
        const ny = p.y + (moveY / len) * WALK_SPEED * dt;
        if (!isSolid(map, nx, ny, 5, 5)) { p.x = nx; p.y = ny; }
        p.angle = Math.atan2(moveX, -moveY);
      }

      // Enter car
      if (action) {
        for (let i = 0; i < carsRef.current.length; i++) {
          const car = carsRef.current[i];
          const dist = Math.sqrt((p.x - car.x) ** 2 + (p.y - car.y) ** 2);
          if (dist < ENTER_DIST) {
            p.inCar = i;
            showMsg(`${car.name} - ${car.maxSpeed} km/h`);
            break;
          }
        }
      }
    }

    // Camera update
    const canvas = canvasRef.current;
    if (canvas) {
      const mode = camModeRef.current;
      // Target zoom per mode
      const targetZoom = mode === 0 ? 1 : mode === 1 ? 1.8 : 2.5;
      camZoomRef.current += (targetZoom - camZoomRef.current) * 0.08;
      // Target angle (follow/chase rotate with car, bird stays 0)
      const targetAngle = (mode > 0 && p.inCar >= 0) ? carsRef.current[p.inCar].angle : 0;
      // Smooth angle interpolation
      let da = targetAngle - camAngleRef.current;
      while (da > Math.PI) da -= Math.PI * 2;
      while (da < -Math.PI) da += Math.PI * 2;
      const angleSpeed = mode === 2 ? 0.1 : 0.06;
      camAngleRef.current += da * angleSpeed;
      // Camera position (used for non-rotated HUD elements)
      camRef.current.x = p.x - canvas.width / 2;
      camRef.current.y = p.y - canvas.height / 2;
    }

    // ─── MISSIONS ───
    checkMissions();
  }, []);

  const showMsg = (text: string) => {
    messageRef.current = { text, time: 2 };
  };

  const checkMissions = useCallback(() => {
    const p = playerRef.current;
    const ms = missionsRef.current;
    let changed = false;

    for (const m of ms) {
      if (m.completed) continue;

      if (m.type === "delivery") {
        if (!m.pickedUp) {
          const dist = Math.sqrt((p.x - m.px) ** 2 + (p.y - m.py) ** 2);
          if (dist < 30) { m.pickedUp = true; showMsg("📦 Package picked up!"); changed = true; }
        } else {
          const dist = Math.sqrt((p.x - m.dx) ** 2 + (p.y - m.dy) ** 2);
          if (dist < 30) { m.completed = true; scoreRef.current += m.points; missionsCompletedRef.current++; showMsg(`+${m.points} pts!`); changed = true; }
        }
      } else if (m.type === "parking") {
        if (p.inCar >= 0) {
          const car = carsRef.current[p.inCar];
          const dist = Math.sqrt((car.x - m.px) ** 2 + (car.y - m.py) ** 2);
          if (dist < 25 && Math.abs(car.speed) < 5) {
            m.completed = true; scoreRef.current += m.points; missionsCompletedRef.current++;
            showMsg(`🅿️ Parked +${m.points}!`); changed = true;
          }
        }
      } else if (m.type === "coins" && m.coins) {
        for (let i = m.coins.length - 1; i >= 0; i--) {
          const coin = m.coins[i];
          const dist = Math.sqrt((p.x - coin.x) ** 2 + (p.y - coin.y) ** 2);
          if (dist < 25) {
            m.coins.splice(i, 1);
            m.coinsLeft = m.coins.length;
            scoreRef.current += 10;
            showMsg(`🪙 Coin! (${m.coins.length} left)`);
            changed = true;
          }
        }
        if (m.coins.length === 0) {
          m.completed = true; missionsCompletedRef.current++;
          showMsg(`🪙 All collected +${m.points}!`);
        }
      }
    }

    // Spawn new missions
    if (changed) {
      const active = ms.filter(m => !m.completed).length;
      if (active < 2 && missionIdRef.current < TOTAL_MISSIONS) {
        ms.push(genMission(missionIdRef.current++));
      }
    }
  }, []);

  const endGame = useCallback(() => {
    setFinalScore(scoreRef.current);
    setFinalMissions(missionsCompletedRef.current);
    cancelAnimationFrame(rafRef.current);
    setGameState("result");
  }, []);

  // ─── RENDER ────────────────────────────────
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cam = camRef.current;
    const map = mapRef.current;
    const skin = skinRef.current;

    // Clear
    ctx.fillStyle = "#0A0A1A";
    ctx.fillRect(0, 0, W, H);

    const p = playerRef.current;
    const zoom = camZoomRef.current;
    const cAngle = camAngleRef.current;
    const mode = camModeRef.current;

    // Apply camera transform (rotate + zoom around player)
    ctx.save();
    ctx.translate(W / 2, H / 2);
    if (mode > 0) ctx.rotate(-cAngle);
    ctx.scale(zoom, zoom);
    ctx.translate(-p.x, -p.y);

    // Visible tile range (expanded for rotation)
    const viewR = Math.max(W, H) / zoom / TILE + 4;
    const pcol = p.x / TILE;
    const prow = p.y / TILE;
    const sc = Math.floor(pcol - viewR);
    const sr = Math.floor(prow - viewR);
    const ec = Math.ceil(pcol + viewR);
    const er = Math.ceil(prow + viewR);

    // ── City tiles ──
    for (let r = Math.max(0, sr); r < Math.min(ROWS, er); r++) {
      for (let c = Math.max(0, sc); c < Math.min(COLS, ec); c++) {
        const sx = c * TILE;
        const sy = r * TILE;
        const tile = map[r][c];

        if (tile === T_ROAD) {
          // Smooth dark asphalt
          ctx.fillStyle = "#14141f";
          ctx.fillRect(sx, sy, TILE, TILE);
          // White dashed center lines (horizontal roads)
          if (r % 7 === 0 && c % 7 >= 2) {
            ctx.fillStyle = "#ffffff22";
            if (c % 2 === 0) ctx.fillRect(sx + 4, sy + TILE / 2 - 0.5, TILE - 8, 1);
          }
          // White dashed center lines (vertical roads)
          if (c % 7 === 0 && r % 7 >= 2) {
            ctx.fillStyle = "#ffffff22";
            if (r % 2 === 0) ctx.fillRect(sx + TILE / 2 - 0.5, sy + 4, 1, TILE - 8);
          }
          // Yellow edge lines on road borders
          const nextToSidewalk = (r % 7 === 1 && r + 1 < ROWS && map[r + 1]?.[c] === T_SIDEWALK) ||
                                  (c % 7 === 1 && c + 1 < COLS && map[r]?.[c + 1] === T_SIDEWALK);
          if (nextToSidewalk) {
            ctx.fillStyle = "#FFD70015";
            ctx.fillRect(sx, sy, TILE, TILE);
          }
        } else if (tile === T_SIDEWALK) {
          ctx.fillStyle = "#1a1a2c";
          ctx.fillRect(sx, sy, TILE, TILE);
          // Curb line next to road
          if (r > 0 && map[r - 1]?.[c] === T_ROAD) { ctx.fillStyle = "#2a2a40"; ctx.fillRect(sx, sy, TILE, 2); }
          if (r < ROWS - 1 && map[r + 1]?.[c] === T_ROAD) { ctx.fillStyle = "#2a2a40"; ctx.fillRect(sx, sy + TILE - 2, TILE, 2); }
          if (c > 0 && map[r]?.[c - 1] === T_ROAD) { ctx.fillStyle = "#2a2a40"; ctx.fillRect(sx, sy, 2, TILE); }
          if (c < COLS - 1 && map[r]?.[c + 1] === T_ROAD) { ctx.fillStyle = "#2a2a40"; ctx.fillRect(sx + TILE - 2, sy, 2, TILE); }
          // Street lights with warm glow at corners
          if (r % 7 === 2 && c % 7 === 2) {
            const grad = ctx.createRadialGradient(sx + TILE / 2, sy + TILE / 2, 0, sx + TILE / 2, sy + TILE / 2, TILE * 1.5);
            grad.addColorStop(0, "#FFE08820");
            grad.addColorStop(1, "#FFE08800");
            ctx.fillStyle = grad;
            ctx.fillRect(sx - TILE, sy - TILE, TILE * 3, TILE * 3);
            // Light pole
            ctx.fillStyle = "#FFE088";
            ctx.beginPath();
            ctx.arc(sx + TILE / 2, sy + TILE / 2, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          // ── BUILDING ──
          // Unified dark block
          ctx.fillStyle = "#080812";
          ctx.fillRect(sx, sy, TILE, TILE);
          // Roof shade
          ctx.fillStyle = "#0c0c1a";
          ctx.fillRect(sx + 1, sy + 1, TILE - 2, TILE - 2);

          // Neon glow on edges facing streets
          const aboveNotBldg = r > 0 && map[r - 1]?.[c] !== T_BUILDING;
          const belowNotBldg = r < ROWS - 1 && map[r + 1]?.[c] !== T_BUILDING;
          const leftNotBldg = c > 0 && map[r]?.[c - 1] !== T_BUILDING;
          const rightNotBldg = c < COLS - 1 && map[r]?.[c + 1] !== T_BUILDING;
          // Each building block gets consistent glow color
          const blockR = Math.floor(r / 7);
          const blockC = Math.floor(c / 7);
          const glowColors = ["#FF2D78", "#00D4FF", "#B44DFF", "#00FF88", "#FFD700", "#FF6B00"];
          const glow = glowColors[(blockR * 3 + blockC * 5) % glowColors.length];

          ctx.lineWidth = 2;
          ctx.strokeStyle = glow + "60";
          if (aboveNotBldg) { ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx + TILE, sy); ctx.stroke(); }
          if (belowNotBldg) { ctx.beginPath(); ctx.moveTo(sx, sy + TILE); ctx.lineTo(sx + TILE, sy + TILE); ctx.stroke(); }
          if (leftNotBldg) { ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx, sy + TILE); ctx.stroke(); }
          if (rightNotBldg) { ctx.beginPath(); ctx.moveTo(sx + TILE, sy); ctx.lineTo(sx + TILE, sy + TILE); ctx.stroke(); }

          // Neon glow bleed onto road
          if (aboveNotBldg) {
            const grad = ctx.createLinearGradient(sx, sy, sx, sy - TILE);
            grad.addColorStop(0, glow + "18");
            grad.addColorStop(1, glow + "00");
            ctx.fillStyle = grad;
            ctx.fillRect(sx, sy - TILE, TILE, TILE);
          }

          // Window lights (only on edge-facing tiles)
          const isEdge = aboveNotBldg || belowNotBldg || leftNotBldg || rightNotBldg;
          if (isEdge) {
            const ws = (r * 17 + c * 31) % 7;
            if (ws < 5) {
              const wc = ws < 2 ? "#FFE08830" : ws < 4 ? "#00D4FF20" : "#FF2D7818";
              ctx.fillStyle = wc;
              ctx.fillRect(sx + 6, sy + 6, 3, 3);
              ctx.fillRect(sx + TILE - 9, sy + 6, 3, 3);
              ctx.fillRect(sx + 6, sy + TILE - 9, 3, 3);
              ctx.fillRect(sx + TILE - 9, sy + TILE - 9, 3, 3);
            }
          }
        }
      }
    }

    // ── Mission markers ──
    const t = performance.now() / 1000;
    for (const m of missionsRef.current) {
      if (m.completed) continue;
      if (m.type === "delivery") {
        if (!m.pickedUp) drawMarker(ctx, m.px, m.py, "#FFD700", "📦", t);
        else drawMarker(ctx, m.dx, m.dy, "#00FF88", "🏠", t);
      } else if (m.type === "parking") {
        // Parking spot rectangle
        ctx.strokeStyle = "#00D4FF80";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(m.px - 16, m.py - 22, 32, 44);
        ctx.setLineDash([]);
        drawMarker(ctx, m.px, m.py, "#00D4FF", "🅿️", t);
      } else if (m.type === "coins" && m.coins) {
        for (const coin of m.coins) {
          // Coin glow
          ctx.fillStyle = "#FFD70025";
          ctx.beginPath();
          ctx.arc(coin.x, coin.y, 10 + Math.sin(t * 3) * 2, 0, Math.PI * 2);
          ctx.fill();
          // Coin body
          ctx.fillStyle = "#FFD700";
          ctx.beginPath();
          ctx.arc(coin.x, coin.y, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#FFA500";
          ctx.beginPath();
          ctx.arc(coin.x, coin.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // ── Cars ──
    for (let i = 0; i < carsRef.current.length; i++) {
      if (playerRef.current.inCar === i) continue;
      drawCar(ctx, carsRef.current[i], false);
    }
    if (playerRef.current.inCar >= 0) {
      drawCar(ctx, carsRef.current[playerRef.current.inCar], true);
    }

    // ── Player (on foot) ──
    if (playerRef.current.inCar < 0) {
      const ppx = playerRef.current.x;
      const ppy = playerRef.current.y;
      ctx.save();
      ctx.translate(ppx, ppy);
      ctx.rotate(playerRef.current.angle);
      // Ground glow
      ctx.fillStyle = skin.emissive + "20";
      ctx.beginPath();
      ctx.arc(0, 0, 12, 0, Math.PI * 2);
      ctx.fill();
      // Shadow
      ctx.fillStyle = "#00000040";
      ctx.beginPath();
      ctx.ellipse(1, 2, 6, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      // Legs
      ctx.fillStyle = skin.limbColor;
      ctx.fillRect(-4, 2, 3, 6);
      ctx.fillRect(1, 2, 3, 6);
      // Body
      ctx.fillStyle = skin.bodyColor;
      ctx.fillRect(-5, -5, 10, 10);
      // Head
      ctx.fillStyle = skin.headColor;
      ctx.beginPath();
      ctx.arc(0, -7, 5, 0, Math.PI * 2);
      ctx.fill();
      // Eyes (facing forward)
      ctx.fillStyle = "#000";
      ctx.fillRect(-2, -9, 1.5, 1.5);
      ctx.fillRect(1, -9, 1.5, 1.5);
      ctx.restore();

      // Enter car hint
      for (const car of carsRef.current) {
        const dist = Math.sqrt((playerRef.current.x - car.x) ** 2 + (playerRef.current.y - car.y) ** 2);
        if (dist < ENTER_DIST) {
          // Pulsing ring
          ctx.strokeStyle = car.color + "80";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(car.x, car.y, 24 + Math.sin(t * 4) * 3, 0, Math.PI * 2);
          ctx.stroke();
          // Label bg
          const lx = car.x;
          const ly = car.y - car.h / 2 - 18;
          ctx.fillStyle = "#000000AA";
          ctx.beginPath();
          ctx.roundRect(lx - 30, ly - 8, 60, 16, 4);
          ctx.fill();
          ctx.fillStyle = "#fff";
          ctx.font = "bold 9px monospace";
          ctx.textAlign = "center";
          ctx.fillText("SPACE", lx, ly + 4);
        }
      }
    }

    // ── End world transform ──
    ctx.restore();

    // ═══════════════════════════════════════════════
    //  HUD (screen space, no rotation/zoom)
    // ═══════════════════════════════════════════════

    // Camera mode pill
    const modeNames = ["BIRD'S EYE", "FOLLOW", "CHASE"];
    ctx.fillStyle = "#000000AA";
    ctx.beginPath();
    ctx.roundRect(W / 2 - 55, 10, 110, 24, 12);
    ctx.fill();
    ctx.fillStyle = "#FF6B00";
    ctx.font = "bold 10px monospace";
    ctx.textAlign = "center";
    ctx.fillText(`📷 ${modeNames[mode]}`, W / 2, 26);

    // Score panel
    ctx.fillStyle = "#000000CC";
    ctx.beginPath();
    ctx.roundRect(8, 8, 148, 52, 8);
    ctx.fill();
    ctx.strokeStyle = "#FF6B0040";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(8, 8, 148, 52, 8);
    ctx.stroke();
    ctx.fillStyle = "#FF6B00";
    ctx.font = "bold 20px monospace";
    ctx.textAlign = "left";
    ctx.fillText(`${scoreRef.current}`, 18, 36);
    ctx.fillStyle = "#ffffff50";
    ctx.font = "10px monospace";
    ctx.fillText("PTS", 18 + ctx.measureText(`${scoreRef.current}`).width + 6, 36);
    ctx.fillStyle = "#ffffff60";
    ctx.font = "11px monospace";
    ctx.fillText(`${missionsCompletedRef.current}/${TOTAL_MISSIONS} missions`, 18, 52);

    // Timer
    const tl = Math.ceil(timeRef.current);
    ctx.fillStyle = "#000000CC";
    ctx.beginPath();
    ctx.roundRect(W - 82, 8, 74, 34, 8);
    ctx.fill();
    const timerColor = tl < 10 ? "#FF2D78" : tl < 20 ? "#FFD700" : "#ffffff";
    ctx.strokeStyle = timerColor + "40";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(W - 82, 8, 74, 34, 8);
    ctx.stroke();
    ctx.fillStyle = timerColor;
    ctx.font = "bold 18px monospace";
    ctx.textAlign = "center";
    ctx.fillText(`${tl}s`, W - 45, 31);

    // Speed gauge (when in car)
    if (playerRef.current.inCar >= 0) {
      const car = carsRef.current[playerRef.current.inCar];
      const kmh = Math.abs(Math.round(car.speed));
      const pct = kmh / car.maxSpeed;
      const gaugeW = 90;
      ctx.fillStyle = "#000000CC";
      ctx.beginPath();
      ctx.roundRect(W / 2 - gaugeW / 2, H - 50, gaugeW, 38, 8);
      ctx.fill();
      // Speed bar
      ctx.fillStyle = car.color + "30";
      ctx.beginPath();
      ctx.roundRect(W / 2 - gaugeW / 2 + 6, H - 26, gaugeW - 12, 6, 3);
      ctx.fill();
      ctx.fillStyle = car.color;
      ctx.beginPath();
      ctx.roundRect(W / 2 - gaugeW / 2 + 6, H - 26, (gaugeW - 12) * Math.min(1, pct), 6, 3);
      ctx.fill();
      // Speed text
      ctx.fillStyle = "#fff";
      ctx.font = "bold 13px monospace";
      ctx.textAlign = "center";
      ctx.fillText(`${kmh} km/h`, W / 2, H - 32);
    }

    // Minimap
    const mmS = 3;
    const mmW = COLS * mmS;
    const mmH = ROWS * mmS;
    const mmX = W - mmW - 12;
    const mmY = H - mmH - 12;
    ctx.fillStyle = "#000000CC";
    ctx.beginPath();
    ctx.roundRect(mmX - 4, mmY - 4, mmW + 8, mmH + 8, 6);
    ctx.fill();
    for (let mr = 0; mr < ROWS; mr++) {
      for (let mc = 0; mc < COLS; mc++) {
        const mt = map[mr]?.[mc];
        if (mt === T_BUILDING) { ctx.fillStyle = "#1a1a30"; }
        else if (mt === T_SIDEWALK) { ctx.fillStyle = "#252540"; }
        else { ctx.fillStyle = "#303050"; }
        ctx.fillRect(mmX + mc * mmS, mmY + mr * mmS, mmS, mmS);
      }
    }
    // Player on minimap
    ctx.fillStyle = "#FF6B00";
    ctx.beginPath();
    ctx.arc(mmX + (playerRef.current.x / TILE) * mmS, mmY + (playerRef.current.y / TILE) * mmS, 2.5, 0, Math.PI * 2);
    ctx.fill();
    // Mission pings on minimap
    for (const m of missionsRef.current) {
      if (m.completed) continue;
      const mx = m.type === "delivery" && m.pickedUp ? m.dx : m.px;
      const my2 = m.type === "delivery" && m.pickedUp ? m.dy : m.py;
      ctx.fillStyle = m.type === "delivery" ? "#FFD700" : m.type === "parking" ? "#00D4FF" : "#FFD700";
      const pulse = 1.5 + Math.sin(t * 4) * 0.5;
      ctx.beginPath();
      ctx.arc(mmX + (mx / TILE) * mmS, mmY + (my2 / TILE) * mmS, pulse, 0, Math.PI * 2);
      ctx.fill();
    }

    // Message toast
    if (messageRef.current && messageRef.current.time > 0) {
      messageRef.current.time -= 1 / 60;
      const alpha = Math.min(1, messageRef.current.time);
      ctx.globalAlpha = alpha;
      const msgText = messageRef.current.text;
      ctx.font = "bold 15px monospace";
      const tw = ctx.measureText(msgText).width + 36;
      ctx.fillStyle = "#000000DD";
      ctx.beginPath();
      ctx.roundRect(W / 2 - tw / 2, 46, tw, 30, 8);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText(msgText, W / 2, 66);
      ctx.globalAlpha = 1;
    }

    // Mission list (left panel)
    ctx.textAlign = "left";
    let mly = 70;
    for (const m of missionsRef.current) {
      if (m.completed) continue;
      ctx.fillStyle = "#000000AA";
      ctx.beginPath();
      ctx.roundRect(8, mly, 175, 24, 6);
      ctx.fill();
      const mColor = m.type === "delivery" ? "#FFD700" : m.type === "parking" ? "#00D4FF" : "#FFD700";
      ctx.fillStyle = mColor;
      ctx.font = "bold 10px monospace";
      const icon = m.type === "delivery" ? "📦" : m.type === "parking" ? "🅿️" : "🪙";
      ctx.fillText(`${icon} ${m.label}${m.coinsLeft !== undefined ? ` (${m.coinsLeft})` : ""}`, 14, mly + 16);
      mly += 28;
    }

    // Vignette effect
    const vigGrad = ctx.createRadialGradient(W / 2, H / 2, W * 0.3, W / 2, H / 2, W * 0.8);
    vigGrad.addColorStop(0, "rgba(0,0,0,0)");
    vigGrad.addColorStop(1, "rgba(0,0,0,0.4)");
    ctx.fillStyle = vigGrad;
    ctx.fillRect(0, 0, W, H);
  }, []);

  function drawMarker(ctx: CanvasRenderingContext2D, x: number, y: number, color: string, emoji: string, t: number) {
    const pulse = Math.sin(t * 3) * 3;
    // Outer glow
    const grad = ctx.createRadialGradient(x, y, 0, x, y, 22 + pulse);
    grad.addColorStop(0, color + "40");
    grad.addColorStop(1, color + "00");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, 22 + pulse, 0, Math.PI * 2);
    ctx.fill();
    // Ring
    ctx.strokeStyle = color + "CC";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, 12, 0, Math.PI * 2);
    ctx.stroke();
    // Inner
    ctx.fillStyle = color + "40";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
    // Emoji
    ctx.font = "14px serif";
    ctx.textAlign = "center";
    ctx.fillText(emoji, x, y + 5);
    // Bouncing arrow
    const ay = -20 - Math.abs(Math.sin(t * 4)) * 6;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + ay + 6);
    ctx.lineTo(x - 4, y + ay);
    ctx.lineTo(x + 4, y + ay);
    ctx.closePath();
    ctx.fill();
  }

  function drawCar(ctx: CanvasRenderingContext2D, car: CarEntity, active: boolean) {
    ctx.save();
    ctx.translate(car.x, car.y);
    ctx.rotate(car.angle);

    const hw = car.w / 2;
    const hh = car.h / 2;

    // Underglow
    if (active) {
      const ugGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, hw + 10);
      ugGrad.addColorStop(0, car.color + "30");
      ugGrad.addColorStop(1, car.color + "00");
      ctx.fillStyle = ugGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, hw + 10, hh + 6, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Shadow
    ctx.fillStyle = "#00000050";
    ctx.beginPath();
    ctx.roundRect(-hw + 2, -hh + 2, car.w, car.h, 4);
    ctx.fill();

    // Body
    ctx.fillStyle = car.color;
    ctx.beginPath();
    ctx.roundRect(-hw, -hh, car.w, car.h, 4);
    ctx.fill();

    // Darker top half
    ctx.fillStyle = "#00000020";
    ctx.beginPath();
    ctx.roundRect(-hw, -hh, car.w, car.h * 0.4, [4, 4, 0, 0]);
    ctx.fill();

    // Windshield
    ctx.fillStyle = "#ffffff15";
    ctx.beginPath();
    ctx.roundRect(-hw + 3, -hh + 5, car.w - 6, 7, 2);
    ctx.fill();

    // Rear window
    ctx.fillStyle = "#ffffff10";
    ctx.beginPath();
    ctx.roundRect(-hw + 4, hh - 10, car.w - 8, 5, 2);
    ctx.fill();

    // Door line
    ctx.strokeStyle = "#00000030";
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(0, -hh + 12);
    ctx.lineTo(0, hh - 6);
    ctx.stroke();

    // Headlights
    ctx.fillStyle = "#FFFF99";
    ctx.beginPath();
    ctx.roundRect(-hw + 2, -hh - 1, 4, 3, 1);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(hw - 6, -hh - 1, 4, 3, 1);
    ctx.fill();
    // Headlight beam
    if (active) {
      ctx.fillStyle = "#FFFF9910";
      ctx.beginPath();
      ctx.moveTo(-hw + 2, -hh);
      ctx.lineTo(-hw - 6, -hh - 30);
      ctx.lineTo(hw + 6, -hh - 30);
      ctx.lineTo(hw - 2, -hh);
      ctx.closePath();
      ctx.fill();
    }

    // Tail lights
    ctx.fillStyle = "#FF0000CC";
    ctx.beginPath();
    ctx.roundRect(-hw + 2, hh - 3, 4, 2, 1);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(hw - 6, hh - 3, 4, 2, 1);
    ctx.fill();

    // Wheels
    ctx.fillStyle = "#111";
    ctx.fillRect(-hw - 2, -hh + 4, 3, 6);
    ctx.fillRect(hw - 1, -hh + 4, 3, 6);
    ctx.fillRect(-hw - 2, hh - 10, 3, 6);
    ctx.fillRect(hw - 1, hh - 10, 3, 6);

    if (active) {
      ctx.strokeStyle = car.color + "80";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(-hw - 1, -hh - 1, car.w + 2, car.h + 2, 5);
      ctx.stroke();
    }

    ctx.restore();
  }

  // ─── GAME LOOP EFFECT ──────────────────────
  useEffect(() => {
    if (gameState !== "playing") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    lastTimeRef.current = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = now;
      update(dt);
      render();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [gameState, update, render]);

  // ─── KEYBOARD ──────────────────────────────
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      keysRef.current.add(e.key);
      if (e.key === " ") e.preventDefault();
      if (e.key === "c" || e.key === "C") { camModeRef.current = (camModeRef.current + 1) % 3; }
    };
    const up = (e: KeyboardEvent) => keysRef.current.delete(e.key);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  // ─── SAVE CARD ─────────────────────────────
  useEffect(() => {
    if (gameState !== "result" || cardSaved) return;
    const total = TOTAL_MISSIONS * 100;
    const score = finalScore;
    const rarity = calculateRarity(Math.min(score, total), total, 1);
    saveCard({
      id: generateCardId(),
      game: "citydrive",
      theme: "city",
      rarity,
      score,
      total,
      date: new Date().toISOString(),
    });
    incrementTotalGames();
    updateStats({});
    setCardSaved(true);
  }, [gameState, cardSaved, finalScore]);

  const handlePlayAgain = () => {
    setCardSaved(false);
    setCountdown(3);
    setGameState("countdown");
  };

  const startGame = () => { setCountdown(3); setGameState("countdown"); };

  const totalForRarity = TOTAL_MISSIONS * 100;
  const rarity = calculateRarity(Math.min(finalScore, totalForRarity), totalForRarity, 1);

  // ─── JSX ───────────────────────────────────
  return (
    <div className="fixed inset-0 bg-[#0A0A1A] overflow-hidden select-none" style={{ touchAction: "none" }}>
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* MENU */}
      <AnimatePresence>
        {gameState === "menu" && (
          <motion.div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0A0A1A]/95"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ type: "spring" }}>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🏎️</div>
                <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  CITY DRIVE
                </h1>
                <p className="text-white/50 text-sm mt-2 max-w-xs mx-auto">
                  Get in cars, complete missions in the neon city!
                </p>
              </div>

              <div className="space-y-3 mb-8 px-4 max-w-sm mx-auto">
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
                  <span className="text-lg">🚗</span>
                  <div className="text-xs text-white/70"><b className="text-white">5 cars</b> — different speeds</div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
                  <span className="text-lg">📦</span>
                  <div className="text-xs text-white/70"><b className="text-white">Missions</b> — delivery, parking, collect</div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-2">
                  <span className="text-lg">⏱️</span>
                  <div className="text-xs text-white/70"><b className="text-white">90 sec</b> — score as many points as you can!</div>
                </div>
              </div>

              <div className="text-center space-y-3 px-4">
                <div className="text-[10px] text-white/30 mb-2">
                  WASD / arrows: move • SPACE: enter/exit car • C: camera
                </div>
                <button onClick={startGame}
                  className="w-full max-w-xs py-3 rounded-xl font-black text-lg text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all shadow-lg shadow-orange-500/30 active:scale-95">
                  START
                </button>
                <Link href="/" className="block text-white/40 text-sm hover:text-white/60 transition-colors mt-4">
                  ← Back
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COUNTDOWN */}
      <AnimatePresence>
        {gameState === "countdown" && (
          <motion.div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0A0A1A]/80"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div key={countdown} initial={{ scale: 3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
              className="text-7xl font-black text-orange-400">
              {countdown > 0 ? countdown : "GO!"}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOUCH CONTROLS */}
      {gameState === "playing" && (
        <>
          {/* Joystick area */}
          <div className="absolute left-0 bottom-0 w-[45%] h-[45%] z-10"
            onTouchStart={(e) => {
              const t = e.touches[0];
              touchRef.current = { active: true, sx: t.clientX, sy: t.clientY, cx: t.clientX, cy: t.clientY };
            }}
            onTouchMove={(e) => {
              const t = e.touches[0];
              touchRef.current.cx = t.clientX;
              touchRef.current.cy = t.clientY;
            }}
            onTouchEnd={() => { touchRef.current.active = false; }}
          />
          {/* Action button */}
          <button className="absolute right-4 bottom-4 w-16 h-16 rounded-full bg-orange-500/30 border-2 border-orange-400/60 z-10 flex items-center justify-center text-white font-bold text-xs active:bg-orange-500/60"
            onTouchStart={(e) => { e.preventDefault(); actionTouchRef.current = true; }}>
            ⏎
          </button>
          {/* Brake button */}
          <button className="absolute right-24 bottom-4 w-14 h-14 rounded-full bg-red-500/20 border-2 border-red-400/40 z-10 flex items-center justify-center text-white font-bold text-xs active:bg-red-500/50"
            onTouchStart={() => keysRef.current.add("Shift")}
            onTouchEnd={() => keysRef.current.delete("Shift")}>
            🛑
          </button>
          {/* Camera toggle */}
          <button className="absolute right-4 bottom-24 w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 z-10 flex items-center justify-center text-white text-lg active:bg-white/20"
            onTouchStart={(e) => { e.preventDefault(); camModeRef.current = (camModeRef.current + 1) % 3; }}>
            📷
          </button>
        </>
      )}

      {/* RESULT */}
      <AnimatePresence>
        {gameState === "result" && (
          <motion.div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0A0A1A]/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="w-full max-w-sm">
              <ResultCard
                score={finalScore}
                total={totalForRarity}
                gameName="City Drive"
                gameIcon={<Car size={18} />}
                onPlayAgain={handlePlayAgain}
              />
              <div className="text-center mt-3 text-white/40 text-xs">
                {finalMissions}/{TOTAL_MISSIONS} missions completed
              </div>
              <button onClick={() => setGameState("reward")}
                className="mt-3 w-full py-2 rounded-lg bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-bold hover:bg-orange-500/30 transition-all">
                View Card →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* REWARD */}
      {gameState === "reward" && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#0A0A1A]/95 p-4">
          <RewardReveal rarity={rarity} game="citydrive" score={finalScore} total={totalForRarity}
            onDone={() => { setGameState("menu"); setShowMilestone(true); }} />
        </div>
      )}

      {/* MILESTONE */}
      {showMilestone && <MilestonePopup />}
    </div>
  );
}
