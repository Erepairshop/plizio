'use client';

/**
 * TörténetRendezés — arrange sentences in chronological order
 */

import { useState, useEffect } from 'react';

interface Props {
  shuffled: string[];
  answer: string; // "0 1 2" or sentence order
  userAnswer: string;
  submitted: boolean;
  onAnswer: (a: string) => void;
  placeholder?: string;
  correctLabel?: string;
}

export default function TörténetRendezés({
  shuffled,
  answer,
  userAnswer,
  submitted,
  onAnswer,
  placeholder = "Építsd fel a történetet…",
  correctLabel = "Helyes sorrend:"
}: Props) {
  const [built, setBuilt] = useState<string[]>([]);
  const [pool, setPool] = useState<string[]>(shuffled);

  useEffect(() => {
    setBuilt([]);
    setPool(shuffled);
  }, [shuffled.join("")]);

  const addSentence = (idx: number) => {
    if (submitted) return;
    const sent = pool[idx];
    const newBuilt = [...built, sent];
    const newPool = pool.filter((_, i) => i !== idx);
    setBuilt(newBuilt);
    setPool(newPool);
    onAnswer(newBuilt.join(" | "));
  };

  const removeSentence = (idx: number) => {
    if (submitted) return;
    const sent = built[idx];
    const newBuilt = built.filter((_, i) => i !== idx);
    const newPool = [...pool, sent];
    setBuilt(newBuilt);
    setPool(newPool);
    onAnswer(newBuilt.join(" | "));
  };

  const isCorrect = built.join(" | ") === answer;

  return (
    <div>
      {/* Pool of sentences */}
      <div className="px-1 py-0.5 mb-2">
        <span className="text-xs text-slate-400 block mb-1">Mondatok:</span>
        <div className="flex flex-col gap-1">
          {pool.map((sent, i) => (
            <button
              key={`p-${i}`}
              className="px-2 py-1 rounded border border-slate-300 bg-white text-slate-700 font-semibold text-xs hover:bg-blue-50 hover:border-blue-300 active:scale-95 transition-all select-none text-left"
              onClick={() => addSentence(i)}
              disabled={submitted}
            >
              {sent}
            </button>
          ))}
        </div>
      </div>

      {/* Built story */}
      <div className="px-1 py-0.5 border-b border-dashed border-slate-200">
        <span className="text-xs text-slate-400 block mb-1">Történet:</span>
        {built.length === 0 ? (
          <span className="text-xs italic text-slate-300">{placeholder}</span>
        ) : (
          <div className="flex flex-col gap-1">
            {built.map((sent, i) => {
              let cls = "px-2 py-1 rounded border font-semibold text-xs transition-all select-none text-left ";
              if (submitted) {
                cls += isCorrect
                  ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                  : "bg-red-50 border-red-300 text-red-600";
              } else {
                cls += "bg-indigo-50 border-indigo-300 text-indigo-700 hover:bg-white active:scale-95 cursor-pointer";
              }
              return (
                <div key={`b-${i}`} className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 w-5 text-right">{i + 1}.</span>
                  <button className={cls} onClick={() => removeSentence(i)} disabled={submitted}>
                    {sent}
                  </button>
                </div>
              );
            })}
            {submitted && built.length > 0 && (
              <span className={`text-xs font-bold ml-7 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
                {isCorrect ? "✓" : "✗"}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Wrong answer correction */}
      {submitted && !isCorrect && built.length > 0 && (
        <div className="px-1 py-1 text-xs">
          <span className="text-slate-400">{correctLabel}</span>
          <div className="flex flex-col gap-0.5 mt-1">
            {answer.split(" | ").map((sent, i) => (
              <div key={`c-${i}`} className="flex items-center gap-2">
                <span className="text-slate-400 w-5 text-right">{i + 1}.</span>
                <span className="font-semibold text-slate-600 text-xs">{sent}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
