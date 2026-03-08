'use client';

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Pencil } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface LengthDrawingProps {
  targetLength: number;   // cm-ben (pl. 5)
  unit?: string;          // 'cm' | 'mm'
  tolerance?: number;     // megengedett hiba cm-ben (default 0.4)
  onAnswer: (isCorrect: boolean, drawnLength: number) => void;
  language?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

// ─── Vonalzó konstansok ────────────────────────────────────────────────────────
const RULER_CM   = 15;        // 15 cm-es vonalzó
const PAD_LEFT   = 32;        // bal margó px
const PAD_RIGHT  = 16;
const RULER_H    = 52;        // vonalzó magasság
const CM_TICK    = 18;        // cm jel magassága
const HALF_TICK  = 12;        // fél-cm jel
const MM_TICK    = 6;         // mm jel

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    instruction: 'Rajzolj egy vonalat!',
    target: 'Cél hossz:',
    drawn: 'Rajzolt hossz:',
    hint: 'Kattints a vonalzóra a kezdőpontra, majd húzd a végpontig.',
    hintTouch: 'Érintsd meg a vonalzót a kezdőpontra, majd húzd a végpontig.',
    correct: 'Szuper! Helyes!',
    incorrect: 'Majdnem! Próbáld újra!',
    tryAgain: 'Újra',
  },
  de: {
    instruction: 'Zeichne eine Linie!',
    target: 'Ziellänge:',
    drawn: 'Gezeichnete Länge:',
    hint: 'Klicke auf das Lineal für den Startpunkt, dann ziehe zum Endpunkt.',
    hintTouch: 'Tippe auf das Lineal für den Startpunkt, dann ziehe zum Endpunkt.',
    correct: 'Super! Richtig!',
    incorrect: 'Fast! Versuche es nochmal!',
    tryAgain: 'Nochmal',
  },
  en: {
    instruction: 'Draw a line!',
    target: 'Target length:',
    drawn: 'Your line:',
    hint: 'Click on the ruler to set the start, then drag to the end.',
    hintTouch: 'Tap on the ruler for the start, then drag to the end.',
    correct: 'Great! Correct!',
    incorrect: 'Almost! Try again!',
    tryAgain: 'Retry',
  },
  ro: {
    instruction: 'Desenează o linie!',
    target: 'Lungimea țintă:',
    drawn: 'Linia ta:',
    hint: 'Faceți clic pe riglă pentru start, apoi trageți până la capăt.',
    hintTouch: 'Atingeți rigla pentru start, apoi trageți până la capăt.',
    correct: 'Super! Corect!',
    incorrect: 'Aproape! Încearcă din nou!',
    tryAgain: 'Din nou',
  },
};

