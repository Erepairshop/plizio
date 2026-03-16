'use client';

/**
 * KommaSetzen — Click to place a comma in the correct position in the sentence
 * Words shown as chips; student clicks the gap between the correct two words.
 */

interface Props {
  words: string[];        // sentence split into words
  commaPosition: number; // after this index the comma belongs
  rule: string;           // hint shown after submit
  userAnswer: string;     // "" or String(index)
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function KommaSetzen({
  words, commaPosition, rule, userAnswer, submitted, onAnswer,
}: Props) {
  const selected = userAnswer !== "" ? parseInt(userAnswer) : -1;
  const isCorrect = selected === commaPosition;

  return (
    <div>
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-0.5 flex-wrap px-1 py-0.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0 mr-1">→</span>
        {words.map((w, i) => (
          <span key={i} className="flex items-center gap-0">
            <span className="text-xs text-slate-700 font-medium px-1">{w}</span>

            {/* Gap between words (not after last word) */}
            {i < words.length - 1 && (
              <button
                disabled={submitted}
                onClick={() => !submitted && onAnswer(String(i))}
                style={{ height: 20, width: 16 }}
                className={`
                  flex items-center justify-center text-xs font-bold rounded transition-all select-none
                  ${submitted
                    ? i === commaPosition
                      ? "text-emerald-600 font-black"
                      : i === selected && !isCorrect
                        ? "text-red-400"
                        : "text-transparent"
                    : i === selected
                      ? "text-blue-500 font-black"
                      : "text-slate-200 hover:text-slate-400 cursor-pointer"
                  }
                `}
                title="Komma hier?"
              >
                ,
              </button>
            )}
          </span>
        ))}

        {/* Inline result */}
        {submitted && selected >= 0 && (
          <span className={`text-xs font-bold ml-2 shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗`}
          </span>
        )}
      </div>

      {/* Rule hint after submit */}
      {submitted && (
        <div style={{ height: 24, lineHeight: "24px" }} className="flex items-center gap-1 px-1">
          <span className="w-5 shrink-0" />
          <span className="text-xs text-slate-400 italic">{rule}</span>
        </div>
      )}
    </div>
  );
}
