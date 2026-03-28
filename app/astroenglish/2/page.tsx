"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";
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
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import WordSortExplorer from "@/app/astroenglish/games/WordSortExplorer";
import SentenceBuilderExplorer from "@/app/astroenglish/games/SentenceBuilderExplorer";
import FillGapExplorer from "@/app/astroenglish/games/FillGapExplorer";
import SpellRaceExplorer from "@/app/astroenglish/games/SpellRaceExplorer";
import CategoryRushExplorer from "@/app/astroenglish/games/CategoryRushExplorer";
import GrammarMatchExplorer from "@/app/astroenglish/games/GrammarMatchExplorer";
import PhonicsExplorer from "@/app/astroenglish/games/PhonicsExplorer";
import PictureVocabExplorer from "@/app/astroenglish/games/PictureVocabExplorer";
import RhymeMatchExplorer from "@/app/astroenglish/games/RhymeMatchExplorer";
import WordBuildExplorer from "@/app/astroenglish/games/WordBuildExplorer";
import ReadingCompExplorer from "@/app/astroenglish/games/ReadingCompExplorer";
import MemoryPairExplorer from "@/app/astroenglish/games/MemoryPairExplorer";
import PronunciationExplorer from "@/app/astroenglish/games/PronunciationExplorer";
import K2Explorer from "@/app/astroenglish/games/k2/K2Explorer";
import {
  K2_ISLANDS, K2_CHECKPOINT_MAP, K2_CHECKPOINT_TOPICS,
  type IslandDef, type MissionDef, type Lang, type MissionCategory, type EnglishProgress,
  loadK2Progress, saveK2Progress,
  isMissionDoneK2, isIslandDoneK2, isIslandUnlockedK2,
  isCheckpointUnlockedK2, isCheckpointDoneK2,
  completeMissionK2, completeTestK2, islandTotalStarsK2,
  generateIslandQuestionsK2, generateCheckpointQuestionsK2,
} from "@/lib/astroEnglish2";
import { K2_ISLAND_SVGS } from "@/app/astroenglish/islands-k2";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

// ─── Grade 2 labels ────────────────────────────────────────────────────────────
const K2_LABEL: Record<string, string> = {
  en: "Grade 2 · Word Galaxy",
  hu: "2. osztály · Szó Galaxis",
  de: "Klasse 2 · Wörter-Galaxie",
  ro: "Clasa 2 · Galaxia cuvintelor",
};

// ─── Screen types ──────────────────────────────────────────────────────────────
type Screen =
  | "island-map"
  | "island-intro"
  | "island-transition"
  | "island-complete-anim"
  | "mission-select"
  | "orbit-quiz"
  | "black-hole"
  | "gravity-sort"
  | "star-match"
  | "speed-round"
  | "word-sort"
  | "sentence-builder"
  | "fill-gap"
  | "spell-race"
  | "category-rush"
  | "grammar-match"
  | "phonics"
  | "picture-vocab"
  | "rhyme-match"
  | "word-build"
  | "reading-comp"
  | "memory-pair"
  | "pronunciation"
  | "english-k2-explore"
  | "mission-done"
  | "island-done"
  | "reward"
  | "checkpoint-intro"
  | "checkpoint-quiz"
  | "checkpoint-done"
  | "rocket-launch";

// ─── Starfield ─────────────────────────────────────────────────────────────────
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
      <div className="absolute" style={{ left: "10%", top: "20%", width: 200, height: 200,
        background: "radial-gradient(ellipse, rgba(100,50,200,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div className="absolute" style={{ left: "55%", top: "55%", width: 160, height: 160,
        background: "radial-gradient(ellipse, rgba(0,150,255,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
    </div>
  );
}

// ─── Island Map SVG ────────────────────────────────────────────────────────────
const MAP_W = 320;
const MAP_H = 860;
const MAP_VB_OFFSET = 220;

const CP_POS: Record<string, { x: number; y: number }> = {
  test1: { x: 155, y: 295 },
  test2: { x: 155, y: 50 },
  test3: { x: 155, y: -165 },
};

