'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  target: string;
  options: string[];
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const SHAPE_LABELS: Record<string, Record<string, string>> = {
  square:    { hu: 'négyzet',      de: 'Quadrat',     en: 'square',      ro: 'pătrat' },
  rectangle: { hu: 'téglalap',     de: 'Rechteck',    en: 'rectangle',   ro: 'dreptunghi' },
  triangle:  { hu: 'háromszög',    de: 'Dreieck',     en: 'triangle',    ro: 'triunghi' },
  circle:    { hu: 'kör',          de: 'Kreis',       en: 'circle',      ro: 'cerc' },
  hexagon:   { hu: 'hatszög',      de: 'Sechseck',    en: 'hexagon',     ro: 'hexagon' },
  pentagon:  { hu: 'ötszög',       de: 'Fünfeck',     en: 'pentagon',    ro: 'pentagon' },
  diamond:   { hu: 'rombusz',      de: 'Raute',       en: 'diamond',     ro: 'romb' },
};

const QUESTION_TEXT: Record<string, string> = {
  hu: 'Kattints erre az alakzatra: ',
  de: 'Klicke auf diese Form: ',
  en: 'Click on this shape: ',
  ro: 'Apasă pe această formă: ',
};

function ShapeSVG({ shape, size = 64 }: { shape: string; size?: number }) {
  const s = size;
  const c = s / 2;
  switch (shape) {
    case 'square':
      return <svg width={s} height={s}><rect x={8} y={8} width={s - 16} height={s - 16} fill="#93c5fd" stroke="#3b82f6" strokeWidth="2.5" rx="2" /></svg>;
    case 'rectangle':
      return <svg width={s} height={s}><rect x={4} y={14} width={s - 8} height={s - 28} fill="#86efac" stroke="#22c55e" strokeWidth="2.5" rx="2" /></svg>;
    case 'triangle':
      return <svg width={s} height={s}><polygon points={`${c},8 ${s - 8},${s - 8} 8,${s - 8}`} fill="#fde68a" stroke="#f59e0b" strokeWidth="2.5" /></svg>;
    case 'circle':
      return <svg width={s} height={s}><circle cx={c} cy={c} r={c - 8} fill="#fca5a5" stroke="#ef4444" strokeWidth="2.5" /></svg>;
    case 'hexagon': {
      const r = c - 8;
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 180) * (60 * i - 30);
        return `${c + r * Math.cos(a)},${c + r * Math.sin(a)}`;
      }).join(' ');
      return <svg width={s} height={s}><polygon points={pts} fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="2.5" /></svg>;
    }
    case 'pentagon': {
      const r = c - 8;
      const pts = Array.from({ length: 5 }, (_, i) => {
        const a = (Math.PI / 180) * (72 * i - 90);
        return `${c + r * Math.cos(a)},${c + r * Math.sin(a)}`;
      }).join(' ');
      return <svg width={s} height={s}><polygon points={pts} fill="#fdba74" stroke="#f97316" strokeWidth="2.5" /></svg>;
    }
    case 'diamond':
      return <svg width={s} height={s}><polygon points={`${c},8 ${s - 8},${c} ${c},${s - 8} 8,${c}`} fill="#a5f3fc" stroke="#06b6d4" strokeWidth="2.5" /></svg>;
    default:
      return <svg width={s} height={s}><circle cx={c} cy={c} r={c - 8} fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2.5" /></svg>;
  }
}

export default function G3ShapePick({ target, options, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const LABELS = {
    correct: { hu: '✓ Helyes!', de: '✓ Richtig!', en: '✓ Correct!', ro: '✓ Corect!' },
    incorrect: { hu: '✗ Próbáld újra!', de: '✗ Versuche es noch mal!', en: '✗ Try again!', ro: '✗ Încearcă din nou!' },
  };

  const handlePick = useCallback((shape: string) => {
    setSelected(shape);
    const isCorrect = shape === target;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onValueChange?.(shape);
    onAnswer?.(isCorrect);
  }, [target, onValueChange, onAnswer]);

  const targetName = SHAPE_LABELS[target]?.[lang] ?? target;

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-pink-50 rounded-2xl'}`}>
      {/* Question */}
      <div className="text-center text-sm font-bold text-slate-700">
        {QUESTION_TEXT[lang]}<span className="text-pink-600 underline">{targetName}</span>
      </div>

      {/* Shape grid */}
      <div className="grid grid-cols-2 gap-3">
        {options.map((shape) => (
          <motion.button
            key={shape}
            onClick={() => handlePick(shape)}
            className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all ${
              selected === shape
                ? shape === target
                  ? 'border-green-500 bg-green-50'
                  : 'border-red-400 bg-red-50'
                : 'border-slate-200 bg-white hover:border-pink-400'
            }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <ShapeSVG shape={shape} size={56} />
            <span className="text-xs font-semibold text-slate-600">{SHAPE_LABELS[shape]?.[lang] ?? shape}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`text-center font-bold py-2 rounded-lg text-sm ${feedback === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            {feedback === 'correct' ? LABELS.correct[lang] : LABELS.incorrect[lang]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
