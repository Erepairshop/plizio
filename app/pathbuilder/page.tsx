"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Home, RotateCcw, Lock, Check, ChevronRight, Eraser, Navigation } from "lucide-react";
import Link from "next/link";
import MilestonePopup from "@/components/MilestonePopup";
import RewardReveal from "@/components/RewardReveal";
import { saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { seededRandom } from "@/lib/seededRandom";
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
import { supabase } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";
import MultiplayerOpponentPanel from "@/components/MultiplayerOpponentPanel";

// ─── i18n ─────────────────────────────────────────────────────────────────────
const T = {
  en: {
    title: "PATH BUILDER",
    subtitle: "10 levels · Build the route · Reach every checkpoint",
    home: "Home", progress: "Progress", levelLabel: "Level", levelsOf: "levels", route: "route",
    boss: "🏆 BOSS — ", done: "✓ done",
    hint: "Start at the first checkpoint → build the route in order → reach the finish",
    levelDone: "✅ LEVEL DONE!", bossDone: "🏆 COMPLETE!", timeUp: "⏰ TIME'S UP!",
    retry: "Retry", nextLevel: "Next Level", expeditionMap: "Expedition Map",
    newExpedition: "🔄 New Expedition", time: "TIME",
    legendaryDesc: "You earned the legendary Path Builder card!",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD", noLimit: "No time limit", clearPath: "Clear", newPuzzle: "New",
    checkpoints: "checkpoints", filled: "steps", tapToStart: "Tap ① to start",
    nextGoal: "→ reach",
  },
  hu: {
    title: "ÚTVONALEPÍTŐ",
    subtitle: "10 szint · Építsd meg az útvonalat · Érj el minden állomást",
    home: "Főoldal", progress: "Haladás", levelLabel: "Szint", levelsOf: "szint", route: "útvonal",
    boss: "🏆 BOSS — ", done: "✓ kész",
    hint: "Kezdj az első állomásnál → építsd meg sorban az útvonalat → érj a célba",
    levelDone: "✅ SZINT KÉSZ!", bossDone: "🏆 KÉSZ!", timeUp: "⏰ LEJÁRT!",
    retry: "Újra", nextLevel: "Következő szint", expeditionMap: "Expedíció térkép",
    newExpedition: "🔄 Új expedíció", time: "IDŐ",
    legendaryDesc: "Megszerezted a legendás Útvonalépítő kártyát!",
    rarity: { bronze: "BRONZ", silver: "EZÜST", gold: "ARANY", legendary: "LEGENDÁS" },
    card: "KÁRTYA", noLimit: "Nincs időkorlát", clearPath: "Törlés", newPuzzle: "Új",
    checkpoints: "állomás", filled: "lépés", tapToStart: "Érintsd az ①-et",
    nextGoal: "→ célpont",
  },
  de: {
    title: "PFADBAUER",
    subtitle: "10 Level · Baue die Route · Erreiche alle Checkpoints",
    home: "Startseite", progress: "Fortschritt", levelLabel: "Level", levelsOf: "Level", route: "Route",
    boss: "🏆 BOSS — ", done: "✓ fertig",
    hint: "Starte am ersten Checkpoint → baue die Route der Reihe nach → erreiche das Ziel",
    levelDone: "✅ LEVEL GESCHAFFT!", bossDone: "🏆 FERTIG!", timeUp: "⏰ ZEIT UM!",
    retry: "Nochmal", nextLevel: "Nächstes Level", expeditionMap: "Expedition",
    newExpedition: "🔄 Neue Expedition", time: "ZEIT",
    legendaryDesc: "Du hast die legendäre Pfadbauer-Karte erhalten!",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDÄR" },
    card: "KARTE", noLimit: "Kein Zeitlimit", clearPath: "Löschen", newPuzzle: "Neu",
    checkpoints: "Checkpoints", filled: "Schritte", tapToStart: "Tippe ①",
    nextGoal: "→ Ziel",
  },
  ro: {
    title: "CONSTRUCTOR DE TRASEE",
    subtitle: "10 niveluri · Construiește traseul · Ajungi la fiecare punct",
    home: "Acasă", progress: "Progres", levelLabel: "Nivel", levelsOf: "niveluri", route: "traseu",
    boss: "🏆 BOSS — ", done: "✓ gata",
    hint: "Începe de la primul punct → construiește traseul în ordine → ajungi la final",
    levelDone: "✅ NIVEL TERMINAT!", bossDone: "🏆 TERMINAT!", timeUp: "⏰ TIMP EXPIRAT!",
    retry: "Din nou", nextLevel: "Nivelul următor", expeditionMap: "Hartă",
    newExpedition: "🔄 Expedíție nouă", time: "TIMP",
    legendaryDesc: "Ai câștigat cardul legendar Constructor de trasee!",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD", noLimit: "Fără limită", clearPath: "Șterge", newPuzzle: "Nou",
    checkpoints: "puncte", filled: "pași", tapToStart: "Apasă ①",
    nextGoal: "→ obiectiv",
  },
};

// ─── Level configs ─────────────────────────────────────────────────────────────
interface NPLevel {
  level: number;
  gridSize: number;
  waypointCount: number;
  routeLength: number;
  timeLimit: number; // seconds, 0 = no limit
}

const LEVELS: NPLevel[] = [
  { level: 1,  gridSize: 4, waypointCount: 3,  routeLength: 6,  timeLimit: 0 },
  { level: 2,  gridSize: 4, waypointCount: 4,  routeLength: 7,  timeLimit: 0 },
  { level: 3,  gridSize: 4, waypointCount: 5,  routeLength: 8,  timeLimit: 0 },
  { level: 4,  gridSize: 4, waypointCount: 5,  routeLength: 9,  timeLimit: 120 },
  { level: 5,  gridSize: 5, waypointCount: 4,  routeLength: 10, timeLimit: 0 },
  { level: 6,  gridSize: 5, waypointCount: 5,  routeLength: 11, timeLimit: 150 },
  { level: 7,  gridSize: 5, waypointCount: 6, routeLength: 12, timeLimit: 120 },
  { level: 8,  gridSize: 6, waypointCount: 6, routeLength: 13, timeLimit: 180 },
  { level: 9,  gridSize: 6, waypointCount: 7, routeLength: 14, timeLimit: 150 },
  { level: 10, gridSize: 6, waypointCount: 8, routeLength: 16, timeLimit: 120 },
];

const LEVEL_BADGES = ["🔢", "🔢", "🔢", "⏱️", "🧩", "🧩", "⏱️", "🔥", "🔥", "👑"];

// ─── Puzzle generation ─────────────────────────────────────────────────────────
interface NPPuzzle {
  gridSize: number;
  solution: number[];   // cell indices forming the Hamiltonian path
  waypoints: number[];  // waypoints[i] = cell index of waypoint (i+1)
}

function warnsdorff(gridSize: number, start: number, rng: () => number = Math.random): number[] {
  const total = gridSize * gridSize;
  const visited = new Uint8Array(total);
  const path = [start];
  visited[start] = 1;

  function unvisitedNeighbors(idx: number): number[] {
    const r = Math.floor(idx / gridSize), c = idx % gridSize;
    const ns: number[] = [];
    if (r > 0 && !visited[idx - gridSize]) ns.push(idx - gridSize);
    if (r < gridSize - 1 && !visited[idx + gridSize]) ns.push(idx + gridSize);
    if (c > 0 && !visited[idx - 1]) ns.push(idx - 1);
    if (c < gridSize - 1 && !visited[idx + 1]) ns.push(idx + 1);
    return ns;
  }

  while (path.length < total) {
    const ns = unvisitedNeighbors(path[path.length - 1]);
    if (!ns.length) break;
    const scored = ns.map(n => {
      visited[n] = 1;
      const score = unvisitedNeighbors(n).length;
      visited[n] = 0;
      return { n, score };
    });
    scored.sort((a, b) => a.score - b.score || (rng() > 0.5 ? 1 : -1));
    visited[scored[0].n] = 1;
    path.push(scored[0].n);
  }
  return path;
}

function generateHamiltonPath(gridSize: number, rng: () => number = Math.random): number[] {
  for (let i = 0; i < 40; i++) {
    const start = Math.floor(rng() * gridSize * gridSize);
    const path = warnsdorff(gridSize, start, rng);
    if (path.length === gridSize * gridSize) return path;
  }
  // Fallback: boustrophedon
  const path: number[] = [];
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      path.push(r * gridSize + (r % 2 === 0 ? c : gridSize - 1 - c));
    }
  }
  return path;
}

