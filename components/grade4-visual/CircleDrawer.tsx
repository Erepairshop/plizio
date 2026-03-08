'use client';

import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Circle } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface CircleDrawerProps {
  targetRadius?: number;
  tolerance?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Rajzolj kört!',
    hint: 'Húzd ki a zirkelt a középpontból a megfelelő sugárra.',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
    target: 'Sugár:',
    your: 'A te sugarad:',
    cm: 'cm',
  },
  de: {
    title: 'Zeichne einen Kreis!',
    hint: 'Ziehe den Zirkel vom Mittelpunkt auf den richtigen Radius.',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
    target: 'Radius:',
    your: 'Dein Radius:',
    cm: 'cm',
  },
  en: {
    title: 'Draw a circle!',
    hint: 'Drag the compass from the center to the correct radius.',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    target: 'Radius:',
    your: 'Your radius:',
    cm: 'cm',
  },
  ro: {
    title: 'Desenează un cerc!',
    hint: 'Trage compasul din centru la raza corectă.',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
    target: 'Raza:',
    your: 'Raza ta:',
    cm: 'cm',
  },
};

const CircleDrawer: React.FC<CircleDrawerProps> = ({
  targetRadius: propRadius,
  tolerance = 0.5,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] || LABELS.en;
  const svgRef = useRef<SVGSVGElement>(null);

  const targetRadius = useMemo(() => propRadius ?? (Math.floor(Math.random() * 5) + 2), [propRadius]);

  const [userRadius, setUserRadius] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (embedded && onValueChange && hasDrawn && !dragging && userRadius > 0) onValueChange(String(userRadius));
  }, [embedded, onValueChange, userRadius, hasDrawn, dragging]);

  const W = 320, H = 320;
  const CX = W / 2, CY = H / 2;
  const MAX_CM = 8;
  const pxPerCm = 120 / MAX_CM; // ~15px per cm

  // Grid lines
  const GRID_STEP = pxPerCm; // 1 cm grid

  const pointerToRadius = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const svg = svgRef.current;
    if (!svg) return 0;
    const rect = svg.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    const relX = (clientX - rect.left) / rect.width * W - CX;
    const relY = (clientY - rect.top) / rect.height * H - CY;
    const dist = Math.sqrt(relX * relX + relY * relY);
    // Snap to half-cm
    return Math.round((dist / pxPerCm) * 2) / 2;
  }, [pxPerCm]);

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (submitted) return;
    setDragging(true);
    setUserRadius(pointerToRadius(e));
    setHasDrawn(true);
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging || submitted) return;
    setUserRadius(pointerToRadius(e));
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handleSubmit = () => {
    playClick();
    const isCorrect = Math.abs(userRadius - targetRadius) <= tolerance;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, userRadius), 1800);
  };

  const handleReset = () => {
    playClick();
    setUserRadius(0);
    setHasDrawn(false);
    setFeedback(null);
    setSubmitted(false);
  };

  const circlePx = userRadius * pxPerCm;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center">
              <Circle size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Target badge */}
      <div className="flex justify-center pb-3">
        <div className="bg-orange-500 text-white px-5 py-2 rounded-full font-black text-lg shadow-md">
          {t.target} {targetRadius} {t.cm}
        </div>
      </div>

      {/* SVG */}
      <div className="px-4 pb-4">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full select-none touch-none cursor-crosshair bg-white rounded-xl border-2 border-orange-200"
          style={{ maxHeight: 280 }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {/* Grid */}
          {Array.from({ length: Math.ceil(W / GRID_STEP) + 1 }, (_, i) => {
            const x = CX + (i - Math.floor(W / GRID_STEP / 2)) * GRID_STEP;
            const y = CY + (i - Math.floor(H / GRID_STEP / 2)) * GRID_STEP;
            return (
              <g key={i}>
                <line x1={x} y1={0} x2={x} y2={H} stroke="#fed7aa" strokeWidth={0.5} />
                <line x1={0} y1={y} x2={W} y2={y} stroke="#fed7aa" strokeWidth={0.5} />
              </g>
            );
          })}

          {/* CM scale on x-axis */}
          {Array.from({ length: MAX_CM * 2 + 1 }, (_, i) => {
            const cm = i - MAX_CM;
            if (cm === 0) return null;
            const x = CX + cm * pxPerCm;
            if (x < 10 || x > W - 10) return null;
            return (
              <g key={i}>
                <line x1={x} y1={CY - 4} x2={x} y2={CY + 4} stroke="#d4a76a" strokeWidth={1} />
                {Math.abs(cm) <= 6 && cm % 2 === 0 && (
                  <text x={x} y={CY + 16} textAnchor="middle" fontSize={8} fill="#92400e" fontWeight={600}>
                    {Math.abs(cm)}
                  </text>
                )}
              </g>
            );
          })}

          {/* Axis crosshair */}
          <line x1={CX - 100} y1={CY} x2={CX + 100} y2={CY} stroke="#d4a76a" strokeWidth={0.8} strokeDasharray="4 3" />
          <line x1={CX} y1={CY - 100} x2={CX} y2={CY + 100} stroke="#d4a76a" strokeWidth={0.8} strokeDasharray="4 3" />

          {/* User circle */}
          {hasDrawn && circlePx > 2 && (
            <circle
              cx={CX} cy={CY} r={circlePx}
              fill="none"
              stroke={feedback === 'correct' ? '#22c55e' : feedback === 'incorrect' ? '#ef4444' : '#f97316'}
              strokeWidth={3}
              strokeDasharray={submitted ? 'none' : '6 4'}
            />
          )}

          {/* Radius line */}
          {hasDrawn && circlePx > 2 && (
            <line x1={CX} y1={CY} x2={CX + circlePx} y2={CY}
              stroke={feedback === 'correct' ? '#22c55e' : feedback === 'incorrect' ? '#ef4444' : '#ea580c'}
              strokeWidth={2} strokeDasharray="4 2" />
          )}

          {/* Center point */}
          <circle cx={CX} cy={CY} r={4} fill="#1e293b" />
          <circle cx={CX} cy={CY} r={2} fill="#f1f5f9" />

          {/* Radius label */}
          {hasDrawn && userRadius > 0 && (
            <text x={CX + circlePx / 2} y={CY - 8} textAnchor="middle"
              fontSize={12} fontWeight={800}
              fill={feedback === 'correct' ? '#16a34a' : feedback === 'incorrect' ? '#dc2626' : '#ea580c'}>
              {userRadius} cm
            </text>
          )}
        </svg>
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
              disabled={!hasDrawn || userRadius === 0}
              className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 active:scale-[0.98] transition-all"
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

export default CircleDrawer;
