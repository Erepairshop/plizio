import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type WordChainRound = {
  id: string;
  taskDescription: LocalizedText;
  startWord: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
};

export default function WordChainView({
  rounds,
  color,
  lang,
  mode,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<WordChainRound>) {
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
      setScore((s) => s + 1);
      if (onCorrect) onCorrect();
    } else {
      if (onWrong) onWrong();
    }
  };

  const handleNext = () => {
    if (isLastRound) {
      onDone(score, rounds.length);
    } else {
      setCurrentRoundIndex((i) => i + 1);
      setHasAnswered(false);
      setSelectedOption(null);
    }
  };

  return (
    <div className="flex flex-col w-full h-full max-w-2xl mx-auto p-4 relative">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold opacity-70">
          Round {currentRoundIndex + 1} / {rounds.length}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 overflow-hidden">
        <motion.div
          className="h-2.5 rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold">
          {currentRound.taskDescription[lang]}
        </h2>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center gap-8">
        <motion.div
          key={currentRound.id + "start"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold tracking-wider bg-white shadow-md px-6 py-4 rounded-xl border-2 border-gray-100"
        >
          {currentRound.startWord[lang]}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
          <AnimatePresence mode="popLayout">
            {currentRound.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentRound.correctIndex;
              
              let bgColor = "bg-white";
              let textColor = "text-gray-800";
              let borderColor = "border-gray-200";

              if (hasAnswered) {
                if (isCorrect) {
                  bgColor = "bg-green-500";
                  textColor = "text-white";
                  borderColor = "border-green-600";
                } else if (isSelected) {
                  bgColor = "bg-red-500";
                  textColor = "text-white";
                  borderColor = "border-red-600";
                } else {
                  bgColor = "bg-gray-100";
                  textColor = "text-gray-400";
                }
              } else {
                 borderColor = "hover:border-[color:var(--theme-color)]";
              }

              return (
                <motion.button
                  key={`${currentRound.id}-opt-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={!hasAnswered ? { scale: 1.02 } : {}}
                  whileTap={!hasAnswered ? { scale: 0.95 } : {}}
                  onClick={() => handleOptionClick(idx)}
                  disabled={hasAnswered}
                  style={!hasAnswered ? { "--theme-color": color } as React.CSSProperties : {}}
                  className={`w-full p-4 rounded-xl border-2 text-lg font-bold min-h-[64px] transition-colors shadow-sm
                    ${bgColor} ${textColor} ${borderColor}`}
                >
                  {opt[lang]}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {hasAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="mt-8 flex justify-center"
          >
            <button
              onClick={handleNext}
              style={{ backgroundColor: color }}
              className="text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg min-w-[200px] min-h-[56px] hover:opacity-90 active:scale-95 transition-all"
            >
              {isLastRound ? "Finish" : "Next"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
