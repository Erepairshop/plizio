"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Valószínűségi fa",
    hint: "A fa alapján számítsd ki a valószínűséget!",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    answer: "Válasz (%):",
    both: "Mindkettő (%):",
    neither: "Egyik sem (%):",
    atLeast: "Legalább egy (%):",
    event: "Esemény",
    prob: "P = ",
  },
  de: {
    title: "Baumdiagramm",
    hint: "Berechne die Wahrscheinlichkeit anhand des Baumes!",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    answer: "Antwort (%):",
    both: "Beide (%):",
    neither: "Keines (%):",
    atLeast: "Mindestens eines (%):",
    event: "Ereignis",
    prob: "P = ",
  },
  en: {
    title: "Probability Tree",
    hint: "Use the tree diagram to calculate the probability!",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    answer: "Answer (%):",
    both: "Both (%):",
    neither: "Neither (%):",
    atLeast: "At least one (%):",
    event: "Event",
    prob: "P = ",
  },
  ro: {
    title: "Diagramă arbore",
    hint: "Calculează probabilitatea folosind arborele!",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    answer: "Răspuns (%):",
    both: "Ambele (%):",
    neither: "Niciunul (%):",
    atLeast: "Cel puțin unul (%):",
    event: "Eveniment",
    prob: "P = ",
  },
};

type QuestionType = "both" | "neither" | "atLeastOne" | "complementary";

interface SubQuestion {
  p1: number; // P(A) in %
  p2: number; // P(B) in %
  questionType: QuestionType;
  answer: number;
  label1: string;
  label2: string;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function TreeSVG({ p1, p2, label1, label2 }: { p1: number; p2: number; label1: string; label2: string }) {
  const W = 240, H = 160;
  // Root → A branches → each branches into B/notB
  const rootX = 30, rootY = H / 2;
  const midX = 100;
  const rightX = 200;

  const aY = H * 0.28, notAY = H * 0.72;
  const abY = H * 0.12, aNotBY = H * 0.44;
  const notAbY = H * 0.56, notANotBY = H * 0.88;

  const p1d = p1 / 100, q1 = 1 - p1d;
  const p2d = p2 / 100, q2 = 1 - p2d;

  const pAB = Math.round(p1d * p2d * 100);
  const pAnB = Math.round(p1d * q2 * 100);
  const pnAB = Math.round(q1 * p2d * 100);
  const pnAnB = Math.round(q1 * q2 * 100);

  const nodeR = 14;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
      {/* Lines from root */}
      <line x1={rootX + nodeR} y1={rootY} x2={midX - nodeR} y2={aY} stroke="#6366f1" strokeWidth="1.5" />
      <line x1={rootX + nodeR} y1={rootY} x2={midX - nodeR} y2={notAY} stroke="#94a3b8" strokeWidth="1.5" />

      {/* Lines from A */}
      <line x1={midX + nodeR} y1={aY} x2={rightX - nodeR} y2={abY} stroke="#10b981" strokeWidth="1.5" />
      <line x1={midX + nodeR} y1={aY} x2={rightX - nodeR} y2={aNotBY} stroke="#94a3b8" strokeWidth="1.5" />

      {/* Lines from notA */}
      <line x1={midX + nodeR} y1={notAY} x2={rightX - nodeR} y2={notAbY} stroke="#10b981" strokeWidth="1.5" />
      <line x1={midX + nodeR} y1={notAY} x2={rightX - nodeR} y2={notANotBY} stroke="#94a3b8" strokeWidth="1.5" />

      {/* Root node */}
      <circle cx={rootX} cy={rootY} r={nodeR} fill="#6366f1" opacity={0.9} />
      <text x={rootX} y={rootY + 4} textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">S</text>

      {/* A node */}
      <circle cx={midX} cy={aY} r={nodeR} fill="#6366f1" opacity={0.8} />
      <text x={midX} y={aY + 4} textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">{label1}</text>
      {/* notA node */}
      <circle cx={midX} cy={notAY} r={nodeR} fill="#94a3b8" opacity={0.7} />
      <text x={midX} y={notAY + 4} textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">¬{label1}</text>

      {/* Probability labels on branches */}
      <text x={(rootX + midX) / 2 - 8} y={aY - 4} fontSize="8" fill="#6366f1" fontWeight="bold">{p1}%</text>
      <text x={(rootX + midX) / 2 - 8} y={notAY + 12} fontSize="8" fill="#94a3b8" fontWeight="bold">{100 - p1}%</text>

      {/* B leaves */}
      <circle cx={rightX} cy={abY} r={nodeR} fill="#10b981" opacity={0.8} />
      <text x={rightX} y={abY + 4} textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">{label2}</text>
      <circle cx={rightX} cy={aNotBY} r={nodeR} fill="#94a3b8" opacity={0.6} />
      <text x={rightX} y={aNotBY + 4} textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">¬{label2}</text>
      <circle cx={rightX} cy={notAbY} r={nodeR} fill="#10b981" opacity={0.8} />
      <text x={rightX} y={notAbY + 4} textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">{label2}</text>
      <circle cx={rightX} cy={notANotBY} r={nodeR} fill="#94a3b8" opacity={0.6} />
      <text x={rightX} y={notANotBY + 4} textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">¬{label2}</text>

      {/* B branch probs */}
      <text x={(midX + rightX) / 2 - 5} y={abY - 4} fontSize="7" fill="#10b981" fontWeight="bold">{p2}%</text>
      <text x={(midX + rightX) / 2 - 5} y={aNotBY + 12} fontSize="7" fill="#94a3b8" fontWeight="bold">{100 - p2}%</text>
      <text x={(midX + rightX) / 2 + 10} y={notAbY - 4} fontSize="7" fill="#10b981" fontWeight="bold">{p2}%</text>
      <text x={(midX + rightX) / 2 + 10} y={notANotBY + 12} fontSize="7" fill="#94a3b8" fontWeight="bold">{100 - p2}%</text>

      {/* Outcome labels */}
      <text x={W - 4} y={abY + 4} fontSize="7" fill="#059669" fontWeight="bold">{pAB}%</text>
      <text x={W - 4} y={aNotBY + 4} fontSize="7" fill="#64748b">{pAnB}%</text>
      <text x={W - 4} y={notAbY + 4} fontSize="7" fill="#64748b">{pnAB}%</text>
      <text x={W - 4} y={notANotBY + 4} fontSize="7" fill="#64748b">{pnAnB}%</text>
    </svg>
  );
}

