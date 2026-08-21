"use client";

import { ParticleDiagramSvg, type ParticleDiagramId } from "./ChemistryTestDiagrams";
import { KEMIA_VISUAL_UI, type KemiaVisualLang } from "@/lib/kemiaVisualContent";

interface Props {
  prompt: string;
  diagramId: ParticleDiagramId;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (answer: string) => void;
  lang: KemiaVisualLang;
}

export default function TeilchenBild({ prompt, diagramId, options, correctIndex, userAnswer, submitted, onAnswer, lang }: Props) {
  const correctAnswer = options[correctIndex];
  const isCorrect = userAnswer === correctAnswer;
  const ui = KEMIA_VISUAL_UI[lang];

  return <div className="px-1 py-1.5">
    <div className="mb-2 flex items-center gap-2">
      <span className="w-5 shrink-0 text-right text-xs text-slate-300">→</span>
      <span className="text-sm font-bold text-slate-800">{prompt}</span>
    </div>
    <div className="flex flex-col gap-3 pl-6 sm:flex-row sm:items-center">
      <div className="w-full max-w-[190px]">
        <div className="mb-1 text-[11px] font-semibold uppercase tracking-[.2em] text-slate-400">{ui.particle}</div>
        <ParticleDiagramSvg kind={diagramId} label={ui.particle + ": " + prompt} className="h-28 w-full" />
      </div>
      <div className="flex max-w-md flex-wrap gap-1.5">
        {options.map((option) => {
          let cls = "rounded-full border px-3 py-1.5 text-xs font-bold transition-all ";
          if (submitted) {
            cls += option === correctAnswer ? "border-emerald-500 bg-emerald-500 text-white" : option === userAnswer && !isCorrect ? "border-red-300 bg-red-100 text-red-500" : "border-slate-200 bg-white text-slate-300";
          } else {
            cls += option === userAnswer ? "border-teal-500 bg-teal-500 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-slate-400";
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
