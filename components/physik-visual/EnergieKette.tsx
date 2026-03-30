'use client';

import { useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  stages: string[];
  correctOrder: string[];
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function EnergieKette({
  title,
  stages,
  correctOrder,
  userAnswer,
  submitted,
  onAnswer,
}: Props) {
  const [selected, setSelected] = useState<string[]>([]);
  const [shuffled] = useState(() => [...stages].sort(() => Math.random() - 0.5));
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && userAnswer) {
      initialized.current = true;
      setSelected(userAnswer.split(",").filter(Boolean));
    }
  }, [userAnswer]);

  const handleTap = (stage: string) => {
    if (submitted) return;
    let next: string[];
    if (selected.includes(stage)) next = selected.filter((s) => s !== stage);
    else next = [...selected, stage];
    setSelected(next);
    onAnswer(next.join(","));
  };

  const isCorrect = selected.length === correctOrder.length && selected.join(",") === correctOrder.join(",");

  return (
    <div className="px-1 py-1.5">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        <span className="text-sm font-bold text-slate-800">{title}</span>
      </div>

      <div className="pl-6">
        <div className="flex items-center gap-1 mb-2 flex-wrap min-h-[28px]">
          {selected.length === 0 && (
            <span className="text-slate-300 text-xs italic">Tippe die Energie-Schritte in richtiger Reihenfolge an...</span>
          )}
          {selected.map((stage, i) => (
            <span key={`${stage}-${i}`} className="flex items-center gap-1">
              {i > 0 && <span className="text-slate-400 text-xs">→</span>}
              <span className={`px-2 py-1 rounded-full text-xs font-bold border ${
                submitted
                  ? isCorrect
                    ? "bg-emerald-100 border-emerald-300 text-emerald-700"
                    : "bg-red-100 border-red-300 text-red-600"
                  : "bg-amber-100 border-amber-300 text-amber-800"
              }`}>
                {stage}
              </span>
            </span>
          ))}
        </div>

        {!submitted && (
          <div className="flex gap-1.5 flex-wrap">
            {shuffled.map((stage) => {
              const active = selected.includes(stage);
              return (
                <button
                  key={stage}
                  className={`px-2.5 py-1 rounded-full border text-xs font-bold transition-all ${
                    active
                      ? "bg-amber-500 border-amber-500 text-white"
                      : "bg-white border-slate-300 text-slate-700 hover:border-slate-400"
                  }`}
                  onClick={() => handleTap(stage)}
                >
                  {stage}
                </button>
              );
            })}
          </div>
        )}

        {submitted && (
          <div className={`text-xs font-bold mt-2 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓ Richtig!" : `✗ Richtig: ${correctOrder.join(" → ")}`}
          </div>
        )}
      </div>
    </div>
  );
}
