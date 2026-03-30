"use client";

import { useEffect, useRef, useState, useCallback, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, History, Home, RotateCcw, Zap, Timer, AlertCircle } from "lucide-react";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { incrementTotalGames } from "@/lib/milestones";
import { useLang } from "@/components/LanguageProvider";
import { submitScore, submitMixRoundScore, pollMixRound } from "@/lib/multiplayer";
import MultiplayerResult from "@/components/MultiplayerResult";
import { getUsername } from "@/lib/username";
import { supabase } from "@/lib/supabase/client";

// ─── Types & Constants ───────────────────────────────────────

type Screen = "expedition" | "playing" | "reward" | "levelComplete" | "multi-waiting" | "multi-result";
type Phase = "recording" | "echo";
type Rarity = "bronze" | "silver" | "gold" | "legendary";

interface Point {
  x: number;
  y: number;
}

interface Obstacle {
  x: number;
  y: number;
  w: number;
  h: number;
  type: "static" | "moving";
  moveDir?: "h" | "v";
  dist?: number;
  speed?: number;
}

interface LevelDef {
  level: number;
  title: string;
  obstacles: Obstacle[];
  targets1: Point[];
  targets2: Point[];
}

const ARENA_SIZE = 400; // px
const PLAYER_SIZE = 24;
const TARGET_SIZE = 30;
const RECORD_INTERVAL = 100; // ms
const TICK_RATE = 16; // ~60fps

const SAVE_KEY = "timeecho_expedition_v1";

