"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3X3, Home, RotateCcw, Lock, Check, ChevronRight, Lightbulb, Undo2 } from "lucide-react";
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

// ─── i18n ─────────────────────────────────────────────────────────────────────
const T = {
  en: {
    title: "MINI SUDOKU",
    subtitle: "10 levels · Fill the grid · No repeats",
    home: "Home",
    progress: "Progress",
    levelsOf: "levels",
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ done",
    time: "TIME",
    mistakes: "MISTAKES",
    hints: "HINTS",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 COMPLETE!",
    timeUp: "⏰ TIME'S UP!",
    tooManyErrors: "❌ TOO MANY MISTAKES!",
    retry: "Retry",
    nextLevel: "Next Level",
    expeditionMap: "Expedition Map",
    newExpedition: "🔄 New Expedition",
    hint: "Fill grid so each row, column & box has each number once",
    legendaryDesc: "You earned the legendary Mini Sudoku card!",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD",
    hintUsed: "💡 Hint used!",
    perfect: "Perfect solve!",
    features: { hints: "Hints", undo: "Undo" },
    left: "left",
  },
  hu: {
    title: "MINI SUDOKU",
    subtitle: "10 szint · Töltsd ki a rácsot · Nincs ismétlés",
    home: "Főoldal",
    progress: "Haladás",
    levelsOf: "szint",
    levelLabel: "Szint",
    boss: "🏆 BOSS — ",
    done: "✓ kész",
    time: "IDŐ",
    mistakes: "HIBÁK",
    hints: "SEGÍTSÉG",
    levelDone: "✅ SZINT KÉSZ!",
    bossDone: "🏆 KÉSZ!",
    timeUp: "⏰ LEJÁRT!",
    tooManyErrors: "❌ TÚLSÁGOSAN HIBÁS!",
    retry: "Újra",
    nextLevel: "Következő szint",
    expeditionMap: "Expedíció térkép",
    newExpedition: "🔄 Új expedíció",
    hint: "Töltsd ki a rácsot, hogy minden sor, oszlop és blokk egyszer tartalmazza az összes számot",
    legendaryDesc: "Megszerezted a legendás Mini Sudoku kártyát!",
    rarity: { bronze: "BRONZ", silver: "EZÜST", gold: "ARANY", legendary: "LEGENDÁS" },
    card: "KÁRTYA",
    hintUsed: "💡 Tipp felhasználva!",
    perfect: "Tökéletes megoldás!",
    features: { hints: "Tipp", undo: "Visszavon" },
    left: "maradt",
  },
  de: {
    title: "MINI SUDOKU",
    subtitle: "10 Level · Fülle das Gitter · Keine Wiederholungen",
    home: "Startseite",
    progress: "Fortschritt",
    levelsOf: "Level",
    levelLabel: "Level",
    boss: "🏆 BOSS — ",
    done: "✓ fertig",
    time: "ZEIT",
    mistakes: "FEHLER",
    hints: "TIPPS",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 FERTIG!",
    timeUp: "⏰ ZEIT UM!",
    tooManyErrors: "❌ ZU VIELE FEHLER!",
    retry: "Nochmal",
    nextLevel: "Nächstes Level",
    expeditionMap: "Expedition",
    newExpedition: "🔄 Neue Expedition",
    hint: "Fülle das Gitter so aus, dass jede Zeile, Spalte und Box jede Zahl einmal enthält",
    legendaryDesc: "Du hast die legendäre Mini-Sudoku-Karte erhalten!",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDÄR" },
    card: "KARTE",
    hintUsed: "💡 Tipp verwendet!",
    perfect: "Perfekte Lösung!",
    features: { hints: "Tipps", undo: "Rückgängig" },
    left: "übrig",
  },
  ro: {
    title: "MINI SUDOKU",
    subtitle: "10 niveluri · Completează grila · Fără repetări",
    home: "Acasă",
    progress: "Progres",
    levelsOf: "niveluri",
    levelLabel: "Nivel",
    boss: "🏆 BOSS — ",
    done: "✓ gata",
    time: "TIMP",
    mistakes: "GREȘELI",
    hints: "SUGESTII",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 TERMINAT!",
    timeUp: "⏰ TIMP EXPIRAT!",
    tooManyErrors: "❌ PREA MULTE GREȘELI!",
    retry: "Din nou",
    nextLevel: "Nivelul următor",
    expeditionMap: "Hartă",
    newExpedition: "🔄 Expedíție nouă",
    hint: "Completează grila astfel încât fiecare rând, coloană și casetă să conțină fiecare număr o dată",
    legendaryDesc: "Ai câștigat cardul legendar Mini Sudoku!",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD",
    hintUsed: "💡 Sugestie folosită!",
    perfect: "Soluție perfectă!",
    features: { hints: "Sugestii", undo: "Anulează" },
    left: "rămase",
  },
};

