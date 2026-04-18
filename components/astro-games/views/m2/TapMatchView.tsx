"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type TapMatchRound = {
  id: string;
  left: { id: string; label: LocalizedText; emoji?: string; img?: string }[];
  right: { id: string; label: LocalizedText; emoji?: string; img?: string }[];
  correctPairs: { leftId: string; rightId: string }[];
  timeLimitMs: number;
};

export default function TapMatchView({ rounds, color, lang, mode, onDone, onCorrect, onWrong }: AstroGameProps<TapMatchRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(rounds[0]?.timeLimitMs / 1000 || 60);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());

  const currentRound = rounds[roundIdx];

  useEffect(() => {
    if (!currentRound) return;
    const timer = setInterval(() => {
      setTimeLeft(t => Math.max(0, t - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [currentRound, roundIdx]);

  useEffect(() => {
    if (timeLeft === 0 && currentRound) {
       handleNextRound();
    }
  }, [timeLeft, currentRound]);

  const handleNextRound = () => {
     if (roundIdx + 1 < rounds.length) {
        setRoundIdx(roundIdx + 1);
        setTimeLeft(rounds[roundIdx + 1].timeLimitMs / 1000);
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

  if (!currentRound) return null;

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
      <div className="w-full flex justify-between mb-4 font-bold text-white">
         <span>Score: {score}</span>
         <span>Time: {timeLeft}s</span>
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
                     {item.emoji} {item.label[lang] || item.label.en}
                  </motion.button>
               )
            })}
         </div>
         <div className="flex flex-col gap-2 w-1/2">
            {currentRound.right.map(item => {
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
                     {item.emoji} {item.label[lang] || item.label.en}
                  </motion.button>
               )
            })}
         </div>
      </div>
    </div>
  );
}
