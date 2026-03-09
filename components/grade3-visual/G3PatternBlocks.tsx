'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  sequence: string[];  // e.g. ['red','blue','red','blue','red','blue'] last `blanks` are the answer
  period: number;
  blanks: number;
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: { title: 'Folytasd a mintát!', check: 'Ellenőrzés', correct: '✓ Helyes!', incorrect: '✗ Próbáld újra!', hint: 'Kattints a hiányzó színre' },
  de: { title: 'Setze das Muster fort!', check: 'Prüfen', correct: '✓ Richtig!', incorrect: '✗ Versuche es noch mal!', hint: 'Klicke auf die fehlende Farbe' },
  en: { title: 'Continue the pattern!', check: 'Check', correct: '✓ Correct!', incorrect: '✗ Try again!', hint: 'Click to fill in the missing color' },
  ro: { title: 'Continuă modelul!', check: 'Verifică', correct: '✓ Corect!', incorrect: '✗ Încearcă din nou!', hint: 'Apasă pentru a completa culoarea lipsă' },
};

const COLOR_MAP: Record<string, { bg: string; border: string; label: string }> = {
  red:    { bg: '#fca5a5', border: '#ef4444', label: '' },
  blue:   { bg: '#93c5fd', border: '#3b82f6', label: '' },
  green:  { bg: '#86efac', border: '#22c55e', label: '' },
  yellow: { bg: '#fde68a', border: '#f59e0b', label: '' },
  purple: { bg: '#c4b5fd', border: '#8b5cf6', label: '' },
  orange: { bg: '#fdba74', border: '#f97316', label: '' },
};

export default function G3PatternBlocks({ sequence, period, blanks, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const labels = LABELS[lang];
  const shown = sequence.slice(0, sequence.length - blanks);
  const correctTail = sequence.slice(sequence.length - blanks);
  const palette = Array.from(new Set(sequence));

  const [filled, setFilled] = useState<(string | null)[]>(Array(blanks).fill(null));
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [activeSlot, setActiveSlot] = useState<number | null>(0);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;

  useEffect(() => {
    const val = filled.join(',');
    if (embedded && filled.every(Boolean)) onValueChangeRef.current?.(val);
  }, [embedded, filled]);

  const handlePick = (color: string) => {
    if (activeSlot === null) return;
    const next = [...filled];
    next[activeSlot] = color;
    setFilled(next);
    setActiveSlot(activeSlot < blanks - 1 ? activeSlot + 1 : null);
  };

  const handleCheck = () => {
    const isCorrect = filled.every((c, i) => c === correctTail[i]);
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onAnswer?.(isCorrect);
    if (!embedded) onValueChange?.(filled.join(','));
  };

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-purple-50 rounded-2xl'}`}>
      {!embedded && <div className="text-center text-sm font-bold text-slate-700">{labels.title}</div>}

      {/* Pattern row */}
      <div className="flex flex-wrap gap-2 justify-center">
        {shown.map((color, i) => (
          <div
            key={i}
            className="w-9 h-9 rounded-lg border-2"
            style={{ background: COLOR_MAP[color]?.bg ?? '#e2e8f0', borderColor: COLOR_MAP[color]?.border ?? '#94a3b8' }}
          />
        ))}
        {filled.map((color, i) => (
          <motion.div
            key={`blank-${i}`}
            className="w-9 h-9 rounded-lg border-2 cursor-pointer flex items-center justify-center"
            style={{
              background: color ? (COLOR_MAP[color]?.bg ?? '#e2e8f0') : '#f8fafc',
              borderColor: activeSlot === i ? '#6366f1' : (color ? (COLOR_MAP[color]?.border ?? '#94a3b8') : '#cbd5e1'),
              borderStyle: color ? 'solid' : 'dashed',
            }}
            onClick={() => setActiveSlot(i)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {!color && <span className="text-slate-300 text-lg font-bold">?</span>}
          </motion.div>
        ))}
      </div>

      {/* Color palette */}
      <div className="flex gap-2 justify-center flex-wrap">
        {palette.map((color) => (
          <motion.button
            key={color}
            className="w-10 h-10 rounded-full border-3 border-white shadow-md"
            style={{ background: COLOR_MAP[color]?.bg ?? '#e2e8f0', outline: `2px solid ${COLOR_MAP[color]?.border ?? '#94a3b8'}` }}
            onClick={() => handlePick(color)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Check button */}
      {!embedded && filled.every(Boolean) && !feedback && (
        <button onClick={handleCheck} className="w-full py-2 rounded-xl bg-purple-500 text-white font-bold text-sm hover:bg-purple-600 transition-all">
          {labels.check}
        </button>
      )}

      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`text-center font-bold py-2 rounded-lg text-sm ${feedback === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            {feedback === 'correct' ? labels.correct : labels.incorrect}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
