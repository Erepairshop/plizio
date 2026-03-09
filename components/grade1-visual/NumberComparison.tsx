'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface NumberComparisonProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Nagyobb vagy kisebb?',
    hint: 'Válassz: >, <, vagy =',
    correct: 'Helyes! ✓',
    incorrect: 'Nem jó. Próbáld újra!',
    greater: 'nagyobb',
    less: 'kisebb',
    equal: 'egyenlő',
  },
  de: {
    title: 'Größer oder kleiner?',
    hint: 'Wähle: >, <, oder =',
    correct: 'Richtig! ✓',
    incorrect: 'Falsch. Versuche nochmal!',
    greater: 'größer',
    less: 'kleiner',
    equal: 'gleich',
  },
  en: {
    title: 'Greater or less than?',
    hint: 'Choose: >, <, or =',
    correct: 'Correct! ✓',
    incorrect: 'Wrong. Try again!',
    greater: 'greater',
    less: 'less',
    equal: 'equal',
  },
  ro: {
    title: 'Mai mare sau mai mic?',
    hint: 'Alege: >, <, sau =',
    correct: 'Corect! ✓',
    incorrect: 'Greșit. Încearcă din nou!',
    greater: 'mai mare',
    less: 'mai mic',
    equal: 'egal',
  },
};

const NumberComparison: React.FC<NumberComparisonProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { num1, num2, correctAnswer } = useMemo(() => {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    let answer: '>' | '<' | '=';

    if (a > b) answer = '>';
    else if (a < b) answer = '<';
    else answer = '=';

    return { num1: a, num2: b, correctAnswer: answer };
  }, []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleAnswer = (value: string) => {
    setUserAnswer(value);
    onValueChange?.(value);

    const isCorrect = correctAnswer === value;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-lg'}`}
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

      {/* Numbers */}
      <div className="flex items-center gap-6">
        {/* First number */}
        <motion.div
          className="w-20 h-20 rounded-2xl bg-blue-400 text-white flex items-center justify-center text-4xl font-bold shadow-lg"
          initial={{ scale: 0, rotateZ: -180 }}
          animate={{ scale: 1, rotateZ: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          {num1}
        </motion.div>

        {/* Question mark (where symbol goes) */}
        <motion.div
          className="text-4xl font-bold text-slate-600 w-12 h-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ?
        </motion.div>

        {/* Second number */}
        <motion.div
          className="w-20 h-20 rounded-2xl bg-blue-400 text-white flex items-center justify-center text-4xl font-bold shadow-lg"
          initial={{ scale: 0, rotateZ: 180 }}
          animate={{ scale: 1, rotateZ: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          {num2}
        </motion.div>
      </div>

      {/* Choice Buttons */}
      <div className="flex gap-3 flex-wrap justify-center">
        {[
          { value: '>', label: '>', desc: t.greater },
          { value: '=', label: '=', desc: t.equal },
          { value: '<', label: '<', desc: t.less },
        ].map((option) => (
          <motion.button
            key={option.value}
            onClick={() => handleAnswer(option.value)}
            className={`flex flex-col items-center px-4 py-2 rounded-lg font-bold transition ${
              userAnswer === option.value
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-2xl">{option.label}</span>
            {!embedded && <span className="text-xs text-slate-500 mt-1">{option.desc}</span>}
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

export default NumberComparison;
