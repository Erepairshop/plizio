'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Category {
  name: string;
  value: number;
}

interface Props {
  categories: Category[];
  targetIdx: number;
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const QUESTION_TEXT: Record<string, string[]> = {
  hu: ['Hány ', ' van?'],
  de: ['Wie viele ', ' gibt es?'],
  en: ['How many ', ' are there?'],
  ro: ['Câte ', ' sunt?'],
};

const SUBMIT = { hu: 'Ellenőrzés', de: 'Prüfen', en: 'Check', ro: 'Verifică' };
const CORRECT = { hu: '✓ Helyes!', de: '✓ Richtig!', en: '✓ Correct!', ro: '✓ Corect!' };
const INCORRECT = { hu: '✗ Próbáld újra!', de: '✗ Versuche es noch mal!', en: '✗ Try again!', ro: '✗ Încearcă din nou!' };

const BAR_COLORS = ['#60a5fa', '#f87171', '#4ade80', '#fbbf24', '#c084fc'];

export default function G3BarChart({ categories, targetIdx, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const maxVal = Math.max(...categories.map((c) => c.value));
  const correctAnswer = categories[targetIdx].value;
  const targetName = categories[targetIdx].name;
  const qParts = QUESTION_TEXT[lang] ?? QUESTION_TEXT.en;

  const handleSubmit = () => {
    if (!inputVal) return;
    const userVal = parseInt(inputVal);
    const isCorrect = userVal === correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (embedded) onValueChange?.(String(userVal));
    onAnswer?.(isCorrect);
  };

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-violet-50 rounded-2xl'}`}>
      {/* Bar chart */}
      <div className="flex items-end justify-center gap-3 h-32 px-2">
        {categories.map((cat, i) => {
          const barH = Math.round((cat.value / maxVal) * 100);
          return (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-xs font-bold text-slate-600">{cat.value}</span>
              <motion.div
                className="w-full rounded-t-md"
                style={{
                  height: `${barH}%`,
                  background: i === targetIdx ? '#6366f1' : BAR_COLORS[i % BAR_COLORS.length],
                  border: i === targetIdx ? '2px solid #4f46e5' : 'none',
                  transformOrigin: 'bottom',
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: 'easeOut' }}
              />
              <span className="text-xs font-semibold text-slate-500 text-center leading-tight">{cat.name}</span>
            </div>
          );
        })}
      </div>

      {/* Question */}
      <div className="text-center text-sm font-bold text-slate-700">
        {qParts[0]}<span className="text-indigo-600 underline">{targetName}</span>{qParts[1]}
      </div>

      {/* Input row */}
      <div className="flex items-center justify-center gap-3">
        <input
          type="number"
          value={inputVal}
          onChange={(e) => { setInputVal(e.target.value); if (embedded) onValueChange?.(e.target.value); }}
          disabled={submitted}
          placeholder="?"
          className="w-20 text-center text-xl font-bold py-2 border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-500 disabled:opacity-60 bg-white"
        />
        {!embedded && !submitted && (
          <button
            onClick={handleSubmit}
            disabled={!inputVal}
            className="px-4 py-2 rounded-xl bg-indigo-500 text-white font-bold text-sm hover:bg-indigo-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all"
          >
            {SUBMIT[lang]}
          </button>
        )}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`text-center font-bold py-2 rounded-lg text-sm ${feedback === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            {feedback === 'correct' ? CORRECT[lang] : INCORRECT[lang]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
