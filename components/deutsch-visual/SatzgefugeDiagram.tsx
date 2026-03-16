'use client';

/**
 * SatzgefugeDiagram — visual diagram of a compound sentence
 * Shows Hauptsatz + Nebensatz as connected boxes, user identifies the Nebensatztyp
 * Used for K8: Nebensatztypen (Kausal, Final, Konzessiv, Konditional, Temporal, Modal)
 */

// Colour palette per Nebensatztyp
const TYPE_COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  Kausalsatz:    { bg: "bg-amber-50",   border: "border-amber-400",   text: "text-amber-800",   badge: "bg-amber-400 text-white" },
  Finalsatz:     { bg: "bg-blue-50",    border: "border-blue-400",    text: "text-blue-800",    badge: "bg-blue-500 text-white" },
  Konzessivsatz: { bg: "bg-violet-50",  border: "border-violet-400",  text: "text-violet-800",  badge: "bg-violet-500 text-white" },
  Konditionalsatz:{ bg: "bg-rose-50",   border: "border-rose-400",    text: "text-rose-800",    badge: "bg-rose-500 text-white" },
  Temporalsatz:  { bg: "bg-teal-50",    border: "border-teal-400",    text: "text-teal-800",    badge: "bg-teal-500 text-white" },
  Modalsatz:     { bg: "bg-orange-50",  border: "border-orange-400",  text: "text-orange-800",  badge: "bg-orange-500 text-white" },
  Relativsatz:   { bg: "bg-emerald-50", border: "border-emerald-400", text: "text-emerald-800", badge: "bg-emerald-500 text-white" },
  Konsekutivsatz:{ bg: "bg-pink-50",    border: "border-pink-400",    text: "text-pink-800",    badge: "bg-pink-500 text-white" },
};

const NEUTRAL = { bg: "bg-slate-50", border: "border-slate-300", text: "text-slate-600", badge: "bg-slate-400 text-white" };

interface Props {
  /** The Hauptsatz (main clause) */
  hauptsatz: string;
  /** The Nebensatz (subordinate clause) */
  nebensatz: string;
  /** The connecting conjunction, shown between the boxes */
  konjunktion: string;
  /** All options shown as chips (3–4 Nebensatztypen) */
  options: string[];
  /** Index of correct option */
  correct: number;
  userAnswer: string;   // "" or String(selectedIndex)
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function SatzgefugeDiagram({
  hauptsatz, nebensatz, konjunktion, options, correct, userAnswer, submitted, onAnswer
}: Props) {
  const selectedIdx = userAnswer !== "" ? parseInt(userAnswer) : -1;
  const isCorrect = selectedIdx === correct;
  const selectedType = selectedIdx >= 0 ? options[selectedIdx] : null;
  const correctType = options[correct];

  const displayType = submitted ? correctType : (selectedType ?? null);
  const colors = displayType ? (TYPE_COLORS[displayType] ?? NEUTRAL) : NEUTRAL;

  return (
    <div>
      {/* Diagram: two clause boxes connected by conjunction */}
      <div style={{ minHeight: 56 }} className="px-1 py-1 ml-6 flex items-center gap-1 flex-wrap">
        {/* Hauptsatz box */}
        <div className="bg-slate-100 border border-slate-300 rounded-lg px-2 py-1 flex flex-col items-center min-w-0">
          <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 leading-none mb-0.5">Hauptsatz</span>
          <span className="text-xs text-slate-700 font-medium text-center">{hauptsatz}</span>
        </div>

        {/* Arrow + conjunction connector */}
        <div className="flex flex-col items-center shrink-0 px-0.5">
          <span className={`text-[10px] font-bold px-1.5 rounded border ${
            displayType ? `${colors.bg} ${colors.border} ${colors.text}` : "bg-white border-slate-300 text-slate-500"
          }`}>{konjunktion}</span>
          <span className="text-slate-300 text-xs leading-none">→</span>
        </div>

        {/* Nebensatz box */}
        <div className={`border-2 rounded-lg px-2 py-1 flex flex-col items-center min-w-0 transition-all ${
          displayType
            ? `${colors.bg} ${colors.border}`
            : "bg-slate-50 border-dashed border-slate-300"
        }`}>
          <span className={`text-[9px] font-black uppercase tracking-wider leading-none mb-0.5 ${
            displayType ? colors.text : "text-slate-400"
          }`}>
            {submitted ? correctType : (selectedType ?? "Nebensatz?")}
          </span>
          <span className="text-xs text-slate-700 font-medium text-center">{nebensatz}</span>
        </div>

        {/* Inline result */}
        {submitted && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → ${correctType}`}
          </span>
        )}
      </div>

      {/* Nebensatztyp option chips */}
      <div style={{ minHeight: 28 }} className="flex items-center gap-1.5 flex-wrap px-1 ml-6 pb-0.5">
        {options.map((opt, i) => {
          const c = TYPE_COLORS[opt] ?? NEUTRAL;
          let cls = "px-2.5 rounded-full border text-[11px] font-bold transition-all select-none ";
          if (submitted) {
            if (i === correct) {
              cls += `${c.bg} ${c.border} ${c.text}`;
            } else if (i === selectedIdx && !isCorrect) {
              cls += "bg-red-50 border-red-300 text-red-400 line-through opacity-60";
            } else {
              cls += "bg-slate-50 border-slate-200 text-slate-300";
            }
          } else {
            cls += i === selectedIdx
              ? `${c.bg} ${c.border} ${c.text} cursor-pointer ring-1 ${c.border}`
              : "bg-white border-slate-300 text-slate-600 hover:bg-slate-50 cursor-pointer";
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
