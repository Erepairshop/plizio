'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface NumberLinePlaceProps {
  rangeStart?: number;
  rangeEnd?: number;
  target?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Olvasd le a számot!', hint: 'Melyik szám van a nyíl helyén?', submit: 'Ellenőrzés', correct: 'Helyes! Szuper!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra' },
  de: { title: 'Lies die Zahl ab!', hint: 'Welche Zahl zeigt der Pfeil?', submit: 'Prüfen', correct: 'Richtig! Super!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal' },
  en: { title: 'Read the number!', hint: 'Which number does the arrow show?', submit: 'Check', correct: 'Correct! Great!', incorrect: 'Not right. Try again!', tryAgain: 'Retry' },
  ro: { title: 'Citește numărul!', hint: 'Ce număr arată săgeata?', submit: 'Verificare', correct: 'Corect! Super!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou' },
};

const NumberLinePlace: React.FC<NumberLinePlaceProps> = ({
  rangeStart: propStart,
  rangeEnd: propEnd,
  target: propTarget,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { rangeStart, rangeEnd, target, choices } = useMemo(() => {
    // Pick scale: 1000, 10000, 100000
    const stepConfig = [
      { step: 1000,   range: 10000  },
      { step: 5000,   range: 50000  },
      { step: 10000,  range: 100000 },
      { step: 100000, range: 1000000 },
    ];
    const cfg = stepConfig[Math.floor(Math.random() * stepConfig.length)];
    const base = Math.floor(Math.random() * 9) * cfg.step;
    const rs = propStart ?? base;
    const re = propEnd ?? (base + cfg.range);
    const step = cfg.step;

    // Candidate positions at step multiples (exclude endpoints)
    const positions: number[] = [];
    for (let v = rs + step; v < re; v += step) positions.push(v);

    const correctVal = propTarget ?? positions[Math.floor(Math.random() * positions.length)];

    // 3 distractors from remaining positions
    const pool = positions.filter(v => v !== correctVal);
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 3);
    const all = [correctVal, ...shuffled].sort(() => Math.random() - 0.5);

    return { rangeStart: rs, rangeEnd: re, target: correctVal, choices: all };
  }, [propStart, propEnd, propTarget]);

  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selected !== null) {
      onValueChangeRef.current(String(selected));
    }
  }, [embedded, selected]);

  const handleSelect = (val: number) => {
    if (submitted) return;
    playClick();
    setSelected(val);
  };

  const handleSubmit = () => {
    if (selected === null || embedded) return;
    playClick();
    const isCorrect = selected === target;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, selected), 1800);
  };

  const handleReset = () => {
    playClick();
    setSelected(null);
    setFeedback(null);
    setSubmitted(false);
  };

  // SVG layout
  const W = 360, PAD = 44, lineY = 72;
  const toX = (n: number) => PAD + ((n - rangeStart) / (rangeEnd - rangeStart)) * (W - 2 * PAD);
  const targetX = toX(target);

  // Tick marks at regular intervals
  const tickCount = 10;
  const tickStep = (rangeEnd - rangeStart) / tickCount;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => rangeStart + i * tickStep);

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center">
              <span className="text-white font-black text-lg">?</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Number line SVG */}
      <div className="px-4 pb-3 overflow-x-auto">
        <svg viewBox={`0 0 ${W} 120`} className="w-full h-auto" style={{ minWidth: 280 }}>
          {/* Main axis line */}
          <line x1={PAD - 12} y1={lineY} x2={W - PAD + 12} y2={lineY}
            stroke="#374151" strokeWidth={3} strokeLinecap="round" />

          {/* Arrow heads */}
          <polygon points={`${PAD - 16},${lineY} ${PAD - 6},${lineY - 5} ${PAD - 6},${lineY + 5}`} fill="#374151" />
          <polygon points={`${W - PAD + 16},${lineY} ${W - PAD + 6},${lineY - 5} ${W - PAD + 6},${lineY + 5}`} fill="#374151" />

          {/* Tick marks */}
          {ticks.map((val, i) => {
            const x = toX(val);
            const isMajor = i === 0 || i === tickCount || i === 5;
            return (
              <g key={i}>
                <line x1={x} y1={lineY - (isMajor ? 10 : 5)} x2={x} y2={lineY + (isMajor ? 10 : 5)}
                  stroke={isMajor ? '#1f2937' : '#9ca3af'} strokeWidth={isMajor ? 2 : 1} />
                {isMajor && (
                  <text x={x} y={lineY + 24} textAnchor="middle" fontSize={10} fontWeight={700} fill="#374151">
                    {val.toLocaleString('de-DE')}
                  </text>
                )}
              </g>
            );
          })}

          {/* Target arrow (question mark marker) */}
          <line x1={targetX} y1={lineY - 42} x2={targetX} y2={lineY - 12}
            stroke="#16a34a" strokeWidth={2.5} />
          <polygon points={`${targetX},${lineY - 12} ${targetX - 6},${lineY - 24} ${targetX + 6},${lineY - 24}`}
            fill="#16a34a" />
          {/* ? label */}
          <rect x={targetX - 14} y={lineY - 80} width={28} height={28} rx={8}
            fill="#16a34a" />
          <text x={targetX} y={lineY - 60} textAnchor="middle" dominantBaseline="middle"
            fontSize={16} fontWeight={900} fill="white">?</text>
          {/* Dot on line */}
          <circle cx={targetX} cy={lineY} r={6} fill="#16a34a" />
        </svg>
      </div>

      {/* Answer choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map(val => {
          const isSelected = selected === val;
          const showCorrect = submitted && val === target;
          const showWrong = submitted && isSelected && val !== target;
          return (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => handleSelect(val)}
              className={`py-3 rounded-xl font-extrabold text-lg transition-all border-2 ${
                showCorrect
                  ? 'bg-green-500 border-green-500 text-white'
                  : showWrong
                  ? 'bg-red-100 border-red-400 text-red-700'
                  : isSelected
                  ? 'bg-green-500 border-green-500 text-white scale-105 shadow-lg shadow-green-200'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-green-300 hover:bg-green-50'
              }`}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {val.toLocaleString('de-DE')}
            </motion.button>
          );
        })}
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
              disabled={selected === null}
              className="w-full py-3 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 active:scale-[0.98] transition-all"
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

export default NumberLinePlace;
