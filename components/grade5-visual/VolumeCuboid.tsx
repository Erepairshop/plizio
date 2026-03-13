'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface VolumeCuboidProps {
  length?: number;
  width?: number;
  height?: number;
  unit?: 'cm' | 'in';
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: string) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Téglatest térfogata', hint: 'Számítsd ki a téglatest térfogatát!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', question: 'Mi a téglatest térfogata?', formula: 'Térfogat = h × sz × m', length: 'h', width: 'sz', height: 'm' },
  de: { title: 'Volumen des Quaders', hint: 'Berechne das Volumen des Quaders!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', question: 'Wie groß ist das Volumen?', formula: 'V = l × b × h', length: 'l', width: 'b', height: 'h' },
  en: { title: 'Volume of a cuboid', hint: 'Calculate the volume of the cuboid!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', question: 'What is the volume?', formula: 'V = l × w × h', length: 'l', width: 'w', height: 'h' },
  ro: { title: 'Volumul paralelipipedului', hint: 'Calculează volumul paralelipipedului!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', question: 'Care este volumul?', formula: 'V = l × l × h', length: 'l', width: 'l', height: 'h' },
};

function makeVolumeChoices(correct: number): number[] {
  const opts = new Set<number>([correct]);
  const candidates = [
    correct + 1, correct - 1, correct + 2, correct - 2,
    Math.round(correct * 1.5), Math.round(correct * 0.75),
    correct + 4, correct - 4,
  ].filter(v => v > 0 && v !== correct);
  for (const c of candidates.sort(() => Math.random() - 0.5)) {
    opts.add(c);
    if (opts.size >= 4) break;
  }
  return Array.from(opts).sort(() => Math.random() - 0.5);
}

// Isometric box drawing
// iso(lx, wx, hz): screen coords from 3D box coordinates
// cx, cy = anchor (front-bottom vertex)
const SX = 14, SY = 7, SZ = 16; // scale per unit

function iso(lx: number, wx: number, hz: number, cx: number, cy: number) {
  return {
    x: cx + (lx - wx) * SX,
    y: cy + (lx + wx) * SY - hz * SZ,
  };
}

function pt(lx: number, wx: number, hz: number, cx: number, cy: number) {
  const p = iso(lx, wx, hz, cx, cy);
  return `${p.x},${p.y}`;
}

