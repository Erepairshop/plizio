'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface RatioTableFillProps {
  unitValue?: number;   // e.g. price per 1 item
  quantities?: number[]; // e.g. [1, 2, 3, ?]
  hiddenIdx?: number;   // which quantity is hidden
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Aránytábla', hint: 'Melyik szám hiányzik a táblázatból?',
    submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó!', tryAgain: 'Újra',
    qty: 'Mennyiség', total: 'Összeg',
  },
  de: {
    title: 'Verhältnistabelle', hint: 'Welche Zahl fehlt in der Tabelle?',
    submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch!', tryAgain: 'Nochmal',
    qty: 'Menge', total: 'Betrag',
  },
  en: {
    title: 'Ratio Table', hint: 'Which number is missing from the table?',
    submit: 'Check', correct: 'Correct!', incorrect: 'Not right!', tryAgain: 'Retry',
    qty: 'Quantity', total: 'Total',
  },
  ro: {
    title: 'Tabel proporțional', hint: 'Ce număr lipsește din tabel?',
    submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit!', tryAgain: 'Din nou',
    qty: 'Cantitate', total: 'Total',
  },
};

function makeChoices(correct: number, unitValue: number): number[] {
  const opts = new Set<number>([correct]);
  const factors = [correct / unitValue + 1, correct / unitValue - 1, correct / unitValue + 2].filter(f => f > 0 && Number.isInteger(f));
  for (const f of factors) {
    opts.add(f * unitValue);
    if (opts.size >= 4) break;
  }
  const deltas = [unitValue, -unitValue, unitValue * 2, -unitValue * 2];
  for (const d of deltas) {
    const c = correct + d;
    if (c > 0 && c !== correct) opts.add(c);
    if (opts.size >= 4) break;
  }
  return Array.from(opts).sort(() => Math.random() - 0.5).slice(0, 4);
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const RatioTableFill: React.FC<RatioTableFillProps> = ({
  unitValue: propUnit,
  quantities: propQty,
  hiddenIdx: propHidden,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { unitValue, quantities, hiddenIdx, correctAnswer, choices } = useMemo(() => {
    const unit = propUnit ?? [2, 3, 4, 5, 6, 7, 8][Math.floor(Math.random() * 7)];
    const qty = propQty ?? [1, 2, 3, 4, 5].slice(0, 3 + Math.floor(Math.random() * 2));
    const hIdx = propHidden ?? Math.floor(Math.random() * qty.length);
    const correct = qty[hIdx] * unit;
    return { unitValue: unit, quantities: qty, hiddenIdx: hIdx, correctAnswer: correct, choices: makeChoices(correct, unit) };
  }, [propUnit, propQty, propHidden]); // eslint-disable-line react-hooks/exhaustive-deps

  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const onValRef = React.useRef(onValueChange);
  onValRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValRef.current && selected !== null) onValRef.current(selected);
  }, [embedded, selected]);

  const handleSubmit = () => {
    if (!selected || embedded) return;
    playClick();
    const correct = selected === String(correctAnswer);
    setFeedback(correct ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (correct) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(correct, selected), 1800);
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
      style={{ background: 'linear-gradient(135deg, #fefce8 0%, #fef9c3 50%, #fef08a 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center">
            <span className="text-white font-black text-sm">a:b</span>
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
        </div>
      )}

      {/* Hint — always visible */}
      <p className="text-xs font-semibold text-center text-amber-700 px-5 pt-3 pb-2">{t.hint}</p>

      {/* Table */}
      <div className="flex justify-center px-4 pb-3">
        <div className="bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden">
          <table className="text-center border-collapse">
            <thead>
              <tr className="bg-amber-50">
                <th className="px-4 py-2 text-xs font-bold text-amber-700 border-r border-amber-200">{t.qty}</th>
                {quantities.map((q, i) => (
                  <th key={i} className="px-4 py-2 text-sm font-extrabold text-slate-700 border-r border-amber-100 last:border-r-0">
                    {q}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-xs font-bold text-amber-700 border-r border-amber-200 border-t border-amber-100">{t.total}</td>
                {quantities.map((q, i) => (
                  <td key={i} className="px-4 py-2 text-sm font-extrabold border-r border-amber-100 last:border-r-0 border-t border-amber-100">
                    {i === hiddenIdx ? (
                      <span className="inline-flex items-center justify-center w-10 h-7 rounded-lg bg-amber-200 text-amber-800 font-black text-lg">?</span>
                    ) : (
                      <span className="text-slate-700">{q * unitValue}</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val, i) => {
          const valStr = String(val);
          const isSelected = selected === valStr;
          const isCorrectVal = val === correctAnswer;
          const color = COLORS[i % COLORS.length];
          return (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => { if (!submitted) { playClick(); setSelected(valStr); } }}
              className={`py-3 rounded-xl font-extrabold text-base transition-all border-2 ${
                submitted
                  ? isCorrectVal ? 'bg-green-500 border-green-500 text-white'
                    : isSelected ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected ? 'text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700 hover:bg-amber-50'
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
              <motion.div key={feedback}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl font-bold text-base mb-3 ${
                  feedback === 'correct' ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : 'bg-red-50 text-red-600 border-2 border-red-200'}`}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                {feedback === 'correct' ? <Check size={20} /> : <X size={20} />}
                {feedback === 'correct' ? t.correct : t.incorrect}
              </motion.div>
            )}
          </AnimatePresence>
          {!submitted ? (
            <button onClick={handleSubmit} disabled={!selected}
              className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed">
              {t.submit}
            </button>
          ) : (
            <button onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-all">
              <RotateCcw size={16} />{t.tryAgain}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default RatioTableFill;
