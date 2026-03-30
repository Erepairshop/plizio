"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
import StarMatch from "@/app/astromath/games/StarMatch";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import LangExplore from "@/app/astromagyar/games/LangExplore";
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import {
  O5_ISLANDS, O5_CHECKPOINT_MAP, O5_CHECKPOINT_TOPICS,
  loadO5Progress, saveO5Progress,
  isMissionDoneO5, isIslandDoneO5, isIslandUnlockedO5,
  isCheckpointUnlockedO5, isCheckpointDoneO5,
  completeMissionO5, completeTestO5, islandTotalStarsO5,
  generateIslandQuestionsO5, generateCheckpointQuestionsO5,
} from "@/lib/astroMagyar5";
import type { IslandDef, MissionDef, Lang, MagyarProgress, MissionCategory } from "@/lib/astroMagyar";
import { O5_ISLAND_SVGS } from "@/app/astromagyar/islands-o5";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

// ─── Grade 5 labels ────────────────────────────────────────────────────────────
const O5_LABEL: Record<string, string> = {
  en: "Grade 5 · Hungarian Language Galaxy",
  hu: "5. osztály · Magyar Nyelv Galaxis",
  de: "Klasse 5 · Ungarische Sprache Galaxie",
  ro: "Clasa 5 · Galaxia Limba Maghiară",
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

// ─── Exit Button ───────────────────────────────────────────────────────────────
function ExitButton({ onExit }: { onExit: () => void }) {
  return (
    <button
      onClick={onExit}
      className="absolute top-4 left-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
    >
      <X size={14} />
    </button>
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

function buildSmoothPath(islands: typeof O5_ISLANDS): string {
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
  const pathD = buildSmoothPath(O5_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowO5" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowO5" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1o5" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FF2D78" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF2D78" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2o5" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1o5)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2o5)" />

      <path d={pathD} fill="none" stroke="rgba(255,45,120,0.25)" strokeWidth={8}
        filter="url(#pathGlowO5)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {O5_ISLANDS.slice(0, -1).map((island, i) => {
        const next = O5_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedO5(progress, testId);
        const done = isCheckpointDoneO5(progress, testId);
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

      {O5_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedO5(progress, island.id);
        const done = isIslandDoneO5(progress, island.id);
        const total = islandTotalStarsO5(progress, island.id);

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
              O5_ISLAND_SVGS[island.id] ? (
                <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60}
                  overflow="visible" opacity={done ? 0.85 : 1}>
                  {React.createElement(O5_ISLAND_SVGS[island.id], { size: 60 })}
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
                  const mdone = isMissionDoneO5(progress, island.id, m.id);
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
export default function AstroMagyarO5Page() {
  const router = useRouter();
  const { lang } = useLang();

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
  const [progress, setProgress] = useState<MagyarProgress>(loadO5Progress());
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [activeGameType, setActiveGameType] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [checkpointId, setCheckpointId] = useState<string | null>(null);
  const [avatarMood, setAvatarMood] = useState<"idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing">("idle");
  const [avatarJumpTrigger] = useState({ reaction: null as 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin' | null, timestamp: 0 });

  const color = activeIsland?.color || "#FF2D78";
  const bgColor = activeIsland?.color ?? "#FF2D78";
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

    // Standard quiz games
    const qs = generateIslandQuestionsO5(activeIsland!, lang as Lang, gameType === "star-match" ? 20 : 10);
    setQuestions(qs);
    setMissionScore({ score: 0, total: 0 });
    setScreen(gameType as Screen);
  }, [activeIsland, lang]);

  // Handle mission success
  const handleMissionSuccess = useCallback((score: number, total: number) => {
    setMissionScore({ score, total });

    if (activeIsland && activeMission) {
      const rarity = calculateRarity(score, total, 0, false);
      saveCard({ id: generateCardId(), game: "astromagyar", rarity, score, total, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();

      const updatedProg = completeMissionO5(progress, activeIsland.id, activeMission.id, score >= total * 0.8 ? 3 : score >= total * 0.6 ? 2 : 1);
      setProgress(updatedProg);
      saveO5Progress(updatedProg);

      checkNewMilestones();

      setEarnedCard(rarity);
      setScreen("reward");
    }
  }, [activeIsland, activeMission, progress]);

  // After island animation
  const handleIslandAnimDone = useCallback(() => {
    setScreen("reward");
  }, []);

  // Checkpoint
  const handleCheckpointSelect = useCallback((testId: string) => {
    setCheckpointId(testId);
    const qs = generateCheckpointQuestionsO5(testId, lang as Lang, 10);
    setQuestions(qs);
    setMissionScore({ score: 0, total: 0 });
    setScreen("checkpoint-quiz");
  }, [lang]);

  const handleCheckpointSuccess = useCallback((score: number, total: number) => {
    setMissionScore({ score, total });
    const updatedProg = completeTestO5(progress, checkpointId!);
    setProgress(updatedProg);
    saveO5Progress(updatedProg);
    checkNewMilestones();
    setScreen("checkpoint-done");
  }, [progress, checkpointId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0A0A1A] to-slate-950 relative overflow-hidden">
      <Starfield />

      {/* Island Map */}
      {screen === "island-map" && (
        <motion.div className="relative z-30 flex flex-col h-screen"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <button onClick={() => router.push("/astromagyar")} className="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-xs font-bold">
              <ChevronLeft size={18} /> Vissza
            </button>
            <h1 className="text-lg sm:text-xl font-black text-white">{O5_LABEL[lang] || O5_LABEL.en}</h1>
            <div className="w-8" />
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto" ref={attachAutoScrollToBottom}>
            <div className="max-w-sm mx-auto px-2">
              <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={handleCheckpointSelect} />
            </div>
          </div>
        </motion.div>
      )}

      {/* Island Transition */}
      {screen === "island-transition" && (
        <div className="relative z-30 min-h-screen flex flex-col items-center justify-center">
          <Starfield />
          <RocketTransition color={bgColor} onDone={() => setScreen("island-intro")} />
        </div>
      )}

      {/* Island Complete Animation */}
      {screen === "island-complete-anim" && activeIsland && (
        <IslandCompleteAnimation
          islandIcon={activeIsland.icon}
          islandColor={activeIsland.color}
          islandName={activeIsland.name[lang as Lang] || activeIsland.name.en}
          lang={lang}
          onDone={handleIslandAnimDone}
        />
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
        const totalStars = islandTotalStarsO5(progress, activeIsland.id);
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
                const done = isMissionDoneO5(progress, activeIsland.id, mission.id);
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

      {/* ─── Game Screens ─────────────────────────────────────────────────────── */}

      {screen === "orbit-quiz" && questions.length > 0 && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <OrbitQuiz questions={questions} color={color}
            onDone={(s, t) => handleMissionSuccess(s, t)} />
        </div>
      )}

      {screen === "black-hole" && questions.length > 0 && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <BlackHole questions={questions} color={color}
            onDone={(s, t) => handleMissionSuccess(s, t)} />
        </div>
      )}

      {screen === "star-match" && questions.length > 0 && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <StarMatch questions={questions} color={color}
            onDone={(s, t) => handleMissionSuccess(s, t)} />
        </div>
      )}

      {screen === "speed-round" && questions.length > 0 && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <SpeedRound questions={questions} lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionSuccess(s, t)} />
        </div>
      )}

      {screen === "gravity-sort" && activeIsland && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <GravitySort sortRange={activeIsland.sortRange} color={color}
            onDone={(s, t) => handleMissionSuccess(s, t)} />
        </div>
      )}

      {screen === "lang-explore" && activeIsland && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <LangExplore
            island={activeIsland}
            grade={5}
            onDone={(s, t) => handleMissionSuccess(s, t)}
          />
        </div>
      )}

      {/* Reward */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="astromagyar"
          score={missionScore.score}
          total={missionScore.total}
          onDone={() => {
            setEarnedCard(null);
            if (activeIsland && isIslandDoneO5(progress, activeIsland.id)) {
              setScreen("island-complete-anim");
            } else {
              setScreen("mission-select");
            }
          }}
        />
      )}

      {/* Milestones */}
      <MilestonePopup />

      {/* Checkpoint Quiz */}
      {screen === "checkpoint-quiz" && questions.length > 0 && checkpointId && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("island-map")} />
          <OrbitQuiz
            questions={questions}
            color="#FFD700"
            onDone={(s, t) => handleCheckpointSuccess(s, t)}
          />
        </div>
      )}

      {/* Checkpoint Done */}
      {screen === "checkpoint-done" && (
        <motion.div className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="text-6xl mb-6" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
            🏆
          </motion.div>
          <h2 className="text-2xl font-black text-[#FFD700] mb-4">{lang === "hu" ? "Ellenőrzőpont teljesítve!" : "Checkpoint Complete!"}</h2>
          <p className="text-white/70 mb-4">{missionScore.score}/{missionScore.total}</p>
          <motion.button onClick={() => setScreen("island-map")}
            className="px-8 py-3 rounded-xl bg-[#FFD700]/20 border-2 border-[#FFD700] text-white font-bold"
            whileTap={{ scale: 0.95 }}>
            {lang === "hu" ? "Vissza a térképhez" : "Back to Map"}
          </motion.button>
        </motion.div>
      )}

      {/* Avatar */}
      <div className="fixed bottom-6 right-6 z-20 pointer-events-none">
        <div className="w-40 h-40">
          <AvatarCompanion
            fixed={false}
            gender={gender}
            activeSkin={activeSkin}
            activeFace={activeFace}
            activeTop={activeTop}
            activeBottom={activeBottom}
            activeShoe={activeShoe}
            activeCape={activeCape}
            activeGlasses={activeGlasses}
            activeGloves={activeGloves}
            activeHat={activeHat}
            activeTrail={activeTrail}
            mood={avatarMood}
            jumpTrigger={avatarJumpTrigger}
          />
        </div>
      </div>
    </div>
  );
}
