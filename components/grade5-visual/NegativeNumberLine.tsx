'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface NegativeNumberLineProps {
  startNum?: number;
  addNum?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Negatív számok', hint: 'Számítsd ki, majd olvasd le az eredményt!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', question: 'Mi az eredmény?', startsAt: 'Start:' },
  de: { title: 'Negative Zahlen', hint: 'Rechne aus und lies das Ergebnis ab!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', question: 'Was ist das Ergebnis?', startsAt: 'Start:' },
  en: { title: 'Negative numbers', hint: 'Calculate and read the result!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', question: 'What is the result?', startsAt: 'Start:' },
  ro: { title: 'Numere negative', hint: 'Calculează și citește rezultatul!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', question: 'Care este rezultatul?', startsAt: 'Start:' },
};

const LINE_MIN = -12, LINE_MAX = 12;
const SVG_W = 300, MARGIN = 20;
const STEP = (SVG_W - 2 * MARGIN) / (LINE_MAX - LINE_MIN); // px per unit
function xPos(n: number) { return MARGIN + (n - LINE_MIN) * STEP; }

function makeChoices(correct: number): number[] {
  const opts = new Set<number>([correct]);
  const deltas = [-3, -2, -1, 1, 2, 3].sort(() => Math.random() - 0.5);
  for (const d of deltas) {
    const c = correct + d;
    if (c >= LINE_MIN && c <= LINE_MAX) opts.add(c);
    if (opts.size >= 4) break;
  }
  // fallback if not enough
  for (let d = 1; opts.size < 4; d++) {
    if (correct + d <= LINE_MAX) opts.add(correct + d);
    if (opts.size < 4 && correct - d >= LINE_MIN) opts.add(correct - d);
  }
  return Array.from(opts).sort(() => Math.random() - 0.5);
}

