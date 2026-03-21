'use client';

/**
 * ToldalékVálasztó — select correct adjective or noun ending
 */

import { useState, useEffect } from 'react';

interface Props {
  root: string;
  endings: string[];
  correct: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  placeholder?: string;
  correctLabel?: string;
}

export default function ToldalékVálasztó({
  root,
  endings,
  correct,
  userAnswer,
  submitted,
  onAnswer,
  placeholder = "Válassz toldalékot…",
  correctLabel = "Helyes:"
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [root]);

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
    onAnswer(String(idx));
  };

  const isCorrect = selected === correct;
  const selectedEnding = selected !== null ? endings[selected] : placeholder;

  return (
    <div>
      {/* Root + selected ending */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 px-1 py-0.5">
        <span className="text-xs font-semibold text-slate-700">{root}</span>
        <button
          style={{ height: 22, lineHeight: "22px" }}
          className={`px-2 rounded border font-semibold text-xs transition-all select-none ${
            submitted
              ? isCorrect
                ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                : "bg-red-50 border-red-300 text-red-600"
              : selected !== null
              ? "bg-yellow-100 border-yellow-300 text-yellow-700"
              : "bg-white border-slate-300 text-slate-700"
          }`}
          disabled
        >
          {selectedEnding === placeholder ? "-" + selectedEnding.replace("-", "") : "-" + selectedEnding}
        </button>
      </div>

      {/* Ending options */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        {endings.map((ending, i) => {
          let cls = "px-2 rounded border font-semibold text-xs transition-all select-none ";
          if (submitted) {
            if (i === correct) {
              cls += "bg-emerald-50 border-emerald-300 text-emerald-700";
            } else if (i === selected && !isCorrect) {
              cls += "bg-red-100 border-red-300 text-red-600 opacity-70";
            } else {
              cls += "bg-white border-slate-200 text-slate-600";
            }
          } else {
            cls += i === selected
              ? "bg-yellow-100 border-yellow-300 text-yellow-700 cursor-pointer"
              : "bg-white border-slate-300 text-slate-700 hover:bg-yellow-50 active:scale-95 cursor-pointer";
          }
          return (
            <button
              key={`e-${i}`}
              style={{ height: 22, lineHeight: "22px" }}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={submitted}
            >
              -{ending}
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
              <span className="text-xs font-semibold text-slate-600">-{endings[correct]}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
