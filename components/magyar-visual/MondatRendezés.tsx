'use client';

/**
 * MondatRendezés — tap shuffled word chips into the correct sentence order
 * Hungarian version based on SatzOrdnen
 */

import { useState, useEffect } from 'react';

interface Props {
  shuffled: string[];
  answer: string;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  placeholder?: string;
  allUsedLabel?: string;
  correctLabel?: string;
}

export default function MondatRendezés({
  shuffled,
  answer,
  userAnswer,
  submitted,
  onAnswer,
  placeholder = "Kattints a szavakra…",
  allUsedLabel = "mindegyik szó felhasználva",
  correctLabel = "Helyes:"
}: Props) {
  const [built, setBuilt] = useState<string[]>([]);
  const [pool, setPool] = useState<string[]>(shuffled);

  useEffect(() => {
    setBuilt([]);
    setPool(shuffled);
  }, [shuffled.join("")]);

  const addWord = (idx: number) => {
    if (submitted) return;
    const word = pool[idx];
    const newBuilt = [...built, word];
    const newPool = pool.filter((_, i) => i !== idx);
    setBuilt(newBuilt);
    setPool(newPool);
    onAnswer(newBuilt.join(" "));
  };

  const removeWord = (idx: number) => {
    if (submitted) return;
    const word = built[idx];
    const newBuilt = built.filter((_, i) => i !== idx);
    const newPool = [...pool, word];
    setBuilt(newBuilt);
    setPool(newPool);
    onAnswer(newBuilt.join(" "));
  };

  const isCorrect = built.join(" ") === answer;

  return (
    <div>
      {/* Row 1: pool of word chips (tap to add) */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">↓</span>
        {pool.length === 0 && built.length > 0 && (
          <span className="text-slate-300 text-xs italic">{allUsedLabel}</span>
        )}
        {pool.map((w, i) => (
          <button
            key={`p-${i}`}
            style={{ height: 22, lineHeight: "22px" }}
            className="px-2 rounded border border-slate-300 bg-white text-slate-700 font-semibold text-xs hover:bg-blue-50 hover:border-blue-300 active:scale-95 transition-all select-none"
            onClick={() => addWord(i)}
            disabled={submitted}
          >
            {w}
          </button>
        ))}
      </div>

      {/* Row 2: built sentence (tap a chip to return it) */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">→</span>
        {built.length === 0 && (
          <span className="text-slate-300 text-xs italic">{placeholder}</span>
        )}
        {built.map((w, i) => {
          let cls = "px-2 rounded border font-semibold text-xs transition-all select-none ";
          if (submitted) {
            cls += isCorrect
              ? "bg-emerald-50 border-emerald-300 text-emerald-700"
              : "bg-red-50 border-red-300 text-red-600";
          } else {
            cls += "bg-indigo-50 border-indigo-300 text-indigo-700 hover:bg-white active:scale-95 cursor-pointer";
          }
          return (
            <button
              key={`b-${i}`}
              style={{ height: 22, lineHeight: "22px" }}
              className={cls}
              onClick={() => removeWord(i)}
              disabled={submitted}
            >
              {w}
            </button>
          );
        })}
        {/* Inline result */}
        {submitted && built.length > 0 && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : "✗"}
          </span>
        )}
      </div>

      {/* Wrong answer correction on one extra line */}
      {submitted && !isCorrect && built.length > 0 && (
        <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-1 px-1">
          <span className="w-5 shrink-0" />
          <span className="text-xs text-slate-400">{correctLabel}</span>
          <span className="text-xs font-semibold text-slate-600">{answer}</span>
        </div>
      )}
    </div>
  );
}
