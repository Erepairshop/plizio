'use client';

interface Props {
  prompt: string;
  scenario: string;
  sceneEmoji: string;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function ReaktionOderNicht({
  prompt,
  scenario,
  sceneEmoji,
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
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold text-slate-700">{scenario}</div>
            <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl shadow-sm">
              {sceneEmoji}
            </div>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {options.map((option) => {
            let cls = "px-3 py-2 rounded-2xl border text-xs font-bold transition-all ";
            if (submitted) {
              if (option === correctAnswer) cls += "bg-emerald-500 border-emerald-500 text-white";
              else if (option === userAnswer && !isCorrect) cls += "bg-red-100 border-red-300 text-red-500";
              else cls += "bg-white border-slate-200 text-slate-300";
            } else {
              cls += option === userAnswer
                ? "bg-amber-500 border-amber-500 text-white"
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
