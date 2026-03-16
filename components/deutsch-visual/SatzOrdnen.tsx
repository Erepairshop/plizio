'use client';

/**
 * SatzOrdnen — tap shuffled word chips into the correct sentence order
 * Used for wortstellung_k2 subtopic in Deutsch Test K2
 */

import { useState, useEffect } from 'react';

interface Props {
  shuffled: string[];           // shuffled word array (provided by generator)
  answer: string;               // correct sentence as single string (words joined by space)
  userAnswer: string;           // current answer stored in parent ("" or joined sentence)
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function SatzOrdnen({ shuffled, answer, userAnswer, submitted, onAnswer }: Props) {
  // built: words the user has tapped (in order)
  // pool: remaining words to tap
  const [built, setBuilt] = useState<string[]>([]);
  const [pool, setPool] = useState<string[]>(shuffled);

  // Reset when shuffled changes (new question)
  useEffect(() => {
    setBuilt([]);
    setPool(shuffled);
  }, [shuffled.join("")]);  // eslint-disable-line react-hooks/exhaustive-deps

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
    <div className="flex flex-col gap-3 py-1">
      {/* Instruction */}
      <p className="text-xs font-semibold text-slate-500 text-center">
        Bring die Wörter in die richtige Reihenfolge.
      </p>

      {/* Built sentence area */}
      <div
        className="min-h-[52px] rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-wrap gap-1.5 p-2 items-center"
      >
        {built.length === 0 && (
          <span className="text-slate-300 text-sm italic px-1">Tippe auf die Wörter…</span>
        )}
        {built.map((w, i) => {
          let cls =
            "px-3 py-1.5 rounded-lg border-2 font-bold text-sm cursor-pointer transition-all select-none ";
          if (submitted) {
            cls += isCorrect
              ? "bg-green-100 border-green-400 text-green-800"
              : "bg-red-100 border-red-300 text-red-700";
          } else {
            cls += "bg-indigo-100 border-indigo-300 text-indigo-800 hover:bg-indigo-200 active:scale-95";
          }
          return (
            <button key={`b-${i}`} className={cls} onClick={() => removeWord(i)} disabled={submitted}>
              {w}
            </button>
          );
        })}
      </div>

      {/* Word pool */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {pool.map((w, i) => (
          <button
            key={`p-${i}`}
            className="px-3 py-1.5 rounded-lg border-2 border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all select-none"
            onClick={() => addWord(i)}
            disabled={submitted}
          >
            {w}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {submitted && built.length > 0 && (
        <div className={`text-sm font-bold text-center ${isCorrect ? "text-green-600" : "text-red-500"}`}>
          {isCorrect ? "✓ Richtig!" : `✗ Richtig: ${answer}`}
        </div>
      )}
    </div>
  );
}
