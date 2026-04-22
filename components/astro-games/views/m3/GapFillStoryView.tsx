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

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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
  const [filledBlanks, setFilledBlanks] = useState<Record<number, string>>({});
  const [selectedBlankIndex, setSelectedBlankIndex] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  if (!rounds || rounds.length === 0) return null;
  const currentRound = rounds[roundIdx];
  const totalRounds = rounds.length;

  useEffect(() => {
    if (currentRound) {
      setFilledBlanks({});
      setSelectedBlankIndex(currentRound.blanks[0]?.index ?? null);
      setIsChecking(false);
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

  const shuffledOptionsPerBlank = useMemo(() => {
    if (!currentRound) return {};
    const map: Record<number, any[]> = {};
    currentRound.blanks.forEach(b => {
      map[b.index] = shuffle(b.options);
    });
    return map;
  }, [currentRound?.id]);

  const handleBlankClick = (idx: number) => {
    if (isChecking) return;
    setSelectedBlankIndex(idx);
    setErrors(prev => {
      const newErr = { ...prev };
      delete newErr[idx];
      return newErr;
    });
  };

  const handleOptionSelect = (optId: string) => {
    if (selectedBlankIndex === null || isChecking) return;
    setFilledBlanks(prev => ({ ...prev, [selectedBlankIndex]: optId }));
    
    const nextBlank = currentRound.blanks.find(b => b.index !== selectedBlankIndex && !filledBlanks[b.index] && b.index > selectedBlankIndex);
    const anyNext = currentRound.blanks.find(b => b.index !== selectedBlankIndex && !filledBlanks[b.index]);
    
    setSelectedBlankIndex(nextBlank?.index ?? anyNext?.index ?? null);
  };

  const handleCheck = () => {
    setIsChecking(true);
    let allCorrect = true;
    const newErrors: Record<number, boolean> = {};

    currentRound.blanks.forEach(b => {
      if (filledBlanks[b.index] !== b.correctOptionId) {
        allCorrect = false;
        newErrors[b.index] = true;
      }
    });

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
      setErrors(newErrors);
      onWrong?.();
      setTimeout(() => {
        setIsChecking(false);
        const firstErr = Object.keys(newErrors)[0];
        if (firstErr) setSelectedBlankIndex(parseInt(firstErr, 10));
        
        // clear wrong answers
        setFilledBlanks(prev => {
          const next = { ...prev };
          Object.keys(newErrors).forEach(k => delete next[parseInt(k, 10)]);
          return next;
        });
      }, 1500);
    }
  };

  const taskText = currentRound.taskDescription[lang] || currentRound.taskDescription.en;
  const progressText = `${roundIdx + 1} / ${totalRounds}`;
  const progressPercent = ((roundIdx + 1) / totalRounds) * 100;
  const allFilled = currentRound.blanks.every(b => filledBlanks[b.index]);
  const activeBlankDef = currentRound.blanks.find(b => b.index === selectedBlankIndex);

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

      <div className="w-full bg-white/5 p-6 rounded-2xl mb-6 text-xl leading-loose font-medium text-white shadow-inner border border-white/10">
        {parsedStory.map((part, i) => {
          if (part.type === "text") {
            return <span key={i}>{part.content}</span>;
          } else if (part.type === "blank" && part.index !== undefined) {
            const blankIdx = part.index;
            const bDef = currentRound.blanks.find(b => b.index === blankIdx);
            const filledOptId = filledBlanks[blankIdx];
            const opt = bDef?.options.find(o => o.id === filledOptId);
            const display = opt ? (opt.label[lang] || opt.label.en) : "______";
            
            const isSelected = selectedBlankIndex === blankIdx;
            const isErr = errors[blankIdx];
            const isSuccess = isChecking && !isErr;

            let bClass = "inline-flex px-3 mx-1 rounded-lg border-b-4 cursor-pointer transition-colors duration-300 font-bold ";
            if (isErr) {
              bClass += "bg-red-500/20 border-red-500 text-red-300";
            } else if (isSuccess) {
              bClass += "bg-green-500/20 border-green-500 text-green-300";
            } else if (isSelected) {
              bClass += "bg-white/20 border-white text-white shadow-[0_0_10px_rgba(255,255,255,0.3)]";
            } else if (filledOptId) {
              bClass += "bg-white/10 border-white/50 text-white/90 hover:bg-white/20";
            } else {
              bClass += "bg-black/20 border-white/20 text-white/30 hover:border-white/40";
            }

            return (
              <motion.span
                key={i}
                className={bClass}
                onClick={() => handleBlankClick(blankIdx)}
                whileTap={{ scale: 0.95 }}
              >
                {display}
              </motion.span>
            );
          }
          return null;
        })}
      </div>

      <div className="w-full min-h-[140px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {activeBlankDef && !isChecking && (
            <motion.div
              key={`options-${activeBlankDef.index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-wrap justify-center gap-3 w-full"
            >
              {(shuffledOptionsPerBlank[activeBlankDef.index] || []).map(opt => (
                <motion.button
                  key={opt.id}
                  onClick={() => handleOptionSelect(opt.id)}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 rounded-xl border-2 font-bold text-lg bg-black/40 text-white border-white/20 hover:border-white/50 active:bg-white/20 flex-grow text-center shadow-lg"
                >
                  {opt.label[lang] || opt.label.en}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {allFilled && !isChecking && selectedBlankIndex === null && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleCheck}
            style={{ backgroundColor: color }}
            className="mt-6 w-full py-4 rounded-xl text-white font-black text-xl shadow-lg active:scale-95 transition-transform"
          >
            Check Answers
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
