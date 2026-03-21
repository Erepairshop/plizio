'use client';

/**
 * JahreszeitZuordnung — Assign description to season
 * Compact paper-inline style with 4 season buttons
 */

interface Props {
  description: string;
  correct: string;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const SEASONS = ["Frühling", "Sommer", "Herbst", "Winter"] as const;
const SEASON_EMOJIS = { Frühling: "🌸", Sommer: "☀️", Herbst: "🍂", Winter: "❄️" };
const SEASON_STYLES: Record<string, { base: string; selected: string; correct: string }> = {
  Frühling: {
    base: "border-green-300 text-green-700 hover:bg-green-50",
    selected: "bg-green-500 border-green-500 text-white",
    correct: "bg-green-500 border-green-500 text-white",
  },
  Sommer: {
    base: "border-yellow-300 text-yellow-700 hover:bg-yellow-50",
    selected: "bg-yellow-500 border-yellow-500 text-white",
    correct: "bg-yellow-500 border-yellow-500 text-white",
  },
  Herbst: {
    base: "border-orange-300 text-orange-700 hover:bg-orange-50",
    selected: "bg-orange-500 border-orange-500 text-white",
    correct: "bg-orange-500 border-orange-500 text-white",
  },
  Winter: {
    base: "border-blue-300 text-blue-700 hover:bg-blue-50",
    selected: "bg-blue-500 border-blue-500 text-white",
    correct: "bg-blue-500 border-blue-500 text-white",
  },
};

export default function JahreszeitZuordnung({ description, correct, userAnswer, submitted, onAnswer }: Props) {
  const isCorrect = userAnswer === correct;

  return (
    <div>
      <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="font-bold text-sm text-slate-800 mr-1">{description}</span>
        <span className="text-slate-300 text-xs shrink-0">Jahreszeit:</span>
        <div className="flex gap-1.5 items-center">
          {SEASONS.map((season) => {
            const s = SEASON_STYLES[season];
            let cls = "px-2 rounded border font-bold text-xs transition-all ";
            if (submitted) {
              if (season === correct) {
                cls += s.correct;
              } else if (season === userAnswer && !isCorrect) {
                cls += "bg-red-100 border-red-300 text-red-500 line-through opacity-70";
              } else {
                cls += "border-slate-200 text-slate-300 bg-white";
              }
            } else {
              cls += season === userAnswer ? s.selected : `bg-white ${s.base}`;
            }
            return (
              <button
                key={season}
                style={{ height: 22, lineHeight: "22px" }}
                className={cls}
                disabled={submitted}
                onClick={() => !submitted && onAnswer(season)}
              >
                {SEASON_EMOJIS[season]} {season}
              </button>
            );
          })}
        </div>
        {submitted && userAnswer && (
          <span className={`text-xs font-bold shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : `✗ → ${SEASON_EMOJIS[correct as keyof typeof SEASON_EMOJIS]} ${correct}`}
          </span>
        )}
      </div>
    </div>
  );
}
