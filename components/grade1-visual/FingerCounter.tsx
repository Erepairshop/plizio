'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface FingerCounterProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Hány ujj van felfelé?',
    hint: 'Számlálj meg az ujjakat!',
    check: 'Ellenőrzés',
    correct: 'Helyes! 👍',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Wie viele Finger?',
    hint: 'Zähle die Finger!',
    check: 'Prüfen',
    correct: 'Richtig! 👍',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'How many fingers?',
    hint: 'Count the fingers!',
    check: 'Check',
    correct: 'Correct! 👍',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Câți degete?',
    hint: 'Numără degetele!',
    check: 'Verifică',
    correct: 'Corect! 👍',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

const FingerCounter: React.FC<FingerCounterProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { correctCount, extendedFingers } = useMemo(() => {
    const count = Math.floor(Math.random() * 11);
    const extended = Array.from({ length: count }, (_, i) => i);
    return { correctCount: count, extendedFingers: extended };
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

  // Render a hand with extended/closed fingers
  const renderHand = (isLeft: boolean) => {
    const fingers = ['thumb', 'index', 'middle', 'ring', 'pinky'];
    const fingerExtended = isLeft
      ? extendedFingers.slice(0, 5)
      : extendedFingers.slice(5, 10);

    return (
      <svg viewBox="0 0 80 120" className="w-full h-full">
        {/* Palm */}
        <ellipse cx="40" cy="80" rx="20" ry="30" fill="#f5d5a8" />

        {/* Fingers */}
        {fingers.map((finger, idx) => {
          const isExtended = fingerExtended.includes(idx);
          let x, y1, y2;

          if (finger === 'thumb') {
            x = isLeft ? 20 : 60;
            y1 = 70;
            y2 = isExtended ? 40 : 65;
          } else {
            const positions = isLeft ? [10, 25, 40, 55] : [25, 40, 55, 70];
            x = positions[idx - 1];
            y1 = 50;
            y2 = isExtended ? 10 : 50;
          }

          return (
            <motion.g key={idx}>
              {/* Finger line */}
              <line
                x1={x}
                y1={y1}
                x2={x}
                y2={y2}
                stroke="#d4a373"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Finger tip */}
              {isExtended && (
                <motion.circle
                  cx={x}
                  cy={y2}
                  r="5"
                  fill="#ff6b9d"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                />
              )}
            </motion.g>
          );
        })}
      </svg>
    );
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-pink-50 to-yellow-50 rounded-2xl shadow-lg'}`}
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

      {/* Hands Display */}
      <div className={`flex gap-4 ${embedded ? 'scale-75' : ''}`}>
        {/* Left hand */}
        <motion.div
          className="w-16 h-24 rounded-lg bg-yellow-100 p-2 shadow-lg"
          initial={{ rotateY: -20 }}
          animate={{ rotateY: 0 }}
        >
          {renderHand(true)}
        </motion.div>

        {/* Right hand */}
        <motion.div
          className="w-16 h-24 rounded-lg bg-yellow-100 p-2 shadow-lg"
          initial={{ rotateY: 20 }}
          animate={{ rotateY: 0 }}
        >
          {renderHand(false)}
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
              ? 'bg-slate-100 text-slate-800 border-slate-300 focus:border-pink-500'
              : 'bg-white text-slate-800 border-pink-300 focus:border-pink-600 focus:shadow-lg'
          }`}
        />

        <button
          onClick={() => handleSubmit(userAnswer)}
          disabled={!userAnswer}
          className="w-full px-4 py-2 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition active:scale-95"
        >
          ✓ {t.check}
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

export default FingerCounter;
