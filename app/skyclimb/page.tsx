"use client";

import { useState, useEffect, useRef, useCallback, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain, Trophy, ArrowUp, RotateCcw, Home, Maximize, Share, Rocket, Shield, Zap, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import RewardReveal from "@/components/RewardReveal";
import { saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getHatDef, getActiveHat, getTrailDef, getActiveTrail } from "@/lib/accessories";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getGender } from "@/lib/gender";
import { AVATAR_DEFAULTS } from "@/lib/avatarDefaults";
import { incrementTotalGames, updateStats } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import MultiplayerExitConfirm from "@/components/MultiplayerExitConfirm";
import MultiplayerAbandonNotice from "@/components/MultiplayerAbandonNotice";
import MultiplayerResult from "@/components/MultiplayerResult";
import MixRoundResult from "@/components/MixRoundResult";
import { submitScore, submitMixRoundScore, abandonMatch, pollMixRound } from "@/lib/multiplayer";
import { getUsername } from "@/lib/username";
import { supabase } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";

// ─── SEEDED PRNG ────────────────────────────────
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashSeed(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return h;
}

// ─── TYPES ──────────────────────────────────────
interface Platform3D {
  x: number;
  y: number;
  z: number;
  w: number;
  d: number;
  h: number;
  type: "ground" | "rock" | "step" | "bridge" | "moving" | "crumble" | "ice" | "bounce";
  moveAxis?: "x" | "z";
  moveRange?: number;
  moveSpeed?: number;
  origX?: number;
  origZ?: number;
  crumbleTimer?: number;
  touched?: boolean;
  trees?: { ox: number; oz: number; s: number }[];
  rocks?: { ox: number; oz: number; s: number }[];
  deltaX?: number;
  deltaZ?: number;
}

type PowerUpType = "rocket" | "shield" | "magnet";

interface PowerUpItem {
  x: number;
  y: number;
  z: number;
  type: PowerUpType;
  collected: boolean;
}

type GameState = "menu" | "playing" | "dead" | "level-complete" | "reward" | "multi-waiting" | "mix-round-result";

// ─── CONSTANTS (TUNED) ──────────────────────────
const GRAVITY = 0.022;
const JUMP_FORCE = 0.42;
const MOVE_SPEED = 0.045;
const RUN_SPEED = 0.075;
const PLAYER_RADIUS = 0.3;
const CAM_DISTANCE = 9;
const CAM_HEIGHT = 4.5;
const FRICTION = 0.85;
const ACCEL = 0.06;
const COYOTE_FRAMES = 6;
const JUMP_BUFFER = 8;
const ROCKET_FORCE = 1.6;
const ROCKET_SKIP_PLATFORMS = 5;
const MAGNET_DURATION = 300;
const MAGNET_PULL = 0.006;
const WIN_ANIM_FRAMES = 90;

// ─── LEVEL GENERATION (CONNECTED PATH) ─────────────
function generateLevel(level: number, seed?: string): { platforms: Platform3D[]; goalIdx: number; powerUps: PowerUpItem[] } {
  const rng = seed ? mulberry32(hashSeed(seed + "-" + level)) : () => Math.random();
  const platforms: Platform3D[] = [];
  const difficulty = Math.min(level, 10);

  let edgeZ = 5;
  let surfY = 0;
  let cx = 0;

  function addTrees(p: Platform3D, count: number) {
    p.trees = [];
    for (let i = 0; i < count; i++) {
      p.trees.push({
        ox: (rng() - 0.5) * Math.max(p.w - 2, 1),
        oz: (rng() - 0.5) * Math.max(p.d - 2, 1),
        s: 0.6 + rng() * 0.6,
      });
    }
  }

  function addRocks(p: Platform3D, count: number) {
    p.rocks = [];
    for (let i = 0; i < count; i++) {
      p.rocks.push({
        ox: (rng() - 0.5) * Math.max(p.w - 1, 0.5),
        oz: (rng() - 0.5) * Math.max(p.d - 1, 0.5),
        s: 0.2 + rng() * 0.4,
      });
    }
  }

  // Start platform
  const startH = 1;
  const start: Platform3D = { x: 0, y: -startH / 2, z: 0, w: 9, d: 9, h: startH, type: "ground" };
  addTrees(start, 3);
  addRocks(start, 2);
  platforms.push(start);

  const segCount = 8 + level * 2;

  for (let s = 0; s < segCount; s++) {
    const roll = rng();

    // Lateral shift increases with difficulty for zigzag paths
    const lateralShift = difficulty >= 3 ? (rng() - 0.5) * (1.5 + difficulty * 0.3) : (rng() - 0.5) * 0.4;

    if (s < 2 || (s % 4 === 0 && roll < 0.35)) {
      // ── GROUND REST AREA ──
      const depth = 5 + rng() * 3;
      const w = 6 + rng() * 3;
      const h = 1 + rng() * 0.5;
      surfY += 0.6 + rng() * 0.4;
      cx += lateralShift;

      const gap = 0.5 + rng() * 0.3;
      const centerZ = edgeZ + gap + depth / 2;
      const p: Platform3D = {
        x: cx, y: surfY - h / 2, z: centerZ,
        w, d: depth, h, type: "ground",
      };
      addTrees(p, 1 + Math.floor(rng() * 2));
      addRocks(p, Math.floor(rng() * 2));
      platforms.push(p);
      edgeZ = centerZ + depth / 2;
    } else if (roll < 0.40) {
      // ── GAP JUMP — wider platforms, manageable gaps ──
      const gap = 0.8 + difficulty * 0.06;
      const d = 4 + rng() * 2;
      const w = 4 + rng() * 2;
      const h = 0.6 + rng() * 0.4;
      surfY += 0.3 + rng() * 0.5;
      cx += lateralShift * 1.5;

      const centerZ = edgeZ + gap + d / 2;
      const p: Platform3D = {
        x: cx, y: surfY - h / 2, z: centerZ,
        w, d, h, type: "rock",
      };
      addRocks(p, Math.floor(rng() * 2));
      platforms.push(p);
      edgeZ = centerZ + d / 2;
    } else if (roll < 0.58) {
      // ── STAIRCASE — zigzag steps at higher levels ──
      const steps = 3 + Math.floor(rng() * 3);
      const zigzag = difficulty >= 4;
      for (let i = 0; i < steps; i++) {
        const stepD = 2.5 + rng() * 1.0;
        const stepW = 3.5 + rng() * 1.5;
        const stepH = 0.4 + rng() * 0.3;
        surfY += 0.5 + rng() * 0.3;
        cx += zigzag ? ((i % 2 === 0 ? 1 : -1) * (1.0 + rng() * 0.8)) : (rng() - 0.5) * 0.7;

        const gap = 0.3 + rng() * 0.2;
        const centerZ = edgeZ + gap + stepD / 2;
        platforms.push({
          x: cx, y: surfY - stepH / 2, z: centerZ,
          w: stepW, d: stepD, h: stepH, type: "step",
        });
        edgeZ = centerZ + stepD / 2;
      }
    } else if (roll < 0.68) {
      // ── BRIDGE — slightly wider ──
      const bLen = 4 + rng() * 4;
      const bH = 0.3;
      surfY += 0.2 + rng() * 0.2;
      cx += lateralShift * 0.5;

      const centerZ = edgeZ + bLen / 2;
      platforms.push({
        x: cx, y: surfY - bH / 2, z: centerZ,
        w: 2.2 + rng() * 0.6, d: bLen, h: bH, type: "bridge",
      });
      edgeZ = centerZ + bLen / 2;
    } else if (difficulty >= 3 && roll < 0.78) {
      // ── MOVING PLATFORM ──
      const gap = 1.0;
      surfY += 0.5;
      cx += lateralShift;

      const centerZ = edgeZ + gap + 2;
      platforms.push({
        x: cx, y: surfY - 0.2, z: centerZ, w: 3.5, d: 3.5, h: 0.4,
        type: "moving",
        origX: cx, origZ: centerZ,
        moveAxis: rng() > 0.5 ? "x" : "z",
        moveRange: 1.2 + rng() * 1.2,
        moveSpeed: 0.35 + difficulty * 0.08,
        deltaX: 0, deltaZ: 0,
      });
      edgeZ = centerZ + 1.75;
    } else if (difficulty >= 4 && roll < 0.88) {
      // ── CRUMBLE PLATFORMS ──
      const count = 2 + Math.floor(rng() * 2);
      for (let i = 0; i < count; i++) {
        surfY += 0.3 + rng() * 0.3;
        cx += (rng() - 0.5) * 1.5;
        const pD = 3;

        const centerZ = edgeZ + 0.6 + pD / 2;
        platforms.push({
          x: cx, y: surfY - 0.15, z: centerZ, w: 3, d: pD, h: 0.3,
          type: "crumble",
          crumbleTimer: 0, touched: false,
        });
        edgeZ = centerZ + pD / 2;
      }
    } else if (difficulty >= 5 && roll < 0.93) {
      // ── FLOATING SPHERES / SMALL ISLANDS — high level challenge ──
      const count = 2 + Math.floor(rng() * 3);
      for (let i = 0; i < count; i++) {
        surfY += 0.4 + rng() * 0.5;
        cx += ((i % 2 === 0 ? 1 : -1) * (1.5 + rng() * 1.5));
        const size = 1.8 + rng() * 1.2;

        const centerZ = edgeZ + 1.0 + size / 2;
        platforms.push({
          x: cx, y: surfY - 0.15, z: centerZ,
          w: size, d: size, h: 0.3,
          type: "rock",
        });
        edgeZ = centerZ + size / 2;
      }
    } else if (level >= 10 && roll < 0.96) {
      // ── ICE PLATFORMS (level 10+) — slippery, low friction ──
      const count = 2 + Math.floor(rng() * 3);
      for (let i = 0; i < count; i++) {
        surfY += 0.3 + rng() * 0.4;
        cx += (rng() - 0.5) * 2.5;
        const d = 3 + rng() * 2;
        const w = 3 + rng() * 2;
        const centerZ = edgeZ + 0.6 + d / 2;
        platforms.push({
          x: cx, y: surfY - 0.15, z: centerZ,
          w, d, h: 0.3,
          type: "ice",
        });
        edgeZ = centerZ + d / 2;
      }
    } else if (level >= 15) {
      // ── BOUNCE PLATFORMS (level 15+) — bounce you up high ──
      const count = 2 + Math.floor(rng() * 2);
      for (let i = 0; i < count; i++) {
        surfY += 0.8 + rng() * 0.6;
        cx += ((i % 2 === 0 ? 1 : -1) * (1.2 + rng() * 1.5));
        const size = 2.2 + rng() * 1.0;
        const centerZ = edgeZ + 1.2 + size / 2;
        platforms.push({
          x: cx, y: surfY - 0.15, z: centerZ,
          w: size, d: size, h: 0.3,
          type: "bounce",
        });
        edgeZ = centerZ + size / 2;
      }
    }
  }

  // ── GOAL PLATFORM ──
  surfY += 0.2;
  const goalD = 8, goalH = 1;
  const goalZ = edgeZ + goalD / 2;
  const goal: Platform3D = {
    x: cx, y: surfY - goalH / 2, z: goalZ,
    w: 8, d: goalD, h: goalH, type: "ground",
  };
  addTrees(goal, 2);
  platforms.push(goal);

  // ── POWER-UPS ──
  const powerUps: PowerUpItem[] = [];
  const availableTypes: PowerUpType[] = ["shield"];
  if (level >= 3) availableTypes.push("magnet");
  if (level >= 5) availableTypes.push("rocket");

  // Max 1 power-up per level
  const candidates = platforms.slice(2, -1).filter(p => p.type !== "crumble" && p.type !== "moving");

  if (candidates.length > 0) {
    const idx = Math.floor(rng() * candidates.length);
    const plat = candidates[idx];
    powerUps.push({
      x: plat.x + (rng() - 0.5) * Math.max(plat.w - 2, 0.5),
      y: plat.y + plat.h / 2 + 1.2,
      z: plat.z + (rng() - 0.5) * Math.max(plat.d - 2, 0.5),
      type: availableTypes[Math.floor(rng() * availableTypes.length)],
      collected: false,
    });
  }

  return { platforms, goalIdx: platforms.length - 1, powerUps };
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
  camDist: number;
  walkCycle: number;
  isRunning: boolean;
  coyoteTimer: number;
  jumpBufferTimer: number;
  lastGroundY: number;
  // Power-ups
  powerUps: PowerUpItem[];
  hasShield: boolean;
  magnetTimer: number;
  rocketTimer: number;
  // Platform state
  onIce: boolean;
  // Progress tracking
  bestHeight: number;
  // Win animation
  winAnim: boolean;
  winAnimTimer: number;
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
    camDist: CAM_DISTANCE,
    walkCycle: 0,
    isRunning: false,
    coyoteTimer: 0,
    jumpBufferTimer: 0,
    lastGroundY: 0,
    powerUps: [],
    hasShield: false,
    magnetTimer: 0,
    rocketTimer: 0,
    onIce: false,
    bestHeight: 0,
    winAnim: false,
    winAnimTimer: 0,
  };
}

