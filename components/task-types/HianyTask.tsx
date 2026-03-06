'use client';

import React, { useRef } from 'react';
import type { HianyData, SchoolTaskAnswers } from '@/lib/schoolTaskGenerator';

interface Props {
  blockId: string;
  data: HianyData;
  subQuestionIds: string[];
  answers: SchoolTaskAnswers;
  onChange: (subQuestionId: string, value: string) => void;
  isGrading: boolean;
  correctAnswers: Record<string, string | number>;
}

export default function HianyTask({
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

  // Pre-compute: for each item, which subQuestion index corresponds to each null cell
  // We iterate items and track a global sqIdx
  const itemMaps: Array<{
    topMap: (string | null)[];
    addMap: (string | null)[];
    resMap: (string | null)[];
  }> = [];

  let sqIdx = 0;
  for (const item of data.items) {
    const topMap = item.topRow.map((v) => (v === null ? subQuestionIds[sqIdx++] : null));
    const addMap = item.addRow.map((v) => (v === null ? subQuestionIds[sqIdx++] : null));
    const resMap = item.resultRow.map((v) => (v === null ? subQuestionIds[sqIdx++] : null));
    itemMaps.push({ topMap, addMap, resMap });
  }

  // All input sqIds in order for sequential ref assignment
  const allInputSqIds: string[] = [];
  for (const { topMap, addMap, resMap } of itemMaps) {
    for (const id of topMap) if (id) allInputSqIds.push(id);
    for (const id of addMap) if (id) allInputSqIds.push(id);
    for (const id of resMap) if (id) allInputSqIds.push(id);
  }

  const renderCell = (value: number | null, sqId: string | null) => {
    if (value !== null) {
      return (
        <span className="font-mono text-base font-bold text-slate-800 w-16 text-center inline-block">
          {value}
        </span>
      );
    }
    if (!sqId) return null;

    const inputIdx = allInputSqIds.indexOf(sqId);
    const userVal = String(answers[sqId] ?? '');
    const correct = String(correctAnswers[sqId] ?? '');
    const isCorrect = isGrading && userVal.trim() === correct.trim();
    const isWrong = isGrading && userVal.trim() !== '' && userVal.trim() !== correct.trim();
    const isEmpty = isGrading && userVal.trim() === '';

    return (
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
    );
  };

  return (
    <div className="flex flex-wrap gap-8 mt-3">
      {data.items.map((item, ii) => {
        const { topMap, addMap, resMap } = itemMaps[ii];

        return (
          <div key={ii} className="flex flex-col items-end font-mono text-base text-slate-800 min-w-[120px]">
            {/* Top row */}
            <div className="flex items-center gap-1 justify-end">
              {item.topRow.map((v, ci) => (
                <span key={ci}>{renderCell(v, topMap[ci])}</span>
              ))}
            </div>

            {/* Operator + addRow */}
            <div className="flex items-center gap-1 justify-end">
              <span className="font-bold text-slate-600 mr-1 select-none">{item.op}</span>
              {item.addRow.map((v, ci) => (
                <span key={ci}>{renderCell(v, addMap[ci])}</span>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full border-t-2 border-slate-700 my-1" />

            {/* Result row */}
            <div className="flex items-center gap-1 justify-end">
              {item.resultRow.map((v, ci) => (
                <span key={ci}>{renderCell(v, resMap[ci])}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
