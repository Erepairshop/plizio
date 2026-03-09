'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface SpatialDirectionsProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Melyik irányban van?',
    hint: 'Nézd meg a helyzetét és válaszolj!',
    correct: 'Helyes! ✓',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'In welche Richtung?',
    hint: 'Schau auf die Position und antworte!',
    correct: 'Richtig! ✓',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'Which direction?',
    hint: 'Look at the position and answer!',
    correct: 'Correct! ✓',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'În ce direcție?',
    hint: 'Uită-te la poziție și răspunde!',
    correct: 'Corect! ✓',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

type Direction = 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right';

const DIRECTIONS: { type: Direction; label: Record<string, string>; emoji: string }[] = [
  { type: 'up', label: { hu: 'Fent', de: 'Oben', en: 'Up', ro: 'Sus' }, emoji: '⬆️' },
  { type: 'down', label: { hu: 'Lent', de: 'Unten', en: 'Down', ro: 'Jos' }, emoji: '⬇️' },
  { type: 'left', label: { hu: 'Bal', de: 'Links', en: 'Left', ro: 'Stânga' }, emoji: '⬅️' },
  { type: 'right', label: { hu: 'Jobb', de: 'Rechts', en: 'Right', ro: 'Dreapta' }, emoji: '➡️' },
  { type: 'up-left', label: { hu: 'Bal felül', de: 'Oben links', en: 'Up-left', ro: 'Sus stânga' }, emoji: '↖️' },
  { type: 'up-right', label: { hu: 'Jobb felül', de: 'Oben rechts', en: 'Up-right', ro: 'Sus dreapta' }, emoji: '↗️' },
  { type: 'down-left', label: { hu: 'Bal alul', de: 'Unten links', en: 'Down-left', ro: 'Jos stânga' }, emoji: '↙️' },
  { type: 'down-right', label: { hu: 'Jobb alul', de: 'Unten rechts', en: 'Down-right', ro: 'Jos dreapta' }, emoji: '↘️' },
];

const SpatialDirections: React.FC<SpatialDirectionsProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { correctDirection, shuffledDirections } = useMemo(() => {
    const correct = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
    const shuffled = [...DIRECTIONS].sort(() => Math.random() - 0.5);
    return { correctDirection: correct, shuffledDirections: shuffled };
  }, []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleAnswer = (direction: Direction) => {
    setUserAnswer(direction);
    onValueChange?.(direction);

    const isCorrect = direction === correctDirection.type;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  const getGridPosition = (dir: Direction): { row: number; col: number } => {
    const positions: Record<Direction, { row: number; col: number }> = {
      'up': { row: 0, col: 1 },
      'up-left': { row: 0, col: 0 },
      'up-right': { row: 0, col: 2 },
      'left': { row: 1, col: 0 },
      'right': { row: 1, col: 2 },
      'down': { row: 2, col: 1 },
      'down-left': { row: 2, col: 0 },
      'down-right': { row: 2, col: 2 },
    };
    return positions[dir];
  };

  const targetPos = getGridPosition(correctDirection.type);

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl shadow-lg'}`}
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

      {/* 3x3 Grid with positions */}
      <motion.div
        className={`grid gap-2 p-4 ${embedded ? 'w-40 h-40' : 'w-56 h-56'} bg-white rounded-xl shadow-lg`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        {Array.from({ length: 9 }, (_, idx) => {
          const row = Math.floor(idx / 3);
          const col = idx % 3;
          const isCenter = row === 1 && col === 1;
          const isTarget = row === targetPos.row && col === targetPos.col;

          return (
            <motion.div
              key={idx}
              className={`flex items-center justify-center rounded-lg border-2 ${
                isCenter
                  ? 'bg-slate-200 border-slate-400'
                  : isTarget
                    ? 'bg-blue-300 border-blue-500'
                    : 'bg-slate-100 border-slate-200'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.05 }}
            >
              {isCenter && <span className="text-2xl">👤</span>}
              {isTarget && <span className="text-xl">⭐</span>}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Direction choice buttons */}
      <div className={`grid ${embedded ? 'grid-cols-4 gap-2' : 'grid-cols-4 gap-3'} w-full max-w-xs`}>
        {shuffledDirections.map((dir, idx) => (
          <motion.button
            key={dir.type}
            onClick={() => handleAnswer(dir.type)}
            disabled={!!feedback}
            className={`flex flex-col items-center justify-center p-2 rounded-lg border-2 transition ${
              userAnswer === dir.type
                ? 'bg-blue-500 text-white border-blue-600 shadow-lg'
                : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50'
            } ${feedback ? 'opacity-60' : ''}`}
            whileTap={!feedback ? { scale: 0.9 } : {}}
            initial={{ scale: 0, rotateZ: -45 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{ delay: idx * 0.08 }}
          >
            <span className={`text-xl ${embedded ? '' : ''}`}>{dir.emoji}</span>
            {!embedded && <span className="text-xs font-bold mt-1">{dir.label[lang as keyof typeof dir.label]}</span>}
          </motion.button>
        ))}
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

export default SpatialDirections;
