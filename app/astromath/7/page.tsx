"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";
import { attachAutoScrollToBottom } from "@/components/attachAutoScrollToBottom";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, checkNewMilestones } from "@/lib/milestones";
import type { CardRarity } from "@/lib/cards";
import type { MathQuestion } from "@/lib/mathCurriculum";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import { T } from "@/app/astromath/games/translations";

// Math Games
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import NumberDuel from "@/app/astromath/games/NumberDuel";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import FractionVisual from "@/app/astromath/games/FractionVisual";
import EquationDrill from "@/app/astromath/games/EquationDrill";
import PowerExplorer7 from "@/app/astromath/games/PowerExplorer7";
import AlgebraExplorer7 from "@/app/astromath/games/AlgebraExplorer7";
import EquationExplorer7 from "@/app/astromath/games/EquationExplorer7";
import InequalityExplorer7 from "@/app/astromath/games/InequalityExplorer7";
import TriangleExplorer7 from "@/app/astromath/games/TriangleExplorer7";
import PythagorasExplorer7 from "@/app/astromath/games/PythagorasExplorer7";
import CircleExplorer7 from "@/app/astromath/games/CircleExplorer7";
import StatExplorer7 from "@/app/astromath/games/StatExplorer7";
import TrueFalseBlitz from "@/app/astromath/games/TrueFalseBlitz";
import VisualChallenge from "@/app/astromath/games/VisualChallenge";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";

// Visuals
import PythagoreanVisual from "@/components/grade7-visual/PythagoreanVisual";
import CylinderVolume from "@/components/grade7-visual/CylinderVolume";

import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import M2Engine from "@/components/astro-games/M2Engine";
import M3Engine from "@/components/astro-games/M3Engine";
import { MATH_M2_POOLS, MATH_M3_POOLS } from "@/lib/astro/mathGameRegistry";
import VisualLab, { VisualLabFab } from "@/components/VisualLab";
import {
  G7_ISLANDS, loadG7Progress, saveG7Progress,
  isIslandUnlockedG7, isIslandDoneG7, isMissionDoneG7,
  isCheckpointUnlockedG7, isCheckpointDoneG7,
  completeMissionG7, completeTestG7, islandTotalStarsG7,
  generateIslandQuestionsG7, generateCheckpointQuestionsG7,
  generatePowerSortRound
} from "@/lib/astromath7";
import { G7_ISLAND_SVGS } from "../islands-g7";
import { MATH_CATEGORY_CONFIG, MathProgress, MathIslandConfig, MathMissionConfig, Lang, MathMissionCategory } from "@/lib/astroMathConfigShared";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

const GRADE_LABEL: Record<string, string> = {
  en: "Grade 7 · Math Space",
  hu: "7. osztály · Matek Űrkaland",
  de: "Klasse 7 · Mathe-Weltraum",
  ro: "Clasa 7 · Matematică în Spațiu",
};

type Screen =
  | "island-map"
  | "island-intro"
  | "mission-select"
  | "orbit-quiz"
  | "black-hole"
  | "gravity-sort"
  | "star-match"
  | "number-duel"
  | "speed-round"
  | "equation-drill"
  | "fraction-visual"
  | "algebra-explorer"
  | "stat-explorer"
  | "true-false-blitz"
  | "power-explorer"
  | "equation-explorer"
  | "inequality-explorer"
  | "triangle-explorer"
  | "pythagoras-explorer"
  | "circle-explorer"
  | "visual-challenge"
  | "m2"
  | "m3"
  | "island-transition"
  | "island-complete-anim"
  | "mission-done"
  | "island-done"
  | "reward"
  | "checkpoint-intro"
  | "checkpoint-quiz"
  | "checkpoint-done"
  | "rocket-launch";

const STAR_DATA = Array.from({ length: 60 }, (_, i) => ({
  id: i, x: (i * 37 + 13) % 100, y: (i * 53 + 7) % 100,
  size: (i % 4) * 0.6 + 0.3, dur: 1.8 + (i % 6) * 0.5, delay: (i % 9) * 0.35,
}));
const SHOOT_DATA = Array.from({ length: 4 }, (_, i) => ({
  id: i, startX: 15 + i * 22, dur: 3.5 + i * 1.2, delay: 4 + i * 5,
}));

