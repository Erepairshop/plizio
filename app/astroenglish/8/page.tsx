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
import RocketLaunch from "@/app/astromath/games/RocketLaunch";
import IslandCompleteAnimation from "@/app/astromath/IslandCompleteAnimation";
import RocketTransition from "@/app/astromath/RocketTransition";
import SpeedRound from "@/app/astromath/games/SpeedRound";
import WordSortExplorer from "@/app/astroenglish/games/WordSortExplorer";
import SentenceBuilderExplorer from "@/app/astroenglish/games/SentenceBuilderExplorer";
import FillGapExplorer from "@/app/astroenglish/games/FillGapExplorer";
import SpellRaceExplorer from "@/app/astroenglish/games/SpellRaceExplorer";
import CategoryRushExplorer from "@/app/astroenglish/games/CategoryRushExplorer";
import GrammarMatchExplorer from "@/app/astroenglish/games/GrammarMatchExplorer";
import { K8_ISLAND_SVGS } from "@/app/astroenglish/islands-k8";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });
import {
  K8_ISLANDS, K8_CHECKPOINT_MAP, type IslandDef, type MissionDef, type Lang, type MissionCategory,
  loadK8Progress, saveK8Progress, type EnglishProgress,
  isMissionDoneK8, isIslandDoneK8, isIslandUnlockedK8,
  isCheckpointUnlockedK8, isCheckpointDoneK8,
  completeMissionK8, completeTestK8, islandTotalStarsK8,
  generateIslandQuestionsK8, generateCheckpointQuestionsK8,
} from "@/lib/astroEnglish8";

// ─── Category card config ─────────────────────────────────────────────────────
const CATEGORY_CONFIG: Record<string, {
  label: Record<string, string>;
  desc: Record<string, string>;
  color: string; bg: string; border: string;
}> = {
  explore: {
    label: { en: "Explore", hu: "Felfedezés", de: "Entdecken", ro: "Explorare" },
    desc: {
      en: "Discover the concept visually — no wrong answers!",
      hu: "Fedezd fel vizuálisan — nincs hibás válasz!",
      de: "Entdecke das Konzept visuell — keine falschen Antworten!",
      ro: "Descoperă conceptul vizual — fără răspunsuri greșite!",
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

// ─── Grade 8 labels ────────────────────────────────────────────────────────────
const K8_LABEL: Record<string, string> = {
  en: "Grade 8 · Mastery Galaxy",
  hu: "8. osztály · Mesteri Galaxis",
  de: "Klasse 8 · Meister-Galaxie",
  ro: "Clasa 8 · Galaxia măiestriei",
};

// ─── Screen types ──────────────────────────────────────────────────────────────
type Screen =
  | "island-map"
  | "island-intro"
  | "mission-select"
  | "orbit-quiz"
  | "star-match"
  | "gravity-sort"
  | "black-hole"
  | "speed-round"
  | "fill-gap"
  | "category-rush"
  | "grammar-match"
  | "word-sort"
  | "sentence-builder"
  | "spell-race"
  | "island-transition"
  | "island-complete-anim"
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
      <div className="absolute" style={{ left: "10%", top: "20%", width: 200, height: 200,
        background: "radial-gradient(ellipse, rgba(232,121,249,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div className="absolute" style={{ left: "55%", top: "55%", width: 160, height: 160,
        background: "radial-gradient(ellipse, rgba(232,121,249,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
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

function buildSmoothPath(islands: typeof K8_ISLANDS): string {
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
  progress: EnglishProgress;
  onIsland: (island: IslandDef) => void;
  onCheckpoint: (testId: string) => void;
}) {
  const pathD = buildSmoothPath(K8_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowK8" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowK8" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1k8" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#E879F9" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E879F9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2k8" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#E879F9" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#E879F9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1k8)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2k8)" />

      <path d={pathD} fill="none" stroke="rgba(232,121,249,0.25)" strokeWidth={8}
        filter="url(#pathGlowK8)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {K8_ISLANDS.slice(0, -1).map((island, i) => {
        const next = K8_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedK8(progress, testId);
        const done = isCheckpointDoneK8(progress, testId);
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
              {done ? "Fertig!" : unlocked ? "Test!" : "Test"}
            </text>
          </g>
        );
      })}

      {K8_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedK8(progress, island.id);
        const done = isIslandDoneK8(progress, island.id);
        const total = islandTotalStarsK8(progress, island.id);

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
              K8_ISLAND_SVGS[island.id] ? (
                <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60}
                  overflow="visible" opacity={done ? 0.85 : 1}>
                  {React.createElement(K8_ISLAND_SVGS[island.id], { size: 60 })}
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
                  const mdone = isMissionDoneK8(progress, island.id, m.id);
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
                {total > 0 ? `${total}/9 ⭐` : island.name.de.split(" ")[0]}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ─── Mission Done screen ───────────────────────────────────────────────────────
function MissionDoneScreen({ mission, island, score, total, onContinue }: {
  mission: MissionDef; island: IslandDef; score: number; total: number; onContinue: () => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const pct = Math.round((score / total) * 100);
  const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
      <motion.div className="w-24 h-24 rounded-full flex items-center justify-center text-4xl"
        style={{ background: `${island.color}22`, border: `3px solid ${island.color}`, boxShadow: `0 0 30px ${island.color}55` }}
        animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        {mission.icon}
      </motion.div>
      <div>
        <p className="text-white/60 text-sm font-medium mb-1">{t.missionDone}</p>
        <h2 className="text-2xl font-black text-white">{mission.label[lang as Lang] ?? mission.label.en}</h2>
      </div>
      <div className="flex gap-1 text-3xl">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.15, type: "spring" }}>
            {i < stars ? "⭐" : "✩"}
          </motion.span>
        ))}
      </div>
      <div className="text-white/70 font-bold text-lg">{score}/{total}</div>
      <motion.button onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
        style={{ background: `linear-gradient(135deg, ${island.color}55, ${island.color}99)`, border: `2px solid ${island.color}` }}
        whileTap={{ scale: 0.97 }}>
        {t.next} <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}

