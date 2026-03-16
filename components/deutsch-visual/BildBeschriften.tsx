'use client';

/**
 * BildBeschriften — show SVG icon, pick correct "Artikel + Nomen" phrase
 * Compact paper-inline style — image + 4 MCQ options on 2-3 ruled lines
 */

import { G1_ICONS } from '@/components/grade1-visual/G1Icons';

interface Props {
  imageKey: string;
  options: string[];
  correct: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function BildBeschriften({ imageKey, options, correct, userAnswer, submitted, onAnswer }: Props) {
  const IconComponent = G1_ICONS[imageKey];

  return (
    <div>
      {/* Row: small image + 4 option chips side by side */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-2 flex-wrap px-1 py-0.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>

        {/* Tiny icon */}
        {IconComponent && (
          <div className="shrink-0 rounded-lg border border-slate-200 bg-white flex items-center justify-center overflow-hidden" style={{ width: 36, height: 36 }}>
            <div style={{ width: 28, height: 28 }}><IconComponent /></div>
          </div>
        )}

        {/* Options as small chips */}
        <div className="flex flex-wrap gap-1.5 items-center">
          {options.map((opt, i) => {
            let cls = "px-2.5 rounded border font-semibold text-xs transition-all select-none ";
            if (submitted) {
              if (i === correct) {
                cls += "bg-emerald-50 border-emerald-400 text-emerald-700";
              } else if (opt === userAnswer && i !== correct) {
                cls += "bg-red-50 border-red-300 text-red-500 line-through opacity-70";
              } else {
                cls += "border-slate-200 text-slate-300 bg-white";
              }
            } else {
              cls += opt === userAnswer
                ? "bg-indigo-500 border-indigo-500 text-white"
                : "bg-white border-slate-300 text-slate-700 hover:bg-blue-50 hover:border-blue-300 active:scale-95 cursor-pointer";
            }
            return (
              <button
                key={i}
                style={{ height: 22, lineHeight: "22px" }}
                className={cls}
                disabled={submitted}
                onClick={() => !submitted && onAnswer(opt)}
              >
                {opt}
              </button>
            );
          })}

          {/* Inline result mark */}
          {submitted && userAnswer && (
            <span className={`text-xs font-bold shrink-0 ${userAnswer === options[correct] ? "text-emerald-500" : "text-red-500"}`}>
              {userAnswer === options[correct] ? "✓" : `✗ → ${options[correct]}`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
