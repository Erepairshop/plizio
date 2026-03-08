'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Grid3X3 } from 'lucide-react';
import { playCorrect, playIncorrect, playClick, playSelect } from '@/lib/soundEffects';

interface GridAreaCounterProps {
  /** Szélesség négyzetekben */
  width?: number;
  /** Magasság négyzetekben */
  height?: number;
  /** Mi a feladat: 'area' = négyzetek száma, 'perimeter' = kerület */
  mode?: 'area' | 'perimeter';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  language?: 'hu' | 'de' | 'en' | 'ro';
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    areaTitle: 'Számold meg a négyzeteket!',
    perimeterTitle: 'Számold ki a kerületet!',
    areaHint: 'Kattints a négyzetekre a számláláshoz, vagy írd be az összeget.',
    perimeterHint: 'Számold össze az oldalhosszakat! Egy négyzet oldala = 1 cm.',
    answer: 'Válaszod:',
    unit: 'négyzet',
    unitPeri: 'cm',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
    width: 'Szélesség',
    height: 'Magasság',
  },
  de: {
    areaTitle: 'Zähle die Kästchen!',
    perimeterTitle: 'Berechne den Umfang!',
    areaHint: 'Klicke auf die Kästchen zum Zählen oder gib die Summe ein.',
    perimeterHint: 'Zähle alle Seitenlängen! Ein Kästchen = 1 cm.',
    answer: 'Deine Antwort:',
    unit: 'Kästchen',
    unitPeri: 'cm',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
    width: 'Breite',
    height: 'Höhe',
  },
  en: {
    areaTitle: 'Count the squares!',
    perimeterTitle: 'Calculate the perimeter!',
    areaHint: 'Click the squares to count them, or type the total.',
    perimeterHint: 'Add all side lengths! One square side = 1 cm.',
    answer: 'Your answer:',
    unit: 'squares',
    unitPeri: 'cm',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    width: 'Width',
    height: 'Height',
  },
  ro: {
    areaTitle: 'Numără pătratele!',
    perimeterTitle: 'Calculează perimetrul!',
    areaHint: 'Faceți clic pe pătrate pentru a le număra sau introduceți totalul.',
    perimeterHint: 'Adunați toate laturile! O latură = 1 cm.',
    answer: 'Răspunsul tău:',
    unit: 'pătrate',
    unitPeri: 'cm',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
    width: 'Lățime',
    height: 'Înălțime',
  },
};

const CELL = 36; // px méret per négyzet
const GAP = 2;

const GridAreaCounter: React.FC<GridAreaCounterProps> = ({
  width: propW,
  height: propH,
  mode = 'area',
  onAnswer,
  language = 'de',
}) => {
  const t = LABELS[language] || LABELS.en;

  const gridW = useMemo(() => propW ?? (Math.floor(Math.random() * 5) + 3), [propW]); // 3-7
  const gridH = useMemo(() => propH ?? (Math.floor(Math.random() * 4) + 2), [propH]); // 2-5

  const correctAnswer = mode === 'area' ? gridW * gridH : 2 * (gridW + gridH);

  const [clicked, setClicked] = useState<Set<string>>(new Set());
  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleCell = (r: number, c: number) => {
    if (submitted) return;
    playSelect();
    const key = `${r}-${c}`;
    setClicked(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  const handleSubmit = () => {
    const userAnswer = parseInt(inputVal) || clicked.size;
    if (userAnswer === 0) return;
    playClick();
    const isCorrect = userAnswer === correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, userAnswer), 1800);
  };

  const handleReset = () => {
    playClick();
    setClicked(new Set());
    setInputVal('');
    setFeedback(null);
    setSubmitted(false);
  };

  const totalGridW = gridW * (CELL + GAP) - GAP;
  const totalGridH = gridH * (CELL + GAP) - GAP;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fef3c7 0%, #fffbeb 50%, #fef9c3 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center">
            <Grid3X3 size={18} className="text-white" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">
            {mode === 'area' ? t.areaTitle : t.perimeterTitle}
          </h3>
        </div>
        <p className="text-sm text-slate-500 ml-12">
          {mode === 'area' ? t.areaHint : t.perimeterHint}
        </p>
      </div>

      {/* Méretek badge */}
      <div className="flex justify-center gap-3 pb-4">
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">
          {t.width}: {gridW} cm
        </span>
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">
          {t.height}: {gridH} cm
        </span>
      </div>

      {/* Grid */}
      <div className="flex justify-center pb-4 px-4">
        <svg
          width={totalGridW + 20}
          height={totalGridH + 20}
          viewBox={`-10 -10 ${totalGridW + 20} ${totalGridH + 20}`}
          className="select-none"
        >
          {Array.from({ length: gridH }, (_, r) =>
            Array.from({ length: gridW }, (_, c) => {
              const key = `${r}-${c}`;
              const isClicked = clicked.has(key);
              const x = c * (CELL + GAP);
              const y = r * (CELL + GAP);
              return (
                <g key={key} onClick={() => toggleCell(r, c)} className="cursor-pointer">
                  <rect
                    x={x} y={y} width={CELL} height={CELL} rx={4}
                    fill={isClicked ? '#fbbf24' : '#fffef7'}
                    stroke={isClicked ? '#d97706' : '#d4d4d8'}
                    strokeWidth={isClicked ? 2.5 : 1.5}
                  />
                  {isClicked && (
                    <text
                      x={x + CELL / 2} y={y + CELL / 2}
                      textAnchor="middle" dy="0.35em"
                      fontSize={14} fontWeight={800} fill="#92400e"
                    >
                      ✓
                    </text>
                  )}
                </g>
              );
            })
          )}
        </svg>
      </div>

      {/* Számláló + Input */}
      <div className="flex items-center justify-center gap-4 px-5 pb-3">
        <span className="text-sm text-slate-500 font-medium">{t.answer}</span>
        {mode === 'area' && clicked.size > 0 && !inputVal && (
          <span className="text-2xl font-black text-amber-600">{clicked.size} {t.unit}</span>
        )}
        <input
          type="number"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          disabled={submitted}
          placeholder={clicked.size > 0 ? String(clicked.size) : '?'}
          className="w-20 text-center text-xl font-black border-2 border-amber-300 rounded-xl py-2 bg-white focus:border-amber-500 focus:outline-none disabled:opacity-60"
        />
        <span className="text-sm text-slate-500 font-medium">
          {mode === 'area' ? t.unit : t.unitPeri}
        </span>
      </div>

      {/* Feedback + Gombok */}
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
            disabled={!inputVal && clicked.size === 0}
            className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            {t.submit}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 active:scale-[0.98] transition-all"
          >
            <RotateCcw size={16} />
            {t.tryAgain}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default GridAreaCounter;