function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STAR_DATA.map((s) => (
        <motion.div key={s.id} className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.08, 0.9, 0.08] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      {SHOOT_DATA.map((s) => (
        <motion.div key={`shoot-${s.id}`}
          className="absolute h-px rounded-full"
          style={{ left: `${s.startX}%`, top: `${10 + s.id * 18}%`, width: 60,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
            rotate: -25 }}
          animate={{ x: [0, 180], opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, delay: s.delay, repeat: Infinity, repeatDelay: s.dur, ease: "easeIn" }} />
      ))}
    </div>
  );
}

const MAP_W = 320;
const MAP_H = 860;
const MAP_VB_OFFSET = 220;

function buildSmoothPath(islands: MathIslandConfig[]): string {
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

function IslandMapSVG({ progress, onIsland, onCheckpoint }: {
  progress: MathProgress;
  onIsland: (island: MathIslandConfig) => void;
  onCheckpoint: (testId: string) => void;
}) {
  const pathD = buildSmoothPath(G7_ISLANDS);
  const checkpointPos = { test1: { x: 155, y: 295 }, test2: { x: 155, y: 50 }, test3: { x: 155, y: -165 } };
  const { lang } = useLang();

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <path d={pathD} fill="none" stroke="rgba(150,100,255,0.25)" strokeWidth={8} strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5} strokeDasharray="10 7" strokeLinecap="round" />
      {G7_ISLANDS.map((island) => {
        const unlocked = isIslandUnlockedG7(progress, island.id);
        const done = isIslandDoneG7(progress, island.id);
        const stars = islandTotalStarsG7(progress, island.id);
        const SvgIcon = G7_ISLAND_SVGS[island.id];

        return (
          <g key={island.id} onClick={() => unlocked && onIsland(island)} style={{ cursor: unlocked ? "pointer" : "default" }}>
            <circle cx={island.svgX} cy={island.svgY} r={unlocked ? 30 : 20} fill={unlocked ? island.color : "rgba(255,255,255,0.05)"} opacity={unlocked ? 0.3 : 0.1} />
            {SvgIcon ? (
              <svg x={island.svgX - 25} y={island.svgY - 25} width={50} height={50} overflow="visible">
                <SvgIcon size={50} />
              </svg>
            ) : (
              <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={20}>{unlocked ? island.icon : "🔒"}</text>
            )}
            <text x={island.svgX} y={island.svgY + 45} textAnchor="middle" fontSize={10} fill="white" fontWeight="black" opacity={0.7}>
              {stars > 0 ? `${stars} ⭐` : (island.name[lang as Lang] || island.name.en)}
            </text>
          </g>
        );
      })}
      {Object.entries(checkpointPos).map(([id, pos]) => {
        const unlocked = isCheckpointUnlockedG7(progress, id);
        const done = isCheckpointDoneG7(progress, id);
        return (
          <g key={id} onClick={() => unlocked && !done && onCheckpoint(id)} style={{ cursor: unlocked && !done ? "pointer" : "default" }}>
            <rect x={pos.x - 40} y={pos.y - 15} width={80} height={30} rx={15} fill={done ? "#00FF8822" : unlocked ? "#FFD70022" : "rgba(255,255,255,0.05)"} stroke={done ? "#00FF88" : unlocked ? "#FFD700" : "rgba(255,255,255,0.2)"} />
            <text x={pos.x} y={pos.y + 5} textAnchor="middle" fontSize={10} fill={unlocked ? "white" : "gray"}>{done ? "✅" : unlocked ? "🚀 Test" : "🔒 Test"}</text>
          </g>
        );
      })}
    </svg>
  );
}

function MissionDoneScreen({ mission, island, score, total, onContinue }: {
  mission: MathMissionConfig; island: MathIslandConfig; score: number; total: number; onContinue: () => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
      <motion.div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl"
        style={{ background: `${island.color}22`, border: `3px solid ${island.color}`, boxShadow: `0 0 30px ${island.color}55` }}
        animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        {mission.icon}
      </motion.div>
      <div>
        <p className="text-white/60 text-sm font-medium mb-1">{t.missionDone}</p>
        <h2 className="text-2xl font-black text-white">{mission.label[lang as Lang] ?? mission.label.en}</h2>
      </div>
      <div className="flex gap-1 text-3xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.15, type: "spring" }}>
            {i < stars ? "⭐" : "✩"}
          </motion.span>
        ))}
      </div>
      <div className="text-white/70 font-bold text-lg">{score}/{total}</div>
      <motion.button onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
        style={{ background: `linear-gradient(135deg, ${island.color}55, ${island.color}99)`, border: `2px solid ${island.color}` }}
        whileTap={{ scale: 0.97 }}>
        {t.next} <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}

