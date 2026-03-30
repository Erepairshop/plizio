'use client';

interface Props {
  prompt: string;
  diagrams: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function StromkreisDiagramm({
  prompt,
  diagrams,
  correctIndex,
  userAnswer,
  submitted,
  onAnswer,
}: Props) {
  const correctAnswer = diagrams[correctIndex];
  const isCorrect = userAnswer === correctAnswer;

  return (
    <div className="px-1 py-1.5">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-sm font-bold text-slate-800">{prompt}</span>
      </div>

      <div className="pl-6 grid grid-cols-2 gap-2">
        {diagrams.map((diagram, idx) => {
          const selected = diagram === userAnswer;
          const correct = idx === correctIndex;
          let cls = "rounded-2xl border px-3 py-3 text-center transition-all ";
          if (submitted) {
            if (correct) cls += "bg-emerald-500 border-emerald-500 text-white";
            else if (selected && !isCorrect) cls += "bg-red-100 border-red-300 text-red-500";
            else cls += "bg-white border-slate-200 text-slate-300";
          } else {
            cls += selected
              ? "bg-indigo-500 border-indigo-500 text-white"
              : "bg-white border-slate-300 text-slate-700 hover:border-slate-400";
          }
          return (
            <button
              key={`${idx}-${diagram}`}
              className={cls}
              disabled={submitted}
              onClick={() => !submitted && onAnswer(diagram)}
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-70 mb-2">
                Schema {String.fromCharCode(65 + idx)}
              </div>
              <div className="text-2xl leading-8 whitespace-pre-wrap font-mono">
                {diagram}
              </div>
            </button>
          );
        })}
      </div>

      {submitted && userAnswer && (
        <div className={`text-xs font-bold mt-2 pl-6 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
          {isCorrect ? "✓ Richtig!" : `✗ Richtig: Schema ${String.fromCharCode(65 + correctIndex)}`}
        </div>
      )}
    </div>
  );
}
