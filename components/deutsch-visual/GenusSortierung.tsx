'use client';

/**
 * GenusSortierung — tap der / die / das for the given noun
 * Used for artikel_k2 subtopic in Deutsch Test K2
 */

interface Props {
  word: string;
  correct: "der" | "die" | "das";
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const ARTIKEL: Array<{ label: "der" | "die" | "das"; color: string; selected: string; correct: string }> = [
  {
    label: "der",
    color: "bg-blue-100 border-blue-300 text-blue-800",
    selected: "bg-blue-500 border-blue-500 text-white",
    correct: "bg-blue-500 border-blue-500 text-white ring-2 ring-blue-300",
  },
  {
    label: "die",
    color: "bg-pink-100 border-pink-300 text-pink-800",
    selected: "bg-pink-500 border-pink-500 text-white",
    correct: "bg-pink-500 border-pink-500 text-white ring-2 ring-pink-300",
  },
  {
    label: "das",
    color: "bg-green-100 border-green-300 text-green-800",
    selected: "bg-green-500 border-green-500 text-white",
    correct: "bg-green-500 border-green-500 text-white ring-2 ring-green-300",
  },
];

export default function GenusSortierung({ word, correct, userAnswer, submitted, onAnswer }: Props) {
  const isCorrect = userAnswer === correct;

  return (
    <div className="flex flex-col items-center gap-4 py-2">
      {/* Noun display */}
      <div
        className="px-8 py-4 rounded-2xl border-2 border-slate-200 bg-white shadow-sm text-2xl font-black text-slate-800 tracking-wide"
        style={{ minWidth: 160, textAlign: "center" }}
      >
        {word}
      </div>

      {/* Instruction */}
      <p className="text-xs font-semibold text-slate-500 text-center">
        Welcher Artikel passt?
      </p>

      {/* Artikel buttons */}
      <div className="flex gap-3">
        {ARTIKEL.map(({ label, color, selected, correct: correctClass }) => {
          let cls = `px-6 py-3 rounded-xl border-2 font-extrabold text-lg transition-all `;
          if (!submitted && !userAnswer) {
            cls += color;
          } else if (submitted) {
            if (label === correct) {
              cls += correctClass;
            } else if (label === userAnswer && userAnswer !== correct) {
              cls += "bg-red-100 border-red-300 text-red-600 opacity-70";
            } else {
              cls += color + " opacity-40";
            }
          } else {
            // selected but not submitted
            cls += label === userAnswer ? selected : color;
          }
          return (
            <button
              key={label}
              className={cls}
              disabled={submitted}
              onClick={() => !submitted && onAnswer(label)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {submitted && userAnswer && (
        <div className={`text-sm font-bold ${isCorrect ? "text-green-600" : "text-red-500"}`}>
          {isCorrect ? "✓ Richtig!" : `✗ Richtig: ${correct} ${word}`}
        </div>
      )}
    </div>
  );
}
