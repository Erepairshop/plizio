"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, FlaskConical, Home, Lock, Sparkles, Trophy } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { calculateRarity, generateCardId, saveCard, type CardRarity } from "@/lib/cards";
import { incrementTotalGames } from "@/lib/milestones";
import type { IslandDef, MissionDef } from "@/lib/astromath";
import type { AstroKemiaProgress } from "@/lib/astroKemiaShared";
import type { MathQuestion } from "@/lib/mathCurriculum";
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import RocketTransition from "@/app/astromath/RocketTransition";
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";

type Lang = "en" | "hu" | "de" | "ro";
type Screen = "island-map" | "transition" | "mission-select" | "explorer" | "practice" | "challenge" | "checkpoint";

const UI = {
  en: {
    back: "Back",
    grade: "Grade",
    completed: "completed",
    islands: "islands",
    topics: "Topics",
    checkpoint: "Checkpoint",
    checkpointReady: "Ready for checkpoint",
    checkpointDone: "Checkpoint complete",
    missions: "Missions",
    chooseMission: "Choose your chemistry mission for this island.",
    start: "Start",
    locked: "Locked",
    unlocked: "Unlocked",
  },
  hu: {
    back: "Vissza",
    grade: "Osztály",
    completed: "kész",
    islands: "sziget",
    topics: "Témák",
    checkpoint: "Ellenőrzőpont",
    checkpointReady: "Indulhat az ellenőrzőpont",
    checkpointDone: "Ellenőrzőpont kész",
    missions: "Küldetések",
    chooseMission: "Válaszd ki a sziget kémiás küldetését.",
    start: "Indítás",
    locked: "Zárolt",
    unlocked: "Nyitott",
  },
  de: {
    back: "Zurück",
    grade: "Klasse",
    completed: "geschafft",
    islands: "Inseln",
    topics: "Themen",
    checkpoint: "Checkpoint",
    checkpointReady: "Checkpoint bereit",
    checkpointDone: "Checkpoint geschafft",
    missions: "Missionen",
    chooseMission: "Wähle deine Chemie-Mission für diese Insel.",
    start: "Start",
    locked: "Gesperrt",
    unlocked: "Offen",
  },
  ro: {
    back: "Înapoi",
    grade: "Clasa",
    completed: "finalizate",
    islands: "insule",
    topics: "Teme",
    checkpoint: "Punct de control",
    checkpointReady: "Punctul de control este gata",
    checkpointDone: "Punct de control finalizat",
    missions: "Misiuni",
    chooseMission: "Alege misiunea de chimie pentru această insulă.",
    start: "Start",
    locked: "Blocat",
    unlocked: "Deschis",
  },
} as const;

const GRADE_LABELS = {
  en: "Chemistry",
  hu: "Kémia",
  de: "Chemie",
  ro: "Chimie",
} as const;

const CHECKPOINT_LABELS = {
  en: ["Lab Check", "Reaction Check", "Final Check"],
  hu: ["Lab Check", "Reaction Check", "Final Check"],
  de: ["Labor-Check", "Reaktions-Check", "Final-Check"],
  ro: ["Lab Check", "Reaction Check", "Final Check"],
} as const;

const STAR_DATA = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: (i * 37 + 13) % 100,
  y: (i * 53 + 7) % 100,
  size: (i % 4) * 0.6 + 0.3,
  dur: 1.8 + (i % 6) * 0.5,
  delay: (i % 9) * 0.35,
}));

const SHOOT_DATA = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  startX: 15 + i * 22,
  dur: 3.5 + i * 1.2,
  delay: 4 + i * 5,
}));

const MAP_W = 320;
const MAP_H = 860;
const MAP_VB_OFFSET = 220;
const CP_POS: Record<string, { x: number; y: number }> = {
  test1: { x: 155, y: 295 },
  test2: { x: 155, y: 50 },
  test3: { x: 155, y: -165 },
};

