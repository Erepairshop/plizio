'use client';

/**
 * FehlerFinden — tap the word in the sentence that has a mistake
 * (wrong article, wrong verb form, or spelling error)
 * Compact paper-inline style: sentence chips on a ruled line
 */

interface Props {
  words: string[];       // sentence split into words, one has an error
  errorIndex: number;    // index of the wrong word
  hint: string;          // short explanation shown after submit
  userAnswer: string;    // "" or String(index)
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function FehlerFinden({ words, errorIndex, hint, userAnswer, submitted, onAnswer }: Props) {
  const selectedIdx = userAnswer !== "" ? parseInt(userAnswer) : -1;
  const isCorrect = selectedIdx === errorIndex;

  return (
    <div>
      {/* Single line: word chips — tap the wrong one */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5">
        <span className="text-slate-500 text-xs w-5 text-right shrink-0">→</span>
        {words.map((w, i) => {
          let cls = "px-2 rounded border font-semibold text-xs transition-all select-none cursor-pointer ";
          if (submitted) {
            if (i === errorIndex) {
              cls += "bg-red-100 border-red-400 text-red-700 underline decoration-wavy";
            } else if (i === selectedIdx && !isCorrect) {
              cls += "bg-orange-50 border-orange-300 text-orange-600 line-through opacity-70";
            } else {
              cls += "bg-white border-slate-200 text-slate-500";
            }
          } else {
            cls += i === selectedIdx
              ? "bg-orange-400 border-orange-400 text-white"
              : "bg-white border-slate-300 text-slate-700 hover:bg-orange-50 hover:border-orange-300";
          }
          return (
            <button
              key={i}
              style={{ height: 22, lineHeight: "22px" }}
              className={cls}
              disabled={submitted}
              onClick={() => !submitted && onAnswer(String(i))}
            >
              {w}
            </button>
          );
        })}
        {/* Inline result */}
        {submitted && selectedIdx >= 0 && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → "${words[errorIndex]}"`}
          </span>
        )}
      </div>

      {/* Hint line after submit */}
      {submitted && (
        <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-1 px-1">
          <span className="w-5 shrink-0" />
          <span className="text-xs text-slate-500 font-medium">{hint}</span>
        </div>
      )}
    </div>
  );
}
