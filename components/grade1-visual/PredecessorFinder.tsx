'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronLeft } from 'lucide-react';

interface PredecessorFinderProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Mi az előző szám?',
    hint: 'Az előző szám 1-gyel kisebb',
    correct: 'Helyes! ✓',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Welche Zahl kommt davor?',
    hint: 'Die Vorgängerzahl ist 1 kleiner',
    correct: 'Richtig! ✓',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'What number comes before?',
    hint: 'The predecessor is 1 less',
    correct: 'Correct! ✓',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Ce număr vine înainte?',
    hint: 'Predecesorul este cu 1 mai mic',
    correct: 'Corect! ✓',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

const PredecessorFinder: React.FC<PredecessorFinderProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { givenNumber, correctAnswer } = useMemo(() => {
    const num = Math.floor(Math.random() * 10) + 1; // 1-10
    return { givenNumber: num, correctAnswer: num - 1 };
  }, []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleSubmit = (value: string) => {
    setUserAnswer(value);
    onValueChange?.(value);

    const isCorrect = String(correctAnswer) === value;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-1">{t.title}</h3>
          <p className="text-sm text-slate-500">{t.hint}</p>
        </div>
      )}

      {/* Number Line Display */}
      <div className="w-full max-w-md px-4">
        <div className="relative h-20 flex items-center">
          {/* Line */}
          <div className="absolute w-full h-1 bg-slate-300" />

          {/* Numbers on line */}
          <div className="relative w-full flex justify-between items-center">
            {Array.from({ length: givenNumber + 2 }, (_, i) => {
              const isCorrectNum = i === correctAnswer;
              const isGiven = i === givenNumber;

              return (
                <motion.div
                  key={i}
                  className={`flex flex-col items-center ${isCorrectNum ? 'z-10' : ''}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition ${
                      isGiven
                        ? 'bg-red-500 text-white shadow-lg'
                        : isCorrectNum
                          ? 'bg-green-400 text-white shadow-lg'
                          : 'bg-slate-200 text-slate-700'
                    }`}
                    animate={isGiven ? { scale: [1, 1.1, 1] } : {}}
                    transition={isGiven ? { duration: 1, repeat: 2 } : {}}
                  >
                    {i}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Problem Display */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <motion.span
          className="text-emerald-600"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          ?
        </motion.span>
        <ChevronRight className="text-slate-400" />
        <motion.div
          className="w-16 h-16 rounded-xl bg-red-400 text-white flex items-center justify-center text-3xl font-bold shadow-lg"
          initial={{ scale: 0, rotateZ: -90 }}
          animate={{ scale: 1, rotateZ: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          {givenNumber}
        </motion.div>
      </div>

      {/* Input & Buttons */}
      <div className="flex flex-col items-center gap-3 w-full max-w-xs">
        <input
          type="number"
          min="0"
          max="10"
          placeholder="?"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className={`w-20 h-16 text-center text-3xl font-bold rounded-xl border-2 outline-none transition ${
            embedded
              ? 'bg-slate-100 text-slate-800 border-slate-300 focus:border-emerald-500'
              : 'bg-white text-slate-800 border-emerald-300 focus:border-emerald-600 focus:shadow-lg'
          }`}
        />

        <button
          onClick={() => handleSubmit(userAnswer)}
          disabled={!userAnswer}
          className="w-full px-4 py-2 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition active:scale-95"
        >
          ✓ Check
        </button>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm ${
              feedback === 'correct'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {feedback === 'correct' ? <Check size={18} /> : <X size={18} />}
            {feedback === 'correct' ? t.correct : t.incorrect}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Helper component to avoid missing import
const ChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default PredecessorFinder;
