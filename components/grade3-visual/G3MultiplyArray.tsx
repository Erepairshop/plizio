'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  rows: number;
  cols: number;
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const T = {
  hu: { q: (r: number, c: number) => `Hány pont van összesen? (${r} sor × ${c} oszlop)`, check: 'Ellenőrzés', correct: '✓ Helyes!', wrong: '✗ Próbáld újra!' },
  de: { q: (r: number, c: number) => `Wie viele Punkte gibt es? (${r} Reihen × ${c} Spalten)`, check: 'Prüfen', correct: '✓ Richtig!', wrong: '✗ Versuche es noch mal!' },
  en: { q: (r: number, c: number) => `How many dots in total? (${r} rows × ${c} columns)`, check: 'Check', correct: '✓ Correct!', wrong: '✗ Try again!' },
  ro: { q: (r: number, c: number) => `Câte puncte sunt în total? (${r} rânduri × ${c} coloane)`, check: 'Verifică', correct: '✓ Corect!', wrong: '✗ Încearcă din nou!' },
};

export default function G3MultiplyArray({ rows, cols, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const answer = rows * cols;
  const labels = T[lang];

  const handleSubmit = () => {
    if (!input) return;
    const isCorrect = parseInt(input) === answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (embedded) onValueChange?.(input);
    onAnswer?.(isCorrect);
  };

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-indigo-50 rounded-2xl'}`}>
      {/* Dot array */}
      <div className="flex justify-center">
        <div className="inline-flex flex-col gap-2 p-4 bg-white rounded-xl border-2 border-indigo-200 shadow-sm">
          {Array.from({ length: rows }).map((_, r) => (
            <div key={r} className="flex gap-2">
              {Array.from({ length: cols }).map((_, c) => (
                <motion.div key={c}
                  className="w-7 h-7 rounded-full bg-indigo-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: (r * cols + c) * 0.03, duration: 0.25, ease: 'easeOut' }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-sm font-bold text-slate-700">{labels.q(rows, cols)}</div>

      <div className="flex items-center justify-center gap-3">
        <input type="number" value={input}
          onChange={e => { setInput(e.target.value); if (embedded) onValueChange?.(e.target.value); }}
          disabled={submitted} placeholder="?"
          className="w-20 text-center text-xl font-bold py-2 border-2 border-indigo-300 rounded-xl outline-none focus:border-indigo-500 disabled:opacity-60 bg-white"
        />
        {!embedded && !submitted && (
          <button onClick={handleSubmit} disabled={!input}
            className="px-4 py-2 rounded-xl bg-indigo-500 text-white font-bold text-sm hover:bg-indigo-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all">
            {labels.check}
          </button>
        )}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div className={`text-center font-bold py-2 rounded-lg text-sm ${feedback === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {feedback === 'correct' ? labels.correct : labels.wrong}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
