'use client';

import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Triangle } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface AngleDrawerProps {
  targetAngle?: number;
  tolerance?: number;
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Rajzolj szöget!',
    hint: 'Húzd az egyik szárat a megfelelő szögbe.',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
    target: 'Célszög:',
    your: 'A te szöged:',
  },
  de: {
    title: 'Zeichne den Winkel!',
    hint: 'Ziehe den Schenkel auf den richtigen Winkel.',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
    target: 'Zielwinkel:',
    your: 'Dein Winkel:',
  },
  en: {
    title: 'Draw the angle!',
    hint: 'Drag the arm to create the correct angle.',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    target: 'Target angle:',
    your: 'Your angle:',
  },
  ro: {
    title: 'Desenează unghiul!',
    hint: 'Trage brațul la unghiul corect.',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
    target: 'Unghi țintă:',
    your: 'Unghiul tău:',
  },
};

const AngleDrawer: React.FC<AngleDrawerProps> = ({
  targetAngle: propAngle,
  tolerance = 8,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] || LABELS.en;
  const svgRef = useRef<SVGSVGElement>(null);

  const targetAngle = useMemo(() =>
    propAngle ?? [30, 45, 60, 90, 120, 135, 150][Math.floor(Math.random() * 7)],
    [propAngle]
  );

  const [userAngle, setUserAngle] = useState(45);
  const [dragging, setDragging] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (embedded && onValueChange && !dragging) onValueChange(String(userAngle));
  }, [embedded, onValueChange, userAngle, dragging]);

  const CX = 160, CY = 160, ARM_LEN = 120;
  const W = 320, H = 200;

  // Convert pointer position to angle
  const pointerToAngle = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    const svg = svgRef.current;
    if (!svg) return userAngle;
    const rect = svg.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    const relX = (clientX - rect.left) / rect.width * W - CX;
    const relY = (clientY - rect.top) / rect.height * H - CY;
    let angleDeg = Math.atan2(-relY, relX) * (180 / Math.PI);
    if (angleDeg < 0) angleDeg += 360;
    // Clamp to 0-180 range
    return Math.max(5, Math.min(175, Math.round(angleDeg)));
  }, [userAngle]);

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (submitted) return;
    setDragging(true);
    setUserAngle(pointerToAngle(e));
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging || submitted) return;
    setUserAngle(pointerToAngle(e));
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  const handleSubmit = () => {
    playClick();
    const isCorrect = Math.abs(userAngle - targetAngle) <= tolerance;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, userAngle), 1800);
  };

  const handleReset = () => {
    playClick();
    setUserAngle(45);
    setFeedback(null);
    setSubmitted(false);
  };

  // Arm endpoint
  const armRad = (userAngle * Math.PI) / 180;
  const armX = CX + ARM_LEN * Math.cos(armRad);
  const armY = CY - ARM_LEN * Math.sin(armRad);

  // Arc path for angle display
  const arcR = 40;
  const arcEndX = CX + arcR * Math.cos(armRad);
  const arcEndY = CY - arcR * Math.sin(armRad);
  const largeArc = userAngle > 180 ? 1 : 0;

  // Protractor marks
  const protractorMarks = [0, 30, 45, 60, 90, 120, 135, 150, 180];

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fef2f2 0%, #fff1f2 50%, #ffe4e6 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-red-500 flex items-center justify-center">
              <Triangle size={18} className="text-white" />
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Target badge */}
      <div className="flex justify-center pb-3">
        <div className="bg-red-500 text-white px-5 py-2 rounded-full font-black text-lg shadow-md">
          {t.target} {targetAngle}°
        </div>
      </div>

      {/* SVG */}
      <div className="px-4 pb-4">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="w-full select-none touch-none cursor-pointer"
          style={{ maxHeight: 220 }}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {/* Protractor background (semi-circle) */}
          <path
            d={`M ${CX - ARM_LEN - 10},${CY} A ${ARM_LEN + 10},${ARM_LEN + 10} 0 0,1 ${CX + ARM_LEN + 10},${CY}`}
            fill="rgba(254,226,226,0.5)" stroke="#fca5a5" strokeWidth={1}
          />

          {/* Protractor degree marks */}
          {protractorMarks.map(deg => {
            const rad = (deg * Math.PI) / 180;
            const r1 = ARM_LEN - 5;
            const r2 = ARM_LEN + 8;
            return (
              <g key={deg}>
                <line
                  x1={CX + r1 * Math.cos(rad)} y1={CY - r1 * Math.sin(rad)}
                  x2={CX + r2 * Math.cos(rad)} y2={CY - r2 * Math.sin(rad)}
                  stroke="#94a3b8" strokeWidth={1}
                />
                <text
                  x={CX + (r2 + 12) * Math.cos(rad)}
                  y={CY - (r2 + 12) * Math.sin(rad)}
                  textAnchor="middle" dy="0.35em"
                  fontSize={9} fontWeight={600} fill="#94a3b8"
                >
                  {deg}°
                </text>
              </g>
            );
          })}

          {/* Fixed arm (horizontal) */}
          <line x1={CX} y1={CY} x2={CX + ARM_LEN} y2={CY}
            stroke="#334155" strokeWidth={4} strokeLinecap="round" />

          {/* Moveable arm */}
          <line x1={CX} y1={CY} x2={armX} y2={armY}
            stroke={feedback === 'correct' ? '#22c55e' : feedback === 'incorrect' ? '#ef4444' : '#dc2626'}
            strokeWidth={4} strokeLinecap="round"
          />

          {/* Angle arc */}
          <path
            d={`M ${CX + arcR},${CY} A ${arcR},${arcR} 0 ${largeArc},0 ${arcEndX},${arcEndY}`}
            fill="none" stroke="#f97316" strokeWidth={2.5} strokeDasharray="4 2"
          />

          {/* Angle label */}
          <text
            x={CX + 22 * Math.cos(armRad / 2)}
            y={CY - 22 * Math.sin(armRad / 2)}
            textAnchor="middle" dy="0.35em"
            fontSize={14} fontWeight={900}
            fill={feedback === 'correct' ? '#16a34a' : '#dc2626'}
          >
            {userAngle}°
          </text>

          {/* Vertex point */}
          <circle cx={CX} cy={CY} r={5} fill="#1e293b" />

          {/* Drag handle */}
          {!submitted && (
            <circle cx={armX} cy={armY} r={10}
              fill="#dc2626" fillOpacity={0.3} stroke="#dc2626" strokeWidth={2} />
          )}
        </svg>
      </div>

      {/* Current angle display */}
      <div className="flex justify-center pb-3">
        <span className="bg-white border-2 border-red-200 rounded-xl px-4 py-1 font-bold text-red-600">
          {t.your} {userAngle}°
        </span>
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
              className="w-full py-3 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 active:scale-[0.98] transition-all"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 text-white font-bold text-sm hover:bg-red-600 active:scale-[0.98] transition-all"
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

export default AngleDrawer;
