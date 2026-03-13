'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Hash } from 'lucide-react';
import { playCorrect, playIncorrect, playClick, playSelect } from '@/lib/soundEffects';

interface PlaceValueTableMillionProps {
  number?: number;
  onAnswer: (isCorrect: boolean, answer: number) => void;
  language?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Bontsd fel a számot!', hint: 'Írd be minden helyiérték számjegyét.', submit: 'Ellenőrzés', correct: 'Helyes! Szuper!', incorrect: 'Nem stimmel. Próbáld újra!', tryAgain: 'Újra' },
  de: { title: 'Zerlege die Zahl!', hint: 'Trage die Ziffer für jeden Stellenwert ein.', submit: 'Prüfen', correct: 'Richtig! Super!', incorrect: 'Falsch. Versuche nochmal!', tryAgain: 'Nochmal' },
  en: { title: 'Break down the number!', hint: 'Write the digit for each place value.', submit: 'Check', correct: 'Correct! Great!', incorrect: 'Not right. Try again!', tryAgain: 'Retry' },
  ro: { title: 'Descompune numărul!', hint: 'Completează cifra pentru fiecare poziție.', submit: 'Verificare', correct: 'Corect! Super!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou' },
};

const PLACES = [
  { key: 'M',  factor: 1000000, color: '#312e81', labels: { hu: 'M',   de: 'M',   en: 'M',   ro: 'M'   } },
  { key: 'HT', factor: 100000,  color: '#4338ca', labels: { hu: 'SzE', de: 'HT',  en: 'HTh', ro: 'SzM' } },
  { key: 'ZT', factor: 10000,   color: '#4f46e5', labels: { hu: 'TzE', de: 'ZT',  en: 'TTh', ro: 'ZM'  } },
  { key: 'T',  factor: 1000,    color: '#6366f1', labels: { hu: 'E',   de: 'T',   en: 'Th',  ro: 'M'   } },
  { key: 'H',  factor: 100,     color: '#818cf8', labels: { hu: 'Sz',  de: 'H',   en: 'H',   ro: 'S'   } },
  { key: 'Z',  factor: 10,      color: '#a5b4fc', labels: { hu: 'T',   de: 'Z',   en: 'T',   ro: 'Z'   } },
  { key: 'E',  factor: 1,       color: '#c7d2fe', labels: { hu: 'E',   de: 'E',   en: 'O',   ro: 'U'   } },
];

const PlaceValueTableMillion: React.FC<PlaceValueTableMillionProps> = ({
  number: propNumber,
  onAnswer,
  language = 'de',
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;
  const lang = language as keyof (typeof PLACES)[0]['labels'];

  const [targetNumber] = useState<number>(() => {
    if (propNumber) return propNumber;
    // 6 or 7 digit number, no leading zeros
    const digits = Math.random() < 0.5 ? 6 : 7;
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min)) + min;
  });

  const digitStr = String(targetNumber);
  const activePlaces = PLACES.slice(7 - digitStr.length);

  const correctDigits: Record<string, number> = {};
  activePlaces.forEach((p, i) => {
    correctDigits[p.key] = parseInt(digitStr[i]) ?? 0;
  });

  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;

  React.useEffect(() => {
    if (!embedded || !onValueChangeRef.current) return;
    const allFilled = activePlaces.every(p => inputs[p.key] !== undefined && inputs[p.key] !== '');
    if (allFilled) {
      onValueChangeRef.current(activePlaces.map(p => inputs[p.key] ?? '0').join(''));
    }
  }, [embedded, inputs, activePlaces]);

  const handleInput = (key: string, val: string) => {
    if (submitted) return;
    playSelect();
    setInputs(prev => ({ ...prev, [key]: val }));
  };

  const handleSubmit = () => {
    if (embedded) return;
    playClick();
    const allCorrect = activePlaces.every(p => parseInt(inputs[p.key] ?? '0') === correctDigits[p.key]);
    setFeedback(allCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (allCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(allCorrect, targetNumber), 1800);
  };

  const handleReset = () => {
    playClick();
    setInputs({});
    setFeedback(null);
    setSubmitted(false);
  };

  const canSubmit = activePlaces.some(p => inputs[p.key] !== undefined && inputs[p.key] !== '');

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
              <Hash size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-slate-500 px-5 pt-3 pb-1">{t.hint}</p>

      {/* Target number display */}
      <div className="flex justify-center pb-4 pt-2">
        <div className="bg-white border-2 border-indigo-400 rounded-2xl px-8 py-3 shadow-sm">
          <span className="text-4xl font-black text-indigo-700 tracking-wider">
            {targetNumber.toLocaleString('de-DE')}
          </span>
        </div>
      </div>

      {/* Place value table */}
      <div className={embedded ? 'px-2 pb-2' : 'px-4 pb-4'}>
        <div className="bg-white rounded-xl border-2 border-indigo-200 overflow-hidden">
          {/* Header row: place labels */}
          <div className="flex">
            {activePlaces.map(p => (
              <div
                key={p.key}
                className="flex-1 text-center py-2 font-extrabold text-xs border-r last:border-r-0"
                style={{ backgroundColor: p.color, color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}
              >
                {p.labels[lang]}
              </div>
            ))}
          </div>
          {/* Factor row */}
          <div className="flex border-t border-indigo-100">
            {activePlaces.map(p => (
              <div key={p.key} className="flex-1 text-center py-1 border-r last:border-r-0 border-indigo-100">
                <span className="text-[9px] font-bold text-indigo-400">
                  {p.factor >= 1000000
                    ? (language === 'en' ? '1M' : '1 Mio')
                    : p.factor >= 1000
                    ? `${p.factor / 1000}${language === 'en' ? 'K' : language === 'hu' ? 'E' : 'T'}`
                    : p.factor}
                </span>
              </div>
            ))}
          </div>
          {/* Input row */}
          <div className="flex border-t border-indigo-100">
            {activePlaces.map(p => (
              <div key={p.key} className="flex-1 flex items-center justify-center py-3 border-r last:border-r-0 border-indigo-100">
                <input
                  type="number"
                  min={0}
                  max={9}
                  value={inputs[p.key] ?? ''}
                  onChange={e => handleInput(p.key, e.target.value)}
                  disabled={submitted}
                  className="w-10 h-10 text-center text-xl font-black border-2 border-indigo-300 rounded-xl bg-indigo-50 focus:border-indigo-600 focus:outline-none disabled:opacity-60 appearance-none"
                  style={{ MozAppearance: 'textfield' }}
                />
              </div>
            ))}
          </div>
          {/* Answer row: shows correct digits after submit */}
          {submitted && (
            <div className="flex border-t border-indigo-200">
              {activePlaces.map(p => {
                const userVal = parseInt(inputs[p.key] ?? '0');
                const correct = correctDigits[p.key];
                const ok = userVal === correct;
                return (
                  <div key={p.key} className={`flex-1 flex items-center justify-center py-1 border-r last:border-r-0 border-indigo-100 ${ok ? 'bg-green-50' : 'bg-red-50'}`}>
                    <span className={`text-sm font-bold ${ok ? 'text-green-600' : 'text-red-500'}`}>
                      {ok ? '✓' : correct}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
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
              disabled={!canSubmit}
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

export default PlaceValueTableMillion;
