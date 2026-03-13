'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface DivisionShareProps {
  total?: number;
  groups?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Oszd el egyenlően!',
    hint: 'Hány kerül minden csoportba?',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem jó. Próbáld újra!',
    tryAgain: 'Újra',
    itemsTotal: 'elem összesen',
    groups: 'csoport',
    perGroup: 'csoportonként?',
    yourAnswer: 'Válaszod:',
  },
  de: {
    title: 'Teile gleichmäßig auf!',
    hint: 'Wie viele kommen in jede Gruppe?',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Falsch. Nochmal!',
    tryAgain: 'Nochmal',
    itemsTotal: 'Elemente insgesamt',
    groups: 'Gruppen',
    perGroup: 'pro Gruppe?',
    yourAnswer: 'Deine Antwort:',
  },
  en: {
    title: 'Share equally!',
    hint: 'How many go into each group?',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    itemsTotal: 'items total',
    groups: 'groups',
    perGroup: 'per group?',
    yourAnswer: 'Your answer:',
  },
  ro: {
    title: 'Împarte în mod egal!',
    hint: 'Câte intră în fiecare grup?',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Greșit. Încearcă din nou!',
    tryAgain: 'Din nou',
    itemsTotal: 'elemente total',
    groups: 'grupe',
    perGroup: 'per grupă?',
    yourAnswer: 'Răspunsul tău:',
  },
};

// Nice item emoji sets (one per problem instance)
const ITEM_SETS = ['🍎', '⭐', '🔵', '🟡', '❤️', '🍪', '🏀', '🌟', '🦋', '🎈'];

const DivisionShare: React.FC<DivisionShareProps> = ({
  total: propTotal,
  groups: propGroups,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { total, groups, perGroup, emoji } = useMemo(() => {
    const g = propGroups ?? (Math.floor(Math.random() * 5) + 2); // 2–6 groups
    const pp = Math.floor(Math.random() * 7) + 2; // 2–8 per group
    const tot = propTotal ?? g * pp;
    const em = ITEM_SETS[Math.floor(Math.random() * ITEM_SETS.length)];
    return { total: tot, groups: g, perGroup: tot / g, emoji: em };
  }, [propTotal, propGroups]);

  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

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
    const isCorrect = ans === perGroup;
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
    setActiveGroup(null);
  };

  // Layout: groups as boxes with items inside
  // Limit visual items per group for readability
  const maxVisualPerGroup = Math.min(perGroup, 8);
  const showingAll = perGroup <= 8;

  // Group box colors
  const GROUP_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #e9d5ff 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center">
              <span className="text-white font-black text-base">÷</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Summary badges */}
      <div className="flex flex-wrap justify-center gap-2 pb-3 px-4">
        <div className="bg-purple-600 text-white px-4 py-1.5 rounded-full font-bold text-sm">
          {total} {t.itemsTotal}
        </div>
        <div className="text-slate-500 font-black text-xl self-center">÷</div>
        <div className="bg-purple-400 text-white px-4 py-1.5 rounded-full font-bold text-sm">
          {groups} {t.groups}
        </div>
        <div className="text-slate-500 font-black text-xl self-center">=</div>
        <div className="bg-white border-2 border-purple-300 text-purple-600 px-4 py-1.5 rounded-full font-bold text-sm">
          {t.perGroup}
        </div>
      </div>

      {/* Visual: groups as cards */}
      <div className="px-4 pb-4">
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${Math.min(groups, 3)}, 1fr)` }}
        >
          {Array.from({ length: groups }, (_, g) => {
            const color = GROUP_COLORS[g % GROUP_COLORS.length];
            const isActive = activeGroup === g;
            return (
              <motion.div
                key={g}
                className="rounded-xl border-2 p-2 flex flex-col items-center gap-1 cursor-pointer transition-all"
                style={{
                  borderColor: color,
                  backgroundColor: isActive ? `${color}22` : 'white',
                }}
                onMouseEnter={() => setActiveGroup(g)}
                onMouseLeave={() => setActiveGroup(null)}
                whileTap={{ scale: 0.97 }}
              >
                {/* Group label */}
                <div className="text-xs font-bold" style={{ color }}>
                  {g + 1}
                </div>
                {/* Items */}
                <div className="flex flex-wrap justify-center gap-0.5">
                  {Array.from({ length: maxVisualPerGroup }, (_, i) => (
                    <motion.span
                      key={i}
                      className="text-base leading-none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: g * 0.05 + i * 0.02 }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                  {!showingAll && (
                    <span className="text-xs font-bold text-slate-400 self-center ml-0.5">
                      …{perGroup - maxVisualPerGroup}
                    </span>
                  )}
                </div>
                {/* Count badge */}
                <div
                  className="text-xs font-extrabold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: color, color: 'white' }}
                >
                  {submitted ? perGroup : '?'}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Division equation + input */}
      <div className="px-5 pb-4 flex flex-col items-center gap-2">
        <div className="text-sm font-bold text-slate-500">{t.yourAnswer}</div>
        <div className="flex items-center gap-2">
          <span className="text-slate-600 font-bold text-lg">{total} ÷ {groups} =</span>
          <input
            type="number"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit()}
            disabled={submitted}
            placeholder="?"
            className="w-24 text-center text-2xl font-black text-slate-800 border-2 border-purple-400 rounded-xl py-2 bg-white focus:border-purple-600 focus:outline-none disabled:opacity-60 appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
        </div>
        {submitted && feedback === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold text-purple-700 bg-purple-50 px-4 py-1.5 rounded-full border border-purple-200"
          >
            ✓ {total} ÷ {groups} = {perGroup}
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

export default DivisionShare;
