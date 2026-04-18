"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type SpeedMatchRound = {
  id: string;
  pairs: {
    id: string;
    a: LocalizedText;
    b: LocalizedText;
    isMatch: boolean;
  }[];
};

const TASK_DESC = {
  en: "Do these two match?",
  hu: "Egyeznek?",
  de: "Passen diese beiden zusammen?",
  ro: "Se potrivesc acestea două?",
};

const BTN_YES = { en: "Yes", hu: "Igen", de: "Ja", ro: "Da" };
const BTN_NO = { en: "No", hu: "Nem", de: "Nein", ro: "Nu" };

export default function SpeedMatchView({ rounds, color, lang = "en", mode, onDone, onCorrect, onWrong }: AstroGameProps<SpeedMatchRound>) {
  const allQuestions = useMemo(() => {
    return rounds.flatMap(r => r.pairs);
  }, [rounds]);

  const [globalIdx, setGlobalIdx] = useState(0);
  const [score, setScore] = useState(0);

  const currentQ = allQuestions[globalIdx];

  const handleAnswer = (userSaysMatch: boolean) => {
    if (!currentQ) return;

    if (userSaysMatch === currentQ.isMatch) {
      setScore(s => s + 10);
      onCorrect?.();
    } else {
      onWrong?.();
    }

    if (globalIdx + 1 < allQuestions.length) {
      setGlobalIdx(globalIdx + 1);
    } else {
      const maxScore = allQuestions.length * 10;
      onDone(score + (userSaysMatch === currentQ.isMatch ? 10 : 0), maxScore);
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
          {globalIdx + 1} / {allQuestions.length}
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center justify-center relative min-h-[250px] mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col items-center gap-6"
          >
            <div className="w-full bg-white/10 rounded-2xl p-6 text-center border-2 border-white/20 shadow-lg">
              <div className="text-2xl font-black text-white">
                {currentQ.a[lang as keyof typeof currentQ.a] || currentQ.a.en}
              </div>
            </div>
            
            <div className="text-white/50 font-black text-xl">
              =
            </div>

            <div className="w-full bg-white/10 rounded-2xl p-6 text-center border-2 border-white/20 shadow-lg">
              <div className="text-2xl font-black text-white">
                {currentQ.b[lang as keyof typeof currentQ.b] || currentQ.b.en}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex w-full gap-4 mt-auto">
        <motion.button
          onClick={() => handleAnswer(false)}
          className="flex-1 p-4 rounded-2xl font-black text-white text-lg bg-red-500 hover:bg-red-600 shadow-md min-h-[60px] flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {BTN_NO[lang as keyof typeof BTN_NO] || BTN_NO.en}
        </motion.button>
        <motion.button
          onClick={() => handleAnswer(true)}
          className="flex-1 p-4 rounded-2xl font-black text-white text-lg bg-green-500 hover:bg-green-600 shadow-md min-h-[60px] flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {BTN_YES[lang as keyof typeof BTN_YES] || BTN_YES.en}
        </motion.button>
      </div>
    </div>
  );
}
