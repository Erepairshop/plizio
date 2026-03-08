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
  VisualZeichnenData,
  VisualMessenData,
  VisualUhrzeitData,
  VisualGridAreaData,
  VisualPlaceValueData,
  VisualFractionPizzaData,
  VisualSymmetryData,
  VisualSequenceData,
  VisualTimelineData,
  VisualNumberLineData,
  VisualAngleData,
  VisualCircleDrawData,
  VisualMoneyData,
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

      case 'visual_zeichnen': {
        const zData = block.data as VisualZeichnenData;
        const sq = block.subQuestions[0];
        return (
          <LengthDrawing
            targetLength={zData.targetLength}
            unit={zData.unit}
            language={(cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de'
              : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en'}
            onAnswer={(isCorrect) => {
              onChange(sq.id, isCorrect ? String(zData.targetLength) : '0');
            }}
          />
        );
      }
      case 'visual_messen': {
        const mData = block.data as VisualMessenData;
        const sq = block.subQuestions[0];
        return (
          <LengthMeasurement
            targetLength={mData.targetLength}
            unit={mData.unit}
            language={(cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de'
              : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en'}
            onAnswer={(isCorrect) => {
              onChange(sq.id, isCorrect ? String(mData.targetLength) : '0');
            }}
          />
        );
      }
      case 'visual_uhrzeit': {
        const uData = block.data as VisualUhrzeitData;
        const sq = block.subQuestions[0];
        return (
          <AnalogClock
            targetHour={uData.targetHour}
            targetMinute={uData.targetMinute}
            language={(cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de'
              : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en'}
            onAnswer={(isCorrect) => {
              onChange(sq.id, isCorrect
                ? `${uData.targetHour}:${uData.targetMinute.toString().padStart(2, '0')}`
                : '0');
            }}
          />
        );
      }

      case 'visual_grid_area': {
        const gaData = block.data as VisualGridAreaData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <GridAreaCounter
            width={gaData.width}
            height={gaData.height}
            mode={gaData.mode}
            language={lang}
            onAnswer={(isCorrect, answer) => {
              onChange(sq.id, isCorrect ? String(sq.answer) : String(answer));
            }}
          />
        );
      }

      case 'visual_place_value': {
        const pvData = block.data as VisualPlaceValueData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <PlaceValueGrid
            number={pvData.number}
            digits={pvData.digits}
            language={lang}
            onAnswer={(isCorrect, answer) => {
              onChange(sq.id, isCorrect ? String(sq.answer) : String(answer));
            }}
          />
        );
      }

      case 'visual_fraction_pizza': {
        const fpData = block.data as VisualFractionPizzaData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <FractionPizzaAdder
            numerator={fpData.numerator}
            denominator={fpData.denominator}
            language={lang}
            onAnswer={(isCorrect) => {
              onChange(sq.id, isCorrect ? String(sq.answer) : '0');
            }}
          />
        );
      }

      case 'visual_symmetry': {
        const symData = block.data as VisualSymmetryData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <SymmetryMirror
            gridSize={symData.gridSize}
            pattern={symData.pattern}
            language={lang}
            onAnswer={(isCorrect) => {
              onChange(sq.id, isCorrect ? 'symmetric' : 'wrong');
            }}
          />
        );
      }

      case 'visual_sequence': {
        const seqData = block.data as VisualSequenceData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <SequenceBuilder
            sequence={seqData.sequence}
            blanks={seqData.blanks}
            rule={seqData.rule}
            language={lang}
            onAnswer={(isCorrect, answers) => {
              onChange(sq.id, isCorrect ? String(sq.answer) : answers.join(','));
            }}
          />
        );
      }

      case 'visual_timeline': {
        const tlData = block.data as VisualTimelineData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <TimelineDuration
            startHour={tlData.startHour}
            endHour={tlData.endHour}
            events={tlData.events}
            language={lang}
            onAnswer={(isCorrect, answer) => {
              onChange(sq.id, isCorrect ? String(sq.answer) : String(answer));
            }}
          />
        );
      }

      case 'visual_number_line': {
        const nlData = block.data as VisualNumberLineData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <NumberLineRounding
            min={nlData.min}
            max={nlData.max}
            target={nlData.target}
            language={lang}
            onAnswer={(isCorrect, answer) => {
              onChange(sq.id, isCorrect ? String(sq.answer) : String(answer));
            }}
          />
        );
      }

      case 'visual_angle': {
        const angData = block.data as VisualAngleData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <AngleDrawer
            targetAngle={angData.targetAngle}
            language={lang}
            onAnswer={(isCorrect, answer) => {
              onChange(sq.id, isCorrect ? String(sq.answer) : String(answer));
            }}
          />
        );
      }

      case 'visual_circle_draw': {
        const cirData = block.data as VisualCircleDrawData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <CircleDrawer
            targetRadius={cirData.radius}
            language={lang}
            onAnswer={(isCorrect, answer) => {
              onChange(sq.id, isCorrect ? String(sq.answer) : String(answer));
            }}
          />
        );
      }

      case 'visual_money': {
        const monData = block.data as VisualMoneyData;
        const sq = block.subQuestions[0];
        const lang = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? 'de' : cc === 'HU' ? 'hu' : cc === 'RO' ? 'ro' : 'en';
        return (
          <MoneyCalculator
            items={monData.items}
            budget={monData.budget}
            language={lang}
            onAnswer={(isCorrect, answer) => {
              onChange(sq.id, isCorrect ? String(sq.answer) : String(answer));
            }}
          />
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
