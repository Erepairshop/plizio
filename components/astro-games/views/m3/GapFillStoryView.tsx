"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type GapFillStoryRound = { id: string; story: LocalizedText; blanks: { index: number; options: { id: string; label: LocalizedText }[]; correctOptionId: string; hintLetter?: string; category?: string; }[]; };

export default function GapFillStoryView({ rounds, color, lang, mode, onDone, onCorrect, onWrong }: AstroGameProps<GapFillStoryRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);

  const currentRound = rounds[roundIdx];

  const handleNextRound = () => {
    if (roundIdx + 1 < rounds.length) {
      setRoundIdx(roundIdx + 1);
    } else {
      onDone(score + 10, rounds.length * 10);
    }
  };

  const handleCorrect = () => {
    setScore(s => s + 10);
    onCorrect?.();
    handleNextRound();
  };

  const handleWrong = () => {
    onWrong?.();
  };

  if (!currentRound) return null;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
      <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10">
        <div className="text-xl font-black text-white mb-2">🎯 GapFillStoryView Task</div>
        <div className="text-white/70 font-bold">
          {roundIdx + 1} / {rounds.length}
        </div>
      </div>
      <div className="w-full flex justify-between font-bold text-white/50 text-sm px-2 mb-4">
        <span>Score: {score}</span>
        <span>Round: {roundIdx + 1} / {rounds.length}</span>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <motion.button
          onClick={handleCorrect}
          className="p-4 rounded-xl border-2 font-bold bg-green-500/20 text-white min-h-[44px]"
          style={{ borderColor: color }}
          whileTap={{ scale: 0.95 }}
        >
          Simulate Correct
        </motion.button>
        <motion.button
          onClick={handleWrong}
          className="p-4 rounded-xl border-2 font-bold bg-red-500/20 text-white min-h-[44px]"
          style={{ borderColor: "red" }}
          whileTap={{ scale: 0.95 }}
        >
          Simulate Wrong
        </motion.button>
      </div>
    </div>
  );
}
