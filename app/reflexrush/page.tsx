"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Home, RotateCcw, Lock, Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import MilestonePopup from "@/components/MilestonePopup";
import { saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames } from "@/lib/milestones";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender } from "@/lib/gender";
import type { AvatarGender } from "@/lib/gender";
import { getActiveSkin, getSkinDef } from "@/lib/skins";
import { getActiveFace, getFaceDef } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import { useLang } from "@/components/LanguageProvider";

// ─── i18n ────────────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  en: {
    title: "REFLEX RUSH",
    subtitle: "10 levels · Tap fast · Avoid danger",
    home: "Home",
    progress: "Progress",
    levelsOf: "levels",
    cellTypes: "CELL TYPES",
    cells: { green: "+1 point", gold: "+5 points", lightning: "x2 boost (5s)", red: "-3 pts (avoid!)", bomb: "-5 pts (avoid!)" },
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ done",
    score: "SCORE",
    time: "TIME",
    combo: "COMBO",
    boostActive: "x2 BOOST ACTIVE!",
    hint: "Tap green/gold · Avoid red & bombs",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 COMPLETE!",
    finalScore: "FINAL SCORE",
    pts: "pts",
    goal: "goal",
    legendaryDesc: "You earned the legendary Reflex Rush card!",
    newExpedition: "🔄 New Expedition",
    nextLevel: "Next Level",
    expeditionMap: "Expedition Map",
    timeUp: "❌ TIME'S UP!",
    scoredPoints: "Your score",
    goalWas: "Goal was",
    almostThere: "— So close!",
    retry: "Retry",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD",
  },
  hu: {
    title: "REFLEX ROHAM",
    subtitle: "10 szint · Nyomj gyorsan · Kerüld a veszélyeket",
    home: "Főoldal",
    progress: "Haladás",
    levelsOf: "szint",
    cellTypes: "SEJTTÍPUSOK",
    cells: { green: "+1 pont", gold: "+5 pont", lightning: "x2 boost (5s)", red: "-3 pont (kerüld!)", bomb: "-5 pont (kerüld!)" },
    levelLabel: "Szint",
    boss: "🏆 BOSS — ",
    done: "✓ kész",
    score: "PONT",
    time: "IDŐ",
    combo: "COMBO",
    boostActive: "x2 BOOST AKTÍV!",
    hint: "Érintsd a zöld/arany sejteket · Kerüld a pirosat és a bombát",
    levelDone: "✅ SZINT KÉSZ!",
    bossDone: "🏆 KÉSZ!",
    finalScore: "VÉGEREDMÉNY",
    pts: "pont",
    goal: "cél",
    legendaryDesc: "Megszerezted a legendás Reflex Roham kártyát!",
    newExpedition: "🔄 Új expedíció",
    nextLevel: "Következő szint",
    expeditionMap: "Expedíció térkép",
    timeUp: "❌ IDŐKÉSZ!",
    scoredPoints: "Elért pontszám",
    goalWas: "Cél volt",
    almostThere: "— Majdnem!",
    retry: "Újra",
    rarity: { bronze: "BRONZ", silver: "EZÜST", gold: "ARANY", legendary: "LEGENDÁS" },
    card: "KÁRTYA",
  },
  de: {
    title: "REFLEX RUSH",
    subtitle: "10 Level · Schnell tippen · Gefahr vermeiden",
    home: "Startseite",
    progress: "Fortschritt",
    levelsOf: "Level",
    cellTypes: "ZELLTYPEN",
    cells: { green: "+1 Pkt", gold: "+5 Pkt", lightning: "x2 Boost (5s)", red: "-3 Pkt (meiden!)", bomb: "-5 Pkt (meiden!)" },
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ fertig",
    score: "PUNKTE",
    time: "ZEIT",
    combo: "KOMBO",
    boostActive: "x2 BOOST AKTIV!",
    hint: "Grün/Gold tippen · Rot & Bomben vermeiden",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 FERTIG!",
    finalScore: "ERGEBNIS",
    pts: "Pkt",
    goal: "Ziel",
    legendaryDesc: "Du hast die legendäre Reflex Rush Karte erhalten!",
    newExpedition: "🔄 Neue Expedition",
    nextLevel: "Nächstes Level",
    expeditionMap: "Expedition",
    timeUp: "❌ ZEIT UM!",
    scoredPoints: "Dein Ergebnis",
    goalWas: "Ziel war",
    almostThere: "— Fast!",
    retry: "Nochmal",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDÄR" },
    card: "KARTE",
  },
  ro: {
    title: "REFLEX RUSH",
    subtitle: "10 niveluri · Apasă rapid · Evită pericolele",
    home: "Acasă",
    progress: "Progres",
    levelsOf: "niveluri",
    cellTypes: "TIPURI DE CELULE",
    cells: { green: "+1 pct", gold: "+5 pct", lightning: "x2 boost (5s)", red: "-3 pct (evită!)", bomb: "-5 pct (evită!)" },
    levelLabel: "Nivel",
    boss: "🏆 BOSS — ",
    done: "✓ gata",
    score: "PUNCTE",
    time: "TIMP",
    combo: "COMBO",
    boostActive: "x2 BOOST ACTIV!",
    hint: "Apasă verde/auriu · Evită roșu și bombe",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 TERMINAT!",
    finalScore: "REZULTAT FINAL",
    pts: "pct",
    goal: "țintă",
    legendaryDesc: "Ai câștigat cardul legendar Reflex Rush!",
    newExpedition: "🔄 Expedíție nouă",
    nextLevel: "Nivelul următor",
    expeditionMap: "Hartă expedíție",
    timeUp: "❌ TIMP EXPIRAT!",
    scoredPoints: "Punctaj obținut",
    goalWas: "Obiectiv",
    almostThere: "— Aproape!",
    retry: "Din nou",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD",
  },
};

