'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Shape {
  width: number;
  height: number;
}

interface Props {
  shapeA: Shape;
  shapeB: Shape;
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const T = {
  hu: { q: 'Melyik alakzatnak nagyobb a területe?', btnA: 'A nagyobb', btnB: 'B nagyobb', btnEq: 'Egyenlő', correct: '✓ Helyes!', wrong: '✗ Próbáld újra!', sq: 'négyzetek' },
  de: { q: 'Welche Figur hat die größere Fläche?', btnA: 'A ist größer', btnB: 'B ist größer', btnEq: 'Gleich', correct: '✓ Richtig!', wrong: '✗ Versuche es noch mal!', sq: 'Kästchen' },
  en: { q: 'Which shape has the larger area?', btnA: 'A is larger', btnB: 'B is larger', btnEq: 'Equal', correct: '✓ Correct!', wrong: '✗ Try again!', sq: 'squares' },
  ro: { q: 'Care figură are suprafața mai mare?', btnA: 'A este mai mare', btnB: 'B este mai mare', btnEq: 'Egale', correct: '✓ Corect!', wrong: '✗ Încearcă din nou!', sq: 'pătrate' },
};

function GridShape({ shape, label, color }: { shape: Shape; label: string; color: string }) {
  const CELL = 16;
  const PAD = 4;
  const W = shape.width * CELL + PAD * 2;
  const H = shape.height * CELL + PAD * 2;
  const area = shape.width * shape.height;
  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={W + 30} height={H + 10}>
        <text x={(W + 30) / 2} y={12} textAnchor="middle" fontSize={13} fontWeight="bold" fill={color}>{label}</text>
        <g transform={`translate(15, 16)`}>
          {/* Fill cells */}
          {Array.from({ length: shape.height }).map((_, r) =>
            Array.from({ length: shape.width }).map((_, c) => (
              <rect key={`${r}-${c}`} x={PAD + c * CELL} y={PAD + r * CELL} width={CELL} height={CELL}
                fill={color} fillOpacity={0.2} stroke={color} strokeOpacity={0.5} strokeWidth={0.5} />
            ))
          )}
          {/* Border */}
          <rect x={PAD} y={PAD} width={shape.width * CELL} height={shape.height * CELL}
            fill="none" stroke={color} strokeWidth={2} />
        </g>
      </svg>
      <span className="text-xs font-bold" style={{ color }}>{area} □</span>
    </div>
  );
}

export default function G3AreaCompare({ shapeA, shapeB, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const labels = T[lang];

  const areaA = shapeA.width * shapeA.height;
  const areaB = shapeB.width * shapeB.height;
  const correctAnswer = areaA > areaB ? 'A' : areaB > areaA ? 'B' : 'equal';

  const handlePick = (ans: string) => {
    if (feedback) return;
    setSelected(ans);
    const isCorrect = ans === correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onValueChange?.(ans);
    onAnswer?.(isCorrect);
  };

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-lime-50 rounded-2xl'}`}>
      <div className="text-center text-sm font-bold text-slate-700">{labels.q}</div>

      <div className="flex justify-center gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <GridShape shape={shapeA} label="A" color="#3b82f6" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <GridShape shape={shapeB} label="B" color="#22c55e" />
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { key: 'A', label: labels.btnA },
          { key: 'equal', label: labels.btnEq },
          { key: 'B', label: labels.btnB },
        ].map(opt => (
          <motion.button key={opt.key}
            onClick={() => handlePick(opt.key)}
            className={`py-2 px-1 rounded-lg text-xs font-bold border-2 transition-all ${
              selected === opt.key
                ? opt.key === correctAnswer ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-400 bg-red-50 text-red-700'
                : 'border-slate-200 bg-white text-slate-700 hover:border-lime-400'
            }`}
            whileTap={{ scale: 0.95 }}>
            {opt.label}
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
