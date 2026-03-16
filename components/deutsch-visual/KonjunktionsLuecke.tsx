'use client';

/**
 * KonjunktionsLücke — Two sentence halves connected by a missing conjunction.
 * Student taps the correct conjunction from 4 options.
 */

interface Props {
  left: string;
  right: string;
  conjunction: string;
  options: string[];
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function KonjunktionsLuecke({
  left, right, conjunction, options, userAnswer, submitted, onAnswer,
}: Props) {
  const selected = userAnswer || "";
  const isCorrect = selected === conjunction;

  return (
    <div className="flex flex-col gap-1 px-1 py-0.5">
      {/* Sentence display with blank */}
      <div style={{ minHeight: 24, lineHeight: "24px" }} className="flex items-center gap-1 flex-wrap">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-xs text-slate-700">{left}</span>
        <span
          className={`
            text-xs font-bold px-2 rounded border min-w-[2.5rem] text-center
            ${submitted
              ? isCorrect
                ? "bg-emerald-100 border-emerald-400 text-emerald-700"
                : "bg-red-100 border-red-300 text-red-600"
              : selected
                ? "bg-blue-500 border-blue-500 text-white"
                : "border-dashed border-slate-300 text-slate-300"
            }
          `}
        >
          {selected || "___"}
        </span>
        <span className="text-xs text-slate-700">{right}</span>
        {submitted && selected && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → "${conjunction}"`}
          </span>
        )}
      </div>

      {/* Option chips */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap">
        <span className="w-5 shrink-0" />
        {options.map((opt) => {
          let cls = "px-3 rounded border font-bold text-xs transition-all select-none cursor-pointer ";
          if (submitted) {
            if (opt === conjunction) {
              cls += "bg-emerald-100 border-emerald-400 text-emerald-700";
            } else if (opt === selected && !isCorrect) {
              cls += "bg-red-100 border-red-300 text-red-500 line-through opacity-60";
            } else {
              cls += "bg-white border-slate-200 text-slate-400 opacity-50";
            }
          } else {
            cls += opt === selected
              ? "bg-blue-500 border-blue-500 text-white"
              : "bg-white border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-300";
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
    </div>
  );
}
