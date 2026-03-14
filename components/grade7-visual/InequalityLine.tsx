"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Egyenlőtlenség – számegyenes",
    hint: "Oldd meg az egyenlőtlenséget, és add meg a kért egész számot!",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    smallest: "Legkisebb egész x =",
    largest: "Legnagyobb egész x =",
    answer: "Válasz:",
  },
  de: {
    title: "Ungleichung – Zahlenstrahl",
    hint: "Löse die Ungleichung und gib die gesuchte ganze Zahl an!",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    smallest: "Kleinste ganze Zahl x =",
    largest: "Größte ganze Zahl x =",
    answer: "Antwort:",
  },
  en: {
    title: "Inequality – Number Line",
    hint: "Solve the inequality and give the required integer!",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    smallest: "Smallest integer x =",
    largest: "Largest integer x =",
    answer: "Answer:",
  },
  ro: {
    title: "Inecuație – Dreapta numerelor",
    hint: "Rezolvă inecuația și dă numărul întreg cerut!",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    smallest: "Cel mai mic număr întreg x =",
    largest: "Cel mai mare număr întreg x =",
    answer: "Răspuns:",
  },
};

interface SubQuestion {
  expression: string; // e.g. "2x + 3 > 7"
  isGt: boolean;      // true = >, false = <
  answer: number | string;
  solution: number;   // the boundary value (not integer, or integer)
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function NumberLineSVG({
  answer,
  isGt,
  min,
  max,
}: {
  answer: number;
  isGt: boolean;
  min: number;
  max: number;
}) {
  const W = 260, H = 60;
  const pad = 24;
  const lineY = 32;
  const range = max - min;

  const toX = (n: number) => pad + ((n - min) / range) * (W - 2 * pad);
  const ansX = toX(answer);
  const ticks = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="260" height="60">
      {/* Axis */}
      <line x1={pad - 8} y1={lineY} x2={W - pad + 8} y2={lineY} stroke="#0D9488" strokeWidth="2" markerEnd="url(#arr)" />
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#0D9488" />
        </marker>
      </defs>

      {/* Ticks */}
      {ticks.map((n) => (
        <g key={n}>
          <line x1={toX(n)} y1={lineY - 5} x2={toX(n)} y2={lineY + 5} stroke="#0D9488" strokeWidth="1.5" />
          <text x={toX(n)} y={lineY + 18} textAnchor="middle" fontSize="11" fill="#0F766E" fontWeight={n === answer ? "bold" : "normal"}>
            {n}
          </text>
        </g>
      ))}

      {/* Solution arrow */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {isGt ? (
          <line
            x1={ansX}
            y1={lineY}
            x2={W - pad + 8}
            y2={lineY}
            stroke="#EC4899"
            strokeWidth="4"
            strokeLinecap="round"
            opacity={0.7}
          />
        ) : (
          <line
            x1={pad - 8}
            y1={lineY}
            x2={ansX}
            y2={lineY}
            stroke="#EC4899"
            strokeWidth="4"
            strokeLinecap="round"
            opacity={0.7}
          />
        )}
        {/* Open circle at boundary */}
        <circle cx={ansX} cy={lineY} r={6} fill="white" stroke="#EC4899" strokeWidth="2.5" />
        <text x={ansX} y={lineY - 12} textAnchor="middle" fontSize="12" fill="#EC4899" fontWeight="bold">
          {answer}
        </text>
      </motion.g>
    </svg>
  );
}

export default function InequalityLine({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaultSubs: SubQuestion[] = [
    { expression: "2x + 1 > 7", isGt: true, answer: 4, solution: 3.5 },
    { expression: "3x − 2 < 10", isGt: false, answer: 3, solution: 4 },
    { expression: "2x + 3 > 11", isGt: true, answer: 5, solution: 4 },
  ];
  const subs = subQuestions || defaultSubs;

  const [idx] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const sub = subs[idx] || subs[0];
  const ans = Number(sub.answer);
  const lineMin = ans - 3;
  const lineMax = ans + 4;

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
      style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #99f6e4 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold text-lg">
            &gt;
          </div>
          <div>
            <div className="font-extrabold text-teal-900 text-sm">{t.title}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-teal-700 pb-2">{t.hint}</p>

        {/* Expression display */}
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-teal-100 px-6 py-3 text-2xl font-black text-teal-800 font-mono">
            {sub.expression}
          </div>
        </div>

        {/* Number line */}
        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-teal-100 p-3">
            <NumberLineSVG answer={ans} isGt={sub.isGt} min={lineMin} max={lineMax} />
          </div>
        </div>

        {/* Question label */}
        <div className="text-center text-xs font-bold text-pink-600 mb-2">
          {sub.isGt ? t.smallest : t.largest}
        </div>

        {/* Input */}
        {!embedded && (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
              className="border-2 border-teal-300 rounded-xl px-3 py-2 text-center text-teal-900 font-bold text-lg w-32 focus:outline-none focus:border-teal-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-teal-600 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-teal-700 transition-colors"
            >
              {t.check}
            </button>
          </div>
        )}

        {embedded && (
          <div className="flex justify-center mb-2">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
              className="border-2 border-teal-300 rounded-xl px-3 py-2 text-center text-teal-900 font-bold text-lg w-36 focus:outline-none focus:border-teal-500"
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
