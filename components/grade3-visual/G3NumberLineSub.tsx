'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  start: number;   // starting value on number line
  stepSize: number; // how much each step goes back
  steps: number;   // number of backward steps
  lang: 'hu' | 'de' | 'en' | 'ro';
  embedded?: boolean;
  onValueChange?: (value: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const T = {
  hu: { q: (s: number, sz: number, n: number) => `${s}-ból lépj vissza ${sz}-t, ${n}-szer. Hol állsz?`, check: 'Ellenőrzés', correct: '✓ Helyes!', wrong: '✗ Próbáld újra!' },
  de: { q: (s: number, sz: number, n: number) => `Gehe von ${s} um ${sz} zurück, ${n}-mal. Wo bist du?`, check: 'Prüfen', correct: '✓ Richtig!', wrong: '✗ Versuche es noch mal!' },
  en: { q: (s: number, sz: number, n: number) => `Start at ${s}, jump back by ${sz}, ${n} times. Where do you land?`, check: 'Check', correct: '✓ Correct!', wrong: '✗ Try again!' },
  ro: { q: (s: number, sz: number, n: number) => `Pleacă de la ${s}, sari înapoi cu ${sz}, de ${n} ori. Unde ajungi?`, check: 'Verifică', correct: '✓ Corect!', wrong: '✗ Încearcă din nou!' },
};

export default function G3NumberLineSub({ start, stepSize, steps, lang, embedded = false, onValueChange, onAnswer }: Props) {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const answer = start - stepSize * steps;
  const labels = T[lang];

  // Build number line points
  const min = Math.max(0, answer - 2);
  const max = start + 2;
  const range = max - min;
  const W = 280;
  const PAD = 20;
  const usable = W - PAD * 2;

  const xOf = (v: number) => PAD + ((v - min) / range) * usable;

  // Generate the tick marks we care about
  const keyPoints: number[] = [];
  for (let i = 0; i <= steps; i++) keyPoints.push(start - i * stepSize);

  return (
    <div className={`flex flex-col gap-4 ${embedded ? 'p-2' : 'p-6 bg-teal-50 rounded-2xl'}`}>
      {/* Number line SVG */}
      <div className="flex justify-center overflow-x-auto">
        <svg width={W} height={80}>
          {/* Line */}
          <line x1={PAD} y1={40} x2={W - PAD} y2={40} stroke="#94a3b8" strokeWidth={2} />
          {/* Arrowhead right */}
          <polygon points={`${W - PAD},36 ${W - PAD},44 ${W - PAD + 8},40`} fill="#94a3b8" />

          {/* All ticks */}
          {Array.from({ length: range + 1 }).map((_, i) => {
            const v = min + i;
            const x = xOf(v);
            const isKey = keyPoints.includes(v);
            return (
              <g key={v}>
                <line x1={x} y1={isKey ? 30 : 35} x2={x} y2={50} stroke={isKey ? '#0d9488' : '#cbd5e1'} strokeWidth={isKey ? 2 : 1} />
                {isKey && <text x={x} y={64} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#0d9488">{v}</text>}
              </g>
            );
          })}

          {/* Backward arrows (arcs) */}
          {Array.from({ length: steps }).map((_, i) => {
            const from = start - i * stepSize;
            const to = from - stepSize;
            const xFrom = xOf(from);
            const xTo = xOf(to);
            const mx = (xFrom + xTo) / 2;
            const d = `M ${xFrom},38 Q ${mx},18 ${xTo},38`;
            return (
              <g key={i}>
                <motion.path d={d} fill="none" stroke="#ef4444" strokeWidth={2}
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.4 }} />
                <polygon points={`${xTo - 4},34 ${xTo + 4},34 ${xTo},42`} fill="#ef4444" />
              </g>
            );
          })}

          {/* Start dot */}
          <circle cx={xOf(start)} cy={40} r={5} fill="#0d9488" />
          {/* End dot (question mark) */}
          <circle cx={xOf(answer)} cy={40} r={5} fill="#ef4444" stroke="#b91c1c" strokeWidth={2} />
          <text x={xOf(answer)} y={20} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#b91c1c">?</text>
        </svg>
      </div>

      <div className="text-center text-sm font-bold text-slate-700">{labels.q(start, stepSize, steps)}</div>

      <div className="flex items-center justify-center gap-3">
        <input type="number" value={input}
          onChange={e => { setInput(e.target.value); if (embedded) onValueChange?.(e.target.value); }}
          disabled={submitted} placeholder="?"
          className="w-20 text-center text-xl font-bold py-2 border-2 border-teal-300 rounded-xl outline-none focus:border-teal-500 disabled:opacity-60 bg-white"
        />
        {!embedded && !submitted && (
          <button onClick={handleSubmit} disabled={!input}
            className="px-4 py-2 rounded-xl bg-teal-500 text-white font-bold text-sm hover:bg-teal-600 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all">
            {labels.check}
          </button>
        )}
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div className={`text-center font-bold py-2 rounded-lg text-sm ${feedback === 'correct' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {feedback === 'correct' ? labels.correct : labels.wrong}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  function handleSubmit() {
    if (!input) return;
    const isCorrect = parseInt(input) === answer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setSubmitted(true);
    if (embedded) onValueChange?.(input);
    onAnswer?.(isCorrect);
  }
}
