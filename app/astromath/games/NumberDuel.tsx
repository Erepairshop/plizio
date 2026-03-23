"use client";
import { memo, useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { SpeakButton } from "@/lib/astromath-tts";
import { T } from "@/app/astromath/games/translations";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

function randInt(lo: number, hi: number) { return Math.floor(Math.random() * (hi - lo + 1)) + lo; }

function genDuelPair(range: [number, number]): [number, number] {
  const [lo, hi] = range;
  let a = randInt(lo, hi), b = randInt(lo, hi);
  while (a === b) b = randInt(lo, hi);
  return [a, b];
}

const NumberDuel = memo(function NumberDuel({ sortRange, color, onDone }: {
  sortRange: [number, number]; color: string; onDone: (score: number, total: number) => void;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const ROUNDS = 10;
  const [round, setRound] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [pair, setPair] = useState<[number, number]>(() => genDuelPair(sortRange));
  const [askBigger, setAskBigger] = useState(() => Math.random() > 0.5);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const lockRef = useRef(false);

  const question = askBigger ? t.duelBigger : t.duelSmaller;
  const correctAnswer = askBigger ? Math.max(...pair) : Math.min(...pair);

  const tap = useCallback((val: number) => {
    if (lockRef.current || feedback) return;
    lockRef.current = true;
    const isRight = val === correctAnswer;
    const newCorrect = isRight ? correct + 1 : correct;
    if (isRight) setCorrect(newCorrect);
    else fireWrongAnswer({ question, wrongAnswer: String(val), correctAnswer: String(correctAnswer), topic: "Number Duel", lang });
    setFeedback(isRight ? "correct" : "wrong");
    setTimeout(() => {
      const nextRound = round + 1;
      if (nextRound >= ROUNDS) {
        onDone(newCorrect, ROUNDS);
      } else {
        setRound(nextRound);
        setPair(genDuelPair(sortRange));
        setAskBigger(Math.random() > 0.5);
        setFeedback(null);
        lockRef.current = false;
      }
    }, feedback === null ? (isRight ? 600 : 900) : 600);
  }, [feedback, correct, correctAnswer, round, sortRange, onDone]);

  return (
    <div className="flex flex-col gap-5 w-full max-w-sm mx-auto items-center">
      {/* Progress bar */}
      <div className="flex gap-1.5 w-full">
        {Array.from({ length: ROUNDS }).map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      <div className="text-white/40 text-xs font-bold">{round + 1} / {ROUNDS}</div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div key={round}
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
          className="flex items-center gap-2">
          <p className="text-xl font-black text-white text-center">{question}</p>
          <SpeakButton text={question} lang={lang} size={16} />
        </motion.div>
      </AnimatePresence>

      {/* Two number buttons */}
      <AnimatePresence mode="wait">
        <motion.div key={`pair-${round}`}
          initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="flex gap-6 items-center justify-center w-full">
          {pair.map((num, i) => {
            const isCorrect = feedback && num === correctAnswer;
            const isWrong = feedback === "wrong" && num !== correctAnswer;
            return (
              <motion.button key={i} onClick={() => tap(num)}
                className="w-28 h-28 rounded-3xl font-black text-5xl flex items-center justify-center"
                style={{
                  background: isCorrect ? "rgba(0,255,136,0.25)" : isWrong ? "rgba(255,50,50,0.18)" : `${color}18`,
                  border: `3px solid ${isCorrect ? "#00FF88" : isWrong ? "#FF4444" : color}`,
                  color: isCorrect ? "#00FF88" : isWrong ? "#FF6666" : "#fff",
                  boxShadow: isCorrect ? "0 0 20px rgba(0,255,136,0.4)" : isWrong ? "0 0 20px rgba(255,50,50,0.3)" : `0 0 15px ${color}33`,
                }}
                whileTap={!feedback ? { scale: 0.92 } : {}}>
                {num}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
            className="text-2xl font-black"
            style={{ color: feedback === "correct" ? "#00FF88" : "#FF6666" }}>
            {feedback === "correct" ? "✓ " + t.correct : "✗ " + t.wrong}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-white/30 text-sm">{correct}/{round + (feedback ? 1 : 0)}</div>
    </div>
  );
});

export default NumberDuel;
