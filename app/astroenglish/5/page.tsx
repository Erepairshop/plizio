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
import WordSortExplorer from "@/app/astroenglish/games/WordSortExplorer";
import SentenceBuilderExplorer from "@/app/astroenglish/games/SentenceBuilderExplorer";
import FillGapExplorer from "@/app/astroenglish/games/FillGapExplorer";
import SpellRaceExplorer from "@/app/astroenglish/games/SpellRaceExplorer";
import CategoryRushExplorer from "@/app/astroenglish/games/CategoryRushExplorer";
import GrammarMatchExplorer from "@/app/astroenglish/games/GrammarMatchExplorer";
import PhonicsExplorer from "@/app/astroenglish/games/PhonicsExplorer";
import PictureVocabExplorer from "@/app/astroenglish/games/PictureVocabExplorer";
import RhymeMatchExplorer from "@/app/astroenglish/games/RhymeMatchExplorer";
import WordBuildExplorer from "@/app/astroenglish/games/WordBuildExplorer";
import ReadingCompExplorer from "@/app/astroenglish/games/ReadingCompExplorer";
import TenseExplorer from "@/app/astroenglish/games/TenseExplorer";
import MemoryPairExplorer from "@/app/astroenglish/games/MemoryPairExplorer";
import PronunciationExplorer from "@/app/astroenglish/games/PronunciationExplorer";
import ConjunctionExplorer from "@/app/astroenglish/games/k5/ConjunctionExplorer";
import InterjectionExplorer from "@/app/astroenglish/games/k5/InterjectionExplorer";
import TenseK5Explorer from "@/app/astroenglish/games/k5/TenseK5Explorer";
import SentenceK5Explorer from "@/app/astroenglish/games/k5/SentenceK5Explorer";
import PunctuationK5Explorer from "@/app/astroenglish/games/k5/PunctuationK5Explorer";
import SpellingK5Explorer from "@/app/astroenglish/games/k5/SpellingK5Explorer";
import { K5_ISLAND_SVGS } from "@/app/astroenglish/islands-k5";
import {
  K5_ISLANDS, K5_CHECKPOINT_MAP, type IslandDef, type MissionDef, type Lang, type MissionCategory,
  loadK5Progress, saveK5Progress, type EnglishProgress,
  isMissionDoneK5, isIslandDoneK5, isIslandUnlockedK5,
  isCheckpointUnlockedK5, isCheckpointDoneK5,
  completeMissionK5, completeTestK5, islandTotalStarsK5,
  generateIslandQuestionsK5, generateCheckpointQuestionsK5,
} from "@/lib/astroEnglish5";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

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

