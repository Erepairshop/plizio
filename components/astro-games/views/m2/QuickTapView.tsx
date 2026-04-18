"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type QuickTapItem = {
  id: string;
  content: LocalizedText;
  emoji?: string;
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
  const [roundIdx, setRoundIdx] = useState(0);
  const [tappedIds, setTappedIds] = useState<Set<string>>(new Set());
  const [errorIds, setErrorIds] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);

  const currentRound = rounds[roundIdx];

  const targetCount = useMemo(() => {
    if (!currentRound) return 0;
    return currentRound.items.filter((item) => item.isTarget).length;
  }, [currentRound]);

  useEffect(() => {
    setTappedIds(new Set());
    setErrorIds(new Set());
  }, [roundIdx]);

  if (!currentRound) return null;

  const handleNextRound = () => {
    if (roundIdx + 1 < rounds.length) {
      setRoundIdx(roundIdx + 1);
    } else {
      const maxScore = rounds.reduce((acc, r) => acc + r.items.filter(i => i.isTarget).length * 10, 0);
      onDone(score, maxScore);
    }
  };

  const handleItemTap = (item: QuickTapItem) => {
    if (tappedIds.has(item.id) || errorIds.has(item.id)) return;

    if (item.isTarget) {
      onCorrect?.();
      const newTapped = new Set(tappedIds).add(item.id);
      setTappedIds(newTapped);
      setScore((s) => s + 10);

      if (newTapped.size === targetCount) {
        setTimeout(handleNextRound, 800);
      }
    } else {
      onWrong?.();
      setErrorIds((prev) => new Set(prev).add(item.id));
      setScore((s) => Math.max(0, s - 2));

      setTimeout(() => {
        setErrorIds((prev) => {
          const updated = new Set(prev);
          updated.delete(item.id);
          return updated;
        });
      }, 500);
    }
  };

  const defaultTasks: Record<string, string> = {
    en: "Tap the correct items!",
    hu: "Érintsd meg a helyes elemeket!",
    de: "Tippe auf die richtigen Elemente!",
    ro: "Atinge elementele corecte!"
  };
  const taskText = currentRound.taskDescription 
    ? (currentRound.taskDescription[lang as keyof LocalizedText] || currentRound.taskDescription.en)
    : (defaultTasks[lang] || defaultTasks.en);

  const gridColsClass = currentRound.items.length > 12 
    ? "grid-cols-4 md:grid-cols-5" 
    : currentRound.items.length > 8 
      ? "grid-cols-3 md:grid-cols-4" 
      : "grid-cols-3";

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
      {/* Header */}
      <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10">
        <div className="text-xl font-black text-white mb-2">🎯 {taskText}</div>
        <div className="text-white/70 font-bold mb-2">
          {tappedIds.size} / {targetCount} found
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color || "#4ade80" }}
            initial={{ width: 0 }}
            animate={{ width: `${(tappedIds.size / targetCount) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="w-full flex justify-between mb-4 font-bold text-white/50 text-sm px-2">
        <span>Score: {score}</span>
        <span>Round: {roundIdx + 1} / {rounds.length}</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentRound.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`grid ${gridColsClass} gap-3 md:gap-4 w-full max-w-md aspect-square`}
        >
          {currentRound.items.map((item) => {
            const isTapped = tappedIds.has(item.id);
            const isError = errorIds.has(item.id);

            return (
              <motion.button
                key={item.id}
                onClick={() => handleItemTap(item)}
                disabled={isTapped}
                className="relative w-full h-full flex flex-col items-center justify-center rounded-xl font-bold shadow-md focus:outline-none focus:ring-4 focus:ring-offset-2 overflow-hidden"
                style={{
                  background: isTapped 
                    ? 'rgba(255,255,255,0.1)' 
                    : isError 
                      ? '#fee2e2' 
                      : 'rgba(255,255,255,0.95)',
                  borderWidth: '2px',
                  borderColor: isTapped 
                    ? color || '#4ade80' 
                    : isError 
                      ? '#ef4444' 
                      : 'transparent',
                  color: isTapped ? color || '#4ade80' : isError ? '#ef4444' : '#1f2937',
                  minHeight: "64px",
                }}
                whileHover={!isTapped ? { scale: 1.05 } : {}}
                whileTap={!isTapped ? { scale: 0.95 } : {}}
                animate={
                  isError
                    ? { x: [-5, 5, -5, 5, 0] }
                    : isTapped
                    ? { scale: [1, 1.1, 1], opacity: 0.7 }
                    : {}
                }
                transition={{ duration: 0.3 }}
                aria-label={item.content[lang as keyof LocalizedText] || item.content.en}
                tabIndex={0}
              >
                {item.emoji && <span className="text-2xl md:text-3xl mb-1">{item.emoji}</span>}
                <span className="text-xs md:text-sm text-center px-1 break-words line-clamp-2 leading-tight">
                  {item.content[lang as keyof LocalizedText] || item.content.en}
                </span>

                {isTapped && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color || "#4ade80" }}
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