// ─── CHARACTER (HUMANOID) ────────────────────────────
function Character({ gameRef, skinId, hatId, trailId }: { gameRef: React.RefObject<GameData>; skinId: string; hatId: string | null; trailId: string | null }) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyGroupRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const leftForearmRef = useRef<THREE.Group>(null);
  const rightForearmRef = useRef<THREE.Group>(null);
  const trailRef = useRef<THREE.Group>(null);

  const skin = useMemo(() => getSkinDef(skinId), [skinId]);
  const hat = useMemo(() => hatId ? getHatDef(hatId) : null, [hatId]);
  const trail = useMemo(() => trailId ? getTrailDef(trailId) : null, [trailId]);

  // Clothing & face (read from localStorage)
  const topDef = useMemo(() => { const id = getActive("top"); return id ? getTopDef(id) : null; }, []);
  const bottomDef = useMemo(() => { const id = getActive("bottom"); return id ? getBottomDef(id) : null; }, []);
  const shoeDef = useMemo(() => { const id = getActive("shoe"); return id ? getShoeDef(id) : null; }, []);
  const capeDef = useMemo(() => { const id = getActive("cape"); return id ? getCapeDef(id) : null; }, []);
  const glassesDef = useMemo(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; }, []);
  const gloveDef = useMemo(() => { const id = getActive("gloves"); return id ? getGloveDef(id) : null; }, []);
  const face = useMemo(() => getFaceDef(getActiveFace()), []);

  const gender = useMemo(() => getGender(), []);
  const hasRealSkin = skin.id !== 'default';
  const hairColor = hasRealSkin ? skin.headColor : AVATAR_DEFAULTS.hairColor;
  const skinHeadColor = hasRealSkin ? skin.headColor : AVATAR_DEFAULTS.skinColor;
  const isGirl = gender === 'girl';

  // Trail particle positions
  const trailParticles = useRef<{ x: number; y: number; z: number; life: number }[]>([]);

  // Materials - imported from shared AVATAR_DEFAULTS
  const bodyColor = topDef ? topDef.color : (hasRealSkin ? skin.bodyColor : AVATAR_DEFAULTS.outfitColor);
  const legColor = bottomDef ? bottomDef.color : (hasRealSkin ? skin.limbColor : AVATAR_DEFAULTS.legColor);
  const shoeColor = shoeDef ? shoeDef.color : (hasRealSkin ? skin.shoeColor : AVATAR_DEFAULTS.shoeColor);
  const armEndColor = gloveDef ? gloveDef.color : (hasRealSkin ? skin.limbColor : AVATAR_DEFAULTS.armColor);

  // Emissive intensity matching AvatarCompanion (base = skin.emissiveIntensity * 0.3)
  const ei = skin.emissiveIntensity * 0.3;
  const bodyMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: bodyColor, emissive: skin.emissive, emissiveIntensity: ei,
    roughness: 0.68, metalness: 0.04,
    transparent: skin.id === "ghost", opacity: skin.id === "ghost" ? 0.6 : 1,
  }), [skin, bodyColor, ei]);
  const headMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: skinHeadColor, emissive: skin.emissive, emissiveIntensity: ei * 0.5,
    roughness: 0.55, metalness: 0.02,
    transparent: skin.id === "ghost", opacity: skin.id === "ghost" ? 0.5 : 1,
  }), [skin, skinHeadColor, ei]);
  const limbMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: legColor, emissive: skin.emissive, emissiveIntensity: ei * 0.4,
    roughness: 0.68, metalness: 0.04,
    transparent: skin.id === "ghost", opacity: skin.id === "ghost" ? 0.4 : 1,
  }), [skin, legColor, ei]);
  const armMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: hasRealSkin ? skin.limbColor : AVATAR_DEFAULTS.armColor, emissive: skin.emissive, emissiveIntensity: ei * 0.4,
    roughness: 0.62, metalness: 0.02,
    transparent: skin.id === "ghost", opacity: skin.id === "ghost" ? 0.4 : 1,
  }), [skin, ei]);
  const gloveMat = useMemo(() => gloveDef ? new THREE.MeshStandardMaterial({
    color: gloveDef.color, emissive: skin.emissive, emissiveIntensity: ei * 0.3,
    roughness: 0.55,
  }) : null, [skin, gloveDef, ei]);
  const eyeMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: face.eyeColor || (skin.id === "robot" ? "#00FF00" : "#0A0A1A"),
    emissive: face.eyeColor || (skin.id === "robot" ? "#00FF00" : "#000000"),
    emissiveIntensity: face.eyeType === "star" || face.eyeType === "heart" || skin.id === "robot" ? 0.8 : 0,
  }), [skin, face]);
  const mouthMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: face.mouthColor || "#0A0A1A",
    emissive: face.mouthColor || "#000000",
    emissiveIntensity: 0,
  }), [face]);
  const shoeMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: shoeColor, emissive: skin.emissive, emissiveIntensity: ei * 0.3,
    roughness: 0.7,
  }), [skin, shoeColor, ei]);
  const capeMat = useMemo(() => capeDef ? new THREE.MeshStandardMaterial({
    color: capeDef.color, emissive: capeDef.emissive, emissiveIntensity: capeDef.emissiveIntensity,
    side: THREE.DoubleSide,
  }) : null, [capeDef]);

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

    // Win animation: arms up celebration
    if (g.winAnim && g.winAnimTimer > 30) {
      if (leftArmRef.current) leftArmRef.current.rotation.x = -2.5;
      if (rightArmRef.current) rightArmRef.current.rotation.x = -2.5;
      if (leftForearmRef.current) leftForearmRef.current.rotation.x = 0;
      if (rightForearmRef.current) rightForearmRef.current.rotation.x = 0;
      if (leftLegRef.current) leftLegRef.current.rotation.x = 0;
      if (rightLegRef.current) rightLegRef.current.rotation.x = 0;
    } else {
      if (leftLegRef.current) leftLegRef.current.rotation.x = legSwing;
      if (rightLegRef.current) rightLegRef.current.rotation.x = -legSwing;
      if (leftArmRef.current) leftArmRef.current.rotation.x = armSwing;
      if (rightArmRef.current) rightArmRef.current.rotation.x = -armSwing;
      if (leftForearmRef.current) leftForearmRef.current.rotation.x = isAirborne ? 0.3 : Math.sin(g.walkCycle) * 0.2;
      if (rightForearmRef.current) rightForearmRef.current.rotation.x = isAirborne ? 0.3 : Math.sin(g.walkCycle + Math.PI) * 0.2;
    }

    // Trail particles
    if (trail && isMoving) {
      trailParticles.current.push({ x: g.px, y: g.py + 0.3, z: g.pz, life: 30 });
      if (trailParticles.current.length > 20) trailParticles.current.shift();
    }
    trailParticles.current = trailParticles.current
      .map(p => ({ ...p, life: p.life - 1 }))
      .filter(p => p.life > 0);

    // Update trail mesh positions
    if (trailRef.current && trail) {
      const children = trailRef.current.children;
      for (let i = 0; i < children.length; i++) {
        const p = trailParticles.current[i];
        if (p) {
          children[i].position.set(p.x, p.y + (30 - p.life) * 0.02, p.z);
          children[i].visible = true;
          const scale = p.life / 30 * 0.6;
          children[i].scale.set(scale, scale, scale);
        } else {
          children[i].visible = false;
        }
      }
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={bodyGroupRef}>

        {/* ── CAPE (behind body) ── */}
        {capeDef && capeMat && (
          <group position={[0, 0.52, -0.14]}>
            <mesh material={capeMat}><boxGeometry args={[0.40, 0.06, 0.04]} /></mesh>
            <mesh position={[0, -0.22, -0.02]} material={capeMat}><boxGeometry args={[0.36, 0.38, 0.025]} /></mesh>
            <mesh position={[0, -0.48, -0.04]} material={capeMat}><boxGeometry args={[0.30, 0.2, 0.018]} /></mesh>
          </group>
        )}

        {/* ── BODY (rounded torso — matching AvatarCompanion) ── */}
        <group position={[0, 0.48, 0]}>
          {/* Main torso cylinder */}
          <mesh material={bodyMat}>
            <cylinderGeometry args={[(isGirl ? 0.40 : 0.43) * 0.46, (isGirl ? 0.40 : 0.43) * 0.50, (isGirl ? 0.58 : 0.60) * 0.75, 10]} />
          </mesh>
          {/* Chest volume */}
          <mesh position={[0, 0.08, 0.04]} scale={[(isGirl ? 0.40 : 0.43) * 2.2, 0.70, 0.85]} material={bodyMat}>
            <sphereGeometry args={[0.14, 10, 8]} />
          </mesh>
          {/* Hip area */}
          <mesh position={[0, -0.18, 0]} scale={[(isGirl ? 0.40 : 0.43) * 2.4, 0.55, 0.92]} material={bodyMat}>
            <sphereGeometry args={[0.14, 10, 8]} />
          </mesh>
        </group>

        {/* Shirt collar */}
        {topDef && (
          <>
            <mesh position={[0, 0.80, 0.05]}>
              <boxGeometry args={[0.24, 0.05, 0.05]} />
              <meshStandardMaterial color={topDef.accent || bodyColor} roughness={0.6} />
            </mesh>
            <mesh position={[-0.06, 0.78, 0.08]} rotation={[0, 0.3, 0.15]}>
              <boxGeometry args={[0.08, 0.038, 0.018]} />
              <meshStandardMaterial color={topDef.accent || bodyColor} roughness={0.6} />
            </mesh>
            <mesh position={[0.06, 0.78, 0.08]} rotation={[0, -0.3, -0.15]}>
              <boxGeometry args={[0.08, 0.038, 0.018]} />
              <meshStandardMaterial color={topDef.accent || bodyColor} roughness={0.6} />
            </mesh>
          </>
        )}

        {/* Buttons */}
        {[0.56, 0.50, 0.44].map((y, i) => (
          <mesh key={i} position={[0, y, 0.155]}>
            <cylinderGeometry args={[0.010, 0.010, 0.006, 8]} />
            <meshStandardMaterial color={topDef?.accent || bodyColor} roughness={0.4} metalness={0.3} />
          </mesh>
        ))}

        {/* Pockets */}
        <mesh position={[-0.10, 0.44, 0.148]}>
          <boxGeometry args={[0.068, 0.060, 0.006]} />
          <meshStandardMaterial color={bodyColor} roughness={0.72} />
        </mesh>
        <mesh position={[-0.10, 0.44, 0.150]}>
          <boxGeometry args={[0.071, 0.063, 0.003]} />
          <meshStandardMaterial color={topDef?.accent || bodyColor} roughness={0.65} transparent opacity={0.5} />
        </mesh>
        <mesh position={[0.10, 0.44, 0.148]}>
          <boxGeometry args={[0.068, 0.060, 0.006]} />
          <meshStandardMaterial color={bodyColor} roughness={0.72} />
        </mesh>
        <mesh position={[0.10, 0.44, 0.150]}>
          <boxGeometry args={[0.071, 0.063, 0.003]} />
          <meshStandardMaterial color={topDef?.accent || bodyColor} roughness={0.65} transparent opacity={0.5} />
        </mesh>

        {/* Belt line */}
        <mesh position={[0, 0.26, 0.02]}>
          <boxGeometry args={[(isGirl ? 0.40 : 0.43) + 0.02, 0.016, 0.27]} />
          <meshStandardMaterial color={legColor} roughness={0.82} />
        </mesh>
        <mesh position={[0, 0.262, 0.145]}>
          <boxGeometry args={[0.050, 0.025, 0.006]} />
          <meshStandardMaterial color="#8a7050" roughness={0.4} metalness={0.5} />
        </mesh>

        {/* ── SHOULDERS ── */}
        <mesh position={[0.24, 0.65, 0]} material={bodyMat}>
          <sphereGeometry args={[0.085, 8, 6]} />
        </mesh>
        <mesh position={[-0.24, 0.65, 0]} material={bodyMat}>
          <sphereGeometry args={[0.085, 8, 6]} />
        </mesh>

        {/* ── ARMS (matching AvatarCompanion: upper + elbow bump + forearm + hand) ── */}
        <group ref={leftArmRef} position={[0.28, 0.60, 0]} rotation={[0.12, 0, -0.15]}>
          <mesh position={[0, -0.12, 0]} material={armMat}>
            <cylinderGeometry args={[0.045, 0.052, 0.24, 6]} />
          </mesh>
          {/* Elbow bump */}
          <mesh position={[0, -0.24, -0.01]} scale={[0.72, 0.52, 0.62]} material={armMat}>
            <sphereGeometry args={[0.052, 8, 6]} />
          </mesh>
          <group ref={leftForearmRef} position={[0, -0.24, 0]}>
            <mesh position={[0, -0.09, 0]} material={armMat}>
              <cylinderGeometry args={[0.04, 0.045, 0.18, 6]} />
            </mesh>
            {gloveMat
              ? <mesh position={[0, -0.20, 0]} material={gloveMat}><sphereGeometry args={[0.065, 8, 6]} /></mesh>
              : <mesh position={[0, -0.20, 0]} material={armMat}><sphereGeometry args={[0.058, 8, 6]} /></mesh>
            }
          </group>
        </group>
        <group ref={rightArmRef} position={[-0.28, 0.60, 0]} rotation={[0.12, 0, 0.15]}>
          <mesh position={[0, -0.12, 0]} material={armMat}>
            <cylinderGeometry args={[0.045, 0.052, 0.24, 6]} />
          </mesh>
          {/* Elbow bump */}
          <mesh position={[0, -0.24, -0.01]} scale={[0.72, 0.52, 0.62]} material={armMat}>
            <sphereGeometry args={[0.052, 8, 6]} />
          </mesh>
          <group ref={rightForearmRef} position={[0, -0.24, 0]}>
            <mesh position={[0, -0.09, 0]} material={armMat}>
              <cylinderGeometry args={[0.04, 0.045, 0.18, 6]} />
            </mesh>
            {gloveMat
              ? <mesh position={[0, -0.20, 0]} material={gloveMat}><sphereGeometry args={[0.065, 8, 6]} /></mesh>
              : <mesh position={[0, -0.20, 0]} material={armMat}><sphereGeometry args={[0.058, 8, 6]} /></mesh>
            }
          </group>
        </group>

        {/* ── LEGS ── */}
        <group ref={leftLegRef} position={[0.11, 0.24, 0]}>
          <mesh position={[0, -0.16, 0]} material={limbMat}>
            <cylinderGeometry args={[0.072, 0.082, 0.32, 6]} />
          </mesh>
          {/* Shoe sole */}
          <mesh position={[0, -0.335, 0.04]} material={shoeMat}>
            <boxGeometry args={[0.13, 0.065, 0.20]} />
          </mesh>
          {/* Shoe top */}
          <mesh position={[0, -0.310, 0.028]}>
            <boxGeometry args={[0.125, 0.035, 0.16]} />
            <meshStandardMaterial color={shoeColor} roughness={0.75} />
          </mesh>
        </group>
        <group ref={rightLegRef} position={[-0.11, 0.24, 0]}>
          <mesh position={[0, -0.16, 0]} material={limbMat}>
            <cylinderGeometry args={[0.072, 0.082, 0.32, 6]} />
          </mesh>
          {/* Shoe sole */}
          <mesh position={[0, -0.335, 0.04]} material={shoeMat}>
            <boxGeometry args={[0.13, 0.065, 0.20]} />
          </mesh>
          {/* Shoe top */}
          <mesh position={[0, -0.310, 0.028]}>
            <boxGeometry args={[0.125, 0.035, 0.16]} />
            <meshStandardMaterial color={shoeColor} roughness={0.75} />
          </mesh>
        </group>

        {/* ── NECK ── */}
        <mesh position={[0, 0.82, 0]} material={headMat}>
          <cylinderGeometry args={[0.07, 0.085, 0.16, 8]} />
        </mesh>

        {/* ── HEAD ── */}
        <group position={[0, 0.97, 0]}>
          {/* Main head sphere */}
          <mesh material={headMat}>
            <sphereGeometry args={[0.18, 16, 12]} />
          </mesh>
          {/* Chin */}
          <mesh position={[0, -0.12, 0.05]} scale={[0.65, 0.32, 0.60]}>
            <sphereGeometry args={[0.10, 10, 6]} />
            <meshStandardMaterial color={new THREE.Color(skinHeadColor).multiplyScalar(0.82).getStyle()} roughness={0.7} />
          </mesh>
          {/* Cheekbone left */}
          <mesh position={[-0.10, -0.03, 0.155]} scale={[0.45, 0.35, 0.28]}>
            <sphereGeometry args={[0.055, 8, 6]} />
            <meshStandardMaterial color={skinHeadColor} roughness={0.58} />
          </mesh>
          {/* Cheekbone right */}
          <mesh position={[0.10, -0.03, 0.155]} scale={[0.45, 0.35, 0.28]}>
            <sphereGeometry args={[0.055, 8, 6]} />
            <meshStandardMaterial color={skinHeadColor} roughness={0.58} />
          </mesh>
          {/* Forehead */}
          <mesh position={[0, 0.10, 0.168]} scale={[0.75, 0.35, 0.20]}>
            <sphereGeometry args={[0.09, 8, 6]} />
            <meshStandardMaterial color={skinHeadColor} roughness={0.55} />
          </mesh>
          {/* Nose bridge */}
          <mesh position={[0, -0.01, 0.195]} scale={[0.35, 0.55, 0.35]}>
            <sphereGeometry args={[0.030, 8, 6]} />
            <meshStandardMaterial color={skinHeadColor} roughness={0.50} />
          </mesh>
          {/* Nose tip */}
          <mesh position={[0, -0.022, 0.200]} scale={[0.48, 0.35, 0.38]}>
            <sphereGeometry args={[0.030, 8, 6]} />
            <meshStandardMaterial color={new THREE.Color(skinHeadColor).multiplyScalar(0.82).getStyle()} roughness={0.55} transparent opacity={0.7} />
          </mesh>
          {/* Left ear */}
          <group position={[-0.178, 0.01, 0]}>
            <mesh scale={[0.38, 0.62, 0.22]}>
              <sphereGeometry args={[0.10, 10, 8]} />
              <meshStandardMaterial color={skinHeadColor} roughness={0.65} />
            </mesh>
            <mesh position={[0.018, 0, 0.005]} scale={[0.22, 0.38, 0.18]}>
              <sphereGeometry args={[0.10, 8, 6]} />
              <meshStandardMaterial color={new THREE.Color(skinHeadColor).multiplyScalar(0.82).getStyle()} roughness={0.75} />
            </mesh>
          </group>
          {/* Right ear */}
          <group position={[0.178, 0.01, 0]}>
            <mesh scale={[0.38, 0.62, 0.22]}>
              <sphereGeometry args={[0.10, 10, 8]} />
              <meshStandardMaterial color={skinHeadColor} roughness={0.65} />
            </mesh>
            <mesh position={[-0.018, 0, 0.005]} scale={[0.22, 0.38, 0.18]}>
              <sphereGeometry args={[0.10, 8, 6]} />
              <meshStandardMaterial color={new THREE.Color(skinHeadColor).multiplyScalar(0.82).getStyle()} roughness={0.75} />
            </mesh>
          </group>
        </group>

        {/* ── HAIR (matching AvatarCompanion) ── */}
        <group position={[0, 0.97, 0]}>
        {isGirl ? (
          <>
            {/* Main cap */}
            <mesh position={[0, 0.02, -0.02]} scale={[1.07, 1.05, 1.02]}>
              <sphereGeometry args={[0.18, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.48]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Back volume */}
            <mesh position={[0, -0.02, -0.06]} scale={[1.04, 1.08, 0.95]}>
              <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Left curtain */}
            <mesh position={[-0.16, -0.10, -0.02]} scale={[0.36, 1.1, 0.42]}>
              <sphereGeometry args={[0.13, 10, 8]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Right curtain */}
            <mesh position={[0.16, -0.10, -0.02]} scale={[0.36, 1.1, 0.42]}>
              <sphereGeometry args={[0.13, 10, 8]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
            {/* Front fringe */}
            <mesh position={[0, 0.10, 0.16]} rotation={[0.65, 0, 0]} scale={[1.05, 0.28, 0.32]}>
              <sphereGeometry args={[0.09, 8, 6]} />
              <meshStandardMaterial color={hairColor} roughness={0.85} metalness={0.02} />
            </mesh>
          </>
        ) : (
          <>
            {/* Main cap */}
            <mesh position={[0, 0.02, -0.02]} scale={[1.07, 1.05, 1.02]}>
              <sphereGeometry args={[0.18, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.44]} />
              <meshStandardMaterial color={hairColor} roughness={0.75} metalness={0.02} />
            </mesh>
            {/* Back volume */}
            <mesh position={[0, 0, -0.04]} scale={[1.05, 1.04, 0.92]}>
              <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.48]} />
              <meshStandardMaterial color={hairColor} roughness={0.75} metalness={0.02} />
            </mesh>
            {/* Front fringe */}
            <mesh position={[0, 0.10, 0.15]} rotation={[0.70, 0, 0]} scale={[0.95, 0.25, 0.30]}>
              <sphereGeometry args={[0.09, 8, 6]} />
              <meshStandardMaterial color={hairColor} roughness={0.75} metalness={0.02} />
            </mesh>
          </>
        )}
        </group>

        {/* ── FACE: Eyebrows ── */}
        <mesh
          position={[0.068, 1.028, 0.172]}
          rotation={[0, 0, face.eyeType === 'angry' ? 0.40 : face.eyeType === 'sad' ? -0.25 : face.eyeType === 'surprised' ? 0.05 : 0.07]}
        >
          <boxGeometry args={[0.060, 0.012, 0.009]} />
          <meshStandardMaterial color={hairColor} roughness={0.7} />
        </mesh>
        <mesh
          position={[-0.068, 1.028, 0.172]}
          rotation={[0, 0, face.eyeType === 'angry' ? -0.40 : face.eyeType === 'sad' ? 0.25 : face.eyeType === 'surprised' ? -0.05 : -0.07]}
        >
          <boxGeometry args={[0.060, 0.012, 0.009]} />
          <meshStandardMaterial color={hairColor} roughness={0.7} />
        </mesh>

        {/* ── FACE: Eyes ── */}
        {/* Eye whites — only for types that show a normal eye ball */}
        {(face.eyeType === "dot" || face.eyeType === "round" || face.eyeType === "angry") && (<>
          <mesh position={[0.07, 0.99, 0.174]}><sphereGeometry args={[0.028, 8, 8]} /><meshStandardMaterial color="#f2f2f2" roughness={0.2} /></mesh>
          <mesh position={[-0.07, 0.99, 0.174]}><sphereGeometry args={[0.028, 8, 8]} /><meshStandardMaterial color="#f2f2f2" roughness={0.2} /></mesh>
        </>)}
        {face.eyeType === "sad" && (<>
          <mesh position={[0.07, 0.99, 0.174]}><sphereGeometry args={[0.028, 8, 8]} /><meshStandardMaterial color="#f2f2f2" roughness={0.2} /></mesh>
          <mesh position={[-0.07, 0.99, 0.174]}><sphereGeometry args={[0.028, 8, 8]} /><meshStandardMaterial color="#f2f2f2" roughness={0.2} /></mesh>
        </>)}
        {/* Wink: only right eye (x=-0.07) gets white, left eye is the wink line */}
        {face.eyeType === "wink" && (
          <mesh position={[-0.07, 0.99, 0.174]}><sphereGeometry args={[0.028, 8, 8]} /><meshStandardMaterial color="#f2f2f2" roughness={0.2} /></mesh>
        )}
        {face.eyeType === "dot" && (<>
          <mesh position={[0.07, 0.99, 0.180]} material={eyeMat}><sphereGeometry args={[0.018, 8, 8]} /></mesh>
          <mesh position={[-0.07, 0.99, 0.180]} material={eyeMat}><sphereGeometry args={[0.018, 8, 8]} /></mesh>
        </>)}
        {face.eyeType === "round" && (<>
          <mesh position={[0.07, 0.99, 0.180]} material={eyeMat}><sphereGeometry args={[0.022, 8, 8]} /></mesh>
          <mesh position={[-0.07, 0.99, 0.180]} material={eyeMat}><sphereGeometry args={[0.022, 8, 8]} /></mesh>
        </>)}
        {face.eyeType === "happy" && (<>
          <mesh position={[0.07, 0.993, 0.181]} rotation={[0, 0, 0]} material={eyeMat}>
            <torusGeometry args={[0.022, 0.008, 6, 12, Math.PI]} />
          </mesh>
          <mesh position={[-0.07, 0.993, 0.181]} rotation={[0, 0, 0]} material={eyeMat}>
            <torusGeometry args={[0.022, 0.008, 6, 12, Math.PI]} />
          </mesh>
        </>)}
        {face.eyeType === "angry" && (<>
          <mesh position={[0.07, 0.99, 0.180]} material={eyeMat}><sphereGeometry args={[0.022, 8, 8]} /></mesh>
          <mesh position={[-0.07, 0.99, 0.180]} material={eyeMat}><sphereGeometry args={[0.022, 8, 8]} /></mesh>
          {/* Angry squint overlay */}
          <mesh position={[0.07, 1.003, 0.181]} rotation={[0, 0, -0.38]}>
            <boxGeometry args={[0.066, 0.036, 0.008]} />
            <meshStandardMaterial color={skinHeadColor} />
          </mesh>
          <mesh position={[-0.07, 1.003, 0.181]} rotation={[0, 0, 0.38]}>
            <boxGeometry args={[0.066, 0.036, 0.008]} />
            <meshStandardMaterial color={skinHeadColor} />
          </mesh>
        </>)}
        {face.eyeType === "sad" && (<>
          <mesh position={[0.072, 0.993, 0.181]} rotation={[0, 0, 0.2]} material={eyeMat}><boxGeometry args={[0.052, 0.024, 0.012]} /></mesh>
          <mesh position={[-0.072, 0.993, 0.181]} rotation={[0, 0, -0.2]} material={eyeMat}><boxGeometry args={[0.052, 0.024, 0.012]} /></mesh>
        </>)}
        {face.eyeType === "star" && (<>
          {[0, Math.PI/4, Math.PI/2, Math.PI*3/4].map((rot, i) => (
            <mesh key={i} position={[0.07, 0.99, 0.181]} rotation={[0, 0, rot]} material={eyeMat}>
              <boxGeometry args={[0.052, 0.011, 0.006]} />
            </mesh>
          ))}
          {[0, Math.PI/4, Math.PI/2, Math.PI*3/4].map((rot, i) => (
            <mesh key={i+4} position={[-0.07, 0.99, 0.181]} rotation={[0, 0, rot]} material={eyeMat}>
              <boxGeometry args={[0.052, 0.011, 0.006]} />
            </mesh>
          ))}
          <mesh position={[0.07, 0.99, 0.183]}><sphereGeometry args={[0.012, 6, 6]} /><meshStandardMaterial color="white" emissive="white" emissiveIntensity={1} /></mesh>
          <mesh position={[-0.07, 0.99, 0.183]}><sphereGeometry args={[0.012, 6, 6]} /><meshStandardMaterial color="white" emissive="white" emissiveIntensity={1} /></mesh>
        </>)}
        {face.eyeType === "heart" && (<>
          <mesh position={[0.059, 1.002, 0.180]} material={eyeMat}><sphereGeometry args={[0.016, 6, 6]} /></mesh>
          <mesh position={[0.081, 1.002, 0.180]} material={eyeMat}><sphereGeometry args={[0.016, 6, 6]} /></mesh>
          <mesh position={[0.070, 0.987, 0.179]} scale={[1.3, 1.1, 1]} material={eyeMat}><sphereGeometry args={[0.016, 6, 6]} /></mesh>
          <mesh position={[-0.059, 1.002, 0.180]} material={eyeMat}><sphereGeometry args={[0.016, 6, 6]} /></mesh>
          <mesh position={[-0.081, 1.002, 0.180]} material={eyeMat}><sphereGeometry args={[0.016, 6, 6]} /></mesh>
          <mesh position={[-0.070, 0.987, 0.179]} scale={[1.3, 1.1, 1]} material={eyeMat}><sphereGeometry args={[0.016, 6, 6]} /></mesh>
        </>)}
        {face.eyeType === "x" && (<>
          <mesh position={[0.07, 0.99, 0.181]} rotation={[0, 0, Math.PI / 4]} material={eyeMat}><boxGeometry args={[0.058, 0.014, 0.012]} /></mesh>
          <mesh position={[0.07, 0.99, 0.181]} rotation={[0, 0, -Math.PI / 4]} material={eyeMat}><boxGeometry args={[0.058, 0.014, 0.012]} /></mesh>
          <mesh position={[-0.07, 0.99, 0.181]} rotation={[0, 0, Math.PI / 4]} material={eyeMat}><boxGeometry args={[0.058, 0.014, 0.012]} /></mesh>
          <mesh position={[-0.07, 0.99, 0.181]} rotation={[0, 0, -Math.PI / 4]} material={eyeMat}><boxGeometry args={[0.058, 0.014, 0.012]} /></mesh>
        </>)}
        {face.eyeType === "wink" && (<>
          <mesh position={[0.07, 0.993, 0.181]} material={eyeMat}><boxGeometry args={[0.052, 0.020, 0.012]} /></mesh>
          <mesh position={[-0.07, 0.99, 0.181]} material={eyeMat}><sphereGeometry args={[0.022, 8, 8]} /></mesh>
        </>)}

        {/* ── FACE: Mouth ── */}
        {face.mouthType === "smile" && (
          <mesh position={[0, 0.9, 0.191]} rotation={[0, 0, Math.PI]} material={mouthMat}>
            <torusGeometry args={[0.030, 0.009, 6, 16, Math.PI]} />
          </mesh>
        )}
        {face.mouthType === "grin" && (<>
          <mesh position={[0, 0.902, 0.191]} rotation={[0, 0, Math.PI]} material={mouthMat}>
            <torusGeometry args={[0.036, 0.009, 6, 16, Math.PI]} />
          </mesh>
          <mesh position={[0, 0.884, 0.192]}><boxGeometry args={[0.056, 0.014, 0.01]} /><meshStandardMaterial color="#ffffff" /></mesh>
        </>)}
        {face.mouthType === "sad" && (
          <mesh position={[0, 0.886, 0.191]} material={mouthMat}>
            <torusGeometry args={[0.028, 0.009, 6, 16, Math.PI]} />
          </mesh>
        )}
        {face.mouthType === "neutral" && (
          <mesh position={[0, 0.9, 0.191]} material={mouthMat}><boxGeometry args={[0.055, 0.010, 0.010]} /></mesh>
        )}
        {face.mouthType === "open" && (<>
          <mesh position={[0, 0.893, 0.191]} scale={[1, 0.72, 1]} material={mouthMat}>
            <torusGeometry args={[0.028, 0.012, 6, 12]} />
          </mesh>
          <mesh position={[0, 0.893, 0.189]}><circleGeometry args={[0.022, 10]} /><meshStandardMaterial color="#1a0808" /></mesh>
        </>)}
        {face.mouthType === "tongue" && (<>
          <mesh position={[0, 0.9, 0.191]} rotation={[0, 0, Math.PI]} material={mouthMat}>
            <torusGeometry args={[0.030, 0.009, 6, 16, Math.PI]} />
          </mesh>
          <mesh position={[0, 0.874, 0.193]}><sphereGeometry args={[0.022, 8, 6]} /><meshStandardMaterial color={face.mouthColor} /></mesh>
        </>)}
        {face.mouthType === "cat" && (<>
          <mesh position={[0.030, 0.9, 0.191]} rotation={[0, 0, 0.3]} material={mouthMat}><boxGeometry args={[0.046, 0.010, 0.010]} /></mesh>
          <mesh position={[-0.030, 0.9, 0.191]} rotation={[0, 0, -0.3]} material={mouthMat}><boxGeometry args={[0.046, 0.010, 0.010]} /></mesh>
          <mesh position={[0, 0.9, 0.191]}><sphereGeometry args={[0.009, 5, 5]} /><meshStandardMaterial color={face.mouthColor} /></mesh>
        </>)}
        {face.mouthType === "fangs" && (<>
          <mesh position={[0, 0.9, 0.191]} rotation={[0, 0, Math.PI]} material={mouthMat}>
            <torusGeometry args={[0.032, 0.009, 6, 16, Math.PI]} />
          </mesh>
          <mesh position={[0.028, 0.878, 0.192]}><boxGeometry args={[0.014, 0.030, 0.010]} /><meshStandardMaterial color="#FFFFFF" /></mesh>
          <mesh position={[-0.028, 0.878, 0.192]}><boxGeometry args={[0.014, 0.030, 0.010]} /><meshStandardMaterial color="#FFFFFF" /></mesh>
        </>)}

        {/* ── FACE: Blush ── */}
        {face.blush && (
          <>
            <mesh position={[0.12, 0.95, 0.15]}><sphereGeometry args={[0.034, 8, 6]} /><meshStandardMaterial color={face.blushColor || "#FF9999"} transparent opacity={0.4} roughness={0.9} /></mesh>
            <mesh position={[-0.12, 0.95, 0.15]}><sphereGeometry args={[0.034, 8, 6]} /><meshStandardMaterial color={face.blushColor || "#FF9999"} transparent opacity={0.4} roughness={0.9} /></mesh>
          </>
        )}

        {/* ── GLASSES ── */}
        {glassesDef && glassesDef.type === "sunglasses" && (
          <group position={[0, 0.99, 0.183]}>
            <mesh position={[0.07, 0, 0]}><boxGeometry args={[0.075, 0.05, 0.014]} /><meshStandardMaterial color={glassesDef.lensColor} transparent opacity={0.85} /></mesh>
            <mesh position={[-0.07, 0, 0]}><boxGeometry args={[0.075, 0.05, 0.014]} /><meshStandardMaterial color={glassesDef.lensColor} transparent opacity={0.85} /></mesh>
            <mesh><boxGeometry args={[0.032, 0.012, 0.008]} /><meshStandardMaterial color={glassesDef.color} /></mesh>
          </group>
        )}
        {glassesDef && glassesDef.type === "round" && (
          <group position={[0, 0.99, 0.183]}>
            <mesh position={[0.07, 0, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.028, 0.007, 6, 14]} /><meshStandardMaterial color={glassesDef.color} /></mesh>
            <mesh position={[-0.07, 0, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.028, 0.007, 6, 14]} /><meshStandardMaterial color={glassesDef.color} /></mesh>
            <mesh><boxGeometry args={[0.028, 0.007, 0.006]} /><meshStandardMaterial color={glassesDef.color} /></mesh>
          </group>
        )}
        {glassesDef && glassesDef.type === "visor" && (
          <mesh position={[0, 0.99, 0.185]}><boxGeometry args={[0.25, 0.06, 0.012]} /><meshStandardMaterial color={glassesDef.lensColor} emissive={glassesDef.color} emissiveIntensity={0.5} transparent opacity={0.7} /></mesh>
        )}
        {glassesDef && glassesDef.type === "monocle" && (
          <group position={[0.07, 0.99, 0.184]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.03, 0.006, 6, 14]} /><meshStandardMaterial color={glassesDef.color} metalness={0.6} /></mesh>
          </group>
        )}
        {glassesDef && glassesDef.type === "thug" && (
          <group position={[0, 0.99, 0.183]}>
            <mesh position={[0.07, 0, 0]}><boxGeometry args={[0.085, 0.042, 0.014]} /><meshStandardMaterial color="#000000" /></mesh>
            <mesh position={[-0.07, 0, 0]}><boxGeometry args={[0.085, 0.042, 0.014]} /><meshStandardMaterial color="#000000" /></mesh>
            <mesh><boxGeometry args={[0.032, 0.014, 0.009]} /><meshStandardMaterial color="#000000" /></mesh>
          </group>
        )}

        {/* ── SKIN GLOW ── */}
        {skin.particle && (
          <pointLight position={[0, 0.6, 0]} color={skin.particle} intensity={skin.emissiveIntensity * 2} distance={3} />
        )}

        {/* ── HATS ── */}
        {/* Legendary crown (no hat equipped) */}
        {skin.id === "legendary" && !hat && (
          <group position={[0, 1.2, 0]}>
            <mesh><cylinderGeometry args={[0.17, 0.2, 0.09, 5]} /><meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} metalness={0.7} /></mesh>
            {[0,1,2,3,4].map((i) => (
              <mesh key={i} position={[Math.sin((i/5)*Math.PI*2)*0.15, 0.08, Math.cos((i/5)*Math.PI*2)*0.15]}>
                <coneGeometry args={[0.025, 0.1, 4]} />
                <meshStandardMaterial color="#FFD700" emissive="#FF1493" emissiveIntensity={0.6} />
              </mesh>
            ))}
          </group>
        )}
        {hat && hat.type === "crown" && (
          <group position={[0, 1.2, 0]}>
            <mesh><cylinderGeometry args={[0.17, 0.2, 0.09, 5]} /><meshStandardMaterial color={hat.color} emissive={hat.emissive} emissiveIntensity={hat.emissiveIntensity} metalness={0.7} /></mesh>
            {[0,1,2,3,4].map((i) => (
              <mesh key={i} position={[Math.sin((i/5)*Math.PI*2)*0.15, 0.08, Math.cos((i/5)*Math.PI*2)*0.15]}>
                <coneGeometry args={[0.024, 0.1, 4]} />
                <meshStandardMaterial color={hat.color} emissive={hat.emissive} emissiveIntensity={hat.emissiveIntensity * 0.9} />
              </mesh>
            ))}
          </group>
        )}
        {hat && hat.type === "cap" && (
          <group position={[0, 1.16, 0]} rotation={[0.1, 0, 0]}>
            <mesh><sphereGeometry args={[0.2, 10, 6, 0, Math.PI*2, 0, Math.PI*0.5]} /><meshStandardMaterial color={hat.color} roughness={0.7} /></mesh>
            <mesh position={[0, -0.04, 0.18]} rotation={[0.3, 0, 0]}><boxGeometry args={[0.32, 0.04, 0.2]} /><meshStandardMaterial color={hat.color} roughness={0.7} /></mesh>
          </group>
        )}
        {hat && hat.type === "halo" && (
          <group position={[0, 1.32, 0]}>
            <mesh rotation={[Math.PI/2, 0, 0]}><torusGeometry args={[0.2, 0.028, 8, 18]} /><meshStandardMaterial color={hat.color} emissive={hat.emissive} emissiveIntensity={hat.emissiveIntensity} roughness={0.1} metalness={0.8} /></mesh>
            <pointLight color={hat.emissive} intensity={1.5} distance={3} />
          </group>
        )}
        {hat && hat.type === "horns" && (
          <group position={[0, 1.15, 0]}>
            <mesh position={[0.12, 0.06, 0]} rotation={[0, 0, 0.4]}><coneGeometry args={[0.055, 0.2, 5]} /><meshStandardMaterial color={hat.color} emissive={hat.emissive} emissiveIntensity={hat.emissiveIntensity} /></mesh>
            <mesh position={[-0.12, 0.06, 0]} rotation={[0, 0, -0.4]}><coneGeometry args={[0.055, 0.2, 5]} /><meshStandardMaterial color={hat.color} emissive={hat.emissive} emissiveIntensity={hat.emissiveIntensity} /></mesh>
          </group>
        )}
        {hat && hat.type === "tophat" && (
          <group position={[0, 1.18, 0]}>
            <mesh><cylinderGeometry args={[0.15, 0.15, 0.28, 12]} /><meshStandardMaterial color={hat.color} emissive={hat.emissive} emissiveIntensity={hat.emissiveIntensity} /></mesh>
            <mesh position={[0, -0.14, 0]}><cylinderGeometry args={[0.22, 0.22, 0.03, 12]} /><meshStandardMaterial color={hat.color} roughness={0.8} /></mesh>
          </group>
        )}
        {hat && hat.type === "helmet" && (
          <mesh position={[0, 1.1, 0]}><sphereGeometry args={[0.22, 10, 7, 0, Math.PI*2, 0, Math.PI*0.6]} /><meshStandardMaterial color={hat.color} emissive={hat.emissive} emissiveIntensity={hat.emissiveIntensity} roughness={0.3} metalness={0.5} /></mesh>
        )}
        {hat && hat.type === "antenna" && (
          <group position={[0, 1.18, 0]}>
            <mesh position={[0, 0.14, 0]}><cylinderGeometry args={[0.013, 0.013, 0.28, 5]} /><meshStandardMaterial color="#888888" metalness={0.6} /></mesh>
            <mesh position={[0, 0.3, 0]}><sphereGeometry args={[0.052, 8, 8]} /><meshStandardMaterial color={hat.color} emissive={hat.emissive} emissiveIntensity={hat.emissiveIntensity} /></mesh>
            <pointLight position={[0, 0.3, 0]} color={hat.emissive} intensity={2} distance={3} />
          </group>
        )}
        {hat && hat.type === "wizard" && (
          <group position={[0, 1.15, 0]}>
            <mesh><coneGeometry args={[0.2, 0.42, 10]} /><meshStandardMaterial color={hat.color} emissive={hat.emissive} emissiveIntensity={hat.emissiveIntensity * 0.6} roughness={0.7} /></mesh>
            <mesh position={[0, 0, 0]}><cylinderGeometry args={[0.24, 0.24, 0.04, 12]} /><meshStandardMaterial color={hat.color} roughness={0.75} /></mesh>
          </group>
        )}
      </group>

      {/* Trail particles */}
      {trail && (
        <group ref={trailRef}>
          {Array.from({ length: 20 }, (_, i) => (
            <mesh key={i} visible={false}>
              <sphereGeometry args={[0.15, 6, 6]} />
              <meshStandardMaterial
                color={trail.color}
                emissive={trail.emissive}
                emissiveIntensity={0.8}
                transparent
                opacity={0.6}
              />
            </mesh>
          ))}
        </group>
      )}
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

