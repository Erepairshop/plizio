"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type TapMatchRound = {
  id: string;
  taskDescription?: LocalizedText;
  left: { id: string; label: LocalizedText; emoji?: string; img?: string }[];
  right: { id: string; label: LocalizedText; emoji?: string; img?: string }[];
  correctPairs: { leftId: string; rightId: string }[];
  timeLimitMs?: number;
};

export default function TapMatchView({ rounds, color, lang, mode, onDone, onCorrect, onWrong }: AstroGameProps<TapMatchRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());

  const currentRound = rounds[roundIdx];

  const handleNextRound = () => {
     if (roundIdx + 1 < rounds.length) {
        setRoundIdx(roundIdx + 1);
        setMatchedPairs(new Set());
        setSelectedLeft(null);
     } else {
        onDone(score, rounds.reduce((acc, r) => acc + r.correctPairs.length * 10, 0));
     }
  };

  const handleRightClick = (rightId: string) => {
     if (!selectedLeft) return;
     const isCorrect = currentRound.correctPairs.some(p => p.leftId === selectedLeft && p.rightId === rightId);
     if (isCorrect) {
        setScore(s => s + 10);
        setMatchedPairs(prev => new Set(prev).add(selectedLeft).add(rightId));
        setSelectedLeft(null);
        onCorrect?.();
        if (matchedPairs.size + 2 === currentRound.correctPairs.length * 2) {
           handleNextRound();
        }
     } else {
        setScore(s => Math.max(0, s - 2));
        setSelectedLeft(null);
        onWrong?.();
     }
  };

  // Shuffle right-side items per round so the answer isn't always next to its left counterpart
  const shuffledRight = useMemo(() => {
    if (!currentRound) return [];
    const arr = [...currentRound.right];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [currentRound]);

  if (!currentRound) return null;

  const defaultTasks: Record<string, string> = {
    en: "Find the matching pairs!",
    hu: "Keresd meg a párokat!",
    de: "Finde die passenden Paare!",
    ro: "Găsește perechile potrivite!"
  };
  const taskText = currentRound.taskDescription 
    ? (currentRound.taskDescription[lang as keyof LocalizedText] || currentRound.taskDescription.en)
    : (defaultTasks[lang] || defaultTasks.en);

  const totalPairs = currentRound.correctPairs.length;
  const currentPairProgress = matchedPairs.size / 2;

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
      <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10">
        <div className="text-xl font-black text-white mb-2">🎯 {taskText}</div>
        <div className="text-white/70 font-bold">
          {currentPairProgress} / {totalPairs}
        </div>
      </div>

      <div className="w-full flex justify-between mb-4 font-bold text-white/50 text-sm px-2">
         <span>Score: {score}</span>
         <span>Round: {roundIdx + 1} / {rounds.length}</span>
      </div>

      <div className="flex w-full gap-4">
         <div className="flex flex-col gap-2 w-1/2">
            {currentRound.left.map(item => {
               const isMatched = matchedPairs.has(item.id);
               const isSelected = selectedLeft === item.id;
               return (
                  <motion.button
                     key={item.id}
                     onClick={() => !isMatched && setSelectedLeft(item.id)}
                     disabled={isMatched}
                     className="p-3 rounded-xl border-2 font-bold min-h-[44px] text-white"
                     style={{ 
                        borderColor: isSelected ? color : 'rgba(255,255,255,0.2)',
                        background: isMatched ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.5)',
                        opacity: isMatched ? 0.5 : 1
                     }}
                     whileTap={{ scale: 0.95 }}
                  >
                     {item.emoji} {item.label[lang as keyof LocalizedText] || item.label.en}
                  </motion.button>
               )
            })}
         </div>
         <div className="flex flex-col gap-2 w-1/2">
            {shuffledRight.map(item => {
               const isMatched = matchedPairs.has(item.id);
               return (
                  <motion.button
                     key={item.id}
                     onClick={() => !isMatched && handleRightClick(item.id)}
                     disabled={isMatched}
                     className="p-3 rounded-xl border-2 font-bold min-h-[44px] text-white"
                     style={{ 
                        borderColor: 'rgba(255,255,255,0.2)',
                        background: isMatched ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.5)',
                        opacity: isMatched ? 0.5 : 1
                     }}
                     whileTap={{ scale: 0.95 }}
                  >
                     {item.emoji} {item.label[lang as keyof LocalizedText] || item.label.en}
                  </motion.button>
               )
            })}
         </div>
      </div>
    </div>
  );
}
