"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowLeft, Check, X as XIcon, RotateCcw, Home, Download } from "lucide-react";
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
import {
  DEUTSCH_CURRICULUM,
  getDeutschQuestions,
  calculateDeutschMark,
  type DeutschQuestion,
  type DeutschTheme,
} from "@/lib/deutschCurriculum";
import { getRandomPassage } from "@/lib/deutschLesetest";
import { generateForSubtopics } from "@/lib/deutschGenerators";
import { checkAnswer } from "@/lib/deutschValidation";
import jsPDF from "jspdf";

// ─── TYPEN ────────────────────────────────────────────────────────────────────

type Screen = "grade" | "topics" | "test" | "result";
type AvatarMood = "idle" | "focused" | "happy" | "disappointed" | "victory";

interface TestQuestion {
  type: "mcq" | "typing";
  question: string;
  options?: string[];
  correct?: number;
  answer?: string | string[];
  hint?: string;
  passageText?: string;
  passageTitle?: string;
  subtopic?: string;
}

// ─── AVATAR LOADER ─────────────────────────────────────────────────────────────

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
      gender, activeSkin, activeFace,
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

// ─── PDF GENERATOR ────────────────────────────────────────────────────────────

interface DeutschPdfData {
  grade: number;
  date: string;
  scoreCount: number;
  total: number;
  scorePct: number;
  noteValue: number;
  noteLabel: string;
  noteColor: string;
  questions: TestQuestion[];
  answers: { correct: boolean; given: string; expected: string }[];
}

