'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface FractionEquivalentProps {
  baseNum?: number;
  baseDen?: number;
  multiplier?: number;
  hidePart?: 'numerator' | 'denominator';
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Egyenlő törtek!', hint: 'Add meg a hiányzó számot!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', missing: 'Melyik szám hiányzik?' },
  de: { title: 'Gleichwertige Brüche!', hint: 'Gib die fehlende Zahl ein!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', missing: 'Welche Zahl fehlt?' },
  en: { title: 'Equivalent fractions!', hint: 'Enter the missing number!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', missing: 'What number is missing?' },
  ro: { title: 'Fracții echivalente!', hint: 'Completează numărul lipsă!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', missing: 'Ce număr lipsește?' },
};

const FractionEquivalent: React.FC<FractionEquivalentProps> = ({
  baseNum: propN,
  baseDen: propD,
  multiplier: propK,
  hidePart: propHide,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { baseNum, baseDen, eqNum, eqDen, correctAnswer, hidePart } = useMemo(() => {
    // Simple fractions: 1/2, 1/3, 2/3, 1/4, 3/4, 1/5, 2/5, 3/5
    const bases: [number, number][] = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[2,6],[1,6]];
    const [bn, bd] = propN && propD ? [propN, propD] : bases[Math.floor(Math.random() * bases.length)];
    const k = propK ?? (Math.floor(Math.random() * 3) + 2); // 2, 3, or 4
    const en = bn * k;
    const ed = bd * k;
    const hide = propHide ?? (Math.random() > 0.5 ? 'numerator' : 'denominator');
    const ans = hide === 'numerator' ? en : ed;
    return { baseNum: bn, baseDen: bd, eqNum: en, eqDen: ed, correctAnswer: ans, hidePart: hide };
  }, [propN, propD, propK, propHide]);

  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

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

  // Fraction bar visual
  const FractionBar = ({ num, den, color, label }: { num: number; den: number; color: string; label?: string }) => {
    const W = 180, H = 32;
    const filledW = (num / den) * W;
    return (
      <div className="flex flex-col items-center gap-1">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxWidth: W, height: H }}>
          <rect x={0} y={0} width={W} height={H} rx={6} fill="#f1f5f9" stroke="#cbd5e1" strokeWidth={1.5} />
          <rect x={0} y={0} width={filledW} height={H} rx={6} fill={color} opacity={0.8} />
          {Array.from({ length: den - 1 }, (_, i) => (
            <line key={i} x1={(i + 1) * (W / den)} y1={0} x2={(i + 1) * (W / den)} y2={H}
              stroke="white" strokeWidth={2} />
          ))}
        </svg>
        {label && <span className="text-xs font-bold text-slate-500">{label}</span>}
      </div>
    );
  };

  // Fraction display with optional input box
  const FractionDisplay = ({
    num, den, isBase,
  }: { num: number; den: number; isBase: boolean }) => {
    const showNumInput = !isBase && hidePart === 'numerator';
    const showDenInput = !isBase && hidePart === 'denominator';

    const inputBox = (
      <input
        type="number"
        value={inputVal}
        onChange={e => setInputVal(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit()}
        disabled={submitted}
        placeholder="?"
        className="w-12 h-10 text-center text-xl font-black text-indigo-700 border-2 border-indigo-400 rounded-xl bg-indigo-50 focus:border-indigo-600 focus:outline-none disabled:opacity-60 appearance-none"
        style={{ MozAppearance: 'textfield' }}
      />
    );

    return (
      <div className="flex flex-col items-center gap-1">
        {/* Numerator */}
        {showNumInput ? inputBox : (
          <span className="text-3xl font-black text-indigo-700 leading-none">{num}</span>
        )}
        {/* Fraction line */}
        <div className="w-14 border-t-[3px] border-indigo-600" />
        {/* Denominator */}
        {showDenInput ? inputBox : (
          <span className="text-3xl font-black text-indigo-700 leading-none">{den}</span>
        )}
      </div>
    );
  };

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #c7d2fe 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">=</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-slate-500 px-5 pb-2">{t.missing}</p>

      {/* Visual bars */}
      <div className="px-4 pb-3 flex flex-col gap-2">
        <FractionBar num={baseNum} den={baseDen} color="#4f46e5" />
        <FractionBar num={eqNum} den={eqDen} color="#7c3aed" />
      </div>

      {/* Equation with input */}
      <div className="px-4 pb-4 flex items-center justify-center gap-3">
        <FractionDisplay num={baseNum} den={baseDen} isBase={true} />
        <span className="text-2xl font-black text-indigo-500">=</span>
        <FractionDisplay
          num={eqNum}
          den={eqDen}
          isBase={false}
        />
      </div>

      {submitted && feedback === 'incorrect' && (
        <div className="px-4 pb-3 flex justify-center">
          <span className="text-sm font-bold text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-200">
            ✓ {hidePart === 'numerator' ? eqNum : eqDen}
          </span>
        </div>
      )}

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
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 active:scale-[0.98] transition-all"
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

export default FractionEquivalent;
