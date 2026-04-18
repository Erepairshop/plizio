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
  correctOrder: string[]; // array of item ids in the correct order
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
  
  const currentRound = rounds[roundIdx];
  
  const [items, setItems] = useState(currentRound?.items || []);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (currentRound) {
      const shuffled = [...currentRound.items].sort((a, b) => {
        const aIndex = currentRound.correctOrder.indexOf(a.id);
        const bIndex = currentRound.correctOrder.indexOf(b.id);
        return aIndex % 2 === 0 ? 1 : -1;
      });
      if (shuffled.map(i => i.id).join(",") === currentRound.correctOrder.join(",")) {
        if (shuffled.length >= 2) {
          const temp = shuffled[0];
          shuffled[0] = shuffled[1];
          shuffled[1] = temp;
        }
      }
      setItems(shuffled);
      setIsChecking(false);
      setIsCorrect(null);
    }
  }, [currentRound]);

  if (!currentRound) return null;

  const moveItem = (index: number, direction: "up" | "down") => {
    const newItems = [...items];
    if (direction === "up" && index > 0) {
      const temp = newItems[index - 1];
      newItems[index - 1] = newItems[index];
      newItems[index] = temp;
    } else if (direction === "down" && index < newItems.length - 1) {
      const temp = newItems[index + 1];
      newItems[index + 1] = newItems[index];
      newItems[index] = temp;
    }
    setItems(newItems);
  };

  const handleCheck = () => {
    setIsChecking(true);
    const currentOrder = items.map((i) => i.id);
    const correct = currentOrder.join(",") === currentRound.correctOrder.join(",");
    
    setIsCorrect(correct);

    if (correct) {
      setScore((s) => s + 10);
      onCorrect?.();
      setTimeout(() => {
        if (roundIdx + 1 < rounds.length) {
          setRoundIdx(roundIdx + 1);
        } else {
          onDone(score + 10, rounds.length * 10);
        }
      }, 1500);
    } else {
      onWrong?.();
      setTimeout(() => {
        setIsChecking(false);
        setIsCorrect(null);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-md mx-auto p-4 min-h-[80vh]">
      {/* Header */}
      <div className="w-full flex justify-between font-bold text-white/50 text-sm px-2 mb-2">
        <span>Score: {score}</span>
        <span>Round {roundIdx + 1} / {rounds.length}</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: `${(roundIdx / rounds.length) * 100}%` }}
          animate={{ width: `${((roundIdx + 1) / rounds.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Task Description */}
      <div className="w-full bg-black/40 p-4 rounded-xl mb-6 text-center border-2 border-white/10 shadow-lg">
        <h2 className="text-xl font-black text-white" tabIndex={0} aria-label={currentRound.taskDescription[lang] || currentRound.taskDescription.en}>
          {currentRound.taskDescription[lang] || currentRound.taskDescription.en}
        </h2>
      </div>

      {/* Reorderable List */}
      <div className="w-full flex-1 flex flex-col gap-3">
        <Reorder.Group 
          axis="y" 
          values={items} 
          onReorder={setItems} 
          className="w-full flex flex-col gap-3"
        >
          {items.map((item, index) => {
            let borderColor = "border-white/20";
            if (isChecking && isCorrect !== null) {
              const isItemInCorrectPos = currentRound.correctOrder[index] === item.id;
              if (isCorrect) {
                borderColor = "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)] bg-green-500/10";
              } else {
                borderColor = isItemInCorrectPos ? "border-green-500 bg-green-500/10" : "border-red-500 bg-red-500/10";
              }
            } else {
              borderColor = "border-white/20 hover:border-white/40 bg-white/5";
            }

            return (
              <Reorder.Item
                key={item.id}
                value={item}
                className={`w-full border-2 rounded-xl p-3 flex items-center justify-between touch-none transition-colors ${borderColor}`}
                whileDrag={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)", zIndex: 10 }}
              >
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => moveItem(index, "up")}
                    disabled={index === 0 || isChecking}
                    aria-label="Move up"
                    tabIndex={0}
                    className="p-2 bg-white/10 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
                  >
                    ▲
                  </button>
                  <button 
                    onClick={() => moveItem(index, "down")}
                    disabled={index === items.length - 1 || isChecking}
                    aria-label="Move down"
                    tabIndex={0}
                    className="p-2 bg-white/10 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
                  >
                    ▼
                  </button>
                </div>
                <div className="flex-1 text-center text-lg font-bold text-white px-4" tabIndex={0}>
                  {item.label[lang] || item.label.en}
                </div>
                <div className="w-[44px] h-[44px] flex items-center justify-center opacity-50 cursor-grab active:cursor-grabbing text-white">
                  ☰
                </div>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </div>

      {/* Action Button */}
      <AnimatePresence>
        {!isCorrect && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={handleCheck}
            disabled={isChecking}
            aria-label={isChecking ? "Checking" : "Check answers"}
            tabIndex={0}
            className="mt-6 w-full p-4 rounded-xl font-black text-xl text-white shadow-lg disabled:opacity-50 min-h-[60px]"
            style={{ backgroundColor: color }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            {isChecking && !isCorrect ? "..." : "Check"}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