// ─── GHOST PLAYER (opponent in multiplayer) ─────────
interface GhostAvatarData {
  bodyColor: string;
  headColor: string;
  limbColor: string;
  shoeColor: string;
  hairColor: string;
  gender: string;
}

function GhostPlayer({ posRef, name, avatarData }: {
  posRef: React.RefObject<{ x: number; y: number; z: number; fa: number; dead?: boolean }>;
  name: string;
  avatarData: GhostAvatarData | null;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const bodyGroupRef = useRef<THREE.Group>(null);
  const leftLegRef = useRef<THREE.Group>(null);
  const rightLegRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightArmRef = useRef<THREE.Group>(null);
  const targetPos = useRef(new THREE.Vector3(0, 1, 0));
  const targetAngle = useRef(0);
  const prevPos = useRef(new THREE.Vector3(0, 1, 0));
  const walkCycle = useRef(0);

  const bc = avatarData?.bodyColor || "#6b8fad";
  const hc = avatarData?.headColor || "#e8c9a0";
  const lc = avatarData?.limbColor || "#1e3a5f";
  const sc = avatarData?.shoeColor || "#222222";
  const hairC = avatarData?.hairColor || "#3b2a1a";
  const isGirl = avatarData?.gender === "girl";
  const OP = 0.55; // ghost opacity

  useFrame((_, delta) => {
    if (!groupRef.current || !posRef.current) return;
    const p = posRef.current;
    targetPos.current.set(p.x, p.y, p.z);
    targetAngle.current = p.fa;

    // Smooth interpolation
    groupRef.current.position.lerp(targetPos.current, 0.2);

    // Rotate body
    if (bodyGroupRef.current) {
      let diff = targetAngle.current - bodyGroupRef.current.rotation.y;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      bodyGroupRef.current.rotation.y += diff * 0.15;
    }

    // Walk animation based on movement
    const dx = groupRef.current.position.x - prevPos.current.x;
    const dz = groupRef.current.position.z - prevPos.current.z;
    const isMoving = Math.abs(dx) > 0.001 || Math.abs(dz) > 0.001;
    prevPos.current.copy(groupRef.current.position);

    if (isMoving) {
      walkCycle.current += delta * 10;
    } else {
      walkCycle.current *= 0.9;
    }
    const legSwing = isMoving ? Math.sin(walkCycle.current) * 0.6 : 0;
    const armSwing = isMoving ? Math.sin(walkCycle.current + Math.PI) * 0.4 : 0;

    if (leftLegRef.current) leftLegRef.current.rotation.x = legSwing;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -legSwing;
    if (leftArmRef.current) leftArmRef.current.rotation.x = armSwing;
    if (rightArmRef.current) rightArmRef.current.rotation.x = -armSwing;

    // Fade out if dead
    if (p.dead) groupRef.current.visible = false;
  });

  return (
    <group ref={groupRef} position={[0, 1, 0]}>
      <group ref={bodyGroupRef}>
        {/* ── BODY (torso) ── */}
        <mesh position={[0, 0.48, 0]}>
          <boxGeometry args={[0.38, 0.40, 0.21]} />
          <meshStandardMaterial color={bc} transparent opacity={OP} emissive={bc} emissiveIntensity={0.15} />
        </mesh>

        {/* ── SHOULDERS ── */}
        <mesh position={[0.21, 0.64, 0]}>
          <sphereGeometry args={[0.09, 8, 6]} />
          <meshStandardMaterial color={bc} transparent opacity={OP} />
        </mesh>
        <mesh position={[-0.21, 0.64, 0]}>
          <sphereGeometry args={[0.09, 8, 6]} />
          <meshStandardMaterial color={bc} transparent opacity={OP} />
        </mesh>

        {/* ── ARMS ── */}
        <group ref={leftArmRef} position={[0.27, 0.58, 0]} rotation={[0.12, 0, -0.15]}>
          <mesh position={[0, -0.10, 0]}>
            <cylinderGeometry args={[0.048, 0.055, 0.20, 6]} />
            <meshStandardMaterial color={hc} transparent opacity={OP} />
          </mesh>
          <mesh position={[0, -0.24, 0]}>
            <sphereGeometry args={[0.055, 8, 6]} />
            <meshStandardMaterial color={hc} transparent opacity={OP} />
          </mesh>
        </group>
        <group ref={rightArmRef} position={[-0.27, 0.58, 0]} rotation={[0.12, 0, 0.15]}>
          <mesh position={[0, -0.10, 0]}>
            <cylinderGeometry args={[0.048, 0.055, 0.20, 6]} />
            <meshStandardMaterial color={hc} transparent opacity={OP} />
          </mesh>
          <mesh position={[0, -0.24, 0]}>
            <sphereGeometry args={[0.055, 8, 6]} />
            <meshStandardMaterial color={hc} transparent opacity={OP} />
          </mesh>
        </group>

        {/* ── LEGS ── */}
        <group ref={leftLegRef} position={[0.10, 0.24, 0]}>
          <mesh position={[0, -0.15, 0]}>
            <cylinderGeometry args={[0.068, 0.078, 0.30, 6]} />
            <meshStandardMaterial color={lc} transparent opacity={OP} />
          </mesh>
          <mesh position={[0, -0.33, 0.03]}>
            <boxGeometry args={[0.12, 0.06, 0.18]} />
            <meshStandardMaterial color={sc} transparent opacity={OP} />
          </mesh>
        </group>
        <group ref={rightLegRef} position={[-0.10, 0.24, 0]}>
          <mesh position={[0, -0.15, 0]}>
            <cylinderGeometry args={[0.068, 0.078, 0.30, 6]} />
            <meshStandardMaterial color={lc} transparent opacity={OP} />
          </mesh>
          <mesh position={[0, -0.33, 0.03]}>
            <boxGeometry args={[0.12, 0.06, 0.18]} />
            <meshStandardMaterial color={sc} transparent opacity={OP} />
          </mesh>
        </group>

        {/* ── NECK ── */}
        <mesh position={[0, 0.80, 0]}>
          <cylinderGeometry args={[0.08, 0.095, 0.16, 8]} />
          <meshStandardMaterial color={hc} transparent opacity={OP} />
        </mesh>

        {/* ── HEAD ── */}
        <mesh position={[0, 0.95, 0]}>
          <sphereGeometry args={[0.18, 14, 10]} />
          <meshStandardMaterial color={hc} transparent opacity={OP} />
        </mesh>

        {/* ── HAIR ── */}
        {isGirl ? (
          <>
            <mesh position={[0, 1.03, 0]} scale={[1.04, 0.65, 1.04]}>
              <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
              <meshStandardMaterial color={hairC} transparent opacity={OP} />
            </mesh>
            <mesh position={[-0.13, 0.92, -0.04]} scale={[0.50, 0.65, 0.52]}>
              <sphereGeometry args={[0.09, 8, 6]} />
              <meshStandardMaterial color={hairC} transparent opacity={OP} />
            </mesh>
            <mesh position={[0.13, 0.92, -0.04]} scale={[0.50, 0.65, 0.52]}>
              <sphereGeometry args={[0.09, 8, 6]} />
              <meshStandardMaterial color={hairC} transparent opacity={OP} />
            </mesh>
          </>
        ) : (
          <>
            <mesh position={[0, 1.05, 0]} scale={[1.02, 0.55, 1.02]}>
              <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.45]} />
              <meshStandardMaterial color={hairC} transparent opacity={OP} />
            </mesh>
            <mesh position={[0, 1.16, 0.04]} rotation={[-0.2, 0, 0]} scale={[0.42, 1, 0.36]}>
              <coneGeometry args={[0.055, 0.12, 5]} />
              <meshStandardMaterial color={hairC} transparent opacity={OP} />
            </mesh>
          </>
        )}

        {/* ── EYES (simple dots) ── */}
        <mesh position={[0.065, 0.97, 0.17]}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshStandardMaterial color="#0A0A1A" transparent opacity={OP} />
        </mesh>
        <mesh position={[-0.065, 0.97, 0.17]}>
          <sphereGeometry args={[0.018, 8, 8]} />
          <meshStandardMaterial color="#0A0A1A" transparent opacity={OP} />
        </mesh>

        {/* ── Subtle glow ── */}
        <pointLight position={[0, 0.6, 0]} color={bc} intensity={0.6} distance={3} />
      </group>

      {/* ── Nametag (HTML overlay) ── */}
      <Html position={[0, 1.35, 0]} center distanceFactor={8} sprite>
        <div style={{
          background: "rgba(0,0,0,0.55)",
          color: "#fff",
          padding: "2px 8px",
          borderRadius: 6,
          fontSize: 11,
          fontWeight: 700,
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          border: "1px solid rgba(255,255,255,0.15)",
        }}>
          {name}
        </div>
      </Html>
    </group>
  );
}

