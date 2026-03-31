"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, Ghost, Home, RotateCcw, Zap, 
  ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Sun, Moon,
  Lock, Unlock, AlertCircle
} from "lucide-react";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { incrementTotalGames } from "@/lib/milestones";
import { useLang } from "@/components/LanguageProvider";
import { submitScore } from "@/lib/multiplayer";
import { getUsername } from "@/lib/username";

// ─── Types & Constants ───────────────────────────────────────

type Screen = "expedition" | "playing" | "reward" | "levelComplete";
type WorldState = "light" | "shadow";
type Rarity = "bronze" | "silver" | "gold" | "legendary";

type TileType = "path" | "wall" | "collectible" | "exit" | "hazard" | "switch" | "gate";

interface Tile {
  light: TileType;
  shadow: TileType;
  active?: boolean; // For switches/gates
}

interface LevelDef {
  level: number;
  title: string;
  grid: TileType[][][]; // [row][col][0=light, 1=shadow]
  targetCount: number;
  startPos: { r: number; c: number };
}

const SAVE_KEY = "shadowswitch_expedition_v1";

const T = {
  en: {
    title: "SHADOW SWITCH",
    subtitle: "Switch dimensions to navigate impossible mazes.",
    home: "Home",
    progress: "Progress",
    expeditionMap: "Level Select",
    levelLabel: "Level",
    lightWorld: "LIGHT REALM",
    shadowWorld: "SHADOW REALM",
    switch: "Switch World",
    howToPlay: "How to play?",
    how1: "Move with arrows. Collect all energy spheres.",
    how2: "Switch between Light and Shadow to bypass walls.",
    how3: "You can't switch if the other world has a wall at your spot!",
    retry: "Retry",
    nextLevel: "Next Level",
    levelDone: "✅ LEVEL CLEARED!",
    bossDone: "🏆 MASTERY COMPLETE!",
    locked: "LOCKED",
    completed: "Cleared",
    blocked: "Path blocked in other realm!",
    exitLocked: "Collect all spheres first!",
  },
  hu: {
    title: "ÁRNYÉKVÁLTÓ",
    subtitle: "Válts dimenziót a lehetetlen útvesztők leküzdéséhez.",
    home: "Főoldal",
    progress: "Haladás",
    expeditionMap: "Szintválasztó",
    levelLabel: "Szint",
    lightWorld: "FÉNY VILÁG",
    shadowWorld: "ÁRNYÉK VILÁG",
    switch: "Világváltás",
    howToPlay: "Hogyan játssz?",
    how1: "Mozogj a nyilakkal. Gyűjtsd össze az összes gömböt.",
    how2: "Válts a Fény és Árnyék között, hogy átjuss a falakon.",
    how3: "Nem válthatsz, ha a másik világban fal van ott, ahol állsz!",
    retry: "Újra",
    nextLevel: "Következő szint",
    levelDone: "✅ SZINT TELJESÍTVE!",
    bossDone: "🏆 MESTERSÉG KÉSZ!",
    locked: "ZÁRVA",
    completed: "Kész",
    blocked: "A másik világban itt fal van!",
    exitLocked: "Gyűjtsd össze a gömböket előbb!",
    },
    de: {
    title: "SCHATTENSCHALTER",
    subtitle: "Wechsle die Dimensionen, um unmögliche Labyrinthe zu durchqueren.",
    home: "Start",
    progress: "Fortschritt",
    expeditionMap: "Level-Auswahl",
    levelLabel: "Level",
    lightWorld: "LICHTREICH",
    shadowWorld: "SCHATTENREICH",
    switch: "Welt wechseln",
    howToPlay: "Wie spielt man?",
    how1: "Bewege dich mit den Pfeilen. Sammle alle Energiekugeln.",
    how2: "Wechsle zwischen Licht und Schatten, um Mauern zu umgehen.",
    how3: "Du kannst nicht wechseln, wenn in der anderen Welt eine Mauer an deiner Stelle ist!",
    retry: "Nochmal",
    nextLevel: "Nächstes Level",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 MEISTERSCHAFT KOMPLETT!",
    locked: "GESPERRT",
    completed: "Erledigt",
    blocked: "Weg in der anderen Welt blockiert!",
    exitLocked: "Sammle zuerst alle Kugeln!",
    },
    ro: {
    title: "SCHIMB DE UMBRE",
    subtitle: "Schimbă dimensiunile pentru a naviga prin labirinturi imposibile.",
    home: "Acasă",
    progress: "Progres",
    expeditionMap: "Selecție Nivel",
    levelLabel: "Nivel",
    lightWorld: "TĂRÂMUL LUMINII",
    shadowWorld: "TĂRÂMUL UMBREI",
    switch: "Schimbă Lumea",
    howToPlay: "Cum se joacă?",
    how1: "Mişcă-te cu săgețile. Colectează toate sferele de energie.",
    how2: "Schimbă între Lumină și Umbră pentru a ocoli pereții.",
    how3: "Nu poți schimba dacă în cealaltă lume este un perete în locul tău!",
    retry: "Reîncearcă",
    nextLevel: "Nivelul următor",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 MĂIESTRIE COMPLETĂ!",
    locked: "BLOCAT",
    completed: "Terminat",
    blocked: "Calea este blocată în cealaltă lume!",
    exitLocked: "Colectează mai întâi toate sferele!",
    },
  de: {
    title: "SCHATTENSCHALTER",
    subtitle: "Wechsle die Dimension, um unmögliche Labyrinthe zu meistern.",
    home: "Start",
    progress: "Fortschritt",
    expeditionMap: "Levelauswahl",
    levelLabel: "Level",
    lightWorld: "LICHTWELT",
    shadowWorld: "SCHATTENWELT",
    switch: "Welt wechseln",
    howToPlay: "Wie spielt man?",
    how1: "Bewege dich mit den Pfeilen. Sammle alle Kugeln ein.",
    how2: "Wechsle zwischen Licht und Schatten, um an Wänden vorbeizukommen.",
    how3: "Du kannst nicht wechseln, wenn dort in der anderen Welt eine Wand ist.",
    retry: "Nochmal",
    nextLevel: "Nächstes Level",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 MEISTERSCHAFT GESCHAFFT!",
    locked: "GESPERRT",
    completed: "Fertig",
    blocked: "In der anderen Welt ist dort eine Wand!",
    exitLocked: "Sammle zuerst alle Kugeln ein!",
  },
  ro: {
    title: "SCHIMB DE UMBRE",
    subtitle: "Schimbă dimensiunea ca să treci prin labirinturi imposibile.",
    home: "Acasă",
    progress: "Progres",
    expeditionMap: "Alegere nivel",
    levelLabel: "Nivel",
    lightWorld: "LUMEA LUMINII",
    shadowWorld: "LUMEA UMBREI",
    switch: "Schimbă lumea",
    howToPlay: "Cum se joacă?",
    how1: "Mișcă-te cu săgețile. Colectează toate sferele.",
    how2: "Schimbă între Lumină și Umbră ca să treci de pereți.",
    how3: "Nu poți schimba dacă în cealaltă lume este un perete pe poziția ta.",
    retry: "Din nou",
    nextLevel: "Nivelul următor",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 MAESTRIE COMPLETĂ!",
    locked: "BLOCAT",
    completed: "Gata",
    blocked: "În cealaltă lume este un perete aici!",
    exitLocked: "Colectează mai întâi toate sferele!",
  },
} as const;

