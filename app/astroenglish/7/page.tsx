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
import PhonicsExplorer from "@/app/astroenglish/games/PhonicsExplorer";
import PictureVocabExplorer from "@/app/astroenglish/games/PictureVocabExplorer";
import RhymeMatchExplorer from "@/app/astroenglish/games/RhymeMatchExplorer";
import WordBuildExplorer from "@/app/astroenglish/games/WordBuildExplorer";
import ReadingCompExplorer from "@/app/astroenglish/games/ReadingCompExplorer";
import TenseExplorer from "@/app/astroenglish/games/TenseExplorer";
import MemoryPairExplorer from "@/app/astroenglish/games/MemoryPairExplorer";
import PronunciationExplorer from "@/app/astroenglish/games/PronunciationExplorer";
import GrammarK7Explorer from "@/app/astroenglish/games/k7/GrammarK7Explorer";
import SentenceK7Explorer from "@/app/astroenglish/games/k7/SentenceK7Explorer";
import TenseVoiceExplorer from "@/app/astroenglish/games/k7/TenseVoiceExplorer";
import PunctuationK7Explorer from "@/app/astroenglish/games/k7/PunctuationK7Explorer";
import FigurativeK7Explorer from "@/app/astroenglish/games/k7/FigurativeK7Explorer";
import AcademicK7Explorer from "@/app/astroenglish/games/k7/AcademicK7Explorer";
import ArgumentExplorer from "@/app/astroenglish/games/k7/ArgumentExplorer";
import ClauseK7Explorer from "@/app/astroenglish/games/k7/ClauseK7Explorer";
import VerbalExplorer from "@/app/astroenglish/games/k7/VerbalExplorer";
import { K7_ISLAND_SVGS } from "@/app/astroenglish/islands-k7";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });
import {
  K7_ISLANDS, K7_CHECKPOINT_MAP, type IslandDef, type MissionDef, type Lang, type MissionCategory,
  loadK7Progress, saveK7Progress, type EnglishProgress,
  isMissionDoneK7, isIslandDoneK7, isIslandUnlockedK7,
  isCheckpointUnlockedK7, isCheckpointDoneK7,
  completeMissionK7, completeTestK7, islandTotalStarsK7,
  generateIslandQuestionsK7, generateCheckpointQuestionsK7,
} from "@/lib/astroEnglish7";

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

