'use client';
import { PhysicsForceSceneSvg, type ForceSceneId } from "./PhysicsTestDiagrams";
import { PHYSICS_VISUAL_UI, type PhysicsVisualLang } from "@/lib/physikVisualContent";

interface Props {
  scenario: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  sceneId: ForceSceneId;
  lang: PhysicsVisualLang;
}

const ARROW_STYLES: Record<string, string> = {
  "↑": "from-sky-500 to-blue-600",
  "↓": "from-violet-500 to-indigo-600",
  "←": "from-emerald-500 to-green-600",
  "→": "from-amber-500 to-orange-600",
};

export default function KraftRichtung({
  scenario,
  prompt,
  options,
  correctIndex,
  userAnswer,
  submitted,
  onAnswer,
  sceneId,
  lang,
}: Props) {
  const ui = PHYSICS_VISUAL_UI[lang];
  const correctAnswer = options[correctIndex];
  const isCorrect = userAnswer === correctAnswer;
  const svgDirection = ({
    "↑": "up",
    "↓": "down",
    "←": "left",
    "→": "right",
  } as const)[correctAnswer as "↑" | "↓" | "←" | "→"] ?? "right";

  return (
    <div className="px-1 py-1.5">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-sm font-bold text-slate-800">{prompt}</span>
      </div>

      <div className="pl-6">
        <div className="px-1 py-2 mb-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
            {ui.situation}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
            <div className="text-sm font-semibold text-slate-700">{scenario}</div>
            <PhysicsForceSceneSvg scene={sceneId} direction={svgDirection} className="w-full max-w-[150px] h-auto max-h-24 shrink-0" />
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {options.map((option) => {
            const selected = option === userAnswer;
            const correct = option === correctAnswer;
            let cls = "w-12 h-12 rounded-2xl border text-xl font-black transition-all ";
            if (submitted) {
              if (correct) cls += `text-white border-transparent bg-gradient-to-br ${ARROW_STYLES[option] ?? "from-slate-500 to-slate-700"}`;
              else if (selected && !isCorrect) cls += "bg-red-100 border-red-300 text-red-500";
              else cls += "bg-white border-slate-200 text-slate-300";
            } else {
              cls += selected
                ? `text-white border-transparent bg-gradient-to-br ${ARROW_STYLES[option] ?? "from-slate-500 to-slate-700"}`
                : "bg-white border-slate-300 text-slate-600 hover:border-slate-400";
            }
            return (
              <button
                key={option}
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
          <div className={`text-xs font-bold mt-2 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? `✓ ${ui.correct}` : `✗ ${ui.correctPrefix} ${correctAnswer}`}
          </div>
        )}
      </div>
    </div>
  );
}
