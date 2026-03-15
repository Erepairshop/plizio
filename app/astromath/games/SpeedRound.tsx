"use client";
// SpeedRound — timed quiz, 11 seconds per question, auto-advance
// Designed for Grade 4+: fast-paced, no "next" button needed

import { memo, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MathQuestion } from "@/lib/mathCurriculum";

const TIME_PER_Q = 11; // seconds
const READ_DELAY = 3;  // seconds — options locked while student reads the question

const LABELS: Record<string, Record<string, string>> = {
  en: { timeUp: "Time's up!", correct: "Correct! ✅", wrong: "Wrong ❌" },
  hu: { timeUp: "Időlimit!", correct: "Helyes! ✅", wrong: "Téves ❌" },
  de: { timeUp: "Zeit!", correct: "Richtig! ✅", wrong: "Falsch ❌" },
  ro: { timeUp: "Timp!", correct: "Corect! ✅", wrong: "Greșit ❌" },
};

const SpeedRound = memo(function SpeedRound({ questions, color, onDone, onCorrect, onWrong, lang = "en" }: {
  questions: MathQuestion[]; color: string;
  onDone: (score: number, total: number) => void;
  onCorrect?: () => void; onWrong?: () => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const idxRef = useRef(0);
  const scoreRef = useRef(0);
  const advancingRef = useRef(false);

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_Q);
  const [readLock, setReadLock] = useState(true);  // locked during reading phase
  const [readCountdown, setReadCountdown] = useState(READ_DELAY);
  const [selected, setSelected] = useState<string | null>(null);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);

  const q = questions[idx];

  const advance = useCallback((wasCorrect: boolean) => {
    if (advancingRef.current) return;
    advancingRef.current = true;
    setFlash(wasCorrect ? "correct" : "wrong");

    setTimeout(() => {
      const nextIdx = idxRef.current + 1;
      if (nextIdx >= questions.length) {
        onDone(scoreRef.current, questions.length);
        return;
      }
      idxRef.current = nextIdx;
      advancingRef.current = false;
      setIdx(nextIdx);
      setSelected(null);
      setFlash(null);
      setTimeLeft(TIME_PER_Q);
      setReadLock(true);
      setReadCountdown(READ_DELAY);
    }, 650);
  }, [questions.length, onDone]);

  // Reading phase: count down 3s then unlock options
  useEffect(() => {
    if (!readLock) return;
    if (readCountdown <= 0) { setReadLock(false); return; }
    const id = setTimeout(() => setReadCountdown(c => Math.max(0, c - 0.1)), 100);
    return () => clearTimeout(id);
  }, [readLock, readCountdown]);

  const pick = useCallback((opt: string) => {
    if (readLock || selected !== null || flash !== null || advancingRef.current) return;
    setSelected(opt);
    const correct = opt === String(q?.correctAnswer);
    if (correct) {
      scoreRef.current++;
      setScore(scoreRef.current);
      onCorrect?.();
    } else {
      onWrong?.();
    }
    advance(correct);
  }, [selected, flash, q, onCorrect, onWrong, advance]);

  // Timer tick — only runs after reading phase
  useEffect(() => {
    if (readLock || selected !== null || flash !== null) return;
    if (timeLeft <= 0) {
      onWrong?.();
      advance(false);
      return;
    }
    const id = setTimeout(() => setTimeLeft(t => Math.max(0, t - 0.1)), 100);
    return () => clearTimeout(id);
  }, [timeLeft, selected, flash, advance, onWrong, readLock]);

  if (!q) return null;

  const readPct = (readCountdown / READ_DELAY) * 100;
  const timerPct = readLock ? 100 : (timeLeft / TIME_PER_Q) * 100;
  const timerColor = readLock ? `${color}80` : timerPct > 55 ? "#00FF88" : timerPct > 25 ? "#FFD700" : "#FF4444";
  const opts = q.options ?? [];

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Score + counter */}
      <div className="flex items-center justify-between px-1">
        <span className="text-white/60 text-sm font-bold">{idx + 1}/{questions.length}</span>
        <span className="font-black text-lg" style={{ color }}>⭐ {score}</span>
      </div>

      {/* Timer bar */}
      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full"
          style={{ width: `${timerPct}%`, background: timerColor }}
          transition={{ duration: 0.1 }} />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
          className="rounded-3xl p-6 min-h-[110px] flex items-center justify-center"
          style={{ background: `${color}12`, border: `1.5px solid ${color}30` }}>
          <p className="text-2xl font-black text-white text-center leading-snug">{q.question}</p>
        </motion.div>
      </AnimatePresence>

      {/* Options — 2×2 grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {opts.map((opt, i) => {
          const sOpt = String(opt);
          const isSelected = sOpt === selected;
          const isCorrect = sOpt === String(q.correctAnswer);
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.12)";
          let textColor = "rgba(255,255,255,0.85)";
          if (flash) {
            if (isCorrect) { bg = "rgba(0,255,136,0.2)"; border = "#00FF88"; textColor = "#00FF88"; }
            else if (isSelected) { bg = "rgba(255,50,50,0.15)"; border = "#FF4444"; textColor = "#FF6666"; }
          }
          return (
            <motion.button key={i} onClick={() => pick(sOpt)}
              className="py-5 px-3 rounded-2xl font-bold text-base text-center"
              style={{ background: readLock ? "rgba(255,255,255,0.03)" : bg,
                       border: `2px solid ${readLock ? "rgba(255,255,255,0.07)" : border}`,
                       color: readLock ? "rgba(255,255,255,0.25)" : textColor,
                       opacity: readLock ? 0.5 : 1 }}
              whileTap={!readLock && !selected && !flash ? { scale: 0.93 } : {}}>
              {sOpt}
            </motion.button>
          );
        })}
      </div>

      {/* Reading phase indicator */}
      <AnimatePresence>
        {readLock && !flash && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2">
            <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div className="h-full rounded-full" style={{ background: color }}
                initial={{ width: "100%" }}
                animate={{ width: `${readPct}%` }}
                transition={{ duration: 0.1 }} />
            </div>
            <span className="text-white/40 text-xs font-bold shrink-0">📖 {Math.ceil(readCountdown)}s</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flash label */}
      <AnimatePresence>
        {flash && (
          <motion.p initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="text-center font-black text-base"
            style={{ color: flash === "correct" ? "#00FF88" : "#FF6666" }}>
            {flash === "correct" ? lbl.correct : `${lbl.wrong} → ${q.correctAnswer}`}
          </motion.p>
        )}
        {!flash && timeLeft < 3 && !selected && (
          <motion.p animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 0.5 }}
            className="text-center text-sm font-black text-red-400">
            ⚡ {Math.ceil(timeLeft)}s
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

export default SpeedRound;
