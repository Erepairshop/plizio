"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Trophy, Home, Star, RotateCcw, Lock, Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import RewardReveal from "@/components/RewardReveal";
import { saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames } from "@/lib/milestones";
import MilestonePopup from "@/components/MilestonePopup";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender } from "@/lib/gender";
import type { AvatarGender } from "@/lib/gender";
import { getActiveSkin, getSkinDef } from "@/lib/skins";
import { getActiveFace, getFaceDef } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";

// ─── Types ──────────────────────────────────────────────────────────────────

type Screen = "expedition" | "countdown" | "playing" | "levelComplete" | "levelFailed";
type CellType = "idle" | "green" | "gold" | "red" | "lightning" | "bomb";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

interface LevelConfig {
  level: number;
  gridSize: number;
  duration: number;
  target: number;
  hasGold: boolean;
  hasRed: boolean;
  hasLightning: boolean;
  hasBomb: boolean;
  spawnInterval: number;
  maxActiveCells: number;
  cellLifetime: number;
}

interface RRSave {
  currentLevel: number;
  completedLevels: number[];
}

interface FloatingPt {
  id: number;
  value: number;
  x: number;
  y: number;
}

// ─── Level configs ───────────────────────────────────────────────────────────

const LEVELS: LevelConfig[] = [
  { level: 1,  gridSize: 3, duration: 35, target: 8,  hasGold: false, hasRed: false, hasLightning: false, hasBomb: false, spawnInterval: 1500, maxActiveCells: 2, cellLifetime: 2200 },
  { level: 2,  gridSize: 3, duration: 30, target: 12, hasGold: true,  hasRed: false, hasLightning: false, hasBomb: false, spawnInterval: 1300, maxActiveCells: 2, cellLifetime: 2000 },
  { level: 3,  gridSize: 4, duration: 35, target: 18, hasGold: true,  hasRed: true,  hasLightning: false, hasBomb: false, spawnInterval: 1200, maxActiveCells: 3, cellLifetime: 1800 },
  { level: 4,  gridSize: 4, duration: 30, target: 25, hasGold: true,  hasRed: true,  hasLightning: false, hasBomb: false, spawnInterval: 1000, maxActiveCells: 3, cellLifetime: 1600 },
  { level: 5,  gridSize: 4, duration: 25, target: 32, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: false, spawnInterval: 900,  maxActiveCells: 3, cellLifetime: 1500 },
  { level: 6,  gridSize: 5, duration: 35, target: 42, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: false, spawnInterval: 850,  maxActiveCells: 4, cellLifetime: 1400 },
  { level: 7,  gridSize: 5, duration: 30, target: 54, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: true,  spawnInterval: 800,  maxActiveCells: 4, cellLifetime: 1300 },
  { level: 8,  gridSize: 5, duration: 25, target: 66, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: true,  spawnInterval: 700,  maxActiveCells: 5, cellLifetime: 1200 },
  { level: 9,  gridSize: 6, duration: 30, target: 80, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: true,  spawnInterval: 650,  maxActiveCells: 5, cellLifetime: 1100 },
  { level: 10, gridSize: 6, duration: 35, target: 95, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: true,  spawnInterval: 600,  maxActiveCells: 6, cellLifetime: 1000 },
];

const LEVEL_BADGES = ["🟢","⭐","🔴","⚡","⚡","🎯","💣","💣","🌪️","🏆"];

// ─── Save / Load ─────────────────────────────────────────────────────────────

const SAVE_KEY = "reflexrush_expedition_v1";

function loadSave(): RRSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}

function writeSave(s: RRSave) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(s));
}

// ─── Cell type selection ──────────────────────────────────────────────────────

function pickCellType(cfg: LevelConfig): CellType {
  const options: { type: CellType; weight: number }[] = [{ type: "green", weight: 50 }];
  if (cfg.hasGold)      options.push({ type: "gold",      weight: 15 });
  if (cfg.hasRed)       options.push({ type: "red",       weight: 20 });
  if (cfg.hasLightning) options.push({ type: "lightning", weight: 8  });
  if (cfg.hasBomb)      options.push({ type: "bomb",      weight: 7  });
  const total = options.reduce((s, o) => s + o.weight, 0);
  let r = Math.random() * total;
  for (const o of options) {
    r -= o.weight;
    if (r <= 0) return o.type;
  }
  return "green";
}

