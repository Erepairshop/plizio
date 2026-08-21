'use client';

import { useState, useEffect, useRef } from 'react';
import * as K3K4SvgsB from '@/components/testpapier-visual/svg/K3K4SvgsB';

interface Props {
  stages: string[];
  correctOrder: string[];
  stageSvgs: Record<string, string>;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  ui?: {
    cycle: string;
    tapOrder: string;
    correct: string;
    correctPrefix: string;
    missing: string;
  };
}

export default function WasserkreislaufOrdnen({ stages, correctOrder, stageSvgs, userAnswer, submitted, onAnswer, ui }: Props) {
  const labels = ui ?? {
    cycle: 'Kreislauf:',
    tapOrder: 'Tippe in richtiger Reihenfolge...',
    correct: '✓ Richtig!',
    correctPrefix: '✗ Richtig:',
    missing: 'SVG fehlt',
  };
  const [selected, setSelected] = useState<string[]>([]);
  const [shuffled] = useState(() => [...stages].sort(() => Math.random() - 0.5));
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
    <div className="px-1 py-1.5 w-full">
      {/* Chain display */}
      <div className="flex items-center gap-1 mb-3 flex-wrap min-h-[26px]">
        <span className="text-slate-400 text-xs shrink-0 mr-1">{labels.cycle}</span>
        {selected.length === 0 && (
          <span className="text-slate-300 text-xs italic">{labels.tapOrder}</span>
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

      {/* Item buttons with SVGs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {shuffled.map((item) => {
          const inChain = selected.includes(item);
          const svgName = stageSvgs[item];
          const SvgComponent = svgName ? (K3K4SvgsB as any)[`${svgName}NoBorder`] : null;
          const orderIndex = selected.indexOf(item);

          return (
            <button
              key={item}
              disabled={submitted}
              onClick={() => handleTap(item)}
              className={`relative flex flex-col items-center p-2 rounded-xl border-2 transition-all ${
                inChain
                  ? 'bg-blue-50 border-blue-400'
                  : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50'
              } ${submitted && !inChain ? 'opacity-50' : ''}`}
            >
              {inChain && (
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {orderIndex + 1}
                </div>
              )}
              <div className="h-12 w-full flex items-center justify-center mb-1">
                {SvgComponent ? <SvgComponent /> : <div className="text-[10px] text-slate-400">{labels.missing}</div>}
              </div>
              <span className={`text-[10px] font-bold text-center leading-tight ${inChain ? 'text-blue-700' : 'text-slate-600'}`}>
                {item}
              </span>
            </button>
          );
        })}
      </div>

      {submitted && (
        <div className={`mt-3 text-xs font-bold text-center ${isCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
          {isCorrect ? labels.correct : `${labels.correctPrefix} ${correctOrder.join(' → ')}`}
        </div>
      )}
    </div>
  );
}
