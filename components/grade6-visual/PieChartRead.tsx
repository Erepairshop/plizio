'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface PieChartReadProps {
  slices?: { label: string; value: number; color: string }[];
  targetIndex?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Kördiagram', hint: 'Hány százalékot tesz ki a kiemelt cikk?', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó!', tryAgain: 'Újra' },
  de: { title: 'Kreisdiagramm', hint: 'Wie viel Prozent hat das markierte Segment?', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch!', tryAgain: 'Nochmal' },
  en: { title: 'Pie Chart', hint: 'What percentage is the highlighted slice?', submit: 'Check', correct: 'Correct!', incorrect: 'Not right!', tryAgain: 'Retry' },
  ro: { title: 'Diagramă circulară', hint: 'Ce procent reprezintă felul evidențiat?', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit!', tryAgain: 'Din nou' },
};

const SLICE_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444'];

// Pre-defined clean percentage distributions
const DISTRIBUTIONS = [
  [50, 30, 20],
  [40, 35, 25],
  [60, 25, 15],
  [50, 25, 25],
  [40, 30, 20, 10],
  [25, 25, 25, 25],
  [50, 20, 20, 10],
  [45, 30, 15, 10],
];

function makeChoices(correct: number): number[] {
  const opts = new Set<number>([correct]);
  const deltas = [-10, 10, -5, 5, -15, 15, -20, 20].sort(() => Math.random() - 0.5);
  for (const d of deltas) {
    const c = correct + d;
    if (c > 0 && c < 100 && c !== correct) opts.add(c);
    if (opts.size >= 4) break;
  }
  while (opts.size < 4) {
    const fallback = Math.floor(Math.random() * 9 + 1) * 10;
    if (fallback !== correct) opts.add(fallback);
  }
  return Array.from(opts).sort(() => Math.random() - 0.5);
}

// Draw a pie slice path
function pieSlicePath(cx: number, cy: number, r: number, startAngle: number, endAngle: number): string {
  const start = (startAngle - 90) * Math.PI / 180;
  const end = (endAngle - 90) * Math.PI / 180;
  const x1 = cx + r * Math.cos(start);
  const y1 = cy + r * Math.sin(start);
  const x2 = cx + r * Math.cos(end);
  const y2 = cy + r * Math.sin(end);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx},${cy} L ${x1},${y1} A ${r},${r} 0 ${largeArc},1 ${x2},${y2} Z`;
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const PieChartRead: React.FC<PieChartReadProps> = ({
  slices: propSlices,
  targetIndex: propTarget,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { slices, targetIdx, correctPct, choices } = useMemo(() => {
    let vals: number[];
    if (propSlices) {
      vals = propSlices.map(s => s.value);
    } else {
      vals = DISTRIBUTIONS[Math.floor(Math.random() * DISTRIBUTIONS.length)];
    }
    const tIdx = propTarget ?? Math.floor(Math.random() * vals.length);
    const sl = vals.map((v, i) => ({ value: v, color: SLICE_COLORS[i % SLICE_COLORS.length] }));
    const correct = vals[tIdx];
    return { slices: sl, targetIdx: tIdx, correctPct: correct, choices: makeChoices(correct) };
  }, [propSlices, propTarget]); // eslint-disable-line react-hooks/exhaustive-deps

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
    const correct = selected === String(correctPct);
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

  // Build pie slices
  const CX = 90, CY = 90, R = 72;
  const arcs: { path: string; color: string; labelAngle: number }[] = [];
  let cumAngle = 0;
  const total = slices.reduce((s, sl) => s + sl.value, 0);
  for (let i = 0; i < slices.length; i++) {
    const angle = (slices[i].value / total) * 360;
    const midAngle = cumAngle + angle / 2;
    arcs.push({
      path: pieSlicePath(CX, CY, R, cumAngle, cumAngle + angle),
      color: slices[i].color,
      labelAngle: midAngle,
    });
    cumAngle += angle;
  }

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 50%, #ede9fe 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center">
            <span className="text-white font-black text-base">%</span>
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
        </div>
      )}

      {/* Hint */}
      <p className="text-xs font-semibold text-center text-purple-700 px-5 pt-3 pb-1">{t.hint}</p>

      {/* Pie chart */}
      <div className="flex justify-center px-4 pb-3">
        <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-3 inline-block">
          <svg viewBox="0 0 180 180" style={{ width: 180, height: 180 }}>
            {arcs.map((arc, i) => {
              const isTarget = i === targetIdx;
              const midRad = (arc.labelAngle - 90) * Math.PI / 180;
              const labelR = R * 0.65;
              const lx = CX + labelR * Math.cos(midRad);
              const ly = CY + labelR * Math.sin(midRad);
              return (
                <g key={i}>
                  <path
                    d={arc.path}
                    fill={arc.color}
                    opacity={isTarget ? 1 : 0.45}
                    stroke="white"
                    strokeWidth={2}
                  />
                  {!isTarget && (
                    <text x={lx} y={ly + 4} textAnchor="middle" fontSize={10} fontWeight="bold" fill="white">
                      {slices[i].value}%
                    </text>
                  )}
                  {isTarget && (
                    <>
                      <text x={lx} y={ly + 4} textAnchor="middle" fontSize={11} fontWeight="bold" fill="white">?%</text>
                      {/* Highlight ring around target */}
                      <path d={arc.path} fill="none" stroke="white" strokeWidth={3} opacity={0.9} />
                    </>
                  )}
                </g>
              );
            })}
            {/* Center hole */}
            <circle cx={CX} cy={CY} r={24} fill="white" />
            <text x={CX} y={CY + 5} textAnchor="middle" fontSize={12} fontWeight="bold" fill={slices[targetIdx]?.color ?? '#6366f1'}>?%</text>
          </svg>
        </div>
      </div>

      {/* Choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val, i) => {
          const valStr = String(val);
          const isSelected = selected === valStr;
          const isCorrectVal = val === correctPct;
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
                  : isSelected ? 'text-white shadow-lg' : 'bg-white border-slate-200 text-slate-700 hover:bg-purple-50'
              }`}
              style={isSelected && !submitted ? { backgroundColor: color, borderColor: color } : {}}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {val}%
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
              className="w-full py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed">
              {t.submit}
            </button>
          ) : (
            <button onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 text-white font-bold text-sm hover:bg-purple-700 transition-all">
              <RotateCcw size={16} />{t.tryAgain}
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default PieChartRead;
