'use client';

/**
 * SinneZuordnung — Match sense to organ
 * Compact paper-inline style: fits in ruled lines (28px)
 */

interface Props {
  sense: string;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const SENSE_COLORS: Record<number, { base: string; selected: string; correct: string }> = {
  0: {
    base: "border-blue-300 text-blue-700 hover:bg-blue-50",
    selected: "bg-blue-500 border-blue-500 text-white",
    correct: "bg-blue-500 border-blue-500 text-white",
  },
  1: {
    base: "border-pink-300 text-pink-700 hover:bg-pink-50",
    selected: "bg-pink-500 border-pink-500 text-white",
    correct: "bg-pink-500 border-pink-500 text-white",
  },
  2: {
    base: "border-purple-300 text-purple-700 hover:bg-purple-50",
    selected: "bg-purple-500 border-purple-500 text-white",
    correct: "bg-purple-500 border-purple-500 text-white",
  },
  3: {
    base: "border-orange-300 text-orange-700 hover:bg-orange-50",
    selected: "bg-orange-500 border-orange-500 text-white",
    correct: "bg-orange-500 border-orange-500 text-white",
  },
  4: {
    base: "border-red-300 text-red-700 hover:bg-red-50",
    selected: "bg-red-500 border-red-500 text-white",
    correct: "bg-red-500 border-red-500 text-white",
  },
};

export default function SinneZuordnung({ sense, options, correctIndex, userAnswer, submitted, onAnswer }: Props) {
  const correctAnswer = options[correctIndex];
  const isCorrect = userAnswer === correctAnswer;

  return (
    <div>
      <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="font-bold text-sm text-slate-800 mr-1">{sense}</span>
        <span className="text-slate-300 text-xs shrink-0">Organ:</span>
        <div className="flex gap-1 items-center flex-wrap">
          {options.map((option, idx) => {
            const s = SENSE_COLORS[idx] || SENSE_COLORS[0];
            let cls = "px-2 rounded border font-bold text-xs transition-all ";
            if (submitted) {
              if (option === correctAnswer) {
                cls += s.correct;
              } else if (option === userAnswer && !isCorrect) {
                cls += "bg-red-100 border-red-300 text-red-500 line-through opacity-70";
              } else {
                cls += "border-slate-200 text-slate-300 bg-white";
              }
            } else {
              cls += option === userAnswer ? s.selected : `bg-white ${s.base}`;
            }
            return (
              <button
                key={option}
                style={{ height: 22, lineHeight: "22px" }}
                className={cls}
                disabled={submitted}
                onClick={() => !submitted && onAnswer(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
        {submitted && userAnswer && (
          <span className={`text-xs font-bold shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → ${correctAnswer}`}
          </span>
        )}
      </div>
    </div>
  );
}
