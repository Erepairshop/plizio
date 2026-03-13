'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Grid3x3 } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface MultiplicationArrayProps {
  rows?: number;
  cols?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Hány pontot látsz összesen?',
    hint: 'Számold meg a sorokat és az oszlopokat, majd szorozzz!',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem jó. Próbáld újra!',
    tryAgain: 'Újra',
    rows: 'sor',
    cols: 'oszlop',
    total: 'Összesen: ? pont',
    yourAnswer: 'A te válaszod:',
  },
  de: {
    title: 'Wie viele Punkte siehst du insgesamt?',
    hint: 'Zähle Zeilen und Spalten und multipliziere!',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Falsch. Nochmal!',
    tryAgain: 'Nochmal',
    rows: 'Zeile(n)',
    cols: 'Spalte(n)',
    total: 'Insgesamt: ? Punkte',
    yourAnswer: 'Deine Antwort:',
  },
  en: {
    title: 'How many dots are there in total?',
    hint: 'Count the rows and columns, then multiply!',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    rows: 'row(s)',
    cols: 'column(s)',
    total: 'Total: ? dots',
    yourAnswer: 'Your answer:',
  },
  ro: {
    title: 'Câte puncte sunt în total?',
    hint: 'Numără rândurile și coloanele, apoi înmulțește!',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Greșit. Încearcă din nou!',
    tryAgain: 'Din nou',
    rows: 'rând(uri)',
    cols: 'coloană(-ne)',
    total: 'Total: ? puncte',
    yourAnswer: 'Răspunsul tău:',
  },
};

// Dot colors (per row, cycling)
const ROW_COLORS = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444',
  '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16',
];

const MultiplicationArray: React.FC<MultiplicationArrayProps> = ({
  rows: propRows,
  cols: propCols,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { rows, cols, product } = useMemo(() => {
    const r = propRows ?? (Math.floor(Math.random() * 7) + 2); // 2–8
    const c = propCols ?? (Math.floor(Math.random() * 8) + 2); // 2–9
    return { rows: r, cols: c, product: r * c };
  }, [propRows, propCols]);

  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [highlightRow, setHighlightRow] = useState<number | null>(null);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && inputVal.trim()) {
      onValueChangeRef.current(inputVal.trim());
    }
  }, [embedded, inputVal]);

  const handleSubmit = () => {
    if (embedded) return;
    playClick();
    const ans = parseInt(inputVal.trim());
    const isCorrect = ans === product;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, ans || 0), 1800);
  };

  const handleReset = () => {
    playClick();
    setInputVal('');
    setFeedback(null);
    setSubmitted(false);
    setHighlightRow(null);
  };

  // SVG dot grid
  const DOT_R = Math.min(10, Math.floor(180 / Math.max(rows, cols)));
  const GAP = DOT_R * 2 + 4;
  const svgW = cols * GAP + 20;
  const svgH = rows * GAP + 20;
  const offsetX = 10 + DOT_R;
  const offsetY = 10 + DOT_R;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #d1fae5 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center">
              <Grid3x3 size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Row × Col info badges */}
      <div className="flex justify-center gap-3 pb-3 px-4">
        <div className="bg-emerald-600 text-white px-4 py-1.5 rounded-full font-bold text-sm">
          {rows} {t.rows}
        </div>
        <div className="text-slate-500 font-black text-xl self-center">×</div>
        <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-bold text-sm">
          {cols} {t.cols}
        </div>
        <div className="text-slate-500 font-black text-xl self-center">=</div>
        <div className="bg-white border-2 border-slate-300 text-slate-500 px-4 py-1.5 rounded-full font-bold text-sm">
          ?
        </div>
      </div>

      {/* Dot array SVG */}
      <div className="flex justify-center px-4 pb-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="h-auto"
          style={{ maxHeight: 220, maxWidth: '100%' }}
        >
          {Array.from({ length: rows }, (_, r) =>
            Array.from({ length: cols }, (_, c) => {
              const cx = offsetX + c * GAP;
              const cy = offsetY + r * GAP;
              const color = ROW_COLORS[r % ROW_COLORS.length];
              const highlighted = highlightRow === r;
              return (
                <motion.circle
                  key={`${r}-${c}`}
                  cx={cx}
                  cy={cy}
                  r={DOT_R}
                  fill={color}
                  opacity={highlighted ? 1 : 0.75}
                  stroke={highlighted ? '#1f2937' : 'none'}
                  strokeWidth={highlighted ? 1.5 : 0}
                  animate={{ r: highlighted ? DOT_R * 1.15 : DOT_R }}
                  transition={{ duration: 0.15 }}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setHighlightRow(r)}
                  onMouseLeave={() => setHighlightRow(null)}
                />
              );
            })
          )}
          {/* Row bracket lines */}
          {Array.from({ length: rows }, (_, r) => {
            const y = offsetY + r * GAP;
            return (
              <line
                key={`line-${r}`}
                x1={offsetX - DOT_R - 4}
                y1={y}
                x2={offsetX + (cols - 1) * GAP + DOT_R + 4}
                y2={y}
                stroke={ROW_COLORS[r % ROW_COLORS.length]}
                strokeWidth={1}
                opacity={0.15}
              />
            );
          })}
        </svg>
      </div>

      {/* Input */}
      <div className="px-5 pb-4 flex flex-col items-center gap-2">
        <div className="text-sm font-bold text-slate-500">{t.yourAnswer}</div>
        <div className="flex items-center gap-3">
          <span className="text-slate-600 font-bold text-lg">{rows} × {cols} =</span>
          <input
            type="number"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit()}
            disabled={submitted}
            placeholder="?"
            className="w-24 text-center text-2xl font-black text-slate-800 border-2 border-emerald-400 rounded-xl py-2 bg-white focus:border-emerald-600 focus:outline-none disabled:opacity-60 appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
        </div>
        {submitted && feedback === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200"
          >
            ✓ {rows} × {cols} = {product}
          </motion.div>
        )}
      </div>

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
              disabled={!inputVal.trim()}
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 active:scale-[0.98] transition-all"
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

export default MultiplicationArray;
