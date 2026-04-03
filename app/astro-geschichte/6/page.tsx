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
import RocketLaunch from "@/app/astromath/games/RocketLaunch";
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import type { MathQuestion } from "@/lib/mathCurriculum";
import type { IslandDef, MissionDef, Lang, MissionCategory, GeschichteProgress } from "@/lib/astroGeschichte";
import {
  K6_ISLANDS, K6_CHECKPOINT_MAP, K6_CHECKPOINT_TOPICS,
  loadK6Progress, saveK6Progress,
  isMissionDoneK6, isIslandDoneK6, isIslandUnlockedK6,
  isCheckpointUnlockedK6, isCheckpointDoneK6,
  completeMissionK6, completeTestK6, islandTotalStarsK6,
  generateIslandQuestionsK6, generateCheckpointQuestionsK6,
} from "@/lib/astroGeschichte6";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });
const K6Explorer = dynamic(() => import("@/app/astro-geschichte/games/k6/K6Explorer"), { ssr: false });

const CATEGORY_CONFIG: Record<string, {
  label: Record<string, string>;
  desc: Record<string, string>;
  color: string; bg: string; border: string;
}> = {
  explore: {
    label: { en: "Explore", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" },
    desc: {
      en: "Discover history — no wrong answers!",
      hu: "Fedezd fel — nincs hibás válasz!",
      de: "Entdecke Geschichte — keine falschen Antworten!",
      ro: "Descoperă istoria — fără răspunsuri greșite!",
    },
    color: "#A78BFA", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.35)",
  },
  build: {
    label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" },
    desc: {
      en: "Guided questions — take your time!",
      hu: "Vezérelt feladatok — nincs sietség!",
      de: "Geführte Aufgaben — kein Zeitdruck!",
      ro: "Exerciții ghidate — fără grabă!",
    },
    color: "#34D399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.35)",
  },
  challenge: {
    label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" },
    desc: {
      en: "Fast & timed — show what you know!",
      hu: "Gyors és időre — mutasd meg tudásod!",
      de: "Schnell & timed — zeig was du kannst!",
      ro: "Rapid și la timp — arată ce știi!",
    },
    color: "#FB923C", bg: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.35)",
  },
};

const GRADE_LABEL: Record<string, string> = {
  en: "Grade 6 · Middle Ages",
  de: "Klasse 6 · Das Mittelalter",
  hu: "6. osztály · A középkor",
  ro: "Clasa 6 · Evul Mediu",
};

type Screen =
  | "island-map" | "island-intro" | "mission-select"
  | "orbit-quiz" | "star-match" | "black-hole" | "speed-round"
  | "geschichte-explore"
  | "island-transition" | "island-complete-anim"
  | "mission-done" | "island-done" | "reward"
  | "checkpoint-intro" | "checkpoint-quiz" | "checkpoint-done"
  | "rocket-launch";

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

const MAP_W = 320;
const MAP_H = 860;
const MAP_VB_OFFSET = 220;

const CP_POS: Record<string, { x: number; y: number }> = {
  test1: { x: 155, y: 295 },
  test2: { x: 155, y: 50 },
  test3: { x: 155, y: -165 },
};

