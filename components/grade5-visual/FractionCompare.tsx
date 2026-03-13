'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface FractionCompareProps {
  fracA?: [number, number]; // [numerator, denominator]
  fracB?: [number, number];
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Melyik tört nagyobb?', hint: 'Nézd meg a sávokat és válassz!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', left: 'Bal', right: 'Jobb', equal: 'Egyenlők!', larger: 'nagyobb' },
  de: { title: 'Welcher Bruch ist größer?', hint: 'Schau dir die Balken an und wähle!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', left: 'Links', right: 'Rechts', equal: 'Gleich groß!', larger: 'größer' },
  en: { title: 'Which fraction is larger?', hint: 'Look at the bars and choose!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', left: 'Left', right: 'Right', equal: 'They are equal!', larger: 'larger' },
  ro: { title: 'Care fracție este mai mare?', hint: 'Uită-te la bare și alege!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', left: 'Stânga', right: 'Dreapta', equal: 'Sunt egale!', larger: 'mai mare' },
};

// Generate a pair of fractions that are clearly different (not equal)
function genFractionPair(): [[number, number], [number, number], 'left' | 'right'] {
  const pairs: [[number, number], [number, number]][] = [
    [[1, 2], [1, 3]],  // 0.5 > 0.333
    [[2, 3], [1, 2]],  // 0.666 > 0.5
    [[3, 4], [2, 3]],  // 0.75 > 0.666
    [[1, 4], [1, 3]],  // 0.25 < 0.333
    [[3, 5], [1, 2]],  // 0.6 > 0.5
    [[2, 5], [1, 3]],  // 0.4 > 0.333
    [[5, 6], [3, 4]],  // 0.833 > 0.75
    [[1, 2], [3, 8]],  // 0.5 > 0.375
    [[2, 4], [3, 6]],  // equal — avoid → skip
    [[4, 5], [3, 4]],  // 0.8 > 0.75
    [[1, 6], [1, 4]],  // 0.166 < 0.25
    [[3, 8], [2, 6]],  // 0.375 > 0.333
  ].filter(([a, b]) => a[0] / a[1] !== b[0] / b[1]) as [[number, number], [number, number]][];

  const [a, b] = pairs[Math.floor(Math.random() * pairs.length)];
  const correct: 'left' | 'right' = a[0] / a[1] > b[0] / b[1] ? 'left' : 'right';
  return [a, b, correct];
}

const FractionCompare: React.FC<FractionCompareProps> = ({
  fracA: propA,
  fracB: propB,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { fracA, fracB, correct } = useMemo(() => {
    if (propA && propB) {
      const c: 'left' | 'right' = propA[0] / propA[1] >= propB[0] / propB[1] ? 'left' : 'right';
      return { fracA: propA, fracB: propB, correct: c };
    }
    const [a, b, cor] = genFractionPair();
    return { fracA: a, fracB: b, correct: cor };
  }, [propA, propB]);

  const [selected, setSelected] = useState<'left' | 'right' | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selected) {
      onValueChangeRef.current(selected);
    }
  }, [embedded, selected]);

  const handleSelect = (side: 'left' | 'right') => {
    if (submitted) return;
    playClick();
    setSelected(side);
  };

  const handleSubmit = () => {
    if (!selected || embedded) return;
    playClick();
    const isCorrect = selected === correct;
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

  // Draw fraction bar
  const FractionBar = ({ num, den, color, highlighted }: { num: number; den: number; color: string; highlighted: boolean }) => {
    const BAR_W = 140, BAR_H = 36;
    const filledW = (num / den) * BAR_W;
    return (
      <svg viewBox={`0 0 ${BAR_W} ${BAR_H}`} className="w-full" style={{ maxWidth: BAR_W, height: BAR_H }}>
        {/* Background */}
        <rect x={0} y={0} width={BAR_W} height={BAR_H} rx={6} fill="#f1f5f9" stroke={highlighted ? color : '#cbd5e1'} strokeWidth={highlighted ? 2.5 : 1.5} />
        {/* Filled portion */}
        <rect x={0} y={0} width={filledW} height={BAR_H} rx={6} fill={color} opacity={0.85} />
        {/* Division lines */}
        {Array.from({ length: den - 1 }, (_, i) => (
          <line key={i}
            x1={(i + 1) * (BAR_W / den)} y1={0}
            x2={(i + 1) * (BAR_W / den)} y2={BAR_H}
            stroke="white" strokeWidth={2} />
        ))}
      </svg>
    );
  };

  const renderSide = (frac: [number, number], side: 'left' | 'right', color: string) => {
    const isSelected = selected === side;
    const isCorrectSide = correct === side;
    const showWrong = submitted && isSelected && !isCorrectSide;
    const showGood = submitted && isCorrectSide;

    return (
      <motion.button
        onClick={() => handleSelect(side)}
        disabled={submitted}
        className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
          showGood ? 'border-green-500 bg-green-50' :
          showWrong ? 'border-red-300 bg-red-50' :
          isSelected ? 'border-2 bg-white shadow-lg scale-[1.03]' :
          'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
        }`}
        style={isSelected && !submitted ? { borderColor: color } : {}}
        whileTap={submitted ? {} : { scale: 0.97 }}
      >
        {/* Fraction notation */}
        <div className="flex flex-col items-center">
          <span className="text-2xl font-black" style={{ color: submitted ? (showGood ? '#16a34a' : showWrong ? '#dc2626' : '#64748b') : color }}>
            {frac[0]}
          </span>
          <div className="w-10 border-t-2" style={{ borderColor: submitted ? (showGood ? '#16a34a' : showWrong ? '#dc2626' : '#cbd5e1') : color }} />
          <span className="text-2xl font-black" style={{ color: submitted ? (showGood ? '#16a34a' : showWrong ? '#dc2626' : '#64748b') : color }}>
            {frac[1]}
          </span>
        </div>
        {/* Bar */}
        <div className="w-full">
          <FractionBar num={frac[0]} den={frac[1]} color={color} highlighted={isSelected} />
        </div>
        {/* Percentage hint */}
        <span className="text-xs text-slate-400 font-bold">
          {Math.round((frac[0] / frac[1]) * 100)}%
        </span>
        {/* Status icon */}
        {submitted && (
          <span className="text-lg">{showGood ? '✓' : showWrong ? '✗' : ''}</span>
        )}
      </motion.button>
    );
  };

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 50%, #f3e8ff 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center">
              <span className="text-white font-black text-base">½</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-slate-500 px-5 pb-2">{t.hint}</p>

      {/* Two fraction sides */}
      <div className="px-4 pb-4 flex gap-3">
        {renderSide(fracA, 'left', '#7c3aed')}
        <div className="flex items-center justify-center">
          <span className="text-xl font-black text-slate-400">vs</span>
        </div>
        {renderSide(fracB, 'right', '#db2777')}
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
              disabled={!selected}
              className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 active:scale-[0.98] transition-all"
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

export default FractionCompare;
