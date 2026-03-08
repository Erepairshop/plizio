'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, PieChart } from 'lucide-react';
import { playCorrect, playIncorrect, playClick, playSelect } from '@/lib/soundEffects';

interface FractionPizzaAdderProps {
  numerator?: number;
  denominator?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Melyik tört ez?',
    hint: 'Nézd meg a pizzát és válaszd ki a megfelelő törtet!',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
    slicesColored: 'színes szelet',
    slicesTotal: 'összes szelet',
  },
  de: {
    title: 'Welcher Bruch ist das?',
    hint: 'Schau dir die Pizza an und wähle den richtigen Bruch!',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
    slicesColored: 'farbige Stücke',
    slicesTotal: 'Stücke insgesamt',
  },
  en: {
    title: 'What fraction is this?',
    hint: 'Look at the pizza and pick the correct fraction!',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    slicesColored: 'colored slices',
    slicesTotal: 'total slices',
  },
  ro: {
    title: 'Ce fracție este aceasta?',
    hint: 'Privește pizza și alege fracția corectă!',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
    slicesColored: 'felii colorate',
    slicesTotal: 'felii totale',
  },
};

const PIZZA_COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6'];

function generateSlicePath(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const start = {
    x: cx + r * Math.cos(startAngle),
    y: cy + r * Math.sin(startAngle),
  };
  const end = {
    x: cx + r * Math.cos(endAngle),
    y: cy + r * Math.sin(endAngle),
  };
  const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
  return `M ${cx},${cy} L ${start.x},${start.y} A ${r},${r} 0 ${largeArc},1 ${end.x},${end.y} Z`;
}

const FractionPizzaAdder: React.FC<FractionPizzaAdderProps> = ({
  numerator: propNum,
  denominator: propDen,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] || LABELS.en;

  const denominator = useMemo(() => propDen ?? [2, 3, 4, 6, 8][Math.floor(Math.random() * 5)], [propDen]);
  const numerator = useMemo(() => propNum ?? (Math.floor(Math.random() * (denominator - 1)) + 1), [propNum, denominator]);

  // Generate wrong answers
  const options = useMemo(() => {
    const correct = `${numerator}/${denominator}`;
    const opts = new Set<string>([correct]);

    // Add plausible wrong answers
    const wrongCandidates = [
      `${denominator}/${numerator}`, // swapped
      `${numerator}/${denominator + 2}`,
      `${Math.min(numerator + 1, denominator)}/${denominator}`,
      `${Math.max(numerator - 1, 1)}/${denominator}`,
      `${numerator}/${denominator * 2}`,
    ];

    for (const w of wrongCandidates) {
      if (opts.size >= 4) break;
      if (w !== correct && !w.startsWith('0/')) opts.add(w);
    }

    // Fill remaining with random
    while (opts.size < 4) {
      const rn = Math.floor(Math.random() * 7) + 1;
      const rd = [2, 3, 4, 6, 8][Math.floor(Math.random() * 5)];
      if (rn < rd) opts.add(`${rn}/${rd}`);
    }

    return Array.from(opts).sort(() => Math.random() - 0.5);
  }, [numerator, denominator]);

  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selected) onValueChangeRef.current(selected);
  }, [embedded, selected]);

  const CX = 100, CY = 100, R = 80;

  const handleSubmit = () => {
    if (!selected) return;
    playClick();
    const isCorrect = selected === `${numerator}/${denominator}`;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect), 1800);
  };

  const handleReset = () => {
    playClick();
    setSelected(null);
    setFeedback(null);
    setSubmitted(false);
  };

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fffbeb 50%, #fef3c7 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center">
              <PieChart size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Pizza SVG */}
      <div className="flex justify-center px-4 pb-4">
        <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-lg">
          {/* Pizza base (crust) */}
          <circle cx={CX} cy={CY} r={R + 6} fill="#d4a76a" />
          <circle cx={CX} cy={CY} r={R + 2} fill="#e8c170" />
          <circle cx={CX} cy={CY} r={R} fill="#fdf6e3" />

          {/* Slices */}
          {Array.from({ length: denominator }, (_, i) => {
            const startAngle = (i * 2 * Math.PI) / denominator - Math.PI / 2;
            const endAngle = ((i + 1) * 2 * Math.PI) / denominator - Math.PI / 2;
            const isFilled = i < numerator;
            return (
              <path
                key={i}
                d={generateSlicePath(CX, CY, R - 2, startAngle, endAngle)}
                fill={isFilled ? PIZZA_COLORS[i % PIZZA_COLORS.length] : '#fef9c3'}
                stroke="#d4a76a"
                strokeWidth={2}
                opacity={isFilled ? 0.85 : 0.4}
              />
            );
          })}

          {/* Center dot */}
          <circle cx={CX} cy={CY} r={4} fill="#d4a76a" />

          {/* Info badge */}
          <text x={CX} y={CY + R + 16} textAnchor="middle" fontSize={11} fontWeight={700} fill="#92400e">
            {numerator} {t.slicesColored} / {denominator} {t.slicesTotal}
          </text>
        </svg>
      </div>

      {/* Fraction options */}
      <div className="px-5 pb-4">
        <div className="grid grid-cols-2 gap-2">
          {options.map(opt => (
            <motion.button
              key={opt}
              disabled={submitted}
              onClick={() => { playSelect(); setSelected(opt); }}
              className={`py-4 rounded-xl font-extrabold text-xl transition-all ${
                selected === opt
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-200 scale-105'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50'
              } ${submitted ? 'opacity-60' : ''}`}
              whileTap={submitted ? {} : { scale: 0.92 }}
            >
              <span className="inline-flex flex-col items-center leading-tight">
                <span className="border-b-2 border-current px-2 pb-0.5">{opt.split('/')[0]}</span>
                <span className="pt-0.5">{opt.split('/')[1]}</span>
              </span>
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
              disabled={!selected}
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

export default FractionPizzaAdder;