// ─── PLATFORM MESH ──────────────────────────────────
function PlatformMesh({ plat, gameRef, isGoal }: { plat: Platform3D; gameRef: React.RefObject<GameData>; isGoal: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  const colors = useMemo(() => {
    if (isGoal) return { c: "#3aad38", e: "#FFD700", i: 0.35 };
    switch (plat.type) {
      case "ground": return { c: "#4a9a38", e: "#2a6a18", i: 0.08 };
      case "rock": return { c: "#8a8a90", e: "#505058", i: 0.05 };
      case "step": return { c: "#9a9288", e: "#5a5248", i: 0.05 };
      case "bridge": return { c: "#a07818", e: "#604010", i: 0.08 };
      case "moving": return { c: "#00FF88", e: "#00FF88", i: 0.4 };
      case "crumble": return { c: "#FF4466", e: "#FF4466", i: 0.4 };
      case "ice": return { c: "#b0e8ff", e: "#00D4FF", i: 0.5 };
      case "bounce": return { c: "#FFa020", e: "#FFD700", i: 0.6 };
      default: return { c: "#4a9a38", e: "#2a6a18", i: 0.08 };
    }
  }, [plat.type, isGoal]);

  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    color: colors.c,
    emissive: colors.e,
    emissiveIntensity: colors.i,
    roughness: plat.type === "bridge" ? 0.7 : plat.type === "ice" ? 0.1 : 0.85,
    transparent: plat.type === "crumble" || plat.type === "ice",
    opacity: plat.type === "ice" ? 0.7 : 1,
  }), [colors, plat.type]);

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

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const ref = plat.type === "ground" ? groupRef.current : meshRef.current;
    if (!ref || !gameRef.current) return;
    const g = gameRef.current;

    if (plat.type === "moving") {
      const prevX = plat.x;
      const prevZ = plat.z;
      if (plat.moveAxis === "x" && plat.origX !== undefined) {
        plat.x = plat.origX + Math.sin(g.time * 0.03 * (plat.moveSpeed || 1)) * (plat.moveRange || 1);
      } else if (plat.moveAxis === "z" && plat.origZ !== undefined) {
        plat.z = plat.origZ + Math.sin(g.time * 0.03 * (plat.moveSpeed || 1)) * (plat.moveRange || 1);
      }
      plat.deltaX = plat.x - prevX;
      plat.deltaZ = plat.z - prevZ;
    }

    if (plat.type === "crumble" && plat.touched) {
      const t = plat.crumbleTimer || 0;
      mat.opacity = Math.max(0, 1 - t / 50);
      if (t > 50) { ref.visible = false; return; }
    }

    ref.position.set(plat.x, plat.y, plat.z);

    if (isGoal && glowRef.current) {
      glowRef.current.position.set(plat.x, plat.y + plat.h / 2 + 1, plat.z);
      glowRef.current.intensity = 3 + Math.sin(g.time * 0.04) * 1;
    }
  });

  const platTop = plat.y + plat.h / 2;

  return (
    <>
      {plat.type === "ground" && sideMat ? (
        <group ref={groupRef} position={[plat.x, plat.y, plat.z]}>
          <mesh position={[0, plat.h / 2 - 0.05, 0]} material={mat} receiveShadow castShadow>
            <boxGeometry args={[plat.w, 0.1, plat.d]} />
          </mesh>
          <mesh position={[0, -0.05, 0]} material={sideMat} receiveShadow castShadow>
            <boxGeometry args={[plat.w, plat.h - 0.1, plat.d]} />
          </mesh>
        </group>
      ) : (
        <mesh ref={meshRef} position={[plat.x, plat.y, plat.z]} material={mat} receiveShadow castShadow>
          <boxGeometry args={[plat.w, plat.h, plat.d]} />
        </mesh>
      )}

      {plat.trees?.map((t, i) => (
        <TreeDeco
          key={`t${i}`}
          px={plat.x + t.ox}
          py={platTop}
          pz={plat.z + t.oz}
          s={t.s}
        />
      ))}

      {plat.rocks?.map((r, i) => (
        <RockDeco
          key={`r${i}`}
          px={plat.x + r.ox}
          py={platTop}
          pz={plat.z + r.oz}
          s={r.s}
        />
      ))}

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
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame(() => {
    if (!ref.current || !gameRef.current) return;
    const g = gameRef.current;

    if (g.winAnim) {
      // Float down toward player during win animation
      const targetY = g.py + 1.0;
      ref.current.position.x += (g.px - ref.current.position.x) * 0.04;
      ref.current.position.y += (targetY - ref.current.position.y) * 0.04;
      ref.current.position.z += (g.pz - ref.current.position.z) * 0.04;
      ref.current.rotation.y += 0.1;
      const pulse = 1 + Math.sin(g.winAnimTimer * 0.15) * 0.3;
      ref.current.scale.set(pulse, pulse, pulse);
      if (glowRef.current) {
        glowRef.current.position.copy(ref.current.position);
        glowRef.current.intensity = 5 + Math.sin(g.winAnimTimer * 0.1) * 3;
      }
    } else {
      ref.current.rotation.y = g.time * 0.02;
      ref.current.position.y = pos[1] + Math.sin(g.time * 0.03) * 0.2;
      ref.current.scale.set(1, 1, 1);
    }
  });

  return (
    <>
      <mesh ref={ref} position={[pos[0], pos[1], pos[2]]}>
        <boxGeometry args={[0.5, 0.7, 0.08]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} />
      </mesh>
      <pointLight ref={glowRef} color="#FFD700" intensity={0} distance={8} />
    </>
  );
}

