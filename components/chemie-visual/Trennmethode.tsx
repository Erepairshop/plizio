'use client';

interface Props {
  prompt: string;
  scenario: string;
  mixture: string[];
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function Trennmethode({
  prompt,
  scenario,
  mixture,
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

      <div className="pl-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 mb-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
            Gemisch
          </div>
          <div className="text-sm font-semibold text-slate-700">{scenario}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {mixture.map((item) => (
              <span key={item} className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {options.map((option) => {
            const selected = option === userAnswer;
            let cls = "rounded-2xl border px-3 py-2 text-left text-xs font-bold transition-all ";
            if (submitted) {
              if (option === correctAnswer) cls += "bg-emerald-500 border-emerald-500 text-white";
              else if (selected && !isCorrect) cls += "bg-red-100 border-red-300 text-red-500";
              else cls += "bg-white border-slate-200 text-slate-300";
            } else {
              cls += selected
                ? "bg-sky-500 border-sky-500 text-white"
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
