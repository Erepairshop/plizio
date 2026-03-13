'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface UnitConverterProps {
  category?: 'length' | 'mass' | 'capacity';
  from?: string;
  to?: string;
  value?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Mértékegység-átváltás', hint: 'Számítsd ki az átváltást!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', yourAnswer: 'Válaszod:', length: 'Hosszúság', mass: 'Tömeg', capacity: 'Űrtartalom' },
  de: { title: 'Maßeinheiten umrechnen', hint: 'Rechne die Maßeinheit um!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', yourAnswer: 'Deine Antwort:', length: 'Länge', mass: 'Masse', capacity: 'Volumen' },
  en: { title: 'Unit conversion', hint: 'Convert the unit of measurement!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', yourAnswer: 'Your answer:', length: 'Length', mass: 'Mass', capacity: 'Capacity' },
  ro: { title: 'Conversie de unități', hint: 'Convertește unitatea de măsură!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', yourAnswer: 'Răspunsul tău:', length: 'Lungime', mass: 'Masă', capacity: 'Capacitate' },
};

type ConvRule = { from: string; to: string; factor: number; icon: string };
const CONVERSIONS: Record<string, ConvRule[]> = {
  length: [
    { from: 'km', to: 'm',  factor: 1000, icon: '📏' },
    { from: 'm',  to: 'cm', factor: 100,  icon: '📏' },
    { from: 'm',  to: 'dm', factor: 10,   icon: '📏' },
    { from: 'dm', to: 'cm', factor: 10,   icon: '📏' },
    { from: 'cm', to: 'mm', factor: 10,   icon: '📏' },
  ],
  mass: [
    { from: 't',  to: 'kg', factor: 1000, icon: '⚖️' },
    { from: 'kg', to: 'g',  factor: 1000, icon: '⚖️' },
    { from: 'g',  to: 'mg', factor: 1000, icon: '⚖️' },
    { from: 'kg', to: 'dkg', factor: 100, icon: '⚖️' },
  ],
  capacity: [
    { from: 'l',  to: 'dl', factor: 10,   icon: '🧴' },
    { from: 'l',  to: 'cl', factor: 100,  icon: '🧴' },
    { from: 'l',  to: 'ml', factor: 1000, icon: '🧴' },
    { from: 'dl', to: 'cl', factor: 10,   icon: '🧴' },
    { from: 'dl', to: 'ml', factor: 100,  icon: '🧴' },
  ],
};

const CAT_COLORS: Record<string, { bg: string; border: string; btn: string; btnHover: string; text: string }> = {
  length:   { bg: '#eff6ff', border: '#bfdbfe', btn: '#2563eb', btnHover: '#1d4ed8', text: '#1e40af' },
  mass:     { bg: '#fdf4ff', border: '#e9d5ff', btn: '#7c3aed', btnHover: '#6d28d9', text: '#5b21b6' },
  capacity: { bg: '#f0fdf4', border: '#bbf7d0', btn: '#059669', btnHover: '#047857', text: '#065f46' },
};

// Visual scale bar showing relative unit sizes
function UnitScaleBar({ from, to, factor }: { from: string; to: string; factor: number }) {
  const segments = Math.min(factor, 10);
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16', '#f97316', '#6366f1'];
  return (
    <div className="flex flex-col gap-1 items-center">
      {/* Big unit = 1 block */}
      <div className="flex items-center gap-2 w-full">
        <span className="text-xs font-bold text-slate-500 w-8 text-right">1 {from}</span>
        <div className="h-7 flex-1 rounded-lg" style={{ background: colors[0], opacity: 0.8 }} />
      </div>
      {/* Small unit = factor blocks */}
      <div className="flex items-center gap-2 w-full">
        <span className="text-xs font-bold text-slate-500 w-8 text-right">{factor} {to}</span>
        <div className="h-7 flex-1 flex gap-0.5">
          {Array.from({ length: segments }, (_, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ background: colors[i % colors.length], opacity: 0.7 }} />
          ))}
          {factor > 10 && <span className="text-xs font-black text-slate-400 self-center">…</span>}
        </div>
      </div>
    </div>
  );
}

const UnitConverter: React.FC<UnitConverterProps> = ({
  category: propCat,
  from: propFrom,
  to: propTo,
  value: propVal,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { category, rule, sourceValue, correctAnswer } = useMemo(() => {
    const cats: Array<'length' | 'mass' | 'capacity'> = ['length', 'mass', 'capacity'];
    const cat = propCat ?? cats[Math.floor(Math.random() * cats.length)];
    const rules = CONVERSIONS[cat];
    let r: ConvRule;
    if (propFrom && propTo) {
      r = rules.find(x => x.from === propFrom && x.to === propTo) ?? rules[0];
    } else {
      r = rules[Math.floor(Math.random() * rules.length)];
    }
    // Pick a "nice" source value that gives whole-number answer
    const niceValues: Record<number, number[]> = {
      10:   [1, 2, 3, 4, 5, 6, 7, 8, 9],
      100:  [1, 2, 3, 4, 5],
      1000: [1, 2, 3, 4, 5],
    };
    const pool = niceValues[r.factor] ?? [1, 2, 3];
    const src = propVal ?? pool[Math.floor(Math.random() * pool.length)];
    return { category: cat, rule: r, sourceValue: src, correctAnswer: src * r.factor };
  }, [propCat, propFrom, propTo, propVal]);

  const colors = CAT_COLORS[category];

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

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${colors.bg} 0%, white 100%)` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: colors.btn }}>
              <span className="text-white font-black text-base">{rule.icon}</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Visual scale */}
      <div className="px-5 py-4">
        <div className="bg-white rounded-2xl p-4 border" style={{ borderColor: colors.border }}>
          <UnitScaleBar from={rule.from} to={rule.to} factor={rule.factor} />
          {/* Conversion fact */}
          <div className="mt-3 text-center">
            <span className="text-sm font-black" style={{ color: colors.text }}>
              1 {rule.from} = {rule.factor} {rule.to}
            </span>
          </div>
        </div>
      </div>

      {/* Task */}
      <div className="px-5 pb-4 flex flex-col items-center gap-3">
        <div className="text-lg font-extrabold text-slate-800">
          {sourceValue} {rule.from} = <span style={{ color: colors.btn }}>? {rule.to}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-500 text-sm">{t.yourAnswer}</span>
          <input
            type="number"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit()}
            disabled={submitted}
            placeholder="?"
            className="w-28 text-center text-2xl font-black text-slate-800 border-2 rounded-xl py-2 bg-white focus:outline-none disabled:opacity-60 appearance-none"
            style={{ borderColor: colors.btn, MozAppearance: 'textfield' }}
          />
          <span className="font-bold text-slate-500">{rule.to}</span>
        </div>
        {submitted && feedback === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold px-4 py-1.5 rounded-full border"
            style={{ color: colors.btn, borderColor: colors.border, background: colors.bg }}
          >
            ✓ {sourceValue} {rule.from} = {correctAnswer} {rule.to}
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
              className="w-full py-3 rounded-xl text-white font-bold text-sm active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
              style={{ background: colors.btn }}
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm active:scale-[0.98] transition-all"
              style={{ background: colors.btn }}
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

export default UnitConverter;
