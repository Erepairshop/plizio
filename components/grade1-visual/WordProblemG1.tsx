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
    title: 'Szöveges feladat',
    hasApples: 'almája van',
    hasOranges: 'narancsja van',
    howMany: 'Hány gyümölcse van összesen?',
    answer: 'Válasz:',
    check: 'Ellenőrzés',
    correct: '✓ Helyes!',
    incorrect: '✗ Próbáld újra!',
  },
  de: {
    title: 'Textaufgabe',
    hasApples: 'Äpfel',
    hasOranges: 'Orangen',
    howMany: 'Wie viele Früchte hat sie zusammen?',
    answer: 'Antwort:',
    check: 'Prüfen',
    correct: '✓ Richtig!',
    incorrect: '✗ Versuche es noch mal!',
  },
  en: {
    title: 'Word Problem',
    hasApples: 'apples',
    hasOranges: 'oranges',
    howMany: 'How many fruits does she have in total?',
    answer: 'Answer:',
    check: 'Check',
    correct: '✓ Correct!',
    incorrect: '✗ Try again!',
  },
  ro: {
    title: 'Problemă cu text',
    hasApples: 'mere',
    hasOranges: 'portocale',
    howMany: 'Câte fructe are în total?',
    answer: 'Răspuns:',
    check: 'Verifică',
    correct: '✓ Corect!',
    incorrect: '✗ Încearcă din nou!',
  },
};

export default function WordProblemG1({ lang, embedded = false, onValueChange, onAnswer }: Props) {
  const labels = LABELS[lang];
  const [userInput, setUserInput] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const question = useMemo(() => {
    const apples = Math.floor(Math.random() * 5) + 1; // 1-5
    const oranges = Math.floor(Math.random() * 5) + 1; // 1-5
    const total = apples + oranges;
    return { apples, oranges, total };
  }, []);

  const handleSubmit = useCallback(() => {
    const value = userInput.trim();
    const isCorrect = value === String(question.total);
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onValueChange?.(value);
    onAnswer?.();
  }, [userInput, question.total, onValueChange, onAnswer]);

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-8'}`}>
      {!embedded && (
        <h3 className="text-center text-lg font-bold text-slate-800">
          {labels.title}
        </h3>
      )}

      <div className={`flex flex-col gap-6 ${embedded ? 'bg-white rounded' : 'bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6'}`}>
        {/* Story setup */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="text-5xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            👧
          </motion.div>

          <div className="text-center text-sm font-bold text-slate-700 leading-relaxed">
            <div>
              {question.apples} 🍎 {labels.hasApples}
            </div>
            <div>
              {question.oranges} 🍊 {labels.hasOranges}
            </div>
          </div>
        </div>

        {/* Visual representation */}
        <div className="flex justify-center gap-3 flex-wrap">
          {/* Apples */}
          {Array.from({ length: question.apples }).map((_, i) => (
            <motion.div
              key={`a${i}`}
              className="text-3xl"
              initial={{ scale: 0, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              🍎
            </motion.div>
          ))}
          {/* Oranges */}
          {Array.from({ length: question.oranges }).map((_, i) => (
            <motion.div
              key={`o${i}`}
              className="text-3xl"
              initial={{ scale: 0, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: (question.apples + i) * 0.1, duration: 0.3 }}
            >
              🍊
            </motion.div>
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="text-center text-sm font-bold text-slate-700">
        {labels.howMany}
      </div>

      {/* Input field */}
      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-bold text-slate-700">{labels.answer}</span>
        <input
          type="number"
          min="0"
          max="10"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
            setFeedback(null);
            if (embedded) onValueChange?.(e.target.value.trim());
          }}
          className="w-16 px-2 py-2 border-2 border-slate-300 rounded-lg text-center font-bold text-slate-700 focus:outline-none focus:border-blue-500"
          placeholder="?"
        />
      </div>

      {/* Check button */}
      {!embedded && (
        <motion.button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {labels.check}
        </motion.button>
      )}

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
