'use client';

import React, { useRef } from 'react';
import type { KopfrechnenData, SchoolTaskAnswers } from '@/lib/schoolTaskGenerator';

interface Props {
  blockId: string;
  data: KopfrechnenData;
  subQuestionIds: string[];
  answers: SchoolTaskAnswers;
  onChange: (subQuestionId: string, value: string) => void;
  isGrading: boolean;
  correctAnswers: Record<string, string | number>;
}

export default function KopfrechnenTask({
  blockId,
  data,
  subQuestionIds,
  answers,
  onChange,
  isGrading,
  correctAnswers,
}: Props) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const next = inputRefs.current[idx + 1];
      if (next) next.focus();
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 mt-3">
      {data.items.map((item, idx) => {
        const sqId = subQuestionIds[idx];
        const userVal = String(answers[sqId] ?? '');
        const correct = String(correctAnswers[sqId] ?? '');
        const isCorrect = isGrading && userVal.trim() === correct.trim();
        const isWrong = isGrading && userVal.trim() !== '' && userVal.trim() !== correct.trim();
        const isEmpty = isGrading && userVal.trim() === '';

        // Replace ___ with input in the expression
        const parts = item.expr.split('___');
        const hasBlankAtEnd = item.expr.endsWith('___');

        return (
          <div key={idx} className="flex items-center gap-1 font-mono text-base text-slate-800">
            <span className="text-slate-400 text-xs font-bold mr-1 select-none">
              {idx + 1}.
            </span>
            {parts[0] && <span>{parts[0]}</span>}
            <input
              ref={(el) => { inputRefs.current[idx] = el; }}
              type="text"
              inputMode="numeric"
              value={userVal}
              onChange={(e) => !isGrading && onChange(sqId, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              readOnly={isGrading}
              placeholder=""
              className={`
                w-12 text-center text-base font-bold border-b-2 border-t-0 border-l-0 border-r-0
                bg-transparent outline-none transition-colors
                ${isCorrect ? 'border-green-500 text-green-600' : ''}
                ${isWrong || isEmpty ? 'border-red-400 text-red-500 line-through' : ''}
                ${!isGrading ? 'border-slate-700 text-indigo-600 focus:border-indigo-500' : ''}
              `}
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            />
            {isWrong && (
              <span className="text-green-600 text-xs font-bold ml-1">{correct}</span>
            )}
            {isEmpty && (
              <span className="text-green-600 text-xs font-bold ml-1">{correct}</span>
            )}
            {parts[1] && !hasBlankAtEnd && <span>{parts[1]}</span>}
          </div>
        );
      })}
    </div>
  );
}
