'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface AreaGridProps {
  width?: number;
  height?: number;
  shapeType?: 'rectangle' | 'lshape' | 'tshape';
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: { title: 'Terület kiszámítása', hint: 'Számold meg a négyzetcentimétereket!', submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra', question: 'Hány négyzetcentiméter a területe?', unit: 'cm²', yourAnswer: 'Terület =' },
  de: { title: 'Fläche berechnen', hint: 'Zähle die Quadratzentimeter!', submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal', question: 'Wie viele Quadratzentimeter hat die Fläche?', unit: 'cm²', yourAnswer: 'Fläche =' },
  en: { title: 'Calculate area', hint: 'Count the square centimetres!', submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry', question: 'How many square centimetres is the area?', unit: 'cm²', yourAnswer: 'Area =' },
  ro: { title: 'Calculează aria', hint: 'Numără centimetrii pătrați!', submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou', question: 'Câți centimetri pătrați are suprafața?', unit: 'cm²', yourAnswer: 'Arie =' },
};

// Grid cell model: filled cells = area
function buildGrid(shapeType: string, w: number, h: number): { cells: boolean[][]; area: number; gridW: number; gridH: number } {
  if (shapeType === 'rectangle') {
    const cells = Array.from({ length: h }, () => Array(w).fill(true));
    return { cells, area: w * h, gridW: w, gridH: h };
  }
  if (shapeType === 'lshape') {
    // L-shape: main rectangle bottom + small rect top-left
    const gW = w, gH = h;
    const splitRow = Math.floor(h / 2);
    const splitCol = Math.floor(w / 2);
    const cells = Array.from({ length: gH }, (_, r) =>
      Array.from({ length: gW }, (_, c) => r >= splitRow || c < splitCol)
    );
    const area = cells.flat().filter(Boolean).length;
    return { cells, area, gridW: gW, gridH: gH };
  }
  // tshape: top row partial + full bottom section
  const gW = w, gH = h;
  const splitRow = Math.floor(h / 3);
  const leftPad = Math.floor(w / 4);
  const cells = Array.from({ length: gH }, (_, r) =>
    Array.from({ length: gW }, (_, c) => r >= splitRow || (c >= leftPad && c < gW - leftPad))
  );
  const area = cells.flat().filter(Boolean).length;
  return { cells, area, gridW: gW, gridH: gH };
}

const AreaGrid: React.FC<AreaGridProps> = ({
  width: propW,
  height: propH,
  shapeType: propType,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { cells, correctAnswer, gridW, gridH, formula } = useMemo(() => {
    const types: Array<'rectangle' | 'lshape' | 'tshape'> = ['rectangle', 'lshape', 'tshape'];
    const stype = propType ?? types[Math.floor(Math.random() * types.length)];
    const w = propW ?? (Math.floor(Math.random() * 5) + 4); // 4-8
    const h = propH ?? (Math.floor(Math.random() * 4) + 3); // 3-6
    const { cells, area, gridW, gridH } = buildGrid(stype, w, h);
    const fm = stype === 'rectangle' ? `${w} × ${h} = ${area} ${t.unit}` : `${area} ${t.unit}`;
    return { cells, correctAnswer: area, gridW, gridH, formula: fm };
  }, [propW, propH, propType, language]); // eslint-disable-line react-hooks/exhaustive-deps

  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<[number, number] | null>(null);

  const onValueChangeRef = React.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && inputVal.trim()) {
      onValueChangeRef.current(inputVal.trim());
    }
  }, [embedded, inputVal]);

  const handleSubmit = () => {
    if (embedded) return;
    playClick();
    const ans = parseInt(inputVal.trim());
    const isCorrect = ans === correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, ans || 0), 1800);
  };

  const handleReset = () => {
    playClick();
    setInputVal('');
    setFeedback(null);
    setSubmitted(false);
    setHoveredCell(null);
  };

  const CELL = Math.min(28, Math.floor(180 / Math.max(gridW, gridH)));
  const svgW = gridW * CELL + 2;
  const svgH = gridH * CELL + 2;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {!embedded && (
        <div className="px-5 pt-5 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center">
              <span className="text-white font-black text-base">▦</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Grid */}
      <div className="flex justify-center px-4 py-4">
        <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-3 inline-block">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: svgW, height: svgH }}>
            {cells.map((row, r) =>
              row.map((filled, c) => {
                const isHovered = hoveredCell?.[0] === r && hoveredCell?.[1] === c;
                return filled ? (
                  <rect
                    key={`${r}-${c}`}
                    x={c * CELL + 1}
                    y={r * CELL + 1}
                    width={CELL - 1}
                    height={CELL - 1}
                    fill={isHovered ? '#f97316' : '#fed7aa'}
                    stroke="#ea580c"
                    strokeWidth={1}
                    style={{ cursor: 'default' }}
                    onMouseEnter={() => setHoveredCell([r, c])}
                    onMouseLeave={() => setHoveredCell(null)}
                  />
                ) : null;
              })
            )}
            {/* 1cm labels on first row/col */}
            {cells[0].map((filled, c) =>
              filled && c < 3 ? (
                <text key={`lc${c}`} x={c * CELL + CELL / 2 + 1} y={svgH - 2} textAnchor="middle" fontSize={8} fill="#9a3412" fontWeight={600}>
                  1
                </text>
              ) : null
            )}
          </svg>
        </div>
      </div>

      {/* cm² unit reminder */}
      <div className="flex justify-center pb-2">
        <span className="text-xs font-bold text-orange-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
          1 mező = 1 {t.unit}
        </span>
      </div>

      {/* Input */}
      <div className="px-5 pb-4 flex flex-col items-center gap-2">
        <p className="text-sm font-bold text-slate-600">{t.question}</p>
        <div className="flex items-center gap-2">
          <span className="text-slate-600 font-bold">{t.yourAnswer}</span>
          <input
            type="number"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit()}
            disabled={submitted}
            placeholder="?"
            className="w-24 text-center text-2xl font-black text-slate-800 border-2 border-orange-400 rounded-xl py-2 bg-white focus:border-orange-600 focus:outline-none disabled:opacity-60 appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
          <span className="text-slate-500 font-bold">{t.unit}</span>
        </div>
        {submitted && feedback === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold text-orange-700 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200"
          >
            ✓ {formula}
          </motion.div>
        )}
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
              disabled={!inputVal.trim()}
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

export default AreaGrid;
