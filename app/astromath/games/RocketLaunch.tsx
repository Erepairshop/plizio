"use client";
import { memo, useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { speak, SpeakButton } from "@/lib/astromath-tts";
import { T } from "@/app/astromath/games/translations";
import type { MathQuestion } from "@/lib/mathCurriculum";

const ROCKET_ROUNDS = 7;
const ROCKET_TIME = 5; // seconds per question

const RocketLaunch = memo(function RocketLaunch({ questions, color, onDone }: {
  questions: MathQuestion[]; color: string; onDone: (score: number, total: number) => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const [idx, setIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROCKET_TIME);
  const [answered, setAnswered] = useState<"correct" | "wrong" | "timeout" | null>(null);
  const [fuelFilled, setFuelFilled] = useState(0);
  const [done, setDone] = useState(false);
  const [tappedOpt, setTappedOpt] = useState<string | null>(null);
  const scoreRef = useRef(0);
  const lockRef = useRef(false);

  const q = questions[idx];

  // Build 2-option set: correct answer ALWAYS included + one wrong.
  // Stable order per question (idx % 2) so it doesn't re-randomize on re-render.
  const opts = useMemo(() => {
    const all = (q?.options ?? []).map(String);
    const correct = String(q?.correctAnswer ?? "");
    const wrongs = all.filter(o => o !== correct);
    if (!all.length) return [];
    const wrong = wrongs[0] ?? String(Number(correct) + 1);
    return idx % 2 === 0 ? [correct, wrong] : [wrong, correct];
  }, [idx, q]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-read question
  useEffect(() => {
    if (q?.question && !done) speak(q.question, lang);
  }, [idx, q, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  // Timer
  useEffect(() => {
    if (answered || done) return;
    if (timeLeft <= 0) { advance("timeout"); return; }
    const id = setTimeout(() => setTimeLeft((t) => t - 0.05), 50);
    return () => clearTimeout(id);
  }, [timeLeft, answered, done]); // eslint-disable-line react-hooks/exhaustive-deps

  const advance = useCallback((result: "correct" | "wrong" | "timeout") => {
    if (lockRef.current) return;
    lockRef.current = true;
    setAnswered(result);
    if (result === "correct") {
      scoreRef.current += 1;
      setFuelFilled((f) => f + 1);
    }
    setTimeout(() => {
      const nextIdx = idx + 1;
      if (nextIdx >= ROCKET_ROUNDS) {
        setDone(true);
      } else {
        setIdx(nextIdx);
        setTimeLeft(ROCKET_TIME);
        setAnswered(null);
        setTappedOpt(null);
        lockRef.current = false;
      }
    }, result === "correct" ? 500 : 700);
  }, [idx]);

  const tap = useCallback((opt: number | string) => {
    if (lockRef.current || answered) return;
    setTappedOpt(String(opt));
    const isRight = String(opt) === String(q?.correctAnswer);
    advance(isRight ? "correct" : "wrong");
  }, [answered, q, advance]);

  if (done) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto text-center">
        <motion.div className="text-7xl"
          animate={{ y: [0, -20, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          🚀
        </motion.div>
        <div>
          <p className="text-white font-black text-2xl">{t.rocketReady}</p>
          <p className="text-white/50 text-sm mt-2">{scoreRef.current}/{ROCKET_ROUNDS} {t.rocketFuel}</p>
        </div>
        <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}, #00FF88)` }}
            initial={{ width: 0 }}
            animate={{ width: `${(scoreRef.current / ROCKET_ROUNDS) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }} />
        </div>
        <motion.button onClick={() => onDone(scoreRef.current, ROCKET_ROUNDS)}
          className="w-full py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2"
          style={{ background: `linear-gradient(135deg, ${color}66, ${color}bb)`, border: `2px solid ${color}` }}
          whileTap={{ scale: 0.97 }}>
          {t.rocketContinue} <ChevronRight size={20} />
        </motion.button>
      </motion.div>
    );
  }

  if (!q) return null;
  const timePct = (timeLeft / ROCKET_TIME) * 100;
  const timerColor = timePct > 50 ? "#00FF88" : timePct > 25 ? "#FFD700" : "#FF4444";

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto items-center">
      {/* Fuel bar */}
      <div className="w-full flex items-center gap-2">
        <span className="text-white/40 text-xs font-bold whitespace-nowrap">🚀 {t.rocketFuel}</span>
        <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
          <motion.div className="h-full rounded-full transition-all duration-300"
            style={{ width: `${(fuelFilled / ROCKET_ROUNDS) * 100}%`, background: `linear-gradient(90deg, ${color}, #00FF88)` }} />
        </div>
        <span className="text-white/50 text-xs font-bold">{fuelFilled}/{ROCKET_ROUNDS}</span>
      </div>

      {/* Timer bar */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div className="h-full rounded-full transition-colors"
          style={{ width: `${timePct}%`, background: timerColor }} />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
          className="w-full rounded-3xl p-6 min-h-[110px] flex flex-col items-center justify-center gap-2 text-center"
          style={{ background: `${color}12`, border: `2px solid ${color}30` }}>
          <p className="text-2xl font-black text-white">{q.question}</p>
          <SpeakButton text={q.question} lang={lang} size={16} />
        </motion.div>
      </AnimatePresence>

      {/* 2 big answer buttons */}
      <div className="flex gap-3 w-full">
        {opts.map((opt, i) => {
          const isThis = !!answered && String(opt) === tappedOpt;
          const isRight = String(opt) === String(q?.correctAnswer);
          let bg = `${color}18`;
          let border = `${color}44`;
          if (answered) {
            if (isRight) { bg = "rgba(0,255,136,0.25)"; border = "#00FF88"; }
            else if (isThis && !isRight) { bg = "rgba(255,50,50,0.18)"; border = "#FF4444"; }
          }
          return (
            <motion.button key={i} onClick={() => tap(opt)}
              className="flex-1 py-6 rounded-2xl font-black text-3xl flex items-center justify-center"
              style={{ background: bg, border: `2.5px solid ${border}`, color: "#fff" }}
              whileTap={!answered ? { scale: 0.93 } : {}}>
              {String(opt)}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback flash */}
      <AnimatePresence>
        {answered && answered !== "timeout" && (
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            className="text-xl font-black"
            style={{ color: answered === "correct" ? "#00FF88" : "#FF6666" }}>
            {answered === "correct" ? "⚡ " + t.correct : "✗ " + t.wrong}
          </motion.div>
        )}
        {answered === "timeout" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xl font-black text-white/40">⏱</motion.div>
        )}
      </AnimatePresence>

      <div className="text-white/30 text-xs">{idx + 1}/{ROCKET_ROUNDS}</div>
    </div>
  );
});

export default RocketLaunch;
