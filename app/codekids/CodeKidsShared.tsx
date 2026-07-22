"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";
import { attachAutoScrollToBottom } from "@/components/attachAutoScrollToBottom";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, checkNewMilestones } from "@/lib/milestones";
import { addSpecialCards } from "@/lib/specialCards";
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
import M2Engine from "@/components/astro-games/M2Engine";
import M3Engine from "@/components/astro-games/M3Engine";
import { INFORMATIKA_M2_POOLS, INFORMATIKA_M3_POOLS } from "@/lib/astro/informatikaGameRegistry";
import K1Explorer from "@/app/astrinformatika/games/k1/K1Explorer";
import K2Explorer from "@/app/astrinformatika/games/k2/K2Explorer";
import K3Explorer from "@/app/astrinformatika/games/k3/K3Explorer";
import K4Explorer from "@/app/astrinformatika/games/k4/K4Explorer";
import K5Explorer from "@/app/astrinformatika/games/k5/K5Explorer";
import VisualLab, { VisualLabFab } from "@/components/VisualLab";

// Import logic for K1-K4
import {
  INFO_K1_ISLANDS, INFO_K1_CHECKPOINT_MAP,
  loadInfoK1Progress, saveInfoK1Progress,
  isMissionDoneInfoK1, isIslandDoneInfoK1, isIslandUnlockedInfoK1,
  isCheckpointUnlockedInfoK1, isCheckpointDoneInfoK1,
  completeMissionInfoK1, completeTestInfoK1, islandTotalStarsInfoK1,
  generateIslandQuestionsInfoK1, generateCheckpointQuestionsInfoK1,
} from "@/lib/astroInformatika1";
import {
  INFO_K2_ISLANDS, INFO_K2_CHECKPOINT_MAP,
  loadInfoK2Progress, saveInfoK2Progress,
  isMissionDoneInfoK2, isIslandDoneInfoK2, isIslandUnlockedInfoK2,
  isCheckpointUnlockedInfoK2, isCheckpointDoneInfoK2,
  completeMissionInfoK2, completeTestInfoK2, islandTotalStarsInfoK2,
  generateIslandQuestionsInfoK2, generateCheckpointQuestionsInfoK2,
} from "@/lib/astroInformatika2";
import {
  INFO_K3_ISLANDS, INFO_K3_CHECKPOINT_MAP,
  loadInfoK3Progress, saveInfoK3Progress,
  isMissionDoneInfoK3, isIslandDoneInfoK3, isIslandUnlockedInfoK3,
  isCheckpointUnlockedInfoK3, isCheckpointDoneInfoK3,
  completeMissionInfoK3, completeTestInfoK3, islandTotalStarsInfoK3,
  generateIslandQuestionsInfoK3, generateCheckpointQuestionsInfoK3,
} from "@/lib/astroInformatika3";
import {
  INFO_K4_ISLANDS, INFO_K4_CHECKPOINT_MAP,
  loadInfoK4Progress, saveInfoK4Progress,
  isMissionDoneInfoK4, isIslandDoneInfoK4, isIslandUnlockedInfoK4,
  isCheckpointUnlockedInfoK4, isCheckpointDoneInfoK4,
  completeMissionInfoK4, completeTestInfoK4, islandTotalStarsInfoK4,
  generateIslandQuestionsInfoK4, generateCheckpointQuestionsInfoK4,
} from "@/lib/astroInformatika4";

import type { IslandDef, MissionDef, Lang, MissionCategory } from "@/lib/astroInformatikaShared";
import type { InformatikaProgress } from "@/lib/astroInformatika1";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

