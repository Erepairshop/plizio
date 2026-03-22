'use client';

/**
 * ErnährungsSort — Sort food item into nutrient group
 * Compact paper-inline style
 */

interface Props {
  item: string;
  correct: string;
  options: string[];
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const GROUP_COLORS: Record<string, { base: string; selected: string; correct: string }> = {
  "Proteine":       { base: "border-red-300 text-red-700 hover:bg-red-50",       selected: "bg-red-500 border-red-500 text-white",    correct: "bg-red-500 border-red-500 text-white" },
  "Kohlenhydrate":  { base: "border-amber-300 text-amber-700 hover:bg-amber-50", selected: "bg-amber-500 border-amber-500 text-white", correct: "bg-amber-500 border-amber-500 text-white" },
  "Fette":          { base: "border-yellow-300 text-yellow-700 hover:bg-yellow-50", selected: "bg-yellow-500 border-yellow-500 text-white", correct: "bg-yellow-500 border-yellow-500 text-white" },
  "Vitamine":       { base: "border-green-300 text-green-700 hover:bg-green-50", selected: "bg-green-500 border-green-500 text-white",  correct: "bg-green-500 border-green-500 text-white" },
  "Mineralstoffe":  { base: "border-blue-300 text-blue-700 hover:bg-blue-50",    selected: "bg-blue-500 border-blue-500 text-white",   correct: "bg-blue-500 border-blue-500 text-white" },
};
const DEFAULT_COLOR = { base: "border-purple-300 text-purple-700 hover:bg-purple-50", selected: "bg-purple-500 border-purple-500 text-white", correct: "bg-purple-500 border-purple-500 text-white" };

export default function ErnährungsSort({ item, correct, options, userAnswer, submitted, onAnswer }: Props) {
  const isCorrect = userAnswer === correct;

  return (
    <div>
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1 flex-wrap">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="font-bold text-sm text-slate-800 mr-1">{item}</span>
        <span className="text-slate-300 text-xs shrink-0">Gruppe:</span>
        <div className="flex gap-1 items-center flex-wrap">
          {options.map((opt) => {
            const s = GROUP_COLORS[opt] ?? DEFAULT_COLOR;
            let cls = "px-2 rounded border font-bold text-xs transition-all ";
            if (submitted) {
              if (opt === correct) cls += s.correct;
              else if (opt === userAnswer && !isCorrect) cls += "bg-red-100 border-red-300 text-red-500 line-through opacity-70";
              else cls += "border-slate-200 text-slate-300 bg-white";
            } else {
              cls += opt === userAnswer ? s.selected : `bg-white ${s.base}`;
            }
            return (
              <button
                key={opt}
                style={{ height: 22, lineHeight: "22px" }}
                className={cls}
                disabled={submitted}
                onClick={() => !submitted && onAnswer(opt)}
              >
                {opt}
              </button>
            );
          })}
        </div>
        {submitted && userAnswer && (
          <span className={`text-xs font-bold shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → ${correct}`}
          </span>
        )}
      </div>
    </div>
  );
}
