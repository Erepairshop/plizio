"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { G1_ICONS, G1_WORD_LABELS } from "@/components/grade1-visual/G1Icons";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowLeft, Check, X as XIcon, RotateCcw, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores, checkNewMilestones } from "@/lib/milestones";
import RewardReveal from "@/components/RewardReveal";
import MilestonePopup from "@/components/MilestonePopup";
import ModernPaperTest from "@/components/ModernPaperTest";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender } from "@/lib/gender";
import { getActiveSkin, getSkinDef } from "@/lib/skins";
import { getActiveFace, getFaceDef } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import {
  DEUTSCH_CURRICULUM,
  getDeutschQuestions,
  calculateDeutschMark,
  getSubtopicHint,
  type DeutschQuestion,
  type DeutschTheme,
  type DeutschCountry,
} from "@/lib/deutschCurriculum";
import { getRandomPassage, type Lesepassage, type LeseQuestion } from "@/lib/deutschLesetest";
import { generateForSubtopics } from "@/lib/deutschGenerators";
import { checkAnswer } from "@/lib/deutschValidation";
import { playCorrect, playIncorrect, playClick } from "@/lib/soundEffects";

// ─── DEUTSCH FLOATING BACKGROUND ─────────────────────────────────────────────

const DE_CHARS = ["A","B","C","Ä","Ö","Ü","ß","!","?",",",".",";","Z","W","R","S","T"];
const DE_COLORS = ["#FFD700","#FF4444","#00D4FF","#FFFFFF","#B44DFF"];

