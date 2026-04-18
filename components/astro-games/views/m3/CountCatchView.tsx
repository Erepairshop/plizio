"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type CountCatchRound = {
  id: string;
  taskDescription: LocalizedText;
  itemsToCount: { id: string; emoji: string; x: number; y: number }[]; // x, y percentages
  options: { id: string; number: number; isCorrect: boolean }[];
};

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

  const round = rounds[currentIdx];

  const handleSelect = (optionId: string, isCorrect: boolean) => {
    if (selectedId) return;
    setSelectedId(optionId);

    if (isCorrect) {
      if (onCorrect) onCorrect();
      setScore((s) => s + 1);
    } else {
      if (onWrong) onWrong();
    }

    setTimeout(() => {
      setSelectedId(null);
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
    <div 
      className="flex flex-col w-full h-full p-4 overflow-hidden relative max-w-4xl mx-auto"
      role="region"
      aria-label="Count and Catch Game"
    >
      {/* Progress */}
      <div className="flex flex-col items-center mb-4 z-10 w-full" aria-live="polite">
        <span className="text-sm font-bold mb-2 text-slate-700" aria-label={`Round ${currentIdx + 1} of ${rounds.length}`}>
          {currentIdx + 1} / {rounds.length}
        </span>
        <div 
          className="w-full bg-slate-200 h-3 rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <motion.div
            className="h-full"
            style={{ backgroundColor: color }}
            initial={{ width: `${((currentIdx - 1) / rounds.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Task Description */}
      <div className="text-center mb-4 z-10 px-2">
        <h2 
          className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight"
          tabIndex={0}
        >
          {round.taskDescription[lang]}
        </h2>
      </div>

      {/* Catch / Count Area */}
      <div 
        className="flex-1 relative w-full max-w-2xl mx-auto rounded-3xl border-4 border-dashed mb-6 overflow-hidden z-10 shadow-inner"
        style={{ backgroundColor: "rgba(255,255,255,0.7)", borderColor: color }}
        role="img"
        aria-label="Area with items to count"
      >
        <AnimatePresence mode="popLayout">
          {round.itemsToCount.map((item, idx) => (
            <motion.div
              key={`${round.id}-${item.id}`}
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                y: [0, -10, 0, 10, 0],
                x: [0, 5, 0, -5, 0]
              }}
              exit={{ opacity: 0, scale: 0, rotate: 30 }}
              transition={{
                scale: { duration: 0.4, delay: idx * 0.05 },
                opacity: { duration: 0.4, delay: idx * 0.05 },
                rotate: { duration: 0.4, delay: idx * 0.05 },
                y: { duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute text-5xl md:text-7xl drop-shadow-md select-none pointer-events-none"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                transform: `translate(-50%, -50%)`
              }}
              aria-hidden="true"
            >
              {item.emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Options */}
      <div 
        className="flex flex-wrap justify-center gap-3 md:gap-6 mb-4 z-10 w-full"
        role="group"
        aria-label="Number options"
      >
        {round.options.map((opt, idx) => {
          const isSelected = selectedId === opt.id;
          const isWrongSelected = isSelected && !opt.isCorrect;
          const isCorrectRevealed = selectedId && opt.isCorrect;
          
          let bgColor = "bg-white text-slate-800";
          if (isWrongSelected) bgColor = "bg-red-500 text-white border-red-600";
          if (isCorrectRevealed) bgColor = "bg-green-500 text-white border-green-600";

          return (
            <motion.button
              key={`opt-${currentIdx}-${opt.id}`}
              onClick={() => handleSelect(opt.id, opt.isCorrect)}
              disabled={!!selectedId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
              whileHover={{ scale: selectedId ? 1 : 1.05 }}
              whileTap={{ scale: selectedId ? 1 : 0.95 }}
              className={`
                min-w-[4.5rem] min-h-[4.5rem] w-20 h-20 md:w-28 md:h-28 
                rounded-full shadow-md flex items-center justify-center
                text-3xl md:text-5xl font-extrabold border-4 cursor-pointer transition-colors
                focus:outline-none focus:ring-4 focus:ring-opacity-50
                ${bgColor}
                ${!selectedId ? "hover:shadow-lg hover:bg-slate-50 border-transparent" : ""}
              `}
              style={{
                borderColor: (!selectedId && !isWrongSelected && !isCorrectRevealed) ? color : undefined,
                boxShadow: (!selectedId && !isWrongSelected && !isCorrectRevealed) ? `0 6px 0 ${color}40` : undefined
              }}
              aria-label={opt.number.toString()}
              aria-disabled={!!selectedId}
              tabIndex={0}
            >
              {opt.number}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
