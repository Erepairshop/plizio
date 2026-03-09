'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface SubtractionWithPicturesProps {
  lang?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: {
    title: 'Kivonás képekkel',
    hint: 'Vond ki a képeket!',
    correct: 'Helyes! ✓',
    incorrect: 'Nem jó. Próbáld újra!',
  },
  de: {
    title: 'Subtraktion mit Bildern',
    hint: 'Subtrahiere die Bilder!',
    correct: 'Richtig! ✓',
    incorrect: 'Falsch. Versuche nochmal!',
  },
  en: {
    title: 'Subtraction with Pictures',
    hint: 'Subtract the pictures!',
    correct: 'Correct! ✓',
    incorrect: 'Wrong. Try again!',
  },
  ro: {
    title: 'Scădere cu imagini',
    hint: 'Scade imaginile!',
    correct: 'Corect! ✓',
    incorrect: 'Greșit. Încearcă din nou!',
  },
};

const OBJECTS = ['🍎', '🍌', '⭐', '🌸', '🎈', '❤️'];

const SubtractionWithPictures: React.FC<SubtractionWithPicturesProps> = ({
  lang = 'en',
  embedded = false,
  onValueChange,
  onAnswer,
}) => {
  const t = LABELS[lang];

  const { total, subtract, correctDiff, object } = useMemo(() => {
    const tot = Math.floor(Math.random() * 10) + 2; // 2-11
    const sub = Math.floor(Math.random() * tot);
    const obj = OBJECTS[Math.floor(Math.random() * OBJECTS.length)];
    return {
      total: tot,
      subtract: sub,
      correctDiff: tot - sub,
      object: obj,
    };
  }, []);

  const [userAnswer, setUserAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [showCrossed, setShowCrossed] = useState(false);

  const handleSubmit = (value: string) => {
    setUserAnswer(value);
    onValueChange?.(value);

    const isCorrect = String(correctDiff) === value;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
  };

  return (
    <motion.div
      className={`w-full flex flex-col items-center gap-6 ${embedded ? 'p-3' : 'p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl shadow-lg'}`}
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

      {/* Visual Subtraction */}
      <div className="flex flex-col items-center gap-4">
        {/* Total objects */}
        <motion.div className="flex flex-wrap gap-2 justify-center max-w-xs">
          {Array.from({ length: total }, (_, i) => (
            <motion.div
              key={i}
              className={`text-3xl transition-all ${
                i < subtract && showCrossed ? 'opacity-30 line-through' : 'opacity-100'
              }`}
              initial={{ scale: 0, rotateZ: -180 }}
              animate={{ scale: 1, rotateZ: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              {object}
            </motion.div>
          ))}
        </motion.div>

        {/* Minus and subtract count */}
        <motion.div
          className="text-xl font-bold text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: total * 0.08 + 0.2 }}
        >
          <span className="text-2xl text-red-500 mr-2">−</span>
          <span className="text-slate-700">{subtract}</span>
        </motion.div>

        {/* Show crossed indicator */}
        {!showCrossed && total > 0 && (
          <motion.button
            onClick={() => setShowCrossed(true)}
            className="px-3 py-1 text-sm bg-red-200 text-red-700 rounded-lg hover:bg-red-300 transition"
            whileTap={{ scale: 0.95 }}
          >
            {lang === 'hu' ? 'Jelöld meg' : lang === 'de' ? 'Markieren' : lang === 'ro' ? 'Marchează' : 'Mark'}
          </motion.button>
        )}
      </div>

      {/* Equals and question */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <span className="text-3xl font-bold text-blue-500">=</span>
        <span className="text-3xl font-bold text-slate-600">?</span>
      </motion.div>

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
              ? 'bg-slate-100 text-slate-800 border-slate-300 focus:border-red-500'
              : 'bg-white text-slate-800 border-red-300 focus:border-red-600 focus:shadow-lg'
          }`}
        />

        <button
          onClick={() => handleSubmit(userAnswer)}
          disabled={!userAnswer}
          className="w-full px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition active:scale-95"
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

export default SubtractionWithPictures;
