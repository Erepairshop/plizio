'use client';

import React, { useRef } from 'react';
import type { SchriftlichData, SchoolTaskAnswers } from '@/lib/schoolTaskGenerator';

interface Props {
  blockId: string;
  data: SchriftlichData;
  subQuestionIds: string[];
  answers: SchoolTaskAnswers;
  onChange: (subQuestionId: string, value: string) => void;
  isGrading: boolean;
  correctAnswers: Record<string, string | number>;
}

function numToDigits(n: number): string[] {
  return String(n).split('');
}

function padDigits(digits: string[], length: number): string[] {
  while (digits.length < length) digits = [' ', ...digits];
  return digits;
}

export default function SchriftlichTask({
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
    <div className="flex flex-wrap gap-8 mt-3 overflow-x-auto pb-2">
      {data.items.map((item, idx) => {
        const sqId = subQuestionIds[idx];
        const userVal = String(answers[sqId] ?? '');
        const correct = String(correctAnswers[sqId] ?? '');
        const isCorrect = isGrading && userVal.trim() === correct.trim();
        const isWrong = isGrading && userVal.trim() !== '' && userVal.trim() !== correct.trim();
        const isEmpty = isGrading && userVal.trim() === '';

        const maxLen = Math.max(
          String(item.a).length,
          String(item.b).length,
          String(item.result).length
        ) + 1;

        const aDigits = padDigits(numToDigits(item.a), maxLen);
        const bDigits = padDigits(numToDigits(item.b), maxLen);

        return (
          <div key={idx} className="flex flex-col items-end font-mono text-base text-slate-800 min-w-[140px]">
            {/* Top number */}
            <div className="flex">
              {aDigits.map((d, di) => (
                <span key={di} className="w-6 text-center select-none">
                  {d === ' ' ? '\u00A0' : d}
                </span>
              ))}
            </div>

            {/* Operator + bottom number */}
            <div className="flex items-center">
              <span className="w-6 text-center font-bold text-slate-600 select-none">{item.op}</span>
              {padDigits(numToDigits(item.b), maxLen - 1).map((d, di) => (
                <span key={di} className="w-6 text-center select-none">
                  {d === ' ' ? '\u00A0' : d}
                </span>
              ))}
            </div>

            {/* Divider line */}
            <div className="w-full border-t-2 border-slate-700 mt-1 mb-1" />

            {/* Result row — one input field */}
            <div className="flex items-center justify-end w-full">
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
                  text-center text-base font-bold border-b-2 border-t-0 border-l-0 border-r-0
                  bg-transparent outline-none transition-colors
                  w-full
                  ${isCorrect ? 'border-green-500 text-green-600' : ''}
                  ${isWrong || isEmpty ? 'border-red-400 text-red-500 line-through' : ''}
                  ${!isGrading ? 'border-slate-700 text-indigo-600 focus:border-indigo-500' : ''}
                `}
                style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              />
            </div>

            {/* Show correct answer if wrong */}
            {(isWrong || isEmpty) && (
              <div className="text-green-600 text-xs font-bold mt-1 text-right w-full">
                = {correct}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