// ─── POWER-UP MESH ──────────────────────────────────
function PowerUpMesh({ powerUp, gameRef }: { powerUp: PowerUpItem; gameRef: React.RefObject<GameData> }) {
  const ref = useRef<THREE.Group>(null);

  const colors = useMemo(() => {
    switch (powerUp.type) {
      case "rocket": return { main: "#FF4500", glow: "#FF6347" };
      case "shield": return { main: "#4169E1", glow: "#6495ED" };
      case "magnet": return { main: "#9932CC", glow: "#BA55D3" };
    }
  }, [powerUp.type]);

  useFrame(() => {
    if (!ref.current || !gameRef.current) return;
    if (powerUp.collected) { ref.current.visible = false; return; }
    ref.current.visible = true;
    ref.current.rotation.y = gameRef.current.time * 0.03;
    ref.current.position.y = powerUp.y + Math.sin(gameRef.current.time * 0.04 + powerUp.x) * 0.25;
  });

  return (
    <group ref={ref} position={[powerUp.x, powerUp.y, powerUp.z]}>
      {powerUp.type === "rocket" && (
        <>
          <mesh rotation={[0, 0, 0]}>
            <coneGeometry args={[0.2, 0.6, 6]} />
            <meshStandardMaterial color={colors.main} emissive={colors.glow} emissiveIntensity={0.6} />
          </mesh>
          <mesh position={[0, -0.4, 0]}>
            <cylinderGeometry args={[0.15, 0.2, 0.25, 6]} />
            <meshStandardMaterial color="#FF6347" emissive="#FF4500" emissiveIntensity={0.3} />
          </mesh>
        </>
      )}
      {powerUp.type === "shield" && (
        <mesh>
          <dodecahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial color={colors.main} emissive={colors.glow} emissiveIntensity={0.6} transparent opacity={0.85} />
        </mesh>
      )}
      {powerUp.type === "magnet" && (
        <mesh>
          <torusGeometry args={[0.25, 0.1, 8, 12]} />
          <meshStandardMaterial color={colors.main} emissive={colors.glow} emissiveIntensity={0.6} />
        </mesh>
      )}
      <pointLight color={colors.glow} intensity={2} distance={5} />
    </group>
  );
}