// ─── Visuals ──────────────────────────────────────────────────────────────────

const CELL_CONFIG: Record<CellType, { bg: string; border: string; icon: string; shadow: string }> = {
  idle:      { bg: "#0f0f2a", border: "#2a2a4a", icon: "",   shadow: "none"                     },
  green:     { bg: "#00220f", border: "#00FF88", icon: "✓",  shadow: "0 0 14px #00FF8899"       },
  gold:      { bg: "#2a1a00", border: "#FFD700", icon: "⭐", shadow: "0 0 14px #FFD70099"       },
  red:       { bg: "#220010", border: "#FF2D78", icon: "✕",  shadow: "0 0 14px #FF2D7899"       },
  lightning: { bg: "#00162a", border: "#00D4FF", icon: "⚡", shadow: "0 0 14px #00D4FF99"       },
  bomb:      { bg: "#150028", border: "#B44DFF", icon: "💣", shadow: "0 0 14px #B44DFF99"       },
};

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze:    "#CD7F32",
  silver:    "#C0C0C0",
  gold:      "#FFD700",
  legendary: "#B44DFF",
};

const RARITY_LABELS: Record<CardRarity, string> = {
  bronze:    "BRONZ",
  silver:    "EZÜST",
  gold:      "ARANY",
  legendary: "LEGENDÁS",
};

// ─── Card rarity for levels 1-9 (based on time remaining) ────────────────────

