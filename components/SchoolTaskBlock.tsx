'use client';

import React from 'react';
import type {
  SchoolTaskBlock as SchoolTaskBlockType,
  SchoolTaskAnswers,
  KopfrechnenData,
  SchriftlichData,
  HianyData,
  ZahlenreiheData,
  SachaufgabeData,
  TabelleData,
  AufgabenData,
} from '@/lib/schoolTaskGenerator';
import KopfrechnenTask from './task-types/KopfrechnenTask';
import SchriftlichTask from './task-types/SchriftlichTask';
import HianyTask from './task-types/HianyTask';
import ZahlenreiheTask from './task-types/ZahlenreiheTask';
import SachaufgabeTask from './task-types/SachaufgabeTask';
import TabelleTask from './task-types/TabelleTask';
import AufgabenTask from './task-types/AufgabenTask';

interface Props {
  block: SchoolTaskBlockType;
  blockIndex: number;
  answers: SchoolTaskAnswers;
  onChange: (subQuestionId: string, value: string | number) => void;
  isGrading: boolean;
  cc?: string;
}

// Circle numbers ①②③…
const CIRCLE_NUMS = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];

export default function SchoolTaskBlock({
  block,
  blockIndex,
  answers,
  onChange,
  isGrading,
  cc = 'DE',
}: Props) {
  const circleNum = CIRCLE_NUMS[blockIndex] || `${blockIndex + 1}.`;

  // Build correctAnswers map for this block
  const correctAnswers: Record<string, string | number> = {};
  block.subQuestions.forEach((sq) => {
    correctAnswers[sq.id] = sq.answer;
  });

  const subQuestionIds = block.subQuestions.map((sq) => sq.id);

  const handleChange = (sqId: string, value: string) => {
    onChange(sqId, value);
  };

  const renderTaskContent = () => {
    const commonProps = {
      blockId: block.id,
      subQuestionIds,
      answers,
      onChange: handleChange,
      isGrading,
      correctAnswers,
    };

    switch (block.type) {
      case 'kopfrechnen':
        return <KopfrechnenTask {...commonProps} data={block.data as KopfrechnenData} />;
      case 'schriftlich':
        return <SchriftlichTask {...commonProps} data={block.data as SchriftlichData} />;
      case 'hiany':
        return <HianyTask {...commonProps} data={block.data as HianyData} />;
      case 'zahlenreihe':
        return <ZahlenreiheTask {...commonProps} data={block.data as ZahlenreiheData} />;
      case 'sachaufgabe':
        return (
          <SachaufgabeTask
            {...commonProps}
            data={block.data as SachaufgabeData}
            cc={cc}
          />
        );
      case 'tabelle':
        return <TabelleTask {...commonProps} data={block.data as TabelleData} />;
      case 'aufgaben':
        return <AufgabenTask {...commonProps} data={block.data as AufgabenData} />;
      default:
        return null;
    }
  };

  // Answered count for progress display
  const answeredCount = block.subQuestions.filter((sq) => {
    const v = answers[sq.id];
    return v !== undefined && String(v).trim() !== '';
  }).length;

  // Points earned (during grading)
  const earnedPoints = isGrading
    ? block.subQuestions.reduce((sum, sq) => {
        const v = String(answers[sq.id] ?? '').trim();
        return sum + (v === String(sq.answer).trim() ? sq.points : 0);
      }, 0)
    : null;

  return (
    <div className="mb-8">
      {/* Task header */}
      <div className="flex items-center gap-2 mb-3">
        {/* Circle number */}
        <span
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full border-2 border-slate-800 font-black text-[13px] text-slate-800 select-none"
        >
          {blockIndex + 1}
        </span>

        {/* Title */}
        <span className="font-bold text-slate-800 text-sm flex-1">
          {block.title}
        </span>

        {/* Points badge */}
        <span
          className={`
            text-xs font-bold px-2 py-0.5 rounded-full border whitespace-nowrap
            ${isGrading
              ? earnedPoints === block.totalPoints
                ? 'border-green-400 text-green-700 bg-green-50'
                : 'border-red-300 text-red-600 bg-red-50'
              : 'border-slate-300 text-slate-500 bg-white'
            }
          `}
        >
          {isGrading ? `${earnedPoints} / ` : ''}{block.totalPoints} P.
        </span>
      </div>

      {/* Task body */}
      <div className="pl-9">
        {renderTaskContent()}
      </div>

      {/* Progress dots (only while filling in, not grading) */}
      {!isGrading && block.subQuestions.length > 1 && (
        <div className="flex gap-1 mt-3 pl-9">
          {block.subQuestions.map((sq) => {
            const filled = String(answers[sq.id] ?? '').trim() !== '';
            return (
              <span
                key={sq.id}
                className={`w-1.5 h-1.5 rounded-full ${filled ? 'bg-indigo-500' : 'bg-slate-300'}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
