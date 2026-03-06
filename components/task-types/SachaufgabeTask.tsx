'use client';

import React, { useRef } from 'react';
import type { SachaufgabeData, SchoolTaskAnswers } from '@/lib/schoolTaskGenerator';

interface Props {
  blockId: string;
  data: SachaufgabeData;
  subQuestionIds: string[];
  answers: SchoolTaskAnswers;
  onChange: (subQuestionId: string, value: string) => void;
  isGrading: boolean;
  correctAnswers: Record<string, string | number>;
  cc?: string;
}

const RECHNEN_LABEL: Record<string, string> = {
  DE: 'Platz zum Rechnen:',
  HU: 'Számolj itt:',
  RO: 'Calculează aici:',
};

const ANTWORT_LABEL: Record<string, string> = {
  DE: 'Antwort:',
  HU: 'Válasz:',
  RO: 'Răspuns:',
};

export default function SachaufgabeTask({
  blockId,
  data,
  subQuestionIds,
  answers,
  onChange,
  isGrading,
  correctAnswers,
  cc = 'DE',
}: Props) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const rechnenLabel = RECHNEN_LABEL[cc] || 'Work area:';
  const antwortLabel = ANTWORT_LABEL[cc] || 'Answer:';

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const next = inputRefs.current[idx + 1];
      if (next) next.focus();
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-3">
      {data.items.map((item, idx) => {
        const sqId = subQuestionIds[idx];
        const userVal = String(answers[sqId] ?? '');
        const correct = String(correctAnswers[sqId] ?? '');
        const isCorrect = isGrading && userVal.trim() === correct.trim();
        const isWrong = isGrading && userVal.trim() !== '' && userVal.trim() !== correct.trim();
        const isEmpty = isGrading && userVal.trim() === '';

        return (
          <div key={idx} className="flex flex-col gap-2">
            {/* Task text */}
            <div
              className="text-sm text-slate-800 leading-relaxed pl-3 border-l-4 border-blue-300 bg-blue-50/50 py-2 pr-2 rounded-r"
              style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: '15px' }}
            >
              {data.items.length > 1 && (
                <span className="font-bold text-slate-500 mr-2">{idx + 1}.</span>
              )}
              {item.text}
            </div>

            {/* Work area */}
            <div className="ml-1">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-1">
                {rechnenLabel}
              </div>
              {Array.from({ length: item.calcSpaceLines }).map((_, li) => (
                <div
                  key={li}
                  className="border-b border-slate-200 h-7"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)',
                    backgroundSize: '20px 100%',
                  }}
                />
              ))}
            </div>

            {/* Answer row */}
            <div className="flex items-center gap-2 ml-1 mt-1">
              <span className="text-sm font-bold text-slate-600 whitespace-nowrap">
                {antwortLabel}
              </span>
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
                  flex-1 text-base font-bold border-b-2 border-t-0 border-l-0 border-r-0
                  bg-transparent outline-none transition-colors
                  ${isCorrect ? 'border-green-500 text-green-600' : ''}
                  ${isWrong || isEmpty ? 'border-red-400 text-red-500 line-through' : ''}
                  ${!isGrading ? 'border-slate-700 text-indigo-600 focus:border-indigo-500' : ''}
                `}
                style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              />
              <span className="text-sm text-slate-500 whitespace-nowrap">{item.answerUnit}</span>
              {(isWrong || isEmpty) && (
                <span className="text-green-600 text-sm font-bold">{correct} {item.answerUnit}</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