function calcRarity(score: number, target: number, timeLeft: number, duration: number): CardRarity {
  const timeRatio = timeLeft / duration;
  if (timeRatio > 0.55) return "gold";
  if (timeRatio > 0.25) return "silver";
  return "bronze";
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ReflexRushPage() {

  // ── Avatar state ────────────────────────────────────────────────────────────
  const [avatarGender, setAvatarGender]   = useState<AvatarGender>("girl");
  const [avatarSkin,   setAvatarSkin]     = useState<ReturnType<typeof getSkinDef> | null>(null);
  const [avatarFace,   setAvatarFace]     = useState<ReturnType<typeof getFaceDef> | null>(null);
  const [avatarTop,    setAvatarTop]      = useState<ReturnType<typeof getTopDef>    | null>(null);
  const [avatarBottom, setAvatarBottom]   = useState<ReturnType<typeof getBottomDef> | null>(null);
  const [avatarShoe,   setAvatarShoe]     = useState<ReturnType<typeof getShoeDef>   | null>(null);
  const [avatarCape,   setAvatarCape]     = useState<ReturnType<typeof getCapeDef>   | null>(null);
  const [avatarGlasses,setAvatarGlasses]  = useState<ReturnType<typeof getGlassesDef>| null>(null);
  const [avatarGloves, setAvatarGloves]   = useState<ReturnType<typeof getGloveDef>  | null>(null);
  const [avatarHat,    setAvatarHat]      = useState<ReturnType<typeof getHatDef>    | null>(null);
  const [avatarTrail,  setAvatarTrail]    = useState<ReturnType<typeof getTrailDef>  | null>(null);
  const [avatarMood,   setAvatarMood]     = useState<AvatarMood>("idle");
  const [avatarJump,   setAvatarJump]     = useState<{ reaction: "happy" | "surprised" | "victory" | "confused" | "laughing" | null; timestamp: number } | undefined>(undefined);
  const avatarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setAvatarGender(getGender());
    setAvatarSkin(getSkinDef(getActiveSkin()));
    setAvatarFace(getFaceDef(getActiveFace()));
    const topId = getActive("top");      setAvatarTop(topId ? getTopDef(topId) : null);
    const botId = getActive("bottom");   setAvatarBottom(botId ? getBottomDef(botId) : null);
    const shoeId = getActive("shoe");    setAvatarShoe(shoeId ? getShoeDef(shoeId) : null);
    const capeId = getActive("cape");    setAvatarCape(capeId ? getCapeDef(capeId) : null);
    const glsId = getActive("glasses");  setAvatarGlasses(glsId ? getGlassesDef(glsId) : null);
    const glvId = getActive("gloves");   setAvatarGloves(glvId ? getGloveDef(glvId) : null);
    const hatId = getActiveHat();        setAvatarHat(hatId ? getHatDef(hatId) : null);
    const trailId = getActiveTrail();    setAvatarTrail(trailId ? getTrailDef(trailId) : null);
  }, []);

  function triggerAvatarMood(mood: AvatarMood, duration: number, jumpReaction?: "happy" | "surprised" | "victory" | "confused" | "laughing") {
    if (avatarTimerRef.current) clearTimeout(avatarTimerRef.current);
    setAvatarMood(mood);
    if (jumpReaction) {
      setAvatarJump({ reaction: jumpReaction, timestamp: Date.now() });
    }
    avatarTimerRef.current = setTimeout(() => setAvatarMood("focused"), duration);
  }

  // ── Save / Level state ───────────────────────────────────────────────────────
  const [save, setSave] = useState<RRSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [countdownVal, setCountdownVal] = useState(3);

  useEffect(() => {
    const s = loadSave();
    setSave(s);
  }, []);

  // ── Game state ───────────────────────────────────────────────────────────────
  const totalCells = (LEVELS[activeLevel - 1]?.gridSize || 3) ** 2;
  const [grid, setGrid] = useState<CellType[]>(Array(totalCells).fill("idle"));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lightningActive, setLightningActive] = useState(false);
  const [floatingPts, setFloatingPts] = useState<FloatingPt[]>([]);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);

  // Refs (for use inside intervals/timeouts without stale closures)
  const gridRef       = useRef<CellType[]>([]);
  const scoreRef      = useRef(0);
  const comboRef      = useRef(0);
  const lightningRef  = useRef(false);
  const cfgRef        = useRef<LevelConfig>(LEVELS[0]);
  const gameActiveRef = useRef(false);
  const ptCounter     = useRef(0);

  const timerRef         = useRef<ReturnType<typeof setInterval> | null>(null);
  const spawnTimer       = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cellTimers       = useRef<(ReturnType<typeof setTimeout> | null)[]>([]);
  const lightningTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Stop all game timers ─────────────────────────────────────────────────────
  const stopGame = useCallback(() => {
    gameActiveRef.current = false;
    if (timerRef.current)    { clearInterval(timerRef.current);   timerRef.current = null; }
    if (spawnTimer.current)  { clearTimeout(spawnTimer.current);  spawnTimer.current = null; }
    if (lightningTimer.current) { clearTimeout(lightningTimer.current); lightningTimer.current = null; }
    cellTimers.current.forEach(t => { if (t) clearTimeout(t); });
    cellTimers.current = [];
  }, []);

  // ── Level success ────────────────────────────────────────────────────────────
  const levelSuccess = useCallback((finalScore: number, finalTimeLeft: number) => {
    stopGame();
    const cfg = cfgRef.current;
    const rarity: CardRarity = cfg.level === 10 ? "legendary" : calcRarity(finalScore, cfg.target, finalTimeLeft, cfg.duration);

    saveCard({ id: generateCardId(), game: "reflexrush", theme: `level${cfg.level}`, rarity, score: finalScore, total: cfg.target, date: new Date().toISOString() });
    incrementTotalGames();
    setEarnedCard(rarity);

    const newCompleted = [...new Set([...save.completedLevels, cfg.level])];
    const newCurrentLevel = cfg.level === 10 ? 10 : Math.max(save.currentLevel, cfg.level + 1);
    const newSave: RRSave = { currentLevel: newCurrentLevel, completedLevels: newCompleted };
    setSave(newSave);
    writeSave(newSave);

    if (cfg.level === 10) {
      triggerAvatarMood("happy", 99999, "victory");
    } else {
      triggerAvatarMood("happy", 2000, "happy");
    }
    setScreen("levelComplete");
  }, [save, stopGame]);

  // ── Level failed ─────────────────────────────────────────────────────────────
  const levelFailed = useCallback(() => {
    stopGame();
    triggerAvatarMood("confused", 2000, "confused");
    setScreen("levelFailed");
  }, [stopGame]);

  // ── Spawn cell ────────────────────────────────────────────────────────────────
  const scheduleSpawn = useCallback(() => {
    if (!gameActiveRef.current) return;
    const cfg = cfgRef.current;

    spawnTimer.current = setTimeout(() => {
      if (!gameActiveRef.current) return;

      setGrid(prev => {
        const activeCells = prev.filter(t => t !== "idle").length;
        if (activeCells >= cfg.maxActiveCells) {
          scheduleSpawn();
          return prev;
        }
        const idleSlots = prev.reduce<number[]>((acc, t, i) => { if (t === "idle") acc.push(i); return acc; }, []);
        if (idleSlots.length === 0) {
          scheduleSpawn();
          return prev;
        }
        const slot = idleSlots[Math.floor(Math.random() * idleSlots.length)];
        const type = pickCellType(cfg);

        // Schedule auto-expiry for this cell
        if (cellTimers.current[slot]) clearTimeout(cellTimers.current[slot]!);
        cellTimers.current[slot] = setTimeout(() => {
          if (!gameActiveRef.current) return;
          setGrid(p => {
            if (p[slot] === "idle") return p;
            const next = [...p];
            next[slot] = "idle";
            gridRef.current = next;
            return next;
          });
        }, cfg.cellLifetime);

        const next = [...prev];
        next[slot] = type;
        gridRef.current = next;
        scheduleSpawn();
        return next;
      });
    }, cfg.spawnInterval + Math.random() * 200 - 100);
  }, []);

  // ── Cell click ───────────────────────────────────────────────────────────────
  const handleCellClick = useCallback((index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const type = gridRef.current[index];
    if (type === "idle") return;

    // Clear expiry timer
    if (cellTimers.current[index]) {
      clearTimeout(cellTimers.current[index]!);
      cellTimers.current[index] = null;
    }

    // Clear cell
    setGrid(prev => {
      const next = [...prev];
      next[index] = "idle";
      gridRef.current = next;
      return next;
    });

    // Floating point origin
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;

    function addFloat(value: number) {
      const id = ptCounter.current++;
      setFloatingPts(pts => [...pts, { id, value, x, y }]);
      setTimeout(() => setFloatingPts(pts => pts.filter(p => p.id !== id)), 900);
    }

    const cfg = cfgRef.current;

    if (type === "green") {
      const pts = lightningRef.current ? 2 : 1;
      const newScore = scoreRef.current + pts;
      scoreRef.current = newScore;
      setScore(newScore);
      comboRef.current++;
      setCombo(comboRef.current);
      addFloat(pts);
      if (comboRef.current >= 3) triggerAvatarMood("victory", 1200, "victory");
      if (newScore >= cfg.target) levelSuccess(newScore, timeLeft);

    } else if (type === "gold") {
      const pts = lightningRef.current ? 10 : 5;
      const newScore = scoreRef.current + pts;
      scoreRef.current = newScore;
      setScore(newScore);
      comboRef.current++;
      setCombo(comboRef.current);
      addFloat(pts);
      if (newScore >= cfg.target) levelSuccess(newScore, timeLeft);

    } else if (type === "red") {
      const newScore = Math.max(0, scoreRef.current - 3);
      scoreRef.current = newScore;
      setScore(newScore);
      comboRef.current = 0;
      setCombo(0);
      addFloat(-3);
      triggerAvatarMood("disappointed", 800);

    } else if (type === "lightning") {
      lightningRef.current = true;
      setLightningActive(true);
      if (lightningTimer.current) clearTimeout(lightningTimer.current);
      lightningTimer.current = setTimeout(() => {
        lightningRef.current = false;
        setLightningActive(false);
      }, 5000);
      comboRef.current++;
      setCombo(comboRef.current);
      triggerAvatarMood("surprised", 1000, "surprised");

    } else if (type === "bomb") {
      const newScore = Math.max(0, scoreRef.current - 5);
      scoreRef.current = newScore;
      setScore(newScore);
      comboRef.current = 0;
      setCombo(0);
      addFloat(-5);
      triggerAvatarMood("disappointed", 1200);
    }
  }, [levelSuccess, timeLeft]);

  // ── Start level ───────────────────────────────────────────────────────────────
  const startLevel = useCallback((levelNum: number) => {
    const cfg = LEVELS[levelNum - 1];
    cfgRef.current = cfg;
    const total = cfg.gridSize ** 2;

    // Reset all game state
    stopGame();
    scoreRef.current = 0;
    comboRef.current = 0;
    lightningRef.current = false;
    gridRef.current = Array(total).fill("idle");
    cellTimers.current = Array(total).fill(null);

    setActiveLevel(levelNum);
    setGrid(Array(total).fill("idle"));
    setScore(0);
    setTimeLeft(cfg.duration);
    setCombo(0);
    setLightningActive(false);
    setFloatingPts([]);
    setEarnedCard(null);
    setCountdownVal(3);
    setScreen("countdown");
    triggerAvatarMood("focused", 99999);
  }, [stopGame]);

  // ── Countdown effect ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (screen !== "countdown") return;
    if (countdownVal <= 0) {
      setScreen("playing");
      return;
    }
    const t = setTimeout(() => setCountdownVal(v => v - 1), 1000);
    return () => clearTimeout(t);
  }, [screen, countdownVal]);

  // ── Playing effect (timer + spawn) ───────────────────────────────────────────
  useEffect(() => {
    if (screen !== "playing") return;
    gameActiveRef.current = true;

    // Game timer
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          // Check score at end
          if (scoreRef.current >= cfgRef.current.target) {
            levelSuccess(scoreRef.current, 0);
          } else {
            levelFailed();
          }
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    // Start spawning
    scheduleSpawn();

    return () => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    };
  }, [screen, scheduleSpawn, levelSuccess, levelFailed]);

  // ── Expedition: play level button ─────────────────────────────────────────────
  const handlePlayLevel = (levelNum: number) => {
    startLevel(levelNum);
  };

  // ── After levelComplete: next / new expedition ────────────────────────────────
  const handleNextLevel = () => {
    const cfg = cfgRef.current;
    if (cfg.level === 10) {
      // Reset expedition
      const newSave: RRSave = { currentLevel: 1, completedLevels: [] };
      setSave(newSave);
      writeSave(newSave);
      setAvatarMood("idle");
      setScreen("expedition");
    } else {
      setAvatarMood("idle");
      setScreen("expedition");
    }
  };

  const handleRetry = () => {
    startLevel(activeLevel);
  };

  // ── Avatar props shorthand ────────────────────────────────────────────────────
  const avatarProps = {
    mood: avatarMood, gender: avatarGender,
    activeSkin: avatarSkin, activeFace: avatarFace,
    activeTop: avatarTop, activeBottom: avatarBottom,
    activeShoe: avatarShoe, activeCape: avatarCape,
    activeGlasses: avatarGlasses, activeGloves: avatarGloves,
    activeHat: avatarHat, activeTrail: avatarTrail,
    jumpTrigger: avatarJump,
  };

  const cfg = LEVELS[activeLevel - 1];

  // ─────────────────────────────────────────────────────────────────────────────
  // ── RENDER ───────────────────────────────────────────────────────────────────
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white select-none overflow-hidden">

      {/* Avatar (fixed, always visible) */}
      <AvatarCompanion {...avatarProps} fixed />

      {/* Floating points */}
      <AnimatePresence>
        {floatingPts.map(fp => (
          <motion.div
            key={fp.id}
            className="pointer-events-none fixed z-50 font-black text-lg"
            style={{
              left: fp.x,
              top: fp.y,
              color: fp.value > 0 ? (fp.value >= 5 ? "#FFD700" : "#00FF88") : "#FF2D78",
              transform: "translate(-50%, 0)",
            }}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: -60 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {fp.value > 0 ? `+${fp.value}` : fp.value}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Milestone popup */}
      <MilestonePopup />

      {/* ── EXPEDITION SCREEN ───────────────────────────────────────────────── */}
      {screen === "expedition" && (
        <div className="flex flex-col min-h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between p-4 pt-6">
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Home size={20} />
              <span className="text-sm font-bold">Főoldal</span>
            </Link>
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-[#00D4FF]" />
              <span className="text-lg font-black tracking-wider text-[#00D4FF]">REFLEX RUSH</span>
            </div>
            <div className="w-20" />
          </div>

          {/* Subtitle */}
          <p className="text-center text-white/40 text-sm mb-6 px-4">
            10 szint · Nyomj gyorsan · Kerüld a veszélyeket
          </p>

          {/* Progress bar */}
          <div className="px-6 mb-8">
            <div className="flex justify-between text-xs text-white/40 mb-1">
              <span>Haladás</span>
              <span>{save.completedLevels.length}/10 szint</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00D4FF] to-[#B44DFF] rounded-full"
                initial={false}
                animate={{ width: `${(save.completedLevels.length / 10) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Level list */}
          <div className="px-4 flex flex-col gap-3 max-w-sm mx-auto w-full">
            {LEVELS.map((lc, i) => {
              const done = save.completedLevels.includes(lc.level);
              const current = lc.level === save.currentLevel;
              const locked = lc.level > save.currentLevel;
              const isBoss = lc.level === 10;

              return (
                <motion.div
                  key={lc.level}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    done
                      ? "bg-[#001a0a] border-[#00FF8840]"
                      : current
                      ? isBoss
                        ? "bg-[#1a0028] border-[#B44DFF] shadow-[0_0_20px_#B44DFF33]"
                        : "bg-[#001220] border-[#00D4FF] shadow-[0_0_20px_#00D4FF33]"
                      : "bg-[#0f0f22] border-white/10 opacity-60"
                  }`}
                >
                  {/* Level number / icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0 ${
                    done ? "bg-[#00FF8820] text-[#00FF88]"
                    : current && isBoss ? "bg-[#B44DFF20] text-[#B44DFF]"
                    : current ? "bg-[#00D4FF20] text-[#00D4FF]"
                    : "bg-white/5 text-white/30"
                  }`}>
                    {done ? <Check size={22} /> : locked ? <Lock size={18} /> : LEVEL_BADGES[i]}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-sm ${isBoss ? "text-[#B44DFF]" : "text-white"}`}>
                        {isBoss ? "🏆 BOSS — " : ""}Szint {lc.level}
                      </span>
                      {done && <span className="text-[#00FF88] text-xs">✓ kész</span>}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5 flex gap-3">
                      <span>{lc.gridSize}×{lc.gridSize} rács</span>
                      <span>{lc.duration}s</span>
                      <span>Cél: {lc.target}pt</span>
                    </div>
                    {/* Cell type tags */}
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      <span className="text-[#00FF88] text-xs">🟢</span>
                      {lc.hasGold      && <span className="text-[#FFD700] text-xs">⭐</span>}
                      {lc.hasRed       && <span className="text-[#FF2D78] text-xs">🔴</span>}
                      {lc.hasLightning && <span className="text-[#00D4FF] text-xs">⚡</span>}
                      {lc.hasBomb      && <span className="text-[#B44DFF] text-xs">💣</span>}
                    </div>
                  </div>

                  {/* Play button */}
                  {!locked && (
                    <button
                      onClick={() => handlePlayLevel(lc.level)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-black text-sm transition-all active:scale-95 ${
                        isBoss
                          ? "bg-[#B44DFF] text-white shadow-[0_0_12px_#B44DFF66]"
                          : current
                          ? "bg-[#00D4FF] text-[#0A0A1A] shadow-[0_0_12px_#00D4FF66]"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {done ? "↩" : <ChevronRight size={18} />}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-8 mx-4 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto w-full">
            <p className="text-white/40 text-xs font-bold mb-2 tracking-wider">SEJTTÍPUSOK</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {[
                { icon: "🟢", label: "+1 pont", color: "#00FF88" },
                { icon: "⭐", label: "+5 pont", color: "#FFD700" },
                { icon: "⚡", label: "x2 boost (5s)", color: "#00D4FF" },
                { icon: "🔴", label: "-3 pont (kerüld!)", color: "#FF2D78" },
                { icon: "💣", label: "-5 pont (kerüld!)", color: "#B44DFF" },
              ].map(({ icon, label, color }) => (
                <div key={icon} className="flex items-center gap-2 text-xs">
                  <span>{icon}</span>
                  <span style={{ color }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── COUNTDOWN SCREEN ────────────────────────────────────────────────── */}
      {screen === "countdown" && (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
          <div className="text-white/40 font-bold tracking-wider">SZINT {activeLevel}</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={countdownVal}
              className="text-8xl font-black"
              style={{ color: countdownVal > 0 ? "#00D4FF" : "#00FF88" }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {countdownVal > 0 ? countdownVal : "RAJT!"}
            </motion.div>
          </AnimatePresence>
          <div className="text-white/40 text-sm">
            Cél: <span className="text-[#FFD700] font-bold">{cfg.target} pont</span> · {cfg.duration}s
          </div>
        </div>
      )}

      {/* ── PLAYING SCREEN ───────────────────────────────────────────────────── */}
      {screen === "playing" && (
        <div className="flex flex-col min-h-screen">
          {/* HUD */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            {/* Score */}
            <div className="flex flex-col items-start">
              <span className="text-white/40 text-xs font-bold tracking-wider">PONT</span>
              <motion.span
                key={score}
                className="text-2xl font-black text-[#00FF88]"
                animate={{ scale: [1.2, 1] }}
                transition={{ duration: 0.15 }}
              >
                {score}
                <span className="text-white/30 text-sm font-bold ml-1">/{cfg.target}</span>
              </motion.span>
            </div>

            {/* Timer */}
            <div className="flex flex-col items-center">
              <span className="text-white/40 text-xs font-bold tracking-wider">IDŐ</span>
              <span className={`text-2xl font-black ${timeLeft <= 5 ? "text-[#FF2D78] animate-pulse" : "text-white"}`}>
                {timeLeft}s
              </span>
            </div>

            {/* Combo */}
            <div className="flex flex-col items-end">
              <span className="text-white/40 text-xs font-bold tracking-wider">COMBO</span>
              <motion.span
                key={combo}
                className={`text-2xl font-black ${combo >= 5 ? "text-[#FFD700]" : combo >= 3 ? "text-[#FF2D78]" : "text-white/60"}`}
                animate={combo > 0 ? { scale: [1.3, 1] } : {}}
                transition={{ duration: 0.2 }}
              >
                ×{combo}
              </motion.span>
            </div>
          </div>

          {/* Lightning indicator */}
          <AnimatePresence>
            {lightningActive && (
              <motion.div
                className="mx-4 mb-2 py-1.5 px-3 rounded-xl bg-[#00D4FF20] border border-[#00D4FF50] flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <span className="text-lg">⚡</span>
                <span className="text-[#00D4FF] text-sm font-bold">x2 BOOST AKTÍV!</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress bar */}
          <div className="mx-4 mb-3">
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00FF88] to-[#00D4FF] rounded-full"
                animate={{ width: `${Math.min(100, (score / cfg.target) * 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div
              className="grid gap-2 w-full max-w-sm"
              style={{ gridTemplateColumns: `repeat(${cfg.gridSize}, 1fr)` }}
            >
              {grid.map((cellType, i) => {
                const cc = CELL_CONFIG[cellType];
                const isActive = cellType !== "idle";
                return (
                  <motion.button
                    key={i}
                    onClick={(e) => handleCellClick(i, e)}
                    className="aspect-square rounded-xl relative overflow-hidden flex items-center justify-center text-xl font-bold"
                    style={{
                      background: cc.bg,
                      border: `2px solid ${cc.border}`,
                      boxShadow: isActive ? cc.shadow : "none",
                      cursor: isActive ? "pointer" : "default",
                    }}
                    animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.4 }}
                    whileTap={isActive ? { scale: 0.85 } : {}}
                    transition={{ duration: 0.15 }}
                  >
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.span
                          key={`${i}-${cellType}`}
                          initial={{ scale: 0, rotate: -30 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className="text-xl"
                          style={{ color: cc.border }}
                        >
                          {cc.icon}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Bottom: level info */}
          <div className="px-4 py-3 text-center text-white/30 text-xs pb-6">
            Szint {activeLevel}/10 · Érintsd a zöld/arany sejteket · Kerüld a pirosat és a bombát
          </div>
        </div>
      )}

      {/* ── LEVEL COMPLETE SCREEN ────────────────────────────────────────────── */}
      {screen === "levelComplete" && earnedCard && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-6 text-center">
          {/* Title */}
          <motion.div
            className="text-5xl font-black text-[#00FF88]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {activeLevel === 10 ? "🏆 KÉSZ!" : "✅ SZINT KÉSZ!"}
          </motion.div>

          {/* Score */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-white/40 text-sm font-bold tracking-wider">VÉGEREDMÉNY</span>
            <span className="text-4xl font-black text-white">{score} <span className="text-white/40 text-xl">pont</span></span>
            <span className="text-white/40 text-sm">(cél: {cfg.target})</span>
          </div>

          {/* Card earned */}
          <motion.div
            className="py-4 px-8 rounded-2xl border-2 flex flex-col items-center gap-2"
            style={{ borderColor: RARITY_COLORS[earnedCard], background: `${RARITY_COLORS[earnedCard]}15` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {earnedCard === "legendary" && <span className="text-3xl">👑</span>}
            {earnedCard === "gold"      && <span className="text-3xl">🥇</span>}
            {earnedCard === "silver"    && <span className="text-3xl">🥈</span>}
            {earnedCard === "bronze"    && <span className="text-3xl">🥉</span>}
            <span className="font-black tracking-widest text-sm" style={{ color: RARITY_COLORS[earnedCard] }}>
              {RARITY_LABELS[earnedCard]} KÁRTYA
            </span>
            {earnedCard === "legendary" && (
              <span className="text-white/50 text-xs mt-1">Megszerezted a legendás Reflex Rush kártyát!</span>
            )}
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            {activeLevel === 10 ? (
              <>
                <button
                  onClick={handleNextLevel}
                  className="py-4 px-8 rounded-2xl font-black text-lg bg-[#B44DFF] text-white shadow-[0_0_20px_#B44DFF66] active:scale-95 transition-all"
                >
                  🔄 Új expedíció
                </button>
                <Link
                  href="/"
                  className="py-3 px-8 rounded-2xl font-bold text-white/60 border border-white/20 text-center active:scale-95 transition-all"
                >
                  🏠 Főoldal
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={handleNextLevel}
                  className="py-4 px-8 rounded-2xl font-black text-lg bg-[#00D4FF] text-[#0A0A1A] shadow-[0_0_20px_#00D4FF66] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Következő szint <ChevronRight size={20} />
                </button>
                <button
                  onClick={() => { setScreen("expedition"); setAvatarMood("idle"); }}
                  className="py-3 px-8 rounded-2xl font-bold text-white/60 border border-white/20 active:scale-95 transition-all"
                >
                  Expedíció térkép
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── LEVEL FAILED SCREEN ──────────────────────────────────────────────── */}
      {screen === "levelFailed" && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-6 text-center">
          <motion.div
            className="text-5xl font-black text-[#FF2D78]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            ❌ IDŐKÉSZ!
          </motion.div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-white/40 text-sm">Elért pontszám</span>
            <span className="text-4xl font-black text-white">{score}</span>
            <span className="text-white/40 text-sm">
              Cél volt: <span className="text-[#FF2D78] font-bold">{cfg.target}</span> pont
              {score >= cfg.target * 0.7 && <span className="text-[#FFD700] ml-2 font-bold">— Majdnem!</span>}
            </span>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={handleRetry}
              className="py-4 px-8 rounded-2xl font-black text-lg bg-[#FF2D78] text-white shadow-[0_0_20px_#FF2D7866] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} /> Újra
            </button>
            <button
              onClick={() => { setScreen("expedition"); setAvatarMood("idle"); }}
              className="py-3 px-8 rounded-2xl font-bold text-white/60 border border-white/20 active:scale-95 transition-all"
            >
              Expedíció térkép
            </button>
            <Link href="/" className="py-3 px-8 rounded-2xl font-bold text-white/40 text-center active:scale-95 transition-all">
              🏠 Főoldal
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