function buildSmoothPath(islands: typeof K2_ISLANDS): string {
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
  progress: EnglishProgress;
  onIsland: (island: IslandDef) => void;
  onCheckpoint: (testId: string) => void;
}) {
  const pathD = buildSmoothPath(K2_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowK2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowK2" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1k2" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2k2" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1k2)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2k2)" />

      <path d={pathD} fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth={8}
        filter="url(#pathGlowK2)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {K2_ISLANDS.slice(0, -1).map((island, i) => {
        const next = K2_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedK2(progress, testId);
        const done = isCheckpointDoneK2(progress, testId);
        const color = done ? "#00FF88" : unlocked ? "#FFD700" : "rgba(255,255,255,0.2)";
        const fillAlpha = done ? "rgba(0,255,136,0.15)" : unlocked ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.03)";
        return (
          <g key={testId} onClick={() => unlocked && !done && onCheckpoint(testId)}
            style={{ cursor: unlocked && !done ? "pointer" : "default" }}>
            {unlocked && !done && (
              <circle cx={pos.x} cy={pos.y} r={22} fill="none" stroke={color} strokeWidth={1}
                opacity={0.3} strokeDasharray="4 3" />
            )}
            <rect x={pos.x - 48} y={pos.y - 16} width={96} height={32} rx={16}
              fill={fillAlpha} stroke={color} strokeWidth={done ? 1.5 : 2} />
            <text x={pos.x - 32} y={pos.y + 5} textAnchor="middle" fontSize={13}>
              {done ? "✅" : unlocked ? "🚀" : "🔒"}
            </text>
            <text x={pos.x + 8} y={pos.y + 5} textAnchor="middle" fontSize={10} fontWeight="bold" fill={color}>
              {done ? "Fertig!" : unlocked ? "Test!" : "Test"}
            </text>
          </g>
        );
      })}

      {K2_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedK2(progress, island.id);
        const done = isIslandDoneK2(progress, island.id);
        const total = islandTotalStarsK2(progress, island.id);

        return (
          <g key={island.id} onClick={() => unlocked && onIsland(island)}
            style={{ cursor: unlocked ? "pointer" : "default" }}>
            {unlocked && !done && (
              <circle cx={island.svgX} cy={island.svgY} r={40}
                fill={island.color} opacity={0.08} />
            )}
            {done && (
              <circle cx={island.svgX} cy={island.svgY} r={36}
                fill="none" stroke="#FFD700" strokeWidth={1.5} opacity={0.5}
                strokeDasharray="5 3" />
            )}
            {unlocked ? (
              K2_ISLAND_SVGS[island.id] ? (
                <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60}
                  overflow="visible" opacity={done ? 0.85 : 1}>
                  {React.createElement(K2_ISLAND_SVGS[island.id], { size: 60 })}
                </svg>
              ) : (
                <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={20}
                  opacity={done ? 0.85 : 1}>{island.icon}</text>
              )
            ) : (
              <>
                <circle cx={island.svgX} cy={island.svgY} r={24}
                  fill="rgba(255,255,255,0.04)"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth={1.5}
                  opacity={0.35} />
                <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={20}>🔒</text>
              </>
            )}
            {!unlocked && (
              <text x={island.svgX} y={island.svgY + 42} textAnchor="middle" fontSize={9}
                fill="rgba(255,255,255,0.2)" fontWeight="bold">{idx + 1}</text>
            )}
            {done && (
              <g>
                <circle cx={island.svgX + 22} cy={island.svgY - 20} r={11} fill="#FFD700" />
                <text x={island.svgX + 22} y={island.svgY - 15} textAnchor="middle" fontSize={11} fill="#000" fontWeight="bold">✓</text>
              </g>
            )}
            {unlocked && !done && (
              <g>
                {island.missions.map((m, mi) => {
                  const mdone = isMissionDoneK2(progress, island.id, m.id);
                  return (
                    <g key={mi}>
                      <circle cx={island.svgX - 8 + mi * 8} cy={island.svgY + 34} r={4}
                        fill={mdone ? island.color : "rgba(255,255,255,0.08)"}
                        stroke={mdone ? island.color : "rgba(255,255,255,0.2)"} strokeWidth={1} />
                    </g>
                  );
                })}
              </g>
            )}
            {unlocked && (
              <text x={island.svgX} y={island.svgY + 48} textAnchor="middle" fontSize={9} fontWeight="bold"
                fill={total === 9 ? "#FFD700" : total > 0 ? island.color : "rgba(255,255,255,0.25)"}>
                {total > 0 ? `${total}/9 ⭐` : island.name.en.split(" ")[0]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Mission Done screen ───────────────────────────────────────────────────────
function MissionDoneScreen({ mission, island, score, total, onContinue }: {
  mission: MissionDef; island: IslandDef; score: number; total: number; onContinue: () => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const pct = Math.round((score / total) * 100);
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

// ─── Island Done screen ────────────────────────────────────────────────────────
function IslandDoneScreen({ island, onContinue }: { island: IslandDef; onContinue: () => void }) {
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

// ─── Checkpoint Done ───────────────────────────────────────────────────────────
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

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function AstroEnglishK2Page() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [screen, setScreen] = useState<Screen>("island-map");
  const [progress, setProgress] = useState<EnglishProgress>({ completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} });
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [checkpointScore, setCheckpointScore] = useState({ score: 0, total: 10 });
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [justUnlockedIsland, setJustUnlockedIsland] = useState(false);

  // ── Avatar state ──────────────────────────────────────────────────────────────
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
  const [avatarMood, setAvatarMood] = useState<"idle"|"focused"|"happy"|"disappointed"|"victory"|"surprised"|"confused"|"laughing">("idle");
  const [jumpTrigger, setJumpTrigger] = useState<{ reaction: "happy" | "victory" | null; timestamp: number } | undefined>(undefined);
  const [avatarIslandId, setAvatarIslandId] = useState<string>("i1");
  const [avatarWalking, setAvatarWalking] = useState(false);
  const walkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const avatarIsland = K2_ISLANDS.find(i => i.id === avatarIslandId) ?? K2_ISLANDS[0];

  const avatarProps = {
    gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves,
    activeHat, activeTrail,
  };

  useEffect(() => {
    const p = loadK2Progress();
    setProgress(p);
    const lastDone = [...K2_ISLANDS].reverse().find(i => p.completedIslands.includes(i.id));
    if (lastDone) setAvatarIslandId(lastDone.id);
    return () => { if (walkTimerRef.current) clearTimeout(walkTimerRef.current); };
  }, []);

  // ── Island selected ──────────────────────────────────────────────────────────
  const handleIslandSelect = useCallback((island: IslandDef) => {
    if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
    setActiveIsland(island);
    setAvatarIslandId(island.id);
    setAvatarWalking(false);
    setAvatarMood("idle");
    setScreen("island-transition");
  }, []);

  // ── Start mission ────────────────────────────────────────────────────────────
  const startMission = useCallback((mission: MissionDef) => {
    if (!activeIsland) return;
    setActiveMission(mission);
    setAvatarMood("focused");

    // Explorer games use generated content, quiz games use questions
    const isExplorer = ["fill-gap", "category-rush", "grammar-match", "word-sort", "sentence-builder", "spell-race", "phonics", "picture-vocab", "rhyme-match", "word-build", "reading-comp", "memory-pair", "pronunciation", "en2-noun-explorer", "en2-verb-explorer", "en2-adjective-explorer", "en2-sentence-explorer", "en2-vowel-explorer", "en2-prefix-explorer", "en2-meaning-explorer", "en2-grammar-review-explorer", "en2-big-test-explorer", "english-k2-explore"].includes(mission.gameType);

    if (isExplorer) {
      // Explorers don't need questions, content is generated per game
      setQuestions([]);
    } else {
      const qCount = mission.gameType === "star-match" ? 20 : 10;
      const qs = generateIslandQuestionsK2(activeIsland, lang, qCount);
      setQuestions(qs);
    }

    const en2Explorers = ["en2-noun-explorer", "en2-verb-explorer", "en2-adjective-explorer", "en2-sentence-explorer", "en2-vowel-explorer", "en2-prefix-explorer", "en2-meaning-explorer", "en2-grammar-review-explorer", "en2-big-test-explorer"];
    if (en2Explorers.includes(mission.gameType)) {
      setScreen("english-k2-explore");
    } else {
      setScreen(mission.gameType as Screen);
    }
  }, [activeIsland, lang]);

  // ── Mission finished ─────────────────────────────────────────────────────────
  const handleMissionDone = useCallback((score: number, total: number) => {
    if (!activeIsland || !activeMission) return;
    setMissionScore({ score, total });

    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;

    const wasIslandDone = progress.completedIslands.includes(activeIsland.id);
    const newProgress = completeMissionK2(progress, activeIsland.id, activeMission.id, stars);
    const isNowIslandDone = newProgress.completedIslands.includes(activeIsland.id);
    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    saveK2Progress(newProgress);
    setProgress(newProgress);

    const pct2 = total > 0 ? Math.round((score / total) * 100) : 0;
    setAvatarMood(pct2 >= 60 ? "victory" : "disappointed");
    setScreen("mission-done");
  }, [activeIsland, activeMission, progress]);

  // ── After mission-done: check if island complete ─────────────────────────────
  const handleAfterMission = useCallback(() => {
    if (!activeIsland) return;
    if (justUnlockedIsland) {
      setScreen("island-complete-anim");
    } else {
      setScreen("mission-select");
    }
  }, [activeIsland, justUnlockedIsland]);

  const handleIslandAnimDone = useCallback(() => {
    const rarity = calculateRarity(missionScore.score, missionScore.total, 0, false);
    saveCard({ id: generateCardId(), game: "astroenglish", rarity, score: missionScore.score, total: missionScore.total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score: missionScore.score, total: missionScore.total });
    setScreen("reward");
  }, [missionScore]);

  // ── Checkpoint ───────────────────────────────────────────────────────────────
  const startCheckpoint = useCallback((testId: string) => {
    setActiveTestId(testId);
    setAvatarMood("focused");
    const qs = generateCheckpointQuestionsK2(testId, lang, 7);
    setQuestions(qs);
    setScreen("rocket-launch");
  }, []);

  const startCheckpointQuiz = useCallback(() => {
    if (!activeTestId) return;
    const qs = generateCheckpointQuestionsK2(activeTestId, lang, 10);
    setQuestions(qs);
    setScreen("checkpoint-quiz");
  }, [activeTestId, lang]);

  const handleCheckpointDone = useCallback((score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });

    const newProgress = completeTestK2(progress, activeTestId);
    saveK2Progress(newProgress);
    setProgress(newProgress);

    const rarity = calculateRarity(score, total, 0, false);
    saveCard({ id: generateCardId(), game: "astroenglish", rarity, score, total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score, total });
    setScreen("reward");
  }, [activeTestId, progress]);

  const goToMap = useCallback(() => {
    setAvatarMood("idle");
    setScreen("island-map");
    setActiveIsland(null);
    setActiveMission(null);
    setActiveTestId(null);
  }, []);

  const bgColor = activeIsland?.color ?? "#3B82F6";

  // ─── Content generators for K2 explorers ──────────────────────────────────

  interface FillGapRound { sentence: string; options: string[]; correctIndex: number; explanation: string }
  interface CategoryRushRound { items: Array<{ text: string; category: string }>; categories: string[] }
  interface GrammarMatchRound { question: string; items: Array<{ text: string; id: string }>; pairs: Record<string, string>; explanation: string }
  interface WordSortRound { words: string[]; categories: string[]; wordCategories: Record<string, string> }
  interface SentenceBuilderPart { type: "text" | "blank"; value?: string; options?: string[] }
  interface SentenceBuilderRound { parts: SentenceBuilderPart[]; correctFill: string; explanation: string }
  interface SpellRaceRound { word: string; targetLanguage: string }

  // Grade 2 nouns: common vs proper
  function generateWordSortK2(islandId: string): WordSortRound[] {
    if (islandId === "i1") {
      return [
        {
          words: ["dog", "apple", "Maria", "car", "Sarah", "school", "Sam", "book"],
          categories: ["common nouns", "proper nouns"],
          wordCategories: { dog: "common nouns", apple: "common nouns", Maria: "proper nouns", car: "common nouns", Sarah: "proper nouns", school: "common nouns", Sam: "proper nouns", book: "common nouns" },
        },
        {
          words: ["teacher", "Monday", "john", "park", "Mrs. Smith", "pencil", "london", "tree"],
          categories: ["common nouns", "proper nouns"],
          wordCategories: { teacher: "common nouns", Monday: "proper nouns", john: "proper nouns", park: "common nouns", "Mrs. Smith": "proper nouns", pencil: "common nouns", london: "proper nouns", tree: "common nouns" },
        },
        {
          words: ["boy", "girl", "Tom", "Emma", "friend", "Texas", "house", "river"],
          categories: ["common nouns", "proper nouns"],
          wordCategories: { boy: "common nouns", girl: "common nouns", Tom: "proper nouns", Emma: "proper nouns", friend: "common nouns", Texas: "proper nouns", house: "common nouns", river: "common nouns" },
        },
      ];
    }
    return [];
  }

  // Grade 2 verbs: action words with various tenses
  function generateFillGapK2(islandId: string): FillGapRound[] {
    if (islandId === "i2") {
      return [
        { sentence: "The cat ___ on the mat.", options: ["sits", "sit", "sitting", "sat"], correctIndex: 0, explanation: "'Sits' is the correct present tense for 'the cat' (he/she/it)." },
        { sentence: "I ___ an apple for lunch.", options: ["eats", "ate", "eat", "eating"], correctIndex: 2, explanation: "'Eat' is the correct present tense for 'I' (first person)." },
        { sentence: "They ___ to the park yesterday.", options: ["goes", "go", "going", "went"], correctIndex: 3, explanation: "'Went' is the correct past tense for 'they' (they went = completed action)." },
        { sentence: "She ___ a beautiful song.", options: ["sing", "sings", "sang", "singing"], correctIndex: 1, explanation: "'Sings' is correct for 'she' in the present tense." },
        { sentence: "The dog ___ the ball last week.", options: ["catch", "catches", "caught", "catching"], correctIndex: 2, explanation: "'Caught' is the correct past tense for the dog's action." },
        { sentence: "We ___ to school every day.", options: ["walk", "walks", "walked", "walking"], correctIndex: 0, explanation: "'Walk' is the correct present tense for 'we' (first person plural)." },
        { sentence: "He ___ two glasses of milk.", options: ["drink", "drinks", "drank", "drinking"], correctIndex: 2, explanation: "'Drank' is the correct past tense." },
        { sentence: "The bird ___ in the sky.", options: ["fly", "flies", "flew", "flying"], correctIndex: 1, explanation: "'Flies' is correct for 'the bird' in the present tense." },
      ];
    }
    return [];
  }

  // Grade 2 adjectives: describing words
  function generateCategoryRushK2(islandId: string): CategoryRushRound[] {
    if (islandId === "i3") {
      return [
        {
          items: [
            { text: "big", category: "size" },
            { text: "small", category: "size" },
            { text: "red", category: "color" },
            { text: "blue", category: "color" },
            { text: "tall", category: "size" },
            { text: "yellow", category: "color" },
          ],
          categories: ["size", "color"],
        },
        {
          items: [
            { text: "happy", category: "feeling" },
            { text: "sad", category: "feeling" },
            { text: "soft", category: "texture" },
            { text: "hard", category: "texture" },
            { text: "angry", category: "feeling" },
            { text: "smooth", category: "texture" },
          ],
          categories: ["feeling", "texture"],
        },
        {
          items: [
            { text: "hot", category: "temperature" },
            { text: "cold", category: "temperature" },
            { text: "fast", category: "speed" },
            { text: "slow", category: "speed" },
            { text: "warm", category: "temperature" },
            { text: "quick", category: "speed" },
          ],
          categories: ["temperature", "speed"],
        },
      ];
    }
    return [];
  }

  // Grade 2 sentences: simple & compound
  function generateSentenceBuilderK2(islandId: string): SentenceBuilderRound[] {
    if (islandId === "i4") {
      return [
        {
          parts: [
            { type: "text", value: "The cat is" },
            { type: "blank", options: ["hungry", "jumping", "sleeping"] },
            { type: "text", value: "and the dog is playing." },
          ],
          correctFill: "sleeping",
          explanation: "Both 'cat' and 'dog' need similar action form. 'Sleeping' describes what the cat is doing.",
        },
        {
          parts: [
            { type: "text", value: "I like" },
            { type: "blank", options: ["run", "running", "runs"] },
            { type: "text", value: "in the park." },
          ],
          correctFill: "running",
          explanation: "After 'like' we use the -ing form: 'like running'.",
        },
        {
          parts: [
            { type: "text", value: "She" },
            { type: "blank", options: ["play", "plays", "playing"] },
            { type: "text", value: "soccer with her friends." },
          ],
          correctFill: "plays",
          explanation: "'She' needs the present tense -s form: 'plays'.",
        },
      ];
    }
    return [];
  }

  // Grade 2 spelling: vowel patterns (short & long vowels)
  function generateSpellRaceK2(islandId: string): SpellRaceRound[] {
    if (islandId === "i5") {
      return [
        { word: "cat", targetLanguage: "en" },
        { word: "cake", targetLanguage: "en" },
        { word: "dog", targetLanguage: "en" },
        { word: "rope", targetLanguage: "en" },
        { word: "sit", targetLanguage: "en" },
        { word: "bike", targetLanguage: "en" },
        { word: "sun", targetLanguage: "en" },
        { word: "make", targetLanguage: "en" },
      ];
    }
    return [];
  }

  // Grade 2 prefixes & suffixes (un-, -ed, -ing)
  function generateGrammarMatchK2(islandId: string): GrammarMatchRound[] {
    if (islandId === "i6") {
      return [
        {
          question: "Match words with their prefix/suffix meanings:",
          items: [
            { text: "unhappy", id: "1" },
            { text: "playing", id: "2" },
            { text: "jumped", id: "3" },
            { text: "unzip", id: "4" },
          ],
          pairs: {
            "1": "un- (not): opposite of happy",
            "2": "-ing: action happening now",
            "3": "-ed: action completed in past",
            "4": "un- (not): to open by removing zip",
          },
          explanation: "Prefixes (un-) go at the start; suffixes (-ed, -ing) go at the end.",
        },
        {
          question: "Match the changed words:",
          items: [
            { text: "unkind", id: "1" },
            { text: "running", id: "2" },
            { text: "looked", id: "3" },
            { text: "unclear", id: "4" },
          ],
          pairs: {
            "1": "un- (not): opposite of kind",
            "2": "-ing: action in progress",
            "3": "-ed: past action (look + ed)",
            "4": "un- (not): not clear",
          },
          explanation: "Words change meaning with prefixes and suffixes added to them.",
        },
      ];
    }
    return [];
  }

  function getExplorerContentK2(islandId: string, gameType: string): any {
    switch (gameType) {
      case "word-sort":
        return generateWordSortK2(islandId);
      case "fill-gap":
        return generateFillGapK2(islandId);
      case "category-rush":
        return generateCategoryRushK2(islandId);
      case "sentence-builder":
        return generateSentenceBuilderK2(islandId);
      case "spell-race":
        return generateSpellRaceK2(islandId);
      case "grammar-match":
        return generateGrammarMatchK2(islandId);
      case "phonics":
        return [
          { sound: "/sh/", words: ["ship", "shop", "shoe", "shell", "shake", "sharp"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /sh/ sound is spelled 'sh'" },
          { sound: "/ch/", words: ["chair", "cheese", "child", "choice", "chalk", "teach"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /ch/ sound is spelled 'ch'" },
          { sound: "/th/", words: ["think", "this", "that", "three", "thank", "with"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /th/ sound is spelled 'th'" },
          { sound: "/ng/", words: ["sing", "ring", "king", "thing", "long", "wrong"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /ng/ sound is spelled 'ng'" },
        ];
      case "picture-vocab":
        return [
          { emoji: "🍎", word: "apple", options: ["apple", "orange", "banana", "grape"], correctIndex: 0, sentence: "I eat an apple." },
          { emoji: "🚗", word: "car", options: ["bike", "car", "truck", "bus"], correctIndex: 1, sentence: "The car is red." },
          { emoji: "🐱", word: "cat", options: ["dog", "cat", "mouse", "bird"], correctIndex: 1, sentence: "I have a cat." },
          { emoji: "📖", word: "book", options: ["pen", "book", "pencil", "paper"], correctIndex: 1, sentence: "I read a book." },
          { emoji: "⚽", word: "ball", options: ["bat", "glove", "ball", "net"], correctIndex: 2, sentence: "I play with a ball." },
        ];
      case "rhyme-match":
        return [
          { targetWord: "cat", options: ["hat", "dog", "cup", "pen"], correctIndex: 0, rhymePattern: "-at" },
          { targetWord: "sun", options: ["tree", "run", "big", "map"], correctIndex: 1, rhymePattern: "-un" },
          { targetWord: "cake", options: ["lake", "fork", "milk", "desk"], correctIndex: 0, rhymePattern: "-ake" },
          { targetWord: "night", options: ["day", "light", "dark", "moon"], correctIndex: 1, rhymePattern: "-ight" },
          { targetWord: "tree", options: ["bee", "leaf", "branch", "bird"], correctIndex: 0, rhymePattern: "-ee" },
        ];
      case "word-build":
        return [
          { parts: ["un", "happy"], correctOrder: [0, 1], resultWord: "unhappy", hint: "prefix + root", explanation: "'un-' means not" },
          { parts: ["re", "play"], correctOrder: [0, 1], resultWord: "replay", hint: "prefix + root", explanation: "'re-' means again" },
          { parts: ["play", "ing"], correctOrder: [0, 1], resultWord: "playing", hint: "root + suffix", explanation: "'-ing' shows ongoing action" },
          { parts: ["help", "ful"], correctOrder: [0, 1], resultWord: "helpful", hint: "root + suffix", explanation: "'-ful' means full of" },
          { parts: ["dis", "like"], correctOrder: [0, 1], resultWord: "dislike", hint: "prefix + root", explanation: "'dis-' means not or opposite" },
        ];
      case "reading-comp":
        return [
          { passage: "Tom has a red ball. He plays with it every day. His dog likes to chase the ball.", question: "What color is the ball?", options: ["Blue", "Red", "Green", "Yellow"], correctIndex: 1 },
          { passage: "Sara likes to read books. She goes to the library on Saturdays. Her favorite books are about animals.", question: "When does Sara go to the library?", options: ["Mondays", "Fridays", "Saturdays", "Sundays"], correctIndex: 2 },
          { passage: "The cat sat on the mat. It was a sunny day. The cat was happy and warm.", question: "Where did the cat sit?", options: ["On a chair", "On the mat", "On a bed", "On the floor"], correctIndex: 1 },
        ];
      case "memory-pair":
        return [
          { word: "happy", match: "😊" },
          { word: "sad", match: "😢" },
          { word: "dog", match: "🐕" },
          { word: "cat", match: "🐱" },
          { word: "sun", match: "☀️" },
          { word: "moon", match: "🌙" },
          { word: "star", match: "⭐" },
          { word: "fire", match: "🔥" },
        ];
      case "pronunciation":
        return [
          { word: "apple", phonetic: "/ˈæpəl/", syllables: ["ap", "ple"], stressIndex: 0, options: ["1", "2", "3"], correctIndex: 0, questionType: "syllable-count" as const },
          { word: "banana", phonetic: "/bəˈnænə/", syllables: ["ba", "na", "na"], stressIndex: 1, options: ["1st", "2nd", "3rd"], correctIndex: 1, questionType: "stress" as const },
          { word: "elephant", phonetic: "/ˈɛləfənt/", syllables: ["el", "e", "phant"], stressIndex: 0, options: ["1st", "2nd", "3rd"], correctIndex: 0, questionType: "stress" as const },
          { word: "knife", phonetic: "/naɪf/", syllables: ["knife"], options: ["k", "n", "g"], correctIndex: 0, questionType: "silent-letter" as const, explanation: "The 'k' in 'knife' is silent" },
        ];
      default:
        return [];
    }
  }

  // ─── ISLAND MAP ─────────────────────────────────────────────────────────────
  if (screen === "island-map") {
    const totalDone = progress.completedIslands.length;
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2 flex-shrink-0">
          <button onClick={() => router.push("/astroenglish")}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div className="text-center">
            <h1 className="text-lg font-black text-white">🪐 {t.islandMap}</h1>
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{K2_LABEL[lang] ?? K2_LABEL.en}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">
            {totalDone}/9
          </div>
        </div>
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #3B82F6, #10B981)" }}
              initial={{ width: 0 }} animate={{ width: `${(totalDone / 9) * 100}%` }} transition={{ duration: 0.8 }} />
          </div>
        </div>
        <div className="relative z-10 flex-1 overflow-y-auto" ref={(el) => { if (el) setTimeout(() => el.scrollTop = el.scrollHeight, 100); }}>
          <div className="max-w-sm mx-auto px-2 pb-6" style={{ minHeight: MAP_H + 40 }}>
            <div className="relative">
              <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={startCheckpoint} />
              <motion.div
                className="absolute pointer-events-none z-10"
                style={{ width: 48, height: 48, transform: "translate(-50%, -75%)" }}
                animate={{
                  left: `${(avatarIsland.svgX / MAP_W) * 100}%`,
                  top: `${((avatarIsland.svgY + MAP_VB_OFFSET) / MAP_H) * 100}%`,
                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                transition={avatarWalking
                  ? { left: { duration: 0.65, ease: "easeInOut" }, top: { duration: 0.65, ease: "easeInOut" }, opacity: { duration: 0.4 } }
                  : { opacity: { delay: 0.5, duration: 0.5 } }
                }
              >
                <AvatarCompanion
                  fixed={false}
                  mood={avatarWalking ? "happy" : "idle"}
                  passThrough={true}
                  {...avatarProps}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── ISLAND INTRO ────────────────────────────────────────────────────────────
  if (screen === "island-intro" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4">
          <button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
          <div className="w-9" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center pb-6">
          <motion.div className="text-7xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }}>
            {activeIsland.icon}
          </motion.div>
          <div>
            <h2 className="text-2xl font-black text-white">{activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
            <p className="text-white/60 text-sm mt-2 font-medium">{activeIsland.missions.length} {t.missions}</p>
          </div>
          <motion.button onClick={() => setScreen("mission-select")}
            className="w-full max-w-xs py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${bgColor}55, ${bgColor}99)`, border: `2px solid ${bgColor}` }}
            whileTap={{ scale: 0.97 }}>
            {t.start} <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    );
  }

  // ─── MISSION SELECT ──────────────────────────────────────────────────────────
  if (screen === "mission-select" && activeIsland) {
    const totalStars = islandTotalStarsK2(progress, activeIsland.id);
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2">
          <button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
          <div className="text-center">
            <h2 className="font-black text-white text-base">{activeIsland.icon} {activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
            {totalStars > 0 && (
              <div className="flex items-center justify-center gap-0.5 mt-0.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span key={i} className="text-xs" style={{ opacity: i < totalStars ? 1 : 0.18 }}>⭐</span>
                ))}
                <span className="text-xs text-white/40 ml-1">{totalStars}/9</span>
              </div>
            )}
          </div>
          <div className="w-9" />
        </div>

        {/* 3 Mission Cards */}
        <div className="relative z-10 flex-1 flex flex-col px-5 gap-4 pb-8 justify-center">
          {activeIsland.missions.map((mission, cardIdx) => {
            const done = isMissionDoneK2(progress, activeIsland.id, mission.id);
            const mKey = `${activeIsland.id}_${mission.id}`;
            const bestStars = (progress.missionStars ?? {})[mKey] ?? 0;
            const categoryColor = { explore: "#A78BFA", build: "#34D399", challenge: "#FB923C" }[mission.category ?? "explore"] || "#999";
            return (
              <motion.button
                key={mission.id}
                onClick={() => startMission(mission)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: cardIdx * 0.08 }}
                className="w-full rounded-3xl p-5 text-left flex flex-col gap-2"
                style={{ background: `rgba(${categoryColor === "#A78BFA" ? "167,139,250" : categoryColor === "#34D399" ? "52,211,153" : "251,146,60"},0.12)`, border: `2px solid ${done ? categoryColor : `${categoryColor}58`}` }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full"
                    style={{ background: `${categoryColor}25`, color: categoryColor }}>
                    {(mission.category ?? "explore").charAt(0).toUpperCase() + (mission.category ?? "explore").slice(1)}
                  </span>
                  {done && (
                    <div className="flex gap-0.5">
                      {[1,2,3].map(s => (
                        <span key={s} className="text-sm" style={{ opacity: s <= bestStars ? 1 : 0.2 }}>
                          {s <= bestStars ? "⭐" : "✩"}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{mission.icon}</span>
                  <div>
                    <p className="font-black text-white text-base leading-tight">
                      {mission.label[lang as Lang] ?? mission.label.en}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-xs font-bold flex items-center gap-1" style={{ color: categoryColor }}>
                    {done ? (lang === "hu" ? "Újra" : lang === "de" ? "Wiederholen" : lang === "ro" ? "Repetă" : "Play again") : (lang === "hu" ? "Indítás" : lang === "de" ? "Starten" : lang === "ro" ? "Start" : "Start")}
                    <ChevronRight size={14} />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  // ─── GAME SCREENS ─────────────────────────────────────────────────────────────
  const gameScreen = (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}18 0%, #060614 55%)` }}>
      <Starfield />
      <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
        <button onClick={() => setScreen("mission-select")}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
        <div className="flex-1">
          <p className="text-white/70 text-xs font-bold">{activeIsland?.icon} {activeIsland?.name[lang as Lang]}</p>
          <p className="text-white/50 text-[10px]">{activeMission?.label[lang as Lang] ?? activeMission?.label.en}</p>
        </div>
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
        {screen === "orbit-quiz" && questions.length > 0 && (
          <OrbitQuiz questions={questions} color={bgColor} onDone={handleMissionDone}
            onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }}
            onWrong={() => setAvatarMood("disappointed")} />
        )}
        {screen === "black-hole" && questions.length > 0 && (
          <BlackHole questions={questions} color={bgColor} onDone={handleMissionDone}
            onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }}
            onWrong={() => setAvatarMood("disappointed")} />
        )}
        {screen === "gravity-sort" && activeIsland && (
          <GravitySort sortRange={activeIsland.sortRange} color={bgColor} onDone={handleMissionDone} />
        )}
        {screen === "star-match" && questions.length > 0 && (
          <StarMatch questions={questions} color={bgColor} onDone={handleMissionDone} />
        )}
        {screen === "speed-round" && questions.length > 0 && (
          <SpeedRound questions={questions} color={bgColor} lang={lang} onDone={handleMissionDone}
            onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }}
            onWrong={() => setAvatarMood("disappointed")} />
        )}
        {screen === "word-sort" && activeIsland && (
          <WordSortExplorer rounds={getExplorerContentK2(activeIsland.id, "word-sort")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "fill-gap" && activeIsland && (
          <FillGapExplorer rounds={getExplorerContentK2(activeIsland.id, "fill-gap")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "category-rush" && activeIsland && (
          <CategoryRushExplorer {...getExplorerContentK2(activeIsland.id, "category-rush")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "sentence-builder" && activeIsland && (
          <SentenceBuilderExplorer rounds={getExplorerContentK2(activeIsland.id, "sentence-builder")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "spell-race" && activeIsland && (
          <SpellRaceExplorer rounds={getExplorerContentK2(activeIsland.id, "spell-race")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "grammar-match" && activeIsland && (
          <GrammarMatchExplorer rounds={getExplorerContentK2(activeIsland.id, "grammar-match")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "phonics" && activeIsland && (
          <PhonicsExplorer rounds={getExplorerContentK2(activeIsland.id, "phonics")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "picture-vocab" && activeIsland && (
          <PictureVocabExplorer rounds={getExplorerContentK2(activeIsland.id, "picture-vocab")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "rhyme-match" && activeIsland && (
          <RhymeMatchExplorer rounds={getExplorerContentK2(activeIsland.id, "rhyme-match")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "word-build" && activeIsland && (
          <WordBuildExplorer rounds={getExplorerContentK2(activeIsland.id, "word-build")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "reading-comp" && activeIsland && (
          <ReadingCompExplorer rounds={getExplorerContentK2(activeIsland.id, "reading-comp")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "memory-pair" && activeIsland && (
          <MemoryPairExplorer pairs={getExplorerContentK2(activeIsland.id, "memory-pair")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "pronunciation" && activeIsland && (
          <PronunciationExplorer rounds={getExplorerContentK2(activeIsland.id, "pronunciation")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "english-k2-explore" && activeIsland && (
          <K2Explorer island={activeIsland} grade={2} color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
      </div>
    </div>
  );

  if (["orbit-quiz", "black-hole", "gravity-sort", "star-match", "speed-round", "word-sort", "fill-gap", "category-rush", "sentence-builder", "spell-race", "grammar-match", "phonics", "picture-vocab", "rhyme-match", "word-build", "reading-comp", "memory-pair", "pronunciation", "english-k2-explore"].includes(screen)) return (
    <>
      {gameScreen}
      <AvatarCompanion fixed={true} mood={avatarMood} jumpTrigger={jumpTrigger} {...avatarProps} />
    </>
  );

  // ─── ROCKET LAUNCH ────────────────────────────────────────────────────────────
  if (screen === "rocket-launch" && activeTestId) {
    return (
      <>
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,165,0,0.18) 0%, #060614 55%)" }}>
        <Starfield />
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
          <button onClick={goToMap} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
          <div className="flex-1">
            <p className="text-white font-black text-sm">{t.rocketTitle}</p>
            <p className="text-white/50 text-[10px]">{t.rocketDesc}</p>
          </div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          <RocketLaunch questions={questions} color="#FF9500"
            onDone={() => setScreen("checkpoint-intro")} />
        </div>
      </div>
      <AvatarCompanion fixed={true} mood="focused" {...avatarProps} />
      </>
    );
  }

  // ─── ISLAND TRANSITION ───────────────────────────────────────────────────────
  if (screen === "island-transition") {
    return (
      <div className="min-h-screen bg-[#060614] relative">
        <Starfield />
        <RocketTransition color={bgColor} onDone={() => setScreen("island-intro")} />
      </div>
    );
  }

  // ─── ISLAND COMPLETE ANIMATION ───────────────────────────────────────────────
  if (screen === "island-complete-anim" && activeIsland) {
    return (
      <IslandCompleteAnimation
        islandIcon={activeIsland.icon}
        islandColor={activeIsland.color}
        islandName={activeIsland.name[lang as Lang] ?? activeIsland.name.en}
        lang={lang}
        grade={2}
        score={missionScore.score}
        total={missionScore.total}
        onDone={handleIslandAnimDone}
      />
    );
  }

  // ─── MISSION DONE ────────────────────────────────────────────────────────────
  if (screen === "mission-done" && activeIsland && activeMission) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5"
        style={{ background: `radial-gradient(ellipse at 50% 30%, ${bgColor}22 0%, #060614 60%)` }}>
        <Starfield />
        <div className="relative z-10 w-full">
          <MissionDoneScreen mission={activeMission} island={activeIsland}
            score={missionScore.score} total={missionScore.total} onContinue={handleAfterMission} />
        </div>
      </div>
    );
  }

  // ─── REWARD ──────────────────────────────────────────────────────────────────
  if (screen === "reward" && earnedCard) {
    return (
      <>
        <RewardReveal rarity={earnedCard} game="astroenglish"
          score={rewardScore.score} total={rewardScore.total}
          onDone={() => {
            if (activeTestId) {
              setScreen("checkpoint-done");
            } else {
              setScreen("island-done");
            }
          }} />
        <MilestonePopup />
      </>
    );
  }

  // ─── ISLAND DONE ─────────────────────────────────────────────────────────────
  if (screen === "island-done" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5"
        style={{ background: `radial-gradient(ellipse at 50% 30%, ${bgColor}22 0%, #060614 60%)` }}>
        <Starfield />
        <div className="relative z-10 w-full">
          <IslandDoneScreen island={activeIsland} onContinue={goToMap} />
        </div>
        <MilestonePopup />
      </div>
    );
  }

  // ─── CHECKPOINT INTRO ────────────────────────────────────────────────────────
  if (screen === "checkpoint-intro" && activeTestId) {
    const testTopicsK2: Record<string, Record<string, string>> = {
      en: { test1: "Nouns, Verbs, Adjectives", test2: "Sentences, Grammar Basics, Pronouns", test3: "Spelling, Vowels, Word Meanings" },
      hu: { test1: "Főnevek, igék, melléknév", test2: "Mondatok, nyelvtan alapok, személyragok", test3: "Helyesírás, magánhangzók, szómeghatározások" },
      de: { test1: "Substantive, Verben, Adjektive", test2: "Sätze, Grammatik-Grundlagen, Pronomen", test3: "Rechtschreibung, Vokale, Wortbedeutungen" },
      ro: { test1: "Substantive, verbe, adjective", test2: "Propoziții, gramatică de bază, pronume", test3: "Ortografie, vocale, semnificații de cuvinte" },
    };
    const topicDesc = (testTopicsK2[lang] ?? testTopicsK2.en)[activeTestId] ?? "";
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5 gap-6"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield />
        <div className="relative z-10 flex flex-col items-center gap-5 text-center w-full max-w-sm">
          <button onClick={goToMap} className="absolute top-0 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
          <motion.div className="text-6xl" animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎓</motion.div>
          <div>
            <h2 className="text-2xl font-black text-[#FFD700]">{t.checkpointReady}</h2>
            <p className="text-white/60 text-sm mt-2 font-medium leading-relaxed">{t.checkpointDesc}</p>
            <p className="text-white/50 text-xs mt-2">{topicDesc}</p>
          </div>
          <motion.button onClick={startCheckpointQuiz}
            className="w-full py-4 rounded-2xl font-black text-black text-base flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
            whileTap={{ scale: 0.97 }}>
            {t.startTest} 🚀
          </motion.button>
        </div>
      </div>
    );
  }

  // ─── CHECKPOINT QUIZ ──────────────────────────────────────────────────────────
  if (screen === "checkpoint-quiz" && questions.length > 0) {
    return (
      <>
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.15) 0%, #060614 55%)" }}>
        <Starfield />
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
          <button onClick={goToMap} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
          <div className="flex-1">
            <p className="text-white font-black text-sm">📋 {t.checkpoint}</p>
            <p className="text-white/50 text-[10px]">{t.finalTest}</p>
          </div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          <OrbitQuiz questions={questions} color="#FFD700" onDone={handleCheckpointDone} />
        </div>
      </div>
      <AvatarCompanion fixed={true} mood="focused" {...avatarProps} />
      </>
    );
  }

  // ─── CHECKPOINT DONE ──────────────────────────────────────────────────────────
  if (screen === "checkpoint-done" && activeTestId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield />
        <div className="relative z-10 w-full">
          <CheckpointDoneScreen score={checkpointScore.score} total={checkpointScore.total}
            testId={activeTestId} onContinue={goToMap} />
        </div>
        <MilestonePopup />
      </div>
    );
  }

  return null;
}