// ─── Types ──────────────────────────────────────────────────────────────────

type Screen = "expedition" | "playing" | "levelComplete" | "levelFailed";
type CellType = "idle" | "green" | "gold" | "red" | "lightning" | "bomb" | "trapgreen";
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
  hasTrapGreen: boolean;
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
  { level: 1,  gridSize: 3, duration: 35, target: 8,  hasGold: false, hasRed: false, hasLightning: false, hasBomb: false, hasTrapGreen: false, spawnInterval: 1500, maxActiveCells: 2, cellLifetime: 2200 },
  { level: 2,  gridSize: 3, duration: 30, target: 12, hasGold: true,  hasRed: false, hasLightning: false, hasBomb: false, hasTrapGreen: false, spawnInterval: 1300, maxActiveCells: 2, cellLifetime: 2000 },
  { level: 3,  gridSize: 4, duration: 35, target: 18, hasGold: true,  hasRed: true,  hasLightning: false, hasBomb: false, hasTrapGreen: false, spawnInterval: 1200, maxActiveCells: 3, cellLifetime: 1800 },
  { level: 4,  gridSize: 4, duration: 30, target: 20, hasGold: true,  hasRed: true,  hasLightning: false, hasBomb: false, hasTrapGreen: false, spawnInterval: 1000, maxActiveCells: 3, cellLifetime: 1600 },
  { level: 5,  gridSize: 4, duration: 28, target: 24, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: false, hasTrapGreen: false, spawnInterval: 900,  maxActiveCells: 3, cellLifetime: 1500 },
  { level: 6,  gridSize: 5, duration: 35, target: 28, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: true,  hasTrapGreen: false, spawnInterval: 850,  maxActiveCells: 4, cellLifetime: 1400 },
  { level: 7,  gridSize: 5, duration: 30, target: 34, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: true,  hasTrapGreen: false, spawnInterval: 800,  maxActiveCells: 4, cellLifetime: 1300 },
  { level: 8,  gridSize: 5, duration: 32, target: 40, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: true,  hasTrapGreen: false, spawnInterval: 750,  maxActiveCells: 4, cellLifetime: 1200 },
  { level: 9,  gridSize: 6, duration: 32, target: 48, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: true,  hasTrapGreen: false, spawnInterval: 680,  maxActiveCells: 5, cellLifetime: 1100 },
  { level: 10, gridSize: 6, duration: 38, target: 58, hasGold: true,  hasRed: true,  hasLightning: true,  hasBomb: true,  hasTrapGreen: true,  spawnInterval: 650,  maxActiveCells: 5, cellLifetime: 1050 },
];

const LEVEL_BADGES = ["🟢","⭐","🔴","⚡","⚡","🎯","💣","💣","🌪️","🎭"];

// ─── Save / Load ─────────────────────────────────────────────────────────────

const SAVE_KEY = "reflexrush_expedition_v1";

