'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface PercentBarProps {
  percentage?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Százalék', hint: 'Hány százalék van kiemelve a 100 mezőből?',
    submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó!', tryAgain: 'Újra',
    outOf: '/ 100',
  },
  de: {
    title: 'Prozent', hint: 'Wie viel Prozent sind von 100 Feldern markiert?',
    submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch!', tryAgain: 'Nochmal',
    outOf: '/ 100',
  },
  en: {
    title: 'Percent', hint: 'What percent of 100 squares is highlighted?',
    submit: 'Check', correct: 'Correct!', incorrect: 'Not right!', tryAgain: 'Retry',
    outOf: '/ 100',
  },
  ro: {
    title: 'Procent', hint: 'Ce procent din 100 de pătrate este evidențiat?',
    submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit!', tryAgain: 'Din nou',
    outOf: '/ 100',
  },
};

const NICE_PERCENTS = [10, 20, 25, 30, 40, 50, 60, 70, 75, 80];

function makeChoices(correct: number): number[] {
  const opts = new Set<number>([correct]);
  const candidates = NICE_PERCENTS.filter(p => p !== correct);
  // Pick 3 more that are closest to correct
  const sorted = candidates.sort((a, b) => Math.abs(a - correct) - Math.abs(b - correct));
  for (const c of sorted) {
    opts.add(c);
    if (opts.size >= 4) break;
  }
  return Array.from(opts).sort(() => Math.random() - 0.5);
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const PercentBar: React.FC<PercentBarProps> = ({
  percentage: propPct,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { percentage, choices } = useMemo(() => {
    const pct = propPct ?? NICE_PERCENTS[Math.floor(Math.random() * NICE_PERCENTS.length)];
    return { percentage: pct, choices: makeChoices(pct) };
  }, [propPct]); // eslint-disable-line react-hooks/exhaustive-deps

  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const onValRef = React.useRef(onValueChange);
  onValRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValRef.current && selected !== null) onValRef.current(selected);
  }, [embedded, selected]);

  const handleSubmit = () => {
    if (!selected || embedded) return;
    playClick();
    const correct = selected === String(percentage);
    setFeedback(correct ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (correct) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(correct, selected), 1800);
  };

  const handleReset = () => {
    playClick();
    setSelected(null);
    setFeedback(null);
    setSubmitted(false);
  };

  // 10×10 grid of squares
  const CELL = 18;
  const GAP = 2;
  const COLS = 10;
  const ROWS = 10;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center">
            <span className="text-white font-black text-sm">%</span>
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
        </div>
      )}

      {/* Hint — always visible */}
      <p className="text-xs font-semibold text-center text-orange-700 px-5 pt-3 pb-2">{t.hint}</p>

      {/* Grid */}
      <div className="flex justify-center px-4 pb-3">
        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-3 inline-block">
          <svg
            viewBox={`0 0 ${COLS * (CELL + GAP) - GAP} ${ROWS * (CELL + GAP) - GAP}`}
            style={{ width: COLS * (CELL + GAP) - GAP, height: ROWS * (CELL + GAP) - GAP }}
          >
            {Array.from({ length: 100 }, (_, idx) => {
              const row = Math.floor(idx / COLS);
              const col = idx % COLS;
              const isHighlighted = idx < percentage;
              return (
                <rect
                  key={idx}
                  x={col * (CELL + GAP)}
                  y={row * (CELL + GAP)}
                  width={CELL}
                  height={CELL}
                  rx={2}
                  fill={isHighlighted ? '#f97316' : '#f3f4f6'}
                  stroke={isHighlighted ? '#ea580c' : '#e5e7eb'}
                  strokeWidth={0.5}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Count display */}
      <div className="flex justify-center pb-3">
        <div className="bg-white rounded-xl px-4 py-1 border-2 border-orange-200 text-sm font-extrabold text-orange-700">
          <span className="text-orange-500">■</span> ? {t.outOf}
        </div>
      </div>

      {/* Choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val, i) => {
          const valStr = String(val);
          const isSelected = selected === valStr;
          const isCorrectVal = val === percentage;
          const color = COLORS[i % COLORS.length];
          return (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => { if (!submitted) { playClick(); setSelected(valStr); } }}
              className={`py-3 rounded-xl font-extrabold text-base transition-all border-2 ${
                submitted
                  ? isCorrectVal ? 'bg-green-500 border-green-500 text-white'
                    : isSelected ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected ? 'text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700 hover:bg-orange-50'
              }`}
              style={isSelected && !submitted ? { backgroundColor: color, borderColor: color } : {}}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {val}%
            </motion.button>
          );
        })}
      </div>

      {!embedded && (
        <div className="px-5 pb-5">
          <AnimatePresence mode="wait">
            {feedback && (
              <motion.div key={feedback}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-base mb-3 ${
                  feedback === 'correct' ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-red-50 text-red-600 border-2 border-red-200'}`}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                {feedback === 'correct' ? <Check size={20} /> : <X size={20} />}
                {feedback === 'correct' ? t.correct : t.incorrect}
              </motion.div>
            )}
          </AnimatePresence>
          {!submitted ? (
            <button onClick={handleSubmit} disabled={!selected}
              className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed">
              {t.submit}
            </button>
          ) : (
            <button onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-all">
              <RotateCcw size={16} />{t.tryAgain}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default PercentBar;
