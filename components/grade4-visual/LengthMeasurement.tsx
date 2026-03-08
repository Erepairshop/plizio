'use client';

import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Ruler } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface LengthMeasurementProps {
  targetLength?: number;  // Ha nincs megadva, random 3-14 cm
  unit?: string;
  tolerance?: number;     // megengedett hiba (default 0.5 cm)
  onAnswer: (isCorrect: boolean, measured: number) => void;
  language?: 'hu' | 'de' | 'en' | 'ro';
}

const RULER_CM   = 15;
const PAD_LEFT   = 32;
const PAD_RIGHT  = 16;
const RULER_H    = 52;
const CM_TICK    = 18;
const HALF_TICK  = 12;
const MM_TICK    = 6;

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    instruction: 'Mérd meg a vonalat!',
    hint: 'Kattints a vonal elejére (S), majd a végére (E) a vonalzón.',
    start: 'Kezdőpont kiválasztva',
    result: 'Mérésed:',
    correct: 'Helyes! Pontosan mértél!',
    incorrect: 'Nem egészen pontos. Próbáld újra!',
    tryAgain: 'Újra',
    clickStart: '← Kattints a vonal elejére a vonalzón',
    clickEnd: '← Most kattints a vonal végére',
  },
  de: {
    instruction: 'Miss die Linie!',
    hint: 'Klicke auf den Anfang (S) und dann auf das Ende (E) der Linie auf dem Lineal.',
    start: 'Startpunkt gewählt',
    result: 'Deine Messung:',
    correct: 'Richtig! Gut gemessen!',
    incorrect: 'Nicht ganz genau. Versuche nochmal!',
    tryAgain: 'Nochmal',
    clickStart: '← Klicke auf den Anfang der Linie',
    clickEnd: '← Jetzt klicke auf das Ende der Linie',
  },
  en: {
    instruction: 'Measure the line!',
    hint: 'Click the start (S) then the end (E) of the line on the ruler.',
    start: 'Start point selected',
    result: 'Your measurement:',
    correct: 'Correct! Well measured!',
    incorrect: 'Not quite. Try again!',
    tryAgain: 'Retry',
    clickStart: '← Click the start of the line',
    clickEnd: '← Now click the end of the line',
  },
  ro: {
    instruction: 'Măsoară linia!',
    hint: 'Faceți clic pe începutul (S) apoi pe sfârșitul (E) liniei pe riglă.',
    start: 'Punct de start selectat',
    result: 'Măsurarea ta:',
    correct: 'Corect! Bine măsurat!',
    incorrect: 'Nu e exact. Încearcă din nou!',
    tryAgain: 'Din nou',
    clickStart: '← Faceți clic pe începutul liniei',
    clickEnd: '← Acum faceți clic pe sfârșitul liniei',
  },
};

