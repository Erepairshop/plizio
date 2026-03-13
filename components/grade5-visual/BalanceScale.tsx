'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface BalanceScaleProps {
  leftWeights?: number[];  // e.g. [200, 350]
  rightWeight?: number;    // the unknown (correct answer)
  unit?: string;           // 'g' or 'kg'
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Mérleg egyensúly!', hint: 'Melyik súly egyensúlyozza ki a mérleget?', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', unknown: '? g', balanced: 'A mérleg egyensúlyban van!' },
  de: { title: 'Gleichgewicht!', hint: 'Welches Gewicht hält die Waage im Gleichgewicht?', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', unknown: '? g', balanced: 'Die Waage ist im Gleichgewicht!' },
  en: { title: 'Balance scale!', hint: 'Which weight balances the scale?', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', unknown: '? g', balanced: 'The scale is balanced!' },
  ro: { title: 'Balanță!', hint: 'Ce greutate echilibrează balanța?', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', unknown: '? g', balanced: 'Balanța este în echilibru!' },
};

function makeChoices(correct: number): number[] {
  const step = correct >= 1000 ? 100 : 50;
  const options = new Set<number>([correct]);
  const offsets = [-2, -1, 1, 2].map(o => o * step);
  for (const off of offsets.sort(() => Math.random() - 0.5)) {
    const val = correct + off;
    if (val > 0) options.add(val);
    if (options.size >= 4) break;
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
}

const BalanceScale: React.FC<BalanceScaleProps> = ({
  leftWeights: propLeft,
  rightWeight: propRight,
  unit: propUnit,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { leftWeights, correctAnswer, unit, choices } = useMemo(() => {
    // Configs: 2–3 weights on left, unknown on right
    const configs = [
      () => { const a = [100,200,300,400,500][Math.floor(Math.random()*5)]; const b = [100,200,300,400,500][Math.floor(Math.random()*5)]; return { left: [a, b], right: a + b, unit: 'g' }; },
      () => { const a = [250,500,750][Math.floor(Math.random()*3)]; const b = [250,500,750][Math.floor(Math.random()*3)]; return { left: [a, b], right: a + b, unit: 'g' }; },
      () => { const a = [1000,2000,3000][Math.floor(Math.random()*3)]; const b = [500,1000,1500][Math.floor(Math.random()*3)]; return { left: [a, b], right: a + b, unit: 'g' }; },
      () => { const a = [200,400,600][Math.floor(Math.random()*3)]; const b = [100,200,300][Math.floor(Math.random()*3)]; const c = [50,100,150][Math.floor(Math.random()*3)]; return { left: [a, b, c], right: a + b + c, unit: 'g' }; },
    ];
    const cfg = configs[Math.floor(Math.random() * configs.length)]();
    const left = propLeft ?? cfg.left;
    const right = propRight ?? cfg.right;
    const u = propUnit ?? cfg.unit;
    return { leftWeights: left, correctAnswer: right, unit: u, choices: makeChoices(right) };
  }, [propLeft, propRight, propUnit]);

  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selected !== null) {
      onValueChangeRef.current(String(selected));
    }
  }, [embedded, selected]);

  const handleSelect = (val: number) => {
    if (submitted) return;
    playClick();
    setSelected(val);
  };

  const handleSubmit = () => {
    if (selected === null || embedded) return;
    playClick();
    const isCorrect = selected === correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, selected), 1800);
  };

  const handleReset = () => {
    playClick();
    setSelected(null);
    setFeedback(null);
    setSubmitted(false);
  };

  // SVG scale — balanced (horizontal beam)
  const W = 360, CX = 180, BEAM_Y = 80, PAN_Y = 120;
  const BEAM_LEN = 130;
  const tiltDeg = 0; // always balanced visual

  // Weight box render helper
  const WeightBox = ({ x, y, label, color, isUnknown = false }: { x: number; y: number; label: string; color: string; isUnknown?: boolean }) => (
    <g>
      <rect x={x - 22} y={y - 20} width={44} height={26} rx={6}
        fill={isUnknown ? '#e2e8f0' : color}
        stroke={isUnknown ? '#94a3b8' : color}
        strokeWidth={2}
        strokeDasharray={isUnknown ? '4 2' : 'none'} />
      <text x={x} y={y - 5} textAnchor="middle" dominantBaseline="middle"
        fontSize={isUnknown ? 13 : 10} fontWeight={900}
        fill={isUnknown ? '#64748b' : 'white'}>
        {label}
      </text>
    </g>
  );

  const leftX = CX - BEAM_LEN;
  const rightX = CX + BEAM_LEN;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fde68a 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center">
              <span className="text-white font-black text-base">⚖️</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Balance SVG */}
      <div className="px-4 pb-3 overflow-x-auto">
        <svg viewBox={`0 0 ${W} 180`} className="w-full h-auto" style={{ minWidth: 280 }}>
          {/* Stand pole */}
          <line x1={CX} y1={BEAM_Y} x2={CX} y2={160} stroke="#92400e" strokeWidth={8} strokeLinecap="round" />
          {/* Base */}
          <rect x={CX - 30} y={158} width={60} height={12} rx={6} fill="#92400e" />
          {/* Pivot triangle */}
          <polygon points={`${CX},${BEAM_Y - 4} ${CX - 8},${BEAM_Y + 8} ${CX + 8},${BEAM_Y + 8}`} fill="#d97706" />

          {/* Beam */}
          <line x1={leftX - 10} y1={BEAM_Y} x2={rightX + 10} y2={BEAM_Y}
            stroke="#b45309" strokeWidth={6} strokeLinecap="round" />

          {/* Chains */}
          <line x1={leftX} y1={BEAM_Y + 4} x2={leftX} y2={PAN_Y - 8} stroke="#b45309" strokeWidth={2.5} strokeDasharray="4 2" />
          <line x1={rightX} y1={BEAM_Y + 4} x2={rightX} y2={PAN_Y - 8} stroke="#b45309" strokeWidth={2.5} strokeDasharray="4 2" />

          {/* Pans */}
          <ellipse cx={leftX} cy={PAN_Y} rx={38} ry={8} fill="#d97706" />
          <ellipse cx={rightX} cy={PAN_Y} rx={38} ry={8} fill="#d97706" />

          {/* Left weights */}
          {leftWeights.map((w, i) => {
            const spacing = leftWeights.length > 1 ? 28 : 0;
            const xOff = (i - (leftWeights.length - 1) / 2) * (leftWeights.length > 2 ? 22 : spacing);
            return (
              <WeightBox
                key={i}
                x={leftX + xOff}
                y={PAN_Y - (i === 1 && leftWeights.length === 3 ? 26 : 0)}
                label={`${w}${unit}`}
                color="#d97706"
              />
            );
          })}

          {/* Right side: unknown weight */}
          <WeightBox
            x={rightX}
            y={PAN_Y}
            label={submitted ? `${correctAnswer}${unit}` : `?`}
            color="#0891b2"
            isUnknown={!submitted}
          />

          {/* Balance indicator */}
          <text x={CX} y={148} textAnchor="middle" fontSize={9} fill="#78716c" fontWeight={600}>
            {t.balanced}
          </text>
        </svg>
      </div>

      {/* Left sum hint */}
      <div className="flex justify-center pb-3 px-4">
        <div className="bg-amber-100 border border-amber-300 rounded-xl px-4 py-2 text-sm font-bold text-amber-800">
          {leftWeights.join(' + ')} {unit} = <span className="text-amber-600">? {unit}</span>
        </div>
      </div>

      {/* Answer choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val) => {
          const isSelected = selected === val;
          const isCorrectVal = val === correctAnswer;
          return (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => handleSelect(val)}
              className={`py-3 rounded-xl font-extrabold text-lg transition-all border-2 ${
                submitted
                  ? isCorrectVal
                    ? 'bg-green-500 border-green-500 text-white'
                    : isSelected
                    ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected
                  ? 'bg-amber-500 border-amber-500 text-white shadow-lg scale-105'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-amber-50'
              }`}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {val} {unit}
            </motion.button>
          );
        })}
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
              disabled={selected === null}
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
      )}
    </motion.div>
  );
};

export default BalanceScale;
