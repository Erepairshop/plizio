'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface TrapezoidAreaCalcProps {
  baseA?: number;
  baseB?: number;
  height?: number;
  shapeType?: 'trapezoid' | 'parallelogram';
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Terület', hint: 'Számítsd ki a terület képlettel!',
    submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó!', tryAgain: 'Újra',
    trapFormula: 'T = (a + b) / 2 × m', paraFormula: 'T = a × m',
    base: 'alap', height: 'magasság', unit: 'cm²',
  },
  de: {
    title: 'Flächeninhalt', hint: 'Berechne die Fläche mit der Formel!',
    submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch!', tryAgain: 'Nochmal',
    trapFormula: 'A = (a + b) / 2 × h', paraFormula: 'A = a × h',
    base: 'Seite', height: 'Höhe', unit: 'cm²',
  },
  en: {
    title: 'Area', hint: 'Calculate the area using the formula!',
    submit: 'Check', correct: 'Correct!', incorrect: 'Not right!', tryAgain: 'Retry',
    trapFormula: 'A = (a + b) / 2 × h', paraFormula: 'A = a × h',
    base: 'side', height: 'height', unit: 'cm²',
  },
  ro: {
    title: 'Arie', hint: 'Calculează aria cu formula!',
    submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit!', tryAgain: 'Din nou',
    trapFormula: 'A = (a + b) / 2 × î', paraFormula: 'A = a × î',
    base: 'bază', height: 'înălțime', unit: 'cm²',
  },
};

function makeChoices(correct: number): number[] {
  const opts = new Set<number>([correct]);
  const candidates = [correct + 2, correct - 2, correct * 2, Math.floor(correct / 2),
    correct + 4, correct - 4, correct + 6, correct - 6];
  for (const c of candidates.sort(() => Math.random() - 0.5)) {
    if (c > 0 && c !== correct) opts.add(c);
    if (opts.size >= 4) break;
  }
  return Array.from(opts).sort(() => Math.random() - 0.5);
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const TrapezoidAreaCalc: React.FC<TrapezoidAreaCalcProps> = ({
  baseA: propA,
  baseB: propB,
  height: propH,
  shapeType: propShape,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { a, b, h, shape, correctArea, choices } = useMemo(() => {
    const shp: 'trapezoid' | 'parallelogram' = propShape ?? (Math.random() > 0.5 ? 'trapezoid' : 'parallelogram');
    const pa = propA ?? (3 + Math.floor(Math.random() * 8));
    const pb = shp === 'trapezoid' ? (propB ?? (pa + 1 + Math.floor(Math.random() * 6))) : pa;
    const ph = propH ?? (2 + Math.floor(Math.random() * 7));
    const area = shp === 'trapezoid' ? ((pa + pb) / 2) * ph : pa * ph;
    return { a: pa, b: pb, h: ph, shape: shp, correctArea: area, choices: makeChoices(area) };
  }, [propA, propB, propH, propShape]); // eslint-disable-line react-hooks/exhaustive-deps

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
    const correct = selected === String(correctArea);
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

  // SVG shape drawing
  const SVG_W = 220, SVG_H = 140;
  const SCALE = 12;
  // Trapezoid: bottom base centered, top base centered
  const bottomW = b * SCALE;
  const topW = a * SCALE;
  const heightPx = Math.min(h * SCALE, 80);
  const cx = SVG_W / 2;
  const bottomY = SVG_H - 25;
  const topY = bottomY - heightPx;

  const x1 = cx - bottomW / 2; // bottom-left
  const x2 = cx + bottomW / 2; // bottom-right
  const x3 = cx + topW / 2;    // top-right
  const x4 = cx - topW / 2;    // top-left

  const shapeColor = '#6366f1';

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center">
            <span className="text-white font-black text-xs">cm²</span>
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
        </div>
      )}

      {/* Hint */}
      <p className="text-xs font-semibold text-center text-green-700 px-5 pt-3 pb-1">{t.hint}</p>

      {/* Formula badge */}
      <div className="flex justify-center pb-2">
        <div className="bg-white rounded-xl px-3 py-1 border-2 border-green-200 text-xs font-bold text-green-700">
          {shape === 'trapezoid' ? t.trapFormula : t.paraFormula}
        </div>
      </div>

      {/* SVG shape */}
      <div className="flex justify-center px-4 pb-3">
        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-2 inline-block">
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} style={{ width: SVG_W, height: SVG_H }}>
            {/* Shape */}
            <polygon
              points={`${x1},${bottomY} ${x2},${bottomY} ${x3},${topY} ${x4},${topY}`}
              fill={`${shapeColor}22`}
              stroke={shapeColor}
              strokeWidth={2}
            />
            {/* Height line */}
            <line x1={cx} y1={bottomY} x2={cx} y2={topY} stroke={shapeColor} strokeWidth={1.5} strokeDasharray="4,3" />
            {/* Height label */}
            <text x={cx + 5} y={(bottomY + topY) / 2 + 4} fontSize={10} fill={shapeColor} fontWeight="bold">h={h}</text>
            {/* Bottom base label */}
            <text x={cx} y={bottomY + 14} textAnchor="middle" fontSize={10} fill="#374151" fontWeight="bold">
              {shape === 'trapezoid' ? `b=${b}` : `a=${a}`}
            </text>
            {/* Top base label (only for trapezoid) */}
            {shape === 'trapezoid' && (
              <text x={cx} y={topY - 5} textAnchor="middle" fontSize={10} fill="#374151" fontWeight="bold">a={a}</text>
            )}
          </svg>
        </div>
      </div>

      {/* Choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val, i) => {
          const valStr = String(val);
          const isSelected = selected === valStr;
          const isCorrectVal = val === correctArea;
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
                  : isSelected ? 'text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700 hover:bg-green-50'
              }`}
              style={isSelected && !submitted ? { backgroundColor: color, borderColor: color } : {}}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {val} {t.unit}
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
              className="w-full py-3 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed">
              {t.submit}
            </button>
          ) : (
            <button onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-all">
              <RotateCcw size={16} />{t.tryAgain}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default TrapezoidAreaCalc;
