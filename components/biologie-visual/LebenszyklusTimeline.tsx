'use client';

/**
 * LebenszyklusTimeline — Order lifecycle stages of an organism
 * Unique biology component: tap stages in correct sequence
 */

import { useState, useEffect, useRef } from 'react';

interface Props {
  organism: string;              // e.g. "Frosch"
  stages: string[];              // shuffled stage names
  stageEmojis: Record<string, string>; // emoji per stage
  correctOrder: string[];        // correct sequence
  userAnswer: string;            // comma-joined selected order
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function LebenszyklusTimeline({ organism, stages, stageEmojis, correctOrder, userAnswer, submitted, onAnswer }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [shuffled] = useState(() => [...stages].sort(() => Math.random() - 0.5));
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && userAnswer) {
      initialized.current = true;
      setSelected(userAnswer.split(',').filter(Boolean));
    }
  }, [userAnswer]);

  const handleTap = (stage: string) => {
    if (submitted) return;
    let next: string[];
    if (selected.includes(stage)) {
      next = selected.filter((s) => s !== stage);
    } else {
      next = [...selected, stage];
    }
    setSelected(next);
    onAnswer(next.join(','));
  };

  const isCorrect = selected.length === correctOrder.length && selected.join(',') === correctOrder.join(',');

  return (
    <div className="px-1 py-1.5">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-sm font-bold text-slate-800">
          Lebenszyklus: <em>{organism}</em> — richtige Reihenfolge?
        </span>
      </div>

      {/* Timeline display */}
      <div className="flex items-center gap-1 mb-1.5 pl-6 flex-wrap min-h-[24px]">
        {selected.length === 0 && (
          <span className="text-slate-300 text-xs italic">Tippe die Phasen in richtiger Reihenfolge...</span>
        )}
        {selected.map((stage, i) => (
          <span key={i} className="flex items-center gap-0.5">
            {i > 0 && <span className="text-slate-400 text-xs">→</span>}
            <span
              className={`px-2 py-0.5 rounded text-xs font-bold ${
                submitted
                  ? isCorrect
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                    : 'bg-red-100 text-red-600 border border-red-200'
                  : 'bg-blue-100 text-blue-700 border border-blue-300'
              }`}
            >
              {stageEmojis[stage]} {stage}
            </span>
          </span>
        ))}
      </div>

      {/* Stage buttons */}
      {!submitted && (
        <div className="flex gap-1.5 flex-wrap pl-6">
          {shuffled.map((stage) => {
            const inChain = selected.includes(stage);
            return (
              <button
                key={stage}
                style={{ height: 24, lineHeight: "24px" }}
                className={`px-2 rounded border font-bold text-xs transition-all flex items-center gap-1 ${
                  inChain
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'bg-white border-green-300 text-green-700 hover:bg-green-50'
                }`}
                onClick={() => handleTap(stage)}
              >
                {stageEmojis[stage]} {stage}
              </button>
            );
          })}
        </div>
      )}

      {submitted && (
        <div className={`text-xs font-bold pl-6 ${isCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
          {isCorrect
            ? '✓ Richtig!'
            : `✗ Richtig: ${correctOrder.map((s) => `${stageEmojis[s]} ${s}`).join(' → ')}`}
        </div>
      )}
    </div>
  );
}
