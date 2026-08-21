"use client";

import {
  CellDiagramSvg,
  GeneticsDiagramSvg,
  OrganDiagramSvg,
  PlantDiagramSvg,
  type CellDiagramId,
  type GeneticsDiagramId,
  type OrganDiagramId,
  type PlantDiagramId,
} from "./BiologyTestDiagrams";
import { BIOLOGIE_VISUAL_UI, biologieVisualLang } from "@/lib/biologieVisualContent";

type Family = "organ" | "plant" | "cell" | "genetics";

interface Props {
  family: Family;
  prompt: string;
  hint: string;
  diagramId: OrganDiagramId | PlantDiagramId | CellDiagramId | GeneticsDiagramId;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (answer: string) => void;
  lang?: string;
}

function Diagram({ family, diagramId, label }: Pick<Props, "family" | "diagramId"> & { label: string }) {
  const common = { label, className: "h-auto w-full max-h-28" };
  if (family === "organ") return <OrganDiagramSvg kind={diagramId as OrganDiagramId} {...common} />;
  if (family === "plant") return <PlantDiagramSvg kind={diagramId as PlantDiagramId} {...common} />;
  if (family === "cell") return <CellDiagramSvg kind={diagramId as CellDiagramId} {...common} />;
  return <GeneticsDiagramSvg kind={diagramId as GeneticsDiagramId} {...common} />;
}

export default function BiologyDiagramQuestion({
  family,
  prompt,
  hint,
  diagramId,
  options,
  correctIndex,
  userAnswer,
  submitted,
  onAnswer,
  lang,
}: Props) {
  const ui = BIOLOGIE_VISUAL_UI[biologieVisualLang(lang)];
  const correctAnswer = options[correctIndex];
  const isCorrect = userAnswer === correctAnswer;

  return (
    <div className="px-1 py-1.5">
      <div className="mb-2 flex items-center gap-2">
        <span className="w-5 shrink-0 text-right text-xs text-slate-300">→</span>
        <span className="text-sm font-bold text-slate-800">{prompt}</span>
      </div>
      <div className="grid gap-3 pl-6 sm:grid-cols-[150px_1fr] sm:items-center">
        <div className="mx-auto w-full max-w-[150px]">
          <Diagram family={family} diagramId={diagramId} label={`${prompt} ${correctAnswer}`} />
        </div>
        <div>
          <p className="mb-2 text-xs italic leading-relaxed text-slate-500">{hint}</p>
          <div className="flex flex-wrap gap-1.5">
            {options.map(option => {
              let cls = "rounded-full border px-3 py-1 text-xs font-bold transition-all ";
              if (submitted) {
                if (option === correctAnswer) cls += "border-emerald-500 bg-emerald-500 text-white";
                else if (option === userAnswer && !isCorrect) cls += "border-red-300 bg-red-100 text-red-600 line-through";
                else cls += "border-slate-200 bg-white text-slate-300";
              } else {
                cls += option === userAnswer
                  ? "border-violet-500 bg-violet-500 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-violet-300";
              }
              return (
                <button key={option} type="button" className={cls} disabled={submitted} onClick={() => !submitted && onAnswer(option)}>
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {submitted && userAnswer && (
        <div className={`mt-2 pl-6 text-xs font-bold ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
          {isCorrect ? `✓ ${ui.correct}` : `✗ ${ui.correctPrefix} ${correctAnswer}`}
        </div>
      )}
    </div>
  );
}
