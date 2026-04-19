'use client';

import { K3K4SvgsA } from '@/components/testpapier-visual/svg/K3K4SvgsA';

interface Props {
  svgName: string;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function WetterErkennen({ svgName, options, correctIndex, userAnswer, submitted, onAnswer }: Props) {
  const SvgComponent = (K3K4SvgsA as any)[svgName];

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <div className="h-20 flex items-center justify-center w-full max-w-[120px]">
        {SvgComponent ? <SvgComponent /> : <div className="text-xs text-slate-400">SVG missing</div>}
      </div>
      <div className="flex flex-wrap justify-center gap-2 w-full">
        {options.map((opt, i) => {
          const isSelected = userAnswer === opt;
          const isCorrect = i === correctIndex;
          
          let btnClass = "px-3 py-1.5 rounded-lg border-2 text-sm font-bold transition-all ";
          if (!submitted) {
            btnClass += isSelected 
              ? "bg-blue-500 border-blue-500 text-white shadow-md scale-105" 
              : "bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50";
          } else {
            if (isCorrect) {
              btnClass += "bg-emerald-500 border-emerald-500 text-white shadow-md scale-105";
            } else if (isSelected && !isCorrect) {
              btnClass += "bg-red-500 border-red-500 text-white opacity-80";
            } else {
              btnClass += "bg-white border-slate-200 text-slate-400 opacity-50";
            }
          }

          return (
            <button
              key={opt}
              disabled={submitted}
              onClick={() => onAnswer(opt)}
              className={btnClass}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
