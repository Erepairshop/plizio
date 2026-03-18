"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowLeft, Check, X as XIcon, RotateCcw, Home } from "lucide-react";
import Link from "next/link";
import { calculateRarity, saveCard, generateCardId } from "@/lib/cards";
import { incrementTotalGames, incrementPerfectScores } from "@/lib/milestones";
import RewardReveal from "@/components/RewardReveal";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender } from "@/lib/gender";
import { getActiveSkin, getSkinDef } from "@/lib/skins";
import { getActiveFace, getFaceDef } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef, getActiveTrail, getTrailDef } from "@/lib/accessories";
import type { LanguageTestConfig, CurriculumQuestion, CurriculumTheme } from "@/lib/curriculumTypes";

// ─── AVATAR LOADER ────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useAvatarProps(): Record<string, any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      gender, activeSkin, activeFace,
      activeTop:     topId     ? getTopDef(topId)         : null,
      activeBottom:  bottomId  ? getBottomDef(bottomId)   : null,
      activeShoe:    shoeId    ? getShoeDef(shoeId)       : null,
      activeCape:    capeId    ? getCapeDef(capeId)       : null,
      activeGlasses: glassesId ? getGlassesDef(glassesId) : null,
      activeGloves:  glovesId  ? getGloveDef(glovesId)   : null,
      activeHat:     hatId     ? getHatDef(hatId)         : null,
      activeTrail:   trailId   ? getTrailDef(trailId)     : null,
    });
  }, []);
  return props;
}

// ─── FLOATING BACKGROUND ──────────────────────────────────────────────────────

