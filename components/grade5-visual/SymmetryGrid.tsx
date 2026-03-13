'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface SymmetryGridProps {
  axis?: 'vertical' | 'horizontal';
  sourcePoints?: [number, number][];
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Tükrözés', hint: 'Rajzold meg a kék alak tükörképét a szaggatott vonal másik oldalán!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem egészen. Próbáld újra!', tryAgain: 'Újra', axis: 'tengellyel', clear: 'Törlés', original: 'eredeti', reflected: 'tükrözött' },
  de: { title: 'Spiegelung', hint: 'Zeichne das Spiegelbild der blauen Figur auf der anderen Seite der gestrichelten Linie!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Nicht ganz. Nochmal!', tryAgain: 'Nochmal', axis: 'Achse', clear: 'Löschen', original: 'Original', reflected: 'Spiegelbild' },
  en: { title: 'Reflection', hint: 'Draw the mirror image of the blue shape on the other side of the dashed line!', submit: 'Check', correct: 'Correct!', incorrect: 'Not quite. Try again!', tryAgain: 'Retry', axis: 'axis', clear: 'Clear', original: 'original', reflected: 'reflected' },
  ro: { title: 'Simetrie', hint: 'Desenează imaginea în oglindă a figurii albastre de cealaltă parte a liniei punctate!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Nu chiar. Încearcă din nou!', tryAgain: 'Din nou', axis: 'axă', clear: 'Șterge', original: 'original', reflected: 'reflectat' },
};

const GRID = 9; // 9×9 grid
const AXIS = 4; // axis at col 4 (vertical) or row 4 (horizontal)
const CELL = 28;

// Some interesting source shapes (points on left half: col 0-3)
const SHAPE_PRESETS: [number, number][][] = [
  [[1,1],[2,1],[3,1],[3,2],[3,3],[2,3],[1,3],[1,2]],  // rectangle-ish
  [[2,1],[3,2],[2,3],[1,2]],                           // diamond
  [[1,1],[2,1],[3,1],[3,2],[2,2],[3,3],[2,3],[1,3]],  // L+step
  [[1,2],[2,1],[3,1],[3,2],[3,3],[2,3]],              // hook
  [[1,1],[2,1],[2,2],[3,2],[3,3],[1,3],[1,2],[2,2]],  // staircase
];

function reflect(pts: [number, number][], axis: 'vertical' | 'horizontal'): [number, number][] {
  return pts.map(([c, r]) =>
    axis === 'vertical'
      ? [2 * AXIS - c, r] as [number, number]
      : [c, 2 * AXIS - r] as [number, number]
  );
}

function encodePoints(pts: [number, number][]): string {
  return pts.map(p => p.join(':')).sort().join(',');
}

