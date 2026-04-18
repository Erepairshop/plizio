"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type QuickTapItem = {
  id: string;
  content: string;
  isTarget: boolean;
};

export type QuickTapRound = {
  id: string;
  taskDescription: LocalizedText;
  items: QuickTapItem[];
};

export default function QuickTapView({
  rounds,
  color,
  lang,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<QuickTapRound>) {
  const [currentRoundIdx, setCurrentRoundIdx] = useState(0);
  const [tappedIds, setTappedIds] = useState<Set<string>>(new Set());
  const [errorIds, setErrorIds] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);

  const currentRound = rounds[currentRoundIdx];

  // Number of targets in the current round
  const targetCount = useMemo(() => {
    if (!currentRound) return 0;
    return currentRound.items.filter((item: QuickTapItem) => item.isTarget).length;
  }, [currentRound]);

  // Handle resetting states when round changes
  useEffect(() => {
    setTappedIds(new Set());
    setErrorIds(new Set());
  }, [currentRoundIdx]);

  if (!currentRound) return null;

  const handleItemTap = (item: QuickTapItem) => {
    if (tappedIds.has(item.id)) return;

    if (item.isTarget) {
      if (onCorrect) onCorrect();
      const newTapped = new Set(tappedIds);
      newTapped.add(item.id);
      setTappedIds(newTapped);
      setScore((s) => s + 1);

      if (newTapped.size === targetCount) {
        // Round complete
        setTimeout(() => {
          if (currentRoundIdx < rounds.length - 1) {
            setCurrentRoundIdx((prev) => prev + 1);
          } else {
            // Count total possible targets for max score
            const maxScore = rounds.reduce((acc: number, r: QuickTapRound) => acc + r.items.filter((i: QuickTapItem) => i.isTarget).length, 0);
            onDone(score + 1, maxScore);
          }
        }, 800);
      }
    } else {
      if (onWrong) onWrong();
      const newError = new Set(errorIds);
      newError.add(item.id);
      setErrorIds(newError);
      setTimeout(() => {
        setErrorIds((prev) => {
          const updated = new Set(prev);
          updated.delete(item.id);
          return updated;
        });
      }, 500);
    }
  };

  const progress = (currentRoundIdx / rounds.length) * 100;
  
  // Choose grid size depending on items count
  const gridColsClass = currentRound.items.length > 12 
    ? "grid-cols-4 md:grid-cols-5" 
    : currentRound.items.length > 8 
      ? "grid-cols-3 md:grid-cols-4" 
      : "grid-cols-3";

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4 space-y-8">
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
          <span>{`Round ${currentRoundIdx + 1} / ${rounds.length}`}</span>
          <span>{`${tappedIds.size} / ${targetCount} found`}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: `${(currentRoundIdx / rounds.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 min-h-[60px] flex items-center justify-center">
        {currentRound.taskDescription[lang]}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentRound.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`grid ${gridColsClass} gap-3 md:gap-4 w-full max-w-md`}
        >
          {currentRound.items.map((item: QuickTapItem) => {
            const isTapped = tappedIds.has(item.id);
            const isError = errorIds.has(item.id);

            return (
              <motion.button
                key={item.id}
                onClick={() => handleItemTap(item)}
                className={`relative w-full aspect-square flex items-center justify-center rounded-xl text-3xl md:text-5xl font-bold shadow-sm focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                  isTapped ? "opacity-50" : "bg-white hover:bg-gray-50"
                }`}
                style={{
                  minWidth: "64px",
                  minHeight: "64px",
                  border: isTapped ? `4px solid ${color}` : "2px solid #e5e7eb",
                  color: isTapped ? color : "#1f2937",
                }}
                whileHover={!isTapped ? { scale: 1.05 } : {}}
                whileTap={!isTapped ? { scale: 0.95 } : {}}
                animate={
                  isError
                    ? { x: [-5, 5, -5, 5, 0], backgroundColor: "#fee2e2", borderColor: "#ef4444" }
                    : isTapped
                    ? { scale: [1, 1.1, 1], backgroundColor: "#f3f4f6" }
                    : { backgroundColor: "#ffffff", borderColor: "#e5e7eb" }
                }
                transition={{ duration: 0.3 }}
                disabled={isTapped}
                aria-label={item.content}
                tabIndex={0}
              >
                {item.content}
                {isTapped && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: color }}
                  >
                    ✓
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
