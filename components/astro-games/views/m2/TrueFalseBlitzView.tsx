"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type TrueFalseBlitzRound = {
  id: string;
  statements: {
    id: string;
    text: LocalizedText;
    isTrue: boolean;
    explanation?: LocalizedText;
  }[];
};

const TASK_DESC = {
  en: "Is this statement true or false?",
  hu: "Igaz vagy hamis ez az állítás?",
  de: "Ist diese Aussage wahr oder falsch?",
  ro: "Este această afirmație adevărată sau falsă?",
};

const BTN_TRUE = { en: "True", hu: "Igaz", de: "Wahr", ro: "Adevărat" };
const BTN_FALSE = { en: "False", hu: "Hamis", de: "Falsch", ro: "Fals" };

export default function TrueFalseBlitzView({ rounds, color, lang = "en", mode, onDone, onCorrect, onWrong }: AstroGameProps<TrueFalseBlitzRound>) {
  const allStatements = useMemo(() => {
    return rounds.flatMap(r => r.statements);
  }, [rounds]);

  const [globalIdx, setGlobalIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);

  const currentQ = allStatements[globalIdx];

  const handleAnswer = (userSaysTrue: boolean) => {
    if (!currentQ || showExplanation) return;

    const isCorrect = userSaysTrue === currentQ.isTrue;
    
    if (isCorrect) {
      setScore(s => s + 10);
      onCorrect?.();
    } else {
      onWrong?.();
    }

    if (currentQ.explanation) {
      setLastAnswerCorrect(isCorrect);
      setShowExplanation(true);
    } else {
      proceedNext(isCorrect);
    }
  };

  const proceedNext = (wasCorrect: boolean) => {
    setShowExplanation(false);
    setLastAnswerCorrect(null);
    if (globalIdx + 1 < allStatements.length) {
      setGlobalIdx(globalIdx + 1);
    } else {
      const maxScore = allStatements.length * 10;
      onDone(score + (wasCorrect ? 10 : 0), maxScore);
    }
  };

  if (!currentQ) return null;

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-md mx-auto p-4 h-full min-h-[400px]">
      <div className="w-full bg-black/20 p-4 rounded-xl mb-6 text-center shadow-sm">
        <h2 className="text-lg font-bold text-white mb-1">
          {TASK_DESC[lang as keyof typeof TASK_DESC] || TASK_DESC.en}
        </h2>
        <div className="text-white/80 font-medium text-sm">
          {globalIdx + 1} / {allStatements.length}
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center justify-center relative min-h-[250px] mb-8">
        <AnimatePresence mode="wait">
          {!showExplanation ? (
            <motion.div
              key={`q-${currentQ.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-white/10 rounded-3xl p-8 text-center border-2 border-white/20 shadow-lg"
            >
              <h3 className="text-2xl font-black text-white leading-snug">
                {currentQ.text[lang as keyof typeof currentQ.text] || currentQ.text.en}
              </h3>
            </motion.div>
          ) : (
            <motion.div
              key={`exp-${currentQ.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`w-full rounded-3xl p-8 text-center border-2 shadow-lg ${lastAnswerCorrect ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'}`}
            >
              <h4 className={`text-xl font-bold mb-4 ${lastAnswerCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {lastAnswerCorrect ? (lang === 'hu' ? 'Helyes!' : lang === 'de' ? 'Richtig!' : lang === 'ro' ? 'Corect!' : 'Correct!') : (lang === 'hu' ? 'Helytelen!' : lang === 'de' ? 'Falsch!' : lang === 'ro' ? 'Incorect!' : 'Incorrect!')}
              </h4>
              <p className="text-lg text-white font-medium mb-6">
                {currentQ.explanation?.[lang as keyof typeof currentQ.explanation] || currentQ.explanation?.en}
              </p>
              <button
                onClick={() => proceedNext(lastAnswerCorrect ?? false)}
                className="px-8 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white font-bold transition-colors min-h-[60px]"
              >
                {lang === 'hu' ? 'Tovább' : lang === 'de' ? 'Weiter' : lang === 'ro' ? 'Continuare' : 'Next'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!showExplanation && (
        <div className="flex w-full gap-4 mt-auto">
          <motion.button
            onClick={() => handleAnswer(true)}
            className="flex-1 p-4 rounded-2xl font-black text-white text-lg bg-green-500 hover:bg-green-600 shadow-md min-h-[60px] flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {BTN_TRUE[lang as keyof typeof BTN_TRUE] || BTN_TRUE.en}
          </motion.button>
          <motion.button
            onClick={() => handleAnswer(false)}
            className="flex-1 p-4 rounded-2xl font-black text-white text-lg bg-red-500 hover:bg-red-600 shadow-md min-h-[60px] flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {BTN_FALSE[lang as keyof typeof BTN_FALSE] || BTN_FALSE.en}
          </motion.button>
        </div>
      )}
    </div>
  );
}