function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STAR_DATA.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.08, 0.9, 0.08] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {SHOOT_DATA.map((s) => (
        <motion.div
          key={`shoot-${s.id}`}
          className="absolute h-px rounded-full"
          style={{
            left: `${s.startX}%`,
            top: `${10 + s.id * 18}%`,
            width: 60,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
            rotate: -25,
          }}
          animate={{ x: [0, 180], opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, delay: s.delay, repeat: Infinity, repeatDelay: s.dur, ease: "easeIn" }}
        />
      ))}
      <div
        className="absolute"
        style={{
          left: "10%",
          top: "20%",
          width: 200,
          height: 200,
          background: "radial-gradient(ellipse, rgba(16,185,129,0.10) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute"
        style={{
          left: "55%",
          top: "55%",
          width: 160,
          height: 160,
          background: "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div
        className="absolute"
        style={{
          left: "64%",
          top: "18%",
          width: 120,
          height: 120,
          background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 72%)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

function buildSmoothPath(islands: IslandDef[]): string {
  const pts = islands.map((i) => ({ x: i.svgX, y: i.svgY }));
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const cx = (pts[i].x + pts[i + 1].x) / 2;
    const cy = (pts[i].y + pts[i + 1].y) / 2;
    d += ` Q ${pts[i].x},${pts[i].y} ${cx},${cy}`;
  }
  d += ` Q ${pts[pts.length - 2].x},${pts[pts.length - 2].y} ${pts[pts.length - 1].x},${pts[pts.length - 1].y}`;
  return d;
}

function IslandMapSVG({
  islands,
  checkpointIds,
  progress,
  langCode,
  onIsland,
  onCheckpoint,
  isIslandUnlocked,
  isCheckpointUnlocked,
  isCheckpointDone,
  islandTotalStars,
}: {
  islands: IslandDef[];
  checkpointIds: string[];
  progress: AstroKemiaProgress;
  langCode: Lang;
  onIsland: (island: IslandDef) => void;
  onCheckpoint: (testId: string) => void;
  isIslandUnlocked: (progress: AstroKemiaProgress, islandId: string) => boolean;
  isCheckpointUnlocked: (progress: AstroKemiaProgress, testId: string) => boolean;
  isCheckpointDone: (progress: AstroKemiaProgress, testId: string) => boolean;
  islandTotalStars: (progress: AstroKemiaProgress, islandId: string) => number;
}) {
  const pathD = buildSmoothPath(islands);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowChem" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebulaChem1" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebulaChem2" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebulaChem1)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebulaChem2)" />

      <path d={pathD} fill="none" stroke="rgba(16,185,129,0.25)" strokeWidth={8} filter="url(#pathGlowChem)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5} strokeDasharray="10 7" strokeLinecap="round" />

      {islands.slice(0, -1).map((island, i) => {
        const next = islands[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {checkpointIds.map((testId) => {
        const pos = CP_POS[testId];
        if (!pos) return null;
        const unlocked = isCheckpointUnlocked(progress, testId);
        const done = isCheckpointDone(progress, testId);
        const color = done ? "#00FF88" : unlocked ? "#FFD700" : "rgba(255,255,255,0.2)";
        const fillAlpha = done ? "rgba(0,255,136,0.15)" : unlocked ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.03)";
        return (
          <g key={testId} onClick={() => unlocked && !done && onCheckpoint(testId)} style={{ cursor: unlocked && !done ? "pointer" : "default" }}>
            {unlocked && !done && (
              <>
                <circle cx={pos.x} cy={pos.y} r={22} fill="none" stroke={color} strokeWidth={1} opacity={0.3} strokeDasharray="4 3" />
                <circle cx={pos.x} cy={pos.y} r={28} fill="none" stroke={color} strokeWidth={0.8} opacity={0.14} />
              </>
            )}
            <rect x={pos.x - 54} y={pos.y - 18} width={108} height={36} rx={18} fill={fillAlpha} stroke={color} strokeWidth={done ? 1.5 : 2} />
            <text x={pos.x - 35} y={pos.y + 5} textAnchor="middle" fontSize={13}>{done ? "🧪" : unlocked ? "⚗️" : "🔒"}</text>
            <text x={pos.x + 10} y={pos.y + 1} textAnchor="middle" fontSize={8.5} fontWeight="bold" fill={color}>
              {(CHECKPOINT_LABELS[langCode] ?? CHECKPOINT_LABELS.en)[Math.max(Number(testId.replace("test", "")) - 1, 0)]}
            </text>
            <text x={pos.x + 10} y={pos.y + 11} textAnchor="middle" fontSize={7.5} fontWeight="bold" fill={color} opacity={0.85}>
              {done ? "✓" : unlocked ? "GO" : "LOCK"}
            </text>
          </g>
        );
      })}

      {islands.map((island, idx) => {
        const unlocked = isIslandUnlocked(progress, island.id);
        const done = progress.completedIslands.includes(island.id);
        const total = islandTotalStars(progress, island.id);
        return (
          <g key={island.id} onClick={() => unlocked && onIsland(island)} style={{ cursor: unlocked ? "pointer" : "default" }}>
            {unlocked && !done && (
              <>
                <circle cx={island.svgX} cy={island.svgY} r={40} fill={island.color} opacity={0.08} />
                <circle cx={island.svgX} cy={island.svgY} r={30} fill="none" stroke={island.color} strokeOpacity={0.18} strokeWidth={1.2} />
                <circle cx={island.svgX + 18} cy={island.svgY - 16} r={2.8} fill={island.color} fillOpacity={0.4} />
                <circle cx={island.svgX - 16} cy={island.svgY + 14} r={2.2} fill="#ffffff" fillOpacity={0.28} />
              </>
            )}
            {done && <circle cx={island.svgX} cy={island.svgY} r={36} fill="none" stroke="#FFD700" strokeWidth={1.5} opacity={0.5} strokeDasharray="5 3" />}
            {unlocked ? (
              <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={20} opacity={done ? 0.85 : 1}>{island.icon}</text>
            ) : (
              <>
                <circle cx={island.svgX} cy={island.svgY} r={24} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth={1.5} opacity={0.35} />
                <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={20}>🔒</text>
              </>
            )}
            {!unlocked && <text x={island.svgX} y={island.svgY + 42} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.2)" fontWeight="bold">{idx + 1}</text>}
            {done && (
              <g>
                <circle cx={island.svgX + 22} cy={island.svgY - 20} r={11} fill="#FFD700" />
                <text x={island.svgX + 22} y={island.svgY - 15} textAnchor="middle" fontSize={11} fill="#000" fontWeight="bold">✓</text>
              </g>
            )}
            {unlocked && !done && (
              <g>
                {island.missions.map((m, mi) => {
                  const mdone = progress.completedMissions.includes(`${island.id}_${m.id}`);
                  return <circle key={mi} cx={island.svgX - 8 + mi * 8} cy={island.svgY + 34} r={4} fill={mdone ? island.color : "rgba(255,255,255,0.08)"} stroke={mdone ? island.color : "rgba(255,255,255,0.2)"} strokeWidth={1} />;
                })}
              </g>
            )}
            {unlocked && (
              <text
                x={island.svgX}
                y={island.svgY + 48}
                textAnchor="middle"
                fontSize={9}
                fontWeight="bold"
                fill={total === 9 ? "#FFD700" : total > 0 ? island.color : "rgba(255,255,255,0.25)"}
              >
                {total > 0 ? `${total}/9 ⭐` : island.name[langCode].split(" ")[0]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function scoreToStars(score: number, total: number): number {
  if (total <= 0) return 1;
  const pct = score / total;
  if (pct >= 0.9) return 3;
  if (pct >= 0.65) return 2;
  return 1;
}

export default function AstroKemiaGradeGame({
  grade,
  title,
  subtitle,
  gameId,
  routeBase,
  accentColor,
  islands,
  topicLabels,
  checkpointMap,
  loadProgress,
  saveProgress,
  completeMission,
  completeTest,
  isIslandUnlocked,
  isCheckpointUnlocked,
  isCheckpointDone,
  islandTotalStars,
  generateIslandQuestions,
  generateCheckpointQuestions,
  Explorer,
}: {
  grade: number;
  title: string;
  subtitle: string;
  gameId: string;
  routeBase: string;
  accentColor: string;
  islands: IslandDef[];
  topicLabels: Record<string, Record<Lang, string>>;
  checkpointMap: Record<string, string[]>;
  loadProgress: () => AstroKemiaProgress;
  saveProgress: (progress: AstroKemiaProgress) => void;
  completeMission: (progress: AstroKemiaProgress, islandId: string, missionId: string, stars?: number) => AstroKemiaProgress;
  completeTest: (progress: AstroKemiaProgress, testId: string) => AstroKemiaProgress;
  isIslandUnlocked: (progress: AstroKemiaProgress, islandId: string) => boolean;
  isCheckpointUnlocked: (progress: AstroKemiaProgress, testId: string) => boolean;
  isCheckpointDone: (progress: AstroKemiaProgress, testId: string) => boolean;
  islandTotalStars: (progress: AstroKemiaProgress, islandId: string) => number;
  generateIslandQuestions: (island: IslandDef, count?: number) => MathQuestion[];
  generateCheckpointQuestions: (testId: string, count?: number) => MathQuestion[];
  Explorer: React.ComponentType<{ island: IslandDef; grade: number; onDone: (score: number, total: number) => void; color?: string; lang?: string }>;
}) {
  const router = useRouter();
  const { lang } = useLang();
  const langCode = (lang as Lang) ?? "en";
  const t = UI[langCode] ?? UI.en;

  const [progress, setProgress] = useState<AstroKemiaProgress>({
    completedMissions: [],
    completedIslands: [],
    completedTests: [],
    missionStars: {},
  });
  const [screen, setScreen] = useState<Screen>("island-map");
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [reward, setReward] = useState<{ rarity: CardRarity; score: number; total: number } | null>(null);
  const [showMilestones, setShowMilestones] = useState(false);
  const [islandCompleteState, setIslandCompleteState] = useState<{ island: IslandDef; score: number; total: number } | null>(null);
  const [pendingIslandComplete, setPendingIslandComplete] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
  }, [loadProgress]);

  const openIsland = useCallback((island: IslandDef) => {
    setActiveIsland(island);
    setScreen("transition");
  }, []);

  const startMission = useCallback(
    (mission: MissionDef) => {
      if (!activeIsland) return;
      setActiveMission(mission);
      if (mission.id === "m1") {
        setScreen("explorer");
        return;
      }
      setQuestions(generateIslandQuestions(activeIsland, mission.id === "m2" ? 10 : 12));
      setScreen(mission.id === "m2" ? "practice" : "challenge");
    },
    [activeIsland, generateIslandQuestions]
  );

  const finishMission = useCallback(
    (score: number, total: number) => {
      if (!activeIsland || !activeMission) return;
      const updated = completeMission(progress, activeIsland.id, activeMission.id, scoreToStars(score, total));
      const newlyCompletedIsland =
        !progress.completedIslands.includes(activeIsland.id) && updated.completedIslands.includes(activeIsland.id);

      saveProgress(updated);
      setProgress(updated);
      setPendingIslandComplete(newlyCompletedIsland);
      setIslandCompleteState({ island: activeIsland, score, total });

      incrementTotalGames();
      const rarity = calculateRarity(score, total, 0, true);
      saveCard({
        id: generateCardId(),
        game: gameId,
        rarity,
        score,
        total,
        date: new Date().toISOString(),
      });

      setShowMilestones(true);
      setReward({ rarity, score, total });
    },
    [activeIsland, activeMission, completeMission, gameId, progress, saveProgress]
  );

  const finishCheckpoint = useCallback(
    (score: number, total: number) => {
      if (!activeTestId) return;
      const updated = completeTest(progress, activeTestId);
      saveProgress(updated);
      setProgress(updated);
      setActiveTestId(null);
      setQuestions([]);
      setScreen("island-map");
      void score;
      void total;
    },
    [activeTestId, completeTest, progress, saveProgress]
  );

  const closeReward = useCallback(() => {
    setReward(null);
    setScreen(pendingIslandComplete ? "island-map" : "mission-select");
  }, [pendingIslandComplete]);

  const startCheckpoint = useCallback(
    (testId: string) => {
      setActiveTestId(testId);
      setQuestions(generateCheckpointQuestions(testId, 15));
      setScreen("checkpoint");
    },
    [generateCheckpointQuestions]
  );

  if (reward) {
    return (
      <>
        <RewardReveal rarity={reward.rarity} game={gameId} score={reward.score} total={reward.total} onDone={closeReward} />
        {showMilestones ? <MilestonePopup /> : null}
      </>
    );
  }

  if (pendingIslandComplete && islandCompleteState) {
    return (
      <IslandCompleteAnimation
        islandIcon={islandCompleteState.island.icon}
        islandColor={islandCompleteState.island.color}
        islandName={islandCompleteState.island.name[langCode]}
        lang={langCode}
        grade={grade}
        score={islandCompleteState.score}
        total={islandCompleteState.total}
        onDone={() => {
          setPendingIslandComplete(false);
          setIslandCompleteState(null);
          setScreen("island-map");
        }}
      />
    );
  }

  if (screen === "transition" && activeIsland) {
    return <RocketTransition color={accentColor} onDone={() => setScreen("mission-select")} />;
  }

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_32%),#07110f] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-5">
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => (screen === "island-map" ? router.push(routeBase) : setScreen("island-map"))}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            {t.back}
          </button>
          <button
            onClick={() => router.push("/")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:bg-white/10"
          >
            <Home size={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );

  if (screen === "island-map") {
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2 flex-shrink-0">
          <button
            onClick={() => router.push(routeBase)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="text-center">
            <h1 className="text-lg font-black text-white">🪐 {t.grade} {grade}</h1>
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">
              {GRADE_LABELS[langCode]} · {title}
            </p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">
            {progress.completedIslands.length}/{islands.length}
          </div>
        </div>
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${accentColor}, #00FF88)` }}
              initial={{ width: 0 }}
              animate={{ width: `${(progress.completedIslands.length / islands.length) * 100}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-emerald-200/80">
              <FlaskConical size={12} />
              {subtitle}
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-white/45">
              <span>⚗️</span>
              <span>🧪</span>
              <span>⚛️</span>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex-1 overflow-y-auto" ref={(el) => { if (el) setTimeout(() => { el.scrollTop = el.scrollHeight; }, 100); }}>
          <div className="px-2 pb-8">
            <IslandMapSVG
              islands={islands}
              checkpointIds={Object.keys(checkpointMap)}
              progress={progress}
              langCode={langCode}
              onIsland={openIsland}
              onCheckpoint={startCheckpoint}
              isIslandUnlocked={isIslandUnlocked}
              isCheckpointUnlocked={isCheckpointUnlocked}
              isCheckpointDone={isCheckpointDone}
              islandTotalStars={islandTotalStars}
            />
          </div>
        </div>
      </div>
    );
  }

  if (screen === "mission-select" && activeIsland) {
    return (
      <Shell>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl" style={{ backgroundColor: `${activeIsland.color}22` }}>
            {activeIsland.icon}
          </div>
          <h1 className="text-3xl font-black">{activeIsland.name[langCode]}</h1>
          <p className="mt-2 text-sm text-white/60">{t.chooseMission}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {activeIsland.topicKeys.map((topicKey) => (
              <span key={topicKey} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                {topicLabels[topicKey]?.[langCode] ?? topicKey}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {activeIsland.missions.map((mission) => {
            const done = progress.completedMissions.includes(`${activeIsland.id}_${mission.id}`);
            return (
              <button
                key={mission.id}
                onClick={() => startMission(mission)}
                className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5 text-left transition hover:bg-white/[0.08]"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-2xl">{mission.icon}</div>
                  {done ? <CheckCircle2 size={18} className="text-emerald-300" /> : <Lock size={18} className="text-white/25" />}
                </div>
                <div className="text-sm uppercase tracking-[0.24em] text-white/35">{mission.id.toUpperCase()}</div>
                <h2 className="mt-2 text-lg font-bold">{mission.label[langCode]}</h2>
              </button>
            );
          })}
        </div>
      </Shell>
    );
  }

  if (screen === "explorer" && activeIsland) {
    return <Explorer island={activeIsland} grade={grade} color={accentColor} lang={langCode} onDone={finishMission} />;
  }

  if (screen === "practice") {
    return <OrbitQuiz questions={questions} color={accentColor} onDone={finishMission} />;
  }

  if (screen === "challenge") {
    return <BlackHole questions={questions} color={accentColor} onDone={finishMission} />;
  }

  if (screen === "checkpoint") {
    return <OrbitQuiz questions={questions} color={accentColor} onDone={finishCheckpoint} />;
  }

  return null;
}
