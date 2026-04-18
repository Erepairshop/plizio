"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type PatternFinishRound = {
  id: string;
  taskDescription: LocalizedText;
  pattern: LocalizedText[]; 
  options: { id: string; text: LocalizedText; isCorrect: boolean }[];
};

export default function PatternFinishView({
  rounds,
  color,
  lang,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<PatternFinishRound>) {
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
      aria-label="Pattern Finish Game"
    >
      {/* Progress */}
      <div className="flex flex-col items-center mb-6 z-10 w-full" aria-live="polite">
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
      <div className="text-center mb-8 z-10 px-2">
        <h2 
          className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight"
          tabIndex={0}
        >
          {round.taskDescription[lang]}
        </h2>
      </div>

      {/* Pattern Display */}
      <div 
        className="flex flex-row flex-wrap justify-center items-center gap-2 md:gap-4 mb-10 z-10"
        role="group"
        aria-label="Pattern to complete"
      >
        <AnimatePresence mode="popLayout">
          {round.pattern.map((item, idx) => {
            const isMissing = item[lang] === "?";
            
            let revealedText = item[lang];
            if (isMissing && selectedId) {
              const correctOpt = round.options.find(o => o.isCorrect);
              if (correctOpt) {
                revealedText = correctOpt.text[lang];
              }
            }

            return (
              <motion.div
                key={`pat-${currentIdx}-${idx}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`
                  flex items-center justify-center 
                  min-w-[4.5rem] min-h-[4.5rem] w-20 h-20 md:w-32 md:h-32 rounded-2xl shadow-sm md:shadow-md 
                  text-base md:text-2xl font-bold p-2 text-center break-words
                  ${isMissing && !selectedId ? "bg-slate-100 border-4 border-dashed border-slate-300 text-slate-400" : "bg-white text-slate-800"}
                  ${isMissing && selectedId ? "bg-green-100 text-green-800 border-4 border-green-500 shadow-lg" : ""}
                `}
                style={{
                  borderColor: (!isMissing && !selectedId) ? color : undefined,
                  borderWidth: (!isMissing && !selectedId) ? '3px' : undefined
                }}
                tabIndex={0}
                aria-label={isMissing ? "Missing pattern item" : revealedText}
              >
                {revealedText}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Options */}
      <div 
        className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-3 md:gap-6 z-10 w-full px-2"
        role="group"
        aria-label="Pattern options"
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
              whileHover={{ scale: selectedId ? 1 : 1.03 }}
              whileTap={{ scale: selectedId ? 1 : 0.97 }}
              className={`
                flex-1 min-w-[120px] max-w-full sm:max-w-[200px] min-h-[60px] md:min-h-[80px]
                rounded-xl shadow-md flex items-center justify-center
                text-lg md:text-xl font-bold border-4 cursor-pointer p-3 text-center transition-colors
                focus:outline-none focus:ring-4 focus:ring-opacity-50
                ${bgColor}
                ${!selectedId ? "hover:shadow-lg hover:bg-slate-50 border-transparent" : ""}
              `}
              style={{
                borderColor: (!selectedId && !isWrongSelected && !isCorrectRevealed) ? color : undefined,
                boxShadow: (!selectedId && !isWrongSelected && !isCorrectRevealed) ? `0 4px 0 ${color}40` : undefined
              }}
              aria-label={opt.text[lang]}
              aria-disabled={!!selectedId}
              tabIndex={0}
            >
              {opt.text[lang]}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
