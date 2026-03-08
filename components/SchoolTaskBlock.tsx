'use client';

import React from 'react';
import type {
  SchoolTaskBlock as SchoolTaskBlockType,
  SchoolTaskAnswers,
  SubQuestion,
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
import {
  LengthDrawing, LengthMeasurement, AnalogClock, GridAreaCounter,
} from './grade4-visual';

// Lazy imports for Phase 2-4 visual components
import dynamic from 'next/dynamic';
const PlaceValueGrid = dynamic(() => import('./grade4-visual/PlaceValueGrid'), { ssr: false });
const FractionPizzaAdder = dynamic(() => import('./grade4-visual/FractionPizzaAdder'), { ssr: false });
const SymmetryMirror = dynamic(() => import('./grade4-visual/SymmetryMirror'), { ssr: false });
const SequenceBuilder = dynamic(() => import('./grade4-visual/SequenceBuilder'), { ssr: false });
const TimelineDuration = dynamic(() => import('./grade4-visual/TimelineDuration'), { ssr: false });
const NumberLineRounding = dynamic(() => import('./grade4-visual/NumberLineRounding'), { ssr: false });
const AngleDrawer = dynamic(() => import('./grade4-visual/AngleDrawer'), { ssr: false });
const CircleDrawer = dynamic(() => import('./grade4-visual/CircleDrawer'), { ssr: false });
const MoneyCalculator = dynamic(() => import('./grade4-visual/MoneyCalculator'), { ssr: false });

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

  const renderVisualComponent = (sq: SubQuestion, lang: 'de' | 'hu' | 'ro' | 'en') => {
    const p = sq.visualData?.params ?? {};
    const vc = (v: string) => onChange(sq.id, v);
    const noop = () => {};
    switch (sq.visualType) {
      case 'zeichnen':
        return <LengthDrawing targetLength={p.targetLength} unit={p.unit} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'messen':
        return <LengthMeasurement targetLength={p.targetLength} unit={p.unit} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'uhrzeit':
        return <AnalogClock targetHour={p.targetHour} targetMinute={p.targetMinute} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'grid-area':
        return <GridAreaCounter width={p.width} height={p.height} mode={p.mode} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'place-value':
        return <PlaceValueGrid number={p.number} digits={p.digits} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'fraction-pizza':
        return <FractionPizzaAdder numerator={p.numerator} denominator={p.denominator} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'symmetry':
        return <SymmetryMirror gridSize={p.gridSize} pattern={p.pattern} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'sequence':
        return <SequenceBuilder sequence={p.sequence} blanks={p.blanks} rule={p.rule} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'timeline':
        return <TimelineDuration startHour={p.startHour} endHour={p.endHour} events={p.events} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'number-line':
        return <NumberLineRounding min={p.min} max={p.max} target={p.target} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'angle':
        return <AngleDrawer targetAngle={p.targetAngle} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'circle-draw':
        return <CircleDrawer targetRadius={p.radius} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'money':
        return <MoneyCalculator items={p.items} budget={p.budget} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      default:
        return null;
    }
  };

  const renderTaskContent = () => {
    const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' as const : cc === 'HU' ? 'hu' as const : cc === 'RO' ? 'ro' as const : 'en' as const;
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

      // All visual types — render each sub-question as its own embedded component
      case 'visual_zeichnen':
      case 'visual_messen':
      case 'visual_uhrzeit':
      case 'visual_grid_area':
      case 'visual_place_value':
      case 'visual_fraction_pizza':
      case 'visual_symmetry':
      case 'visual_sequence':
      case 'visual_timeline':
      case 'visual_number_line':
      case 'visual_angle':
      case 'visual_circle_draw':
      case 'visual_money': {
        return (
          <div className="space-y-3">
            {block.subQuestions.map((sq, idx) => (
              <div key={sq.id} className="relative">
                {block.subQuestions.length > 1 && (
                  <span className="absolute -left-6 top-2 text-xs font-bold text-slate-400">
                    {String.fromCharCode(97 + idx)})
                  </span>
                )}
                {renderVisualComponent(sq, lang)}
              </div>
            ))}
          </div>
        );
      }

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
          {isGrading ? `${Math.round((earnedPoints ?? 0) * 10) / 10} / ` : ''}{block.totalPoints} P.
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
