'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface PerimeterCalcProps {
  shapeType?: 'rectangle' | 'square' | 'triangle' | 'pentagon';
  sides?: number[];
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Kerület kiszámítása', hint: 'Add össze az összes oldalt!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', question: 'Mi a kerülete?', unit: 'cm', yourAnswer: 'Kerület =', perimeter: 'Kerület' },
  de: { title: 'Umfang berechnen', hint: 'Addiere alle Seiten!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', question: 'Wie groß ist der Umfang?', unit: 'cm', yourAnswer: 'Umfang =', perimeter: 'Umfang' },
  en: { title: 'Calculate perimeter', hint: 'Add up all the sides!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', question: 'What is the perimeter?', unit: 'cm', yourAnswer: 'Perimeter =', perimeter: 'Perimeter' },
  ro: { title: 'Calculează perimetrul', hint: 'Adună toate laturile!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', question: 'Care este perimetrul?', unit: 'cm', yourAnswer: 'Perimetru =', perimeter: 'Perimetru' },
};

type ShapeConfig = {
  sides: number[];
  svgPoints: [number, number][];
  sideLabels: { x: number; y: number; anchor: string }[];
};

function buildShape(type: string, sides: number[]): ShapeConfig {
  const W = 200, H = 150;
  if (type === 'square') {
    const s = sides[0];
    return {
      sides: [s, s, s, s],
      svgPoints: [[30, 20], [170, 20], [170, 130], [30, 130]],
      sideLabels: [
        { x: 100, y: 10, anchor: 'middle' },  // top
        { x: 182, y: 75, anchor: 'start' },   // right
        { x: 100, y: 145, anchor: 'middle' }, // bottom
        { x: 18, y: 75, anchor: 'end' },      // left
      ],
    };
  }
  if (type === 'rectangle') {
    const [w, h] = sides;
    return {
      sides: [w, h, w, h],
      svgPoints: [[20, 25], [180, 25], [180, 125], [20, 125]],
      sideLabels: [
        { x: 100, y: 14, anchor: 'middle' },
        { x: 192, y: 75, anchor: 'start' },
        { x: 100, y: 140, anchor: 'middle' },
        { x: 8, y: 75, anchor: 'end' },
      ],
    };
  }
  if (type === 'triangle') {
    return {
      sides,
      svgPoints: [[100, 15], [180, 130], [20, 130]],
      sideLabels: [
        { x: 148, y: 68, anchor: 'start' },  // right side
        { x: 100, y: 145, anchor: 'middle' }, // bottom
        { x: 52, y: 68, anchor: 'end' },     // left side
      ],
    };
  }
  // pentagon
  const pts: [number, number][] = [
    [100, 15], [175, 65], [145, 140], [55, 140], [25, 65],
  ];
  return {
    sides,
    svgPoints: pts,
    sideLabels: [
      { x: 145, y: 35, anchor: 'start' },
      { x: 168, y: 108, anchor: 'start' },
      { x: 100, y: 150, anchor: 'middle' },
      { x: 32, y: 108, anchor: 'end' },
      { x: 55, y: 35, anchor: 'end' },
    ],
  };
}

const PerimeterCalc: React.FC<PerimeterCalcProps> = ({
  shapeType: propType,
  sides: propSides,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { shapeType, shapeCfg, correctAnswer, equationStr } = useMemo(() => {
    const types: Array<'rectangle' | 'square' | 'triangle' | 'pentagon'> = ['rectangle', 'square', 'triangle', 'pentagon'];
    const stype = propType ?? types[Math.floor(Math.random() * types.length)];

    let sides: number[];
    if (propSides) {
      sides = propSides;
    } else {
      if (stype === 'square') {
        const s = [3, 4, 5, 6, 7, 8][Math.floor(Math.random() * 6)];
        sides = [s];
      } else if (stype === 'rectangle') {
        const w = [4, 5, 6, 7, 8, 9, 10][Math.floor(Math.random() * 7)];
        const h = [2, 3, 4, 5, 6][Math.floor(Math.random() * 5)];
        sides = [w, h];
      } else if (stype === 'triangle') {
        const a = [3, 4, 5, 6, 7][Math.floor(Math.random() * 5)];
        const b = [3, 4, 5, 6, 7][Math.floor(Math.random() * 5)];
        const c = [3, 4, 5, 6, 7][Math.floor(Math.random() * 5)];
        sides = [a, b, c];
      } else {
        // pentagon — all equal for simplicity
        const s = [4, 5, 6][Math.floor(Math.random() * 3)];
        sides = [s, s, s, s, s];
      }
    }

    const cfg = buildShape(stype, sides);
    const total = cfg.sides.reduce((a, b) => a + b, 0);
    const eq = cfg.sides.join(' + ') + ' = ' + total + ' ' + t.unit;
    return { shapeType: stype, shapeCfg: cfg, correctAnswer: total, equationStr: eq };
  }, [propType, propSides, language]); // eslint-disable-line react-hooks/exhaustive-deps

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

  const pts = shapeCfg.svgPoints.map(p => p.join(',')).join(' ');

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center">
              <span className="text-white font-black text-base">⬜</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Shape SVG with side labels */}
      <div className="flex justify-center px-4 py-3">
        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-2 inline-block">
          <svg viewBox="0 0 200 160" style={{ width: 200, height: 160 }}>
            <polygon points={pts} fill="#dcfce7" stroke="#059669" strokeWidth={2.5} />
            {shapeCfg.sides.map((s, i) => {
              const lbl = shapeCfg.sideLabels[i];
              return (
                <text key={i} x={lbl.x} y={lbl.y} textAnchor={lbl.anchor as 'middle' | 'start' | 'end'} fontSize={13} fontWeight={800} fill="#065f46">
                  {s} {t.unit}
                </text>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Input */}
      <div className="px-5 pb-4 flex flex-col items-center gap-2">
        <p className="text-sm font-bold text-slate-600">{t.question}</p>
        <div className="flex items-center gap-2">
          <span className="text-slate-600 font-bold text-lg">{t.yourAnswer}</span>
          <input
            type="number"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit()}
            disabled={submitted}
            placeholder="?"
            className="w-24 text-center text-2xl font-black text-slate-800 border-2 border-emerald-400 rounded-xl py-2 bg-white focus:border-emerald-600 focus:outline-none disabled:opacity-60 appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
          <span className="text-slate-500 font-bold">{t.unit}</span>
        </div>
        {submitted && feedback === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 text-center"
          >
            ✓ {equationStr}
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
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 active:scale-[0.98] transition-all"
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

export default PerimeterCalc;