function DeutschBackground() {
  const items = useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    char: DE_CHARS[i % DE_CHARS.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 16 + Math.random() * 48,
    duration: 8 + Math.random() * 16,
    delay: Math.random() * 8,
    color: DE_COLORS[Math.floor(Math.random() * DE_COLORS.length)],
    opacity: 0.04 + Math.random() * 0.10,
  })), []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((it, i) => (
        <div
          key={i}
          className="absolute font-black select-none"
          style={{
            left: `${it.x}%`,
            top: `${it.y}%`,
            fontSize: it.size,
            color: it.color,
            opacity: it.opacity,
            animation: `floatDE ${it.duration}s ease-in-out ${it.delay}s infinite alternate`,
          }}
        >
          {it.char}
        </div>
      ))}
      <style>{`
        @keyframes floatDE {
          0%   { transform: translateY(0px) rotate(-5deg); }
          100% { transform: translateY(-30px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}

// ─── TYPEN ────────────────────────────────────────────────────────────────────

type Screen = "country" | "grade" | "topics" | "test" | "reward" | "result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory";

interface TestQuestion {
  type: "mcq" | "typing" | "bild-wort" | "anlaut-bild";
  question: string;
  options?: string[];
  correct?: number;
  answer?: string | string[];
  hint?: string;
  subtopic?: string;
  passageText?: string;
  passageTitle?: string;
}

// ─── AVATAR LADEN ─────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useAvatarProps() {
  const [props, setProps] = useState<Record<string, any>>({});
  useEffect(() => {
    const gender = getGender();
    const activeSkin = getSkinDef(getActiveSkin());
    const activeFace = getFaceDef(getActiveFace());
    const topId = getActive("top");
    const bottomId = getActive("bottom");
    const shoeId = getActive("shoe");
    const capeId = getActive("cape");
    const glassesId = getActive("glasses");
    const glovesId = getActive("gloves");
    const hatId = getActiveHat();
    const trailId = getActiveTrail();
    setProps({
      gender,
      activeSkin,
      activeFace,
      activeTop: topId ? getTopDef(topId) : null,
      activeBottom: bottomId ? getBottomDef(bottomId) : null,
      activeShoe: shoeId ? getShoeDef(shoeId) : null,
      activeCape: capeId ? getCapeDef(capeId) : null,
      activeGlasses: glassesId ? getGlassesDef(glassesId) : null,
      activeGloves: glovesId ? getGloveDef(glovesId) : null,
      activeHat: hatId ? getHatDef(hatId) : null,
      activeTrail: trailId ? getTrailDef(trailId) : null,
    });
  }, []);
  return props;
}

// ─── HAUPTKOMPONENTE ──────────────────────────────────────────────────────────

export default function DeutschTestPage() {
  const avatarProps = useAvatarProps();
  // Check if country was already selected (persisted)
  const savedCountry = typeof window !== "undefined"
    ? (localStorage.getItem("deutschtest_country") as DeutschCountry | null)
    : null;
  const [screen, setScreen] = useState<Screen>(savedCountry ? "grade" : "country");
  const [country, setCountry] = useState<DeutschCountry>(savedCountry ?? "DE");
  const [grade, setGrade] = useState(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [includeLesetest, setIncludeLesetest] = useState(false);
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [answers, setAnswers] = useState<{ correct: boolean; given: string; expected: string }[]>([]);
  const [paperAnswers, setPaperAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [avatarMood, setAvatarMood] = useState<AvatarMood>("idle");
  const [earnedCard, setEarnedCard] = useState<string | null>(null);
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setDateStr(new Date().toLocaleDateString("de-DE", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
  }, []);

  const themes: DeutschTheme[] = DEUTSCH_CURRICULUM[grade] ?? [];
  const totalQ = questions.length;
  const answeredCount = Object.keys(paperAnswers).length;

  // ─── FRAGEN AUFBAUEN ────────────────────────────────────────────────────────

  // ─── FRAGEN AUFBAUEN — min. 10 Gruppen à 3, round-robin ─────────────────────

  function buildTest(g: number, subtopicIds: string[], withLesetest: boolean) {
    const ids = subtopicIds.length > 0 ? subtopicIds : [];
    // Always at least 10 groups (30 questions); more if >10 topics selected
    const groupCount = ids.length > 0 ? Math.max(ids.length, 10) : 0;

    // Build pools per unique topic (shuffled, deduplicated)
    const pools: Record<string, TestQuestion[]> = {};
    for (const sid of ids) {
      const combined = [
        ...getDeutschQuestions(g, [sid], 20),
        ...generateForSubtopics([sid], 12),
      ];
      for (let i = combined.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combined[i], combined[j]] = [combined[j], combined[i]];
      }
      const seen = new Set<string>();
      pools[sid] = combined.filter((q) => {
        const k = q.question.slice(0, 60);
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
    }

    // Assign topics to groups round-robin, then pick 3 per group
    // Track pointer into each topic's pool
    const ptr: Record<string, number> = {};
    const allQs: TestQuestion[] = [];

    for (let g2 = 0; g2 < groupCount; g2++) {
      const sid = ids[g2 % ids.length];
      const pool = pools[sid] ?? [];
      const start = ptr[sid] ?? 0;
      for (let k = 0; k < 3; k++) {
        const idx = (start + k) % Math.max(pool.length, 1);
        if (pool[idx]) allQs.push({ ...pool[idx] });
      }
      ptr[sid] = (start + 3) % Math.max(pool.length, 1);
    }

    if (withLesetest) {
      const passage = getRandomPassage(g);
      if (passage) {
        const leseQs: TestQuestion[] = passage.questions.slice(0, 3).map((lq) => ({
          ...lq,
          passageText: passage.text,
          passageTitle: passage.title,
        }));
        allQs.push(...leseQs);
      }
    }

    return allQs;
  }

  // ─── TEST STARTEN ────────────────────────────────────────────────────────────

  function startTest() {
    if (selectedIds.length === 0 && !includeLesetest) return;
    const qs = buildTest(grade, selectedIds, includeLesetest);
    if (qs.length === 0) return;
    setQuestions(qs);
    setAnswers([]);
    setPaperAnswers({});
    setSubmitted(false);
    setAvatarMood("focused");
    setScreen("test");
  }

  // ─── ABGEBEN ─────────────────────────────────────────────────────────────────

  function handleAbgeben() {
    const allAnswers = questions.map((q, i) => {
      const given = paperAnswers[i] ?? "";
      let isCorrect = false;
      let expected = "";
      if (q.type === "mcq" || q.type === "bild-wort" || q.type === "anlaut-bild") {
        const givenIdx = parseInt(given);
        isCorrect = !isNaN(givenIdx) && givenIdx === q.correct;
        if (q.type === "bild-wort") {
          expected = G1_WORD_LABELS[q.options?.[q.correct ?? 0] ?? ""] ?? q.options?.[q.correct ?? 0] ?? "";
        } else {
          expected = q.options?.[q.correct ?? 0] ?? "";
        }
      } else {
        isCorrect = checkAnswer(given, q.answer ?? "", grade);
        expected = Array.isArray(q.answer) ? q.answer[0] : q.answer ?? "";
      }
      return { correct: isCorrect, given, expected };
    });

    const correctCount = allAnswers.filter((a) => a.correct).length;
    if (correctCount / questions.length >= 0.5) playCorrect(); else playIncorrect();

    setAnswers(allAnswers);
    setSubmitted(true);
    setAvatarMood(correctCount / questions.length >= 0.5 ? "victory" : "disappointed");

    setTimeout(() => finishTest(allAnswers), 2500);
  }

  // ─── TEST BEENDEN ────────────────────────────────────────────────────────────

  function finishTest(allAnswers: typeof answers) {
    const correct = allAnswers.filter((a) => a.correct).length;
    const total = allAnswers.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    incrementTotalGames();
    if (pct === 100) incrementPerfectScores();
    checkNewMilestones();

    const rarity = calculateRarity(correct, total, 0, 85);
    const card = {
      id: generateCardId(),
      game: "deutschtest",
      theme: `Klasse ${grade}`,
      rarity,
      score: correct,
      total,
      date: new Date().toISOString().split("T")[0],
    };
    saveCard(card);
    window.dispatchEvent(new Event("plizio-cards-changed"));
    setEarnedCard(rarity);
    setScreen("reward");
  }

  // ─── NEUSTART ────────────────────────────────────────────────────────────────

  function restart() {
    setScreen("topics");
    setEarnedCard(null);
    setPaperAnswers({});
    setSubmitted(false);
    setAvatarMood("idle");
  }

  // ─── KLASSE WECHSELN ─────────────────────────────────────────────────────────

  function changeGrade(g: number) {
    setGrade(g);
    setSelectedIds([]);
    setIncludeLesetest(false);
    setScreen("topics");
  }

  // ─── SUBTOPIC TOGGLE ─────────────────────────────────────────────────────────

  function toggleSubtopic(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const scoreCount = answers.filter((a) => a.correct).length;
  const scorePct = answers.length > 0 ? Math.round((scoreCount / answers.length) * 100) : 0;
  const mark = calculateDeutschMark(scorePct, country);

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white relative overflow-hidden">
      {/* Avatar */}
      <div className="fixed bottom-5 right-5 w-32 h-32 sm:w-40 sm:h-40 z-50 pointer-events-none">
        <AvatarCompanion
          {...avatarProps}
          mood={avatarMood}
          jumpTrigger={{ reaction: null, timestamp: 0 }}
          fixed={false}
        />
      </div>

      <AnimatePresence mode="wait">

        {/* ── LAND WÄHLEN ───────────────────────────────────────────────────── */}
        {screen === "country" && (
          <motion.div
            key="country"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            <DeutschBackground />
            <Link href="/" className="absolute top-5 left-5 z-10">
              <motion.div
                className="p-2 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={20} className="text-white/60" />
              </motion.div>
            </Link>

            <motion.div
              className="relative z-10 flex flex-col items-center gap-3 mb-10"
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-4 rounded-2xl"
                style={{ background: "rgba(0,212,255,0.1)", boxShadow: "0 0 30px rgba(0,212,255,0.2)" }}
              >
                <BookOpen
                  size={42}
                  className="text-[#00D4FF]"
                  style={{ filter: "drop-shadow(0 0 12px rgba(0,212,255,0.6))" }}
                />
              </motion.div>
              <h1
                className="text-4xl font-black tracking-wider text-white"
                style={{ textShadow: "0 0 20px rgba(0,212,255,0.4)" }}
              >
                DEUTSCH TEST
              </h1>
              <p className="text-white/50 text-sm">Wähle dein Land</p>
            </motion.div>

            <motion.div
              className="relative z-10 flex flex-col gap-3 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              {([
                { code: "DE", flag: "🇩🇪", label: "Deutschland", sub: "Note 1–6" },
                { code: "AT", flag: "🇦🇹", label: "Österreich",  sub: "Note 1–5" },
                { code: "CH", flag: "🇨🇭", label: "Schweiz",     sub: "Note 1–6 (6=best)" },
              ] as { code: DeutschCountry; flag: string; label: string; sub: string }[]).map((c, i) => (
                <motion.button
                  key={c.code}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setCountry(c.code);
                    localStorage.setItem("deutschtest_country", c.code);
                    setScreen("grade");
                  }}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all text-left"
                  style={{
                    background: "rgba(0,212,255,0.05)",
                    borderColor: "rgba(0,212,255,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.12)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.05)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.2)";
                  }}
                >
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <div className="font-black text-white text-base">{c.label}</div>
                    <div className="text-[11px] text-white/40">{c.sub}</div>
                  </div>
                  <ChevronRight size={18} className="ml-auto text-[#00D4FF]/50" />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* ── KLASSE WÄHLEN ─────────────────────────────────────────────────── */}
        {screen === "grade" && (
          <motion.div
            key="grade"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            <DeutschBackground />
            <motion.button
              onClick={() => setScreen("country")}
              className="absolute top-5 left-5 z-10 p-2 rounded-xl bg-white/5 border border-white/10"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft size={20} className="text-white/60" />
            </motion.button>

            <motion.div
              className="relative z-10 flex flex-col items-center gap-3 mb-8"
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-4 rounded-2xl"
                style={{ background: "rgba(0,212,255,0.1)", boxShadow: "0 0 30px rgba(0,212,255,0.2)" }}
              >
                <BookOpen
                  size={42}
                  className="text-[#00D4FF]"
                  style={{ filter: "drop-shadow(0 0 12px rgba(0,212,255,0.6))" }}
                />
              </motion.div>
              <h1
                className="text-4xl font-black tracking-wider text-white"
                style={{ textShadow: "0 0 20px rgba(0,212,255,0.4)" }}
              >
                DEUTSCH TEST
              </h1>
              <p className="text-white/50 text-sm">
                {country === "DE" ? "🇩🇪" : country === "AT" ? "🇦🇹" : "🇨🇭"} Wähle deine Klassenstufe
              </p>
            </motion.div>

            <motion.div
              className="relative z-10 grid grid-cols-4 gap-3 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((g, i) => (
                <motion.button
                  key={g}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => changeGrade(g)}
                  className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-0.5
                             border transition-all"
                  style={{
                    background: "rgba(0,212,255,0.05)",
                    borderColor: "rgba(0,212,255,0.2)",
                    boxShadow: "0 0 0 0 rgba(0,212,255,0)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.15)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.7)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 16px rgba(0,212,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.05)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,212,255,0.2)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 0 rgba(0,212,255,0)";
                  }}
                >
                  <span className="text-xs text-white/40 font-semibold">Kl.</span>
                  <span className="text-2xl font-black text-[#00D4FF]">{g}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* ── THEMEN WÄHLEN ─────────────────────────────────────────────────── */}
        {screen === "topics" && (
          <motion.div
            key="topics"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="relative min-h-screen flex flex-col p-4 pb-36 max-w-lg mx-auto overflow-hidden"
          >
            <DeutschBackground />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-3 pt-4 mb-1">
              <motion.button
                onClick={() => setScreen("grade")}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={18} />
              </motion.button>
              <div
                className="p-1.5 rounded-lg"
                style={{ background: "rgba(0,212,255,0.1)" }}
              >
                <BookOpen size={18} className="text-[#00D4FF]" />
              </div>
              <span className="font-black text-[#00D4FF] tracking-wide text-sm">DEUTSCH TEST</span>
              <div className="ml-auto flex items-center gap-2">
                {/* Small country picker */}
                <select
                  value={country}
                  onChange={(e) => {
                    const c = e.target.value as DeutschCountry;
                    setCountry(c);
                    localStorage.setItem("deutschtest_country", c);
                  }}
                  className="text-xs font-bold rounded-full px-2 py-1 border outline-none cursor-pointer"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    borderColor: "rgba(0,212,255,0.25)",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  <option value="DE">🇩🇪 DE</option>
                  <option value="AT">🇦🇹 AT</option>
                  <option value="CH">🇨🇭 CH</option>
                </select>
                <span className="text-white/60 text-xs font-bold bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-3 py-1 rounded-full">
                  Kl. {grade}
                </span>
              </div>
            </div>
            <p className="relative z-10 text-white/35 text-xs mb-4 ml-10">Themen für deinen Test auswählen</p>

            {/* Themes + Subtopics */}
            <div className="relative z-10 flex flex-col gap-2.5">
              {themes.map((theme) => {
                const availSubs = theme.subtopics.filter((s) => s.questions.length > 0);
                const allSel = availSubs.length > 0 && availSubs.every((s) => selectedIds.includes(s.id));
                const toggleAll = () => {
                  if (allSel) {
                    setSelectedIds((prev) => prev.filter((id) => !availSubs.some((s) => s.id === id)));
                  } else {
                    setSelectedIds((prev) => {
                      const next = [...prev];
                      availSubs.forEach((s) => { if (!next.includes(s.id)) next.push(s.id); });
                      return next;
                    });
                  }
                };
                return (
                  <div
                    key={theme.id}
                    className="rounded-2xl overflow-hidden border"
                    style={{
                      background: "rgba(18,18,42,0.85)",
                      borderColor: `${theme.color}22`,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {/* Theme Header */}
                    <div
                      className="flex items-center gap-2.5 px-4 py-3"
                      style={{ borderLeft: `3px solid ${theme.color}` }}
                    >
                      <span className="text-xl">{theme.icon}</span>
                      <span className="font-bold text-sm flex-1" style={{ color: theme.color }}>{theme.name}</span>
                      {availSubs.length > 1 && (
                        <button
                          onClick={toggleAll}
                          className="text-[10px] px-2 py-0.5 rounded-full border transition-all font-semibold"
                          style={{
                            color: allSel ? theme.color : "rgba(255,255,255,0.4)",
                            borderColor: allSel ? `${theme.color}80` : "rgba(255,255,255,0.15)",
                            background: allSel ? `${theme.color}15` : "transparent",
                          }}
                        >
                          {allSel ? "Alle ✓" : "Alle"}
                        </button>
                      )}
                    </div>
                    {/* Subtopics */}
                    <div className="px-3 pb-3 pt-1 flex flex-col gap-1.5">
                      {theme.subtopics.map((sub) => {
                        const sel = selectedIds.includes(sub.id);
                        const empty = sub.questions.length === 0;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => !empty && toggleSubtopic(sub.id)}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-sm transition-all
                              ${sel
                                ? "text-white"
                                : empty
                                  ? "text-white/20 cursor-not-allowed"
                                  : "text-white/60 hover:text-white"
                              }`}
                            style={{
                              background: sel ? `${theme.color}18` : empty ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                              border: sel ? `1px solid ${theme.color}60` : "1px solid rgba(255,255,255,0.07)",
                            }}
                          >
                            <div
                              className="w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all"
                              style={{
                                background: sel ? theme.color : "transparent",
                                borderColor: sel ? theme.color : "rgba(255,255,255,0.25)",
                              }}
                            >
                              {sel && <Check size={10} strokeWidth={3} className="text-black" />}
                            </div>
                            <span className="flex-1">{sub.name}</span>
                            {empty
                              ? <span className="text-[10px] text-white/20">bald</span>
                              : <span className="text-[10px]" style={{ color: `${theme.color}80` }}>15 Fr.</span>
                            }
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Lesetest */}
              <motion.button
                onClick={() => setIncludeLesetest((v) => !v)}
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all border"
                style={{
                  background: includeLesetest ? "rgba(255,215,0,0.08)" : "rgba(18,18,42,0.85)",
                  borderColor: includeLesetest ? "rgba(255,215,0,0.4)" : "rgba(255,215,0,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all"
                  style={{
                    background: includeLesetest ? "#FFD700" : "rgba(255,215,0,0.08)",
                    borderColor: includeLesetest ? "#FFD700" : "rgba(255,215,0,0.25)",
                  }}
                >
                  {includeLesetest
                    ? <Check size={14} strokeWidth={3} className="text-black" />
                    : <span className="text-base">📖</span>
                  }
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm" style={{ color: includeLesetest ? "#FFD700" : "rgba(255,215,0,0.7)" }}>
                    📖 Lesetest
                  </div>
                  <div className="text-[11px] text-white/35 mt-0.5">Text lesen & Fragen beantworten · 3 Fr.</div>
                </div>
              </motion.button>
            </div>

            {/* Start Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 z-20" style={{ background: "linear-gradient(to top, #0A0A1A 60%, transparent)" }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={startTest}
                disabled={selectedIds.length === 0 && !includeLesetest}
                className="w-full max-w-lg mx-auto block py-4 rounded-2xl font-black text-lg text-black
                           disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #0099CC)",
                  boxShadow: selectedIds.length > 0 || includeLesetest ? "0 0 24px rgba(0,212,255,0.45)" : "none",
                }}
              >
                TEST STARTEN →
                {(selectedIds.length > 0 || includeLesetest) && (
                  <span className="font-normal text-sm ml-2 opacity-70">
                    ({selectedIds.length + (includeLesetest ? 1 : 0)} Bereiche)
                  </span>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* ── TEST ──────────────────────────────────────────────────────────── */}
        {screen === "test" && questions.length > 0 && (
          <ModernPaperTest
            title="Deutsch Test"
            icon="✏️"
            gradeLabel={`Klasse ${grade}`}
            date={dateStr}
            solved={answeredCount}
            total={totalQ}
            onExit={() => setScreen("topics")}
            exitLabel="Zurück"
          >
            {/* All questions at once — lined paper style */}
            <div style={{ fontSize: 14, lineHeight: '28px' }}>
              {questions.map((q, qi) => {
                const userAnswerRaw = paperAnswers[qi];
                const ans = submitted ? answers[qi] : undefined;
                const isCorrect = ans?.correct ?? false;

                // Section header every 3 questions
                const showSection = qi % 3 === 0 && !q.passageText;
                const aufgabeNr = Math.floor(qi / 3) + 1;

                // Show passage once per unique passageTitle
                const showPassage = q.passageText &&
                  (qi === 0 || questions[qi - 1].passageTitle !== q.passageTitle);

                return (
                  <div key={qi}>
                    {/* Passage block */}
                    {showPassage && (
                      <div className="bg-blue-50/80 border-l-4 border-blue-300 rounded-r-lg px-3"
                        style={{ lineHeight: '28px', marginBottom: 28 }}>
                        {q.passageTitle && (
                          <p style={{ lineHeight: '28px' }} className="text-blue-500 text-xs font-bold uppercase">📖 {q.passageTitle}</p>
                        )}
                        <p style={{ lineHeight: '28px' }} className="text-slate-700 text-sm">{q.passageText}</p>
                      </div>
                    )}

                    {/* Aufgabe section header every 3 questions */}
                    {showSection && (
                      <div style={{ height: 28, lineHeight: '28px' }}
                        className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          Aufgabe {aufgabeNr}
                        </span>
                        <span className="flex-1 border-t border-slate-100" />
                      </div>
                    )}

                    {/* Question row — sits on a line, NO fractional padding */}
                    <div style={{ lineHeight: '28px' }} className="flex items-start gap-2">
                      <span className="font-mono text-xs text-slate-400 w-5 text-right shrink-0" style={{ lineHeight: '28px' }}>
                        {qi + 1}.
                      </span>
                      <p className="flex-1 text-slate-800 text-sm font-semibold" style={{ lineHeight: '28px' }}>{q.question}</p>
                      {/* Correction mark after submit */}
                      {submitted && ans && (
                        <span className={`shrink-0 font-bold text-base leading-7 ${isCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                      )}
                    </div>

                    {/* MCQ options — each row sits on one ruled line */}
                    {q.type === "mcq" && q.options && (
                      <div className="ml-7">
                        {q.options.map((opt, oi) => {
                          const isSelected = userAnswerRaw === String(oi);
                          let rowCls = "text-slate-600 hover:bg-blue-50/50 cursor-pointer";
                          let labelCls = "text-slate-300";
                          if (submitted && ans) {
                            if (oi === q.correct) {
                              rowCls = "text-emerald-700 bg-emerald-50/60 cursor-default";
                              labelCls = "text-emerald-500";
                            } else if (isSelected && !isCorrect) {
                              rowCls = "text-red-500 bg-red-50/60 cursor-default line-through";
                              labelCls = "text-red-400";
                            } else {
                              rowCls = "text-slate-300 cursor-default";
                              labelCls = "text-slate-200";
                            }
                          } else if (isSelected) {
                            rowCls = "text-blue-800 bg-blue-50/80 font-semibold cursor-pointer";
                            labelCls = "text-blue-500";
                          }
                          return (
                            <button
                              key={oi}
                              onClick={() => { if (!submitted) { playClick(); setPaperAnswers((prev) => ({ ...prev, [qi]: String(oi) })); } }}
                              disabled={submitted}
                              style={{ height: 28, lineHeight: '28px' }}
                              className={`w-full text-left flex items-center gap-1.5 px-1 text-sm transition-colors ${rowCls}`}
                            >
                              <span className={`font-mono text-xs w-5 text-right shrink-0 ${labelCls}`}>
                                {String.fromCharCode(65 + oi)})
                              </span>
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Bild-Wort: show word → 4 image tiles to click */}
                    {q.type === "bild-wort" && q.options && (
                      <>
                      <div className="ml-7 flex items-center" style={{ height: 28 }}>
                        <span className="text-xs text-slate-400 italic">🖼 Klicke auf das richtige Bild:</span>
                      </div>
                      <div className="ml-7 py-1" style={{ height: 84 }}>
                        <div className="flex gap-2 h-full">
                          {q.options.map((imgKey, oi) => {
                            const Icon = G1_ICONS[imgKey];
                            const isSelected = userAnswerRaw === String(oi);
                            const isRightAnswer = oi === q.correct;
                            let border = "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/30 cursor-pointer";
                            if (submitted) {
                              if (isRightAnswer) border = "border-emerald-400 bg-emerald-50 cursor-default";
                              else if (isSelected && !isCorrect) border = "border-red-400 bg-red-50 cursor-default opacity-60";
                              else border = "border-slate-100 bg-white cursor-default opacity-40";
                            } else if (isSelected) {
                              border = "border-blue-400 bg-blue-50 cursor-pointer ring-1 ring-blue-300";
                            }
                            return (
                              <button
                                key={oi}
                                onClick={() => { if (!submitted) { playClick(); setPaperAnswers((prev) => ({ ...prev, [qi]: String(oi) })); } }}
                                disabled={submitted}
                                className={`flex-1 rounded-lg border-2 flex flex-col items-center justify-center transition-all ${border}`}
                                style={{ height: 76 }}
                              >
                                {Icon ? (
                                  <div style={{ width: 44, height: 44 }}><Icon /></div>
                                ) : (
                                  <span className="text-xs text-slate-400">{imgKey}</span>
                                )}
                                <span className="text-[9px] font-semibold text-slate-400 mt-0.5">
                                  {G1_WORD_LABELS[imgKey] ?? imgKey}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      </>
                    )}

                    {/* Anlaut-Bild: show image → 4 letter buttons */}
                    {q.type === "anlaut-bild" && q.options && (() => {
                      const Icon = G1_ICONS[q.question];
                      return (
                        <>
                        <div className="ml-7 flex items-center" style={{ height: 28 }}>
                          <span className="text-xs text-slate-400 italic">🔤 Mit welchem Buchstaben beginnt das Wort?</span>
                        </div>
                        <div className="ml-7" style={{ height: 84 }}>
                          <div className="flex items-center gap-3 h-full">
                            {/* Image */}
                            <div className="shrink-0 rounded-xl border-2 border-slate-200 bg-white flex items-center justify-center" style={{ width: 72, height: 72 }}>
                              {Icon ? (
                                <div style={{ width: 52, height: 52 }}><Icon /></div>
                              ) : (
                                <span className="text-xs text-slate-400">{q.question}</span>
                              )}
                            </div>
                            {/* Letter choices */}
                            <div className="flex gap-2 flex-1">
                              {q.options.map((letter, oi) => {
                                const isSelected = userAnswerRaw === String(oi);
                                const isRightAnswer = oi === q.correct;
                                let cls = "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 cursor-pointer";
                                if (submitted) {
                                  if (isRightAnswer) cls = "border-emerald-400 bg-emerald-50 text-emerald-700 cursor-default font-bold";
                                  else if (isSelected && !isCorrect) cls = "border-red-400 bg-red-50 text-red-500 cursor-default line-through opacity-70";
                                  else cls = "border-slate-100 bg-white text-slate-300 cursor-default opacity-50";
                                } else if (isSelected) {
                                  cls = "border-blue-400 bg-blue-50 text-blue-700 font-bold cursor-pointer ring-1 ring-blue-300";
                                }
                                return (
                                  <button
                                    key={oi}
                                    onClick={() => { if (!submitted) { playClick(); setPaperAnswers((prev) => ({ ...prev, [qi]: String(oi) })); } }}
                                    disabled={submitted}
                                    className={`flex-1 rounded-xl border-2 text-xl font-black transition-all ${cls}`}
                                    style={{ height: 56 }}
                                  >
                                    {letter}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        </>
                      );
                    })()}

                    {/* Typing input — transparent, sits on a ruled line */}
                    {q.type === "typing" && (
                      <div style={{ height: 28, lineHeight: '28px' }}
                        className="ml-7 flex items-center gap-2 px-1">
                        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
                        {submitted && ans ? (
                          <span className={`text-sm font-medium ${isCorrect ? 'text-emerald-600' : 'text-red-500'}`}>
                            {userAnswerRaw || <span className="text-slate-300 italic text-xs">—</span>}
                            {!isCorrect && (
                              <span className="text-slate-400 text-xs ml-2 font-normal">
                                → {ans.expected}
                              </span>
                            )}
                          </span>
                        ) : (
                          <input
                            value={userAnswerRaw ?? ""}
                            onChange={(e) =>
                              setPaperAnswers((prev) => ({ ...prev, [qi]: e.target.value }))
                            }
                            placeholder="Antwort..."
                            className="flex-1 bg-transparent border-0 text-sm text-slate-800 outline-none placeholder:text-slate-300"
                            style={{ height: 28, lineHeight: '28px' }}
                          />
                        )}
                      </div>
                    )}

                    {/* Spacer — one empty ruled line between questions */}
                    <div style={{ height: 28 }} />
                  </div>
                );
              })}

              {/* Extra blank lines at end */}
              {[...Array(3)].map((_, i) => (
                <div key={`blank-${i}`} style={{ height: 28 }} />
              ))}
            </div>

            {/* Floating Abgeben button */}
            {!submitted && (
              <motion.div
                className="fixed left-1/2 -translate-x-1/2 bottom-8 z-40"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={handleAbgeben}
                  className="px-10 py-3 rounded-lg font-black text-sm bg-slate-800 text-white shadow-xl hover:bg-slate-700 active:scale-95 transition-all"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Abgeben ✓
                </motion.button>
              </motion.div>
            )}
          </ModernPaperTest>
        )}

        {/* ── BELOHNUNG ─────────────────────────────────────────────────────── */}
        {screen === "reward" && earnedCard && (
          <RewardReveal
            rarity={earnedCard as "bronze" | "silver" | "gold" | "legendary"}
            game="deutschtest"
            score={answers.filter((a) => a.correct).length}
            total={answers.length}
            onDone={() => setScreen("result")}
          />
        )}

        {/* ── ERGEBNIS ──────────────────────────────────────────────────────── */}
        {screen === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex flex-col items-center p-4 pb-10 max-w-lg mx-auto"
          >
            <MilestonePopup />

            <div className="w-full pt-6">
              {/* Title */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <BookOpen size={24} className="text-[#00D4FF]" />
                <span className="text-[#00D4FF] font-black tracking-wide">DEUTSCH TEST — Klasse {grade}</span>
              </div>

              {/* Mark */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center mb-6"
              >
                <div
                  className="w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 mb-3"
                  style={{ borderColor: mark.color, boxShadow: `0 0 30px ${mark.color}40` }}
                >
                  <span className="text-4xl font-black" style={{ color: mark.color }}>{mark.note}</span>
                  <span className="text-[10px] text-white/40 uppercase">Note</span>
                </div>
                <p className="text-xl font-bold" style={{ color: mark.color }}>{mark.label}</p>
                <p className="text-white/50 text-sm mt-1">
                  {scoreCount} / {answers.length} richtig ({scorePct}%)
                </p>
              </motion.div>

              {/* Answer Review */}
              <div className="bg-[#12122A] rounded-xl border border-white/10 overflow-hidden mb-6">
                <div className="px-4 py-2.5 border-b border-white/5 text-xs text-white/40 font-bold uppercase tracking-wide">
                  Auswertung
                </div>
                <div className="divide-y divide-white/5">
                  {questions.map((q, i) => {
                    const ans = answers[i];
                    if (!ans) return null;
                    return (
                      <div key={i} className="flex items-start gap-3 px-4 py-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0
                          ${ans.correct ? "bg-[#00FF88]/20 text-[#00FF88]" : "bg-[#FF2D78]/20 text-[#FF2D78]"}`}>
                          {ans.correct ? <Check size={11} /> : <XIcon size={11} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/70 text-xs leading-snug line-clamp-2">{q.question}</p>
                          {!ans.correct && (
                            <p className="text-[#00FF88] text-xs mt-0.5">
                              ✓ {ans.expected}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  onClick={restart}
                  className="flex-1 py-4 rounded-xl bg-[#00D4FF] text-black font-black flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} /> Nochmal
                </motion.button>
                <Link
                  href="/"
                  className="flex-1 py-4 rounded-xl bg-white/10 text-white/70 font-bold
                             flex items-center justify-center gap-2 hover:bg-white/15 transition-all"
                >
                  <Home size={18} /> Hauptmenü
                </Link>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