// ─── Level Data ──────────────────────────────────────────────
// Legend: P=path, W=wall, C=collectible, E=exit, H=hazard
// Levels are 8x8 grids. Each cell is [light, shadow]

const L = "path";
const W = "wall";
const C = "collectible";
const E = "exit";
const H = "hazard";

const LEVELS: LevelDef[] = [
  {
    level: 1,
    title: "The First Shift",
    startPos: { r: 7, c: 0 },
    targetCount: 1,
    grid: [
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[E,E]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[L,L],[L,L],[L,L],[W,L],[L,L],[L,L],[L,L],[L,L]],
      [[L,L],[W,W],[L,L],[W,L],[W,W],[W,W],[W,W],[W,W]],
      [[L,L],[C,C],[L,L],[L,L],[W,W],[W,W],[W,W],[W,W]],
    ]
  },
  {
    level: 2,
    title: "Parallel Paths",
    startPos: { r: 7, c: 0 },
    targetCount: 2,
    grid: [
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[E,E]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L],[L,L]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[L,L],[L,L],[W,W]],
      [[W,W],[W,W],[W,W],[W,W],[L,L],[L,L],[W,W],[W,W]],
      [[W,W],[W,W],[W,W],[L,L],[L,L],[W,W],[W,W],[W,W]],
      [[W,W],[W,W],[L,L],[L,L],[W,W],[W,W],[W,W],[W,W]],
      [[W,W],[L,L],[L,L],[W,W],[C,W],[W,W],[W,W],[W,W]],
      [[L,L],[L,L],[W,W],[W,W],[W,C],[W,W],[W,W],[W,W]],
    ]
  },
  {
    level: 3,
    title: "Checkerboard",
    startPos: { r: 0, c: 0 },
    targetCount: 3,
    grid: [
      [[L,L],[W,L],[L,L],[W,L],[L,L],[W,L],[L,L],[C,C]],
      [[L,W],[L,L],[L,W],[L,L],[L,W],[L,L],[L,W],[L,L]],
      [[L,L],[W,L],[L,L],[W,L],[L,L],[W,L],[L,L],[W,L]],
      [[L,W],[L,L],[L,W],[L,L],[L,W],[L,L],[L,W],[L,L]],
      [[L,L],[W,L],[L,L],[W,L],[L,L],[W,L],[L,L],[W,L]],
      [[L,W],[L,L],[L,W],[L,L],[L,W],[L,L],[L,W],[L,L]],
      [[L,L],[W,L],[L,L],[W,L],[L,L],[W,L],[L,L],[W,L]],
      [[C,C],[L,W],[L,L],[L,W],[L,L],[L,W],[L,L],[E,E]],
    ]
  },
  {
    level: 4,
    title: "Shadow Traps",
    startPos: { r: 7, c: 0 },
    targetCount: 2,
    grid: [
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[E,E]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[L,L],[L,L],[L,L]],
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[W,W],[W,W]],
      [[L,H],[L,H],[L,H],[L,H],[L,H],[L,L],[W,W],[W,W]],
      [[W,W],[W,W],[L,L],[L,L],[L,L],[L,L],[W,W],[W,W]],
      [[W,W],[W,W],[L,L],[H,L],[H,L],[H,L],[H,L],[H,L]],
      [[W,W],[L,L],[L,L],[W,W],[W,W],[W,W],[W,W],[W,W]],
      [[L,L],[C,C],[L,L],[L,L],[L,L],[L,L],[L,L],[C,C]],
    ]
  },
  {
    level: 5,
    title: "Dimension Gate",
    startPos: { r: 0, c: 0 },
    targetCount: 4,
    grid: [
      [[L,L],[L,L],[W,W],[C,C],[W,W],[L,L],[L,L],[L,L]],
      [[L,L],[L,L],[W,W],[L,L],[W,W],[L,L],[W,W],[W,W]],
      [[W,W],[L,L],[W,W],[L,L],[W,W],[L,L],[W,W],[W,W]],
      [[C,C],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[C,C]],
      [[W,W],[L,L],[W,W],[L,L],[W,W],[L,L],[W,W],[W,W]],
      [[W,W],[L,L],[W,W],[L,L],[W,W],[L,L],[W,W],[W,W]],
      [[L,L],[L,L],[W,W],[L,L],[W,W],[L,L],[L,L],[L,L]],
      [[L,L],[L,L],[W,W],[C,C],[W,W],[L,L],[L,L],[E,E]],
    ]
  },
  {
    level: 6,
    title: "Split Reality",
    startPos: { r: 4, c: 4 },
    targetCount: 3,
    grid: [
      [[W,W],[W,W],[W,W],[E,E],[W,W],[W,W],[W,W],[W,W]],
      [[W,W],[L,W],[L,W],[L,L],[W,L],[W,L],[W,W],[W,W]],
      [[W,W],[L,W],[W,W],[W,W],[W,W],[W,L],[W,W],[W,W]],
      [[W,W],[L,L],[L,L],[L,L],[L,L],[L,L],[W,W],[W,W]],
      [[W,W],[W,L],[W,W],[L,L],[W,W],[L,W],[W,W],[W,W]],
      [[W,W],[W,L],[W,L],[L,L],[L,W],[L,W],[W,W],[W,W]],
      [[W,W],[W,W],[W,W],[C,W],[W,W],[W,W],[W,W],[W,W]],
      [[W,W],[C,W],[W,W],[W,W],[W,W],[W,C],[W,W],[W,W]],
    ]
  },
  {
    level: 7,
    title: "Flicker",
    startPos: { r: 0, c: 0 },
    targetCount: 2,
    grid: [
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L]],
      [[L,L],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[L,L],[W,L],[W,L],[W,L],[W,L],[W,L],[W,W],[L,L]],
      [[L,L],[W,L],[C,C],[W,L],[W,L],[W,L],[W,W],[L,L]],
      [[L,L],[W,L],[W,L],[W,L],[W,L],[W,L],[W,W],[L,L]],
      [[L,L],[W,L],[W,L],[W,L],[C,C],[W,L],[W,W],[L,L]],
      [[L,L],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[E,E]],
    ]
  },
  {
    level: 8,
    title: "The Void",
    startPos: { r: 0, c: 0 },
    targetCount: 3,
    grid: [
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L]],
      [[H,H],[H,H],[H,H],[H,H],[H,H],[H,H],[H,H],[L,L]],
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L]],
      [[L,L],[H,H],[H,H],[H,H],[H,H],[H,H],[H,H],[H,H]],
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L]],
      [[H,H],[H,H],[H,H],[H,H],[H,H],[H,H],[H,H],[L,L]],
      [[L,L],[C,C],[L,L],[C,C],[L,L],[C,C],[L,L],[L,L]],
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[E,E]],
    ]
  },
  {
    level: 9,
    title: "Inversion",
    startPos: { r: 7, c: 0 },
    targetCount: 5,
    grid: [
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[E,E]],
      [[C,L],[L,C],[C,L],[L,C],[C,L],[L,C],[C,L],[L,C]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L]],
      [[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L]],
    ]
  },
  {
    level: 10,
    title: "Shadow Master",
    startPos: { r: 0, c: 0 },
    targetCount: 6,
    grid: [
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L]],
      [[L,L],[W,W],[W,W],[W,W],[W,W],[W,W],[W,W],[L,L]],
      [[L,L],[W,L],[C,C],[W,L],[C,C],[W,L],[W,W],[L,L]],
      [[L,L],[W,W],[W,W],[L,L],[W,W],[W,W],[W,W],[L,L]],
      [[L,L],[W,L],[C,C],[W,L],[C,C],[W,L],[W,W],[L,L]],
      [[L,L],[W,W],[W,W],[L,L],[W,W],[W,W],[W,W],[L,L]],
      [[L,L],[W,L],[C,C],[W,L],[C,C],[W,L],[W,W],[L,L]],
      [[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[L,L],[E,E]],
    ]
  },
];

