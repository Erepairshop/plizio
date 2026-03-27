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
import LangExplore from "@/app/astromagyar/games/LangExplore";
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import {
  O3_ISLANDS, O3_CHECKPOINT_MAP, O3_CHECKPOINT_TOPICS, type IslandDef, type MissionDef, type Lang, type MissionCategory,
  loadO3Progress, saveO3Progress, type MagyarProgress,
  isMissionDoneO3, isIslandDoneO3, isIslandUnlockedO3,
  isCheckpointUnlockedO3, isCheckpointDoneO3,
  completeMissionO3, completeTestO3, islandTotalStarsO3,
  generateIslandQuestionsO3, generateCheckpointQuestionsO3,
} from "@/lib/astroMagyar3";
import { O3_ISLAND_SVGS } from "@/app/astromagyar/islands-o3";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

// ─── Grade 3 labels ────────────────────────────────────────────────────────────
const O3_LABEL: Record<string, string> = {
  en: "Grade 3 · Hungarian Language Galaxy",
  hu: "3. osztály · Magyar Nyelv Galaxis",
  de: "Klasse 3 · Ungarische Sprache Galaxie",
  ro: "Clasa 3 · Galaxia Limba Maghiară",
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
  | "lang-explore"
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

function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STAR_DATA.map((s) => (
        <motion.div key={s.id} className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.08, 0.9, 0.08] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

// ─── Island Map SVG ────────────────────────────────────────────────────────
const MAP_W = 320;
const MAP_H = 860;
const MAP_VB_OFFSET = 220;

const CP_POS: Record<string, { x: number; y: number }> = {
  test1: { x: 155, y: 295 },
  test2: { x: 155, y: 50 },
  test3: { x: 155, y: -165 },
};

function buildSmoothPath(islands: typeof O3_ISLANDS): string {
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
  progress: MagyarProgress;
  onIsland: (island: IslandDef) => void;
  onCheckpoint: (testId: string) => void;
}) {
  const pathD = buildSmoothPath(O3_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowO3" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowO3" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1o3" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FF2D78" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF2D78" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2o3" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1o3)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2o3)" />

      <path d={pathD} fill="none" stroke="rgba(255,45,120,0.25)" strokeWidth={8}
        filter="url(#pathGlowO3)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {O3_ISLANDS.slice(0, -1).map((island, i) => {
        const next = O3_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedO3(progress, testId);
        const done = isCheckpointDoneO3(progress, testId);
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
              {done ? "Kész!" : unlocked ? "Teszt!" : "Teszt"}
            </text>
          </g>
        );
      })}

      {O3_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedO3(progress, island.id);
        const done = isIslandDoneO3(progress, island.id);
        const total = islandTotalStarsO3(progress, island.id);

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
              O3_ISLAND_SVGS[island.id] ? (
                <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60} overflow="visible" opacity={done ? 0.85 : 1}>
                  {React.createElement(O3_ISLAND_SVGS[island.id], { size: 60 })}
                </svg>
              ) : (
                <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={20} opacity={done ? 0.85 : 1}>{island.icon}</text>
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
                  const mdone = isMissionDoneO3(progress, island.id, m.id);
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

// ─── Main Page Component ────────────────────────────────────────────────────────
export default function AstroMagyarO3Page() {
  const router = useRouter();
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;

  // Avatar
  const [gender] = useState<AvatarGender>(getGender());
  const [activeSkin] = useState(getSkinDef(getActiveSkin()));
  const [activeFace] = useState(getFaceDef(getActiveFace()));
  const [activeTop] = useState(() => { const id = getActive("top"); return id ? getTopDef(id) : null; });
  const [activeBottom] = useState(() => { const id = getActive("bottom"); return id ? getBottomDef(id) : null; });
  const [activeShoe] = useState(() => { const id = getActive("shoe"); return id ? getShoeDef(id) : null; });
  const [activeCape] = useState(() => { const id = getActive("cape"); return id ? getCapeDef(id) : null; });
  const [activeGlasses] = useState(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
  const [activeGloves] = useState(() => { const id = getActive("gloves"); return id ? getGloveDef(id) : null; });
  const [activeHat] = useState(() => { const id = getActiveHat(); return id ? getHatDef(id) : null; });
  const [activeTrail] = useState(() => { const id = getActiveTrail(); return id ? getTrailDef(id) : null; });

  // Game state
  const [screen, setScreen] = useState<Screen>("island-map");
  const [progress, setProgress] = useState<MagyarProgress>(loadO3Progress());
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [activeGameType, setActiveGameType] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [checkpointId, setCheckpointId] = useState<string | null>(null);
  const [avatarMood, setAvatarMood] = useState<string>("idle");
  const [avatarJumpTrigger, setAvatarJumpTrigger] = useState<{ reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin' | null; timestamp: number }>({ reaction: null, timestamp: 0 });

  // Handle island select
  const handleIslandSelect = useCallback((island: IslandDef) => {
    setActiveIsland(island);
    setAvatarMood("idle");
    setScreen("island-transition");
  }, []);

  // Handle mission select
  const handleMissionSelect = useCallback((mission: MissionDef) => {
    setActiveMission(mission);
    const gameType = mission.gameType;
    setActiveGameType(gameType);
    // lang-explore doesn't need questions generation, component uses own generator
    if (gameType === "lang-explore") {
      setScreen("lang-explore");
      return;
    }
    const qs = generateIslandQuestionsO3(activeIsland!, lang as Lang, gameType === "star-match" ? 20 : 10);
    setQuestions(qs);
    setMissionScore({ score: 0, total: 0 });
    setScreen(gameType as Screen);
  }, [activeIsland, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle mission complete
  const handleMissionComplete = useCallback((score: number, total: number) => {
    const stars = score / total >= 0.9 ? 3 : score / total >= 0.6 ? 2 : 1;
    const rarity = calculateRarity(score, total, 0, false);
    const card = { id: generateCardId(), game: "astromagyar", rarity, score, total, date: new Date().toISOString() };
    saveCard(card);
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();

    setMissionScore({ score, total });
    setEarnedCard(rarity);
    setRewardScore({ score, total });

    const updated = completeMissionO3(progress, activeIsland!.id, activeMission!.id, stars);
    const allMissionsDone = activeIsland!.missions.every((m) =>
      updated.completedMissions.includes(`${activeIsland!.id}_${m.id}`)
    );

    if (allMissionsDone && !updated.completedIslands.includes(activeIsland!.id)) {
      updated.completedIslands = [...updated.completedIslands, activeIsland!.id];
      setProgress(updated);
      saveO3Progress(updated);
      setScreen("island-complete-anim");
    } else {
      setProgress(updated);
      saveO3Progress(updated);
      setScreen("reward");
    }
  }, [progress, activeIsland, activeMission]); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle island animation done
  const handleIslandAnimDone = useCallback(() => {
    setScreen("reward");
  }, []);

  // Handle checkpoint select
  const handleCheckpointSelect = useCallback((testId: string) => {
    setCheckpointId(testId);
    const qs = generateCheckpointQuestionsO3(testId, lang as Lang, 10);
    setQuestions(qs);
    setMissionScore({ score: 0, total: 0 });
    setScreen("checkpoint-intro");
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheckpointSuccess = useCallback((score: number, total: number) => {
    setMissionScore({ score, total });
    const updatedProg = completeTestO3(progress, checkpointId!);
    setProgress(updatedProg);
    saveO3Progress(updatedProg);
    setScreen("checkpoint-done");
  }, [progress, checkpointId]); // eslint-disable-line react-hooks/exhaustive-deps

  const avatarProps = {
    gender, activeSkin, activeFace, activeTop, activeBottom, activeShoe,
    activeCape, activeGlasses, activeGloves, activeHat, activeTrail,
    mood: avatarMood as any, jumpTrigger: avatarJumpTrigger,
  };

  const bgColor = activeIsland?.color ?? "#4ECDC4";
  const CATEGORY_CONFIG: Record<string, {
    label: Record<string, string>;
    desc: Record<string, string>;
    color: string; bg: string; border: string;
  }> = {
    explore: {
      label: { en: "Explore", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" },
      desc: { en: "Discover — no wrong answers!", hu: "Fedezd fel — nincs hibás válasz!", de: "Entdecke — keine falschen Antworten!", ro: "Descoperă — fără răspunsuri greșite!" },
      color: "#A78BFA", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.35)",
    },
    build: {
      label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" },
      desc: { en: "Guided questions — take your time!", hu: "Vezérelt feladatok — nincs sietség!", de: "Geführte Aufgaben — kein Zeitdruck!", ro: "Exerciții ghidate — fără grabă!" },
      color: "#34D399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.35)",
    },
    challenge: {
      label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" },
      desc: { en: "Fast — show what you know!", hu: "Gyors — mutasd meg tudásod!", de: "Schnell — zeig was du kannst!", ro: "Rapid — arată ce știi!" },
      color: "#FB923C", bg: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.35)",
    },
  };

  return (
    <div className="min-h-screen bg-[#060614] text-white overflow-hidden">
      <Starfield />

      {/* Header */}
      <div className="relative z-20 flex items-center justify-between px-4 py-3 border-b border-white/10">
        <button onClick={() => router.push("/")} className="text-white/70 hover:text-white transition">
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-center text-xs font-bold uppercase tracking-wide text-white/70">
          {O3_LABEL[lang as keyof typeof O3_LABEL] ?? O3_LABEL.en}
        </h1>
        <div className="w-5" />
      </div>

      {/* Island Map */}
      {screen === "island-map" && (
        <motion.div className="relative z-30 flex flex-col h-screen"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex items-center justify-center px-4 py-4">
            <h1 className="text-xl font-black text-white">{O3_LABEL[lang] || O3_LABEL.en}</h1>
          </div>
          <div className="flex-1 overflow-y-auto" ref={(el) => { if (el) setTimeout(() => el.scrollTop = el.scrollHeight, 100); }}>
            <div className="max-w-sm mx-auto px-2">
              <IslandMapSVG progress={progress}
                onIsland={handleIslandSelect}
                onCheckpoint={handleCheckpointSelect}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Island Transition */}
      {screen === "island-transition" && (
        <div className="min-h-screen bg-[#060614] relative">
          <Starfield />
          <RocketTransition color={bgColor}
            onDone={() => setScreen("island-intro")} />
        </div>
      )}

      {/* Island Intro */}
      {screen === "island-intro" && activeIsland && (
        <div className="min-h-screen flex flex-col relative overflow-hidden"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
          <Starfield />
          <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4">
            <button onClick={() => setScreen("island-map")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
            <div className="w-9" />
          </div>
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center pb-6">
            <motion.div className="text-7xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }}>
              {activeIsland.icon}
            </motion.div>
            <div>
              <h2 className="text-2xl font-black text-white">{activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
              <p className="text-white/50 text-sm mt-2 font-medium">{activeIsland.missions.length} {lang === "hu" ? "küldetés" : lang === "de" ? "Mission" : lang === "ro" ? "misiuni" : "missions"}</p>
            </div>
            <motion.button onClick={() => setScreen("mission-select")}
              className="w-full max-w-xs py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2"
              style={{ background: `linear-gradient(135deg, ${bgColor}55, ${bgColor}99)`, border: `2px solid ${bgColor}` }}
              whileTap={{ scale: 0.97 }}>
              {lang === "hu" ? "Kezdés" : lang === "de" ? "Starten" : lang === "ro" ? "Start" : "Start"} <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      )}

      {/* Mission Select */}
      {screen === "mission-select" && activeIsland && (() => {
        const totalStars = islandTotalStarsO3(progress, activeIsland.id);
        return (
          <div className="min-h-screen flex flex-col relative overflow-hidden"
            style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
            <Starfield />
            <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2">
              <button onClick={() => setScreen("island-map")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
              <div className="text-center">
                <h2 className="font-black text-white text-base">{activeIsland.icon} {activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
                {totalStars > 0 && (
                  <div className="flex items-center justify-center gap-0.5 mt-0.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className="text-xs" style={{ opacity: i < totalStars ? 1 : 0.18 }}>
                        {i < totalStars ? "⭐" : "✩"}
                      </span>
                    ))}
                    <span className="text-white/40 text-[10px] ml-1">{totalStars}/9</span>
                  </div>
                )}
              </div>
              <div className="w-9" />
            </div>
            <p className="relative z-10 text-center text-white/50 text-xs font-medium px-6 pb-3">
              {lang === "hu" ? "Válaszd ki, hogyan szeretnél tanulni:" : lang === "de" ? "Wähle deinen Lernweg:" : lang === "ro" ? "Alege cum vrei să înveți:" : "Choose how you want to learn:"}
            </p>
            <div className="relative z-10 flex-1 flex flex-col px-5 gap-4 pb-8 justify-center">
              {(["explore", "build", "challenge"] as MissionCategory[]).map((cat, cardIdx) => {
                const mission = activeIsland.missions.find(m => m.category === cat);
                if (!mission) return null;
                const cfg = CATEGORY_CONFIG[cat];
                const done = isMissionDoneO3(progress, activeIsland.id, mission.id);
                const mKey = `${activeIsland.id}_${mission.id}`;
                const bestStars = (progress.missionStars ?? {})[mKey] ?? 0;
                return (
                  <motion.button
                    key={cat}
                    onClick={() => handleMissionSelect(mission)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: cardIdx * 0.08 }}
                    className="w-full rounded-3xl p-5 text-left flex flex-col gap-2"
                    style={{ background: cfg.bg, border: `2px solid ${done ? cfg.color : cfg.border}` }}
                    whileTap={{ scale: 0.97 }}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black px-2.5 py-0.5 rounded-full"
                        style={{ background: `${cfg.color}25`, color: cfg.color }}>
                        {cfg.label[lang] ?? cfg.label.en}
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
                        <p className="text-xs mt-0.5" style={{ color: `${cfg.color}cc` }}>
                          {cfg.desc[lang] ?? cfg.desc.en}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <span className="text-xs font-bold flex items-center gap-1" style={{ color: cfg.color }}>
                        {done
                          ? (lang === "hu" ? "Újra" : lang === "de" ? "Wiederholen" : lang === "ro" ? "Repetă" : "Play again")
                          : (lang === "hu" ? "Indítás" : lang === "de" ? "Starten" : lang === "ro" ? "Start" : "Start")}
                        <ChevronRight size={14} />
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Island Complete Animation */}
      {screen === "island-complete-anim" && activeIsland && (
        <IslandCompleteAnimation
          islandIcon={activeIsland.icon}
          islandColor={activeIsland.color}
          islandName={activeIsland.name[lang as Lang] ?? activeIsland.name.en}
          lang={lang as Lang}
          onDone={handleIslandAnimDone}
        />
      )}

      {/* Reward Reveal */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="astromagyar"
          score={rewardScore.score}
          total={rewardScore.total}
          onDone={() => setScreen("mission-done")}
        />
      )}

      {/* Mission Done */}
      {screen === "mission-done" && (
        <motion.div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/80"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex flex-col items-center gap-6">
            <AvatarCompanion {...avatarProps} fixed={false} />
            <div className="text-center">
              <h2 className="text-2xl font-black mb-2">Gratulálunk!</h2>
              <p className="text-white/70 text-sm">Misszió teljesítve</p>
            </div>
            <button onClick={() => setScreen("mission-select")}
              className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition">
              {lang === "hu" ? "Tovább" : "Continue"}
            </button>
          </div>
        </motion.div>
      )}

      {/* Checkpoint Quiz */}
      {screen === "checkpoint-quiz" && questions.length > 0 && (
        <OrbitQuiz questions={questions} color="#FFD700"
          onDone={(s, t) => handleCheckpointSuccess(s, t)} />
      )}

      {/* Checkpoint Done */}
      {screen === "checkpoint-done" && (
        <motion.div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/80"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex flex-col items-center gap-6">
            <AvatarCompanion {...avatarProps} fixed={false} />
            <div className="text-center">
              <h2 className="text-2xl font-black mb-2">{lang === "hu" ? "Teszt teljesítve!" : "Test Complete!"}</h2>
              <p className="text-white/70 text-sm">{missionScore.score}/{missionScore.total}</p>
            </div>
            <button onClick={() => { setScreen("island-map"); setCheckpointId(null); }}
              className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition">
              {lang === "hu" ? "Vissza" : "Back"}
            </button>
          </div>
        </motion.div>
      )}

      {/* Game Screens */}
      {screen === "orbit-quiz" && questions.length > 0 && (
        <OrbitQuiz questions={questions} color="#4ECDC4"
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "black-hole" && questions.length > 0 && (
        <BlackHole questions={questions} color="#4ECDC4"
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "gravity-sort" && activeIsland && (
        <GravitySort sortRange={activeIsland.sortRange} color="#4ECDC4"
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "star-match" && questions.length > 0 && (
        <StarMatch questions={questions} color="#4ECDC4"
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "speed-round" && questions.length > 0 && (
        <SpeedRound questions={questions} color="#4ECDC4"
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "lang-explore" && activeIsland && (
        <LangExplore
          island={activeIsland}
          grade={3}
          onDone={(s, t) => handleMissionComplete(s, t)}
        />
      )}

      {/* Checkpoint Intro */}
      {screen === "checkpoint-intro" && checkpointId && (
        <motion.div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 gap-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="text-6xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            🚀
          </motion.div>
          <h2 className="text-2xl font-bold text-center">{lang === "hu" ? "Ellenőrzőpont teszт" : "Checkpoint Test"}</h2>
          <div className="flex gap-3">
            <button onClick={() => { setCheckpointId(null); setScreen("island-map"); }} className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors">
              {lang === "hu" ? "Vissza" : "Back"}
            </button>
            <button onClick={() => setScreen("checkpoint-quiz")} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-xl font-bold transition-colors">
              {lang === "hu" ? "Kezd" : "Start"}
            </button>
          </div>
        </motion.div>
      )}

      {/* Milestone Popup */}
      <MilestonePopup />
    </div>
  );
}
