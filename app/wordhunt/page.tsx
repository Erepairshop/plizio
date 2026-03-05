"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, RotateCcw, Lock, Check, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import MilestonePopup from "@/components/MilestonePopup";
import { saveCard, generateCardId, calculateRarity, type CardRarity } from "@/lib/cards";
import { incrementTotalGames } from "@/lib/milestones";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender } from "@/lib/gender";
import type { AvatarGender } from "@/lib/gender";
import { getActiveSkin, getSkinDef } from "@/lib/skins";
import { getActiveFace, getFaceDef } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import { useLang } from "@/components/LanguageProvider";
import { getWordsForLevel, FILLER_LETTERS, type WHLang } from "@/lib/wordhunt-words";

// ─── i18n ─────────────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  en: {
    title: "WORD HUNT",
    subtitle: "10 levels · Find hidden words · Beat the clock",
    home: "Home",
    progress: "Progress",
    levelsOf: "levels",
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ done",
    wordsFound: "Words found",
    timeLeft: "Time",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 COMPLETE!",
    finalScore: "FINAL SCORE",
    pts: "pts",
    legendaryDesc: "You earned the legendary Word Hunt card!",
    newExpedition: "🔄 New Expedition",
    nextLevel: "Next Level",
    expeditionMap: "Expedition Map",
    timeUp: "❌ TIME'S UP!",
    wordsCompleted: "Words found",
    almostThere: "— So close!",
    retry: "Retry",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD",
    hint: "Tap letters in order to spell a word",
    wordsToFind: "Find",
    words: "words",
    diagonal: "diag",
    reverse: "reverse",
    bonus: "BONUS",
    findAll: "Find all words!",
    swipeHint: "Tap letters in order",
  },
  hu: {
    title: "SZÓVADÁSZ",
    subtitle: "10 szint · Keresd a szavakat · Verd meg az órát",
    home: "Főoldal",
    progress: "Haladás",
    levelsOf: "szint",
    levelLabel: "Szint",
    boss: "🏆 BOSS — ",
    done: "✓ kész",
    wordsFound: "Megtalált szavak",
    timeLeft: "Idő",
    levelDone: "✅ SZINT KÉSZ!",
    bossDone: "🏆 KÉSZ!",
    finalScore: "VÉGEREDMÉNY",
    pts: "pont",
    legendaryDesc: "Megszerezted a legendás Szóvadász kártyát!",
    newExpedition: "🔄 Új expedíció",
    nextLevel: "Következő szint",
    expeditionMap: "Expedíció térkép",
    timeUp: "❌ IDŐKÉSZ!",
    wordsCompleted: "Megtalált szavak",
    almostThere: "— Majdnem!",
    retry: "Újra",
    rarity: { bronze: "BRONZ", silver: "EZÜST", gold: "ARANY", legendary: "LEGENDÁS" },
    card: "KÁRTYA",
    hint: "Tapints betűkre sorban a szó betűzéséhez",
    wordsToFind: "Keress",
    words: "szót",
    diagonal: "átló",
    reverse: "fordított",
    bonus: "BÓNUSZ",
    findAll: "Találd meg mind!",
    swipeHint: "Érintsd a betűket sorban",
  },
  de: {
    title: "WORTJAGD",
    subtitle: "10 Level · Wörter finden · Gegen die Zeit",
    home: "Startseite",
    progress: "Fortschritt",
    levelsOf: "Level",
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ fertig",
    wordsFound: "Gefundene Wörter",
    timeLeft: "Zeit",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 FERTIG!",
    finalScore: "ERGEBNIS",
    pts: "Pkt",
    legendaryDesc: "Du hast die legendäre Wortjagd Karte erhalten!",
    newExpedition: "🔄 Neue Expedition",
    nextLevel: "Nächstes Level",
    expeditionMap: "Expedition",
    timeUp: "❌ ZEIT UM!",
    wordsCompleted: "Gefundene Wörter",
    almostThere: "— Fast!",
    retry: "Nochmal",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDÄR" },
    card: "KARTE",
    hint: "Buchstaben der Reihe nach tippen",
    wordsToFind: "Finde",
    words: "Wörter",
    diagonal: "diagonal",
    reverse: "rückwärts",
    bonus: "BONUS",
    findAll: "Alle Wörter finden!",
    swipeHint: "Buchstaben in Reihenfolge tippen",
  },
  ro: {
    title: "VÂNĂTOARE DE CUVINTE",
    subtitle: "10 niveluri · Găsește cuvinte · Bate cronometrul",
    home: "Acasă",
    progress: "Progres",
    levelsOf: "niveluri",
    levelLabel: "Nivel",
    boss: "🏆 BOSS — ",
    done: "✓ gata",
    wordsFound: "Cuvinte găsite",
    timeLeft: "Timp",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 TERMINAT!",
    finalScore: "REZULTAT FINAL",
    pts: "pct",
    legendaryDesc: "Ai câștigat cardul legendar Vânătoare de Cuvinte!",
    newExpedition: "🔄 Expedíție nouă",
    nextLevel: "Nivelul următor",
    expeditionMap: "Hartă expedíție",
    timeUp: "❌ TIMP EXPIRAT!",
    wordsCompleted: "Cuvinte găsite",
    almostThere: "— Aproape!",
    retry: "Din nou",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD",
    hint: "Apasă literele în ordine pentru a scrie un cuvânt",
    wordsToFind: "Găsește",
    words: "cuvinte",
    diagonal: "diagonal",
    reverse: "invers",
    bonus: "BONUS",
    findAll: "Găsește toate cuvintele!",
    swipeHint: "Apasă literele în ordine",
  },
};

