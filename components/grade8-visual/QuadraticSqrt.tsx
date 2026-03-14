"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Négyzetgyök – Számegyenes",
    hint: "Hol van a gyök a számegyenesen? Melyik egészek közé esik?",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    answer: "√n =",
    between: "Melyik két egész szám közé esik √?",
    positive: "Pozitív megoldás:",
  },
  de: {
    title: "Quadratwurzel – Zahlenstrahl",
    hint: "Wo liegt die Wurzel auf dem Zahlenstrahl? Zwischen welchen ganzen Zahlen?",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    answer: "√n =",
    between: "Zwischen welchen ganzen Zahlen liegt √?",
    positive: "Positive Lösung:",
  },
  en: {
    title: "Square Root – Number Line",
    hint: "Where is the root on the number line? Between which integers does it fall?",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    answer: "√n =",
    between: "Between which integers does √ lie?",
    positive: "Positive solution:",
  },
  ro: {
    title: "Radical – Dreapta numerică",
    hint: "Unde este rădăcina pe dreapta numerică? Între ce întregi se află?",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    answer: "√n =",
    between: "Între ce numere întregi se află √?",
    positive: "Soluția pozitivă:",
  },
};

type Mode = "perfect" | "estimate";

interface SubQuestion {
  n: number;
  mode: Mode;
  answer: number;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function NumberLineSVG({ n, mode, answer }: SubQuestion) {
  const W = 240, H = 80;
  const lo = Math.floor(Math.sqrt(n));
  const hi = lo + 1;
  const sqrtN = Math.sqrt(n);

  // Show range lo-1 to hi+2
  const start = Math.max(0, lo - 1);
  const end = hi + 2;
  const range = end - start;
  const pad = 20;
  const usable = W - 2 * pad;

  const toX = (v: number) => pad + ((v - start) / range) * usable;

  const sqrtX = toX(sqrtN);
  const loX = toX(lo);
  const hiX = toX(hi);

  const ticks = [];
  for (let i = start; i <= end; i++) {
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
      <polygon points={`${W - pad + 5},${40} ${W - pad},${37} ${W - pad},${43}`} fill="#94a3b8" />

      {ticks}

      {/* Highlight zone between lo and hi */}
      <rect x={loX} y={28} width={hiX - loX} height={24} rx={3} fill="#818cf8" opacity={0.2} />
      <line x1={loX} y1={26} x2={loX} y2={54} stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3,2" />
      <line x1={hiX} y1={26} x2={hiX} y2={54} stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3,2" />

      {/* Root position */}
      {mode === "perfect" ? (
        <motion.circle
          cx={sqrtX} cy={40} r={7} fill="#6366f1" stroke="white" strokeWidth="2"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.3 }}
        />
      ) : (
        <>
          {/* Estimate mode: show question mark */}
          <motion.circle
            cx={sqrtX} cy={40} r={7} fill="#f59e0b" stroke="white" strokeWidth="2" opacity={0.6}
            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.3 }}
          />
          <text x={sqrtX} y={44} textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">?</text>
        </>
      )}

      {/* Labels */}
      <text x={sqrtX} y={18} textAnchor="middle" fontSize="9" fill="#6366f1" fontWeight="bold">
        {mode === "perfect" ? `√${n} = ${answer}` : `√${n} ≈ ?`}
      </text>
    </svg>
  );
}

export default function QuadraticSqrt({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaults: SubQuestion[] = [
    { n: 25, mode: "perfect", answer: 5 },
    { n: 20, mode: "estimate", answer: 4 },
    { n: 49, mode: "perfect", answer: 7 },
  ];
  const subs = subQuestions || defaults;
  const sub = subs[0] || defaults[0];

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const hint = sub.mode === "estimate" ? t.between : t.hint;

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
      style={{ background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #ede9fe 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">√</div>
          <div>
            <div className="font-extrabold text-indigo-900 text-sm">{t.title}</div>
            <div className="text-xs text-indigo-400 font-mono">√{sub.n} = ?</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-indigo-700 pb-2">{hint}</p>

        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-3 w-full">
            <NumberLineSVG n={sub.n} mode={sub.mode} answer={sub.answer} />
          </div>
        </div>

        {/* Square breakdown (for estimate) */}
        {sub.mode === "estimate" && (
          <div className="flex gap-2 justify-center mb-3">
            {[Math.floor(Math.sqrt(sub.n)), Math.ceil(Math.sqrt(sub.n))].map((v, i) => (
              <div key={i} className="bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-1 text-center">
                <div className="text-xs text-indigo-500">{v}² = {v * v}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mb-3">
          <div className="bg-indigo-100 border border-indigo-300 rounded-xl px-4 py-1.5 text-indigo-800 font-bold text-sm">
            √{sub.n} = ?
          </div>
        </div>

        {!embedded ? (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="?"
              className="border-2 border-indigo-200 rounded-xl px-3 py-2 text-center text-indigo-900 font-bold text-lg w-28 focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-indigo-700 transition-colors"
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
              className="border-2 border-indigo-200 rounded-xl px-3 py-2 text-center text-indigo-900 font-bold text-lg w-32 focus:outline-none focus:border-indigo-500"
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