function loadSave(): RRSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const raw = localStorage.getItem(SAVE_KEY); if (raw) return JSON.parse(raw); } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: RRSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

// ─── Cell type selection ──────────────────────────────────────────────────────

function pickCellType(cfg: LevelConfig): CellType {
  const options: { type: CellType; weight: number }[] = [{ type: "green", weight: 50 }];
  if (cfg.hasGold)      options.push({ type: "gold",      weight: 15 });
  if (cfg.hasRed)       options.push({ type: "red",       weight: 20 });
  // Lightning is rare: weight 4 on early levels (5-6), 5 on later levels
  if (cfg.hasLightning) options.push({ type: "lightning", weight: cfg.level <= 6 ? 4 : 5 });
  // More bombs as levels increase: 10 → 13 → 16
  if (cfg.hasBomb)      options.push({ type: "bomb",      weight: cfg.level <= 6 ? 10 : cfg.level <= 8 ? 13 : 16 });
  // TrapGreen: looks identical to green but acts as -5 bomb — level 10 only
  if (cfg.hasTrapGreen) options.push({ type: "trapgreen", weight: 12 });
  const total = options.reduce((s, o) => s + o.weight, 0);
  let r = Math.random() * total;
  for (const o of options) { r -= o.weight; if (r <= 0) return o.type; }
  return "green";
}

// ─── Visuals ──────────────────────────────────────────────────────────────────

const CELL_CONFIG: Record<CellType, { bg: string; border: string; icon: string; shadow: string }> = {
  idle:      { bg: "#0f0f2a", border: "#2a2a4a", icon: "",   shadow: "none"               },
  green:     { bg: "#00220f", border: "#00FF88", icon: "✓",  shadow: "0 0 14px #00FF8899" },
  trapgreen: { bg: "#00220f", border: "#00FF88", icon: "✓",  shadow: "0 0 14px #00FF8899" }, // identical to green — TRAP!
  gold:      { bg: "#2a1a00", border: "#FFD700", icon: "⭐", shadow: "0 0 14px #FFD70099" },
  red:       { bg: "#220010", border: "#FF2D78", icon: "✕",  shadow: "0 0 14px #FF2D7899" },
  lightning: { bg: "#00162a", border: "#00D4FF", icon: "⚡", shadow: "0 0 14px #00D4FF99" },
  bomb:      { bg: "#150028", border: "#B44DFF", icon: "💣", shadow: "0 0 14px #B44DFF99" },
};

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