const T = {
  en: {
    title: "TIME ECHO",
    subtitle: "Navigate the arena, then avoid your own path in the second run.",
    home: "Home",
    progress: "Progress",
    expeditionMap: "Expedition Map",
    levelLabel: "Level",
    recordPhase: "PHASE 1: RECORDING",
    echoPhase: "PHASE 2: ECHO ACTIVE",
    howToPlay: "How to play?",
    how1: "Phase 1: Collect all energy spheres while avoiding obstacles.",
    how2: "Phase 2: Collect the new spheres, but avoid the Echo of your first run!",
    how3: "Touch obstacles or your Echo to fail.",
    retry: "Retry",
    correct: "Level cleared!",
    wrong: "Collision detected!",
    nextLevel: "Next Level",
    levelDone: "✅ LEVEL DONE!",
    bossDone: "🏆 EXPEDITION COMPLETE!",
    locked: "LOCKED",
    completed: "Archived",
    current: "Active",
    dead: "TIME LOOP BROKEN",
    selection: "Level Selection",
    footer1: "Record your route",
    footer2: "Avoid the echo",
    footer3: "10 time levels",
    opponentWaiting: "{name} is still playing.",
  },
  hu: {
    title: "IDŐVISSZHANG",
    subtitle: "Navigálj a pályán, majd kerüld el a saját utadat a második körben.",
    home: "Főoldal",
    progress: "Haladás",
    expeditionMap: "Expedíció térkép",
    levelLabel: "Szint",
    recordPhase: "1. FÁZIS: RÖGZÍTÉS",
    echoPhase: "2. FÁZIS: VISSZHANG AKTÍV",
    howToPlay: "Hogyan játssz?",
    how1: "1. fázis: Gyűjtsd össze a gömböket, kerülve az akadályokat.",
    how2: "2. fázis: Gyűjtsd az új gömböket, de kerüld el az első futásod másolatát!",
    how3: "Az akadályokkal vagy az Echoddal való ütközés kudarchoz vezet.",
    retry: "Újra",
    correct: "Szint teljesítve!",
    wrong: "Ütközés!",
    nextLevel: "Következő szint",
    levelDone: "✅ SZINT KÉSZ!",
    bossDone: "🏆 EXPEDÍCIÓ KÉSZ!",
    locked: "ZÁROLVA",
    completed: "Archiválva",
    current: "Aktív",
    dead: "IDŐHUROK MEGSZAKADT",
    selection: "Szintválasztó",
    footer1: "Rögzítsd az utadat",
    footer2: "Kerüld el a visszhangot",
    footer3: "10 időszint",
    opponentWaiting: "{name} még játszik.",
  },
  de: {
    title: "ZEITECHO",
    subtitle: "Jage durch die Arena und weiche im zweiten Lauf deinem eigenen Weg aus.",
    home: "Start",
    progress: "Fortschritt",
    expeditionMap: "Expedition",
    levelLabel: "Level",
    recordPhase: "PHASE 1: AUFZEICHNEN",
    echoPhase: "PHASE 2: ECHO AKTIV",
    howToPlay: "Wie spielt man?",
    how1: "Phase 1: Sammle alle Energiekugeln und weiche Hindernissen aus.",
    how2: "Phase 2: Sammle die neuen Kugeln, aber weiche deinem ersten Lauf aus.",
    how3: "Berührung mit Hindernissen oder dem Echo bedeutet Niederlage.",
    retry: "Nochmal",
    correct: "Level geschafft!",
    wrong: "Kollision erkannt!",
    nextLevel: "Nächstes Level",
    levelDone: "✅ LEVEL GESCHAFFT!",
    bossDone: "🏆 EXPEDITION GESCHAFFT!",
    locked: "GESPERRT",
    completed: "Fertig",
    current: "Aktiv",
    dead: "ZEITSCHLEIFE GEBROCHEN",
    selection: "Levelauswahl",
    footer1: "Zeichne deinen Weg auf",
    footer2: "Weiche dem Echo aus",
    footer3: "10 Zeit-Level",
    opponentWaiting: "{name} spielt noch.",
  },
  ro: {
    title: "ECOU TEMPORAL",
    subtitle: "Parcurge arena, apoi evită-ți propriul traseu în a doua rundă.",
    home: "Acasă",
    progress: "Progres",
    expeditionMap: "Hartă",
    levelLabel: "Nivel",
    recordPhase: "FAZA 1: ÎNREGISTRARE",
    echoPhase: "FAZA 2: ECOU ACTIV",
    howToPlay: "Cum se joacă?",
    how1: "Faza 1: Colectează toate sferele și evită obstacolele.",
    how2: "Faza 2: Colectează noile sfere, dar evită traseul primei runde.",
    how3: "Atingerea obstacolelor sau a ecoului înseamnă eșec.",
    retry: "Din nou",
    correct: "Nivel terminat!",
    wrong: "Coliziune detectată!",
    nextLevel: "Nivelul următor",
    levelDone: "✅ NIVEL TERMINAT!",
    bossDone: "🏆 EXPEDIȚIE TERMINATĂ!",
    locked: "BLOCAT",
    completed: "Gata",
    current: "Activ",
    dead: "BUCLA TIMPULUI S-A RUPT",
    selection: "Alegerea nivelului",
    footer1: "Înregistrează traseul",
    footer2: "Evită ecoul",
    footer3: "10 niveluri de timp",
    opponentWaiting: "{name} încă joacă.",
  },
} as const;

// ─── Level Definitions ───────────────────────────────────────

