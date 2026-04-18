"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type GapFillStoryRound = {
  id: string;
  taskDescription: LocalizedText;
  story: LocalizedText;
  blanks: {
    index: number;
    correctOptionId: string;
    options: {
      id: string;
      label: LocalizedText;
    }[];
  }[];
};

export default function GapFillStoryView({
  rounds,
  color,
  lang,
  mode,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<GapFillStoryRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [score, setScore] = useState(0);
  const currentRound = rounds[roundIdx];

  const [filledBlanks, setFilledBlanks] = useState<Record<number, string | null>>({});
  const [selectedBlankIndex, setSelectedBlankIndex] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (currentRound) {
      const initialBlanks: Record<number, null> = {};
      currentRound.blanks.forEach((b) => {
        initialBlanks[b.index] = null;
      });
      setFilledBlanks(initialBlanks);
      
      if (currentRound.blanks.length > 0) {
        setSelectedBlankIndex(currentRound.blanks[0].index);
      } else {
        setSelectedBlankIndex(null);
      }
      
      setIsChecking(false);
      setIsCorrect(null);
      setErrors({});
    }
  }, [currentRound]);

  const parsedStory = useMemo(() => {
    if (!currentRound) return [];
    const storyString = currentRound.story[lang] || currentRound.story.en || "";
    const regex = /\{\{(\d+)\}\}/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(storyString)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: "text", content: storyString.substring(lastIndex, match.index) });
      }
      parts.push({ type: "blank", index: parseInt(match[1], 10) });
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < storyString.length) {
      parts.push({ type: "text", content: storyString.substring(lastIndex) });
    }
    return parts;
  }, [currentRound, lang]);

  if (!currentRound) return null;

  const handleBlankTap = (index: number) => {
    if (isChecking || isCorrect) return;
    setSelectedBlankIndex(index);
  };

  const handleOptionTap = (optionId: string) => {
    if (selectedBlankIndex === null || isChecking || isCorrect) return;

    setFilledBlanks((prev) => ({ ...prev, [selectedBlankIndex]: optionId }));
    
    const emptyBlanks = currentRound.blanks.filter(b => b.index !== selectedBlankIndex && !filledBlanks[b.index]);
    if (emptyBlanks.length > 0) {
      setSelectedBlankIndex(emptyBlanks[0].index);
    } else {
      setSelectedBlankIndex(null);
    }
  };

  const handleCheck = () => {
    setIsChecking(true);
    let allCorrect = true;
    const newErrors: Record<number, boolean> = {};

    currentRound.blanks.forEach((b) => {
      if (filledBlanks[b.index] !== b.correctOptionId) {
        allCorrect = false;
        newErrors[b.index] = true;
      }
    });

    if (allCorrect) {
      setIsCorrect(true);
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
      setErrors(newErrors);
      onWrong?.();
      setTimeout(() => {
        setIsChecking(false);
        setErrors({});
        setFilledBlanks((prev) => {
          const next = { ...prev };
          Object.keys(newErrors).forEach((k) => {
            next[parseInt(k, 10)] = null;
          });
          return next;
        });
        
        const firstErrorKey = Object.keys(newErrors)[0];
        if (firstErrorKey !== undefined) {
          setSelectedBlankIndex(parseInt(firstErrorKey, 10));
        }
      }, 1500);
    }
  };

  const isAllFilled = Object.values(filledBlanks).every((val) => val !== null);
  const activeBlankDef = currentRound.blanks.find(b => b.index === selectedBlankIndex);

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

      {/* Story Area */}
      <div className="w-full bg-white/5 p-6 rounded-2xl mb-6 text-xl leading-loose font-medium text-white shadow-inner border border-white/10" tabIndex={0}>
        {parsedStory.map((part, i) => {
          if (part.type === "text") {
            return <span key={i}>{part.content}</span>;
          } else if (part.type === "blank" && part.index !== undefined) {
            const blankIdx = part.index;
            const filledOptionId = filledBlanks[blankIdx];
            const isSelected = selectedBlankIndex === blankIdx;
            const isError = errors[blankIdx];
            const isSuccess = isChecking && !isError;
            
            const blankDef = currentRound.blanks.find(b => b.index === blankIdx);
            const filledOption = blankDef?.options.find(o => o.id === filledOptionId);
            const displayWord = filledOption ? (filledOption.label[lang] || filledOption.label.en) : "___";

            let blankClass = "inline-flex items-center justify-center min-w-[80px] min-h-[44px] px-3 mx-1 rounded-lg border-b-4 cursor-pointer transition-colors active:scale-95";
            
            if (isError) {
              blankClass += " bg-red-500/20 border-red-500 text-red-100";
            } else if (isSuccess) {
              blankClass += " bg-green-500/20 border-green-500 text-green-100";
            } else if (isSelected) {
              blankClass += " bg-white/20 border-white text-white shadow-[0_0_10px_rgba(255,255,255,0.5)]";
            } else if (filledOptionId) {
              blankClass += " bg-white/10 border-white/50 text-white hover:bg-white/20";
            } else {
              blankClass += " bg-black/20 border-white/20 hover:border-white/40";
            }

            return (
              <motion.span
                key={i}
                className={blankClass}
                onClick={() => handleBlankTap(blankIdx)}
                whileTap={{ scale: 0.95 }}
                tabIndex={0}
                aria-label={`Blank ${blankIdx + 1}, currently ${displayWord}`}
              >
                {displayWord}
              </motion.span>
            );
          }
          return null;
        })}
      </div>

      {/* Word Bank for selected blank */}
      <div className="w-full min-h-[120px]">
        <AnimatePresence mode="wait">
          {activeBlankDef && !isChecking && !isCorrect && (
            <motion.div
              key={`options-${activeBlankDef.index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full flex flex-col gap-3"
            >
              <div className="text-center text-white/50 text-sm font-bold uppercase tracking-wider mb-2">
                {lang === 'en' ? 'Choose a word' : lang === 'de' ? 'Wähle ein Wort' : lang === 'hu' ? 'Válassz egy szót' : 'Alege un cuvânt'}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {activeBlankDef.options.map((opt) => {
                  const isSelected = filledBlanks[activeBlankDef.index] === opt.id;
                  
                  let btnClass = "px-6 py-3 min-h-[56px] rounded-xl font-bold text-lg border-2 cursor-pointer transition-colors active:scale-95 flex-1 min-w-[140px] ";
                  if (isSelected) {
                    btnClass += "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.6)]";
                  } else {
                    btnClass += "bg-black/40 text-white border-white/20 hover:border-white/40 hover:bg-black/60";
                  }

                  return (
                    <motion.button
                      key={opt.id}
                      className={btnClass}
                      onClick={() => handleOptionTap(opt.id)}
                      whileTap={{ scale: 0.9 }}
                      tabIndex={0}
                      aria-label={opt.label[lang] || opt.label.en}
                    >
                      {opt.label[lang] || opt.label.en}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Button */}
      <AnimatePresence>
        {isAllFilled && !isCorrect && selectedBlankIndex === null && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={handleCheck}
            disabled={isChecking}
            aria-label={isChecking ? "Checking" : "Check answers"}
            tabIndex={0}
            className="w-full p-4 rounded-xl font-black text-xl text-white shadow-lg disabled:opacity-50 min-h-[60px] mt-4"
            style={{ backgroundColor: color }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            {isChecking && !isCorrect ? "..." : "Check"}
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* If all filled but blank still selected, show a "Done" button to dismiss options */}
      <AnimatePresence>
        {isAllFilled && !isCorrect && selectedBlankIndex !== null && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setSelectedBlankIndex(null)}
            tabIndex={0}
            className="w-full p-4 rounded-xl font-black text-xl text-white shadow-lg bg-white/20 border-2 border-white/40 min-h-[60px] mt-4"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            Ok
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
