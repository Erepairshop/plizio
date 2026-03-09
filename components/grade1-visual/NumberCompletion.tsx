'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface NumberCompletionProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Egészítsd ki a számsort!',
    hint: 'Keress egy szám, hogy az egyenleted igaz legyen!',
    correct: 'Helyes! ✓',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Ergänze die Zahl!',
    hint: 'Finde die Zahl, damit die Gleichung stimmt!',
    correct: 'Richtig! ✓',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'Complete the Number!',
    hint: 'Find the number to make the equation true!',
    correct: 'Correct! ✓',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Completează numărul!',
    hint: 'Găsește numărul pentru a face ecuația adevărată!',
    correct: 'Corect! ✓',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

type EquationType = 'add-to-sum' | 'sum-minus' | 'minus-to-result';

const NumberCompletion: React.FC<NumberCompletionProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { type, num1, num2, result, correctAnswer } = useMemo(() => {
    const types: EquationType[] = ['add-to-sum', 'sum-minus', 'minus-to-result'];
    const chosenType = types[Math.floor(Math.random() * types.length)];

    let a, b, res, answer;

    switch (chosenType) {
      case 'add-to-sum': // a + ? = res
        res = Math.floor(Math.random() * 10) + 2; // 2-11
        a = Math.floor(Math.random() * res);
        b = res - a;
        answer = b;
        break;
      case 'sum-minus': // ? + b = res
        res = Math.floor(Math.random() * 10) + 2; // 2-11
        b = Math.floor(Math.random() * res);
        a = res - b;
        answer = a;
        break;
      case 'minus-to-result': // a - ? = result (find the subtracted)
        a = Math.floor(Math.random() * 10) + 3; // 3-12
        res = Math.floor(Math.random() * a);
        b = a - res;
        answer = b;
        break;
    }

    return {
      type: chosenType,
      num1: a,
      num2: b,
      result: res,
      correctAnswer: answer,
    };
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

  const renderEquation = () => {
    switch (type) {
      case 'add-to-sum':
        return (
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <motion.div className="w-16 h-16 rounded-xl bg-cyan-400 text-white flex items-center justify-center text-3xl font-bold shadow-lg"
              initial={{ scale: 0, rotateZ: -90 }} animate={{ scale: 1, rotateZ: 0 }} transition={{ type: 'spring', stiffness: 100 }}>
              {num1}
            </motion.div>
            <span className="text-3xl font-bold text-cyan-600">+</span>
            <motion.div className="w-16 h-16 rounded-xl bg-cyan-200 text-cyan-700 flex items-center justify-center text-3xl font-bold border-3 border-dashed border-cyan-400"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
              ?
            </motion.div>
            <span className="text-3xl font-bold text-cyan-600">=</span>
            <motion.div className="w-16 h-16 rounded-xl bg-cyan-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg"
              initial={{ scale: 0, rotateZ: 90 }} animate={{ scale: 1, rotateZ: 0 }} transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}>
              {result}
            </motion.div>
          </div>
        );
      case 'sum-minus':
        return (
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <motion.div className="w-16 h-16 rounded-xl bg-teal-200 text-teal-700 flex items-center justify-center text-3xl font-bold border-3 border-dashed border-teal-400"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}>
              ?
            </motion.div>
            <span className="text-3xl font-bold text-teal-600">+</span>
            <motion.div className="w-16 h-16 rounded-xl bg-teal-400 text-white flex items-center justify-center text-3xl font-bold shadow-lg"
              initial={{ scale: 0, rotateZ: 90 }} animate={{ scale: 1, rotateZ: 0 }} transition={{ type: 'spring', stiffness: 100 }}>
              {num2}
            </motion.div>
            <span className="text-3xl font-bold text-teal-600">=</span>
            <motion.div className="w-16 h-16 rounded-xl bg-teal-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg"
              initial={{ scale: 0, rotateZ: -90 }} animate={{ scale: 1, rotateZ: 0 }} transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}>
              {result}
            </motion.div>
          </div>
        );
      case 'minus-to-result':
        return (
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <motion.div className="w-16 h-16 rounded-xl bg-rose-400 text-white flex items-center justify-center text-3xl font-bold shadow-lg"
              initial={{ scale: 0, rotateZ: -90 }} animate={{ scale: 1, rotateZ: 0 }} transition={{ type: 'spring', stiffness: 100 }}>
              {num1}
            </motion.div>
            <span className="text-3xl font-bold text-rose-600">−</span>
            <motion.div className="w-16 h-16 rounded-xl bg-rose-200 text-rose-700 flex items-center justify-center text-3xl font-bold border-3 border-dashed border-rose-400"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}>
              ?
            </motion.div>
            <span className="text-3xl font-bold text-rose-600">=</span>
            <motion.div className="w-16 h-16 rounded-xl bg-rose-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg"
              initial={{ scale: 0, rotateZ: 90 }} animate={{ scale: 1, rotateZ: 0 }} transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}>
              {result}
            </motion.div>
          </div>
        );
    }
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl shadow-lg'}`}
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

      {/* Equation */}
      {renderEquation()}

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
              ? 'bg-slate-100 text-slate-800 border-slate-300 focus:border-cyan-500'
              : 'bg-white text-slate-800 border-cyan-300 focus:border-cyan-600 focus:shadow-lg'
          }`}
        />

        <button
          onClick={() => handleSubmit(userAnswer)}
          disabled={!userAnswer}
          className="w-full px-4 py-2 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition active:scale-95"
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

export default NumberCompletion;