function calcRarity(timeLeft: number, duration: number, level: number): CardRarity {
  const r = timeLeft / duration;
  if (level >= 5 && r > 0.55) return "gold";
  if (r > 0.25) return "silver";
  return "bronze";
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ReflexRushPage() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang as keyof typeof TRANSLATIONS] ?? TRANSLATIONS.en;

  // ── Avatar ──────────────────────────────────────────────────────────────────
  const [avatarGender,  setAvatarGender]  = useState<AvatarGender>("girl");
  const [avatarSkin,    setAvatarSkin]    = useState(() => getSkinDef("default"));
  const [avatarFace,    setAvatarFace]    = useState(() => getFaceDef("default"));
  const [avatarTop,     setAvatarTop]     = useState<ReturnType<typeof getTopDef>     | null>(null);
  const [avatarBottom,  setAvatarBottom]  = useState<ReturnType<typeof getBottomDef>  | null>(null);
  const [avatarShoe,    setAvatarShoe]    = useState<ReturnType<typeof getShoeDef>    | null>(null);
  const [avatarCape,    setAvatarCape]    = useState<ReturnType<typeof getCapeDef>    | null>(null);
  const [avatarGlasses, setAvatarGlasses] = useState<ReturnType<typeof getGlassesDef> | null>(null);
  const [avatarGloves,  setAvatarGloves]  = useState<ReturnType<typeof getGloveDef>   | null>(null);
  const [avatarHat,     setAvatarHat]     = useState<ReturnType<typeof getHatDef>     | null>(null);
  const [avatarTrail,   setAvatarTrail]   = useState<ReturnType<typeof getTrailDef>   | null>(null);
  const [avatarMood,    setAvatarMood]    = useState<AvatarMood>("idle");
  const [avatarJump,    setAvatarJump]    = useState<{ reaction: "happy" | "surprised" | "victory" | "confused" | "laughing" | null; timestamp: number } | undefined>(undefined);
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

  function triggerAvatar(mood: AvatarMood, duration: number, jump?: "happy" | "surprised" | "victory" | "confused" | "laughing") {
    if (avatarTimerRef.current) clearTimeout(avatarTimerRef.current);
    setAvatarMood(mood);
    if (jump) setAvatarJump({ reaction: jump, timestamp: Date.now() });
    avatarTimerRef.current = setTimeout(() => setAvatarMood("focused"), duration);
  }

  // ── Save / navigation ────────────────────────────────────────────────────────
  const [save, setSave]       = useState<RRSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen]   = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);

  useEffect(() => { setSave(loadSave()); }, []);

  // ── Game state ───────────────────────────────────────────────────────────────
  const [grid, setGrid]               = useState<CellType[]>(Array(9).fill("idle"));
  const [score, setScore]             = useState(0);
  const [timeLeft, setTimeLeft]       = useState(0);
  const [combo, setCombo]             = useState(0);
  const [lightningActive, setLightningActive] = useState(false);
  const [floatingPts, setFloatingPts] = useState<FloatingPt[]>([]);
  const [earnedCard, setEarnedCard]   = useState<CardRarity | null>(null);
  const [trapFlash,  setTrapFlash]    = useState<Set<number>>(new Set());
  const level10FailsRef = useRef(0);

  const gridRef       = useRef<CellType[]>([]);
  const scoreRef      = useRef(0);
  const comboRef      = useRef(0);
  const lightningRef  = useRef(false);
  const cfgRef        = useRef<LevelConfig>(LEVELS[0]);
  const timeLeftRef   = useRef(0);
  const gameActiveRef = useRef(false);
  const ptCounter     = useRef(0);
  const timerRef      = useRef<ReturnType<typeof setInterval>  | null>(null);
  const spawnTimer    = useRef<ReturnType<typeof setTimeout>   | null>(null);
  const cellTimers    = useRef<(ReturnType<typeof setTimeout> | null)[]>([]);
  const lightningTimer = useRef<ReturnType<typeof setTimeout>  | null>(null);

  const stopGame = useCallback(() => {
    gameActiveRef.current = false;
    if (timerRef.current)      { clearInterval(timerRef.current);      timerRef.current = null; }
    if (spawnTimer.current)    { clearTimeout(spawnTimer.current);     spawnTimer.current = null; }
    if (lightningTimer.current){ clearTimeout(lightningTimer.current); lightningTimer.current = null; }
    cellTimers.current.forEach(t => { if (t) clearTimeout(t); });
    cellTimers.current = [];
  }, []);

  const levelSuccess = useCallback((finalScore: number, finalTimeLeft: number) => {
    stopGame();
    const cfg = cfgRef.current;
    const rarity: CardRarity = cfg.level === 10 ? "legendary" : calcRarity(finalTimeLeft, cfg.duration, cfg.level);
    saveCard({ id: generateCardId(), game: "reflexrush", theme: `level${cfg.level}`, rarity, score: finalScore, total: cfg.target, date: new Date().toISOString() });
    incrementTotalGames();
    setEarnedCard(rarity);
    setSave(prev => {
      const newCompleted = [...new Set([...prev.completedLevels, cfg.level])];
      const newCurrentLevel = cfg.level === 10 ? 10 : Math.max(prev.currentLevel, cfg.level + 1);
      const s: RRSave = { currentLevel: newCurrentLevel, completedLevels: newCompleted };
      writeSave(s); return s;
    });
    triggerAvatar(cfg.level === 10 ? "happy" : "happy", 99999, cfg.level === 10 ? "victory" : "happy");
    setScreen("levelComplete");
  }, [stopGame]);

  const levelFailed = useCallback(() => {
    stopGame();
    if (cfgRef.current.level === 10) level10FailsRef.current++;
    triggerAvatar("confused", 2000, "confused");
    setScreen("levelFailed");
  }, [stopGame]);

  const scheduleSpawn = useCallback(() => {
    if (!gameActiveRef.current) return;
    const cfg = cfgRef.current;
    spawnTimer.current = setTimeout(() => {
      if (!gameActiveRef.current) return;
      setGrid(prev => {
        const activeCells = prev.filter(t => t !== "idle").length;
        if (activeCells >= cfg.maxActiveCells) { scheduleSpawn(); return prev; }
        const idleSlots = prev.reduce<number[]>((acc, t, i) => { if (t === "idle") acc.push(i); return acc; }, []);
        if (idleSlots.length === 0) { scheduleSpawn(); return prev; }
        const slot = idleSlots[Math.floor(Math.random() * idleSlots.length)];
        const type = pickCellType(cfg);
        if (cellTimers.current[slot]) clearTimeout(cellTimers.current[slot]!);
        cellTimers.current[slot] = setTimeout(() => {
          if (!gameActiveRef.current) return;
          setGrid(p => { if (p[slot] === "idle") return p; const n = [...p]; n[slot] = "idle"; gridRef.current = n; return n; });
        }, cfg.cellLifetime);
        const next = [...prev]; next[slot] = type; gridRef.current = next;
        scheduleSpawn(); return next;
      });
    }, cfg.spawnInterval + Math.random() * 200 - 100);
  }, []);

  const handleCellClick = useCallback((index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    const type = gridRef.current[index];
    if (type === "idle") return;
    if (cellTimers.current[index]) { clearTimeout(cellTimers.current[index]!); cellTimers.current[index] = null; }
    setGrid(prev => { const n = [...prev]; n[index] = "idle"; gridRef.current = n; return n; });

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
      const ns = scoreRef.current + pts; scoreRef.current = ns; setScore(ns);
      comboRef.current++; setCombo(comboRef.current); addFloat(pts);
      if (comboRef.current >= 3) triggerAvatar("victory", 1200, "victory");
      if (ns >= cfg.target) levelSuccess(ns, timeLeftRef.current);
    } else if (type === "gold") {
      const pts = lightningRef.current ? 10 : 5;
      const ns = scoreRef.current + pts; scoreRef.current = ns; setScore(ns);
      comboRef.current++; setCombo(comboRef.current); addFloat(pts);
      if (ns >= cfg.target) levelSuccess(ns, timeLeftRef.current);
    } else if (type === "red") {
      const ns = Math.max(0, scoreRef.current - 3); scoreRef.current = ns; setScore(ns);
      comboRef.current = 0; setCombo(0); addFloat(-3);
      triggerAvatar("disappointed", 800);
    } else if (type === "lightning") {
      lightningRef.current = true; setLightningActive(true);
      if (lightningTimer.current) clearTimeout(lightningTimer.current);
      lightningTimer.current = setTimeout(() => { lightningRef.current = false; setLightningActive(false); }, 5000);
      comboRef.current++; setCombo(comboRef.current);
      triggerAvatar("surprised", 1000, "surprised");
    } else if (type === "bomb") {
      const ns = Math.max(0, scoreRef.current - 5); scoreRef.current = ns; setScore(ns);
      comboRef.current = 0; setCombo(0); addFloat(-5);
      triggerAvatar("disappointed", 1200);
    } else if (type === "trapgreen") {
      const ns = Math.max(0, scoreRef.current - 5); scoreRef.current = ns; setScore(ns);
      comboRef.current = 0; setCombo(0); addFloat(-5);
      triggerAvatar("disappointed", 1400);
      setTrapFlash(prev => new Set([...prev, index]));
      setTimeout(() => setTrapFlash(prev => { const n = new Set(prev); n.delete(index); return n; }), 500);
    }
  }, [levelSuccess]);

  const startLevel = useCallback((levelNum: number) => {
    const baseCfg = LEVELS[levelNum - 1];
    const cfg = (levelNum === 10 && level10FailsRef.current >= 3)
      ? { ...baseCfg, target: 46, duration: 44, hasTrapGreen: false }
      : baseCfg;
    cfgRef.current = cfg;
    const total = cfg.gridSize ** 2;
    stopGame();
    scoreRef.current = 0; comboRef.current = 0; lightningRef.current = false; timeLeftRef.current = cfg.duration;
    gridRef.current = Array(total).fill("idle"); cellTimers.current = Array(total).fill(null);
    setActiveLevel(levelNum);
    setGrid(Array(total).fill("idle")); setScore(0); setTimeLeft(cfg.duration);
    setCombo(0); setLightningActive(false); setFloatingPts([]); setEarnedCard(null);
    setScreen("playing");
    triggerAvatar("focused", 99999);
  }, [stopGame]);

  // ── Playing: timer + spawn ────────────────────────────────────────────────────
  useEffect(() => {
    if (screen !== "playing") return;
    gameActiveRef.current = true;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        const next = t - 1; timeLeftRef.current = next;
        if (next <= 0) {
          if (scoreRef.current >= cfgRef.current.target) levelSuccess(scoreRef.current, 0);
          else levelFailed();
          return 0;
        }
        return next;
      });
    }, 1000);
    scheduleSpawn();
    return () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };
  }, [screen, scheduleSpawn, levelSuccess, levelFailed]);

  const cfg = LEVELS[activeLevel - 1];

  const avatarProps = {
    mood: avatarMood, gender: avatarGender,
    activeSkin: avatarSkin, activeFace: avatarFace,
    activeTop: avatarTop, activeBottom: avatarBottom,
    activeShoe: avatarShoe, activeCape: avatarCape,
    activeGlasses: avatarGlasses, activeGloves: avatarGloves,
    activeHat: avatarHat, activeTrail: avatarTrail,
    jumpTrigger: avatarJump,
  };

  // ─── RENDER ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white select-none overflow-hidden">
      <AvatarCompanion {...avatarProps} fixed />
      <MilestonePopup />

      {/* Floating points */}
      <AnimatePresence>
        {floatingPts.map(fp => (
          <motion.div
            key={fp.id}
            className="pointer-events-none fixed z-50 font-black text-lg"
            style={{ left: fp.x, top: fp.y, color: fp.value > 0 ? (fp.value >= 5 ? "#FFD700" : "#00FF88") : "#FF2D78", transform: "translate(-50%, 0)" }}
            initial={{ opacity: 1, y: 0 }} animate={{ opacity: 0, y: -60 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {fp.value > 0 ? `+${fp.value}` : fp.value}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── EXPEDITION ─────────────────────────────────────────────────────────── */}
      {screen === "expedition" && (
        <div className="flex flex-col min-h-screen pb-24">
          <div className="flex items-center justify-between p-4 pt-6">
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Home size={20} /><span className="text-sm font-bold">{t.home}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-[#FF6B00]" />
              <span className="text-lg font-black tracking-wider text-[#FF6B00]">{t.title}</span>
            </div>
            <div className="w-20" />
          </div>

          <p className="text-center text-white/40 text-sm mb-6 px-4">{t.subtitle}</p>

          <div className="px-6 mb-8">
            <div className="flex justify-between text-xs text-white/40 mb-1">
              <span>{t.progress}</span>
              <span>{save.completedLevels.length}/10 {t.levelsOf}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, #FF6B00, #FF2D78)" }}
                initial={false}
                animate={{ width: `${(save.completedLevels.length / 10) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div className="px-4 flex flex-col gap-3 max-w-sm mx-auto w-full">
            {LEVELS.map((lc, i) => {
              const done    = save.completedLevels.includes(lc.level);
              const current = lc.level === save.currentLevel;
              const locked  = lc.level > save.currentLevel;
              const isBoss  = lc.level === 10;
              return (
                <motion.div
                  key={lc.level}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                    done ? "bg-[#1a0a00] border-[#FF6B0040]"
                    : current && isBoss ? "bg-[#1a0028] border-[#B44DFF] shadow-[0_0_20px_#B44DFF33]"
                    : current ? "bg-[#1a0c00] border-[#FF6B00] shadow-[0_0_20px_#FF6B0033]"
                    : "bg-[#0f0f22] border-white/10 opacity-60"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0 ${
                    done ? "bg-[#FF6B0020] text-[#FF6B00]"
                    : current && isBoss ? "bg-[#B44DFF20] text-[#B44DFF]"
                    : current ? "bg-[#FF6B0020] text-[#FF6B00]"
                    : "bg-white/5 text-white/30"
                  }`}>
                    {done ? <Check size={22} /> : locked ? <Lock size={18} /> : LEVEL_BADGES[i]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-sm ${isBoss ? "text-[#B44DFF]" : "text-white"}`}>
                        {isBoss ? t.boss : ""}{t.levelLabel} {lc.level}
                      </span>
                      {done && <span className="text-[#FF6B00] text-xs">{t.done}</span>}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5 flex gap-3">
                      <span>{lc.gridSize}×{lc.gridSize}</span>
                      <span>{lc.duration}s</span>
                      <span>{t.goal}: {lc.target}pt</span>
                    </div>
                    <div className="flex gap-1 mt-1.5">
                      <span className="text-[#00FF88] text-xs">🟢</span>
                      {lc.hasGold      && <span className="text-[#FFD700] text-xs">⭐</span>}
                      {lc.hasRed       && <span className="text-[#FF2D78] text-xs">🔴</span>}
                      {lc.hasLightning && <span className="text-[#00D4FF] text-xs">⚡</span>}
                      {lc.hasBomb      && <span className="text-[#B44DFF] text-xs">💣</span>}
                    </div>
                  </div>

                  {!locked && (
                    <button
                      onClick={() => startLevel(lc.level)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-black text-sm transition-all active:scale-95 ${
                        isBoss ? "bg-[#B44DFF] text-white shadow-[0_0_12px_#B44DFF66]"
                        : current ? "bg-[#FF6B00] text-white shadow-[0_0_12px_#FF6B0066]"
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
          <div className="mt-8 px-4 max-w-sm mx-auto w-full">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-white/40 text-xs font-bold mb-2 tracking-wider">{t.cellTypes}</p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {([
                  { icon: "🟢", label: t.cells.green,     color: "#00FF88" },
                  { icon: "⭐", label: t.cells.gold,      color: "#FFD700" },
                  { icon: "⚡", label: t.cells.lightning, color: "#00D4FF" },
                  { icon: "🔴", label: t.cells.red,       color: "#FF2D78" },
                  { icon: "💣", label: t.cells.bomb,      color: "#B44DFF" },
                ] as { icon: string; label: string; color: string }[]).map(({ icon, label, color }) => (
                  <div key={icon} className="flex items-center gap-2 text-xs">
                    <span>{icon}</span><span style={{ color }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── PLAYING ────────────────────────────────────────────────────────────── */}
      {screen === "playing" && (
        <div className="flex flex-col min-h-screen">
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <button
              onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
            >✕</button>
            <div className="flex flex-col items-start">
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.score}</span>
              <motion.span
                key={score} className="text-2xl font-black text-[#00FF88]"
                animate={{ scale: [1.2, 1] }} transition={{ duration: 0.15 }}
              >
                {score}<span className="text-white/30 text-sm font-bold ml-1">/{cfg.target}</span>
              </motion.span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.time}</span>
              <span className={`text-2xl font-black ${timeLeft <= 5 ? "text-[#FF2D78] animate-pulse" : "text-white"}`}>
                {timeLeft}s
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.combo}</span>
              <motion.span
                key={combo}
                className={`text-2xl font-black ${combo >= 5 ? "text-[#FFD700]" : combo >= 3 ? "text-[#FF2D78]" : "text-white/60"}`}
                animate={combo > 0 ? { scale: [1.3, 1] } : {}} transition={{ duration: 0.2 }}
              >
                ×{combo}
              </motion.span>
            </div>
          </div>

          <AnimatePresence>
            {lightningActive && (
              <motion.div
                className="mx-4 mb-2 py-1.5 px-3 rounded-xl bg-[#00D4FF20] border border-[#00D4FF50] flex items-center gap-2"
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              >
                <span className="text-lg">⚡</span>
                <span className="text-[#00D4FF] text-sm font-bold">{t.boostActive}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mx-4 mb-3">
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, #FF6B00, #FFD700)" }}
                animate={{ width: `${Math.min(100, (score / cfg.target) * 100)}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center px-4">
            <div className="grid gap-2 w-full max-w-sm" style={{ gridTemplateColumns: `repeat(${cfg.gridSize}, 1fr)` }}>
              {grid.map((cellType, i) => {
                const cc = CELL_CONFIG[cellType];
                const isActive = cellType !== "idle";
                const isTrap = trapFlash.has(i);
                return (
                  <motion.button
                    key={i}
                    onClick={(e) => handleCellClick(i, e)}
                    className="aspect-square rounded-xl flex items-center justify-center text-xl font-bold"
                    style={{
                      background:  isTrap ? "#1a0000" : cc.bg,
                      border:      isTrap ? "2px solid #FF2D78" : `2px solid ${cc.border}`,
                      boxShadow:   isTrap ? "0 0 18px #FF2D7899" : (isActive ? cc.shadow : "none"),
                      cursor:      isActive ? "pointer" : "default",
                    }}
                    animate={isActive || isTrap ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0.4 }}
                    whileTap={isActive ? { scale: 0.85 } : {}}
                    transition={{ duration: 0.15 }}
                  >
                    <AnimatePresence mode="wait">
                      {isTrap ? (
                        <motion.span key={`${i}-trap`} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} style={{ color: "#FF2D78" }}>
                          💥
                        </motion.span>
                      ) : isActive ? (
                        <motion.span
                          key={`${i}-${cellType}`}
                          initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          style={{ color: cc.border }}
                        >
                          {cc.icon}
                        </motion.span>
                      ) : null}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="px-4 py-3 text-center text-white/30 text-xs pb-6">
            {t.levelLabel} {activeLevel}/10 · {t.hint}
          </div>
        </div>
      )}

      {/* ── LEVEL COMPLETE ─────────────────────────────────────────────────────── */}
      {screen === "levelComplete" && earnedCard && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-6 text-center">
          <motion.div
            className="text-5xl font-black"
            style={{ color: activeLevel === 10 ? "#B44DFF" : "#00FF88" }}
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {activeLevel === 10 ? t.bossDone : t.levelDone}
          </motion.div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-white/40 text-sm font-bold tracking-wider">{t.finalScore}</span>
            <span className="text-4xl font-black text-white">{score} <span className="text-white/40 text-xl">{t.pts}</span></span>
            <span className="text-white/40 text-sm">({t.goal}: {cfg.target})</span>
          </div>

          <motion.div
            className="py-4 px-8 rounded-2xl border-2 flex flex-col items-center gap-2"
            style={{ borderColor: RARITY_COLORS[earnedCard], background: `${RARITY_COLORS[earnedCard]}15` }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          >
            {earnedCard === "legendary" && <span className="text-3xl">👑</span>}
            {earnedCard === "gold"      && <span className="text-3xl">🥇</span>}
            {earnedCard === "silver"    && <span className="text-3xl">🥈</span>}
            {earnedCard === "bronze"    && <span className="text-3xl">🥉</span>}
            <span className="font-black tracking-widest text-sm" style={{ color: RARITY_COLORS[earnedCard] }}>
              {t.rarity[earnedCard]} {t.card}
            </span>
            {earnedCard === "legendary" && (
              <span className="text-white/50 text-xs mt-1">{t.legendaryDesc}</span>
            )}
          </motion.div>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            {activeLevel === 10 ? (
              <>
                <button
                  onClick={() => {
                    const ns: RRSave = { currentLevel: 1, completedLevels: [] };
                    setSave(ns); writeSave(ns); setAvatarMood("idle"); setScreen("expedition");
                  }}
                  className="py-4 px-8 rounded-2xl font-black text-lg bg-[#B44DFF] text-white shadow-[0_0_20px_#B44DFF66] active:scale-95 transition-all"
                >
                  {t.newExpedition}
                </button>
                <Link href="/" className="py-3 px-8 rounded-2xl font-bold text-white/60 border border-white/20 text-center active:scale-95 transition-all">
                  🏠 {t.home}
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
                  className="py-4 px-8 rounded-2xl font-black text-lg bg-[#FF6B00] text-white shadow-[0_0_20px_#FF6B0066] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {t.nextLevel} <ChevronRight size={20} />
                </button>
                <button
                  onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
                  className="py-3 px-8 rounded-2xl font-bold text-white/60 border border-white/20 active:scale-95 transition-all"
                >
                  {t.expeditionMap}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── LEVEL FAILED ───────────────────────────────────────────────────────── */}
      {screen === "levelFailed" && (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 gap-6 text-center">
          <motion.div
            className="text-5xl font-black text-[#FF2D78]"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {t.timeUp}
          </motion.div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-white/40 text-sm">{t.scoredPoints}</span>
            <span className="text-4xl font-black text-white">{score}</span>
            <span className="text-white/40 text-sm">
              {t.goalWas}: <span className="text-[#FF2D78] font-bold">{cfg.target}</span> {t.pts}
              {score >= cfg.target * 0.7 && <span className="text-[#FFD700] ml-2 font-bold">{t.almostThere}</span>}
            </span>
          </div>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={() => startLevel(activeLevel)}
              className="py-4 px-8 rounded-2xl font-black text-lg bg-[#FF2D78] text-white shadow-[0_0_20px_#FF2D7866] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={20} /> {t.retry}
            </button>
            <button
              onClick={() => { setScreen("expedition"); setAvatarMood("idle"); }}
              className="py-3 px-8 rounded-2xl font-bold text-white/60 border border-white/20 active:scale-95 transition-all"
            >
              {t.expeditionMap}
            </button>
            <Link href="/" className="py-3 px-8 rounded-2xl font-bold text-white/40 text-center active:scale-95 transition-all">
              🏠 {t.home}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
