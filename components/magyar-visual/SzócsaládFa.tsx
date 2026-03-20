'use client';

/**
 * SzócsaládFa — select words related to the root word
 */

import { useState, useEffect } from 'react';

interface Props {
  root: string;
  words: string[];
  correctIndices: number[];
  userAnswer: string; // CSV: "0,2,4"
  submitted: boolean;
  onAnswer: (a: string) => void;
  label?: string;
  correctLabel?: string;
}

export default function SzócsaládFa({
  root,
  words,
  correctIndices,
  userAnswer,
  submitted,
  onAnswer,
  label = "Szócsalád",
  correctLabel = "Helyes szavak:"
}: Props) {
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    setSelected([]);
  }, [root]);

  const handleToggle = (idx: number) => {
    if (submitted) return;
    let newSelected = [...selected];
    if (newSelected.includes(idx)) {
      newSelected = newSelected.filter(i => i !== idx);
    } else {
      newSelected = [...newSelected, idx];
    }
    setSelected(newSelected);
    onAnswer(newSelected.sort().join(","));
  };

  const isCorrect =
    selected.length === correctIndices.length &&
    selected.every(i => correctIndices.includes(i));

  return (
    <div>
      {/* Root word */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1 py-0.5">
        <span className="text-xs font-bold text-slate-400">{label}:</span>
        <span className="px-3 rounded bg-slate-900 text-white font-bold text-sm">{root}</span>
      </div>

      {/* Words - multi-select */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        {words.map((word, i) => {
          const isSelected = selected.includes(i);
          const isCorrectWord = correctIndices.includes(i);
          let cls = "px-2 rounded border font-semibold text-xs transition-all select-none ";

          if (submitted) {
            if (isCorrectWord) {
              cls += "bg-emerald-50 border-emerald-300 text-emerald-700";
            } else if (isSelected && !isCorrectWord) {
              cls += "bg-red-100 border-red-300 text-red-600 opacity-70";
            } else {
              cls += "bg-white border-slate-200 text-slate-600";
            }
          } else {
            cls += isSelected
              ? "bg-purple-100 border-purple-300 text-purple-700 cursor-pointer"
              : "bg-white border-slate-300 text-slate-700 hover:bg-purple-50 active:scale-95 cursor-pointer";
          }

          return (
            <button
              key={`w-${i}`}
              style={{ height: 22, lineHeight: "22px" }}
              className={cls}
              onClick={() => handleToggle(i)}
              disabled={submitted}
            >
              {word}
            </button>
          );
        })}
      </div>

      {/* Result */}
      {submitted && (
        <div style={{ minHeight: 28, lineHeight: "28px" }} className="px-1">
          <span className={`text-xs font-bold ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : "✗"}
          </span>
          {!isCorrect && (
            <div style={{ lineHeight: "24px" }} className="text-xs text-slate-400 mt-1">
              {correctLabel}
              <span className="font-semibold text-slate-600 ml-1">
                {correctIndices.map(i => words[i]).join(", ")}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