function generateDeutschTestPdf(data: DeutschPdfData) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210; const H = 297;
  const ML = 15; const MR = 15; const CW = W - ML - MR;

  const noteRGB: Record<number, [number, number, number]> = {
    1: [22, 163, 74], 2: [37, 99, 235], 3: [217, 119, 6],
    4: [234, 88, 12], 5: [220, 38, 38], 6: [124, 58, 237],
  };
  const [nr, ng, nb] = noteRGB[data.noteValue] ?? [100, 100, 100];

  // ── Header bar ──
  doc.setFillColor(10, 10, 26);
  doc.rect(0, 0, W, 28, "F");
  doc.setFontSize(16); doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 212, 255);
  doc.text("DEUTSCH TEST", ML, 12);
  doc.setFontSize(10); doc.setFont("helvetica", "normal");
  doc.setTextColor(200, 200, 200);
  doc.text(`Klasse ${data.grade}   |   ${data.date}`, ML, 20);
  doc.setFontSize(10); doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(`${data.scoreCount} / ${data.total} richtig  (${data.scorePct}%)`, W - MR, 20, { align: "right" });

  // ── Note circle ──
  let y = 40;
  doc.setDrawColor(nr, ng, nb); doc.setLineWidth(1.5);
  doc.circle(W / 2, y + 8, 10, "S");
  doc.setFontSize(16); doc.setFont("helvetica", "bold");
  doc.setTextColor(nr, ng, nb);
  doc.text(String(data.noteValue), W / 2, y + 12, { align: "center" });
  doc.setFontSize(11); doc.setFont("helvetica", "normal");
  doc.setTextColor(nr, ng, nb);
  doc.text(data.noteLabel, W / 2, y + 24, { align: "center" });

  // ── Divider ──
  y += 32;
  doc.setDrawColor(50, 50, 80); doc.setLineWidth(0.3);
  doc.line(ML, y, W - MR, y);
  y += 6;

  // ── Section title ──
  doc.setFontSize(9); doc.setFont("helvetica", "bold");
  doc.setTextColor(150, 150, 200);
  doc.text("AUSWERTUNG DER AUFGABEN", ML, y);
  y += 6;

  // ── Questions ──
  doc.setFontSize(8);
  const wrongOnly = data.answers.filter(a => !a.correct);

  for (let i = 0; i < data.questions.length; i++) {
    if (y > H - 20) {
      doc.addPage();
      y = 15;
    }
    const q = data.questions[i];
    const ans = data.answers[i];
    if (!ans) continue;

    // Row background for wrong answers
    if (!ans.correct) {
      doc.setFillColor(60, 10, 20);
      doc.rect(ML - 2, y - 4, CW + 4, 11, "F");
    }

    // Icon
    doc.setFont("helvetica", "bold");
    doc.setTextColor(ans.correct ? 0 : 255, ans.correct ? 180 : 50, ans.correct ? 80 : 50);
    doc.text(ans.correct ? "✓" : "✗", ML, y);

    // Number
    doc.setFont("helvetica", "normal");
    doc.setTextColor(180, 180, 200);
    doc.text(`${i + 1}.`, ML + 5, y);

    // Question text (truncate)
    doc.setTextColor(ans.correct ? 220 : 255, ans.correct ? 220 : 220, ans.correct ? 220 : 220);
    const qText = q.question.length > 65 ? q.question.slice(0, 62) + "..." : q.question;
    doc.text(qText, ML + 12, y);

    if (!ans.correct) {
      y += 5;
      doc.setFont("helvetica", "italic");
      doc.setTextColor(0, 180, 100);
      doc.text(`  → Richtig: ${ans.expected}`, ML + 12, y);
    }

    y += 7;
  }

  // ── Summary box for errors ──
  if (wrongOnly.length === 0) {
    if (y > H - 25) { doc.addPage(); y = 15; }
    doc.setFillColor(0, 60, 30);
    doc.roundedRect(ML, y, CW, 12, 2, 2, "F");
    doc.setFontSize(9); doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 220, 100);
    doc.text("🏆 Perfekt! Alle Aufgaben richtig! Bravo!", W / 2, y + 8, { align: "center" });
    y += 18;
  } else {
    if (y > H - 30) { doc.addPage(); y = 15; }
    doc.setFillColor(20, 20, 50);
    doc.roundedRect(ML, y, CW, 14, 2, 2, "F");
    doc.setFontSize(8); doc.setFont("helvetica", "normal");
    doc.setTextColor(180, 180, 220);
    doc.text(
      `${wrongOnly.length} Fehler — Übe diese Themen nochmal!`,
      W / 2, y + 9, { align: "center" }
    );
    y += 20;
  }

  // ── Footer ──
  doc.setFontSize(7); doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 100);
  doc.text("Plizio Deutsch Test  •  plizio.com", W / 2, H - 8, { align: "center" });

  doc.save(`DeutschTest_Klasse${data.grade}_${data.date.replace(/\./g, "-")}.pdf`);
}

// ─── AVATAR SPEECH MESSAGES ───────────────────────────────────────────────────

const CORRECT_MSGS = [
  "Super! ⭐", "Richtig! 🎉", "Toll gemacht! 🌟",
  "Weiter so! 💪", "Klasse! ✨", "Ja! Das war's! 🔥",
];
const WRONG_MSGS = [
  "Nicht schlecht! 😊", "Beim nächsten Mal! 💪", "Üben macht den Meister! 📚",
];
const MILESTONE_MSGS: Record<number, string> = {
  5:  "Schon 5! Halbzeit bald! 🏃",
  8:  "Halbzeit! Du schaffst das! 🔥",
  10: "Nur noch 5! Fast da! ⚡",
  13: "Letzter Stretch! 💥",
  14: "Letzte Frage! Alles geben! ⭐",
};

// ─── HAUPTKOMPONENTE ──────────────────────────────────────────────────────────