function generatePuzzle(cfg: NPLevel, rng: () => number = Math.random): NPPuzzle {
  const fullPath = generateHamiltonPath(cfg.gridSize, rng);
  const routeLength = Math.max(2, Math.min(cfg.routeLength, fullPath.length));
  const solution = fullPath.slice(0, routeLength);
  const total = solution.length;
  const waypoints: number[] = [];
  for (let i = 0; i < cfg.waypointCount; i++) {
    const pathIdx = Math.round(i * (total - 1) / (cfg.waypointCount - 1));
    waypoints.push(solution[pathIdx]);
  }
  return { gridSize: cfg.gridSize, solution, waypoints };
}

// ─── Helpers ───────────────────────────────────────────────────────────────────
function isAdjacent(a: number, b: number, gs: number): boolean {
  const ar = Math.floor(a / gs), ac = a % gs;
  const br = Math.floor(b / gs), bc = b % gs;
  return Math.abs(ar - br) + Math.abs(ac - bc) === 1;
}

function calcRarity(timeLeft: number, timeLimit: number, level: number): CardRarity {
  if (level === 10) return "legendary";
  if (timeLimit === 0) return level >= 5 ? "silver" : "bronze";
  const r = timeLeft / timeLimit;
  if (r > 0.6) return "silver";
  return "bronze";
}

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

