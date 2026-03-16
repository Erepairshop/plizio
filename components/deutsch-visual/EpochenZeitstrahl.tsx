'use client';

/**
 * EpochenZeitstrahl — author / work → correct literary epoch
 * Shows a mini horizontal timeline with 4 epoch options as coloured era chips.
 * Used for K8: Epochen & Gattungen
 */

// Visual colour for each epoch
const EPOCH_STYLE: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  "Antike":         { bg: "bg-stone-100",  border: "border-stone-400",   text: "text-stone-700",   dot: "bg-stone-400"   },
  "Mittelalter":    { bg: "bg-yellow-50",  border: "border-yellow-500",  text: "text-yellow-800",  dot: "bg-yellow-500"  },
  "Barock":         { bg: "bg-amber-50",   border: "border-amber-500",   text: "text-amber-800",   dot: "bg-amber-500"   },
  "Aufklärung":     { bg: "bg-sky-50",     border: "border-sky-500",     text: "text-sky-800",     dot: "bg-sky-500"     },
  "Sturm & Drang":  { bg: "bg-orange-50",  border: "border-orange-500",  text: "text-orange-800",  dot: "bg-orange-500"  },
  "Klassik":        { bg: "bg-indigo-50",  border: "border-indigo-500",  text: "text-indigo-800",  dot: "bg-indigo-500"  },
  "Romantik":       { bg: "bg-violet-50",  border: "border-violet-400",  text: "text-violet-800",  dot: "bg-violet-400"  },
  "Realismus":      { bg: "bg-emerald-50", border: "border-emerald-500", text: "text-emerald-800", dot: "bg-emerald-500" },
  "Naturalismus":   { bg: "bg-lime-50",    border: "border-lime-600",    text: "text-lime-800",    dot: "bg-lime-600"    },
  "Expressionismus":{ bg: "bg-red-50",     border: "border-red-500",     text: "text-red-800",     dot: "bg-red-500"     },
  "Moderne":        { bg: "bg-rose-50",    border: "border-rose-500",    text: "text-rose-800",    dot: "bg-rose-500"    },
  "Postmoderne":    { bg: "bg-pink-50",    border: "border-pink-500",    text: "text-pink-800",    dot: "bg-pink-500"    },
  "Weimarer Klassik": { bg: "bg-indigo-50", border: "border-indigo-500", text: "text-indigo-800",  dot: "bg-indigo-500"  },
};

const NEUTRAL_STYLE = { bg: "bg-slate-100", border: "border-slate-300", text: "text-slate-600", dot: "bg-slate-400" };

interface Props {
  /** Author name and / or work, e.g. "Goethe: Faust" */
  author: string;
  /** Short hint about the author/work shown below, e.g. "1808" or "Dichter & Denker" */
  hint?: string;
  /** 4 epoch names to choose from */
  options: string[];
  /** Index of correct option */
  correct: number;
  userAnswer: string;   // "" or String(selectedIndex)
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function EpochenZeitstrahl({ author, hint, options, correct, userAnswer, submitted, onAnswer }: Props) {
  const selectedIdx = userAnswer !== "" ? parseInt(userAnswer) : -1;
  const isCorrect = selectedIdx === correct;
  const correctEpoch = options[correct];

  return (
    <div>
      {/* Author card */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1 ml-6">
        <span className="text-base">✍️</span>
        <span className="text-sm font-bold text-slate-800">{author}</span>
        {hint && <span className="text-xs text-slate-400 italic">({hint})</span>}
        {/* Inline result */}
        {submitted && (
          <span className={`text-xs font-bold ml-2 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → ${correctEpoch}`}
          </span>
        )}
      </div>

      {/* Timeline stripe + epoch chips */}
      <div style={{ minHeight: 36 }} className="px-1 ml-6 pb-1">
        {/* Connecting line */}
        <div className="relative flex items-center gap-1 flex-wrap">
          {/* Horizontal timeline bar */}
          <div className="absolute top-3.5 left-0 right-0 h-px bg-slate-200 pointer-events-none" />

          {options.map((epoch, i) => {
            const s = EPOCH_STYLE[epoch] ?? NEUTRAL_STYLE;
            let cls = "relative flex flex-col items-center gap-0.5 px-2.5 rounded-lg border-2 text-[11px] font-bold transition-all select-none z-10 ";

            if (submitted) {
              if (i === correct) {
                cls += `${s.bg} ${s.border} ${s.text}`;
              } else if (i === selectedIdx && !isCorrect) {
                cls += "bg-red-50 border-red-300 text-red-400 line-through opacity-60";
              } else {
                cls += "bg-white border-slate-100 text-slate-300";
              }
            } else {
              cls += i === selectedIdx
                ? `${s.bg} ${s.border} ${s.text} cursor-pointer shadow-sm`
                : "bg-white border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-700 cursor-pointer";
            }

            return (
              <button
                key={i}
                style={{ height: 28, lineHeight: "14px", paddingTop: 2, paddingBottom: 2 }}
                className={cls}
                disabled={submitted}
                onClick={() => !submitted && onAnswer(String(i))}
              >
                {/* Epoch dot */}
                <span className={`w-2 h-2 rounded-full ${submitted && i === correct ? s.dot : i === selectedIdx && !submitted ? s.dot : "bg-slate-300"}`} />
                {epoch}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
