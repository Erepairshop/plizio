"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type SpeedMatchRound = {
  id: string;
  taskDescription?: LocalizedText;
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
    return rounds.flatMap(r => r.pairs.map(p => ({ ...p, roundId: r.id, customTask: r.taskDescription })));
  }, [rounds]);

  const [globalIdx, setGlobalIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lastAnswer, setLastAnswer] = useState<boolean | null>(null);

  const currentQ = allQuestions[globalIdx];

  const handleAnswer = (userSaysMatch: boolean) => {
    if (!currentQ || lastAnswer !== null) return;

    const isCorrect = userSaysMatch === currentQ.isMatch;
    setLastAnswer(isCorrect);
    
    if (isCorrect) {
      setScore(s => s + 10);
      onCorrect?.();
    } else {
      onWrong?.();
    }

    setTimeout(() => {
      setLastAnswer(null);
      if (globalIdx + 1 < allQuestions.length) {
        setGlobalIdx(globalIdx + 1);
      } else {
        const maxScore = allQuestions.length * 10;
        onDone(score + (isCorrect ? 10 : 0), maxScore);
      }
    }, 600);
  };

  if (!currentQ) return null;

  const taskText = currentQ.customTask
    ? currentQ.customTask[lang as keyof typeof currentQ.customTask] || currentQ.customTask.en
    : TASK_DESC[lang as keyof typeof TASK_DESC] || TASK_DESC.en;

  const progressPercent = ((globalIdx) / allQuestions.length) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 h-full min-h-[400px]">
      <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10 shadow-sm">
        <div className="text-xl font-black text-white mb-2">⚡ {taskText}</div>
        <div className="text-white/70 font-bold mb-2">
          {globalIdx + 1} / {allQuestions.length}
        </div>
        <div className="w-full bg-gray-200/20 rounded-full h-2.5 overflow-hidden">
          <motion.div
            className="h-2.5 rounded-full"
            style={{ backgroundColor: color || "#3b82f6" }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="flex-1 w-full flex flex-col items-center justify-center relative min-h-[250px] mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center gap-6 relative"
          >
            <div className={`w-full bg-white/10 rounded-3xl p-8 text-center border-4 shadow-lg transition-colors duration-300 ${lastAnswer !== null ? (lastAnswer ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20') : 'border-white/20'}`}>
              <div className="text-3xl font-black text-white break-words">
                {currentQ.a[lang as keyof typeof currentQ.a] || currentQ.a.en}
              </div>
            </div>
            
            <div className="text-white/50 font-black text-3xl">
              =
            </div>

            <div className={`w-full bg-white/10 rounded-3xl p-8 text-center border-4 shadow-lg transition-colors duration-300 ${lastAnswer !== null ? (lastAnswer ? 'border-green-500 bg-green-500/20' : 'border-red-500 bg-red-500/20') : 'border-white/20'}`}>
              <div className="text-3xl font-black text-white break-words">
                {currentQ.b[lang as keyof typeof currentQ.b] || currentQ.b.en}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex w-full gap-4 mt-auto">
        <motion.button
          onClick={() => handleAnswer(false)}
          disabled={lastAnswer !== null}
          className="flex-1 p-4 rounded-2xl font-black text-white text-xl bg-red-500 hover:bg-red-600 shadow-lg min-h-[70px] flex items-center justify-center disabled:opacity-50 border-b-4 border-red-700 active:border-b-0 active:translate-y-1"
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          ✖ {BTN_NO[lang as keyof typeof BTN_NO] || BTN_NO.en}
        </motion.button>
        <motion.button
          onClick={() => handleAnswer(true)}
          disabled={lastAnswer !== null}
          className="flex-1 p-4 rounded-2xl font-black text-white text-xl bg-green-500 hover:bg-green-600 shadow-lg min-h-[70px] flex items-center justify-center disabled:opacity-50 border-b-4 border-green-700 active:border-b-0 active:translate-y-1"
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          ✔ {BTN_YES[lang as keyof typeof BTN_YES] || BTN_YES.en}
        </motion.button>
      </div>
    </div>
  );
}