function IslandDoneScreen({ island, onContinue }: { island: MathIslandConfig; onContinue: () => void }) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
      <motion.div className="text-7xl" animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, delay: 0.2 }}>
        {island.icon}
      </motion.div>
      <div>
        <p className="text-white/60 text-sm font-medium mb-1">{t.islandDone}</p>
        <h2 className="text-2xl font-black" style={{ color: island.color }}>
          {island.name[lang as Lang] ?? island.name.en}
        </h2>
      </div>
      <div className="flex gap-1 text-3xl">
        {["⭐", "⭐", "⭐"].map((s, i) => (
          <motion.span key={i} initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.12, type: "spring" }}>{s}</motion.span>
        ))}
      </div>
      <motion.button onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2"
        style={{ background: `linear-gradient(135deg, ${island.color}55, ${island.color}99)`, border: `2px solid ${island.color}` }}
        whileTap={{ scale: 0.97 }}>
        {t.back} {t.islandMap} <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}

function CheckpointDoneScreen({ score, total, onContinue }: {
  score: number; total: number; testId: string; onContinue: () => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const pct = Math.round((score / total) * 100);
  const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "🎯" : "💪";

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
      <motion.div className="text-6xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
        {emoji}
      </motion.div>
      <div>
        <p className="text-white/60 text-sm font-medium">{t.testDone}</p>
        <h2 className="text-2xl font-black text-[#FFD700] mt-1">{t.yourScore}</h2>
        <p className="text-4xl font-black text-white mt-2">{score}/{total}</p>
        <p className="text-white/60 text-base mt-1 font-medium">{pct}%</p>
      </div>
      <motion.button onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2"
        style={{ background: "linear-gradient(135deg, #FFD70055, #FFD70099)", border: "2px solid #FFD700" }}
        whileTap={{ scale: 0.97 }}>
        {t.back} {t.islandMap} <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}

export default function AstroMathG7Page() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [visualLabOpen, setVisualLabOpen] = useState(false);
  const [screen, setScreen] = useState<Screen>("island-map");
  const [progress, setProgress] = useState<MathProgress>({ completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} });
  const [activeIsland, setActiveIsland] = useState<MathIslandConfig | null>(null);
  const [activeMission, setActiveMission] = useState<MathMissionConfig | null>(null);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [checkpointScore, setCheckpointScore] = useState({ score: 0, total: 10 });
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [justUnlockedIsland, setJustUnlockedIsland] = useState(false);

  // Avatar state
  const [gender] = useState<AvatarGender>(() => getGender());
  const [activeSkin] = useState(() => getSkinDef(getActiveSkin()));
  const [activeFace] = useState(() => getFaceDef(getActiveFace()));
  const [activeTop] = useState(() => { const id = getActive("top"); return id ? getTopDef(id) : null; });
  const [activeBottom] = useState(() => { const id = getActive("bottom"); return id ? getBottomDef(id) : null; });
  const [activeShoe] = useState(() => { const id = getActive("shoe"); return id ? getShoeDef(id) : null; });
  const [activeCape] = useState(() => { const id = getActive("cape"); return id ? getCapeDef(id) : null; });
  const [activeGlasses] = useState(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
  const [activeGloves] = useState(() => { const id = getActive("gloves"); return id ? getGloveDef(id) : null; });
  const [activeHat] = useState(() => { const id = getActiveHat(); return id ? getHatDef(id) : null; });
  const [activeTrail] = useState(() => { const id = getActiveTrail(); return id ? getTrailDef(id) : null; });
  const [avatarMood, setAvatarMood] = useState<any>("idle");
  const [jumpTrigger, setJumpTrigger] = useState<any>(undefined);
  const [avatarIslandId, setAvatarIslandId] = useState<string>("i1");
  const [avatarWalking, setAvatarWalking] = useState(false);

  const avatarIsland = G7_ISLANDS.find(i => i.id === avatarIslandId) ?? G7_ISLANDS[0];

  const avatarProps = {
    gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves,
    activeHat, activeTrail,
  };

  useEffect(() => {
    const p = loadG7Progress();
    setProgress(p);
    const lastDone = [...G7_ISLANDS].reverse().find(i => p.completedIslands.includes(i.id));
    if (lastDone) setAvatarIslandId(lastDone.id);
  }, []);

  const handleIslandSelect = useCallback((island: MathIslandConfig) => {
    setActiveIsland(island);
    setAvatarIslandId(island.id);
    setAvatarMood("idle");
    setScreen("island-transition");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.search);
    const id = p.get("island");
    if (id) {
      const target = G7_ISLANDS.find(i => i.id === id);
      if (target) handleIslandSelect(target);
    }
  }, [handleIslandSelect]);

  const startMission = (mission: MathMissionConfig) => {
    if (!activeIsland) return;
    setActiveMission(mission);
    setAvatarMood("focused");

    if (mission.gameType === "m2" || mission.gameType === "m3") {
      setQuestions([]);
      setScreen(mission.gameType as Screen);
      return;
    }

    const qs = generateIslandQuestionsG7(activeIsland, lang as Lang);
    setQuestions(qs);
    setScreen(mission.gameType as Screen);
  };

  const handleMissionDone = (score: number, total: number) => {
    if (!activeIsland || !activeMission) return;
    setMissionScore({ score, total });

    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;

    const wasIslandDone = isIslandDoneG7(progress, activeIsland.id);
    const newProgress = completeMissionG7(progress, activeIsland.id, activeMission.id, stars);
    const isNowIslandDone = isIslandDoneG7(newProgress, activeIsland.id);

    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    saveG7Progress(newProgress);
    setProgress(newProgress);
    setAvatarMood(pct >= 60 ? "victory" : "disappointed");
    setScreen("mission-done");
  };

  const handleAfterMission = () => {
    if (justUnlockedIsland) setScreen("island-complete-anim");
    else setScreen("mission-select");
  };

  const handleIslandAnimDone = () => {
    const rarity = calculateRarity(missionScore.score, missionScore.total, 0, false);
    saveCard({ id: generateCardId(), game: "astromath", rarity, score: missionScore.score, total: missionScore.total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score: missionScore.score, total: missionScore.total });
    setScreen("reward");
  };

  const startCheckpoint = (testId: string) => {
    setActiveTestId(testId);
    setAvatarMood("focused");
    const qs = generateCheckpointQuestionsG7(testId, lang as Lang);
    setQuestions(qs);
    setScreen("rocket-launch");
  };

  const handleCheckpointDone = (score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });
    const newProgress = completeTestG7(progress, activeTestId);
    saveG7Progress(newProgress);
    setProgress(newProgress);
    const rarity = calculateRarity(score, total, 0, false);
    saveCard({ id: generateCardId(), game: "astromath", rarity, score, total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score, total });
    setScreen("reward");
  };

  const goToMap = () => {
    setScreen("island-map");
    setActiveIsland(null);
    setActiveMission(null);
    setActiveTestId(null);
    setAvatarMood("idle");
  };

  const bgColor = activeIsland?.color ?? "#FF9500";

  if (screen === "island-map") {
    const totalDone = G7_ISLANDS.filter(i => isIslandDoneG7(progress, i.id)).length;
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2 flex-shrink-0">
          <button onClick={() => router.push("/astromath")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors"><ChevronLeft size={18} /></button>
          <div className="text-center">
            <h1 className="text-lg font-black text-white">🪐 {t.islandMap}</h1>
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{GRADE_LABEL[lang as string] ?? GRADE_LABEL.en}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">{totalDone}/{G7_ISLANDS.length}</div>
        </div>
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #FF9500, #EC4899)" }} initial={{ width: 0 }} animate={{ width: `${(totalDone / G7_ISLANDS.length) * 100}%` }} transition={{ duration: 0.8 }} />
          </div>
        </div>
        <div className="relative z-10 flex-1 min-h-0 overflow-y-auto" ref={attachAutoScrollToBottom}>
          <div className="max-w-sm mx-auto px-2 pb-6" style={{ minHeight: MAP_H + 40 }}>
            <div className="relative">
              <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={startCheckpoint} />
              <motion.div className="absolute pointer-events-none z-10" style={{ width: 72, height: 72, transform: "translate(-50%, -50%)" }}
                animate={{ left: `${((avatarIsland.svgX + (avatarIsland.svgX > MAP_W / 2 ? -54 : 54)) / MAP_W) * 100}%`, top: `${((avatarIsland.svgY + MAP_VB_OFFSET) / MAP_H) * 100}%`, opacity: 1 }}>
                <AvatarCompanion fixed={false} mood={avatarWalking ? "happy" : "idle"} passThrough={true} {...avatarProps} />
              </motion.div>
            </div>
          </div>
        </div>
        <VisualLabFab onClick={() => setVisualLabOpen(true)} />
        <VisualLab subject="astromath" grade={7} lang={lang as any} open={visualLabOpen} onClose={() => setVisualLabOpen(false)} />
      </div>
    );
  }

  if (screen === "island-intro" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield /><div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4"><button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button></div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center pb-6">
          <motion.div className="text-7xl" initial={{ scale: 0 }} animate={{ scale: 1 }}>{activeIsland.icon}</motion.div>
          <div><h2 className="text-2xl font-black text-white">{activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2><p className="text-white/60 text-sm mt-2 font-medium">{activeIsland.missions.length} {t.missions}</p></div>
          <motion.button onClick={() => setScreen("mission-select")} className="w-full max-w-xs py-4 rounded-2xl font-black text-white" style={{ background: `linear-gradient(135deg, ${bgColor}55, ${bgColor}99)`, border: `2px solid ${bgColor}` }}>{t.start} <ChevronRight size={20} className="inline"/></motion.button>
        </div>
      </div>
    );
  }

  if (screen === "mission-select" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2"><button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button><h2 className="font-black text-white">{activeIsland.icon} {activeIsland.name[lang as Lang]}</h2><div className="w-9"/></div>
        <div className="relative z-10 flex-1 flex flex-col px-5 gap-4 pb-8 justify-center">
          {activeIsland.missions.map((m) => {
            const cfg = MATH_CATEGORY_CONFIG[m.category];
            const bestStars = (progress.missionStars || {})[`${activeIsland.id}_${m.id}`] || 0;
            return (
              <button key={m.id} onClick={() => startMission(m)} className="w-full rounded-3xl p-5 text-left flex flex-col gap-2" style={{ background: cfg.bg, border: `2px solid ${bestStars > 0 ? cfg.color : cfg.border}` }}>
                <div className="flex justify-between"><span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ background: `${cfg.color}25`, color: cfg.color }}>{cfg.label[lang as Lang]}</span><span className="text-sm">{"⭐".repeat(bestStars)}</span></div>
                <div className="flex items-center gap-3"><span className="text-3xl">{m.icon}</span><div><p className="font-black text-white">{m.label[lang as Lang]}</p><p className="text-xs" style={{ color: `${cfg.color}cc` }}>{cfg.desc[lang as Lang]}</p></div></div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const handleCorrect = () => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); };
  const handleWrong = () => setAvatarMood("disappointed");

  const gameContent = (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}18 0%, #060614 55%)` }}>
      <Starfield />
      <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
        <button onClick={() => setScreen("mission-select")} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
        <div><p className="text-white/70 text-xs font-bold">{activeIsland?.icon} {activeIsland?.name[lang as Lang]}</p><p className="text-white/50 text-[10px]">{activeMission?.label[lang as Lang]}</p></div>
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
        {screen === "orbit-quiz" && <OrbitQuiz questions={questions} color={bgColor} onDone={handleMissionDone} onCorrect={handleCorrect} onWrong={handleWrong} />}
        {screen === "black-hole" && <BlackHole questions={questions} color={bgColor} onDone={handleMissionDone} onCorrect={handleCorrect} onWrong={handleWrong} />}
        {screen === "gravity-sort" && <GravitySort sortRange={activeIsland?.sortRange || [0, 100]} color={bgColor} onDone={handleMissionDone} generateRound={activeIsland?.id === "i1" ? generatePowerSortRound : undefined} />}
        {screen === "star-match" && <StarMatch questions={questions} color={bgColor} onDone={handleMissionDone} />}
        {screen === "number-duel" && <NumberDuel sortRange={activeIsland?.sortRange || [0, 100]} color={bgColor} onDone={handleMissionDone} />}
        {screen === "speed-round" && <SpeedRound questions={questions} color={bgColor} lang={lang as Lang} onDone={handleMissionDone} onCorrect={handleCorrect} onWrong={handleWrong} />}
        {screen === "equation-drill" && <EquationDrill questions={questions} color={bgColor} lang={lang as Lang} onDone={handleMissionDone} onCorrect={handleCorrect} onWrong={handleWrong} />}
        {screen === "fraction-visual" && <FractionVisual color={bgColor} lang={lang as Lang} onDone={handleMissionDone} onCorrect={handleCorrect} onWrong={handleWrong} />}
        {screen === "algebra-explorer" && <AlgebraExplorer7 color={bgColor} lang={lang as Lang} onDone={handleMissionDone} />}
        {screen === "stat-explorer" && <StatExplorer7 color={bgColor} lang={lang as Lang} onDone={handleMissionDone} />}
        {screen === "true-false-blitz" && <TrueFalseBlitz topicKeys={activeIsland?.topicKeys || []} color={bgColor} lang={lang as Lang} onDone={handleMissionDone} />}
        {screen === "power-explorer" && <PowerExplorer7 color={bgColor} lang={lang as Lang} onDone={handleMissionDone} />}
        {screen === "equation-explorer" && <EquationExplorer7 color={bgColor} lang={lang as Lang} onDone={handleMissionDone} />}
        {screen === "inequality-explorer" && <InequalityExplorer7 color={bgColor} lang={lang as Lang} onDone={handleMissionDone} />}
        {screen === "triangle-explorer" && <TriangleExplorer7 color={bgColor} lang={lang as Lang} onDone={handleMissionDone} />}
        {screen === "pythagoras-explorer" && <PythagorasExplorer7 color={bgColor} lang={lang as Lang} onDone={handleMissionDone} />}
        {screen === "circle-explorer" && <CircleExplorer7 color={bgColor} lang={lang as Lang} onDone={handleMissionDone} />}
        {screen === "visual-challenge" && (
          <VisualChallenge color={bgColor} rounds={5} onDone={handleMissionDone} renderVisual={(l, onAns) => {
            if (activeMission?.visualType === "pythagorean") return <PythagoreanVisual lang={l as any} onAnswer={onAns} />;
            if (activeMission?.visualType === "cylinder-volume") return <CylinderVolume lang={l as any} onAnswer={onAns} />;
            return null;
          }} />
        )}
        {screen === "m2" && activeMission?.gameKey && MATH_M2_POOLS[activeMission.gameKey] && (
          <M2Engine gameKey={activeMission.gameKey} rounds={MATH_M2_POOLS[activeMission.gameKey]} color={bgColor} lang={lang as any} onDone={handleMissionDone} onCorrect={handleCorrect} onWrong={handleWrong} />
        )}
        {screen === "m3" && activeMission?.gameKey && MATH_M3_POOLS[activeMission.gameKey] && (
          <M3Engine gameKey={activeMission.gameKey} rounds={MATH_M3_POOLS[activeMission.gameKey]} color={bgColor} lang={lang as any} onDone={handleMissionDone} onCorrect={handleCorrect} onWrong={handleWrong} />
        )}
      </div>
      <AvatarCompanion fixed={true} mood={avatarMood} jumpTrigger={jumpTrigger} {...avatarProps} />
    </div>
  );

  const gameScreens = ["orbit-quiz", "black-hole", "gravity-sort", "star-match", "number-duel", "speed-round", "equation-drill", "fraction-visual", "algebra-explorer", "stat-explorer", "true-false-blitz", "power-explorer", "equation-explorer", "inequality-explorer", "triangle-explorer", "pythagoras-explorer", "circle-explorer", "visual-challenge", "m2", "m3"];
  if (gameScreens.includes(screen)) return gameContent;

  if (screen === "rocket-launch" && activeTestId) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.18) 0%, #060614 55%)" }}>
        <Starfield />
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3"><button onClick={goToMap} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button><div className="flex-1"><p className="text-white font-black text-sm">{t.rocketTitle}</p><p className="text-white/50 text-[10px]">{t.rocketDesc}</p></div></div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          <RocketLaunch questions={questions} color="#10B981" onDone={() => setScreen("checkpoint-intro")} />
        </div>
        <AvatarCompanion fixed={true} mood="focused" {...avatarProps} />
      </div>
    );
  }

  if (screen === "island-transition") {
    return (
      <div className="min-h-screen bg-[#060614] relative">
        <Starfield />
        <RocketTransition color={bgColor} onDone={() => setScreen("island-intro")} />
      </div>
    );
  }

  if (screen === "island-complete-anim" && activeIsland) {
    return (
      <IslandCompleteAnimation
        islandIcon={activeIsland.icon}
        islandColor={activeIsland.color}
        islandName={activeIsland.name[lang as Lang] ?? activeIsland.name.en}
        lang={lang}
        grade={7}
        score={missionScore.score}
        total={missionScore.total}
        onDone={handleIslandAnimDone}
      />
    );
  }

  if (screen === "mission-done" && activeIsland && activeMission) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5" style={{ background: `radial-gradient(ellipse at 50% 30%, ${bgColor}22 0%, #060614 60%)` }}>
        <Starfield />
        <div className="relative z-10 w-full"><MissionDoneScreen mission={activeMission} island={activeIsland} score={missionScore.score} total={missionScore.total} onContinue={handleAfterMission} /></div>
      </div>
    );
  }

  if (screen === "reward" && earnedCard) {
    return (
      <>
        <RewardReveal rarity={earnedCard} game="astromath" score={rewardScore.score} total={rewardScore.total} onDone={() => activeTestId ? setScreen("checkpoint-done") : setScreen("island-done")} />
        <MilestonePopup />
      </>
    );
  }

  if (screen === "island-done" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5" style={{ background: `radial-gradient(ellipse at 50% 30%, ${bgColor}22 0%, #060614 60%)` }}>
        <Starfield />
        <div className="relative z-10 w-full"><IslandDoneScreen island={activeIsland} onContinue={goToMap} /></div>
        <MilestonePopup />
      </div>
    );
  }

  if (screen === "checkpoint-intro" && activeTestId) {
    const testTopicsG7: Record<string, Record<string, string>> = {
      en: { test1: "Powers, Algebra, Equations", test2: "Inequalities, Triangles, Pythagoras", test3: "Circles, Surface Area, Statistics" },
      hu: { test1: "Hatványok, algebra, egyenletek", test2: "Egyenlőtlenségek, háromszögek, Pitagorasz", test3: "Körök, felszín, statisztika" },
      de: { test1: "Potenzen, Algebra, Gleichungen", test2: "Ungleichungen, Dreiecke, Pythagoras", test3: "Kreise, Oberflächen, Statistik" },
      ro: { test1: "Puteri, algebră, ecuații", test2: "Inegalități, triunghiuri, Pitagora", test3: "Cercuri, suprafețe, statistică" },
    };
    const topicDesc = testTopicsG7[lang as string]?.[activeTestId] || "";
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5 gap-6" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield /><div className="relative z-10 flex flex-col items-center gap-5 text-center w-full max-w-sm"><button onClick={goToMap} className="absolute top-0 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button><div className="text-6xl">🎓</div><div><h2 className="text-2xl font-black text-[#FFD700]">{t.checkpointReady}</h2><p className="text-white/60 text-sm mt-2">{t.checkpointDesc}</p><p className="text-white/40 text-xs mt-2">{topicDesc}</p></div>
        <button onClick={() => { const qs = generateCheckpointQuestionsG7(activeTestId, lang as Lang); setQuestions(qs); setScreen("checkpoint-quiz"); }} className="w-full py-4 rounded-2xl font-black text-black" style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>{t.startTest} 🚀</button></div>
      </div>
    );
  }

  if (screen === "checkpoint-quiz" && activeTestId) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.12) 0%, #060614 55%)" }}>
        <Starfield /><div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3"><button onClick={goToMap} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button><p className="text-white/70 text-sm font-bold flex-1">{t.checkpointTitle}</p></div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          <OrbitQuiz questions={questions} color="#FFD700" onDone={handleCheckpointDone} onCorrect={handleCorrect} onWrong={handleWrong} />
        </div>
        <AvatarCompanion fixed={true} mood={avatarMood} jumpTrigger={jumpTrigger} {...avatarProps} />
      </div>
    );
  }

  if (screen === "checkpoint-done" && activeTestId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield /><div className="relative z-10 w-full flex flex-col items-center gap-6 text-center"><div className="text-6xl">🏆</div><div><p className="text-white/60 text-sm">{t.testDone}</p><h2 className="text-2xl font-black text-[#FFD700]">{checkpointScore.score}/{checkpointScore.total}</h2></div><button onClick={goToMap} className="w-full py-4 rounded-2xl font-black text-white" style={{ background: "linear-gradient(135deg, #FFD70055, #FFD70099)", border: "2px solid #FFD700" }}>{t.back} {t.islandMap}</button></div>
        <MilestonePopup />
      </div>
    );
  }

  return null;
}
