"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type PatternFinishRound = {
  id: string;
  taskDescription: LocalizedText;
  pattern: LocalizedText[]; 
  options: { id: string; text: LocalizedText; isCorrect: boolean }[];
};

export default function PatternFinishView({
  rounds,
  color,
  lang,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<PatternFinishRound>) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const round = rounds[currentIdx];

  const shuffledOptions = useMemo(() => {
    if (!round) return [];
    const arr = [...round.options];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [round]);

  const handleSelect = (optionId: string, isCorrect: boolean) => {
    if (isRevealing) return;
    setSelectedId(optionId);
    setIsRevealing(true);

    if (isCorrect) {
      onCorrect?.();
      setScore((s) => s + 1);
    } else {
      onWrong?.();
    }

    setTimeout(() => {
      setSelectedId(null);
      setIsRevealing(false);
      if (currentIdx + 1 < rounds.length) {
        setCurrentIdx((i) => i + 1);
      } else {
        onDone(score + (isCorrect ? 1 : 0), rounds.length);
      }
    }, 1500);
  };

  if (!round) return null;

  const progress = (currentIdx / rounds.length) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto p-4 min-h-[80vh]">
      {/* Progress Header */}
      <div className="w-full bg-black/40 p-4 rounded-xl mb-6 text-center border-2 border-white/10 shadow-lg">
        <h2 className="text-xl md:text-2xl font-black text-white mb-3">
          {round.taskDescription[lang as keyof LocalizedText] || round.taskDescription.en}
        </h2>
        <div className="flex flex-col items-center gap-2">
          <div className="text-white/80 font-bold text-sm">
            {currentIdx + 1} / {rounds.length}
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: `${((currentIdx) / rounds.length) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Pattern Display */}
      <div className="flex-1 w-full flex flex-col justify-center items-center py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8 w-full">
          <AnimatePresence mode="popLayout">
            {round.pattern.map((item, idx) => {
              const text = item[lang as keyof LocalizedText] || item.en;
              const isMissing = text === "?";
              
              let displayText = text;
              if (isMissing && selectedId) {
                const correctOpt = round.options.find(o => o.isCorrect);
                if (correctOpt) {
                  displayText = correctOpt.text[lang as keyof LocalizedText] || correctOpt.text.en;
                }
              }

              return (
                <motion.div
                  key={`pattern-${currentIdx}-${idx}`}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                  className={`
                    flex items-center justify-center 
                    w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-xl
                    text-lg md:text-2xl font-bold p-2 text-center break-words
                    ${isMissing && !selectedId ? "bg-black/30 border-4 border-dashed border-white/40 text-white/50" : "bg-white text-slate-800"}
                    ${isMissing && selectedId ? "bg-green-100 text-green-800 border-4 border-green-500" : ""}
                  `}
                  style={{
                    borderColor: (!isMissing && !selectedId) ? color : undefined,
                    borderWidth: (!isMissing && !selectedId) ? '4px' : undefined
                  }}
                >
                  <motion.span
                    initial={false}
                    animate={isMissing && selectedId ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {displayText}
                  </motion.span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {shuffledOptions.map((opt, idx) => {
            const isSelected = selectedId === opt.id;
            const isCorrect = opt.isCorrect;
            
            let bgStyle = "bg-black/40 hover:bg-black/60";
            let borderColor = "rgba(255,255,255,0.2)";
            let opacity = 1;

            if (selectedId) {
              if (isSelected) {
                bgStyle = isCorrect ? "bg-green-500" : "bg-red-500";
                borderColor = isCorrect ? "#22c55e" : "#ef4444";
              } else {
                opacity = 0.5;
                if (isCorrect) {
                  bgStyle = "bg-green-500";
                  borderColor = "#22c55e";
                  opacity = 1;
                }
              }
            }

            return (
              <motion.button
                key={`opt-${currentIdx}-${opt.id}`}
                onClick={() => handleSelect(opt.id, opt.isCorrect)}
                disabled={isRevealing}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1, type: "spring" }}
                whileTap={{ scale: isRevealing ? 1 : 0.95 }}
                className={`
                  p-4 rounded-2xl border-2 font-extrabold min-h-[80px]
                  text-lg md:text-xl text-white shadow-lg transition-colors
                  flex items-center justify-center text-center
                  ${bgStyle}
                `}
                style={{ borderColor }}
              >
                {opt.text[lang as keyof LocalizedText] || opt.text.en}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