// ─── Save / Load ───────────────────────────────────────────────────────────────
const SAVE_KEY = "pathbuilder_expedition_v1";
interface NPSave { currentLevel: number; completedLevels: number[]; }

function loadSave(): NPSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const r = localStorage.getItem(SAVE_KEY); if (r) return JSON.parse(r); } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: NPSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed" | "multi-waiting" | "multi-result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

// ─── Main Component ────────────────────────────────────────────────────────────

export default function PathBuilderPageWrapper() {
  return <Suspense><PathBuilderPage /></Suspense>;
}

function PathBuilderPage() {
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

  // ── Avatar — useState(null) + useEffect (same as reflexrush/numberrush) ──────
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

  // ── Navigation ────────────────────────────────────────────────────────────────
  const [save, setSave]       = useState<NPSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen]   = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [milestoneKey, setMilestoneKey] = useState(0);

  useEffect(() => { setSave(loadSave()); }, []);

  // Auto-start multiplayer at specified level
  const multiStarted = useRef(false);
  useEffect(() => {
    if (isMultiplayer && urlLevel && !multiStarted.current) {
      multiStarted.current = true;
      const lv = Math.min(10, Math.max(1, parseInt(urlLevel) || 1));
      setTimeout(() => startLevel(lv), 100);
    }
  }, [isMultiplayer, urlLevel]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Game state ─────────────────────────────────────────────────────────────────
  const [puzzle,       setPuzzle]      = useState<NPPuzzle | null>(null);
  const [pathState,    setPathState]   = useState<number[]>([]);
  const [invalidFlash, setInvalidFlash] = useState<number | null>(null);
  const [timeLeft,     setTimeLeft]    = useState(0);
  const [earnedCard,   setEarnedCard]  = useState<CardRarity | null>(null);

  // ── Multiplayer state ──────────────────────────────────────────────────────
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [mixFinished, setMixFinished] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [oppScore, setOppScore] = useState(0);
  const [oppMood, setOppMood] = useState<"idle" | "focused" | "happy" | "surprised" | "victory" | "disappointed">("focused");
  const broadcastChannelRef = useRef<RealtimeChannel | null>(null);
  const broadcastIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Refs for stable access in event handlers
  const pathRef        = useRef<number[]>([]);
  const puzzleRef      = useRef<NPPuzzle | null>(null);
  const waypointMapRef = useRef<Map<number, number>>(new Map());
  const saveRef        = useRef(save);
  const cfgRef         = useRef<NPLevel>(LEVELS[0]);
  const timerRef       = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef    = useRef(0);
  const gameActiveRef  = useRef(false);
  const isDragging     = useRef(false);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  // interactRef always has fresh logic (avoids stale closures)
  const interactRef    = useRef<(idx: number) => void>(() => {});

  // Keep saveRef fresh each render
  saveRef.current = save;

  function setPath(newPath: number[]) {
    pathRef.current = newPath;
    setPathState(newPath);
  }

  function getNextWaypointFromPath(p: number[]): number {
    let max = 0;
    for (const idx of p) {
      const val = waypointMapRef.current.get(idx);
      if (val !== undefined && val > max) max = val;
    }
    return max + 1;
  }

  function stopTimer() {
    gameActiveRef.current = false;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  function handleWin(finalPath: number[], finalTimeLeft: number) {
    stopTimer();
    const cfg = cfgRef.current;
    const rarity = calcRarity(finalTimeLeft, cfg.timeLimit, cfg.level);
    saveCard({ id: generateCardId(), game: "pathbuilder", rarity, score: finalPath.length, total: cfg.routeLength, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);
    incrementTotalGames();

    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      triggerAvatar("happy", 99999, "victory");
      const finalScore = finalPath.length;
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

    triggerAvatar(cfg.level === 10 ? "victory" : "happy", 3000, cfg.level === 10 ? "victory" : "happy");
    const currentSave = saveRef.current;
    const newSave: NPSave = {
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
      const currentScore = pathRef.current.length;
      if (isMix) {
        submitMixRoundScore(matchId, currentScore, playerNum === "1").then(() => {
          setScreen("multi-waiting");
        });
      } else {
        submitScore(matchId, currentScore, playerNum === "1").then(() => {
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
    const rng = seed ? seededRandom(`${seed}-${levelNum}`) : Math.random;
    const p = generatePuzzle(cfg, rng);
    puzzleRef.current = p;
    waypointMapRef.current = new Map(p.waypoints.map((cellIdx, i) => [cellIdx, i + 1]));
    setPuzzle(p);
    setPath([]);
    setInvalidFlash(null);
    setEarnedCard(null);
    timeLeftRef.current = cfg.timeLimit;
    setTimeLeft(cfg.timeLimit);
    stopTimer(); // must come before setting gameActiveRef = true
    gameActiveRef.current = true;
    if (cfg.timeLimit > 0) {
      timerRef.current = setInterval(() => {
        timeLeftRef.current--;
        setTimeLeft(timeLeftRef.current);
        if (timeLeftRef.current <= 0) handleTimeout();
      }, 1000);
    }
    triggerAvatar("focused", 5000);
    setScreen("playing");
  }

  function flashInvalidCell(idx: number) {
    setInvalidFlash(idx);
    setTimeout(() => setInvalidFlash(null), 400);
  }

  // Always-fresh interact handler (no stale closure)
  interactRef.current = (idx: number) => {
    if (!gameActiveRef.current || !puzzleRef.current) return;
    const puzzle = puzzleRef.current;
    const currentPath = pathRef.current;

    // Already in path → backtrack
    const existingIdx = currentPath.indexOf(idx);
    if (existingIdx >= 0) {
      setPath(currentPath.slice(0, existingIdx + 1));
      return;
    }

    // Must be adjacent to last cell (if path has cells)
    if (currentPath.length > 0 && !isAdjacent(currentPath[currentPath.length - 1], idx, puzzle.gridSize)) {
      flashInvalidCell(idx);
      return;
    }

    // Waypoint order check
    const wpVal = waypointMapRef.current.get(idx);
    if (wpVal !== undefined) {
      const nextNeeded = getNextWaypointFromPath(currentPath);
      if (wpVal !== nextNeeded) {
        flashInvalidCell(idx);
        triggerAvatar("confused", 500);
        return;
      }
    } else if (currentPath.length === 0) {
      // Must start at waypoint 1
      flashInvalidCell(idx);
      return;
    }

    const newPath = [...currentPath, idx];
    setPath(newPath);
    if (newPath.length === puzzle.solution.length) {
      handleWin(newPath, timeLeftRef.current);
    }
  };

  // Grid drag: track which cell the pointer/touch is over
  function getCellIdxFromPoint(x: number, y: number): number {
    const el = document.elementFromPoint(x, y) as HTMLElement | null;
    const cell = el?.closest("[data-ci]") as HTMLElement | null;
    const v = cell?.getAttribute("data-ci");
    return v !== null && v !== undefined ? parseInt(v) : -1;
  }

  function onGridMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    const idx = getCellIdxFromPoint(e.clientX, e.clientY);
    if (idx >= 0) interactRef.current(idx);
  }
  function onGridMouseMove(e: React.MouseEvent) {
    if (!isDragging.current) return;
    const idx = getCellIdxFromPoint(e.clientX, e.clientY);
    if (idx >= 0) interactRef.current(idx);
  }
  function onGridMouseUp() { isDragging.current = false; }
  function onGridTouchStart(e: React.TouchEvent) {
    e.preventDefault();
    isDragging.current = true;
    const t = e.touches[0];
    const idx = getCellIdxFromPoint(t.clientX, t.clientY);
    if (idx >= 0) interactRef.current(idx);
  }
  function onGridTouchMove(e: React.TouchEvent) {
    e.preventDefault();
    const t = e.touches[0];
    const idx = getCellIdxFromPoint(t.clientX, t.clientY);
    if (idx >= 0) interactRef.current(idx);
  }
  function onGridTouchEnd() { isDragging.current = false; }

  // ── Cell renderer ─────────────────────────────────────────────────────────────
  function renderCell(cellIdx: number, gs: number) {
    const wpVal = waypointMapRef.current.get(cellIdx);
    const pathPos = pathState.indexOf(cellIdx);
    const isInPath = pathPos >= 0;
    const isLast = pathState.length > 0 && pathState[pathState.length - 1] === cellIdx;
    const isFlash = invalidFlash === cellIdx;
    const isWaypoint = wpVal !== undefined;
    const isVisitedWaypoint = isWaypoint && isInPath;
    const pathColor = "#00D4FF";
    const wpColor = isInPath ? "#00D4FF" : "#B44DFF";

    // Connection lines
    const prev = pathPos > 0 ? pathState[pathPos - 1] : -1;
    const next = pathPos >= 0 && pathPos < pathState.length - 1 ? pathState[pathPos + 1] : -1;
    const row = Math.floor(cellIdx / gs), col = cellIdx % gs;

    function connects(neighbor: number, dr: number, dc: number) {
      if (neighbor < 0) return false;
      return Math.floor(neighbor / gs) === row + dr && neighbor % gs === col + dc;
    }
    const connU = isInPath && (connects(prev, -1, 0) || connects(next, -1, 0));
    const connD = isInPath && (connects(prev,  1, 0) || connects(next,  1, 0));
    const connL = isInPath && (connects(prev,  0,-1) || connects(next,  0,-1));
    const connR = isInPath && (connects(prev,  0, 1) || connects(next,  0, 1));

    return (
      <div
        key={cellIdx}
        data-ci={cellIdx}
        className="relative select-none cursor-pointer rounded-lg flex items-center justify-center transition-colors duration-75"
        style={{
          aspectRatio: "1",
          backgroundColor: isFlash ? "#FF2D7820" : isInPath ? "#00D4FF12" : "#12122A",
          border: isFlash
            ? "2px solid #FF2D78"
            : isLast && !isWaypoint ? "2px solid #00D4FF"
            : isWaypoint ? `2px solid ${wpColor}`
            : isInPath ? "2px solid #00D4FF33"
            : "2px solid #1e1e3a",
          boxShadow: isLast && !isWaypoint ? "0 0 10px #00D4FF66" : isWaypoint && !isInPath ? `0 0 8px ${wpColor}66` : undefined,
        }}
      >
        {/* Path line connectors */}
        {isInPath && (<>
          {connU && <div className="absolute" style={{ width: 4, top: 0, height: "50%", left: "calc(50% - 2px)", backgroundColor: pathColor, opacity: 0.5 }} />}
          {connD && <div className="absolute" style={{ width: 4, bottom: 0, height: "50%", left: "calc(50% - 2px)", backgroundColor: pathColor, opacity: 0.5 }} />}
          {connL && <div className="absolute" style={{ height: 4, left: 0, width: "50%", top: "calc(50% - 2px)", backgroundColor: pathColor, opacity: 0.5 }} />}
          {connR && <div className="absolute" style={{ height: 4, right: 0, width: "50%", top: "calc(50% - 2px)", backgroundColor: pathColor, opacity: 0.5 }} />}
        </>)}

        {/* Center dot for non-waypoint path cells */}
        {isInPath && !isWaypoint && (
          <div className="rounded-full z-10" style={{ width: gs <= 4 ? 10 : 8, height: gs <= 4 ? 10 : 8, backgroundColor: pathColor, opacity: isLast ? 1 : 0.7 }} />
        )}

        {/* Waypoint number */}
        {isWaypoint && (
          <motion.div
            className="rounded-full flex items-center justify-center font-black z-10 relative"
            animate={isLast ? { scale: [1, 1.12, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1.2 }}
            style={{
              width: "72%", height: "72%",
              backgroundColor: isInPath ? "#00D4FF18" : "#B44DFF18",
              border: `2px solid ${wpColor}`,
              color: wpColor,
              fontSize: wpVal! > 9 ? (gs >= 6 ? "0.5rem" : "0.6rem") : (gs >= 6 ? "0.65rem" : "0.8rem"),
            }}
          >
            {wpVal}
            {isVisitedWaypoint && (
              <div className="absolute inset-0 flex items-center justify-center rounded-full">
                <div className="rounded-full" style={{ width: "40%", height: "40%", backgroundColor: pathColor }} />
              </div>
            )}
          </motion.div>
        )}

        {/* Pulse on last non-waypoint cell */}
        {isLast && !isWaypoint && (
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            animate={{ opacity: [0.3, 0, 0.3] }}
            transition={{ repeat: Infinity, duration: 1 }}
            style={{ backgroundColor: pathColor }}
          />
        )}
      </div>
    );
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

  // ── Multiplayer: live opponent broadcast ─────────────────────────────────────
  useEffect(() => {
    if (!isMultiplayer || !matchId) return;
    const channel = supabase.channel(`pathbuilder-${matchId}`, {
      config: { broadcast: { self: false } },
    });
    channel.on("broadcast", { event: "scoreUpdate" }, (payload) => {
      if (payload.payload.p !== playerNum) {
        setOppScore(payload.payload.score);
        setOppMood("happy");
        setTimeout(() => setOppMood("focused"), 600);
      }
    });
    channel.subscribe();
    broadcastChannelRef.current = channel;
    return () => { channel.unsubscribe(); broadcastChannelRef.current = null; };
  }, [isMultiplayer, matchId, playerNum]);

  useEffect(() => {
    if (!isMultiplayer || screen !== "playing" || !broadcastChannelRef.current) return;
    broadcastIntervalRef.current = setInterval(() => {
      broadcastChannelRef.current?.send({
        type: "broadcast",
        event: "scoreUpdate",
        payload: { p: playerNum, score: pathRef.current.length },
      });
    }, 500);
    return () => { if (broadcastIntervalRef.current) clearInterval(broadcastIntervalRef.current); };
  }, [isMultiplayer, screen, playerNum]);

  // ─── EXPEDITION SCREEN ────────────────────────────────────────────────────────
  if (screen === "expedition" && !isMultiplayer) {
    return (
      <div className="min-h-screen bg-[#0A0A1A] text-white select-none">
        <AvatarCompanion {...avatarProps} fixed />
        <MilestonePopup key={milestoneKey} />

        <div className="flex flex-col min-h-screen pb-16 sm:pb-24">
          {/* Header */}
          <div className="flex items-center justify-between p-4 pt-6">
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Home size={20} /><span className="text-sm font-bold">{t.home}</span>
            </Link>
            <div className="flex items-center gap-2">
              <Navigation size={20} className="text-[#00FF88]" />
              <span className="text-lg font-black tracking-wider text-[#00FF88]">{t.title}</span>
            </div>
            <div className="w-20" />
          </div>

          <p className="text-center text-white/40 text-sm mb-6 px-4">{t.subtitle}</p>

          {/* Progress bar */}
          <div className="px-4 sm:px-6 mb-6 sm:mb-8">
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

          {/* Level list */}
          <div className="px-4 flex flex-col gap-2.5 sm:gap-3 max-w-sm mx-auto w-full">
            {LEVELS.map((lvl, i) => {
              const done    = save.completedLevels.includes(lvl.level);
              const current = lvl.level === save.currentLevel;
              const locked  = lvl.level > save.currentLevel;
              const isBoss  = lvl.level === 10;
              return (
                <motion.div
                  key={lvl.level}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                className={`flex items-center gap-3 p-3 sm:p-4 rounded-2xl border transition-all ${
                    done    ? "bg-[#001a08] border-[#00FF8840]"
                    : current && isBoss ? "bg-[#1a0028] border-[#B44DFF] shadow-[0_0_20px_#B44DFF33]"
                    : current ? "bg-[#001a08] border-[#00FF88] shadow-[0_0_20px_#00FF8833]"
                    : "bg-[#0f0f22] border-white/10 opacity-60"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black flex-shrink-0 ${
                    done    ? "bg-[#00FF8820] text-[#00FF88]"
                    : current && isBoss ? "bg-[#B44DFF20] text-[#B44DFF]"
                    : current ? "bg-[#00FF8820] text-[#00FF88]"
                    : "bg-white/5 text-white/30"
                  }`}>
                    {done ? <Check size={22} /> : locked ? <Lock size={18} /> : LEVEL_BADGES[i]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-black text-sm ${isBoss ? "text-[#B44DFF]" : "text-white"}`}>
                        {isBoss ? t.boss : ""}{t.levelLabel} {lvl.level}
                      </span>
                      {done && <span className="text-[#00FF88] text-xs">{t.done}</span>}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5 flex gap-3">
                      <span>{lvl.gridSize}×{lvl.gridSize}</span>
                      <span>{lvl.routeLength} {t.route}</span>
                      <span>{lvl.waypointCount} {t.checkpoints}</span>
                      {lvl.timeLimit > 0 ? <span>{lvl.timeLimit}s</span> : <span>{t.noLimit}</span>}
                    </div>
                  </div>

                  {!locked && (
                    <button
                      onClick={() => startLevel(lvl.level)}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl font-black text-sm transition-all active:scale-95 ${
                        isBoss  ? "bg-[#B44DFF] text-white shadow-[0_0_12px_#B44DFF66]"
                        : current ? "bg-[#00FF88] text-black shadow-[0_0_12px_#00FF8866]"
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

          {save.completedLevels.length === 10 && (
          <div className="px-4 mt-5 sm:mt-6 max-w-sm mx-auto w-full">
              <button
                onClick={() => { const f = { currentLevel: 1, completedLevels: [] }; setSave(f); writeSave(f); }}
                className="w-full py-3 rounded-xl text-sm font-bold text-white/60 bg-white/5 border border-white/10"
              >
                {t.newExpedition}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─── PLAYING SCREEN ───────────────────────────────────────────────────────────
  if (screen === "playing" && puzzle) {
    const cfg = cfgRef.current;
    const total = puzzle.solution.length;
    const nextWp = getNextWaypointFromPath(pathState);
    const progress = pathState.length / total;

    return (
      <div className="min-h-screen flex flex-col bg-[#0A0A1A]">
        <AvatarCompanion {...avatarProps} fixed />
        {/* Header */}
        <div className="px-4 pt-4 pb-1 flex items-center justify-between flex-shrink-0">
          <button onClick={() => {
            if (isMultiplayer) { setShowExitConfirm(true); }
            else { stopTimer(); setScreen("expedition"); }
          }} className="text-white/60">
            <Home size={20} />
          </button>
          <div className="text-center">
            <div className="text-xs font-bold text-[#00FF88]">
              {t.levelLabel} {cfg.level} · {cfg.gridSize}×{cfg.gridSize}
            </div>
            <div className="text-xs text-white/40">
              {pathState.length}/{total} {t.filled}
            </div>
          </div>
          <div className="w-16 text-right">
            {cfg.timeLimit > 0 && (
              <div className={`font-mono font-bold text-sm ${timeLeft < 20 ? "text-[#FF2D78]" : "text-[#00FF88]"}`}>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-4 pb-2">
          <div className="h-1.5 rounded-full overflow-hidden bg-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #00FF88, #00D4FF)", width: `${progress * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Hint bar */}
        <div className="px-4 pb-2 text-center">
          <p className="text-xs text-white/40">
            {pathState.length === 0
              ? t.tapToStart
              : nextWp <= cfg.waypointCount
              ? `${t.nextGoal} ${nextWp}`
              : `✓ ${t.filled}!`
            }
          </p>
        </div>

        {/* Grid */}
        <div className="flex-1 flex items-center justify-center px-3">
          <div
            ref={gridContainerRef}
            onMouseDown={onGridMouseDown}
            onMouseMove={onGridMouseMove}
            onMouseUp={onGridMouseUp}
            onMouseLeave={onGridMouseUp}
            onTouchStart={onGridTouchStart}
            onTouchMove={onGridTouchMove}
            onTouchEnd={onGridTouchEnd}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cfg.gridSize}, 1fr)`,
              gap: cfg.gridSize <= 4 ? 6 : cfg.gridSize <= 5 ? 5 : 4,
              width: "100%",
              maxWidth: cfg.gridSize <= 4 ? 320 : cfg.gridSize <= 5 ? 360 : 380,
              touchAction: "none",
              userSelect: "none",
            }}
          >
            {Array.from({ length: total }, (_, i) => renderCell(i, cfg.gridSize))}
          </div>
        </div>

        {/* Controls */}
        <div className="px-4 pb-6 pt-3 flex justify-center gap-3">
          <button
            onClick={() => setPath([])}
            className="px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 bg-white/5 border border-white/10 text-white/60"
          >
            <Eraser size={14} /> {t.clearPath}
          </button>
          <button
            onClick={() => {
              const p = generatePuzzle(cfg);
              puzzleRef.current = p;
              waypointMapRef.current = new Map(p.waypoints.map((ci, i) => [ci, i + 1]));
              setPuzzle(p);
              setPath([]);
              timeLeftRef.current = cfg.timeLimit;
              setTimeLeft(cfg.timeLimit);
              stopTimer(); // must come before setting gameActiveRef = true
              gameActiveRef.current = true;
              if (cfg.timeLimit > 0) {
                timerRef.current = setInterval(() => {
                  timeLeftRef.current--;
                  setTimeLeft(timeLeftRef.current);
                  if (timeLeftRef.current <= 0) handleTimeout();
                }, 1000);
              }
            }}
            className="px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 bg-white/5 border border-white/10 text-white/60"
          >
            <RotateCcw size={14} /> {t.newPuzzle}
          </button>
        </div>

        {/* Multiplayer overlays */}
        {isMultiplayer && matchId && (
          <>
            <MultiplayerExitConfirm
              open={showExitConfirm}
              onStay={() => setShowExitConfirm(false)}
              onLeave={() => { abandonMatch(matchId); router.push("/multiplayer"); }}
            />
            <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />
          </>
        )}

        {/* Multiplayer opponent panel */}
        {isMultiplayer && (
          <MultiplayerOpponentPanel
            opponentName={opponentName}
            opponentScore={oppScore}
            opponentMood={oppMood}
            totalRounds={total}
            isVisible={screen === "playing"}
          />
        )}
      </div>
    );
  }

  // ─── LEVEL COMPLETE ───────────────────────────────────────────────────────────
  if (screen === "reward" && earnedCard) {
    const cfg = cfgRef.current;
    return (
      <RewardReveal rarity={earnedCard} game="pathbuilder" score={pathState.length} total={cfg.routeLength}
        onDone={() => setScreen("levelComplete")} />
    );
  }

  if (screen === "levelComplete") {
    const cfg = cfgRef.current;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-[#0A0A1A]">
        <motion.div
          className="w-full max-w-sm rounded-2xl p-5 sm:p-6 bg-[#12122A]"
          style={{ border: cfg.level === 10 ? "1px solid #B44DFF44" : "1px solid #00FF8844" }}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-center mb-4">
            <div className="text-3xl sm:text-4xl mb-2">{cfg.level === 10 ? "🏆" : "✅"}</div>
            <h2 className={`text-xl font-black ${cfg.level === 10 ? "text-[#B44DFF]" : "text-[#00FF88]"}`}>
              {cfg.level === 10 ? t.bossDone : t.levelDone}
            </h2>
          </div>

          <div className="flex justify-center mb-4">
            <div style={{ width: 120, height: 120 }}>
              <AvatarCompanion {...avatarProps} fixed={false} />
            </div>
          </div>

          <div className="space-y-2">
            {cfg.level < 10 && (
              <button
                onClick={() => startLevel(cfg.level + 1)}
                className="w-full py-3 rounded-xl font-bold text-black"
                style={{ background: "linear-gradient(135deg, #00FF88, #00D4FF)" }}
              >
                {t.nextLevel} →
              </button>
            )}
            <button
              onClick={() => { setMilestoneKey(k => k + 1); setScreen("expedition"); }}
              className="w-full py-3 rounded-xl font-bold text-sm text-white/60 bg-white/5 border border-white/10"
            >
              {t.expeditionMap}
            </button>
          </div>
        </motion.div>
        <MilestonePopup key={milestoneKey} />
      </div>
    );
  }

  // ─── LEVEL FAILED ─────────────────────────────────────────────────────────────
  if (screen === "levelFailed") {
    const cfg = cfgRef.current;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-[#0A0A1A]">
        <motion.div
          className="w-full max-w-sm rounded-2xl p-5 sm:p-6 bg-[#12122A] border border-[#FF2D7844]"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">⏰</div>
            <h2 className="text-xl font-black text-[#FF2D78]">{t.timeUp}</h2>
          </div>
          <div className="flex justify-center mb-4">
            <div style={{ width: 100, height: 100 }}>
              <AvatarCompanion {...avatarProps} fixed={false} />
            </div>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => startLevel(cfg.level)}
              className="w-full py-3 rounded-xl font-bold text-white"
              style={{ background: "linear-gradient(135deg, #FF2D78, #FF6B00)" }}
            >
              {t.retry}
            </button>
            <button
              onClick={() => setScreen("expedition")}
              className="w-full py-3 rounded-xl font-bold text-sm text-white/60 bg-white/5 border border-white/10"
            >
              {t.expeditionMap}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ─── MULTI WAITING ─────────────────────────────────────────────────────────
  if (screen === "multi-waiting") {
    const cfg = cfgRef.current;
    const currentScore = pathRef.current.length;
    const total = cfg.gridSize * cfg.gridSize;
    return (
      <div className="min-h-screen bg-[#0A0A1A] text-white select-none">
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        >
          <motion.div
            className="text-3xl font-black text-[#00FF88]"
            style={{ textShadow: "0 0 20px rgba(0,255,136,0.4)" }}
            initial={{ scale: 0.8 }} animate={{ scale: 1 }}
          >
            {currentScore}/{total}
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
      </div>
    );
  }

  // ─── MULTI RESULT ──────────────────────────────────────────────────────────
  if (screen === "multi-result" && oppFinalScore !== null) {
    const currentScore = pathRef.current.length;
    return (
      <MultiplayerResult
        myScore={myFinalScore !== null ? myFinalScore : currentScore}
        oppScore={oppFinalScore}
        myName={getUsername() || "???"}
        oppName={opponentName}
        onContinue={() => router.push("/multiplayer")}
      />
    );
  }

  return null;
}
