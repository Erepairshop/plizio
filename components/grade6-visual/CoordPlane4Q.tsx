'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface CoordPlane4QProps {
  pointX?: number;
  pointY?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Koordinátasík', hint: 'Melyik negyedben van a pont?', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó!', tryAgain: 'Újra', q1: 'I. negyed', q2: 'II. negyed', q3: 'III. negyed', q4: 'IV. negyed' },
  de: { title: 'Koordinatensystem', hint: 'In welchem Quadrant liegt der Punkt?', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch!', tryAgain: 'Nochmal', q1: 'I. Quadrant', q2: 'II. Quadrant', q3: 'III. Quadrant', q4: 'IV. Quadrant' },
  en: { title: 'Coordinate Plane', hint: 'In which quadrant is the point?', submit: 'Check', correct: 'Correct!', incorrect: 'Not right!', tryAgain: 'Retry', q1: 'Quadrant I', q2: 'Quadrant II', q3: 'Quadrant III', q4: 'Quadrant IV' },
  ro: { title: 'Plan de coordonate', hint: 'În ce cadran se află punctul?', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit!', tryAgain: 'Din nou', q1: 'Cadranul I', q2: 'Cadranul II', q3: 'Cadranul III', q4: 'Cadranul IV' },
};

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
const GRID_SIZE = 5;
const SVG_W = 220, SVG_H = 220;
const CX = SVG_W / 2, CY = SVG_H / 2;
const CELL = (SVG_W - 40) / (GRID_SIZE * 2);
const toSvgX = (x: number) => CX + x * CELL;
const toSvgY = (y: number) => CY - y * CELL;

const CoordPlane4Q: React.FC<CoordPlane4QProps> = ({
  pointX: propX,
  pointY: propY,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { px, py, quadrant, choices } = useMemo(() => {
    const candidates = [-4, -3, -2, -1, 1, 2, 3, 4];
    const x = propX ?? candidates[Math.floor(Math.random() * candidates.length)];
    const y = propY ?? candidates[Math.floor(Math.random() * candidates.length)];
    const q = x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x < 0 && y < 0 ? 3 : 4;
    return { px: x, py: y, quadrant: q, choices: [1, 2, 3, 4].sort(() => Math.random() - 0.5) };
  }, [propX, propY]); // eslint-disable-line react-hooks/exhaustive-deps

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
    const correct = selected === String(quadrant);
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

  const choiceLabels: Record<number, string> = { 1: t.q1, 2: t.q2, 3: t.q3, 4: t.q4 };

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #ddd6fe 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
            <span className="text-white font-black text-xs">XY</span>
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
        </div>
      )}

      {/* Hint — always visible */}
      <p className="text-xs font-semibold text-center text-indigo-700 px-5 pt-3 pb-1">{t.hint}</p>

      {/* Point label */}
      <div className="flex justify-center pb-2">
        <div className="bg-white rounded-xl px-4 py-1 border-2 border-indigo-200 text-base font-extrabold text-indigo-700">
          P = ({px}, {py})
        </div>
      </div>

      {/* SVG Grid */}
      <div className="flex justify-center px-4 pb-3">
        <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-2 inline-block">
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} style={{ width: SVG_W, height: SVG_H }}>
            {/* Grid lines */}
            {Array.from({ length: GRID_SIZE * 2 + 1 }, (_, i) => i - GRID_SIZE).map(n => (
              <g key={n}>
                <line x1={toSvgX(n)} y1={15} x2={toSvgX(n)} y2={SVG_H - 15}
                  stroke={n === 0 ? '#94a3b8' : '#e2e8f0'} strokeWidth={n === 0 ? 1 : 0.5} />
                <line x1={15} y1={toSvgY(n)} x2={SVG_W - 15} y2={toSvgY(n)}
                  stroke={n === 0 ? '#94a3b8' : '#e2e8f0'} strokeWidth={n === 0 ? 1 : 0.5} />
              </g>
            ))}
            {/* Axes */}
            <line x1={18} y1={CY} x2={SVG_W - 8} y2={CY} stroke="#374151" strokeWidth={2} />
            <polygon points={`${SVG_W - 8},${CY} ${SVG_W - 14},${CY - 4} ${SVG_W - 14},${CY + 4}`} fill="#374151" />
            <line x1={CX} y1={SVG_H - 18} x2={CX} y2={8} stroke="#374151" strokeWidth={2} />
            <polygon points={`${CX},${8} ${CX - 4},${14} ${CX + 4},${14}`} fill="#374151" />
            {/* Tick labels */}
            {[-4, -2, 2, 4].map(n => (
              <g key={n}>
                <text x={toSvgX(n)} y={CY + 14} textAnchor="middle" fontSize={8} fill="#6b7280">{n}</text>
                <text x={CX - 10} y={toSvgY(n) + 3} textAnchor="middle" fontSize={8} fill="#6b7280">{n}</text>
              </g>
            ))}
            {/* Axis labels */}
            <text x={SVG_W - 6} y={CY - 5} fontSize={10} fontWeight="bold" fill="#374151">x</text>
            <text x={CX + 6} y={14} fontSize={10} fontWeight="bold" fill="#374151">y</text>
            {/* Quadrant labels */}
            <text x={CX + 10} y={CY - 10} fontSize={8} fill="#c7d2fe" fontWeight="bold">I</text>
            <text x={CX - 20} y={CY - 10} fontSize={8} fill="#c7d2fe" fontWeight="bold">II</text>
            <text x={CX - 20} y={CY + 18} fontSize={8} fill="#c7d2fe" fontWeight="bold">III</text>
            <text x={CX + 10} y={CY + 18} fontSize={8} fill="#c7d2fe" fontWeight="bold">IV</text>
            {/* Point */}
            <circle cx={toSvgX(px)} cy={toSvgY(py)} r={6} fill="#6366f1" stroke="white" strokeWidth={2} />
          </svg>
        </div>
      </div>

      {/* Choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((q, i) => {
          const valStr = String(q);
          const isSelected = selected === valStr;
          const isCorrectVal = q === quadrant;
          const color = COLORS[i % COLORS.length];
          return (
            <motion.button
              key={q}
              disabled={submitted}
              onClick={() => { if (!submitted) { playClick(); setSelected(valStr); } }}
              className={`py-3 rounded-xl font-extrabold text-sm transition-all border-2 ${
                submitted
                  ? isCorrectVal ? 'bg-green-500 border-green-500 text-white'
                    : isSelected ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected ? 'text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700 hover:bg-indigo-50'
              }`}
              style={isSelected && !submitted ? { backgroundColor: color, borderColor: color } : {}}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {choiceLabels[q]}
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
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed">
              {t.submit}
            </button>
          ) : (
            <button onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-all">
              <RotateCcw size={16} />{t.tryAgain}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default CoordPlane4Q;