export default function DeutschTestPage() {
  const avatarProps = useAvatarProps();
  const [screen, setScreen] = useState<Screen>("grade");
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
  const [showReward, setShowReward] = useState(false);
  const [avatarSpeech, setAvatarSpeech] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const speechTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const themes: DeutschTheme[] = DEUTSCH_CURRICULUM[grade] ?? [];
  const currentQ = questions[idx];
  const totalQ = questions.length;
  const progress = totalQ > 0 ? ((idx + 1) / totalQ) * 100 : 0;

  const scoreCount = answers.filter((a) => a.correct).length;
  const scorePct = answers.length > 0 ? Math.round((scoreCount / answers.length) * 100) : 0;
  const mark = calculateDeutschMark(scorePct);

  // ─── SPEECH BUBBLE ───────────────────────────────────────────────────────────

  function showSpeech(text: string, duration = 2800) {
    if (speechTimer.current) clearTimeout(speechTimer.current);
    setAvatarSpeech(text);
    speechTimer.current = setTimeout(() => setAvatarSpeech(""), duration);
  }

  // ─── TEST AUFBAUEN ────────────────────────────────────────────────────────────

  function buildTest(g: number, subtopicIds: string[], withLesetest: boolean) {
    const TARGET = 15;
    const maxGrammar = withLesetest ? 12 : TARGET;

    const staticQs = getDeutschQuestions(g, subtopicIds, 30);
    const generatedQs = generateForSubtopics(subtopicIds, 15);

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

    if (withLesetest) {
      const passage = getRandomPassage(g);
      if (passage) {
        const leseQs: TestQuestion[] = passage.questions.slice(0, 3).map((lq) => ({
          ...lq,
          passageText: passage.text,
          passageTitle: passage.title,
        }));
        grammarPool.push(...leseQs);
      }
    }

    for (let i = grammarPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [grammarPool[i], grammarPool[j]] = [grammarPool[j], grammarPool[i]];
    }
    return grammarPool.slice(0, TARGET);
  }

  // ─── TEST STARTEN ─────────────────────────────────────────────────────────────

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
    setTimeout(() => showSpeech("Los geht's! 💪", 2500), 400);
  }

  // ─── ANTWORTEN ───────────────────────────────────────────────────────────────

  function handleMCQ(optIdx: number) {
    if (showFeedback) return;
    const correct = currentQ.correct === optIdx;
    const expected = currentQ.options?.[currentQ.correct ?? 0] ?? "";
    recordAnswer(correct, currentQ.options?.[optIdx] ?? "", expected);
  }

  function handleTyping(e: React.FormEvent) {
    e.preventDefault();
    if (showFeedback || !typingInput.trim()) return;
    const correct = checkAnswer(typingInput, currentQ.answer ?? "", grade);
    const expected = Array.isArray(currentQ.answer)
      ? currentQ.answer[0]
      : currentQ.answer ?? "";
    recordAnswer(correct, typingInput, expected);
  }

  function recordAnswer(correct: boolean, given: string, expected: string) {
    setLastCorrect(correct);
    setShowFeedback(true);
    setAvatarMood(correct ? "happy" : "disappointed");

    if (correct) {
      setJumpTrigger({ reaction: "happy", timestamp: Date.now() });
      const msg = CORRECT_MSGS[Math.floor(Math.random() * CORRECT_MSGS.length)];
      showSpeech(msg, 1800);
    } else {
      setJumpTrigger({ reaction: "confused", timestamp: Date.now() });
      const msg = WRONG_MSGS[Math.floor(Math.random() * WRONG_MSGS.length)];
      showSpeech(msg, 2000);
    }

    const newAnswers = [...answers, { correct, given, expected }];

    setTimeout(() => {
      setShowFeedback(false);
      setTypingInput("");
      const nextIdx = idx + 1;
      if (nextIdx >= totalQ) {
        finishTest(newAnswers);
      } else {
        setIdx(nextIdx);
        setAvatarMood("focused");
        // Milestone messages
        if (MILESTONE_MSGS[nextIdx]) {
          setTimeout(() => showSpeech(MILESTONE_MSGS[nextIdx], 2500), 300);
        }
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }, 1500);

    setAnswers(newAnswers);
  }

  // ─── TEST BEENDEN ─────────────────────────────────────────────────────────────

  function finishTest(allAnswers: typeof answers) {
    const correct = allAnswers.filter((a) => a.correct).length;
    const total = allAnswers.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    incrementTotalGames();
    if (pct === 100) incrementPerfectScores();

    const rarity = calculateRarity(correct, total, 0);
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
    setEarnedCard(rarity);
    setAvatarMood(pct >= 50 ? "victory" : "disappointed");

    if (pct >= 90) showSpeech("WOW! Du bist ein Sprachgenie! 🏆", 4000);
    else if (pct >= 60) showSpeech("Sehr gut! Ich bin stolz! 👏", 3500);
    else showSpeech("Üben macht den Meister! Nochmal? 💪", 3500);

    setScreen("result");
    setTimeout(() => setShowReward(true), 600);
  }

  // ─── PDF ──────────────────────────────────────────────────────────────────────

  function handleDownloadPdf() {
    const now = new Date();
    const dateStr = `${now.getDate().toString().padStart(2, "0")}.${(now.getMonth() + 1).toString().padStart(2, "0")}.${now.getFullYear()}`;
    generateDeutschTestPdf({
      grade,
      date: dateStr,
      scoreCount,
      total: answers.length,
      scorePct,
      noteValue: mark.note,
      noteLabel: mark.label,
      noteColor: mark.color,
      questions,
      answers,
    });
  }

  // ─── NEUSTART ────────────────────────────────────────────────────────────────

  function restart() {
    setScreen("topics");
    setShowReward(false);
    setEarnedCard(null);
    setAvatarMood("idle");
    setAvatarSpeech("");
  }

  function changeGrade(g: number) {
    setGrade(g);
    setSelectedIds([]);
    setIncludeLesetest(false);
    setScreen("topics");
  }

  function toggleSubtopic(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  // ─── AVATAR (floating, with speech bubble) ────────────────────────────────────

  const AvatarWidget = () => (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-1 pointer-events-none">
      <AnimatePresence>
        {avatarSpeech && (
          <motion.div
            key={avatarSpeech}
            initial={{ opacity: 0, scale: 0.7, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative bg-white text-black text-[11px] font-bold px-3 py-2 rounded-2xl rounded-br-sm shadow-xl max-w-[160px] text-center mr-2"
          >
            {avatarSpeech}
            {/* tail */}
            <div className="absolute -bottom-1.5 right-3 w-3 h-3 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-28 h-28 sm:w-36 sm:h-36">
        <AvatarCompanion
          {...avatarProps}
          mood={avatarMood}
          jumpTrigger={jumpTrigger}
          fixed={false}
        />
      </div>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0A0A1A] text-white relative overflow-hidden">

      <AvatarWidget />

      <AnimatePresence mode="wait">

        {/* ── KLASSE WÄHLEN ─────────────────────────────────────────────────── */}
        {screen === "grade" && (
          <motion.div
            key="grade"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen flex flex-col items-center justify-center p-6"
          >
            <Link href="/" className="absolute top-4 left-4 text-white/50 hover:text-white flex items-center gap-1 text-sm">
              <Home size={16} /> Hauptmenü
            </Link>

            <div className="flex items-center gap-3 mb-2">
              <BookOpen size={36} className="text-[#00D4FF]" />
              <h1 className="text-4xl font-black tracking-wider text-[#00D4FF]" style={{ textShadow: "0 0 20px rgba(0,212,255,0.4)" }}>
                DEUTSCH TEST
              </h1>
            </div>
            <p className="text-white/50 mb-10 text-sm">Wähle deine Klassenstufe</p>

            <div className="grid grid-cols-4 gap-3 w-full max-w-sm">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
                <motion.button
                  key={g}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => changeGrade(g)}
                  className="aspect-square rounded-xl bg-[#12122A] border border-[#00D4FF]/20
                             hover:border-[#00D4FF]/80 hover:bg-[#00D4FF]/10
                             flex flex-col items-center justify-center gap-1 transition-all"
                >
                  <span className="text-2xl font-black text-[#00D4FF]">{g}</span>
                  <span className="text-[10px] text-white/40">Klasse</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── THEMEN WÄHLEN ─────────────────────────────────────────────────── */}
        {screen === "topics" && (
          <motion.div
            key="topics"
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="min-h-screen flex flex-col p-4 pb-32 max-w-lg mx-auto"
          >
            {/* Header */}
            <div className="flex items-center gap-3 pt-4 mb-1">
              <button onClick={() => setScreen("grade")} className="text-white/50 hover:text-white p-1">
                <ArrowLeft size={20} />
              </button>
              <BookOpen size={20} className="text-[#00D4FF]" />
              <span className="font-black text-[#00D4FF] tracking-wide">DEUTSCH TEST</span>
              <span className="ml-auto text-white/40 text-sm bg-[#00D4FF]/10 px-3 py-1 rounded-full">
                Klasse {grade}
              </span>
            </div>
            <p className="text-white/40 text-xs mb-5 ml-9">Wähle die Themenbereiche für deinen Test</p>

            {/* Themes + Subtopics */}
            <div className="flex flex-col gap-3">
              {themes.map((theme) => (
                <div key={theme.id} className="bg-[#12122A] rounded-xl overflow-hidden border border-white/5">
                  <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderLeft: `3px solid ${theme.color}` }}>
                    <span className="text-lg">{theme.icon}</span>
                    <span className="font-bold text-sm" style={{ color: theme.color }}>{theme.name}</span>
                  </div>
                  <div className="px-3 pb-3 flex flex-col gap-1.5 ml-3">
                    {theme.subtopics.map((sub) => {
                      const sel = selectedIds.includes(sub.id);
                      const empty = sub.questions.length === 0;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => !empty && toggleSubtopic(sub.id)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-all
                            ${sel
                              ? "bg-[#00D4FF]/15 border border-[#00D4FF]/50 text-white"
                              : empty
                                ? "bg-white/3 border border-white/5 text-white/25 cursor-not-allowed"
                                : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all
                            ${sel ? "bg-[#00D4FF] border-[#00D4FF]" : "border-white/30"}`}>
                            {sel && <Check size={10} strokeWidth={3} className="text-black" />}
                          </div>
                          <span>{sub.name}</span>
                          {empty && <span className="ml-auto text-[10px] text-white/25">bald</span>}
                          {!empty && (
                            <span className="ml-auto text-[10px] text-white/30">{sub.questions.length} Fr.</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Lesetest */}
              <button
                onClick={() => setIncludeLesetest((v) => !v)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm transition-all border
                  ${includeLesetest
                    ? "bg-[#FFD700]/10 border-[#FFD700]/50 text-white"
                    : "bg-[#12122A] border-white/5 text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all
                  ${includeLesetest ? "bg-[#FFD700] border-[#FFD700]" : "border-white/30"}`}>
                  {includeLesetest && <Check size={11} strokeWidth={3} className="text-black" />}
                </div>
                <span className="text-lg">📖</span>
                <div>
                  <div className="font-bold" style={{ color: includeLesetest ? "#FFD700" : undefined }}>
                    Lesetest
                  </div>
                  <div className="text-[11px] text-white/40">Text lesen &amp; Fragen beantworten</div>
                </div>
              </button>
            </div>

            {/* Start Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A0A1A] to-transparent">
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                onClick={startTest}
                disabled={selectedIds.length === 0 && !includeLesetest}
                className="w-full max-w-lg mx-auto block py-4 rounded-xl font-black text-lg
                           bg-[#00D4FF] text-black disabled:opacity-30 disabled:cursor-not-allowed
                           transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)]"
              >
                TEST STARTEN (15 Aufgaben) →
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
          <motion.div
            key={`test-${idx}`}
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="min-h-screen flex flex-col p-4 pb-28 max-w-lg mx-auto"
          >
            {/* Header */}
            <div className="flex items-center gap-3 pt-4 mb-3">
              <button onClick={() => setScreen("topics")} className="text-white/40 hover:text-white p-1">
                <ArrowLeft size={18} />
              </button>
              <div className="flex-1">
                <div className="flex justify-between text-xs text-white/40 mb-1">
                  <span>Aufgabe {idx + 1} / {totalQ}</span>
                  <span className="text-[#00D4FF]/60">Klasse {grade}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#00D4FF] rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
              {/* live correct counter */}
              <div className="text-right shrink-0">
                <div className="text-[11px] text-white/30">Richtig</div>
                <div className="text-sm font-black text-[#00FF88]">
                  {answers.filter(a => a.correct).length}
                  <span className="text-white/20 font-normal">/{idx}</span>
                </div>
              </div>
            </div>

            {/* Passage (Lesetest) */}
            {currentQ.passageText && (
              <motion.div
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="bg-[#12122A] border border-[#FFD700]/30 rounded-xl p-4 mb-4"
              >
                {currentQ.passageTitle && (
                  <p className="text-[#FFD700] text-xs font-bold mb-2 uppercase tracking-wide">
                    📖 {currentQ.passageTitle}
                  </p>
                )}
                <p className="text-white/80 text-sm leading-relaxed">{currentQ.passageText}</p>
              </motion.div>
            )}

            {/* Question Card */}
            <div className="bg-[#12122A] rounded-2xl border border-white/10 p-5 flex flex-col gap-5">
              <p className="text-white text-lg font-semibold leading-snug">{currentQ.question}</p>
              {currentQ.hint && (
                <p className="text-white/40 text-xs -mt-3">💡 {currentQ.hint}</p>
              )}

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
                    placeholder="Deine Antwort..."
                    autoFocus
                    className={`w-full bg-[#1A1A35] border rounded-xl px-4 py-3 text-white text-base outline-none
                      placeholder:text-white/25 transition-all
                      ${showFeedback
                        ? lastCorrect
                          ? "border-[#00FF88] bg-[#00FF88]/10"
                          : "border-[#FF2D78] bg-[#FF2D78]/10"
                        : "border-white/20 focus:border-[#00D4FF]/60"
                      }`}
                  />
                  {!showFeedback && (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      disabled={!typingInput.trim()}
                      className="py-3 rounded-xl bg-[#00D4FF] text-black font-black
                                 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      ANTWORTEN →
                    </motion.button>
                  )}
                </form>
              )}

              {/* Feedback */}
              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold
                      ${lastCorrect
                        ? "bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/30"
                        : "bg-[#FF2D78]/20 text-[#FF2D78] border border-[#FF2D78]/30"
                      }`}
                  >
                    {lastCorrect
                      ? <><Check size={18} /> Richtig! 🌟</>
                      : <><XIcon size={18} /> Richtig wäre: <strong className="ml-1">
                          {Array.isArray(currentQ.answer) ? currentQ.answer[0] : currentQ.answer ?? currentQ.options?.[currentQ.correct ?? 0]}
                        </strong></>
                    }
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* ── ERGEBNIS ──────────────────────────────────────────────────────── */}
        {screen === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex flex-col p-4 pb-10 max-w-lg mx-auto"
          >
            {/* Card Reward */}
            {showReward && earnedCard && (
              <RewardReveal
                rarity={earnedCard as "bronze" | "silver" | "gold" | "legendary"}
                game="deutschtest"
                score={scoreCount}
                total={answers.length}
                onDone={() => setShowReward(false)}
              />
            )}

            <div className="w-full pt-6">
              {/* Title */}
              <div className="flex items-center justify-center gap-2 mb-5">
                <BookOpen size={22} className="text-[#00D4FF]" />
                <span className="text-[#00D4FF] font-black tracking-wide">DEUTSCH TEST — Klasse {grade}</span>
              </div>

              {/* Avatar + Note side by side */}
              <div className="flex items-center gap-5 mb-6 bg-[#12122A] rounded-2xl border border-white/10 p-4">
                {/* Avatar preview */}
                <div className="w-24 h-24 shrink-0">
                  <AvatarCompanion
                    {...avatarProps}
                    mood={avatarMood}
                    jumpTrigger={jumpTrigger}
                    fixed={false}
                  />
                </div>
                {/* Note */}
                <div className="flex-1">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 shrink-0"
                      style={{ borderColor: mark.color, boxShadow: `0 0 25px ${mark.color}40` }}
                    >
                      <span className="text-3xl font-black" style={{ color: mark.color }}>{mark.note}</span>
                      <span className="text-[9px] text-white/40 uppercase">Note</span>
                    </div>
                    <div>
                      <p className="text-lg font-bold" style={{ color: mark.color }}>{mark.label}</p>
                      <p className="text-white/50 text-sm">{scoreCount} / {answers.length} richtig</p>
                      <p className="text-white/30 text-xs">{scorePct}%</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Detailed Analysis */}
              <div className="bg-[#12122A] rounded-xl border border-white/10 overflow-hidden mb-4">
                <div className="px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/40 font-bold uppercase tracking-wide">Auswertung</span>
                  <div className="flex gap-2 text-[11px]">
                    <span className="text-[#00FF88]">✓ {scoreCount} richtig</span>
                    <span className="text-white/20">·</span>
                    <span className="text-[#FF2D78]">✗ {answers.length - scoreCount} falsch</span>
                  </div>
                </div>

                {/* Wrong answers highlighted */}
                {answers.some(a => !a.correct) && (
                  <div className="px-4 py-2 bg-[#FF2D78]/5 border-b border-[#FF2D78]/10">
                    <p className="text-[11px] text-[#FF2D78]/70 font-bold mb-2">📌 Das musst du noch üben:</p>
                    <div className="flex flex-col gap-1.5">
                      {questions.map((q, i) => {
                        const ans = answers[i];
                        if (!ans || ans.correct) return null;
                        return (
                          <div key={i} className="flex items-start gap-2">
                            <XIcon size={12} className="text-[#FF2D78] mt-0.5 shrink-0" />
                            <div className="min-w-0">
                              <p className="text-white/60 text-xs leading-snug line-clamp-1">{q.question}</p>
                              <p className="text-[#00FF88] text-xs">→ {ans.expected}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* All questions list */}
                <div className="divide-y divide-white/5">
                  {questions.map((q, i) => {
                    const ans = answers[i];
                    if (!ans) return null;
                    return (
                      <div key={i} className="flex items-start gap-3 px-4 py-2.5">
                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0
                          ${ans.correct ? "bg-[#00FF88]/20 text-[#00FF88]" : "bg-[#FF2D78]/20 text-[#FF2D78]"}`}>
                          {ans.correct ? <Check size={10} /> : <XIcon size={10} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/60 text-xs leading-snug line-clamp-2">{q.question}</p>
                          {!ans.correct && (
                            <p className="text-[#00FF88] text-[11px] mt-0.5 font-medium">✓ {ans.expected}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mb-3">
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  onClick={restart}
                  className="flex-1 py-3.5 rounded-xl bg-[#00D4FF] text-black font-black flex items-center justify-center gap-2"
                >
                  <RotateCcw size={17} /> Nochmal
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  onClick={handleDownloadPdf}
                  className="flex-1 py-3.5 rounded-xl border-2 border-sky-400/40 text-sky-400 font-bold flex items-center justify-center gap-2"
                  style={{ background: "rgba(56,189,248,0.08)" }}
                >
                  <Download size={17} /> PDF
                </motion.button>
              </div>
              <Link
                href="/"
                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/40 font-bold
                           flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm"
              >
                <Home size={16} /> Hauptmenü
              </Link>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