const LengthMeasurement: React.FC<LengthMeasurementProps> = ({
  targetLength,
  unit = 'cm',
  tolerance = 0.5,
  onAnswer,
  language = 'de',
}) => {
  const t = LABELS[language] || LABELS.en;
  const svgRef = useRef<SVGSVGElement>(null);

  // Aktuális mérendő vonal hossza
  const actualLength = useMemo(
    () => targetLength ?? (Math.floor(Math.random() * 12) + 3),
    [targetLength],
  );

  // A vonal mindig 2 cm-nél kezdődik (hogy ne legyen triviális)
  const lineStartCm = 2;
  const lineEndCm = lineStartCm + actualLength;

  // ─── State ───
  const [measureStartCm, setMeasureStartCm] = useState<number | null>(null);
  const [measureEndCm, setMeasureEndCm] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const totalW = PAD_LEFT + RULER_CM * 30 + PAD_RIGHT;
  const pxPerCm = (totalW - PAD_LEFT - PAD_RIGHT) / RULER_CM;
  const cmToX = (cm: number) => PAD_LEFT + cm * pxPerCm;

  const measuredLength = measureStartCm !== null && measureEndCm !== null
    ? Math.round(Math.abs(measureEndCm - measureStartCm) * 10) / 10
    : null;

  // ─── Pointer → cm ───
  const pointerToCm = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const svg = svgRef.current;
    if (!svg) return 0;
    const rect = svg.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const relX = (clientX - rect.left) / rect.width * totalW;
    return Math.round(Math.max(0, Math.min(RULER_CM, (relX - PAD_LEFT) / pxPerCm)) * 2) / 2;
  }, [totalW, pxPerCm]);

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (submitted) return;
    const cm = pointerToCm(e);
    playClick();

    if (measureStartCm === null) {
      // Első kattintás: start pont
      setMeasureStartCm(cm);
    } else if (measureEndCm === null) {
      // Második kattintás: end pont
      setMeasureEndCm(cm);
      const measured = Math.round(Math.abs(cm - measureStartCm) * 10) / 10;
      const isCorrect = Math.abs(measured - actualLength) <= tolerance;

      setFeedback(isCorrect ? 'correct' : 'incorrect');
      setSubmitted(true);
      if (isCorrect) playCorrect(); else playIncorrect();
      setTimeout(() => onAnswer(isCorrect, measured), 1800);
    }
  };

  const handleReset = () => {
    playClick();
    setMeasureStartCm(null);
    setMeasureEndCm(null);
    setFeedback(null);
    setSubmitted(false);
  };

  // Állapot-szöveg
  const statusText = measureStartCm === null
    ? t.clickStart
    : measureEndCm === null
      ? t.clickEnd
      : '';

  // Mérendő vonal koordináták
  const mLineX1 = cmToX(lineStartCm);
  const mLineX2 = cmToX(lineEndCm);
  const lineY = 24;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 50%, #f0fdfa 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center">
            <Ruler size={18} className="text-white" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">{t.instruction}</h3>
        </div>
        <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
      </div>

      {/* SVG */}
      <div className="px-4 pb-2">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${totalW} ${RULER_H + 80}`}
          className="w-full select-none touch-none cursor-pointer"
          style={{ maxHeight: 200 }}
          onClick={handleClick}
          onTouchEnd={handleClick}
        >
          {/* ─── Mérendő vonal (felül) ─── */}
          <line
            x1={mLineX1} y1={lineY} x2={mLineX2} y2={lineY}
            stroke="#1e293b" strokeWidth={5} strokeLinecap="round"
          />
          {/* Végpont jelölők */}
          <line x1={mLineX1} y1={lineY - 10} x2={mLineX1} y2={lineY + 10} stroke="#1e293b" strokeWidth={2} />
          <line x1={mLineX2} y1={lineY - 10} x2={mLineX2} y2={lineY + 10} stroke="#1e293b" strokeWidth={2} />

          {/* Kérdőjel a vonal felett */}
          {!submitted && (
            <text x={(mLineX1 + mLineX2) / 2} y={lineY - 14} textAnchor="middle"
              fontSize={14} fontWeight={900} fill="#64748b">
              ? {unit}
            </text>
          )}

          {/* ─── Vonalzó (alul) ─── */}
          <g transform={`translate(0, 44)`}>
            {/* Vonalzó háttér */}
            <rect
              x={PAD_LEFT - 4} y={0}
              width={RULER_CM * pxPerCm + 8} height={RULER_H}
              rx={4} fill="#fdf6e3" stroke="#c9a96e" strokeWidth={1.5}
            />

            {/* CM / mm jelölések */}
            {Array.from({ length: RULER_CM + 1 }, (_, i) => {
              const x = cmToX(i);
              return (
                <g key={`cm-${i}`}>
                  <line x1={x} y1={0} x2={x} y2={CM_TICK} stroke="#5b4636" strokeWidth={1.5} />
                  <text x={x} y={CM_TICK + 14} textAnchor="middle"
                    fontSize={11} fontWeight={700} fill="#5b4636">{i}</text>
                  {i < RULER_CM && Array.from({ length: 9 }, (_, j) => {
                    const mmX = x + ((j + 1) * pxPerCm) / 10;
                    const isHalf = j === 4;
                    return (
                      <line key={`mm-${i}-${j}`}
                        x1={mmX} y1={0} x2={mmX} y2={isHalf ? HALF_TICK : MM_TICK}
                        stroke="#8b7355" strokeWidth={isHalf ? 1 : 0.5} />
                    );
                  })}
                </g>
              );
            })}

            {/* Mérés markerek */}
            {measureStartCm !== null && (
              <>
                <line x1={cmToX(measureStartCm)} y1={-8} x2={cmToX(measureStartCm)} y2={RULER_H + 4}
                  stroke="#ef4444" strokeWidth={2} strokeDasharray="4 2" />
                <circle cx={cmToX(measureStartCm)} cy={-8} r={6} fill="#ef4444" />
                <text x={cmToX(measureStartCm)} y={-8} textAnchor="middle" dy="0.35em"
                  fontSize={8} fontWeight={900} fill="white">S</text>
              </>
            )}
            {measureEndCm !== null && (
              <>
                <line x1={cmToX(measureEndCm)} y1={-8} x2={cmToX(measureEndCm)} y2={RULER_H + 4}
                  stroke="#22c55e" strokeWidth={2} strokeDasharray="4 2" />
                <circle cx={cmToX(measureEndCm)} cy={-8} r={6} fill="#22c55e" />
                <text x={cmToX(measureEndCm)} y={-8} textAnchor="middle" dy="0.35em"
                  fontSize={8} fontWeight={900} fill="white">E</text>
              </>
            )}

            {/* Mért vonal vizualizáció a vonalzó tetején */}
            {measureStartCm !== null && measureEndCm !== null && (
              <line
                x1={cmToX(Math.min(measureStartCm, measureEndCm))}
                y1={-3}
                x2={cmToX(Math.max(measureStartCm, measureEndCm))}
                y2={-3}
                stroke={feedback === 'correct' ? '#22c55e' : '#ef4444'}
                strokeWidth={3} strokeLinecap="round"
              />
            )}
          </g>
        </svg>
      </div>

      {/* Status / Mérés eredmény */}
      <div className="px-5 pb-2">
        {!submitted && statusText && (
          <p className="text-sm text-emerald-600 font-medium text-center animate-pulse">{statusText}</p>
        )}
        {measuredLength !== null && (
          <motion.div className="text-center py-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="text-sm text-slate-500">{t.result} </span>
            <span className={`text-xl font-extrabold ${
              feedback === 'correct' ? 'text-green-600' : feedback === 'incorrect' ? 'text-red-500' : 'text-slate-800'
            }`}>
              {measuredLength} {unit}
            </span>
          </motion.div>
        )}
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

        {submitted && (
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 active:scale-[0.98] transition-all"
          >
            <RotateCcw size={16} />
            {t.tryAgain}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default LengthMeasurement;
