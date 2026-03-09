'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: () => void;
}

const LABELS = {
  hu: {
    title: 'Mennyiség összehasonlítása',
    more: 'Több',
    less: 'Kevesebb',
    equal: 'Egyenlő',
    check: 'Ellenőrzés',
    correct: '✓ Helyes!',
    incorrect: '✗ Próbáld újra!',
  },
  de: {
    title: 'Menge vergleichen',
    more: 'Mehr',
    less: 'Weniger',
    equal: 'Gleich',
    check: 'Prüfen',
    correct: '✓ Richtig!',
    incorrect: '✗ Versuche es noch mal!',
  },
  en: {
    title: 'Volume Comparison',
    more: 'More',
    less: 'Less',
    equal: 'Equal',
    check: 'Check',
    correct: '✓ Correct!',
    incorrect: '✗ Try again!',
  },
  ro: {
    title: 'Compararea volumului',
    more: 'Mai mult',
    less: 'Mai puțin',
    equal: 'Egal',
    check: 'Verifică',
    correct: '✓ Corect!',
    incorrect: '✗ Încearcă din nou!',
  },
};

export default function VolumeComparison({ lang, embedded = false, onValueChange, onAnswer }: Props) {
  const labels = LABELS[lang];
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const question = useMemo(() => {
    const volumes = [2, 3, 4, 5, 6];
    const a = volumes[Math.floor(Math.random() * volumes.length)];
    let b = volumes[Math.floor(Math.random() * volumes.length)];
    while (b === a) {
      b = volumes[Math.floor(Math.random() * volumes.length)];
    }

    const correct = a > b ? 'more' : a < b ? 'less' : 'equal';
    return { a, b, correct };
  }, []);

  const handleAnswer = useCallback((answer: string) => {
    setUserAnswer(answer);
    const isCorrect = answer === question.correct;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onValueChange?.(answer);
    onAnswer?.();
  }, [question.correct, onValueChange, onAnswer]);

  const liquidHeight = (volume: number) => `${volume * 20}px`;

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-8'}`}>
      {!embedded && (
        <h3 className="text-center text-lg font-bold text-slate-800">
          {labels.title}
        </h3>
      )}

      <div className={`flex flex-col gap-6 ${embedded ? 'bg-white rounded' : 'bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6'}`}>
        {/* Two glasses */}
        <div className="flex justify-center items-end gap-8">
          {/* Glass A */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-32 border-4 border-slate-400 rounded-b-lg flex items-end justify-center overflow-hidden bg-white">
              <motion.div
                className="w-full bg-gradient-to-t from-cyan-400 to-cyan-300"
                style={{ height: liquidHeight(question.a) }}
                initial={{ height: 0 }}
                animate={{ height: liquidHeight(question.a) }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <div className="text-xs font-semibold text-slate-700">A</div>
          </div>

          {/* Glass B */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-32 border-4 border-slate-400 rounded-b-lg flex items-end justify-center overflow-hidden bg-white">
              <motion.div
                className="w-full bg-gradient-to-t from-blue-400 to-blue-300"
                style={{ height: liquidHeight(question.b) }}
                initial={{ height: 0 }}
                animate={{ height: liquidHeight(question.b) }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
            <div className="text-xs font-semibold text-slate-700">B</div>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="text-center text-sm font-bold text-slate-700">
        {embedded ? 'A vs B?' : 'Az A-ban több vagy kevesebb folyadék van, mint B-ben?'}
      </div>

      {/* Answer Buttons */}
      <div className="grid grid-cols-3 gap-2">
        {['more', 'equal', 'less'].map((opt) => (
          <motion.button
            key={opt}
            onClick={() => handleAnswer(opt)}
            className={`py-2 px-3 rounded-lg font-bold text-sm transition-all ${
              userAnswer === opt
                ? 'bg-blue-500 text-white'
                : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-blue-500'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {opt === 'more' ? labels.more : opt === 'equal' ? labels.equal : labels.less}
          </motion.button>
        ))}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`text-center font-bold py-2 rounded-lg ${
              feedback === 'correct'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {feedback === 'correct' ? labels.correct : labels.incorrect}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
