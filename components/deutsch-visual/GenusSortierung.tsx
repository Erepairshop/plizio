'use client';

/**
 * GenusSortierung — tap der / die / das for the given noun
 * Compact paper-inline style: fits in a single ruled line (28px)
 */

interface Props {
  word: string;
  correct: "der" | "die" | "das";
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  labels?: { der: string; die: string; das: string };
}

const ARTIKEL_STYLES: Record<"der" | "die" | "das", { base: string; selected: string; correct: string }> = {
  der: {
    base:     "border-blue-300 text-blue-700 hover:bg-blue-50",
    selected: "bg-blue-500 border-blue-500 text-white",
    correct:  "bg-blue-500 border-blue-500 text-white",
  },
  die: {
    base:     "border-pink-300 text-pink-700 hover:bg-pink-50",
    selected: "bg-pink-500 border-pink-500 text-white",
    correct:  "bg-pink-500 border-pink-500 text-white",
  },
  das: {
    base:     "border-green-300 text-green-700 hover:bg-green-50",
    selected: "bg-green-500 border-green-500 text-white",
    correct:  "bg-green-500 border-green-500 text-white",
  },
};

const LABELS = ["der", "die", "das"] as const;

export default function GenusSortierung({ word, correct, userAnswer, submitted, onAnswer, labels }: Props) {
  const isCorrect = userAnswer === correct;
  const displayLabel = (key: "der" | "die" | "das") => labels ? labels[key] : key;

  return (
    <div>
      {/* Single paper line: word → [der] [die] [das] */}
      <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        {/* Blank + word — mimics "_____ Kuchen" worksheet style */}
        <span className="font-bold text-sm text-slate-800 mr-1">{word}</span>
        <span className="text-slate-300 text-xs shrink-0">{labels ? "" : "Artikel:"}</span>
        <div className="flex gap-1.5 items-center">
          {LABELS.map((label) => {
            const s = ARTIKEL_STYLES[label];
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
                {displayLabel(label)}
              </button>
            );
          })}
        </div>
        {/* Inline result mark */}
        {submitted && userAnswer && (
          <span className={`text-xs font-bold shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → ${displayLabel(correct)}`}
          </span>
        )}
      </div>
    </div>
  );
}
