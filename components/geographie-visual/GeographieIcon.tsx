'use client';

import React from 'react';
import * as K8 from "@/components/testpapier-visual/svg/K8SvgsB";

interface Props {
  svgName: string;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function GeographieIcon({ svgName, options, correctIndex, userAnswer, submitted, onAnswer }: Props) {
  const correctAnswer = options[correctIndex];
  
  return (
    <div className="px-1 py-1.5">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-sm font-bold text-slate-800">Was zeigt dieses Symbol?</span>
      </div>

      <div className="flex items-center gap-2 mb-1.5 pl-6">
        {svgName && (K8 as any)[`${svgName}NoBorder`] ? (
          <div className="mx-auto my-2 w-full max-w-[120px]">
            {React.createElement((K8 as any)[`${svgName}NoBorder`], { className: "w-full h-auto max-h-20" })}
          </div>
        ) : null}
      </div>

      <div className="flex gap-1.5 flex-wrap pl-6">
        {options.map((opt, i) => {
          const isSelected = userAnswer === opt;
          const isCorrectOpt = i === correctIndex;
          
          let btnClass = "px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 ";
          
          if (!submitted) {
            btnClass += isSelected 
              ? "bg-slate-800 text-white border-slate-800 scale-105 shadow-sm" 
              : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50";
          } else {
            if (isCorrectOpt) {
              btnClass += "bg-green-500 text-white border-green-600 shadow-sm scale-105";
            } else if (isSelected && !isCorrectOpt) {
              btnClass += "bg-red-500 text-white border-red-600 scale-95 opacity-80";
            } else {
              btnClass += "bg-slate-100 text-slate-400 border-slate-200 opacity-50";
            }
          }

          return (
            <button
              key={opt}
              onClick={() => !submitted && onAnswer(opt)}
              disabled={submitted}
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