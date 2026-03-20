'use client';

/**
 * HibaKeresés — find the word with spelling error in sentence
 */

import { useState, useEffect } from 'react';

interface Props {
  words: string[];
  errorIndex: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  placeholder?: string;
  correctLabel?: string;
}

export default function HibaKeresés({
  words,
  errorIndex,
  userAnswer,
  submitted,
  onAnswer,
  placeholder = "Kattints a hibás szóra…",
  correctLabel = "Helyes:"
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [words.join("")]);

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
    onAnswer(String(idx));
  };

  const isCorrect = selected === errorIndex;
  const selectedWord = selected !== null ? words[selected] : null;
  const correctWord = words[errorIndex];

  return (
    <div>
      {/* Word buttons in a row */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5">
        {words.map((word, i) => {
          let cls = "px-2 rounded border font-semibold text-xs transition-all select-none ";
          if (submitted) {
            if (i === errorIndex) {
              cls += "bg-red-50 border-red-300 text-red-600";
            } else if (i === selected) {
              cls += "bg-red-100 border-red-400 text-red-700 opacity-70";
            } else {
              cls += "bg-white border-slate-200 text-slate-600";
            }
          } else {
            cls += i === selected
              ? "bg-yellow-100 border-yellow-400 text-yellow-700 cursor-pointer"
              : "bg-white border-slate-300 text-slate-700 hover:bg-yellow-50 active:scale-95 cursor-pointer";
          }
          return (
            <button
              key={`w-${i}`}
              style={{ height: 22, lineHeight: "22px" }}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={submitted}
            >
              {word}
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
          <span className="text-xs text-slate-400">{correctLabel}</span>
          <span className="text-xs font-semibold text-slate-600">{correctWord}</span>
        </div>
      )}
    </div>
  );
}
