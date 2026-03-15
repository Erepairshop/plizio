"use client";
// EquationDrill — missing-number equations, visual card-based UI
// Same MCQ logic as OrbitQuiz but with bigger "?" display and card-style answers.
// Designed for Grade 4 multiplication/division islands.

import { memo, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";
import type { MathQuestion } from "@/lib/mathCurriculum";

const LABELS: Record<string, Record<string, string>> = {
  en: { correct: "Correct! ✅", wrong: "Wrong! Answer:", next: "Next", done: "Done!" },
  hu: { correct: "Helyes! ✅", wrong: "Téves! Helyes:", next: "Következő", done: "Kész!" },
  de: { correct: "Richtig! ✅", wrong: "Falsch! Antwort:", next: "Weiter", done: "Fertig!" },
  ro: { correct: "Corect! ✅", wrong: "Greșit! Răspuns:", next: "Înainte", done: "Gata!" },
};

const EquationDrill = memo(function EquationDrill({ questions, color, onDone, onCorrect, onWrong, lang = "en" }: {
  questions: MathQuestion[]; color: string;
  onDone: (score: number, total: number) => void;
  onCorrect?: () => void; onWrong?: () => void;
  lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const scoreRef = useRef(0);
  const [score, setScore] = useState(0);

  const q = questions[idx];
  const opts = q?.options ?? [];
  const isCorrect = selected !== null && String(selected) === String(q?.correctAnswer);

  const confirm = useCallback((opt: string | number) => {
    if (confirmed) return;
    const s = String(opt);
    setSelected(s);
    setConfirmed(true);
    if (s === String(q?.correctAnswer)) {
      scoreRef.current++;
      setScore(scoreRef.current);
      onCorrect?.();
    } else {
      onWrong?.();
    }
  }, [confirmed, q, onCorrect, onWrong]);

  const next = useCallback(() => {
    if (idx + 1 >= questions.length) {
      onDone(scoreRef.current, questions.length);
    } else {
      setIdx(i => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }, [idx, questions.length, onDone]);

  if (!q) return null;

  return (
    <div className="flex flex-col gap-5 w-full max-w-sm mx-auto">
      {/* Progress bar */}
      <div className="flex gap-1.5">
        {questions.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Score */}
      <div className="flex justify-end pr-1">
        <span className="font-black text-base" style={{ color }}>⭐ {score}</span>
      </div>

      {/* Equation display — large, centered */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
          className="rounded-3xl p-7 flex flex-col items-center gap-2"
          style={{ background: `${color}14`, border: `2px solid ${color}35` }}>
          <div className="flex items-center gap-2 justify-center">
            <p className="text-3xl font-black text-white text-center tracking-wide leading-tight">{q.question}</p>
            <SpeakButton text={q.question} lang={lang} size={18} />
          </div>
          {/* Pulsing ? hint */}
          {!confirmed && (
            <motion.span className="text-4xl font-black mt-1"
              style={{ color }}
              animate={{ opacity: [1, 0.4, 1], scale: [1, 1.08, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}>
              ?
            </motion.span>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Answer cards — 2×2 */}
      <div className="grid grid-cols-2 gap-3">
        {opts.map((opt, i) => {
          const s = String(opt);
          const isThis = s === selected;
          const isRight = s === String(q.correctAnswer);
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.14)";
          let tc = "rgba(255,255,255,0.85)";
          if (confirmed) {
            if (isRight)     { bg = "rgba(0,255,136,0.22)"; border = "#00FF88"; tc = "#00FF88"; }
            else if (isThis) { bg = "rgba(255,50,50,0.15)"; border = "#FF4444"; tc = "#FF6666"; }
          }
          return (
            <motion.button key={i} onClick={() => !confirmed && confirm(opt)}
              className="py-5 rounded-2xl font-black text-2xl text-center"
              style={{ background: bg, border: `2px solid ${border}`, color: tc }}
              whileTap={!confirmed ? { scale: 0.92 } : {}}>
              {s}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback + Next */}
      <AnimatePresence>
        {confirmed && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 items-center">
            <span className="font-black text-base" style={{ color: isCorrect ? "#00FF88" : "#FF6666" }}>
              {isCorrect ? lbl.correct : `${lbl.wrong} ${q.correctAnswer}`}
            </span>
            <motion.button onClick={next}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= questions.length ? lbl.done : lbl.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default EquationDrill;