// ─── Types ────────────────────────────────────────────────────────────────────

type Screen = "expedition" | "playing" | "levelComplete" | "levelFailed";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";
type Direction = "H" | "V" | "DL" | "DR" | "HR" | "VR";  // Horiz, Vert, DiagLeft, DiagRight, + Reverse

interface WHLevelConfig {
  level: number;
  gridSize: number;
  wordCount: number;
  timeLimit: number;
  wordTier: number;       // 1-5, complexity of words
  allowDiagonal: boolean;
  allowReverse: boolean;
  bonusWord: boolean;     // extra hidden bonus word
}

interface PlacedWord {
  word: string;
  cells: number[];        // flat indices
  found: boolean;
}

interface WHSave {
  currentLevel: number;
  completedLevels: number[];
}

// ─── Level configs ────────────────────────────────────────────────────────────

const LEVELS: WHLevelConfig[] = [
  { level: 1,  gridSize: 6,  wordCount: 4, timeLimit: 60,  wordTier: 1, allowDiagonal: false, allowReverse: false, bonusWord: false },
  { level: 2,  gridSize: 6,  wordCount: 5, timeLimit: 60,  wordTier: 1, allowDiagonal: false, allowReverse: false, bonusWord: false },
  { level: 3,  gridSize: 7,  wordCount: 5, timeLimit: 70,  wordTier: 2, allowDiagonal: false, allowReverse: false, bonusWord: false },
  { level: 4,  gridSize: 7,  wordCount: 5, timeLimit: 65,  wordTier: 2, allowDiagonal: false, allowReverse: true,  bonusWord: false },
  { level: 5,  gridSize: 8,  wordCount: 5, timeLimit: 70,  wordTier: 3, allowDiagonal: false, allowReverse: true,  bonusWord: false },
  { level: 6,  gridSize: 8,  wordCount: 6, timeLimit: 75,  wordTier: 3, allowDiagonal: true,  allowReverse: true,  bonusWord: false },
  { level: 7,  gridSize: 8,  wordCount: 6, timeLimit: 70,  wordTier: 3, allowDiagonal: true,  allowReverse: true,  bonusWord: true  },
  { level: 8,  gridSize: 9,  wordCount: 6, timeLimit: 75,  wordTier: 4, allowDiagonal: true,  allowReverse: true,  bonusWord: true  },
  { level: 9,  gridSize: 9,  wordCount: 7, timeLimit: 80,  wordTier: 4, allowDiagonal: true,  allowReverse: true,  bonusWord: true  },
  { level: 10, gridSize: 10, wordCount: 7, timeLimit: 90,  wordTier: 5, allowDiagonal: true,  allowReverse: true,  bonusWord: true  },
];

