'use client';

/**
 * ZellDiagram — Identify cell organelle by emoji + function hint
 * Unique biology component: cell biology MCQ (K7+)
 */

interface Props {
  organelleEmoji: string;  // e.g. "🔵"
  organelleHint: string;   // e.g. "Enthält die DNA, steuert alle Zellfunktionen"
  cellType: "tier" | "pflanze" | "beide";  // which cell type contains this
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
const CELL_TYPE_LABEL = {
  tier: "🐾 Tierzelle",
  pflanze: "🌿 Pflanzenzelle",
  beide: "🐾🌿 Tier- & Pflanzenzelle",
};

export default function ZellDiagram({ organelleEmoji, organelleHint, cellType, options, correctIndex, userAnswer, submitted, onAnswer }: Props) {
  const correctAnswer = options[correctIndex];
  const isCorrect = userAnswer === correctAnswer;

  return (
    <div className="px-1 py-1.5">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-sm font-bold text-slate-800">Welches Zellorganell ist das?</span>
      </div>

      {/* Organelle hint */}
      <div className="flex items-center gap-2 mb-1.5 pl-6">
        <div className="w-10 h-10 rounded-full bg-purple-50 border-2 border-purple-100 flex items-center justify-center text-xl shrink-0">
          {organelleEmoji}
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-0.5">{CELL_TYPE_LABEL[cellType]}</div>
          <div className="text-xs text-slate-500 italic max-w-[200px]">{organelleHint}</div>
        </div>
      </div>

      {/* MCQ options */}
      <div className="flex gap-1.5 flex-wrap pl-6">
        {options.map((opt, idx) => {
          const color = COLORS[idx % COLORS.length];
          let cls = "px-2.5 py-0.5 rounded border font-bold text-xs transition-all ";
          let style: React.CSSProperties = {};
          if (submitted) {
            if (opt === correctAnswer) { cls += "text-white"; style = { backgroundColor: color, borderColor: color }; }
            else if (opt === userAnswer && !isCorrect) cls += "bg-red-100 border-red-300 text-red-500 line-through opacity-70";
            else cls += "border-slate-200 text-slate-300 bg-white";
          } else {
            if (opt === userAnswer) { cls += "text-white"; style = { backgroundColor: color, borderColor: color }; }
            else cls += "bg-white border-slate-300 text-slate-600 hover:border-slate-400";
          }
          return (
            <button key={opt} className={cls} style={style} disabled={submitted} onClick={() => !submitted && onAnswer(opt)}>
              {opt}
            </button>
          );
        })}
      </div>

      {submitted && userAnswer && (
        <div className={`text-xs font-bold mt-1 pl-6 ${isCorrect ? 'text-emerald-500' : 'text-red-500'}`}>
          {isCorrect ? '✓ Richtig!' : `✗ Richtig: ${correctAnswer}`}
        </div>
      )}
    </div>
  );
}
