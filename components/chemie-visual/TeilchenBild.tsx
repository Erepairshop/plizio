'use client';

interface Props {
  prompt: string;
  particles: { x: number; y: number }[];
  mode: "solid" | "liquid" | "gas";
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function TeilchenBild({
  prompt,
  particles,
  mode,
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

      <div className="pl-6 flex flex-wrap items-center gap-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
            Teilchenbild
          </div>
          <div className="relative w-40 h-28 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div
              className={`absolute inset-x-0 bottom-0 ${
                mode === "solid" ? "h-20 bg-sky-100" : mode === "liquid" ? "h-14 bg-cyan-100" : "h-6 bg-violet-50"
              }`}
            />
            {particles.map((particle, idx) => (
              <div
                key={`${particle.x}-${particle.y}-${idx}`}
                className="absolute w-3.5 h-3.5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 border border-white/70 shadow-sm"
                style={{ left: `${particle.x}%`, top: `${particle.y}%`, transform: "translate(-50%, -50%)" }}
              />
            ))}
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
                ? "bg-teal-500 border-teal-500 text-white"
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
