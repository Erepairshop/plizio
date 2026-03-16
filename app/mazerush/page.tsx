"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Check, ChevronRight, RotateCcw, X, HelpCircle, Flag, Navigation } from "lucide-react";
import Link from "next/link";
import MilestonePopup from "@/components/MilestonePopup";
import RewardReveal from "@/components/RewardReveal";
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
import MultiplayerExitConfirm from "@/components/MultiplayerExitConfirm";
import MultiplayerAbandonNotice from "@/components/MultiplayerAbandonNotice";
import { submitScore, abandonMatch, submitMixRoundScore, pollMixRound } from "@/lib/multiplayer";
import { getUsername } from "@/lib/username";
import MultiplayerResult from "@/components/MultiplayerResult";
import { supabase } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";
import MultiplayerOpponentPanel from "@/components/MultiplayerOpponentPanel";

/* ------------------------------------------------------------------ */
/* i18n                                                                */
/* ------------------------------------------------------------------ */
const T = {
  en: {
    title: "MAZE RUSH",
    subtitle: "10 levels - Navigate the maze - Beat the clock",
    home: "Home", progress: "Progress", levelLabel: "Level", levelsOf: "levels",
    boss: "BOSS - ", done: "done",
    hint: "Swipe or use arrow keys to navigate. Reach the exit before time runs out!",
    levelDone: "LEVEL DONE!", bossDone: "COMPLETE!", timeUp: "TIME'S UP!",
    retry: "Retry", nextLevel: "Next Level", expeditionMap: "Expedition Map",
    newExpedition: "New Expedition", time: "TIME", moves: "STEPS",
    legendaryDesc: "You earned the legendary Maze Rush card!",
    rarity: { bronze: "BRONZE", silver: "SILVER", gold: "GOLD", legendary: "LEGENDARY" },
    card: "CARD",
    waiting: "Waiting for", multiResult: "Results",
    howToPlay: "How to play?",
    tutStep1: "Swipe or press arrow keys to move...",
    tutStep2: "You auto-slide until hitting a wall or fork!",
    tutStep3: "Reach the green exit before time runs out!",
    tutGotIt: "Got it!",
  },
  hu: {
    title: "MAZE RUSH",
    subtitle: "10 szint - Navigalj a labirintusban - Verd az idot",
    home: "Fooldal", progress: "Haladas", levelLabel: "Szint", levelsOf: "szint",
    boss: "BOSS - ", done: "kesz",
    hint: "Huzd ujjad vagy nyilbillentyukkel navigalj. Erd el a kijarat idoig!",
    levelDone: "SZINT KESZ!", bossDone: "KESZ!", timeUp: "LEJART!",
    retry: "Ujra", nextLevel: "Kovetkezo szint", expeditionMap: "Expedicio",
    newExpedition: "Uj expedicio", time: "IDO", moves: "LEPES",
    legendaryDesc: "Megszerezted a legendas Maze Rush kartyat!",
    rarity: { bronze: "BRONZ", silver: "EZUST", gold: "ARANY", legendary: "LEGENDAS" },
    card: "KARTYA",
    waiting: "Varakozas:", multiResult: "Eredmeny",
    howToPlay: "Hogyan jatssz?",
    tutStep1: "Huzd ujjad vagy nyomd a nyilakat a mozgashoz...",
    tutStep2: "Automatikusan csuszol falnak v. elgazasnak!",
    tutStep3: "Erd el a zold kijarat az ido lejarta elott!",
    tutGotIt: "Ertem!",
  },
  de: {
    title: "MAZE RUSH",
    subtitle: "10 Level - Navigiere das Labyrinth - Schlag die Uhr",
    home: "Start", progress: "Fortschritt", levelLabel: "Level", levelsOf: "Level",
    boss: "BOSS - ", done: "fertig",
    hint: "Wische oder benutze Pfeiltasten. Erreiche den Ausgang vor Ablauf der Zeit!",
    levelDone: "LEVEL GESCHAFFT!", bossDone: "FERTIG!", timeUp: "ZEIT UM!",
    retry: "Nochmal", nextLevel: "Nachstes Level", expeditionMap: "Expedition",
    newExpedition: "Neue Expedition", time: "ZEIT", moves: "SCHRITTE",
    legendaryDesc: "Du hast die legendare Maze Rush Karte erhalten!",
    rarity: { bronze: "BRONZE", silver: "SILBER", gold: "GOLD", legendary: "LEGENDAR" },
    card: "KARTE",
    waiting: "Warten auf", multiResult: "Ergebnis",
    howToPlay: "Wie spielt man?",
    tutStep1: "Wische oder drucke Pfeiltasten zum Bewegen...",
    tutStep2: "Du gleitest automatisch bis zur Wand oder Kreuzung!",
    tutStep3: "Erreiche den grunen Ausgang vor Ablauf der Zeit!",
    tutGotIt: "Verstanden!",
  },
  ro: {
    title: "MAZE RUSH",
    subtitle: "10 niveluri - Navigheaza labirintul - Bate cronometrul",
    home: "Acasa", progress: "Progres", levelLabel: "Nivel", levelsOf: "niveluri",
    boss: "BOSS - ", done: "gata",
    hint: "Gliseaza sau foloseste tastele sageata. Ajunge la iesire inainte de timp!",
    levelDone: "NIVEL TERMINAT!", bossDone: "TERMINAT!", timeUp: "TIMP EXPIRAT!",
    retry: "Din nou", nextLevel: "Nivelul urmator", expeditionMap: "Harta",
    newExpedition: "Expeditie noua", time: "TIMP", moves: "PASI",
    legendaryDesc: "Ai castigat cardul legendar Maze Rush!",
    rarity: { bronze: "BRONZ", silver: "ARGINT", gold: "AUR", legendary: "LEGENDAR" },
    card: "CARD",
    waiting: "Asteptare:", multiResult: "Rezultat",
    howToPlay: "Cum se joaca?",
    tutStep1: "Gliseaza sau apasa tastele sageata pentru a te misca...",
    tutStep2: "Te deplasezi automat pana la un perete sau o intersectie!",
    tutStep3: "Ajunge la iesirea verde inainte de expirarea timpului!",
    tutGotIt: "Am inteles!",
  },
};

