"use client";

import { useEffect, useMemo, useRef, useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Check, GitBranch, HelpCircle, Home, Lock, RotateCcw } from "lucide-react";
import MilestonePopup from "@/components/MilestonePopup";
import RewardReveal from "@/components/RewardReveal";
import AvatarCompanion from "@/components/AvatarCompanion";
import { saveCard, generateCardId, type CardRarity } from "@/lib/cards";
import { incrementTotalGames } from "@/lib/milestones";
import { getGender } from "@/lib/gender";
import type { AvatarGender } from "@/lib/gender";
import { getActiveSkin, getSkinDef } from "@/lib/skins";
import { getActiveFace, getFaceDef } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import { useLang } from "@/components/LanguageProvider";
import { submitScore, submitMixRoundScore, pollMixRound, abandonMatch } from "@/lib/multiplayer";
import MultiplayerResult from "@/components/MultiplayerResult";
import MultiplayerExitConfirm from "@/components/MultiplayerExitConfirm";
import MultiplayerAbandonNotice from "@/components/MultiplayerAbandonNotice";
import { getUsername } from "@/lib/username";
import { supabase } from "@/lib/supabase/client";

type Side = "top" | "right" | "bottom" | "left";
type PieceKind = "source" | "sink" | "straight" | "corner";
type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "multi-waiting" | "multi-result";
type AvatarMood = "idle" | "focused" | "happy" | "victory" | "surprised" | "confused" | "laughing" | "disappointed";

const SIDE_ORDER: Side[] = ["top", "right", "bottom", "left"];
const SIDE_DELTAS: Record<Side, { dr: number; dc: number }> = {
  top: { dr: -1, dc: 0 },
  right: { dr: 0, dc: 1 },
  bottom: { dr: 1, dc: 0 },
  left: { dr: 0, dc: -1 },
};
const OPPOSITE: Record<Side, Side> = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
};

