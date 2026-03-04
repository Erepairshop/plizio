"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Home, RotateCcw, Lock, Check, ChevronRight, Eraser } from "lucide-react";
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

// ─── i18n ─────────────────────────────────────────────────────────────────────
const T = {
  en: {
    title: "NUMBER PATH",
    subtitle: "10 levels · Connect numbers · Fill the grid",
    home: "Home", progress: "Progress", levelLabel: "Level", levelsOf: "levels",
    boss: "🏆 BOSS — ", done: "✓ done",
    hint: "Start at 1 → connect numbers in order → fill every cell",
    levelDone: "✅ LEVEL DONE!", bossDone: "🏆 COMPLETE!", timeUp: "⏰ TIME'S UP!",
    retry: "Retry", nextLevel: "Next Level", expeditionMap: "Expedition Map",
    newExpedition: "🔄 New Expedition", time: "TIME",
    legendaryDesc: "You earned the legendary Number Path card!",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD", noLimit: "No time limit", clearPath: "Clear", newPuzzle: "New",
    checkpoints: "checkpoints", filled: "filled", tapToStart: "Tap ① to start",
    nextGoal: "→ reach",
  },
  hu: {
    title: "SZÁMÚT",
    subtitle: "10 szint · Kösd össze a számokat · Töltsd ki a rácsot",
    home: "Főoldal", progress: "Haladás", levelLabel: "Szint", levelsOf: "szint",
    boss: "🏆 BOSS — ", done: "✓ kész",
    hint: "Kezdj az 1-nél → kösd össze sorban → töltsd ki minden cellát",
    levelDone: "✅ SZINT KÉSZ!", bossDone: "🏆 KÉSZ!", timeUp: "⏰ LEJÁRT!",
    retry: "Újra", nextLevel: "Következő szint", expeditionMap: "Expedíció térkép",
    newExpedition: "🔄 Új expedíció", time: "IDŐ",
    legendaryDesc: "Megszerezted a legendás Számút kártyát!",
    rarity: { bronze: "BRONZ", silver: "EZÜST", gold: "ARANY", legendary: "LEGENDÁS" },
    card: "KÁRTYA", noLimit: "Nincs időkorlát", clearPath: "Törlés", newPuzzle: "Új",
    checkpoints: "checkpoint", filled: "kitöltve", tapToStart: "Érintsd az ①-et",
    nextGoal: "→ célpont",
  },
  de: {
    title: "ZAHLENPFAD",
    subtitle: "10 Level · Verbinde Zahlen · Fülle das Gitter",
    home: "Startseite", progress: "Fortschritt", levelLabel: "Level", levelsOf: "Level",
    boss: "🏆 BOSS — ", done: "✓ fertig",
    hint: "Starte bei 1 → verbinde Zahlen der Reihe nach → fülle alle Zellen",
    levelDone: "✅ LEVEL GESCHAFFT!", bossDone: "🏆 FERTIG!", timeUp: "⏰ ZEIT UM!",
    retry: "Nochmal", nextLevel: "Nächstes Level", expeditionMap: "Expedition",
    newExpedition: "🔄 Neue Expedition", time: "ZEIT",
    legendaryDesc: "Du hast die legendäre Zahlenpfad-Karte erhalten!",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDÄR" },
    card: "KARTE", noLimit: "Kein Zeitlimit", clearPath: "Löschen", newPuzzle: "Neu",
    checkpoints: "Checkpoints", filled: "gefüllt", tapToStart: "Tippe ①",
    nextGoal: "→ Ziel",
  },
  ro: {
    title: "CALEA NUMERELOR",
    subtitle: "10 niveluri · Conectează numerele · Umple grila",
    home: "Acasă", progress: "Progres", levelLabel: "Nivel", levelsOf: "niveluri",
    boss: "🏆 BOSS — ", done: "✓ gata",
    hint: "Începe de la 1 → conectează numerele în ordine → umple toate celulele",
    levelDone: "✅ NIVEL TERMINAT!", bossDone: "🏆 TERMINAT!", timeUp: "⏰ TIMP EXPIRAT!",
    retry: "Din nou", nextLevel: "Nivelul următor", expeditionMap: "Hartă",
    newExpedition: "🔄 Expedíție nouă", time: "TIMP",
    legendaryDesc: "Ai câștigat cardul legendar Calea Numerelor!",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD", noLimit: "Fără limită", clearPath: "Șterge", newPuzzle: "Nou",
    checkpoints: "puncte", filled: "umplute", tapToStart: "Apasă ①",
    nextGoal: "→ obiectiv",
  },
};

