'use client';

import React, { useRef } from 'react';
import type { ZahlenreiheData, SchoolTaskAnswers } from '@/lib/schoolTaskGenerator';

interface Props {
  blockId: string;
  data: ZahlenreiheData;
  subQuestionIds: string[];
  answers: SchoolTaskAnswers;
  onChange: (subQuestionId: string, value: string) => void;
  isGrading: boolean;
  correctAnswers: Record<string, string | number>;
}

export default function ZahlenreiheTask({
  blockId,
  data,
  subQuestionIds,
  answers,
  onChange,
  isGrading,
  correctAnswers,
}: Props) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  let globalIdx = 0;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const next = inputRefs.current[idx + 1];
      if (next) next.focus();
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-3">
      {data.rows.map((row, ri) => {
        const startIdx = globalIdx;
        globalIdx += row.blanks;

        return (
          <div key={ri} className="flex flex-wrap items-center gap-1">
            {/* Given numbers */}
            {row.given.map((n, gi) => (
              <React.Fragment key={`g_${gi}`}>
                <span className="font-mono text-base font-bold text-slate-800 min-w-[36px] text-center border-b-2 border-slate-300 px-1">
                  {n}
                </span>
                <span className="text-slate-400 text-sm select-none">→</span>
              </React.Fragment>
            ))}

            {/* Blank inputs */}
            {Array.from({ length: row.blanks }).map((_, bi) => {
              const idx = startIdx + bi;
              const sqId = subQuestionIds[idx];
              const userVal = String(answers[sqId] ?? '');
              const correct = String(correctAnswers[sqId] ?? '');
              const isCorrect = isGrading && userVal.trim() === correct.trim();
              const isWrong = isGrading && userVal.trim() !== '' && userVal.trim() !== correct.trim();
              const isEmpty = isGrading && userVal.trim() === '';

              return (
                <React.Fragment key={`b_${bi}`}>
                  <div className="flex flex-col items-center">
                    <input
                      ref={(el) => { inputRefs.current[idx] = el; }}
                      type="text"
                      inputMode="numeric"
                      value={userVal}
                      onChange={(e) => !isGrading && onChange(sqId, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      readOnly={isGrading}
                      placeholder="?"
                      className={`
                        w-12 text-center text-base font-bold border-b-2 border-t-0 border-l-0 border-r-0
                        bg-transparent outline-none transition-colors
                        ${isCorrect ? 'border-green-500 text-green-600' : ''}
                        ${isWrong || isEmpty ? 'border-red-400 text-red-500 line-through' : ''}
                        ${!isGrading ? 'border-slate-700 text-indigo-600 focus:border-indigo-500' : ''}
                      `}
                      style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                    />
                    {(isWrong || isEmpty) && (
                      <span className="text-green-600 text-[10px] font-bold">{correct}</span>
                    )}
                  </div>
                  {bi < row.blanks - 1 && (
                    <span className="text-slate-400 text-sm select-none">→</span>
                  )}
                </React.Fragment>
              );
            })}

            {/* Rule hint */}
            <span className="ml-2 text-xs text-slate-400 font-mono bg-slate-100 px-2 py-0.5 rounded">
              ({row.rule})
            </span>
          </div>
        );
      })}
    </div>
  );
}
