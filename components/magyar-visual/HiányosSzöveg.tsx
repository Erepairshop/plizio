'use client';

/**
 * HiányosSzöveg — fill in the blank with one of 3 options
 */

import { useState, useEffect } from 'react';

interface Props {
  sentence: string; // contains "___"
  options: string[];
  correct: number; // index of correct option
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  placeholder?: string;
  correctLabel?: string;
}

export default function HiányosSzöveg({
  sentence,
  options,
  correct,
  userAnswer,
  submitted,
  onAnswer,
  placeholder = "Válassz…",
  correctLabel = "Helyes:"
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [sentence]);

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
    onAnswer(String(idx));
  };

  const isCorrect = selected === correct;
  const blankText = selected !== null ? options[selected] : placeholder;

  return (
    <div>
      {/* Sentence with blank */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5">
        <span className="text-xs text-slate-700">{sentence.split("___")[0]}</span>
        <button
          style={{ height: 22, lineHeight: "22px" }}
          className={`px-2 rounded border font-semibold text-xs transition-all select-none ${
            submitted
              ? isCorrect
                ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                : "bg-red-50 border-red-300 text-red-600"
              : selected !== null
              ? "bg-indigo-100 border-indigo-300 text-indigo-700"
              : "bg-white border-slate-300 text-slate-700"
          }`}
          disabled
        >
          {blankText}
        </button>
        <span className="text-xs text-slate-700">{sentence.split("___")[1]}</span>
      </div>

      {/* Options */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        <span className="text-xs text-slate-400 shrink-0">Opciók:</span>
        {options.map((opt, i) => {
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
              ? "bg-blue-100 border-blue-300 text-blue-700 cursor-pointer"
              : "bg-white border-slate-300 text-slate-700 hover:bg-blue-50 active:scale-95 cursor-pointer";
          }
          return (
            <button
              key={`opt-${i}`}
              style={{ height: 22, lineHeight: "22px" }}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={submitted}
            >
              {opt}
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
              <span className="text-xs font-semibold text-slate-600">{options[correct]}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
