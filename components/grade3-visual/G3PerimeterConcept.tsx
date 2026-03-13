'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  width: number;   // cm
  height: number;  // cm
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const T = {
  hu: { q: (w: number, h: number) => `Mekkora ennek a téglalapnak a kerülete? (${w} cm × ${h} cm)`, unit: 'cm', check: 'Ellenőrzés', correct: '✓ Helyes!', wrong: '✗ Próbáld újra!', label: 'Kerület' },
  de: { q: (w: number, h: number) => `Wie groß ist der Umfang dieses Rechtecks? (${w} cm × ${h} cm)`, unit: 'cm', check: 'Prüfen', correct: '✓ Richtig!', wrong: '✗ Versuche es noch mal!', label: 'Umfang' },
  en: { q: (w: number, h: number) => `What is the perimeter of this rectangle? (${w} cm × ${h} cm)`, unit: 'cm', check: 'Check', correct: '✓ Correct!', wrong: '✗ Try again!', label: 'Perimeter' },
  ro: { q: (w: number, h: number) => `Care este perimetrul acestui dreptunghi? (${w} cm × ${h} cm)`, unit: 'cm', check: 'Verifică', correct: '✓ Corect!', wrong: '✗ Încearcă din nou!', label: 'Perimetru' },
};

export default function G3PerimeterConcept({ width, height, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const answer = 2 * (width + height);
  const labels = T[lang];

  // SVG dimensions: scale to fit in ~220×160
  const scale = Math.min(180 / width, 120 / height, 20);
  const svgW = width * scale;
  const svgH = height * scale;
  const PAD = 46;  // large enough for "10 cm" label (textAnchor="end" at x=PAD-8)
  const totalW = svgW + PAD * 2;
  const totalH = svgH + PAD * 2;

  const handleSubmit = () => {
    if (!input) return;
    const isCorrect = parseInt(input) === answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (embedded) onValueChange?.(input);
    onAnswer?.(isCorrect);
  };

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-orange-50 rounded-2xl'}`}>
      {/* Rectangle SVG */}
      <div className="flex justify-center">
        <svg width={totalW} height={totalH}>
          {/* Fill */}
          <rect x={PAD} y={PAD} width={svgW} height={svgH} fill="#fde68a" />
          {/* Animated perimeter border */}
          <motion.rect x={PAD} y={PAD} width={svgW} height={svgH}
            fill="none" stroke="#f97316" strokeWidth={4}
            strokeDasharray={2 * (svgW + svgH)}
            initial={{ strokeDashoffset: 2 * (svgW + svgH) }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          {/* Dimension labels */}
          <text x={PAD + svgW / 2} y={PAD - 6} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#b45309">{width} cm</text>
          <text x={PAD + svgW + 8} y={PAD + svgH / 2} textAnchor="start" fontSize={12} fontWeight="bold" fill="#b45309">{height} cm</text>
          {/* Bottom and left (same dimensions) */}
          <text x={PAD + svgW / 2} y={PAD + svgH + 16} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#b45309">{width} cm</text>
          <text x={PAD - 8} y={PAD + svgH / 2} textAnchor="end" fontSize={12} fontWeight="bold" fill="#b45309">{height} cm</text>
        </svg>
      </div>

      <div className="text-center text-sm font-bold text-slate-700">{labels.q(width, height)}</div>

      <div className="flex items-center justify-center gap-3">
        <input type="number" value={input}
          onChange={e => { setInput(e.target.value); if (embedded) onValueChange?.(e.target.value); }}
          disabled={submitted} placeholder="?"
          className="w-24 text-center text-xl font-bold py-2 border-2 border-orange-300 rounded-xl outline-none focus:border-orange-500 disabled:opacity-60 bg-white"
        />
        <span className="text-slate-600 font-bold">{labels.unit}</span>
        {!embedded && !submitted && (
          <button onClick={handleSubmit} disabled={!input}
            className="px-4 py-2 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all">
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
