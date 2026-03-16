'use client';

/**
 * BildBeschriften — show an SVG icon, pick the correct "Artikel + Nomen" phrase
 * Used for artikel_k2 / nomen_k2 in Deutsch Test K2
 */

import { G1_ICONS } from '@/components/grade1-visual/G1Icons';

interface Props {
  imageKey: string;
  options: string[];       // 4 "Artikel Nomen" phrases
  correct: number;         // index of correct option
  userAnswer: string;      // "" or chosen phrase
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function BildBeschriften({ imageKey, options, correct, userAnswer, submitted, onAnswer }: Props) {
  const IconComponent = G1_ICONS[imageKey];

  return (
    <div className="flex flex-col items-center gap-3 py-1">
      {/* SVG image */}
      {IconComponent && (
        <div className="w-24 h-24 rounded-2xl bg-white shadow border border-slate-100 p-3 flex items-center justify-center">
          <IconComponent />
        </div>
      )}

      {/* Instruction */}
      <p className="text-xs font-semibold text-slate-500 text-center">
        Welche Wortgruppe passt zum Bild?
      </p>

      {/* MCQ options */}
      <div className="grid grid-cols-2 gap-2 w-full">
        {options.map((opt, i) => {
          let cls =
            "py-3 px-2 rounded-xl border-2 font-extrabold text-sm text-center transition-all ";
          if (submitted) {
            if (i === correct) {
              cls += "bg-green-500 border-green-500 text-white";
            } else if (opt === userAnswer && i !== correct) {
              cls += "bg-red-100 border-red-300 text-red-600 opacity-70";
            } else {
              cls += "bg-white border-slate-200 text-slate-500 opacity-50";
            }
          } else {
            if (opt === userAnswer) {
              cls += "bg-indigo-500 border-indigo-500 text-white";
            } else {
              cls += "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 active:scale-95";
            }
          }
          return (
            <button
              key={i}
              className={cls}
              disabled={submitted}
              onClick={() => !submitted && onAnswer(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {submitted && userAnswer && (
        <div className={`text-sm font-bold ${userAnswer === options[correct] ? "text-green-600" : "text-red-500"}`}>
          {userAnswer === options[correct] ? "✓ Richtig!" : `✗ Richtig: ${options[correct]}`}
        </div>
      )}
    </div>
  );
}
