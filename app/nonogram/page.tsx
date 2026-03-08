"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3X3, Lock, Check, ChevronRight, RotateCcw, X, HelpCircle } from "lucide-react";
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
    title: "NONOGRAM",
    subtitle: "10 levels · Fill cells · Reveal pixel art",
    home: "Home", progress: "Progress", levelLabel: "Level", levelsOf: "levels",
    boss: "\u{1F3C6} BOSS \u2014 ", done: "\u2713 done",
    hint: "Tap to fill. Long-press to mark X. Match the clues!",
    levelDone: "\u2705 LEVEL DONE!", bossDone: "\u{1F3C6} COMPLETE!", timeUp: "\u23F0 TIME'S UP!",
    retry: "Retry", nextLevel: "Next Level", expeditionMap: "Expedition Map",
    newExpedition: "\u{1F504} New Expedition", time: "TIME", errors: "ERRORS",
    legendaryDesc: "You earned the legendary Nonogram card!",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD", cellsLeft: "cells left",
    waiting: "Waiting for", multiResult: "Results",
    filled: "Filled", marked: "Marked",
    howToPlay: "How to play?",
    tutStep1: "Numbers on the left show how many consecutive filled cells are in each row",
    tutStep2: "Numbers on top show the same for each column",
    tutStep3: "Tap to fill a cell, long-press to mark it empty (✕)",
    tutStep4: "Fill the right cells to reveal the hidden picture!",
    tutGotIt: "Got it!",
  },
  hu: {
    title: "NONOGRAM",
    subtitle: "10 szint \u00B7 T\u00F6ltsd ki \u00B7 Pixel k\u00E9p l\u00E9trehozása",
    home: "F\u0151oldal", progress: "Halad\u00E1s", levelLabel: "Szint", levelsOf: "szint",
    boss: "\u{1F3C6} BOSS \u2014 ", done: "\u2713 k\u00E9sz",
    hint: "\u00C9rints: kit\u00F6lt\u00E9s. Hossz\u00FA nyom\u00E1s: X jel\u00F6l\u00E9s. K\u00F6vesd a sz\u00E1mokat!",
    levelDone: "\u2705 SZINT K\u00C9SZ!", bossDone: "\u{1F3C6} K\u00C9SZ!", timeUp: "\u23F0 LEJ\u00C1RT!",
    retry: "\u00DAjra", nextLevel: "K\u00F6vetkez\u0151 szint", expeditionMap: "Exped\u00EDci\u00F3",
    newExpedition: "\u{1F504} \u00DAj exped\u00EDci\u00F3", time: "ID\u0150", errors: "HIB\u00C1K",
    legendaryDesc: "Megszerezted a legend\u00E1s Nonogram k\u00E1rty\u00E1t!",
    rarity: { bronze: "BRONZ", silver: "EZ\u00DCST", gold: "ARANY", legendary: "LEGEND\u00C1S" },
    card: "K\u00C1RTYA", cellsLeft: "cella maradt",
    waiting: "V\u00E1rakoz\u00E1s:", multiResult: "Eredm\u00E9ny",
    filled: "Kit\u00F6lt\u00F6tt", marked: "Jel\u00F6lt",
    howToPlay: "Hogyan j\u00E1tssz?",
    tutStep1: "A bal oldali sz\u00E1mok mutatj\u00E1k h\u00E1ny egym\u00E1s melletti cella van kit\u00F6ltve soronk\u00E9nt",
    tutStep2: "A fels\u0151 sz\u00E1mok ugyanezt mutatj\u00E1k oszloponk\u00E9nt",
    tutStep3: "\u00C9rints: kit\u00F6lt\u00E9s. Hossz\u00FA nyom\u00E1s: \u00FCres jel\u00F6l\u00E9s (\u2715)",
    tutStep4: "T\u00F6ltsd ki a megfelel\u0151 cell\u00E1kat \u00E9s kider\u00FCl a rejtett k\u00E9p!",
    tutGotIt: "\u00C9rtem!",
  },
  de: {
    title: "NONOGRAMM",
    subtitle: "10 Level \u00B7 F\u00FClle Zellen \u00B7 Pixelkunst erstellen",
    home: "Start", progress: "Fortschritt", levelLabel: "Level", levelsOf: "Level",
    boss: "\u{1F3C6} BOSS \u2014 ", done: "\u2713 fertig",
    hint: "Tippen: f\u00FCllen. Lang dr\u00FCcken: X markieren. Folge den Zahlen!",
    levelDone: "\u2705 LEVEL GESCHAFFT!", bossDone: "\u{1F3C6} FERTIG!", timeUp: "\u23F0 ZEIT UM!",
    retry: "Nochmal", nextLevel: "N\u00E4chstes Level", expeditionMap: "Expedition",
    newExpedition: "\u{1F504} Neue Expedition", time: "ZEIT", errors: "FEHLER",
    legendaryDesc: "Du hast die legend\u00E4re Nonogramm Karte erhalten!",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGEND\u00C4R" },
    card: "KARTE", cellsLeft: "Zellen \u00FCbrig",
    waiting: "Warten auf", multiResult: "Ergebnis",
    filled: "Gef\u00FCllt", marked: "Markiert",
    howToPlay: "Wie spielt man?",
    tutStep1: "Die Zahlen links zeigen wie viele aufeinanderfolgende Zellen pro Zeile gef\u00FCllt sind",
    tutStep2: "Die Zahlen oben zeigen dasselbe f\u00FCr jede Spalte",
    tutStep3: "Tippen: f\u00FCllen. Lang dr\u00FCcken: als leer markieren (\u2715)",
    tutStep4: "F\u00FClle die richtigen Zellen und enth\u00FClle das versteckte Bild!",
    tutGotIt: "Verstanden!",
  },
  ro: {
    title: "NONOGRAMA",
    subtitle: "10 niveluri \u00B7 Completeaz\u0103 \u00B7 Art\u0103 pixel",
    home: "Acas\u0103", progress: "Progres", levelLabel: "Nivel", levelsOf: "niveluri",
    boss: "\u{1F3C6} BOSS \u2014 ", done: "\u2713 gata",
    hint: "Apas\u0103: umple. Apas\u0103 lung: marcheaz\u0103 X. Urmeaz\u0103 indiciile!",
    levelDone: "\u2705 NIVEL TERMINAT!", bossDone: "\u{1F3C6} TERMINAT!", timeUp: "\u23F0 TIMP EXPIRAT!",
    retry: "Din nou", nextLevel: "Nivelul urm\u0103tor", expeditionMap: "Hart\u0103",
    newExpedition: "\u{1F504} Expedi\u021Bie nou\u0103", time: "TIMP", errors: "ERORI",
    legendaryDesc: "Ai c\u00E2\u0219tigat cardul legendar Nonograma!",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD", cellsLeft: "celule r\u0103mase",
    waiting: "A\u0219teptare:", multiResult: "Rezultat",
    filled: "Completat", marked: "Marcat",
    howToPlay: "Cum se joac\u0103?",
    tutStep1: "Numerele din st\u00E2nga arat\u0103 c\u00E2te celule consecutive sunt completate pe fiecare r\u00E2nd",
    tutStep2: "Numerele de sus arat\u0103 acela\u0219i lucru pentru fiecare coloan\u0103",
    tutStep3: "Apas\u0103: umple. Apas\u0103 lung: marcheaz\u0103 gol (\u2715)",
    tutStep4: "Completeaz\u0103 celulele corecte \u0219i descoper\u0103 imaginea ascuns\u0103!",
    tutGotIt: "Am \u00EEn\u021Beles!",
  },
};

