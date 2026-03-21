'use client';

/**
 * TierKlassifizierung — Classify animal as pet or wild animal
 * Compact paper-inline style: fits in a single ruled line (28px)
 */

interface Props {
  animal: string;
  correct: "haustier" | "wildtier";
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const ANIMAL_STYLES: Record<"haustier" | "wildtier", { base: string; selected: string; correct: string }> = {
  haustier: {
    base: "border-amber-300 text-amber-700 hover:bg-amber-50",
    selected: "bg-amber-500 border-amber-500 text-white",
    correct: "bg-amber-500 border-amber-500 text-white",
  },
  wildtier: {
    base: "border-green-300 text-green-700 hover:bg-green-50",
    selected: "bg-green-500 border-green-500 text-white",
    correct: "bg-green-500 border-green-500 text-white",
  },
};

const LABELS = ["haustier", "wildtier"] as const;
const DISPLAY_LABELS = { haustier: "🏠 Haustier", wildtier: "🌲 Wildtier" };

export default function TierKlassifizierung({ animal, correct, userAnswer, submitted, onAnswer }: Props) {
  const isCorrect = userAnswer === correct;

  return (
    <div>
      <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="font-bold text-sm text-slate-800 mr-1">{animal}</span>
        <span className="text-slate-300 text-xs shrink-0">Typ:</span>
        <div className="flex gap-1.5 items-center">
          {LABELS.map((label) => {
            const s = ANIMAL_STYLES[label];
            let cls = "px-2.5 rounded border font-bold text-xs transition-all ";
            if (submitted) {
              if (label === correct) {
                cls += s.correct;
              } else if (label === userAnswer && !isCorrect) {
                cls += "bg-red-100 border-red-300 text-red-500 line-through opacity-70";
              } else {
                cls += "border-slate-200 text-slate-300 bg-white";
              }
            } else {
              cls += label === userAnswer ? s.selected : `bg-white ${s.base}`;
            }
            return (
              <button
                key={label}
                style={{ height: 22, lineHeight: "22px" }}
                className={cls}
                disabled={submitted}
                onClick={() => !submitted && onAnswer(label)}
              >
                {DISPLAY_LABELS[label]}
              </button>
            );
          })}
        </div>
        {submitted && userAnswer && (
          <span className={`text-xs font-bold shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → ${DISPLAY_LABELS[correct]}`}
          </span>
        )}
      </div>
    </div>
  );
}