// ─── Island Done screen ────────────────────────────────────────────────────────
function IslandDoneScreen({ island, onContinue }: { island: IslandDef; onContinue: () => void }) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
      <motion.div className="text-7xl" animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, delay: 0.2 }}>
        {island.icon}
      </motion.div>
      <div>
        <p className="text-white/60 text-sm font-medium mb-1">{t.islandDone}</p>
        <h2 className="text-2xl font-black" style={{ color: island.color }}>
          {island.name[lang as Lang] ?? island.name.en}
        </h2>
      </div>
      <div className="flex gap-1 text-3xl">
        {["⭐", "⭐", "⭐"].map((s, i) => (
          <motion.span key={i} initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.12, type: "spring" }}>{s}</motion.span>
        ))}
      </div>
      <motion.button onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2"
        style={{ background: `linear-gradient(135deg, ${island.color}55, ${island.color}99)`, border: `2px solid ${island.color}` }}
        whileTap={{ scale: 0.97 }}>
        {t.back} {t.islandMap} <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}

// ─── Checkpoint Done ───────────────────────────────────────────────────────────
function CheckpointDoneScreen({ score, total, onContinue }: {
  score: number; total: number; testId: string; onContinue: () => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const pct = Math.round((score / total) * 100);
  const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "🎯" : "💪";

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
      <motion.div className="text-6xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
        {emoji}
      </motion.div>
      <div>
        <p className="text-white/60 text-sm font-medium">{t.testDone}</p>
        <h2 className="text-2xl font-black text-[#FFD700] mt-1">{t.yourScore}</h2>
        <p className="text-4xl font-black text-white mt-2">{score}/{total}</p>
        <p className="text-white/60 text-base mt-1 font-medium">{pct}%</p>
      </div>
      <motion.button onClick={onContinue}
        className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2"
        style={{ background: "linear-gradient(135deg, #FFD70055, #FFD70099)", border: "2px solid #FFD700" }}
        whileTap={{ scale: 0.97 }}>
        {t.back} {t.islandMap} <ChevronRight size={20} />
      </motion.button>
    </motion.div>
  );
}

// ─── Content generators for K8 explorers ──────────────────────────────────────

interface FillGapRound { sentence: string; options: string[]; correctIndex: number; explanation: string }
interface CategoryRushRound { items: Array<{ text: string; category: string }>; categories: string[] }
interface GrammarMatchRound { question: string; items: Array<{ text: string; id: string }>; pairs: Record<string, string>; explanation: string }
interface WordSortRound { words: string[]; categories: string[]; wordCategories: Record<string, string> }
interface SentenceBuilderPart { type: "text" | "blank"; value?: string; options?: string[] }
interface SentenceBuilderRound { parts: SentenceBuilderPart[]; correctFill: string; explanation: string }
interface SpellRaceRound { word: string; targetLanguage: string }