// ─── CLOUDS ─────────────────────────────────────────
function Clouds() {
  const clouds = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      x: (Math.random() - 0.5) * 140,
      y: 14 + Math.random() * 30,
      z: (Math.random() - 0.5) * 140,
      blobs: Array.from({ length: 2 + Math.floor(Math.random() * 3) }, () => ({
        ox: (Math.random() - 0.5) * 2.5,
        oy: (Math.random() - 0.5) * 0.4,
        oz: (Math.random() - 0.5) * 1.5,
        r: 0.8 + Math.random() * 1.2,
      })),
    }));
  }, []);

  return (
    <>
      {clouds.map((c, i) => (
        <group key={i} position={[c.x, c.y, c.z]}>
          {c.blobs.map((b, j) => (
            <mesh key={j} position={[b.ox, b.oy, b.oz]}>
              <sphereGeometry args={[b.r, 6, 5]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.05} transparent opacity={0.2} roughness={1} />
            </mesh>
          ))}
        </group>
      ))}
    </>
  );
}

// ─── DISTANT MOUNTAINS ──────────────────────────────
function DistantMountains() {
  const mountains = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
      const r = 100 + Math.random() * 50;
      arr.push({
        x: Math.cos(angle) * r,
        z: Math.sin(angle) * r,
        height: 10 + Math.random() * 18,
        width: 12 + Math.random() * 10,
        color: i % 3 === 0 ? "#5a7a98" : i % 3 === 1 ? "#6a8ab0" : "#8a9ab0",
      });
    }
    return arr;
  }, []);

  return (
    <>
      {mountains.map((m, i) => (
        <mesh key={i} position={[m.x, m.height / 2 - 6, m.z]}>
          <coneGeometry args={[m.width, m.height, 5]} />
          <meshStandardMaterial color={m.color} emissive={m.color} emissiveIntensity={0.05} roughness={0.95} transparent opacity={0.45} />
        </mesh>
      ))}
    </>
  );
}

// ─── GAME LOOP (IMPROVED PHYSICS) ───────────────────
function GameLoop({ gameRef, onDie, onGoal, onWinStart, onPowerUp, onShieldUsed }: {
  gameRef: React.RefObject<GameData>;
  onDie: () => void;
  onGoal: () => void;
  onWinStart: () => void;
  onPowerUp: (type: PowerUpType) => void;
  onShieldUsed: () => void;
}) {
  const { camera } = useThree();
  const vec = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    if (!gameRef.current) return;
    const g = gameRef.current;
    if (g.dead || g.levelComplete) return;

    const dt = Math.min(delta * 60, 3);
    g.time += dt;

    // ─── WIN ANIMATION ─────
    if (g.winAnim) {
      g.winAnimTimer += dt;

      // Auto-move toward goal center
      const goal = g.platforms[g.goalIdx];
      if (goal) {
        const dx = goal.x - g.px;
        const dz = goal.z - g.pz;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist > 0.3) {
          g.vx = (dx / dist) * 0.025;
          g.vz = (dz / dist) * 0.025;
          g.facingAngle = Math.atan2(dx, dz);
        } else {
          g.vx = 0;
          g.vz = 0;
        }
      }

      // Gravity + apply
      g.vy -= GRAVITY * dt;
      g.px += g.vx;
      g.py += g.vy * dt;
      g.pz += g.vz;

      // Collision (keep on platform)
      for (const plat of g.platforms) {
        if (g.vy > 0.1) continue;
        const halfW = plat.w / 2;
        const halfD = plat.d / 2;
        const platTop = plat.y + plat.h / 2;
        if (g.px > plat.x - halfW && g.px < plat.x + halfW &&
            g.pz > plat.z - halfD && g.pz < plat.z + halfD &&
            g.py >= platTop - 1.0 && g.py <= platTop + 0.6) {
          g.py = platTop + 0.01;
          g.vy = 0;
          break;
        }
      }

      // Camera zoom in during win animation
      const winCamDist = Math.max(g.camDist - g.winAnimTimer * 0.05, 4);
      const camX = g.px - Math.sin(g.camTheta) * winCamDist;
      const camZ = g.pz - Math.cos(g.camTheta) * winCamDist;
      const camY = g.py + 3 + Math.sin(g.camPhi) * 1;
      vec.set(camX, camY, camZ);
      camera.position.lerp(vec, 0.08 * dt);
      camera.lookAt(g.px, g.py + 1.2, g.pz);

      if (g.winAnimTimer > WIN_ANIM_FRAMES) {
        g.levelComplete = true;
        onGoal();
      }
      return;
    }

    // ─── POWER-UP TIMERS ─────
    if (g.rocketTimer > 0) {
      g.rocketTimer -= dt;
      // Continuous forward boost during rocket
      const rFwdX = Math.sin(g.facingAngle);
      const rFwdZ = Math.cos(g.facingAngle);
      g.vx += rFwdX * 0.008 * dt;
      g.vz += rFwdZ * 0.008 * dt;
    }
    if (g.magnetTimer > 0) g.magnetTimer -= dt;

    // ─── MOVEMENT (relative to camera) ─────
    const camAngle = g.camTheta;
    const inputLen = Math.sqrt(g.moveX * g.moveX + g.moveZ * g.moveZ);
    const speed = inputLen > 0.7 ? RUN_SPEED : MOVE_SPEED;
    g.isRunning = inputLen > 0.7;

    if (inputLen > 0.05) {
      const fwdX = Math.sin(camAngle);
      const fwdZ = Math.cos(camAngle);
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
      // Ice platforms are much more slippery (less friction = slide more)
      const currentFriction = g.onIce ? 0.98 : FRICTION;
      g.vx *= currentFriction;
      g.vz *= currentFriction;
    }

    // ─── COYOTE TIME + JUMP BUFFER ─────
    if (g.jumpPressed) {
      g.jumpBufferTimer = JUMP_BUFFER;
    } else {
      if (g.jumpBufferTimer > 0) g.jumpBufferTimer -= dt;
    }

    const canJump = g.onGround || g.coyoteTimer > 0;

    if (g.jumpBufferTimer > 0 && canJump && !g.jumpUsed) {
      g.vy = JUMP_FORCE;
      g.onGround = false;
      g.jumpUsed = true;
      g.coyoteTimer = 0;
      g.jumpBufferTimer = 0;
    }

    if (!g.jumpPressed) {
      g.jumpUsed = false;
    }

    // Variable jump height
    if (!g.jumpPressed && g.vy > 0.15) {
      g.vy *= 0.85;
    }

    // Gravity (reduced during rocket boost)
    const gravMult = g.rocketTimer > 0 ? 0.4 : 1.0;
    g.vy -= GRAVITY * dt * gravMult;

    // ─── MAGNET EFFECT — gentle guide toward nearest NEXT platform (only when airborne) ─────
    if (g.magnetTimer > 0 && !g.onGround) {
      let nearestDist = Infinity;
      let nearestPlat: Platform3D | null = null;
      for (const plat of g.platforms) {
        if (plat.type === "crumble" && plat.touched && (plat.crumbleTimer || 0) > 50) continue;
        // Only attract to platforms ahead
        if (plat.z < g.pz + 1) continue;
        const dx = plat.x - g.px;
        const dz = plat.z - g.pz;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist < nearestDist && dist > 0.5 && dist < 12) {
          nearestDist = dist;
          nearestPlat = plat;
        }
      }
      if (nearestPlat && nearestDist > 1) {
        const dx = nearestPlat.x - g.px;
        const dz = nearestPlat.z - g.pz;
        const len = Math.sqrt(dx * dx + dz * dz);
        // Gentle directional nudge (not proportional to distance - constant gentle force)
        g.vx += (dx / len) * MAGNET_PULL;
        g.vz += (dz / len) * MAGNET_PULL;
      }
    }

    // Apply velocity
    g.px += g.vx;
    g.py += g.vy * dt;
    g.pz += g.vz;

    // ─── PLATFORM COLLISION (FIXED - generous edge tolerance) ─────
    const wasOnGround = g.onGround;
    g.onGround = false;
    g.onIce = false;

    for (const plat of g.platforms) {
      if (plat.type === "crumble" && plat.touched) {
        plat.crumbleTimer = (plat.crumbleTimer || 0) + dt;
        if ((plat.crumbleTimer || 0) > 50) continue;
      }

      // Only check landing when falling or nearly level
      if (g.vy > 0.1) continue;

      const halfW = plat.w / 2;
      const halfD = plat.d / 2;
      const platTop = plat.y + plat.h / 2;

      // FIXED: negative edge tolerance = expanded collision area (more forgiving edges)
      const edgeTolerance = -PLAYER_RADIUS * 0.25;
      const withinX = g.px > plat.x - halfW + edgeTolerance && g.px < plat.x + halfW - edgeTolerance;
      const withinZ = g.pz > plat.z - halfD + edgeTolerance && g.pz < plat.z + halfD - edgeTolerance;

      // More generous vertical range for landing
      const withinY = g.py >= platTop - 1.0 && g.py <= platTop + 0.6;

      if (withinX && withinZ && withinY) {
        g.py = platTop + 0.01;
        g.vy = 0;
        g.onGround = true;
        g.lastGroundY = platTop;
        if (platTop > g.bestHeight) g.bestHeight = platTop;

        if (plat.type === "crumble") plat.touched = true;
        if (plat.type === "ice") g.onIce = true;

        // FIXED: Moving platform carries player
        if (plat.type === "moving") {
          g.px += plat.deltaX || 0;
          g.pz += plat.deltaZ || 0;
        }

        // BOUNCE: spring the player up high
        if (plat.type === "bounce") {
          g.vy = JUMP_FORCE * 2.2;
          g.onGround = false;
          break;
        }
        break;
      }
    }

    // Coyote time
    if (wasOnGround && !g.onGround && g.vy <= 0) {
      g.coyoteTimer = COYOTE_FRAMES;
    } else if (g.onGround) {
      g.coyoteTimer = 0;
    } else {
      if (g.coyoteTimer > 0) g.coyoteTimer -= dt;
    }

    // ─── POWER-UP COLLECTION ─────
    for (const pu of g.powerUps) {
      if (pu.collected) continue;
      const dx = g.px - pu.x;
      const dy = g.py - pu.y;
      const dz = g.pz - pu.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < 1.5) {
        pu.collected = true;
        onPowerUp(pu.type);
        if (pu.type === "rocket") {
          // Find platform ~5 ahead of current position
          const aheadPlats = g.platforms
            .filter(p => p.z > g.pz + 2)
            .sort((a, b) => a.z - b.z);
          const targetIdx = Math.min(ROCKET_SKIP_PLATFORMS - 1, aheadPlats.length - 1);
          const target = aheadPlats[targetIdx];
          if (target) {
            // Calculate velocity needed to reach target platform
            const dz = target.z - g.pz;
            const dx = target.x - g.px;
            const totalFrames = 90; // ~1.5 sec flight
            g.vx = dx / totalFrames * 0.7;
            g.vz = dz / totalFrames * 0.7;
            g.vy = ROCKET_FORCE;
            g.rocketTimer = totalFrames;
          } else {
            g.vy = ROCKET_FORCE;
            const fwdX = Math.sin(g.facingAngle);
            const fwdZ = Math.cos(g.facingAngle);
            g.vx += fwdX * 0.2;
            g.vz += fwdZ * 0.2;
            g.rocketTimer = 90;
          }
          g.onGround = false;
        } else if (pu.type === "shield") {
          g.hasShield = true;
        } else if (pu.type === "magnet") {
          g.magnetTimer = MAGNET_DURATION;
        }
      }
    }

    // ─── DEATH (with shield protection) ────────
    if (g.py < -10) {
      if (g.hasShield) {
        // Shield saves! Teleport back to last safe position
        g.hasShield = false;
        g.py = g.lastGroundY + 2;
        g.vy = 0.15;
        g.vx = 0;
        g.vz = 0;
        onShieldUsed();
      } else {
        g.dead = true;
        onDie();
        return;
      }
    }

    // ─── GOAL CHECK (triggers win animation) ──────────────────
    const goal = g.platforms[g.goalIdx];
    if (goal) {
      const dx = g.px - goal.x;
      const dz = g.pz - goal.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < 3 && g.py > goal.y - 0.5 && g.py < goal.y + 3) {
        g.winAnim = true;
        g.winAnimTimer = 0;
        onWinStart();
        return;
      }
    }

    // ─── CAMERA ──────────────────────
    const camX = g.px - Math.sin(g.camTheta) * g.camDist;
    const camZ = g.pz - Math.cos(g.camTheta) * g.camDist;
    const camY = g.py + CAM_HEIGHT + Math.sin(g.camPhi) * 2;

    vec.set(camX, camY, camZ);
    camera.position.lerp(vec, 0.06 * dt);
    camera.lookAt(g.px, g.py + 0.8, g.pz);
  });

  return null;
}

// ─── SCENE ──────────────────────────────────────────
// ─── FLOATING PARTICLES (atmosphere) ────────────────
function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, () => ({
      x: (Math.random() - 0.5) * 60,
      y: 2 + Math.random() * 30,
      z: (Math.random() - 0.5) * 60,
      speed: 0.002 + Math.random() * 0.004,
      phase: Math.random() * Math.PI * 2,
      size: 0.04 + Math.random() * 0.06,
    }));
  }, []);

  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    for (let i = 0; i < particles.length; i++) {
      const mesh = refs.current[i];
      if (!mesh) continue;
      const p = particles[i];
      mesh.position.y = p.y + Math.sin(t * p.speed * 60 + p.phase) * 2;
      mesh.position.x = p.x + Math.sin(t * 0.1 + p.phase) * 0.5;
    }
  });

  return (
    <>
      {particles.map((p, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.size, 4, 4]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} transparent opacity={0.3} />
        </mesh>
      ))}
    </>
  );
}

