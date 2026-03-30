'use client';

interface Props {
  prompt: string;
  symbol: string;
  title: string;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function LaborSymbol({
  prompt,
  symbol,
  title,
  options,
  correctIndex,
  userAnswer,
  submitted,
  onAnswer,
}: Props) {
  const correctAnswer = options[correctIndex];
  const isCorrect = userAnswer === correctAnswer;

  return (
    <div className="px-1 py-1.5">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-sm font-bold text-slate-800">{prompt}</span>
      </div>

      <div className="pl-6 flex items-center gap-4 flex-wrap">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 min-w-[160px]">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
            Symbol
          </div>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-2xl border border-rose-200 bg-rose-50 flex items-center justify-center text-4xl">
              {symbol}
            </div>
            <div className="text-sm font-bold text-slate-700">{title}</div>
          </div>
        </div>

        <div className="flex gap-1.5 flex-wrap max-w-md">
          {options.map((option) => {
            let cls = "px-3 py-1.5 rounded-full border font-bold text-xs transition-all ";
            if (submitted) {
              if (option === correctAnswer) cls += "bg-emerald-500 border-emerald-500 text-white";
              else if (option === userAnswer && !isCorrect) cls += "bg-red-100 border-red-300 text-red-500";
              else cls += "bg-white border-slate-200 text-slate-300";
            } else {
              cls += option === userAnswer
                ? "bg-rose-500 border-rose-500 text-white"
                : "bg-white border-slate-300 text-slate-700 hover:border-slate-400";
            }
            return (
              <button key={option} className={cls} disabled={submitted} onClick={() => !submitted && onAnswer(option)}>
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {submitted && userAnswer && (
        <div className={`text-xs font-bold mt-2 pl-6 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
          {isCorrect ? "✓ Richtig!" : `✗ Richtig: ${correctAnswer}`}
        </div>
      )}
    </div>
  );
}
