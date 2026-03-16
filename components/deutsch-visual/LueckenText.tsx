'use client';

/**
 * LueckenText — sentence with one highlighted blank, user picks the correct form
 * Used for K8: Partizipialkonstruktionen, Konjunktiv forms in context
 * Paper-inline style: sentence shown, then option chips on the next line
 */

interface Props {
  /** Sentence with "___" marking the blank, e.g. "Der ___ Hund bellte laut." */
  sentence: string;
  /** 2–3 candidate forms */
  options: string[];
  /** index into options that is correct */
  correct: number;
  userAnswer: string;   // "" or String(selectedIndex)
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function LueckenText({ sentence, options, correct, userAnswer, submitted, onAnswer }: Props) {
  const selectedIdx = userAnswer !== "" ? parseInt(userAnswer) : -1;
  const isCorrect = selectedIdx === correct;

  // Split sentence at "___" to render the blank inline
  const parts = sentence.split("___");

  return (
    <div>
      {/* Sentence line with inline blank display */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center flex-wrap gap-0.5 px-1 py-0.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0 mr-1">→</span>
        <span className="text-slate-700 text-sm">{parts[0]}</span>
        {/* Blank indicator */}
        <span className={`px-2 mx-0.5 rounded border font-bold text-sm transition-all ${
          submitted
            ? isCorrect
              ? "bg-emerald-100 border-emerald-400 text-emerald-700"
              : "bg-red-100 border-red-400 text-red-700 line-through"
            : selectedIdx >= 0
              ? "bg-indigo-500 border-indigo-500 text-white"
              : "bg-slate-100 border-dashed border-slate-400 text-slate-400 italic"
        }`} style={{ minWidth: 64, textAlign: "center" }}>
          {selectedIdx >= 0 ? options[selectedIdx] : "___"}
        </span>
        {parts[1] && <span className="text-slate-700 text-sm">{parts[1]}</span>}
        {/* Inline result after submit */}
        {submitted && (
          <span className={`text-xs font-bold ml-2 shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → ${options[correct]}`}
          </span>
        )}
      </div>

      {/* Option chips row */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1.5 flex-wrap px-1 ml-6">
        {options.map((opt, i) => {
          let cls = "px-3 rounded-full border text-xs font-semibold transition-all select-none ";
          if (submitted) {
            if (i === correct) {
              cls += "bg-emerald-100 border-emerald-400 text-emerald-700";
            } else if (i === selectedIdx && !isCorrect) {
              cls += "bg-red-50 border-red-300 text-red-500 line-through opacity-60";
            } else {
              cls += "bg-slate-50 border-slate-200 text-slate-400";
            }
          } else {
            cls += i === selectedIdx
              ? "bg-indigo-500 border-indigo-500 text-white cursor-pointer"
              : "bg-white border-slate-300 text-slate-700 hover:bg-indigo-50 hover:border-indigo-300 cursor-pointer";
          }
          return (
            <button
              key={i}
              style={{ height: 22, lineHeight: "22px" }}
              className={cls}
              disabled={submitted}
              onClick={() => !submitted && onAnswer(String(i))}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
