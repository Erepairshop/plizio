'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  hundreds: number;
  tens: number;
  ones: number;
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const T = {
  hu: { q: 'Melyik szám látható a blokkokban?', check: 'Ellenőrzés', correct: '✓ Helyes!', wrong: '✗ Próbáld újra!', h: 'százas', t: 'tízes', o: 'egyes' },
  de: { q: 'Welche Zahl zeigen die Blöcke?', check: 'Prüfen', correct: '✓ Richtig!', wrong: '✗ Versuche es noch mal!', h: 'H', t: 'Z', o: 'E' },
  en: { q: 'What number do the blocks show?', check: 'Check', correct: '✓ Correct!', wrong: '✗ Try again!', h: 'H', t: 'T', o: 'O' },
  ro: { q: 'Ce număr arată blocurile?', check: 'Verifică', correct: '✓ Corect!', wrong: '✗ Încearcă din nou!', h: 'S', t: 'Z', o: 'U' },
};

export default function G3ComposeBlocks({ hundreds, tens, ones, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const answer = hundreds * 100 + tens * 10 + ones;
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
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-blue-50 rounded-2xl'}`}>
      {/* Block visual */}
      <div className="flex items-end justify-center gap-4 flex-wrap">
        {/* Hundreds — large blue squares */}
        <div className="flex gap-1 flex-wrap justify-center">
          {Array.from({ length: hundreds }).map((_, i) => (
            <motion.div key={`h${i}`} className="w-10 h-10 bg-blue-200 border-2 border-blue-500 rounded flex items-center justify-center text-blue-700 text-xs font-bold"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.05 }}>
              100
            </motion.div>
          ))}
          {hundreds > 0 && <span className="text-xs text-blue-600 font-bold self-end">{hundreds}{labels.h}</span>}
        </div>
        {/* Tens — green rods */}
        <div className="flex gap-1 flex-wrap justify-center">
          {Array.from({ length: tens }).map((_, i) => (
            <motion.div key={`t${i}`} className="w-4 h-10 bg-green-200 border-2 border-green-500 rounded"
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.1 + i * 0.04 }} style={{ transformOrigin: 'bottom' }} />
          ))}
          {tens > 0 && <span className="text-xs text-green-600 font-bold self-end">{tens}{labels.t}</span>}
        </div>
        {/* Ones — orange cubes */}
        <div className="flex gap-1 flex-wrap max-w-[80px] justify-center">
          {Array.from({ length: ones }).map((_, i) => (
            <motion.div key={`o${i}`} className="w-4 h-4 bg-orange-200 border-2 border-orange-500 rounded"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 + i * 0.03 }} />
          ))}
          {ones > 0 && <span className="text-xs text-orange-600 font-bold self-end">{ones}{labels.o}</span>}
        </div>
      </div>

      {/* Question */}
      <div className="text-center text-sm font-bold text-slate-700">{labels.q}</div>

      {/* Input */}
      <div className="flex items-center justify-center gap-3">
        <input
          type="number" value={input}
          onChange={e => { setInput(e.target.value); if (embedded) onValueChange?.(e.target.value); }}
          disabled={submitted}
          placeholder="?" className="w-24 text-center text-2xl font-bold py-2 border-2 border-blue-300 rounded-xl outline-none focus:border-blue-500 disabled:opacity-60 bg-white"
        />
        {!embedded && !submitted && (
          <button onClick={handleSubmit} disabled={!input}
            className="px-4 py-2 rounded-xl bg-blue-500 text-white font-bold text-sm hover:bg-blue-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all">
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