function generateFillGapK8(islandId: string): FillGapRound[] {
  if (islandId === "i3") {
    return [
      { sentence: "If I ___ about the deadline earlier, I would have planned better.", options: ["knew", "had known", "know", "would know"], correctIndex: 1, explanation: "Subjunctive mood in conditionals requires past perfect in if-clause." },
      { sentence: "The ___ voice emphasizes the object rather than the subject of action.", options: ["active", "passive", "subjunctive", "imperative"], correctIndex: 1, explanation: "Passive voice shifts focus from actor to receiver of action." },
      { sentence: "She ___ complete the assignment, even though she was tired.", options: ["must", "could", "would", "should"], correctIndex: 0, explanation: "'Must' indicates necessity in the past; others indicate ability or obligation." },
      { sentence: "Were she more confident, she ___ apply for the scholarship.", options: ["will", "would", "applies", "applied"], correctIndex: 1, explanation: "Subjunctive 'would' follows hypothetical 'were' condition." },
      { sentence: "The thesis ___ supported by multiple pieces of evidence throughout the essay.", options: ["must be", "should have been", "is", "would be"], correctIndex: 0, explanation: "'Must be' shows requirement for thesis support in academic writing." },
      { sentence: "I suggest that he ___ more attention to the rubric requirements.", options: ["pays", "pay", "paid", "would pay"], correctIndex: 1, explanation: "Subjunctive 'pay' (without 's') follows verbs of recommendation." },
      { sentence: "The poem's meaning ___ interpreted in multiple ways depending on literary perspective.", options: ["can be", "could", "can", "will be"], correctIndex: 0, explanation: "'Can be' indicates possibility in passive voice." },
      { sentence: "She ___ the evidence powerfully, which strengthened her argument.", options: ["presents", "presented", "had presented", "presenting"], correctIndex: 1, explanation: "Simple past shows completed action in chronological narrative." },
    ];
  }
  if (islandId === "i8") {
    return [
      { sentence: "The author ___ ellipsis to create mystery and suspense.", options: ["uses", "using", "used", "has used"], correctIndex: 2, explanation: "Simple past for literary technique discussed in historical text." },
      { sentence: "Em dashes ___ introduce additional information or dramatic breaks.", options: ["can", "could", "will", "shall"], correctIndex: 0, explanation: "'Can' shows ability/possibility of dashes to introduce information." },
      { sentence: "The comma ___ separate items ___ a series of related ideas.", options: ["separates...and", "can separate...in", "should separate...with", "will separate...from"], correctIndex: 1, explanation: "'Can separate...in' is precise for complex punctuation function." },
      { sentence: "Using ___ punctuation makes writing clearer and more professional.", options: ["correct", "correctly", "correcting", "correction"], correctIndex: 0, explanation: "Adjective 'correct' modifies the noun 'punctuation'." },
      { sentence: "The semicolon ___ two independent clauses that share close relationships.", options: ["connects", "connecting", "connect", "are connecting"], correctIndex: 0, explanation: "Simple present for general grammar rule about semicolons." },
      { sentence: "If writers ___ punctuation rules, their writing becomes ambiguous.", options: ["ignore", "ignored", "ignores", "will ignore"], correctIndex: 0, explanation: "Simple present in conditional showing habitual result." },
      { sentence: "Dashes, unlike commas, ___ more emphatic pauses in prose.", options: ["create", "creates", "creating", "created"], correctIndex: 0, explanation: "Simple present for general stylistic comparison." },
      { sentence: "The article ___ on complex punctuation ___ essential for advanced writers.", options: ["focuses...as", "focused...as being", "focus...for", "focuses...as being"], correctIndex: 0, explanation: "'Focuses...as' correctly structures the idea." },
    ];
  }
  return [];
}

function generateCategoryRushK8(islandId: string): CategoryRushRound[] {
  if (islandId === "i5") {
    return [
      {
        items: [
          { text: "First person", category: "perspective" },
          { text: "Third person limited", category: "perspective" },
          { text: "Autobiography", category: "genre" },
          { text: "Science fiction", category: "genre" },
          { text: "Stream of consciousness", category: "perspective" },
          { text: "Mystery novel", category: "genre" },
        ],
        categories: ["perspective", "genre"],
      },
      {
        items: [
          { text: "Omniscient narrator", category: "perspective" },
          { text: "Memoir", category: "genre" },
          { text: "Gothic fiction", category: "genre" },
          { text: "Second person", category: "perspective" },
          { text: "Historical fiction", category: "genre" },
          { text: "Unreliable narrator", category: "perspective" },
        ],
        categories: ["perspective", "genre"],
      },
    ];
  }
  if (islandId === "i7") {
    return [
      {
        items: [
          { text: "I shall be delighted.", category: "formal" },
          { text: "I'm gonna be so happy!", category: "informal" },
          { text: "The committee acknowledges receipt.", category: "formal" },
          { text: "I gotta run!", category: "informal" },
          { text: "Pursuant to your inquiry...", category: "formal" },
          { text: "Yo, what's good?", category: "informal" },
        ],
        categories: ["formal", "informal"],
      },
      {
        items: [
          { text: "Expedite the process.", category: "formal" },
          { text: "Get it done ASAP.", category: "informal" },
          { text: "We respectfully disagree.", category: "formal" },
          { text: "Nah, we don't agree.", category: "informal" },
          { text: "Utilize the available resources.", category: "formal" },
          { text: "Use the stuff we got.", category: "informal" },
        ],
        categories: ["formal", "informal"],
      },
    ];
  }
  return [];
}