/* ------------------------------------------------------------------ */
/* Seeded PRNG                                                         */
/* ------------------------------------------------------------------ */
function seededRng(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  return () => { h ^= h << 13; h ^= h >> 17; h ^= h << 5; return (h >>> 0) / 4294967296; };
}

/* ------------------------------------------------------------------ */
/* Pixel art patterns                                                  */
/* ------------------------------------------------------------------ */
// 0 = empty, 1 = filled
type Pattern = number[][];

// --- 5x5 patterns ---
const P5_HEART: Pattern = [
  [0,1,0,1,0],
  [1,1,1,1,1],
  [1,1,1,1,1],
  [0,1,1,1,0],
  [0,0,1,0,0],
];
const P5_ARROW: Pattern = [
  [0,0,1,0,0],
  [0,1,1,1,0],
  [1,0,1,0,1],
  [0,0,1,0,0],
  [0,0,1,0,0],
];
const P5_STAR: Pattern = [
  [0,0,1,0,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [0,1,0,1,0],
  [1,0,0,0,1],
];
const P5_CROSS: Pattern = [
  [0,1,1,1,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0],
  [0,1,1,1,0],
];
const P5_DIAMOND: Pattern = [
  [0,0,1,0,0],
  [0,1,0,1,0],
  [1,0,0,0,1],
  [0,1,0,1,0],
  [0,0,1,0,0],
];
const P5_HOUSE: Pattern = [
  [0,0,1,0,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,1,0,1,1],
  [1,1,0,1,1],
];
const P5_TREE: Pattern = [
  [0,0,1,0,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [0,0,1,0,0],
  [0,0,1,0,0],
];
const P5_FISH: Pattern = [
  [0,1,0,0,0],
  [1,1,1,1,0],
  [1,1,1,1,1],
  [1,1,1,1,0],
  [0,1,0,0,0],
];

// --- 7x7 patterns ---
const P7_DOG: Pattern = [
  [1,1,0,0,0,1,1],
  [1,1,0,0,0,1,1],
  [0,1,1,1,1,1,0],
  [0,1,1,1,1,1,0],
  [0,0,1,1,1,0,0],
  [0,0,1,0,1,0,0],
  [0,0,1,0,1,0,0],
];
const P7_CAT: Pattern = [
  [1,0,0,0,0,0,1],
  [1,1,0,0,0,1,1],
  [1,1,1,1,1,1,1],
  [1,0,1,0,1,0,1],
  [1,1,1,1,1,1,1],
  [0,1,0,0,0,1,0],
  [0,0,1,1,1,0,0],
];
const P7_ROCKET: Pattern = [
  [0,0,0,1,0,0,0],
  [0,0,1,1,1,0,0],
  [0,0,1,1,1,0,0],
  [0,1,1,1,1,1,0],
  [0,1,1,1,1,1,0],
  [1,0,1,1,1,0,1],
  [1,0,0,1,0,0,1],
];
const P7_ANCHOR: Pattern = [
  [0,0,0,1,0,0,0],
  [0,0,1,1,1,0,0],
  [0,0,0,1,0,0,0],
  [1,0,0,1,0,0,1],
  [1,1,0,1,0,1,1],
  [0,1,1,1,1,1,0],
  [0,0,0,1,0,0,0],
];
const P7_MUSHROOM: Pattern = [
  [0,0,1,1,1,0,0],
  [0,1,1,1,1,1,0],
  [1,1,0,1,0,1,1],
  [1,1,1,1,1,1,1],
  [0,0,1,1,1,0,0],
  [0,0,1,1,1,0,0],
  [0,1,1,1,1,1,0],
];
const P7_SKULL: Pattern = [
  [0,1,1,1,1,1,0],
  [1,1,1,1,1,1,1],
  [1,0,1,1,1,0,1],
  [1,1,1,0,1,1,1],
  [0,1,1,1,1,1,0],
  [0,1,0,1,0,1,0],
  [0,0,1,0,1,0,0],
];
const P7_SPACESHIP: Pattern = [
  [0,0,0,1,0,0,0],
  [0,0,1,1,1,0,0],
  [0,1,1,1,1,1,0],
  [1,1,0,1,0,1,1],
  [1,1,1,1,1,1,1],
  [0,1,0,0,0,1,0],
  [1,0,0,0,0,0,1],
];
const P7_CROWN: Pattern = [
  [0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [0,1,1,1,1,1,0],
  [0,1,1,1,1,1,0],
  [0,0,1,1,1,0,0],
];

// --- 10x10 patterns ---
const P10_ROBOT: Pattern = [
  [0,0,1,1,1,1,1,1,0,0],
  [0,1,1,1,1,1,1,1,1,0],
  [0,1,0,1,1,1,1,0,1,0],
  [0,1,1,1,1,1,1,1,1,0],
  [0,0,1,0,1,1,0,1,0,0],
  [0,0,0,1,1,1,1,0,0,0],
  [0,0,1,1,1,1,1,1,0,0],
  [0,1,1,0,1,1,0,1,1,0],
  [0,1,1,0,1,1,0,1,1,0],
  [0,0,1,1,0,0,1,1,0,0],
];
const P10_CASTLE: Pattern = [
  [1,0,1,0,0,0,0,1,0,1],
  [1,1,1,0,0,0,0,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [0,1,1,0,1,1,0,1,1,0],
  [0,1,1,0,1,1,0,1,1,0],
  [0,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,0,0,1,1,1,0],
  [0,1,1,1,0,0,1,1,1,0],
  [1,1,1,1,0,0,1,1,1,1],
];
const P10_BUTTERFLY: Pattern = [
  [0,1,1,0,0,0,0,1,1,0],
  [1,1,1,1,0,0,1,1,1,1],
  [1,0,1,1,0,0,1,1,0,1],
  [1,1,1,1,1,1,1,1,1,1],
  [0,1,1,0,1,1,0,1,1,0],
  [0,0,0,0,1,1,0,0,0,0],
  [0,1,1,0,1,1,0,1,1,0],
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,1,1,0,0,1,1,0,1],
  [0,1,1,0,0,0,0,1,1,0],
];
const P10_SHIP: Pattern = [
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,1,1,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,1,0,1,0,1,0,0,0],
  [0,0,1,1,1,1,1,0,0,0],
  [0,0,1,0,1,0,1,0,0,0],
  [0,1,1,1,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,1,0,0],
  [0,0,1,1,1,1,1,0,0,0],
];

/* ------------------------------------------------------------------ */
/* Level definitions                                                   */
/* ------------------------------------------------------------------ */
interface NGLevel {
  level: number;
  gridSize: number;
  timeLimit: number; // seconds, 0 = no limit
  patterns: Pattern[];
}

const LEVELS: NGLevel[] = [
  { level: 1,  gridSize: 5,  timeLimit: 0,   patterns: [P5_HEART, P5_ARROW] },
  { level: 2,  gridSize: 5,  timeLimit: 0,   patterns: [P5_STAR, P5_CROSS] },
  { level: 3,  gridSize: 5,  timeLimit: 120, patterns: [P5_DIAMOND, P5_HOUSE, P5_TREE] },
  { level: 4,  gridSize: 5,  timeLimit: 100, patterns: [P5_FISH, P5_HOUSE, P5_TREE] },
  { level: 5,  gridSize: 7,  timeLimit: 180, patterns: [P7_DOG, P7_CAT, P7_ROCKET] },
  { level: 6,  gridSize: 7,  timeLimit: 160, patterns: [P7_ANCHOR, P7_MUSHROOM, P7_SPACESHIP] },
  { level: 7,  gridSize: 7,  timeLimit: 140, patterns: [P7_SKULL, P7_CROWN, P7_CAT] },
  { level: 8,  gridSize: 7,  timeLimit: 120, patterns: [P7_SPACESHIP, P7_MUSHROOM, P7_DOG] },
  { level: 9,  gridSize: 10, timeLimit: 300, patterns: [P10_ROBOT, P10_CASTLE, P10_BUTTERFLY] },
  { level: 10, gridSize: 10, timeLimit: 240, patterns: [P10_SHIP, P10_BUTTERFLY, P10_CASTLE] },
];

const LEVEL_BADGES = ["\u{1F9E9}", "\u{1F9E9}", "\u{1F9E9}", "\u26A1", "\u26A1", "\u{1F525}", "\u{1F525}", "\u2728", "\u2728", "\u{1F451}"];

/* ------------------------------------------------------------------ */
/* Clue generation                                                     */
/* ------------------------------------------------------------------ */
function generateClues(pattern: Pattern): { rowClues: number[][]; colClues: number[][] } {
  const rows = pattern.length;
  const cols = pattern[0].length;

  const rowClues: number[][] = [];
  for (let r = 0; r < rows; r++) {
    const clue: number[] = [];
    let run = 0;
    for (let c = 0; c < cols; c++) {
      if (pattern[r][c]) { run++; }
      else { if (run > 0) { clue.push(run); run = 0; } }
    }
    if (run > 0) clue.push(run);
    rowClues.push(clue.length > 0 ? clue : [0]);
  }

  const colClues: number[][] = [];
  for (let c = 0; c < cols; c++) {
    const clue: number[] = [];
    let run = 0;
    for (let r = 0; r < rows; r++) {
      if (pattern[r][c]) { run++; }
      else { if (run > 0) { clue.push(run); run = 0; } }
    }
    if (run > 0) clue.push(run);
    colClues.push(clue.length > 0 ? clue : [0]);
  }

  return { rowClues, colClues };
}

/* ------------------------------------------------------------------ */
/* Cell states                                                         */
/* ------------------------------------------------------------------ */
// 0 = unknown, 1 = filled, 2 = marked empty (X)
type CellState = 0 | 1 | 2;

/* ------------------------------------------------------------------ */
/* Card rarity                                                         */
/* ------------------------------------------------------------------ */
function calcRarity(errors: number, gridSize: number, level: number): CardRarity {
  if (level === 10) return "legendary";
  const maxErrors = gridSize; // par = gridSize
  if (errors === 0) return "silver";
  if (errors <= Math.floor(maxErrors / 2)) return "silver";
  return "bronze";
}

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

/* ------------------------------------------------------------------ */
/* Save / Load                                                         */
/* ------------------------------------------------------------------ */
const SAVE_KEY = "nonogram_expedition_v1";
interface NGSave { currentLevel: number; completedLevels: number[]; }

function loadSave(): NGSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const r = localStorage.getItem(SAVE_KEY); if (r) return JSON.parse(r); } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: NGSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed" | "multi-waiting" | "multi-result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

const ACCENT = "#B44DFF"; // neon purple theme

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */
export default function NonogramPageWrapper() {
  return <Suspense><NonogramPage /></Suspense>;
}

/* ------------------------------------------------------------------ */
/* Tutorial overlay                                                     */
/* ------------------------------------------------------------------ */
type TLang = typeof T.en;

function NonogramTutorial({ t, onClose }: { t: TLang; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [demoGrid, setDemoGrid] = useState<number[]>(Array(25).fill(0)); // 0=empty, 1=filled, 2=marked
  const [cursorPos, setCursorPos] = useState<{ row: number; col: number } | null>(null);
  const [tapping, setTapping] = useState(false);

  // Heart pattern for demo (5x5)
  const solution = [
    0,1,0,1,0,
    1,1,1,1,1,
    1,1,1,1,1,
    0,1,1,1,0,
    0,0,1,0,0,
  ];
  // Row clues for heart
  const rowClues = [[1,1],[5],[5],[3],[1]];
  // Col clues for heart
  const colClues = [[2],[4],[3],[4],[2]];

  // Animated filling sequence
  const fillOrder = [
    // Step 0-1: explain row clues — highlight row 1 (full row of 5)
    { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 }, { row: 1, col: 4 },
    // Step 2: explain col clues — fill col 2 cells
    { row: 2, col: 2 }, { row: 3, col: 2 }, { row: 4, col: 2 },
    // Mark empty
    { row: 0, col: 0, mark: true }, { row: 0, col: 2, mark: true }, { row: 0, col: 4, mark: true },
  ];

  useEffect(() => {
    if (step > 3) return;
    setDemoGrid(Array(25).fill(0));
    setCursorPos(null);
    setTapping(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    if (step === 0) {
      // Show row clues explanation — fill row 1 (index 5-9) one by one
      let delay = 400;
      for (let i = 0; i < 5; i++) {
        const idx = 1 * 5 + i;
        timers.push(setTimeout(() => setCursorPos({ row: 1, col: i }), delay));
        timers.push(setTimeout(() => setTapping(true), delay + 200));
        timers.push(setTimeout(() => {
          setTapping(false);
          setDemoGrid(prev => { const n = [...prev]; n[idx] = 1; return n; });
        }, delay + 350));
        delay += 500;
      }
      timers.push(setTimeout(() => { setCursorPos(null); setStep(1); }, delay + 300));
    } else if (step === 1) {
      // Show the filled row, then auto-advance
      setDemoGrid(prev => {
        const n = [...prev];
        for (let i = 0; i < 5; i++) n[5 + i] = 1;
        return n;
      });
      timers.push(setTimeout(() => setStep(2), 1800));
    } else if (step === 2) {
      // Show col clues — fill column 2 (rows 2,3,4)
      setDemoGrid(prev => {
        const n = [...prev];
        for (let i = 0; i < 5; i++) n[5 + i] = 1; // keep row 1
        return n;
      });
      let delay = 400;
      const colCells = [{ row: 2, col: 2 }, { row: 3, col: 2 }, { row: 4, col: 2 }];
      for (const cell of colCells) {
        const idx = cell.row * 5 + cell.col;
        timers.push(setTimeout(() => setCursorPos(cell), delay));
        timers.push(setTimeout(() => setTapping(true), delay + 200));
        timers.push(setTimeout(() => {
          setTapping(false);
          setDemoGrid(prev => { const n = [...prev]; n[idx] = 1; return n; });
        }, delay + 350));
        delay += 500;
      }
      timers.push(setTimeout(() => { setCursorPos(null); setStep(3); }, delay + 300));
    } else if (step === 3) {
      // Show marking empty cells with X
      setDemoGrid(() => {
        const n = Array(25).fill(0);
        for (let i = 0; i < 5; i++) n[5 + i] = 1; // row 1
        n[2 * 5 + 2] = 1; n[3 * 5 + 2] = 1; n[4 * 5 + 2] = 1; // col 2
        return n;
      });
      let delay = 400;
      const markCells = [{ row: 0, col: 0 }, { row: 0, col: 2 }, { row: 0, col: 4 }];
      for (const cell of markCells) {
        const idx = cell.row * 5 + cell.col;
        timers.push(setTimeout(() => setCursorPos(cell), delay));
        timers.push(setTimeout(() => setTapping(true), delay + 300));
        timers.push(setTimeout(() => {
          setTapping(false);
          setDemoGrid(prev => { const n = [...prev]; n[idx] = 2; return n; });
        }, delay + 500));
        delay += 650;
      }
      timers.push(setTimeout(() => { setCursorPos(null); }, delay + 200));
    }

    return () => timers.forEach(clearTimeout);
  }, [step]);

  const stepTexts = [t.tutStep1, t.tutStep2, t.tutStep3, t.tutStep4];
  const currentText = stepTexts[Math.min(step, 3)];

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm px-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        className="bg-[#12122A] border border-white/10 rounded-2xl p-5 max-w-xs w-full flex flex-col items-center gap-4"
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
      >
        <h3 className="text-lg font-black" style={{ color: ACCENT }}>{t.howToPlay}</h3>

        {/* Demo 5x5 grid with clues */}
        <div className="relative flex flex-col items-center">
          <div className="flex">
            {/* Top-left empty corner */}
            <div style={{ width: 40, height: 36 }} />
            {/* Column clues */}
            {colClues.map((clue, c) => (
              <div key={c} className="flex flex-col items-center justify-end" style={{ width: 32, height: 36 }}>
                {clue.map((n, i) => (
                  <span key={i} className={`text-[10px] font-bold leading-tight ${step === 2 && c === 2 ? "text-[#B44DFF]" : "text-white/70"}`}>{n}</span>
                ))}
              </div>
            ))}
          </div>
          {/* Rows */}
          {[0,1,2,3,4].map(r => (
            <div key={r} className="flex">
              {/* Row clue */}
              <div className="flex items-center justify-end gap-0.5 pr-1" style={{ width: 40, height: 32 }}>
                {rowClues[r].map((n, i) => (
                  <span key={i} className={`text-[10px] font-bold ${step === 0 && r === 1 ? "text-[#B44DFF]" : "text-white/70"}`}>{n}</span>
                ))}
              </div>
              {/* Cells */}
              {[0,1,2,3,4].map(c => {
                const idx = r * 5 + c;
                const state = demoGrid[idx];
                return (
                  <motion.div
                    key={c}
                    className={`flex items-center justify-center border ${
                      state === 1
                        ? "bg-[#B44DFF]/30 border-[#B44DFF]/50"
                        : state === 2
                        ? "bg-white/[0.03] border-white/10"
                        : "bg-white/[0.03] border-white/10"
                    }`}
                    style={{ width: 32, height: 32, boxShadow: state === 1 ? "inset 0 0 8px rgba(180,77,255,0.3)" : "none" }}
                    animate={state === 1 ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    {state === 1 && <div className="w-4 h-4 rounded-sm" style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}66` }} />}
                    {state === 2 && <span className="text-red-400/70 font-bold text-xs">✕</span>}
                  </motion.div>
                );
              })}
            </div>
          ))}

          {/* Animated hand cursor */}
          <AnimatePresence>
            {cursorPos && (
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: 40 + cursorPos.col * 32 + 14,
                  top: 36 + cursorPos.row * 32 + 16,
                }}
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: tapping ? 0.85 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="24" height="28" viewBox="0 0 28 32" fill="none">
                  <path d="M10 8C10 6.34 11.34 5 13 5s3 1.34 3 3v7h1.5c.83 0 1.5.67 1.5 1.5V22c0 4.42-3.58 8-8 8h-1c-3.87 0-7-3.13-7-7v-4.5c0-.83.67-1.5 1.5-1.5S6 7.67 6 8.5V15h1V8c0-1.66 1.34-3 3-3z" fill="white" fillOpacity="0.9" stroke="rgba(180,77,255,0.6)" strokeWidth="1.5"/>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Step text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={step}
            className="text-white/80 text-xs text-center font-medium min-h-[36px] flex items-center px-2"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {currentText}
          </motion.p>
        </AnimatePresence>

        {/* Step dots */}
        <div className="flex gap-1.5">
          {[0,1,2,3].map(i => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i <= step ? "bg-[#B44DFF]" : "bg-white/20"}`} />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <motion.button
            onClick={() => setStep(0)}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/70 text-sm font-bold"
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw size={14} />
          </motion.button>
          <motion.button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#B44DFF]/10 border border-[#B44DFF]/30 text-[#B44DFF] text-sm font-bold"
            whileTap={{ scale: 0.95 }}
          >
            {t.tutGotIt}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function NonogramPage() {
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
  const [save, setSave] = useState<NGSave>({ currentLevel: 1, completedLevels: [] });
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
  const [grid, setGrid] = useState<CellState[]>([]);
  const [solution, setSolution] = useState<number[]>([]);
  const [rowClues, setRowClues] = useState<number[][]>([]);
  const [colClues, setColClues] = useState<number[][]>([]);
  const [errors, setErrors] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [highlightRow, setHighlightRow] = useState<number | null>(null);
  const [highlightCol, setHighlightCol] = useState<number | null>(null);
  const [wrongCell, setWrongCell] = useState<number | null>(null);
  const [markMode, setMarkMode] = useState(false); // false=fill, true=mark X
  const [solvedRows, setSolvedRows] = useState<Set<number>>(new Set());
  const [solvedCols, setSolvedCols] = useState<Set<number>>(new Set());

  // -- Multiplayer state --
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [mixFinished, setMixFinished] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  // Refs
  const gridRef = useRef<CellState[]>([]);
  const solutionRef = useRef<number[]>([]);
  const saveRef = useRef(save);
  const cfgRef = useRef<NGLevel>(LEVELS[0]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef = useRef(0);
  const timeElapsedRef = useRef(0);
  const errorsRef = useRef(0);
  const gameActiveRef = useRef(false);
  const gridSizeRef = useRef(5);
  saveRef.current = save;

  // Long press handling
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressTriggered = useRef(false);

  function stopTimer() {
    gameActiveRef.current = false;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  function checkRowCol(g: CellState[], size: number) {
    const sol = solutionRef.current;
    const sr = new Set<number>();
    const sc = new Set<number>();

    for (let r = 0; r < size; r++) {
      let rowOk = true;
      for (let c = 0; c < size; c++) {
        const idx = r * size + c;
        if (sol[idx] === 1 && g[idx] !== 1) { rowOk = false; break; }
        if (sol[idx] === 0 && g[idx] === 1) { rowOk = false; break; }
      }
      if (rowOk) sr.add(r);
    }

    for (let c = 0; c < size; c++) {
      let colOk = true;
      for (let r = 0; r < size; r++) {
        const idx = r * size + c;
        if (sol[idx] === 1 && g[idx] !== 1) { colOk = false; break; }
        if (sol[idx] === 0 && g[idx] === 1) { colOk = false; break; }
      }
      if (colOk) sc.add(c);
    }

    setSolvedRows(sr);
    setSolvedCols(sc);
  }

  function checkWin(g: CellState[]): boolean {
    const sol = solutionRef.current;
    for (let i = 0; i < sol.length; i++) {
      if (sol[i] === 1 && g[i] !== 1) return false;
      if (sol[i] === 0 && g[i] === 1) return false;
    }
    return true;
  }

  function handleWin(finalErrors: number) {
    stopTimer();
    const cfg = cfgRef.current;
    const totalCells = cfg.gridSize * cfg.gridSize;
    const filledCells = solutionRef.current.filter(c => c === 1).length;
    const score = Math.max(1, filledCells - finalErrors);
    const rarity = calcRarity(finalErrors, cfg.gridSize, cfg.level);
    saveCard({ id: generateCardId(), game: "nonogram", rarity, score, total: filledCells, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);
    incrementTotalGames();

    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      triggerAvatar("happy", 99999, "victory");
      // Higher = better: filledCells - errors
      const finalScore = Math.max(0, filledCells - finalErrors);
      if (isMix) {
        submitMixRoundScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      } else {
        submitScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      }
      return;
    }

    triggerAvatar(cfg.level === 10 ? "victory" : "happy", 3000, cfg.level === 10 ? "victory" : "happy");
    const currentSave = saveRef.current;
    const newSave: NGSave = {
      currentLevel: Math.min(10, Math.max(currentSave.currentLevel, cfg.level + 1)),
      completedLevels: [...new Set([...currentSave.completedLevels, cfg.level])],
    };
    setSave(newSave);
    writeSave(newSave);
    setScreen("reward");
  }

  function handleTimeout() {
    stopTimer();
    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      triggerAvatar("confused", 2000, "confused");
      const finalScore = 0;
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
    gridSizeRef.current = cfg.gridSize;
    setActiveLevel(levelNum);

    const rng = seed ? seededRng(`${seed}-${levelNum}`) : seededRng(`${Date.now()}-${Math.random()}`);
    // Pick pattern based on seed
    const patternIdx = Math.floor(rng() * cfg.patterns.length);
    const pattern = cfg.patterns[patternIdx];
    const { rowClues: rc, colClues: cc } = generateClues(pattern);
    setRowClues(rc);
    setColClues(cc);

    // Flatten solution
    const sol = pattern.flat();
    solutionRef.current = sol;
    setSolution(sol);

    const total = cfg.gridSize * cfg.gridSize;
    const emptyGrid = new Array(total).fill(0 as CellState);
    gridRef.current = [...emptyGrid];
    setGrid([...emptyGrid]);

    errorsRef.current = 0;
    setErrors(0);
    setEarnedCard(null);
    setHighlightRow(null);
    setHighlightCol(null);
    setWrongCell(null);
    setMarkMode(false);
    setScoreSubmitted(false);
    setSolvedRows(new Set());
    setSolvedCols(new Set());

    timeLeftRef.current = cfg.timeLimit;
    setTimeLeft(cfg.timeLimit);
    timeElapsedRef.current = 0;
    setTimeElapsed(0);

    stopTimer();
    gameActiveRef.current = true;
    timerRef.current = setInterval(() => {
      timeElapsedRef.current++;
      setTimeElapsed(timeElapsedRef.current);
      if (cfg.timeLimit > 0) {
        timeLeftRef.current--;
        setTimeLeft(timeLeftRef.current);
        if (timeLeftRef.current <= 0) handleTimeout();
      }
    }, 1000);

    triggerAvatar("focused", 5000);
    setScreen("playing");
  }

  function handleCellAction(index: number, action: "fill" | "mark") {
    if (!gameActiveRef.current) return;
    const size = gridSizeRef.current;
    const newGrid = [...gridRef.current];
    const currentState = newGrid[index];

    if (action === "fill") {
      if (currentState === 1) {
        // Unfill
        newGrid[index] = 0;
      } else if (currentState === 2) {
        // If marked X, change to filled
        newGrid[index] = 1;
      } else {
        // Fill the cell
        newGrid[index] = 1;
      }
    } else {
      // Mark X
      if (currentState === 2) {
        newGrid[index] = 0;
      } else if (currentState === 1) {
        newGrid[index] = 2;
      } else {
        newGrid[index] = 2;
      }
    }

    // Check for error: filling a cell that should be empty
    if (newGrid[index] === 1 && solutionRef.current[index] === 0) {
      errorsRef.current++;
      setErrors(errorsRef.current);
      setWrongCell(index);
      // Flash wrong and revert
      setTimeout(() => {
        const revert = [...gridRef.current];
        revert[index] = 2; // mark as X instead
        gridRef.current = revert;
        setGrid([...revert]);
        setWrongCell(null);
        checkRowCol(revert, size);
      }, 400);
      gridRef.current = newGrid;
      setGrid([...newGrid]);
      triggerAvatar("surprised", 1000, "surprised");
      return;
    }

    gridRef.current = newGrid;
    setGrid([...newGrid]);
    checkRowCol(newGrid, size);

    // Highlight
    const row = Math.floor(index / size);
    const col = index % size;
    setHighlightRow(row);
    setHighlightCol(col);

    // Check win
    if (checkWin(newGrid)) {
      handleWin(errorsRef.current);
    }
  }

  function handleCellClick(index: number) {
    handleCellAction(index, markMode ? "mark" : "fill");
  }

  function handleCellRightClick(e: React.MouseEvent, index: number) {
    e.preventDefault();
    handleCellAction(index, "mark");
  }

  function handleTouchStart(index: number) {
    longPressTriggered.current = false;
    longPressTimer.current = setTimeout(() => {
      longPressTriggered.current = true;
      handleCellAction(index, "mark");
    }, 400);
  }

  function handleTouchEnd(index: number) {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    if (!longPressTriggered.current) {
      handleCellAction(index, markMode ? "mark" : "fill");
    }
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
  const filledCount = grid.filter(c => c === 1).length;
  const solutionFilled = solution.filter(c => c === 1).length;

  // Max col clue length for header sizing
  const maxColClueLen = colClues.reduce((max, c) => Math.max(max, c.length), 0);
  const maxRowClueLen = rowClues.reduce((max, c) => Math.max(max, c.length), 0);

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
            <h1 className="text-2xl font-black tracking-wider" style={{ color: ACCENT, filter: `drop-shadow(0 0 8px rgba(180,77,255,0.3))` }}>{t.title}</h1>
            <p className="text-white/60 text-xs mt-1">{t.subtitle}</p>
          </div>

          {/* How to play button */}
          <div className="flex justify-center mb-3">
            <motion.button
              onClick={() => setShowTutorial(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              <HelpCircle size={13} /> {t.howToPlay}
            </motion.button>
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
                      completed ? `border-[${ACCENT}]/20 bg-[${ACCENT}]/5` :
                      "border-white/10 bg-white/5 hover:bg-white/10"
                    } ${isBoss ? "col-span-2" : ""}`}
                    style={completed ? { borderColor: "rgba(180,77,255,0.2)", backgroundColor: "rgba(180,77,255,0.05)" } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: locked ? 0.4 : 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    whileTap={locked ? {} : { scale: 0.97 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{locked ? <Lock size={18} className="text-white/50" /> : completed ? <Check size={18} style={{ color: ACCENT }} /> : LEVEL_BADGES[i]}</span>
                      <div>
                        <div className="font-bold text-sm">
                          {isBoss && <span className="text-yellow-400">{t.boss}</span>}
                          {t.levelLabel} {lvl.level}
                        </div>
                        <div className="text-white/60 text-[10px]">
                          {lvl.gridSize}\u00D7{lvl.gridSize} \u00B7 {lvl.timeLimit > 0 ? `${lvl.timeLimit}s` : "\u221E"}
                        </div>
                      </div>
                      {completed && <span className="ml-auto text-xs font-bold" style={{ color: "rgba(180,77,255,0.5)" }}>{t.done}</span>}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* New expedition button */}
            {save.completedLevels.length === 10 && (
              <motion.button
                className="mt-4 mx-auto block text-sm hover:opacity-100 transition-colors"
                style={{ color: "rgba(180,77,255,0.6)" }}
                onClick={() => { const fresh = { currentLevel: 1, completedLevels: [] as number[] }; setSave(fresh); writeSave(fresh); }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >{t.newExpedition}</motion.button>
            )}
          </div>
        </motion.div>
      )}

      {/* -- PLAYING -- */}
      {screen === "playing" && (
        <motion.div className="flex-1 flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* HUD */}
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => { if (isMultiplayer) setShowExitConfirm(true); else { setAvatarMood("idle"); stopTimer(); setScreen("expedition"); } }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors"
            ><X size={14} /></button>
            <div className="flex items-center gap-4 text-xs font-bold">
              <div className="text-white/50">{t.levelLabel} {activeLevel}</div>
              <div><span style={{ color: ACCENT }}>{errors}</span><span className="text-white/60"> {t.errors}</span></div>
              {cfg.timeLimit > 0 ? (
                <div className={timeLeft <= 10 ? "text-red-400 animate-pulse" : "text-white/50"}>
                  {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
                </div>
              ) : (
                <div className="text-white/60">
                  {Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, "0")}
                </div>
              )}
            </div>
            <div className="text-white/60 text-xs font-bold">{filledCount}/{solutionFilled}</div>
          </div>

          {/* Mode toggle */}
          <div className="flex justify-center gap-2 px-4 pb-2">
            <button
              onClick={() => setMarkMode(false)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                !markMode ? "bg-[#B44DFF]/20 text-[#B44DFF] border border-[#B44DFF]/40" : "bg-white/5 text-white/60 border border-white/10"
              }`}
            >
              <span className="inline-block w-3 h-3 rounded-[3px] mr-1.5 align-middle" style={{ backgroundColor: !markMode ? ACCENT : "rgba(255,255,255,0.2)" }} />
              {t.filled}
            </button>
            <button
              onClick={() => setMarkMode(true)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                markMode ? "bg-red-500/20 text-red-400 border border-red-500/40" : "bg-white/5 text-white/60 border border-white/10"
              }`}
            >
              <span className="mr-1.5 align-middle font-black text-[10px]">✕</span>
              {t.marked}
            </button>
          </div>

          {/* Nonogram grid with clues */}
          <div className="flex-1 flex items-center justify-center p-2 overflow-auto">
            <div className="inline-block">
              {/* Column clues row */}
              <div className="flex" style={{ marginLeft: `${maxRowClueLen * 18 + 4}px` }}>
                {colClues.map((clue, c) => (
                  <div
                    key={c}
                    className="flex flex-col items-center justify-end"
                    style={{
                      width: cfg.gridSize <= 5 ? 40 : cfg.gridSize <= 7 ? 32 : 26,
                      height: maxColClueLen * (cfg.gridSize <= 5 ? 18 : cfg.gridSize <= 7 ? 16 : 14),
                      gap: 1,
                      opacity: solvedCols.has(c) ? 0.3 : 1,
                      transition: "opacity 0.3s",
                    }}
                  >
                    {clue.map((n, i) => (
                      <span
                        key={i}
                        className="font-bold leading-none"
                        style={{
                          fontSize: cfg.gridSize <= 5 ? 12 : cfg.gridSize <= 7 ? 10 : 9,
                          color: highlightCol === c ? ACCENT : "rgba(255,255,255,0.6)",
                        }}
                      >{n}</span>
                    ))}
                  </div>
                ))}
              </div>

              {/* Rows: row clues + cells */}
              {Array.from({ length: cfg.gridSize }, (_, r) => (
                <div key={r} className="flex items-center">
                  {/* Row clue */}
                  <div
                    className="flex items-center justify-end gap-1 pr-1"
                    style={{
                      width: maxRowClueLen * 18 + 4,
                      height: cfg.gridSize <= 5 ? 40 : cfg.gridSize <= 7 ? 32 : 26,
                      opacity: solvedRows.has(r) ? 0.3 : 1,
                      transition: "opacity 0.3s",
                    }}
                  >
                    {rowClues[r]?.map((n, i) => (
                      <span
                        key={i}
                        className="font-bold"
                        style={{
                          fontSize: cfg.gridSize <= 5 ? 12 : cfg.gridSize <= 7 ? 10 : 9,
                          color: highlightRow === r ? ACCENT : "rgba(255,255,255,0.6)",
                        }}
                      >{n}</span>
                    ))}
                  </div>

                  {/* Cells */}
                  {Array.from({ length: cfg.gridSize }, (_, c) => {
                    const idx = r * cfg.gridSize + c;
                    const cellState = grid[idx];
                    const isWrong = wrongCell === idx;
                    const cellSize = cfg.gridSize <= 5 ? 40 : cfg.gridSize <= 7 ? 32 : 26;
                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleCellClick(idx)}
                        onContextMenu={(e) => handleCellRightClick(e, idx)}
                        onTouchStart={() => handleTouchStart(idx)}
                        onTouchEnd={() => handleTouchEnd(idx)}
                        className="relative border transition-colors select-none"
                        style={{
                          width: cellSize,
                          height: cellSize,
                          borderColor: isWrong ? "rgba(255,80,80,0.7)" :
                            (highlightRow === r || highlightCol === c) ? "rgba(180,77,255,0.3)" :
                            "rgba(255,255,255,0.08)",
                          backgroundColor: isWrong ? "rgba(255,50,50,0.4)" :
                            cellState === 1 ? ACCENT :
                            cellState === 2 ? "rgba(255,255,255,0.03)" :
                            "rgba(255,255,255,0.02)",
                          boxShadow: cellState === 1 && !isWrong ? `inset 0 0 8px rgba(180,77,255,0.3), 0 0 4px rgba(180,77,255,0.15)` : "none",
                        }}
                        whileTap={{ scale: 0.9 }}
                        animate={isWrong ? { scale: [1, 1.1, 0.9, 1] } : {}}
                        transition={{ duration: 0.2 }}
                      >
                        {cellState === 2 && (
                          <span className="absolute inset-0 flex items-center justify-center text-white/50 font-bold select-none"
                            style={{ fontSize: cellSize * 0.4 }}>
                            ✕
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Hint */}
          <div className="text-center text-white/50 text-[10px] px-4 pb-2">{t.hint}</div>

          {/* Reset button */}
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
          game="nonogram"
          score={Math.max(1, solutionFilled - errors)}
          total={solutionFilled}
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
            <h2 className="text-xl font-black" style={{ color: ACCENT }}>
              {activeLevel === 10 ? t.bossDone : t.levelDone}
            </h2>
            <p className="text-white/70 text-sm mt-1">{errors} {t.errors} \u00B7 {Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, "0")}</p>
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
                className="px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1"
                style={{ backgroundColor: "rgba(180,77,255,0.1)", borderColor: "rgba(180,77,255,0.3)", color: ACCENT, borderWidth: 1 }}
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
          <h2 className="text-xl font-black text-red-400">{t.timeUp}</h2>
          <p className="text-white/60 text-sm">{solutionFilled - filledCount} {t.cellsLeft}</p>
          <div className="flex gap-3">
            <motion.button
              onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-bold"
              whileTap={{ scale: 0.95 }}
            >{t.expeditionMap}</motion.button>
            <motion.button
              onClick={() => startLevel(activeLevel)}
              className="px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1"
              style={{ backgroundColor: "rgba(180,77,255,0.1)", borderColor: "rgba(180,77,255,0.3)", color: ACCENT, borderWidth: 1 }}
              whileTap={{ scale: 0.95 }}
            ><RotateCcw size={14} /> {t.retry}</motion.button>
          </div>
        </motion.div>
      )}

      {/* -- MULTI WAITING -- */}
      {screen === "multi-waiting" && (
        <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="text-3xl font-black" style={{ color: ACCENT }}>{errors} {t.errors}</motion.div>
          {isMix && <span className="text-white/60 text-xs font-bold uppercase">Round {mixround} \u2713</span>}
          <motion.div className="w-10 h-10 border-2 border-t-transparent rounded-full"
            style={{ borderColor: ACCENT, borderTopColor: "transparent" }}
            animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
          <span className="text-white/60 text-sm font-medium text-center">{t.waiting} {opponentName}...</span>
        </motion.div>
      )}

      {/* -- MULTI RESULT -- */}
      {screen === "multi-result" && oppFinalScore !== null && (
        <MultiplayerResult
          myScore={myFinalScore !== null ? myFinalScore : Math.max(0, solutionFilled - errors)}
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

      {/* Tutorial overlay */}
      <AnimatePresence>
        {showTutorial && <NonogramTutorial t={t} onClose={() => setShowTutorial(false)} />}
      </AnimatePresence>
    </main>
  );
}
