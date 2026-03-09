'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface DotRecognizerProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Hány pont van?',
    hint: 'Számlálj meg a pontokat!',
    correct: 'Helyes! 🎉',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Wie viele Punkte?',
    hint: 'Zähle die Punkte!',
    correct: 'Richtig! 🎉',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'How many dots?',
    hint: 'Count the dots!',
    correct: 'Correct! 🎉',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Câte puncte?',
    hint: 'Numără punctele!',
    correct: 'Corect! 🎉',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

// Dice-like dot patterns (subitizing friendly)
const DOT_PATTERNS: Record<number, Array<{ x: number; y: number }>> = {
  0: [],
  1: [{ x: 50, y: 50 }],
  2: [{ x: 30, y: 30 }, { x: 70, y: 70 }],
  3: [{ x: 30, y: 30 }, { x: 50, y: 50 }, { x: 70, y: 70 }],
  4: [{ x: 30, y: 30 }, { x: 70, y: 30 }, { x: 30, y: 70 }, { x: 70, y: 70 }],
  5: [
    { x: 30, y: 30 },
    { x: 70, y: 30 },
    { x: 50, y: 50 },
    { x: 30, y: 70 },
    { x: 70, y: 70 },
  ],
  6: [
    { x: 30, y: 25 },
    { x: 30, y: 50 },
    { x: 30, y: 75 },
    { x: 70, y: 25 },
    { x: 70, y: 50 },
    { x: 70, y: 75 },
  ],
  7: [
    { x: 30, y: 25 },
    { x: 30, y: 50 },
    { x: 30, y: 75 },
    { x: 50, y: 37 },
    { x: 70, y: 25 },
    { x: 70, y: 50 },
    { x: 70, y: 75 },
  ],
  8: [
    { x: 25, y: 25 },
    { x: 50, y: 25 },
    { x: 75, y: 25 },
    { x: 25, y: 50 },
    { x: 75, y: 50 },
    { x: 25, y: 75 },
    { x: 50, y: 75 },
    { x: 75, y: 75 },
  ],
  9: [
    { x: 25, y: 25 },
    { x: 50, y: 25 },
    { x: 75, y: 25 },
    { x: 25, y: 50 },
    { x: 50, y: 50 },
    { x: 75, y: 50 },
    { x: 25, y: 75 },
    { x: 50, y: 75 },
    { x: 75, y: 75 },
  ],
  10: [
    { x: 25, y: 20 },
    { x: 50, y: 20 },
    { x: 75, y: 20 },
    { x: 25, y: 40 },
    { x: 50, y: 40 },
    { x: 75, y: 40 },
    { x: 25, y: 60 },
    { x: 50, y: 60 },
    { x: 75, y: 60 },
    { x: 50, y: 80 },
  ],
};

const DotRecognizer: React.FC<DotRecognizerProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { correctCount, dots } = useMemo(() => {
    const count = Math.floor(Math.random() * 11);
    return { correctCount: count, dots: DOT_PATTERNS[count] };
  }, []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleSubmit = (value: string) => {
    setUserAnswer(value);
    onValueChange?.(value);

    const isCorrect = String(correctCount) === value;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg'}`}
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

      {/* Dot Pattern Container */}
      <motion.div
        className={`relative rounded-2xl ${embedded ? 'w-32 h-32 bg-white border-2 border-slate-200' : 'w-40 h-40 bg-white border-4 border-purple-300 shadow-xl'}`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ position: 'absolute', inset: 0 }}
        >
          {dots.map((dot, i) => (
            <motion.circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r="6"
              fill="#7c3aed"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.08 }}
            />
          ))}
        </svg>
      </motion.div>

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

export default DotRecognizer;