// ─── Helpers ─────────────────────────────────────────────────

function loadSave(): { currentLevel: number; completedLevels: number[] } {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}

function writeSave(save: { currentLevel: number; completedLevels: number[] }) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

function rarityForScore(score: number): Rarity {
  if (score >= 95) return "legendary";
  if (score >= 80) return "gold";
  if (score >= 60) return "silver";
  return "bronze";
}

// ─── Component ───────────────────────────────────────────────

export default function ShadowSwitchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#05050F] flex items-center justify-center text-pink-500 font-mono tracking-widest uppercase">Initializing Dimensions...</div>}>
      <ShadowSwitchContent />
    </Suspense>
  );
}

function ShadowSwitchContent() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const matchId = searchParams.get("match");
  const playerNum = searchParams.get("p");
  const isMultiplayer = !!matchId;
  const myName = getUsername() || "You";

  // State
  const [save, setSave] = useState<{ currentLevel: number; completedLevels: number[] }>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [world, setWorld] = useState<WorldState>("light");
  const [playerPos, setPlayerPos] = useState({ r: 0, c: 0 });
  const [collected, setCollected] = useState<Set<string>>(new Set());
  const [moves, setMoves] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [reward, setReward] = useState<{ rarity: Rarity; score: number; total: number } | null>(null);
  const [milestoneKey, setMilestoneKey] = useState(0);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  const currentLevel = LEVELS.find(l => l.level === activeLevel) ?? LEVELS[0];

  // Init
  useEffect(() => {
    const s = loadSave();
    setSave(s);
    setActiveLevel(Math.min(s.currentLevel, 10));
  }, []);

  const startLevel = useCallback((lvlNum: number) => {
    const lvl = LEVELS.find(l => l.level === lvlNum) ?? LEVELS[0];
    setActiveLevel(lvlNum);
    setPlayerPos(lvl.startPos);
    setWorld("light");
    setCollected(new Set());
    setMoves(0);
    setFeedback("");
    setScreen("playing");
    setReward(null);
    setScoreSubmitted(false);
    incrementTotalGames();
  }, []);

  // Movement
  const move = useCallback((dr: number, dc: number) => {
    if (screen !== "playing") return;
    const nr = playerPos.r + dr;
    const nc = playerPos.c + dc;

    if (nr < 0 || nr >= 8 || nc < 0 || nc >= 8) return;

    const targetTile = currentLevel.grid[nr][nc][world === "light" ? 0 : 1];
    if (targetTile === W) return;

    setPlayerPos({ r: nr, c: nc });
    setMoves(m => m + 1);

    // Interaction
    if (targetTile === C) {
      const key = `${nr},${nc}`;
      if (!collected.has(key)) {
        setCollected(prev => new Set(prev).add(key));
      }
    } else if (targetTile === E) {
      if (collected.size >= currentLevel.targetCount) {
        handleWin();
      } else {
        setFeedback(t.exitLocked);
      }
    } else if (targetTile === H) {
      // Hazard - simple reset for now
      setFeedback(t.retry);
      setTimeout(() => startLevel(activeLevel), 500);
    }
  }, [playerPos, currentLevel, world, collected, screen, activeLevel, startLevel, t]);

  const toggleWorld = () => {
    const otherWorld = world === "light" ? "shadow" : "light";
    const currentPosTileInOtherWorld = currentLevel.grid[playerPos.r][playerPos.c][otherWorld === "light" ? 0 : 1];
    
    if (currentPosTileInOtherWorld === W) {
      setFeedback(t.blocked);
      return;
    }

    setWorld(otherWorld);
    setFeedback("");
  };

  const handleWin = () => {
    const score = Math.max(40, 100 - (moves - 10) * 2);
    const rarity = rarityForScore(score);
    setReward({ rarity, score, total: 100 });

    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      submitScore(matchId, score, playerNum === "1").then(() => router.push("/multiplayer"));
      return;
    }

    setScreen("reward");
    const newCompleted = Array.from(new Set([...save.completedLevels, activeLevel]));
    const nextLevel = Math.max(save.currentLevel, Math.min(activeLevel + 1, 10));
    const newSave = { currentLevel: nextLevel, completedLevels: newCompleted };
    setSave(newSave);
    writeSave(newSave);
  };

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "w") move(-1, 0);
      if (e.key === "ArrowDown" || e.key === "s") move(1, 0);
      if (e.key === "ArrowLeft" || e.key === "a") move(0, -1);
      if (e.key === "ArrowRight" || e.key === "d") move(0, 1);
      if (e.key === " " || e.key === "Enter") toggleWorld();
      if (e.key === "r") startLevel(activeLevel);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [move, activeLevel, startLevel]);

  // UI
  if (screen === "reward" && reward) {
    return (
      <RewardReveal 
        rarity={reward.rarity}
        game="shadowswitch"
        score={reward.score}
        total={reward.total}
        onDone={() => {
          setScreen("levelComplete");
          setMilestoneKey(v => v + 1);
        }}
      />
    );
  }

  if (screen === "levelComplete") {
    return (
      <main className="min-h-screen bg-[#05050F] text-white flex flex-col items-center justify-center p-6">
        <motion.div 
          className="w-full max-w-md rounded-[32px] border border-pink-500/20 bg-pink-500/5 backdrop-blur-xl p-8 text-center shadow-[0_0_50px_rgba(244,114,182,0.1)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-pink-500/30">
            <Zap className="text-pink-400" size={40} />
          </div>
          <h2 className="text-4xl font-black tracking-tighter mb-2">{t.levelDone}</h2>
          <p className="text-pink-400/60 font-mono uppercase tracking-widest text-sm mb-8">{currentLevel.title}</p>
          
          <div className="flex flex-col gap-3">
            {activeLevel < 10 && (
              <button 
                onClick={() => startLevel(activeLevel + 1)}
                className="w-full py-4 bg-pink-500 text-[#05050F] rounded-2xl font-black text-lg hover:bg-pink-400 transition-colors flex items-center justify-center gap-2"
              >
                {t.nextLevel} <ChevronRight size={20} />
              </button>
            )}
            <button 
              onClick={() => setScreen("expedition")}
              className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white/70 hover:bg-white/10 transition-colors"
            >
              {t.expeditionMap}
            </button>
          </div>
          <MilestonePopup key={milestoneKey} />
        </motion.div>
      </main>
    );
  }

  if (screen === "playing") {
    return (
      <main className="min-h-screen bg-[#05050F] text-white flex flex-col overflow-hidden touch-none">
        {/* HUD */}
        <div className="p-4 flex items-center justify-between bg-black/40 border-b border-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <button onClick={() => setScreen("expedition")} className="text-white/40 hover:text-white transition-colors">
              <Home size={20} />
            </button>
            <div>
              <div className="text-[10px] font-black tracking-widest text-pink-500/50 uppercase">{t.levelLabel} {activeLevel}</div>
              <div className="font-bold text-sm">{currentLevel.title}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-[10px] font-black text-white/30 uppercase">Orbs</div>
              <div className="font-mono text-sm text-pink-400">{collected.size}/{currentLevel.targetCount}</div>
            </div>
            <button onClick={() => startLevel(activeLevel)} className="p-2 bg-white/5 rounded-xl text-white/60">
              <RotateCcw size={18} />
            </button>
          </div>
        </div>

        {/* Current Realm Indicator */}
        <div className={`py-2 text-center text-[10px] font-black tracking-[0.3em] transition-colors duration-500 ${world === "light" ? 'bg-cyan-500/10 text-cyan-400' : 'bg-pink-500/10 text-pink-400'}`}>
          {world === "light" ? t.lightWorld : t.shadowWorld}
        </div>

        {/* Game Grid */}
        <div className="flex-1 flex items-center justify-center p-4 relative">
          <div className="grid grid-cols-8 gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Background dimension glow */}
            <div className={`absolute inset-0 opacity-20 blur-[100px] transition-colors duration-1000 ${world === "light" ? 'bg-cyan-500' : 'bg-pink-500'}`} />
            
            {currentLevel.grid.map((row, r) => (
              row.map((tile, c) => {
                const type = world === "light" ? tile[0] : tile[1];
                const isPlayer = playerPos.r === r && playerPos.c === c;
                const isCollected = collected.has(`${r},${c}`);
                
                return (
                  <div 
                    key={`${r}-${c}`}
                    className={`relative w-9 h-9 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      type === W ? 'bg-white/10 border border-white/10' : 'bg-black/20 border border-white/5'
                    }`}
                  >
                    {/* Visuals for types */}
                    {type === C && !isCollected && (
                      <motion.div 
                        className={`w-3 h-3 rounded-full shadow-[0_0_10px] ${world === "light" ? 'bg-cyan-400 shadow-cyan-500' : 'bg-pink-400 shadow-pink-500'}`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}
                    {type === E && (
                      <div className={`text-xl ${collected.size >= currentLevel.targetCount ? 'animate-pulse' : 'opacity-30'}`}>
                        {collected.size >= currentLevel.targetCount ? '🚪' : '🔒'}
                      </div>
                    )}
                    {type === H && (
                      <div className="text-sm opacity-60">⚠️</div>
                    )}

                    {/* Player */}
                    {isPlayer && (
                      <motion.div 
                        layoutId="player"
                        className={`absolute inset-1.5 rounded-md border-2 z-10 shadow-[0_0_15px] ${
                          world === "light" 
                            ? 'bg-cyan-500 border-white shadow-cyan-500' 
                            : 'bg-pink-500 border-white shadow-pink-500'
                        }`}
                      />
                    )}
                  </div>
                );
              })
            ))}
          </div>
        </div>

        {/* Feedback area */}
        <div className="h-8 text-center text-xs font-bold text-pink-400/80 px-4">
          {feedback}
        </div>

        {/* Mobile Controls */}
        <div className="p-6 bg-black/40 border-t border-white/5 flex items-center justify-center gap-8">
          <div className="grid grid-cols-3 gap-2">
            <div />
            <ControlButton icon={ArrowUp} onClick={() => move(-1, 0)} />
            <div />
            <ControlButton icon={ArrowLeft} onClick={() => move(0, -1)} />
            <ControlButton icon={ArrowDown} onClick={() => move(1, 0)} />
            <ControlButton icon={ArrowRight} onClick={() => move(0, 1)} />
          </div>

          <div className="flex flex-col items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleWorld}
              className={`w-20 h-20 rounded-full border-2 flex flex-col items-center justify-center gap-1 shadow-lg transition-colors ${
                world === "light" 
                  ? 'border-pink-500 bg-pink-500/10 text-pink-400 shadow-pink-500/20' 
                  : 'border-cyan-500 bg-cyan-500/10 text-cyan-400 shadow-cyan-500/20'
              }`}
            >
              {world === "light" ? <Moon size={24} /> : <Sun size={24} />}
              <span className="text-[8px] font-black uppercase tracking-widest">{t.switch}</span>
            </motion.button>
          </div>
        </div>
      </main>
    );
  }

  // Expedition Screen
  return (
    <main className="min-h-screen bg-[#05050F] text-white px-5 py-8">
      <div className="mx-auto w-full max-w-[1000px]">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors font-bold text-sm">
            <Home size={18} /> {t.home}
          </Link>
          <div className="text-xs font-black tracking-[0.4em] text-pink-500 uppercase">{t.expeditionMap}</div>
        </div>

        <div className="relative rounded-[40px] border border-pink-500/20 bg-pink-500/5 backdrop-blur-xl p-8 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-pink-400 font-black text-sm uppercase tracking-[0.3em] mb-4">
              <Ghost size={20} /> {t.title}
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">{t.subtitle}</h1>
            
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {LEVELS.map((lvl) => {
                const unlocked = lvl.level <= save.currentLevel;
                const completed = save.completedLevels.includes(lvl.level);
                return (
                  <button
                    key={lvl.level}
                    disabled={!unlocked}
                    onClick={() => startLevel(lvl.level)}
                    className={`group relative aspect-square rounded-3xl border-2 flex flex-col items-center justify-center transition-all ${
                      unlocked 
                        ? 'bg-pink-500/5 border-pink-500/30 hover:border-pink-400 hover:bg-pink-500/10 shadow-lg' 
                        : 'bg-white/2 border-white/5 opacity-40 grayscale cursor-not-allowed'
                    }`}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{completed ? '✅' : lvl.level}</div>
                    <div className="text-[10px] font-black tracking-widest text-pink-500/60 uppercase">{lvl.title}</div>
                    {unlocked && !completed && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(244,114,182,0.5)]">
                        <Zap size={12} className="text-black" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ControlButton({ icon: Icon, onClick }: { icon: any, onClick: () => void }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors"
    >
      <Icon size={24} />
    </motion.button>
  );
}
