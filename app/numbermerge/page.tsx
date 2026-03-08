"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Check, ChevronRight, RotateCcw, X } from "lucide-react";
import Link from "next/link";
import MilestonePopup from "@/components/MilestonePopup";
import RewardReveal from "@/components/RewardReveal";
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
import MultiplayerExitConfirm from "@/components/MultiplayerExitConfirm";
import MultiplayerAbandonNotice from "@/components/MultiplayerAbandonNotice";
import { submitScore, abandonMatch, submitMixRoundScore, pollMixRound } from "@/lib/multiplayer";
import { getUsername } from "@/lib/username";
import MultiplayerResult from "@/components/MultiplayerResult";

/* ------------------------------------------------------------------ */
/* i18n                                                                */
/* ------------------------------------------------------------------ */
const T = {
  en: {
    title: "NUMBER MERGE",
    subtitle: "10 levels · Merge tiles · Reach the target",
    home: "Home", progress: "Progress", levelLabel: "Level", levelsOf: "levels",
    boss: "\u{1F3C6} BOSS \u2014 ", done: "\u2713 done",
    hint: "Swipe or use arrow keys to slide tiles. Same numbers merge!",
    levelDone: "\u2705 LEVEL DONE!", bossDone: "\u{1F3C6} COMPLETE!", noMoves: "NO MOVES LEFT!",
    retry: "Retry", nextLevel: "Next Level", expeditionMap: "Expedition Map",
    newExpedition: "\u{1F504} New Expedition", score: "SCORE", moves: "MOVES", target: "TARGET",
    legendaryDesc: "You earned the legendary Number Merge card!",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD",
    waiting: "Waiting for", multiResult: "Results",
  },
  hu: {
    title: "SZÁM MERGE",
    subtitle: "10 szint \u00b7 Csúsztasd \u00b7 Érd el a célt",
    home: "F\u0151oldal", progress: "Halad\u00e1s", levelLabel: "Szint", levelsOf: "szint",
    boss: "\u{1F3C6} BOSS \u2014 ", done: "\u2713 k\u00e9sz",
    hint: "Húzd vagy nyilakkal csúsztasd a csempéket. Azonos számok összeolvadnak!",
    levelDone: "\u2705 SZINT K\u00c9SZ!", bossDone: "\u{1F3C6} K\u00c9SZ!", noMoves: "NINCS T\u00d6BB L\u00c9P\u00c9S!",
    retry: "\u00dajra", nextLevel: "K\u00f6vetkez\u0151 szint", expeditionMap: "Exped\u00edci\u00f3",
    newExpedition: "\u{1F504} \u00daj exped\u00edci\u00f3", score: "PONT", moves: "L\u00c9P\u00c9S", target: "C\u00c9L",
    legendaryDesc: "Megszerezted a legend\u00e1s Sz\u00e1m Merge k\u00e1rty\u00e1t!",
    rarity: { bronze: "BRONZ", silver: "EZ\u00dcST", gold: "ARANY", legendary: "LEGEND\u00c1S" },
    card: "K\u00c1RTYA",
    waiting: "V\u00e1rakoz\u00e1s:", multiResult: "Eredm\u00e9ny",
  },
  de: {
    title: "ZAHLEN MERGE",
    subtitle: "10 Level \u00b7 Schiebe Kacheln \u00b7 Erreiche das Ziel",
    home: "Start", progress: "Fortschritt", levelLabel: "Level", levelsOf: "Level",
    boss: "\u{1F3C6} BOSS \u2014 ", done: "\u2713 fertig",
    hint: "Wische oder benutze Pfeiltasten. Gleiche Zahlen verschmelzen!",
    levelDone: "\u2705 LEVEL GESCHAFFT!", bossDone: "\u{1F3C6} FERTIG!", noMoves: "KEINE Z\u00dcGE MEHR!",
    retry: "Nochmal", nextLevel: "N\u00e4chstes Level", expeditionMap: "Expedition",
    newExpedition: "\u{1F504} Neue Expedition", score: "PUNKTE", moves: "Z\u00dcGE", target: "ZIEL",
    legendaryDesc: "Du hast die legend\u00e4re Zahlen Merge Karte erhalten!",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGEND\u00c4R" },
    card: "KARTE",
    waiting: "Warten auf", multiResult: "Ergebnis",
  },
  ro: {
    title: "NUMBER MERGE",
    subtitle: "10 niveluri \u00b7 Glis\u0103 \u00b7 Atinge \u021binta",
    home: "Acas\u0103", progress: "Progres", levelLabel: "Nivel", levelsOf: "niveluri",
    boss: "\u{1F3C6} BOSS \u2014 ", done: "\u2713 gata",
    hint: "Glis\u0103 sau folose\u0219te s\u0103ge\u021bile. Numerele egale se unesc!",
    levelDone: "\u2705 NIVEL TERMINAT!", bossDone: "\u{1F3C6} TERMINAT!", noMoves: "NU MAI SUNT MI\u0218C\u0102RI!",
    retry: "Din nou", nextLevel: "Nivelul urm\u0103tor", expeditionMap: "Hart\u0103",
    newExpedition: "\u{1F504} Expedi\u021bie nou\u0103", score: "SCOR", moves: "PA\u0218I", target: "SCOP",
    legendaryDesc: "Ai c\u00e2\u0219tigat cardul legendar Number Merge!",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD",
    waiting: "A\u0219teptare:", multiResult: "Rezultat",
  },
};