const VolumeCuboid: React.FC<VolumeCuboidProps> = ({
  length: propL,
  width: propW,
  height: propH,
  unit: propUnit,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { length, width, height, unit, volume, choices } = useMemo(() => {
    const l = propL ?? (Math.floor(Math.random() * 4) + 2); // 2-5
    const w = propW ?? (Math.floor(Math.random() * 4) + 2); // 2-5
    const h = propH ?? (Math.floor(Math.random() * 3) + 2); // 2-4
    const u = propUnit ?? (language === 'en' ? 'in' : 'cm');
    const vol = l * w * h;
    const ch = makeVolumeChoices(vol).map(String);
    return { length: l, width: w, height: h, unit: u, volume: vol, choices: ch };
  }, [propL, propW, propH, propUnit, language]);

  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const onValueChangeRef = React.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selected !== null) {
      onValueChangeRef.current(selected);
    }
  }, [embedded, selected]);

  const handleSelect = (val: string) => {
    if (submitted) return;
    playClick();
    setSelected(val);
  };

  const handleSubmit = () => {
    if (selected === null || embedded) return;
    playClick();
    const isCorrect = selected === String(volume);
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

  // SVG box drawing
  const SVG_W = 220, SVG_H = 160;
  const cx = SVG_W / 2, cy = SVG_H * 0.72;

  // 8 vertices of the box
  const v = {
    p000: iso(0, 0, 0, cx, cy),
    p100: iso(length, 0, 0, cx, cy),
    p010: iso(0, width, 0, cx, cy),
    p110: iso(length, width, 0, cx, cy),
    p001: iso(0, 0, height, cx, cy),
    p101: iso(length, 0, height, cx, cy),
    p011: iso(0, width, height, cx, cy),
    p111: iso(length, width, height, cx, cy),
  };

  // Face polygons
  const rightFace = `${pt(length, 0, 0, cx, cy)} ${pt(length, width, 0, cx, cy)} ${pt(length, width, height, cx, cy)} ${pt(length, 0, height, cx, cy)}`;
  const leftFace = `${pt(0, width, 0, cx, cy)} ${pt(length, width, 0, cx, cy)} ${pt(length, width, height, cx, cy)} ${pt(0, width, height, cx, cy)}`;
  const topFace = `${pt(0, 0, height, cx, cy)} ${pt(length, 0, height, cx, cy)} ${pt(length, width, height, cx, cy)} ${pt(0, width, height, cx, cy)}`;

  // Dimension label midpoints
  const labelL = { x: (v.p000.x + v.p100.x) / 2, y: (v.p000.y + v.p100.y) / 2 + 14 };
  const labelW = { x: (v.p000.x + v.p010.x) / 2 - 12, y: (v.p000.y + v.p010.y) / 2 + 12 };
  const labelH = { x: v.p100.x + 12, y: (v.p100.y + v.p101.y) / 2 };

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

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
            <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center">
              <span className="text-white font-black text-base">📦</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Isometric box SVG */}
      <div className="flex justify-center px-4 pt-4 pb-2">
        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-3 inline-block">
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} style={{ width: SVG_W, height: SVG_H }}>
            {/* Shadow ellipse */}
            <ellipse cx={cx} cy={cy + 4} rx={length * SX + width * SX} ry={(length + width) * SY * 0.5}
              fill="rgba(0,0,0,0.07)" />

            {/* Right face (lighter) */}
            <polygon points={rightFace} fill="#7dd3fc" stroke="#0284c7" strokeWidth={1.5} strokeLinejoin="round" />
            {/* Left face (medium) */}
            <polygon points={leftFace} fill="#38bdf8" stroke="#0284c7" strokeWidth={1.5} strokeLinejoin="round" />
            {/* Top face (brightest) */}
            <polygon points={topFace} fill="#bae6fd" stroke="#0284c7" strokeWidth={1.5} strokeLinejoin="round" />

            {/* Hidden edges (dashed) */}
            <line x1={v.p000.x} y1={v.p000.y} x2={v.p001.x} y2={v.p001.y}
              stroke="#0284c7" strokeWidth={1} strokeDasharray="3,2" opacity={0.4} />
            <line x1={v.p000.x} y1={v.p000.y} x2={v.p100.x} y2={v.p100.y}
              stroke="#0284c7" strokeWidth={1.5} />
            <line x1={v.p000.x} y1={v.p000.y} x2={v.p010.x} y2={v.p010.y}
              stroke="#0284c7" strokeWidth={1.5} />

            {/* Dimension labels on edges */}
            {/* Length (l) along the right-bottom edge */}
            <text x={labelL.x} y={labelL.y} textAnchor="middle" fontSize={11} fontWeight={800} fill="#0369a1">
              {t.length} = {length} {unit}
            </text>
            {/* Width (w) along the left-bottom edge */}
            <text x={labelW.x} y={labelW.y} textAnchor="middle" fontSize={11} fontWeight={800} fill="#0369a1">
              {t.width} = {width} {unit}
            </text>
            {/* Height (h) along the right vertical edge */}
            <text x={labelH.x} y={labelH.y} textAnchor="start" fontSize={11} fontWeight={800} fill="#0369a1"
              dominantBaseline="middle">
              {t.height} = {height} {unit}
            </text>
          </svg>
        </div>
      </div>

      {/* Formula hint */}
      <div className="px-5 pb-1 text-center">
        <span className="text-xs text-sky-600 font-bold bg-sky-50 px-3 py-1 rounded-full">
          {t.formula}
        </span>
      </div>

      {/* Question */}
      <div className="px-5 pb-3 text-center">
        <p className="text-base font-bold text-slate-700">{t.question}</p>
      </div>

      {/* Choices */}
      <div className="px-4 pb-4 grid grid-cols-2 gap-2">
        {choices.map((val, i) => {
          const isSelected = selected === val;
          const isCorrectVal = Number(val) === volume;
          const color = COLORS[i % COLORS.length];
          return (
            <motion.button
              key={val}
              disabled={submitted}
              onClick={() => handleSelect(val)}
              className={`py-3 rounded-xl font-extrabold text-base transition-all border-2 ${
                submitted
                  ? isCorrectVal
                    ? 'bg-green-500 border-green-500 text-white'
                    : isSelected
                    ? 'bg-red-100 border-red-300 text-red-600 opacity-70'
                    : 'bg-white border-slate-200 text-slate-400 opacity-40'
                  : isSelected
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-sky-50'
              }`}
              style={isSelected && !submitted ? { backgroundColor: color, borderColor: color } : {}}
              whileTap={submitted ? {} : { scale: 0.93 }}
            >
              {val} {unit}³
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
              className="w-full py-3 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 active:scale-[0.98] transition-all"
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

export default VolumeCuboid;