const T = {
  en: {
    title: "PIPE FLOW",
    subtitle: "10 levels · Rotate pipes · Connect source to sink",
    home: "Home",
    progress: "Progress",
    levelLabel: "Level",
    levelsOf: "levels",
    done: "✓ done",
    howToPlay: "How to play?",
    howStep1: "Rotate a pipe tile until it fits the path.",
    howStep2: "Keep the source connected to the sink.",
    howStep3: "Every tile must belong to one continuous flow.",
    hint: "Tap a tile to rotate it 90°. Solve the full pipe chain!",
    hintPowerup: "Hint",
    retry: "Retry",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 COMPLETE!",
    boss: "BOSS",
    nextLevel: "Next Level",
    expeditionMap: "Expedition Map",
    newExpedition: "🔄 New Expedition",
    connected: "connected",
    rotation: "ROTATIONS",
    par: "PAR",
    source: "SOURCE",
    sink: "SINK",
    legendaryDesc: "You earned the legendary Pipe Flow card!",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
  },
  hu: {
    title: "CSŐÁRAMLÁS",
    subtitle: "10 szint · Fordítsd a csöveket · Kösd össze a forrást és a célt",
    home: "Főoldal",
    progress: "Haladás",
    levelLabel: "Szint",
    levelsOf: "szint",
    done: "✓ kész",
    howToPlay: "Hogyan játssz?",
    howStep1: "Fordítsd a csövet, amíg illeszkedik az útvonalba.",
    howStep2: "Tartsd összekötve a forrást a céllal.",
    howStep3: "Minden mezőnek egyetlen folyó áramlás része kell legyen.",
    hint: "Érints meg egy csövet, és 90°-kal elfordul. Rakd össze a teljes vezetéket!",
    hintPowerup: "Tipp",
    retry: "Újra",
    levelDone: "✅ SZINT TELJESÍTVE!",
    bossDone: "🏆 KÜLDETÉS KÉSZ!",
    boss: "BOSS",
    nextLevel: "Következő szint",
    expeditionMap: "Expedíció térkép",
    newExpedition: "🔄 Új expedíció",
    connected: "összekötve",
    rotation: "FORDÍTÁS",
    par: "PAR",
    source: "FORRÁS",
    sink: "CÉL",
    legendaryDesc: "Megszerezted a legendás Csőáramlás kártyát!",
    rarity: { bronze: "BRONZ", silver: "EZÜST", gold: "ARANY", legendary: "LEGENDÁS" },
  },
  de: {
    title: "ROHRFLUSS",
    subtitle: "10 Level · Rohre drehen · Quelle und Ziel verbinden",
    home: "Start",
    progress: "Fortschritt",
    levelLabel: "Level",
    levelsOf: "Level",
    done: "✓ fertig",
    howToPlay: "Wie spielt man?",
    howStep1: "Drehe ein Rohr, bis es zum Weg passt.",
    howStep2: "Verbinde die Quelle mit dem Ziel.",
    howStep3: "Jede Kachel muss Teil eines einzigen Flusses sein.",
    hint: "Tippe ein Rohr an, um es um 90° zu drehen. Baue die komplette Leitung!",
    hintPowerup: "Hinweis",
    retry: "Nochmal",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 FERTIG!",
    boss: "BOSS",
    nextLevel: "Nächstes Level",
    expeditionMap: "Expedition",
    newExpedition: "🔄 Neue Expedition",
    connected: "verbunden",
    rotation: "DREHUNGEN",
    par: "PAR",
    source: "QUELLE",
    sink: "ZIEL",
    legendaryDesc: "Du hast die legendäre Rohrfluss-Karte erhalten!",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDÄR" },
  },
  ro: {
    title: "FLUXUL CONDUCTELOR",
    subtitle: "10 niveluri · Rotește țevile · Conectează sursa și ținta",
    home: "Acasă",
    progress: "Progres",
    levelLabel: "Nivel",
    levelsOf: "niveluri",
    done: "✓ gata",
    howToPlay: "Cum se joacă?",
    howStep1: "Rotește o țeavă până se potrivește cu traseul.",
    howStep2: "Menține sursa conectată la țintă.",
    howStep3: "Toate piesele trebuie să facă parte dintr-un singur flux.",
    hint: "Apasă o țeavă ca să o rotești cu 90°. Construiește întregul circuit!",
    hintPowerup: "Indiciu",
    retry: "Din nou",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 TERMINAT!",
    boss: "BOSS",
    nextLevel: "Nivelul următor",
    expeditionMap: "Hartă",
    newExpedition: "🔄 Expediție nouă",
    connected: "conectate",
    rotation: "ROTIRI",
    par: "PAR",
    source: "SURSĂ",
    sink: "ȚINTĂ",
    legendaryDesc: "Ai câștigat cardul legendar Fluxul Conductelor!",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
  },
} as const;

interface PipeLevel {
  level: number;
  gridSize: number;
  parMoves: number;
}

const LEVELS: PipeLevel[] = [
  { level: 1, gridSize: 3, parMoves: 4 },
  { level: 2, gridSize: 3, parMoves: 5 },
  { level: 3, gridSize: 4, parMoves: 8 },
  { level: 4, gridSize: 4, parMoves: 10 },
  { level: 5, gridSize: 4, parMoves: 12 },
  { level: 6, gridSize: 5, parMoves: 14 },
  { level: 7, gridSize: 5, parMoves: 16 },
  { level: 8, gridSize: 5, parMoves: 18 },
  { level: 9, gridSize: 6, parMoves: 20 },
  { level: 10, gridSize: 6, parMoves: 24 },
];

const LEVEL_BADGES = ["💧", "💧", "🔧", "🔧", "⚙️", "⚙️", "🚰", "🚰", "✨", "👑"];

interface PipeTile {
  id: number;
  row: number;
  col: number;
  kind: PieceKind;
  rotation: number;
  solutionRotation: number;
}

interface LOSave {
  currentLevel: number;
  completedLevels: number[];
}

const SAVE_KEY = "pipeflow_expedition_v1";

function loadSave(): LOSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return { currentLevel: 1, completedLevels: [] };
}

function writeSave(save: LOSave) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

function seededRng(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  return () => {
    h ^= h << 13;
    h ^= h >> 17;
    h ^= h << 5;
    return (h >>> 0) / 4294967296;
  };
}

function sideToRotation(side: Side): number {
  return SIDE_ORDER.indexOf(side);
}

function normalizedRotation(rot: number): number {
  return ((rot % 4) + 4) % 4;
}

