"use client";

import { SeparationDiagramSvg, type SeparationDiagramId } from "./ChemistryTestDiagrams";
import { KEMIA_VISUAL_UI, type KemiaVisualLang } from "@/lib/kemiaVisualContent";

interface Props {
  prompt: string;
  scenario: string;
  diagramId: SeparationDiagramId;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (answer: string) => void;
  lang: KemiaVisualLang;
}

export default function Trennmethode({ prompt, scenario, diagramId, options, correctIndex, userAnswer, submitted, onAnswer, lang }: Props) {
  const correctAnswer = options[correctIndex];
  const isCorrect = userAnswer === correctAnswer;
  const ui = KEMIA_VISUAL_UI[lang];

  return <div className="px-1 py-1.5">
    <div className="mb-2 flex items-center gap-2">
      <span className="w-5 shrink-0 text-right text-xs text-slate-300">→</span>
      <span className="text-sm font-bold text-slate-800">{prompt}</span>
    </div>
    <div className="pl-6">
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-1 text-[11px] font-semibold uppercase tracking-[.2em] text-slate-400">{ui.mixture}</div>
          <div className="text-sm font-semibold text-slate-700">{scenario}</div>
        </div>
        <SeparationDiagramSvg kind={diagramId} label={ui.diagram + ": " + scenario} className="h-28 w-full max-w-[190px]" />
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((option) => {
          const selected = option === userAnswer;
          let cls = "rounded-2xl border px-3 py-2 text-left text-xs font-bold transition-all ";
          if (submitted) {
            cls += option === correctAnswer ? "border-emerald-500 bg-emerald-500 text-white" : selected && !isCorrect ? "border-red-300 bg-red-100 text-red-500" : "border-slate-200 bg-white text-slate-300";
          } else {
            cls += selected ? "border-sky-500 bg-sky-500 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-slate-400";
          }
          return <button key={option} className={cls} disabled={submitted} onClick={() => !submitted && onAnswer(option)}>{option}</button>;
        })}
      </div>
    </div>
    {submitted && userAnswer && <div className={"mt-2 pl-6 text-xs font-bold " + (isCorrect ? "text-emerald-500" : "text-red-500")}>
      {isCorrect ? "✓ " + ui.correct : "✗ " + ui.correctPrefix + " " + correctAnswer}
    </div>}
  </div>;
}
