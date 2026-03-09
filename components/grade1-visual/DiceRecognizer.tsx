'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface DiceRecognizerProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Mi a dobókocka száma?',
    hint: 'Nézd meg a felső lapot!',
    correct: 'Helyes! 🎲',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Welche Zahl zeigt der Würfel?',
    hint: 'Schau auf die Oberseite!',
    correct: 'Richtig! 🎲',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'What number is on the dice?',
    hint: 'Look at the top face!',
    correct: 'Correct! 🎲',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Ce număr are zarul?',
    hint: 'Privă la fața de sus!',
    correct: 'Corect! 🎲',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

const DOT_PATTERNS: Record<number, Array<{ x: number; y: number }>> = {
  1: [{ x: 50, y: 50 }],
  2: [{ x: 25, y: 25 }, { x: 75, y: 75 }],
  3: [{ x: 25, y: 25 }, { x: 50, y: 50 }, { x: 75, y: 75 }],
  4: [
    { x: 25, y: 25 },
    { x: 75, y: 25 },
    { x: 25, y: 75 },
    { x: 75, y: 75 },
  ],
  5: [
    { x: 25, y: 25 },
    { x: 75, y: 25 },
    { x: 50, y: 50 },
    { x: 25, y: 75 },
    { x: 75, y: 75 },
  ],
  6: [
    { x: 25, y: 25 },
    { x: 75, y: 25 },
    { x: 25, y: 50 },
    { x: 75, y: 50 },
    { x: 25, y: 75 },
    { x: 75, y: 75 },
  ],
};

const DiceRecognizer: React.FC<DiceRecognizerProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { correctNumber, dots, rotation } = useMemo(() => {
    const num = Math.floor(Math.random() * 6) + 1;
    return {
      correctNumber: num,
      dots: DOT_PATTERNS[num],
      rotation: { x: Math.random() * 20 - 10, y: Math.random() * 20 - 10 },
    };
  }, []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleSubmit = (value: string) => {
    setUserAnswer(value);
    onValueChange?.(value);

    const isCorrect = String(correctNumber) === value;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg'}`}
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

      {/* Dice 3D Effect */}
      <motion.div
        className={`relative ${embedded ? 'w-28 h-28' : 'w-40 h-40'}`}
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
      >
        <div
          className={`relative w-full h-full rounded-2xl shadow-2xl border-4 border-red-400 bg-white flex items-center justify-center ${
            embedded ? '' : ''
          }`}
          style={{
            boxShadow: '0 10px 40px rgba(239, 68, 68, 0.3)',
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {dots.map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.x}
                cy={dot.y}
                r="5"
                fill="#dc2626"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Input & Buttons */}
      <div className="flex flex-col items-center gap-3 w-full max-w-xs">
        <div className="flex gap-2 justify-center flex-wrap">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.button
              key={num}
              onClick={() => {
                setUserAnswer(String(num));
                handleSubmit(String(num));
              }}
              className={`w-10 h-10 rounded-lg font-bold text-sm transition ${
                userAnswer === String(num)
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {num}
            </motion.button>
          ))}
        </div>
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

export default DiceRecognizer;
