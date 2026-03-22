'use client';

/**
 * NahrungsketteSort — Build food chain by tapping organisms in correct order
 * Unique biology component: producer → consumer chain visual
 */

import { useState, useEffect, useRef } from 'react';

interface Props {
  organisms: string[];        // shuffled display list
  correctOrder: string[];     // correct order from producer to top predator
  userAnswer: string;         // comma-joined selected order
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function NahrungsketteSort({ organisms, correctOrder, userAnswer, submitted, onAnswer }: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [shuffled] = useState(() => [...organisms].sort(() => Math.random() - 0.5));
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && userAnswer) {
      initialized.current = true;
      setSelected(userAnswer.split(',').filter(Boolean));
    }
  }, [userAnswer]);

  const handleTap = (item: string) => {
    if (submitted) return;
    let next: string[];
    if (selected.includes(item)) {
      next = selected.filter((s) => s !== item);
    } else {
      next = [...selected, item];
    }
    setSelected(next);
    onAnswer(next.join(','));
  };

  const isCorrect = selected.length === correctOrder.length && selected.join(',') === correctOrder.join(',');

  return (
    <div className="px-1 py-1.5">
      {/* Chain display */}
      <div className="flex items-center gap-1 mb-1.5 flex-wrap min-h-[26px]">
        <span className="text-slate-400 text-xs shrink-0 mr-1">Kette:</span>
        {selected.length === 0 && (
          <span className="text-slate-300 text-xs italic">Tippe in richtiger Reihenfolge...</span>
        )}
        {selected.map((item, i) => (
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
              {item}
            </span>
          </span>
        ))}
      </div>

      {/* Item buttons */}
      {!submitted && (
        <div className="flex gap-1.5 flex-wrap">
          {shuffled.map((item) => {
            const inChain = selected.includes(item);
            return (
              <button
                key={item}
                style={{ height: 22, lineHeight: "22px" }}
                className={`px-2.5 rounded border font-bold text-xs transition-all ${
                  inChain
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'bg-white border-green-300 text-green-700 hover:bg-green-50'
                }`}
                onClick={() => handleTap(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}

      {submitted && (
        <div className={`text-xs font-bold ${isCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
          {isCorrect ? '✓ Richtig!' : `✗ Richtig: ${correctOrder.join(' → ')}`}
        </div>
      )}
    </div>
  );
}
