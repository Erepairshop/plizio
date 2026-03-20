'use client';

/**
 * KépFelismerés — icon + pick correct Hungarian word/phrase
 */

import { useState, useEffect } from 'react';

interface Props {
  imageKey: string; // icon key (lucide icon name or custom)
  options: string[];
  correct: number;
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  correctLabel?: string;
}

// Simple icon placeholder - in real usage integrate with lucide-react
const getIconDisplay = (key: string): string => {
  const iconMap: Record<string, string> = {
    cat: "🐱",
    dog: "🐶",
    bird: "🐦",
    fish: "🐠",
    tree: "🌳",
    house: "🏠",
    car: "🚗",
    apple: "🍎",
    book: "📚",
    sun: "☀️",
    moon: "🌙",
    flower: "🌸",
    heart: "❤️",
    star: "⭐",
    cloud: "☁️"
  };
  return iconMap[key] || "🔷";
};

export default function KépFelismerés({
  imageKey,
  options,
  correct,
  userAnswer,
  submitted,
  onAnswer,
  correctLabel = "Helyes:"
}: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [imageKey]);

  const handleSelect = (idx: number) => {
    if (submitted) return;
    setSelected(idx);
    onAnswer(String(idx));
  };

  const isCorrect = selected === correct;
  const iconDisplay = getIconDisplay(imageKey);

  return (
    <div>
      {/* Icon display */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-3 px-1 py-0.5">
        <span className="text-3xl">{iconDisplay}</span>
        <span className="text-xs text-slate-400">Ez mi?</span>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-1 px-1 py-0.5 border-b border-dashed border-slate-200">
        {options.map((opt, i) => {
          let cls = "px-3 py-1 rounded border font-semibold text-xs transition-all select-none text-left ";
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
              key={`o-${i}`}
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
