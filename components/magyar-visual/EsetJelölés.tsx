'use client';

/**
 * EsetJelölés — identify grammatical case
 */

import { useState, useEffect } from 'react';

type Case = 'A' | 'B' | 'D' | 'G';

interface Props {
  sentence: string;
  highlight: string; // the highlighted word
  correct: Case;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  labels?: { A: string; B: string; D: string; G: string };
  correctLabel?: string;
}

const defaultLabels = {
  A: "Alany (N.)",
  B: "Birtokos (G.)",
  D: "Részeshatározó (D.)",
  G: "Helyhatározó (L.)"
};

const caseColors: Record<Case, string> = {
  A: "blue",
  B: "purple",
  D: "green",
  G: "orange"
};

export default function EsetJelölés({
  sentence,
  highlight,
  correct,
  userAnswer,
  submitted,
  onAnswer,
  labels = defaultLabels,
  correctLabel = "Helyes:"
}: Props) {
  const [selected, setSelected] = useState<Case | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [highlight]);

  const cases: Case[] = ['A', 'B', 'D', 'G'];
  const isCorrect = selected === correct;

  const handleSelect = (c: Case) => {
    if (submitted) return;
    setSelected(c);
    onAnswer(c);
  };

  const parts = sentence.split(`_${highlight}_`);

  return (
    <div>
      {/* Sentence with highlight */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5">
        <span className="text-xs text-slate-700">{parts[0]}</span>
        <button
          style={{ height: 22, lineHeight: "22px" }}
          className={`px-2 rounded border font-semibold text-xs transition-all select-none ${
            submitted
              ? isCorrect
                ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                : "bg-red-50 border-red-300 text-red-600"
              : selected
              ? `bg-${caseColors[selected]}-100 border-${caseColors[selected]}-300 text-${caseColors[selected]}-700`
              : "bg-yellow-100 border-yellow-300 text-yellow-700"
          }`}
          disabled
        >
          {highlight}
        </button>
        <span className="text-xs text-slate-700">{parts[1]}</span>
      </div>

      {/* Case buttons */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        {cases.map((c) => {
          let cls = "px-2 rounded border font-semibold text-xs transition-all select-none ";
          if (submitted) {
            if (c === correct) {
              cls += "bg-emerald-100 border-emerald-400 text-emerald-700";
            } else if (c === selected && !isCorrect) {
              cls += "bg-red-100 border-red-300 text-red-600 opacity-70";
            } else {
              cls += "bg-slate-50 border-slate-200 text-slate-600";
            }
          } else {
            cls += c === selected
              ? `bg-${caseColors[c]}-100 border-${caseColors[c]}-400 text-${caseColors[c]}-700 cursor-pointer`
              : `bg-white border-slate-300 text-slate-700 hover:bg-${caseColors[c]}-50 active:scale-95 cursor-pointer`;
          }
          return (
            <button
              key={c}
              style={{ height: 22, lineHeight: "22px" }}
              className={cls}
              onClick={() => handleSelect(c)}
              disabled={submitted}
              title={labels[c]}
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Result */}
      {submitted && selected !== null && (
        <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-1 px-1">
          <span className={`text-xs font-bold shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : "✗"}
          </span>
          {!isCorrect && (
            <>
              <span className="text-xs text-slate-400">{correctLabel}</span>
              <span className="text-xs font-semibold text-slate-600">{labels[correct]}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
