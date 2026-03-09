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
    title: 'Súly összehasonlítása',
    question: 'A nehezebb vagy könnyebb, mint B?',
    heavier: 'Nehezebb',
    lighter: 'Könnyebb',
    equal: 'Egyenlő',
    check: 'Ellenőrzés',
    correct: '✓ Helyes!',
    incorrect: '✗ Próbáld újra!',
  },
  de: {
    title: 'Gewicht vergleichen',
    question: 'Ist A schwerer oder leichter als B?',
    heavier: 'Schwerer',
    lighter: 'Leichter',
    equal: 'Gleich',
    check: 'Prüfen',
    correct: '✓ Richtig!',
    incorrect: '✗ Versuche es noch mal!',
  },
  en: {
    title: 'Weight Comparison',
    question: 'Is A heavier or lighter than B?',
    heavier: 'Heavier',
    lighter: 'Lighter',
    equal: 'Equal',
    check: 'Check',
    correct: '✓ Correct!',
    incorrect: '✗ Try again!',
  },
  ro: {
    title: 'Compararea greutății',
    question: 'A este mai greu sau mai ușor decât B?',
    heavier: 'Mai greu',
    lighter: 'Mai ușor',
    equal: 'Egal',
    check: 'Verifică',
    correct: '✓ Corect!',
    incorrect: '✗ Încearcă din nou!',
  },
};

export default function WeightComparison({ lang, embedded = false, onValueChange, onAnswer }: Props) {
  const labels = LABELS[lang];
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const question = useMemo(() => {
    const weights = [1, 2, 3, 4, 5];
    const a = weights[Math.floor(Math.random() * weights.length)];
    let b = weights[Math.floor(Math.random() * weights.length)];
    while (b === a) {
      b = weights[Math.floor(Math.random() * weights.length)];
    }

    const correct = a > b ? 'heavier' : a < b ? 'lighter' : 'equal';
    return { a, b, correct };
  }, []);

  const handleAnswer = useCallback((answer: string) => {
    setUserAnswer(answer);
    const isCorrect = answer === question.correct;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onValueChange?.(answer);
    onAnswer?.();
  }, [question.correct, onValueChange, onAnswer]);

  const ballSize = (weight: number) => `${20 + weight * 12}px`;

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-8'}`}>
      {!embedded && (
        <h3 className="text-center text-lg font-bold text-slate-800">
          {labels.title}
        </h3>
      )}

      <div className={`flex flex-col gap-8 ${embedded ? 'bg-white rounded' : 'bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6'}`}>
        {/* Scale with two sides */}
        <div className="flex justify-center items-end gap-6">
          {/* Left plate */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="flex items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white font-bold text-lg"
              style={{ width: ballSize(question.a), height: ballSize(question.a) }}
              initial={{ scale: 0, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {question.a}
            </motion.div>
            <div className="w-16 h-2 bg-slate-400 rounded-full" />
          </div>

          {/* Scale beam */}
          <motion.div
            className="h-1 bg-gradient-to-r from-slate-300 to-slate-500 rounded-full"
            style={{
              width: '80px',
              transformOrigin: 'center',
              rotate: question.a > question.b ? '-8deg' : question.a < question.b ? '8deg' : '0deg',
            }}
            animate={{
              rotate: question.a > question.b ? '-8deg' : question.a < question.b ? '8deg' : '0deg',
            }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />

          {/* Right plate */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 text-white font-bold text-lg"
              style={{ width: ballSize(question.b), height: ballSize(question.b) }}
              initial={{ scale: 0, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {question.b}
            </motion.div>
            <div className="w-16 h-2 bg-slate-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="text-center text-sm font-bold text-slate-700">
        {labels.question}
      </div>

      {/* Answer Buttons */}
      <div className="grid grid-cols-3 gap-2">
        {['heavier', 'equal', 'lighter'].map((opt) => (
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
            {opt === 'heavier' ? labels.heavier : opt === 'equal' ? labels.equal : labels.lighter}
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
