'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface BarChartReadProps {
  data?: { label: string; value: number }[];
  questionType?: 'max' | 'min' | 'total' | 'diff';
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Oszlopdiagram leolvasása', hint: 'Olvasd le az adatokat a diagramból!',
    submit: 'Ellenőrzés', correct: 'Helyes!', incorrect: 'Nem jó. Próbáld újra!', tryAgain: 'Újra',
    qMax: 'Melyik a legnagyobb érték?', qMin: 'Melyik a legkisebb érték?',
    qTotal: 'Mi az összes érték összege?', qDiff: 'Mekkora a különbség a legnagyobb és legkisebb között?',
    yourAnswer: 'Válasz:',
  },
  de: {
    title: 'Balkendiagramm lesen', hint: 'Lies die Daten aus dem Diagramm ab!',
    submit: 'Prüfen', correct: 'Richtig!', incorrect: 'Falsch. Nochmal!', tryAgain: 'Nochmal',
    qMax: 'Was ist der größte Wert?', qMin: 'Was ist der kleinste Wert?',
    qTotal: 'Was ist die Summe aller Werte?', qDiff: 'Wie groß ist der Unterschied zwischen dem größten und kleinsten Wert?',
    yourAnswer: 'Antwort:',
  },
  en: {
    title: 'Reading bar charts', hint: 'Read the data from the chart!',
    submit: 'Check', correct: 'Correct!', incorrect: 'Not right. Try again!', tryAgain: 'Retry',
    qMax: 'What is the largest value?', qMin: 'What is the smallest value?',
    qTotal: 'What is the sum of all values?', qDiff: 'What is the difference between the largest and smallest value?',
    yourAnswer: 'Answer:',
  },
  ro: {
    title: 'Citirea diagramei cu bare', hint: 'Citește datele din diagramă!',
    submit: 'Verificare', correct: 'Corect!', incorrect: 'Greșit. Încearcă din nou!', tryAgain: 'Din nou',
    qMax: 'Care este valoarea cea mai mare?', qMin: 'Care este valoarea cea mai mică?',
    qTotal: 'Care este suma tuturor valorilor?', qDiff: 'Care este diferența dintre cea mai mare și cea mai mică valoare?',
    yourAnswer: 'Răspuns:',
  },
};

