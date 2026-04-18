import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type FillBlankRound = {
  id: string;
  taskDescription: LocalizedText;
  sentenceParts: {
    before: LocalizedText;
    after: LocalizedText;
  };
  options: LocalizedText[];
  correctIndex: number;
};

export default function FillBlankView({
  rounds,
  color,
  lang,
  mode,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<FillBlankRound>) {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!rounds || rounds.length === 0) return null;

  const currentRound = rounds[currentRoundIndex];
  const isLastRound = currentRoundIndex === rounds.length - 1;
  const progressPercent = ((currentRoundIndex + 1) / rounds.length) * 100;

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return;

    setHasAnswered(true);
    setSelectedOption(index);

    if (index === currentRound.correctIndex) {
      setScore((s) => s + 10);
      if (onCorrect) onCorrect();
    } else {
      if (onWrong) onWrong();
    }
  };

  const handleNext = () => {
    if (isLastRound) {
      onDone(score, rounds.length * 10);
    } else {
      setCurrentRoundIndex((i) => i + 1);
      setHasAnswered(false);
      setSelectedOption(null);
    }
  };

  const getBlankContent = () => {
    if (selectedOption === null) {
      return "______";
    }
    return currentRound.options[selectedOption][lang] || currentRound.options[selectedOption].en;
  };

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-md mx-auto p-4 min-h-[80vh]">
      {/* Header */}
      <div className="w-full flex justify-between font-bold text-white/50 text-sm px-2 mb-2">
        <span>Score: {score}</span>
        <span>Round {currentRoundIndex + 1} / {rounds.length}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: `${(currentRoundIndex / rounds.length) * 100}%` }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Task Description */}
      <div className="w-full bg-black/40 p-4 rounded-xl mb-6 text-center border-2 border-white/10 shadow-lg">
        <h2 className="text-xl font-black text-white" tabIndex={0} aria-label={currentRound.taskDescription[lang] || currentRound.taskDescription.en}>
          {currentRound.taskDescription[lang] || currentRound.taskDescription.en}
        </h2>
      </div>

      <div className="w-full flex-1 flex flex-col justify-center items-center gap-8">
        <div className="w-full text-2xl font-medium leading-relaxed text-center bg-white/5 p-6 rounded-2xl shadow-sm border border-white/10 text-white" tabIndex={0}>
          {currentRound.sentenceParts.before[lang] || currentRound.sentenceParts.before.en}{" "}
          <motion.span
            layout
            className={`inline-block font-bold border-b-4 px-2 min-w-[80px] text-center
              ${
                hasAnswered
                  ? selectedOption === currentRound.correctIndex
                    ? "border-green-500 text-green-400"
                    : "border-red-500 text-red-400"
                  : "border-white/40 text-white/60"
              }`}
          >
            {getBlankContent()}
          </motion.span>{" "}
          {currentRound.sentenceParts.after[lang] || currentRound.sentenceParts.after.en}
        </div>

        <div className="flex flex-col gap-3 w-full">
          <AnimatePresence mode="popLayout">
            {currentRound.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentRound.correctIndex;
              
              let bgColor = "bg-white/5";
              let textColor = "text-white";
              let borderColor = "border-white/20";

              if (hasAnswered) {
                if (isCorrect) {
                  bgColor = "bg-green-500/20";
                  textColor = "text-green-100";
                  borderColor = "border-green-500";
                } else if (isSelected) {
                  bgColor = "bg-red-500/20";
                  textColor = "text-red-100";
                  borderColor = "border-red-500";
                } else {
                  bgColor = "bg-black/20";
                  textColor = "text-white/40";
                  borderColor = "border-transparent";
                }
              } else {
                 borderColor = "hover:border-white/40 hover:bg-white/10";
              }

              return (
                <motion.button
                  key={`${currentRound.id}-opt-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={!hasAnswered ? { scale: 1.02 } : {}}
                  whileTap={!hasAnswered ? { scale: 0.98 } : {}}
                  onClick={() => handleOptionClick(idx)}
                  disabled={hasAnswered}
                  aria-label={opt[lang] || opt.en}
                  tabIndex={0}
                  className={`w-full p-4 min-h-[60px] rounded-xl border-2 text-lg font-bold transition-all flex items-center justify-center
                    ${bgColor} ${textColor} ${borderColor}`}
                >
                  {opt[lang] || opt.en}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {hasAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="mt-6 w-full"
          >
            <button
              onClick={handleNext}
              style={{ backgroundColor: color }}
              tabIndex={0}
              aria-label={isLastRound ? "Finish" : "Next"}
              className="w-full text-white px-8 py-4 rounded-xl font-black text-xl shadow-lg min-h-[60px] active:scale-95 transition-all"
            >
              {isLastRound ? "Finish" : "Next"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