function buildSmoothPath(islands: typeof K6_ISLANDS): string {
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
  progress: GeschichteProgress;
  onIsland: (island: IslandDef) => void;
  onCheckpoint: (testId: string) => void;
}) {
  const pathD = buildSmoothPath(K6_ISLANDS);
  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowGK6" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowGK6" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebulaGK6" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx={160} cy={200} rx={200} ry={250} fill="url(#nebulaGK6)" />
      <path d={pathD} fill="none" stroke="rgba(139,92,246,0.22)" strokeWidth={8}
        filter="url(#pathGlowGK6)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      
      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedK6(progress, testId);
        const done = isCheckpointDoneK6(progress, testId);
        const color = done ? "#00FF88" : unlocked ? "#FFD700" : "rgba(255,255,255,0.2)";
        const fillAlpha = done ? "rgba(0,255,136,0.15)" : unlocked ? "rgba(255,215,0,0.15)" : "rgba(255,255,255,0.03)";
        return (
          <g key={testId} onClick={() => unlocked && !done && onCheckpoint(testId)}
            style={{ cursor: unlocked && !done ? "pointer" : "default" }}>
            <rect x={pos.x - 48} y={pos.y - 16} width={96} height={32} rx={16}
              fill={fillAlpha} stroke={color} strokeWidth={done ? 1.5 : 2} />
            <text x={pos.x} y={pos.y + 5} textAnchor="middle" fontSize={12} fontWeight="bold" fill={color}>
              {done ? "✓" : unlocked ? "TEST" : "🔒"}
            </text>
          </g>
        );
      })}

      {K6_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedK6(progress, island.id);
        const done = isIslandDoneK6(progress, island.id);
        const total = islandTotalStarsK6(progress, island.id);
        return (
          <g key={island.id} onClick={() => unlocked && onIsland(island)}
            style={{ cursor: unlocked ? "pointer" : "default" }}>
            {unlocked && (
              <circle cx={island.svgX} cy={island.svgY} r={35} fill={island.color} opacity={0.1} filter="url(#islandGlowGK6)" />
            )}
            <text x={island.svgX} y={island.svgY + 7} textAnchor="middle" fontSize={24} opacity={unlocked ? 1 : 0.3}>
              {unlocked ? island.icon : "🔒"}
            </text>
            {unlocked && (
              <text x={island.svgX} y={island.svgY + 45} textAnchor="middle" fontSize={10} fontWeight="bold" fill={island.color}>
                {total}/9 ⭐
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function AstroGeschichteK6Page() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [screen, setScreen] = useState<Screen>("island-map");
  const [progress, setProgress] = useState<GeschichteProgress>({ completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} });
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [checkpointScore, setCheckpointScore] = useState({ score: 0, total: 10 });
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [justUnlockedIsland, setJustUnlockedIsland] = useState(false);

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

  const avatarIsland = K6_ISLANDS.find(i => i.id === avatarIslandId) ?? K6_ISLANDS[0];
  const avatarProps = { gender, activeSkin, activeFace, activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves, activeHat, activeTrail };

  useEffect(() => {
    const p = loadK6Progress();
    setProgress(p);
    const lastDone = [...K6_ISLANDS].reverse().find(i => p.completedIslands.includes(i.id));
    if (lastDone) setAvatarIslandId(lastDone.id);
  }, []);

  const handleIslandSelect = useCallback((island: IslandDef) => {
    setActiveIsland(island);
    setAvatarIslandId(island.id);
    setScreen("island-transition");
  }, []);

  const startMission = useCallback((mission: MissionDef) => {
    if (!activeIsland) return;
    setActiveMission(mission);
    setAvatarMood("focused");
    if (mission.gameType !== "orbit-quiz" && mission.gameType !== "star-match" && mission.gameType !== "black-hole" && mission.gameType !== "speed-round") {
    } else {
      const qCount = mission.gameType === "star-match" ? 15 : 10;
      const qs = generateIslandQuestionsK6(activeIsland, lang as Lang, qCount);
      setQuestions(qs);
    }
    setScreen(mission.gameType as Screen);
  }, [activeIsland, lang]);

  const handleMissionDone = useCallback((score: number, total: number) => {
    if (!activeIsland || !activeMission) return;
    setMissionScore({ score, total });
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;
    const wasIslandDone = progress.completedIslands.includes(activeIsland.id);
    const newProgress = completeMissionK6(progress, activeIsland.id, activeMission.id, stars);
    const isNowIslandDone = newProgress.completedIslands.includes(activeIsland.id);
    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    saveK6Progress(newProgress);
    setProgress(newProgress);
    setAvatarMood(pct >= 60 ? "victory" : "disappointed");
    setScreen("mission-done");
  }, [activeIsland, activeMission, progress]);

  const handleAfterMission = useCallback(() => {
    if (justUnlockedIsland) setScreen("island-complete-anim");
    else setScreen("mission-select");
  }, [justUnlockedIsland]);

  const handleIslandAnimDone = useCallback(() => {
    const rarity = calculateRarity(missionScore.score, missionScore.total, 0, false);
    saveCard({ id: generateCardId(), game: "astrogeschichte", rarity, score: missionScore.score, total: missionScore.total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score: missionScore.score, total: missionScore.total });
    setScreen("reward");
  }, [missionScore]);

  const startCheckpoint = useCallback((testId: string) => {
    setActiveTestId(testId);
    setAvatarMood("focused");
    const qs = generateCheckpointQuestionsK6(testId, lang as Lang, 10);
    setQuestions(qs);
    setScreen("rocket-launch");
  }, [lang]);

  const handleCheckpointDone = useCallback((score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });
    const newProgress = completeTestK6(progress, activeTestId);
    saveK6Progress(newProgress);
    setProgress(newProgress);
    const rarity = calculateRarity(score, total, 0, false);
    saveCard({ id: generateCardId(), game: "astrogeschichte", rarity, score, total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score, total });
    setScreen("reward");
  }, [activeTestId, progress]);

  const goToMap = () => { setScreen("island-map"); setActiveIsland(null); };

  const bgColor = "#8B5CF6";

  if (screen === "island-map") {
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2">
          <button onClick={() => router.push("/astro-geschichte")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><ChevronLeft size={18} /></button>
          <div className="text-center">
            <h1 className="text-lg font-black text-white">{t.islandMap}</h1>
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{GRADE_LABEL[lang] ?? GRADE_LABEL.de}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">{progress.completedIslands.length}/9</div>
        </div>
        <div className="relative z-10 flex-1 overflow-y-auto" ref={attachAutoScrollToBottom}>
          <div className="max-w-sm mx-auto relative" style={{ minHeight: MAP_H }}>
            <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={startCheckpoint} />
            <motion.div className="absolute pointer-events-none z-10" style={{ width: 48, height: 48, transform: "translate(-50%, -75%)" }}
              animate={{ left: `${(avatarIsland.svgX / MAP_W) * 100}%`, top: `${((avatarIsland.svgY + MAP_VB_OFFSET) / MAP_H) * 100}%`, opacity: 1 }} initial={{ opacity: 0 }}>
              <AvatarCompanion fixed={false} mood="idle" {...avatarProps} />
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "island-transition") return <div className="min-h-screen bg-[#060614]"><Starfield /><RocketTransition color={bgColor} onDone={() => setScreen("island-intro")} /></div>;

  if (screen === "island-intro" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5"><button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button></div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center">
          <div className="text-7xl">{activeIsland.icon}</div>
          <h2 className="text-2xl font-black text-white">{activeIsland.name[lang as Lang] ?? activeIsland.name.de}</h2>
          <button onClick={() => setScreen("mission-select")} className="w-full max-w-xs py-4 rounded-2xl font-black text-white" style={{ background: bgColor }}>{t.start}</button>
        </div>
      </div>
    );
  }

  if (screen === "mission-select" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5"><button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button></div>
        <div className="relative z-10 flex-1 flex flex-col px-5 gap-4 justify-center">
          {activeIsland.missions.map((m, i) => {
            const cfg = CATEGORY_CONFIG[m.category as string];
            const done = isMissionDoneK6(progress, activeIsland.id, m.id);
            return (
              <button key={i} onClick={() => startMission(m)} className="w-full rounded-3xl p-5 text-left border-2" style={{ background: cfg.bg, borderColor: done ? cfg.color : cfg.border }}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{m.icon}</span>
                  <div>
                    <p className="font-black text-white">{m.label[lang as Lang] ?? m.label.de}</p>
                    <p className="text-xs text-white/60">{cfg.desc[lang] ?? cfg.desc.en}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (screen === "orbit-quiz" || screen === "black-hole" || screen === "star-match" || screen === "speed-round") {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#060614]">
        <Starfield />
        <div className="relative z-10 p-4"><button onClick={() => setScreen("mission-select")} className="text-white/50"><X /></button></div>
        <div className="relative z-10 flex-1">
          {screen === "orbit-quiz" && <OrbitQuiz questions={questions} color={bgColor} onDone={handleMissionDone} onCorrect={() => setAvatarMood("happy")} onWrong={() => setAvatarMood("disappointed")} />}
          {screen === "black-hole" && <BlackHole questions={questions} color={bgColor} onDone={handleMissionDone} onCorrect={() => setAvatarMood("happy")} onWrong={() => setAvatarMood("disappointed")} />}
          {screen === "star-match" && <StarMatch questions={questions} color={bgColor} onDone={handleMissionDone} />}
          {screen === "speed-round" && <SpeedRound questions={questions} color={bgColor} lang={lang} onDone={handleMissionDone} onCorrect={() => setAvatarMood("happy")} onWrong={() => setAvatarMood("disappointed")} />}
        </div>
        <AvatarCompanion fixed={true} mood={avatarMood} jumpTrigger={jumpTrigger} {...avatarProps} />
      </div>
    );
  }

  if (screen === "mission-done") return <div className="min-h-screen bg-[#060614] flex flex-col items-center justify-center p-6"><Starfield /><h2 className="text-white text-2xl font-black mb-4">Mission befehdet!</h2><button onClick={handleAfterMission} className="py-4 px-8 rounded-xl bg-white/10 text-white font-bold">{t.next}</button></div>;
  if (screen === "reward") return <RewardReveal rarity={earnedCard!} game="astrogeschichte" score={rewardScore.score} total={rewardScore.total} onDone={() => setScreen("island-done")} />;
  if (screen === "island-done") return <div className="min-h-screen bg-[#060614] flex flex-col items-center justify-center p-6"><Starfield /><h2 className="text-white text-3xl font-black mb-4">{activeIsland?.icon} Insel beendet!</h2><button onClick={goToMap} className="py-4 px-8 rounded-xl bg-white/10 text-white font-bold">{t.back}</button></div>;
  if (screen === "island-complete-anim") return <IslandCompleteAnimation islandIcon={activeIsland!.icon} islandColor={activeIsland!.color} islandName={activeIsland!.name.de} lang={lang} grade={6} score={missionScore.score} total={missionScore.total} onDone={handleIslandAnimDone} />;
  if (screen === "rocket-launch") return <div className="min-h-screen bg-[#060614]"><Starfield /><RocketLaunch questions={questions} color="#FFD700" onDone={() => setScreen("checkpoint-quiz")} /></div>;
  if (screen === "checkpoint-quiz") return <div className="min-h-screen bg-[#060614] flex flex-col"><Starfield /><div className="flex-1"><OrbitQuiz questions={questions} color="#FFD700" onDone={handleCheckpointDone} /></div><AvatarCompanion fixed={true} mood={avatarMood} {...avatarProps} /></div>;

  return null;
}