const LEVEL_BADGES = ["🔤","🔤","📝","📝","🔍","🔍","💡","💡","📖","🏆"];

const SAVE_KEY = "wordhunt_expedition_v1";

function loadSave(): WHSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const raw = localStorage.getItem(SAVE_KEY); if (raw) return JSON.parse(raw); } catch { /* */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: WHSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

// ─── Grid builder ─────────────────────────────────────────────────────────────

function buildGrid(
  words: string[],
  gridSize: number,
  allowDiagonal: boolean,
  allowReverse: boolean,
  fillerLetters: string[]
): { grid: string[]; placed: PlacedWord[] } {
  const total = gridSize * gridSize;
  const grid: string[] = Array(total).fill("");
  const placed: PlacedWord[] = [];

  const directions: Direction[] = ["H", "V"];
  if (allowDiagonal) directions.push("DL", "DR");
  if (allowReverse) directions.push("HR", "VR");

  function getCell(row: number, col: number): number { return row * gridSize + col; }

  function canPlace(word: string, startRow: number, startCol: number, dir: Direction): number[] | null {
    const cells: number[] = [];
    for (let i = 0; i < word.length; i++) {
      let r = startRow, c = startCol;
      switch (dir) {
        case "H":  c = startCol + i; break;
        case "HR": c = startCol - i; break;
        case "V":  r = startRow + i; break;
        case "VR": r = startRow - i; break;
        case "DR": r = startRow + i; c = startCol + i; break;
        case "DL": r = startRow + i; c = startCol - i; break;
      }
      if (r < 0 || r >= gridSize || c < 0 || c >= gridSize) return null;
      const idx = getCell(r, c);
      if (grid[idx] !== "" && grid[idx] !== word[i]) return null;
      cells.push(idx);
    }
    return cells;
  }

  function placeWord(word: string, cells: number[]) {
    for (let i = 0; i < word.length; i++) grid[cells[i]] = word[i];
    placed.push({ word, cells, found: false });
  }

  // Try to place each word
  for (const word of words) {
    let success = false;
    const shuffledDirs = [...directions].sort(() => Math.random() - 0.5);
    for (let attempt = 0; attempt < 100 && !success; attempt++) {
      const dir = shuffledDirs[attempt % shuffledDirs.length];
      const startRow = Math.floor(Math.random() * gridSize);
      const startCol = Math.floor(Math.random() * gridSize);
      const cells = canPlace(word, startRow, startCol, dir);
      if (cells) { placeWord(word, cells); success = true; }
    }
    // If couldn't place, just skip (won't be found)
  }

  // Fill empty cells with random filler
  for (let i = 0; i < total; i++) {
    if (grid[i] === "") grid[i] = fillerLetters[Math.floor(Math.random() * fillerLetters.length)];
  }

  return { grid, placed };
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function WordHuntPage() {
  const { lang } = useLang();
  const t = TRANSLATIONS[lang as keyof typeof TRANSLATIONS] ?? TRANSLATIONS.en;
  const whLang = (lang === "hu" || lang === "de" || lang === "ro") ? lang as WHLang : "en";

  // ── Avatar ───────────────────────────────────────────────────────────────────
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

  // ── Save ──────────────────────────────────────────────────────────────────────
  const [save, setSave]     = useState<WHSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);

  useEffect(() => { setSave(loadSave()); }, []);

  // ── Game state ────────────────────────────────────────────────────────────────
  const [grid,         setGrid]         = useState<string[]>([]);
  const [placedWords,  setPlacedWords]  = useState<PlacedWord[]>([]);
  const [selected,     setSelected]     = useState<number[]>([]);
  const [foundCells,   setFoundCells]   = useState<Set<number>>(new Set());
  const [bonusCells,   setBonusCells]   = useState<Set<number>>(new Set());
  const [timeLeft,     setTimeLeft]     = useState(60);
  const [score,        setScore]        = useState(0);
  const [wordsFound,   setWordsFound]   = useState(0);
  const [earnedCard,   setEarnedCard]   = useState<CardRarity | null>(null);
  const [wrongFlash,   setWrongFlash]   = useState(false);
  const [lastFoundWord, setLastFoundWord] = useState<string | null>(null);

  const cfgRef          = useRef<WHLevelConfig>(LEVELS[0]);
  const placedRef       = useRef<PlacedWord[]>([]);
  const foundCellsRef   = useRef<Set<number>>(new Set());
  const bonusCellsRef   = useRef<Set<number>>(new Set());
  const scoreRef        = useRef(0);
  const wordsFoundRef   = useRef(0);
  const timeLeftRef     = useRef(60);
  const gameActiveRef   = useRef(false);
  const timerRef        = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopGame = useCallback(() => {
    gameActiveRef.current = false;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  const levelSuccess = useCallback((finalScore: number, finalTimeLeft: number, totalWords: number) => {
    stopGame();
    const cfg = cfgRef.current;
    const rarity: CardRarity = cfg.level === 10
      ? "legendary"
      : calculateRarity(finalScore, totalWords * 10, 0, false);
    saveCard({ id: generateCardId(), game: "wordhunt", theme: `level${cfg.level}`, rarity, score: finalScore, total: totalWords * 10, date: new Date().toISOString() });
    incrementTotalGames();
    setEarnedCard(rarity);
    setSave(prev => {
      const newCompleted = [...new Set([...prev.completedLevels, cfg.level])];
      const newCurrent = cfg.level === 10 ? 10 : Math.max(prev.currentLevel, cfg.level + 1);
      const s: WHSave = { currentLevel: newCurrent, completedLevels: newCompleted };
      writeSave(s); return s;
    });
    triggerAvatar("happy", 99999, cfg.level === 10 ? "victory" : "happy");
    setScreen("levelComplete");
  }, [stopGame]);

  const levelFailed = useCallback(() => {
    stopGame();
    incrementTotalGames();
    triggerAvatar("confused", 2000, "confused");
    setScreen("levelFailed");
  }, [stopGame]);

  const startLevel = useCallback((levelNum: number) => {
    const cfg = LEVELS[levelNum - 1];
    cfgRef.current = cfg;
    stopGame();

    const tier = cfg.wordTier;
    const wordCount = cfg.wordCount + (cfg.bonusWord ? 1 : 0);
    const words = getWordsForLevel(whLang, tier, wordCount);
    const fillerLetters = FILLER_LETTERS[whLang];

    const { grid: newGrid, placed } = buildGrid(
      words,
      cfg.gridSize,
      cfg.allowDiagonal,
      cfg.allowReverse,
      fillerLetters
    );

    // Mark bonus word cells (last word if bonusWord)
    const newBonusCells = new Set<number>();
    if (cfg.bonusWord && placed.length > cfg.wordCount) {
      placed[placed.length - 1].cells.forEach(c => newBonusCells.add(c));
    }

    placedRef.current = placed;
    foundCellsRef.current = new Set();
    bonusCellsRef.current = newBonusCells;
    scoreRef.current = 0;
    wordsFoundRef.current = 0;
    timeLeftRef.current = cfg.timeLimit;

    setActiveLevel(levelNum);
    setGrid(newGrid);
    setPlacedWords(placed);
    setSelected([]);
    setFoundCells(new Set());
    setBonusCells(newBonusCells);
    setTimeLeft(cfg.timeLimit);
    setScore(0);
    setWordsFound(0);
    setEarnedCard(null);
    setLastFoundWord(null);
    setScreen("playing");
    triggerAvatar("focused", 99999);
  }, [stopGame, whLang]);

  // Timer
  useEffect(() => {
    if (screen !== "playing") return;
    gameActiveRef.current = true;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        const next = t - 1;
        timeLeftRef.current = next;
        if (next <= 0) { levelFailed(); return 0; }
        return next;
      });
    }, 1000);
    return () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };
  }, [screen, levelFailed]);

  // ── Cell tap / selection ──────────────────────────────────────────────────────
  const handleCellTap = useCallback((index: number) => {
    if (screen !== "playing") return;
    if (foundCellsRef.current.has(index)) return; // already found

    setSelected(prev => {
      const alreadyIn = prev.indexOf(index);
      if (alreadyIn !== -1) {
        // Tapping last selected cell: deselect from there
        if (alreadyIn === prev.length - 1) return prev.slice(0, -1);
        return prev;
      }
      // Check adjacency (including diagonal)
      if (prev.length > 0) {
        const last = prev[prev.length - 1];
        const cfg = cfgRef.current;
        const lastRow = Math.floor(last / cfg.gridSize);
        const lastCol = last % cfg.gridSize;
        const newRow  = Math.floor(index / cfg.gridSize);
        const newCol  = index % cfg.gridSize;
        const dr = Math.abs(newRow - lastRow);
        const dc = Math.abs(newCol - lastCol);
        if (dr > 1 || dc > 1) return prev; // not adjacent
      }
      return [...prev, index];
    });
  }, [screen]);

  // Check if current selection matches a word
  useEffect(() => {
    if (selected.length === 0) return;
    const placed = placedRef.current;

    for (const pw of placed) {
      if (pw.found) continue;
      const matches =
        (pw.cells.length === selected.length && pw.cells.every((c, i) => c === selected[i])) ||
        (pw.cells.length === selected.length && pw.cells.every((c, i) => c === selected[selected.length - 1 - i]));

      if (matches) {
        // Found a word!
        pw.found = true;
        const isBonus = bonusCellsRef.current.size > 0 && pw.cells.every(c => bonusCellsRef.current.has(c));
        const pts = isBonus ? pw.word.length * 3 : pw.word.length * 2;
        const ns = scoreRef.current + pts;
        scoreRef.current = ns;
        setScore(ns);

        const newFound = new Set(foundCellsRef.current);
        pw.cells.forEach(c => newFound.add(c));
        foundCellsRef.current = newFound;
        setFoundCells(new Set(newFound));

        const nw = wordsFoundRef.current + 1;
        wordsFoundRef.current = nw;
        setWordsFound(nw);
        setPlacedWords([...placed]);
        setSelected([]);
        setLastFoundWord(pw.word);
        setTimeout(() => setLastFoundWord(null), 1200);

        triggerAvatar("happy", 800, "happy");

        const cfg = cfgRef.current;
        const totalNeeded = placed.filter(p => !bonusCellsRef.current.size || !p.cells.every(c => bonusCellsRef.current.has(c))).length;
        if (nw >= totalNeeded) {
          setTimeout(() => levelSuccess(ns, timeLeftRef.current, totalNeeded), 400);
        }
        return;
      }
    }
  }, [selected, levelSuccess]);

  // Clear selection if it gets too long (no word matches possible)
  useEffect(() => {
    if (selected.length > 12) setSelected([]);
  }, [selected]);

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

  function getCellBg(index: number): { bg: string; border: string; text: string; shadow: string } {
    if (foundCells.has(index)) {
      const isBonus = bonusCells.has(index);
      return isBonus
        ? { bg: "#2a1800", border: "#FFD700", text: "#FFD700", shadow: "0 0 10px #FFD70060" }
        : { bg: "#001a0a", border: "#00FF88", text: "#00FF88", shadow: "0 0 10px #00FF8860" };
    }
    if (selected.includes(index)) {
      return { bg: "#001622", border: "#00D4FF", text: "#00D4FF", shadow: "0 0 14px #00D4FF80" };
    }
    return { bg: "#0f0f2a", border: "#2a2a4a", text: "#ffffff99", shadow: "none" };
  }

  // ─── RENDER ───────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white select-none overflow-hidden">
      <AvatarCompanion {...avatarProps} fixed />
      <MilestonePopup />

      {/* Wrong flash overlay */}
      <AnimatePresence>
        {wrongFlash && (
          <motion.div
            className="fixed inset-0 z-40 pointer-events-none"
            style={{ background: "#FF2D7820" }}
            initial={{ opacity: 1 }} animate={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => setWrongFlash(false)}
          />
        )}
      </AnimatePresence>

      {/* Found word popup */}
      <AnimatePresence>
        {lastFoundWord && (
          <motion.div
            className="fixed top-1/3 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -40, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#00FF8820] border border-[#00FF8860] rounded-2xl px-6 py-3">
              <span className="text-[#00FF88] font-black text-xl tracking-widest">{lastFoundWord}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── EXPEDITION ─────────────────────────────────────────────────────────── */}
      {screen === "expedition" && (
        <div className="flex flex-col min-h-screen pb-24">
          <div className="flex items-center justify-between p-4 pt-6">
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Home size={20} /><span className="text-sm font-bold">{t.home}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Search size={20} className="text-[#00FF88]" />
              <span className="text-lg font-black tracking-wider text-[#00FF88]">{t.title}</span>
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
                style={{ background: "linear-gradient(to right, #00FF88, #00D4FF)" }}
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
                    done ? "bg-[#001a0a] border-[#00FF8830]"
                    : current && isBoss ? "bg-[#1a0028] border-[#B44DFF] shadow-[0_0_20px_#B44DFF33]"
                    : current ? "bg-[#001a0a] border-[#00FF88] shadow-[0_0_20px_#00FF8833]"
                    : "bg-[#0f0f22] border-white/10 opacity-60"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0 ${
                    done ? "bg-[#00FF8820] text-[#00FF88]"
                    : current && isBoss ? "bg-[#B44DFF20] text-[#B44DFF]"
                    : current ? "bg-[#00FF8820] text-[#00FF88]"
                    : "bg-white/5 text-white/30"
                  }`}>
                    {done ? <Check size={22} /> : locked ? <Lock size={18} /> : LEVEL_BADGES[i]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-sm ${isBoss ? "text-[#B44DFF]" : "text-white"}`}>
                        {isBoss ? t.boss : ""}{t.levelLabel} {lc.level}
                      </span>
                      {done && <span className="text-[#00FF88] text-xs">{t.done}</span>}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5 flex gap-3">
                      <span>{lc.gridSize}×{lc.gridSize}</span>
                      <span>{lc.wordCount} {t.words}</span>
                      <span>{lc.timeLimit}s</span>
                    </div>
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      {lc.allowDiagonal && <span className="text-[10px] bg-[#B44DFF20] text-[#B44DFF] px-1.5 py-0.5 rounded-full border border-[#B44DFF30]">↗ {t.diagonal}</span>}
                      {lc.allowReverse  && <span className="text-[10px] bg-[#FF6B0020] text-[#FF6B00] px-1.5 py-0.5 rounded-full border border-[#FF6B0030]">← {t.reverse}</span>}
                      {lc.bonusWord     && <span className="text-[10px] bg-[#FFD70020] text-[#FFD700] px-1.5 py-0.5 rounded-full border border-[#FFD70030]">⭐ {t.bonus}</span>}
                    </div>
                  </div>

                  {!locked && (
                    <button
                      onClick={() => startLevel(lc.level)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-black text-sm transition-all active:scale-95 ${
                        isBoss ? "bg-[#B44DFF] text-white shadow-[0_0_12px_#B44DFF66]"
                        : current ? "bg-[#00FF88] text-[#0A0A1A] shadow-[0_0_12px_#00FF8866]"
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
        </div>
      )}

      {/* ── PLAYING ────────────────────────────────────────────────────────────── */}
      {screen === "playing" && (
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <div className="flex flex-col items-start">
              <button
                onClick={() => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } setScreen("expedition"); }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors mb-1"
              ><X size={14} /></button>
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.wordsFound.toUpperCase()}</span>
              <motion.span
                key={wordsFound} className="text-2xl font-black text-[#00FF88]"
                animate={{ scale: [1.2, 1] }} transition={{ duration: 0.15 }}
              >
                {wordsFound}<span className="text-white/30 text-sm font-bold ml-1">/{placedWords.length}</span>
              </motion.span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-white/40 text-xs font-bold tracking-wider">{t.timeLeft.toUpperCase()}</span>
              <span className={`text-2xl font-black ${timeLeft <= 10 ? "text-[#FF2D78] animate-pulse" : "text-white"}`}>
                {timeLeft}s
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-white/40 text-xs font-bold tracking-wider">SCORE</span>
              <motion.span
                key={score} className="text-2xl font-black text-[#FFD700]"
                animate={{ scale: [1.1, 1] }} transition={{ duration: 0.15 }}
              >
                {score}
              </motion.span>
            </div>
          </div>

          {/* Words to find */}
          <div className="px-4 mb-2 flex flex-wrap gap-2 justify-center">
            {placedWords.map((pw, i) => {
              const isBonus = bonusCells.size > 0 && pw.cells.every(c => bonusCells.has(c));
              return (
                <motion.span
                  key={i}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                    pw.found
                      ? isBonus
                        ? "bg-[#FFD70020] border-[#FFD700] text-[#FFD700] line-through"
                        : "bg-[#00FF8820] border-[#00FF88] text-[#00FF88] line-through"
                      : isBonus
                        ? "bg-[#FFD70010] border-[#FFD70040] text-[#FFD70080]"
                        : "bg-white/5 border-white/20 text-white/60"
                  }`}
                  animate={pw.found ? { scale: [1.15, 1] } : {}}
                >
                  {isBonus ? "⭐ " : ""}{pw.word}
                </motion.span>
              );
            })}
          </div>

          {/* Grid */}
          <div className="flex-1 flex items-center justify-center px-2">
            <div
              className="grid gap-1 w-full"
              style={{
                gridTemplateColumns: `repeat(${cfg.gridSize}, 1fr)`,
                maxWidth: `min(${cfg.gridSize * 42}px, 100vw - 16px)`,
              }}
            >
              {grid.map((letter, i) => {
                const cc = getCellBg(i);
                const isSelected = selected.includes(i);
                const isFinalSel = selected[selected.length - 1] === i;
                return (
                  <motion.button
                    key={i}
                    onClick={() => handleCellTap(i)}
                    className="aspect-square rounded-lg flex items-center justify-center font-black"
                    style={{
                      fontSize: cfg.gridSize >= 9 ? "11px" : cfg.gridSize >= 7 ? "13px" : "15px",
                      background: cc.bg,
                      border: `1.5px solid ${cc.border}`,
                      boxShadow: cc.shadow,
                      color: cc.text,
                    }}
                    animate={isSelected ? { scale: isFinalSel ? 1.1 : 1.05 } : { scale: 1 }}
                    whileTap={{ scale: 0.88 }}
                    transition={{ duration: 0.08 }}
                  >
                    {letter}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Selection display */}
          <div className="px-4 py-2 text-center min-h-[40px]">
            {selected.length > 0 ? (
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#00D4FF] font-black text-lg tracking-widest">
                  {selected.map(i => grid[i]).join("")}
                </span>
                <button onClick={() => setSelected([])} className="text-white/30 text-xs hover:text-white/60">✕</button>
              </div>
            ) : (
              <span className="text-white/20 text-xs">{t.swipeHint}</span>
            )}
          </div>

          <div className="px-4 pb-6 text-center text-white/20 text-xs">
            {t.levelLabel} {activeLevel}/10
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
            <span className="text-white/40 text-sm">{wordsFound}/{placedWords.length} {t.wordsCompleted}</span>
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
                  onClick={() => { const ns: WHSave = { currentLevel: 1, completedLevels: [] }; setSave(ns); writeSave(ns); setAvatarMood("idle"); setScreen("expedition"); }}
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
                  className="py-4 px-8 rounded-2xl font-black text-lg bg-[#00FF88] text-[#0A0A1A] shadow-[0_0_20px_#00FF8866] active:scale-95 transition-all flex items-center justify-center gap-2"
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
            <span className="text-white/40 text-sm">{t.wordsCompleted}</span>
            <span className="text-4xl font-black text-white">{wordsFound}/{placedWords.length}</span>
            <span className="text-[#00FF88] font-bold text-xl">{score} {t.pts}</span>
            {wordsFound >= placedWords.length - 1 && (
              <span className="text-[#FFD700] font-bold">{t.almostThere}</span>
            )}
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
