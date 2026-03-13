'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface DecimalNumberLineProps {
  rangeStart?: number; // e.g. 0
  rangeEnd?: number;   // e.g. 1 or 2
  target?: number;     // e.g. 0.3
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Melyik tizedes tört?', hint: 'Melyik szám van a nyíl helyén?', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra' },
  de: { title: 'Welche Dezimalzahl?', hint: 'Welche Zahl zeigt der Pfeil?', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal' },
  en: { title: 'Which decimal number?', hint: 'Which number does the arrow show?', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry' },
  ro: { title: 'Ce număr zecimal?', hint: 'Ce număr arată săgeata?', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou' },
};

const DecimalNumberLine: React.FC<DecimalNumberLineProps> = ({
  rangeStart: propStart,
  rangeEnd: propEnd,
  target: propTarget,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { rangeStart, rangeEnd, target, choices, step } = useMemo(() => {
    // Range configs: 0–1 (step 0.1), 0–2 (step 0.2), 1–2 (step 0.1)
    const configs = [
      { start: 0, end: 1, step: 0.1 },
      { start: 0, end: 2, step: 0.2 },
      { start: 1, end: 2, step: 0.1 },
    ];
    const cfg = configs[Math.floor(Math.random() * configs.length)];
    const rs = propStart ?? cfg.start;
    const re = propEnd ?? cfg.end;
    const st = cfg.step;

    // Build positions (excluding endpoints)
    const positions: number[] = [];
    for (let v = rs + st; v < re - st / 2; v += st) {
      positions.push(Math.round(v * 100) / 100);
    }

    const tgt = propTarget ?? positions[Math.floor(Math.random() * positions.length)];
    const pool = positions.filter(v => Math.abs(v - tgt) > 0.001);
    const distractors = pool.sort(() => Math.random() - 0.5).slice(0, 3);
    const all = [tgt, ...distractors].sort(() => Math.random() - 0.5);

    return { rangeStart: rs, rangeEnd: re, target: tgt, choices: all, step: st };
  }, [propStart, propEnd, propTarget]);

  const formatNum = (n: number) => {
    const dec = step < 0.15 ? 1 : 1;
    return n.toFixed(dec).replace('.', language === 'en' ? '.' : ',');
  };

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
    const isCorrect = Math.abs(selected - target) < 0.001;
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
  const W = 360, PAD = 44, lineY = 75;
  const toX = (n: number) => PAD + ((n - rangeStart) / (rangeEnd - rangeStart)) * (W - 2 * PAD);
  const targetX = toX(target);

  // All ticks
  const tickCount = Math.round((rangeEnd - rangeStart) / step);
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) =>
    Math.round((rangeStart + i * step) * 100) / 100
  );

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 50%, #a5f3fc 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center">
              <span className="text-white font-black text-xs">0,1</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Number line SVG */}
      <div className="px-4 pb-3 overflow-x-auto">
        <svg viewBox={`0 0 ${W} 130`} className="w-full h-auto" style={{ minWidth: 280 }}>
          {/* Background strip */}
          <rect x={PAD} y={lineY - 3} width={W - 2 * PAD} height={6} rx={3} fill="#e2e8f0" />

          {/* Colored fill from start to target */}
          <rect x={PAD} y={lineY - 3}
            width={targetX - PAD} height={6} rx={3}
            fill="#0891b2" opacity={0.35} />

          {/* Main line */}
          <line x1={PAD - 10} y1={lineY} x2={W - PAD + 10} y2={lineY}
            stroke="#164e63" strokeWidth={2.5} strokeLinecap="round" />

          {/* Arrows */}
          <polygon points={`${PAD - 14},${lineY} ${PAD - 4},${lineY - 5} ${PAD - 4},${lineY + 5}`} fill="#164e63" />
          <polygon points={`${W - PAD + 14},${lineY} ${W - PAD + 4},${lineY - 5} ${W - PAD + 4},${lineY + 5}`} fill="#164e63" />

          {/* Ticks */}
          {ticks.map((val, i) => {
            const x = toX(val);
            const isMajor = i === 0 || i === tickCount || i % 5 === 0;
            return (
              <g key={i}>
                <line x1={x} y1={lineY - (isMajor ? 12 : 6)} x2={x} y2={lineY + (isMajor ? 12 : 6)}
                  stroke={isMajor ? '#164e63' : '#7dd3fc'} strokeWidth={isMajor ? 2 : 1.5} />
                {isMajor && (
                  <text x={x} y={lineY + 26} textAnchor="middle" fontSize={11} fontWeight={800} fill="#164e63">
                    {formatNum(val)}
                  </text>
                )}
              </g>
            );
          })}

          {/* Target arrow marker */}
          <line x1={targetX} y1={lineY - 45} x2={targetX} y2={lineY - 14}
            stroke="#0891b2" strokeWidth={2.5} />
          <polygon points={`${targetX},${lineY - 14} ${targetX - 7},${lineY - 28} ${targetX + 7},${lineY - 28}`}
            fill="#0891b2" />
          {/* ? badge */}
          <rect x={targetX - 16} y={lineY - 82} width={32} height={28} rx={8} fill="#0891b2" />
          <text x={targetX} y={lineY - 66} textAnchor="middle" dominantBaseline="middle"
            fontSize={16} fontWeight={900} fill="white">?</text>
          <circle cx={targetX} cy={lineY} r={6} fill="#0891b2" />
        </svg>
      </div>

      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-slate-500 px-5 pb-2">{t.hint}</p>

      {/* Answer choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val, idx) => {
          const isSelected = selected !== null && Math.abs(selected - val) < 0.001;
          const isCorrectVal = Math.abs(val - target) < 0.001;
          return (
            <motion.button
              key={idx}
              disabled={submitted}
              onClick={() => handleSelect(val)}
              className={`py-3 rounded-xl font-extrabold text-xl transition-all border-2 ${
                submitted
                  ? isCorrectVal
                    ? 'bg-green-500 border-green-500 text-white'
                    : isSelected
                    ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected
                  ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg scale-105'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50'
              }`}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {formatNum(val)}
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
              className="w-full py-3 rounded-xl bg-cyan-600 text-white font-bold text-sm hover:bg-cyan-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-600 text-white font-bold text-sm hover:bg-cyan-700 active:scale-[0.98] transition-all"
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

export default DecimalNumberLine;
