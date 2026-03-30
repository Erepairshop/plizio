"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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

  const checkpointStates = useMemo(
    () =>
      Object.keys(checkpointMap).map((id) => ({
        id,
        unlocked: isCheckpointUnlocked(progress, id),
        done: isCheckpointDone(progress, id),
      })),
    [checkpointMap, isCheckpointDone, isCheckpointUnlocked, progress]
  );

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
      <Shell>
        <div className="mb-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-emerald-200/80">
            <FlaskConical size={14} />
            {t.grade} {grade}
          </div>
          <h1 className="text-3xl font-black tracking-tight">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/65">{subtitle}</p>
          <p className="mt-4 text-sm text-white/55">
            {progress.completedIslands.length}/{islands.length} {t.islands} {t.completed}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {islands.map((island) => {
            const unlocked = isIslandUnlocked(progress, island.id);
            const completed = progress.completedIslands.includes(island.id);
            const stars = islandTotalStars(progress, island.id);

            return (
              <motion.div
                key={island.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5"
                style={{ boxShadow: `0 0 0 1px ${island.color}22, 0 24px 60px rgba(0,0,0,0.18)` }}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl text-xl" style={{ backgroundColor: `${island.color}22` }}>
                      {island.icon}
                    </div>
                    <h2 className="text-lg font-bold">{island.name[langCode]}</h2>
                    <p className="mt-1 text-xs uppercase tracking-[0.24em] text-white/40">
                      {island.id.toUpperCase()} · {island.topicKeys.length} {t.topics}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${unlocked ? "bg-emerald-400/15 text-emerald-200" : "bg-white/10 text-white/45"}`}>
                    {unlocked ? t.unlocked : t.locked}
                  </span>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {island.topicKeys.map((topicKey) => (
                    <span key={topicKey} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {topicLabels[topicKey]?.[langCode] ?? topicKey}
                    </span>
                  ))}
                </div>

                <div className="mb-4 flex items-center justify-between text-sm text-white/60">
                  <span className="inline-flex items-center gap-1">
                    <Trophy size={14} />
                    {stars}/9
                  </span>
                  <span className="inline-flex items-center gap-1">
                    {completed ? <CheckCircle2 size={14} className="text-emerald-300" /> : <Sparkles size={14} />}
                    {completed ? t.completed : ""}
                  </span>
                </div>

                <button
                  onClick={() => openIsland(island)}
                  disabled={!unlocked}
                  className="w-full rounded-2xl px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40"
                  style={{ backgroundColor: unlocked ? island.color : "#1f2937", color: "white" }}
                >
                  {unlocked ? t.start : t.locked}
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {checkpointStates.map((checkpoint) => (
            <div key={checkpoint.id} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                {t.checkpoint} {checkpoint.id.replace("test", "")}
              </p>
              <p className="mt-2 text-sm text-white/65">
                {checkpoint.done ? t.checkpointDone : checkpoint.unlocked ? t.checkpointReady : t.locked}
              </p>
              <button
                onClick={() => startCheckpoint(checkpoint.id)}
                disabled={!checkpoint.unlocked || checkpoint.done}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-40"
              >
                {checkpoint.done ? t.checkpointDone : t.start}
              </button>
            </div>
          ))}
        </div>
      </Shell>
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
