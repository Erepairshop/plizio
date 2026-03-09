'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  angleType: 'right' | 'acute' | 'obtuse'; // what angle is shown
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS: Record<string, { question: string; options: Record<string, string>; correct: string; wrong: string }> = {
  hu: {
    question: 'Milyen szög ez?',
    options: { right: 'Derékszög (90°)', acute: 'Hegyesszög (< 90°)', obtuse: 'Tompaszög (> 90°)' },
    correct: '✓ Helyes!', wrong: '✗ Próbáld újra!',
  },
  de: {
    question: 'Was für ein Winkel ist das?',
    options: { right: 'Rechter Winkel (90°)', acute: 'Spitzer Winkel (< 90°)', obtuse: 'Stumpfer Winkel (> 90°)' },
    correct: '✓ Richtig!', wrong: '✗ Versuche es noch mal!',
  },
  en: {
    question: 'What type of angle is this?',
    options: { right: 'Right angle (90°)', acute: 'Acute angle (< 90°)', obtuse: 'Obtuse angle (> 90°)' },
    correct: '✓ Correct!', wrong: '✗ Try again!',
  },
  ro: {
    question: 'Ce tip de unghi este acesta?',
    options: { right: 'Unghi drept (90°)', acute: 'Unghi ascuțit (< 90°)', obtuse: 'Unghi obtuz (> 90°)' },
    correct: '✓ Corect!', wrong: '✗ Încearcă din nou!',
  },
};

function AngleSVG({ type }: { type: 'right' | 'acute' | 'obtuse' }) {
  const cx = 80, cy = 110;
  if (type === 'right') {
    return (
      <svg width={160} height={130}>
        <line x1={cx} y1={cy} x2={cx} y2={30} stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" />
        <line x1={cx} y1={cy} x2={150} y2={cy} stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" />
        {/* Right angle marker */}
        <path d="M80,95 L95,95 L95,110" fill="none" stroke="#ef4444" strokeWidth={2.5} />
        {/* 90° label */}
        <text x={100} y={105} fontSize={12} fill="#ef4444" fontWeight="bold">90°</text>
      </svg>
    );
  }
  if (type === 'acute') {
    // ~45 degree angle
    return (
      <svg width={160} height={130}>
        <line x1={40} y1={cy} x2={150} y2={cy} stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" />
        <line x1={40} y1={cy} x2={100} y2={30} stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" />
        {/* Arc */}
        <path d="M55,110 A20,20 0 0,1 66,85" fill="none" stroke="#f59e0b" strokeWidth={2.5} />
        <text x={65} y={100} fontSize={11} fill="#f59e0b" fontWeight="bold">{'<90°'}</text>
      </svg>
    );
  }
  // obtuse ~130°
  return (
    <svg width={160} height={130}>
      <line x1={10} y1={cy} x2={150} y2={cy} stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" />
      <line x1={80} y1={cy} x2={30} y2={30} stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" />
      {/* Arc */}
      <path d="M95,110 A20,20 0 0,1 72,91" fill="none" stroke="#8b5cf6" strokeWidth={2.5} />
      <text x={58} y={108} fontSize={11} fill="#8b5cf6" fontWeight="bold">{'>90°'}</text>
    </svg>
  );
}

export default function G3RightAngle({ angleType, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const labels = LABELS[lang];

  const handlePick = (key: string) => {
    if (feedback) return;
    setSelected(key);
    const isCorrect = key === angleType;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onValueChange?.(key);
    onAnswer?.(isCorrect);
  };

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-sky-50 rounded-2xl'}`}>
      <div className="flex justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-xl border-2 border-sky-200 p-2">
          <AngleSVG type={angleType} />
        </motion.div>
      </div>

      <div className="text-center text-sm font-bold text-slate-700">{labels.question}</div>

      <div className="grid grid-cols-1 gap-2">
        {(Object.entries(labels.options) as [string, string][]).map(([key, label]) => (
          <motion.button key={key}
            onClick={() => handlePick(key)}
            className={`py-2 px-4 rounded-lg text-sm font-bold border-2 transition-all text-left ${
              selected === key
                ? key === angleType ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-400 bg-red-50 text-red-700'
                : 'border-slate-200 bg-white text-slate-700 hover:border-sky-400'
            }`}
            whileTap={{ scale: 0.97 }}>
            {label}
          </motion.button>
        ))}
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