const NegativeNumberLine: React.FC<NegativeNumberLineProps> = ({
  startNum: propStart,
  addNum: propAdd,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { startNum, addNum, result, choices } = useMemo(() => {
    // startNum: between -8 and 8, addNum: between -8 and 8
    // Ensure result stays in [-10, 10] and is different from start
    let sn = propStart ?? (Math.floor(Math.random() * 17) - 8); // -8..+8
    let an: number;
    if (propAdd !== undefined) {
      an = propAdd;
    } else {
      // Pick addNum so that result goes negative (or crosses zero for interest)
      const candidates: number[] = [];
      for (let a = -8; a <= 8; a++) {
        if (a === 0) continue;
        const r = sn + a;
        if (r >= -10 && r <= 10 && r !== sn) candidates.push(a);
      }
      an = candidates[Math.floor(Math.random() * candidates.length)] ?? -3;
    }
    const res = sn + an;
    const ch = makeChoices(res);
    return { startNum: sn, addNum: an, result: res, choices: ch };
  }, [propStart, propAdd]); // eslint-disable-line react-hooks/exhaustive-deps

  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = React.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selected !== null) {
      onValueChangeRef.current(selected);
    }
  }, [embedded, selected]);

  const handleSelect = (val: string) => {
    if (submitted) return;
    playClick();
    setSelected(val);
  };

  const handleSubmit = () => {
    if (selected === null || embedded) return;
    playClick();
    const isCorrect = selected === String(result);
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

  // SVG constants
  const LINE_Y = 52;
  const sx = xPos(startNum);
  const ex = xPos(result);
  const isPositive = addNum >= 0;
  const arrowColor = isPositive ? '#2563eb' : '#dc2626';
  // Arc: mid-x halfway, peak above line
  const midX = (sx + ex) / 2;
  const arcHeight = Math.max(18, Math.abs(result - startNum) * 4);
  const arcY = LINE_Y - arcHeight;

  // Labeled ticks: every 2 units
  const labelTicks = Array.from({ length: LINE_MAX - LINE_MIN + 1 }, (_, i) => LINE_MIN + i)
    .filter(n => n % 2 === 0);
  const minorTicks = Array.from({ length: LINE_MAX - LINE_MIN + 1 }, (_, i) => LINE_MIN + i)
    .filter(n => n % 2 !== 0);

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 50%, #fecaca 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center">
              <span className="text-white font-black text-base">−</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Equation display */}
      <div className="px-5 pt-4 pb-2 flex justify-center">
        <div className="bg-white rounded-xl px-5 py-2 border-2 border-red-200 text-xl font-extrabold text-slate-800">
          {startNum} {addNum >= 0 ? '+' : '−'} {Math.abs(addNum)} ={' '}
          <span className="text-red-600">?</span>
        </div>
      </div>

      {/* Number line SVG */}
      <div className="flex justify-center px-4 pb-3">
        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-3 inline-block overflow-x-auto">
          <svg viewBox={`0 0 ${SVG_W} 100`} style={{ width: SVG_W, height: 100 }}>
            {/* Zero divider line (subtle) */}
            <line x1={xPos(0)} y1={10} x2={xPos(0)} y2={90} stroke="#e5e7eb" strokeWidth={1} strokeDasharray="3,3" />

            {/* Negative zone */}
            <rect x={MARGIN} y={LINE_Y - 4} width={xPos(0) - MARGIN} height={8} rx={4}
              fill="#fca5a5" opacity={0.5} />
            {/* Positive zone */}
            <rect x={xPos(0)} y={LINE_Y - 4} width={xPos(LINE_MAX) - xPos(0)} height={8} rx={4}
              fill="#93c5fd" opacity={0.5} />

            {/* Main line */}
            <line x1={MARGIN - 6} y1={LINE_Y} x2={SVG_W - MARGIN + 6} y2={LINE_Y}
              stroke="#374151" strokeWidth={2} strokeLinecap="round" />

            {/* Minor ticks */}
            {minorTicks.map(n => (
              <line key={n} x1={xPos(n)} y1={LINE_Y - 4} x2={xPos(n)} y2={LINE_Y + 4}
                stroke="#9ca3af" strokeWidth={1} />
            ))}

            {/* Major ticks + labels */}
            {labelTicks.map(n => (
              <g key={n}>
                <line x1={xPos(n)} y1={LINE_Y - 7} x2={xPos(n)} y2={LINE_Y + 7}
                  stroke={n === 0 ? '#1f2937' : '#6b7280'} strokeWidth={n === 0 ? 2 : 1.5} />
                <text x={xPos(n)} y={LINE_Y + 19} textAnchor="middle" fontSize={9}
                  fontWeight={n === 0 ? 800 : 600} fill={n === 0 ? '#1f2937' : '#6b7280'}>
                  {n}
                </text>
              </g>
            ))}

            {/* Jump arc */}
            {!submitted && (
              <path
                d={`M ${sx} ${LINE_Y} Q ${midX} ${arcY} ${ex} ${LINE_Y}`}
                fill="none" stroke={arrowColor} strokeWidth={2.5} strokeDasharray="5,3" opacity={0.8}
              />
            )}

            {/* Arrowhead at end */}
            {!submitted && (
              <polygon
                points={`${ex},${LINE_Y - 8} ${ex - 5},${LINE_Y - 2} ${ex + 5},${LINE_Y - 2}`}
                fill={arrowColor} opacity={0.8}
              />
            )}

            {/* Start point */}
            <circle cx={sx} cy={LINE_Y} r={6} fill="#2563eb" stroke="white" strokeWidth={2} />
            <text x={sx} y={LINE_Y - 14} textAnchor="middle" fontSize={9} fontWeight={800} fill="#2563eb">
              {t.startsAt}
            </text>

            {/* Result point (shown after submit) */}
            {submitted && (
              <circle cx={ex} cy={LINE_Y} r={7} fill={feedback === 'correct' ? '#16a34a' : '#dc2626'}
                stroke="white" strokeWidth={2} />
            )}
          </svg>
        </div>
      </div>

      {/* Question */}
      <div className="px-5 pb-3 text-center">
        <p className="text-base font-bold text-slate-700">{t.question}</p>
      </div>

      {/* Choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val, i) => {
          const valStr = String(val);
          const isSelected = selected === valStr;
          const isCorrectVal = val === result;
          const color = COLORS[i % COLORS.length];
          return (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => handleSelect(valStr)}
              className={`py-3 rounded-xl font-extrabold text-base transition-all border-2 ${
                submitted
                  ? isCorrectVal
                    ? 'bg-green-500 border-green-500 text-white'
                    : isSelected
                    ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-red-50'
              }`}
              style={isSelected && !submitted ? { backgroundColor: color, borderColor: color } : {}}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {val}
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
              className="w-full py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 active:scale-[0.98] transition-all"
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

export default NegativeNumberLine;
