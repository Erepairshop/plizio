"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";
import { shuffleDeterministic, useTimeoutRegistry } from "../../utils";

export type SoundMatchRound = {
  id: string;
  taskDescription: LocalizedText;
  audioEmoji: string;
  options: {
    id: string;
    label: LocalizedText;
    isCorrect: boolean;
  }[];
};

export default function SoundMatchView({ 
  rounds, 
  color, 
  lang, 
  onDone, 
  onCorrect, 
  onWrong 
}: AstroGameProps<SoundMatchRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);
  const scheduleTimeout = useTimeoutRegistry();

  const currentRound = rounds[roundIdx];

  const shuffledOptions = useMemo(() => {
    if (!currentRound) return [];
    return shuffleDeterministic(currentRound.options, `${currentRound.id}-options`);
  }, [currentRound]);

  const handleSelect = (optionId: string, isCorrect: boolean) => {
    if (isRevealing) return;
    setSelectedId(optionId);
    setIsRevealing(true);

    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      onCorrect?.();
    } else {
      onWrong?.();
    }

    scheduleTimeout(() => {
      setSelectedId(null);
      setIsRevealing(false);
      if (roundIdx + 1 < rounds.length) {
        setRoundIdx(roundIdx + 1);
      } else {
        onDone(score + (isCorrect ? 1 : 0), rounds.length);
      }
    }, 1500);
  };

  if (!currentRound) return null;

  const progress = (roundIdx / rounds.length) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto p-4 min-h-[80vh]">
      {/* Progress Header */}
      <div className="w-full bg-black/40 p-4 rounded-xl mb-6 text-center border-2 border-white/10 shadow-lg">
        <h2 className="text-xl md:text-2xl font-black text-white mb-3">
          {currentRound.taskDescription[lang as keyof LocalizedText] || currentRound.taskDescription.en}
        </h2>
        <div className="flex flex-col items-center gap-2">
          <div className="text-white/80 font-bold text-sm">
            {roundIdx + 1} / {rounds.length}
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: `${((roundIdx) / rounds.length) * 100}%` }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col justify-center items-center py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRound.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="w-full flex flex-col items-center gap-10"
          >
            {/* Audio Emoji Display (Simulating sound source) */}
            <motion.div
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 flex items-center justify-center text-7xl md:text-8xl shadow-2xl relative bg-black/30 backdrop-blur-sm"
              style={{ borderColor: color, boxShadow: `0 0 40px ${color}60` }}
              animate={{ 
                scale: selectedId ? 1 : [1, 1.1, 1],
                rotate: selectedId ? 0 : [-5, 5, -5]
              }}
              transition={{ repeat: selectedId ? 0 : Infinity, duration: 2, ease: "easeInOut" }}
            >
              {currentRound.audioEmoji}
              
              {/* Pulsing sound waves */}
              {!selectedId && (
                <>
                  <motion.div 
                    className="absolute inset-0 rounded-full border-4 opacity-0"
                    style={{ borderColor: color }}
                    animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full border-4 opacity-0"
                    style={{ borderColor: color }}
                    animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut", delay: 0.75 }}
                  />
                </>
              )}
              
              <div className="absolute -right-2 -top-2 text-3xl bg-black/60 rounded-full p-2 shadow-lg border-2 border-white/20">🔊</div>
            </motion.div>

            {/* Options Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
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
                    key={`opt-${roundIdx}-${opt.id}`}
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
                    {opt.label[lang as keyof LocalizedText] || opt.label.en}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
