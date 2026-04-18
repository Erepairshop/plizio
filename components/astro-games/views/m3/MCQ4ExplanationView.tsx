import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type MCQ4ExplanationRound = {
  id: string;
  taskDescription: LocalizedText;
  question: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
  explanation: LocalizedText;
};

export default function MCQ4ExplanationView({
  rounds,
  color,
  lang,
  mode,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<MCQ4ExplanationRound>) {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!rounds || rounds.length === 0) return null;

  const currentRound = rounds[currentRoundIndex];
  const isLastRound = currentRoundIndex === rounds.length - 1;
  const progressPercent = ((currentRoundIndex + 1) / rounds.length) * 100;
  const isCorrect = selectedOption === currentRound.correctIndex;

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

      <div className="flex-1 w-full flex flex-col items-center gap-6">
        <div className="w-full bg-white/5 p-6 rounded-2xl shadow-sm border border-white/10 text-center" tabIndex={0}>
          <h3 className="text-2xl font-bold text-white">
            {currentRound.question[lang] || currentRound.question.en}
          </h3>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <AnimatePresence mode="popLayout">
            {currentRound.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isOptionCorrect = idx === currentRound.correctIndex;
              
              let bgColor = "bg-white/5";
              let textColor = "text-white";
              let borderColor = "border-white/20";

              if (hasAnswered) {
                if (isOptionCorrect) {
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
                  tabIndex={0}
                  aria-label={opt[lang] || opt.en}
                  className={`w-full p-4 rounded-xl border-2 text-lg font-bold min-h-[64px] transition-colors shadow-sm flex items-center justify-center
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
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="mt-6 w-full flex flex-col items-center"
          >
            {isCorrect && (
              <div className="w-full bg-white/10 border-2 border-white/20 rounded-2xl p-6 mb-6 shadow-sm" tabIndex={0}>
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {lang === "en" ? "Did you know?" : lang === "de" ? "Wusstest du schon?" : lang === "hu" ? "Tudtad?" : "Știai că?"}
                </h4>
                <p className="text-white/80 text-lg leading-relaxed">
                  {currentRound.explanation[lang] || currentRound.explanation.en}
                </p>
              </div>
            )}

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