function Scene3D({ gameRef, onDie, onGoal, onWinStart, onPowerUp, onShieldUsed, skinId, hatId, trailId, ghostPosRef, ghostName, ghostAvatarData }: {
  gameRef: React.RefObject<GameData>;
  onDie: () => void;
  onGoal: () => void;
  onWinStart: () => void;
  onPowerUp: (type: PowerUpType) => void;
  onShieldUsed: () => void;
  skinId: string;
  hatId: string | null;
  trailId: string | null;
  ghostPosRef?: React.RefObject<{ x: number; y: number; z: number; fa: number; dead?: boolean }>;
  ghostName?: string;
  ghostAvatarData?: GhostAvatarData | null;
}) {
  const g = gameRef.current;
  if (!g) return null;

  return (
    <>
      {/* Modernized lighting - warmer, more atmospheric */}
      <ambientLight intensity={0.35} color="#e0d0f0" />
      <directionalLight position={[15, 30, 10]} intensity={1.3} color="#fff0d0" castShadow />
      <directionalLight position={[-10, 15, -5]} intensity={0.3} color="#a0c0ff" />
      <hemisphereLight args={["#6db3f2", "#2a4c28", 0.4]} />

      {/* Atmospheric fog - deeper, more mysterious */}
      <fog attach="fog" args={["#c0d4e8", 30, 100]} />

      <FloatingParticles />
      <Clouds />
      <DistantMountains />

      {g.platforms.map((plat, i) => (
        <PlatformMesh key={i} plat={plat} gameRef={gameRef} isGoal={i === g.goalIdx} />
      ))}

      {g.powerUps.map((pu, i) => (
        <PowerUpMesh key={`pu${i}`} powerUp={pu} gameRef={gameRef} />
      ))}

      <Character gameRef={gameRef} skinId={skinId} hatId={hatId} trailId={trailId} />

      {/* Ghost player (multiplayer opponent) */}
      {ghostPosRef && ghostName && (
        <GhostPlayer posRef={ghostPosRef} name={ghostName} avatarData={ghostAvatarData || null} />
      )}

      <GameLoop gameRef={gameRef} onDie={onDie} onGoal={onGoal} onWinStart={onWinStart} onPowerUp={onPowerUp} onShieldUsed={onShieldUsed} />
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

// ─── FULLSCREEN HELPERS ─────────────────────────────
function requestFullscreen() {
  const el = document.documentElement as HTMLElement & {
    webkitRequestFullscreen?: () => Promise<void>;
    msRequestFullscreen?: () => Promise<void>;
  };
  try {
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  } catch {}
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  return !!(
    nav.standalone ||
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches
  );
}

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod/.test(navigator.userAgent);
}

// ─── MAIN COMPONENT ─────────────────────────────────
export default function SkyClimbPageWrapper() {
  return <Suspense><SkyClimbPage /></Suspense>;
}

function SkyClimbPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const matchId = searchParams.get("match");
  const matchSeed = searchParams.get("seed");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const urlLevel = searchParams.get("level");
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!(isMultiplayer && mixround);
  const isP1 = playerNum === "1";

  const [gameState, setGameState] = useState<GameState>("menu");
  const [level, setLevel] = useState(1);
  const [highestLevel, setHighestLevel] = useState(1);
  const [rewardRarity, setRewardRarity] = useState<CardRarity>("bronze");
  const [showPwaHint, setShowPwaHint] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [winAnimActive, setWinAnimActive] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [shieldActive, setShieldActive] = useState(false);
  const [activeSkinId, setActiveSkinId] = useState("default");
  const [activeHatId, setActiveHatId] = useState<string | null>(null);
  const [activeTrailId, setActiveTrailId] = useState<string | null>(null);

  // ─── MULTIPLAYER STATE ──────────────────────────
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [oppFinished, setOppFinished] = useState(false);
  const [oppDied, setOppDied] = useState(false);
  const [multiResult, setMultiResult] = useState<{ myScore: number; oppScore: number } | null>(null);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [ghostAvatarData, setGhostAvatarData] = useState<GhostAvatarData | null>(null);
  const [roundResult, setRoundResult] = useState<{ myScore: number; oppScore: number; roundNumber: number; totalRounds: number } | null>(null);
  const [showRoundResult, setShowRoundResult] = useState(false);
  const channelRef = useRef<RealtimeChannel | null>(null);
  const ghostPosRef = useRef({ x: 0, y: 1, z: 0, fa: 0, dead: false });
  const oppHeightRef = useRef(0);
  const broadcastIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const nextRoundUrlRef = useRef<string | null>(null);
  const multiStartedRef = useRef(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const gameRef = useRef<GameData>(createGameData());

  useEffect(() => {
    // Detect touch capability (works for landscape phones too)
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const saved = localStorage.getItem("plizio_skyclimb_highest");
    if (saved) setHighestLevel(parseInt(saved));
    setActiveSkinId(getActiveSkin());
    setActiveHatId(getActiveHat());
    setActiveTrailId(getActiveTrail());

    // Check if already in standalone/fullscreen
    setIsFullscreen(isStandalone());

    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement || isStandalone());
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  // ─── FULLSCREEN + MOBILE APP MODE ─────────────────
  useEffect(() => {
    const preventOverscroll = (e: TouchEvent) => {
      if (gameState === "playing") {
        e.preventDefault();
      }
    };
    document.addEventListener("touchmove", preventOverscroll, { passive: false });

    if (gameState === "playing") {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.height = "100%";

      // Scroll down to hide address bar on mobile browsers
      window.scrollTo(0, 1);
    }

    return () => {
      document.removeEventListener("touchmove", preventOverscroll);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [gameState]);

  // Keyboard + mouse + touch controls
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

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      g.camDist = Math.max(4, Math.min(18, g.camDist + e.deltaY * 0.01));
    };

    let camTouchId: number | null = null;
    let camLastX = 0;
    // Pinch-to-zoom state
    let pinchActive = false;
    let pinchLastDist = 0;

    const handleTouchStart = (e: TouchEvent) => {
      // Pinch-to-zoom: 2 fingers detected
      if (e.touches.length === 2) {
        pinchActive = true;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchLastDist = Math.sqrt(dx * dx + dy * dy);
        camTouchId = null; // Cancel camera rotation during pinch
        return;
      }

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
      // Pinch-to-zoom handling
      if (e.touches.length === 2 && pinchActive) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const delta = pinchLastDist - dist;
        pinchLastDist = dist;
        // Zoom: pinch in = zoom out (increase distance), pinch out = zoom in
        g.camDist = Math.max(4, Math.min(18, g.camDist + delta * 0.03));
        return;
      }

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
      // Reset pinch when finger lifted
      if (e.touches.length < 2) {
        pinchActive = false;
      }
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
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      g.moveX = 0;
      g.moveZ = 0;
      g.jumpPressed = false;
    };
  }, [gameState]);

  // ─── MULTIPLAYER: Supabase broadcast channel ───────
  useEffect(() => {
    if (!isMultiplayer || !matchId) return;

    const channel = supabase.channel(`skyclimb-${matchId}`, {
      config: { broadcast: { self: false } },
    });

    channel.on("broadcast", { event: "pos" }, ({ payload }) => {
      if (payload.p !== playerNum) {
        ghostPosRef.current = { x: payload.x, y: payload.y, z: payload.z, fa: payload.fa, dead: false };
      }
    });

    channel.on("broadcast", { event: "finished" }, ({ payload }) => {
      if (payload.p !== playerNum) {
        setOppFinished(true);
      }
    });

    channel.on("broadcast", { event: "died" }, ({ payload }) => {
      if (payload.p !== playerNum) {
        ghostPosRef.current = { ...ghostPosRef.current, dead: true };
        oppHeightRef.current = payload.height ?? 0;
        setOppDied(true);
      }
    });

    channel.on("broadcast", { event: "avatar" }, ({ payload }) => {
      if (payload.p !== playerNum) {
        setGhostAvatarData(payload.avatar as GhostAvatarData);
      }
    });

    channel.subscribe((status) => {
      if (status === "SUBSCRIBED") {
        // Send our avatar appearance to opponent
        const skin = getSkinDef(getActiveSkin());
        const hasReal = skin.id !== "default";
        const topId = getActive("top");
        const bottomId = getActive("bottom");
        const shoeId = getActive("shoe");
        const topD = topId ? getTopDef(topId) : null;
        const bottomD = bottomId ? getBottomDef(bottomId) : null;
        const shoeD = shoeId ? getShoeDef(shoeId) : null;
        const myAvatar: GhostAvatarData = {
          bodyColor: topD ? topD.color : (hasReal ? skin.bodyColor : "#6b8fad"),
          headColor: hasReal ? skin.headColor : "#e8c9a0",
          limbColor: bottomD ? bottomD.color : (hasReal ? skin.limbColor : "#1e3a5f"),
          shoeColor: shoeD ? shoeD.color : (hasReal ? skin.shoeColor : "#222222"),
          hairColor: hasReal ? skin.headColor : "#3b2a1a",
          gender: getGender(),
        };
        channel.send({ type: "broadcast", event: "avatar", payload: { p: playerNum, avatar: myAvatar } });
        // Send again after a delay in case opponent joined late
        setTimeout(() => {
          channel.send({ type: "broadcast", event: "avatar", payload: { p: playerNum, avatar: myAvatar } });
        }, 2000);
      }
    });
    channelRef.current = channel;

    return () => {
      supabase.removeChannel(channel);
      channelRef.current = null;
    };
  }, [isMultiplayer, matchId, playerNum]);

  // ─── MULTIPLAYER: Broadcast position ~8/sec ────────
  useEffect(() => {
    if (!isMultiplayer || gameState !== "playing" || !channelRef.current) return;

    const interval = setInterval(() => {
      const g = gameRef.current;
      if (g.dead || g.levelComplete) return;
      channelRef.current?.send({
        type: "broadcast",
        event: "pos",
        payload: { p: playerNum, x: g.px, y: g.py, z: g.pz, fa: g.facingAngle },
      });
    }, 120);

    broadcastIntervalRef.current = interval;
    return () => {
      clearInterval(interval);
      broadcastIntervalRef.current = null;
    };
  }, [isMultiplayer, gameState, playerNum]);

  // ─── MULTIPLAYER: Auto-start when URL has level ────
  const multiStarted = useRef(false);
  useEffect(() => {
    if (isMultiplayer && urlLevel && !multiStarted.current) {
      multiStarted.current = true;
      const lv = Math.min(9, Math.max(1, parseInt(urlLevel) || 1));
      setTimeout(() => startGame(lv), 100);
    }
  }, [isMultiplayer, urlLevel]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── MULTIPLAYER: Handle opponent finishing ────────
  useEffect(() => {
    if (!oppFinished || !isMultiplayer || !matchId || scoreSubmitted) return;
    // Opponent finished first — I lose, submit my best height
    setScoreSubmitted(true);
    const g = gameRef.current;
    const myHeight = Math.round(g.bestHeight);
    if (broadcastIntervalRef.current) clearInterval(broadcastIntervalRef.current);

    if (isMix) {
      submitMixRoundScore(matchId, myHeight, isP1).then(() => {
        setMultiResult({ myScore: myHeight, oppScore: 999 });
      });
    } else {
      submitScore(matchId, myHeight, isP1).then(() => {
        setMultiResult({ myScore: myHeight, oppScore: 999 });
      });
    }
  }, [oppFinished, isMultiplayer, matchId, scoreSubmitted, playerNum, isMix, isP1]);

  // ─── MULTIPLAYER: Handle opponent dying ────────────
  useEffect(() => {
    if (!oppDied || !isMultiplayer) return;
    setNotification("💀 " + opponentName);
    setTimeout(() => setNotification(null), 2000);
    // If I already submitted score (finished/died), update result with opponent's height
    if (scoreSubmitted && multiResult && multiResult.oppScore === -1) {
      setMultiResult({ ...multiResult, oppScore: oppHeightRef.current });
    }
  }, [oppDied, isMultiplayer, opponentName, scoreSubmitted, multiResult]);

  // ─── MULTIPLAYER: Handle opponent finishing after I died/finished ─
  useEffect(() => {
    if (!oppFinished || !isMultiplayer || !scoreSubmitted) return;
    // Opponent finished the level = score 999
    if (multiResult && multiResult.oppScore === -1) {
      setMultiResult({ ...multiResult, oppScore: 999 });
    }
  }, [oppFinished, isMultiplayer, scoreSubmitted, multiResult]);

  const startGame = useCallback((lvl: number) => {
    // Try fullscreen on Android
    if (!isStandalone()) {
      requestFullscreen();
    }
    try {
      (screen.orientation as { lock?: (o: string) => Promise<void> })?.lock?.("portrait").catch(() => {});
    } catch {}

    // Use seed for deterministic levels in multiplayer
    const seed = isMultiplayer ? matchSeed || undefined : undefined;
    const { platforms, goalIdx, powerUps } = generateLevel(lvl, seed);
    const g = gameRef.current;
    Object.assign(g, createGameData());
    g.platforms = platforms;
    g.goalIdx = goalIdx;
    g.powerUps = powerUps;
    g.level = lvl;
    g.py = 1;

    // Reset multiplayer state
    setOppFinished(false);
    setOppDied(false);
    setScoreSubmitted(false);
    setMultiResult(null);
    ghostPosRef.current = { x: 0, y: 1, z: 0, fa: 0, dead: false };
    oppHeightRef.current = 0;

    // Activate shop power-up: sky_extralife gives shield at start
    try {
      const saved = localStorage.getItem("plizio_powerups");
      if (saved) {
        const pups = JSON.parse(saved) as Record<string, number>;
        if (pups["sky_extralife"] && pups["sky_extralife"] > 0) {
          g.hasShield = true;
          pups["sky_extralife"] -= 1;
          if (pups["sky_extralife"] <= 0) delete pups["sky_extralife"];
          localStorage.setItem("plizio_powerups", JSON.stringify(pups));
          setShieldActive(true);
          setNotification("SHIELD READY!");
          setTimeout(() => setNotification(null), 2000);
        }
      }
    } catch {}

    setLevel(lvl);
    setWinAnimActive(false);
    setGameState("playing");
  }, []);

  const handleDie = useCallback(() => {
    setWinAnimActive(false);
    if (isMultiplayer && matchId && !scoreSubmitted) {
      const g = gameRef.current;
      const heightScore = Math.round(g.bestHeight);
      // Broadcast death + height to opponent
      channelRef.current?.send({
        type: "broadcast",
        event: "died",
        payload: { p: playerNum, height: heightScore },
      });

      setScoreSubmitted(true);
      const submitFn = isMix ? submitMixRoundScore : submitScore;
      submitFn(matchId, heightScore, isP1).then(() => {
        if (oppDied) {
          // Both died — compare heights
          setMultiResult({ myScore: heightScore, oppScore: oppHeightRef.current });
        } else if (oppFinished) {
          // Opponent already finished — they win
          setMultiResult({ myScore: heightScore, oppScore: 999 });
        } else {
          // Wait for opponent
          setMultiResult({ myScore: heightScore, oppScore: -1 });
        }
      });
    }
    setGameState("dead");
  }, [isMultiplayer, matchId, scoreSubmitted, playerNum, oppDied, oppFinished, isMix, isP1]);

  const handleWinStart = useCallback(() => {
    setWinAnimActive(true);
  }, []);

  const handlePowerUp = useCallback((type: PowerUpType) => {
    if (type === "shield") setShieldActive(true);
    const names: Record<PowerUpType, string> = {
      rocket: "ROCKET!",
      shield: "SHIELD!",
      magnet: "MAGNET!",
    };
    setNotification(names[type]);
    setTimeout(() => setNotification(null), 2000);
  }, []);

  const handleShieldUsed = useCallback(() => {
    setShieldActive(false);
    setNotification("SHIELD USED!");
    setTimeout(() => setNotification(null), 2000);
  }, []);

  const handleGoal = useCallback(() => {
    setWinAnimActive(false);
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
    window.dispatchEvent(new Event("plizio-cards-changed"));
    const newHighest = Math.max(g.level, parseInt(localStorage.getItem("plizio_skyclimb_highest") || "1"));
    localStorage.setItem("plizio_skyclimb_highest", newHighest.toString());
    setHighestLevel(newHighest);
    incrementTotalGames();
    updateStats({ skyHighestLevel: newHighest });

    if (isMultiplayer && matchId && !scoreSubmitted) {
      // Broadcast finish to opponent
      channelRef.current?.send({
        type: "broadcast",
        event: "finished",
        payload: { p: playerNum },
      });
      setScoreSubmitted(true);
      const winScore = 999; // finished = always beats any death height
      const submitFn = isMix ? submitMixRoundScore : submitScore;
      submitFn(matchId, winScore, isP1).then(() => {
        if (oppDied) {
          setMultiResult({ myScore: winScore, oppScore: oppHeightRef.current });
        } else if (oppFinished) {
          // Both finished — draw
          setMultiResult({ myScore: winScore, oppScore: 999 });
        } else {
          setMultiResult({ myScore: winScore, oppScore: -1 });
        }
      });
      setGameState("reward");
      return;
    }
    setGameState("reward");
  }, [isMultiplayer, matchId, scoreSubmitted, playerNum, oppDied, oppFinished]);

  const handleFullscreenBtn = useCallback(() => {
    if (isIOS()) {
      setShowPwaHint(true);
    } else {
      requestFullscreen();
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-bg relative overflow-hidden" style={{ minHeight: "100dvh", height: "100dvh", width: "100vw", overscrollBehavior: "none" }}>
      {/* Menu (hidden in multiplayer) */}
      {gameState === "menu" && !isMultiplayer && (
        <motion.div className="flex flex-col items-center gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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

          {/* Fullscreen button - visible on mobile, works differently per platform */}
          {!isFullscreen && (
            <motion.button
              onClick={handleFullscreenBtn}
              className="sm:hidden bg-neon-green/10 border border-neon-green/30 text-neon-green px-5 py-3 rounded-xl flex items-center gap-2 text-sm font-bold"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Maximize size={16} /> Fullscreen
            </motion.button>
          )}

          {isFullscreen && (
            <motion.div className="sm:hidden text-neon-green/40 text-xs flex items-center gap-1"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Maximize size={12} /> Fullscreen active
            </motion.div>
          )}
        </motion.div>
      )}

      {/* iOS PWA hint overlay */}
      <AnimatePresence>
        {showPwaHint && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md px-6 gap-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowPwaHint(false)}
          >
            <motion.div
              className="bg-card border border-white/10 rounded-2xl p-6 max-w-sm w-full flex flex-col gap-4"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-white font-bold text-lg text-center">Fullscreen</div>
              <div className="text-white/60 text-sm text-center leading-relaxed">
                On iOS, fullscreen only works as an app. Add it to your home screen:
              </div>
              <div className="flex flex-col gap-3 text-white/80 text-sm">
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                  <Share size={20} className="text-neon-blue shrink-0" />
                  <span>1. Tap the <strong>Share</strong> button (bottom)</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                  <span className="text-neon-blue text-xl shrink-0">+</span>
                  <span>2. <strong>&quot;Add to Home Screen&quot;</strong></span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3">
                  <Maximize size={20} className="text-neon-green shrink-0" />
                  <span>3. Launch from there - <strong>fullscreen!</strong></span>
                </div>
              </div>
              <motion.button
                onClick={() => setShowPwaHint(false)}
                className="mt-2 bg-neon-green/10 border border-neon-green/30 text-neon-green py-2 rounded-xl font-bold text-sm"
                whileTap={{ scale: 0.95 }}
              >
                Got it
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Game */}
      {gameState === "playing" && (
        <div className="fixed inset-0 touch-none" style={{ height: "100dvh", width: "100vw" }}>
          <Canvas camera={{ fov: 60 }} gl={{ antialias: true }}
            style={{ background: "linear-gradient(180deg, #2a5298 0%, #5b86c7 25%, #87CEEB 50%, #e8d5b7 85%, #f0c27f 100%)", height: "100%", width: "100%" }}>
            <Scene3D gameRef={gameRef} onDie={handleDie} onGoal={handleGoal} onWinStart={handleWinStart} onPowerUp={handlePowerUp} onShieldUsed={handleShieldUsed} skinId={activeSkinId} hatId={activeHatId} trailId={activeTrailId}
              ghostPosRef={isMultiplayer ? ghostPosRef : undefined} ghostName={isMultiplayer ? opponentName : undefined} ghostAvatarData={isMultiplayer ? ghostAvatarData : undefined} />
          </Canvas>

          {/* HUD */}
          <div className="fixed top-2 left-0 right-0 z-10 flex items-start justify-between px-3 pointer-events-none" style={{ paddingTop: "env(safe-area-inset-top, 8px)" }}>
            {/* Home/Exit button */}
            {isMultiplayer ? (
              <button onClick={() => setShowExitConfirm(true)}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-2.5 pointer-events-auto cursor-pointer hover:bg-black/60 transition-colors">
                <X size={16} className="text-white/60" />
              </button>
            ) : (
              <Link href="/">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl p-2.5 pointer-events-auto cursor-pointer hover:bg-black/60 transition-colors">
                  <X size={16} className="text-white/60" />
                </div>
              </Link>
            )}

            {/* Level display + VS indicator */}
            <div className="flex flex-col items-center gap-1">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-3">
                <Mountain size={14} className="text-neon-green" />
                <span className="text-white/80 font-mono text-sm font-bold">LVL {level}</span>
              </div>
              {isMultiplayer && (
                <div className="bg-neon-pink/20 backdrop-blur-sm rounded-lg px-3 py-1 border border-neon-pink/30">
                  <span className="text-neon-pink text-[10px] font-bold">VS {opponentName}</span>
                </div>
              )}
            </div>

            {/* Power-up indicators */}
            <div className="flex items-center gap-1.5">
              {shieldActive && (
                <div className="bg-blue-500/30 backdrop-blur-sm rounded-xl p-2 border border-blue-400/40">
                  <Shield size={14} className="text-blue-400" />
                </div>
              )}
            </div>
          </div>

          {/* Power-up notification */}
          <AnimatePresence>
            {notification && (
              <motion.div
                className="fixed top-16 left-0 right-0 z-20 flex justify-center pointer-events-none"
                initial={{ opacity: 0, y: -20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.9 }}
              >
                <div className="bg-black/60 backdrop-blur-md rounded-xl px-5 py-2.5 border border-white/20">
                  <span className="text-white font-black text-sm tracking-wider">{notification}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Win animation celebration overlay */}
          {winAnimActive && (
            <motion.div
              className="fixed inset-0 z-15 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute inset-0" style={{ background: "radial-gradient(circle, transparent 30%, rgba(255,215,0,0.15) 100%)" }} />
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${15 + Math.random() * 70}%`,
                    backgroundColor: i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#FFA500" : "#FFFFFF",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    y: [0, -60 - Math.random() * 40],
                  }}
                  transition={{ duration: 1.2, delay: i * 0.08, repeat: Infinity }}
                />
              ))}
            </motion.div>
          )}

          {/* Mobile controls - shown on touch devices regardless of screen size */}
          {isTouchDevice && <div className="fixed inset-0 z-10 pointer-events-none" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
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
          </div>}

          {/* Fullscreen button in-game (top-right, small) */}
          {!isFullscreen && isTouchDevice && (
            <button
              className="fixed top-2 right-2 z-20 bg-black/30 backdrop-blur-sm rounded-lg p-2"
              style={{ paddingTop: "env(safe-area-inset-top, 8px)" }}
              onClick={() => {
                if (isIOS()) setShowPwaHint(true);
                else requestFullscreen();
              }}
            >
              <Maximize size={16} className="text-white/50" />
            </button>
          )}

          {/* PC controls hint - only on non-touch devices */}
          {!isTouchDevice && (
            <div className="fixed bottom-4 left-0 right-0 z-10 flex justify-center pointer-events-none">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-4 text-white/40 text-xs font-mono">
                <span>WASD</span>
                <span>SPACE jump</span>
                <span>MOUSE camera</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Death */}
      <AnimatePresence>
        {gameState === "dead" && !isMultiplayer && (
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
              <Link href="/">
                <motion.div
                  className="bg-neon-purple/10 border border-neon-purple/30 text-neon-purple px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Home size={18} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        )}
        {/* Multi death — waiting for opponent result */}
        {gameState === "dead" && isMultiplayer && (!multiResult || multiResult.oppScore === -1) && (
          <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Mountain size={48} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 15px rgba(255,45,120,0.5))" }} />
            <span className="text-neon-pink font-black text-lg">FELL!</span>
            <motion.div className="w-10 h-10 border-2 border-neon-pink border-t-transparent rounded-full"
              animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
            <span className="text-white/50 text-sm">Waiting for {opponentName}...</span>
          </motion.div>
        )}
        {/* Multi result overlay */}
        {isMultiplayer && multiResult && multiResult.oppScore !== -1 && (
          <MultiplayerResult
            myScore={multiResult.myScore}
            oppScore={multiResult.oppScore}
            myName={getUsername() || "???"}
            oppName={opponentName}
            onContinue={() => router.push("/multiplayer")}
            formatScore={(s) => s >= 999 ? "✓" : `${s}m`}
          />
        )}
      </AnimatePresence>

      {/* Reward */}
      {gameState === "reward" && (
        <RewardReveal rarity={rewardRarity} game="skyclimb" score={level} total={level}
          onDone={() => {
            if (isMultiplayer) {
              // In multi, after reward go to waiting or result
              if (multiResult && multiResult.oppScore !== -1) {
                setGameState("level-complete"); // triggers multi-result via the AnimatePresence above
              } else {
                setGameState("dead"); // reuse dead screen as waiting state
              }
            } else {
              setGameState("level-complete");
            }
          }} />
      )}

      {/* Level complete (solo only — multi uses MultiplayerResult) */}
      <AnimatePresence>
        {gameState === "level-complete" && !isMultiplayer && (
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
              <Link href="/">
                <motion.div
                  className="bg-neon-purple/10 border border-neon-purple/30 text-neon-purple px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Home size={18} />
                </motion.div>
              </Link>
            </motion.div>
            <MilestonePopup />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Multiplayer: waiting for opponent after I won */}
      {isMultiplayer && gameState === "level-complete" && multiResult && multiResult.oppScore === -1 && (
        <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Mountain size={48} className="text-neon-green" style={{ filter: "drop-shadow(0 0 15px rgba(0,255,136,0.5))" }} />
          <span className="text-neon-green font-black text-lg">LVL {level} ✓</span>
          <motion.div className="w-10 h-10 border-2 border-neon-green border-t-transparent rounded-full"
            animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
          <span className="text-white/50 text-sm">Waiting for {opponentName}...</span>
        </motion.div>
      )}

      {/* Multiplayer: result after both done from level-complete */}
      {isMultiplayer && gameState === "level-complete" && multiResult && multiResult.oppScore !== -1 && (
        <MultiplayerResult
          myScore={multiResult.myScore}
          oppScore={multiResult.oppScore}
          myName={getUsername() || "???"}
          oppName={opponentName}
          onContinue={() => router.push("/multiplayer")}
          formatScore={(s) => s >= 999 ? "✓" : `${s}m`}
        />
      )}

      {/* Multiplayer overlays */}
      {isMultiplayer && matchId && (
        <>
          <MultiplayerExitConfirm
            open={showExitConfirm}
            onStay={() => setShowExitConfirm(false)}
            onLeave={() => { abandonMatch(matchId); router.push("/multiplayer"); }}
          />
          {gameState === "playing" && (
            <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />
          )}
        </>
      )}
    </main>
  );
}

function getLevelRarity(level: number): CardRarity {
  if (level >= 15) return "legendary";
  if (level >= 8) return "gold";
  if (level >= 4) return "silver";
  return "bronze";
}