/* ------------------------------------------------------------------ */
/* Level configs                                                       */
/* ------------------------------------------------------------------ */
interface MazeLevel {
  level: number;
  mazeSize: number; // odd numbers for proper maze gen
  timeLimit: number;
  fogOfWar: boolean;
}

const LEVELS: MazeLevel[] = [
  { level: 1,  mazeSize: 7,  timeLimit: 30, fogOfWar: false },
  { level: 2,  mazeSize: 9,  timeLimit: 35, fogOfWar: false },
  { level: 3,  mazeSize: 9,  timeLimit: 30, fogOfWar: false },
  { level: 4,  mazeSize: 11, timeLimit: 40, fogOfWar: false },
  { level: 5,  mazeSize: 11, timeLimit: 35, fogOfWar: false },
  { level: 6,  mazeSize: 13, timeLimit: 45, fogOfWar: false },
  { level: 7,  mazeSize: 13, timeLimit: 38, fogOfWar: true },
  { level: 8,  mazeSize: 15, timeLimit: 50, fogOfWar: true },
  { level: 9,  mazeSize: 15, timeLimit: 42, fogOfWar: true },
  { level: 10, mazeSize: 17, timeLimit: 55, fogOfWar: true },
];

const LEVEL_BADGES = ["🟢", "🟢", "🟢", "🔵", "🔵", "🟣", "🟣", "🔴", "🔴", "👑"];

/* ------------------------------------------------------------------ */
/* Seeded PRNG                                                         */
/* ------------------------------------------------------------------ */
function seededRng(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  return () => { h ^= h << 13; h ^= h >> 17; h ^= h << 5; return (h >>> 0) / 4294967296; };
}

/* ------------------------------------------------------------------ */
/* Maze types                                                          */
/* ------------------------------------------------------------------ */
// Walls encoded per cell: bit flags N=1, E=2, S=4, W=8
const N = 1, E = 2, S = 4, W = 8;
const DX: Record<number, number> = { [N]: 0, [E]: 1, [S]: 0, [W]: -1 };
const DY: Record<number, number> = { [N]: -1, [E]: 0, [S]: 1, [W]: 0 };
const OPP: Record<number, number> = { [N]: S, [E]: W, [S]: N, [W]: E };

interface MazeData {
  width: number;
  height: number;
  cells: number[]; // wall bitmask per cell (which walls are REMOVED)
}

/* ------------------------------------------------------------------ */
/* Maze generation (Recursive Backtracker / DFS)                       */
/* ------------------------------------------------------------------ */
function generateMaze(width: number, height: number, rng: () => number): MazeData {
  const cells = new Array(width * height).fill(0);
  const visited = new Array(width * height).fill(false);
  const stack: number[] = [];

  const idx = (x: number, y: number) => y * width + x;
  const inBounds = (x: number, y: number) => x >= 0 && x < width && y >= 0 && y < height;

  // Start at (0, 0)
  const startIdx = idx(0, 0);
  visited[startIdx] = true;
  stack.push(startIdx);

  while (stack.length > 0) {
    const current = stack[stack.length - 1];
    const cx = current % width;
    const cy = Math.floor(current / width);

    // Find unvisited neighbors
    const dirs = [N, E, S, W];
    const unvisited: number[] = [];
    for (const d of dirs) {
      const nx = cx + DX[d];
      const ny = cy + DY[d];
      if (inBounds(nx, ny) && !visited[idx(nx, ny)]) {
        unvisited.push(d);
      }
    }

    if (unvisited.length === 0) {
      stack.pop();
    } else {
      // Pick random unvisited neighbor
      const dir = unvisited[Math.floor(rng() * unvisited.length)];
      const nx = cx + DX[dir];
      const ny = cy + DY[dir];
      const ni = idx(nx, ny);

      // Remove wall between current and neighbor
      cells[current] |= dir;
      cells[ni] |= OPP[dir];

      visited[ni] = true;
      stack.push(ni);
    }
  }

  return { width, height, cells };
}

/* ------------------------------------------------------------------ */
/* Check if wall exists between two adjacent cells                     */
/* ------------------------------------------------------------------ */
function hasWall(maze: MazeData, x: number, y: number, dir: number): boolean {
  if (x < 0 || x >= maze.width || y < 0 || y >= maze.height) return true;
  return (maze.cells[y * maze.width + x] & dir) === 0;
}