// ─── Level configs ─────────────────────────────────────────────────────────────
interface NPLevel {
  level: number;
  gridSize: number;
  waypointCount: number;
  timeLimit: number; // seconds, 0 = no limit
}

const LEVELS: NPLevel[] = [
  { level: 1,  gridSize: 4, waypointCount: 4,  timeLimit: 0 },
  { level: 2,  gridSize: 4, waypointCount: 5,  timeLimit: 0 },
  { level: 3,  gridSize: 4, waypointCount: 7,  timeLimit: 0 },
  { level: 4,  gridSize: 4, waypointCount: 9,  timeLimit: 120 },
  { level: 5,  gridSize: 5, waypointCount: 5,  timeLimit: 0 },
  { level: 6,  gridSize: 5, waypointCount: 7,  timeLimit: 150 },
  { level: 7,  gridSize: 5, waypointCount: 10, timeLimit: 120 },
  { level: 8,  gridSize: 6, waypointCount: 7,  timeLimit: 180 },
  { level: 9,  gridSize: 6, waypointCount: 10, timeLimit: 150 },
  { level: 10, gridSize: 6, waypointCount: 13, timeLimit: 120 },
];

const LEVEL_BADGES = ["🔢", "🔢", "🔢", "⏱️", "🧩", "🧩", "⏱️", "🔥", "🔥", "👑"];

// ─── Puzzle generation ─────────────────────────────────────────────────────────
interface NPPuzzle {
  gridSize: number;
  solution: number[];   // cell indices forming the Hamiltonian path
  waypoints: number[];  // waypoints[i] = cell index of waypoint (i+1)
}

function warnsdorff(gridSize: number, start: number): number[] {
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
    scored.sort((a, b) => a.score - b.score || (Math.random() > 0.5 ? 1 : -1));
    visited[scored[0].n] = 1;
    path.push(scored[0].n);
  }
  return path;
}