export default function ProbabilityTree({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaults: SubQuestion[] = [
    { p1: 50, p2: 50, questionType: "both", answer: 25, label1: "A", label2: "B" },
    { p1: 60, p2: 40, questionType: "atLeastOne", answer: 76, label1: "A", label2: "B" },
    { p1: 30, p2: 70, questionType: "neither", answer: 21, label1: "A", label2: "B" },
  ];
  const subs = subQuestions || defaults;
  const sub = subs[0] || defaults[0];

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const qLabel =
    sub.questionType === "both" ? t.both :
    sub.questionType === "neither" ? t.neither :
    sub.questionType === "atLeastOne" ? t.atLeast : t.answer;

  const handleSubmit = () => {
    if (embedded) return;
    const correct = String(input).trim() === String(sub.answer).trim();
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer?.(correct);
  };

  const handleChange = (val: string) => {
    setInput(val);
    onValueChange?.(val);
  };

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-xl"
      style={{ background: "linear-gradient(135deg, #fefce8 0%, #fef9c3 50%, #fef3c7 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold text-xl">🌳</div>
          <div>
            <div className="font-extrabold text-amber-900 text-sm">{t.title}</div>
            <div className="text-xs text-amber-500 font-mono">P(A)={sub.p1}% · P(B)={sub.p2}%</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-amber-700 pb-2">{t.hint}</p>

        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-amber-100 p-2 overflow-x-auto">
            <TreeSVG p1={sub.p1} p2={sub.p2} label1={sub.label1} label2={sub.label2} />
          </div>
        </div>

        <div className="flex justify-center mb-3">
          <div className="bg-amber-100 border border-amber-300 rounded-xl px-4 py-1.5 text-amber-800 font-bold text-sm">
            {qLabel}
          </div>
        </div>

        {!embedded ? (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
              className="border-2 border-amber-200 rounded-xl px-3 py-2 text-center text-amber-900 font-bold text-lg w-28 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-amber-500 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-amber-600 transition-colors"
            >
              {t.check}
            </button>
          </div>
        ) : (
          <div className="flex justify-center mb-2">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
              className="border-2 border-amber-200 rounded-xl px-3 py-2 text-center text-amber-900 font-bold text-lg w-32 focus:outline-none focus:border-amber-500"
            />
          </div>
        )}

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-center font-bold text-sm py-1 rounded-xl ${isCorrect ? "text-green-700 bg-green-100" : "text-red-600 bg-red-100"}`}
            >
              {isCorrect ? t.correct : `${t.wrong} (${sub.answer})`}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
