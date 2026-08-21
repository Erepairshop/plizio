"use client";

interface Props {
  svgHtml: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  userAnswer?: string;
  submitted: boolean;
  onAnswer: (answer: string) => void;
}

export default function SachkundeDiagramQuiz({
  svgHtml,
  prompt,
  options,
  correctIndex,
  userAnswer,
  submitted,
  onAnswer,
}: Props) {
  return (
    <div className="flex w-full flex-col items-center gap-2 py-1">
      <div className="h-28 w-full max-w-[240px]" dangerouslySetInnerHTML={{ __html: svgHtml }} />
      <p className="text-center text-sm font-semibold text-slate-700">{prompt}</p>
      <div className="flex w-full flex-wrap justify-center gap-2">
        {options.map((option, index) => {
          const selected = userAnswer === option;
          const correct = index === correctIndex;
          const state = !submitted
            ? selected ? "border-blue-500 bg-blue-500 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
            : correct ? "border-emerald-500 bg-emerald-500 text-white" : selected ? "border-red-500 bg-red-500 text-white" : "border-slate-200 bg-white text-slate-400 opacity-50";
          return (
            <button
              key={option}
              type="button"
              disabled={submitted}
              onClick={() => !submitted && onAnswer(option)}
              className={`rounded-lg border-2 px-3 py-1.5 text-sm font-bold transition-colors ${state}`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
