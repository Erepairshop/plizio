"use client";
import { memo, useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { speak, SpeakButton } from "@/lib/astromath-tts";
import { T } from "@/app/astromath/games/translations";
import type { MathQuestion } from "@/lib/mathCurriculum";

const BlackHole = memo(function BlackHole({ questions, color, onDone, onCorrect, onWrong }: {
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
  const isCorrect = selected !== null && String(selected) === String(q?.correctAnswer);

  useEffect(() => {
    if (q?.question) speak(q.question, lang);
  }, [idx, q?.question, lang]);

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
    if (idx + 1 >= questions.length) onDone(scoreRef.current, questions.length);
    else { setIdx((i) => i + 1); setSelected(null); setConfirmed(false); }
  }, [idx, questions.length, onDone]);

  if (!q) return null;
  const opts = q.options ?? [];

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1 justify-center">
        {questions.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full transition-all"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>

      {/* Black hole visual */}
      <div className="flex flex-col items-center gap-3">
        <motion.div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl"
          style={{ background: "radial-gradient(circle, rgba(0,0,0,0.9) 30%, rgba(100,0,200,0.3) 70%, transparent)", border: `2px solid ${color}` }}
          animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
          🕳️
        </motion.div>
        <div className="rounded-2xl px-5 py-4 w-full flex items-center gap-3"
          style={{ background: "rgba(0,0,0,0.5)", border: `1.5px solid ${color}40` }}>
          <p className="text-xl font-black text-white flex-1 text-center">{q.question}</p>
          <SpeakButton text={q.question} lang={lang} size={16} />
        </div>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-2">
        {opts.map((opt, i) => {
          const isThis = String(opt) === String(selected);
          const isRight = String(opt) === String(q.correctAnswer);
          let bg = "rgba(0,0,0,0.4)";
          let border = "rgba(255,255,255,0.12)";
          if (confirmed) {
            if (isRight) { bg = "rgba(0,255,136,0.15)"; border = "#00FF88"; }
            else if (isThis) { bg = "rgba(255,50,50,0.1)"; border = "#FF4444"; }
          } else if (isThis) { bg = `${color}25`; border = color; }
          return (
            <motion.button key={i} onClick={() => !confirmed && confirm(opt)}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-left text-white/90 text-sm"
              style={{ background: bg, border: `2px solid ${border}` }}
              whileTap={!confirmed ? { scale: 0.98 } : {}}>
              {String(opt)}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {confirmed && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 items-center">
            <span className="font-black text-sm" style={{ color: isCorrect ? "#00FF88" : "#FF6666" }}>
              {isCorrect ? t.correct : `${t.wrong} ${q.correctAnswer}`}
            </span>
            <motion.button onClick={next}
              className="w-full py-3.5 rounded-2xl font-black text-white flex items-center justify-center gap-2"
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

export default BlackHole;
