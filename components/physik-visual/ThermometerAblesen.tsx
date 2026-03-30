'use client';

interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function ThermometerAblesen({
  label,
  value,
  min,
  max,
  options,
  correctIndex,
  userAnswer,
  submitted,
  onAnswer,
}: Props) {
  const correctAnswer = options[correctIndex];
  const isCorrect = userAnswer === correctAnswer;
  const pct = Math.max(0, Math.min(100, ((value - min) / Math.max(max - min, 1)) * 100));

  return (
    <div className="px-1 py-1.5">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-sm font-bold text-slate-800">{label}</span>
      </div>

      <div className="pl-6 flex items-center gap-4 flex-wrap">
        <div className="flex items-end gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
          <div className="relative w-8 h-28 flex items-end justify-center">
            <div className="absolute bottom-0 w-8 h-8 rounded-full bg-rose-500 shadow-inner" />
            <div className="absolute bottom-5 w-4 h-20 rounded-full bg-white border-2 border-slate-300 overflow-hidden">
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-rose-500 to-orange-400"
                style={{ height: `${pct}%` }}
              />
            </div>
          </div>
          <div className="text-[11px] text-slate-500 leading-5">
            <div>{max} °C</div>
            <div className="mt-10">{Math.round((min + max) / 2)} °C</div>
            <div className="mt-10">{min} °C</div>
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
                ? "bg-sky-500 border-sky-500 text-white"
                : "bg-white border-slate-300 text-slate-700 hover:border-slate-400";
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
      </div>

      {submitted && userAnswer && (
        <div className={`text-xs font-bold mt-2 pl-6 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
          {isCorrect ? "✓ Richtig!" : `✗ Richtig: ${correctAnswer}`}
        </div>
      )}
    </div>
  );
}
