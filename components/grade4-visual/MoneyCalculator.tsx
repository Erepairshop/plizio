'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Coins } from 'lucide-react';
import { playCorrect, playIncorrect, playClick, playSelect } from '@/lib/soundEffects';

interface MoneyCalculatorProps {
  items?: { name: string; price: number }[];
  budget?: number;
  mode?: 'total' | 'change';
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Számold ki az összeget!',
    hint: 'Válaszd ki a termékeket és számold össze az árukat.',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
    total: 'Összeg:',
    change: 'Visszajáró:',
    budget: 'Fizetés:',
    currency: '€',
  },
  de: {
    title: 'Berechne den Gesamtpreis!',
    hint: 'Rechne die Preise zusammen.',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
    total: 'Summe:',
    change: 'Wechselgeld:',
    budget: 'Bezahlt:',
    currency: '€',
  },
  en: {
    title: 'Calculate the total!',
    hint: 'Add up the prices.',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    total: 'Total:',
    change: 'Change:',
    budget: 'Paid:',
    currency: '€',
  },
  ro: {
    title: 'Calculează totalul!',
    hint: 'Adună prețurile.',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
    total: 'Total:',
    change: 'Rest:',
    budget: 'Plătit:',
    currency: '€',
  },
};

const ITEM_ICONS: Record<string, string> = {
  Apfel: '🍎', Apple: '🍎', Alma: '🍎', Măr: '🍎',
  Brot: '🍞', Bread: '🍞', Kenyér: '🍞', Pâine: '🍞',
  Milch: '🥛', Milk: '🥛', Tej: '🥛', Lapte: '🥛',
  Käse: '🧀', Cheese: '🧀', Sajt: '🧀', Brânză: '🧀',
  Butter: '🧈', Vaj: '🧈', Unt: '🧈',
  Banane: '🍌', Banana: '🍌', Banán: '🍌',
  Ei: '🥚', Egg: '🥚', Tojás: '🥚', Ou: '🥚',
  Schokolade: '🍫', Chocolate: '🍫', Csoki: '🍫', Ciocolată: '🍫',
};

const DEFAULT_ITEMS = [
  { name: 'Apfel', price: 0.65 },
  { name: 'Brot', price: 2.40 },
  { name: 'Milch', price: 1.25 },
  { name: 'Käse', price: 1.80 },
  { name: 'Butter', price: 1.50 },
  { name: 'Banane', price: 0.45 },
  { name: 'Ei', price: 0.30 },
  { name: 'Schokolade', price: 1.20 },
];

const MoneyCalculator: React.FC<MoneyCalculatorProps> = ({
  items: propItems,
  budget: propBudget,
  mode: propMode,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] || LABELS.en;

  const { shoppingItems, budget, mode } = useMemo(() => {
    // Pick 3-4 random items
    const pool = propItems || DEFAULT_ITEMS;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, Math.floor(Math.random() * 2) + 3);
    const total = Math.round(picked.reduce((s, i) => s + i.price, 0) * 100) / 100;
    const bud = propBudget || Math.ceil(total);
    // Mode: 'total' = calculate sum, 'change' = calculate change
    const m = propMode || (Math.random() > 0.5 ? 'total' : 'change');
    return { shoppingItems: picked, budget: bud, mode: m as 'total' | 'change' };
  }, [propItems, propBudget, propMode]);

  const correctTotal = Math.round(shoppingItems.reduce((s, i) => s + i.price, 0) * 100) / 100;
  const correctChange = Math.round((budget - correctTotal) * 100) / 100;
  const correctAnswer = mode === 'total' ? correctTotal : correctChange;

  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && inputVal.trim()) {
      // Send parsed numeric string so it matches String(sq.answer) in gradeSchoolTest
      const parsed = parseFloat(inputVal.replace(',', '.'));
      if (!isNaN(parsed)) onValueChangeRef.current(String(Math.round(parsed * 100) / 100));
    }
  }, [embedded, inputVal]);

  const handleSubmit = () => {
    const answer = parseFloat(inputVal.replace(',', '.'));
    if (isNaN(answer)) return;
    playClick();
    const roundedAnswer = Math.round(answer * 100) / 100;
    const isCorrect = Math.abs(roundedAnswer - correctAnswer) < 0.01;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, roundedAnswer), 1800);
  };

  const handleReset = () => {
    playClick();
    setInputVal('');
    setFeedback(null);
    setSubmitted(false);
  };

  const formatPrice = (p: number) => p.toFixed(2).replace('.', ',') + ' ' + t.currency;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center">
              <Coins size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Shopping items list */}
      <div className="px-5 pb-4">
        <div className="bg-white rounded-xl border-2 border-green-200 divide-y divide-green-100">
          {shoppingItems.map((item, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{ITEM_ICONS[item.name] || '🛒'}</span>
                <span className="font-bold text-slate-700">{item.name}</span>
              </div>
              <span className="font-extrabold text-green-700">{formatPrice(item.price)}</span>
            </div>
          ))}

          {/* Budget line (for change mode) */}
          {mode === 'change' && (
            <div className="flex items-center justify-between px-4 py-3 bg-green-50">
              <span className="font-bold text-slate-500">{t.budget}</span>
              <span className="font-extrabold text-green-800 text-lg">{formatPrice(budget)}</span>
            </div>
          )}
        </div>
      </div>

      {/* Answer input */}
      <div className="flex items-center justify-center gap-3 px-5 pb-3">
        <span className="text-sm text-slate-600 font-bold">
          {mode === 'total' ? t.total : t.change}
        </span>
        <input
          type="text"
          inputMode="decimal"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          disabled={submitted}
          placeholder="0,00"
          className="w-28 text-center text-xl font-black text-slate-800 border-2 border-green-300 rounded-xl py-2 bg-white focus:border-green-500 focus:outline-none disabled:opacity-60"
        />
        <span className="text-lg font-bold text-green-700">{t.currency}</span>
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
              disabled={!inputVal.trim()}
              className="w-full py-3 rounded-xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white font-bold text-sm hover:bg-green-600 active:scale-[0.98] transition-all"
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

export default MoneyCalculator;
