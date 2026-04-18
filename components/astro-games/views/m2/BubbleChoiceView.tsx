"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type BubbleChoiceRound = {
  id: string;
  taskDescription: LocalizedText;
  bubbles: { id: string; text: LocalizedText; isCorrect: boolean }[];
};

export default function BubbleChoiceView({
  rounds,
  color,
  lang,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<BubbleChoiceRound>) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const round = rounds[currentIdx];

  const handleSelect = (bubbleId: string, isCorrect: boolean) => {
    if (selectedId) return; // Prevent multiple clicks
    setSelectedId(bubbleId);

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

  return (
    <div className="flex flex-col w-full h-full p-4 overflow-hidden relative max-w-4xl mx-auto">
      {/* Task Description */}
      <div className="w-full bg-black/5 p-4 rounded-xl mb-4 text-center border-2 shadow-sm" style={{ borderColor: color || '#ccc' }}>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
          {round.taskDescription[lang]}
        </h2>
        <div className="text-slate-600 dark:text-white/70 font-bold mt-2">
          {currentIdx + 1} / {rounds.length}
        </div>
      </div>

      {/* Bubbles Area */}
      <div className="flex-1 relative flex items-center justify-center z-10 p-4">
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center w-full">
          <AnimatePresence mode="popLayout">
            {round.bubbles.map((bubble, index) => {
              const isSelected = selectedId === bubble.id;
              const isWrongSelected = isSelected && !bubble.isCorrect;
              const isCorrectRevealed = selectedId && bubble.isCorrect;
              
              let bgColor = "bg-white dark:bg-slate-800 text-slate-800 dark:text-white";
              if (isWrongSelected) bgColor = "bg-red-500 text-white";
              if (isCorrectRevealed) bgColor = "bg-green-500 text-white";

              const floatDelay = index * 0.2;

              return (
                <motion.button
                  key={bubble.id}
                  onClick={() => handleSelect(bubble.id, bubble.isCorrect)}
                  disabled={!!selectedId}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1,
                    y: selectedId ? 0 : [0, -15, 0, 15, 0],
                  }}
                  transition={{ 
                    scale: { duration: 0.4 },
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: floatDelay
                    }
                  }}
                  whileHover={{ scale: selectedId ? 1 : 1.05 }}
                  whileTap={{ scale: selectedId ? 1 : 0.95 }}
                  className={`
                    w-28 h-28 md:w-40 md:h-40 rounded-full flex items-center justify-center
                    text-center p-3 shadow-lg border-4 border-transparent
                    font-bold text-sm md:text-lg cursor-pointer
                    ${bgColor}
                    ${!selectedId ? "hover:shadow-xl hover:border-blue-200" : ""}
                  `}
                  style={{
                    borderColor: (!selectedId && !isWrongSelected && !isCorrectRevealed) ? color : undefined
                  }}
                  aria-label={bubble.text[lang]}
                  tabIndex={0}
                  >
                  {bubble.text[lang]}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
