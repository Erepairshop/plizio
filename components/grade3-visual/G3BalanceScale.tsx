'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  weightA: number;
  weightB: number;
  unitA?: string;
  unitB?: string;
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const LABELS = {
  hu: { question: 'A mérleg melyik oldala nehezebb?', left: 'Bal (A)', right: 'Jobb (B)', equal: 'Egyenlő', check: 'Ellenőrzés', correct: '✓ Helyes!', incorrect: '✗ Próbáld újra!' },
  de: { question: 'Welche Seite der Waage ist schwerer?', left: 'Links (A)', right: 'Rechts (B)', equal: 'Gleich', check: 'Prüfen', correct: '✓ Richtig!', incorrect: '✗ Versuche es noch mal!' },
  en: { question: 'Which side of the scale is heavier?', left: 'Left (A)', right: 'Right (B)', equal: 'Equal', check: 'Check', correct: '✓ Correct!', incorrect: '✗ Try again!' },
  ro: { question: 'Care parte a balanței este mai grea?', left: 'Stânga (A)', right: 'Dreapta (B)', equal: 'Egal', check: 'Verifică', correct: '✓ Corect!', incorrect: '✗ Încearcă din nou!' },
};

export default function G3BalanceScale({ weightA, weightB, unitA = 'g', unitB = 'g', lang, embedded = false, onValueChange, onAnswer }: Props) {
  const labels = LABELS[lang];
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  const correct = weightA > weightB ? 'heavier' : weightA < weightB ? 'lighter' : 'equal';

  const handleAnswer = useCallback((answer: string) => {
    setUserAnswer(answer);
    const isCorrect = answer === correct;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    onValueChange?.(answer);
    onAnswer?.(isCorrect);
  }, [correct, onValueChange, onAnswer]);

  const tilt = weightA > weightB ? -12 : weightA < weightB ? 12 : 0;

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-blue-50 rounded-2xl'}`}>
      {/* Scale SVG */}
      <div className="flex justify-center">
        <svg width="220" height="130" viewBox="0 0 220 130">
          {/* Base */}
          <rect x="95" y="110" width="30" height="12" rx="3" fill="#94a3b8" />
          <rect x="105" y="60" width="10" height="50" fill="#94a3b8" />
          {/* Beam */}
          <motion.g
            style={{ originX: '110px', originY: '60px' }}
            animate={{ rotate: tilt }}
            transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
          >
            <line x1="30" y1="60" x2="190" y2="60" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
            {/* Left pan string */}
            <line x1="50" y1="60" x2="50" y2="85" stroke="#94a3b8" strokeWidth="2" />
            {/* Right pan string */}
            <line x1="170" y1="60" x2="170" y2="85" stroke="#94a3b8" strokeWidth="2" />
            {/* Left pan */}
            <ellipse cx="50" cy="88" rx="28" ry="8" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
            <text x="50" y="80" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1d4ed8">{weightA}{unitA}</text>
            {/* Right pan */}
            <ellipse cx="170" cy="88" rx="28" ry="8" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
            <text x="170" y="80" textAnchor="middle" fontSize="11" fontWeight="700" fill="#15803d">{weightB}{unitB}</text>
          </motion.g>
          {/* Pivot */}
          <circle cx="110" cy="60" r="5" fill="#475569" />
          {/* Labels A/B */}
          <text x="50" y="108" textAnchor="middle" fontSize="13" fontWeight="800" fill="#1d4ed8">A</text>
          <text x="170" y="108" textAnchor="middle" fontSize="13" fontWeight="800" fill="#15803d">B</text>
        </svg>
      </div>

      {/* Question */}
      <div className="text-center text-sm font-semibold text-slate-700">{labels.question}</div>

      {/* Buttons */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { key: 'heavier', label: labels.left },
          { key: 'equal', label: labels.equal },
          { key: 'lighter', label: labels.right },
        ].map((opt) => (
          <motion.button
            key={opt.key}
            onClick={() => handleAnswer(opt.key)}
            className={`py-2 px-2 rounded-lg font-bold text-xs transition-all ${
              userAnswer === opt.key ? 'bg-blue-500 text-white' : 'bg-white text-slate-700 border-2 border-slate-300 hover:border-blue-500'
            }`}
            whileTap={{ scale: 0.95 }}
          >
            {opt.label}
          </motion.button>
        ))}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`text-center font-bold py-2 rounded-lg text-sm ${feedback === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            {feedback === 'correct' ? labels.correct : labels.incorrect}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