const LEVELS: LevelDef[] = [
  {
    level: 1,
    title: "First Loop",
    obstacles: [{ x: 180, y: 150, w: 40, h: 100, type: "static" }],
    targets1: [{ x: 50, y: 50 }, { x: 350, y: 350 }],
    targets2: [{ x: 350, y: 50 }, { x: 50, y: 350 }],
  },
  {
    level: 2,
    title: "Split Route",
    obstacles: [
      { x: 100, y: 100, w: 200, h: 20, type: "static" },
      { x: 100, y: 280, w: 200, h: 20, type: "static" },
    ],
    targets1: [{ x: 200, y: 50 }, { x: 200, y: 350 }],
    targets2: [{ x: 50, y: 200 }, { x: 350, y: 200 }],
  },
  {
    level: 3,
    title: "Center Block",
    obstacles: [{ x: 150, y: 150, w: 100, h: 100, type: "static" }],
    targets1: [{ x: 50, y: 200 }, { x: 350, y: 200 }],
    targets2: [{ x: 200, y: 50 }, { x: 200, y: 350 }],
  },
  {
    level: 4,
    title: "Cross Route",
    obstacles: [
      { x: 50, y: 100, w: 300, h: 20, type: "static" },
      { x: 50, y: 280, w: 300, h: 20, type: "static" },
    ],
    targets1: [{ x: 200, y: 200 }, { x: 350, y: 50 }],
    targets2: [{ x: 50, y: 50 }, { x: 350, y: 350 }],
  },
  {
    level: 5,
    title: "Tall Pillar",
    obstacles: [
      { x: 190, y: 50, w: 20, h: 300, type: "static" },
    ],
    targets1: [{ x: 100, y: 100 }, { x: 100, y: 300 }],
    targets2: [{ x: 300, y: 100 }, { x: 300, y: 300 }],
  },
  {
    level: 6,
    title: "Zigzag",
    obstacles: [
      { x: 0, y: 100, w: 250, h: 20, type: "static" },
      { x: 150, y: 200, w: 250, h: 20, type: "static" },
      { x: 0, y: 300, w: 250, h: 20, type: "static" },
    ],
    targets1: [{ x: 350, y: 50 }, { x: 50, y: 150 }],
    targets2: [{ x: 350, y: 250 }, { x: 50, y: 350 }],
  },
  {
    level: 7,
    title: "Moving Bars",
    obstacles: [
      { x: 50, y: 150, w: 100, h: 20, type: "moving", moveDir: "h", dist: 200, speed: 2 },
      { x: 250, y: 250, w: 100, h: 20, type: "moving", moveDir: "h", dist: -200, speed: 2 },
    ],
    targets1: [{ x: 200, y: 50 }, { x: 200, y: 350 }],
    targets2: [{ x: 50, y: 200 }, { x: 350, y: 200 }],
  },
  {
    level: 8,
    title: "Corridors",
    obstacles: [
      { x: 100, y: 0, w: 20, h: 150, type: "static" },
      { x: 100, y: 250, w: 20, h: 150, type: "static" },
      { x: 280, y: 0, w: 20, h: 150, type: "static" },
      { x: 280, y: 250, w: 20, h: 150, type: "static" },
    ],
    targets1: [{ x: 50, y: 200 }, { x: 200, y: 200 }],
    targets2: [{ x: 350, y: 200 }, { x: 200, y: 50 }],
  },
  {
    level: 9,
    title: "Echo Maze",
    obstacles: [
      { x: 50, y: 50, w: 20, h: 300, type: "static" },
      { x: 330, y: 50, w: 20, h: 300, type: "static" },
      { x: 150, y: 190, w: 100, h: 20, type: "static" },
    ],
    targets1: [{ x: 25, y: 25 }, { x: 375, y: 375 }, { x: 25, y: 375 }],
    targets2: [{ x: 375, y: 25 }, { x: 200, y: 100 }, { x: 200, y: 300 }],
  },
  {
    level: 10,
    title: "Final Loop",
    obstacles: [
      { x: 190, y: 0, w: 20, h: 400, type: "static" },
      { x: 0, y: 190, w: 400, h: 20, type: "static" },
    ],
    targets1: [{ x: 50, y: 50 }, { x: 350, y: 350 }],
    targets2: [{ x: 350, y: 50 }, { x: 50, y: 350 }],
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

// ─── Component ───────────────────────────────────────────────

export default function TimeEchoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A1A] flex items-center justify-center text-cyan-500 font-mono tracking-widest uppercase">Initializing Time Loop...</div>}>
      <TimeEchoContent />
    </Suspense>
  );
}

