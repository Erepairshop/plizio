'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Hash } from 'lucide-react';
import { playCorrect, playIncorrect, playClick, playSelect } from '@/lib/soundEffects';

interface PlaceValueGridProps {
  number?: number;
  digits?: number;
  onAnswer: (isCorrect: boolean, answer: number) => void;
  language?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Bontsd fel a számot!',
    hint: 'Írd be, hogy az egyes helyiértékek hányat érnek.',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
    compose: 'Állítsd össze a számot!',
    composeHint: 'Írd be a helyiértékekből álló számot.',
  },
  de: {
    title: 'Zerlege die Zahl!',
    hint: 'Trage ein, wie viel jede Stelle wert ist.',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
    compose: 'Setze die Zahl zusammen!',
    composeHint: 'Schreibe die Zahl aus den Stellenwerten.',
  },
  en: {
    title: 'Break down the number!',
    hint: 'Enter the value of each place.',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    compose: 'Compose the number!',
    composeHint: 'Write the number from the place values.',
  },
  ro: {
    title: 'Descompune numărul!',
    hint: 'Scrie valoarea fiecărei cifre.',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
    compose: 'Compune numărul!',
    composeHint: 'Scrie numărul din valorile poziționale.',
  },
};

// Place value column definitions
const PLACE_COLS: Record<string, { label: string; labelDe: string; labelEn: string; labelRo: string; factor: number; color: string }> = {
  HT: { label: 'SzE', labelDe: 'HT', labelEn: 'HTh', labelRo: 'SzM', factor: 100000, color: '#7c3aed' },
  ZT: { label: 'TzE', labelDe: 'ZT', labelEn: 'TTh', labelRo: 'ZM', factor: 10000, color: '#8b5cf6' },
  T:  { label: 'E',   labelDe: 'T',  labelEn: 'Th',  labelRo: 'M',  factor: 1000,  color: '#a78bfa' },
  H:  { label: 'Sz',  labelDe: 'H',  labelEn: 'H',   labelRo: 'S',  factor: 100,   color: '#c084fc' },
  Z:  { label: 'T',   labelDe: 'Z',  labelEn: 'T',   labelRo: 'Z',  factor: 10,    color: '#d8b4fe' },
  E:  { label: 'E',   labelDe: 'E',  labelEn: 'O',   labelRo: 'U',  factor: 1,     color: '#e9d5ff' },
};

const PLACE_ORDER = ['HT', 'ZT', 'T', 'H', 'Z', 'E'];

function getDigitCount(n: number): number {
  return String(n).length;
}

function getColLabel(key: string, lang: string): string {
  const col = PLACE_COLS[key];
  if (lang === 'hu') return col.label;
  if (lang === 'de') return col.labelDe;
  if (lang === 'ro') return col.labelRo;
  return col.labelEn;
}

