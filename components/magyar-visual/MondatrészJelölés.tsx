'use client';

/**
 * MondatrészJelölés — mark sentence parts (Alany/Állítmány/Tárgy)
 */

import { useState, useEffect } from 'react';

type Role = 'A' | 'Á' | 'T';

interface Props {
  words: string[];
  roles: Role[]; // correct role for each word
  userAnswer: string; // CSV: "A,Á,T,A" etc.
  submitted: boolean;
  onAnswer: (a: string) => void;
  labels?: { A: string; Á: string; T: string };
  correctLabel?: string;
}

const defaultLabels = {
  A: "Alany",
  Á: "Állítmány",
  T: "Tárgy"
};

const roleColors: Record<Role, string> = {
  A: "blue",
  Á: "purple",
  T: "green"
};

export default function MondatrészJelölés({
  words,
  roles,
  userAnswer,
  submitted,
  onAnswer,
  labels = defaultLabels,
  correctLabel = "Helyes:"
}: Props) {
  const [selected, setSelected] = useState<(Role | null)[]>([]);

  useEffect(() => {
    setSelected(new Array(words.length).fill(null));
  }, [words.length]);

  const handleToggle = (idx: number, role: Role) => {
    if (submitted) return;
    const newSelected = [...selected];
    newSelected[idx] = newSelected[idx] === role ? null : role;
    setSelected(newSelected);
    onAnswer(newSelected.map(r => r || "-").join(","));
  };

  const isCorrect = selected.every((s, i) => s === roles[i]);

  return (
    <div>
      {/* Word buttons with role selection */}
      <div style={{ minHeight: 28, lineHeight: "28px" }} className="flex items-center gap-1 flex-wrap px-1 py-0.5">
        {words.map((word, i) => {
          const wordRole = selected[i];
          const correctRole = roles[i];
          let wordCls = "px-2 rounded border font-semibold text-xs transition-all select-none ";

          if (submitted) {
            if (wordRole === correctRole) {
              wordCls += "bg-emerald-50 border-emerald-300 text-emerald-700";
            } else if (wordRole && wordRole !== correctRole) {
              wordCls += "bg-red-50 border-red-300 text-red-600";
            } else {
              wordCls += "bg-white border-slate-200 text-slate-600";
            }
          } else {
            wordCls += wordRole
              ? `bg-${roleColors[wordRole]}-100 border-${roleColors[wordRole]}-300 text-${roleColors[wordRole]}-700`
              : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50";
          }

          return (
            <div key={`w-${i}`} className="flex items-center gap-0.5">
              <button
                style={{ height: 22, lineHeight: "22px" }}
                className={wordCls + " cursor-default"}
                disabled
              >
                {word}
              </button>
              {!submitted && (
                <div className="flex gap-0.5">
                  {(['A', 'Á', 'T'] as Role[]).map((role) => (
                    <button
                      key={`${i}-${role}`}
                      style={{ height: 20, width: 20 }}
                      className={`text-xs font-bold rounded transition-all ${
                        wordRole === role
                          ? `bg-${roleColors[role]}-500 text-white`
                          : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                      }`}
                      onClick={() => handleToggle(i, role)}
                      title={labels[role]}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Result */}
      {submitted && !isCorrect && (
        <div style={{ height: 28, lineHeight: "28px" }} className="flex items-center gap-1 px-1">
          <span className="text-xs text-red-500 font-bold shrink-0">✗</span>
          <span className="text-xs text-slate-400">{correctLabel}</span>
          <span className="text-xs font-semibold text-slate-600">
            {roles.map((r) => labels[r]).join(" ")}
          </span>
        </div>
      )}
      {submitted && isCorrect && (
        <span className="text-xs text-emerald-500 font-bold ml-1">✓</span>
      )}
    </div>
  );
}
