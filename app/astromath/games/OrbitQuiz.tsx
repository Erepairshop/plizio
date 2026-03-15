"use client";
import { memo, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { SpeakButton } from "@/lib/astromath-tts";
import { T } from "@/app/astromath/games/translations";
import type { MathQuestion } from "@/lib/mathCurriculum";

const OrbitQuiz = memo(function OrbitQuiz({ questions, color, onDone, onCorrect, onWrong }: {
  questions: MathQuestion[]; color: string; onDone: (score: number, total: number) => void;
  onCorrect?: () => void; onWrong?: () => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);

  const q = questions[idx];
  const opts = q?.options ?? [];
  const isCorrect = selected !== null && String(selected) === String(q?.correctAnswer);

  const scoreRef = useRef(0);

  const confirm = useCallback((opt: number | string) => {
    if (confirmed) return;
    setSelected(opt);
    setConfirmed(true);
    if (String(opt) === String(q?.correctAnswer)) {
      scoreRef.current += 1;
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
      setIdx((i) => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }, [idx, questions.length, onDone]);

  if (!q) return null;

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {questions.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full transition-all"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="rounded-3xl p-5 min-h-[120px] flex items-center gap-3"
          style={{ background: `${color}12`, border: `1.5px solid ${color}30` }}>
          <p className="text-xl font-black text-white leading-snug flex-1 text-center">{q.question}</p>
          <SpeakButton text={q.question} lang={lang} size={16} />
        </motion.div>
      </AnimatePresence>

      {/* Options */}
      <div className="grid grid-cols-2 gap-2.5">
        {opts.map((opt, i) => {
          const isThis = String(opt) === String(selected);
          const isRight = String(opt) === String(q.correctAnswer);
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.12)";
          let textColor = "rgba(255,255,255,0.85)";
          if (confirmed) {
            if (isRight) { bg = "rgba(0,255,136,0.2)"; border = "#00FF88"; textColor = "#00FF88"; }
            else if (isThis && !isRight) { bg = "rgba(255,50,50,0.15)"; border = "#FF4444"; textColor = "#FF6666"; }
          } else if (isThis) {
            bg = `${color}30`; border = color; textColor = "#fff";
          }
          return (
            <motion.button key={i} onClick={() => !confirmed && confirm(opt)}
              className="py-4 px-3 rounded-2xl font-bold text-sm text-center transition-colors"
              style={{ background: bg, border: `2px solid ${border}`, color: textColor }}
              whileTap={!confirmed ? { scale: 0.96 } : {}}>
              {String(opt)}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback + Next */}
      <AnimatePresence>
        {confirmed && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 items-center">
            <span className="font-black text-base" style={{ color: isCorrect ? "#00FF88" : "#FF6666" }}>
              {isCorrect ? t.correct : `${t.wrong} ${q.correctAnswer}`}
            </span>
            <motion.button onClick={next}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= questions.length ? t.done : t.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default OrbitQuiz;