/* ------------------------------------------------------------------ */
/* Level configs                                                       */
/* ------------------------------------------------------------------ */
interface NMLevel {
  level: number;
  gridSize: number;
  target: number;
}

const LEVELS: NMLevel[] = [
  { level: 1,  gridSize: 3, target: 128 },
  { level: 2,  gridSize: 3, target: 256 },
  { level: 3,  gridSize: 3, target: 512 },
  { level: 4,  gridSize: 4, target: 256 },
  { level: 5,  gridSize: 4, target: 512 },
  { level: 6,  gridSize: 4, target: 1024 },
  { level: 7,  gridSize: 4, target: 1024 },
  { level: 8,  gridSize: 4, target: 2048 },
  { level: 9,  gridSize: 4, target: 4096 },
  { level: 10, gridSize: 5, target: 8192 },
];

const LEVEL_BADGES = ["\u{1F522}", "\u{1F522}", "\u{1F522}", "\u26A1", "\u26A1", "\u{1F525}", "\u{1F525}", "\u2728", "\u2728", "\u{1F451}"];

/* ------------------------------------------------------------------ */
/* Tile colors                                                         */
/* ------------------------------------------------------------------ */
function tileStyle(value: number): { bg: string; border: string; text: string; glow: string } {
  switch (value) {
    case 2:    return { bg: "#1a1a2e", border: "#00D4FF", text: "#00D4FF", glow: "0 0 12px rgba(0,212,255,0.3)" };
    case 4:    return { bg: "#1a1a2e", border: "#00FF88", text: "#00FF88", glow: "0 0 12px rgba(0,255,136,0.3)" };
    case 8:    return { bg: "#1a1a2e", border: "#FF2D78", text: "#FF2D78", glow: "0 0 12px rgba(255,45,120,0.3)" };
    case 16:   return { bg: "#FF2D78", border: "#FF2D78", text: "#fff", glow: "0 0 16px rgba(255,45,120,0.4)" };
    case 32:   return { bg: "#B44DFF", border: "#B44DFF", text: "#fff", glow: "0 0 16px rgba(180,77,255,0.4)" };
    case 64:   return { bg: "#00D4FF", border: "#00D4FF", text: "#0A0A1A", glow: "0 0 16px rgba(0,212,255,0.4)" };
    case 128:  return { bg: "#00FF88", border: "#00FF88", text: "#0A0A1A", glow: "0 0 20px rgba(0,255,136,0.5)" };
    case 256:  return { bg: "#FFD700", border: "#FFD700", text: "#0A0A1A", glow: "0 0 20px rgba(255,215,0,0.5)" };
    case 512:  return { bg: "#FF6B35", border: "#FF6B35", text: "#fff", glow: "0 0 22px rgba(255,107,53,0.5)" };
    case 1024: return { bg: "#E040FB", border: "#E040FB", text: "#fff", glow: "0 0 24px rgba(224,64,251,0.5)" };
    case 2048: return { bg: "#FFD700", border: "#FFF176", text: "#0A0A1A", glow: "0 0 28px rgba(255,215,0,0.6)" };
    case 4096: return { bg: "#FF1744", border: "#FF5252", text: "#fff", glow: "0 0 30px rgba(255,23,68,0.6)" };
    case 8192: return { bg: "#B44DFF", border: "#E040FB", text: "#fff", glow: "0 0 34px rgba(180,77,255,0.7)" };
    default:   return { bg: "#B44DFF", border: "#E040FB", text: "#fff", glow: "0 0 34px rgba(180,77,255,0.7)" };
  }
}