const LengthDrawing: React.FC<LengthDrawingProps> = ({
  targetLength,
  unit = 'cm',
  tolerance = 0.4,
  onAnswer,
  language = 'de',
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] || LABELS.en;
  const svgRef = useRef<SVGSVGElement>(null);

  // ─── State ───
  const [startCm, setStartCm] = useState<number | null>(null);
  const [endCm, setEndCm] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Teljes SVG szélessége (viewBox-ban)
  const totalW = PAD_LEFT + RULER_CM * 30 + PAD_RIGHT; // 30px / cm a viewBox-ban
  const pxPerCm = (totalW - PAD_LEFT - PAD_RIGHT) / RULER_CM;

  const cmToX = (cm: number) => PAD_LEFT + cm * pxPerCm;
  const xToCm = (x: number) => Math.max(0, Math.min(RULER_CM, (x - PAD_LEFT) / pxPerCm));

  const drawnLength = startCm !== null && endCm !== null
    ? Math.round(Math.abs(endCm - startCm) * 10) / 10
    : null;

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && drawnLength !== null && drawnLength > 0.2 && !dragging) {
      onValueChangeRef.current(String(drawnLength));
    }
  }, [embedded, drawnLength, dragging]);

  // ─── Pointer → cm konvertálás ───
  const pointerToCm = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const svg = svgRef.current;
    if (!svg) return 0;
    const rect = svg.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const relX = (clientX - rect.left) / rect.width * totalW;
    return Math.round(xToCm(relX) * 2) / 2; // snap félcentihez
  }, [totalW, pxPerCm]);

  // ─── Rajzolás interakció ───
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (submitted) return;
    const cm = pointerToCm(e);
    playClick();
    setStartCm(cm);
    setEndCm(cm);
    setDragging(true);
    setFeedback(null);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging || submitted) return;
    setEndCm(pointerToCm(e));
  };

  const handleEnd = () => {
    if (!dragging || submitted) return;
    setDragging(false);

    if (embedded) return;
    if (drawnLength !== null && drawnLength > 0.2) {
      const isCorrect = Math.abs(drawnLength - targetLength) <= tolerance;
      setFeedback(isCorrect ? 'correct' : 'incorrect');
      setSubmitted(true);
      if (isCorrect) playCorrect(); else playIncorrect();
      setTimeout(() => onAnswer(isCorrect, drawnLength), 1800);
    }
  };

  const handleReset = () => {
    playClick();
    setStartCm(null);
    setEndCm(null);
    setFeedback(null);
    setSubmitted(false);
  };

  // Rajzolt vonal koordináták
  const lineX1 = startCm !== null ? cmToX(Math.min(startCm, endCm ?? startCm)) : 0;
  const lineX2 = endCm !== null ? cmToX(Math.max(startCm ?? 0, endCm)) : 0;
  const lineY = RULER_H + 38; // vonalzó alatt

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #ecfeff 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-cyan-500 flex items-center justify-center">
              <Pencil size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.instruction}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">
            {t.hint}
          </p>
        </div>
      )}

      {/* Cél hossz badge */}
      <div className="flex justify-center pb-3">
        <div className="inline-flex items-center gap-2 bg-cyan-600 text-white px-5 py-2 rounded-full font-bold text-base shadow-md">
          {t.target} {targetLength} {unit}
        </div>
      </div>

      {/* SVG Vonalzó + Rajzoló terület */}
      <div className="px-4 pb-2">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${totalW} ${RULER_H + 70}`}
          className="w-full select-none touch-none"
          style={{ maxHeight: 180 }}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          {/* Vonalzó háttér */}
          <rect
            x={PAD_LEFT - 4}
            y={4}
            width={RULER_CM * pxPerCm + 8}
            height={RULER_H}
            rx={4}
            fill="#fdf6e3"
            stroke="#d4a76a"
            strokeWidth={1.5}
          />

          {/* CM / mm jelölések */}
          {Array.from({ length: RULER_CM + 1 }, (_, i) => {
            const x = cmToX(i);
            return (
              <g key={`cm-${i}`}>
                {/* CM jel */}
                <line x1={x} y1={4} x2={x} y2={4 + CM_TICK} stroke="#5b4636" strokeWidth={1.5} />
                {/* Szám */}
                <text
                  x={x}
                  y={4 + CM_TICK + 14}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={700}
                  fill="#5b4636"
                >
                  {i}
                </text>

                {/* MM jelek (i < RULER_CM) */}
                {i < RULER_CM && Array.from({ length: 9 }, (_, j) => {
                  const mmX = x + ((j + 1) * pxPerCm) / 10;
                  const isHalf = j === 4;
                  return (
                    <line
                      key={`mm-${i}-${j}`}
                      x1={mmX}
                      y1={4}
                      x2={mmX}
                      y2={4 + (isHalf ? HALF_TICK : MM_TICK)}
                      stroke="#8b7355"
                      strokeWidth={isHalf ? 1 : 0.5}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Rajzolt vonal */}
          {startCm !== null && endCm !== null && Math.abs(endCm - startCm) > 0.05 && (
            <>
              {/* Árnyék */}
              <line
                x1={lineX1} y1={lineY + 2} x2={lineX2} y2={lineY + 2}
                stroke="rgba(0,0,0,0.1)" strokeWidth={5} strokeLinecap="round"
              />
              {/* Fő vonal */}
              <line
                x1={lineX1} y1={lineY} x2={lineX2} y2={lineY}
                stroke={feedback === 'correct' ? '#22c55e' : feedback === 'incorrect' ? '#ef4444' : '#0ea5e9'}
                strokeWidth={4}
                strokeLinecap="round"
              />
              {/* Végpont körök */}
              <circle cx={lineX1} cy={lineY} r={5}
                fill={feedback === 'correct' ? '#22c55e' : feedback === 'incorrect' ? '#ef4444' : '#0ea5e9'}
              />
              <circle cx={lineX2} cy={lineY} r={5}
                fill={feedback === 'correct' ? '#22c55e' : feedback === 'incorrect' ? '#ef4444' : '#0ea5e9'}
              />

              {/* Hossz címke a vonal felett */}
              {drawnLength !== null && drawnLength > 0.2 && (
                <text
                  x={(lineX1 + lineX2) / 2}
                  y={lineY - 10}
                  textAnchor="middle"
                  fontSize={13}
                  fontWeight={800}
                  fill={feedback === 'correct' ? '#16a34a' : feedback === 'incorrect' ? '#dc2626' : '#0284c7'}
                >
                  {drawnLength} {unit}
                </text>
              )}
            </>
          )}
        </svg>
      </div>

      {/* Feedback + Gombok */}
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

          {submitted && (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-600 text-white font-bold text-sm hover:bg-cyan-700 active:scale-[0.98] transition-all"
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

export default LengthDrawing;
