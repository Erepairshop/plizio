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
  O2_ISLANDS, O2_CHECKPOINT_MAP, O2_CHECKPOINT_TOPICS, type IslandDef, type MissionDef, type Lang, type MissionCategory,
  loadO2Progress, saveO2Progress, type MagyarProgress,
  isMissionDoneO2, isIslandDoneO2, isIslandUnlockedO2,
  isCheckpointUnlockedO2, isCheckpointDoneO2,
  completeMissionO2, completeTestO2, islandTotalStarsO2,
  generateIslandQuestionsO2, generateCheckpointQuestionsO2,
} from "@/lib/astroMagyar2";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

// ─── Grade 2 labels ────────────────────────────────────────────────────────────
const O2_LABEL: Record<string, string> = {
  en: "Grade 2 · Hungarian Language Galaxy",
  hu: "2. osztály · Magyar Nyelv Galaxis",
  de: "Klasse 2 · Ungarische Sprache Galaxie",
  ro: "Clasa 2 · Galaxia Limba Maghiară",
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
  | "category-rush"
  | "fill-gap"
  | "spell-race"
  | "sentence-builder"
  | "word-sort"
  | "grammar-match"
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

function buildSmoothPath(islands: typeof O2_ISLANDS): string {
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
  const pathD = buildSmoothPath(O2_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowO2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowO2" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1o2" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2o2" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1o2)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2o2)" />

      <path d={pathD} fill="none" stroke="rgba(0,212,255,0.25)" strokeWidth={8}
        filter="url(#pathGlowO2)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {O2_ISLANDS.slice(0, -1).map((island, i) => {
        const next = O2_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedO2(progress, testId);
        const done = isCheckpointDoneO2(progress, testId);
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

      {O2_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedO2(progress, island.id);
        const done = isIslandDoneO2(progress, island.id);
        const total = islandTotalStarsO2(progress, island.id);

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
            <circle cx={island.svgX} cy={island.svgY} r={32}
              fill={island.color} opacity={unlocked ? 0.85 : 0.3} />
            <text x={island.svgX} y={island.svgY + 8} textAnchor="middle" fontSize={24}>
              {island.icon}
            </text>
            {done && (
              <text x={island.svgX} y={island.svgY + 50} textAnchor="middle" fontSize={10} fontWeight="bold" fill={island.color}>
                {"⭐".repeat(Math.min(total, 3))} {total}/9
              </text>
            )}
            {unlocked && !done && (
              <g>
                {island.missions.map((m, mi) => {
                  const mdone = isMissionDoneO2(progress, island.id, m.id);
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
          </g>
        );
      })}
    </svg>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function AstroMagyar2() {
  const { lang } = useLang();
  const router = useRouter();

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

  // Game state
  const [screen, setScreen] = useState<Screen>("island-map");
  const [progress, setProgress] = useState<MagyarProgress>(loadO2Progress());
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [checkpointId, setCheckpointId] = useState<string | null>(null);
  const [avatarMood, setAvatarMood] = useState<"idle" | "focused" | "happy" | "disappointed" | "victory" | "surprised" | "confused" | "laughing">("idle");

  const handleIslandSelect = useCallback((island: IslandDef) => {
    setActiveIsland(island);
    setScreen("island-intro");
  }, []);

  const handleMissionSelect = useCallback((mission: MissionDef) => {
    setActiveMission(mission);
    const gameType = mission.gameType;
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
    const qs = generateIslandQuestionsO2(activeIsland!, lang as Lang, gameType === "star-match" ? 20 : 10);
    setQuestions(qs);
    setMissionScore({ score: 0, total: 0 });
    setScreen(gameType as Screen);
  }, [activeIsland, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMissionComplete = useCallback((score: number, total: number) => {
    setMissionScore({ score, total });
    const rarity = calculateRarity(score, total, 0, false);
    saveCard({ id: generateCardId(), game: "astromagyar", rarity, score, total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    setEarnedCard(rarity);
    setRewardScore({ score, total });
    setScreen("reward");
  }, []);

  const handleRewardDone = useCallback(() => {
    checkNewMilestones();
    if (activeIsland && activeMission) {
      const stars = missionScore.score >= missionScore.total * 0.8 ? 3 : missionScore.score >= missionScore.total * 0.6 ? 2 : 1;
      const newProg = completeMissionO2(progress, activeIsland.id, activeMission.id, stars);
      setProgress(newProg);
      saveO2Progress(newProg);
      setScreen("island-intro");
    }
  }, [activeIsland, activeMission, missionScore, progress]);

  const handleCheckpointSelect = useCallback((testId: string) => {
    setCheckpointId(testId);
    const qs = generateCheckpointQuestionsO2(testId, lang as Lang, 10);
    setQuestions(qs);
    setMissionScore({ score: 0, total: 0 });
    setScreen("checkpoint-quiz");
  }, [lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCheckpointSuccess = useCallback((score: number, total: number) => {
    setMissionScore({ score, total });
    const updatedProg = completeTestO2(progress, checkpointId!);
    setProgress(updatedProg);
    saveO2Progress(updatedProg);
    setScreen("checkpoint-done");
  }, [progress, checkpointId]);

  const bgGradient = "from-blue-900/30 via-cyan-900/20 to-teal-900/30";

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient} bg-[#060614] text-white overflow-hidden`}>
      <Starfield />

      {/* Island Map */}
      {screen === "island-map" && (
        <div className="relative w-full flex flex-col items-center justify-center min-h-screen py-8">
          <motion.h1 className="text-3xl font-black text-center mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {O2_LABEL[lang] || O2_LABEL.en}
          </motion.h1>
          <div className="w-full max-w-sm px-4">
            <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={handleCheckpointSelect} />
          </div>
        </div>
      )}

      {/* Island Intro */}
      {screen === "island-intro" && activeIsland && (
        <motion.div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 gap-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="text-6xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            {activeIsland.icon}
          </motion.div>
          <h2 className="text-2xl font-bold text-center">{activeIsland.name[lang === "hu" ? "hu" : "en"]}</h2>
          <div className="flex gap-3">
            <button onClick={() => setScreen("island-map")} className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors">
              Vissza
            </button>
            <button onClick={() => { setAvatarMood("focused"); setScreen("mission-select"); }} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold transition-colors">
              Kezd
            </button>
          </div>
        </motion.div>
      )}

      {/* Mission Select */}
      {screen === "mission-select" && activeIsland && (
        <motion.div className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 gap-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-2xl font-bold">{activeIsland.name[lang === "hu" ? "hu" : "en"]}</h2>
          <div className="space-y-3 max-w-md w-full">
            {activeIsland.missions.map((m) => (
              <button key={m.id} onClick={() => handleMissionSelect(m)}
                className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-xl text-left font-bold transition-colors">
                {m.icon} {m.label[lang === "hu" ? "hu" : "en"]}
              </button>
            ))}
          </div>
          <button onClick={() => { setAvatarMood("idle"); setScreen("island-map"); }} className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-colors">
            Vissza
          </button>
        </motion.div>
      )}

      {/* Game Screens */}
      {screen === "orbit-quiz" && questions.length > 0 && (
        <OrbitQuiz questions={questions} color="#00D4FF"
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "black-hole" && questions.length > 0 && (
        <BlackHole questions={questions} color="#00D4FF"
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "gravity-sort" && activeIsland && (
        <GravitySort sortRange={activeIsland.sortRange} color="#00D4FF"
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "star-match" && questions.length > 0 && (
        <StarMatch questions={questions} color="#00D4FF"
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "lang-explore" && activeIsland && (
        <LangExplore
          island={activeIsland}
          grade={2}
          onDone={(s, t) => handleMissionComplete(s, t)}
        />
      )}

      {/* Explorer Components */}
      {screen === "letter-explorer" && (
        <LetterExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "syllable-explorer" && (
        <SyllableExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "spelling-explorer" && (
        <SpellingExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "noun-explorer" && (
        <NounExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "verb-explorer" && (
        <VerbExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "sentence-explorer" && (
        <SentenceExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "eset-explorer" && (
        <EsetExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}
      {screen === "review-explorer-hu" && (
        <ReviewExplorer lang={lang as Lang} color={activeIsland?.color || "#FF2D78"}
          onDone={(s, t) => handleMissionComplete(s, t)} />
      )}

      {/* Reward */}
      {screen === "reward" && earnedCard && (
        <RewardReveal rarity={earnedCard} game="astromagyar" score={rewardScore.score} total={rewardScore.total}
          onDone={handleRewardDone} />
      )}

      {/* Milestone Popup */}
      <MilestonePopup />

      {/* Checkpoint Quiz */}
      {screen === "checkpoint-quiz" && questions.length > 0 && (
        <OrbitQuiz questions={questions} color="#00FF88"
          onDone={(s, t) => handleCheckpointSuccess(s, t)} />
      )}

      {/* Avatar Companion */}
      <div className="fixed bottom-20 right-6 z-10">
        <AvatarCompanion fixed gender={gender} activeSkin={activeSkin} activeFace={activeFace}
          activeTop={activeTop} activeBottom={activeBottom} activeShoe={activeShoe} activeCape={activeCape}
          activeGlasses={activeGlasses} activeGloves={activeGloves} activeHat={activeHat} activeTrail={activeTrail}
          mood={avatarMood} />
      </div>
    </div>
  );
}
