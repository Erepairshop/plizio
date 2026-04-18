"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type SoundMatchRound = {
  id: string;
  taskDescription: LocalizedText;
  audioEmoji: string;
  options: {
    id: string;
    label: LocalizedText;
    isCorrect: boolean;
  }[];
};

export default function SoundMatchView({ 
  rounds, 
  color, 
  lang, 
  onDone, 
  onCorrect, 
  onWrong 
}: AstroGameProps<SoundMatchRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const currentRound = rounds[roundIdx];
  const maxScore = rounds.length;

  const handleSelect = (optionId: string, isCorrect: boolean) => {
    if (selectedId) return;
    setSelectedId(optionId);

    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      onCorrect?.();
      
      setTimeout(() => {
        setSelectedId(null);
        if (roundIdx + 1 < rounds.length) {
          setRoundIdx(roundIdx + 1);
        } else {
          onDone(newScore, maxScore);
        }
      }, 1500);
    } else {
      onWrong?.();
      setTimeout(() => {
        setSelectedId(null);
        if (roundIdx + 1 < rounds.length) {
          setRoundIdx(roundIdx + 1);
        } else {
          onDone(score, maxScore);
        }
      }, 1500);
    }
  };

  if (!currentRound) return null;

  const progress = (roundIdx / rounds.length) * 100;

  return (
    <div 
      className="flex flex-col w-full h-full p-4 overflow-hidden relative max-w-4xl mx-auto"
      role="region"
      aria-label="Sound Match Game"
    >
      {/* Progress */}
      <div className="flex flex-col items-center mb-6 z-10 w-full" aria-live="polite">
        <span className="text-sm font-bold mb-2 text-slate-700" aria-label={`Round ${roundIdx + 1} of ${rounds.length}`}>
          {roundIdx + 1} / {rounds.length}
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
            initial={{ width: `${((roundIdx - 1) / rounds.length) * 100}%` }}
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
          {currentRound.taskDescription[lang]}
        </h2>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentRound.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full flex flex-col items-center gap-8 z-10"
        >
          {/* Audio Emoji Display (Simulating sound source) */}
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 flex items-center justify-center text-7xl md:text-8xl shadow-lg relative bg-white"
            style={{ borderColor: color, boxShadow: `0 8px 0 ${color}40` }}
            animate={{ 
              scale: selectedId ? 1 : [1, 1.05, 1],
              rotate: selectedId ? 0 : [-2, 2, -2]
            }}
            transition={{ repeat: selectedId ? 0 : Infinity, duration: 1.5, ease: "easeInOut" }}
            tabIndex={0}
            aria-label={`Sound source icon: ${currentRound.audioEmoji}`}
          >
            {currentRound.audioEmoji}
            <div className="absolute -right-3 -top-3 text-4xl bg-white rounded-full p-1 shadow-md">🔊</div>
          </motion.div>

          {/* Options Grid */}
          <div 
            className="flex flex-col sm:grid sm:grid-cols-2 gap-3 md:gap-4 w-full mt-4 px-2"
            role="group"
            aria-label="Matching options"
          >
            {currentRound.options.map((opt, idx) => {
              const isSelected = selectedId === opt.id;
              const isWrongSelected = isSelected && !opt.isCorrect;
              const isCorrectRevealed = selectedId && opt.isCorrect;
              
              let bgColor = "bg-white text-slate-800";
              if (isWrongSelected) bgColor = "bg-red-500 text-white border-red-600";
              if (isCorrectRevealed) bgColor = "bg-green-500 text-white border-green-600";

              return (
                <motion.button
                  key={`opt-${roundIdx}-${opt.id}`}
                  onClick={() => handleSelect(opt.id, opt.isCorrect)}
                  disabled={!!selectedId}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ scale: selectedId ? 1 : 1.02 }}
                  whileTap={{ scale: selectedId ? 1 : 0.98 }}
                  className={`
                    p-4 rounded-xl border-4 font-bold min-h-[70px] flex items-center justify-center 
                    text-xl md:text-2xl cursor-pointer shadow-md transition-colors
                    focus:outline-none focus:ring-4 focus:ring-opacity-50
                    ${bgColor}
                    ${!selectedId ? "hover:shadow-lg hover:bg-slate-50 border-transparent" : ""}
                  `}
                  style={{ 
                    borderColor: (!selectedId && !isWrongSelected && !isCorrectRevealed) ? color : undefined,
                    boxShadow: (!selectedId && !isWrongSelected && !isCorrectRevealed) ? `0 4px 0 ${color}40` : undefined
                  }}
                  aria-label={opt.label[lang]}
                  aria-disabled={!!selectedId}
                  tabIndex={0}
                >
                  {opt.label[lang]}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
