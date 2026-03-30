'use client';

interface Props {
  scenario: string;
  objectEmoji: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const ARROW_STYLES: Record<string, string> = {
  "↑": "from-sky-500 to-blue-600",
  "↓": "from-violet-500 to-indigo-600",
  "←": "from-emerald-500 to-green-600",
  "→": "from-amber-500 to-orange-600",
};

export default function KraftRichtung({
  scenario,
  objectEmoji,
  prompt,
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
            Situation
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold text-slate-700">{scenario}</div>
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl shadow-sm">
              {objectEmoji}
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {options.map((option) => {
            const selected = option === userAnswer;
            const correct = option === correctAnswer;
            let cls = "w-12 h-12 rounded-2xl border text-xl font-black transition-all ";
            if (submitted) {
              if (correct) cls += `text-white border-transparent bg-gradient-to-br ${ARROW_STYLES[option] ?? "from-slate-500 to-slate-700"}`;
              else if (selected && !isCorrect) cls += "bg-red-100 border-red-300 text-red-500";
              else cls += "bg-white border-slate-200 text-slate-300";
            } else {
              cls += selected
                ? `text-white border-transparent bg-gradient-to-br ${ARROW_STYLES[option] ?? "from-slate-500 to-slate-700"}`
                : "bg-white border-slate-300 text-slate-600 hover:border-slate-400";
            }
            return (
              <button
                key={option}
                className={cls}
                disabled={submitted}
                onClick={() => !submitted && onAnswer(option)}
              >
                {option}
              </button>
            );
          })}
        </div>

        {submitted && userAnswer && (
          <div className={`text-xs font-bold mt-2 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓ Richtig!" : `✗ Richtig: ${correctAnswer}`}
          </div>
        )}
      </div>
    </div>
  );
}
