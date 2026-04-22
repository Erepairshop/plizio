"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type FillBlankRound = {
  id: string;
  taskDescription: LocalizedText;
  sentenceParts: {
    before: LocalizedText;
    after: LocalizedText;
  };
  options: LocalizedText[];
  correctIndex: number;
};

export default function FillBlankView({
  rounds,
  color,
  lang,
  mode,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<FillBlankRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  if (!rounds || rounds.length === 0) return null;
  const currentRound = rounds[roundIdx];
  const totalRounds = rounds.length;

  const shuffledIndices = useMemo(() => {
    if (!currentRound) return [];
    const arr = Array.from({ length: currentRound.options.length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [currentRound]);

  const handleSelect = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOpt(idx);
    setHasAnswered(true);

    if (idx === currentRound.correctIndex) {
      setScore((s) => s + 10);
      onCorrect?.();
    } else {
      onWrong?.();
    }
  };

  const handleNext = () => {
    if (roundIdx + 1 < totalRounds) {
      setRoundIdx((r) => r + 1);
      setSelectedOpt(null);
      setHasAnswered(false);
    } else {
      onDone(score + (selectedOpt === currentRound.correctIndex ? 10 : 0), totalRounds * 10);
    }
  };

  const taskText = currentRound.taskDescription[lang] || currentRound.taskDescription.en;
  const progressText = `${roundIdx + 1} / ${totalRounds}`;
  const progressPercent = ((roundIdx + 1) / totalRounds) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 font-sans">
      <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10 flex flex-col gap-2">
        <h2 className="text-xl font-black text-white">{taskText}</h2>
        <div className="text-white/70 font-bold">{progressText}</div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full"
            style={{ backgroundColor: color }}
            initial={{ width: `${(roundIdx / totalRounds) * 100}%` }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className="w-full flex justify-center mb-6 text-white/50 font-bold text-sm">
        Score: {score}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentRound.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full flex flex-col items-center gap-8"
        >
          <div className="text-2xl text-center text-white font-medium bg-white/5 p-6 rounded-2xl border border-white/10 w-full shadow-lg">
            <span>{currentRound.sentenceParts.before[lang] || currentRound.sentenceParts.before.en}</span>
            <span className={`inline-block mx-2 px-4 py-1 min-w-[100px] border-b-4 text-center transition-colors duration-300 ${
              hasAnswered 
                ? selectedOpt === currentRound.correctIndex 
                  ? "border-green-400 text-green-400" 
                  : "border-red-400 text-red-400"
                : "border-white/50 text-white"
            }`}>
              {selectedOpt !== null 
                ? (currentRound.options[selectedOpt][lang] || currentRound.options[selectedOpt].en) 
                : "..."}
            </span>
            <span>{currentRound.sentenceParts.after[lang] || currentRound.sentenceParts.after.en}</span>
          </div>

          <div className="flex flex-col gap-3 w-full">
            {shuffledIndices.map((origIdx) => {
              const opt = currentRound.options[origIdx];
              const isSelected = selectedOpt === origIdx;
              const isCorrect = origIdx === currentRound.correctIndex;
              const idx = origIdx;
              let btnClass = "w-full p-4 rounded-xl border-2 font-bold text-lg transition-all duration-300 ";

              if (!hasAnswered) {
                btnClass += "bg-black/50 text-white border-white/20 hover:border-white/50 hover:bg-black/70 active:scale-95";
              } else {
                if (isCorrect) {
                  btnClass += "bg-green-500/20 text-green-300 border-green-500";
                } else if (isSelected && !isCorrect) {
                  btnClass += "bg-red-500/20 text-red-300 border-red-500";
                } else {
                  btnClass += "bg-black/20 text-white/30 border-transparent opacity-50";
                }
              }

              return (
                <motion.button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={hasAnswered}
                  className={btnClass}
                  whileTap={!hasAnswered ? { scale: 0.95 } : {}}
                >
                  {opt[lang] || opt.en}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {hasAnswered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            onClick={handleNext}
            style={{ backgroundColor: color }}
            className="mt-8 w-full py-4 rounded-xl text-white font-black text-xl shadow-lg active:scale-95 transition-transform"
          >
            {roundIdx + 1 < totalRounds ? "Next" : "Finish"}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
