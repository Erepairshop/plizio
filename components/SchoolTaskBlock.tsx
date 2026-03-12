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

// Grade 5 visual components
const PlaceValueTableMillion = dynamic(() => import('./grade5-visual/PlaceValueTableMillion'), { ssr: false });
const NumberLinePlace = dynamic(() => import('./grade5-visual/NumberLinePlace'), { ssr: false });
const LargeNumberRounding = dynamic(() => import('./grade5-visual/LargeNumberRounding'), { ssr: false });
const MultiplicationArray = dynamic(() => import('./grade5-visual/MultiplicationArray'), { ssr: false });
const DivisionShare = dynamic(() => import('./grade5-visual/DivisionShare'), { ssr: false });
const FractionCompare = dynamic(() => import('./grade5-visual/FractionCompare'), { ssr: false });
const FractionEquivalent = dynamic(() => import('./grade5-visual/FractionEquivalent'), { ssr: false });
const DecimalPlaceValue = dynamic(() => import('./grade5-visual/DecimalPlaceValue'), { ssr: false });
const DecimalNumberLine = dynamic(() => import('./grade5-visual/DecimalNumberLine'), { ssr: false });
const BalanceScale = dynamic(() => import('./grade5-visual/BalanceScale'), { ssr: false });
const FractionPizzaAdder = dynamic(() => import('./grade4-visual/FractionPizzaAdder'), { ssr: false });
const SymmetryMirror = dynamic(() => import('./grade4-visual/SymmetryMirror'), { ssr: false });
const SequenceBuilder = dynamic(() => import('./grade4-visual/SequenceBuilder'), { ssr: false });
const TimelineDuration = dynamic(() => import('./grade4-visual/TimelineDuration'), { ssr: false });
const NumberLineRounding = dynamic(() => import('./grade4-visual/NumberLineRounding'), { ssr: false });
const AngleDrawer = dynamic(() => import('./grade4-visual/AngleDrawer'), { ssr: false });
const CircleDrawer = dynamic(() => import('./grade4-visual/CircleDrawer'), { ssr: false });
const MoneyCalculator = dynamic(() => import('./grade4-visual/MoneyCalculator'), { ssr: false });

// Grade 1 visual components
const G1AnalogClock = dynamic(() => import('./grade1-visual/AnalogClock'), { ssr: false });
const G1NumberLineMarker = dynamic(() => import('./grade1-visual/NumberLineMarker'), { ssr: false });
const G1PlaceValueBlocks = dynamic(() => import('./grade1-visual/PlaceValueBlocks'), { ssr: false });
const G1GridCounter = dynamic(() => import('./grade1-visual/GridCounter'), { ssr: false });
const G1SequenceFiller = dynamic(() => import('./grade1-visual/SequenceFiller'), { ssr: false });
const G1CoinCounter = dynamic(() => import('./grade1-visual/CoinCounter'), { ssr: false });
const G1TimelineDuration = dynamic(() => import('./grade1-visual/TimelineDuration'), { ssr: false });
const G1FractionShapes = dynamic(() => import('./grade1-visual/FractionShapes'), { ssr: false });

// Grade 1 Phase 1 - Numbers & Recognition
const G1DotRecognizer = dynamic(() => import('./grade1-visual/DotRecognizer'), { ssr: false });
const G1DiceRecognizer = dynamic(() => import('./grade1-visual/DiceRecognizer'), { ssr: false });
const G1FingerCounter = dynamic(() => import('./grade1-visual/FingerCounter'), { ssr: false });
const G1NumberComparison = dynamic(() => import('./grade1-visual/NumberComparison'), { ssr: false });
const G1PredecessorFinder = dynamic(() => import('./grade1-visual/PredecessorFinder'), { ssr: false });
const G1SuccessorFinder = dynamic(() => import('./grade1-visual/SuccessorFinder'), { ssr: false });

// Grade 1 Phase 2 - Operations with Pictures
const G1AdditionWithPictures = dynamic(() => import('./grade1-visual/AdditionWithPictures'), { ssr: false });
const G1SubtractionWithPictures = dynamic(() => import('./grade1-visual/SubtractionWithPictures'), { ssr: false });
const G1NumberDecomposition = dynamic(() => import('./grade1-visual/NumberDecomposition'), { ssr: false });
const G1NumberCompletion = dynamic(() => import('./grade1-visual/NumberCompletion'), { ssr: false });