const PlaceValueGrid: React.FC<PlaceValueGridProps> = ({
  number: propNumber,
  digits: propDigits,
  onAnswer,
  language = 'de',
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] || LABELS.en;

  // Generate or use provided number
  const [targetNumber] = useState(() => {
    if (propNumber) return propNumber;
    const d = propDigits || 5;
    const min = Math.pow(10, d - 1);
    const max = Math.pow(10, d) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });

  // Decide mode: decompose (break down) or compose (put together)
  const [mode] = useState<'decompose' | 'compose'>(() =>
    Math.random() > 0.5 ? 'decompose' : 'compose'
  );

  const numDigits = getDigitCount(targetNumber);
  const activeCols = PLACE_ORDER.slice(6 - numDigits);

  // For decompose: user fills in digit for each column
  // For compose: we show the digits, user writes the full number
  const correctDigits: Record<string, number> = {};
  const numStr = String(targetNumber);
  activeCols.forEach((key, i) => {
    correctDigits[key] = parseInt(numStr[i]) || 0;
  });

  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [composeInput, setComposeInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (key: string, val: string) => {
    if (submitted) return;
    playSelect();
    setInputs(prev => ({ ...prev, [key]: val }));
  };

  const handleSubmit = () => {
    playClick();

    if (mode === 'decompose') {
      const allCorrect = activeCols.every(key =>
        parseInt(inputs[key] || '0') === correctDigits[key]
      );
      setFeedback(allCorrect ? 'correct' : 'incorrect');
      setSubmitted(true);
      if (allCorrect) playCorrect(); else playIncorrect();
      setTimeout(() => onAnswer(allCorrect, targetNumber), 1800);
    } else {
      const isCorrect = parseInt(composeInput) === targetNumber;
      setFeedback(isCorrect ? 'correct' : 'incorrect');
      setSubmitted(true);
      if (isCorrect) playCorrect(); else playIncorrect();
      setTimeout(() => onAnswer(isCorrect, parseInt(composeInput) || 0), 1800);
    }
  };

  const handleReset = () => {
    playClick();
    setInputs({});
    setComposeInput('');
    setFeedback(null);
    setSubmitted(false);
  };

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current) {
      if (mode === 'decompose') {
        const allFilled = activeCols.every(key => inputs[key] !== undefined && inputs[key] !== '');
        if (allFilled) {
          const composed = activeCols.map(key => inputs[key] || '0').join('');
          onValueChangeRef.current(composed);
        }
      } else {
        if (composeInput.trim()) onValueChangeRef.current(composeInput.trim());
      }
    }
  }, [embedded, mode, inputs, composeInput, activeCols]);

  const canSubmit = mode === 'decompose'
    ? activeCols.some(key => inputs[key] !== undefined && inputs[key] !== '')
    : composeInput.trim() !== '';

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center">
              <Hash size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">
              {mode === 'decompose' ? t.title : t.compose}
            </h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">
            {mode === 'decompose' ? t.hint : t.composeHint}
          </p>
        </div>
      )}

      {/* Number display (decompose mode) */}
      {mode === 'decompose' && (
        <div className="flex justify-center pb-4">
          <div className="bg-white border-2 border-violet-300 rounded-2xl px-8 py-3">
            <span className="text-4xl font-black text-violet-700 tracking-wider">
              {targetNumber.toLocaleString('de-DE')}
            </span>
          </div>
        </div>
      )}

      {/* Place value table */}
      <div className={`${embedded ? 'px-2 pb-2' : 'px-4 pb-4'}`}>
        <div className="bg-white rounded-xl border-2 border-violet-200 overflow-hidden">
          {/* Header row */}
          <div className="flex">
            {activeCols.map(key => (
              <div
                key={key}
                className="flex-1 text-center py-2 font-extrabold text-sm border-r last:border-r-0"
                style={{ backgroundColor: PLACE_COLS[key].color, color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
              >
                {getColLabel(key, language)}
              </div>
            ))}
          </div>
          {/* Factor row */}
          <div className="flex border-t border-violet-100">
            {activeCols.map(key => (
              <div key={key} className="flex-1 text-center py-1 text-xs font-bold text-violet-400 border-r last:border-r-0 border-violet-100">
                {PLACE_COLS[key].factor.toLocaleString('de-DE')}
              </div>
            ))}
          </div>
          {/* Input/display row */}
          <div className="flex border-t border-violet-100">
            {activeCols.map(key => (
              <div key={key} className="flex-1 flex items-center justify-center py-3 border-r last:border-r-0 border-violet-100">
                {mode === 'decompose' ? (
                  <input
                    type="number"
                    min={0}
                    max={9}
                    value={inputs[key] ?? ''}
                    onChange={e => handleInputChange(key, e.target.value)}
                    disabled={submitted}
                    className="w-12 h-12 text-center text-2xl font-black border-2 border-violet-300 rounded-xl bg-violet-50 focus:border-violet-500 focus:outline-none disabled:opacity-60"
                    style={{ color: PLACE_COLS[key].color.replace('fe', '00').replace('fc', '00') }}
                  />
                ) : (
                  <div
                    className="w-12 h-12 flex items-center justify-center text-2xl font-black rounded-xl"
                    style={{ backgroundColor: PLACE_COLS[key].color, color: 'white' }}
                  >
                    {correctDigits[key]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compose input */}
      {mode === 'compose' && (
        <div className={`flex items-center justify-center gap-3 ${embedded ? 'px-3 pb-2' : 'px-5 pb-4'}`}>
          <span className="text-sm text-slate-500 font-medium">=</span>
          <input
            type="number"
            value={composeInput}
            onChange={e => setComposeInput(e.target.value)}
            disabled={submitted}
            placeholder="?"
            className="w-40 text-center text-2xl font-black border-2 border-violet-300 rounded-xl py-3 bg-white focus:border-violet-500 focus:outline-none disabled:opacity-60"
          />
        </div>
      )}

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
              disabled={!canSubmit}
              className="w-full py-3 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 active:scale-[0.98] transition-all"
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

export default PlaceValueGrid;