function tileFontSize(value: number, gridSize: number): string {
  const base = gridSize <= 3 ? 28 : gridSize <= 4 ? 22 : 17;
  const digits = String(value).length;
  if (digits <= 2) return `${base}px`;
  if (digits === 3) return `${base - 4}px`;
  return `${Math.max(10, base - 6 - (digits - 4) * 2)}px`;
}

/* ------------------------------------------------------------------ */
/* Seeded PRNG                                                         */
/* ------------------------------------------------------------------ */
function seededRng(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  return () => { h ^= h << 13; h ^= h >> 17; h ^= h << 5; return (h >>> 0) / 4294967296; };
}

/* ------------------------------------------------------------------ */
/* Tile type                                                           */
/* ------------------------------------------------------------------ */
interface Tile {
  id: number;
  value: number;
  row: number;
  col: number;
  mergedFrom?: boolean; // just merged this turn
  isNew?: boolean;       // just spawned this turn
}

/* ------------------------------------------------------------------ */
/* 2048 game logic                                                     */
/* ------------------------------------------------------------------ */
let nextTileId = 1;
function newTileId() { return nextTileId++; }

function emptyPositions(tiles: Tile[], gridSize: number): { row: number; col: number }[] {
  const occupied = new Set(tiles.map(t => `${t.row},${t.col}`));
  const empty: { row: number; col: number }[] = [];
  for (let r = 0; r < gridSize; r++)
    for (let c = 0; c < gridSize; c++)
      if (!occupied.has(`${r},${c}`)) empty.push({ row: r, col: c });
  return empty;
}

function spawnTile(tiles: Tile[], gridSize: number, rng: () => number): Tile | null {
  const empty = emptyPositions(tiles, gridSize);
  if (empty.length === 0) return null;
  const pos = empty[Math.floor(rng() * empty.length)];
  return { id: newTileId(), value: rng() < 0.9 ? 2 : 4, row: pos.row, col: pos.col, isNew: true };
}

function initBoard(gridSize: number, rng: () => number): Tile[] {
  const tiles: Tile[] = [];
  const t1 = spawnTile(tiles, gridSize, rng);
  if (t1) tiles.push(t1);
  const t2 = spawnTile(tiles, gridSize, rng);
  if (t2) tiles.push(t2);
  return tiles;
}

type Direction = "up" | "down" | "left" | "right";

function moveTiles(tiles: Tile[], dir: Direction, gridSize: number): { newTiles: Tile[]; scoreGained: number; moved: boolean } {
  // Clear transient flags
  let working: Tile[] = tiles.map(t => ({ ...t, mergedFrom: false, isNew: false }));
  let scoreGained = 0;
  let moved = false;

  const isVertical = dir === "up" || dir === "down";
  const isReverse = dir === "down" || dir === "right";

  for (let line = 0; line < gridSize; line++) {
    // Collect tiles in this row/column
    let lineTiles = working.filter(t => isVertical ? t.col === line : t.row === line);
    lineTiles.sort((a, b) => {
      const aKey = isVertical ? a.row : a.col;
      const bKey = isVertical ? b.row : b.col;
      return isReverse ? bKey - aKey : aKey - bKey;
    });

    const merged: Tile[] = [];
    let pos = isReverse ? gridSize - 1 : 0;
    const step = isReverse ? -1 : 1;

    for (let i = 0; i < lineTiles.length; i++) {
      const tile = { ...lineTiles[i] };
      // Try merge with previous
      if (merged.length > 0) {
        const prev = merged[merged.length - 1];
        if (prev.value === tile.value && !prev.mergedFrom) {
          prev.value *= 2;
          prev.mergedFrom = true;
          scoreGained += prev.value;
          moved = true;
          continue; // tile consumed
        }
      }
      const newPos = merged.length === 0 ? (isReverse ? gridSize - 1 : 0) : (isReverse ? merged[merged.length - 1][isVertical ? "row" : "col"] - 1 : merged[merged.length - 1][isVertical ? "row" : "col"] + 1);
      const oldPos = isVertical ? tile.row : tile.col;
      if (isVertical) tile.row = newPos; else tile.col = newPos;
      if (newPos !== oldPos) moved = true;
      merged.push(tile);
    }

    // Remove old tiles from this line in working
    working = working.filter(t => isVertical ? t.col !== line : t.row !== line);
    working.push(...merged);
  }

  return { newTiles: working, scoreGained, moved };
}

function canMove(tiles: Tile[], gridSize: number): boolean {
  if (tiles.length < gridSize * gridSize) return true;
  // Check if any adjacent tiles have same value
  for (const tile of tiles) {
    for (const other of tiles) {
      if (tile.id === other.id) continue;
      const dr = Math.abs(tile.row - other.row);
      const dc = Math.abs(tile.col - other.col);
      if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
        if (tile.value === other.value) return true;
      }
    }
  }
  return false;
}

