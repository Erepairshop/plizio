"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
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
import StarMatch from "@/app/astromath/games/StarMatch";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import LangExplore from "@/app/astromagyar/games/LangExplore";
import LetterExplorer from "@/app/astromagyar/games/LetterExplorer";
import SyllableExplorer from "@/app/astromagyar/games/SyllableExplorer";
import SpellingExplorer from "@/app/astromagyar/games/SpellingExplorer";
import NounExplorer from "@/app/astromagyar/games/NounExplorer";
import VerbExplorer from "@/app/astromagyar/games/VerbExplorer";
import SentenceExplorer from "@/app/astromagyar/games/SentenceExplorer";
import EsetExplorer from "@/app/astromagyar/games/EsetExplorer";
import ReviewExplorer from "@/app/astromagyar/games/ReviewExplorer";
import SentenceBuilderExplorer from "@/app/astromagyar/games/SentenceBuilderExplorer";
import MemoryPairExplorer from "@/app/astromagyar/games/MemoryPairExplorer";
import PictureVocabExplorer from "@/app/astromagyar/games/PictureWordExplorer";
import CategoryRushExplorer from "@/app/astromagyar/games/CategoryRushExplorer";
import ReadingCompExplorer from "@/app/astromagyar/games/ReadingCompExplorer";
import LanguageHistoryK7Explorer from "@/app/astromagyar/games/o7/LanguageHistoryK7Explorer";
import AdvancedRhetoricExplorer from "@/app/astromagyar/games/o7/AdvancedRhetoricExplorer";
import AdvancedStylisticsExplorer from "@/app/astromagyar/games/o7/AdvancedStylisticsExplorer";
import LanguageVariantsExplorer from "@/app/astromagyar/games/o7/LanguageVariantsExplorer";
import TextCompositionExplorer from "@/app/astromagyar/games/o7/TextCompositionExplorer";
import AdvancedSyntaxExplorer from "@/app/astromagyar/games/o7/AdvancedSyntaxExplorer";
import CommunicationExplorer from "@/app/astromagyar/games/o7/CommunicationExplorer";
import MediaLanguageExplorer from "@/app/astromagyar/games/o7/MediaLanguageExplorer";
import ReviewO7Explorer from "@/app/astromagyar/games/o7/ReviewO7Explorer";
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import {
  O7_ISLANDS, O7_CHECKPOINT_MAP, O7_CHECKPOINT_TOPICS,
  loadO7Progress, saveO7Progress,
  isMissionDoneO7, isIslandDoneO7, isIslandUnlockedO7,
  isCheckpointUnlockedO7, isCheckpointDoneO7,
  completeMissionO7, completeTestO7, islandTotalStarsO7,
} from "@/lib/astroMagyar7";
import { generateMagyarIslandQuestions, generateMagyarCheckpointQuestions, type Lang, type IslandDef, type MissionDef, type MagyarProgress, type MissionCategory } from "@/lib/astroMagyar";
import {
  generateO7CategoryRushContent,
  generateO7SentenceBuilderContent,
  generateO7PictureWordContent,
  generateO7ReadingCompContent,
  generateO7MemoryPairContent,
} from "@/app/astromagyar/contentGenerators";
import { O7_ISLAND_SVGS } from "@/app/astromagyar/islands-o7";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

// ─── Grade 7 labels ────────────────────────────────────────────────────────────
const O7_LABEL: Record<string, string> = {
  en: "Grade 7 · Hungarian Language Galaxy",
  hu: "7. osztály · Magyar Nyelv Galaxis",
  de: "Klasse 7 · Ungarische Sprache Galaxie",
  ro: "Clasa 7 · Galaxia Limba Maghiară",
};

// ─── Screen types ──────────────────────────────────────────────────────────────
type Screen =
  | "island-map"
  | "island-transition"
  | "island-complete-anim"
  | "island-intro"
  | "mission-select"
  | "orbit-quiz"
  | "black-hole"
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
  | "sentence-builder"
  | "memory-pair"
  | "picture-word"
  | "category-rush"
  | "reading-comp"
  | "language-history-k7"
  | "advanced-rhetoric"
  | "advanced-stylistics"
  | "language-variants"
  | "text-composition"
  | "advanced-syntax"
  | "communication"
  | "media-language"
  | "review-o7"
  | "reward"
  | "checkpoint-intro"
  | "checkpoint-quiz"
  | "checkpoint-done";

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

// ─── Island Map SVG ────────────────────────────────────────────────────
const MAP_W = 320;
const MAP_H = 860;
const MAP_VB_OFFSET = 220;

