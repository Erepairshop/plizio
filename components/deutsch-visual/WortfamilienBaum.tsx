'use client';

/**
 * WortfamilienBaum — tap all words that belong to the same word family (Wortstamm)
 * Compact paper-inline: chips on one/two lines, multi-select
 */

interface Props {
  stamm: string;           // root word shown as label, e.g. "spiel"
  options: string[];       // 6 words: some from the family, some distractors
  correctSet: number[];    // indices of correct words
  userAnswer: string;      // comma-separated selected indices, e.g. "0,2,4"
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function WortfamilienBaum({ stamm, options, correctSet, userAnswer, submitted, onAnswer }: Props) {
  const selectedSet = new Set(
    userAnswer ? userAnswer.split(",").map(Number).filter((n) => !isNaN(n)) : []
  );
  const correctSetObj = new Set(correctSet);

  const toggle = (i: number) => {
    if (submitted) return;
    const next = new Set(selectedSet);
    if (next.has(i)) next.delete(i); else next.add(i);
    onAnswer([...next].sort((a, b) => a - b).join(","));
  };

  const isAllCorrect =
    correctSet.every((i) => selectedSet.has(i)) &&
    [...selectedSet].every((i) => correctSetObj.has(i));

  return (
    <div>
      {/* Header line: Wortstamm label */}
      <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1">
        <span className="text-slate-500 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-xs text-slate-600 font-semibold">Wortstamm:</span>
        <span className="px-2 rounded border border-indigo-300 bg-indigo-50 text-indigo-700 font-black text-xs" style={{ height: 22, lineHeight: "22px" }}>
          -{stamm}-
        </span>
        <span className="text-xs text-slate-500 font-medium">· alle passenden Wörter tippen</span>
      </div>

      {/* Word chips — multi-select */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5">
        <span className="w-5 shrink-0" />
        {options.map((w, i) => {
          const isSelected = selectedSet.has(i);
          const isInFamily = correctSetObj.has(i);
          let cls = "px-2 rounded border font-semibold text-xs transition-all select-none cursor-pointer ";
          if (submitted) {
            if (isInFamily && isSelected) {
              cls += "bg-emerald-100 border-emerald-400 text-emerald-700";
            } else if (isInFamily && !isSelected) {
              cls += "bg-emerald-50 border-emerald-300 text-emerald-600 opacity-80";
            } else if (!isInFamily && isSelected) {
              cls += "bg-red-50 border-red-300 text-red-500 line-through opacity-60";
            } else {
              cls += "bg-white border-slate-200 text-slate-400";
            }
          } else {
            cls += isSelected
              ? "bg-indigo-500 border-indigo-500 text-white"
              : "bg-white border-slate-300 text-slate-700 hover:bg-indigo-50 hover:border-indigo-300";
          }
          return (
            <button
              key={i}
              style={{ height: 22, lineHeight: "22px" }}
              className={cls}
              onClick={() => toggle(i)}
              disabled={submitted}
            >
              {w}
            </button>
          );
        })}
        {submitted && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isAllCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isAllCorrect ? "✓" : `✗ → ${correctSet.map((i) => options[i]).join(", ")}`}
          </span>
        )}
      </div>
    </div>
  );
}