function generateHamiltonPath(gridSize: number): number[] {
  for (let i = 0; i < 40; i++) {
    const start = Math.floor(Math.random() * gridSize * gridSize);
    const path = warnsdorff(gridSize, start);
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

function generatePuzzle(cfg: NPLevel): NPPuzzle {
  const solution = generateHamiltonPath(cfg.gridSize);
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
const SAVE_KEY = "numberpath_expedition_v1";
interface NPSave { currentLevel: number; completedLevels: number[]; }

function loadSave(): NPSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const r = localStorage.getItem(SAVE_KEY); if (r) return JSON.parse(r); } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: NPSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

type Screen = "expedition" | "playing" | "levelComplete" | "levelFailed";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

// ─── Main Component ────────────────────────────────────────────────────────────
export default function NumberPathPage() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;

  // ── Avatar ────────────────────────────────────────────────────────────────────
  const [avatarGender,  setAvatarGender]  = useState<AvatarGender>("girl");
  const [avatarSkin,    setAvatarSkin]    = useState<ReturnType<typeof getSkinDef> | null>(null);
  const [avatarFace,    setAvatarFace]    = useState<ReturnType<typeof getFaceDef> | null>(null);
  const [avatarTop,     setAvatarTop]     = useState<ReturnType<typeof getTopDef> | null>(null);
  const [avatarBottom,  setAvatarBottom]  = useState<ReturnType<typeof getBottomDef> | null>(null);
  const [avatarShoe,    setAvatarShoe]    = useState<ReturnType<typeof getShoeDef> | null>(null);
  const [avatarCape,    setAvatarCape]    = useState<ReturnType<typeof getCapeDef> | null>(null);
  const [avatarGlasses, setAvatarGlasses] = useState<ReturnType<typeof getGlassesDef> | null>(null);
  const [avatarGloves,  setAvatarGloves]  = useState<ReturnType<typeof getGloveDef> | null>(null);
  const [avatarHat,     setAvatarHat]     = useState<ReturnType<typeof getHatDef> | null>(null);
  const [avatarTrail,   setAvatarTrail]   = useState<ReturnType<typeof getTrailDef> | null>(null);
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
    const glsId  = getActive("glasses"); setAvatarGlasses(glsId ? getGlassesDef(glsId) : null);
    const glvId  = getActive("gloves");  setAvatarGloves(glvId ? getGloveDef(glvId) : null);
    const hatId  = getActiveHat();       setAvatarHat(hatId ? getHatDef(hatId) : null);
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

  // ── Game state ─────────────────────────────────────────────────────────────────
  const [puzzle,       setPuzzle]      = useState<NPPuzzle | null>(null);
  const [pathState,    setPathState]   = useState<number[]>([]);
  const [invalidFlash, setInvalidFlash] = useState<number | null>(null);
  const [timeLeft,     setTimeLeft]    = useState(0);
  const [earnedCard,   setEarnedCard]  = useState<CardRarity | null>(null);

  // Refs for stable access in event handlers
  const pathRef        = useRef<number[]>([]);
  const puzzleRef      = useRef<NPPuzzle | null>(null);
  const waypointMapRef = useRef<Map<number, number>>(new Map());
  const cfgRef         = useRef<NPLevel>(LEVELS[0]);
  const timerRef       = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef    = useRef(0);
  const gameActiveRef  = useRef(false);
  const isPointerDown  = useRef(false);

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
    saveCard({ id: generateCardId(), game: "numberpath", rarity, score: finalPath.length, total: cfg.gridSize ** 2, date: new Date().toISOString() });
    setEarnedCard(rarity);
    incrementTotalGames();
    triggerAvatar(cfg.level === 10 ? "victory" : "happy", 3000, cfg.level === 10 ? "victory" : "happy");
    const newSave: NPSave = {
      currentLevel: Math.min(10, Math.max(save.currentLevel, cfg.level + 1)),
      completedLevels: [...new Set([...save.completedLevels, cfg.level])],
    };
    setSave(newSave);
    writeSave(newSave);
    setScreen("levelComplete");
  }

  function handleTimeout() {
    stopTimer();
    triggerAvatar("disappointed", 3000);
    setScreen("levelFailed");
  }

  function startLevel(levelNum: number) {
    const cfg = LEVELS[levelNum - 1];
    cfgRef.current = cfg;
    setActiveLevel(levelNum);
    const p = generatePuzzle(cfg);
    puzzleRef.current = p;
    waypointMapRef.current = new Map(p.waypoints.map((cellIdx, i) => [cellIdx, i + 1]));
    setPuzzle(p);
    setPath([]);
    setInvalidFlash(null);
    setEarnedCard(null);
    timeLeftRef.current = cfg.timeLimit;
    setTimeLeft(cfg.timeLimit);
    gameActiveRef.current = true;
    stopTimer();
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

  const handleCellInteract = useCallback((idx: number) => {
    if (!gameActiveRef.current || !puzzleRef.current) return;
    const puzzle = puzzleRef.current;
    const currentPath = pathRef.current;

    // Already in path → backtrack to that cell
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

    // Win: all cells filled
    if (newPath.length === puzzle.gridSize * puzzle.gridSize) {
      handleWin(newPath, timeLeftRef.current);
    }
  }, []); // eslint-disable-line

  // Pointer events
  function onCellPointerDown(e: React.PointerEvent, idx: number) {
    e.preventDefault();
    isPointerDown.current = true;
    handleCellInteract(idx);
  }

  function onCellPointerEnter(e: React.PointerEvent, idx: number) {
    if (!isPointerDown.current) return;
    handleCellInteract(idx);
  }

  function onPointerUp() { isPointerDown.current = false; }

  useEffect(() => {
    window.addEventListener("pointerup", onPointerUp);
    return () => window.removeEventListener("pointerup", onPointerUp);
  }, []);

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
        onPointerDown={(e) => onCellPointerDown(e, cellIdx)}
        onPointerEnter={(e) => onCellPointerEnter(e, cellIdx)}
        className="relative select-none cursor-pointer rounded-lg flex items-center justify-center touch-none transition-colors duration-75"
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
    gender: avatarGender, skin: avatarSkin, face: avatarFace,
    top: avatarTop, bottom: avatarBottom, shoe: avatarShoe,
    cape: avatarCape, glasses: avatarGlasses, gloves: avatarGloves,
    hat: avatarHat, trail: avatarTrail,
  };

  // ─── EXPEDITION SCREEN ────────────────────────────────────────────────────────
  if (screen === "expedition") {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#0A0A1A" }}>
        {/* Header */}
        <div className="px-4 pt-6 pb-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium" style={{ color: "#00D4FF" }}>
            <Home size={16} /> {t.home}
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-black tracking-widest" style={{ color: "#00D4FF" }}>{t.title}</h1>
            <p className="text-xs" style={{ color: "#555" }}>{t.subtitle}</p>
          </div>
          <div className="w-16" />
        </div>

        {/* Avatar */}
        <div className="flex justify-center py-2">
          <div style={{ width: 80, height: 80 }}>
            <AvatarCompanion {...avatarProps} fixed={false} mood="idle" />
          </div>
        </div>

        {/* Progress */}
        <div className="px-6 pb-4">
          <div className="flex justify-between text-xs mb-1" style={{ color: "#555" }}>
            <span>{t.progress}</span>
            <span>{save.completedLevels.length} / 10 {t.levelsOf}</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#12122A" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #00D4FF, #B44DFF)" }}
              initial={{ width: 0 }}
              animate={{ width: `${save.completedLevels.length * 10}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        {/* Level list */}
        <div className="px-4 space-y-2 pb-8">
          {LEVELS.map((lvl) => {
            const completed = save.completedLevels.includes(lvl.level);
            const locked = lvl.level > save.currentLevel;
            const current = lvl.level === save.currentLevel;
            return (
              <motion.button
                key={lvl.level}
                onClick={() => !locked && startLevel(lvl.level)}
                disabled={locked}
                className="w-full rounded-xl px-4 py-3 flex items-center justify-between"
                style={{
                  backgroundColor: locked ? "#0d0d1a" : current ? "#00D4FF15" : "#12122A",
                  border: locked ? "1px solid #1a1a2e" : current ? "1px solid #00D4FF" : "1px solid #1e1e3a",
                  opacity: locked ? 0.5 : 1,
                }}
                whileHover={!locked ? { scale: 1.01 } : {}}
                whileTap={!locked ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{LEVEL_BADGES[lvl.level - 1]}</span>
                  <div className="text-left">
                    <div className="text-sm font-bold" style={{ color: locked ? "#333" : current ? "#00D4FF" : "#eee" }}>
                      {lvl.level === 10 ? `${t.boss}${t.levelLabel} ${lvl.level}` : `${t.levelLabel} ${lvl.level}`}
                    </div>
                    <div className="text-xs" style={{ color: "#555" }}>
                      {lvl.gridSize}×{lvl.gridSize} · {lvl.waypointCount} {t.checkpoints}
                      {lvl.timeLimit > 0 ? ` · ${lvl.timeLimit}s` : ` · ${t.noLimit}`}
                    </div>
                  </div>
                </div>
                <div>
                  {locked ? <Lock size={16} color="#333" /> : completed ? <Check size={16} color="#00FF88" /> : <ChevronRight size={16} color="#00D4FF" />}
                </div>
              </motion.button>
            );
          })}
        </div>

        {save.completedLevels.length === 10 && (
          <div className="px-4 pb-8">
            <button
              onClick={() => { const f = { currentLevel: 1, completedLevels: [] }; setSave(f); writeSave(f); }}
              className="w-full py-3 rounded-xl text-sm font-bold"
              style={{ backgroundColor: "#12122A", color: "#555", border: "1px solid #1e1e3a" }}
            >
              {t.newExpedition}
            </button>
          </div>
        )}
        <MilestonePopup key={milestoneKey} />
      </div>
    );
  }

  // ─── PLAYING SCREEN ───────────────────────────────────────────────────────────
  if (screen === "playing" && puzzle) {
    const cfg = cfgRef.current;
    const total = cfg.gridSize * cfg.gridSize;
    const nextWp = getNextWaypointFromPath(pathState);
    const progress = pathState.length / total;

    return (
      <div
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "#0A0A1A" }}
        onPointerUp={onPointerUp}
      >
        {/* Header */}
        <div className="px-4 pt-4 pb-1 flex items-center justify-between flex-shrink-0">
          <button onClick={() => { stopTimer(); setScreen("expedition"); }} style={{ color: "#00D4FF" }}>
            <Home size={20} />
          </button>
          <div className="text-center">
            <div className="text-xs font-bold" style={{ color: "#00D4FF" }}>
              {t.levelLabel} {cfg.level} · {cfg.gridSize}×{cfg.gridSize}
            </div>
            <div className="text-xs" style={{ color: "#555" }}>
              {pathState.length}/{total} {t.filled}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {cfg.timeLimit > 0 && (
              <div className="font-mono font-bold text-sm" style={{ color: timeLeft < 20 ? "#FF2D78" : "#00D4FF" }}>
                {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
              </div>
            )}
            <div style={{ width: 36, height: 36 }}>
              <AvatarCompanion {...avatarProps} fixed={false} mood={avatarMood} jumpTrigger={avatarJump} />
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-4 pb-2">
          <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#12122A" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #00D4FF, #B44DFF)", width: `${progress * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Hint bar */}
        <div className="px-4 pb-2 text-center">
          <p className="text-xs" style={{ color: "#555" }}>
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
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cfg.gridSize}, 1fr)`,
              gap: cfg.gridSize <= 4 ? 6 : cfg.gridSize <= 5 ? 5 : 4,
              width: "100%",
              maxWidth: cfg.gridSize <= 4 ? 320 : cfg.gridSize <= 5 ? 360 : 380,
              touchAction: "none",
            }}
          >
            {Array.from({ length: total }, (_, i) => renderCell(i, cfg.gridSize))}
          </div>
        </div>

        {/* Controls */}
        <div className="px-4 pb-6 pt-3 flex justify-center gap-3">
          <button
            onClick={() => setPath([])}
            className="px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2"
            style={{ backgroundColor: "#12122A", border: "1px solid #1e1e3a", color: "#666" }}
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
              gameActiveRef.current = true;
              stopTimer();
              if (cfg.timeLimit > 0) {
                timerRef.current = setInterval(() => {
                  timeLeftRef.current--;
                  setTimeLeft(timeLeftRef.current);
                  if (timeLeftRef.current <= 0) handleTimeout();
                }, 1000);
              }
            }}
            className="px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2"
            style={{ backgroundColor: "#12122A", border: "1px solid #1e1e3a", color: "#666" }}
          >
            <RotateCcw size={14} /> {t.newPuzzle}
          </button>
        </div>
      </div>
    );
  }

  // ─── LEVEL COMPLETE ───────────────────────────────────────────────────────────
  if (screen === "levelComplete") {
    const cfg = cfgRef.current;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: "#0A0A1A" }}>
        <motion.div
          className="w-full max-w-sm rounded-2xl p-6"
          style={{ backgroundColor: "#12122A", border: "1px solid #00D4FF44" }}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">{cfg.level === 10 ? "🏆" : "✅"}</div>
            <h2 className="text-xl font-black" style={{ color: "#00D4FF" }}>
              {cfg.level === 10 ? t.bossDone : t.levelDone}
            </h2>
          </div>

          <div className="flex justify-center mb-4">
            <div style={{ width: 120, height: 120 }}>
              <AvatarCompanion {...avatarProps} fixed={false} mood={cfg.level === 10 ? "victory" : "happy"} jumpTrigger={avatarJump} />
            </div>
          </div>

          {earnedCard && (
            <motion.div
              className="rounded-xl p-4 mb-4 text-center"
              style={{ backgroundColor: "#0A0A1A", border: `2px solid ${RARITY_COLORS[earnedCard]}`, boxShadow: `0 0 16px ${RARITY_COLORS[earnedCard]}44` }}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring" }}
            >
              <div className="text-2xl mb-1">🃏</div>
              <div className="font-black text-sm" style={{ color: RARITY_COLORS[earnedCard] }}>
                {t.rarity[earnedCard]} {t.card}
              </div>
              {earnedCard === "legendary" && (
                <p className="text-xs mt-1" style={{ color: "#555" }}>{t.legendaryDesc}</p>
              )}
            </motion.div>
          )}

          <div className="space-y-2">
            {cfg.level < 10 && (
              <button
                onClick={() => startLevel(cfg.level + 1)}
                className="w-full py-3 rounded-xl font-bold text-white"
                style={{ background: "linear-gradient(135deg, #00D4FF, #B44DFF)" }}
              >
                {t.nextLevel} →
              </button>
            )}
            <button
              onClick={() => { setMilestoneKey(k => k + 1); setScreen("expedition"); }}
              className="w-full py-3 rounded-xl font-bold text-sm"
              style={{ backgroundColor: "#0A0A1A", border: "1px solid #1e1e3a", color: "#555" }}
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
      <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: "#0A0A1A" }}>
        <motion.div
          className="w-full max-w-sm rounded-2xl p-6"
          style={{ backgroundColor: "#12122A", border: "1px solid #FF2D7844" }}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">⏰</div>
            <h2 className="text-xl font-black" style={{ color: "#FF2D78" }}>{t.timeUp}</h2>
          </div>
          <div className="flex justify-center mb-4">
            <div style={{ width: 100, height: 100 }}>
              <AvatarCompanion {...avatarProps} fixed={false} mood="disappointed" />
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
              className="w-full py-3 rounded-xl font-bold text-sm"
              style={{ backgroundColor: "#0A0A1A", border: "1px solid #1e1e3a", color: "#555" }}
            >
              {t.expeditionMap}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