const SymmetryGrid: React.FC<SymmetryGridProps> = ({
  axis: propAxis,
  sourcePoints: propSrc,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { axis, sourcePoints, correctPoints, correctEncoded } = useMemo(() => {
    const ax = propAxis ?? (Math.random() > 0.5 ? 'vertical' : 'horizontal');
    const src = propSrc ?? SHAPE_PRESETS[Math.floor(Math.random() * SHAPE_PRESETS.length)];
    const correct = reflect(src, ax);
    return { axis: ax, sourcePoints: src, correctPoints: correct, correctEncoded: encodePoints(correct) };
  }, [propAxis, propSrc]);

  const [userPoints, setUserPoints] = useState<Set<string>>(new Set());
  const [isDrawing, setIsDrawing] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleCell = useCallback((c: number, r: number) => {
    if (submitted) return;
    // Only allow clicking on the reflection side
    const isReflectionSide = axis === 'vertical' ? c > AXIS : r > AXIS;
    if (!isReflectionSide) return;
    const key = `${c}:${r}`;
    setUserPoints(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  }, [submitted, axis]);

  const onValueChangeRef = React.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current) {
      onValueChangeRef.current(encodePoints([...userPoints].map(s => s.split(':').map(Number) as [number, number])));
    }
  }, [embedded, userPoints]);

  const handleSubmit = () => {
    if (embedded) return;
    playClick();
    const userEncoded = encodePoints([...userPoints].map(s => s.split(':').map(Number) as [number, number]));
    const isCorrect = userEncoded === correctEncoded;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, userEncoded), 1800);
  };

  const handleReset = () => {
    playClick();
    setUserPoints(new Set());
    setFeedback(null);
    setSubmitted(false);
  };

  const svgSize = GRID * CELL + 1;
  const srcSet = new Set(sourcePoints.map(p => `${p[0]}:${p[1]}`));
  const correctSet = new Set(correctPoints.map(p => `${p[0]}:${p[1]}`));

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-cyan-500 flex items-center justify-center">
              <span className="text-white font-black text-base">⟺</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Grid */}
      <div className="flex justify-center px-4 py-4 overflow-x-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-cyan-100 p-2 inline-block select-none">
          <svg
            viewBox={`0 0 ${svgSize} ${svgSize}`}
            style={{ width: svgSize, height: svgSize, touchAction: 'none' }}
            onMouseLeave={() => setIsDrawing(false)}
          >
            {/* Grid lines */}
            {Array.from({ length: GRID + 1 }, (_, i) => (
              <g key={i}>
                <line x1={i * CELL} y1={0} x2={i * CELL} y2={svgSize} stroke="#e2e8f0" strokeWidth={1} />
                <line x1={0} y1={i * CELL} x2={svgSize} y2={i * CELL} stroke="#e2e8f0" strokeWidth={1} />
              </g>
            ))}

            {/* Axis of symmetry */}
            {axis === 'vertical' ? (
              <line x1={AXIS * CELL} y1={0} x2={AXIS * CELL} y2={svgSize}
                stroke="#f43f5e" strokeWidth={2.5} strokeDasharray="6 4" />
            ) : (
              <line x1={0} y1={AXIS * CELL} x2={svgSize} y2={AXIS * CELL}
                stroke="#f43f5e" strokeWidth={2.5} strokeDasharray="6 4" />
            )}

            {/* Cells */}
            {Array.from({ length: GRID }, (_, r) =>
              Array.from({ length: GRID }, (_, c) => {
                const key = `${c}:${r}`;
                const isSrc = srcSet.has(key);
                const isUser = userPoints.has(key);
                const isCorrectCell = correctSet.has(key);
                const isReflectionSide = axis === 'vertical' ? c > AXIS : r > AXIS;

                let fill = 'transparent';
                if (isSrc) fill = '#3b82f6';
                else if (submitted && isCorrectCell && isUser) fill = '#22c55e';
                else if (submitted && isCorrectCell) fill = '#fbbf24';
                else if (submitted && isUser && !isCorrectCell) fill = '#f87171';
                else if (isUser) fill = '#22d3ee';
                else if (isReflectionSide && !submitted) fill = '#f0fdfa';

                return (
                  <rect
                    key={key}
                    x={c * CELL + 1}
                    y={r * CELL + 1}
                    width={CELL - 1}
                    height={CELL - 1}
                    fill={fill}
                    rx={3}
                    style={{ cursor: isReflectionSide && !submitted ? 'pointer' : 'default' }}
                    onMouseDown={() => { if (isReflectionSide && !submitted) { setIsDrawing(true); toggleCell(c, r); } }}
                    onMouseEnter={() => { if (isDrawing && isReflectionSide && !submitted) toggleCell(c, r); }}
                    onMouseUp={() => setIsDrawing(false)}
                    onTouchStart={e => { e.preventDefault(); if (isReflectionSide && !submitted) toggleCell(c, r); }}
                  />
                );
              })
            )}
          </svg>
        </div>
      </div>

      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-slate-500 px-5 pb-2">{t.hint}</p>

      {/* Legend */}
      <div className="flex justify-center gap-4 pb-3 flex-wrap px-4">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-blue-500" />
          <span className="text-xs font-bold text-slate-500">{t.original}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-cyan-400" />
          <span className="text-xs font-bold text-slate-500">{t.reflected}</span>
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
          <div className="flex gap-2">
            {!submitted ? (
              <>
                <button
                  onClick={() => { playClick(); setUserPoints(new Set()); }}
                  className="px-4 py-3 rounded-xl bg-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-300 transition-all"
                >
                  {t.clear}
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={userPoints.size === 0}
                  className="flex-1 py-3 rounded-xl bg-cyan-500 text-white font-bold text-sm hover:bg-cyan-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  {t.submit}
                </button>
              </>
            ) : (
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 text-white font-bold text-sm hover:bg-cyan-600 active:scale-[0.98] transition-all"
              >
                <RotateCcw size={16} />
                {t.tryAgain}
              </button>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SymmetryGrid;