function FloatingBackground({ chars, colors, animName }: { chars: string[]; colors: string[]; animName: string }) {
  const items = useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    char: chars[i % chars.length],
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 16 + Math.random() * 48,
    duration: 8 + Math.random() * 16,
    delay: Math.random() * 8,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: 0.04 + Math.random() * 0.10,
  })), [chars, colors]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((it, i) => (
        <div
          key={i}
          className="absolute font-black select-none"
          style={{
            left: `${it.x}%`, top: `${it.y}%`,
            fontSize: it.size, color: it.color, opacity: it.opacity,
            animation: `${animName} ${it.duration}s ease-in-out ${it.delay}s infinite alternate`,
          }}
        >
          {it.char}
        </div>
      ))}
      <style>{`
        @keyframes ${animName} {
          0%   { transform: translateY(0px) rotate(-5deg); }
          100% { transform: translateY(-30px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Screen = "country" | "grade" | "topics" | "test" | "result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory";

interface TestAnswer { correct: boolean; given: string; expected: string }

// ─── SIMPLE ANSWER CHECKER ────────────────────────────────────────────────────

function checkAnswer(input: string, expected: string | string[]): boolean {
  const normalise = (s: string) => s.trim().toLowerCase().replace(/[.,!?;:]/g, "");
  const inp = normalise(input);
  const variants = Array.isArray(expected) ? expected : [expected];
  return variants.some((v) => normalise(v) === inp);
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function LanguageTestGame({ config }: { config: LanguageTestConfig }) {
  const avatarProps = useAvatarProps();
  const { labels } = config;

  const [screen, setScreen]               = useState<Screen>("country");
  const [countryCode, setCountryCode]     = useState(config.countries[0]?.code ?? "US");
  const [grade, setGrade]                 = useState(1);
  const [selectedIds, setSelectedIds]     = useState<string[]>([]);
  const [questions, setQuestions]         = useState<CurriculumQuestion[]>([]);
  const [idx, setIdx]                     = useState(0);
  const [answers, setAnswers]             = useState<TestAnswer[]>([]);
  const [showFeedback, setShowFeedback]   = useState(false);
  const [lastCorrect, setLastCorrect]     = useState(false);
  const [typingInput, setTypingInput]     = useState("");
  const [avatarMood, setAvatarMood]       = useState<AvatarMood>("idle");
  const [jumpTrigger, setJumpTrigger]     = useState<{ reaction: 'happy' | 'surprised' | 'victory' | 'confused' | 'laughing' | null; timestamp: number }>({ reaction: null, timestamp: 0 });
  const [earnedCard, setEarnedCard]       = useState<string | null>(null);
  const [showReward, setShowReward]       = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const themes: CurriculumTheme[] = config.curriculum[grade] ?? [];
  const currentQ = questions[idx];
  const totalQ   = questions.length;
  const progress = totalQ > 0 ? (idx / totalQ) * 100 : 0;

  const scoreCount = answers.filter((a) => a.correct).length;
  const scorePct   = answers.length > 0 ? Math.round((scoreCount / answers.length) * 100) : 0;
  const mark       = config.calculateMark(scorePct, countryCode);

  // ─── BUILD TEST ─────────────────────────────────────────────────────────────

  function startTest() {
    if (selectedIds.length === 0) return;
    const qs = config.getQuestions(grade, selectedIds, 15);
    if (qs.length === 0) return;
    setQuestions(qs);
    setIdx(0);
    setAnswers([]);
    setShowFeedback(false);
    setTypingInput("");
    setAvatarMood("focused");
    setScreen("test");
  }

  // ─── ANSWER HANDLERS ────────────────────────────────────────────────────────

  function handleMCQ(optIdx: number) {
    if (showFeedback) return;
    const correct = currentQ.type === "mcq" && currentQ.correct === optIdx;
    const expected = currentQ.type === "mcq" ? (currentQ.options?.[currentQ.correct ?? 0] ?? "") : "";
    recordAnswer(correct, currentQ.type === "mcq" ? (currentQ.options?.[optIdx] ?? "") : "", expected);
  }

  function handleTyping(e: React.FormEvent) {
    e.preventDefault();
    if (showFeedback || !typingInput.trim()) return;
    const correct = checkAnswer(typingInput, currentQ.type === "typing" ? (currentQ.answer ?? "") : "");
    const expected = currentQ.type === "typing"
      ? (Array.isArray(currentQ.answer) ? currentQ.answer[0] : currentQ.answer ?? "")
      : "";
    recordAnswer(correct, typingInput, expected);
  }

  function recordAnswer(correct: boolean, given: string, expected: string) {
    setLastCorrect(correct);
    setShowFeedback(true);
    setAvatarMood(correct ? "happy" : "disappointed");
    if (correct) setJumpTrigger({ reaction: "happy", timestamp: Date.now() });
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

  // ─── FINISH ─────────────────────────────────────────────────────────────────

  function finishTest(allAnswers: TestAnswer[]) {
    const correct = allAnswers.filter((a) => a.correct).length;
    const total   = allAnswers.length;
    const pct     = total > 0 ? Math.round((correct / total) * 100) : 0;

    incrementTotalGames();
    if (pct === 100) incrementPerfectScores();

    const rarity = calculateRarity(correct, total, 0, false);
    saveCard({ id: generateCardId(), game: config.gameId, theme: `Grade ${grade}`, rarity, score: correct, total, date: new Date().toISOString().split("T")[0] });
    setEarnedCard(rarity);
    setAvatarMood(pct >= 50 ? "victory" : "disappointed");
    setScreen("result");
    setTimeout(() => setShowReward(true), 600);
  }

  function restart() {
    setScreen("topics");
    setShowReward(false);
    setEarnedCard(null);
    setAvatarMood("idle");
  }

  function changeGrade(g: number) {
    setGrade(g);
    setSelectedIds([]);
    setScreen("topics");
  }

  function toggleSubtopic(id: string) {
    setSelectedIds((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }

  // ─── RENDER ─────────────────────────────────────────────────────────────────

  const BG = (
    <FloatingBackground
      chars={config.floatingChars}
      colors={config.floatingColors}
      animName={`float_${config.gameId}`}
    />
  );

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white relative overflow-hidden">
      {/* Avatar (fixed position) */}
      <div className="fixed bottom-5 right-5 w-32 h-32 sm:w-40 sm:h-40 z-50 pointer-events-none">
        <AvatarCompanion {...avatarProps} mood={avatarMood} jumpTrigger={jumpTrigger} fixed={false} />
      </div>

      <AnimatePresence mode="wait">

        {/* ── COUNTRY SELECTION ─────────────────────────────────────────── */}
        {screen === "country" && (
          <motion.div
            key="country"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            {BG}
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
                style={{ background: `rgba(${hexToRgb(config.color)},0.1)`, boxShadow: `0 0 30px rgba(${hexToRgb(config.color)},0.2)` }}
              >
                <BookOpen size={42} style={{ color: config.color, filter: `drop-shadow(0 0 12px ${config.color}99)` }} />
              </motion.div>
              <h1 className="text-4xl font-black tracking-wider text-white" style={{ textShadow: `0 0 20px ${config.color}66` }}>
                {config.title}
              </h1>
              <p className="text-white/50 text-sm">{labels.selectCountry}</p>
            </motion.div>

            <motion.div
              className="relative z-10 flex flex-col gap-3 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              {config.countries.map((c, i) => (
                <motion.button
                  key={c.code}
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.08 }}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => { setCountryCode(c.code); setScreen("grade"); }}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all text-left"
                  style={{ background: `rgba(${hexToRgb(config.color)},0.05)`, borderColor: `rgba(${hexToRgb(config.color)},0.2)` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `rgba(${hexToRgb(config.color)},0.12)`;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = `rgba(${hexToRgb(config.color)},0.5)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `rgba(${hexToRgb(config.color)},0.05)`;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = `rgba(${hexToRgb(config.color)},0.2)`;
                  }}
                >
                  <span className="text-3xl">{c.flag}</span>
                  <div>
                    <div className="font-black text-white text-base">{c.label}</div>
                    <div className="text-[11px] text-white/40">{c.sub}</div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* ── GRADE SELECTION ───────────────────────────────────────────── */}
        {screen === "grade" && (
          <motion.div
            key="grade"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            {BG}
            <motion.button
              onClick={() => setScreen("country")}
              className="absolute top-5 left-5 z-10 p-2 rounded-xl bg-white/5 border border-white/10"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft size={20} className="text-white/60" />
            </motion.button>

            <motion.div
              className="relative z-10 flex flex-col items-center gap-3 mb-8"
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            >
              <motion.div
                className="p-4 rounded-2xl"
                style={{ background: `rgba(${hexToRgb(config.color)},0.1)`, boxShadow: `0 0 30px rgba(${hexToRgb(config.color)},0.2)` }}
              >
                <BookOpen size={42} style={{ color: config.color, filter: `drop-shadow(0 0 12px ${config.color}99)` }} />
              </motion.div>
              <h1 className="text-4xl font-black tracking-wider text-white">{config.title}</h1>
              <p className="text-white/50 text-sm">
                {config.countries.find((c) => c.code === countryCode)?.flag ?? ""} {labels.selectGrade}
              </p>
            </motion.div>

            <motion.div
              className="relative z-10 grid grid-cols-4 gap-3 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((g, i) => (
                <motion.button
                  key={g}
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + i * 0.04 }}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
                  onClick={() => changeGrade(g)}
                  className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-0.5 border transition-all"
                  style={{ background: `rgba(${hexToRgb(config.color)},0.05)`, borderColor: `rgba(${hexToRgb(config.color)},0.2)` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `rgba(${hexToRgb(config.color)},0.15)`;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = `rgba(${hexToRgb(config.color)},0.7)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = `rgba(${hexToRgb(config.color)},0.05)`;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = `rgba(${hexToRgb(config.color)},0.2)`;
                  }}
                >
                  <span className="text-xs text-white/40 font-semibold">{config.gradeSublabel}</span>
                  <span className="text-2xl font-black" style={{ color: config.color }}>{g}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* ── TOPIC SELECTION ───────────────────────────────────────────── */}
        {screen === "topics" && (
          <motion.div
            key="topics"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            className="relative min-h-screen flex flex-col p-4 pb-36 max-w-lg mx-auto overflow-hidden"
          >
            {BG}
            {/* Header */}
            <div className="relative z-10 flex items-center gap-3 pt-4 mb-1">
              <motion.button
                onClick={() => setScreen("grade")}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft size={18} />
              </motion.button>
              <div className="p-1.5 rounded-lg" style={{ background: `rgba(${hexToRgb(config.color)},0.1)` }}>
                <BookOpen size={18} style={{ color: config.color }} />
              </div>
              <span className="font-black tracking-wide text-sm" style={{ color: config.color }}>{config.title}</span>
              <span className="ml-auto text-white/60 text-xs font-bold px-3 py-1 rounded-full border"
                style={{ background: `rgba(${hexToRgb(config.color)},0.1)`, borderColor: `rgba(${hexToRgb(config.color)},0.2)` }}
              >
                {config.gradeLabel} {grade}
              </span>
            </div>
            <p className="relative z-10 text-white/35 text-xs mb-4 ml-10">{labels.selectTopics}</p>

            {/* Themes */}
            <div className="relative z-10 flex flex-col gap-2.5">
              {themes.map((theme) => {
                const availSubs = theme.subtopics.filter((s) => s.questions.length > 0 || s.hasGenerator);
                const allSel    = availSubs.length > 0 && availSubs.every((s) => selectedIds.includes(s.id));
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
                const themeColor = theme.color ?? config.color;
                return (
                  <div
                    key={theme.id}
                    className="rounded-2xl overflow-hidden border"
                    style={{ background: "rgba(18,18,42,0.85)", borderColor: `${themeColor}22`, backdropFilter: "blur(8px)" }}
                  >
                    <div className="flex items-center gap-2.5 px-4 py-3" style={{ borderLeft: `3px solid ${themeColor}` }}>
                      <span className="text-xl">{theme.icon}</span>
                      <span className="font-bold text-sm flex-1" style={{ color: themeColor }}>{theme.name}</span>
                      {availSubs.length > 1 && (
                        <button
                          onClick={toggleAll}
                          className="text-[10px] px-2 py-0.5 rounded-full border transition-all font-semibold"
                          style={{
                            color: allSel ? themeColor : "rgba(255,255,255,0.4)",
                            borderColor: allSel ? `${themeColor}80` : "rgba(255,255,255,0.15)",
                            background: allSel ? `${themeColor}15` : "transparent",
                          }}
                        >
                          {allSel ? labels.allCheck : labels.all}
                        </button>
                      )}
                    </div>
                    <div className="px-3 pb-3 pt-1 flex flex-col gap-1.5">
                      {theme.subtopics.map((sub) => {
                        const sel   = selectedIds.includes(sub.id);
                        const empty = sub.questions.length === 0 && !sub.hasGenerator;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => !empty && toggleSubtopic(sub.id)}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-left text-sm transition-all
                              ${sel ? "text-white" : empty ? "text-white/20 cursor-not-allowed" : "text-white/60 hover:text-white"}`}
                            style={{
                              background: sel ? `${themeColor}18` : empty ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.04)",
                              border: sel ? `1px solid ${themeColor}60` : "1px solid rgba(255,255,255,0.07)",
                            }}
                          >
                            <div
                              className="w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all"
                              style={{ background: sel ? themeColor : "transparent", borderColor: sel ? themeColor : "rgba(255,255,255,0.25)" }}
                            >
                              {sel && <Check size={10} strokeWidth={3} className="text-black" />}
                            </div>
                            <span className="flex-1">{sub.name}</span>
                            {empty
                              ? <span className="text-[10px] text-white/20">{labels.soon}</span>
                              : sub.hasGenerator && sub.questions.length === 0
                                ? <span className="text-[10px]" style={{ color: `${themeColor}80` }}>GEN {labels.questions}</span>
                                : <span className="text-[10px]" style={{ color: `${themeColor}80` }}>{sub.questions.length} {labels.questions}</span>
                            }
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Start button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 z-20" style={{ background: "linear-gradient(to top, #0A0A1A 60%, transparent)" }}>
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                onClick={startTest}
                disabled={selectedIds.length === 0}
                className="w-full max-w-lg mx-auto block py-4 rounded-2xl font-black text-lg text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                style={{
                  background: `linear-gradient(135deg, ${config.color}, ${darken(config.color)})`,
                  boxShadow: selectedIds.length > 0 ? `0 0 24px ${config.color}70` : "none",
                }}
              >
                {labels.startTest} →
                {selectedIds.length > 0 && (
                  <span className="font-normal text-sm ml-2 opacity-70">
                    ({selectedIds.length} {labels.areas})
                  </span>
                )}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* ── TEST ──────────────────────────────────────────────────────── */}
        {screen === "test" && currentQ && (
          <motion.div
            key={`test-${idx}`}
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
            className="min-h-screen flex flex-col p-4 max-w-lg mx-auto"
          >
            {/* Header */}
            <div className="flex items-center gap-3 pt-4 mb-3">
              <button onClick={() => setScreen("topics")} className="text-white/40 hover:text-white p-1">
                <ArrowLeft size={18} />
              </button>
              <div className="flex-1">
                <div className="flex justify-between text-xs text-white/40 mb-1">
                  <span>{labels.question} {idx + 1} / {totalQ}</span>
                  <span>{config.gradeLabel} {grade}</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: config.color }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </div>

            {/* Question card */}
            <div className="bg-[#12122A] rounded-2xl border border-white/10 p-5 flex-1 flex flex-col gap-5">
              <p className="text-white text-lg font-semibold leading-snug">{currentQ.question}</p>
              {currentQ.hint && <p className="text-white/40 text-xs -mt-3">💡 {currentQ.hint}</p>}

              {/* MCQ */}
              {currentQ.type === "mcq" && currentQ.options && (
                <div className="flex flex-col gap-2.5">
                  {currentQ.options.map((opt, i) => {
                    let style = "bg-white/5 border-white/15 text-white/80 hover:bg-white/10";
                    if (showFeedback) {
                      if (i === currentQ.correct) style = "bg-[#00FF88]/20 border-[#00FF88] text-white";
                      else if (answers[answers.length - 1]?.given === opt && !lastCorrect)
                        style = "bg-[#FF2D78]/20 border-[#FF2D78] text-white";
                      else style = "bg-white/3 border-white/5 text-white/30";
                    }
                    return (
                      <motion.button
                        key={i}
                        whileHover={!showFeedback ? { scale: 1.01 } : {}}
                        whileTap={!showFeedback ? { scale: 0.98 } : {}}
                        onClick={() => handleMCQ(i)}
                        disabled={showFeedback}
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${style}`}
                      >
                        <span className="text-white/40 mr-2">{String.fromCharCode(65 + i)})</span>
                        {opt}
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* Typing */}
              {currentQ.type === "typing" && (
                <form onSubmit={handleTyping} className="flex flex-col gap-3">
                  <input
                    ref={inputRef}
                    value={typingInput}
                    onChange={(e) => setTypingInput(e.target.value)}
                    disabled={showFeedback}
                    placeholder={labels.placeholder}
                    autoFocus
                    className={`w-full bg-[#1A1A35] border rounded-xl px-4 py-3 text-white text-base outline-none placeholder:text-white/25 transition-all
                      ${showFeedback ? lastCorrect ? "border-[#00FF88] bg-[#00FF88]/10" : "border-[#FF2D78] bg-[#FF2D78]/10" : "border-white/20 focus:border-[#00D4FF]/60"}`}
                  />
                  {!showFeedback && (
                    <motion.button
                      type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      disabled={!typingInput.trim()}
                      className="py-3 rounded-xl font-black text-black disabled:opacity-30 disabled:cursor-not-allowed"
                      style={{ background: config.color }}
                    >
                      {labels.answerBtn} →
                    </motion.button>
                  )}
                </form>
              )}

              {/* Feedback */}
              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className={`flex flex-col gap-2 px-4 py-3 rounded-xl border
                      ${lastCorrect ? "bg-[#00FF88]/15 border-[#00FF88]/30" : "bg-[#FF2D78]/10 border-[#FF2D78]/30"}`}
                  >
                    <div className={`flex items-center gap-2 font-bold text-sm ${lastCorrect ? "text-[#00FF88]" : "text-[#FF2D78]"}`}>
                      {lastCorrect
                        ? <><Check size={16} /> {labels.correct} 🌟</>
                        : <>
                            <XIcon size={16} />
                            <span>Correct:</span>
                            <strong>
                              {currentQ.type === "mcq"
                                ? currentQ.options?.[currentQ.correct ?? 0]
                                : Array.isArray(currentQ.answer) ? currentQ.answer[0] : currentQ.answer}
                            </strong>
                          </>
                      }
                    </div>
                    {!lastCorrect && (() => {
                      const hint = config.subtopicHints?.[currentQ.subtopic ?? ""] ?? null;
                      return hint ? (
                        <div className="text-[11px] text-white/50 border-t border-white/10 pt-2 leading-relaxed">
                          💡 {hint}
                        </div>
                      ) : null;
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* ── RESULT ────────────────────────────────────────────────────── */}
        {screen === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex flex-col items-center p-4 pb-10 max-w-lg mx-auto"
          >
            {showReward && earnedCard && (
              <RewardReveal
                rarity={earnedCard as "bronze" | "silver" | "gold" | "legendary"}
                game={config.gameId}
                score={scoreCount}
                total={answers.length}
                onDone={() => setShowReward(false)}
              />
            )}

            <div className="w-full pt-6">
              <div className="flex items-center justify-center gap-2 mb-6">
                <BookOpen size={24} style={{ color: config.color }} />
                <span className="font-black tracking-wide" style={{ color: config.color }}>
                  {config.title} — {config.gradeLabel} {grade}
                </span>
              </div>

              {/* Grade mark */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center mb-6"
              >
                <div
                  className="w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 mb-3"
                  style={{ borderColor: mark.color, boxShadow: `0 0 30px ${mark.color}40` }}
                >
                  <span className="text-4xl font-black" style={{ color: mark.color }}>{mark.label}</span>
                  <span className="text-[10px] text-white/40 uppercase">{labels.gradeMark}</span>
                </div>
                <p className="text-xl font-bold" style={{ color: mark.color }}>{mark.description}</p>
                <p className="text-white/50 text-sm mt-1">{mark.emoji} {scoreCount} / {answers.length} correct ({scorePct}%)</p>
              </motion.div>

              {/* Answer review */}
              <div className="bg-[#12122A] rounded-xl border border-white/10 overflow-hidden mb-6">
                <div className="px-4 py-2.5 border-b border-white/5 text-xs text-white/40 font-bold uppercase tracking-wide">
                  {labels.review}
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
                          {!ans.correct && <p className="text-[#00FF88] text-xs mt-0.5">✓ {ans.expected}</p>}
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
                  className="flex-1 py-4 rounded-xl font-black text-black flex items-center justify-center gap-2"
                  style={{ background: config.color }}
                >
                  <RotateCcw size={18} /> {labels.again}
                </motion.button>
                <Link
                  href="/"
                  className="flex-1 py-4 rounded-xl bg-white/10 text-white/70 font-bold flex items-center justify-center gap-2 hover:bg-white/15 transition-all"
                >
                  <Home size={18} /> {labels.home}
                </Link>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function darken(hex: string): string {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 40);
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 40);
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 40);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