// ─── Sudoku Logic ──────────────────────────────────────────────────────────────
// Supports 4x4 (boxes: 2x2) and 6x6 (boxes: 2x3)

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getBoxCoords(size: number): { boxRows: number; boxCols: number } {
  if (size === 4) return { boxRows: 2, boxCols: 2 };
  if (size === 6) return { boxRows: 2, boxCols: 3 };
  return { boxRows: 3, boxCols: 3 }; // 9x9 fallback
}

function isValid(grid: number[], size: number, pos: number, num: number): boolean {
  const row = Math.floor(pos / size);
  const col = pos % size;
  const { boxRows, boxCols } = getBoxCoords(size);

  for (let i = 0; i < size; i++) {
    if (grid[row * size + i] === num) return false;
    if (grid[i * size + col] === num) return false;
  }

  const boxRow = Math.floor(row / boxRows) * boxRows;
  const boxCol = Math.floor(col / boxCols) * boxCols;
  for (let r = 0; r < boxRows; r++) {
    for (let c = 0; c < boxCols; c++) {
      if (grid[(boxRow + r) * size + (boxCol + c)] === num) return false;
    }
  }
  return true;
}

function solveSudoku(grid: number[], size: number): boolean {
  const empty = grid.indexOf(0);
  if (empty === -1) return true;
  const nums = shuffle(Array.from({ length: size }, (_, i) => i + 1));
  for (const num of nums) {
    if (isValid(grid, size, empty, num)) {
      grid[empty] = num;
      if (solveSudoku(grid, size)) return true;
      grid[empty] = 0;
    }
  }
  return false;
}

function generateSolution(size: number): number[] {
  const grid = new Array(size * size).fill(0);
  solveSudoku(grid, size);
  return grid;
}

function createPuzzle(solution: number[], size: number, clues: number): number[] {
  const puzzle = [...solution];
  const positions = shuffle(Array.from({ length: size * size }, (_, i) => i));
  let removed = 0;
  for (const pos of positions) {
    if (removed >= size * size - clues) break;
    puzzle[pos] = 0;
    removed++;
  }
  return puzzle;
}

// ─── Level configs ─────────────────────────────────────────────────────────────
interface SudokuLevel {
  level: number;
  size: number;         // grid size (4 or 6)
  clues: number;        // pre-filled cells
  maxMistakes: number;  // allowed wrong placements
  timeLimit: number;    // seconds (0 = no limit)
  hints: number;        // available hints
}

// 4x4 = 16 cells total, 6x6 = 36 cells total
const LEVELS: SudokuLevel[] = [
  { level: 1,  size: 4, clues: 10, maxMistakes: 5, timeLimit: 0,   hints: 3 }, // very easy 4x4
  { level: 2,  size: 4, clues: 8,  maxMistakes: 4, timeLimit: 0,   hints: 3 }, // easy 4x4
  { level: 3,  size: 4, clues: 6,  maxMistakes: 3, timeLimit: 180, hints: 2 }, // medium 4x4
  { level: 4,  size: 4, clues: 5,  maxMistakes: 3, timeLimit: 150, hints: 2 }, // hard 4x4
  { level: 5,  size: 6, clues: 24, maxMistakes: 4, timeLimit: 0,   hints: 3 }, // easy 6x6
  { level: 6,  size: 6, clues: 20, maxMistakes: 3, timeLimit: 240, hints: 2 }, // medium 6x6
  { level: 7,  size: 6, clues: 18, maxMistakes: 3, timeLimit: 210, hints: 2 }, // hard 6x6
  { level: 8,  size: 6, clues: 16, maxMistakes: 3, timeLimit: 180, hints: 1 }, // very hard 6x6
  { level: 9,  size: 6, clues: 14, maxMistakes: 2, timeLimit: 180, hints: 1 }, // expert 6x6
  { level: 10, size: 6, clues: 12, maxMistakes: 2, timeLimit: 210, hints: 1 }, // boss 6x6
];

function calcRarity(mistakes: number, timeLeft: number, timeLimit: number, level: number): CardRarity {
  if (level === 10) return "legendary";
  if (mistakes === 0) return level >= 5 ? "gold" : "silver";
  if (timeLimit > 0) {
    const r = timeLeft / timeLimit;
    if (r > 0.6) return "silver";
  }
  return "bronze";
}

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

// ─── Save / Load ───────────────────────────────────────────────────────────────
const SAVE_KEY = "minisudoku_expedition_v1";
interface MSSave { currentLevel: number; completedLevels: number[] }

function loadSave(): MSSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const r = localStorage.getItem(SAVE_KEY); if (r) return JSON.parse(r); } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: MSSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed" | "multi-waiting" | "multi-result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

