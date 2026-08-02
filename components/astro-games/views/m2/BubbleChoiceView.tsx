"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";
import { shuffleDeterministic, useTimeoutRegistry } from "../../utils";

export type BubbleItem = {
  id: string;
  text: LocalizedText;
  emoji?: string;
  isCorrect: boolean;
};

export type BubbleChoiceRound = {
  id: string;
  taskDescription: LocalizedText;
  bubbles: BubbleItem[];
};

export default function BubbleChoiceView({
  rounds,
  color,
  lang,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<BubbleChoiceRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const scheduleTimeout = useTimeoutRegistry();

  const currentRound = rounds[roundIdx];

  const shuffledBubbles = useMemo(() => {
    if (!currentRound) return [];
    return shuffleDeterministic(currentRound.bubbles, `${currentRound.id}-bubbles`);
  }, [currentRound]);

  if (!currentRound) return null;

  const handleSelect = (bubbleId: string, isCorrect: boolean) => {
    if (selectedId) return;
    setSelectedId(bubbleId);

    if (isCorrect) {
      onCorrect?.();
      setScore((s) => s + 10);
    } else {
      onWrong?.();
      setScore((s) => Math.max(0, s - 2));
    }

    scheduleTimeout(() => {
      setSelectedId(null);
      if (roundIdx + 1 < rounds.length) {
        setRoundIdx((i) => i + 1);
      } else {
        const maxScore = rounds.length * 10;
        onDone(score + (isCorrect ? 10 : 0), maxScore);
      }
    }, 1500);
  };

  const defaultTasks: Record<string, string> = {
    en: "Choose the correct bubble!",
    hu: "Válaszd ki a helyes buborékot!",
    de: "Wähle die richtige Blase!",
    ro: "Alege bula corectă!"
  };
  const taskText = currentRound.taskDescription 
    ? (currentRound.taskDescription[lang as keyof LocalizedText] || currentRound.taskDescription.en)
    : (defaultTasks[lang] || defaultTasks.en);

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-4">
      {/* Header */}
      <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10">
        <div className="text-xl md:text-2xl font-black text-white mb-2">🎯 {taskText}</div>
        <div className="text-white/70 font-bold mb-2">
          Round {roundIdx + 1} / {rounds.length}
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color || "#4ade80" }}
            initial={{ width: 0 }}
            animate={{ width: `${((roundIdx) / rounds.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="w-full flex justify-between mb-8 font-bold text-white/50 text-sm px-2">
        <span>Score: {score}</span>
      </div>

      {/* Bubbles Area */}
      <div className="flex-1 w-full relative flex items-center justify-center py-8 min-h-[300px]">
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center w-full max-w-xl">
          <AnimatePresence mode="wait">
            {shuffledBubbles.map((bubble, index) => {
              const isSelected = selectedId === bubble.id;
              const isWrongSelected = isSelected && !bubble.isCorrect;
              const isCorrectRevealed = selectedId && bubble.isCorrect;
              
              const isOtherCorrect = selectedId && !isSelected && bubble.isCorrect;
              const isHidden = selectedId && !isSelected && !bubble.isCorrect;

              let bgColor = "rgba(255,255,255,0.95)";
              let borderColor = color || '#4ade80';
              let textColor = "#1f2937";

              if (isWrongSelected) {
                bgColor = "#ef4444";
                borderColor = "#dc2626";
                textColor = "#ffffff";
              }
              if (isCorrectRevealed || isOtherCorrect) {
                bgColor = "#22c55e";
                borderColor = "#16a34a";
                textColor = "#ffffff";
              }

              const floatDelay = index * 0.2;

              return (
                <motion.button
                  key={bubble.id}
                  onClick={() => handleSelect(bubble.id, bubble.isCorrect)}
                  disabled={!!selectedId}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isHidden ? 0 : 1, 
                    opacity: isHidden ? 0 : 1,
                    y: selectedId ? 0 : [0, -10, 0, 10, 0],
                  }}
                  transition={{ 
                    scale: { duration: 0.4 },
                    opacity: { duration: 0.4 },
                    y: {
                      duration: 4 + (index % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: floatDelay
                    }
                  }}
                  whileHover={{ scale: selectedId ? 1 : 1.05 }}
                  whileTap={{ scale: selectedId ? 1 : 0.95 }}
                  className={`
                    w-28 h-28 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center
                    text-center p-3 shadow-lg border-4
                    font-bold text-sm md:text-base cursor-pointer
                    focus:outline-none focus:ring-4 focus:ring-offset-2
                  `}
                  style={{
                    backgroundColor: bgColor,
                    borderColor: borderColor,
                    color: textColor,
                    boxShadow: selectedId ? 'none' : `0 10px 25px -5px ${color || 'rgba(0,0,0,0.5)'}40`
                  }}
                  aria-label={bubble.text[lang as keyof LocalizedText] || bubble.text.en}
                  tabIndex={0}
                >
                  {bubble.emoji && <span className="text-2xl md:text-3xl mb-1">{bubble.emoji}</span>}
                  <span className="break-words line-clamp-3 leading-tight px-1">
                    {bubble.text[lang as keyof LocalizedText] || bubble.text.en}
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
