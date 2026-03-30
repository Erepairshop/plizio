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
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import RocketLaunch from "@/app/astromath/games/RocketLaunch";
import O8Explorer from "@/app/astromagyar/games/o8/O8Explorer";
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import {
  O8_ISLANDS, O8_CHECKPOINT_MAP, O8_CHECKPOINT_TOPICS,
  loadO8Progress, saveO8Progress,
  isMissionDoneO8, isIslandDoneO8, isIslandUnlockedO8,
  isCheckpointUnlockedO8, isCheckpointDoneO8,
  completeMissionO8, completeTestO8, islandTotalStarsO8,
} from "@/lib/astroMagyar8";
import { generateMagyarIslandQuestions, generateMagyarCheckpointQuestions, type IslandDef, type MissionDef, type Lang, type MagyarProgress, type MissionCategory } from "@/lib/astroMagyar";
import { O8_ISLAND_SVGS } from "@/app/astromagyar/islands-o8";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

// ─── Grade 8 labels ────────────────────────────────────────────────────────────
const O8_LABEL: Record<string, string> = {
  en: "Grade 8 · Hungarian Language Galaxy",
  hu: "8. osztály · Magyar Nyelv Galaxis",
  de: "Klasse 8 · Ungarische Sprache Galaxie",
  ro: "Clasa 8 · Galaxia Limba Maghiară",
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

// ─── Island Map SVG ────────────────────────────────────────────────────────────
const MAP_W = 320;
const MAP_H = 860;
const MAP_VB_OFFSET = 220;

const CP_POS: Record<string, { x: number; y: number }> = {
  test1: { x: 155, y: 295 },
  test2: { x: 155, y: 50 },
  test3: { x: 155, y: -165 },
};

function buildSmoothPath(islands: typeof O8_ISLANDS): string {
  const pts = islands.map((i) => ({ x: i.svgX, y: i.svgY }));
  if (pts.length < 2) return "";
  let path = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const cp1x = p0.x + (p1.x - p0.x) * 0.3;
    const cp1y = p0.y + (p1.y - p0.y) * 0.3;
    const cp2x = p1.x - (p1.x - p0.x) * 0.3;
    const cp2y = p1.y - (p1.y - p0.y) * 0.3;
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p1.x} ${p1.y}`;
  }
  return path;
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function AstroMagyar8Page() {
  const router = useRouter();
  const { lang } = useLang();
  const [screen, setScreen] = useState<Screen>("island-map");
  const [progress, setProgress] = useState<MagyarProgress>(() => loadO8Progress());
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [checkpointId, setCheckpointId] = useState<string | null>(null);
  const [avatarMood, setAvatarMood] = useState<string>("idle");
  const [avatarIslandId, setAvatarIslandId] = useState<string | null>(null);
  const [avatarWalking, setAvatarWalking] = useState(false);
  const walkTimerRef = useRef<NodeJS.Timeout | null>(null);
  const bgColor = activeIsland?.color || "#FF2D78";
  const CATEGORY_CONFIG: Record<string, { label: Record<string, string>; desc: Record<string, string>; color: string; bg: string; border: string }> = {
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

  // Avatar state
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

  const handleIslandSelect = useCallback((island: IslandDef) => {
    if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
    setActiveIsland(island);
    setAvatarIslandId(island.id);
    setAvatarWalking(false);
    setAvatarMood("idle");
    setScreen("island-transition");
  }, []);

  const handleMissionSelect = useCallback((mission: MissionDef) => {
    setActiveMission(mission);
    const gameType = mission.gameType;
    // lang-explore doesn't need questions generation, component uses own generator
    if (gameType === "lang-explore") {
      setScreen("lang-explore");
      return;
    }
    const qCount = gameType === "star-match" ? 20 : 10;
    const q = generateMagyarIslandQuestions(activeIsland!, 8, qCount);
    setQuestions(q);
    setMissionScore({ score: 0, total: q.length });
    setScreen(gameType as Screen);
  }, [activeIsland]);

  const handleCheckpointSelect = useCallback((testId: string) => {
    const q = generateMagyarCheckpointQuestions(testId, O8_CHECKPOINT_TOPICS, 8, 10);
    setQuestions(q);
    setMissionScore({ score: 0, total: q.length });
    setCheckpointId(testId);
    setScreen("checkpoint-quiz");
  }, []);

  const handleMissionComplete = useCallback((finalScore: number, totalQs: number) => {
    if (!activeIsland || !activeMission) return;
    setMissionScore({ score: finalScore, total: totalQs });
    const stars = finalScore === totalQs ? 3 : finalScore >= totalQs * 0.6 ? 2 : 1;
    const newProgress = completeMissionO8(progress, activeIsland.id, activeMission.id, stars);
    setProgress(newProgress);
    saveO8Progress(newProgress);
    window.dispatchEvent(new Event("plizio-cards-changed"));

    const allMissionsDone = activeIsland.missions.every(m =>
      newProgress.completedMissions.includes(`${activeIsland.id}_${m.id}`)
    );
    if (allMissionsDone && !newProgress.completedIslands.includes(activeIsland.id)) {
      setScreen("island-complete-anim");
    } else {
      const rarity = calculateRarity(finalScore, totalQs, 0, false);
      saveCard({ id: generateCardId(), game: "astromagyar", rarity, score: finalScore, total: totalQs, date: new Date().toISOString() });
      incrementTotalGames();
      setEarnedCard(rarity);
      setRewardScore({ score: finalScore, total: totalQs });
      setScreen("reward");
    }
  }, [activeIsland, activeMission, progress]);

  const handleIslandAnimDone = useCallback(() => {
    const rarity = calculateRarity(missionScore.score, missionScore.total, 0, false);
    saveCard({ id: generateCardId(), game: "astromagyar", rarity, score: missionScore.score, total: missionScore.total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score: missionScore.score, total: missionScore.total });
    setScreen("reward");
  }, [missionScore]);

  const handleCheckpointComplete = useCallback((finalScore: number, totalQs: number) => {
    if (!checkpointId) return;
    const newProgress = completeTestO8(progress, checkpointId);
    setProgress(newProgress);
    saveO8Progress(newProgress);
    window.dispatchEvent(new Event("plizio-cards-changed"));
    const rarity = calculateRarity(finalScore, totalQs, 0, false);
    saveCard({ id: generateCardId(), game: "astromagyar", rarity, score: finalScore, total: totalQs, date: new Date().toISOString() });
    incrementTotalGames();
    setEarnedCard(rarity);
    setRewardScore({ score: finalScore, total: totalQs });
    setScreen("reward");
  }, [progress, checkpointId]);

  // ─── SCREENS ────────────────────────────────────────────────────────────────

  // Island map
  if (screen === "island-map") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#060614] to-[#1a1a2e] relative overflow-hidden flex flex-col">
        <Starfield />
        <div className="flex items-center justify-between px-4 pt-4 sm:px-6 relative z-30">
          <button onClick={() => router.push("/astromagyar")} className="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-xs font-bold">
            <ChevronLeft size={18} /> {lang === "hu" ? "Vissza" : "Back"}
          </button>
          <div className="w-8" />
        </div>
        <div className="flex-1 min-h-0 flex flex-col items-center px-4 py-6 overflow-y-auto" ref={attachAutoScrollToBottom}>
          <motion.h1 className="text-3xl font-black text-white mb-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            {O8_LABEL[lang as keyof typeof O8_LABEL] || O8_LABEL.en}
          </motion.h1>
          <motion.p className="text-white/60 text-sm mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {lang === "hu" ? "Fedezd fel a magyar nyelv haladó szintjét!" : "Explore advanced Hungarian language!"}
          </motion.p>

          <div className="max-w-sm w-full mx-auto relative">
            <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
              <defs>
                {O8_ISLANDS.map((island) => (
                  <filter key={`pathGlowO8_${island.id}`} id={`pathGlowO8_${island.id}`}>
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                ))}
              </defs>

              <path d={buildSmoothPath(O8_ISLANDS)} stroke="rgba(255,255,255,0.2)" strokeWidth={2} fill="none" />

              {Array.from({ length: 40 }, (_, i) => {
                const x = (i * 47 + 23) % 100;
                const y = (i * 67 + 11) % 100;
                return <circle key={i} cx={MAP_W * (x / 100)} cy={y * (MAP_H / 100) - MAP_VB_OFFSET} r={1} fill="rgba(255,255,255,0.08)" />;
              })}

              {Object.entries(CP_POS).map(([testId, pos]) => {
                const unlocked = isCheckpointUnlockedO8(progress, testId);
                const done = isCheckpointDoneO8(progress, testId);
                const color = done ? "#00FF88" : unlocked ? "#FFD700" : "rgba(255,255,255,0.2)";
                const fillAlpha = done ? "rgba(0,255,136,0.15)" : unlocked ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.03)";
                return (
                  <g key={testId} onClick={() => unlocked && !done && handleCheckpointSelect(testId)}
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

              {O8_ISLANDS.map((island, idx) => {
                const unlocked = isIslandUnlockedO8(progress, island.id);
                const done = isIslandDoneO8(progress, island.id);
                const total = islandTotalStarsO8(progress, island.id);
                return (
                  <g key={island.id} onClick={() => unlocked && handleIslandSelect(island)}
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
                      O8_ISLAND_SVGS[island.id] ? (
                        <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60}
                          overflow="visible" opacity={done ? 0.85 : 1}>
                          {React.createElement(O8_ISLAND_SVGS[island.id], { size: 60 })}
                        </svg>
                      ) : (
                        <text x={island.svgX} y={island.svgY + 8} textAnchor="middle" fontSize={40} opacity={done ? 0.85 : 1}>
                          {island.icon}
                        </text>
                      )
                    ) : (
                      <text x={island.svgX} y={island.svgY + 8} textAnchor="middle" fontSize={40} opacity={0.3}>
                        🔒
                      </text>
                    )}
                    {unlocked && (
                      <text x={island.svgX} y={island.svgY + 58} textAnchor="middle" fontSize={11} fontWeight="bold"
                        fill={done ? "#FFD700" : island.color} opacity={0.9}>
                        {total > 0 ? `⭐ ${total}/9` : idx + 1}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Island transition
  if (screen === "island-transition") {
    return (
      <div className="min-h-screen bg-[#060614] relative">
        <Starfield />
        <RocketTransition color={bgColor} onDone={() => setScreen("island-intro")} />
      </div>
    );
  }

  // Island complete animation
  if (screen === "island-complete-anim" && activeIsland) {
    return (
      <IslandCompleteAnimation
        islandIcon={activeIsland.icon}
        islandColor={activeIsland.color}
        islandName={activeIsland.name[lang as Lang] ?? activeIsland.name.en}
        lang={lang}
        onDone={handleIslandAnimDone}
      />
    );
  }

  // Island intro
  if (screen === "island-intro" && activeIsland) {
    return (
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
    );
  }

  // Mission select
  if (screen === "mission-select" && activeIsland) {
    const totalStars = islandTotalStarsO8(progress, activeIsland.id);
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4">
          <button onClick={() => setScreen("island-intro")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><ChevronLeft size={18} /></button>
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-sm font-black text-white">{activeIsland.name[lang as Lang] ?? activeIsland.name.en}</span>
            <span className="text-xs text-white/40 font-medium">{totalStars > 0 ? "⭐".repeat(Math.min(totalStars, 5)) + " " + totalStars + "/9" : "0/9"}</span>
          </div>
          <div className="w-9" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col px-4 gap-3 pb-6 justify-center">
          {(["explore", "build", "challenge"] as MissionCategory[]).map((cat, cardIdx) => {
            const mission = activeIsland.missions.find(m => m.category === cat);
            if (!mission) return null;
            const cfg = CATEGORY_CONFIG[cat];
            const done = isMissionDoneO8(progress, activeIsland.id, mission.id);
            const mKey = `${activeIsland.id}_${mission.id}`;
            const bestStars = (progress.missionStars ?? {})[mKey] ?? 0;
            return (
              <motion.button key={cat}
                onClick={() => handleMissionSelect(mission)}
                className="w-full rounded-2xl p-4 text-left flex items-center gap-4"
                style={{ background: cfg.bg, border: `1.5px solid ${done ? cfg.color + "88" : cfg.border}` }}
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: cardIdx * 0.08 }}
                whileTap={{ scale: 0.97 }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: cfg.color + "22", border: `1.5px solid ${cfg.color}44` }}>
                  {done ? "✅" : mission.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-white text-sm">{cfg.label[lang] ?? cfg.label.en}</span>
                    {bestStars > 0 && <span className="text-xs text-yellow-300">{"⭐".repeat(bestStars)}</span>}
                  </div>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: cfg.color + "cc" }}>{cfg.desc[lang] ?? cfg.desc.en}</p>
                </div>
                <ChevronRight size={16} className="text-white/30 flex-shrink-0" />
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  // Game screens
  if (screen === "orbit-quiz" && questions.length > 0) {
    return (
      <OrbitQuiz
        questions={questions}
        onDone={(s, t) => handleMissionComplete(s, t)}
        color={bgColor}
      />
    );
  }

  if (screen === "black-hole" && questions.length > 0) {
    return (
      <BlackHole
        questions={questions}
        onDone={(s, t) => handleMissionComplete(s, t)}
        color={bgColor}
      />
    );
  }

  if (screen === "gravity-sort" && activeIsland) {
    return (
      <GravitySort
        sortRange={activeIsland.sortRange}
        onDone={(s, t) => handleMissionComplete(s, t)}
        color={bgColor}
      />
    );
  }

  if (screen === "star-match" && questions.length > 0) {
    return (
      <StarMatch
        questions={questions}
        onDone={(s, t) => handleMissionComplete(s, t)}
        color={bgColor}
      />
    );
  }

  if (screen === "speed-round" && questions.length > 0) {
    return (
      <SpeedRound
        questions={questions}
        onDone={(s, t) => handleMissionComplete(s, t)}
        color={bgColor}
        lang={lang}
      />
    );
  }

  // Lang explore
  if (screen === "lang-explore" && activeIsland) {
    return (
      <O8Explorer
        island={activeIsland}
        grade={8}
        onDone={(s, t) => handleMissionComplete(s, t)}
        lang={lang}
      />
    );
  }

  // Checkpoint quiz
  if (screen === "checkpoint-quiz" && questions.length > 0) {
    return (
      <OrbitQuiz
        questions={questions}
        onDone={(s, t) => handleCheckpointComplete(s, t)}
        color="#FFD700"
      />
    );
  }

  // Reward
  if (screen === "reward" && earnedCard) {
    return (
      <RewardReveal
        rarity={earnedCard}
        game="astromagyar"
        score={rewardScore.score}
        total={rewardScore.total}
        onDone={() => setScreen("island-map")}
      />
    );
  }

  // Fallback
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060614] to-[#1a1a2e] flex items-center justify-center">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2 }} className="w-12 h-12 border-2 border-white border-t-transparent rounded-full" />
    </div>
  );
}
