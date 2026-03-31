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
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import {
  Lang, LocalizedString, MathMissionCategory, MathMissionConfig, MathIslandConfig, MATH_CATEGORY_CONFIG,
  MathProgress, MathCheckpointTopics
} from "@/lib/astroMathConfigShared";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

// ─── Screen types ──────────────────────────────────────────────────────────────
export type AstroMathScreen =
  | "island-map"
  | "island-intro"
  | "mission-select"
  | "game-active"
  | "island-transition"
  | "island-complete-anim"
  | "mission-done"
  | "island-done"
  | "reward"
  | "checkpoint-intro"
  | "checkpoint-quiz"
  | "checkpoint-done"
  | "rocket-launch";

interface AstroMathHybridProps {
  grade: number;
  gradeLabel: LocalizedString;
  islands: MathIslandConfig[];
  progress: MathProgress;
  islandSvgs: Record<string, any>;
  checkpointPos: Record<string, { x: number; y: number }>;
  onIslandUnlocked: (progress: MathProgress, id: string) => boolean;
  onIslandDone: (progress: MathProgress, id: string) => boolean;
  onMissionDone: (progress: MathProgress, islandId: string, missionId: string) => boolean;
  onCheckpointUnlocked: (progress: MathProgress, id: string) => boolean;
  onCheckpointDone: (progress: MathProgress, id: string) => boolean;
  onCompleteMission: (progress: MathProgress, islandId: string, missionId: string, stars: number) => MathProgress;
  onCompleteTest: (progress: MathProgress, testId: string) => MathProgress;
  onSaveProgress: (progress: MathProgress) => void;
  getIslandStars: (progress: MathProgress, islandId: string) => number;
  getMissionStars: (progress: MathProgress, islandId: string, missionId: string) => number;
  generateQuestions: (island: MathIslandConfig, lang: Lang) => MathQuestion[];
  generateCheckpointQuestions: (testId: string, lang: Lang) => MathQuestion[];
  renderGame: (screen: string, island: MathIslandConfig, mission: MathMissionConfig | null, questions: MathQuestion[], lang: Lang, onDone: (s: number, t: number) => void, onCorrect: () => void, onWrong: () => void) => React.ReactNode;
  checkpointTopics?: MathCheckpointTopics;
}

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
    </div>
  );
}

const MAP_W = 320;
const MAP_H = 860;
const MAP_VB_OFFSET = 220;

