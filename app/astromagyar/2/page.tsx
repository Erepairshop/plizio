"use client";
import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { X, ChevronLeft } from "lucide-react";
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
import OrbitQuiz from "@/app/astromath/games/OrbitQuiz";
import BlackHole from "@/app/astromath/games/BlackHole";
import GravitySort from "@/app/astromath/games/GravitySort";
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
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import {
  generateO2CategoryRushContent,
  generateO2SentenceBuilderContent,
  generateO2PictureWordContent,
  generateO2ReadingCompContent,
  generateO2MemoryPairContent,
} from "@/app/astromagyar/contentGenerators";
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
  | "review-explorer"
  | "review-explorer-hu"
  | "sentence-builder"
  | "memory-pair"
  | "picture-word"
  | "category-rush"
  | "reading-comp"
  | "fill-gap"
  | "spell-race"
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

  const color = activeIsland?.color || "#00D4FF";

  const handleIslandSelect = useCallback((island: IslandDef) => {
    setActiveIsland(island);
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
    // Explorer/content components: self-contained or use contentGenerators
    const explorerTypes = [
      "letter-explorer", "syllable-explorer", "spelling-explorer",
      "noun-explorer", "verb-explorer", "sentence-explorer",
      "eset-explorer", "review-explorer-hu", "review-explorer",
      "sentence-builder", "memory-pair", "picture-word",
      "category-rush", "reading-comp",
    ];
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
    if (activeIsland && activeMission) {
      const rarity = calculateRarity(score, total, 0, false);
      saveCard({ id: generateCardId(), game: "astromagyar", rarity, score, total, date: new Date().toISOString() });
      window.dispatchEvent(new Event("plizio-cards-changed"));
      incrementTotalGames();

      const stars = score >= total * 0.8 ? 3 : score >= total * 0.6 ? 2 : 1;
      const newProg = completeMissionO2(progress, activeIsland.id, activeMission.id, stars);
      setProgress(newProg);
      saveO2Progress(newProg);

      setEarnedCard(rarity);
      setRewardScore({ score, total });
      setScreen("reward");
    }
  }, [activeIsland, activeMission, progress]);

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
        <motion.div className="relative z-30 flex flex-col h-screen"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <button onClick={() => router.push("/astromagyar")} className="flex items-center gap-1 text-white/60 hover:text-white transition-colors text-xs font-bold">
              <ChevronLeft size={18} /> Vissza
            </button>
            <h1 className="text-lg sm:text-xl font-black text-white">{O2_LABEL[lang] || O2_LABEL.en}</h1>
            <div className="w-8" />
          </div>
          <div className="flex-1 overflow-y-auto" ref={(el) => { if (el) setTimeout(() => el.scrollTop = el.scrollHeight, 100); }}>
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
          <RocketTransition color={activeIsland?.color || "#00D4FF"} onDone={() => setScreen("mission-select")} />
        </div>
      )}

      {/* Island Complete Animation */}
      {screen === "island-complete-anim" && activeIsland && (
        <IslandCompleteAnimation
          islandIcon={activeIsland.icon}
          islandColor={activeIsland.color}
          islandName={activeIsland.name[lang as Lang] || activeIsland.name.en}
          lang={lang}
          onDone={() => {
            checkNewMilestones();
            setScreen("island-map");
          }}
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
          <div className="grid gap-4 w-full max-w-sm">
            {activeIsland.missions.map((m) => (
              <motion.button key={m.id} onClick={() => handleMissionSelect(m)}
                className="p-4 rounded-xl text-left transition-all"
                style={{ background: `${activeIsland.color}22`, border: `2px solid ${activeIsland.color}` }}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="font-bold text-white">{m.label[lang as Lang] || m.label.en}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* ─── Game Screens ─────────────────────────────────────────────────────── */}

      {screen === "orbit-quiz" && questions.length > 0 && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <OrbitQuiz questions={questions} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "black-hole" && questions.length > 0 && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <BlackHole questions={questions} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "gravity-sort" && activeIsland && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <GravitySort sortRange={activeIsland.sortRange} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "star-match" && questions.length > 0 && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <StarMatch questions={questions} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "speed-round" && questions.length > 0 && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <SpeedRound questions={questions} lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "lang-explore" && activeIsland && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <LangExplore
            island={activeIsland}
            grade={2}
            onDone={(s, t) => handleMissionComplete(s, t)}
          />
        </div>
      )}

      {/* ─── Explorer Screens ─────────────────────────────────────────────────── */}

      {screen === "letter-explorer" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <LetterExplorer lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "syllable-explorer" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <SyllableExplorer lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "spelling-explorer" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <SpellingExplorer lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "noun-explorer" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <NounExplorer lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "verb-explorer" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <VerbExplorer lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "sentence-explorer" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <SentenceExplorer lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {screen === "eset-explorer" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <EsetExplorer lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {(screen === "review-explorer-hu" || screen === "review-explorer") && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <ReviewExplorer lang={lang as Lang} color={color}
            onDone={(s, t) => handleMissionComplete(s, t)} />
        </div>
      )}

      {/* ─── New Explorer Screens ─────────────────────────────────────────────── */}

      {screen === "sentence-builder" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <SentenceBuilderExplorer
            rounds={generateO2SentenceBuilderContent()}
            color={color}
            lang={lang}
            onDone={(s, t) => handleMissionComplete(s, t)}
          />
        </div>
      )}

      {screen === "memory-pair" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <MemoryPairExplorer
            pairs={generateO2MemoryPairContent()}
            color={color}
            lang={lang}
            onDone={(s, t) => handleMissionComplete(s, t)}
          />
        </div>
      )}

      {screen === "picture-word" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <PictureVocabExplorer
            rounds={generateO2PictureWordContent()}
            color={color}
            lang={lang}
            onDone={(s, t) => handleMissionComplete(s, t)}
          />
        </div>
      )}

      {screen === "category-rush" && (
        <div className="relative">
          {(() => {
            const data = generateO2CategoryRushContent();
            return (
              <CategoryRushExplorer
                categories={data.categories}
                items={data.items}
                color={color}
                lang={lang}
                onDone={(s, t) => handleMissionComplete(s, t)}
              />
            );
          })()}
          <ExitButton onExit={() => setScreen("mission-select")} />
        </div>
      )}

      {screen === "reading-comp" && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("mission-select")} />
          <ReadingCompExplorer
            rounds={generateO2ReadingCompContent()}
            color={color}
            lang={lang}
            onDone={(s, t) => handleMissionComplete(s, t)}
          />
        </div>
      )}

      {/* Reward */}
      {screen === "reward" && earnedCard && (
        <RewardReveal rarity={earnedCard} game="astromagyar" score={rewardScore.score} total={rewardScore.total}
          onDone={() => {
            checkNewMilestones();
            if (activeIsland && isIslandDoneO2(progress, activeIsland.id)) {
              setScreen("island-complete-anim");
            } else {
              setScreen("mission-select");
            }
          }} />
      )}

      {/* Milestone Popup */}
      <MilestonePopup />

      {/* Checkpoint Quiz */}
      {screen === "checkpoint-quiz" && questions.length > 0 && (
        <div className="relative">
          <ExitButton onExit={() => setScreen("island-map")} />
          <OrbitQuiz questions={questions} color="#FFD700"
            onDone={(s, t) => handleCheckpointSuccess(s, t)} />
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
