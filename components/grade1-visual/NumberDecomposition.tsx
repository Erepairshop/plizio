'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Plus, Equal } from 'lucide-react';

interface NumberDecompositionProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Szám szétbontása',
    hint: 'Keress egy párt az adott számhoz!',
    correct: 'Helyes! ✓',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Zahlzerlegung',
    hint: 'Finde einen Partner für die Zahl!',
    correct: 'Richtig! ✓',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'Number Decomposition',
    hint: 'Find a partner for the number!',
    correct: 'Correct! ✓',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Descompunerea numărului',
    hint: 'Găsește un partener pentru număr!',
    correct: 'Corect! ✓',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

const NumberDecomposition: React.FC<NumberDecompositionProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { totalNumber, part1, correctPart2 } = useMemo(() => {
    const total = Math.floor(Math.random() * 8) + 3; // 3-10
    const p1 = Math.floor(Math.random() * (total - 1)) + 1; // 1 to total-1
    return {
      totalNumber: total,
      part1: p1,
      correctPart2: total - p1,
    };
  }, []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleSubmit = (value: string) => {
    setUserAnswer(value);
    onValueChange?.(value);

    const isCorrect = String(correctPart2) === value;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg'}`}
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

      {/* Number Decomposition Visual */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {/* Total number */}
        <motion.div
          className="w-20 h-20 rounded-2xl bg-indigo-500 text-white flex items-center justify-center text-4xl font-bold shadow-lg"
          initial={{ scale: 0, rotateZ: -90 }}
          animate={{ scale: 1, rotateZ: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          {totalNumber}
        </motion.div>

        {/* Equals and arrow */}
        <motion.div
          className="text-3xl font-bold text-indigo-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          =
        </motion.div>

        {/* Part 1 */}
        <motion.div
          className="w-16 h-16 rounded-xl bg-purple-400 text-white flex items-center justify-center text-3xl font-bold shadow-lg"
          initial={{ scale: 0, rotateZ: 90 }}
          animate={{ scale: 1, rotateZ: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
        >
          {part1}
        </motion.div>

        {/* Plus */}
        <motion.div
          className="text-3xl font-bold text-purple-600"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          +
        </motion.div>

        {/* Part 2 (question) */}
        <motion.div
          className="w-16 h-16 rounded-xl bg-purple-200 text-purple-700 flex items-center justify-center text-3xl font-bold border-3 border-dashed border-purple-400"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ?
        </motion.div>
      </div>

      {/* Hint text showing total */}
      <motion.div
        className="text-center text-sm text-slate-600 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {lang === 'hu'
          ? `Mert ${totalNumber} = ${part1} + ?`
          : lang === 'de'
            ? `Denn ${totalNumber} = ${part1} + ?`
            : lang === 'ro'
              ? `Fiindcă ${totalNumber} = ${part1} + ?`
              : `Because ${totalNumber} = ${part1} + ?`}
      </motion.div>

      {/* Input & Buttons */}
      <div className="flex flex-col items-center gap-3 w-full max-w-xs">
        <input
          type="number"
          min="0"
          max="20"
          placeholder="?"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className={`w-20 h-16 text-center text-3xl font-bold rounded-xl border-2 outline-none transition ${
            embedded
              ? 'bg-slate-100 text-slate-800 border-slate-300 focus:border-purple-500'
              : 'bg-white text-slate-800 border-purple-300 focus:border-purple-600 focus:shadow-lg'
          }`}
        />

        <button
          onClick={() => handleSubmit(userAnswer)}
          disabled={!userAnswer}
          className="w-full px-4 py-2 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition active:scale-95"
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

export default NumberDecomposition;