// ─── Main Component ────────────────────────────────────────────────────────────

export default function MiniSudokuPageWrapper() {
  return <Suspense><MiniSudokuPage /></Suspense>;
}

function MiniSudokuPage() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const searchParams = useSearchParams();
  const router = useRouter();

  // ── Multiplayer params ───────────────────────────────────────────────────────
  const matchId = searchParams.get("match");
  const seed = searchParams.get("seed");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const urlLevel = searchParams.get("level");
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!mixround;

  // ── Avatar ─────────────────────────────────────────────────────────────────
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
  const [avatarJump,    setAvatarJump]    = useState<{ reaction: "happy"|"surprised"|"victory"|"confused"|"laughing"|null; timestamp: number } | undefined>(undefined);
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

  function triggerAvatar(mood: AvatarMood, duration: number, jump?: "happy"|"surprised"|"victory"|"confused"|"laughing") {
    if (avatarTimerRef.current) clearTimeout(avatarTimerRef.current);
    setAvatarMood(mood);
    if (jump) setAvatarJump({ reaction: jump, timestamp: Date.now() });
    avatarTimerRef.current = setTimeout(() => setAvatarMood("focused"), duration);
  }

  // ── Navigation ──────────────────────────────────────────────────────────────
  const [save, setSave]         = useState<MSSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen]     = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [milestoneKey, setMilestoneKey] = useState(0);

  useEffect(() => { setSave(loadSave()); }, []);

  // Auto-start multiplayer at specified level
  const multiStarted = useRef(false);
  useEffect(() => {
    if (isMultiplayer && urlLevel && !multiStarted.current) {
      multiStarted.current = true;
      const lv = Math.min(9, Math.max(1, parseInt(urlLevel) || 1));
      setTimeout(() => startLevel(lv), 100);
    }
  }, [isMultiplayer, urlLevel]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Game state ──────────────────────────────────────────────────────────────
  const [solution,    setSolution]   = useState<number[]>([]);
  const [puzzle,      setPuzzle]     = useState<number[]>([]); // 0 = empty
  const [userGrid,    setUserGrid]   = useState<number[]>([]); // player's current values
  const [selected,    setSelected]   = useState<number | null>(null);
  const [mistakes,    setMistakes]   = useState(0);
  const [hintsLeft,   setHintsLeft]  = useState(3);
  const [timeLeft,    setTimeLeft]   = useState(0);
  const [earnedCard,  setEarnedCard] = useState<CardRarity | null>(null);
  const [flashCells,  setFlashCells] = useState<Set<number>>(new Set()); // wrong-answer flash
  const [history,     setHistory]    = useState<number[][]>([]); // undo stack
  const [hintFlash,   setHintFlash]  = useState<number | null>(null);
  const [noteToast,   setNoteToast]  = useState<string | null>(null);

  // ── Multiplayer state ──────────────────────────────────────────────────────
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [mixFinished, setMixFinished] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  // ── Multiplayer: poll for opponent ──────────────────────────────────────────
  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;
    const isP1 = playerNum === "1";

    const checkMatch = async () => {
      if (isMix) {
        const result = await pollMixRound(matchId, parseInt(mixround || "1"), isP1, opponentName);
        if (result.action === "finished") {
          setMyFinalScore(result.myWins);
          setOppFinalScore(result.oppWins);
          setMixFinished(true);
          setScreen("multi-result");
          return true;
        }
        if (result.action === "next") {
          router.push(result.url);
          return true;
        }
        return false;
      } else {
        const { supabase } = await import("@/lib/supabase/client");
        const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
        if (!data) return false;
        const oppDone = isP1 ? data.player2_done : data.player1_done;
        const oppScoreVal = isP1 ? data.player2_score : data.player1_score;
        if (oppDone && oppScoreVal !== null) {
          setOppFinalScore(oppScoreVal);
          setScreen("multi-result");
          return true;
        }
        return false;
      }
    };
    checkMatch();
    const interval = setInterval(async () => {
      const done = await checkMatch();
      if (done) clearInterval(interval);
    }, 2000);
    return () => clearInterval(interval);
  }, [screen, isMultiplayer, matchId, isMix, playerNum, router, opponentName, mixround]);

  const cfgRef         = useRef<SudokuLevel>(LEVELS[0]);
  const timerRef       = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef    = useRef(0);
  const gameActiveRef  = useRef(false);
  const mistakesRef    = useRef(0);
  const saveRef        = useRef(save);
  const solutionRef    = useRef<number[]>([]);
  const userGridRef    = useRef<number[]>([]);

  saveRef.current = save;

  function stopTimer() {
    gameActiveRef.current = false;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  function handleWin(finalMistakes: number) {
    stopTimer();
    const cfg = cfgRef.current;
    const finalScore = cfg.size * cfg.size - finalMistakes;

    if (isMultiplayer && matchId && !scoreSubmitted) {
      // Multiplayer: submit score, skip expedition save
      setScoreSubmitted(true);
      const rarity = calcRarity(finalMistakes, timeLeftRef.current, cfg.timeLimit, cfg.level);
      saveCard({ id: generateCardId(), game: "minisudoku", rarity, score: finalScore, total: cfg.size * cfg.size, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();
      setEarnedCard(rarity);
      triggerAvatar("happy", 99999, "victory");

      if (isMix) {
        submitMixRoundScore(matchId, finalScore, playerNum === "1").then(() => {
          setScreen("multi-waiting");
        });
      } else {
        submitScore(matchId, finalScore, playerNum === "1").then(() => {
          setScreen("multi-waiting");
        });
      }
      return;
    }

    const rarity = calcRarity(finalMistakes, timeLeftRef.current, cfg.timeLimit, cfg.level);
    saveCard({ id: generateCardId(), game: "minisudoku", rarity, score: finalScore, total: cfg.size * cfg.size, date: new Date().toISOString() });
    setEarnedCard(rarity);
    incrementTotalGames();
    triggerAvatar(cfg.level === 10 ? "victory" : "happy", 3000, cfg.level === 10 ? "victory" : "happy");
    const cur = saveRef.current;
    const newSave: MSSave = {
      currentLevel: Math.min(10, Math.max(cur.currentLevel, cfg.level + 1)),
      completedLevels: [...new Set([...cur.completedLevels, cfg.level])],
    };
    setSave(newSave);
    writeSave(newSave);
    setScreen("reward");
  }

  function handleGameOver(reason: "timeout" | "mistakes") {
    stopTimer();
    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      const cfg = cfgRef.current;
      const finalScore = cfg.size * cfg.size - mistakesRef.current;
      triggerAvatar("confused", 2000, "confused");
      if (isMix) {
        submitMixRoundScore(matchId, finalScore, playerNum === "1").then(() => {
          setScreen("multi-waiting");
        });
      } else {
        submitScore(matchId, finalScore, playerNum === "1").then(() => {
          setScreen("multi-waiting");
        });
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

    const sol = generateSolution(cfg.size);
    const puz = createPuzzle(sol, cfg.size, cfg.clues);
    solutionRef.current = sol;
    userGridRef.current = [...puz];

    setSolution(sol);
    setPuzzle(puz);
    setUserGrid([...puz]);
    setSelected(null);
    setMistakes(0);
    mistakesRef.current = 0;
    setHintsLeft(cfg.hints);
    setHistory([]);
    setEarnedCard(null);
    setFlashCells(new Set());
    setHintFlash(null);
    setNoteToast(null);

    timeLeftRef.current = cfg.timeLimit;
    setTimeLeft(cfg.timeLimit);
    stopTimer();
    gameActiveRef.current = true;

    if (cfg.timeLimit > 0) {
      timerRef.current = setInterval(() => {
        timeLeftRef.current--;
        setTimeLeft(timeLeftRef.current);
        if (timeLeftRef.current <= 0) handleGameOver("timeout");
      }, 1000);
    }

    triggerAvatar("focused", 5000);
    setScreen("playing");
  }

  function handleCellClick(idx: number) {
    if (!gameActiveRef.current) return;
    if (puzzle[idx] !== 0) {
      // Pre-filled: highlight row/col/box
      setSelected(idx);
      return;
    }
    setSelected(idx);
  }

  function handleNumberInput(num: number) {
    if (selected === null || !gameActiveRef.current) return;
    if (puzzle[selected] !== 0) return; // can't change pre-filled

    const prevGrid = [...userGridRef.current];
    const newGrid = [...userGridRef.current];

    if (newGrid[selected] === num) {
      // Toggle off
      newGrid[selected] = 0;
      userGridRef.current = newGrid;
      setUserGrid(newGrid);
      return;
    }

    newGrid[selected] = num;
    userGridRef.current = newGrid;
    setUserGrid(newGrid);
    setHistory(h => [...h, prevGrid]);

    const correct = solutionRef.current[selected] === num;

    if (!correct) {
      const newMistakes = mistakesRef.current + 1;
      mistakesRef.current = newMistakes;
      setMistakes(newMistakes);

      // Flash wrong cell red
      setFlashCells(s => new Set([...s, selected]));
      setTimeout(() => setFlashCells(s => { const n = new Set(s); n.delete(selected!); return n; }), 600);

      triggerAvatar("confused", 800);

      if (newMistakes >= cfgRef.current.maxMistakes) {
        handleGameOver("mistakes");
      }
    } else {
      triggerAvatar("happy", 400);

      // Check win
      const full = newGrid.every((v, i) => v !== 0 && v === solutionRef.current[i]);
      if (full) handleWin(mistakesRef.current);
    }
  }

  function handleHint() {
    if (hintsLeft <= 0 || selected === null || !gameActiveRef.current) return;
    if (puzzle[selected] !== 0) {
      // Find first empty cell
      const firstEmpty = userGridRef.current.findIndex((v, i) => puzzle[i] === 0 && v === 0);
      if (firstEmpty === -1) return;
      setSelected(firstEmpty);
      return;
    }
    const val = solutionRef.current[selected];
    const prevGrid = [...userGridRef.current];
    const newGrid = [...userGridRef.current];
    newGrid[selected] = val;
    userGridRef.current = newGrid;
    setUserGrid(newGrid);
    setHistory(h => [...h, prevGrid]);
    setHintsLeft(h => h - 1);
    setHintFlash(selected);
    setTimeout(() => setHintFlash(null), 1000);
    showToast(t.hintUsed);

    const full = newGrid.every((v, i) => v !== 0 && v === solutionRef.current[i]);
    if (full) handleWin(mistakesRef.current);
  }

  function handleUndo() {
    if (history.length === 0 || !gameActiveRef.current) return;
    const prev = history[history.length - 1];
    userGridRef.current = [...prev];
    setUserGrid([...prev]);
    setHistory(h => h.slice(0, -1));
  }

  function showToast(msg: string) {
    setNoteToast(msg);
    setTimeout(() => setNoteToast(null), 1500);
  }

  // ── Highlight helpers ───────────────────────────────────────────────────────
  function getHighlightedCells(sel: number | null, size: number): Set<number> {
    if (sel === null) return new Set();
    const row = Math.floor(sel / size);
    const col = sel % size;
    const { boxRows, boxCols } = getBoxCoords(size);
    const boxRow = Math.floor(row / boxRows) * boxRows;
    const boxCol = Math.floor(col / boxCols) * boxCols;
    const set = new Set<number>();
    for (let i = 0; i < size; i++) {
      set.add(row * size + i);
      set.add(i * size + col);
    }
    for (let r = 0; r < boxRows; r++)
      for (let c = 0; c < boxCols; c++)
        set.add((boxRow + r) * size + (boxCol + c));
    return set;
  }

  function getSameValueCells(sel: number | null, grid: number[], size: number): Set<number> {
    if (sel === null) return new Set();
    const val = grid[sel];
    if (!val) return new Set();
    const set = new Set<number>();
    grid.forEach((v, i) => { if (v === val) set.add(i); });
    return set;
  }

  const avatarProps = {
    mood: avatarMood, gender: avatarGender,
    activeSkin: avatarSkin, activeFace: avatarFace,
    activeTop: avatarTop, activeBottom: avatarBottom,
    activeShoe: avatarShoe, activeCape: avatarCape,
    activeGlasses: avatarGlasses, activeGloves: avatarGloves,
    activeHat: avatarHat, activeTrail: avatarTrail,
    jumpTrigger: avatarJump,
  };

  // ─── MULTI WAITING SCREEN ──────────────────────────────────────────────────
  if (screen === "multi-waiting") {
    const cfg = cfgRef.current;
    const finalScore = cfg.size * cfg.size - mistakes;
    return (
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      >
        <motion.div
          className="text-3xl font-black text-[#00FF88]"
          style={{ textShadow: "0 0 20px rgba(0,255,136,0.4)" }}
          initial={{ scale: 0.8 }} animate={{ scale: 1 }}
        >
          {finalScore}/{cfg.size * cfg.size}
        </motion.div>
        {isMix && (
          <span className="text-white/30 text-xs font-bold uppercase">
            Round {mixround} ✓
          </span>
        )}
        <motion.div
          className="w-10 h-10 border-2 border-[#00FF88] border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <span className="text-white/60 text-sm font-medium text-center">
          {lang === "hu" ? `Várakozás ${opponentName}-ra...` :
           lang === "de" ? `Warte auf ${opponentName}...` :
           lang === "ro" ? `Se așteaptă ${opponentName}...` :
           `Waiting for ${opponentName}...`}
        </span>
      </motion.div>
    );
  }

  // ─── MULTI RESULT SCREEN ─────────────────────────────────────────────────
  if (screen === "multi-result" && oppFinalScore !== null) {
    const cfg = cfgRef.current;
    const finalScore = cfg.size * cfg.size - mistakes;
    return (
      <MultiplayerResult
        myScore={myFinalScore !== null ? myFinalScore : finalScore}
        oppScore={oppFinalScore}
        myName={getUsername() || "???"}
        oppName={opponentName}
        onContinue={() => router.push("/multiplayer")}
      />
    );
  }

  // ─── EXPEDITION SCREEN ─────────────────────────────────────────────────────
  if (screen === "expedition" && !isMultiplayer) {
    return (
      <div className="min-h-screen bg-[#0A0A1A] text-white select-none">
        <AvatarCompanion {...avatarProps} fixed />
        <MilestonePopup key={milestoneKey} />

        <div className="flex flex-col min-h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between p-4 pt-6">
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Home size={20} /><span className="text-sm font-bold">{t.home}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Grid3X3 size={20} className="text-[#00FF88]" />
              <span className="text-lg font-black tracking-wider text-[#00FF88]">{t.title}</span>
            </div>
            <div className="w-20" />
          </div>

          <p className="text-center text-white/40 text-sm mb-6 px-4">{t.subtitle}</p>

          {/* Progress bar */}
          <div className="px-6 mb-8">
            <div className="flex justify-between text-xs text-white/40 mb-1">
              <span>{t.progress}</span>
              <span>{save.completedLevels.length}/10 {t.levelsOf}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, #00FF88, #00D4FF)" }}
                initial={{ width: 0 }}
                animate={{ width: `${(save.completedLevels.length / 10) * 100}%` }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </div>

          {/* Level cards */}
          <div className="px-4 space-y-3">
            {LEVELS.map((lvl) => {
              const isCompleted = save.completedLevels.includes(lvl.level);
              const isUnlocked  = lvl.level <= save.currentLevel;
              const isBoss      = lvl.level === 10;

              return (
                <motion.button
                  key={lvl.level}
                  onClick={() => isUnlocked ? startLevel(lvl.level) : undefined}
                  disabled={!isUnlocked}
                  whileTap={isUnlocked ? { scale: 0.97 } : {}}
                  className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all"
                  style={{
                    background: isCompleted
                      ? "linear-gradient(135deg, #00FF8815, #00D4FF15)"
                      : isBoss && isUnlocked
                      ? "linear-gradient(135deg, #B44DFF20, #FF2D7820)"
                      : isUnlocked
                      ? "#12122A"
                      : "#0D0D1F",
                    border: isCompleted
                      ? "1px solid #00FF8840"
                      : isBoss && isUnlocked
                      ? "1px solid #B44DFF60"
                      : isUnlocked
                      ? "1px solid #1e1e3a"
                      : "1px solid #1a1a2e",
                    opacity: isUnlocked ? 1 : 0.45,
                  }}
                >
                  {/* Level number / lock */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-lg"
                    style={{
                      background: isCompleted
                        ? "linear-gradient(135deg, #00FF88, #00D4FF)"
                        : isBoss && isUnlocked
                        ? "linear-gradient(135deg, #B44DFF, #FF2D78)"
                        : isUnlocked
                        ? "#1e1e3a"
                        : "#1a1a2e",
                      color: isCompleted ? "#000" : isUnlocked ? "#fff" : "#444",
                    }}
                  >
                    {!isUnlocked ? <Lock size={18} /> : isCompleted ? <Check size={22} /> : lvl.level}
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-left">
                    <div className="font-black text-sm">
                      {isBoss
                        ? `${t.boss}${t.levelLabel} ${lvl.level}`
                        : `${t.levelLabel} ${lvl.level}`}
                      {isCompleted && <span className="ml-2 text-[#00FF88] text-xs">{t.done}</span>}
                    </div>
                    <div className="text-xs text-white/40 mt-0.5 flex gap-3">
                      <span>{lvl.size}×{lvl.size}</span>
                      <span>{lvl.maxMistakes} ❌ max</span>
                      {lvl.timeLimit > 0 ? <span>⏱ {lvl.timeLimit}s</span> : <span>∞</span>}
                      <span>💡 {lvl.hints}</span>
                    </div>
                  </div>

                  {isUnlocked && !isCompleted && (
                    <ChevronRight size={20} className="text-white/30" />
                  )}
                </motion.button>
              );
            })}

            {/* New expedition button (if all done) */}
            {save.completedLevels.length >= 10 && (
              <motion.button
                onClick={() => {
                  const fresh = { currentLevel: 1, completedLevels: [] };
                  setSave(fresh);
                  writeSave(fresh);
                }}
                className="w-full rounded-2xl p-4 text-center font-bold text-white/60 border border-white/10"
              >
                {t.newExpedition}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ─── PLAYING SCREEN ────────────────────────────────────────────────────────
  if (screen === "playing") {
    const cfg = cfgRef.current;
    const size = cfg.size;
    const { boxRows, boxCols } = getBoxCoords(size);
    const highlighted = getHighlightedCells(selected, size);
    const sameValue   = getSameValueCells(selected, userGrid, size);

    // Grid cell size: adapt to screen
    const cellPx = size === 4 ? 72 : 54;

    return (
      <div className="min-h-screen bg-[#0A0A1A] text-white select-none flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3 pt-5">
          <button
            onClick={() => {
              if (isMultiplayer) { setShowExitConfirm(true); }
              else { stopTimer(); setScreen("expedition"); }
            }}
            className="flex items-center gap-1 text-white/50 hover:text-white transition-colors"
          >
            <Home size={18} /><span className="text-xs font-bold">{t.expeditionMap}</span>
          </button>
          <div className="flex items-center gap-2">
            <Grid3X3 size={16} className="text-[#00FF88]" />
            <span className="font-black text-sm text-[#00FF88]">{t.levelLabel} {activeLevel}</span>
          </div>
          {/* Avatar small */}
          <motion.div
            className="w-20 h-20 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AvatarCompanion {...avatarProps} fixed={false} />
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="flex justify-center gap-6 px-4 mb-3">
          {cfg.timeLimit > 0 && (
            <div className="text-center">
              <div className={`text-xl font-black tabular-nums ${timeLeft <= 30 ? "text-red-400 animate-pulse" : "text-[#00D4FF]"}`}>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
              </div>
              <div className="text-[10px] text-white/40">{t.time}</div>
            </div>
          )}
          <div className="text-center">
            <div className="text-xl font-black text-red-400">{mistakes}/{cfg.maxMistakes}</div>
            <div className="text-[10px] text-white/40">{t.mistakes}</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-black text-[#00FF88]">{hintsLeft}</div>
            <div className="text-[10px] text-white/40">{t.hints}</div>
          </div>
        </div>

        {/* Sudoku Grid */}
        <div className="flex justify-center px-2 mb-4">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${size}, ${cellPx}px)`,
              gap: 0,
              border: "2px solid #00FF8860",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            {userGrid.map((val, idx) => {
              const row = Math.floor(idx / size);
              const col = idx % size;
              const isPrefilled = puzzle[idx] !== 0;
              const isSelected  = selected === idx;
              const isHighlight = highlighted.has(idx);
              const isSameVal   = sameValue.has(idx) && idx !== selected;
              const isWrong     = !isPrefilled && val !== 0 && val !== solutionRef.current[idx];
              const isFlash     = flashCells.has(idx);
              const isHintFlash = hintFlash === idx;

              // Box border logic
              const rightBoxBorder  = (col + 1) % boxCols === 0 && col !== size - 1;
              const bottomBoxBorder = (row + 1) % boxRows === 0 && row !== size - 1;

              const bgColor = isFlash || isHintFlash
                ? (isFlash ? "#FF2D7830" : "#00FF8830")
                : isSelected
                ? "#00D4FF25"
                : isSameVal
                ? "#00D4FF15"
                : isHighlight
                ? "#00FF8808"
                : isPrefilled
                ? "#0D0D22"
                : "#12122A";

              return (
                <div
                  key={idx}
                  onClick={() => handleCellClick(idx)}
                  style={{
                    width: cellPx,
                    height: cellPx,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: bgColor,
                    borderRight: rightBoxBorder ? "2px solid #00FF8860" : "1px solid #1e1e3a",
                    borderBottom: bottomBoxBorder ? "2px solid #00FF8860" : "1px solid #1e1e3a",
                    cursor: isPrefilled ? "default" : "pointer",
                    transition: "background-color 0.1s",
                    outline: isSelected ? "2px solid #00D4FF" : "none",
                    outlineOffset: "-2px",
                  }}
                >
                  <span
                    className="font-black select-none"
                    style={{
                      fontSize: size === 4 ? "1.5rem" : "1.1rem",
                      color: isFlash
                        ? "#FF2D78"
                        : isHintFlash
                        ? "#00FF88"
                        : isPrefilled
                        ? "#ffffff"
                        : isWrong
                        ? "#FF2D78"
                        : "#00D4FF",
                      opacity: val === 0 ? 0 : 1,
                    }}
                  >
                    {val || ""}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Number pad */}
        <div className="flex justify-center gap-2 px-4 mb-4">
          {Array.from({ length: size }, (_, i) => i + 1).map(num => {
            const usedCount = userGrid.filter((v, i) => v === num && puzzle[i] === 0).length
                           + solution.filter((v, i) => puzzle[i] !== 0 && puzzle[i] === num).length;
            const complete = usedCount >= size;
            return (
              <motion.button
                key={num}
                onClick={() => handleNumberInput(num)}
                whileTap={{ scale: 0.92 }}
                disabled={complete}
                className="rounded-xl font-black flex items-center justify-center transition-all"
                style={{
                  width: size === 4 ? 64 : 48,
                  height: size === 4 ? 64 : 48,
                  fontSize: size === 4 ? "1.4rem" : "1.1rem",
                  background: complete
                    ? "#0D0D22"
                    : selected !== null && userGrid[selected] === num
                    ? "#00D4FF"
                    : "#12122A",
                  border: complete ? "1px solid #1a1a2e" : "1px solid #2a2a4a",
                  color: complete ? "#333" : selected !== null && userGrid[selected] === num ? "#000" : "#fff",
                  opacity: complete ? 0.4 : 1,
                }}
              >
                {num}
              </motion.button>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 px-4 mb-6">
          <motion.button
            onClick={handleUndo}
            whileTap={{ scale: 0.93 }}
            disabled={history.length === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all"
            style={{
              background: "#12122A",
              border: "1px solid #2a2a4a",
              color: history.length === 0 ? "#444" : "#fff",
              opacity: history.length === 0 ? 0.5 : 1,
            }}
          >
            <Undo2 size={16} />{t.features.undo}
          </motion.button>
          <motion.button
            onClick={handleHint}
            whileTap={{ scale: 0.93 }}
            disabled={hintsLeft === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all"
            style={{
              background: hintsLeft > 0 ? "linear-gradient(135deg, #00FF8820, #00D4FF20)" : "#12122A",
              border: hintsLeft > 0 ? "1px solid #00FF8860" : "1px solid #1a1a2e",
              color: hintsLeft > 0 ? "#00FF88" : "#444",
              opacity: hintsLeft === 0 ? 0.5 : 1,
            }}
          >
            <Lightbulb size={16} />{t.features.hints} ({hintsLeft})
          </motion.button>
        </div>

        {/* Toast */}
        <AnimatePresence>
          {noteToast && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#12122A] border border-[#00FF8860] text-[#00FF88] font-bold text-sm px-6 py-3 rounded-full z-50"
            >
              {noteToast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Multiplayer overlays */}
        {isMultiplayer && matchId && (
          <>
            <MultiplayerExitConfirm
              open={showExitConfirm}
              onStay={() => setShowExitConfirm(false)}
              onLeave={() => { stopTimer(); abandonMatch(matchId); router.push("/multiplayer"); }}
            />
            <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />
          </>
        )}
      </div>
    );
  }

  // ─── LEVEL COMPLETE SCREEN ─────────────────────────────────────────────────
  if (screen === "reward" && earnedCard) {
    const cfg = cfgRef.current;
    return (
      <RewardReveal rarity={earnedCard} game="minisudoku" score={cfg.size * cfg.size - mistakes} total={cfg.size * cfg.size}
        onDone={() => setScreen("levelComplete")} />
    );
  }

  if (screen === "levelComplete") {
    const cfg = cfgRef.current;
    const isBoss = cfg.level === 10;
    const rarity = earnedCard;
    return (
      <div className="min-h-screen bg-[#0A0A1A] text-white flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center gap-6 w-full max-w-sm"
        >
          {/* Avatar big */}
          <motion.div className="w-60 h-60" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AvatarCompanion {...avatarProps} fixed={false} mood="victory" />
          </motion.div>

          <motion.div
            className="text-3xl font-black text-center"
            style={{ color: isBoss ? "#B44DFF" : "#00FF88" }}
          >
            {isBoss ? t.bossDone : t.levelDone}
          </motion.div>

          {mistakes === 0 && (
            <div className="text-[#FFD700] font-bold text-sm">{t.perfect}</div>
          )}

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full">
            {cfg.level < 10 && (
              <motion.button
                onClick={() => startLevel(cfg.level + 1)}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-2xl font-black text-black text-lg"
                style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
              >
                {t.nextLevel} →
              </motion.button>
            )}
            <motion.button
              onClick={() => { setMilestoneKey(k => k + 1); setScreen("expedition"); }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-2xl font-bold text-white/60 border border-white/10"
            >
              {t.expeditionMap}
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ─── LEVEL FAILED SCREEN ───────────────────────────────────────────────────
  if (screen === "levelFailed") {
    const cfg = cfgRef.current;
    const isTimeout = timeLeft === 0 && cfg.timeLimit > 0;
    return (
      <div className="min-h-screen bg-[#0A0A1A] text-white flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center gap-6 w-full max-w-sm"
        >
          <motion.div className="w-52 h-52" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <AvatarCompanion {...avatarProps} fixed={false} mood="disappointed" />
          </motion.div>

          <div className="text-2xl font-black text-red-400 text-center">
            {isTimeout ? t.timeUp : t.tooManyErrors}
          </div>

          <div className="flex flex-col gap-3 w-full">
            <motion.button
              onClick={() => startLevel(activeLevel)}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-2xl font-black text-black text-lg"
              style={{ background: "linear-gradient(135deg, #FF2D78, #B44DFF)" }}
            >
              <RotateCcw className="inline mr-2" size={18} />{t.retry}
            </motion.button>
            <motion.button
              onClick={() => setScreen("expedition")}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-2xl font-bold text-white/60 border border-white/10"
            >
              {t.expeditionMap}
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
