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
import PronounK6Explorer from "@/app/astroenglish/games/k6/PronounK6Explorer";
import SentenceStructureK6Explorer from "@/app/astroenglish/games/k6/SentenceStructureK6Explorer";
import VocabularyK6Explorer from "@/app/astroenglish/games/k6/VocabularyK6Explorer";
import RhetoricK6Explorer from "@/app/astroenglish/games/k6/RhetoricK6Explorer";
import { K6_ISLAND_SVGS } from "@/app/astroenglish/islands-k6";
import {
  K6_ISLANDS, K6_CHECKPOINT_MAP, type IslandDef, type MissionDef, type Lang, type MissionCategory,
  loadK6Progress, saveK6Progress, type EnglishProgress,
  isMissionDoneK6, isIslandDoneK6, isIslandUnlockedK6,
  isCheckpointUnlockedK6, isCheckpointDoneK6,
  completeMissionK6, completeTestK6, islandTotalStarsK6,
  generateIslandQuestionsK6, generateCheckpointQuestionsK6,
} from "@/lib/astroEnglish6";

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

// ─── Grade K6 labels ────────────────────────────────────────────────────────────
const K6_LABEL: Record<string, string> = {
  en: "Grade 6 · Analysis Galaxy",
  hu: "6. évfolyam · Analízis galaxis",
  de: "Klasse 6 · Analyse-Galaxie",
  ro: "Clasa 6 · Galaxia analizei",
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
  | "en6-pronoun-k6-explorer"
  | "en6-pronoun-precision-explorer"
  | "en6-sentence-structure-explorer"
  | "en6-complex-clause-explorer"
  | "en6-word-builder-explorer"
  | "en6-vocabulary-explorer"
  | "en6-academic-k6-explorer"
  | "en6-punctuation-k6-explorer"
  | "en6-rhetoric-explorer"
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
  progress: EnglishProgress;
  onIsland: (island: IslandDef) => void;
  onCheckpoint: (testId: string) => void;
}) {
  const pathD = buildSmoothPath(K6_ISLANDS);

  return (
    <svg viewBox={`0 -${MAP_VB_OFFSET} ${MAP_W} ${MAP_H}`} width="100%" style={{ minHeight: MAP_H, display: "block" }}>
      <defs>
        <filter id="pathGlowK6" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="islandGlowK6" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="nebula1k6" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FF9500" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF9500" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nebula2k6" cx="70%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#0080FF" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#0080FF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx={100} cy={350} rx={160} ry={200} fill="url(#nebula1k6)" />
      <ellipse cx={220} cy={100} rx={130} ry={160} fill="url(#nebula2k6)" />

      <path d={pathD} fill="none" stroke="rgba(255,149,0,0.25)" strokeWidth={8}
        filter="url(#pathGlowK6)" strokeLinecap="round" />
      <path d={pathD} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={2.5}
        strokeDasharray="10 7" strokeLinecap="round" />
      {K6_ISLANDS.slice(0, -1).map((island, i) => {
        const next = K6_ISLANDS[i + 1];
        const mx = (island.svgX + next.svgX) / 2;
        const my = (island.svgY + next.svgY) / 2;
        return <circle key={i} cx={mx} cy={my} r={2} fill="rgba(255,255,255,0.18)" />;
      })}

      {Object.entries(CP_POS).map(([testId, pos]) => {
        const unlocked = isCheckpointUnlockedK6(progress, testId);
        const done = isCheckpointDoneK6(progress, testId);
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

      {K6_ISLANDS.map((island, idx) => {
        const unlocked = isIslandUnlockedK6(progress, island.id);
        const done = isIslandDoneK6(progress, island.id);
        const total = islandTotalStarsK6(progress, island.id);

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
              K6_ISLAND_SVGS[island.id] ? (
                <svg x={island.svgX - 30} y={island.svgY - 30} width={60} height={60}
                  overflow="visible" opacity={done ? 0.85 : 1}>
                  {React.createElement(K6_ISLAND_SVGS[island.id], { size: 60 })}
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
                  const mdone = isMissionDoneK6(progress, island.id, m.id);
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

// ─── Content generators for K6 explorers ──────────────────────────────────────

interface FillGapRound { sentence: string; options: string[]; correctIndex: number; explanation: string }
interface CategoryRushRound { items: Array<{ text: string; category: string }>; categories: string[] }
interface GrammarMatchRound { question: string; items: Array<{ text: string; id: string }>; pairs: Record<string, string>; explanation: string }
interface WordSortRound { words: string[]; categories: string[]; wordCategories: Record<string, string> }
interface SentenceBuilderPart { type: "text" | "blank"; value?: string; options?: string[] }
interface SentenceBuilderRound { parts: SentenceBuilderPart[]; correctFill: string; explanation: string }
interface SpellRaceRound { word: string; targetLanguage: string }

function generateFillGapK6(islandId: string): FillGapRound[] {
  if (islandId === "i1") {
    return [
      { sentence: "The teacher gave ___ the assignment.", options: ["him", "he", "his", "himself"], correctIndex: 0, explanation: "'Him' is the indirect object pronoun here." },
      { sentence: "Between you and ___, I think this is silly.", options: ["me", "I", "my", "mine"], correctIndex: 0, explanation: "Use the objective case after a preposition." },
      { sentence: "The dog wagged ___ tail happily.", options: ["its", "it's", "it", "itself"], correctIndex: 0, explanation: "'Its' shows possession without an apostrophe." },
      { sentence: "___ students studied very hard for the test.", options: ["Their", "There", "They're", "Theirs"], correctIndex: 0, explanation: "'Their' shows possession." },
      { sentence: "___ going to the party tonight?", options: ["Your", "You're", "Yours", "You"], correctIndex: 1, explanation: "'You're' = 'You are'." },
    ];
  }
  if (islandId === "i7") {
    return [
      { sentence: "The ___ vocabulary in that book was challenging.", options: ["academic", "casual", "slang", "informal"], correctIndex: 0, explanation: "'Academic' is formal, scholarly language." },
      { sentence: "They used ___ terms like 'gonna' and 'wanna' in conversation.", options: ["academic", "formal", "colloquial", "sophisticated"], correctIndex: 2, explanation: "'Colloquial' describes casual, everyday speech." },
      { sentence: "The ___ of the novel showed the character's internal struggle.", options: ["diction", "syntax", "theme", "tone"], correctIndex: 2, explanation: "'Theme' is the underlying message or idea." },
      { sentence: "Her ___was sarcastic, making the joke even funnier.", options: ["tone", "diction", "voice", "syntax"], correctIndex: 0, explanation: "'Tone' describes the writer's attitude." },
    ];
  }
  if (islandId === "i8") {
    return [
      { sentence: "Use a ___ to separate two independent clauses.", options: ["semicolon", "comma", "colon", "dash"], correctIndex: 0, explanation: "A semicolon joins closely related independent clauses." },
      { sentence: "The ingredients are___flour, sugar, and eggs.", options: [": ", ", ", "; ", "— "], correctIndex: 0, explanation: "A colon introduces a list." },
      { sentence: "She ran to the store___and bought milk.", options: [", ", "; ", "— ", ": "], correctIndex: 0, explanation: "A comma separates a dependent and independent clause." },
    ];
  }
  return [];
}

function generateCategoryRushK6(islandId: string): CategoryRushRound[] {
  if (islandId === "i2") {
    return [
      {
        items: [
          { text: "he", category: "personal" },
          { text: "myself", category: "reflexive" },
          { text: "who", category: "relative" },
          { text: "anyone", category: "indefinite" },
          { text: "yourself", category: "reflexive" },
          { text: "whoever", category: "relative" },
        ],
        categories: ["personal", "reflexive", "relative", "indefinite"],
      },
      {
        items: [
          { text: "she", category: "personal" },
          { text: "herself", category: "reflexive" },
          { text: "which", category: "relative" },
          { text: "somebody", category: "indefinite" },
          { text: "themselves", category: "reflexive" },
          { text: "what", category: "relative" },
        ],
        categories: ["personal", "reflexive", "relative", "indefinite"],
      },
    ];
  }
  if (islandId === "i9") {
    return [
      {
        items: [
          { text: "formal writing", category: "formal" },
          { text: "casual chat", category: "informal" },
          { text: "academic paper", category: "formal" },
          { text: "text message", category: "informal" },
          { text: "official letter", category: "formal" },
          { text: "hashtag comment", category: "informal" },
        ],
        categories: ["formal", "informal"],
      },
    ];
  }
  return [];
}

function generateGrammarMatchK6(islandId: string): GrammarMatchRound[] {
  if (islandId === "i4") {
    return [
      {
        question: "Match clause types with their definitions:",
        items: [
          { text: "When the bell rang", id: "1" },
          { text: "who loves ice cream", id: "2" },
          { text: "the student left", id: "3" },
          { text: "because it was raining", id: "4" },
        ],
        pairs: { "1": "Adverbial clause (time)", "2": "Relative clause (modifies noun)", "3": "Independent clause", "4": "Adverbial clause (reason)" },
        explanation: "Different clauses serve different grammatical functions.",
      },
    ];
  }
  if (islandId === "i6") {
    return [
      {
        question: "Match analogies with their relationships:",
        items: [
          { text: "doctor:heal", id: "1" },
          { text: "book:read", id: "2" },
          { text: "happy:sad", id: "3" },
        ],
        pairs: { "1": "Agent:Action (person does job)", "2": "Object:Use (thing's purpose)", "3": "Opposite (antonyms)" },
        explanation: "Analogies show word relationships.",
      },
    ];
  }
  return [];
}

function generateWordSortK6(islandId: string): WordSortRound[] {
  if (islandId === "i5") {
    return [
      {
        words: ["un-", "pre-", "re-", "dis-", "mis-", "over-"],
        categories: ["prefix", "suffix"],
        wordCategories: { "un-": "prefix", "pre-": "prefix", "re-": "prefix", "dis-": "prefix", "mis-": "prefix", "over-": "prefix" },
      },
    ];
  }
  return [];
}

function generateSentenceBuilderK6(islandId: string): SentenceBuilderRound[] {
  if (islandId === "i3") {
    return [
      {
        parts: [
          { type: "text", value: "The student who studied hard" },
          { type: "blank", options: ["passed", "is passing", "passes"] },
          { type: "text", value: "the difficult exam." },
        ],
        correctFill: "passed",
        explanation: "The relative clause modifies 'student'; past tense matches the action.",
      },
    ];
  }
  if (islandId === "i4") {
    return [
      {
        parts: [
          { type: "text", value: "Although the weather was bad" },
          { type: "blank", options: ["we went", "we go", "we're going"] },
          { type: "text", value: "to the beach." },
        ],
        correctFill: "we went",
        explanation: "'Although' introduces a contrast clause; past tense is consistent.",
      },
    ];
  }
  return [];
}

function generateSpellRaceK6(islandId: string): SpellRaceRound[] {
  return [];
}

function getExplorerContentK6(islandId: string, gameType: string): any {
  switch (gameType) {
    case "fill-gap":
      return generateFillGapK6(islandId);
    case "category-rush":
      return generateCategoryRushK6(islandId);
    case "grammar-match":
      return generateGrammarMatchK6(islandId);
    case "word-sort":
      return generateWordSortK6(islandId);
    case "sentence-builder":
      return generateSentenceBuilderK6(islandId);
    case "spell-race":
      return generateSpellRaceK6(islandId);
    case "phonics":
      return [
        { sound: "/ɪ/", words: ["bit", "hill", "ship", "fish", "sit", "wind"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /ɪ/ sound is the short 'i' vowel sound" },
        { sound: "/ə/", words: ["about", "system", "sofa", "pencil", "human", "animal"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /ə/ (schwa) sound is the most common vowel sound in English" },
        { sound: "/ɔɪ/", words: ["boy", "coin", "joy", "noise", "voice", "choice"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /ɔɪ/ sound combines 'o' and 'i' sounds" },
        { sound: "/ɪŋ/", words: ["ring", "sing", "thing", "string", "bring", "wing"], correctIndices: [0, 1, 2, 3, 4, 5], explanation: "The /ɪŋ/ sound occurs at the end of '-ing' words" },
      ];
    case "picture-vocab":
      return [
        { emoji: "📚", word: "analysis", options: ["adventure", "analysis", "action", "argument"], correctIndex: 1, sentence: "Literary analysis examines deeper meanings in text." },
        { emoji: "🎬", word: "narrative", options: ["nature", "native", "narrative", "narrow"], correctIndex: 2, sentence: "The narrative structure of this novel is complex." },
        { emoji: "💬", word: "dialogue", options: ["diagonal", "dialogue", "danger", "debate"], correctIndex: 1, sentence: "The dialogue reveals much about the characters' personalities." },
        { emoji: "🎭", word: "protagonist", options: ["protection", "protagonist", "previous", "proposed"], correctIndex: 1, sentence: "The protagonist faces internal conflicts throughout the story." },
        { emoji: "✨", word: "symbolism", options: ["sympathy", "symbol", "symbolism", "symmetric"], correctIndex: 2, sentence: "Symbolism is crucial to understanding this author's work." },
      ];
    case "rhyme-match":
      return [
        { targetWord: "analyze", options: ["realize", "rise", "surprise", "emphasize"], correctIndex: 0, rhymePattern: "-yze" },
        { targetWord: "structure", options: ["future", "puncture", "feature", "lecture"], correctIndex: 1, rhymePattern: "-ture" },
        { targetWord: "identity", options: ["ability", "mystery", "society", "community"], correctIndex: 1, rhymePattern: "-ity" },
        { targetWord: "voice", options: ["choice", "noise", "rejoice", "invoice"], correctIndex: 0, rhymePattern: "-oice" },
        { targetWord: "represent", options: ["prevent", "resent", "event", "present"], correctIndex: 0, rhymePattern: "-ent" },
      ];
    case "word-build":
      return [
        { parts: ["dis", "agree"], correctOrder: [0, 1], resultWord: "disagree", hint: "prefix + root", explanation: "'dis-' means not or opposite of" },
        { parts: ["sub", "conscious"], correctOrder: [0, 1], resultWord: "subconscious", hint: "prefix + root", explanation: "'sub-' means under or below" },
        { parts: ["analyze", "able"], correctOrder: [0, 1], resultWord: "analyzable", hint: "root + suffix", explanation: "'-able' means capable of or worthy of" },
        { parts: ["im", "possible"], correctOrder: [0, 1], resultWord: "impossible", hint: "prefix + root", explanation: "'im-' is a form of 'in-' meaning not" },
        { parts: ["interpret", "ation"], correctOrder: [0, 1], resultWord: "interpretation", hint: "root + suffix", explanation: "'-ation' converts verbs to nouns" },
      ];
    case "reading-comp":
      return [
        { passage: "In classic literature, authors often use symbolism to convey deeper meanings. The white whale in Moby Dick represents different things to different characters. Captain Ahab sees it as evil, while others view it as a force of nature.", question: "What does symbolism do in literature?", options: ["Makes stories longer", "Conveys deeper meanings", "Adds more characters", "Improves grammar"], correctIndex: 1 },
        { passage: "The protagonist's journey in the novel reflects the author's views on society. Through conflicts and growth, the character challenges social norms. This narrative technique allows readers to question their own beliefs.", question: "How does the protagonist's journey function?", options: ["It entertains readers", "It reflects author's views and challenges norms", "It explains historical facts", "It teaches grammar rules"], correctIndex: 1 },
        { passage: "Analytical reading requires examining the text closely for hidden meanings. Readers must consider symbolism, character motivation, and thematic elements. This deeper engagement transforms passive reading into active interpretation.", question: "What is analytical reading?", options: ["Reading quickly", "Examining text for hidden meanings", "Memorizing passages", "Reading aloud"], correctIndex: 1 },
      ];
    case "tense-explorer":
      return [
        { sentence: "By the time he ___ the novel, he ___ it three times.", tenseLabel: "Past Perfect", options: ["finished / had read", "finishes / reads", "finish / read", "was finishing / reading"], correctIndex: 0, explanation: "Past perfect shows which action happened first" },
        { sentence: "If I ___ more about symbolism, I ___ the story better.", tenseLabel: "Second Conditional", options: ["knew / would understand", "know / understand", "have known / would have understood", "knew / understand"], correctIndex: 0, explanation: "Second conditional for hypothetical situations in present/future" },
        { sentence: "The author ___ been writing for decades when she finally ___ published.", tenseLabel: "Past Perfect + Simple Past", options: ["has / got", "had / got", "has / gets", "had / gets"], correctIndex: 1, explanation: "Shows timeline: had been writing (longer action) then got published" },
      ];
    case "memory-pair":
      return [
        { word: "metaphor", match: "🎭" }, { word: "imagery", match: "🎨" },
        { word: "conflict", match: "⚔️" }, { word: "resolution", match: "✅" },
        { word: "theme", match: "🎯" }, { word: "irony", match: "😏" },
        { word: "plot", match: "📖" }, { word: "climax", match: "🔥" },
      ];
    case "pronunciation":
      return [
        { word: "analysis", phonetic: "/əˈnæləsɪs/", syllables: ["an", "al", "y", "sis"], stressIndex: 1, options: ["1st", "2nd", "3rd", "4th"], correctIndex: 1, questionType: "stress" as const, explanation: "Stress on second syllable: a-NAL-y-sis" },
        { word: "narrative", phonetic: "/ˈnærətɪv/", syllables: ["nar", "ra", "tive"], stressIndex: 0, options: ["1st", "2nd", "3rd"], correctIndex: 0, questionType: "stress" as const, explanation: "Stress on first syllable: NAR-ra-tive" },
        { word: "symbolism", phonetic: "/ˈsɪmbəlɪzəm/", syllables: ["sym", "bol", "ism"], stressIndex: 0, options: ["1st", "2nd", "3rd"], correctIndex: 0, questionType: "stress" as const, explanation: "Stress on first syllable: SYM-bol-ism" },
      ];
    default:
      return [];
  }
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function AstroEnglishK6Page() {
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

  const avatarIsland = K6_ISLANDS.find(i => i.id === avatarIslandId) ?? K6_ISLANDS[0];

  const avatarProps = {
    gender, activeSkin, activeFace,
    activeTop, activeBottom, activeShoe, activeCape, activeGlasses, activeGloves,
    activeHat, activeTrail,
  };

  useEffect(() => {
    const p = loadK6Progress();
    setProgress(p);
    const lastDone = [...K6_ISLANDS].reverse().find(i => p.completedIslands.includes(i.id));
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

    const isExplorer = ["fill-gap", "category-rush", "grammar-match", "word-sort", "sentence-builder", "spell-race", "phonics", "picture-vocab", "rhyme-match", "word-build", "reading-comp", "tense-explorer", "memory-pair", "pronunciation", "en6-pronoun-k6-explorer", "en6-pronoun-precision-explorer", "en6-sentence-structure-explorer", "en6-complex-clause-explorer", "en6-word-builder-explorer", "en6-vocabulary-explorer", "en6-academic-k6-explorer", "en6-punctuation-k6-explorer", "en6-rhetoric-explorer"].includes(mission.gameType);

    if (isExplorer) {
      setQuestions([]);
    } else {
      const qCount = mission.gameType === "star-match" ? 20 : 10;
      const qs = generateIslandQuestionsK6(activeIsland, lang as Lang, qCount);
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
    const newProgress = completeMissionK6(progress, activeIsland.id, activeMission.id, stars);
    const isNowIslandDone = newProgress.completedIslands.includes(activeIsland.id);
    setJustUnlockedIsland(!wasIslandDone && isNowIslandDone);
    saveK6Progress(newProgress);
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
    const qs = generateCheckpointQuestionsK6(testId, lang as Lang, 7);
    setQuestions(qs);
    setScreen("rocket-launch");
  }, [lang]);

  const startCheckpointQuiz = useCallback(() => {
    if (!activeTestId) return;
    const qs = generateCheckpointQuestionsK6(activeTestId, lang as Lang, 10);
    setQuestions(qs);
    setScreen("checkpoint-quiz");
  }, [activeTestId, lang]);

  const handleCheckpointDone = useCallback((score: number, total: number) => {
    if (!activeTestId) return;
    setCheckpointScore({ score, total });

    const newProgress = completeTestK6(progress, activeTestId);
    saveK6Progress(newProgress);
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

  const bgColor = activeIsland?.color ?? "#FF9500";

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
            <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{K6_LABEL[lang] ?? K6_LABEL.en}</p>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 text-xs font-bold">
            {totalDone}/9
          </div>
        </div>
        <div className="relative z-10 px-4 mb-2 flex-shrink-0">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #FF9500, #B44DFF)" }}
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
    const totalStars = islandTotalStarsK6(progress, activeIsland.id);
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
            const done = isMissionDoneK6(progress, activeIsland.id, mission.id);
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
          <FillGapExplorer rounds={getExplorerContentK6(activeIsland.id, "fill-gap")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "category-rush" && activeIsland && (
          <CategoryRushExplorer {...getExplorerContentK6(activeIsland.id, "category-rush")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "grammar-match" && activeIsland && (
          <GrammarMatchExplorer rounds={getExplorerContentK6(activeIsland.id, "grammar-match")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "word-sort" && activeIsland && (
          <WordSortExplorer rounds={getExplorerContentK6(activeIsland.id, "word-sort")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "sentence-builder" && activeIsland && (
          <SentenceBuilderExplorer rounds={getExplorerContentK6(activeIsland.id, "sentence-builder")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "spell-race" && activeIsland && (
          <SpellRaceExplorer rounds={getExplorerContentK6(activeIsland.id, "spell-race")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "phonics" && activeIsland && (
          <PhonicsExplorer rounds={getExplorerContentK6(activeIsland.id, "phonics")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "picture-vocab" && activeIsland && (
          <PictureVocabExplorer rounds={getExplorerContentK6(activeIsland.id, "picture-vocab")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "rhyme-match" && activeIsland && (
          <RhymeMatchExplorer rounds={getExplorerContentK6(activeIsland.id, "rhyme-match")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "word-build" && activeIsland && (
          <WordBuildExplorer rounds={getExplorerContentK6(activeIsland.id, "word-build")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "reading-comp" && activeIsland && (
          <ReadingCompExplorer rounds={getExplorerContentK6(activeIsland.id, "reading-comp")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "tense-explorer" && activeIsland && (
          <TenseExplorer rounds={getExplorerContentK6(activeIsland.id, "tense-explorer")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "memory-pair" && activeIsland && (
          <MemoryPairExplorer pairs={getExplorerContentK6(activeIsland.id, "memory-pair")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "pronunciation" && activeIsland && (
          <PronunciationExplorer rounds={getExplorerContentK6(activeIsland.id, "pronunciation")} color={bgColor} onDone={handleMissionDone} lang={lang} />
        )}
        {screen === "en6-pronoun-k6-explorer" && (
          <PronounK6Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en6-sentence-structure-explorer" && (
          <SentenceStructureK6Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en6-vocabulary-explorer" && (
          <VocabularyK6Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
        {screen === "en6-rhetoric-explorer" && (
          <RhetoricK6Explorer color={bgColor} lang={lang} onDone={handleMissionDone} />
        )}
      </div>
    </div>
  );

  if (["orbit-quiz", "black-hole", "gravity-sort", "star-match", "speed-round", "fill-gap", "category-rush", "grammar-match", "word-sort", "sentence-builder", "spell-race", "phonics", "picture-vocab", "rhyme-match", "word-build", "reading-comp", "tense-explorer", "memory-pair", "pronunciation", "en6-pronoun-k6-explorer", "en6-pronoun-precision-explorer", "en6-sentence-structure-explorer", "en6-complex-clause-explorer", "en6-word-builder-explorer", "en6-vocabulary-explorer", "en6-academic-k6-explorer", "en6-punctuation-k6-explorer", "en6-rhetoric-explorer"].includes(screen)) return (
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
        grade={6}
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
    const testTopicsK6: Record<string, Record<string, string>> = {
      en: { test1: "Pronouns, Cases, and Agreement", test2: "Sentence Patterns, Word Formation, Vocabulary", test3: "Synonyms, Punctuation, Rhetorical Devices" },
      hu: { test1: "Névmások, eset, és egyezés", test2: "Mondatminták, szóképzés, szókincs", test3: "Szinonimák, központozás, retorikai eszközök" },
      de: { test1: "Pronomen, Fälle und Kongruenz", test2: "Satzmuster, Wortbildung, Wortschatz", test3: "Synonyme, Interpunktion, Rhetorische Geräte" },
      ro: { test1: "Pronume, cazuri și acord", test2: "Modele de propoziții, formare de cuvinte, vocabular", test3: "Sinonime, punctuație, dispozitive retoriene" },
    };
    const topicDesc = (testTopicsK6[lang] ?? testTopicsK6.en)[activeTestId] ?? "";
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