function pathToDirections(path: number[], gridSize: number): Side[] {
  const dirs: Side[] = [];
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i];
    const b = path[i + 1];
    const ar = Math.floor(a / gridSize);
    const ac = a % gridSize;
    const br = Math.floor(b / gridSize);
    const bc = b % gridSize;
    if (br === ar - 1 && bc === ac) dirs.push("top");
    else if (br === ar + 1 && bc === ac) dirs.push("bottom");
    else if (br === ar && bc === ac + 1) dirs.push("right");
    else if (br === ar && bc === ac - 1) dirs.push("left");
  }
  return dirs;
}

function generateSnakePath(gridSize: number, rng: () => number): number[] {
  const mode = Math.floor(rng() * 4);
  const path: number[] = [];

  if (mode === 0) {
    for (let r = 0; r < gridSize; r++) {
      const cols = r % 2 === 0 ? [...Array(gridSize).keys()] : [...Array(gridSize).keys()].reverse();
      for (const c of cols) path.push(r * gridSize + c);
    }
  } else if (mode === 1) {
    for (let r = gridSize - 1; r >= 0; r--) {
      const cols = (gridSize - 1 - r) % 2 === 0 ? [...Array(gridSize).keys()].reverse() : [...Array(gridSize).keys()];
      for (const c of cols) path.push(r * gridSize + c);
    }
  } else if (mode === 2) {
    for (let c = 0; c < gridSize; c++) {
      const rows = c % 2 === 0 ? [...Array(gridSize).keys()] : [...Array(gridSize).keys()].reverse();
      for (const r of rows) path.push(r * gridSize + c);
    }
  } else {
    for (let c = gridSize - 1; c >= 0; c--) {
      const rows = (gridSize - 1 - c) % 2 === 0 ? [...Array(gridSize).keys()].reverse() : [...Array(gridSize).keys()];
      for (const r of rows) path.push(r * gridSize + c);
    }
  }

  return path;
}

function rotationForKind(kind: PieceKind, sides: Side[]): number {
  if (kind === "source" || kind === "sink") return sideToRotation(sides[0]);
  if (kind === "straight") {
    const pair = sides.slice().sort().join(",");
    if (pair === "bottom,top") return 0;
    if (pair === "left,right") return 1;
  }
  const pair = sides.slice().sort().join(",");
  switch (pair) {
    case "right,top": return 0;
    case "bottom,right": return 1;
    case "bottom,left": return 2;
    case "left,top": return 3;
    default: return 0;
  }
}

function buildTile(row: number, col: number, kind: PieceKind, sides: Side[], rng: () => number): PipeTile {
  const solutionRotation = rotationForKind(kind, sides);
  const scramble = 1 + Math.floor(rng() * 3);
  return {
    id: row * 100 + col,
    row,
    col,
    kind,
    solutionRotation,
    rotation: normalizedRotation(solutionRotation + scramble),
  };
}

function generatePuzzle(cfg: PipeLevel, rng: () => number): PipeTile[] {
  const path = generateSnakePath(cfg.gridSize, rng);
  const dirs = pathToDirections(path, cfg.gridSize);
  const tiles: PipeTile[] = [];

  for (let i = 0; i < path.length; i++) {
    const cell = path[i];
    const row = Math.floor(cell / cfg.gridSize);
    const col = cell % cfg.gridSize;
    if (i === 0) {
      tiles.push(buildTile(row, col, "source", [dirs[0]], rng));
      continue;
    }
    if (i === path.length - 1) {
      tiles.push(buildTile(row, col, "sink", [OPPOSITE[dirs[dirs.length - 1]]], rng));
      continue;
    }
    const prevDir = dirs[i - 1];
    const nextDir = dirs[i];
    const prevSide = OPPOSITE[prevDir];
    const nextSide = nextDir;
    const isStraight = (prevSide === "top" && nextSide === "bottom") || (prevSide === "bottom" && nextSide === "top") || (prevSide === "left" && nextSide === "right") || (prevSide === "right" && nextSide === "left");
    const sides = isStraight ? [prevSide, nextSide] : [prevSide, nextSide];
    tiles.push(buildTile(row, col, isStraight ? "straight" : "corner", sides, rng));
  }

  return tiles;
}