const CATEGORY_CONFIG: Record<string, { label: Record<string, string>; desc: Record<string, string>; color: string; bg: string; border: string; }> = {
  explore: {
    label: { en: "Explore", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" },
    desc: { en: "Discover the concept visually!", hu: "Fedezd fel vizuálisan!", de: "Entdecke das Konzept!", ro: "Descoperă conceptul!" },
    color: "#8B5CF6", bg: "#F3E8FF", border: "#C4B5FD",
  },
  build: {
    label: { en: "Practice", hu: "Gyakorlás", de: "Üben", ro: "Practică" },
    desc: { en: "Guided questions!", hu: "Vezérelt feladatok!", de: "Geführte Aufgaben!", ro: "Exerciții ghidate!" },
    color: "#10B981", bg: "#D1FAE5", border: "#6EE7B7",
  },
  challenge: {
    label: { en: "Challenge", hu: "Kihívás", de: "Herausforderung", ro: "Provocare" },
    desc: { en: "Show what you know!", hu: "Mutasd meg tudásod!", de: "Zeig was du kannst!", ro: "Arată ce știi!" },
    color: "#F59E0B", bg: "#FEF3C7", border: "#FDE68A",
  },
};

const CODEKIDS_LABELS: Record<string, string> = {
  en: "Code Kids",
  hu: "Code Kids",
  de: "Code Kids",
  ro: "Code Kids",
};

type Screen = "island-map" | "island-intro" | "mission-select" | "orbit-quiz" | "star-match" | "gravity-sort" | "black-hole" | "speed-round" | "m2" | "m3" | "info-explore" | "island-transition" | "island-complete-anim" | "mission-done" | "island-done" | "reward" | "checkpoint-intro" | "checkpoint-quiz" | "checkpoint-done" | "rocket-launch";

const BUBBLES = Array.from({ length: 30 }, (_, i) => ({
  id: i, x: (i * 47 + 13) % 100, y: (i * 61 + 7) % 100,
  size: (i % 3) * 20 + 20, dur: 4 + (i % 5) * 2, delay: (i % 7) * 1,
}));

function BubbleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {BUBBLES.map((b) => (
        <motion.div key={b.id} className="absolute rounded-full bg-white opacity-40"
          style={{ left: `${b.x}%`, top: `${b.y}%`, width: b.size, height: b.size }}
          animate={{ y: ["0%", "-100%", "0%"] }}
          transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "linear" }} />
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

function buildSmoothPath(islands: IslandDef[]): string {
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

function IslandMapSVG({ gradeVal, islands, progress, onIsland, onCheckpoint, isUnlocked, isDone, isCpUnlocked, isCpDone, getTotalStars }: any) {
  const pathD = buildSmoothPath(islands);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <path d={pathD} fill="none" stroke="#DBEAFE" strokeWidth={12} strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="#60A5FA" strokeWidth={4} strokeDasharray="12 8" strokeLinecap="round" />

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCpUnlocked(progress, testId);
        const done = isCpDone(progress, testId);
        const color = done ? "#10B981" : unlocked ? "#F59E0B" : "#9CA3AF";
        const fillAlpha = done ? "#D1FAE5" : unlocked ? "#FEF3C7" : "#F3F4F6";
        return (
          <g key={testId} onClick={() => unlocked && !done && onCheckpoint(testId)} style={{ cursor: unlocked && !done ? "pointer" : "default" }}>
            <rect x={pos.x - 48} y={pos.y - 16} width={96} height={32} rx={16} fill={fillAlpha} stroke={color} strokeWidth={2} />
            <text x={pos.x - 32} y={pos.y + 5} textAnchor="middle" fontSize={14}>{done ? "✅" : unlocked ? "🚀" : "🔒"}</text>
            <text x={pos.x + 8} y={pos.y + 5} textAnchor="middle" fontSize={11} fontWeight="bold" fill={color}>{done ? "Kész!" : unlocked ? "Teszt!" : "Teszt"}</text>
          </g>
        );
      })}

      {islands.map((island: IslandDef, idx: number) => {
        const unlocked = isUnlocked(progress, island.id);
        const done = isDone(progress, island.id);
        const total = getTotalStars(progress, island.id);

        return (
          <g key={island.id} onClick={() => unlocked && onIsland(island)} style={{ cursor: unlocked ? "pointer" : "default" }}>
            {unlocked && !done && <circle cx={island.svgX} cy={island.svgY} r={44} fill={island.color} opacity={0.2} />}
            {done && <circle cx={island.svgX} cy={island.svgY} r={40} fill="none" stroke="#F59E0B" strokeWidth={3} strokeDasharray="6 4" />}
            
            {unlocked ? (
              <circle cx={island.svgX} cy={island.svgY} r={32} fill="white" stroke={island.color} strokeWidth={3} />
            ) : (
              <circle cx={island.svgX} cy={island.svgY} r={32} fill="#F3F4F6" stroke="#D1D5DB" strokeWidth={3} />
            )}

            <text x={island.svgX} y={island.svgY + 8} textAnchor="middle" fontSize={24} opacity={unlocked ? 1 : 0.5}>
              {unlocked ? island.icon : "🔒"}
            </text>

            {!unlocked && <text x={island.svgX} y={island.svgY + 46} textAnchor="middle" fontSize={11} fill="#9CA3AF" fontWeight="bold">{idx + 1}</text>}
            {done && (
              <g>
                <circle cx={island.svgX + 24} cy={island.svgY - 24} r={14} fill="#F59E0B" />
                <text x={island.svgX + 24} y={island.svgY - 19} textAnchor="middle" fontSize={14} fill="#fff" fontWeight="bold">✓</text>
              </g>
            )}
            {unlocked && (
              <text x={island.svgX} y={island.svgY + 52} textAnchor="middle" fontSize={11} fontWeight="bold" fill={total === 9 ? "#F59E0B" : island.color}>
                {total > 0 ? `${total}/9 ⭐` : island.name.en.split(" ")[0]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function CodeKidsShared({ grade: gradeProp }: { grade: number }) {
  const { lang } = useLang();
  const router = useRouter();
  const params: any = {};
  const gradeStr = String(gradeProp);
  const gradeVal = parseInt(gradeStr, 10);
  const t = T[lang as keyof typeof T] ?? T.en;

  const validGrade = [1, 2, 3, 4].includes(gradeVal);

  const api = (() => {
    if (gradeVal === 2) return {
      islands: INFO_K2_ISLANDS, load: loadInfoK2Progress, save: saveInfoK2Progress,
      isMissDone: isMissionDoneInfoK2, isIslDone: isIslandDoneInfoK2, isIslUnl: isIslandUnlockedInfoK2,
      isCpUnl: isCheckpointUnlockedInfoK2, isCpDone: isCheckpointDoneInfoK2,
      compMiss: completeMissionInfoK2, compTest: completeTestInfoK2, getStars: islandTotalStarsInfoK2,
      genIslQ: generateIslandQuestionsInfoK2, genCpQ: generateCheckpointQuestionsInfoK2
    };
    if (gradeVal === 3) return {
      islands: INFO_K3_ISLANDS, load: loadInfoK3Progress, save: saveInfoK3Progress,
      isMissDone: isMissionDoneInfoK3, isIslDone: isIslandDoneInfoK3, isIslUnl: isIslandUnlockedInfoK3,
      isCpUnl: isCheckpointUnlockedInfoK3, isCpDone: isCheckpointDoneInfoK3,
      compMiss: completeMissionInfoK3, compTest: completeTestInfoK3, getStars: islandTotalStarsInfoK3,
      genIslQ: generateIslandQuestionsInfoK3, genCpQ: generateCheckpointQuestionsInfoK3
    };
    if (gradeVal === 4) return {
      islands: INFO_K4_ISLANDS, load: loadInfoK4Progress, save: saveInfoK4Progress,
      isMissDone: isMissionDoneInfoK4, isIslDone: isIslandDoneInfoK4, isIslUnl: isIslandUnlockedInfoK4,
      isCpUnl: isCheckpointUnlockedInfoK4, isCpDone: isCheckpointDoneInfoK4,
      compMiss: completeMissionInfoK4, compTest: completeTestInfoK4, getStars: islandTotalStarsInfoK4,
      genIslQ: generateIslandQuestionsInfoK4, genCpQ: generateCheckpointQuestionsInfoK4
    };
    return {
      islands: INFO_K1_ISLANDS, load: loadInfoK1Progress, save: saveInfoK1Progress,
      isMissDone: isMissionDoneInfoK1, isIslDone: isIslandDoneInfoK1, isIslUnl: isIslandUnlockedInfoK1,
      isCpUnl: isCheckpointUnlockedInfoK1, isCpDone: isCheckpointDoneInfoK1,
      compMiss: completeMissionInfoK1, compTest: completeTestInfoK1, getStars: islandTotalStarsInfoK1,
      genIslQ: generateIslandQuestionsInfoK1, genCpQ: generateCheckpointQuestionsInfoK1
    };
  })();

  const [visualLabOpen, setVisualLabOpen] = useState(false);
  const [screen, setScreen] = useState<Screen>("island-map");
  const [progress, setProgress] = useState<InformatikaProgress>({ completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} });
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
  const [avatarMood, setAvatarMood] = useState<"idle"|"focused"|"happy"|"disappointed"|"victory"|"surprised"|"confused"|"laughing">("idle");
  const [jumpTrigger, setJumpTrigger] = useState<{ reaction: "happy" | "victory" | null; timestamp: number } | undefined>(undefined);
  const [avatarIslandId, setAvatarIslandId] = useState<string>("i1");
  const [avatarWalking, setAvatarWalking] = useState(false);

  const avatarIsland = api.islands.find(i => i.id === avatarIslandId) ?? api.islands[0];
  const avatarProps = { gender, activeSkin, activeFace, activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves, activeHat, activeTrail };

  useEffect(() => {
    if (!validGrade) return;
    const p = api.load();
    setProgress(p);
    const lastDone = [...api.islands].reverse().find(i => p.completedIslands.includes(i.id));
    if (lastDone) setAvatarIslandId(lastDone.id);
  }, [validGrade]);

  const handleIslandSelect = useCallback((island: IslandDef) => {
    setActiveIsland(island);
    setAvatarIslandId(island.id);
    setAvatarWalking(false);
    setAvatarMood("idle");
    setScreen("island-transition");
  }, []);

  const startMission = useCallback((mission: MissionDef) => {
    if (!activeIsland) return;
    setActiveMission(mission);
    setAvatarMood("focused");

    if (mission.gameType === "info-explore" || mission.gameType === "m2" || mission.gameType === "m3") {
      setQuestions([]);
      setScreen(mission.gameType as Screen);
      return;
    }

    const qCount = mission.gameType === "star-match" ? 20 : 10;
    const qs = api.genIslQ(activeIsland, qCount);
    setQuestions(qs);
    setScreen(mission.gameType as Screen);
  }, [activeIsland]);

  const handleMissionDone = useCallback((score: number, total: number) => {
    if (!activeIsland || !activeMission) return;
    setMissionScore({ score, total });

    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;

    const wasIslandDone = progress.completedIslands.includes(activeIsland.id);
    const newProgress = api.compMiss(progress, activeIsland.id, activeMission.id, stars);
    const isNowIslandDone = newProgress.completedIslands.includes(activeIsland.id);
    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    api.save(newProgress);
    setProgress(newProgress);

    setAvatarMood(pct >= 60 ? "victory" : "disappointed");
    setScreen("mission-done");
  }, [activeIsland, activeMission, progress]);

  const handleAfterMission = useCallback(() => {
    if (!activeIsland) return;
    if (justUnlockedIsland) setScreen("island-complete-anim");
    else setScreen("mission-select");
  }, [activeIsland, justUnlockedIsland]);

  const handleIslandAnimDone = useCallback(() => {
    const rarity = calculateRarity(missionScore.score, missionScore.total, 0, false);
    saveCard({ id: generateCardId(), game: "astro-informatika", rarity, score: missionScore.score, total: missionScore.total, date: new Date().toISOString() });
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
    const qs = api.genCpQ(testId, 7);
    setQuestions(qs);
    setScreen("rocket-launch");
  }, []);

  const startCheckpointQuiz = useCallback(() => {
    if (!activeTestId) return;
    const qs = api.genCpQ(activeTestId, 15);
    setQuestions(qs);
    setScreen("checkpoint-quiz");
  }, [activeTestId]);

  const handleCheckpointDone = useCallback((score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });

    const newProgress = api.compTest(progress, activeTestId);
    api.save(newProgress);
    setProgress(newProgress);

    if (score >= 10) addSpecialCards(3);
    window.dispatchEvent(new Event("plizio-cards-changed"));

    const rarity = calculateRarity(score, total, 0, false);
    saveCard({ id: generateCardId(), game: "astro-informatika", rarity, score, total, date: new Date().toISOString() });
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score, total });
    setScreen("reward");
  }, [activeTestId, progress]);

  const goToMap = useCallback(() => {
    setAvatarMood("idle");
    setScreen("island-map");
    setActiveIsland(null);
    setActiveMission(null);
    setActiveTestId(null);
  }, []);

  if (!validGrade) return <div className="p-10 text-center">Invalid grade</div>;

  const bgColor = activeIsland?.color ?? "#60A5FA";
  const bgPastel = "#060614";

  if (screen === "island-map") {
    const totalDone = progress.completedIslands.length;
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden text-white">
        <BubbleBackground />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2">
          <button onClick={() => router.push("/codekids")}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-gray-600">
            <ChevronLeft size={20} />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-black">🗺️ {t.islandMap ?? "Térkép"}</h1>
            <p className="text-xs text-gray-500 font-bold uppercase">{CODEKIDS_LABELS[lang] ?? CODEKIDS_LABELS.en} • {lang === "hu" ? "Osztály" : lang === "de" ? "Klasse" : lang === "ro" ? "Clasa" : "Grade"} {gradeVal}</p>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow font-black text-gray-600">
            {totalDone}/9
          </div>
        </div>
        <div className="relative z-10 flex-1 overflow-y-auto" ref={attachAutoScrollToBottom}>
          <div className="max-w-sm mx-auto px-2 pb-6" style={{ minHeight: MAP_H + 40 }}>
            <div className="relative mt-8">
              <IslandMapSVG
                gradeVal={gradeVal} islands={api.islands} progress={progress}
                onIsland={handleIslandSelect} onCheckpoint={startCheckpoint}
                isUnlocked={api.isIslUnl} isDone={api.isIslDone} isCpUnlocked={api.isCpUnl} isCpDone={api.isCpDone} getTotalStars={api.getStars}
              />
              <motion.div
                className="absolute pointer-events-none z-10"
                style={{ width: 72, height: 72, transform: "translate(-50%, -50%)" }}
                animate={{ left: `${((avatarIsland.svgX + (avatarIsland.svgX > MAP_W / 2 ? -54 : 54)) / MAP_W) * 100}%`, top: `${((avatarIsland.svgY + MAP_VB_OFFSET) / MAP_H) * 100}%`, opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={avatarWalking ? { left: { duration: 0.6 }, top: { duration: 0.6 } } : { opacity: { delay: 0.5 } }}
              >
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
      <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#060614] text-white">
        <div className="absolute inset-0 opacity-10" style={{ background: bgColor }} />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4">
          <button onClick={goToMap} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"><X size={20} /></button>
          <div className="w-10" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center pb-6">
          <motion.div className="text-8xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }}>
            {activeIsland.icon}
          </motion.div>
          <div>
            <h2 className="text-3xl font-black">{activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
            <p className="text-gray-500 font-bold mt-2">{activeIsland.missions.length} {t.missions ?? "Feladat"}</p>
          </div>
          <motion.button onClick={() => setScreen("mission-select")}
            className="w-full max-w-xs py-4 rounded-3xl font-black text-white text-lg flex items-center justify-center gap-2 shadow-lg"
            style={{ background: bgColor }} whileTap={{ scale: 0.95 }}>
            {t.start ?? "Start"} <ChevronRight size={24} />
          </motion.button>
        </div>
      </div>
    );
  }

  if (screen === "mission-select" && activeIsland) {
    const totalStars = api.getStars(progress, activeIsland.id);
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#060614] text-white">
        <div className="absolute inset-0 opacity-5" style={{ background: bgColor }} />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2">
          <button onClick={goToMap} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"><X size={20} /></button>
          <div className="text-center">
            <h2 className="font-black text-lg">{activeIsland.icon} {activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
          </div>
          <div className="w-10" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col px-5 gap-4 pb-8 justify-center">
          {(["explore", "build", "challenge"] as MissionCategory[]).map((cat, cardIdx) => {
            const mission = activeIsland.missions.find(m => m.category === cat);
            if (!mission) return null;
            const cfg = CATEGORY_CONFIG[cat];
            const done = api.isMissDone(progress, activeIsland.id, mission.id);
            const bestStars = (progress.missionStars ?? {})[`${activeIsland.id}_${mission.id}`] ?? 0;
            return (
              <motion.button key={cat} onClick={() => startMission(mission)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: cardIdx * 0.1 }}
                className="w-full rounded-3xl p-5 text-left flex flex-col gap-3 border-2"
                style={{ background: cfg.bg, borderColor: cfg.border }} whileTap={{ scale: 0.95 }}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-white shadow-sm" style={{ color: cfg.color }}>
                    {cfg.label[lang] ?? cfg.label.en}
                  </span>
                  {done && <div className="flex gap-1 text-lg">{[1,2,3].map(s => <span key={s} style={{ opacity: s <= bestStars ? 1 : 0.3 }}>⭐</span>)}</div>}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">{mission.icon}</span>
                  <div>
                    <p className="font-black text-gray-800 text-lg leading-tight">{mission.label[lang as Lang] ?? mission.label.en}</p>
                    <p className="text-sm mt-1 text-gray-600 font-medium">{cfg.desc[lang] ?? cfg.desc.en}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  // Games
  const gameScreen = (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#060614]">
      <div className="absolute inset-0 opacity-10" style={{ background: bgColor }} />
      <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3 bg-black/40 backdrop-blur-sm border-b border-white/10">
        <button onClick={() => setScreen("mission-select")} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition"><X size={20} /></button>
        <div className="flex-1">
          <p className="text-white text-sm font-black">{activeIsland?.icon} {activeIsland?.name[lang as Lang]}</p>
          <p className="text-white/60 text-xs font-bold">{activeMission?.label[lang as Lang] ?? activeMission?.label.en}</p>
        </div>
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
        {screen === "orbit-quiz" && <OrbitQuiz questions={questions} color={bgColor} onDone={handleMissionDone} onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }} onWrong={() => setAvatarMood("disappointed")} />}
        {screen === "black-hole" && <BlackHole questions={questions} color={bgColor} onDone={handleMissionDone} onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }} onWrong={() => setAvatarMood("disappointed")} />}
        {screen === "gravity-sort" && activeIsland && <GravitySort sortRange={activeIsland.sortRange} color={bgColor} onDone={handleMissionDone} />}
        {screen === "star-match" && <StarMatch questions={questions} color={bgColor} onDone={handleMissionDone} />}
        {screen === "speed-round" && <SpeedRound questions={questions} color={bgColor} lang={lang} onDone={handleMissionDone} onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }} onWrong={() => setAvatarMood("disappointed")} />}
        {screen === "info-explore" && activeIsland && gradeVal === 1 && <K1Explorer island={activeIsland} grade={1} onDone={handleMissionDone} color={bgColor} lang={lang} />}
        {screen === "info-explore" && activeIsland && gradeVal === 2 && <K2Explorer island={activeIsland} grade={2} onDone={handleMissionDone} color={bgColor} lang={lang} />}
        {screen === "info-explore" && activeIsland && gradeVal === 3 && <K3Explorer island={activeIsland} grade={3} onDone={handleMissionDone} color={bgColor} lang={lang} />}
        {screen === "info-explore" && activeIsland && gradeVal === 4 && <K4Explorer island={activeIsland} grade={4} onDone={handleMissionDone} color={bgColor} lang={lang} />}
        {screen === "info-explore" && activeIsland && gradeVal >= 5 && <K5Explorer island={activeIsland} grade={gradeVal as 5} onDone={handleMissionDone} color={bgColor} lang={lang} />}
        {screen === "m2" && activeMission?.gameKey && INFORMATIKA_M2_POOLS[activeMission.gameKey] && <M2Engine gameKey={activeMission.gameKey} rounds={INFORMATIKA_M2_POOLS[activeMission.gameKey]} color={bgColor} lang={lang as any} onDone={handleMissionDone} onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }} onWrong={() => setAvatarMood("disappointed")} />}
        {screen === "m3" && activeMission?.gameKey && INFORMATIKA_M3_POOLS[activeMission.gameKey] && <M3Engine gameKey={activeMission.gameKey} rounds={INFORMATIKA_M3_POOLS[activeMission.gameKey]} color={bgColor} lang={lang as any} onDone={handleMissionDone} onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }} onWrong={() => setAvatarMood("disappointed")} />}
      </div>
    </div>
  );

  if (["orbit-quiz", "black-hole", "gravity-sort", "star-match", "speed-round", "m2", "m3", "info-explore"].includes(screen)) return (
    <>
      {gameScreen}
      <AvatarCompanion fixed={true} mood={avatarMood} jumpTrigger={jumpTrigger} {...avatarProps} />
    </>
  );

  if (screen === "mission-done" && activeIsland && activeMission) {
    const pct = Math.round((missionScore.score / missionScore.total) * 100);
    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#060614] text-white px-5">
        <div className="absolute inset-0 opacity-10" style={{ background: bgColor }} />
        <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6 text-center">
          <motion.div className="w-28 h-28 rounded-3xl flex items-center justify-center text-5xl bg-white shadow-xl border-4" style={{ borderColor: bgColor }} animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}>{activeMission.icon}</motion.div>
          <div>
            <p className="text-gray-500 font-bold">{t.missionDone ?? "Feladat kész!"}</p>
            <h2 className="text-3xl font-black mt-1">{activeMission.label[lang as Lang] ?? activeMission.label.en}</h2>
          </div>
          <div className="flex gap-2 text-4xl">
            {[1,2,3].map((s, i) => <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i*0.1 }}>{s <= stars ? "⭐" : "✩"}</motion.span>)}
          </div>
          <motion.button onClick={handleAfterMission} className="w-full py-4 rounded-3xl font-black text-white text-lg flex items-center justify-center gap-2 shadow-lg" style={{ background: bgColor }} whileTap={{ scale: 0.95 }}>Tovább <ChevronRight size={24} /></motion.button>
        </div>
      </div>
    );
  }

  if (screen === "island-done" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#060614] text-white px-5">
        <div className="absolute inset-0 opacity-10" style={{ background: bgColor }} />
        <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6 text-center">
          <motion.div className="text-8xl" animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, delay: 0.2 }}>{activeIsland.icon}</motion.div>
          <div>
            <h2 className="text-3xl font-black" style={{ color: bgColor }}>{activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
          </div>
          <div className="flex gap-2 text-4xl">{[1,2,3].map((s, i) => <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i*0.1 }}>⭐</motion.span>)}</div>
          <motion.button onClick={goToMap} className="w-full py-4 rounded-3xl font-black text-white text-lg flex items-center justify-center gap-2 shadow-lg" style={{ background: bgColor }} whileTap={{ scale: 0.95 }}>Térkép <ChevronRight size={24} /></motion.button>
        </div>
        <MilestonePopup />
      </div>
    );
  }

  if (screen === "reward" && earnedCard) return <><RewardReveal rarity={earnedCard} game="astro-informatika" score={rewardScore.score} total={rewardScore.total} onDone={() => activeTestId ? setScreen("checkpoint-done") : setScreen("island-done")} /><MilestonePopup /></>;
  if (screen === "island-transition") return <div className="min-h-screen bg-white relative"><RocketTransition color={bgColor} onDone={() => setScreen("island-intro")} /></div>;
  if (screen === "island-complete-anim" && activeIsland) return <IslandCompleteAnimation islandIcon={activeIsland.icon} islandColor={activeIsland.color} islandName={activeIsland.name[lang as Lang] ?? activeIsland.name.en} lang={lang} grade={gradeVal} score={missionScore.score} total={missionScore.total} onDone={handleIslandAnimDone} />;
  
  if (screen === "rocket-launch" && activeTestId) return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
        <button onClick={goToMap} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"><X size={20} /></button>
        <p className="font-black text-lg text-gray-800">🚀 {t.rocketTitle ?? "Teszt"}</p>
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
        <RocketLaunch questions={questions} color="#F59E0B" onDone={() => setScreen("checkpoint-intro")} />
      </div>
    </div>
  );

  if (screen === "checkpoint-intro" && activeTestId) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060614] text-white px-5">
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6 text-center">
        <motion.div className="text-8xl">🎓</motion.div>
        <h2 className="text-3xl font-black text-[#F59E0B]">Teszt!</h2>
        <motion.button onClick={startCheckpointQuiz} className="w-full py-4 rounded-3xl font-black text-white text-lg bg-[#F59E0B] shadow-lg" whileTap={{ scale: 0.95 }}>Start 🚀</motion.button>
      </div>
    </div>
  );

  if (screen === "checkpoint-quiz") return (
    <>
      <div className="min-h-screen flex flex-col relative bg-white">
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
          <button onClick={goToMap} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"><X size={20} /></button>
          <p className="font-black text-lg text-gray-800">Teszt</p>
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          <OrbitQuiz questions={questions} color="#F59E0B" onDone={handleCheckpointDone} onCorrect={() => setAvatarMood("happy")} onWrong={() => setAvatarMood("disappointed")} />
        </div>
      </div>
      <AvatarCompanion fixed={true} mood={avatarMood} {...avatarProps} />
    </>
  );

  if (screen === "checkpoint-done" && activeTestId) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060614] text-white px-5">
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6 text-center">
        <motion.div className="text-8xl">🏆</motion.div>
        <h2 className="text-3xl font-black text-[#F59E0B]">{checkpointScore.score}/{checkpointScore.total}</h2>
        <motion.button onClick={goToMap} className="w-full py-4 rounded-3xl font-black text-white text-lg bg-[#F59E0B] shadow-lg" whileTap={{ scale: 0.95 }}>Térkép 🗺️</motion.button>
      </div>
      <MilestonePopup />
    </div>
  );

  return null;
}