/* ------------------------------------------------------------------ */
/* Count open passages from a cell (for intersection detection)        */
/* ------------------------------------------------------------------ */
function countOpenDirs(maze: MazeData, x: number, y: number): number {
  let count = 0;
  if (!hasWall(maze, x, y, N)) count++;
  if (!hasWall(maze, x, y, E)) count++;
  if (!hasWall(maze, x, y, S)) count++;
  if (!hasWall(maze, x, y, W)) count++;
  return count;
}

/* ------------------------------------------------------------------ */
/* Card rarity                                                         */
/* ------------------------------------------------------------------ */
function calcRarity(timeLeft: number, timeLimit: number, level: number): CardRarity {
  if (level === 10) return "legendary";
  const ratio = timeLeft / timeLimit;
  if (ratio > 0.6) return "silver";
  if (ratio > 0.3) return "silver";
  return "bronze";
}

const RARITY_COLORS: Record<CardRarity, string> = {
  bronze: "#CD7F32", silver: "#C0C0C0", gold: "#FFD700", legendary: "#B44DFF",
};

/* ------------------------------------------------------------------ */
/* Save / Load                                                         */
/* ------------------------------------------------------------------ */
const SAVE_KEY = "mazerush_expedition_v1";
interface MRSave { currentLevel: number; completedLevels: number[]; }

function loadSave(): MRSave {
  if (typeof window === "undefined") return { currentLevel: 1, completedLevels: [] };
  try { const r = localStorage.getItem(SAVE_KEY); if (r) return JSON.parse(r); } catch { /* ignore */ }
  return { currentLevel: 1, completedLevels: [] };
}
function writeSave(s: MRSave) { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }

type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "levelFailed" | "multi-waiting" | "multi-result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing";

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */
export default function MazeRushPageWrapper() {
  return <Suspense><MazeRushPage /></Suspense>;
}

/* ------------------------------------------------------------------ */
/* Tutorial overlay                                                    */
/* ------------------------------------------------------------------ */
type TLang = typeof T.en;

function TutorialOverlay({ t, onClose }: { t: TLang; onClose: () => void }) {
  const [step, setStep] = useState(0);

  // Simple 5x5 mini-maze demo
  const demoWalls = useRef<MazeData | null>(null);
  if (!demoWalls.current) {
    demoWalls.current = generateMaze(5, 5, seededRng("tutorial-demo"));
  }
  const maze = demoWalls.current;

  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<string[]>(["0,0"]);

  // Animated demo: move player along a path
  useEffect(() => {
    if (step !== 0) return;
    setPlayerPos({ x: 0, y: 0 });
    setTrail(["0,0"]);

    // BFS to find path to exit
    const path: { x: number; y: number }[] = [{ x: 0, y: 0 }];
    const visited = new Set<string>(["0,0"]);
    const queue = [{ x: 0, y: 0, path: [{ x: 0, y: 0 }] }];
    let foundPath: { x: number; y: number }[] = [];

    while (queue.length > 0) {
      const curr = queue.shift()!;
      if (curr.x === 4 && curr.y === 4) {
        foundPath = curr.path;
        break;
      }
      for (const dir of [N, E, S, W]) {
        if (!hasWall(maze, curr.x, curr.y, dir)) {
          const nx = curr.x + DX[dir];
          const ny = curr.y + DY[dir];
          const key = `${nx},${ny}`;
          if (!visited.has(key) && nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
            visited.add(key);
            queue.push({ x: nx, y: ny, path: [...curr.path, { x: nx, y: ny }] });
          }
        }
      }
    }

    // Animate first few steps
    const stepsToShow = Math.min(foundPath.length, 6);
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i < stepsToShow; i++) {
      timers.push(setTimeout(() => {
        setPlayerPos(foundPath[i]);
        setTrail(prev => [...prev, `${foundPath[i].x},${foundPath[i].y}`]);
      }, 500 + i * 400));
    }

    timers.push(setTimeout(() => setStep(1), 500 + stepsToShow * 400 + 500));

    return () => timers.forEach(clearTimeout);
  }, [step, maze]);

  useEffect(() => {
    if (step !== 1) return;
    const t1 = setTimeout(() => setStep(2), 2000);
    return () => clearTimeout(t1);
  }, [step]);

  useEffect(() => {
    if (step !== 2) return;
    const t1 = setTimeout(() => setStep(3), 2500);
    return () => clearTimeout(t1);
  }, [step]);

  const stepText = step <= 0 ? t.tutStep1 : step <= 1 ? t.tutStep2 : step <= 2 ? t.tutStep3 : t.tutStep3;

  const cellSize = 28;
  const wallW = 2;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/85 backdrop-blur-sm px-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        className="bg-[#12122A] border border-white/10 rounded-2xl p-6 max-w-xs w-full flex flex-col items-center gap-5"
        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
      >
        <h3 className="text-lg font-black text-[#00D4FF]">{t.howToPlay}</h3>

        {/* Demo maze */}
        <div className="relative" style={{ width: cellSize * 5 + wallW * 6, height: cellSize * 5 + wallW * 6 }}>
          <svg width={cellSize * 5 + wallW * 6} height={cellSize * 5 + wallW * 6}>
            <rect width="100%" height="100%" fill="#0A0A1A" rx="4" />
            {/* Walls */}
            {Array.from({ length: 5 }, (_, y) =>
              Array.from({ length: 5 }, (_, x) => {
                const cx = wallW + x * (cellSize + wallW);
                const cy = wallW + y * (cellSize + wallW);
                const walls: React.ReactNode[] = [];
                if (hasWall(maze, x, y, N))
                  walls.push(<rect key={`${x},${y},n`} x={cx - wallW} y={cy - wallW} width={cellSize + wallW * 2} height={wallW} fill="rgba(255,255,255,0.15)" />);
                if (hasWall(maze, x, y, W))
                  walls.push(<rect key={`${x},${y},w`} x={cx - wallW} y={cy - wallW} width={wallW} height={cellSize + wallW * 2} fill="rgba(255,255,255,0.15)" />);
                if (x === 4 && hasWall(maze, x, y, E))
                  walls.push(<rect key={`${x},${y},e`} x={cx + cellSize} y={cy - wallW} width={wallW} height={cellSize + wallW * 2} fill="rgba(255,255,255,0.15)" />);
                if (y === 4 && hasWall(maze, x, y, S))
                  walls.push(<rect key={`${x},${y},s`} x={cx - wallW} y={cy + cellSize} width={cellSize + wallW * 2} height={wallW} fill="rgba(255,255,255,0.15)" />);
                return walls;
              })
            )}
            {/* Trail */}
            {trail.map((key) => {
              const [tx, ty] = key.split(",").map(Number);
              const cx = wallW + tx * (cellSize + wallW) + cellSize / 2;
              const cy = wallW + ty * (cellSize + wallW) + cellSize / 2;
              return <circle key={key} cx={cx} cy={cy} r={3} fill="rgba(0,212,255,0.15)" />;
            })}
            {/* Exit */}
            <circle
              cx={wallW + 4 * (cellSize + wallW) + cellSize / 2}
              cy={wallW + 4 * (cellSize + wallW) + cellSize / 2}
              r={6} fill="#00FF88" opacity={0.6}
            />
            {/* Player */}
            <circle
              cx={wallW + playerPos.x * (cellSize + wallW) + cellSize / 2}
              cy={wallW + playerPos.y * (cellSize + wallW) + cellSize / 2}
              r={5} fill="#00D4FF"
            >
              <animate attributeName="r" values="5;7;5" dur="1s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Step text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={stepText}
            className="text-white/80 text-sm text-center font-medium h-10 flex items-center"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {stepText}
          </motion.p>
        </AnimatePresence>

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
            className="px-5 py-2 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-bold"
            whileTap={{ scale: 0.95 }}
          >
            {t.tutGotIt}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* MazeRushPage                                                        */