function getMaxTile(tiles: Tile[]): number {
  return tiles.reduce((max, t) => Math.max(max, t.value), 0);
}

/* ------------------------------------------------------------------ */
/* Card rarity                                                         */
/* ------------------------------------------------------------------ */
function calcRarity(score: number, target: number, level: number): CardRarity {
  if (level === 10) return "legendary";
  // Score relative to target gives rarity
  const ratio = score / target;
  if (ratio >= 3) return "silver";
  if (ratio >= 1.5) return "silver";
  return "bronze";
}

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

/* ------------------------------------------------------------------ */
/* Save / Load                                                         */
/* ------------------------------------------------------------------ */
const SAVE_KEY = "numbermerge_expedition_v1";
interface NMSave { currentLevel: number; completedLevels: number[]; }

function loadSave(): NMSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const r = localStorage.getItem(SAVE_KEY); if (r) return JSON.parse(r); } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: NMSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed" | "multi-waiting" | "multi-result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */
export default function NumberMergePageWrapper() {
  return <Suspense><NumberMergePage /></Suspense>;
}

function NumberMergePage() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const searchParams = useSearchParams();
  const router = useRouter();

  // -- Multiplayer params --
  const matchId = searchParams.get("match");
  const seed = searchParams.get("seed");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const urlLevel = searchParams.get("level");
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!mixround;

  // -- Avatar --
  const [avatarGender, setAvatarGender] = useState<AvatarGender>("girl");
  const [avatarSkin, setAvatarSkin] = useState(() => getSkinDef("default"));
  const [avatarFace, setAvatarFace] = useState(() => getFaceDef("default"));
  const [avatarTop, setAvatarTop] = useState<ReturnType<typeof getTopDef> | null>(null);
  const [avatarBottom, setAvatarBottom] = useState<ReturnType<typeof getBottomDef> | null>(null);
  const [avatarShoe, setAvatarShoe] = useState<ReturnType<typeof getShoeDef> | null>(null);
  const [avatarCape, setAvatarCape] = useState<ReturnType<typeof getCapeDef> | null>(null);
  const [avatarGlasses, setAvatarGlasses] = useState<ReturnType<typeof getGlassesDef> | null>(null);
  const [avatarGloves, setAvatarGloves] = useState<ReturnType<typeof getGloveDef> | null>(null);
  const [avatarHat, setAvatarHat] = useState<ReturnType<typeof getHatDef> | null>(null);
  const [avatarTrail, setAvatarTrail] = useState<ReturnType<typeof getTrailDef> | null>(null);
  const [avatarMood, setAvatarMood] = useState<AvatarMood>("idle");
  const [avatarJump, setAvatarJump] = useState<{ reaction: "happy" | "surprised" | "victory" | "confused" | "laughing" | null; timestamp: number } | undefined>(undefined);
  const avatarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setAvatarGender(getGender());
    setAvatarSkin(getSkinDef(getActiveSkin()));
    setAvatarFace(getFaceDef(getActiveFace()));
    const topId = getActive("top"); setAvatarTop(topId ? getTopDef(topId) : null);
    const botId = getActive("bottom"); setAvatarBottom(botId ? getBottomDef(botId) : null);
    const shoeId = getActive("shoe"); setAvatarShoe(shoeId ? getShoeDef(shoeId) : null);
    const capeId = getActive("cape"); setAvatarCape(capeId ? getCapeDef(capeId) : null);
    const glsId = getActive("glasses"); setAvatarGlasses(glsId ? getGlassesDef(glsId) : null);
    const glvId = getActive("gloves"); setAvatarGloves(glvId ? getGloveDef(glvId) : null);
    const hatId = getActiveHat(); setAvatarHat(hatId ? getHatDef(hatId) : null);
    const trailId = getActiveTrail(); setAvatarTrail(trailId ? getTrailDef(trailId) : null);
  }, []);

  const avatarProps = {
    gender: avatarGender, activeSkin: avatarSkin, activeFace: avatarFace,
    activeTop: avatarTop, activeBottom: avatarBottom, activeShoe: avatarShoe,
    activeCape: avatarCape, activeGlasses: avatarGlasses, activeGloves: avatarGloves,
    activeHat: avatarHat, activeTrail: avatarTrail,
  };

  function triggerAvatar(mood: AvatarMood, duration: number, jump?: "happy" | "surprised" | "victory" | "confused" | "laughing") {
    if (avatarTimerRef.current) clearTimeout(avatarTimerRef.current);
    setAvatarMood(mood);
    if (jump) setAvatarJump({ reaction: jump, timestamp: Date.now() });
    avatarTimerRef.current = setTimeout(() => setAvatarMood("focused"), duration);
  }

  // -- Navigation --
  const [save, setSave] = useState<NMSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [milestoneKey, setMilestoneKey] = useState(0);

  useEffect(() => { setSave(loadSave()); }, []);

  // Auto-start multiplayer
  const multiStarted = useRef(false);
  useEffect(() => {
    if (isMultiplayer && urlLevel && !multiStarted.current) {
      multiStarted.current = true;
      const lv = Math.min(9, Math.max(1, parseInt(urlLevel) || 1));
      setTimeout(() => startLevel(lv), 100);
    }
  }, [isMultiplayer, urlLevel]); // eslint-disable-line react-hooks/exhaustive-deps

  // -- Game state --
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [score, setScore] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [animating, setAnimating] = useState(false);

  // -- Multiplayer state --
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [mixFinished, setMixFinished] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  // Refs
  const tilesRef = useRef<Tile[]>([]);
  const scoreRef = useRef(0);
  const moveCountRef = useRef(0);
  const saveRef = useRef(save);
  const cfgRef = useRef<NMLevel>(LEVELS[0]);
  const rngRef = useRef<() => number>(() => Math.random());
  const gameActiveRef = useRef(false);
  const animatingRef = useRef(false);
  saveRef.current = save;

  // -- Touch handling --
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  function handleTouchStart(e: React.TouchEvent) {
    if (!gameActiveRef.current || animatingRef.current) return;
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (!gameActiveRef.current || animatingRef.current || !touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartRef.current.x;
    const dy = touch.clientY - touchStartRef.current.y;
    touchStartRef.current = null;

    const minSwipe = 30;
    if (Math.abs(dx) < minSwipe && Math.abs(dy) < minSwipe) return;

    let dir: Direction;
    if (Math.abs(dx) > Math.abs(dy)) {
      dir = dx > 0 ? "right" : "left";
    } else {
      dir = dy > 0 ? "down" : "up";
    }
    doMove(dir);
  }

  // -- Keyboard handling --
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!gameActiveRef.current || animatingRef.current) return;
      let dir: Direction | null = null;
      switch (e.key) {
        case "ArrowUp": dir = "up"; break;
        case "ArrowDown": dir = "down"; break;
        case "ArrowLeft": dir = "left"; break;
        case "ArrowRight": dir = "right"; break;
      }
      if (dir) { e.preventDefault(); doMove(dir); }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function doMove(dir: Direction) {
    if (!gameActiveRef.current || animatingRef.current) return;
    const cfg = cfgRef.current;
    const { newTiles, scoreGained, moved } = moveTiles(tilesRef.current, dir, cfg.gridSize);
    if (!moved) return;

    animatingRef.current = true;
    setAnimating(true);
    scoreRef.current += scoreGained;
    moveCountRef.current++;
    setScore(scoreRef.current);
    setMoveCount(moveCountRef.current);

    // Update tiles (before spawn)
    tilesRef.current = newTiles;
    setTiles([...newTiles]);

    // After brief animation delay, spawn new tile
    setTimeout(() => {
      const spawned = spawnTile(tilesRef.current, cfg.gridSize, rngRef.current);
      if (spawned) {
        tilesRef.current = [...tilesRef.current, spawned];
        setTiles([...tilesRef.current]);
      }

      // Check win
      const maxVal = getMaxTile(tilesRef.current);
      if (maxVal >= cfg.target) {
        handleWin(scoreRef.current);
        animatingRef.current = false;
        setAnimating(false);
        return;
      }

      // Check lose
      if (!canMove(tilesRef.current, cfg.gridSize)) {
        handleLose();
        animatingRef.current = false;
        setAnimating(false);
        return;
      }

      animatingRef.current = false;
      setAnimating(false);
    }, 120);
  }

  function handleWin(finalScore: number) {
    gameActiveRef.current = false;
    const cfg = cfgRef.current;
    const rarity = calcRarity(finalScore, cfg.target, cfg.level);
    saveCard({ id: generateCardId(), game: "numbermerge", rarity, score: finalScore, total: cfg.target, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);
    incrementTotalGames();

    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      triggerAvatar("happy", 99999, "victory");
      if (isMix) {
        submitMixRoundScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      } else {
        submitScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      }
      return;
    }

    triggerAvatar(cfg.level === 10 ? "victory" : "happy", 3000, cfg.level === 10 ? "victory" : "happy");
    const currentSave = saveRef.current;
    const newSave: NMSave = {
      currentLevel: Math.min(10, Math.max(currentSave.currentLevel, cfg.level + 1)),
      completedLevels: [...new Set([...currentSave.completedLevels, cfg.level])],
    };
    setSave(newSave);
    writeSave(newSave);
    setScreen("reward");
  }

  function handleLose() {
    gameActiveRef.current = false;
    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      triggerAvatar("confused", 2000, "confused");
      const finalScore = scoreRef.current;
      if (isMix) {
        submitMixRoundScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      } else {
        submitScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      }
      return;
    }
    triggerAvatar("disappointed", 3000);
    setScreen("levelFailed");
  }

  function startLevel(levelNum: number) {
    const cfg = LEVELS[levelNum - 1];
    cfgRef.current = cfg;
    setActiveLevel(levelNum);

    const rng = seed ? seededRng(`${seed}-${levelNum}`) : seededRng(`${Date.now()}-${Math.random()}`);
    rngRef.current = rng;
    nextTileId = 1;
    const board = initBoard(cfg.gridSize, rng);
    tilesRef.current = board;
    setTiles([...board]);
    scoreRef.current = 0;
    moveCountRef.current = 0;
    setScore(0);
    setMoveCount(0);
    setEarnedCard(null);
    setScoreSubmitted(false);
    gameActiveRef.current = true;
    animatingRef.current = false;
    setAnimating(false);
    triggerAvatar("focused", 5000);
    setScreen("playing");
  }

  // -- Multiplayer polling --
  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;
    const isP1 = playerNum === "1";
    const checkMatch = async () => {
      if (isMix) {
        const result = await pollMixRound(matchId, parseInt(mixround || "1"), isP1, opponentName);
        if (result.action === "finished") { setMyFinalScore(result.myWins); setOppFinalScore(result.oppWins); setMixFinished(true); setScreen("multi-result"); return true; }
        if (result.action === "next") { router.push(result.url); return true; }
        return false;
      } else {
        const { supabase } = await import("@/lib/supabase/client");
        const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
        if (!data) return false;
        const oppDone = isP1 ? data.player2_done : data.player1_done;
        const oppScore = isP1 ? data.player2_score : data.player1_score;
        if (oppDone && oppScore !== null) { setOppFinalScore(oppScore); setScreen("multi-result"); return true; }
        return false;
      }
    };
    checkMatch();
    const interval = setInterval(async () => { if (await checkMatch()) clearInterval(interval); }, 2000);
    return () => clearInterval(interval);
  }, [screen, isMultiplayer, matchId, isMix, playerNum, router, opponentName, mixround]);

  // -- Helpers --
  const cfg = LEVELS[activeLevel - 1];
  const maxTile = getMaxTile(tiles);

  // Cell size calculation
  const cellGap = 6;
  const gridPx = cfg.gridSize * (cfg.gridSize <= 3 ? 96 : cfg.gridSize <= 4 ? 80 : 64) + (cfg.gridSize - 1) * cellGap;

  // -- Render --
  return (
    <main className="fixed inset-0 bg-[#0A0A1A] text-white overflow-hidden flex flex-col">
      {/* -- EXPEDITION -- */}
      {screen === "expedition" && !isMultiplayer && (
        <motion.div className="flex-1 flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <Link href="/">
              <motion.div className="text-white/70 text-sm font-medium" whileTap={{ scale: 0.95 }}>{t.home}</motion.div>
            </Link>
            <div className="text-white/60 text-xs">{save.completedLevels.length}/10 {t.levelsOf}</div>
          </div>

          {/* Title */}
          <div className="text-center px-4 pb-4">
            <h1 className="text-2xl font-black tracking-wider" style={{ color: "#FFD700", filter: "drop-shadow(0 0 8px rgba(255,215,0,0.3))" }}>{t.title}</h1>
            <p className="text-white/60 text-xs mt-1">{t.subtitle}</p>
          </div>

          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <motion.div className="w-20 h-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <AvatarCompanion fixed={false} mood={avatarMood} jumpTrigger={avatarJump} {...avatarProps} />
            </motion.div>
          </div>

          {/* Level grid */}
          <div className="flex-1 overflow-y-auto px-4 pb-8">
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {LEVELS.map((lvl, i) => {
                const completed = save.completedLevels.includes(lvl.level);
                const locked = lvl.level > save.currentLevel;
                const isBoss = lvl.level === 10;
                return (
                  <motion.button
                    key={lvl.level}
                    disabled={locked}
                    onClick={() => startLevel(lvl.level)}
                    className={`relative rounded-xl p-4 border text-left transition-all ${
                      locked ? "border-white/5 bg-white/[0.02] opacity-40" :
                      completed ? "border-[#FFD700]/20 bg-[#FFD700]/5" :
                      "border-white/10 bg-white/5 hover:bg-white/10"
                    } ${isBoss ? "col-span-2" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: locked ? 0.4 : 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    whileTap={locked ? {} : { scale: 0.97 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{locked ? <Lock size={18} className="text-white/50" /> : completed ? <Check size={18} className="text-[#FFD700]" /> : LEVEL_BADGES[i]}</span>
                      <div>
                        <div className="font-bold text-sm">
                          {isBoss && <span className="text-yellow-400">{t.boss}</span>}
                          {t.levelLabel} {lvl.level}
                        </div>
                        <div className="text-white/60 text-[10px]">
                          {lvl.gridSize}x{lvl.gridSize} · {t.target}: {lvl.target}
                        </div>
                      </div>
                      {completed && <span className="ml-auto text-[#FFD700]/50 text-xs font-bold">{t.done}</span>}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* New expedition button */}
            {save.completedLevels.length === 10 && (
              <motion.button
                className="mt-4 mx-auto block text-sm text-[#FFD700]/60 hover:text-[#FFD700] transition-colors"
                onClick={() => { const fresh = { currentLevel: 1, completedLevels: [] as number[] }; setSave(fresh); writeSave(fresh); }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >{t.newExpedition}</motion.button>
            )}
          </div>
        </motion.div>
      )}

      {/* -- PLAYING -- */}
      {screen === "playing" && (
        <motion.div
          className="flex-1 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* HUD */}
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => { if (isMultiplayer) setShowExitConfirm(true); else { setAvatarMood("idle"); gameActiveRef.current = false; setScreen("expedition"); } }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors"
            ><X size={14} /></button>
            <div className="flex items-center gap-4 text-xs font-bold">
              <div className="text-white/50">{t.levelLabel} {activeLevel}</div>
              <div><span className="text-[#FFD700]">{score}</span><span className="text-white/60"> {t.score}</span></div>
              <div><span className="text-white/60">{moveCount}</span><span className="text-white/60"> {t.moves}</span></div>
            </div>
            <div className="text-white/60 text-xs font-bold">{t.target}: {cfg.target}</div>
          </div>

          {/* Progress bar toward target */}
          <div className="px-4 mb-2">
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #FFD700, #FF2D78)" }}
                animate={{ width: `${Math.min(100, (maxTile / cfg.target) * 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-white/50 mt-0.5">
              <span>{maxTile}</span>
              <span>{cfg.target}</span>
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 flex items-center justify-center p-4">
            <div
              className="relative rounded-xl bg-white/[0.04] p-2"
              style={{
                width: `min(${gridPx + 16}px, 92vw)`,
                height: `min(${gridPx + 16}px, 92vw)`,
              }}
            >
              {/* Background grid cells */}
              <div
                className="grid w-full h-full"
                style={{
                  gridTemplateColumns: `repeat(${cfg.gridSize}, 1fr)`,
                  gap: `${cellGap}px`,
                }}
              >
                {Array.from({ length: cfg.gridSize * cfg.gridSize }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-white/[0.04]" />
                ))}
              </div>

              {/* Tiles overlay */}
              <div className="absolute inset-2">
                <AnimatePresence>
                  {tiles.map(tile => {
                    const cellSize = 100 / cfg.gridSize;
                    const gapPercent = (cellGap / (gridPx)) * 100;
                    const ts = tileStyle(tile.value);
                    return (
                      <motion.div
                        key={tile.id}
                        className="absolute flex items-center justify-center rounded-lg border-2 font-black select-none"
                        style={{
                          width: `calc(${cellSize}% - ${gapPercent * (cfg.gridSize - 1) / cfg.gridSize}px)`,
                          height: `calc(${cellSize}% - ${gapPercent * (cfg.gridSize - 1) / cfg.gridSize}px)`,
                          backgroundColor: ts.bg,
                          borderColor: ts.border,
                          color: ts.text,
                          boxShadow: ts.glow,
                          fontSize: tileFontSize(tile.value, cfg.gridSize),
                          zIndex: tile.mergedFrom ? 10 : 5,
                        }}
                        initial={tile.isNew ? { scale: 0, opacity: 0 } : false}
                        animate={{
                          left: `calc(${tile.col * cellSize}% + ${tile.col * gapPercent / cfg.gridSize}px)`,
                          top: `calc(${tile.row * cellSize}% + ${tile.row * gapPercent / cfg.gridSize}px)`,
                          scale: tile.mergedFrom ? [1.15, 1] : tile.isNew ? [0, 1] : 1,
                          opacity: 1,
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                      >
                        {tile.value}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Hint */}
          <div className="text-center text-white/50 text-[10px] px-4 pb-3">{t.hint}</div>

          {/* Restart button */}
          <div className="flex justify-center pb-4">
            <motion.button
              onClick={() => startLevel(activeLevel)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-xs font-bold hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw size={12} /> {t.retry}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* -- REWARD REVEAL -- */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="numbermerge"
          score={score}
          total={cfg.target}
          onDone={() => {
            setScreen("levelComplete");
            setMilestoneKey(k => k + 1);
          }}
        />
      )}

      {/* -- LEVEL COMPLETE -- */}
      {screen === "levelComplete" && (
        <motion.div className="flex-1 flex flex-col items-center justify-center gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="w-24 h-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <AvatarCompanion fixed={false} mood={avatarMood} jumpTrigger={avatarJump} {...avatarProps} />
          </motion.div>
          <div className="text-center">
            <h2 className="text-xl font-black" style={{ color: "#FFD700" }}>
              {activeLevel === 10 ? t.bossDone : t.levelDone}
            </h2>
            <p className="text-white/70 text-sm mt-1">{score} {t.score} · {moveCount} {t.moves}</p>
            <p className="text-white/50 text-xs mt-0.5">{t.target}: {cfg.target}</p>
          </div>
          <div className="flex gap-3">
            <motion.button
              onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-bold"
              whileTap={{ scale: 0.95 }}
            >{t.expeditionMap}</motion.button>
            {activeLevel < 10 && (
              <motion.button
                onClick={() => startLevel(activeLevel + 1)}
                className="px-5 py-2.5 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-sm font-bold flex items-center gap-1"
                whileTap={{ scale: 0.95 }}
              >{t.nextLevel} <ChevronRight size={14} /></motion.button>
            )}
          </div>
          <MilestonePopup key={milestoneKey} />
        </motion.div>
      )}

      {/* -- LEVEL FAILED -- */}
      {screen === "levelFailed" && (
        <motion.div className="flex-1 flex flex-col items-center justify-center gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="w-20 h-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AvatarCompanion fixed={false} mood="disappointed" {...avatarProps} />
          </motion.div>
          <h2 className="text-xl font-black text-red-400">{t.noMoves}</h2>
          <p className="text-white/60 text-sm">{score} {t.score} · {t.target}: {cfg.target}</p>
          <div className="flex gap-3">
            <motion.button
              onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-bold"
              whileTap={{ scale: 0.95 }}
            >{t.expeditionMap}</motion.button>
            <motion.button
              onClick={() => startLevel(activeLevel)}
              className="px-5 py-2.5 rounded-xl bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-sm font-bold flex items-center gap-1"
              whileTap={{ scale: 0.95 }}
            ><RotateCcw size={14} /> {t.retry}</motion.button>
          </div>
        </motion.div>
      )}

      {/* -- MULTI WAITING -- */}
      {screen === "multi-waiting" && (
        <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="text-3xl font-black text-[#FFD700]">{score} {t.score}</motion.div>
          {isMix && <span className="text-white/60 text-xs font-bold uppercase">Round {mixround} ✓</span>}
          <motion.div className="w-10 h-10 border-2 border-[#FFD700] border-t-transparent rounded-full"
            animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
          <span className="text-white/60 text-sm font-medium text-center">{t.waiting} {opponentName}...</span>
        </motion.div>
      )}

      {/* -- MULTI RESULT -- */}
      {screen === "multi-result" && oppFinalScore !== null && (
        <MultiplayerResult
          myScore={myFinalScore !== null ? myFinalScore : score}
          oppScore={oppFinalScore}
          myName={getUsername() || "???"}
          oppName={opponentName}
          onContinue={() => router.push("/multiplayer")}
        />
      )}

      {/* -- MULTI OVERLAYS -- */}
      {isMultiplayer && matchId && (
        <>
          <MultiplayerExitConfirm open={showExitConfirm}
            onStay={() => setShowExitConfirm(false)}
            onLeave={() => { abandonMatch(matchId); router.push("/multiplayer"); }} />
          {screen === "playing" && <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />}
        </>
      )}

      {/* Fixed avatar (solo, playing) */}
      {!isMultiplayer && screen === "playing" && (
        <AvatarCompanion fixed mood={avatarMood} jumpTrigger={avatarJump} {...avatarProps} />
      )}
    </main>
  );
}
