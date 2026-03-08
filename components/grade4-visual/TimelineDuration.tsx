'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, RotateCcw, Timer } from 'lucide-react';
import { playCorrect, playIncorrect, playClick } from '@/lib/soundEffects';

interface TimelineDurationProps {
  startHour?: number;
  endHour?: number;
  events?: { time: number; label: string }[];
  language?: 'hu' | 'de' | 'en' | 'ro';
  onAnswer: (isCorrect: boolean, answer: number) => void;
}

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    title: 'Mennyi idő telt el?',
    hint: 'Számold ki az időtartamot a kezdés és a vég között.',
    submit: 'Ellenőrzés',
    correct: 'Helyes! Szuper!',
    incorrect: 'Nem stimmel. Próbáld újra!',
    tryAgain: 'Újra',
    hours: 'óra',
    answer: 'Válaszod:',
    start: 'Kezdés',
    end: 'Vége',
  },
  de: {
    title: 'Wie viel Zeit ist vergangen?',
    hint: 'Berechne die Dauer zwischen Anfang und Ende.',
    submit: 'Prüfen',
    correct: 'Richtig! Super!',
    incorrect: 'Stimmt nicht. Versuche nochmal!',
    tryAgain: 'Nochmal',
    hours: 'Stunden',
    answer: 'Deine Antwort:',
    start: 'Start',
    end: 'Ende',
  },
  en: {
    title: 'How much time has passed?',
    hint: 'Calculate the duration between start and end.',
    submit: 'Check',
    correct: 'Correct! Great!',
    incorrect: 'Not right. Try again!',
    tryAgain: 'Retry',
    hours: 'hours',
    answer: 'Your answer:',
    start: 'Start',
    end: 'End',
  },
  ro: {
    title: 'Cât timp a trecut?',
    hint: 'Calculează durata între început și sfârșit.',
    submit: 'Verificare',
    correct: 'Corect! Super!',
    incorrect: 'Nu e corect. Încearcă din nou!',
    tryAgain: 'Din nou',
    hours: 'ore',
    answer: 'Răspunsul tău:',
    start: 'Start',
    end: 'Sfârșit',
  },
};

const TimelineDuration: React.FC<TimelineDurationProps> = ({
  startHour: propStart,
  endHour: propEnd,
  events: propEvents,
  language = 'de',
  onAnswer,
}) => {
  const t = LABELS[language] || LABELS.en;

  const startHour = useMemo(() => propStart ?? (Math.floor(Math.random() * 4) + 7), [propStart]);
  const endHour = useMemo(() => propEnd ?? (startHour + Math.floor(Math.random() * 6) + 2), [propEnd, startHour]);
  const correctAnswer = endHour - startHour;

  const events = useMemo(() => propEvents || [
    { time: startHour, label: t.start },
    { time: endHour, label: t.end },
  ], [propEvents, startHour, endHour, t]);

  const [inputVal, setInputVal] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const answer = parseInt(inputVal);
    if (isNaN(answer)) return;
    playClick();
    const isCorrect = answer === correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (isCorrect) playCorrect(); else playIncorrect();
    setTimeout(() => onAnswer(isCorrect, answer), 1800);
  };

  const handleReset = () => {
    playClick();
    setInputVal('');
    setFeedback(null);
    setSubmitted(false);
  };

  // SVG timeline
  const PAD = 40;
  const W = 400;
  const lineY = 60;
  const totalHours = endHour - startHour + 2; // extra padding
  const hourWidth = (W - 2 * PAD) / totalHours;

  const hourToX = (h: number) => PAD + (h - startHour + 1) * hourWidth;

  return (
    <motion.div
      className="w-full rounded-2xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #99f6e4 100%)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center">
            <Timer size={18} className="text-white" />
          </div>
          <h3 className="text-lg font-extrabold text-slate-800">{t.title}</h3>
        </div>
        <p className="text-sm text-slate-500 ml-12">{t.hint}</p>
      </div>

      {/* Timeline SVG */}
      <div className="px-4 pb-4">
        <svg viewBox={`0 0 ${W} 120`} className="w-full" style={{ maxHeight: 140 }}>
          {/* Main timeline line */}
          <line
            x1={PAD} y1={lineY} x2={W - PAD} y2={lineY}
            stroke="#94a3b8" strokeWidth={3} strokeLinecap="round"
          />

          {/* Hour ticks */}
          {Array.from({ length: totalHours + 1 }, (_, i) => {
            const hour = startHour - 1 + i;
            const x = PAD + i * hourWidth;
            return (
              <g key={i}>
                <line x1={x} y1={lineY - 8} x2={x} y2={lineY + 8} stroke="#64748b" strokeWidth={1.5} />
                <text x={x} y={lineY + 24} textAnchor="middle" fontSize={11} fontWeight={700} fill="#475569">
                  {hour}:00
                </text>
              </g>
            );
          })}

          {/* Duration bracket */}
          <line
            x1={hourToX(startHour)} y1={lineY - 20}
            x2={hourToX(endHour)} y2={lineY - 20}
            stroke="#14b8a6" strokeWidth={3} strokeLinecap="round"
          />
          <line x1={hourToX(startHour)} y1={lineY - 26} x2={hourToX(startHour)} y2={lineY - 14} stroke="#14b8a6" strokeWidth={2} />
          <line x1={hourToX(endHour)} y1={lineY - 26} x2={hourToX(endHour)} y2={lineY - 14} stroke="#14b8a6" strokeWidth={2} />
          <text
            x={(hourToX(startHour) + hourToX(endHour)) / 2} y={lineY - 28}
            textAnchor="middle" fontSize={13} fontWeight={900} fill="#0d9488"
          >
            ? {t.hours}
          </text>

          {/* Event markers */}
          {events.map((ev, i) => {
            const x = hourToX(ev.time);
            return (
              <g key={i}>
                <circle cx={x} cy={lineY} r={8} fill={i === 0 ? '#22c55e' : '#ef4444'} />
                <text x={x} y={lineY + 42} textAnchor="middle" fontSize={10} fontWeight={700} fill="#334155">
                  {ev.label}
                </text>
                <text x={x} y={lineY + 54} textAnchor="middle" fontSize={9} fontWeight={600} fill="#64748b">
                  {ev.time}:00
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Answer input */}
      <div className="flex items-center justify-center gap-3 px-5 pb-3">
        <span className="text-sm text-slate-500 font-medium">{t.answer}</span>
        <input
          type="number"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          disabled={submitted}
          placeholder="?"
          className="w-20 text-center text-xl font-black border-2 border-teal-300 rounded-xl py-2 bg-white focus:border-teal-500 focus:outline-none disabled:opacity-60"
        />
        <span className="text-sm text-slate-500 font-medium">{t.hours}</span>
      </div>

      {/* Feedback + Buttons */}
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
            className="w-full py-3 rounded-xl bg-teal-500 text-white font-bold text-sm hover:bg-teal-600 active:scale-[0.98] transition-all disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            {t.submit}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-500 text-white font-bold text-sm hover:bg-teal-600 active:scale-[0.98] transition-all"
          >
            <RotateCcw size={16} />
            {t.tryAgain}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineDuration;
