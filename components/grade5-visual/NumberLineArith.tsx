'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface NumberLineArithProps {
  start?: number;
  operand?: number;
  operation?: 'add' | 'sub';
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Összeadás és kivonás számegyenesen', hint: 'Olvasd le az eredményt a számegyenesről!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', yourAnswer: 'Eredmény =', starts: 'Indul:', jumps: 'ugrás', add: 'összeadás', sub: 'kivonás' },
  de: { title: 'Addition und Subtraktion am Zahlenstrahl', hint: 'Lies das Ergebnis vom Zahlenstrahl ab!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', yourAnswer: 'Ergebnis =', starts: 'Start:', jumps: 'Sprünge', add: 'Addition', sub: 'Subtraktion' },
  en: { title: 'Addition & subtraction on a number line', hint: 'Read the result from the number line!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', yourAnswer: 'Result =', starts: 'Start:', jumps: 'jumps', add: 'addition', sub: 'subtraction' },
  ro: { title: 'Adunare și scădere pe axa numerică', hint: 'Citește rezultatul de pe axa numerică!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', yourAnswer: 'Rezultat =', starts: 'Start:', jumps: 'salturi', add: 'adunare', sub: 'scădere' },
};

const NumberLineArith: React.FC<NumberLineArithProps> = ({
  start: propStart,
  operand: propOperand,
  operation: propOp,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { start, operand, operation, correctAnswer, rangeMin, rangeMax, jumpSize } = useMemo(() => {
    const op = propOp ?? (Math.random() > 0.5 ? 'add' : 'sub');
    // Grade 5: larger numbers, jumps by 10/100
    const jumpSizes = [10, 100];
    const jSize = jumpSizes[Math.floor(Math.random() * jumpSizes.length)];
    const numJumps = Math.floor(Math.random() * 4) + 2; // 2-5 jumps
    const oper = propOperand ?? numJumps * jSize;

    let st: number;
    if (propStart !== undefined) {
      st = propStart;
    } else if (op === 'add') {
      st = Math.round((Math.random() * 8 + 1) * jSize);
    } else {
      st = Math.round((numJumps + Math.random() * 8 + 1) * jSize);
    }

    const ans = op === 'add' ? st + oper : st - oper;

    // Range: include both start and answer with padding
    const lo = Math.min(st, ans);
    const hi = Math.max(st, ans);
    const pad = jSize * 2;
    const rMin = Math.max(0, lo - pad);
    const rMax = hi + pad;

    return {
      start: st,
      operand: oper,
      operation: op,
      correctAnswer: ans,
      rangeMin: rMin,
      rangeMax: rMax,
      jumpSize: jSize,
    };
  }, [propStart, propOperand, propOp]);

  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = React.useRef(onValueChange);
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
    const isCorrect = ans === correctAnswer;
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
  };

  // SVG number line
  const W = 320, MARGIN = 30, LINE_Y = 55;
  const range = rangeMax - rangeMin;
  const toX = (v: number) => MARGIN + ((v - rangeMin) / range) * (W - 2 * MARGIN);

  // Tick marks at jumpSize intervals
  const firstTick = Math.ceil(rangeMin / jumpSize) * jumpSize;
  const ticks: number[] = [];
  for (let v = firstTick; v <= rangeMax; v += jumpSize) ticks.push(v);

  const startX = toX(start);
  const endX = toX(correctAnswer);
  const isAdd = operation === 'add';
  const color = isAdd ? '#10b981' : '#ef4444';

  // Arc jump segments
  const numJumps = Math.abs(operand) / jumpSize;
  const jumpDist = (endX - startX) / numJumps;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #d1fae5 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center">
              <span className="text-white font-black text-base">{isAdd ? '+' : '−'}</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Equation display */}
      <div className="px-5 pb-2 flex justify-center">
        <div className="bg-white rounded-xl px-5 py-2 border-2 text-xl font-extrabold text-slate-800" style={{ borderColor: color }}>
          {start} {isAdd ? '+' : '−'} {operand} = <span style={{ color }}>?</span>
        </div>
      </div>

      {/* Number line SVG */}
      <div className="flex justify-center px-4 py-3 overflow-x-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-3 inline-block">
          <svg viewBox={`0 0 ${W} 100`} style={{ width: W, height: 100 }}>
            {/* Number line */}
            <line x1={MARGIN} y1={LINE_Y} x2={W - MARGIN} y2={LINE_Y} stroke="#94a3b8" strokeWidth={2.5} />
            {/* Arrow end */}
            <polygon points={`${W - MARGIN},${LINE_Y - 5} ${W - MARGIN + 8},${LINE_Y} ${W - MARGIN},${LINE_Y + 5}`} fill="#94a3b8" />

            {/* Ticks */}
            {ticks.map(v => {
              const x = toX(v);
              const isMajor = v % (jumpSize * 2) === 0 || jumpSize >= 100;
              return (
                <g key={v}>
                  <line x1={x} y1={LINE_Y - 5} x2={x} y2={LINE_Y + 5} stroke="#64748b" strokeWidth={isMajor ? 2 : 1} />
                  {isMajor && (
                    <text x={x} y={LINE_Y + 17} textAnchor="middle" fontSize={9} fill="#64748b" fontWeight={600}>
                      {v}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Jump arcs */}
            {Array.from({ length: numJumps }, (_, i) => {
              const x1 = startX + i * jumpDist;
              const x2 = startX + (i + 1) * jumpDist;
              const midX = (x1 + x2) / 2;
              const arcH = 22;
              return (
                <path
                  key={i}
                  d={`M ${x1} ${LINE_Y} Q ${midX} ${LINE_Y - arcH} ${x2} ${LINE_Y}`}
                  fill="none"
                  stroke={color}
                  strokeWidth={2}
                  opacity={0.8}
                />
              );
            })}

            {/* Arrow on last arc */}
            {numJumps > 0 && (
              <polygon
                points={`${endX - 4},${LINE_Y - 6} ${endX + 4},${LINE_Y - 6} ${endX},${LINE_Y}`}
                fill={color}
              />
            )}

            {/* Start marker */}
            <circle cx={startX} cy={LINE_Y} r={6} fill="#3b82f6" />
            <text x={startX} y={LINE_Y - 10} textAnchor="middle" fontSize={10} fontWeight={800} fill="#1d4ed8">{start}</text>

            {/* End marker (after submit) or ? */}
            <circle cx={endX} cy={LINE_Y} r={6} fill={submitted ? color : '#f59e0b'} />
            <text x={endX} y={LINE_Y - 10} textAnchor="middle" fontSize={10} fontWeight={800} fill={submitted ? color : '#b45309'}>
              {submitted ? correctAnswer : '?'}
            </text>

            {/* Jump label */}
            <text x={(startX + endX) / 2} y={LINE_Y - 28} textAnchor="middle" fontSize={10} fontWeight={700} fill={color}>
              {numJumps}×{jumpSize}
            </text>
          </svg>
        </div>
      </div>

      {/* Input */}
      <div className="px-5 pb-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-slate-600 font-bold">{t.yourAnswer}</span>
          <input
            type="number"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit()}
            disabled={submitted}
            placeholder="?"
            className="w-28 text-center text-2xl font-black text-slate-800 border-2 border-green-400 rounded-xl py-2 bg-white focus:border-green-600 focus:outline-none disabled:opacity-60 appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
        </div>
        {submitted && feedback === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold text-green-700 bg-green-50 px-4 py-1.5 rounded-full border border-green-200"
          >
            ✓ {start} {isAdd ? '+' : '−'} {operand} = {correctAnswer}
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

export default NumberLineArith;
