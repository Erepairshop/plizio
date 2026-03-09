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
    title: 'Hossz összehasonlítása',
    longer: 'Hosszabb',
    shorter: 'Rövidebb',
    equal: 'Egyenlő',
    check: 'Ellenőrzés',
    correct: '✓ Helyes!',
    incorrect: '✗ Próbáld újra!',
  },
  de: {
    title: 'Länge vergleichen',
    longer: 'Länger',
    shorter: 'Kürzer',
    equal: 'Gleich',
    check: 'Prüfen',
    correct: '✓ Richtig!',
    incorrect: '✗ Versuche es noch mal!',
  },
  en: {
    title: 'Length Comparison',
    longer: 'Longer',
    shorter: 'Shorter',
    equal: 'Equal',
    check: 'Check',
    correct: '✓ Correct!',
    incorrect: '✗ Try again!',
  },
  ro: {
    title: 'Compararea lungimii',
    longer: 'Mai lung',
    shorter: 'Mai scurt',
    equal: 'Egal',
    check: 'Verifică',
    correct: '✓ Corect!',
    incorrect: '✗ Încearcă din nou!',
  },
};

export default function LengthComparison({ lang, embedded = false, onValueChange, onAnswer }: Props) {
  const labels = LABELS[lang];
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const question = useMemo(() => {
    const lengths = [2, 3, 4, 5, 6];
    const a = lengths[Math.floor(Math.random() * lengths.length)];
    let b = lengths[Math.floor(Math.random() * lengths.length)];
    while (b === a) {
      b = lengths[Math.floor(Math.random() * lengths.length)];
    }

    const correct = a > b ? 'longer' : a < b ? 'shorter' : 'equal';
    return { a, b, correct };
  }, []);

  const handleAnswer = useCallback((answer: string) => {
    setUserAnswer(answer);
    const isCorrect = answer === question.correct;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onValueChange?.(answer);
    onAnswer?.();
  }, [question.correct, onValueChange, onAnswer]);

  const barWidth = (length: number) => `${length * 24}px`;

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-8'}`}>
      {!embedded && (
        <h3 className="text-center text-lg font-bold text-slate-800">
          {labels.title}
        </h3>
      )}

      <div className={`flex flex-col gap-6 ${embedded ? 'bg-white rounded' : 'bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6'}`}>
        {/* Bar A */}
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold text-slate-700">A:</div>
          <div className="flex items-center">
            <motion.div
              className="h-6 rounded bg-gradient-to-r from-cyan-400 to-blue-500"
              style={{ width: barWidth(question.a) }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </div>

        {/* Bar B */}
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold text-slate-700">B:</div>
          <div className="flex items-center">
            <motion.div
              className="h-6 rounded bg-gradient-to-r from-blue-400 to-indigo-500"
              style={{ width: barWidth(question.b) }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="text-center text-sm font-bold text-slate-700">
        {embedded ? 'A vs B?' : 'Az A hosszabb vagy rövidebb, mint a B?'}
      </div>

      {/* Answer Buttons */}
      <div className="grid grid-cols-3 gap-2">
        {['longer', 'equal', 'shorter'].map((opt) => (
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
            {opt === 'longer' ? labels.longer : opt === 'equal' ? labels.equal : labels.shorter}
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
