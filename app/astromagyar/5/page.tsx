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
import LetterExplorer from "@/app/astromagyar/games/LetterExplorer";
import SyllableExplorer from "@/app/astromagyar/games/SyllableExplorer";
import SpellingExplorer from "@/app/astromagyar/games/SpellingExplorer";
import NounExplorer from "@/app/astromagyar/games/NounExplorer";
import VerbExplorer from "@/app/astromagyar/games/VerbExplorer";
import SentenceExplorer from "@/app/astromagyar/games/SentenceExplorer";
import EsetExplorer from "@/app/astromagyar/games/EsetExplorer";
import ReviewExplorer from "@/app/astromagyar/games/ReviewExplorer";
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
import type { IslandDef, MissionDef, Lang, MissionCategory, MagyarProgress } from "@/lib/astroMagyar";
import { O5_ISLAND_SVGS } from "@/app/astromagyar/islands";

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
  | "letter-explorer"
  | "syllable-explorer"
  | "spelling-explorer"
  | "noun-explorer"
  | "verb-explorer"
  | "sentence-explorer"
  | "eset-explorer"
  | "review-explorer-hu"
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
  const [progress, setProgress] = useState<MagyarProgress>(loadO5Progress());
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [activeGameType, setActiveGameType] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [checkpointId, setCheckpointId] = useState<string | null>(null);
  const [avatarMood, setAvatarMood] = useState<"idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing">("idle");
  const [avatarJumpTrigger, setAvatarJumpTrigger] = useState({ reaction: null as 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | 'wave' | 'dance' | 'spin' | null, timestamp: 0 });

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
    // Explorer components: self-contained, no questions needed
    const explorerTypes = ["letter-explorer", "syllable-explorer", "spelling-explorer", "noun-explorer", "verb-explorer", "sentence-explorer", "eset-explorer", "review-explorer-hu"];
    if (explorerTypes.includes(gameType)) {
      setMissionScore({ score: 0, total: 0 });
      setScreen(gameType as Screen);
      return;
    }
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

      // Check if island is complete
      const allMissionsDone = activeIsland.missions.every((m) =>
        updatedProg.completedMissions.includes(`${activeIsland.id}_${m.id}`)
      );

      if (allMissionsDone && !updatedProg.completedIslands.includes(activeIsland.id)) {
        setEarnedCard(rarity);
        setScreen("island-complete-anim");
      } else {
        setEarnedCard(rarity);
        setScreen("reward");
      }
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
          <div className="flex-1 overflow-y-auto">
            <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={handleCheckpointSelect} />
          </div>
        </motion.div>
      )}

      {/* Island Transition */}
      {screen === "island-transition" && (
        <div className="relative z-30 min-h-screen flex flex-col items-center justify-center">
          <Starfield />
          <RocketTransition color={activeIsland?.color || "#FF2D78"} onDone={() => setScreen("mission-select")} />
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

      {/* Mission Select */}
      {screen === "mission-select" && activeIsland && (
        <motion.div className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4 py-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button onClick={() => setScreen("island-map")} className="absolute top-6 left-6 text-white/60 hover:text-white">
            <ChevronLeft size={24} />
          </button>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">{activeIsland.name[lang as Lang] || activeIsland.name.en}</h2>
            <p className="text-white/60 text-sm">{activeIsland.missions.length} {lang === "hu" ? "küldetés" : "missions"}</p>
          </div>
          <div className="flex flex-col gap-4 max-w-sm w-full">
            {activeIsland.missions.map((m) => {
              const done = isMissionDoneO5(progress, activeIsland.id, m.id);
              const stars = progress.missionStars?.[`${activeIsland.id}_${m.id}`] ?? 0;
              return (
                <motion.button key={m.id}
                  onClick={() => !done && handleMissionSelect(m)}
                  disabled={done}
                  className={`px-6 py-4 rounded-2xl font-bold text-lg transition-all ${
                    done
                      ? `bg-${activeIsland.color} opacity-30 text-white/50 cursor-default`
                      : `bg-gradient-to-r from-${activeIsland.color}/40 to-${activeIsland.color}/20 text-white hover:from-${activeIsland.color}/60 hover:to-${activeIsland.color}/40 shadow-lg hover:shadow-xl`
                  }`}
                  whileHover={!done ? { scale: 1.05 } : {}}
                  whileTap={!done ? { scale: 0.95 } : {}}>
                  <div className="flex items-center justify-between gap-3">
                    <span>{m.icon} {m.label[lang as keyof typeof m.label] || m.label.en}</span>
                    {done && <span>{"⭐".repeat(Math.min(stars, 3))}</span>}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Games */}
      {activeGameType === "orbit-quiz" && questions.length > 0 && screen === activeGameType && (
        <OrbitQuiz questions={questions} color={activeIsland?.color || "#FF2D78"} onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {activeGameType === "black-hole" && questions.length > 0 && screen === activeGameType && (
        <BlackHole questions={questions} color={activeIsland?.color || "#FF2D78"} onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {activeGameType === "gravity-sort" && activeIsland && screen === activeGameType && (
        <GravitySort sortRange={activeIsland.sortRange} color={activeIsland.color} onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {activeGameType === "star-match" && questions.length > 0 && screen === activeGameType && (
        <StarMatch questions={questions} color={activeIsland?.color || "#FF2D78"} onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {activeGameType === "speed-round" && questions.length > 0 && screen === activeGameType && (
        <SpeedRound questions={questions} color={activeIsland?.color || "#FF2D78"} onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {activeGameType === "lang-explore" && screen === activeGameType && activeIsland && (
        <LangExplore
          island={activeIsland}
          grade={5}
          onDone={(s, t) => handleMissionSuccess(s, t)}
        />
      )}

      {/* Explorer Components */}
      {screen === "letter-explorer" && (
        <LetterExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {screen === "syllable-explorer" && (
        <SyllableExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {screen === "spelling-explorer" && (
        <SpellingExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {screen === "noun-explorer" && (
        <NounExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {screen === "verb-explorer" && (
        <VerbExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {screen === "sentence-explorer" && (
        <SentenceExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {screen === "eset-explorer" && (
        <EsetExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}
      {screen === "review-explorer-hu" && (
        <ReviewExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionSuccess(s, t)} />
      )}

      {/* Reward + Card */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="astromagyar"
          score={rewardScore.score || missionScore.score}
          total={rewardScore.total || missionScore.total}
          onDone={() => {
            setEarnedCard(null);
            setScreen("mission-select");
          }}
        />
      )}

      {/* Milestones */}
      <MilestonePopup />

      {/* Checkpoint Quiz */}
      {screen === "checkpoint-quiz" && questions.length > 0 && checkpointId && (
        <OrbitQuiz
          questions={questions}
          color="#FFD700"
          onDone={(s, t) => handleCheckpointSuccess(s, t)}
        />
      )}

      {/* Checkpoint Done */}
      {screen === "checkpoint-done" && (
        <motion.div className="relative z-40 min-h-screen flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="text-center">
            <motion.div className="text-6xl mb-4" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6 }}>
              ✅
            </motion.div>
            <h2 className="text-3xl font-black text-white mb-2">
              {lang === "hu" ? "Teszt teljesítve!" : "Checkpoint Complete!"}
            </h2>
            <p className="text-white/60 mb-6">{missionScore.score}/{missionScore.total}</p>
            <button
              onClick={() => setScreen("island-map")}
              className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-white/90 transition-colors">
              {lang === "hu" ? "Vissza a térképre" : "Back to Map"}
            </button>
          </div>
        </motion.div>
      )}

      {/* Avatar */}
      <div className="fixed bottom-6 right-6 z-20 pointer-events-none">
        <div style={{ width: "w-40", height: "h-40" }}>
          <AvatarCompanion
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
