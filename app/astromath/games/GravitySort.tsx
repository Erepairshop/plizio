"use client";
import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/components/LanguageProvider";
import { speak, SpeakButton } from "@/lib/astromath-tts";
import { T } from "@/app/astromath/games/translations";
import { generateSortRound, type SortRound } from "@/lib/astromath";

const GravitySort = memo(function GravitySort({ sortRange, color, onDone, generateRound }: {
  sortRange: [number, number]; color: string; onDone: (score: number, total: number) => void;
  generateRound?: () => SortRound;
}) {
  const { lang } = useLang();
  const t = T[lang as keyof typeof T] ?? T.en;
  const ROUNDS = 5;
  const gen = useCallback(() => generateRound ? generateRound() : generateSortRound(sortRange), [generateRound, sortRange]);
  const [round, setRound] = useState(0);
  const [roundData, setRoundData] = useState(() => gen());
  const [tapped, setTapped] = useState<number[]>([]);
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const tap = useCallback((idx: number) => {
    if (feedback || tapped.includes(idx)) return;
    const newTapped = [...tapped, idx];
    setTapped(newTapped);

    if (newTapped.length === roundData.numbers.length) {
      const userOrder = newTapped.map((i) => roundData.numbers[i]);
      const isCorrect = userOrder.every((n, i) => n === roundData.sorted[i]);
      const newCorrect = isCorrect ? correct + 1 : correct;
      setFeedback(isCorrect ? "correct" : "wrong");
      setCorrect(newCorrect);

      setTimeout(() => {
        if (round + 1 >= ROUNDS) {
          onDone(newCorrect, ROUNDS);
        } else {
          setRound((r) => r + 1);
          setRoundData(gen());
          setTapped([]);
          setFeedback(null);
        }
      }, 900);
    }
  }, [feedback, tapped, roundData, correct, round, sortRange, onDone]);

  return (
    <div className="flex flex-col gap-5 w-full max-w-sm mx-auto items-center">
      {/* Progress */}
      <div className="flex gap-1.5 w-full">
        {Array.from({ length: ROUNDS }).map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < round ? "#00FF88" : i === round ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <p className="text-white/60 text-sm font-medium text-center">{t.tapAscending}</p>
        <SpeakButton text={t.tapAscending} lang={lang} size={14} />
      </div>

      {/* Numbers to tap */}
      <div className="flex gap-3 flex-wrap justify-center">
        {roundData.numbers.map((num, idx) => {
          const tapIdx = tapped.indexOf(idx);
          const isTapped = tapIdx >= 0;

          return (
            <motion.button key={idx} onClick={() => tap(idx)}
              className="w-16 h-16 rounded-2xl font-black text-2xl flex items-center justify-center relative"
              style={{
                background: isTapped
                  ? feedback === "correct" ? "rgba(0,255,136,0.3)" : feedback === "wrong" ? "rgba(255,50,50,0.2)" : `${color}30`
                  : "rgba(255,255,255,0.07)",
                border: `2.5px solid ${isTapped ? (feedback === "correct" ? "#00FF88" : feedback === "wrong" ? "#FF4444" : color) : "rgba(255,255,255,0.15)"}`,
                color: isTapped ? "#fff" : "rgba(255,255,255,0.7)",
                opacity: isTapped && !feedback ? 0.7 : 1,
              }}
              whileTap={!isTapped && !feedback ? { scale: 0.9 } : {}}>
              {roundData.labels ? roundData.labels[idx] : num}
              {isTapped && <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[9px] font-black flex items-center justify-center"
                style={{ background: color, color: "#fff" }}>{tapIdx + 1}</span>}
            </motion.button>
          );
        })}
      </div>

      {/* Correct order — only shown on wrong answer */}
      {feedback === "wrong" && (
        <div className="flex gap-2 items-center">
          {roundData.sorted.map((n, i) => (
            <span key={i} className="text-white/50 font-bold text-sm">
              {i > 0 ? "< " : ""}{roundData.sortedLabels ? roundData.sortedLabels[i] : n}
            </span>
          ))}
        </div>
      )}

      <AnimatePresence>
        {feedback && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            className="text-xl font-black"
            style={{ color: feedback === "correct" ? "#00FF88" : "#FF6666" }}>
            {feedback === "correct" ? t.correct : t.wrong}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default GravitySort;