const CP_POS: Record<string, { x: number; y: number }> = {
  test1: { x: 155, y: 295 },
  test2: { x: 155, y: 50 },
  test3: { x: 155, y: -165 },
};

function buildSmoothPath(islands: typeof O7_ISLANDS): string {
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
  const pathD = buildSmoothPath(O7_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowO7" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowO7" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1o7" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF6B9D" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2o7" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1o7)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2o7)" />

      <path d={pathD} fill="none" stroke="rgba(255,107,157,0.25)" strokeWidth={8}
        filter="url(#pathGlowO7)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {O7_ISLANDS.slice(0, -1).map((island, i) => {
        const next = O7_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedO7(progress, testId);
        const done = isCheckpointDoneO7(progress, testId);
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

      {O7_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedO7(progress, island.id);
        const done = isIslandDoneO7(progress, island.id);
        const total = islandTotalStarsO7(progress, island.id);

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
              O7_ISLAND_SVGS[island.id] ? (
                <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60} overflow="visible" opacity={done ? 0.85 : 1}>
                  {React.createElement(O7_ISLAND_SVGS[island.id], { size: 60 })}
                </svg>
              ) : (
                <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={28}
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
                  const mdone = isMissionDoneO7(progress, island.id, m.id);
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
export default function AstroMagyarO7Page() {
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
  const [progress, setProgress] = useState<MagyarProgress>(loadO7Progress());
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [activeGameType, setActiveGameType] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [checkpointId, setCheckpointId] = useState<string | null>(null);

  // Handle island select
  const handleIslandSelect = useCallback((island: IslandDef) => {
    setActiveIsland(island);
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
    const explorerTypes = [
      "letter-explorer", "syllable-explorer", "spelling-explorer",
      "noun-explorer", "verb-explorer", "sentence-explorer",
      "eset-explorer", "review-explorer-hu",
      "sentence-builder", "memory-pair", "picture-word",
      "category-rush", "reading-comp",
    ];
    if (explorerTypes.includes(gameType)) {
      setMissionScore({ score: 0, total: 0 });
      setScreen(gameType as Screen);
      return;
    }
    const qs = generateMagyarIslandQuestions(activeIsland!, 7, gameType === "star-match" ? 20 : 10);
    setQuestions(qs);
    setMissionScore({ score: 0, total: 0 });
    setScreen(gameType as Screen);
  }, [activeIsland]);

  // Handle mission success
  const handleMissionSuccess = useCallback((score: number, total: number) => {
    setMissionScore({ score, total });

    if (activeIsland && activeMission) {
      const rarity = calculateRarity(score, total, 0, false);
      saveCard({ id: generateCardId(), game: "astromagyar", rarity, score, total, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();

      const updatedProg = completeMissionO7(progress, activeIsland.id, activeMission.id, score >= total * 0.8 ? 3 : score >= total * 0.6 ? 2 : 1);
      setProgress(updatedProg);
      saveO7Progress(updatedProg);

      const islandDone = updatedProg.completedIslands.includes(activeIsland.id);
      if (islandDone && !progress.completedIslands.includes(activeIsland.id)) {
        setEarnedCard(rarity);
        setScreen("island-complete-anim");
      } else {
        setEarnedCard(rarity);
        setRewardScore({ score, total });
        setScreen("reward");
      }
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

  // Handle checkpoint select
  const handleCheckpointSelect = useCallback((testId: string) => {
    setCheckpointId(testId);
    const qs = generateMagyarCheckpointQuestions(testId, O7_CHECKPOINT_TOPICS, 7, 10);
    setQuestions(qs);
    setMissionScore({ score: 0, total: 0 });
    setScreen("checkpoint-quiz");
  }, []);

  const handleCheckpointSuccess = useCallback((score: number, total: number) => {
    setMissionScore({ score, total });
    const updatedProg = completeTestO7(progress, checkpointId!);
    setProgress(updatedProg);
    saveO7Progress(updatedProg);
    setScreen("checkpoint-done");
  }, [checkpointId, progress]);

  // Render screens
  const bgColor = activeIsland?.color || "#FF6B9D";
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

  if (screen === "island-transition" && activeIsland) {
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
        onDone={handleIslandAnimDone}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#060614] relative overflow-hidden">
      <Starfield />

      {screen === "island-map" && (
        <motion.div className="relative min-h-screen flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="px-4 py-4 text-center">
            <h1 className="text-2xl font-black text-white mb-1">{O7_LABEL[lang as keyof typeof O7_LABEL] || O7_LABEL.en}</h1>
            <p className="text-white/50 text-xs font-semibold">Haladó magyar nyelvtan</p>
          </div>
          <div className="flex-1 overflow-y-auto" ref={(el) => { if (el) setTimeout(() => el.scrollTop = el.scrollHeight, 100); }}>
            <div className="max-w-sm mx-auto px-2">
              <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={handleCheckpointSelect} />
            </div>
          </div>
          <div className="fixed bottom-6 right-6 w-20 h-20">
            <AvatarCompanion
              fixed={true}
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
              mood="idle"
              jumpTrigger={{ reaction: null, timestamp: 0 }}
            />
          </div>
        </motion.div>
      )}

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

      {screen === "mission-select" && activeIsland && (() => {
        const totalStars = islandTotalStarsO7(progress, activeIsland.id);
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
                const done = isMissionDoneO7(progress, activeIsland.id, mission.id);
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
      })()}

      {screen === "orbit-quiz" && questions.length > 0 && (
        <OrbitQuiz
          questions={questions}
          onDone={(s, t) => handleMissionSuccess(s, t)}
          color={bgColor}
        />
      )}

      {screen === "black-hole" && questions.length > 0 && (
        <BlackHole
          questions={questions}
          onDone={(s, t) => handleMissionSuccess(s, t)}
          color={bgColor}
        />
      )}

      {screen === "star-match" && questions.length > 0 && (
        <StarMatch
          questions={questions}
          onDone={(s, t) => handleMissionSuccess(s, t)}
          color={bgColor}
        />
      )}

      {screen === "speed-round" && questions.length > 0 && (
        <SpeedRound
          questions={questions}
          onDone={(s, t) => handleMissionSuccess(s, t)}
          color={bgColor}
          lang={lang}
        />
      )}

      {screen === "lang-explore" && activeIsland && (
        <LangExplore
          island={activeIsland}
          grade={7}
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

      {screen === "sentence-builder" && (
        <div className="relative">
          <SentenceBuilderExplorer
            rounds={generateO7SentenceBuilderContent()}
            color={activeIsland?.color || "#FF2D78"}
            lang={lang}
            onDone={(s, t) => handleMissionSuccess(s, t)}
          />
        </div>
      )}

      {screen === "memory-pair" && (
        <div className="relative">
          <MemoryPairExplorer
            pairs={generateO7MemoryPairContent()}
            color={activeIsland?.color || "#FF2D78"}
            lang={lang}
            onDone={(s, t) => handleMissionSuccess(s, t)}
          />
        </div>
      )}

      {screen === "picture-word" && (
        <div className="relative">
          <PictureVocabExplorer
            rounds={generateO7PictureWordContent()}
            color={activeIsland?.color || "#FF2D78"}
            lang={lang}
            onDone={(s, t) => handleMissionSuccess(s, t)}
          />
        </div>
      )}

      {screen === "category-rush" && (
        <div className="relative">
          {(() => {
            const data = generateO7CategoryRushContent();
            return (
              <CategoryRushExplorer
                categories={data.categories}
                items={data.items}
                color={activeIsland?.color || "#FF2D78"}
                lang={lang}
                onDone={(s, t) => handleMissionSuccess(s, t)}
              />
            );
          })()}
        </div>
      )}

      {screen === "reading-comp" && (
        <div className="relative">
          <ReadingCompExplorer
            rounds={generateO7ReadingCompContent()}
            color={activeIsland?.color || "#FF2D78"}
            lang={lang}
            onDone={(s, t) => handleMissionSuccess(s, t)}
          />
        </div>
      )}

      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="astromagyar"
          score={rewardScore.score}
          total={rewardScore.total}
          onDone={() => setScreen("mission-select")}
        />
      )}

      {screen === "checkpoint-quiz" && questions.length > 0 && (
        <OrbitQuiz
          questions={questions}
          onDone={(s, t) => handleCheckpointSuccess(s, t)}
          color="#00D4FF"
        />
      )}

      {screen === "checkpoint-done" && (
        <motion.div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm gap-6 px-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="text-6xl">✅</motion.div>
          <div className="text-center">
            <h2 className="text-3xl font-black text-white mb-2">Teszt teljesítve!</h2>
            <p className="text-white/60 mb-4">Gratulálunk! Haladj tovább az úton.</p>
          </div>
          <motion.button
            onClick={() => setScreen("island-map")}
            className="px-8 py-3 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg text-white font-bold transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Vissza a térképre
          </motion.button>
        </motion.div>
      )}

      <MilestonePopup />
    </div>
  );
}