// Grade 1 Phase 3 - Geometry & Spatial
const G1ShapeRecognition = dynamic(() => import('./grade1-visual/ShapeRecognition'), { ssr: false });
const G1SpatialDirections = dynamic(() => import('./grade1-visual/SpatialDirections'), { ssr: false });
const G1PatternCompletion = dynamic(() => import('./grade1-visual/PatternCompletion'), { ssr: false });

// Grade 1 Phase 4 - Measurements & Everyday Math
const G1LengthComparison = dynamic(() => import('./grade1-visual/LengthComparison'), { ssr: false });
const G1WeightComparison = dynamic(() => import('./grade1-visual/WeightComparison'), { ssr: false });
const G1VolumeComparison = dynamic(() => import('./grade1-visual/VolumeComparison'), { ssr: false });
const G1SimpleShopping = dynamic(() => import('./grade1-visual/SimpleShopping'), { ssr: false });
const G1WordProblemG1 = dynamic(() => import('./grade1-visual/WordProblemG1'), { ssr: false });

// Grade 3 visual components
const G3PlaceValue = dynamic(() => import('./grade3-visual/G3PlaceValue'), { ssr: false });
const G3PatternBlocks = dynamic(() => import('./grade3-visual/G3PatternBlocks'), { ssr: false });
const G3BalanceScale = dynamic(() => import('./grade3-visual/G3BalanceScale'), { ssr: false });
const G3ShapePick = dynamic(() => import('./grade3-visual/G3ShapePick'), { ssr: false });
const G3BarChart = dynamic(() => import('./grade3-visual/G3BarChart'), { ssr: false });
const G3ComposeBlocks = dynamic(() => import('./grade3-visual/G3ComposeBlocks'), { ssr: false });
const G3ObjectGroups = dynamic(() => import('./grade3-visual/G3ObjectGroups'), { ssr: false });
const G3MultiplyArray = dynamic(() => import('./grade3-visual/G3MultiplyArray'), { ssr: false });
const G3NumberLineSub = dynamic(() => import('./grade3-visual/G3NumberLineSub'), { ssr: false });
const G3RightAngle = dynamic(() => import('./grade3-visual/G3RightAngle'), { ssr: false });
const G3PerimeterConcept = dynamic(() => import('./grade3-visual/G3PerimeterConcept'), { ssr: false });
const G3AreaCompare = dynamic(() => import('./grade3-visual/G3AreaCompare'), { ssr: false });

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
        return <NumberLineRounding min={p.min} max={p.max} target={p.target} language={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'angle':
        return <AngleDrawer targetAngle={p.targetAngle} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'circle-draw':
        return <CircleDrawer targetRadius={p.radius} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'money':
        return <MoneyCalculator items={p.items} budget={p.budget} mode={p.mode} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      // Grade 5 visual components
      case 'g5-place-million':
        return <PlaceValueTableMillion number={p.number} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'g5-number-line':
        return <NumberLinePlace rangeStart={p.rangeStart} rangeEnd={p.rangeEnd} target={p.target} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'g5-rounding-large':
        return <LargeNumberRounding target={p.target} step={p.step} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'g5-mul-array':
        return <MultiplicationArray rows={p.rows} cols={p.cols} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'g5-division-share':
        return <DivisionShare total={p.total} groups={p.groups} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'g5-frac-compare':
        return <FractionCompare fracA={p.fracA} fracB={p.fracB} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'g5-frac-equiv':
        return <FractionEquivalent baseNum={p.baseNum} baseDen={p.baseDen} multiplier={p.multiplier} hidePart={p.hidePart} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'g5-decimal-place':
        return <DecimalPlaceValue number={p.number} decimalPlaces={p.decimalPlaces} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'g5-decimal-line':
        return <DecimalNumberLine rangeStart={p.rangeStart} rangeEnd={p.rangeEnd} target={p.target} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      case 'g5-balance-scale':
        return <BalanceScale leftWeights={p.leftWeights} rightWeight={p.rightWeight} unit={p.unit} language={lang} embedded onAnswer={noop} onValueChange={vc} />;
      // Grade 1 visual components
      case 'g1-clock':
        return <G1AnalogClock hour={p.hour} minute={p.minute} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-number-line':
        return <G1NumberLineMarker min={p.min} max={p.max} step={p.step} markedValue={p.markedValue} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-place-value':
        return <G1PlaceValueBlocks number={p.number} question={p.question} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-grid-count':
        return <G1GridCounter grid={p.grid} question={p.question} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-sequence':
        return <G1SequenceFiller sequence={p.sequence} answers={p.answers} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-coins':
        return <G1CoinCounter coins={p.coins} currency={p.currency} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-timeline':
        return <G1TimelineDuration startHour={p.startHour} endHour={p.endHour} lang={lang} embedded={true} onValueChange={vc} />;
      case 'g1-fraction':
        return <G1FractionShapes shape={p.shape} totalParts={p.totalParts} coloredParts={p.coloredParts} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      // Phase 1 - Numbers & Recognition
      case 'g1-dots':
        return <G1DotRecognizer lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-dice':
        return <G1DiceRecognizer lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-fingers':
        return <G1FingerCounter lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-compare':
        return <G1NumberComparison lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-predecessor':
        return <G1PredecessorFinder lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-successor':
        return <G1SuccessorFinder lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      // Phase 2 - Operations with Pictures
      case 'g1-addition-pics':
        return <G1AdditionWithPictures lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-subtraction-pics':
        return <G1SubtractionWithPictures lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-decompose':
        return <G1NumberDecomposition lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-completion':
        return <G1NumberCompletion lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      // Phase 3 - Geometry & Spatial
      case 'g1-shapes':
        return <G1ShapeRecognition lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-directions':
        return <G1SpatialDirections lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-patterns':
        return <G1PatternCompletion lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      // Phase 4 - Measurements & Everyday Math
      case 'g1-length':
        return <G1LengthComparison lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-weight':
        return <G1WeightComparison lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-volume':
        return <G1VolumeComparison lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-shopping':
        return <G1SimpleShopping lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g1-wordproblem':
        return <G1WordProblemG1 lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      // Grade 3 visual components
      case 'g3-place-value':
        return <G3PlaceValue number={p.number} question={p.question} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-pattern':
        return <G3PatternBlocks sequence={p.sequence} period={p.period} blanks={p.blanks} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-scale':
        return <G3BalanceScale weightA={p.weightA} weightB={p.weightB} unitA={p.unitA} unitB={p.unitB} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-shape':
        return <G3ShapePick target={p.target} options={p.options} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-barchart':
        return <G3BarChart categories={p.categories} targetIdx={p.targetIdx} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-compose':
        return <G3ComposeBlocks hundreds={p.hundreds} tens={p.tens} ones={p.ones} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-add-objects':
        return <G3ObjectGroups mode="add" groupA={p.groupA} groupB={p.groupB} icon={p.icon} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-sub-objects':
        return <G3ObjectGroups mode="sub" groupA={p.groupA} groupB={p.groupB} icon={p.icon} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-mul-group':
        return <G3ObjectGroups mode="mul" groupA={p.groupA} groupB={p.groupB} icon={p.icon} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-mul-array':
        return <G3MultiplyArray rows={p.rows} cols={p.cols} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-div-share':
        return <G3ObjectGroups mode="div" groupA={p.groupA} groupB={p.groupB} icon={p.icon} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-nl-sub':
        return <G3NumberLineSub start={p.start} stepSize={p.stepSize} steps={p.steps} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-rightangle':
        return <G3RightAngle angleType={p.angleType} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-perim-concept':
        return <G3PerimeterConcept width={p.width} height={p.height} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
      case 'g3-area-compare':
        return <G3AreaCompare shapeA={p.shapeA} shapeB={p.shapeB} lang={lang} embedded={true} onAnswer={noop} onValueChange={vc} />;
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
      case 'visual_money':
      case 'visual_g1_clock':
      case 'visual_g1_number_line':
      case 'visual_g1_place_value':
      case 'visual_g1_grid_count':
      case 'visual_g1_sequence':
      case 'visual_g1_coins':
      case 'visual_g1_timeline':
      case 'visual_g1_fraction':
      case 'visual_g3_place_value':
      case 'visual_g3_pattern':
      case 'visual_g3_scale':
      case 'visual_g3_shape':
      case 'visual_g3_barchart':
      case 'visual_g3_compose':
      case 'visual_g3_add_objects':
      case 'visual_g3_sub_objects':
      case 'visual_g3_mul_group':
      case 'visual_g3_mul_array':
      case 'visual_g3_div_share':
      case 'visual_g3_nl_sub':
      case 'visual_g3_rightangle':
      case 'visual_g3_perim_concept':
      case 'visual_g3_area_compare': {
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
