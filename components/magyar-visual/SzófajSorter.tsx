'use client';

/**
 * SzófajSorter — categorize words by part of speech (Főnév/Ige/Melléknév)
 */

import { useState, useEffect } from 'react';

type Category = 'F' | 'I' | 'M';

interface Props {
  word: string;
  correct: Category;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  labels?: { F: string; I: string; M: string };
  correctLabel?: string;
}

const defaultLabels = {
  F: "Főnév",
  I: "Ige",
  M: "Melléknév"
};

const categoryColors: Record<Category, string> = {
  F: "blue",
  I: "purple",
  M: "green"
};

const categoryBgSubmit: Record<Category, string> = {
  F: "bg-blue-100 border-blue-300 text-blue-700",
  I: "bg-purple-100 border-purple-300 text-purple-700",
  M: "bg-green-100 border-green-300 text-green-700"
};

export default function SzófajSorter({
  word,
  correct,
  userAnswer,
  submitted,
  onAnswer,
  labels = defaultLabels,
  correctLabel = "Helyes:"
}: Props) {
  const [selected, setSelected] = useState<Category | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [word]);

  const categories: Category[] = ['F', 'I', 'M'];
  const isCorrect = selected === correct;

  const handleSelect = (cat: Category) => {
    if (submitted) return;
    setSelected(cat);
    onAnswer(cat);
  };

  return (
    <div>
      {/* Word + buttons */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-2 px-1 py-0.5">
        <span className="text-xs font-semibold text-slate-600 shrink-0">{word}</span>
        <div className="flex gap-1">
          {categories.map((cat) => {
            let cls = "px-3 rounded border font-semibold text-xs transition-all select-none ";
            if (submitted) {
              if (cat === correct) {
                cls += "bg-emerald-100 border-emerald-400 text-emerald-700";
              } else if (cat === selected && !isCorrect) {
                cls += "bg-red-100 border-red-300 text-red-600 opacity-70";
              } else {
                cls += "bg-slate-50 border-slate-200 text-slate-600";
              }
            } else {
              cls += cat === selected
                ? `bg-${categoryColors[cat]}-100 border-${categoryColors[cat]}-400 text-${categoryColors[cat]}-700 cursor-pointer`
                : `bg-white border-slate-300 text-slate-700 hover:bg-${categoryColors[cat]}-50 active:scale-95 cursor-pointer`;
            }
            return (
              <button
                key={cat}
                style={{ height: 22, lineHeight: "22px" }}
                className={cls}
                onClick={() => handleSelect(cat)}
                disabled={submitted}
              >
                {labels[cat]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result */}
      {submitted && selected !== null && (
        <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-1 px-1">
          <span className={`text-xs font-bold shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : "✗"}
          </span>
          <span className="text-xs text-slate-400">{correctLabel}</span>
          <span className="text-xs font-semibold text-slate-600">{labels[correct]}</span>
        </div>
      )}
    </div>
  );
}
