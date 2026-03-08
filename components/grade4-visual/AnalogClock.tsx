'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Clock } from 'lucide-react';
import { playCorrect, playIncorrect, playClick, playSelect } from '@/lib/soundEffects';

interface AnalogClockProps {
  targetHour?: number;    // 1-12
  targetMinute?: number;  // 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55
  onAnswer: (isCorrect: boolean, hour: number, minute: number) => void;
  language?: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    instruction: 'Hány óra van?',
    hour: 'Óra',
    minute: 'Perc',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
  },
  de: {
    instruction: 'Wie spät ist es?',
    hour: 'Stunde',
    minute: 'Minute',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
  },
  en: {
    instruction: 'What time is it?',
    hour: 'Hour',
    minute: 'Minute',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
  },
  ro: {
    instruction: 'Cât este ceasul?',
    hour: 'Ora',
    minute: 'Minut',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
  },
};

// 5 perces intervallumok
const MINUTE_OPTIONS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const AnalogClock: React.FC<AnalogClockProps> = ({
  targetHour,
  targetMinute,
  onAnswer,
  language = 'de',
  embedded = false,
  onValueChange,
}) => {
  const t = LABELS[language] || LABELS.en;

  const hour = useMemo(() => targetHour ?? (Math.floor(Math.random() * 12) + 1), [targetHour]);
  const minute = useMemo(() => {
    if (targetMinute !== undefined) return targetMinute;
    return MINUTE_OPTIONS[Math.floor(Math.random() * MINUTE_OPTIONS.length)];
  }, [targetMinute]);

  const [selHour, setSelHour] = useState<number | null>(null);
  const [selMinute, setSelMinute] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Embedded mode: report value immediately when both selected
  const onValueChangeRef = useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  React.useEffect(() => {
    if (embedded && onValueChangeRef.current && selHour !== null && selMinute !== null) {
      onValueChangeRef.current(`${selHour}:${selMinute.toString().padStart(2, '0')}`);
    }
  }, [embedded, selHour, selMinute]);

  // Szög-kalkuláció
  const hourAngle = ((hour % 12) + minute / 60) * 30 - 90; // fokban, 12 óra = -90°
  const minuteAngle = minute * 6 - 90;

  const handleSubmit = () => {
    if (selHour === null || selMinute === null) return;
    playClick();

    const isCorrect = selHour === hour && selMinute === minute;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, selHour, selMinute), 1800);
  };

  const handleReset = () => {
    playClick();
    setSelHour(null);
    setSelMinute(null);
    setFeedback(null);
    setSubmitted(false);
  };

  const CX = 120, CY = 120, R = 105;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #f5f3ff 50%, #ede9fe 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      {!embedded && (
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-violet-500 flex items-center justify-center">
            <Clock size={18} className="text-white" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">{t.instruction}</h3>
        </div>
      </div>
      )}

      {/* Óra SVG */}
      <div className={`flex justify-center ${embedded ? 'px-2 pb-2 pt-2' : 'px-4 pb-4'}`}>
        <svg width={embedded ? 160 : 240} height={embedded ? 160 : 240} viewBox="0 0 240 240" className="drop-shadow-xl">
          {/* Külső keret */}
          <circle cx={CX} cy={CY} r={R + 8} fill="#e2e8f0" />
          <circle cx={CX} cy={CY} r={R + 4} fill="#f8fafc" />

          {/* Óra lap */}
          <circle cx={CX} cy={CY} r={R} fill="#fffef7" stroke="#94a3b8" strokeWidth={2} />

          {/* Perc jelölések (60 db) */}
          {Array.from({ length: 60 }, (_, i) => {
            const angle = (i * 6 - 90) * Math.PI / 180;
            const isHour = i % 5 === 0;
            const r1 = isHour ? R - 14 : R - 7;
            const r2 = R - 2;
            return (
              <line
                key={`tick-${i}`}
                x1={CX + r1 * Math.cos(angle)}
                y1={CY + r1 * Math.sin(angle)}
                x2={CX + r2 * Math.cos(angle)}
                y2={CY + r2 * Math.sin(angle)}
                stroke={isHour ? '#334155' : '#cbd5e1'}
                strokeWidth={isHour ? 2.5 : 1}
                strokeLinecap="round"
              />
            );
          })}

          {/* Számok */}
          {Array.from({ length: 12 }, (_, i) => {
            const num = i + 1;
            const angle = (num * 30 - 90) * Math.PI / 180;
            const textR = R - 26;
            return (
              <text
                key={`num-${num}`}
                x={CX + textR * Math.cos(angle)}
                y={CY + textR * Math.sin(angle)}
                textAnchor="middle"
                dy="0.38em"
                fontSize={18}
                fontWeight={800}
                fill="#1e293b"
                fontFamily="system-ui, sans-serif"
              >
                {num}
              </text>
            );
          })}

          {/* Óramutató (vastag, rövid, piros) */}
          {(() => {
            const a = hourAngle * Math.PI / 180;
            const len = 50;
            return (
              <line
                x1={CX - 8 * Math.cos(a)} y1={CY - 8 * Math.sin(a)}
                x2={CX + len * Math.cos(a)} y2={CY + len * Math.sin(a)}
                stroke="#dc2626" strokeWidth={7} strokeLinecap="round"
              />
            );
          })()}

          {/* Percmutató (vékonyabb, hosszabb, kék) */}
          {(() => {
            const a = minuteAngle * Math.PI / 180;
            const len = 72;
            return (
              <line
                x1={CX - 10 * Math.cos(a)} y1={CY - 10 * Math.sin(a)}
                x2={CX + len * Math.cos(a)} y2={CY + len * Math.sin(a)}
                stroke="#2563eb" strokeWidth={4.5} strokeLinecap="round"
              />
            );
          })()}

          {/* Középső kör */}
          <circle cx={CX} cy={CY} r={7} fill="#1e293b" />
          <circle cx={CX} cy={CY} r={3.5} fill="#f1f5f9" />

          {/* Jelmagyarázat */}
          <line x1={15} y1={228} x2={28} y2={228} stroke="#dc2626" strokeWidth={4} strokeLinecap="round" />
          <text x={32} y={228} dy="0.35em" fontSize={9} fill="#64748b" fontWeight={600}>{t.hour}</text>
          <line x1={75} y1={228} x2={88} y2={228} stroke="#2563eb" strokeWidth={3} strokeLinecap="round" />
          <text x={92} y={228} dy="0.35em" fontSize={9} fill="#64748b" fontWeight={600}>{t.minute}</text>
        </svg>
      </div>

      {/* Óra választó */}
      <div className={embedded ? 'px-3 pb-2' : 'px-5 pb-3'}>
        <p className={`text-xs font-bold text-slate-500 uppercase tracking-wide ${embedded ? 'mb-1' : 'mb-2'}`}>{t.hour}</p>
        <div className={`grid grid-cols-6 ${embedded ? 'gap-1' : 'gap-1.5'}`}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
            <motion.button
              key={h}
              disabled={submitted}
              onClick={() => { playSelect(); setSelHour(h); }}
              className={`${embedded ? 'py-1.5 rounded-lg text-xs' : 'py-2.5 rounded-xl text-sm'} font-extrabold transition-all ${
                selHour === h
                  ? 'bg-red-500 text-white shadow-lg shadow-red-200 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-red-300 hover:bg-red-50'
              } ${submitted ? 'opacity-60' : ''}`}
              whileTap={submitted ? {} : { scale: 0.92 }}
            >
              {h}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Perc választó */}
      <div className={embedded ? 'px-3 pb-2' : 'px-5 pb-4'}>
        <p className={`text-xs font-bold text-slate-500 uppercase tracking-wide ${embedded ? 'mb-1' : 'mb-2'}`}>{t.minute}</p>
        <div className={`grid grid-cols-6 ${embedded ? 'gap-1' : 'gap-1.5'}`}>
          {MINUTE_OPTIONS.map((m) => (
            <motion.button
              key={m}
              disabled={submitted}
              onClick={() => { playSelect(); setSelMinute(m); }}
              className={`${embedded ? 'py-1.5 rounded-lg text-xs' : 'py-2.5 rounded-xl text-sm'} font-extrabold transition-all ${
                selMinute === m
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-200 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-blue-50'
              } ${submitted ? 'opacity-60' : ''}`}
              whileTap={submitted ? {} : { scale: 0.92 }}
            >
              {m.toString().padStart(2, '0')}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Kiválasztott idő preview */}
      {selHour !== null && selMinute !== null && !submitted && (
        <div className={`flex justify-center ${embedded ? 'pb-2' : 'pb-3'}`}>
          <div className={`bg-white border-2 border-violet-300 ${embedded ? 'rounded-xl px-4 py-1' : 'rounded-2xl px-6 py-2'} text-center`}>
            <span className={`${embedded ? 'text-lg' : 'text-2xl'} font-black text-violet-700`}>
              {selHour}:{selMinute.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      )}

      {/* Feedback + Gombok — only in standalone mode */}
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
            disabled={selHour === null || selMinute === null}
            className="w-full py-3 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            {t.submit}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 text-white font-bold text-sm hover:bg-violet-700 active:scale-[0.98] transition-all"
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

export default AnalogClock;
