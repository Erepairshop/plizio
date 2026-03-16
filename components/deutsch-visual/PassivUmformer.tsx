'use client';

/**
 * PassivUmformer — Aktiv → Passiv Transformation
 * Shows an active sentence; student taps the correct auxiliary (wird/wurde)
 * to complete the passive template.
 */

interface Props {
  aktiv: string;
  passivTemplate: string;  // has "___" where auxiliary goes
  hilfsverb: string;       // correct answer
  options: string[];
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function PassivUmformer({
  aktiv, passivTemplate, hilfsverb, options, userAnswer, submitted, onAnswer,
}: Props) {
  const selected = userAnswer || "";
  const isCorrect = selected === hilfsverb;

  const filled = passivTemplate.replace("___", selected
    ? `[${selected}]`
    : "___");

  return (
    <div className="flex flex-col gap-1 px-1 py-0.5">
      {/* Active sentence */}
      <div style={{ minHeight: 24, lineHeight: "24px" }} className="flex items-center gap-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">A:</span>
        <span className="text-xs text-slate-500 italic">{aktiv}</span>
      </div>

      {/* Passive template with filled-in blank */}
      <div style={{ minHeight: 24, lineHeight: "24px" }} className="flex items-center gap-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">P:</span>
        <span className="text-xs text-slate-700 font-medium">
          {passivTemplate.split("___").map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                submitted ? (
                  <span className={`font-bold px-1 rounded ${isCorrect ? "text-emerald-600" : "text-red-500"}`}>
                    {selected || "___"}
                  </span>
                ) : (
                  <span className={`font-bold px-1 rounded border ${selected ? "border-blue-400 text-blue-700 bg-blue-50" : "border-dashed border-slate-300 text-slate-300"}`}>
                    {selected || "___"}
                  </span>
                )
              )}
            </span>
          ))}
        </span>
        {submitted && selected && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → "${hilfsverb}"`}
          </span>
        )}
      </div>

      {/* Option chips */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap">
        <span className="w-5 shrink-0" />
        {options.map((opt) => {
          let cls = "px-3 rounded border font-bold text-xs transition-all select-none cursor-pointer ";
          if (submitted) {
            if (opt === hilfsverb) {
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