// ─── Grade K5 labels ────────────────────────────────────────────────────────────
const K5_LABEL: Record<string, string> = {
  en: "Grade 5 · Literature Galaxy",
  hu: "5. évfolyam · Irodalmi galaxis",
  de: "Klasse 5 · Literatur-Galaxie",
  ro: "Clasa 5 · Galaxia literaturii",
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
  | "word-sort"
  | "sentence-builder"
  | "fill-gap"
  | "spell-race"
  | "category-rush"
  | "grammar-match"
  | "phonics"
  | "picture-vocab"
  | "rhyme-match"
  | "word-build"
  | "reading-comp"
  | "tense-explorer"
  | "memory-pair"
  | "pronunciation"
  | "en5-conjunction-explorer"
  | "en5-interjection-explorer"
  | "en5-tense-k5-explorer"
  | "en5-sentence-k5-explorer"
  | "en5-punctuation-k5-explorer"
  | "en5-spelling-k5-explorer"
  | "en5-root-word-explorer"
  | "en5-figurative-explorer"
  | "en5-academic-explorer"
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
        background: "radial-gradient(ellipse, rgba(100,50,200,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div className="absolute" style={{ left: "55%", top: "55%", width: 160, height: 160,
        background: "radial-gradient(ellipse, rgba(0,150,255,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
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

function buildSmoothPath(islands: typeof K5_ISLANDS): string {
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
  const pathD = buildSmoothPath(K5_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowK5" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowK5" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1k5" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2k5" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#0080FF" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#0080FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1k5)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2k5)" />

      <path d={pathD} fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth={8}
        filter="url(#pathGlowK5)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {K5_ISLANDS.slice(0, -1).map((island, i) => {
        const next = K5_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedK5(progress, testId);
        const done = isCheckpointDoneK5(progress, testId);
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

      {K5_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedK5(progress, island.id);
        const done = isIslandDoneK5(progress, island.id);
        const total = islandTotalStarsK5(progress, island.id);

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
              K5_ISLAND_SVGS[island.id] ? (
                <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60}
                  overflow="visible" opacity={done ? 0.85 : 1}>
                  {React.createElement(K5_ISLAND_SVGS[island.id], { size: 60 })}
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
                  const mdone = isMissionDoneK5(progress, island.id, m.id);
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

// ─── Content generators for K5 explorers ──────────────────────────────────────

interface FillGapRound { sentence: string; options: string[]; correctIndex: number; explanation: string }
interface CategoryRushRound { items: Array<{ text: string; category: string }>; categories: string[] }
interface GrammarMatchRound { question: string; items: Array<{ text: string; id: string }>; pairs: Record<string, string>; explanation: string }
interface WordSortRound { words: string[]; categories: string[]; wordCategories: Record<string, string> }
interface SentenceBuilderPart { type: "text" | "blank"; value?: string; options?: string[] }
interface SentenceBuilderRound { parts: SentenceBuilderPart[]; correctFill: string; explanation: string }
interface SpellRaceRound { word: string; targetLanguage: string }

function generateFillGapK5(islandId: string): FillGapRound[] {
  // Conjunction Cove & Punctuation Port use fill-gap
  if (islandId === "i1") {
    return [
      { sentence: "I wanted to go outside, ___ it was raining.", options: ["but", "and", "or", "so"], correctIndex: 0, explanation: "'But' shows contrast between wanting and the obstacle." },
      { sentence: "She studied hard ___ she could pass the test.", options: ["so that", "but", "or", "yet"], correctIndex: 0, explanation: "'So that' shows purpose — why she studied." },
      { sentence: "He speaks French ___ German fluently.", options: ["and", "but", "or", "so"], correctIndex: 0, explanation: "'And' connects two equal language skills." },
      { sentence: "Would you like tea ___ coffee?", options: ["and", "but", "or", "so"], correctIndex: 2, explanation: "'Or' offers a choice between two options." },
      { sentence: "We can go now, ___ we can wait until later.", options: ["but", "and", "or", "so"], correctIndex: 0, explanation: "'Or' shows alternatives (wait, 'or' is actually correct here)." },
      { sentence: "It was cold ___ snowing heavily yesterday.", options: ["and", "but", "or", "so"], correctIndex: 0, explanation: "'And' connects two weather conditions." },
      { sentence: "Not only is she smart, ___ she's also kind.", options: ["but", "and", "or", "so"], correctIndex: 1, explanation: "'But' (or 'and') adds emphasis to the second quality." },
      { sentence: "You can study now ___ regret it later.", options: ["and", "or", "but", "so"], correctIndex: 1, explanation: "'Or' shows the consequence if you don't study." },
    ];
  }
  if (islandId === "i5") {
    return [
      { sentence: "The book___ titled \"Harry Potter,___ \" has sold millions of copies.", options: [", ", "—", ";", ":"], correctIndex: 0, explanation: "Commas set off the appositive phrase 'titled...'" },
      { sentence: "She said___ \"I will be there soon.\"", options: [",", ";", "—", ":"], correctIndex: 0, explanation: "A comma before direct speech is standard." },
      { sentence: "The recipe calls for three ingredients___ flour, sugar, and eggs.", options: [":", ";", "—", ","], correctIndex: 0, explanation: "A colon introduces a list." },
      { sentence: "My best friend___ who I've known since kindergarten___ is visiting.", options: [",", ";", "—", ":"], correctIndex: 0, explanation: "Commas set off the appositive." },
      { sentence: "The game's score was 5 to 3. ___ That was a close match!", options: ["---", ". ", ";", ":"], correctIndex: 0, explanation: "A period separates two independent sentences." },
      { sentence: "I need these supplies___ pen, paper, and markers.", options: [":", ";", "—", ","], correctIndex: 0, explanation: "A colon introduces a list of items." },
      { sentence: "She has three hobbies___ reading, painting, and running.", options: [":", ";", "—", ","], correctIndex: 0, explanation: "A colon introduces items in an appositive." },
      { sentence: "The author___ John Smith___ wrote this novel.", options: [",", ";", "—", ":"], correctIndex: 0, explanation: "Commas offset an appositive noun phrase." },
    ];
  }
  return [];
}

function generateCategoryRushK5(islandId: string): CategoryRushRound[] {
  if (islandId === "i2") {
    return [
      {
        items: [
          { text: "Wow!", category: "surprise" },
          { text: "Yay!", category: "joy" },
          { text: "Oh no!", category: "sadness" },
          { text: "Yikes!", category: "fear" },
          { text: "Hooray!", category: "joy" },
          { text: "Ugh!", category: "disgust" },
        ],
        categories: ["joy", "surprise", "sadness", "fear", "disgust"],
      },
      {
        items: [
          { text: "Ouch!", category: "pain" },
          { text: "Hmm.", category: "thinking" },
          { text: "Psst!", category: "secret" },
          { text: "Shh!", category: "secret" },
          { text: "Aha!", category: "discovery" },
          { text: "Alas.", category: "sadness" },
        ],
        categories: ["pain", "thinking", "secret", "discovery", "sadness"],
      },
      {
        items: [
          { text: "Whew!", category: "relief" },
          { text: "Eww!", category: "disgust" },
          { text: "Gosh!", category: "surprise" },
          { text: "Darn!", category: "frustration" },
          { text: "Phew!", category: "relief" },
          { text: "Argh!", category: "frustration" },
        ],
        categories: ["relief", "disgust", "surprise", "frustration"],
      },
    ];
  }
  if (islandId === "i9") {
    return [
      {
        items: [
          { text: "Hello there!", category: "formal" },
          { text: "Hey, what's up?", category: "informal" },
          { text: "Good morning, sir.", category: "formal" },
          { text: "Yo!", category: "informal" },
          { text: "I would be delighted to assist.", category: "formal" },
          { text: "I'm gonna help!", category: "informal" },
        ],
        categories: ["formal", "informal"],
      },
      {
        items: [
          { text: "Pursuant to your request...", category: "formal" },
          { text: "Like, whatever dude.", category: "informal" },
          { text: "The matter requires attention.", category: "formal" },
          { text: "This is no big deal.", category: "informal" },
          { text: "I would be honored.", category: "formal" },
          { text: "I'm totally down.", category: "informal" },
        ],
        categories: ["formal", "informal"],
      },
    ];
  }
  return [];
}

function generateGrammarMatchK5(islandId: string): GrammarMatchRound[] {
  if (islandId === "i3") {
    return [
      {
        question: "Match the tense forms with their meanings:",
        items: [
          { text: "I have written", id: "1" },
          { text: "I write", id: "2" },
          { text: "I wrote", id: "3" },
          { text: "I had written", id: "4" },
        ],
        pairs: { "1": "Present Perfect (recently completed)", "2": "Simple Present (habit/fact)", "3": "Simple Past (finished action)", "4": "Past Perfect (before another past action)" },
        explanation: "Each tense tells us when an action happened.",
      },
      {
        question: "Match perfect tenses with their usage:",
        items: [
          { text: "I have lived here for 5 years", id: "1" },
          { text: "I had left before she arrived", id: "2" },
          { text: "She has just finished", id: "3" },
        ],
        pairs: { "1": "Present Perfect: ongoing from past to now", "2": "Past Perfect: one past action before another", "3": "Present Perfect: very recent completion" },
        explanation: "Perfect tenses connect different time periods.",
      },
    ];
  }
  if (islandId === "i7") {
    return [
      {
        question: "Match Greek/Latin roots with their meanings:",
        items: [
          { text: "photo", id: "1" },
          { text: "graph", id: "2" },
          { text: "tele", id: "3" },
          { text: "mono", id: "4" },
        ],
        pairs: { "1": "light", "2": "write/draw", "3": "far/distant", "4": "one/single" },
        explanation: "These roots appear in many English words.",
      },
      {
        question: "Match Latin roots with their meanings:",
        items: [
          { text: "vis", id: "1" },
          { text: "port", id: "2" },
          { text: "dict", id: "3" },
        ],
        pairs: { "1": "see/sight", "2": "carry", "3": "say/speak" },
        explanation: "Understanding roots helps decode new words.",
      },
    ];
  }
  if (islandId === "i8") {
    return [
      {
        question: "Match figurative language types with examples:",
        items: [
          { text: "The wind whispered through the trees", id: "1" },
          { text: "Love is a journey", id: "2" },
          { text: "The sky is crying", id: "3" },
          { text: "That assignment was a breeze", id: "4" },
        ],
        pairs: { "1": "Personification (wind as entity)", "2": "Metaphor (equating unlike things)", "3": "Personification (sky with emotion)", "4": "Idiom/Metaphor (task very easy)" },
        explanation: "Figurative language creates vivid images.",
      },
    ];
  }
  return [];
}

function generateWordSortK5(islandId: string): WordSortRound[] {
  if (islandId === "i9") {
    return [
      {
        words: ["hello", "greetings", "yo", "salutations", "hey", "good morning"],
        categories: ["formal", "informal"],
        wordCategories: { hello: "formal", greetings: "formal", yo: "informal", salutations: "formal", hey: "informal", "good morning": "formal" },
      },
      {
        words: ["assist", "help out", "aid", "lend a hand", "facilitate", "pitch in"],
        categories: ["formal", "informal"],
        wordCategories: { assist: "formal", "help out": "informal", aid: "formal", "lend a hand": "informal", facilitate: "formal", "pitch in": "informal" },
      },
      {
        words: ["terminate", "end", "shut down", "finish up", "conclude", "wrap it up"],
        categories: ["formal", "informal"],
        wordCategories: { terminate: "formal", end: "formal", "shut down": "informal", "finish up": "informal", conclude: "formal", "wrap it up": "informal" },
      },
    ];
  }
  return [];
}

function generateSentenceBuilderK5(islandId: string): SentenceBuilderRound[] {
  if (islandId === "i4") {
    return [
      {
        parts: [
          { type: "text", value: "Because she studied hard" },
          { type: "blank", options: ["she passed", "she will pass", "she is passing"] },
          { type: "text", value: "the difficult exam." },
        ],
        correctFill: "she passed",
        explanation: "The subordinate clause 'Because she studied hard' requires a past tense result.",
      },
      {
        parts: [
          { type: "text", value: "When the bell rang" },
          { type: "blank", options: ["students left", "students are leaving", "students will leave"] },
          { type: "text", value: "the classroom quickly." },
        ],
        correctFill: "students left",
        explanation: "'When' introduces a time clause requiring past tense to match 'rang'.",
      },
      {
        parts: [
          { type: "text", value: "Although it was raining" },
          { type: "blank", options: ["we went", "we were going", "we go"] },
          { type: "text", value: "to the park anyway." },
        ],
        correctFill: "we went",
        explanation: "'Although' introduces a contrast; past tense matches the rainy situation.",
      },
    ];
  }
  return [];
}

function generateSpellRaceK5(islandId: string): SpellRaceRound[] {
  if (islandId === "i6") {
    return [
      { word: "necessary", targetLanguage: "en" },
      { word: "believe", targetLanguage: "en" },
      { word: "receive", targetLanguage: "en" },
      { word: "their", targetLanguage: "en" },
      { word: "separate", targetLanguage: "en" },
      { word: "occurred", targetLanguage: "en" },
      { word: "conscience", targetLanguage: "en" },
      { word: "privilege", targetLanguage: "en" },
    ];
  }
  return [];
}

function getExplorerContentK5(islandId: string, gameType: string): any {
  switch (gameType) {
    case "fill-gap":
      return generateFillGapK5(islandId);
    case "category-rush":
      return generateCategoryRushK5(islandId);
    case "grammar-match":
      return generateGrammarMatchK5(islandId);
    case "word-sort":
      return generateWordSortK5(islandId);
    case "sentence-builder":
      return generateSentenceBuilderK5(islandId);
    case "spell-race":
      return generateSpellRaceK5(islandId);
    case "phonics":
      return [
        { sound: "/sh/", words: ["ship", "shop", "sunshine", "shoe", "shirt", "shell"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /sh/ sound is spelled 'sh'" },
        { sound: "/ch/", words: ["chair", "cheese", "chocolate", "church", "change", "choice"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /ch/ sound is spelled 'ch'" },
        { sound: "/th/", words: ["think", "that", "this", "three", "through", "thought"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /th/ sound is spelled 'th'" },
      ];
    case "picture-vocab":
      return [
        { emoji: "🌍", word: "world", options: ["water", "world", "winter", "wonder"], correctIndex: 1, sentence: "The world is full of amazing places." },
        { emoji: "📖", word: "literature", options: ["language", "library", "literature", "listen"], correctIndex: 2, sentence: "Literature teaches us about different cultures." },
        { emoji: "✍️", word: "write", options: ["wrong", "wind", "write", "waste"], correctIndex: 2, sentence: "Students write essays in English class." },
        { emoji: "💭", word: "imagine", options: ["import", "imagine", "improve", "include"], correctIndex: 1, sentence: "Imagine a world without stories." },
        { emoji: "📚", word: "novel", options: ["never", "number", "notice", "novel"], correctIndex: 3, sentence: "I read an exciting novel last week." },
      ];
    case "rhyme-match":
      return [
        { targetWord: "bright", options: ["night", "dark", "light", "right"], correctIndex: 0, rhymePattern: "-ight" },
        { targetWord: "deep", options: ["keep", "tall", "sleep", "dark"], correctIndex: 0, rhymePattern: "-eep" },
        { targetWord: "start", options: ["part", "end", "heart", "begin"], correctIndex: 0, rhymePattern: "-art" },
        { targetWord: "tell", options: ["spell", "break", "well", "loud"], correctIndex: 0, rhymePattern: "-ell" },
        { targetWord: "find", options: ["mind", "see", "kind", "search"], correctIndex: 0, rhymePattern: "-ind" },
      ];
    case "word-build":
      return [
        { parts: ["un", "clear"], correctOrder: [0, 1], resultWord: "unclear", hint: "prefix + root", explanation: "'un-' means not" },
        { parts: ["re", "read"], correctOrder: [0, 1], resultWord: "reread", hint: "prefix + root", explanation: "'re-' means again" },
        { parts: ["read", "ing"], correctOrder: [0, 1], resultWord: "reading", hint: "root + suffix", explanation: "'-ing' shows ongoing action" },
        { parts: ["understand", "able"], correctOrder: [0, 1], resultWord: "understandable", hint: "root + suffix", explanation: "'-able' means capable of" },
        { parts: ["mis", "understand"], correctOrder: [0, 1], resultWord: "misunderstand", hint: "prefix + root", explanation: "'mis-' means wrongly" },
      ];
    case "reading-comp":
      return [
        { passage: "The author wrote a beautiful story about adventure and friendship. The main characters were brave and kind. They learned important lessons during their journey.", question: "What did the characters learn?", options: ["How to fight", "Important lessons", "How to swim", "How to cook"], correctIndex: 1 },
        { passage: "Literature has been important throughout human history. Stories help us understand different perspectives and cultures. Reading expands our imagination and knowledge.", question: "How does reading help us?", options: ["Makes us rich", "Expands imagination and knowledge", "Helps us sleep", "Makes us popular"], correctIndex: 1 },
        { passage: "The protagonist faced many challenges in the novel. Despite difficulties, she remained determined and strong. Her courage inspired everyone around her.", question: "What was special about the protagonist?", options: ["She was rich", "She was beautiful", "Her courage and determination", "She was famous"], correctIndex: 2 },
      ];
    case "tense-explorer":
      return [
        { sentence: "Yesterday the author ___ a new book.", tenseLabel: "Past Simple", options: ["writes", "wrote", "writing", "will write"], correctIndex: 1, explanation: "Past simple: add -ed for regular verbs or use irregular form" },
        { sentence: "She ___ her work right now.", tenseLabel: "Present Continuous", options: ["finishes", "finished", "is finishing", "will finish"], correctIndex: 2, explanation: "Present continuous: am/is/are + -ing" },
        { sentence: "They ___ stories every evening.", tenseLabel: "Present Simple", options: ["read", "reads", "reading", "will read"], correctIndex: 0, explanation: "Present simple for habits and routines" },
        { sentence: "By next year, I ___ ten novels.", tenseLabel: "Future Perfect", options: ["read", "reads", "will read", "will have read"], correctIndex: 3, explanation: "Future perfect: will have + past participle" },
      ];
    case "memory-pair":
      return [
        { word: "story", match: "📖" }, { word: "author", match: "✍️" },
        { word: "imagination", match: "💭" }, { word: "adventure", match: "🗻" },
        { word: "character", match: "🎭" }, { word: "dialogue", match: "💬" },
        { word: "plot", match: "🎬" }, { word: "ending", match: "🎬" },
      ];
    case "pronunciation":
      return [
        { word: "literature", phonetic: "/ˈlɪtərətʃər/", syllables: ["lit", "er", "a", "ture"], stressIndex: 0, options: ["1st", "2nd", "3rd", "4th"], correctIndex: 0, questionType: "stress" as const, explanation: "Stress falls on the first syllable: LIT-er-a-ture" },
        { word: "character", phonetic: "/ˈkærəktər/", syllables: ["char", "ac", "ter"], stressIndex: 0, options: ["1st", "2nd", "3rd"], correctIndex: 0, questionType: "stress" as const, explanation: "Stress on first syllable: CHAR-ac-ter" },
        { word: "dialogue", phonetic: "/ˈdaɪəlɑːg/", syllables: ["di", "a", "logue"], stressIndex: 0, options: ["1st", "2nd", "3rd"], correctIndex: 0, questionType: "stress" as const, explanation: "Stress on first syllable: DI-a-logue" },
      ];
    default:
      return [];
  }
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function AstroEnglishK5Page() {
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

  const avatarIsland = K5_ISLANDS.find(i => i.id === avatarIslandId) ?? K5_ISLANDS[0];

  const avatarProps = {
    gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves,
    activeHat, activeTrail,
  };

  useEffect(() => {
    const p = loadK5Progress();
    setProgress(p);
    const lastDone = [...K5_ISLANDS].reverse().find(i => p.completedIslands.includes(i.id));
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

    // Explorer games use generated content, quiz games use questions
    const isExplorer = ["fill-gap", "category-rush", "grammar-match", "word-sort", "sentence-builder", "spell-race", "phonics", "picture-vocab", "rhyme-match", "word-build", "reading-comp", "tense-explorer", "memory-pair", "pronunciation", "en5-conjunction-explorer", "en5-interjection-explorer", "en5-tense-k5-explorer", "en5-sentence-k5-explorer", "en5-punctuation-k5-explorer", "en5-spelling-k5-explorer", "en5-root-word-explorer", "en5-figurative-explorer", "en5-academic-explorer"].includes(mission.gameType);

    if (isExplorer) {
      // Explorers don't need questions, content is generated per game
      setQuestions([]);
    } else {
      const qCount = mission.gameType === "star-match" ? 20 : 10;
      const qs = generateIslandQuestionsK5(activeIsland, lang as Lang, qCount);
      setQuestions(qs);
    }

    setScreen(mission.gameType as Screen);
  }, [activeIsland, lang]);

  // ── Mission finished ─────────────────────────────────────────────────────────
  const handleMissionDone = useCallback((score: number, total: number) => {
    if (!activeIsland || !activeMission) return;
    setMissionScore({ score, total });

    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const stars = pct >= 80 ? 3 : pct >= 60 ? 2 : 1;

    const wasIslandDone = progress.completedIslands.includes(activeIsland.id);
    const newProgress = completeMissionK5(progress, activeIsland.id, activeMission.id, stars);
    const isNowIslandDone = newProgress.completedIslands.includes(activeIsland.id);
    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    saveK5Progress(newProgress);
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
    const qs = generateCheckpointQuestionsK5(testId, lang as Lang, 7);
    setQuestions(qs);
    setScreen("rocket-launch");
  }, [lang]);

  const startCheckpointQuiz = useCallback(() => {
    if (!activeTestId) return;
    const qs = generateCheckpointQuestionsK5(activeTestId, lang as Lang, 10);
    setQuestions(qs);
    setScreen("checkpoint-quiz");
  }, [activeTestId, lang]);

  const handleCheckpointDone = useCallback((score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });

    const newProgress = completeTestK5(progress, activeTestId);
    saveK5Progress(newProgress);
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

  const bgColor = activeIsland?.color ?? "#6366F1";

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
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{K5_LABEL[lang] ?? K5_LABEL.en}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">
            {totalDone}/9
          </div>
        </div>
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #6366F1, #B44DFF)" }}
              initial={{ width: 0 }} animate={{ width: `${(totalDone / 9) * 100}%` }} transition={{ duration: 0.8 }} />
          </div>
        </div>
        <div className="relative z-10 flex-1 overflow-y-auto" ref={(el) => { if (el) setTimeout(() => el.scrollTop = el.scrollHeight, 100); }}>
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
    const totalStars = islandTotalStarsK5(progress, activeIsland.id);
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
            const mission = activeIsland.missions.find(m => m.category === cat);
            if (!mission) return null;
            const cfg = CATEGORY_CONFIG[cat];
            const done = isMissionDoneK5(progress, activeIsland.id, mission.id);
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
          <FillGapExplorer rounds={getExplorerContentK5(activeIsland.id, "fill-gap")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "category-rush" && activeIsland && (
          <CategoryRushExplorer {...getExplorerContentK5(activeIsland.id, "category-rush")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "grammar-match" && activeIsland && (
          <GrammarMatchExplorer rounds={getExplorerContentK5(activeIsland.id, "grammar-match")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "word-sort" && activeIsland && (
          <WordSortExplorer rounds={getExplorerContentK5(activeIsland.id, "word-sort")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "sentence-builder" && activeIsland && (
          <SentenceBuilderExplorer rounds={getExplorerContentK5(activeIsland.id, "sentence-builder")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "spell-race" && activeIsland && (
          <SpellRaceExplorer rounds={getExplorerContentK5(activeIsland.id, "spell-race")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "phonics" && activeIsland && (
          <PhonicsExplorer rounds={getExplorerContentK5(activeIsland.id, "phonics")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "picture-vocab" && activeIsland && (
          <PictureVocabExplorer rounds={getExplorerContentK5(activeIsland.id, "picture-vocab")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "rhyme-match" && activeIsland && (
          <RhymeMatchExplorer rounds={getExplorerContentK5(activeIsland.id, "rhyme-match")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "word-build" && activeIsland && (
          <WordBuildExplorer rounds={getExplorerContentK5(activeIsland.id, "word-build")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "reading-comp" && activeIsland && (
          <ReadingCompExplorer rounds={getExplorerContentK5(activeIsland.id, "reading-comp")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "tense-explorer" && activeIsland && (
          <TenseExplorer rounds={getExplorerContentK5(activeIsland.id, "tense-explorer")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "memory-pair" && activeIsland && (
          <MemoryPairExplorer pairs={getExplorerContentK5(activeIsland.id, "memory-pair")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "pronunciation" && activeIsland && (
          <PronunciationExplorer rounds={getExplorerContentK5(activeIsland.id, "pronunciation")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "en5-conjunction-explorer" && (
          <ConjunctionExplorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en5-interjection-explorer" && (
          <InterjectionExplorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en5-tense-k5-explorer" && (
          <TenseK5Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en5-sentence-k5-explorer" && (
          <SentenceK5Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en5-punctuation-k5-explorer" && (
          <PunctuationK5Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en5-spelling-k5-explorer" && (
          <SpellingK5Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
      </div>
    </div>
  );

  if (["orbit-quiz", "black-hole", "gravity-sort", "star-match", "speed-round", "fill-gap", "category-rush", "grammar-match", "word-sort", "sentence-builder", "spell-race", "phonics", "picture-vocab", "rhyme-match", "word-build", "reading-comp", "tense-explorer", "memory-pair", "pronunciation", "en5-conjunction-explorer", "en5-interjection-explorer", "en5-tense-k5-explorer", "en5-sentence-k5-explorer", "en5-punctuation-k5-explorer", "en5-spelling-k5-explorer", "en5-root-word-explorer", "en5-figurative-explorer", "en5-academic-explorer"].includes(screen)) return (
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
          <RocketLaunch questions={questions} color="#FF9500"
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
        grade={5}
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
    const testTopicsK5: Record<string, Record<string, string>> = {
      en: { test1: "Conjunctions, Interjections, Tense Shifts", test2: "Complex Sentences, Punctuation, Spelling", test3: "Word Roots, Figurative Language, Academic Vocabulary" },
      hu: { test1: "Kötőszók, felkiáltások, igeidő váltások", test2: "Összetett mondatok, központozás, helyesírás", test3: "Szógyökerek, képletes nyelvhasználat, tudományos szókincs" },
      de: { test1: "Konjunktionen, Interjektionen, Tempuswechsel", test2: "Komplexe Sätze, Interpunktion, Rechtschreibung", test3: "Wortfamilien, Bildhafte Sprache, Akademisches Vokabular" },
      ro: { test1: "Conjuncții, interjecții, schimbări de timp", test2: "Propoziții complexe, punctuație, ortografie", test3: "Rădăcini de cuvinte, limbaj figurat, vocabular academic" },
    };
    const topicDesc = (testTopicsK5[lang] ?? testTopicsK5.en)[activeTestId] ?? "";
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
