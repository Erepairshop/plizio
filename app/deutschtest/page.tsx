"use client";

import { useState, useEffect, useRef, useMemo } from "react";
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
  type: "mcq" | "typing";
  question: string;
  options?: string[];
  correct?: number;          // mcq
  answer?: string | string[]; // typing
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
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<{ correct: boolean; given: string; expected: string }[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [typingInput, setTypingInput] = useState("");
  const [avatarMood, setAvatarMood] = useState<AvatarMood>("idle");
  const [jumpTrigger, setJumpTrigger] = useState<{ reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | null; timestamp: number }>({ reaction: null, timestamp: 0 });
  const [earnedCard, setEarnedCard] = useState<string | null>(null);
  const [dateStr, setDateStr] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDateStr(new Date().toLocaleDateString("de-DE", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
  }, []);

  const themes: DeutschTheme[] = DEUTSCH_CURRICULUM[grade] ?? [];
  const currentQ = questions[idx];
  const totalQ = questions.length;
  const progress = totalQ > 0 ? (idx / totalQ) * 100 : 0;

  // ─── FRAGEN AUFBAUEN ────────────────────────────────────────────────────────

  function buildTest(g: number, subtopicIds: string[], withLesetest: boolean) {
    const isMixed = subtopicIds.length > 0;
    const leseMax = withLesetest ? (isMixed ? 1 : 3) : 0;
    const maxGrammar = 15 - leseMax;

    // Statische Fragen aus dem Curriculum
    const staticQs = getDeutschQuestions(g, subtopicIds, 20);

    // Generierte Fragen (zufällig, jedes Mal anders)
    const generatedQs = generateForSubtopics(subtopicIds, 12);

    // Zusammenführen, mischen, doppelte Fragen (nach Text) entfernen
    const combined = [...staticQs, ...generatedQs];
    for (let i = combined.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [combined[i], combined[j]] = [combined[j], combined[i]];
    }
    const seen = new Set<string>();
    const grammarPool: TestQuestion[] = [];
    for (const q of combined) {
      const key = q.question.slice(0, 60);
      if (!seen.has(key)) {
        seen.add(key);
        grammarPool.push({ ...q });
      }
      if (grammarPool.length >= maxGrammar) break;
    }

    // Lesetest-Fragen anhängen
    if (withLesetest) {
      const passage = getRandomPassage(g);
      if (passage) {
        const leseQs: TestQuestion[] = passage.questions.slice(0, leseMax).map((lq) => ({
          ...lq,
          passageText: passage.text,
          passageTitle: passage.title,
        }));
        grammarPool.push(...leseQs);
      }
    }

    return grammarPool;
  }

  // ─── TEST STARTEN ────────────────────────────────────────────────────────────

  function startTest() {
    if (selectedIds.length === 0 && !includeLesetest) return;
    const qs = buildTest(grade, selectedIds, includeLesetest);
    if (qs.length === 0) return;
    setQuestions(qs);
    setIdx(0);
    setAnswers([]);
    setShowFeedback(false);
    setTypingInput("");
    setAvatarMood("focused");
    setScreen("test");
  }

  // ─── MCQ ANTWORT ─────────────────────────────────────────────────────────────

  function handleMCQ(optIdx: number) {
    if (showFeedback) return;
    const correct = currentQ.correct === optIdx;
    const expected = currentQ.options?.[currentQ.correct ?? 0] ?? "";
    recordAnswer(correct, currentQ.options?.[optIdx] ?? "", expected);
  }

  // ─── TYPING ANTWORT ──────────────────────────────────────────────────────────

  function handleTyping(e: React.FormEvent) {
    e.preventDefault();
    if (showFeedback || !typingInput.trim()) return;
    const correct = checkAnswer(typingInput, currentQ.answer ?? "", grade);
    const expected = Array.isArray(currentQ.answer)
      ? currentQ.answer[0]
      : currentQ.answer ?? "";
    recordAnswer(correct, typingInput, expected);
  }

  // ─── ANTWORT VERARBEITEN ──────────────────────────────────────────────────────

  function recordAnswer(correct: boolean, given: string, expected: string) {
    setLastCorrect(correct);
    setShowFeedback(true);
    setAvatarMood(correct ? "happy" : "disappointed");
    if (correct) setJumpTrigger({ reaction: 'happy', timestamp: Date.now() });
    setAnswers((prev) => [...prev, { correct, given, expected }]);

    setTimeout(() => {
      setShowFeedback(false);
      setTypingInput("");
      if (idx + 1 >= totalQ) {
        finishTest([...answers, { correct, given, expected }]);
      } else {
        setIdx((i) => i + 1);
        setAvatarMood("focused");
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }, 1500);
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
    setAvatarMood(pct >= 50 ? "victory" : "disappointed");
    setScreen("reward");
  }

  // ─── NEUSTART ────────────────────────────────────────────────────────────────

  function restart() {
    setScreen("topics");
    setEarnedCard(null);
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
          jumpTrigger={jumpTrigger}
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
        {screen === "test" && currentQ && (
          <ModernPaperTest
            title="Deutsch Test"
            icon="✏️"
            gradeLabel={`Klasse ${grade}`}
            date={dateStr}
            solved={answers.length}
            total={totalQ}
            onExit={() => setScreen("topics")}
            exitLabel="Zurück"
          >
          <motion.div
            key={`test-${idx}`}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {/* Passage (Lesetest) — paper style */}
            {currentQ.passageText && (
              <motion.div
                initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 border-l-4 border-blue-300 rounded-r-lg p-4 mb-6"
              >
                {currentQ.passageTitle && (
                  <p className="text-blue-500 text-xs font-bold mb-2 uppercase tracking-wide">
                    📖 {currentQ.passageTitle}
                  </p>
                )}
                <p className="text-slate-700 text-sm leading-relaxed">{currentQ.passageText}</p>
              </motion.div>
            )}

            {/* Question number + text */}
            <div className="mb-4">
              <div className="flex items-start gap-2.5">
                <span className="text-slate-300 font-mono text-sm shrink-0 mt-0.5 w-6 text-right">
                  {idx + 1}.
                </span>
                <div className="flex-1">
                  <p className="text-slate-800 text-base font-semibold leading-relaxed">{currentQ.question}</p>
                  {currentQ.hint && (
                    <p className="text-slate-400 text-xs mt-1 font-normal">💡 {currentQ.hint}</p>
                  )}
                </div>
              </div>
            </div>

            {/* MCQ — paper style rows */}
            {currentQ.type === "mcq" && currentQ.options && (
              <div className="ml-8 flex flex-col border-t border-slate-100">
                {currentQ.options.map((opt, i) => {
                  let rowCls = "text-slate-700 hover:bg-blue-50/70 cursor-pointer";
                  let labelCls = "text-slate-400";
                  let indicator = null;
                  if (showFeedback) {
                    if (i === currentQ.correct) {
                      rowCls = "text-emerald-700 bg-emerald-50/60 cursor-default";
                      labelCls = "text-emerald-500";
                      indicator = <Check size={13} className="shrink-0 text-emerald-500" />;
                    } else if (answers[answers.length - 1]?.given === opt && !lastCorrect) {
                      rowCls = "text-red-500 bg-red-50/60 cursor-default";
                      labelCls = "text-red-400";
                      indicator = <XIcon size={13} className="shrink-0 text-red-400" />;
                    } else {
                      rowCls = "text-slate-300 cursor-default";
                      labelCls = "text-slate-300";
                    }
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => handleMCQ(i)}
                      disabled={showFeedback}
                      className={`w-full text-left px-3 py-2.5 border-b border-slate-100 text-sm transition-colors flex items-center gap-2 ${rowCls}`}
                    >
                      <span className={`font-mono text-xs w-5 shrink-0 ${labelCls}`}>{String.fromCharCode(65 + i)})</span>
                      <span className="flex-1">{opt}</span>
                      {indicator}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Typing — pen-on-paper style */}
            {currentQ.type === "typing" && (
              <form onSubmit={handleTyping} className="ml-8 flex flex-col gap-3 mt-2">
                <input
                  ref={inputRef}
                  value={typingInput}
                  onChange={(e) => setTypingInput(e.target.value)}
                  disabled={showFeedback}
                  placeholder="Antwort..."
                  autoFocus
                  className={`w-full bg-transparent border-0 border-b-2 px-1 py-1.5 text-slate-800 text-base outline-none
                    font-medium placeholder:text-slate-300 transition-all
                    ${showFeedback
                      ? lastCorrect
                        ? "border-emerald-400 text-emerald-700"
                        : "border-red-400 text-red-600"
                      : "border-slate-300 focus:border-blue-400"
                    }`}
                />
                {!showFeedback && (
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={!typingInput.trim()}
                    className="self-start px-5 py-2 rounded-full bg-slate-800 text-white text-sm font-bold
                               disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
                  >
                    Prüfen →
                  </motion.button>
                )}
              </form>
            )}

            {/* Feedback — ink color, minimal */}
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`ml-8 mt-3 text-sm font-semibold flex flex-col gap-1
                    ${lastCorrect ? "text-emerald-600" : "text-red-500"}`}
                >
                  <div className="flex items-center gap-1.5">
                    {lastCorrect
                      ? <><Check size={14} /> Richtig! 🌟</>
                      : <>
                          <XIcon size={14} />
                          Richtig:&nbsp;
                          <span className="font-bold">
                            {Array.isArray(currentQ.answer)
                              ? currentQ.answer[0]
                              : currentQ.answer ?? currentQ.options?.[currentQ.correct ?? 0]}
                          </span>
                        </>
                    }
                  </div>
                  {!lastCorrect && (() => {
                    const hint = getSubtopicHint(currentQ.subtopic);
                    return hint ? (
                      <div className="text-[11px] text-slate-400 font-normal leading-relaxed mt-0.5">
                        💡 {hint}
                      </div>
                    ) : null;
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
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