function TimeEchoContent() {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const matchId = searchParams.get("match");
  const playerNum = searchParams.get("p");
  const opponentName = searchParams.get("vs") || "???";
  const urlLevel = searchParams.get("level");
  const mixround = searchParams.get("mixround");
  const isMultiplayer = !!matchId;
  const isMix = !!mixround;
  const myName = getUsername() || "You";

  // State
  const [save, setSave] = useState<{ currentLevel: number; completedLevels: number[] }>({ currentLevel: 1, completedLevels: [] });
  const [screen, setScreen] = useState<Screen>("expedition");
  const [activeLevel, setActiveLevel] = useState(1);
  const [phase, setPhase] = useState<Phase>("recording");
  const [playerPos, setPlayerPos] = useState<Point>({ x: 200, y: 380 });
  const [playerVel, setPlayerVel] = useState<Point>({ x: 0, y: 0 });
  const [recordPath, setRecordPath] = useState<Point[]>([]);
  const [collectedCount, setCollectedCount] = useState(0);
  const [isDead, setIsDead] = useState(false);
  const [tick, setTick] = useState(0);
  const [reward, setReward] = useState<{ rarity: Rarity; score: number; total: number } | null>(null);
  const [milestoneKey, setMilestoneKey] = useState(0);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);
  const [myFinalScore, setMyFinalScore] = useState<number | null>(null);
  const [oppFinalScore, setOppFinalScore] = useState<number | null>(null);

  const requestRef = useRef<number>(0);
  const lastRecordTime = useRef<number>(0);
  const keysPressed = useRef<Set<string>>(new Set());
  const joystickRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const currentLevel = LEVELS.find(l => l.level === activeLevel) ?? LEVELS[0];
  const targets = phase === "recording" ? currentLevel.targets1 : currentLevel.targets2;

  // Init
  useEffect(() => {
    const s = loadSave();
    setSave(s);
    if (urlLevel) {
      const lv = parseInt(urlLevel, 10);
      if (lv >= 1 && lv <= 10) setActiveLevel(lv);
    } else {
      setActiveLevel(Math.min(s.currentLevel, 10));
    }
  }, [urlLevel]);

  // Movement Input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => keysPressed.current.add(e.key);
    const handleKeyUp = (e: KeyboardEvent) => keysPressed.current.delete(e.key);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const startLevel = useCallback((lvl: number) => {
    setActiveLevel(lvl);
    setPhase("recording");
    setPlayerPos({ x: 200, y: 380 });
    setPlayerVel({ x: 0, y: 0 });
    setRecordPath([]);
    setCollectedCount(0);
    setIsDead(false);
    setTick(0);
    setScreen("playing");
    incrementTotalGames();
  }, []);

  // Main Loop
  const update = useCallback(() => {
    if (screen !== "playing" || isDead) return;

    setTick(prev => prev + 1);

    // 1. Movement
    let dx = 0;
    let dy = 0;
    if (keysPressed.current.has("ArrowUp") || keysPressed.current.has("w")) dy -= 1;
    if (keysPressed.current.has("ArrowDown") || keysPressed.current.has("s")) dy += 1;
    if (keysPressed.current.has("ArrowLeft") || keysPressed.current.has("a")) dx -= 1;
    if (keysPressed.current.has("ArrowRight") || keysPressed.current.has("d")) dx += 1;

    // Joystick override
    if (Math.abs(joystickRef.current.x) > 0.1 || Math.abs(joystickRef.current.y) > 0.1) {
      dx = joystickRef.current.x;
      dy = joystickRef.current.y;
    }

    const speed = 4;
    const nextPos = {
      x: Math.max(PLAYER_SIZE/2, Math.min(ARENA_SIZE - PLAYER_SIZE/2, playerPos.x + dx * speed)),
      y: Math.max(PLAYER_SIZE/2, Math.min(ARENA_SIZE - PLAYER_SIZE/2, playerPos.y + dy * speed)),
    };

    // 2. Collision with Obstacles
    const hitObstacle = currentLevel.obstacles.some(obs => {
      let ox = obs.x;
      let oy = obs.y;
      if (obs.type === "moving") {
        const offset = Math.sin(tick * 0.05 * obs.speed!) * obs.dist!;
        if (obs.moveDir === "h") ox += offset;
        else oy += offset;
      }
      return (
        nextPos.x + PLAYER_SIZE/2 > ox &&
        nextPos.x - PLAYER_SIZE/2 < ox + obs.w &&
        nextPos.y + PLAYER_SIZE/2 > oy &&
        nextPos.y - PLAYER_SIZE/2 < oy + obs.h
      );
    });

    if (hitObstacle) {
      setIsDead(true);
      return;
    }

    // 3. Collision with Echo
    if (phase === "echo") {
      const echoPos = recordPath[tick];
      if (echoPos) {
        const dist = Math.sqrt((nextPos.x - echoPos.x)**2 + (nextPos.y - echoPos.y)**2);
        if (dist < PLAYER_SIZE) {
          setIsDead(true);
          return;
        }
      }
    }

    // 4. Targets
    const targetIdx = targets.findIndex((t, i) => {
      const dist = Math.sqrt((nextPos.x - t.x)**2 + (nextPos.y - t.y)**2);
      return dist < (PLAYER_SIZE + TARGET_SIZE) / 2;
    });

    if (targetIdx !== -1) {
      // Check if this target was already collected (we handle this by removing from array or count)
      // Simpler: state-based collection
    }

    // Actually we remove targets once hit
    // To keep it simple for the loop, I'll use a local 'remaining' logic
    
    setPlayerPos(nextPos);

    // Recording
    if (phase === "recording") {
      setRecordPath(prev => [...prev, nextPos]);
    }

    requestRef.current = requestAnimationFrame(update);
  }, [screen, isDead, playerPos, phase, recordPath, tick, currentLevel, targets]);

  useEffect(() => {
    if (screen === "playing" && !isDead) {
      requestRef.current = requestAnimationFrame(update);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [screen, isDead, update]);

  // Target collection logic (outside high-freq loop for stability)
  useEffect(() => {
    const distToTarget = (t: Point) => Math.sqrt((playerPos.x - t.x)**2 + (playerPos.y - t.y)**2);
    const hitIdx = targets.findIndex(t => distToTarget(t) < 25);
    
    if (hitIdx !== -1) {
      // We need a way to track which specific targets are gone
      // I'll use a bitmask or just a 'collected' state
    }
  }, [playerPos, targets]);

  // Refined Gameplay State Management
  const [collectedIndices, setCollectedIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (screen !== "playing" || isDead) return;
    targets.forEach((t, i) => {
      if (!collectedIndices.has(i)) {
        const dist = Math.sqrt((playerPos.x - t.x)**2 + (playerPos.y - t.y)**2);
        if (dist < 25) {
          setCollectedIndices(prev => new Set(prev).add(i));
        }
      }
    });
  }, [playerPos, targets, collectedIndices, screen, isDead]);

  useEffect(() => {
    if (collectedIndices.size > 0 && collectedIndices.size === targets.length) {
      if (phase === "recording") {
        // Transition to Echo phase
        setPhase("echo");
        setPlayerPos({ x: 200, y: 380 });
        setTick(0);
        setCollectedIndices(new Set());
      } else {
        // Level Complete
        handleWin();
      }
    }
  }, [collectedIndices, targets.length, phase]);

  function handleWin() {
    const score = 100; // Time Echo is pass/fail
    setReward({ rarity: "gold", score, total: 100 });
    
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

    setScreen("reward");
    const newCompleted = Array.from(new Set([...save.completedLevels, activeLevel]));
    const nextLevel = Math.max(save.currentLevel, Math.min(activeLevel + 1, 10));
    const newSave = { currentLevel: nextLevel, completedLevels: newCompleted };
    setSave(newSave);
    writeSave(newSave);
  }

  // Joystick handlers
  const handleJoystick = (e: React.TouchEvent | React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const mag = Math.sqrt(x*x + y*y);
    if (mag > 1) {
      joystickRef.current = { x: x / mag, y: y / mag };
    } else {
      joystickRef.current = { x, y };
    }
  };

  const stopJoystick = () => {
    joystickRef.current = { x: 0, y: 0 };
  };

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

  // Screens
  if (screen === "reward" && reward) {
    return (
      <RewardReveal
        rarity={reward.rarity}
        game="timeecho"
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
      <main className="min-h-screen bg-[#0A0A1A] text-white flex flex-col items-center justify-center px-4 py-5 sm:px-5 sm:py-6">
        <motion.div 
          className="w-full max-w-[500px] rounded-[28px] border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-5 sm:p-8 text-center shadow-[0_0_50px_rgba(6,182,212,0.1)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-500/30">
            <Zap className="text-cyan-400" size={40} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-2">{t.levelDone}</h2>
          <p className="text-cyan-400/60 font-mono uppercase tracking-widest text-sm mb-8">{currentLevel.title}</p>
          
          <div className="flex flex-col gap-3">
            {activeLevel < 10 && (
              <button 
                onClick={() => startLevel(activeLevel + 1)}
                className="w-full py-4 bg-cyan-500 text-[#0A0A1A] rounded-2xl font-black text-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2"
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

  if (screen === "multi-waiting") {
    return (
      <main className="min-h-screen bg-[#0A0A1A] text-white flex items-center justify-center px-5 py-6">
        <motion.div
          className="w-full max-w-[520px] rounded-[28px] border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-6 text-center shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-xs uppercase tracking-[0.35em] text-cyan-400 font-black">{t.progress}</div>
          <div className="mt-3 text-3xl font-black">{t.title}</div>
          <p className="mt-3 text-white/65 text-sm">{t.opponentWaiting.replace("{name}", opponentName)}</p>
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

  if (screen === "playing") {
    return (
      <main className="min-h-screen bg-[#05050F] text-white touch-none overflow-hidden flex flex-col">
        {/* HUD */}
        <div className="p-3 sm:p-4 flex items-center justify-between gap-3 border-b border-white/5 bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button onClick={() => setScreen("expedition")} className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40">
              <Home size={20} />
            </button>
            <div className="min-w-0">
              <div className="text-[10px] font-black tracking-[0.2em] text-cyan-500/50 uppercase">{t.levelLabel} {activeLevel}</div>
              <div className="font-bold text-xs sm:text-sm tracking-tight truncate">{currentLevel.title}</div>
            </div>
          </div>
          <div className={`px-2.5 sm:px-4 py-1.5 rounded-full border text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-widest ${phase === "recording" ? 'border-amber-500/50 text-amber-400 bg-amber-500/10' : 'border-purple-500/50 text-purple-400 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]'}`}>
            {phase === "recording" ? t.recordPhase : t.echoPhase}
          </div>
        </div>

        {/* Game Arena */}
        <div className="flex-1 flex items-center justify-center p-3 sm:p-4 relative">
          <div 
            className="relative bg-[#0A0A1A] border-2 border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
            style={{ width: "min(100%, 400px)", aspectRatio: "1 / 1" }}
          >
            {/* Grid background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #22D3EE 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {/* Obstacles */}
            {currentLevel.obstacles.map((obs, i) => {
              let ox = obs.x;
              let oy = obs.y;
              if (obs.type === "moving") {
                const offset = Math.sin(tick * 0.05 * obs.speed!) * obs.dist!;
                if (obs.moveDir === "h") ox += offset;
                else oy += offset;
              }
              return (
                <div 
                  key={i}
                  className="absolute bg-white/10 border border-white/20 backdrop-blur-sm"
                  style={{ left: ox, top: oy, width: obs.w, height: obs.h }}
                />
              );
            })}

            {/* Targets */}
            {targets.map((tg, i) => (
              !collectedIndices.has(i) && (
                <motion.div 
                  key={i}
                  className="absolute rounded-full border-2 flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{ 
                    left: tg.x - 15, top: tg.y - 15, width: 30, height: 30,
                    borderColor: phase === "recording" ? '#F59E0B' : '#A855F7',
                    background: phase === "recording" ? 'rgba(245,158,11,0.1)' : 'rgba(168,85,247,0.1)'
                  }}
                >
                  <Zap size={14} className={phase === "recording" ? "text-amber-400" : "text-purple-400"} />
                </motion.div>
              )
            ))}

            {/* Echo Ghost */}
            {phase === "echo" && recordPath[tick] && (
              <div 
                className="absolute rounded-full border-2 border-purple-500/50 bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                style={{ 
                  left: recordPath[tick].x - 12, top: recordPath[tick].y - 12, 
                  width: 24, height: 24,
                  transition: 'none'
                }}
              >
                <div className="absolute inset-0 rounded-full animate-ping bg-purple-500/30" />
              </div>
            )}

            {/* Player */}
            {!isDead && (
              <div 
                className="absolute rounded-full border-2 border-cyan-400 bg-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                style={{ 
                  left: playerPos.x - 12, top: playerPos.y - 12, 
                  width: 24, height: 24,
                  transition: 'none'
                }}
              >
                <div className="absolute -inset-1 rounded-full border border-cyan-400/30 animate-pulse" />
              </div>
            )}

            {/* Death Overlay */}
            <AnimatePresence>
              {isDead && (
                <motion.div 
                  className="absolute inset-0 bg-rose-950/80 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <AlertCircle size={48} className="text-rose-500 mb-4" />
                  <h3 className="text-2xl font-black text-white mb-2">{t.dead}</h3>
                  <p className="text-rose-200/60 text-sm mb-6 uppercase tracking-widest font-mono">{t.wrong}</p>
                  <button 
                    onClick={() => startLevel(activeLevel)}
                    className="px-8 py-3 bg-rose-600 text-white rounded-xl font-black flex items-center gap-2 hover:bg-rose-500 transition-colors"
                  >
                    <RotateCcw size={18} /> {t.retry}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="h-36 sm:h-48 bg-black/60 border-t border-white/5 flex items-center justify-center p-3 sm:p-4">
          <div 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-white/10 bg-white/5 relative touch-none shadow-inner"
            onPointerDown={handleJoystick}
            onPointerMove={handleJoystick}
            onPointerUp={stopJoystick}
            onPointerLeave={stopJoystick}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
            </div>
          </div>
          <div className="ml-8 hidden sm:block text-white/30 text-[10px] font-mono leading-relaxed">
            [WASD] / [ARROWS]
          </div>
        </div>
      </main>
    );
  }

  // Expedition Map
  return (
    <main className="min-h-screen bg-[#0A0A1A] text-white px-4 py-5 sm:px-5 sm:py-8">
      <div className="mx-auto w-full max-w-[1000px]">
        <div className="flex items-center justify-between mb-5 sm:mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors font-bold text-sm">
            <Home size={18} /> {t.home}
          </Link>
          <div className="text-xs font-black tracking-[0.4em] text-cyan-500 uppercase">{t.selection}</div>
        </div>

        <div className="relative rounded-[28px] sm:rounded-[40px] border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl p-4 sm:p-8 overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-cyan-400 font-black text-sm uppercase tracking-[0.3em] mb-4">
              <History size={20} /> {t.title}
            </div>
            <h1 className="text-2xl sm:text-5xl font-black tracking-tight sm:tracking-tighter mb-3 sm:mb-4">{t.subtitle}</h1>
            
            <div className="mt-6 sm:mt-12 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-5 sm:gap-4">
              {LEVELS.map((lvl) => {
                const unlocked = lvl.level <= save.currentLevel;
                const completed = save.completedLevels.includes(lvl.level);
                return (
                  <button
                    key={lvl.level}
                    disabled={!unlocked}
                    onClick={() => startLevel(lvl.level)}
                    className={`group relative aspect-square rounded-2xl sm:rounded-3xl border-2 flex flex-col items-center justify-center p-2 transition-all ${
                      unlocked 
                        ? 'bg-cyan-500/5 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/10 shadow-lg' 
                        : 'bg-white/2 border-white/5 opacity-40 grayscale cursor-not-allowed'
                    }`}
                  >
                    <div className="text-xl sm:text-2xl mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform">{completed ? '✅' : lvl.level}</div>
                    <div className="text-[9px] sm:text-[10px] font-black tracking-[0.15em] sm:tracking-widest text-cyan-500/60 uppercase text-center leading-tight">{lvl.title}</div>
                    {unlocked && !completed && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        <Zap size={12} className="text-black" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 opacity-40 text-[10px] sm:text-xs font-mono tracking-[0.15em] sm:tracking-widest uppercase text-center">
          <div className="flex flex-col gap-2">
            <Timer className="mx-auto" />
            {t.footer1}
          </div>
          <div className="flex flex-col gap-2">
            <RotateCcw className="mx-auto" />
            {t.footer2}
          </div>
          <div className="flex flex-col gap-2">
            <Zap className="mx-auto" />
            {t.footer3}
          </div>
        </div>
      </div>
    </main>
  );
}