const DATASET_TEMPLATES = [
  { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai'] },
  { labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr'] },
  { labels: ['A', 'B', 'C', 'D', 'E'] },
  { labels: ['Klasse 1', 'Klasse 2', 'Klasse 3', 'Klasse 4'] },
];
const BAR_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const BarChartRead: React.FC<BarChartReadProps> = ({
  data: propData,
  questionType: propQType,
  language = 'de',
  onAnswer,
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] ?? LABELS.en;

  const { data, questionType, correctAnswer, question } = useMemo(() => {
    const tpl = DATASET_TEMPLATES[Math.floor(Math.random() * DATASET_TEMPLATES.length)];
    const chartData = propData ?? tpl.labels.map(label => ({
      label,
      value: Math.floor(Math.random() * 8) + 2, // 2-9
    }));
    const qTypes: Array<'max' | 'min' | 'total' | 'diff'> = ['max', 'min', 'total', 'diff'];
    const qt = propQType ?? qTypes[Math.floor(Math.random() * qTypes.length)];
    const vals = chartData.map(d => d.value);
    let ans: number;
    let q: string;
    if (qt === 'max') { ans = Math.max(...vals); q = t.qMax; }
    else if (qt === 'min') { ans = Math.min(...vals); q = t.qMin; }
    else if (qt === 'total') { ans = vals.reduce((a, b) => a + b, 0); q = t.qTotal; }
    else { ans = Math.max(...vals) - Math.min(...vals); q = t.qDiff; }
    return { data: chartData, questionType: qt, correctAnswer: ans, question: q };
  }, [propData, propQType, language]); // eslint-disable-line react-hooks/exhaustive-deps

  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

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
    setHoveredBar(null);
  };

  // SVG chart dimensions
  const maxVal = Math.max(...data.map(d => d.value));
  const CHART_H = 120, CHART_W = 260;
  const BAR_GAP = 8;
  const BAR_W = Math.floor((CHART_W - BAR_GAP * (data.length + 1)) / data.length);
  const SCALE = CHART_H / (maxVal + 1);
  const YPAD = 20;

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
            <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center">
              <span className="text-white font-black text-base">📊</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
        </div>
      )}

      {/* Bar chart SVG */}
      <div className="flex justify-center px-4 py-3 overflow-x-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-3 inline-block">
          <svg viewBox={`0 0 ${CHART_W + 30} ${CHART_H + YPAD + 30}`} style={{ width: CHART_W + 30, height: CHART_H + YPAD + 30 }}>
            {/* Y-axis gridlines */}
            {Array.from({ length: maxVal + 1 }, (_, i) => i).map(v => {
              const y = YPAD + CHART_H - v * SCALE;
              return (
                <g key={v}>
                  <line x1={28} y1={y} x2={CHART_W + 28} y2={y} stroke="#e2e8f0" strokeWidth={1} />
                  <text x={24} y={y + 4} textAnchor="end" fontSize={9} fill="#94a3b8" fontWeight={600}>{v}</text>
                </g>
              );
            })}
            {/* Bars */}
            {data.map((d, i) => {
              const barH = d.value * SCALE;
              const x = 30 + BAR_GAP + i * (BAR_W + BAR_GAP);
              const y = YPAD + CHART_H - barH;
              const color = BAR_COLORS[i % BAR_COLORS.length];
              const isHov = hoveredBar === i;
              return (
                <g key={i}
                  onMouseEnter={() => setHoveredBar(i)}
                  onMouseLeave={() => setHoveredBar(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <rect x={x} y={y} width={BAR_W} height={barH}
                    fill={isHov ? color : color + 'cc'}
                    rx={3}
                  />
                  {/* Value on top */}
                  <text x={x + BAR_W / 2} y={y - 3} textAnchor="middle" fontSize={10} fontWeight={800} fill={color}>
                    {isHov || submitted ? d.value : ''}
                  </text>
                  {/* Label below */}
                  <text x={x + BAR_W / 2} y={YPAD + CHART_H + 14} textAnchor="middle" fontSize={9} fontWeight={700} fill="#475569">
                    {d.label}
                  </text>
                </g>
              );
            })}
            {/* X axis */}
            <line x1={28} y1={YPAD + CHART_H} x2={CHART_W + 28} y2={YPAD + CHART_H} stroke="#cbd5e1" strokeWidth={2} />
            {/* Y axis */}
            <line x1={28} y1={YPAD} x2={28} y2={YPAD + CHART_H} stroke="#cbd5e1" strokeWidth={2} />
          </svg>
        </div>
      </div>

      {/* Question + Input */}
      <div className="px-5 pb-4 flex flex-col items-center gap-2">
        <p className="text-sm font-bold text-slate-700 text-center">{question}</p>
        <div className="flex items-center gap-2">
          <span className="text-slate-600 font-bold text-sm">{t.yourAnswer}</span>
          <input
            type="number"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !submitted && inputVal.trim() && handleSubmit()}
            disabled={submitted}
            placeholder="?"
            className="w-24 text-center text-2xl font-black text-slate-800 border-2 border-sky-400 rounded-xl py-2 bg-white focus:border-sky-600 focus:outline-none disabled:opacity-60 appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
        </div>
        {submitted && feedback === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold text-sky-700 bg-sky-50 px-4 py-1.5 rounded-full border border-sky-200"
          >
            ✓ {correctAnswer}
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
              className="w-full py-3 rounded-xl bg-sky-500 text-white font-bold text-sm hover:bg-sky-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {t.submit}
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 text-white font-bold text-sm hover:bg-sky-600 active:scale-[0.98] transition-all"
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

export default BarChartRead;