function buildSmoothPath(islands: MathIslandConfig[]): string {
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

export default function AstroMathExplorerHybrid(props: AstroMathHybridProps) {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [screen, setScreen] = useState<AstroMathScreen>("island-map");
  const [progress, setProgress] = useState<MathProgress>(props.progress);
  const [activeIsland, setActiveIsland] = useState<MathIslandConfig | null>(null);
  const [activeMission, setActiveMission] = useState<MathMissionConfig | null>(null);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [checkpointScore, setCheckpointScore] = useState({ score: 0, total: 10 });
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [justUnlockedIsland, setJustUnlockedIsland] = useState(false);

  // Avatar state (standardized)
  const [gender] = useState<AvatarGender>(() => getGender());
  const [activeSkin] = useState(() => getSkinDef(getActiveSkin()));
  const [activeFace] = useState(() => getFaceDef(getActiveFace()));
  const [avatarMood, setAvatarMood] = useState<any>("idle");
  const [jumpTrigger, setJumpTrigger] = useState<any>(undefined);
  const [avatarIslandId, setAvatarIslandId] = useState<string>(props.islands[0].id);
  const [avatarWalking, setAvatarWalking] = useState(false);

  const avatarProps = {
    gender, activeSkin, activeFace,
    activeTop: props.progress ? getActive("top") ? getTopDef(getActive("top")!) : null : null,
    activeBottom: props.progress ? getActive("bottom") ? getBottomDef(getActive("bottom")!) : null : null,
    activeShoe: props.progress ? getActive("shoe") ? getShoeDef(getActive("shoe")!) : null : null,
    activeHat: props.progress ? getActiveHat() ? getHatDef(getActiveHat()!) : null : null,
  };

  const handleIslandSelect = (island: MathIslandConfig) => {
    setActiveIsland(island);
    setAvatarIslandId(island.id);
    setScreen("island-transition");
  };

  const startMission = (mission: MathMissionConfig) => {
    if (!activeIsland) return;
    setActiveMission(mission);
    setAvatarMood("focused");
    const qs = props.generateQuestions(activeIsland, lang as Lang);
    setQuestions(qs);
    setScreen("game-active");
  };

  const handleMissionDone = (score: number, total: number) => {
    if (!activeIsland || !activeMission) return;
    setMissionScore({ score, total });
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;

    const wasIslandDone = props.onIslandDone(progress, activeIsland.id);
    const newProgress = props.onCompleteMission(progress, activeIsland.id, activeMission.id, stars);
    const isNowIslandDone = props.onIslandDone(newProgress, activeIsland.id);

    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    props.onSaveProgress(newProgress);
    setProgress(newProgress);
    setAvatarMood(pct >= 60 ? "victory" : "disappointed");
    setScreen("mission-done");
  };

  const handleAfterMission = () => {
    if (justUnlockedIsland) setScreen("island-complete-anim");
    else setScreen("mission-select");
  };

  const handleIslandAnimDone = () => {
    const rarity = calculateRarity(missionScore.score, missionScore.total, 0, false);
    saveCard({ id: generateCardId(), game: "astromath", rarity, score: missionScore.score, total: missionScore.total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score: missionScore.score, total: missionScore.total });
    setScreen("reward");
  };

  const startCheckpoint = (testId: string) => {
    setActiveTestId(testId);
    setAvatarMood("focused");
    const qs = props.generateCheckpointQuestions(testId, lang as Lang);
    setQuestions(qs);
    setScreen("rocket-launch");
  };

  const handleCheckpointDone = (score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });
    const newProgress = props.onCompleteTest(progress, activeTestId);
    props.onSaveProgress(newProgress);
    setProgress(newProgress);
    const rarity = calculateRarity(score, total, 0, false);
    saveCard({ id: generateCardId(), game: "astromath", rarity, score, total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);
    setRewardScore({ score, total });
    setScreen("reward");
  };

  const goToMap = () => {
    setScreen("island-map");
    setActiveIsland(null);
    setActiveMission(null);
    setActiveTestId(null);
    setAvatarMood("idle");
  };

  const bgColor = activeIsland?.color ?? "#FF9500";
  const avatarIsland = props.islands.find(i => i.id === avatarIslandId) ?? props.islands[0];
  const pathD = buildSmoothPath(props.islands);

  if (screen === "island-map") {
    const totalDone = props.islands.filter(i => props.onIslandDone(progress, i.id)).length;
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2 flex-shrink-0">
          <button onClick={() => router.push("/astromath")} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors"><ChevronLeft size={18} /></button>
          <div className="text-center">
            <h1 className="text-lg font-black text-white">🪐 {t.islandMap}</h1>
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{props.gradeLabel[lang as Lang] ?? props.gradeLabel.en}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">{totalDone}/{props.islands.length}</div>
        </div>
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #FF9500, #EC4899)" }} initial={{ width: 0 }} animate={{ width: `${(totalDone / props.islands.length) * 100}%` }} transition={{ duration: 0.8 }} />
          </div>
        </div>
        <div className="relative z-10 flex-1 min-h-0 overflow-y-auto" ref={attachAutoScrollToBottom}>
          <div className="max-w-sm mx-auto px-2 pb-6" style={{ minHeight: MAP_H + 40 }}>
            <div className="relative">
              <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
                <path d={pathD} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={4} strokeDasharray="8 6" />
                {props.islands.map((island, idx) => {
                  const unlocked = props.onIslandUnlocked(progress, island.id);
                  const done = props.onIslandDone(progress, island.id);
                  const stars = props.getIslandStars(progress, island.id);
                  return (
                    <g key={island.id} onClick={() => unlocked && handleIslandSelect(island)} style={{ cursor: unlocked ? "pointer" : "default" }}>
                       <circle cx={island.svgX} cy={island.svgY} r={unlocked ? 30 : 20} fill={unlocked ? island.color : "rgba(255,255,255,0.05)"} opacity={unlocked ? 0.3 : 0.1} />
                       {props.islandSvgs[island.id] ? (
                         <svg x={island.svgX-25} y={island.svgY-25} width={50} height={50} overflow="visible">{React.createElement(props.islandSvgs[island.id], { size: 50 })}</svg>
                       ) : <text x={island.svgX} y={island.svgY+7} textAnchor="middle" fontSize={20}>{unlocked ? island.icon : "🔒"}</text>}
                       <text x={island.svgX} y={island.svgY+45} textAnchor="middle" fontSize={10} fill="white" fontWeight="black" opacity={0.7}>{stars > 0 ? `${stars} ⭐` : island.name[lang as Lang]}</text>
                    </g>
                  );
                })}
                {Object.entries(props.checkpointPos).map(([id, pos]) => {
                  const unlocked = props.onCheckpointUnlocked(progress, id);
                  const done = props.onCheckpointDone(progress, id);
                  return (
                    <g key={id} onClick={() => unlocked && !done && startCheckpoint(id)} style={{ cursor: unlocked && !done ? "pointer" : "default" }}>
                      <rect x={pos.x-40} y={pos.y-15} width={80} height={30} rx={15} fill={done ? "#00FF8822" : unlocked ? "#FFD70022" : "rgba(255,255,255,0.05)"} stroke={done ? "#00FF88" : unlocked ? "#FFD700" : "rgba(255,255,255,0.2)"} />
                      <text x={pos.x} y={pos.y+5} textAnchor="middle" fontSize={10} fill={unlocked ? "white" : "gray"}>{done ? "✅" : unlocked ? "🚀 Test" : "🔒 Test"}</text>
                    </g>
                  );
                })}
              </svg>
              <motion.div className="absolute pointer-events-none z-10" style={{ width: 48, height: 48, transform: "translate(-50%, -75%)" }}
                animate={{ left: `${(avatarIsland.svgX / MAP_W) * 100}%`, top: `${((avatarIsland.svgY + MAP_VB_OFFSET) / MAP_H) * 100}%`, opacity: 1 }}>
                <AvatarCompanion fixed={false} mood={avatarWalking ? "happy" : "idle"} passThrough={true} {...avatarProps} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "island-intro" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield /><div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4"><button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button></div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center pb-6">
          <motion.div className="text-7xl" initial={{ scale: 0 }} animate={{ scale: 1 }}>{activeIsland.icon}</motion.div>
          <div><h2 className="text-2xl font-black text-white">{activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2><p className="text-white/60 text-sm mt-2 font-medium">{activeIsland.missions.length} {t.missions}</p></div>
          <motion.button onClick={() => setScreen("mission-select")} className="w-full max-w-xs py-4 rounded-2xl font-black text-white" style={{ background: `linear-gradient(135deg, ${bgColor}55, ${bgColor}99)`, border: `2px solid ${bgColor}` }}>{t.start} <ChevronRight size={20} className="inline"/></motion.button>
        </div>
      </div>
    );
  }

  if (screen === "mission-select" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2"><button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button><h2 className="font-black text-white">{activeIsland.icon} {activeIsland.name[lang as Lang]}</h2><div className="w-9"/></div>
        <div className="relative z-10 flex-1 flex flex-col px-5 gap-4 pb-8 justify-center">
          {activeIsland.missions.map((m, idx) => {
            const cfg = MATH_CATEGORY_CONFIG[m.category];
            const bestStars = props.getMissionStars(progress, activeIsland.id, m.id);
            return (
              <button key={m.id} onClick={() => startMission(m)} className="w-full rounded-3xl p-5 text-left flex flex-col gap-2" style={{ background: cfg.bg, border: `2px solid ${bestStars > 0 ? cfg.color : cfg.border}` }}>
                <div className="flex justify-between"><span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ background: `${cfg.color}25`, color: cfg.color }}>{cfg.label[lang as Lang]}</span><span className="text-sm">{"⭐".repeat(bestStars)}</span></div>
                <div className="flex items-center gap-3"><span className="text-3xl">{m.icon}</span><div><p className="font-black text-white">{m.label[lang as Lang]}</p><p className="text-xs" style={{ color: `${cfg.color}cc` }}>{cfg.desc[lang as Lang]}</p></div></div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (screen === "game-active" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}18 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
          <button onClick={() => setScreen("mission-select")} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
          <div><p className="text-white/70 text-xs font-bold">{activeIsland.icon} {activeIsland.name[lang as Lang]}</p><p className="text-white/50 text-[10px]">{activeMission?.label[lang as Lang]}</p></div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          {props.renderGame(activeMission?.gameType || "", activeIsland, activeMission, questions, lang as Lang, handleMissionDone, () => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }, () => setAvatarMood("disappointed"))}
        </div>
        <AvatarCompanion fixed={true} mood={avatarMood} jumpTrigger={jumpTrigger} {...avatarProps} />
      </div>
    );
  }

  if (screen === "rocket-launch" && activeTestId) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,165,0,0.18) 0%, #060614 55%)" }}>
        <Starfield />
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3"><button onClick={goToMap} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button><div className="flex-1"><p className="text-white font-black text-sm">{t.rocketTitle}</p><p className="text-white/50 text-[10px]">{t.rocketDesc}</p></div></div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          {props.renderGame("rocket-launch", props.islands[0], null, questions, lang as Lang, () => setScreen("checkpoint-intro"), () => {}, () => {})}
        </div>
        <AvatarCompanion fixed={true} mood="focused" {...avatarProps} />
      </div>
    );
  }

  if (screen === "checkpoint-intro" && activeTestId) {
    const topicDesc = props.checkpointTopics?.[activeTestId]?.[lang as Lang] || "";
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5 gap-6" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield /><div className="relative z-10 flex flex-col items-center gap-5 text-center w-full max-w-sm"><button onClick={goToMap} className="absolute top-0 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button><div className="text-6xl">🎓</div><div><h2 className="text-2xl font-black text-[#FFD700]">{t.checkpointReady}</h2><p className="text-white/60 text-sm mt-2">{t.checkpointDesc}</p><p className="text-white/40 text-xs mt-2">{topicDesc}</p></div>
        <button onClick={() => setScreen("checkpoint-quiz")} className="w-full py-4 rounded-2xl font-black text-black" style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}>{t.startTest} 🚀</button></div>
      </div>
    );
  }

  if (screen === "checkpoint-quiz" && activeTestId) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.12) 0%, #060614 55%)" }}>
        <Starfield /><div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3"><button onClick={goToMap} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button><p className="text-white/70 text-sm font-bold flex-1">{t.checkpointTitle}</p></div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          {props.renderGame("orbit-quiz", props.islands[0], null, questions, lang as Lang, handleCheckpointDone, () => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }, () => setAvatarMood("disappointed"))}
        </div>
        <AvatarCompanion fixed={true} mood={avatarMood} jumpTrigger={jumpTrigger} {...avatarProps} />
      </div>
    );
  }

  if (screen === "checkpoint-done" && activeTestId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield /><div className="relative z-10 w-full flex flex-col items-center gap-6 text-center"><div className="text-6xl">🏆</div><div><p className="text-white/60 text-sm">{t.testDone}</p><h2 className="text-2xl font-black text-[#FFD700]">{checkpointScore.score}/{checkpointScore.total}</h2></div><button onClick={goToMap} className="w-full py-4 rounded-2xl font-black text-white" style={{ background: "linear-gradient(135deg, #FFD70055, #FFD70099)", border: "2px solid #FFD700" }}>{t.back} {t.islandMap}</button></div>
      </div>
    );
  }

  return null;
}
