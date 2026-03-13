'use client';

import React, { useRef } from 'react';
import type { AufgabenData, SchoolTaskAnswers } from '@/lib/schoolTaskGenerator';

interface Props {
  blockId: string;
  data: AufgabenData;
  subQuestionIds: string[];
  answers: SchoolTaskAnswers;
  onChange: (subQuestionId: string, value: string) => void;
  isGrading: boolean;
  correctAnswers: Record<string, string | number>;
}

export default function AufgabenTask({
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
    <div className="flex flex-col gap-4 mt-3">
      {data.items.map((item, idx) => {
        const sqId = subQuestionIds[idx];
        const userVal = String(answers[sqId] ?? '');
        const correct = String(correctAnswers[sqId] ?? '');
        const isCorrect = isGrading && userVal.trim() === correct.trim();
        const isWrong = isGrading && userVal.trim() !== '' && userVal.trim() !== correct.trim();
        const isEmpty = isGrading && userVal.trim() === '';

        // Split question on ___ to render inline input
        const parts = item.question.split('___');
        const hasInlineBlank = parts.length > 1;

        // MCQ (hasStringOptions) — emoji/string buttons
        if (item.options && item.options.length > 0) {
          const userVal = String(answers[sqId] ?? '');
          const correct = String(correctAnswers[sqId] ?? '');
          return (
            <div key={idx} className="flex flex-col gap-2 mt-1">
              <div className="flex items-baseline gap-1">
                <span className="text-slate-400 text-xs font-bold select-none mr-0.5">{idx + 1}.</span>
                <span className="text-sm text-slate-800" style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: '15px' }}>{item.question}</span>
              </div>
              <div className="flex flex-wrap gap-2 pl-5">
                {item.options.map((opt) => {
                  const isSelected = userVal === opt;
                  const isCorrect = isGrading && opt === correct;
                  const isWrongSelected = isGrading && isSelected && opt !== correct;
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={isGrading}
                      onClick={() => !isGrading && onChange(sqId, opt)}
                      className={`
                        px-3 py-1.5 rounded-lg text-lg font-bold border-2 transition-all
                        ${isCorrect ? 'bg-green-500 border-green-500 text-white' : ''}
                        ${isWrongSelected ? 'bg-red-100 border-red-300 text-red-500 line-through opacity-70' : ''}
                        ${!isGrading && isSelected && !isCorrect && !isWrongSelected ? 'bg-indigo-100 border-indigo-400 text-indigo-700' : ''}
                        ${!isGrading && !isSelected ? 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300' : ''}
                        ${isGrading && !isCorrect && !isWrongSelected ? 'bg-white border-slate-200 text-slate-400' : ''}
                      `}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }

        return (
          <div key={idx} className="flex flex-wrap items-baseline gap-1">
            <span className="text-slate-400 text-xs font-bold select-none mr-0.5">
              {idx + 1}.
            </span>

            {hasInlineBlank ? (
              <>
                {parts[0] && (
                  <span className="font-mono text-sm text-slate-800">{parts[0].trim()}</span>
                )}
                <div className="flex flex-col items-center mx-1">
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
                      w-14 text-center text-base font-bold border-b-2 border-t-0 border-l-0 border-r-0
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
                {parts[1] && (
                  <span className="font-mono text-sm text-slate-800">{parts[1].trim()}</span>
                )}
              </>
            ) : (
              /* Full question on one line, answer input at right */
              <>
                <span
                  className="text-sm text-slate-800 flex-1"
                  style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: '15px' }}
                >
                  {item.question}
                </span>
                <div className="flex flex-col items-center ml-2">
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
                      w-16 text-center text-base font-bold border-b-2 border-t-0 border-l-0 border-r-0
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
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
