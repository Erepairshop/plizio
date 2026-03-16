'use client';

/**
 * GeschichteSortieren — tap numbered sentence cards into correct story order
 * Compact paper-inline style: small sentence chips, 2 rows (pool + built)
 */

import { useState, useEffect } from 'react';

interface Props {
  sentences: string[];    // in CORRECT order (displayed shuffled)
  shuffledOrder: number[];  // index permutation for display (e.g. [2,0,3,1])
  userAnswer: string;     // comma-joined correct indices in chosen order, e.g. "2,0,3,1"
  submitted: boolean;
  onAnswer: (a: string) => void;
}

export default function GeschichteSortieren({ sentences, shuffledOrder, userAnswer, submitted, onAnswer }: Props) {
  // pool: indices still available (in shuffled display order)
  const [pool, setPool] = useState<number[]>(shuffledOrder);
  // built: indices chosen so far (should end up [0,1,2,...])
  const [built, setBuilt] = useState<number[]>([]);

  useEffect(() => {
    setPool(shuffledOrder);
    setBuilt([]);
  }, [shuffledOrder.join(",")]); // eslint-disable-line react-hooks/exhaustive-deps

  const addSentence = (poolPos: number) => {
    if (submitted) return;
    const idx = pool[poolPos];
    const newBuilt = [...built, idx];
    const newPool = pool.filter((_, i) => i !== poolPos);
    setBuilt(newBuilt);
    setPool(newPool);
    onAnswer(newBuilt.join(","));
  };

  const removeSentence = (builtPos: number) => {
    if (submitted) return;
    const idx = built[builtPos];
    const newBuilt = built.filter((_, i) => i !== builtPos);
    const newPool = [...pool, idx];
    setBuilt(newBuilt);
    setPool(newPool);
    onAnswer(newBuilt.join(","));
  };

  const correctAnswer = sentences.map((_, i) => i).join(",");
  const isCorrect = built.join(",") === correctAnswer;

  return (
    <div>
      {/* Instruction line */}
      <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-1 px-1">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0">↓</span>
        <span className="text-xs text-slate-400 italic">Bringe die Sätze in die richtige Reihenfolge:</span>
      </div>

      {/* Pool: shuffled sentence chips */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1.5 flex-wrap px-1 py-0.5">
        <span className="w-5 shrink-0" />
        {pool.map((sentIdx, poolPos) => (
          <button
            key={`p-${sentIdx}`}
            style={{ height: 22, lineHeight: "22px", maxWidth: 200 }}
            className="px-2 rounded border border-slate-300 bg-white text-slate-700 font-semibold text-xs hover:bg-blue-50 hover:border-blue-300 active:scale-95 transition-all select-none truncate"
            title={sentences[sentIdx]}
            onClick={() => addSentence(poolPos)}
            disabled={submitted}
          >
            <span className="text-slate-400 mr-1 font-normal">({String.fromCharCode(65 + shuffledOrder.indexOf(sentIdx))})</span>
            {sentences[sentIdx].length > 28 ? sentences[sentIdx].slice(0, 26) + "…" : sentences[sentIdx]}
          </button>
        ))}
      </div>

      {/* Built order */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1.5 flex-wrap px-1 py-0.5 border-b border-dashed border-slate-200">
        <span className="text-slate-300 text-xs w-5 text-right shrink-0 flex-shrink-0">→</span>
        {built.length === 0 && (
          <span className="text-slate-300 text-xs italic">Tippe auf die Sätze…</span>
        )}
        {built.map((sentIdx, builtPos) => {
          let cls = "px-2 rounded border font-semibold text-xs transition-all select-none ";
          if (submitted) {
            const expectedIdx = builtPos;
            const isThisCorrect = sentIdx === expectedIdx;
            cls += isThisCorrect
              ? "bg-emerald-50 border-emerald-300 text-emerald-700"
              : "bg-red-50 border-red-300 text-red-600";
          } else {
            cls += "bg-indigo-50 border-indigo-300 text-indigo-700 hover:bg-white active:scale-95 cursor-pointer";
          }
          return (
            <button
              key={`b-${sentIdx}`}
              style={{ height: 22, lineHeight: "22px", maxWidth: 180 }}
              className={`${cls} truncate`}
              title={sentences[sentIdx]}
              onClick={() => removeSentence(builtPos)}
              disabled={submitted}
            >
              <span className="opacity-50 mr-1">{builtPos + 1}.</span>
              {sentences[sentIdx].length > 22 ? sentences[sentIdx].slice(0, 20) + "…" : sentences[sentIdx]}
            </button>
          );
        })}
        {submitted && built.length > 0 && (
          <span className={`text-xs font-bold ml-1 shrink-0 ${isCorrect ? "text-emerald-500" : "text-red-500"}`}>
            {isCorrect ? "✓" : "✗"}
          </span>
        )}
      </div>

      {/* Correction after wrong submit */}
      {submitted && !isCorrect && built.length > 0 && (
        <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-start gap-1 px-1 pt-0.5">
          <span className="w-5 shrink-0" />
          <span className="text-xs text-slate-400">Richtig:</span>
          <span className="text-xs text-slate-600 font-semibold">{sentences.join(" → ")}</span>
        </div>
      )}
    </div>
  );
}
