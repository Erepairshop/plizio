'use client';

/**
 * MuellSortierung — Sort waste item into correct bin
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

const BIN_EMOJIS: Record<string, string> = {
  "Gelbe Tonne": "🟨",
  "Blaue Tonne": "🟦",
  "Braune Tonne": "🟫",
  Restmüll: "⬛",
  Glascontainer: "🟪",
  Papiercontainer: "📦",
  Kompost: "🌱",
};

const BIN_COLORS: Record<string, { base: string; selected: string; correct: string }> = {
  "Gelbe Tonne": {
    base: "border-yellow-300 text-yellow-700 hover:bg-yellow-50",
    selected: "bg-yellow-500 border-yellow-500 text-white",
    correct: "bg-yellow-500 border-yellow-500 text-white",
  },
  "Blaue Tonne": {
    base: "border-blue-300 text-blue-700 hover:bg-blue-50",
    selected: "bg-blue-500 border-blue-500 text-white",
    correct: "bg-blue-500 border-blue-500 text-white",
  },
  "Braune Tonne": {
    base: "border-amber-300 text-amber-700 hover:bg-amber-50",
    selected: "bg-amber-500 border-amber-500 text-white",
    correct: "bg-amber-500 border-amber-500 text-white",
  },
  Restmüll: {
    base: "border-slate-400 text-slate-700 hover:bg-slate-100",
    selected: "bg-slate-700 border-slate-700 text-white",
    correct: "bg-slate-700 border-slate-700 text-white",
  },
  Glascontainer: {
    base: "border-purple-300 text-purple-700 hover:bg-purple-50",
    selected: "bg-purple-500 border-purple-500 text-white",
    correct: "bg-purple-500 border-purple-500 text-white",
  },
  Papiercontainer: {
    base: "border-orange-300 text-orange-700 hover:bg-orange-50",
    selected: "bg-orange-500 border-orange-500 text-white",
    correct: "bg-orange-500 border-orange-500 text-white",
  },
  Kompost: {
    base: "border-green-300 text-green-700 hover:bg-green-50",
    selected: "bg-green-500 border-green-500 text-white",
    correct: "bg-green-500 border-green-500 text-white",
  },
};

export default function MuellSortierung({ item, correct, options, userAnswer, submitted, onAnswer }: Props) {
  const isCorrect = userAnswer === correct;

  return (
    <div>
      <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="font-bold text-sm text-slate-800 mr-1">{item}</span>
        <span className="text-slate-300 text-xs shrink-0">Tonne:</span>
        <div className="flex gap-1 items-center flex-wrap">
          {options.map((option) => {
            const s = BIN_COLORS[option] || { base: "border-slate-300", selected: "bg-slate-500", correct: "bg-slate-500" };
            let cls = "px-1.5 rounded border font-bold text-xs transition-all ";
            if (submitted) {
              if (option === correct) {
                cls += s.correct;
              } else if (option === userAnswer && !isCorrect) {
                cls += "bg-red-100 border-red-300 text-red-500 line-through opacity-70";
              } else {
                cls += "border-slate-200 text-slate-300 bg-white";
              }
            } else {
              cls += option === userAnswer ? s.selected : `bg-white ${s.base}`;
            }
            return (
              <button
                key={option}
                style={{ height: 22, lineHeight: "22px" }}
                className={cls}
                disabled={submitted}
                onClick={() => !submitted && onAnswer(option)}
                title={option}
              >
                {BIN_EMOJIS[option]} {option.length > 8 ? option.substring(0, 6) : option}
              </button>
            );
          })}
        </div>
        {submitted && userAnswer && (
          <span className={`text-xs font-bold shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → ${BIN_EMOJIS[correct]} ${correct}`}
          </span>
        )}
      </div>
    </div>
  );
}