function generateGrammarMatchK8(islandId: string): GrammarMatchRound[] {
  if (islandId === "i1") {
    return [
      {
        question: "Match verbal phrases with their functions:",
        items: [
          { text: "Gerund phrase", id: "1" },
          { text: "Infinitive phrase", id: "2" },
          { text: "Participial phrase", id: "3" },
        ],
        pairs: { "1": "Noun functioning phrase (subject/object)", "2": "Shows purpose, condition, or expresses action", "3": "Adjective phrase modifying nouns" },
        explanation: "Verbals allow verbs to function as other parts of speech.",
      },
      {
        question: "Match literary devices:",
        items: [
          { text: "Allusion", id: "1" },
          { text: "Irony", id: "2" },
          { text: "Symbolism", id: "3" },
          { text: "Satire", id: "4" },
        ],
        pairs: { "1": "Indirect reference to another work, person, or event", "2": "Contradiction between expected and actual meaning", "3": "Object/action represents abstract idea", "4": "Use of ridicule to critique ideas/behaviors" },
        explanation: "Literary devices enhance meaning and engage readers.",
      },
    ];
  }
  if (islandId === "i6") {
    return [
      {
        question: "Match literary concept pairs:",
        items: [
          { text: "Theme", id: "1" },
          { text: "Allusion", id: "2" },
          { text: "Irony", id: "3" },
        ],
        pairs: { "1": "Central universal idea about life/human nature", "2": "Indirect reference implying deeper meaning", "3": "Reversal of expected meaning/outcome" },
        explanation: "Understanding these concepts deepens literary analysis.",
      },
    ];
  }
  if (islandId === "i9") {
    return [
      {
        question: "Match etymology concepts:",
        items: [
          { text: "Greek root", id: "1" },
          { text: "Latin root", id: "2" },
          { text: "Cognate", id: "3" },
        ],
        pairs: { "1": "ancient Greek word origins (logos, bio, metro)", "2": "ancient Latin word origins (vert, port, scrip)", "3": "Words from same root in different languages" },
        explanation: "Etymology reveals word origins and relationships.",
      },
    ];
  }
  return [];
}

function generateWordSortK8(islandId: string): WordSortRound[] {
  if (islandId === "i7") {
    return [
      {
        words: ["distinguished", "prestigious", "renowned", "esteemed", "famous", "notorious"],
        categories: ["positive formal", "neutral/negative"],
        wordCategories: { distinguished: "positive formal", prestigious: "positive formal", renowned: "positive formal", esteemed: "positive formal", famous: "neutral/negative", notorious: "neutral/negative" },
      },
      {
        words: ["rectify", "fix", "amend", "patch", "remedy", "adjust"],
        categories: ["formal", "informal"],
        wordCategories: { rectify: "formal", fix: "informal", amend: "formal", patch: "informal", remedy: "formal", adjust: "informal" },
      },
      {
        words: ["furthermore", "plus", "moreover", "also", "additionally", "and"],
        categories: ["academic", "conversational"],
        wordCategories: { furthermore: "academic", plus: "conversational", moreover: "academic", also: "conversational", additionally: "academic", and: "conversational" },
      },
    ];
  }
  return [];
}

function generateSentenceBuilderK8(islandId: string): SentenceBuilderRound[] {
  if (islandId === "i2") {
    return [
      {
        parts: [
          { type: "text", value: "The protagonist's struggle to find identity" },
          { type: "blank", options: ["reflects", "reflected", "is reflecting"] },
          { type: "text", value: "universal adolescent experiences." },
        ],
        correctFill: "reflects",
        explanation: "Simple present works for general literary truth about the novel.",
      },
      {
        parts: [
          { type: "text", value: "Through symbolism, the author" },
          { type: "blank", options: ["communicated", "communicates", "is communicating"] },
          { type: "text", value: "complex emotional truths about loss." },
        ],
        correctFill: "communicates",
        explanation: "Simple present for timeless literary analysis.",
      },
      {
        parts: [
          { type: "text", value: "The satire" },
          { type: "blank", options: ["mocked", "mocks", "has mocked"] },
          { type: "text", value: "societal hypocrisy through exaggerated characters." },
        ],
        correctFill: "mocks",
        explanation: "Simple present for how the literary work functions.",
      },
    ];
  }
  return [];
}

function generateSpellRaceK8(islandId: string): SpellRaceRound[] {
  return [];
}