function getTileSides(kind: PieceKind, rotation: number): Side[] {
  const rot = normalizedRotation(rotation);
  if (kind === "source" || kind === "sink") return [SIDE_ORDER[rot]];
  if (kind === "straight") return rot % 2 === 0 ? ["top", "bottom"] : ["left", "right"];
  switch (rot) {
    case 0: return ["top", "right"];
    case 1: return ["right", "bottom"];
    case 2: return ["bottom", "left"];
    default: return ["left", "top"];
  }
}

function analyzeFlow(tiles: PipeTile[], gridSize: number) {
  const byPos = new Map<string, PipeTile>();
  for (const tile of tiles) byPos.set(`${tile.row},${tile.col}`, tile);

  const source = tiles.find(t => t.kind === "source");
  const sink = tiles.find(t => t.kind === "sink");
  if (!source || !sink) return { connectedCount: 0, solved: false };

  const visited = new Set<string>();
  const queue: PipeTile[] = [source];

  while (queue.length) {
    const tile = queue.shift()!;
    const key = `${tile.row},${tile.col}`;
    if (visited.has(key)) continue;
    visited.add(key);

    const sides = getTileSides(tile.kind, tile.rotation);
    for (const side of sides) {
      const delta = SIDE_DELTAS[side];
      const nr = tile.row + delta.dr;
      const nc = tile.col + delta.dc;
      if (nr < 0 || nc < 0 || nr >= gridSize || nc >= gridSize) continue;
      const next = byPos.get(`${nr},${nc}`);
      if (!next) continue;
      const nextSides = getTileSides(next.kind, next.rotation);
      if (nextSides.includes(OPPOSITE[side])) {
        queue.push(next);
      }
    }
  }

  return {
    connectedCount: visited.size,
    solved: visited.has(`${sink.row},${sink.col}`) && visited.size === tiles.length,
  };
}

function countRequiredRotations(tiles: PipeTile[]) {
  return tiles.reduce((sum, tile) => sum + normalizedRotation(tile.solutionRotation - tile.rotation), 0);
}

function calcRarity(rotations: number, par: number, level: number): CardRarity {
  if (level === 10) return "legendary";
  if (rotations <= par) return "gold";
  if (rotations <= par + Math.max(2, Math.ceil(par * 0.35))) return "silver";
  return "bronze";
}

function calcScore(rotations: number, par: number, hintsUsed: number) {
  const total = Math.max(12, par * 2);
  const extraRotations = Math.max(0, rotations - par);
  const score = Math.max(1, total - extraRotations * 2 - hintsUsed * 2);
  return { score, total };
}

