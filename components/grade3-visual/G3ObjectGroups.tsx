'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Mode = 'add' | 'sub' | 'mul' | 'div';

interface Props {
  mode: Mode;
  groupA: number;   // add: group A size; sub: total; mul: rows; div: total objects
  groupB: number;   // add: group B size; sub: removed; mul: cols; div: num plates
  icon?: string;    // emoji icon for objects
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const ICONS = ['🍎', '⭐', '🌸', '🟡', '🔵', '🍊', '🐟', '🌙'];

const LABELS: Record<string, Record<Mode, { q: string }> & { check: string; correct: string; wrong: string; plate: string }> = {
  hu: {
    add: { q: 'Összesen hány darab van?' },
    sub: { q: 'Hány darab maradt?' },
    mul: { q: 'Összesen hány darab van?' },
    div: { q: 'Hány darab kerül minden tányérra?' },
    check: 'Ellenőrzés', correct: '✓ Helyes!', wrong: '✗ Próbáld újra!', plate: '🍽️',
  },
  de: {
    add: { q: 'Wie viele sind es insgesamt?' },
    sub: { q: 'Wie viele bleiben übrig?' },
    mul: { q: 'Wie viele sind es insgesamt?' },
    div: { q: 'Wie viele kommen auf jeden Teller?' },
    check: 'Prüfen', correct: '✓ Richtig!', wrong: '✗ Versuche es noch mal!', plate: '🍽️',
  },
  en: {
    add: { q: 'How many are there in total?' },
    sub: { q: 'How many are left?' },
    mul: { q: 'How many are there in total?' },
    div: { q: 'How many go on each plate?' },
    check: 'Check', correct: '✓ Correct!', wrong: '✗ Try again!', plate: '🍽️',
  },
  ro: {
    add: { q: 'Câte sunt în total?' },
    sub: { q: 'Câte au rămas?' },
    mul: { q: 'Câte sunt în total?' },
    div: { q: 'Câte se pun pe fiecare farfurie?' },
    check: 'Verifică', correct: '✓ Corect!', wrong: '✗ Încearcă din nou!', plate: '🍽️',
  },
};

function computeAnswer(mode: Mode, a: number, b: number): number {
  if (mode === 'add') return a + b;
  if (mode === 'sub') return a - b;
  if (mode === 'mul') return a * b;
  return Math.floor(a / b); // div
}

export default function G3ObjectGroups({ mode, groupA, groupB, icon, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const icn = icon ?? '🍎';
  const labels = LABELS[lang];
  const answer = computeAnswer(mode, groupA, groupB);

  const handleSubmit = () => {
    if (!input) return;
    const isCorrect = parseInt(input) === answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (embedded) onValueChange?.(input);
    onAnswer?.(isCorrect);
  };

  const renderObjects = () => {
    if (mode === 'add') {
      return (
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="flex flex-wrap gap-1 max-w-[120px] p-3 bg-blue-50 rounded-xl border-2 border-blue-200 justify-center">
            {Array.from({ length: groupA }).map((_, i) => <span key={i} className="text-2xl">{icn}</span>)}
          </div>
          <span className="text-3xl font-bold text-slate-500">+</span>
          <div className="flex flex-wrap gap-1 max-w-[120px] p-3 bg-green-50 rounded-xl border-2 border-green-200 justify-center">
            {Array.from({ length: groupB }).map((_, i) => <span key={i} className="text-2xl">{icn}</span>)}
          </div>
        </div>
      );
    }
    if (mode === 'sub') {
      return (
        <div className="flex flex-wrap gap-2 justify-center p-3 bg-slate-50 rounded-xl border-2 border-slate-200 max-w-xs mx-auto">
          {Array.from({ length: groupA }).map((_, i) => (
            <span key={i} className={`text-2xl ${i >= groupA - groupB ? 'opacity-20 line-through' : ''}`}>{icn}</span>
          ))}
        </div>
      );
    }
    if (mode === 'mul') {
      return (
        <div className="flex flex-col gap-2 items-center">
          {Array.from({ length: groupA }).map((_, row) => (
            <div key={row} className="flex gap-2 p-2 bg-amber-50 rounded-lg border border-amber-200">
              {Array.from({ length: groupB }).map((_, col) => (
                <span key={col} className="text-xl">{icn}</span>
              ))}
            </div>
          ))}
        </div>
      );
    }
    // div
    const perPlate = Math.floor(groupA / groupB);
    return (
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-wrap gap-1 justify-center">{Array.from({ length: groupA }).map((_, i) => <span key={i} className="text-xl">{icn}</span>)}</div>
        <span className="text-slate-400 text-sm">↓</span>
        <div className="flex gap-3 justify-center flex-wrap">
          {Array.from({ length: groupB }).map((_, p) => (
            <div key={p} className="flex flex-col items-center gap-1 p-2 bg-purple-50 rounded-xl border-2 border-purple-200 min-w-[50px]">
              <span className="text-xl">{labels.plate}</span>
              <div className="flex flex-wrap gap-0.5 justify-center max-w-[60px]">
                {Array.from({ length: perPlate }).map((_, i) => <span key={i} className="text-sm">{icn}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-amber-50 rounded-2xl'}`}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {renderObjects()}
      </motion.div>
      <div className="text-center text-sm font-bold text-slate-700">{labels[mode].q}</div>
      <div className="flex items-center justify-center gap-3">
        <input type="number" value={input}
          onChange={e => { setInput(e.target.value); if (embedded) onValueChange?.(e.target.value); }}
          disabled={submitted} placeholder="?"
          className="w-20 text-center text-xl font-bold py-2 border-2 border-amber-300 rounded-xl outline-none focus:border-amber-500 disabled:opacity-60 bg-white"
        />
        {!embedded && !submitted && (
          <button onClick={handleSubmit} disabled={!input}
            className="px-4 py-2 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all">
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
