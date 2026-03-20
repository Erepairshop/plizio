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
import {
  O6_ISLANDS, O6_CHECKPOINT_MAP, O6_CHECKPOINT_TOPICS, type IslandDef, type MissionDef, type Lang, type MissionCategory,
  loadO6Progress, saveO6Progress,
  isMissionDoneO6, isIslandDoneO6, isIslandUnlockedO6,
  isCheckpointUnlockedO6, isCheckpointDoneO6,
  completeMissionO6, completeTestO6, islandTotalStarsO6,
  generateIslandQuestionsO6, generateCheckpointQuestionsO6,
} from "@/lib/astroMagyar6";
import { type MagyarProgress } from "@/lib/astroMagyar";
import { O6_ISLAND_SVGS } from "@/app/astromagyar/islands";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

// ─── Grade 6 labels ────────────────────────────────────────────────────────────
const O6_LABEL: Record<string, string> = {
  en: "Grade 6 · Hungarian Language Galaxy",
  hu: "6. osztály · Magyar Nyelv Galaxis",
  de: "Klasse 6 · Ungarische Sprache Galaxie",
  ro: "Clasa 6 · Galaxia Limba Maghiară",
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

function buildSmoothPath(islands: typeof O6_ISLANDS): string {
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
  const pathD = buildSmoothPath(O6_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowO6" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowO6" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1o6" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FF2D78" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF2D78" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2o6" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1o6)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2o6)" />

      <path d={pathD} fill="none" stroke="rgba(255,45,120,0.25)" strokeWidth={8}
        filter="url(#pathGlowO6)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {O6_ISLANDS.slice(0, -1).map((island, i) => {
        const next = O6_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedO6(progress, testId);
        const done = isCheckpointDoneO6(progress, testId);
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

      {O6_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedO6(progress, island.id);
        const done = isIslandDoneO6(progress, island.id);
        const total = islandTotalStarsO6(progress, island.id);

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
              O6_ISLAND_SVGS[island.id] ? (
                <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60}
                  overflow="visible" opacity={done ? 0.85 : 1}>
                  {React.createElement(O6_ISLAND_SVGS[island.id], { size: 60 })}
                </svg>
              ) : (
                <text x={island.svgX} y={island.svgY + 5} textAnchor="middle" fontSize={32}>
                  {island.icon}
                </text>
              )
            ) : (
              <circle cx={island.svgX} cy={island.svgY} r={18} fill="rgba(255,255,255,0.2)" />
            )}
            {(unlocked || done) && (
              <text x={island.svgX} y={island.svgY + 50} textAnchor="middle" fontSize={11} fill="#fff">
                {total > 0 ? "⭐".repeat(Math.min(total, 3)) + ` ${total}/9` : `${idx + 1}`}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function O6Page() {
  const router = useRouter();
  const { lang } = useLang();

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
  const [progress, setProgress] = useState<MagyarProgress>(loadO6Progress());
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [activeCheckpoint, setActiveCheckpoint] = useState<string | null>(null);
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });

  const avatarMoodRef = useRef<"idle" | "focused" | "victory" | "disappointed">("idle");

  // Load progress on mount
  useEffect(() => {
    const p = loadO6Progress();
    setProgress(p);
  }, []);

  // Handle island select
  const handleIslandSelect = useCallback((island: IslandDef) => {
    if (screen === "island-map") {
      setActiveIsland(island);
      setScreen("island-transition");
    }
  }, [screen]);

  // Handle mission select
  const handleMissionSelect = useCallback((mission: MissionDef) => {
    if (!activeIsland) return;
    setActiveMission(mission);
    const qst = generateIslandQuestionsO6(activeIsland, lang as Lang, 10);
    setQuestions(qst);
    setScore(0);
    setTotal(qst.length);
    setScreen(mission.gameType as Screen);
  }, [activeIsland, lang]);

  // Handle mission complete
  const handleAfterMission = useCallback((finalScore: number) => {
    if (!activeIsland || !activeMission) return;

    const stars = finalScore === total ? 3 : finalScore >= total * 0.6 ? 2 : 1;
    const rarity = calculateRarity(finalScore, total, 0, false);

    // Save card
    saveCard({
      id: generateCardId(),
      game: "astromagyar",
      rarity,
      score: finalScore,
      total,
      date: new Date().toISOString(),
    });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();

    // Update progress
    const updated = completeMissionO6(progress, activeIsland.id, activeMission.id, stars);
    setProgress(updated);
    saveO6Progress(updated);

    // Check for new milestones
    const newMs = checkNewMilestones();

    // Check if island complete
    const islandDone = updated.completedIslands.includes(activeIsland.id);
    if (islandDone) {
      setEarnedCard(rarity);
      setRewardScore({ score: finalScore, total });
      setScreen("island-complete-anim");
    } else {
      setEarnedCard(rarity);
      setRewardScore({ score: finalScore, total });
      setScreen("reward");
    }
  }, [activeIsland, activeMission, progress, total]);

  const handleIslandAnimDone = useCallback(() => {
    setScreen("mission-select");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060614] via-[#0a0a1a] to-[#0f0f2a] relative overflow-hidden">
      <Starfield />

      {/* ISLAND MAP SCREEN */}
      {screen === "island-map" && (
        <motion.div className="min-h-screen flex flex-col" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full px-6 py-8">
            <motion.div className="text-center mb-8" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <h1 className="text-3xl font-black text-white mb-2">{O6_LABEL[lang] || O6_LABEL.en}</h1>
              <p className="text-white/60 text-sm">9 sziget, 3 teszt, végtelen tanulás</p>
            </motion.div>
            <div className="w-full">
              <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={setActiveCheckpoint} />
            </div>
          </div>
        </motion.div>
      )}

      {/* ISLAND TRANSITION */}
      {screen === "island-transition" && activeIsland && (
        <motion.div className="min-h-screen bg-[#060614] relative">
          <Starfield />
          <RocketTransition color={activeIsland.color} onDone={() => setScreen("island-intro")} />
        </motion.div>
      )}

      {/* ISLAND COMPLETE ANIMATION */}
      {screen === "island-complete-anim" && activeIsland && (
        <IslandCompleteAnimation
          islandIcon={activeIsland.icon}
          islandColor={activeIsland.color}
          islandName={activeIsland.name[lang as Lang] ?? activeIsland.name.en}
          lang={lang}
          onDone={handleIslandAnimDone}
        />
      )}

      {/* ISLAND INTRO */}
      {screen === "island-intro" && activeIsland && (
        <motion.div className="min-h-screen flex flex-col items-center justify-center px-6 py-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="text-center mb-12" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div className="text-6xl mb-4">{activeIsland.icon}</div>
            <h2 className="text-3xl font-black text-white mb-2">{activeIsland.name[lang as Lang] || activeIsland.name.en}</h2>
            <p className="text-white/60">{activeIsland.missions.length} missions</p>
          </motion.div>
          <motion.button
            onClick={() => setScreen("mission-select")}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-bold transition-colors"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Begin Adventures →
          </motion.button>
        </motion.div>
      )}

      {/* MISSION SELECT */}
      {screen === "mission-select" && activeIsland && (
        <motion.div className="min-h-screen flex flex-col items-center justify-center px-6 py-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button
            onClick={() => { setScreen("island-map"); setActiveIsland(null); }}
            className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70">
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-2xl font-black text-white mb-8">Missions</h2>
          <div className="space-y-4 max-w-sm w-full">
            {activeIsland.missions.map((m) => {
              const done = isMissionDoneO6(progress, activeIsland.id, m.id);
              const stars = progress.missionStars?.[`${activeIsland.id}_${m.id}`] ?? 0;
              return (
                <motion.button
                  key={m.id}
                  onClick={() => !done && handleMissionSelect(m)}
                  className={`w-full p-4 rounded-xl border-2 transition-all ${
                    done
                      ? "bg-green-500/20 border-green-500/50"
                      : "bg-white/5 border-white/20 hover:bg-white/10"
                  }`}
                  whileHover={{ scale: done ? 1 : 1.02 }}
                  whileTap={{ scale: done ? 1 : 0.98 }}>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{m.label[lang as Lang] || m.label.en}</span>
                    <span className="text-xl">{done ? "✅" : m.icon}</span>
                  </div>
                  {stars > 0 && <div className="text-sm text-yellow-300 mt-1">{"⭐".repeat(stars)}</div>}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* GAME SCREENS */}
      {(screen === "orbit-quiz" || screen === "black-hole" || screen === "gravity-sort" || screen === "star-match" || screen === "speed-round") && (
        <div className="min-h-screen flex flex-col">
          {screen === "orbit-quiz" && <OrbitQuiz questions={questions} color={activeIsland?.color || "#FF2D78"} onDone={(s, t) => handleAfterMission(s)} />}
          {screen === "black-hole" && <BlackHole questions={questions} color={activeIsland?.color || "#FF2D78"} onDone={(s, t) => handleAfterMission(s)} />}
          {screen === "gravity-sort" && activeIsland && <GravitySort sortRange={activeIsland.sortRange} color={activeIsland.color} onDone={(s, t) => handleAfterMission(s)} />}
          {screen === "star-match" && <StarMatch questions={questions} color={activeIsland?.color || "#FF2D78"} onDone={(s, t) => handleAfterMission(s)} />}
          {screen === "speed-round" && <SpeedRound questions={questions} color={activeIsland?.color || "#FF2D78"} onDone={(s, t) => handleAfterMission(s)} />}
        </div>
      )}

      {/* REWARD */}
      {screen === "reward" && earnedCard && (
        <RewardReveal
          rarity={earnedCard}
          game="astromagyar"
          score={rewardScore.score}
          total={rewardScore.total}
          onDone={() => setScreen("mission-select")}
        />
      )}

      {/* MILESTONES */}
      <MilestonePopup />
    </div>
  );
}
