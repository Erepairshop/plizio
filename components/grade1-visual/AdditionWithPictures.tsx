'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface AdditionWithPicturesProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Összeadás képekkel',
    hint: 'Összeadj meg a képeket!',
    check: 'Ellenőrzés',
    correct: 'Helyes! ✓',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Addition mit Bildern',
    hint: 'Addiere die Bilder!',
    check: 'Prüfen',
    correct: 'Richtig! ✓',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'Addition with Pictures',
    hint: 'Add up the pictures!',
    check: 'Check',
    correct: 'Correct! ✓',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Adunare cu imagini',
    hint: 'Adună imaginile!',
    check: 'Verifică',
    correct: 'Corect! ✓',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

// Simple fruit/object emoji for visual clarity
const OBJECTS = ['🍎', '🍌', '⭐', '🌸', '🎈', '❤️'];

const AdditionWithPictures: React.FC<AdditionWithPicturesProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { num1, num2, correctSum, object } = useMemo(() => {
    const a = Math.floor(Math.random() * 8) + 1; // 1-8
    const b = Math.floor(Math.random() * (10 - a)) + 1; // 1 to 10-a
    const obj = OBJECTS[Math.floor(Math.random() * OBJECTS.length)];
    return {
      num1: a,
      num2: b,
      correctSum: a + b,
      object: obj,
    };
  }, []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const handleSubmit = (value: string) => {
    setUserAnswer(value);
    onValueChange?.(value);

    const isCorrect = String(correctSum) === value;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg'}`}
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

      {/* Visual Addition */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {/* First group */}
        <motion.div className="flex flex-wrap gap-2 justify-center max-w-[150px]">
          {Array.from({ length: num1 }, (_, i) => (
            <motion.div
              key={`a-${i}`}
              className="text-3xl"
              initial={{ scale: 0, rotateZ: -180 }}
              animate={{ scale: 1, rotateZ: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {object}
            </motion.div>
          ))}
        </motion.div>

        {/* Plus sign */}
        <motion.div
          className="text-3xl font-bold text-orange-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: num1 * 0.1 }}
        >
          +
        </motion.div>

        {/* Second group */}
        <motion.div className="flex flex-wrap gap-2 justify-center max-w-[150px]">
          {Array.from({ length: num2 }, (_, i) => (
            <motion.div
              key={`b-${i}`}
              className="text-3xl"
              initial={{ scale: 0, rotateZ: 180 }}
              animate={{ scale: 1, rotateZ: 0 }}
              transition={{ delay: (num1 + i) * 0.1 }}
            >
              {object}
            </motion.div>
          ))}
        </motion.div>

        {/* Equals */}
        <motion.div
          className="text-3xl font-bold text-blue-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: (num1 + num2) * 0.1 }}
        >
          =
        </motion.div>

        {/* Question mark */}
        <motion.div
          className="text-3xl font-bold text-slate-600 w-12 h-12 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: (num1 + num2) * 0.1 + 0.2 }}
        >
          ?
        </motion.div>
      </div>

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
              ? 'bg-slate-100 text-slate-800 border-slate-300 focus:border-orange-500'
              : 'bg-white text-slate-800 border-orange-300 focus:border-orange-600 focus:shadow-lg'
          }`}
        />

        <button
          onClick={() => handleSubmit(userAnswer)}
          disabled={!userAnswer}
          className="w-full px-4 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition active:scale-95"
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

export default AdditionWithPictures;
