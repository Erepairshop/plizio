'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Target } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface LargeNumberRoundingProps {
  target?: number;
  step?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Kerekítsd a számot!',
    hint: 'Nézd meg hol van a szám a két kerekített érték között.',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem jó. Próbáld újra!',
    tryAgain: 'Újra',
    roundTo: 'Kerekítsd a legközelebbi',
    to: '-ra/-re',
    thousand: 'ezresre',
    tenThousand: 'tízezresre',
    hundredThousand: 'százezresre',
  },
  de: {
    title: 'Runde die Zahl!',
    hint: 'Schau, wo die Zahl zwischen den zwei Rundungsgrenzen liegt.',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Falsch. Nochmal!',
    tryAgain: 'Nochmal',
    roundTo: 'Runde auf die nächste',
    to: '',
    thousand: 'Tausender',
    tenThousand: 'Zehntausender',
    hundredThousand: 'Hunderttausender',
  },
  en: {
    title: 'Round the number!',
    hint: 'See where the number falls between the two rounding boundaries.',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    roundTo: 'Round to the nearest',
    to: '',
    thousand: 'thousand',
    tenThousand: 'ten-thousand',
    hundredThousand: 'hundred-thousand',
  },
  ro: {
    title: 'Rotunjește numărul!',
    hint: 'Vezi unde se află numărul între cele două limite de rotunjire.',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Greșit. Încearcă din nou!',
    tryAgain: 'Din nou',
    roundTo: 'Rotunjește la cel mai apropiat',
    to: '',
    thousand: 'mie',
    tenThousand: 'zece mii',
    hundredThousand: 'suta de mii',
  },
};

const LargeNumberRounding: React.FC<LargeNumberRoundingProps> = ({
  target: propTarget,
  step: propStep,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { min, max, target, step, correctAnswer, stepLabel } = useMemo(() => {
    const configs = [
      { step: 1000,   label: { hu: 'ezresre',      de: 'Tausender',         en: 'thousand',       ro: 'mie'           } },
      { step: 10000,  label: { hu: 'tízezresre',    de: 'Zehntausender',     en: 'ten-thousand',   ro: 'zece mii'      } },
      { step: 100000, label: { hu: 'százezresre',   de: 'Hunderttausender',  en: 'hundred-thousand', ro: 'suta de mii' } },
    ];
    const cfg = propStep
      ? configs.find(c => c.step === propStep) ?? configs[0]
      : configs[Math.floor(Math.random() * configs.length)];

    const s = cfg.step;
    // Pick a base (multiple of step) and add offset so target isn't at boundary
    const base = (Math.floor(Math.random() * 8) + 1) * s;
    const offset = Math.floor(Math.random() * (s - 1)) + 1;
    const tgt = propTarget ?? (base + offset);
    const mn = Math.floor(tgt / s) * s;
    const mx = mn + s;
    const rounded = Math.round(tgt / s) * s;
    return { min: mn, max: mx, target: tgt, step: s, correctAnswer: rounded, stepLabel: cfg.label };
  }, [propTarget, propStep]);

  const lang = language as keyof typeof stepLabel;

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selectedAnswer !== null) {
      onValueChangeRef.current(String(selectedAnswer));
    }
  }, [embedded, selectedAnswer]);

  const handleSubmit = () => {
    if (selectedAnswer === null || embedded) return;
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

  // SVG layout
  const W = 380, PAD = 52, lineY = 80;
  const toX = (n: number) => PAD + ((n - min) / (max - min)) * (W - 2 * PAD);
  const targetX = toX(target);

  // Position as percentage for visual clarity
  const pct = Math.round(((target - min) / (max - min)) * 100);
  const closerToMin = target - min < max - target;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center">
              <Target size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Info badges */}
      <div className="flex flex-wrap justify-center gap-2 pb-3 px-4">
        <div className="bg-orange-600 text-white px-5 py-2 rounded-full font-black text-lg shadow-md">
          {target.toLocaleString('de-DE')}
        </div>
        <div className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-bold text-sm flex items-center">
          {t.roundTo} {stepLabel[lang]}
        </div>
      </div>

      {/* Number line SVG */}
      <div className="px-4 pb-4 overflow-x-auto">
        <svg viewBox={`0 0 ${W} 140`} className="w-full h-auto" style={{ minWidth: 300 }}>
          {/* Background strip */}
          <rect x={PAD} y={lineY - 4} width={W - 2 * PAD} height={8} rx={4} fill="#e5e7eb" />

          {/* Colored half: left (closer to min) = blue, right (closer to max) = red */}
          <rect x={PAD} y={lineY - 4}
            width={toX(target) - PAD} height={8} rx={4}
            fill={closerToMin ? '#3b82f6' : '#f97316'} opacity={0.4} />
          <rect x={toX(target)} y={lineY - 4}
            width={(W - PAD) - toX(target)} height={8} rx={4}
            fill={closerToMin ? '#f97316' : '#3b82f6'} opacity={0.4} />

          {/* Main line */}
          <line x1={PAD - 10} y1={lineY} x2={W - PAD + 10} y2={lineY}
            stroke="#374151" strokeWidth={2.5} strokeLinecap="round" />

          {/* Min tick + label */}
          <line x1={PAD} y1={lineY - 14} x2={PAD} y2={lineY + 14} stroke="#1f2937" strokeWidth={2} />
          <text x={PAD} y={lineY + 30} textAnchor="middle" fontSize={12} fontWeight={800} fill="#1f2937">
            {min.toLocaleString('de-DE')}
          </text>

          {/* Max tick + label */}
          <line x1={W - PAD} y1={lineY - 14} x2={W - PAD} y2={lineY + 14} stroke="#1f2937" strokeWidth={2} />
          <text x={W - PAD} y={lineY + 30} textAnchor="middle" fontSize={12} fontWeight={800} fill="#1f2937">
            {max.toLocaleString('de-DE')}
          </text>

          {/* Middle tick */}
          <line x1={toX((min + max) / 2)} y1={lineY - 7} x2={toX((min + max) / 2)} y2={lineY + 7}
            stroke="#9ca3af" strokeWidth={1.5} />

          {/* Target marker */}
          <line x1={targetX} y1={lineY - 32} x2={targetX} y2={lineY - 12}
            stroke="#dc2626" strokeWidth={2.5} />
          <circle cx={targetX} cy={lineY} r={7} fill="#dc2626" />
          <rect x={targetX - 20} y={lineY - 66} width={40} height={26} rx={8} fill="#dc2626" />
          <text x={targetX} y={lineY - 51} textAnchor="middle" dominantBaseline="middle"
            fontSize={11} fontWeight={900} fill="white">
            {target.toLocaleString('de-DE')}
          </text>

          {/* Percentage hint */}
          <text x={targetX} y={lineY + 52} textAnchor="middle" fontSize={10} fill="#6b7280">
            {pct}%
          </text>
        </svg>
      </div>

      {/* Answer choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-3">
        {[min, max].map(val => {
          const isSelected = selectedAnswer === val;
          const isCorrectVal = val === correctAnswer;
          return (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => { playClick(); setSelectedAnswer(val); }}
              className={`py-4 rounded-xl font-extrabold text-xl transition-all border-2 ${
                submitted
                  ? isCorrectVal
                    ? 'bg-green-500 border-green-500 text-white'
                    : isSelected
                    ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected
                  ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-200 scale-105'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-orange-300 hover:bg-orange-50'
              }`}
              whileTap={submitted ? {} : { scale: 0.92 }}
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
              disabled={selectedAnswer === null}
              className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 active:scale-[0.98] transition-all"
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

export default LargeNumberRounding;