/* ------------------------------------------------------------------ */
function MazeRushPage() {
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
  const [save, setSave] = useState<MRSave>({ currentLevel: 1, completedLevels: [] });
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
  const [maze, setMaze] = useState<MazeData | null>(null);
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 }); // for smooth animation
  const [stepCount, setStepCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [visitedCells, setVisitedCells] = useState<Set<string>>(new Set());
  const [isMoving, setIsMoving] = useState(false);

  // -- Multiplayer state --
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [mixFinished, setMixFinished] = useState(false);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [oppScore, setOppScore] = useState(0);
  const [oppMood, setOppMood] = useState<"idle" | "focused" | "happy" | "surprised" | "victory" | "disappointed">("focused");
  const broadcastChannelRef = useRef<RealtimeChannel | null>(null);
  const broadcastIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Refs
  const mazeRef = useRef<MazeData | null>(null);
  const playerRef = useRef({ x: 0, y: 0 });
  const saveRef = useRef(save);
  const cfgRef = useRef<MazeLevel>(LEVELS[0]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef = useRef(0);
  const stepCountRef = useRef(0);
  const gameActiveRef = useRef(false);
  const visitedRef = useRef<Set<string>>(new Set());
  const movingRef = useRef(false);
  const screenRef = useRef<Screen>("expedition");
  screenRef.current = screen;
  saveRef.current = save;

  function stopTimer() {
    gameActiveRef.current = false;
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  const handleWin = useCallback((finalTimeLeft: number) => {
    stopTimer();
    const cfg = cfgRef.current;
    const rarity: CardRarity = cfg.level === 10 ? "legendary" : calculateRarity(finalTimeLeft, cfg.timeLimit, 0, false);
    saveCard({ id: generateCardId(), game: "mazerush", rarity, score: finalTimeLeft, total: cfg.timeLimit, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);
    incrementTotalGames();

    if (isMultiplayer && matchId && !scoreSubmitted) {
      setScoreSubmitted(true);
      triggerAvatar("happy", 99999, "victory");
      const finalScore = finalTimeLeft;
      if (isMix) {
        submitMixRoundScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      } else {
        submitScore(matchId, finalScore, playerNum === "1").then(() => setScreen("multi-waiting"));
      }
      return;
    }

    triggerAvatar(cfg.level === 10 ? "victory" : "happy", 3000, cfg.level === 10 ? "victory" : "happy");
    const currentSave = saveRef.current;
    const newSave: MRSave = {
      currentLevel: Math.min(10, Math.max(currentSave.currentLevel, cfg.level + 1)),
      completedLevels: [...new Set([...currentSave.completedLevels, cfg.level])],
    };
    setSave(newSave);
    writeSave(newSave);
    setScreen("reward");
  }, [isMultiplayer, matchId, scoreSubmitted, isMix, playerNum]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleTimeout = useCallback(() => {
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
  }, [isMultiplayer, matchId, scoreSubmitted, isMix, playerNum]); // eslint-disable-line react-hooks/exhaustive-deps

  // Store callbacks in refs for timer
  const handleTimeoutRef = useRef(handleTimeout);
  handleTimeoutRef.current = handleTimeout;
  const handleWinRef = useRef(handleWin);
  handleWinRef.current = handleWin;

  function startLevel(levelNum: number) {
    const cfg = LEVELS[levelNum - 1];
    cfgRef.current = cfg;
    setActiveLevel(levelNum);

    const rng = seed ? seededRng(`${seed}-${levelNum}`) : seededRng(`${Date.now()}-${Math.random()}`);
    const newMaze = generateMaze(cfg.mazeSize, cfg.mazeSize, rng);
    mazeRef.current = newMaze;
    setMaze(newMaze);

    playerRef.current = { x: 0, y: 0 };
    setPlayerPos({ x: 0, y: 0 });
    setTargetPos({ x: 0, y: 0 });
    stepCountRef.current = 0;
    setStepCount(0);
    setEarnedCard(null);
    setScoreSubmitted(false);
    const initialVisited = new Set(["0,0"]);
    visitedRef.current = initialVisited;
    setVisitedCells(new Set(initialVisited));
    movingRef.current = false;
    setIsMoving(false);

    timeLeftRef.current = cfg.timeLimit;
    setTimeLeft(cfg.timeLimit);
    stopTimer();
    gameActiveRef.current = true;

    timerRef.current = setInterval(() => {
      timeLeftRef.current--;
      setTimeLeft(timeLeftRef.current);
      if (timeLeftRef.current <= 0) handleTimeoutRef.current();
    }, 1000);

    triggerAvatar("focused", 5000);
    setScreen("playing");
  }

  // -- Movement logic (continuous sliding) --
  const movePlayer = useCallback((dir: number) => {
    if (!gameActiveRef.current || movingRef.current) return;
    const m = mazeRef.current;
    if (!m) return;

    let cx = playerRef.current.x;
    let cy = playerRef.current.y;
    const exitX = m.width - 1;
    const exitY = m.height - 1;

    // Can't move if wall in that direction
    if (hasWall(m, cx, cy, dir)) return;

    movingRef.current = true;
    setIsMoving(true);

    // Slide until wall or intersection
    const slideStep = () => {
      const nx = cx + DX[dir];
      const ny = cy + DY[dir];

      if (nx < 0 || nx >= m.width || ny < 0 || ny >= m.height) {
        finishSlide(cx, cy);
        return;
      }

      // Move one step
      cx = nx;
      cy = ny;
      stepCountRef.current++;
      setStepCount(stepCountRef.current);

      const key = `${cx},${cy}`;
      visitedRef.current.add(key);
      setVisitedCells(new Set(visitedRef.current));
      playerRef.current = { x: cx, y: cy };
      setPlayerPos({ x: cx, y: cy });

      // Check win
      if (cx === exitX && cy === exitY) {
        movingRef.current = false;
        setIsMoving(false);
        handleWinRef.current(timeLeftRef.current);
        return;
      }

      // Continue sliding? Stop if: wall ahead, or at intersection (>2 open passages)
      const openDirs = countOpenDirs(m, cx, cy);
      if (hasWall(m, cx, cy, dir) || openDirs > 2) {
        finishSlide(cx, cy);
        return;
      }

      // Continue sliding after short delay
      setTimeout(slideStep, 60);
    };

    const finishSlide = (fx: number, fy: number) => {
      movingRef.current = false;
      setIsMoving(false);
    };

    // Start sliding
    slideStep();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // -- Keyboard input --
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (screenRef.current !== "playing" || !gameActiveRef.current) return;
      let dir: number | null = null;
      switch (e.key) {
        case "ArrowUp": case "w": case "W": dir = N; break;
        case "ArrowRight": case "d": case "D": dir = E; break;
        case "ArrowDown": case "s": case "S": dir = S; break;
        case "ArrowLeft": case "a": case "A": dir = W; break;
      }
      if (dir !== null) {
        e.preventDefault();
        movePlayer(dir);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [movePlayer]);

  // -- Touch / Swipe input --
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (screenRef.current !== "playing") return;
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (screenRef.current !== "playing" || !touchStartRef.current) return;
      const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
      const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);
      if (Math.max(absDx, absDy) < 20) return; // too small swipe

      let dir: number;
      if (absDx > absDy) {
        dir = dx > 0 ? E : W;
      } else {
        dir = dy > 0 ? S : N;
      }
      movePlayer(dir);
      touchStartRef.current = null;
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [movePlayer]);

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

  // -- Multiplayer live opponent broadcast --
  useEffect(() => {
    if (!isMultiplayer || !matchId) return;
    const channel = supabase.channel(`mazerush-${matchId}`, {
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
        payload: { p: playerNum, score: stepCountRef.current },
      });
    }, 500);
    return () => { if (broadcastIntervalRef.current) clearInterval(broadcastIntervalRef.current); };
  }, [isMultiplayer, screen, playerNum]);

  // -- Helpers --
  const cfg = LEVELS[activeLevel - 1];

  // -- Render maze --
  function renderMaze() {
    if (!maze) return null;
    const mz = maze;
    const totalCells = mz.width;

    // Calculate cell size to fit screen
    // Reserve some padding
    const maxMazeWidth = typeof window !== "undefined" ? Math.min(window.innerWidth - 32, 500) : 360;
    const maxMazeHeight = typeof window !== "undefined" ? Math.min(window.innerHeight - 180, 500) : 360;
    const maxDim = Math.min(maxMazeWidth, maxMazeHeight);
    const wallWidth = 2;
    const cellSize = Math.floor((maxDim - wallWidth * (totalCells + 1)) / totalCells);
    const svgSize = cellSize * totalCells + wallWidth * (totalCells + 1);

    const exitX = mz.width - 1;
    const exitY = mz.height - 1;
    const fogRadius = cfg.fogOfWar ? 3 : 999;

    return (
      <div className="relative flex items-center justify-center">
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="rounded-lg"
          style={{ maxWidth: "100%", maxHeight: "calc(100vh - 180px)" }}
        >
          {/* Background */}
          <rect width={svgSize} height={svgSize} fill="#0A0A1A" rx="6" />

          {/* Visited trail */}
          {Array.from(visitedCells).map(key => {
            const [vx, vy] = key.split(",").map(Number);
            const cx = wallWidth + vx * (cellSize + wallWidth) + cellSize / 2;
            const cy = wallWidth + vy * (cellSize + wallWidth) + cellSize / 2;
            const dist = Math.abs(vx - playerPos.x) + Math.abs(vy - playerPos.y);
            if (dist === 0) return null; // skip player position
            if (cfg.fogOfWar && dist > fogRadius) return null;
            return (
              <rect
                key={key}
                x={wallWidth + vx * (cellSize + wallWidth)}
                y={wallWidth + vy * (cellSize + wallWidth)}
                width={cellSize}
                height={cellSize}
                fill="rgba(0,212,255,0.06)"
                rx="1"
              />
            );
          })}

          {/* Walls */}
          {Array.from({ length: mz.height }, (_, y) =>
            Array.from({ length: mz.width }, (_, x) => {
              // Fog check
              if (cfg.fogOfWar) {
                const dist = Math.abs(x - playerPos.x) + Math.abs(y - playerPos.y);
                if (dist > fogRadius + 1) return null;
              }

              const px = wallWidth + x * (cellSize + wallWidth);
              const py = wallWidth + y * (cellSize + wallWidth);
              const walls: React.ReactNode[] = [];

              // North wall
              if (hasWall(mz, x, y, N)) {
                walls.push(
                  <rect key={`${x},${y},n`} x={px - wallWidth} y={py - wallWidth} width={cellSize + wallWidth * 2} height={wallWidth} fill="rgba(255,255,255,0.15)" />
                );
              }
              // West wall
              if (hasWall(mz, x, y, W)) {
                walls.push(
                  <rect key={`${x},${y},w`} x={px - wallWidth} y={py - wallWidth} width={wallWidth} height={cellSize + wallWidth * 2} fill="rgba(255,255,255,0.15)" />
                );
              }
              // East wall (right edge)
              if (x === mz.width - 1 && hasWall(mz, x, y, E)) {
                walls.push(
                  <rect key={`${x},${y},e`} x={px + cellSize} y={py - wallWidth} width={wallWidth} height={cellSize + wallWidth * 2} fill="rgba(255,255,255,0.15)" />
                );
              }
              // South wall (bottom edge)
              if (y === mz.height - 1 && hasWall(mz, x, y, S)) {
                walls.push(
                  <rect key={`${x},${y},s`} x={px - wallWidth} y={py + cellSize} width={cellSize + wallWidth * 2} height={wallWidth} fill="rgba(255,255,255,0.15)" />
                );
              }

              return walls;
            })
          )}

          {/* Exit marker */}
          {(() => {
            const dist = Math.abs(exitX - playerPos.x) + Math.abs(exitY - playerPos.y);
            if (cfg.fogOfWar && dist > fogRadius) return null;
            const ecx = wallWidth + exitX * (cellSize + wallWidth) + cellSize / 2;
            const ecy = wallWidth + exitY * (cellSize + wallWidth) + cellSize / 2;
            const exitR = Math.max(4, cellSize * 0.3);
            return (
              <g>
                <circle cx={ecx} cy={ecy} r={exitR + 4} fill="rgba(0,255,136,0.1)">
                  <animate attributeName="r" values={`${exitR + 2};${exitR + 8};${exitR + 2}`} dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx={ecx} cy={ecy} r={exitR} fill="#00FF88" opacity="0.8">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
                </circle>
                {/* Star shape */}
                <text x={ecx} y={ecy + 1} textAnchor="middle" dominantBaseline="central" fontSize={Math.max(8, cellSize * 0.4)} fill="#0A0A1A" fontWeight="bold">
                  ★
                </text>
              </g>
            );
          })()}

          {/* Player */}
          {(() => {
            const pcx = wallWidth + playerPos.x * (cellSize + wallWidth) + cellSize / 2;
            const pcy = wallWidth + playerPos.y * (cellSize + wallWidth) + cellSize / 2;
            const pr = Math.max(3, cellSize * 0.28);
            return (
              <g>
                {/* Player glow */}
                <circle cx={pcx} cy={pcy} r={pr + 6} fill="rgba(0,212,255,0.15)">
                  <animate attributeName="r" values={`${pr + 4};${pr + 10};${pr + 4}`} dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx={pcx} cy={pcy} r={pr + 2} fill="rgba(0,212,255,0.25)" />
                <circle cx={pcx} cy={pcy} r={pr} fill="#00D4FF">
                  <animate attributeName="opacity" values="0.9;1;0.9" dur="1s" repeatCount="indefinite" />
                </circle>
              </g>
            );
          })()}

          {/* Fog of war mask */}
          {cfg.fogOfWar && (
            <>
              <defs>
                <radialGradient id="fogGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="black" stopOpacity="0" />
                  <stop offset="60%" stopColor="black" stopOpacity="0" />
                  <stop offset="100%" stopColor="black" stopOpacity="1" />
                </radialGradient>
                <mask id="fogMask">
                  <rect width={svgSize} height={svgSize} fill="white" />
                  {/* Darken everything outside radius */}
                </mask>
              </defs>
              {/* Dark overlay with hole around player */}
              <defs>
                <radialGradient id="fogHole">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="55%" stopColor="transparent" />
                  <stop offset="100%" stopColor="#0A0A1A" />
                </radialGradient>
              </defs>
              <circle
                cx={wallWidth + playerPos.x * (cellSize + wallWidth) + cellSize / 2}
                cy={wallWidth + playerPos.y * (cellSize + wallWidth) + cellSize / 2}
                r={fogRadius * (cellSize + wallWidth) + cellSize}
                fill="url(#fogHole)"
                style={{ mixBlendMode: "darken" }}
              />
              {/* Outer darkness */}
              {(() => {
                const px = wallWidth + playerPos.x * (cellSize + wallWidth) + cellSize / 2;
                const py = wallWidth + playerPos.y * (cellSize + wallWidth) + cellSize / 2;
                const fogR = fogRadius * (cellSize + wallWidth) + cellSize;
                return (
                  <g>
                    {/* Top darkness */}
                    <rect x={0} y={0} width={svgSize} height={Math.max(0, py - fogR)} fill="#0A0A1A" opacity="0.85" />
                    {/* Bottom darkness */}
                    <rect x={0} y={Math.min(svgSize, py + fogR)} width={svgSize} height={Math.max(0, svgSize - py - fogR)} fill="#0A0A1A" opacity="0.85" />
                    {/* Left darkness */}
                    <rect x={0} y={Math.max(0, py - fogR)} width={Math.max(0, px - fogR)} height={fogR * 2} fill="#0A0A1A" opacity="0.85" />
                    {/* Right darkness */}
                    <rect x={Math.min(svgSize, px + fogR)} y={Math.max(0, py - fogR)} width={Math.max(0, svgSize - px - fogR)} height={fogR * 2} fill="#0A0A1A" opacity="0.85" />
                  </g>
                );
              })()}
            </>
          )}
        </svg>
      </div>
    );
  }

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
            <h1 className="text-2xl font-black tracking-wider" style={{ color: "#00D4FF", filter: "drop-shadow(0 0 8px rgba(0,212,255,0.3))" }}>{t.title}</h1>
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
                      completed ? "border-[#00D4FF]/20 bg-[#00D4FF]/5" :
                      "border-white/10 bg-white/5 hover:bg-white/10"
                    } ${isBoss ? "col-span-2" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: locked ? 0.4 : 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    whileTap={locked ? {} : { scale: 0.97 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{locked ? <Lock size={18} className="text-white/50" /> : completed ? <Check size={18} className="text-[#00D4FF]" /> : LEVEL_BADGES[i]}</span>
                      <div>
                        <div className="font-bold text-sm">
                          {isBoss && <span className="text-yellow-400">{t.boss}</span>}
                          {t.levelLabel} {lvl.level}
                        </div>
                        <div className="text-white/60 text-[10px]">
                          {lvl.mazeSize}x{lvl.mazeSize} · {lvl.timeLimit}s{lvl.fogOfWar ? " · fog" : ""}
                        </div>
                      </div>
                      {completed && <span className="ml-auto text-[#00D4FF]/60 text-xs font-bold">{t.done}</span>}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* New expedition button */}
            {save.completedLevels.length === 10 && (
              <motion.button
                className="mt-4 mx-auto block text-sm text-[#00D4FF]/60 hover:text-[#00D4FF] transition-colors"
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
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            ><X size={14} /></button>
            <div className="flex items-center gap-4 text-xs font-bold">
              <div className="text-white/80">{t.levelLabel} {activeLevel}</div>
              <div className="text-white/70">{stepCount} {t.moves}</div>
              <div className={timeLeft <= 10 ? "text-red-400 animate-pulse" : "text-white/80"}>
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
              </div>
            </div>
            <div className="w-8" /> {/* spacer */}
          </div>

          {/* Maze */}
          <div className="flex-1 flex items-center justify-center px-4 pb-4">
            {renderMaze()}
          </div>

          {/* Hint */}
          <div className="text-center text-white/50 text-[10px] px-4 pb-2">{t.hint}</div>

          {/* Direction buttons (mobile helper) */}
          <div className="flex justify-center pb-4">
            <div className="grid grid-cols-3 gap-1" style={{ width: "120px" }}>
              <div /> {/* spacer */}
              <motion.button
                onTouchStart={(e) => { e.stopPropagation(); movePlayer(N); }}
                onClick={() => movePlayer(N)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 active:bg-[#00D4FF]/20 active:text-[#00D4FF] active:border-[#00D4FF]/30 transition-colors"
              ><Navigation size={14} className="rotate-0" /></motion.button>
              <div /> {/* spacer */}
              <motion.button
                onTouchStart={(e) => { e.stopPropagation(); movePlayer(W); }}
                onClick={() => movePlayer(W)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 active:bg-[#00D4FF]/20 active:text-[#00D4FF] active:border-[#00D4FF]/30 transition-colors"
              ><Navigation size={14} className="-rotate-90" /></motion.button>
              <div /> {/* center spacer */}
              <motion.button
                onTouchStart={(e) => { e.stopPropagation(); movePlayer(E); }}
                onClick={() => movePlayer(E)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 active:bg-[#00D4FF]/20 active:text-[#00D4FF] active:border-[#00D4FF]/30 transition-colors"
              ><Navigation size={14} className="rotate-90" /></motion.button>
              <div /> {/* spacer */}
              <motion.button
                onTouchStart={(e) => { e.stopPropagation(); movePlayer(S); }}
                onClick={() => movePlayer(S)}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/60 active:bg-[#00D4FF]/20 active:text-[#00D4FF] active:border-[#00D4FF]/30 transition-colors"
              ><Navigation size={14} className="rotate-180" /></motion.button>
              <div /> {/* spacer */}
            </div>
          </div>
        </motion.div>
      )}

      {/* -- REWARD REVEAL -- */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="mazerush"
          score={timeLeft}
          total={cfg.timeLimit}
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
            <h2 className="text-xl font-black" style={{ color: "#00D4FF" }}>
              {activeLevel === 10 ? t.bossDone : t.levelDone}
            </h2>
            <p className="text-white/70 text-sm mt-1">{timeLeft}s {t.time} · {stepCount} {t.moves}</p>
          </div>
          <div className="flex gap-3">
            <motion.button
              onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-bold"
              whileTap={{ scale: 0.95 }}
            >{t.expeditionMap}</motion.button>
            {activeLevel < 10 && (
              <motion.button
                onClick={() => startLevel(activeLevel + 1)}
                className="px-5 py-2.5 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-bold flex items-center gap-1"
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
          <p className="text-white/60 text-sm">{stepCount} {t.moves}</p>
          <div className="flex gap-3">
            <motion.button
              onClick={() => { setAvatarMood("idle"); setScreen("expedition"); }}
              className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-bold"
              whileTap={{ scale: 0.95 }}
            >{t.expeditionMap}</motion.button>
            <motion.button
              onClick={() => startLevel(activeLevel)}
              className="px-5 py-2.5 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] text-sm font-bold flex items-center gap-1"
              whileTap={{ scale: 0.95 }}
            ><RotateCcw size={14} /> {t.retry}</motion.button>
          </div>
        </motion.div>
      )}

      {/* -- MULTI WAITING -- */}
      {screen === "multi-waiting" && (
        <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-5 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="text-3xl font-black text-[#00D4FF]">{timeLeft}s</motion.div>
          {isMix && <span className="text-white/60 text-xs font-bold uppercase">Round {mixround} ✓</span>}
          <motion.div className="w-10 h-10 border-2 border-[#00D4FF] border-t-transparent rounded-full"
            animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} />
          <span className="text-white/60 text-sm font-medium text-center">{t.waiting} {opponentName}...</span>
        </motion.div>
      )}

      {/* -- MULTI RESULT -- */}
      {screen === "multi-result" && oppFinalScore !== null && (
        <MultiplayerResult
          myScore={myFinalScore !== null ? myFinalScore : timeLeft}
          oppScore={oppFinalScore}
          myName={getUsername() || "???"}
          oppName={opponentName}
          onContinue={() => router.push("/multiplayer")}
        />
      )}

      {/* -- MULTI OPPONENT PANEL -- */}
      {isMultiplayer && (
        <MultiplayerOpponentPanel
          opponentName={opponentName}
          opponentScore={oppScore}
          opponentMood={oppMood}
          totalRounds={cfg.timeLimit}
          isVisible={screen === "playing"}
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

      {/* -- TUTORIAL OVERLAY -- */}
      <AnimatePresence>
        {showTutorial && <TutorialOverlay t={t} onClose={() => setShowTutorial(false)} />}
      </AnimatePresence>
    </main>
  );
}
