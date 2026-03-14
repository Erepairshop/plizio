"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Egyenlőtlenség – Számegyenes",
    hint: "Old meg az egyenlőtlenséget és add meg a megoldást!",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    answer: "x =",
    solution: "Megoldás: x",
    greaterEq: "≥",
    lessEq: "≤",
    greater: ">",
    less: "<",
    question: "Mi az egyenlőtlenség megoldása?",
  },
  de: {
    title: "Ungleichung – Zahlenstrahl",
    hint: "Löse die Ungleichung und gib die Lösung an!",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    answer: "x =",
    solution: "Lösung: x",
    greaterEq: "≥",
    lessEq: "≤",
    greater: ">",
    less: "<",
    question: "Was ist die Lösung der Ungleichung?",
  },
  en: {
    title: "Inequality – Number Line",
    hint: "Solve the inequality and give the solution!",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    answer: "x =",
    solution: "Solution: x",
    greaterEq: "≥",
    lessEq: "≤",
    greater: ">",
    less: "<",
    question: "What is the solution to the inequality?",
  },
  ro: {
    title: "Inecuație – Dreapta numerică",
    hint: "Rezolvă inecuația și dă soluția!",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    answer: "x =",
    solution: "Soluție: x",
    greaterEq: "≥",
    lessEq: "≤",
    greater: ">",
    less: "<",
    question: "Care este soluția inecuației?",
  },
};

type IneqOp = ">=" | "<=" | ">" | "<";

interface SubQuestion {
  // Inequality: ax + b op c  →  x op answer
  lhs: string;  // e.g. "2x + 3"
  op: IneqOp;
  rhs: number;  // e.g. 9
  answer: number; // x value at the boundary
  direction: "right" | "left"; // solution direction on number line
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function InequalityLineSVG({ answer, op, direction }: { answer: number; op: IneqOp; direction: "right" | "left" }) {
  const W = 240, H = 80;
  const pad = 24;
  const usable = W - 2 * pad;

  // Show range from answer-4 to answer+4
  const lo = answer - 4;
  const hi = answer + 4;
  const range = hi - lo;
  const toX = (v: number) => pad + ((v - lo) / range) * usable;

  const dotX = toX(answer);
  const arrowEnd = direction === "right" ? W - pad + 10 : pad - 10;
  const filled = op === ">=" || op === "<=";

  const ticks = [];
  for (let i = lo; i <= hi; i++) {
    const x = toX(i);
    ticks.push(
      <g key={i}>
        <line x1={x} y1={35} x2={x} y2={45} stroke="#64748b" strokeWidth="1.5" />
        <text x={x} y={58} textAnchor="middle" fontSize="10" fill="#475569" fontWeight="600">{i}</text>
      </g>
    );
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
      {/* Number line */}
      <line x1={pad - 5} y1={40} x2={W - pad + 5} y2={40} stroke="#94a3b8" strokeWidth="2" />
      <polygon points={`${W - pad + 5},40 ${W - pad},37 ${W - pad},43`} fill="#94a3b8" />

      {ticks}

      {/* Solution ray */}
      <motion.line
        x1={dotX} y1={40} x2={arrowEnd} y2={40}
        stroke="#6366f1" strokeWidth="4" strokeLinecap="round"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
      />

      {/* Boundary point */}
      <motion.circle
        cx={dotX} cy={40} r={7}
        fill={filled ? "#6366f1" : "white"}
        stroke="#6366f1" strokeWidth="2.5"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}
      />

      {/* Op label */}
      <text x={dotX} y={22} textAnchor="middle" fontSize="11" fill="#4f46e5" fontWeight="bold">x{op}{answer}</text>
    </svg>
  );
}

export default function InequalityLine8({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaults: SubQuestion[] = [
    { lhs: "2x + 3", op: ">=", rhs: 9, answer: 3, direction: "right" },
    { lhs: "3x - 6", op: "<=", rhs: 9, answer: 5, direction: "left" },
    { lhs: "x + 4", op: ">", rhs: 7, answer: 3, direction: "right" },
  ];
  const subs = subQuestions || defaults;
  const sub = subs[0] || defaults[0];

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

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
      style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center text-white font-bold text-xl">≤</div>
          <div>
            <div className="font-extrabold text-sky-900 text-sm">{t.title}</div>
            <div className="text-xs text-sky-400 font-mono">{sub.lhs} {sub.op} {sub.rhs}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-sky-700 pb-2">{t.hint}</p>

        {/* Inequality */}
        <div className="flex justify-center mb-3">
          <div className="bg-sky-100 border border-sky-300 rounded-xl px-5 py-2 text-sky-800 font-bold text-lg">
            {sub.lhs} {sub.op} {sub.rhs}
          </div>
        </div>

        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-sky-100 p-3 w-full">
            <InequalityLineSVG answer={sub.answer} op={sub.op} direction={sub.direction} />
          </div>
        </div>

        <div className="flex justify-center mb-3">
          <div className="bg-sky-100 border border-sky-300 rounded-xl px-4 py-1.5 text-sky-800 font-bold text-sm">
            {t.solution} {sub.op} ?
          </div>
        </div>

        {!embedded ? (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="?"
              className="border-2 border-sky-200 rounded-xl px-3 py-2 text-center text-sky-900 font-bold text-lg w-28 focus:outline-none focus:border-sky-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-sky-500 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-sky-600 transition-colors"
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
              placeholder="?"
              className="border-2 border-sky-200 rounded-xl px-3 py-2 text-center text-sky-900 font-bold text-lg w-32 focus:outline-none focus:border-sky-500"
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
