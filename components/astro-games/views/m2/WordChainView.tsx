"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type WordChainRound = {
  id: string;
  taskDescription: LocalizedText;
  startWord: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
};

export default function WordChainView({
  rounds,
  color,
  lang = "en",
  mode,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<WordChainRound>) {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!rounds || rounds.length === 0) return null;

  const currentRound = rounds[currentRoundIndex];
  const isLastRound = currentRoundIndex === rounds.length - 1;
  const progressPercent = ((currentRoundIndex) / rounds.length) * 100;

  const shuffledIndices = useMemo(() => {
    if (!currentRound) return [];
    const arr = Array.from({ length: currentRound.options.length }, (_, i) => i);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [currentRound]);

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return;

    setHasAnswered(true);
    setSelectedOption(index);

    const isCorrect = index === currentRound.correctIndex;

    if (isCorrect) {
      setScore((s) => s + 10);
      onCorrect?.();
    } else {
      onWrong?.();
    }

    setTimeout(() => {
      handleNext(isCorrect);
    }, 1500); // Auto-advance after 1.5s
  };

  const handleNext = (wasCorrect: boolean) => {
    if (isLastRound) {
      onDone(score + (wasCorrect ? 10 : 0), rounds.length * 10);
    } else {
      setCurrentRoundIndex((i) => i + 1);
      setHasAnswered(false);
      setSelectedOption(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-lg mx-auto p-4 h-full min-h-[400px]">
      <div className="w-full bg-black/40 p-4 rounded-xl mb-6 text-center border-2 border-white/10 shadow-sm">
        <h2 className="text-xl font-black text-white mb-2">
          {currentRound.taskDescription[lang as keyof typeof currentRound.taskDescription] || currentRound.taskDescription.en}
        </h2>
        <div className="text-white/70 font-bold mb-2">
          {currentRoundIndex + 1} / {rounds.length}
        </div>
        <div className="w-full bg-gray-200/20 rounded-full h-2.5 overflow-hidden">
          <motion.div
            className="h-2.5 rounded-full"
            style={{ backgroundColor: color || "#3b82f6" }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col justify-center items-center gap-8 relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`start-${currentRound.id}`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center"
          >
            <div className="text-3xl md:text-4xl font-black text-white bg-white/10 shadow-lg px-8 py-6 rounded-3xl border-2 border-white/20 mb-6 w-full text-center break-words">
              {currentRound.startWord[lang as keyof typeof currentRound.startWord] || currentRound.startWord.en}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {shuffledIndices.map((origIdx) => {
                const opt = currentRound.options[origIdx];
                const isSelected = selectedOption === origIdx;
                const isCorrect = origIdx === currentRound.correctIndex;
                const idx = origIdx;
                
                let bgColor = "bg-white/10";
                let borderColor = "border-white/20";

                if (hasAnswered) {
                  if (isCorrect) {
                    bgColor = "bg-green-500/80";
                    borderColor = "border-green-400";
                  } else if (isSelected) {
                    bgColor = "bg-red-500/80";
                    borderColor = "border-red-400";
                  } else {
                    bgColor = "bg-white/5";
                    borderColor = "border-white/5";
                  }
                } else if (isSelected) {
                   borderColor = "border-blue-400";
                   bgColor = "bg-blue-500/50";
                }

                return (
                  <motion.button
                    key={`${currentRound.id}-opt-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={!hasAnswered ? { scale: 1.02 } : {}}
                    whileTap={!hasAnswered ? { scale: 0.95 } : {}}
                    onClick={() => handleOptionClick(idx)}
                    disabled={hasAnswered}
                    className={`w-full p-6 rounded-2xl border-4 text-xl md:text-2xl font-black text-white min-h-[80px] shadow-lg transition-colors duration-300
                      ${bgColor} ${borderColor} ${!hasAnswered ? 'hover:bg-white/20' : ''}`}
                  >
                    {opt[lang as keyof typeof opt] || opt.en}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
