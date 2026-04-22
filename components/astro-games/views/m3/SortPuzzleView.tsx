"use client";
import React, { useState, useEffect } from "react";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type SortPuzzleRound = {
  id: string;
  taskDescription: LocalizedText;
  items: {
    id: string;
    label: LocalizedText;
  }[];
  correctOrder: string[];
};

export default function SortPuzzleView({
  rounds,
  color,
  lang,
  mode,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<SortPuzzleRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [items, setItems] = useState<{id: string, label: LocalizedText}[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [correctFlags, setCorrectFlags] = useState<Record<string, boolean>>({});

  if (!rounds || rounds.length === 0) return null;
  const currentRound = rounds[roundIdx];
  const totalRounds = rounds.length;

  useEffect(() => {
    if (currentRound) {
      // Create a safely shuffled copy
      const shuffled = [...currentRound.items].sort(() => Math.random() - 0.5);
      // Ensure it's not already correct by chance
      if (shuffled.map(i => i.id).join(",") === currentRound.correctOrder.join(",")) {
        shuffled.reverse();
      }
      setItems(shuffled);
      setIsChecking(false);
      setCorrectFlags({});
    }
  }, [currentRound]);

  const handleCheck = () => {
    setIsChecking(true);
    let allCorrect = true;
    const flags: Record<string, boolean> = {};

    items.forEach((item, index) => {
      const isItemCorrect = currentRound.correctOrder[index] === item.id;
      flags[item.id] = isItemCorrect;
      if (!isItemCorrect) allCorrect = false;
    });

    setCorrectFlags(flags);

    if (allCorrect) {
      setScore(s => s + 10);
      onCorrect?.();
      setTimeout(() => {
        if (roundIdx + 1 < totalRounds) {
          setRoundIdx(r => r + 1);
        } else {
          onDone(score + 10, totalRounds * 10);
        }
      }, 1500);
    } else {
      onWrong?.();
      setTimeout(() => {
        setIsChecking(false);
        setCorrectFlags({});
      }, 1500);
    }
  };

  const taskText = currentRound.taskDescription[lang] || currentRound.taskDescription.en;
  const progressText = `${roundIdx + 1} / ${totalRounds}`;
  const progressPercent = ((roundIdx + 1) / totalRounds) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 font-sans min-h-[80vh]">
      <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10 flex flex-col gap-2">
        <h2 className="text-xl font-black text-white">{taskText}</h2>
        <div className="text-white/70 font-bold">{progressText}</div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full"
            style={{ backgroundColor: color }}
            initial={{ width: `${(roundIdx / totalRounds) * 100}%` }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <div className="w-full flex justify-center mb-6 text-white/50 font-bold text-sm">
        Score: {score}
      </div>

      <div className="w-full flex-1 flex flex-col gap-3">
        <Reorder.Group 
          axis="y" 
          values={items} 
          onReorder={setItems} 
          className="w-full flex flex-col gap-3"
        >
          {items.map((item) => {
            const isFlagged = item.id in correctFlags;
            const isItemCorrect = correctFlags[item.id];
            
            let itemClass = "w-full border-2 rounded-xl p-4 flex items-center justify-between transition-colors bg-white/10 text-white font-bold text-lg select-none ";
            if (isFlagged) {
              itemClass += isItemCorrect ? "border-green-500 bg-green-500/20" : "border-red-500 bg-red-500/20";
            } else {
              itemClass += "border-white/20";
            }

            return (
              <Reorder.Item
                key={item.id}
                value={item}
                dragListener={!isChecking}
                className={itemClass}
                whileDrag={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
              >
                <span>{item.label[lang] || item.label.en}</span>
                <span className="opacity-50 text-2xl px-2">☰</span>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </div>

      <AnimatePresence>
        {!isChecking && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={handleCheck}
            style={{ backgroundColor: color }}
            className="mt-8 w-full py-4 rounded-xl text-white font-black text-xl shadow-lg active:scale-95 transition-transform"
          >
            Check
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
