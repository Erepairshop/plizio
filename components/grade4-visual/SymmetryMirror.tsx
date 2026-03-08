'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, FlipHorizontal } from 'lucide-react';
import { playCorrect, playIncorrect, playClick, playSelect } from '@/lib/soundEffects';

interface SymmetryMirrorProps {
  gridSize?: number;
  pattern?: number[][];
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Tükrözd a mintát!',
    hint: 'A bal oldal kész — kattints a jobb oldalra a tükörképhez.',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
  },
  de: {
    title: 'Spiegle das Muster!',
    hint: 'Die linke Seite ist fertig — klicke rechts, um das Spiegelbild zu erstellen.',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
  },
  en: {
    title: 'Mirror the pattern!',
    hint: 'The left side is done — click on the right side to create the mirror image.',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
  },
  ro: {
    title: 'Oglindește modelul!',
    hint: 'Partea stângă este gata — faceți clic pe dreapta pentru a crea imaginea în oglindă.',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
  },
};

const CELL = 38;
const GAP = 2;

const SymmetryMirror: React.FC<SymmetryMirrorProps> = ({
  gridSize: propSize,
  pattern: propPattern,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] || LABELS.en;
  const gridSize = propSize || 6;
  const half = Math.ceil(gridSize / 2);

  // Generate left-side pattern (only left half has filled cells)
  const leftPattern = useMemo(() => {
    if (propPattern) return propPattern;
    const p: number[][] = [];
    for (let r = 0; r < gridSize; r++) {
      const row: number[] = [];
      for (let c = 0; c < gridSize; c++) {
        if (c < half) {
          row.push(Math.random() > 0.45 ? 1 : 0);
        } else {
          row.push(0);
        }
      }
      p.push(row);
    }
    return p;
  }, [propPattern, gridSize, half]);

  // The correct mirror answer (right side should mirror left side)
  const correctRight = useMemo(() => {
    const right: Record<string, boolean> = {};
    for (let r = 0; r < gridSize; r++) {
      for (let c = half; c < gridSize; c++) {
        const mirrorC = gridSize - 1 - c;
        if (leftPattern[r][mirrorC] === 1) {
          right[`${r}-${c}`] = true;
        }
      }
    }
    return right;
  }, [leftPattern, gridSize, half]);

  const [userClicked, setUserClicked] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (embedded && onValueChange && userClicked.size > 0) {
      onValueChange(Array.from(userClicked).sort().join(';'));
    }
  }, [embedded, onValueChange, userClicked]);

  const toggleCell = (r: number, c: number) => {
    if (submitted || c < half) return; // Can only click right side
    playSelect();
    const key = `${r}-${c}`;
    setUserClicked(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const handleSubmit = () => {
    playClick();
    // Check if user's right side matches the correct mirror
    const correctKeys = Object.keys(correctRight);
    const userKeys = Array.from(userClicked);
    const allCorrectFilled = correctKeys.every(k => userClicked.has(k));
    const noExtraFilled = userKeys.every(k => correctRight[k]);
    const isCorrect = allCorrectFilled && noExtraFilled;

    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect), 1800);
  };

  const handleReset = () => {
    playClick();
    setUserClicked(new Set());
    setFeedback(null);
    setSubmitted(false);
  };

  const totalW = gridSize * (CELL + GAP) - GAP;
  const totalH = gridSize * (CELL + GAP) - GAP;
  const mirrorX = half * (CELL + GAP) - GAP / 2;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #fdf2f8 50%, #fce7f3 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-pink-500 flex items-center justify-center">
              <FlipHorizontal size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Grid */}
      <div className="flex justify-center pb-4 px-4">
        <svg
          width={totalW + 20}
          height={totalH + 20}
          viewBox={`-10 -10 ${totalW + 20} ${totalH + 20}`}
          className="select-none"
        >
          {/* Mirror line */}
          <line
            x1={mirrorX} y1={-6} x2={mirrorX} y2={totalH + 6}
            stroke="#ec4899" strokeWidth={3} strokeDasharray="6 4"
          />

          {/* Cells */}
          {Array.from({ length: gridSize }, (_, r) =>
            Array.from({ length: gridSize }, (_, c) => {
              const key = `${r}-${c}`;
              const x = c * (CELL + GAP);
              const y = r * (CELL + GAP);
              const isLeft = c < half;
              const isLeftFilled = isLeft && leftPattern[r][c] === 1;
              const isRightFilled = !isLeft && userClicked.has(key);
              const isCorrectCell = !isLeft && correctRight[key];

              let fill = '#fff';
              let stroke = '#d4d4d8';
              let strokeW = 1.5;

              if (isLeftFilled) {
                fill = '#ec4899';
                stroke = '#be185d';
                strokeW = 2;
              } else if (isRightFilled) {
                fill = submitted
                  ? (isCorrectCell ? '#22c55e' : '#ef4444')
                  : '#f472b6';
                stroke = submitted
                  ? (isCorrectCell ? '#16a34a' : '#dc2626')
                  : '#ec4899';
                strokeW = 2;
              } else if (submitted && isCorrectCell && !isRightFilled) {
                // Missed cell — show outline
                fill = '#fef2f2';
                stroke = '#ef4444';
                strokeW = 2;
              }

              return (
                <g key={key} onClick={() => toggleCell(r, c)} className={!isLeft ? 'cursor-pointer' : ''}>
                  <rect
                    x={x} y={y} width={CELL} height={CELL} rx={4}
                    fill={fill} stroke={stroke} strokeWidth={strokeW}
                  />
                </g>
              );
            })
          )}

          {/* Labels */}
          <text x={totalW / 4} y={totalH + 14} textAnchor="middle" fontSize={10} fontWeight={700} fill="#ec4899">
            ←
          </text>
          <text x={totalW * 3 / 4} y={totalH + 14} textAnchor="middle" fontSize={10} fontWeight={700} fill="#94a3b8">
            →
          </text>
        </svg>
      </div>

      {/* Feedback + Buttons */}
      {!embedded && (
        <div className="px-5 pb-5">
          <AnimatePresence mode="wait">
            {feedback && (
              <motion.div
                key={feedback}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-base mb-3 ${
                  feedback === 'correct'
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-red-50 text-red-600 border-2 border-red-200'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {feedback === 'correct' ? <Check size={20} /> : <X size={20} />}
                {feedback === 'correct' ? t.correct : t.incorrect}
              </motion.div>
            )}
          </AnimatePresence>

          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={userClicked.size === 0}
              className="w-full py-3 rounded-xl bg-pink-500 text-white font-bold text-sm hover:bg-pink-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-pink-500 text-white font-bold text-sm hover:bg-pink-600 active:scale-[0.98] transition-all"
            >
              <RotateCcw size={16} />
              {t.tryAgain}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default SymmetryMirror;