function PipeTileView({
  tile,
  active,
}: {
  tile: PipeTile;
  active: boolean;
}) {
  const sides = getTileSides(tile.kind, tile.rotation);
  const solved = tile.rotation === tile.solutionRotation;
  const accent = tile.kind === "source"
    ? "#00FF88"
    : tile.kind === "sink"
      ? "#FFD700"
      : solved ? "#60A5FA" : "#E5E7EB";
  const bg = tile.kind === "source" ? "rgba(0,255,136,0.08)" : tile.kind === "sink" ? "rgba(255,215,0,0.08)" : active ? "rgba(96,165,250,0.12)" : "rgba(255,255,255,0.03)";

  const lineStyle = {
    stroke: accent,
    strokeWidth: 14,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    filter: `drop-shadow(0 0 6px ${accent}55)`,
  };

  return (
    <motion.div
      className="relative aspect-square rounded-2xl border overflow-hidden"
      style={{
        background: bg,
        borderColor: active ? "rgba(96,165,250,0.5)" : "rgba(255,255,255,0.08)",
        boxShadow: active ? "0 0 24px rgba(96,165,250,0.25)" : "none",
      }}
      whileTap={{ scale: 0.94 }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        <circle cx="50" cy="50" r="30" fill="rgba(255,255,255,0.02)" />
        {sides.includes("top") && <line x1="50" y1="50" x2="50" y2="12" {...lineStyle} />}
        {sides.includes("right") && <line x1="50" y1="50" x2="88" y2="50" {...lineStyle} />}
        {sides.includes("bottom") && <line x1="50" y1="50" x2="50" y2="88" {...lineStyle} />}
        {sides.includes("left") && <line x1="50" y1="50" x2="12" y2="50" {...lineStyle} />}

        {tile.kind === "source" && (
          <circle cx="50" cy="50" r="10" fill="#00FF88" stroke="#0A0A1A" strokeWidth="4" />
        )}
        {tile.kind === "sink" && (
          <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="#FFD700" stroke="#0A0A1A" strokeWidth="4" />
        )}
      </svg>
      {!solved && tile.kind !== "source" && tile.kind !== "sink" && (
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white/25">↻</div>
      )}
    </motion.div>
  );
}

function PipeFlowPage() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const router = useRouter();
  const searchParams = useSearchParams();
  const matchId = searchParams.get("match");
  const seed = searchParams.get("seed");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const urlLevel = searchParams.get("level");
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!mixround;
  const myName = getUsername() || "You";

  const [save, setSave] = useState<LOSave>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [tiles, setTiles] = useState<PipeTile[]>([]);
  const [moves, setMoves] = useState(0);
  const [targetMoves, setTargetMoves] = useState(0);
  const [connectedCount, setConnectedCount] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [milestoneKey, setMilestoneKey] = useState(0);
  const [hintedTile, setHintedTile] = useState<number | null>(null);
  const [hintsLeft, setHintsLeft] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

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

  const saveRef = useRef(save);
  const tilesRef = useRef<PipeTile[]>([]);
  const gameActiveRef = useRef(false);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const avatarTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cfgRef = useRef<PipeLevel>(LEVELS[0]);
  const targetMovesRef = useRef(0);
  const autoStartRef = useRef(false);

  useEffect(() => {
    saveRef.current = save;
  }, [save]);

  useEffect(() => {
    setSave(loadSave());
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

  useEffect(() => {
    if (!isMultiplayer || !matchId || autoStartRef.current) return;
    autoStartRef.current = true;
    const parsed = parseInt(urlLevel || "0", 10);
    const levelNum = Number.isFinite(parsed) && parsed > 0 ? Math.min(LEVELS.length, Math.max(1, parsed)) : Math.min(LEVELS.length, Math.max(1, saveRef.current.currentLevel || 1));
    startLevel(levelNum);
  }, [isMultiplayer, matchId, urlLevel]);

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

  function stopGame() {
    gameActiveRef.current = false;
  }

  function startLevel(levelNum: number) {
    const cfg = LEVELS[levelNum - 1];
    cfgRef.current = cfg;
    setActiveLevel(levelNum);
    setScreen("playing");
    setEarnedCard(null);
    setMoves(0);
    setHintedTile(null);
    setHintsLeft(cfg.level >= 3 ? 1 : 0);
    triggerAvatar("focused", 3500);

    const rng = seed ? seededRng(`pipeflow-${seed}-${levelNum}`) : seededRng(`pipeflow-${levelNum}-${Date.now()}`);
    const newTiles = generatePuzzle(cfg, rng);
    const optimalRotations = countRequiredRotations(newTiles);
    tilesRef.current = newTiles;
    targetMovesRef.current = optimalRotations;
    setTiles(newTiles);
    setTargetMoves(optimalRotations);
    setConnectedCount(analyzeFlow(newTiles, cfg.gridSize).connectedCount);
    gameActiveRef.current = true;
  }

  function handleWin(finalMoves: number) {
    stopGame();
    const cfg = cfgRef.current;
    const par = targetMovesRef.current || cfg.parMoves;
    const hintsUsed = cfg.level >= 3 ? Math.max(0, 1 - hintsLeft) : 0;
    const rarity = calcRarity(finalMoves, par, cfg.level);
    const { score, total } = calcScore(finalMoves, par, hintsUsed);
    saveCard({
      id: generateCardId(),
      game: "pipeflow",
      rarity,
      score,
      total,
      date: new Date().toISOString(),
    });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);
    incrementTotalGames();
    triggerAvatar(cfg.level === 10 ? "victory" : "happy", 2500, cfg.level === 10 ? "victory" : "happy");

    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      setMyFinalScore(score);
      if (isMix) {
        submitMixRoundScore(matchId, score, playerNum === "1").then(() => setScreen("multi-waiting"));
      } else {
        submitScore(matchId, score, playerNum === "1").then(() => setScreen("multi-waiting"));
      }
      return;
    }

    const currentSave = saveRef.current;
    const nextSave: LOSave = {
      currentLevel: Math.min(10, Math.max(currentSave.currentLevel, cfg.level + 1)),
      completedLevels: [...new Set([...currentSave.completedLevels, cfg.level])],
    };
    setSave(nextSave);
    writeSave(nextSave);
    setScreen("reward");
  }

  function rotateTile(tileId: number) {
    if (!gameActiveRef.current) return;
    const current = tilesRef.current;
    const next = current.map((tile) => tile.id === tileId ? { ...tile, rotation: normalizedRotation(tile.rotation + 1) } : tile);
    tilesRef.current = next;
    setTiles(next);
    const result = analyzeFlow(next, cfgRef.current.gridSize);
    setConnectedCount(result.connectedCount);
    setMoves(m => m + 1);
    if (hintedTile === tileId) setHintedTile(null);
    if (result.solved) handleWin(moves + 1);
  }

  function useHint() {
    if (hintsLeft <= 0 || !gameActiveRef.current) return;
    const wrongTile = tilesRef.current.find(t => t.rotation !== t.solutionRotation && t.kind !== "source" && t.kind !== "sink") || tilesRef.current.find(t => t.rotation !== t.solutionRotation);
    if (!wrongTile) return;
    setHintedTile(wrongTile.id);
    setHintsLeft(v => Math.max(0, v - 1));
    if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    hintTimerRef.current = setTimeout(() => setHintedTile(null), 3000);
  }

  useEffect(() => {
    if (screen !== "multi-waiting" || !isMultiplayer || !matchId) return;
    const isP1 = playerNum === "1";

    const checkMatch = async () => {
      if (isMix) {
        const result = await pollMixRound(matchId, parseInt(mixround || "1", 10), isP1, opponentName);
        if (result.action === "finished") {
          setMyFinalScore(result.myWins);
          setOppFinalScore(result.oppWins);
          setScreen("multi-result");
          return true;
        }
        if (result.action === "next") {
          router.push(result.url);
          return true;
        }
        return false;
      }

      const { data } = await supabase.from("multiplayer_matches").select("*").eq("id", matchId).single();
      if (!data) return false;
      const oppDone = isP1 ? data.player2_done : data.player1_done;
      const oppScore = isP1 ? data.player2_score : data.player1_score;
      const myScore = isP1 ? data.player1_score : data.player2_score;
      if (oppDone && oppScore !== null && myScore !== null) {
        setMyFinalScore(myScore);
        setOppFinalScore(oppScore);
        setScreen("multi-result");
        return true;
      }
      return false;
    };

    checkMatch();
    const interval = setInterval(async () => { if (await checkMatch()) clearInterval(interval); }, 2000);
    return () => clearInterval(interval);
  }, [screen, isMultiplayer, matchId, isMix, playerNum, router, opponentName, mixround]);

  const cfg = LEVELS[activeLevel - 1];
  const progressCount = save.completedLevels.length;
  const allDone = progressCount === LEVELS.length;
  const solutionState = useMemo(() => analyzeFlow(tiles, cfg.gridSize), [tiles, cfg.gridSize]);
  const boardTiles = useMemo(() => [...tiles].sort((a, b) => a.row - b.row || a.col - b.col), [tiles]);

  useEffect(() => {
    return () => {
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
      if (avatarTimerRef.current) clearTimeout(avatarTimerRef.current);
    };
  }, []);

  if (screen === "expedition") {
    return (
      <main className="min-h-screen bg-[#0A0A1A] text-white overflow-hidden">
        <div className="flex min-h-screen flex-col pb-24">
          <div className="flex items-center justify-between px-4 pt-4 pb-2">
            <Link href="/" className="text-white/70 text-sm font-medium">
              {t.home}
            </Link>
            <div className="text-white/60 text-xs">{progressCount}/10 {t.levelsOf}</div>
          </div>

          <div className="px-4 text-center pb-3">
            <div className="mb-2 flex justify-center">
              <GitBranch size={18} className="text-[#22C55E]" />
            </div>
            <h1 className="text-2xl font-black tracking-wider text-[#22C55E] drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]">{t.title}</h1>
            <p className="text-white/60 text-xs mt-1">{t.subtitle}</p>
          </div>

          <div className="flex justify-center mb-3">
            <motion.button
              onClick={() => setShowHelp(v => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium"
              whileTap={{ scale: 0.95 }}
            >
              <HelpCircle size={13} /> {t.howToPlay}
            </motion.button>
          </div>

          <div className="flex justify-center mb-4">
            <motion.div className="w-20 h-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <AvatarCompanion fixed={false} mood={avatarMood} jumpTrigger={avatarJump} {...avatarProps} />
            </motion.div>
          </div>

          {showHelp && (
            <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/75 max-w-md self-center">
              <div className="font-black text-[#22C55E] mb-2">{t.howToPlay}</div>
              <div className="space-y-2">
                <div>1. {t.howStep1}</div>
                <div>2. {t.howStep2}</div>
                <div>3. {t.howStep3}</div>
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto px-4 pb-8">
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
              {LEVELS.map((lvl, index) => {
                const completed = save.completedLevels.includes(lvl.level);
                const locked = lvl.level > save.currentLevel;
                const boss = lvl.level === 10;
                return (
                  <motion.button
                    key={lvl.level}
                    disabled={locked}
                    onClick={() => startLevel(lvl.level)}
                    className={`relative rounded-xl p-4 border text-left transition-all ${locked ? "border-white/5 bg-white/[0.02] opacity-40" : completed ? "border-[#22C55E]/20 bg-[#22C55E]/5" : "border-white/10 bg-white/5 hover:bg-white/10"} ${boss ? "col-span-2" : ""}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: locked ? 0.4 : 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    whileTap={locked ? {} : { scale: 0.97 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{locked ? <Lock size={18} className="text-white/20" /> : completed ? <Check size={18} className="text-[#22C55E]" /> : LEVEL_BADGES[index]}</span>
                      <div>
                        <div className="font-bold text-sm">
                          {boss && <span className="text-yellow-400">🏆 {t.boss}</span>} {t.levelLabel} {lvl.level}
                        </div>
                        <div className="text-white/60 text-[10px]">{lvl.gridSize}×{lvl.gridSize}</div>
                      </div>
                      {completed && <span className="ml-auto text-[#22C55E]/60 text-xs font-bold">{t.done}</span>}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {allDone && (
              <motion.button
                className="mt-4 mx-auto block text-sm text-[#22C55E]/60 hover:text-[#22C55E] transition-colors"
                onClick={() => {
                  const fresh = { currentLevel: 1, completedLevels: [] as number[] };
                  setSave(fresh);
                  writeSave(fresh);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t.newExpedition}
              </motion.button>
            )}
          </div>
        </div>
      </main>
    );
  }

  if (screen === "playing") {
    return (
      <main className="min-h-screen bg-[#0A0A1A] text-white overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => { stopGame(); setAvatarMood("idle"); setScreen("expedition"); }}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20"
          >
            <Home size={14} />
          </button>
          <div className="flex items-center gap-4 text-xs font-bold">
            <div className="text-white/80">{t.levelLabel} {activeLevel}</div>
            <div><span className="text-[#22C55E]">{moves}</span><span className="text-white/60">/{targetMoves || cfg.parMoves} {t.rotation}</span></div>
            <div className="text-white/70">{solutionState.connectedCount}/{tiles.length} {t.connected}</div>
          </div>
          <button
            onClick={useHint}
            disabled={hintsLeft <= 0 || !gameActiveRef.current}
            className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${hintsLeft > 0 ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400" : "bg-white/5 border-white/10 text-white/40"}`}
          >
            {t.hintPowerup} ({hintsLeft})
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="relative w-full max-w-[420px]">
            <div className="mb-3 flex items-center justify-between text-[10px] font-bold text-white/50 px-1">
              <span>{t.source}</span>
              <span>{t.sink}</span>
            </div>
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: `repeat(${cfg.gridSize}, minmax(0, 1fr))`,
              }}
            >
              {boardTiles.map((tile, index) => (
                <div key={tile.id} className={`relative ${hintedTile === tile.id ? "ring-2 ring-yellow-400 rounded-2xl" : ""}`}>
                  <PipeTileView
                    tile={tile}
                    active={hintedTile === tile.id}
                  />
                  <button
                    type="button"
                    className="absolute inset-0 rounded-2xl z-10"
                    aria-label={`pipe-${index}`}
                    onClick={() => rotateTile(tile.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 pb-2 text-center text-white/50 text-[10px]">{t.hint}</div>

        <div className="flex justify-center gap-3 pb-4 px-4">
          <motion.button
            onClick={() => startLevel(activeLevel)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-bold"
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw size={12} /> {t.retry}
          </motion.button>
          {isMultiplayer && (
            <motion.button
              onClick={() => setShowExitConfirm(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-bold"
              whileTap={{ scale: 0.95 }}
            >
              Leave
            </motion.button>
          )}
        </div>

        {isMultiplayer && matchId && <MultiplayerAbandonNotice matchId={matchId} opponentName={opponentName} />}
        <MultiplayerExitConfirm
          open={showExitConfirm}
          onStay={() => setShowExitConfirm(false)}
          onLeave={async () => {
            if (matchId) await abandonMatch(matchId);
            router.push("/multiplayer");
          }}
        />
      </main>
    );
  }

  if (screen === "multi-waiting") {
    return (
      <main className="min-h-screen bg-[#0A0A1A] text-white flex items-center justify-center px-6">
        <motion.div
          className="w-full max-w-sm rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-xs uppercase tracking-[0.35em] text-[#22C55E] font-black mb-3">
            {t.levelLabel} {activeLevel}
          </div>
          <div className="text-3xl font-black text-white">{t.progress}</div>
          <p className="mt-3 text-white/65 text-sm">
            {opponentName} is still playing.
          </p>
        </motion.div>
      </main>
    );
  }

  if (screen === "multi-result" && myFinalScore !== null && oppFinalScore !== null) {
    return (
      <MultiplayerResult
        myScore={myFinalScore}
        oppScore={oppFinalScore}
        myName={myName}
        oppName={opponentName}
        onContinue={() => router.push("/multiplayer")}
      />
    );
  }

  if (screen === "reward" && earnedCard) {
    return (
      <RewardReveal
        rarity={earnedCard}
        game="pipeflow"
        score={calcScore(moves, targetMoves || cfg.parMoves, cfg.level >= 3 ? Math.max(0, 1 - hintsLeft) : 0).score}
        total={calcScore(moves, targetMoves || cfg.parMoves, cfg.level >= 3 ? Math.max(0, 1 - hintsLeft) : 0).total}
        onDone={() => {
          setScreen("levelComplete");
          setMilestoneKey(k => k + 1);
        }}
      />
    );
  }

  if (screen === "levelComplete") {
    return (
      <main className="min-h-screen bg-[#0A0A1A] text-white flex flex-col items-center justify-center px-6">
        <motion.div className="w-24 h-24 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <AvatarCompanion fixed={false} mood={avatarMood} jumpTrigger={avatarJump} {...avatarProps} />
        </motion.div>
        <h2 className="text-xl font-black text-[#22C55E]">{activeLevel === 10 ? t.bossDone : t.levelDone}</h2>
        <p className="text-white/70 text-sm mt-2">{moves} {t.rotation} · {solutionState.connectedCount}/{tiles.length} {t.connected}</p>
        <div className="flex gap-3 mt-5">
          <motion.button
            onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
            className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-bold"
            whileTap={{ scale: 0.95 }}
          >
            {t.expeditionMap}
          </motion.button>
          {activeLevel < 10 && (
            <motion.button
              onClick={() => startLevel(activeLevel + 1)}
              className="px-5 py-2.5 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-sm font-bold flex items-center gap-1"
              whileTap={{ scale: 0.95 }}
            >
              {t.nextLevel} <ChevronRight size={14} />
            </motion.button>
          )}
        </div>
        <MilestonePopup key={milestoneKey} />
      </main>
    );
  }

  return null;
}

export default function PipeFlowPageWrapper() {
  return <Suspense><PipeFlowPage /></Suspense>;
}
