'use client';

import React, { useRef } from 'react';
import type { TabelleData, SchoolTaskAnswers } from '@/lib/schoolTaskGenerator';

interface Props {
  blockId: string;
  data: TabelleData;
  subQuestionIds: string[];
  answers: SchoolTaskAnswers;
  onChange: (subQuestionId: string, value: string) => void;
  isGrading: boolean;
  correctAnswers: Record<string, string | number>;
}

export default function TabelleTask({
  blockId,
  data,
  subQuestionIds,
  answers,
  onChange,
  isGrading,
  correctAnswers,
}: Props) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  let globalInputIdx = 0;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const next = inputRefs.current[idx + 1];
      if (next) next.focus();
    }
  };

  return (
    <div className="mt-3 overflow-x-auto pb-2">
      <table className="border-collapse text-sm font-mono" style={{ borderColor: '#374151' }}>
        <thead>
          <tr>
            {data.headers.map((h, hi) => (
              <th
                key={hi}
                className="border border-slate-400 px-3 py-1 bg-slate-100 font-bold text-slate-700 text-center whitespace-nowrap text-xs"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => (
            <tr key={ri}>
              {/* Row label */}
              <td className="border border-slate-400 px-3 py-1 font-bold text-slate-700 bg-slate-50 whitespace-nowrap text-xs">
                {row.label}
              </td>

              {/* Data cells */}
              {row.cells.map((cell, ci) => {
                if (cell === null) {
                  // Input cell
                  const inputIdx = globalInputIdx++;
                  const sqId = subQuestionIds[inputIdx];
                  const userVal = String(answers[sqId] ?? '');
                  const correct = String(correctAnswers[sqId] ?? '');
                  const isCorrect = isGrading && userVal.trim() === correct.trim();
                  const isWrong = isGrading && userVal.trim() !== '' && userVal.trim() !== correct.trim();
                  const isEmpty = isGrading && userVal.trim() === '';

                  return (
                    <td key={ci} className="border border-slate-400 p-0 text-center">
                      <div className="flex flex-col items-center">
                        <input
                          ref={(el) => { inputRefs.current[inputIdx] = el; }}
                          type="text"
                          inputMode="numeric"
                          value={userVal}
                          onChange={(e) => !isGrading && onChange(sqId, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, inputIdx)}
                          readOnly={isGrading}
                          placeholder="?"
                          className={`
                            w-16 text-center text-sm font-bold py-1
                            bg-transparent outline-none transition-colors
                            ${isCorrect ? 'text-green-600' : ''}
                            ${isWrong || isEmpty ? 'text-red-500 line-through' : ''}
                            ${!isGrading ? 'text-indigo-600 focus:bg-indigo-50' : ''}
                          `}
                          style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                        />
                        {(isWrong || isEmpty) && (
                          <span className="text-green-600 text-[10px] font-bold leading-none pb-0.5">
                            {correct}
                          </span>
                        )}
                      </div>
                    </td>
                  );
                } else {
                  // Given cell
                  return (
                    <td key={ci} className="border border-slate-400 px-3 py-1 text-center text-slate-800 font-semibold">
                      {cell}
                    </td>
                  );
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