// ─── Grade 7 labels ────────────────────────────────────────────────────────────
const K7_LABEL: Record<string, string> = {
  en: "Grade 7 · Debate Galaxy",
  hu: "7. osztály · Vita Galaxis",
  de: "Klasse 7 · Debatte-Galaxie",
  ro: "Clasa 7 · Galaxia dezbaterii",
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
  | "phonics"
  | "picture-vocab"
  | "rhyme-match"
  | "word-build"
  | "reading-comp"
  | "tense-explorer"
  | "memory-pair"
  | "pronunciation"
  | "en7-grammar-explorer"
  | "en7-sentence-explorer"
  | "en7-tense-voice-explorer"
  | "en7-punctuation-explorer"
  | "en7-figurative-explorer"
  | "en7-academic-explorer"
  | "en7-argument-explorer"
  | "en7-clause-explorer"
  | "en7-verbal-explorer"
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
        background: "radial-gradient(ellipse, rgba(180,77,255,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />
      <div className="absolute" style={{ left: "55%", top: "55%", width: 160, height: 160,
        background: "radial-gradient(ellipse, rgba(180,77,255,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
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

function buildSmoothPath(islands: typeof K7_ISLANDS): string {
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
  const pathD = buildSmoothPath(K7_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowK7" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowK7" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1k7" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#B44DFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2k7" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#B44DFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1k7)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2k7)" />

      <path d={pathD} fill="none" stroke="rgba(180,77,255,0.25)" strokeWidth={8}
        filter="url(#pathGlowK7)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {K7_ISLANDS.slice(0, -1).map((island, i) => {
        const next = K7_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedK7(progress, testId);
        const done = isCheckpointDoneK7(progress, testId);
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

      {K7_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedK7(progress, island.id);
        const done = isIslandDoneK7(progress, island.id);
        const total = islandTotalStarsK7(progress, island.id);

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
              K7_ISLAND_SVGS[island.id] ? (
                <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60}
                  overflow="visible" opacity={done ? 0.85 : 1}>
                  {React.createElement(K7_ISLAND_SVGS[island.id], { size: 60 })}
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
                  const mdone = isMissionDoneK7(progress, island.id, m.id);
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

// ─── Content generators for K7 explorers ──────────────────────────────────────

interface FillGapRound { sentence: string; options: string[]; correctIndex: number; explanation: string }
interface CategoryRushRound { items: Array<{ text: string; category: string }>; categories: string[] }
interface GrammarMatchRound { question: string; items: Array<{ text: string; id: string }>; pairs: Record<string, string>; explanation: string }
interface WordSortRound { words: string[]; categories: string[]; wordCategories: Record<string, string> }
interface SentenceBuilderPart { type: "text" | "blank"; value?: string; options?: string[] }
interface SentenceBuilderRound { parts: SentenceBuilderPart[]; correctFill: string; explanation: string }
interface SpellRaceRound { word: string; targetLanguage: string }

function generateFillGapK7(islandId: string): FillGapRound[] {
  if (islandId === "i3") {
    return [
      { sentence: "The book ___ read by thousands of students every year.", options: ["is being", "was being", "has been", "will be"], correctIndex: 2, explanation: "Present perfect passive shows completion from past to present." },
      { sentence: "If she ___ the deadline, she would have submitted the project on time.", options: ["had met", "meets", "would meet", "is meeting"], correctIndex: 0, explanation: "Subjunctive mood requires past perfect in conditional clause." },
      { sentence: "Although he was tired, he ___ to help his friend.", options: ["continuing", "continue", "continued", "was continuing"], correctIndex: 2, explanation: "Simple past is appropriate for completed action in past." },
      { sentence: "The argument ___ by several logical fallacies weakened the essay.", options: ["undermining", "undermined", "being undermined", "to undermine"], correctIndex: 1, explanation: "Past participle used as adjective modifies the noun." },
      { sentence: "She ___ speak French fluently if she practiced daily.", options: ["can", "could", "would can", "should"], correctIndex: 1, explanation: "Conditional mood uses 'could' for hypothetical ability." },
      { sentence: "The activists ___ by the government's lack of response to their concerns.", options: ["frustrating", "frustrated", "being frustrated", "to frustrate"], correctIndex: 1, explanation: "Past participle shows emotional state caused by external action." },
      { sentence: "If we ___ sustainable practices now, future generations will benefit.", options: ["adopt", "would adopt", "adopted", "will adopt"], correctIndex: 0, explanation: "Simple present in if-clause with future consequence." },
      { sentence: "Despite the obstacles, the team ___ determined to succeed.", options: ["remain", "remaining", "remained", "remains"], correctIndex: 3, explanation: "Present tense shows current state that persists." },
    ];
  }
  if (islandId === "i4") {
    return [
      { sentence: "She walked ___ carefully ___ the crowded hallway.", options: ["through", "around", "by", "into"], correctIndex: 0, explanation: "'Through' shows movement within a space." },
      { sentence: "The author ___ a powerful argument for educational reform.", options: ["advanced", "advanced", "advances", "is advancing"], correctIndex: 0, explanation: "Simple past for completed action in historical context." },
      { sentence: "His essay contained ___ grammatical errors ___ logical flaws.", options: ["both...and", "neither...nor", "either...or", "not only...but also"], correctIndex: 3, explanation: "'Not only...but also' adds emphasis and connects two equally important ideas." },
      { sentence: "The semicolon ___ separate two independent clauses that are closely related.", options: ["can", "must", "should", "cannot"], correctIndex: 0, explanation: "Semicolons can separate independent clauses with related ideas." },
      { sentence: "They were ___ inspired ___ the speaker's words.", options: ["so...that", "much...as", "very...by", "deeply...by"], correctIndex: 3, explanation: "'Deeply' and 'by' correctly express profound emotion caused by something." },
      { sentence: "The dash ___ sometimes used for emphasis ___ additional information.", options: ["is...or", "are...and", "can be...or", "will be...and"], correctIndex: 2, explanation: "Dashes can introduce emphasis or provide further explanation." },
      { sentence: "Colons typically introduce ___ list ___ explanation.", options: ["a...or an", "the...and the", "a...and an", "or...or"], correctIndex: 0, explanation: "Colons introduce lists or explanations using singular article." },
      { sentence: "The debate highlighted ___ important differences ___ similar goals.", options: ["many...yet", "some...but", "few...and", "several...yet"], correctIndex: 3, explanation: "'Yet' creates appropriate contrast despite similarity." },
    ];
  }
  return [];
}

function generateCategoryRushK7(islandId: string): CategoryRushRound[] {
  if (islandId === "i6") {
    return [
      {
        items: [
          { text: "Facilitate", category: "academic" },
          { text: "Argue", category: "academic" },
          { text: "Help out", category: "casual" },
          { text: "Back up", category: "casual" },
          { text: "Assert", category: "academic" },
          { text: "Pitch in", category: "casual" },
        ],
        categories: ["academic", "casual"],
      },
      {
        items: [
          { text: "Demonstrate", category: "academic" },
          { text: "Show", category: "casual" },
          { text: "Elucidate", category: "academic" },
          { text: "Explain", category: "casual" },
          { text: "Illustrate", category: "academic" },
          { text: "Make clear", category: "casual" },
        ],
        categories: ["academic", "casual"],
      },
      {
        items: [
          { text: "Subsequently", category: "academic" },
          { text: "Then", category: "casual" },
          { text: "Heretofore", category: "academic" },
          { text: "Before that", category: "casual" },
          { text: "Accordingly", category: "academic" },
          { text: "So", category: "casual" },
        ],
        categories: ["academic", "casual"],
      },
    ];
  }
  return [];
}

function generateGrammarMatchK7(islandId: string): GrammarMatchRound[] {
  if (islandId === "i2") {
    return [
      {
        question: "Match sentence types with their definitions:",
        items: [
          { text: "Simple sentence", id: "1" },
          { text: "Compound sentence", id: "2" },
          { text: "Complex sentence", id: "3" },
          { text: "Compound-complex", id: "4" },
        ],
        pairs: { "1": "One independent clause only", "2": "Two or more independent clauses", "3": "One independent + one or more dependent clauses", "4": "Multiple independent clauses + dependent clauses" },
        explanation: "Sentence types depend on number and combination of independent/dependent clauses.",
      },
      {
        question: "Match modifiers with their descriptions:",
        items: [
          { text: "Misplaced modifier", id: "1" },
          { text: "Dangling modifier", id: "2" },
          { text: "Squinting modifier", id: "3" },
        ],
        pairs: { "1": "Modifier placed away from intended noun", "2": "Modifier lacks clear noun to modify", "3": "Modifier could refer to multiple words" },
        explanation: "Understanding modifier problems improves sentence clarity.",
      },
    ];
  }
  if (islandId === "i5") {
    return [
      {
        question: "Match figurative language types:",
        items: [
          { text: "Metaphor", id: "1" },
          { text: "Simile", id: "2" },
          { text: "Personification", id: "3" },
          { text: "Hyperbole", id: "4" },
        ],
        pairs: { "1": "Direct comparison between unlike things", "2": "Comparison using 'like' or 'as'", "3": "Giving human qualities to non-human things", "4": "Extreme exaggeration for effect" },
        explanation: "Figurative language creates vivid imagery and emotional impact.",
      },
      {
        question: "Match connotation terms:",
        items: [
          { text: "Positive connotation", id: "1" },
          { text: "Negative connotation", id: "2" },
          { text: "Neutral connotation", id: "3" },
        ],
        pairs: { "1": "Word implies approval or favorable qualities", "2": "Word implies disapproval or unfavorable qualities", "3": "Word has factual meaning without emotional weight" },
        explanation: "Word choice affects reader perception and emotion.",
      },
    ];
  }
  if (islandId === "i8") {
    return [
      {
        question: "Match clause types with purposes:",
        items: [
          { text: "Cause/effect clause", id: "1" },
          { text: "Conditional clause", id: "2" },
          { text: "Concessive clause", id: "3" },
        ],
        pairs: { "1": "Shows why something happens", "2": "Shows condition that affects result", "3": "Acknowledges opposing idea while maintaining main point" },
        explanation: "Different clause types create specific logical relationships.",
      },
    ];
  }
  return [];
}

function generateWordSortK7(islandId: string): WordSortRound[] {
  if (islandId === "i1") {
    return [
      {
        words: ["running", "quickly", "exciting", "near", "bright", "slowly"],
        categories: ["adjective", "adverb"],
        wordCategories: { running: "adjective", quickly: "adverb", exciting: "adjective", near: "adverb", bright: "adjective", slowly: "adverb" },
      },
      {
        words: ["above", "never", "inside", "rarely", "throughout", "always"],
        categories: ["preposition", "adverb"],
        wordCategories: { above: "preposition", never: "adverb", inside: "preposition", rarely: "adverb", throughout: "preposition", always: "adverb" },
      },
      {
        words: ["infinitive", "gerund", "participle", "noun", "verb", "adjective"],
        categories: ["verbal", "non-verbal"],
        wordCategories: { infinitive: "verbal", gerund: "verbal", participle: "verbal", noun: "non-verbal", verb: "non-verbal", adjective: "non-verbal" },
      },
    ];
  }
  if (islandId === "i9") {
    return [
      {
        words: ["swimming", "walked", "jumping", "will run", "to dance", "created"],
        categories: ["gerund", "past tense", "infinitive"],
        wordCategories: { swimming: "gerund", walked: "past tense", jumping: "gerund", "will run": "infinitive", "to dance": "infinitive", created: "past tense" },
      },
    ];
  }
  return [];
}

function generateSentenceBuilderK7(islandId: string): SentenceBuilderRound[] {
  if (islandId === "i7") {
    return [
      {
        parts: [
          { type: "text", value: "To support her argument" },
          { type: "blank", options: ["she cited", "she has cited", "she is citing"] },
          { type: "text", value: "multiple credible sources." },
        ],
        correctFill: "she cited",
        explanation: "Simple past works here for completed action that supports the infinitive phrase.",
      },
      {
        parts: [
          { type: "text", value: "The evidence" },
          { type: "blank", options: ["proves", "proved", "is proving"] },
          { type: "text", value: "the author's central thesis." },
        ],
        correctFill: "proves",
        explanation: "Simple present for general truth about the evidence.",
      },
      {
        parts: [
          { type: "text", value: "After the counterargument was presented," },
          { type: "blank", options: ["the speaker rebuts", "the speaker rebutted", "the speaker will rebut"] },
          { type: "text", value: "it effectively." },
        ],
        correctFill: "the speaker rebutted",
        explanation: "Past tense aligns with past time signal 'after the counterargument was presented'.",
      },
    ];
  }
  return [];
}

function generateSpellRaceK7(islandId: string): SpellRaceRound[] {
  return [];
}

function generatePhonicsK7(islandId: string): any {
  return [
    { sound: "/ɪ/", words: ["sit", "sip", "ship", "skid", "grin", "flip"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /ɪ/ sound is short 'i'" },
    { sound: "/eɪ/", words: ["make", "take", "same", "sit", "face", "late"], correctIndices: [0, 1, 2, 4, 5], explanation: "The /eɪ/ sound is long 'a' — 'a-consonant-e'" },
    { sound: "/ɔɪ/", words: ["boy", "toy", "coin", "soil", "bet", "join"], correctIndices: [0, 1, 2, 3, 5], explanation: "The /ɔɪ/ sound combines 'o' and 'i'" },
  ];
}

function generatePictureVocabK7(islandId: string): any {
  return [
    { emoji: "📚", word: "academic", options: ["artistic", "academic", "athletic", "artistic"], correctIndex: 1, sentence: "She has an academic interest in philosophy." },
    { emoji: "🎭", word: "enthusiasm", options: ["enthusiasm", "exhaustion", "examination", "example"], correctIndex: 0, sentence: "His enthusiasm for the project was contagious." },
    { emoji: "🌍", word: "perspective", options: ["practice", "perception", "perspective", "preparation"], correctIndex: 2, sentence: "Different cultures have unique perspectives on art." },
    { emoji: "💡", word: "innovation", options: ["information", "innovation", "investment", "invitation"], correctIndex: 1, sentence: "Technological innovation drives progress." },
    { emoji: "🏆", word: "achievement", options: ["achievement", "arrangement", "advancement", "agreement"], correctIndex: 0, sentence: "Her achievement in science earned recognition." },
  ];
}

function generateRhymeMatchK7(islandId: string): any {
  return [
    { targetWord: "debate", options: ["create", "dark", "date", "desk"], correctIndex: 0, rhymePattern: "-ate" },
    { targetWord: "persuade", options: ["present", "made", "period", "pale"], correctIndex: 1, rhymePattern: "-ade" },
    { targetWord: "evidence", options: ["experience", "existence", "excellence", "expense"], correctIndex: 2, rhymePattern: "-ence" },
    { targetWord: "analyze", options: ["apologize", "apply", "advance", "announce"], correctIndex: 0, rhymePattern: "-ize" },
    { targetWord: "context", options: ["content", "connect", "concert", "consent"], correctIndex: 1, rhymePattern: "-ext" },
  ];
}

function generateWordBuildK7(islandId: string): any {
  return [
    { parts: ["dis", "agree"], correctOrder: [0, 1], resultWord: "disagree", hint: "prefix + root", explanation: "'dis-' means the opposite" },
    { parts: ["mis", "understand"], correctOrder: [0, 1], resultWord: "misunderstand", hint: "prefix + root", explanation: "'mis-' means wrongly or badly" },
    { parts: ["analyze", "tion"], correctOrder: [0, 1], resultWord: "analysis", hint: "root + suffix", explanation: "'-sis' is a noun-forming suffix (nominalization)" },
    { parts: ["persuade", "able"], correctOrder: [0, 1], resultWord: "persuadable", hint: "root + suffix", explanation: "'-able' means capable of" },
    { parts: ["debate", "er"], correctOrder: [0, 1], resultWord: "debater", hint: "root + suffix", explanation: "'-er' means one who performs an action" },
  ];
}

function generateReadingCompK7(islandId: string): any {
  return [
    { passage: "Critical thinking requires analyzing evidence carefully. Writers present arguments supported by facts and examples. Strong arguments acknowledge counterarguments and address them directly.", question: "What should strong arguments include?", options: ["Only facts", "Acknowledgment of counterarguments", "Complex vocabulary", "Long sentences"], correctIndex: 1 },
    { passage: "The industrial revolution transformed society through technological innovation. Factories replaced handcrafted production. Workers moved from rural farms to cities. This shift created both opportunities and social challenges.", question: "What was a consequence of the industrial revolution?", options: ["Fewer jobs available", "Increased rural farming", "Worker migration to cities", "Less technological progress"], correctIndex: 2 },
    { passage: "Persuasive writing uses multiple strategies including appeals to logic, emotion, and credibility. A writer might present statistics (logic), tell a personal story (emotion), or establish expertise (credibility).", question: "What are the three main appeals in persuasive writing?", options: ["Facts, opinions, examples", "Logic, emotion, credibility", "Statistics, stories, speeches", "Books, articles, websites"], correctIndex: 1 },
  ];
}

function generateTenseExplorerK7(islandId: string): any {
  return [
    { sentence: "By next year, she ___ five advanced certifications.", tenseLabel: "Future Perfect", options: ["completes", "will complete", "will have completed", "has completed"], correctIndex: 2, explanation: "Future Perfect: will have + past participle for actions completed by a future time" },
    { sentence: "While he was studying, I ___ a presentation.", tenseLabel: "Past Continuous", options: ["prepared", "was preparing", "have prepared", "had prepared"], correctIndex: 1, explanation: "Past Continuous: was/were + -ing for simultaneous past actions" },
    { sentence: "If you had studied longer, you ___ the exam.", tenseLabel: "Past Conditional", options: ["would pass", "would have passed", "will pass", "passed"], correctIndex: 1, explanation: "Past Conditional: would have + past participle for hypothetical past situations" },
    { sentence: "She has been teaching for twenty years and ___ to continue.", tenseLabel: "Present Perfect Continuous", options: ["plans", "is planning", "has planned", "will plan"], correctIndex: 0, explanation: "Present tense used with present perfect continuous for present intention" },
  ];
}

function generateMemoryPairK7(islandId: string): any {
  return [
    { word: "resilience", match: "💪" },
    { word: "eloquent", match: "🎤" },
    { word: "pragmatic", match: "🛠️" },
    { word: "authentic", match: "✨" },
    { word: "analytical", match: "🧠" },
    { word: "collaborative", match: "🤝" },
    { word: "advocate", match: "📣" },
    { word: "perspective", match: "👁️" },
  ];
}

function generatePronunciationK7(islandId: string): any {
  return [
    { word: "analysis", phonetic: "/əˈnæləsɪs/", syllables: ["a", "nal", "y", "sis"], stressIndex: 1, options: ["1st", "2nd", "3rd", "4th"], correctIndex: 1, questionType: "stress" as const, explanation: "Stress on 2nd syllable: a-NAL-y-sis" },
    { word: "persuade", phonetic: "/pərˈsweɪd/", syllables: ["per", "suade"], stressIndex: 1, options: ["1st", "2nd", "Never"], correctIndex: 1, questionType: "stress" as const, explanation: "Stress on 2nd syllable: per-SUADE" },
    { word: "autonomous", phonetic: "/ɔːˈtɑːnəməs/", syllables: ["au", "ton", "o", "mous"], stressIndex: 1, options: ["1st", "2nd", "3rd", "4th"], correctIndex: 1, questionType: "stress" as const, explanation: "Stress on 2nd syllable: au-TON-o-mous" },
    { word: "aesthetic", phonetic: "/esˈθɛtɪk/", syllables: ["aes", "thet", "ic"], stressIndex: 1, options: ["1st", "2nd", "3rd"], correctIndex: 1, questionType: "stress" as const, explanation: "Stress on 2nd syllable: aes-THET-ic" },
    { word: "island", phonetic: "/ˈaɪlənd/", syllables: ["is", "land"], stressIndex: 0, options: ["s", "l", "d", "n"], correctIndex: 0, questionType: "silent-letter" as const, explanation: "The 's' in 'island' is silent" },
  ];
}

function getExplorerContentK7(islandId: string, gameType: string): any {
  switch (gameType) {
    case "fill-gap":
      return generateFillGapK7(islandId);
    case "category-rush":
      return generateCategoryRushK7(islandId);
    case "grammar-match":
      return generateGrammarMatchK7(islandId);
    case "word-sort":
      return generateWordSortK7(islandId);
    case "sentence-builder":
      return generateSentenceBuilderK7(islandId);
    case "spell-race":
      return generateSpellRaceK7(islandId);
    case "phonics":
      return generatePhonicsK7(islandId);
    case "picture-vocab":
      return generatePictureVocabK7(islandId);
    case "rhyme-match":
      return generateRhymeMatchK7(islandId);
    case "word-build":
      return generateWordBuildK7(islandId);
    case "reading-comp":
      return generateReadingCompK7(islandId);
    case "tense-explorer":
      return generateTenseExplorerK7(islandId);
    case "memory-pair":
      return generateMemoryPairK7(islandId);
    case "pronunciation":
      return generatePronunciationK7(islandId);
    default:
      return [];
  }
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function AstroEnglishK7Page() {
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

  const avatarIsland = K7_ISLANDS.find(i => i.id === avatarIslandId) ?? K7_ISLANDS[0];

  const avatarProps = {
    gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves,
    activeHat, activeTrail,
  };

  useEffect(() => {
    const p = loadK7Progress();
    setProgress(p);
    const lastDone = [...K7_ISLANDS].reverse().find(i => p.completedIslands.includes(i.id));
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
    const isExplorer = ["fill-gap", "category-rush", "grammar-match", "word-sort", "sentence-builder", "spell-race", "phonics", "picture-vocab", "rhyme-match", "word-build", "reading-comp", "tense-explorer", "memory-pair", "pronunciation", "en7-grammar-explorer", "en7-sentence-explorer", "en7-tense-voice-explorer", "en7-punctuation-explorer", "en7-figurative-explorer", "en7-academic-explorer", "en7-argument-explorer", "en7-clause-explorer", "en7-verbal-explorer"].includes(mission.gameType);
    if (isExplorer) {
      setQuestions([]);
      setScreen(mission.gameType as Screen);
      return;
    }
    const qCount = mission.gameType === "star-match" ? 15 : 10;
    const qs = generateIslandQuestionsK7(activeIsland, lang as Lang, qCount);
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
    const newProgress = completeMissionK7(progress, activeIsland.id, activeMission.id, stars);
    const isNowIslandDone = newProgress.completedIslands.includes(activeIsland.id);
    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    saveK7Progress(newProgress);
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
    const qs = generateCheckpointQuestionsK7(testId, lang as Lang, 7);
    setQuestions(qs);
    setScreen("rocket-launch");
  }, [lang]);

  const startCheckpointQuiz = useCallback(() => {
    if (!activeTestId) return;
    const qs = generateCheckpointQuestionsK7(activeTestId, lang as Lang, 10);
    setQuestions(qs);
    setScreen("checkpoint-quiz");
  }, [activeTestId, lang]);

  const handleCheckpointDone = useCallback((score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });

    const newProgress = completeTestK7(progress, activeTestId);
    saveK7Progress(newProgress);
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

  const bgColor = activeIsland?.color ?? "#B44DFF";

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
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{K7_LABEL[lang] ?? K7_LABEL.en}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">
            {totalDone}/9
          </div>
        </div>
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #B44DFF, #E879F9)" }}
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
    const totalStars = islandTotalStarsK7(progress, activeIsland.id);
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
            const done = isMissionDoneK7(progress, activeIsland.id, mission.id);
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
          <FillGapExplorer rounds={getExplorerContentK7(activeIsland.id, "fill-gap")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "category-rush" && activeIsland && (
          <CategoryRushExplorer {...getExplorerContentK7(activeIsland.id, "category-rush")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "grammar-match" && activeIsland && (
          <GrammarMatchExplorer rounds={getExplorerContentK7(activeIsland.id, "grammar-match")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "word-sort" && activeIsland && (
          <WordSortExplorer rounds={getExplorerContentK7(activeIsland.id, "word-sort")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "sentence-builder" && activeIsland && (
          <SentenceBuilderExplorer rounds={getExplorerContentK7(activeIsland.id, "sentence-builder")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "spell-race" && activeIsland && (
          <SpellRaceExplorer rounds={getExplorerContentK7(activeIsland.id, "spell-race")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "phonics" && activeIsland && (
          <PhonicsExplorer rounds={getExplorerContentK7(activeIsland.id, "phonics")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "picture-vocab" && activeIsland && (
          <PictureVocabExplorer rounds={getExplorerContentK7(activeIsland.id, "picture-vocab")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "rhyme-match" && activeIsland && (
          <RhymeMatchExplorer rounds={getExplorerContentK7(activeIsland.id, "rhyme-match")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "word-build" && activeIsland && (
          <WordBuildExplorer rounds={getExplorerContentK7(activeIsland.id, "word-build")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "reading-comp" && activeIsland && (
          <ReadingCompExplorer rounds={getExplorerContentK7(activeIsland.id, "reading-comp")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "tense-explorer" && activeIsland && (
          <TenseExplorer rounds={getExplorerContentK7(activeIsland.id, "tense-explorer")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "memory-pair" && activeIsland && (
          <MemoryPairExplorer pairs={getExplorerContentK7(activeIsland.id, "memory-pair")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "pronunciation" && activeIsland && (
          <PronunciationExplorer rounds={getExplorerContentK7(activeIsland.id, "pronunciation")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "en7-grammar-explorer" && (
          <GrammarK7Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en7-sentence-explorer" && (
          <SentenceK7Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en7-tense-voice-explorer" && (
          <TenseVoiceExplorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en7-punctuation-explorer" && (
          <PunctuationK7Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en7-figurative-explorer" && (
          <FigurativeK7Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en7-academic-explorer" && (
          <AcademicK7Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en7-argument-explorer" && (
          <ArgumentExplorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en7-clause-explorer" && (
          <ClauseK7Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en7-verbal-explorer" && (
          <VerbalExplorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
      </div>
    </div>
  );

  if (["orbit-quiz", "black-hole", "gravity-sort", "star-match", "speed-round", "fill-gap", "category-rush", "grammar-match", "word-sort", "sentence-builder", "spell-race", "phonics", "picture-vocab", "rhyme-match", "word-build", "reading-comp", "tense-explorer", "memory-pair", "pronunciation", "en7-grammar-explorer", "en7-sentence-explorer", "en7-tense-voice-explorer", "en7-punctuation-explorer", "en7-figurative-explorer", "en7-academic-explorer", "en7-argument-explorer", "en7-clause-explorer", "en7-verbal-explorer"].includes(screen)) return (
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
          <RocketLaunch questions={questions} color="#B44DFF"
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
        grade={7}
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
    const testTopicsK7: Record<string, Record<string, string>> = {
      en: { test1: "Argumentation, Claims, Evidence", test2: "Debate Structure, Counterarguments", test3: "Rhetorical Devices, Persuasion" },
      hu: { test1: "Érvelés, kijelentések, bizonyítékok", test2: "Vita szerkezete, ellenérvek", test3: "Retoikai eszközök, meggyőzés" },
      de: { test1: "Argumentation, Aussagen, Beweise", test2: "Debattenstruktur, Gegenargumente", test3: "Rhetorische Mittel, Überzeugung" },
      ro: { test1: "Argumentare, afirmații, dovezi", test2: "Structura dezbaterii, contraargumente", test3: "Dispozitive retorici, persuasiune" },
    };
    const topicDesc = (testTopicsK7[lang] ?? testTopicsK7.en)[activeTestId] ?? "";
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
