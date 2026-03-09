'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Target } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface NumberLineRoundingProps {
  min?: number;
  max?: number;
  target?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Kerekítsd a számot!',
    hint: 'Nézd meg a számegyenest és kerekíts.',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
    roundTo: 'Kerekítsd a legközelebbi',
    roundResult: 'Kerekítve:',
  },
  de: {
    title: 'Runde die Zahl!',
    hint: 'Schau dir den Zahlenstrahl an und runde.',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
    roundTo: 'Runde auf die nächste',
    roundResult: 'Gerundet:',
  },
  en: {
    title: 'Round the number!',
    hint: 'Look at the number line and round.',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    roundTo: 'Round to the nearest',
    roundResult: 'Rounded:',
  },
  ro: {
    title: 'Rotunjește numărul!',
    hint: 'Privește axa numerelor și rotunjește.',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
    roundTo: 'Rotunjește la cel mai apropiat',
    roundResult: 'Rotunjit:',
  },
};

const NumberLineRounding: React.FC<NumberLineRoundingProps> = ({
  min: propMin,
  max: propMax,
  target: propTarget,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] || LABELS.en;

  const { min, max, target, step, correctAnswer } = useMemo(() => {
    const stepOptions = [10, 100, 1000];
    const s = stepOptions[Math.floor(Math.random() * stepOptions.length)];
    const base = (Math.floor(Math.random() * 9) + 1) * s;
    const offset = Math.floor(Math.random() * (s - 1)) + 1;
    const t = propTarget ?? (base + offset);
    const mn = propMin ?? base;
    const mx = propMax ?? (base + s);
    const rounded = Math.round(t / s) * s;
    return { min: mn, max: mx, target: t, step: s, correctAnswer: rounded };
  }, [propMin, propMax, propTarget]);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selectedAnswer !== null) onValueChangeRef.current(String(selectedAnswer));
  }, [embedded, selectedAnswer]);

  // SVG dimensions
  const PAD = 50;
  const W = 400;
  const lineY = 80;
  const numToX = (n: number) => PAD + ((n - min) / (max - min)) * (W - 2 * PAD);

  // Generate tick marks
  const tickCount = 11;
  const tickStep = (max - min) / tickCount;

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    playClick();
    const isCorrect = selectedAnswer === correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, selectedAnswer), 1800);
  };

  const handleReset = () => {
    playClick();
    setSelectedAnswer(null);
    setFeedback(null);
    setSubmitted(false);
  };

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center">
              <Target size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Target number */}
      <div className="flex justify-center gap-3 pb-3">
        <div className="bg-blue-600 text-white px-5 py-2 rounded-full font-black text-lg shadow-md">
          {target.toLocaleString('de-DE')}
        </div>
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold text-sm flex items-center">
          {t.roundTo} {step.toLocaleString('de-DE')}
        </div>
      </div>

      {/* Number line SVG */}
      <div className="px-4 pb-4 overflow-x-auto">
        <svg viewBox={`0 0 ${W} 130`} className="w-full h-auto" style={{ minWidth: 350, minHeight: 140 }}>
          {/* Main line */}
          <line x1={PAD - 10} y1={lineY} x2={W - PAD + 10} y2={lineY}
            stroke="#64748b" strokeWidth={3} strokeLinecap="round" />

          {/* Arrow heads */}
          <polygon points={`${PAD - 14},${lineY} ${PAD - 4},${lineY - 5} ${PAD - 4},${lineY + 5}`} fill="#64748b" />
          <polygon points={`${W - PAD + 14},${lineY} ${W - PAD + 4},${lineY - 5} ${W - PAD + 4},${lineY + 5}`} fill="#64748b" />

          {/* Ticks */}
          {Array.from({ length: tickCount + 1 }, (_, i) => {
            const val = min + i * tickStep;
            const x = numToX(val);
            const isMajor = i === 0 || i === tickCount || i === Math.floor(tickCount / 2);
            return (
              <g key={i}>
                <line x1={x} y1={lineY - (isMajor ? 12 : 6)} x2={x} y2={lineY + (isMajor ? 12 : 6)}
                  stroke="#475569" strokeWidth={isMajor ? 2 : 1} />
                {isMajor && (
                  <text x={x} y={lineY + 28} textAnchor="middle" fontSize={12} fontWeight={700} fill="#334155">
                    {Math.round(val).toLocaleString('de-DE')}
                  </text>
                )}
              </g>
            );
          })}

          {/* Target marker */}
          <line x1={numToX(target)} y1={lineY - 30} x2={numToX(target)} y2={lineY - 5}
            stroke="#ef4444" strokeWidth={2.5} />
          <circle cx={numToX(target)} cy={lineY} r={6} fill="#ef4444" />
          <text x={numToX(target)} y={lineY - 34} textAnchor="middle"
            fontSize={13} fontWeight={900} fill="#dc2626">
            {target.toLocaleString('de-DE')}
          </text>
        </svg>
      </div>

      {/* Answer choices */}
      <div className="px-5 pb-4">
        <div className="grid grid-cols-2 gap-2">
          {[min, max].map(val => (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => { playClick(); setSelectedAnswer(val); }}
              className={`py-4 rounded-xl font-extrabold text-xl transition-all ${
                selectedAnswer === val
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
              } ${submitted ? 'opacity-60' : ''}`}
              whileTap={submitted ? {} : { scale: 0.92 }}
            >
              {val.toLocaleString('de-DE')}
            </motion.button>
          ))}
        </div>
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
              disabled={selectedAnswer === null}
              className="w-full py-3 rounded-xl bg-blue-500 text-white font-bold text-sm hover:bg-blue-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-500 text-white font-bold text-sm hover:bg-blue-600 active:scale-[0.98] transition-all"
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

export default NumberLineRounding;
