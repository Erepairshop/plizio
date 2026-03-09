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
    title: 'Bevásárlás',
    question: 'Elegendő érméd van a megvásárláshoz?',
    coins: 'érme',
    total: 'Összesen:',
    have: 'Van nálad:',
    enough: 'Elég',
    notenough: 'Nem elég',
    check: 'Ellenőrzés',
    correct: '✓ Helyes!',
    incorrect: '✗ Próbáld újra!',
  },
  de: {
    title: 'Einkaufen',
    question: 'Hast du genug Münzen zum Kaufen?',
    coins: 'Münze',
    total: 'Preis:',
    have: 'Du hast:',
    enough: 'Genug',
    notenough: 'Nicht genug',
    check: 'Prüfen',
    correct: '✓ Richtig!',
    incorrect: '✗ Versuche es noch mal!',
  },
  en: {
    title: 'Shopping',
    question: 'Do you have enough coins to buy it?',
    coins: 'coin',
    total: 'Price:',
    have: 'You have:',
    enough: 'Enough',
    notenough: 'Not enough',
    check: 'Check',
    correct: '✓ Correct!',
    incorrect: '✗ Try again!',
  },
  ro: {
    title: 'Cumpărături',
    question: 'Ai destule monede să cumperi?',
    coins: 'monedă',
    total: 'Preț:',
    have: 'Ai:',
    enough: 'Suficient',
    notenough: 'Nu suficient',
    check: 'Verifică',
    correct: '✓ Corect!',
    incorrect: '✗ Încearcă din nou!',
  },
};

export default function SimpleShopping({ lang, embedded = false, onValueChange, onAnswer }: Props) {
  const labels = LABELS[lang];
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const question = useMemo(() => {
    const items = ['🍎', '🍌', '🍰', '🎂', '🍭'];
    const item = items[Math.floor(Math.random() * items.length)];
    const price = Math.floor(Math.random() * 5) + 2; // 2-6 coins
    const userCoins = Math.floor(Math.random() * 8) + 1; // 1-8 coins
    const correct = userCoins >= price ? 'enough' : 'notenough';
    return { item, price, userCoins, correct };
  }, []);

  const handleAnswer = useCallback((answer: string) => {
    setUserAnswer(answer);
    const isCorrect = answer === question.correct;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onValueChange?.(answer);
    onAnswer?.();
  }, [question.correct, onValueChange, onAnswer]);

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-8'}`}>
      {!embedded && (
        <h3 className="text-center text-lg font-bold text-slate-800">
          {labels.title}
        </h3>
      )}

      <div className={`flex flex-col gap-6 ${embedded ? 'bg-white rounded' : 'bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6'}`}>
        {/* Item for sale */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="text-6xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            {question.item}
          </motion.div>
          <div className="text-sm font-bold text-slate-700">
            {labels.total} {question.price} 🪙
          </div>
        </div>

        {/* Your coins */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-sm font-bold text-slate-700">{labels.have}</div>
          <div className="flex gap-1 flex-wrap justify-center">
            {Array.from({ length: question.userCoins }).map((_, i) => (
              <motion.div
                key={i}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-xs font-bold text-yellow-800"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                🪙
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="text-center text-sm font-bold text-slate-700">
        {labels.question}
      </div>

      {/* Answer Buttons */}
      <div className="grid grid-cols-2 gap-2">
        {['enough', 'notenough'].map((opt) => (
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
            {opt === 'enough' ? labels.enough : labels.notenough}
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