function getExplorerContentK8(islandId: string, gameType: string): any {
  switch (gameType) {
    case "fill-gap":
      return generateFillGapK8(islandId);
    case "category-rush":
      return generateCategoryRushK8(islandId);
    case "grammar-match":
      return generateGrammarMatchK8(islandId);
    case "word-sort":
      return generateWordSortK8(islandId);
    case "sentence-builder":
      return generateSentenceBuilderK8(islandId);
    case "spell-race":
      return generateSpellRaceK8(islandId);
    default:
      return [];
  }
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function AstroEnglishK8Page() {
  const { lang } = useLang();
  const router = useRouter();
  const t = T[lang as keyof typeof T] ?? T.en;

  const [screen, setScreen] = useState<Screen>("island-map");
  const [progress, setProgress] = useState<EnglishProgress>({ completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} });
  const [activeIsland, setActiveIsland] = useState<IslandDef | null>(null);
  const [activeMission, setActiveMission] = useState<MissionDef | null>(null);
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<MathQuestion[]>([]);
  const [missionScore, setMissionScore] = useState({ score: 0, total: 0 });
  const [earnedCard, setEarnedCard] = useState<CardRarity | null>(null);
  const [checkpointScore, setCheckpointScore] = useState({ score: 0, total: 10 });
  const [rewardScore, setRewardScore] = useState({ score: 0, total: 0 });
  const [justUnlockedIsland, setJustUnlockedIsland] = useState(false);

  // ── Avatar state ──────────────────────────────────────────────────────────────
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
  const walkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const avatarIsland = K8_ISLANDS.find(i => i.id === avatarIslandId) ?? K8_ISLANDS[0];

  const avatarProps = {
    gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves,
    activeHat, activeTrail,
  };

  useEffect(() => {
    const p = loadK8Progress();
    setProgress(p);
    const lastDone = [...K8_ISLANDS].reverse().find(i => p.completedIslands.includes(i.id));
    if (lastDone) setAvatarIslandId(lastDone.id);
    return () => { if (walkTimerRef.current) clearTimeout(walkTimerRef.current); };
  }, []);

  // ── Island selected ──────────────────────────────────────────────────────────
  const handleIslandSelect = useCallback((island: IslandDef) => {
    if (walkTimerRef.current) clearTimeout(walkTimerRef.current);
    setActiveIsland(island);
    setAvatarIslandId(island.id);
    setAvatarWalking(false);
    setAvatarMood("idle");
    setScreen("island-transition");
  }, []);

  // ── Start mission ────────────────────────────────────────────────────────────
  const startMission = useCallback((mission: MissionDef) => {
    if (!activeIsland) return;
    setActiveMission(mission);
    setAvatarMood("focused");
    const isExplorer = ["fill-gap", "category-rush", "grammar-match", "word-sort", "sentence-builder", "spell-race"].includes(mission.gameType);
    if (isExplorer) {
      setQuestions([]);
      setScreen(mission.gameType as Screen);
      return;
    }
    const qCount = mission.gameType === "star-match" ? 15 : 10;
    const qs = generateIslandQuestionsK8(activeIsland, lang as Lang, qCount);
    setQuestions(qs);
    setScreen(mission.gameType as Screen);
  }, [activeIsland, lang]);

  // ── Mission finished ─────────────────────────────────────────────────────────
  const handleMissionDone = useCallback((score: number, total: number) => {
    if (!activeIsland || !activeMission) return;
    setMissionScore({ score, total });

    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;

    const wasIslandDone = progress.completedIslands.includes(activeIsland.id);
    const newProgress = completeMissionK8(progress, activeIsland.id, activeMission.id, stars);
    const isNowIslandDone = newProgress.completedIslands.includes(activeIsland.id);
    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    saveK8Progress(newProgress);
    setProgress(newProgress);

    const pct2 = total > 0 ? Math.round((score / total) * 100) : 0;
    setAvatarMood(pct2 >= 60 ? "victory" : "disappointed");
    setScreen("mission-done");
  }, [activeIsland, activeMission, progress]);

  // ── After mission-done: check if island complete ─────────────────────────────
  const handleAfterMission = useCallback(() => {
    if (!activeIsland) return;
    if (justUnlockedIsland) {
      setScreen("island-complete-anim");
    } else {
      setScreen("mission-select");
    }
  }, [activeIsland, justUnlockedIsland]);

  const handleIslandAnimDone = useCallback(() => {
    const rarity = calculateRarity(missionScore.score, missionScore.total, 0, false);
    saveCard({ id: generateCardId(), game: "astroenglish", rarity, score: missionScore.score, total: missionScore.total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
    incrementTotalGames();
    checkNewMilestones();
    setEarnedCard(rarity);
    setRewardScore({ score: missionScore.score, total: missionScore.total });
    setScreen("reward");
  }, [missionScore]);

  // ── Checkpoint ───────────────────────────────────────────────────────────────
  const startCheckpoint = useCallback((testId: string) => {
    setActiveTestId(testId);
    setAvatarMood("focused");
    const qs = generateCheckpointQuestionsK8(testId, lang as Lang, 7);
    setQuestions(qs);
    setScreen("rocket-launch");
  }, [lang]);

  const startCheckpointQuiz = useCallback(() => {
    if (!activeTestId) return;
    const qs = generateCheckpointQuestionsK8(activeTestId, lang as Lang, 10);
    setQuestions(qs);
    setScreen("checkpoint-quiz");
  }, [activeTestId, lang]);

  const handleCheckpointDone = useCallback((score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });

    const newProgress = completeTestK8(progress, activeTestId);
    saveK8Progress(newProgress);
    setProgress(newProgress);

    const rarity = calculateRarity(score, total, 0, false);
    saveCard({ id: generateCardId(), game: "astroenglish", rarity, score, total, date: new Date().toISOString() });
    window.dispatchEvent(new Event("plizio-cards-changed"));
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

  const bgColor = activeIsland?.color ?? "#E879F9";

  // ─── ISLAND MAP ─────────────────────────────────────────────────────────────
  if (screen === "island-map") {
    const totalDone = progress.completedIslands.length;
    return (
      <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2 flex-shrink-0">
          <button onClick={() => router.push("/astroenglish")}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div className="text-center">
            <h1 className="text-lg font-black text-white">🪐 {t.islandMap}</h1>
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{K8_LABEL[lang] ?? K8_LABEL.en}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">
            {totalDone}/9
          </div>
        </div>
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #E879F9, #B44DFF)" }}
              initial={{ width: 0 }} animate={{ width: `${(totalDone / 9) * 100}%` }} transition={{ duration: 0.8 }} />
          </div>
        </div>
        <div className="relative z-10 flex-1 overflow-y-auto">
          <div className="max-w-sm mx-auto px-2 pb-6" style={{ minHeight: MAP_H + 40 }}>
            <div className="relative">
              <IslandMapSVG progress={progress} onIsland={handleIslandSelect} onCheckpoint={startCheckpoint} />
              <motion.div
                className="absolute pointer-events-none z-10"
                style={{ width: 48, height: 48, transform: "translate(-50%, -75%)" }}
                animate={{
                  left: `${(avatarIsland.svgX / MAP_W) * 100}%`,
                  top: `${((avatarIsland.svgY + MAP_VB_OFFSET) / MAP_H) * 100}%`,
                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                transition={avatarWalking
                  ? { left: { duration: 0.65, ease: "easeInOut" }, top: { duration: 0.65, ease: "easeInOut" }, opacity: { duration: 0.4 } }
                  : { opacity: { delay: 0.5, duration: 0.5 } }
                }
              >
                <AvatarCompanion
                  fixed={false}
                  mood={avatarWalking ? "happy" : "idle"}
                  passThrough={true}
                  {...avatarProps}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── ISLAND INTRO ────────────────────────────────────────────────────────────
  if (screen === "island-intro" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-4">
          <button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
          <div className="w-9" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center pb-6">
          <motion.div className="text-7xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300 }}>
            {activeIsland.icon}
          </motion.div>
          <div>
            <h2 className="text-2xl font-black text-white">{activeIsland.name[lang as Lang] ?? activeIsland.name.en}</h2>
            <p className="text-white/60 text-sm mt-2 font-medium">{activeIsland.missions.length} {t.missions}</p>
          </div>
          <motion.button onClick={() => setScreen("mission-select")}
            className="w-full max-w-xs py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2"
            style={{ background: `linear-gradient(135deg, ${bgColor}55, ${bgColor}99)`, border: `2px solid ${bgColor}` }}
            whileTap={{ scale: 0.97 }}>
            {t.start} <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    );
  }

  // ─── MISSION SELECT — 3 category cards, all unlocked ────────────────────────
  if (screen === "mission-select" && activeIsland) {
    const totalStars = islandTotalStarsK8(progress, activeIsland.id);
    return (
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}22 0%, #060614 55%)` }}>
        <Starfield />
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2">
          <button onClick={goToMap} className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
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

        {/* Subtitle */}
        <p className="relative z-10 text-center text-white/50 text-xs font-medium px-6 pb-3">
          {lang === "hu" ? "Válaszd ki, hogyan szeretnél tanulni:" :
           lang === "de" ? "Wähle deinen Lernweg:" :
           lang === "ro" ? "Alege cum vrei să înveți:" :
           "Choose how you want to learn:"}
        </p>

        {/* 3 Category Cards */}
        <div className="relative z-10 flex-1 flex flex-col px-5 gap-4 pb-8 justify-center">
          {(["explore", "build", "challenge"] as MissionCategory[]).map((cat, cardIdx) => {
            const mission = activeIsland.missions.find((m: MissionDef) => m.category === cat);
            if (!mission) return null;
            const cfg = CATEGORY_CONFIG[cat];
            const done = isMissionDoneK8(progress, activeIsland.id, mission.id);
            const mKey = `${activeIsland.id}_${mission.id}`;
            const bestStars = (progress.missionStars ?? {})[mKey] ?? 0;
            return (
              <motion.button
                key={cat}
                onClick={() => startMission(mission)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: cardIdx * 0.08 }}
                className="w-full rounded-3xl p-5 text-left flex flex-col gap-2"
                style={{ background: done ? cfg.bg : cfg.bg, border: `2px solid ${done ? cfg.color : cfg.border}` }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Top row: category badge + stars */}
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
                {/* Mission name + icon */}
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
                {/* CTA */}
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
  }

  // ─── GAME SCREENS ─────────────────────────────────────────────────────────────
  const gameScreen = (
    <div className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: `radial-gradient(ellipse at 50% 0%, ${bgColor}18 0%, #060614 55%)` }}>
      <Starfield />
      <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
        <button onClick={() => setScreen("mission-select")}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
        <div className="flex-1">
          <p className="text-white/70 text-xs font-bold">{activeIsland?.icon} {activeIsland?.name[lang as Lang]}</p>
          <p className="text-white/50 text-[10px]">{activeMission?.label[lang as Lang] ?? activeMission?.label.en}</p>
        </div>
      </div>
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
        {screen === "orbit-quiz" && questions.length > 0 && (
          <OrbitQuiz questions={questions} color={bgColor} onDone={handleMissionDone}
            onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }}
            onWrong={() => setAvatarMood("disappointed")} />
        )}
        {screen === "black-hole" && questions.length > 0 && (
          <BlackHole questions={questions} color={bgColor} onDone={handleMissionDone}
            onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }}
            onWrong={() => setAvatarMood("disappointed")} />
        )}
        {screen === "gravity-sort" && activeIsland && (
          <GravitySort sortRange={activeIsland.sortRange} color={bgColor} onDone={handleMissionDone} />
        )}
        {screen === "star-match" && questions.length > 0 && (
          <StarMatch questions={questions} color={bgColor} onDone={handleMissionDone} />
        )}
        {screen === "speed-round" && questions.length > 0 && (
          <SpeedRound questions={questions} color={bgColor} lang={lang} onDone={handleMissionDone}
            onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }}
            onWrong={() => setAvatarMood("disappointed")} />
        )}
        {screen === "fill-gap" && activeIsland && (
          <FillGapExplorer rounds={getExplorerContentK8(activeIsland.id, "fill-gap")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "category-rush" && activeIsland && (
          <CategoryRushExplorer rounds={getExplorerContentK8(activeIsland.id, "category-rush")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "grammar-match" && activeIsland && (
          <GrammarMatchExplorer rounds={getExplorerContentK8(activeIsland.id, "grammar-match")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "word-sort" && activeIsland && (
          <WordSortExplorer rounds={getExplorerContentK8(activeIsland.id, "word-sort")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "sentence-builder" && activeIsland && (
          <SentenceBuilderExplorer rounds={getExplorerContentK8(activeIsland.id, "sentence-builder")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "spell-race" && activeIsland && (
          <SpellRaceExplorer rounds={getExplorerContentK8(activeIsland.id, "spell-race")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
      </div>
    </div>
  );

  if (["orbit-quiz", "black-hole", "gravity-sort", "star-match", "speed-round", "fill-gap", "category-rush", "grammar-match", "word-sort", "sentence-builder", "spell-race"].includes(screen)) return (
    <>
      {gameScreen}
      <AvatarCompanion fixed={true} mood={avatarMood} jumpTrigger={jumpTrigger} {...avatarProps} />
    </>
  );

  // ─── ROCKET LAUNCH ────────────────────────────────────────────────────────────
  if (screen === "rocket-launch" && activeTestId) {
    return (
      <>
      <div className="min-h-screen flex flex-col relative overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,165,0,0.18) 0%, #060614 55%)" }}>
        <Starfield />
        <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
          <button onClick={goToMap} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
          <div className="flex-1">
            <p className="text-white font-black text-sm">{t.rocketTitle}</p>
            <p className="text-white/50 text-[10px]">{t.rocketDesc}</p>
          </div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
          <RocketLaunch questions={questions} color="#E879F9"
            onDone={() => setScreen("checkpoint-intro")} />
        </div>
      </div>
      <AvatarCompanion fixed={true} mood="focused" {...avatarProps} />
      </>
    );
  }

  // ─── ISLAND TRANSITION ───────────────────────────────────────────────────────
  if (screen === "island-transition") {
    return (
      <div className="min-h-screen bg-[#060614] relative">
        <Starfield />
        <RocketTransition color={bgColor} onDone={() => setScreen("island-intro")} />
      </div>
    );
  }

  // ─── ISLAND COMPLETE ANIMATION ───────────────────────────────────────────────
  if (screen === "island-complete-anim" && activeIsland) {
    return (
      <IslandCompleteAnimation
        islandIcon={activeIsland.icon}
        islandColor={activeIsland.color}
        islandName={activeIsland.name[lang as Lang] ?? activeIsland.name.en}
        lang={lang}
        grade={8}
        score={missionScore.score}
        total={missionScore.total}
        onDone={handleIslandAnimDone}
      />
    );
  }

  // ─── MISSION DONE ────────────────────────────────────────────────────────────
  if (screen === "mission-done" && activeIsland && activeMission) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5"
        style={{ background: `radial-gradient(ellipse at 50% 30%, ${bgColor}22 0%, #060614 60%)` }}>
        <Starfield />
        <div className="relative z-10 w-full">
          <MissionDoneScreen mission={activeMission} island={activeIsland}
            score={missionScore.score} total={missionScore.total} onContinue={handleAfterMission} />
        </div>
      </div>
    );
  }

  // ─── REWARD ──────────────────────────────────────────────────────────────────
  if (screen === "reward" && earnedCard) {
    return (
      <>
        <RewardReveal rarity={earnedCard} game="astroenglish"
          score={rewardScore.score} total={rewardScore.total}
          onDone={() => {
            if (activeTestId) {
              setScreen("checkpoint-done");
            } else {
              setScreen("island-done");
            }
          }} />
        <MilestonePopup />
      </>
    );
  }

  // ─── ISLAND DONE ─────────────────────────────────────────────────────────────
  if (screen === "island-done" && activeIsland) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5"
        style={{ background: `radial-gradient(ellipse at 50% 30%, ${bgColor}22 0%, #060614 60%)` }}>
        <Starfield />
        <div className="relative z-10 w-full">
          <IslandDoneScreen island={activeIsland} onContinue={goToMap} />
        </div>
        <MilestonePopup />
      </div>
    );
  }

  // ─── CHECKPOINT INTRO ────────────────────────────────────────────────────────
  if (screen === "checkpoint-intro" && activeTestId) {
    const testTopicsK8: Record<string, Record<string, string>> = {
      en: { test1: "Essay Writing, Thesis Statements", test2: "Literary Analysis, Symbolism", test3: "Research & Citations, Advanced Composition" },
      hu: { test1: "Esszéírás, tézismondat", test2: "Irodalmi elemzés, szimbolizmus", test3: "Kutatás és idézetek, haladó szövegírás" },
      de: { test1: "Aufsatzschreiben, Thesen", test2: "Literaturanalyse, Symbolik", test3: "Recherche & Zitieren, fortgeschrittenes Schreiben" },
      ro: { test1: "Redactare eseuri, teze", test2: "Analiză literară, simbolism", test3: "Cercetare și citări, scriere avansată" },
    };
    const topicDesc = (testTopicsK8[lang] ?? testTopicsK8.en)[activeTestId] ?? "";
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5 gap-6"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield />
        <div className="relative z-10 flex flex-col items-center gap-5 text-center w-full max-w-sm">
          <button onClick={goToMap} className="absolute top-0 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={16} /></button>
          <motion.div className="text-6xl" animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>🎓</motion.div>
          <div>
            <h2 className="text-2xl font-black text-[#FFD700]">{t.checkpointReady}</h2>
            <p className="text-white/60 text-sm mt-2 font-medium leading-relaxed">{t.checkpointDesc}</p>
            <p className="text-white/50 text-xs mt-2">{topicDesc}</p>
          </div>
          <motion.button onClick={startCheckpointQuiz}
            className="w-full py-4 rounded-2xl font-black text-black text-base flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg, #FFD700, #FFA500)" }}
            whileTap={{ scale: 0.97 }}>
            {t.startTest} 🚀
          </motion.button>
        </div>
      </div>
    );
  }

  // ─── CHECKPOINT QUIZ ─────────────────────────────────────────────────────────
  if (screen === "checkpoint-quiz" && questions.length > 0) {
    return (
      <>
        <div className="min-h-screen flex flex-col relative overflow-hidden"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.12) 0%, #060614 55%)" }}>
          <Starfield />
          <div className="relative z-10 flex items-center gap-3 px-4 pt-5 pb-3">
            <button onClick={goToMap} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70"><X size={14} /></button>
            <p className="text-white/70 text-sm font-bold flex-1">{t.checkpointTitle}</p>
          </div>
          <div className="relative z-10 flex-1 flex flex-col justify-center px-4 pb-6">
            <OrbitQuiz questions={questions} color="#FFD700" onDone={handleCheckpointDone}
              onCorrect={() => { setAvatarMood("happy"); setJumpTrigger({ reaction: "happy", timestamp: Date.now() }); }}
              onWrong={() => setAvatarMood("disappointed")} />
          </div>
        </div>
        <AvatarCompanion fixed={true} mood={avatarMood} jumpTrigger={jumpTrigger} {...avatarProps} />
      </>
    );
  }

  // ─── CHECKPOINT DONE ─────────────────────────────────────────────────────────
  if (screen === "checkpoint-done" && activeTestId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-5"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.12) 0%, #060614 60%)" }}>
        <Starfield />
        <div className="relative z-10 w-full">
          <CheckpointDoneScreen score={checkpointScore.score} total={checkpointScore.total}
            testId={activeTestId} onContinue={goToMap} />
        </div>
        <MilestonePopup />
      </div>
    );
  }

  return null;
}
