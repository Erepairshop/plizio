"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type CountCatchRound = {
  id: string;
  taskDescription: LocalizedText;
  itemsToCount: { id: string; emoji: string; x: number; y: number }[]; // x, y percentages
  options: { id: string; number: number; isCorrect: boolean }[];
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function CountCatchView({
  rounds,
  color,
  lang,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<CountCatchRound>) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const round = rounds[currentIdx];

  const shuffledOptions = useMemo(() => {
    if (!round) return [];
    return shuffle(round.options);
  }, [round?.id]);

  const handleSelect = (optionId: string, isCorrect: boolean) => {
    if (isRevealing) return;
    setSelectedId(optionId);
    setIsRevealing(true);

    if (isCorrect) {
      onCorrect?.();
      setScore((s) => s + 1);
    } else {
      onWrong?.();
    }

    setTimeout(() => {
      setSelectedId(null);
      setIsRevealing(false);
      if (currentIdx + 1 < rounds.length) {
        setCurrentIdx((i) => i + 1);
      } else {
        onDone(score + (isCorrect ? 1 : 0), rounds.length);
      }
    }, 1500);
  };

  if (!round) return null;

  const progress = (currentIdx / rounds.length) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto p-4 min-h-[80vh]">
      {/* Progress Header */}
      <div className="w-full bg-black/40 p-4 rounded-xl mb-6 text-center border-2 border-white/10 shadow-lg">
        <h2 className="text-xl md:text-2xl font-black text-white mb-3">
          {round.taskDescription[lang as keyof LocalizedText] || round.taskDescription.en}
        </h2>
        <div className="flex flex-col items-center gap-2">
          <div className="text-white/80 font-bold text-sm">
            {currentIdx + 1} / {rounds.length}
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: `${((currentIdx) / rounds.length) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Catch / Count Area */}
      <div className="flex-1 w-full relative mb-8 rounded-2xl bg-black/20 border-2 border-white/10 overflow-hidden shadow-inner min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={round.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {round.itemsToCount.map((item, idx) => (
              <motion.div
                key={`${round.id}-${item.id}`}
                className="absolute text-5xl md:text-6xl drop-shadow-lg"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  transform: `translate(-50%, -50%)`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -15, 0],
                  rotate: [-5, 5, -5]
                }}
                transition={{
                  scale: { duration: 0.4, delay: idx * 0.1, type: "spring", bounce: 0.5 },
                  opacity: { duration: 0.4, delay: idx * 0.1 },
                  y: { duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: Math.random() },
                  rotate: { duration: 3 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: Math.random() }
                }}
              >
                {item.emoji}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Options */}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {shuffledOptions.map((opt, idx) => {
          const isSelected = selectedId === opt.id;
          const isCorrect = opt.isCorrect;
          
          let bgStyle = "bg-black/40 hover:bg-black/60";
          let borderColor = "rgba(255,255,255,0.2)";
          let opacity = 1;

          if (selectedId) {
            if (isSelected) {
              bgStyle = isCorrect ? "bg-green-500" : "bg-red-500";
              borderColor = isCorrect ? "#22c55e" : "#ef4444";
            } else {
              opacity = 0.5;
              if (isCorrect) {
                bgStyle = "bg-green-500";
                borderColor = "#22c55e";
                opacity = 1;
              }
            }
          }

          return (
            <motion.button
              key={`opt-${currentIdx}-${opt.id}`}
              onClick={() => handleSelect(opt.id, opt.isCorrect)}
              disabled={isRevealing}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.1, type: "spring" }}
              whileTap={{ scale: isRevealing ? 1 : 0.9 }}
              className={`
                w-20 h-20 md:w-24 md:h-24 rounded-2xl border-2 font-black
                text-3xl md:text-4xl text-white shadow-lg transition-colors
                flex items-center justify-center
                ${bgStyle}
              `}
              style={{ borderColor }}
            >
              {opt.number}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
