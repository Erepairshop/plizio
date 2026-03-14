"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Lineáris függvény – Grafikon",
    hint: "Olvasd le az f(x) értékét a grafikonról!",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    answer: "Válasz:",
    question: "f(?) = ?",
  },
  de: {
    title: "Lineare Funktion – Graph",
    hint: "Lies den Funktionswert f(x) aus dem Graphen ab!",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    answer: "Antwort:",
    question: "f(?) = ?",
  },
  en: {
    title: "Linear Function – Graph",
    hint: "Read off the function value f(x) from the graph!",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    answer: "Answer:",
    question: "f(?) = ?",
  },
  ro: {
    title: "Funcție liniară – Grafic",
    hint: "Citește valoarea funcției f(x) din grafic!",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    answer: "Răspuns:",
    question: "f(?) = ?",
  },
};

interface SubQuestion {
  m: number;
  b: number;
  x: number;
  answer: number;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const W = 220, H = 200, PAD = 28;
const SCALE = 16; // pixels per unit
const OX = W / 2, OY = H / 2; // origin in SVG

function toSvg(x: number, y: number) {
  return { sx: OX + x * SCALE, sy: OY - y * SCALE };
}

function FuncGraphSVG({ m, b, x }: { m: number; b: number; x: number }) {
  const xRange = Math.floor((W / 2 - PAD) / SCALE);
  const p1 = toSvg(-xRange, m * -xRange + b);
  const p2 = toSvg(xRange, m * xRange + b);

  // Point to highlight
  const pt = toSvg(x, m * x + b);

  const gridLines = [];
  for (let gx = -xRange; gx <= xRange; gx++) {
    const sx = OX + gx * SCALE;
    gridLines.push(<line key={`gv${gx}`} x1={sx} y1={PAD} x2={sx} y2={H - PAD} stroke="#e2e8f0" strokeWidth="0.5" />);
  }
  const yRange = Math.floor((H / 2 - PAD) / SCALE);
  for (let gy = -yRange; gy <= yRange; gy++) {
    const sy = OY - gy * SCALE;
    gridLines.push(<line key={`gh${gy}`} x1={PAD} y1={sy} x2={W - PAD} y2={sy} stroke="#e2e8f0" strokeWidth="0.5" />);
  }

  const bStr = b > 0 ? `+ ${b}` : b < 0 ? `- ${Math.abs(b)}` : "";
  const label = `f(x) = ${m}x ${bStr}`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
      {/* Grid */}
      {gridLines}
      {/* Axes */}
      <line x1={PAD} y1={OY} x2={W - PAD} y2={OY} stroke="#94a3b8" strokeWidth="1.5" />
      <line x1={OX} y1={PAD} x2={OX} y2={H - PAD} stroke="#94a3b8" strokeWidth="1.5" />
      {/* Axis arrows */}
      <polygon points={`${W - PAD},${OY} ${W - PAD - 5},${OY - 3} ${W - PAD - 5},${OY + 3}`} fill="#94a3b8" />
      <polygon points={`${OX},${PAD} ${OX - 3},${PAD + 5} ${OX + 3},${PAD + 5}`} fill="#94a3b8" />
      {/* Axis labels */}
      <text x={W - PAD + 2} y={OY + 10} fontSize="9" fill="#94a3b8">x</text>
      <text x={OX + 3} y={PAD - 2} fontSize="9" fill="#94a3b8">y</text>
      {/* Tick labels (x) */}
      {[-4, -2, 2, 4].map(gx => {
        const sx = OX + gx * SCALE;
        return <text key={`tx${gx}`} x={sx} y={OY + 12} fontSize="8" textAnchor="middle" fill="#64748b">{gx}</text>;
      })}
      {/* Tick labels (y) */}
      {[-4, -2, 2, 4].map(gy => {
        const sy = OY - gy * SCALE;
        return <text key={`ty${gy}`} x={OX - 14} y={sy + 3} fontSize="8" textAnchor="middle" fill="#64748b">{gy}</text>;
      })}
      {/* Function line */}
      <motion.line
        x1={p1.sx} y1={p1.sy} x2={p2.sx} y2={p2.sy}
        stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      {/* Dotted lines to highlight point */}
      <line x1={pt.sx} y1={OY} x2={pt.sx} y2={pt.sy} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2" />
      <line x1={OX} y1={pt.sy} x2={pt.sx} y2={pt.sy} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2" />
      {/* Highlight point */}
      <motion.circle
        cx={pt.sx} cy={pt.sy} r={5} fill="#f59e0b" stroke="white" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      />
      {/* x label */}
      <text x={pt.sx} y={OY + 16} fontSize="9" textAnchor="middle" fill="#d97706" fontWeight="bold">x={x}</text>
      {/* Function label */}
      <text x={p2.sx - 10} y={p2.sy - 6} fontSize="8" fill="#6366f1" fontWeight="bold" textAnchor="end">{label}</text>
    </svg>
  );
}

export default function FunctionGraph({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaults: SubQuestion[] = [
    { m: 2, b: 1, x: 3, answer: 7 },
    { m: -1, b: 4, x: 2, answer: 2 },
    { m: 3, b: -2, x: 2, answer: 4 },
  ];
  const subs = subQuestions || defaults;

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const sub = subs[0] || defaults[0];
  const bStr = sub.b > 0 ? `+ ${sub.b}` : sub.b < 0 ? `- ${Math.abs(sub.b)}` : "";

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
      style={{ background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #ddd6fe 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">📈</div>
          <div>
            <div className="font-extrabold text-indigo-900 text-sm">{t.title}</div>
            <div className="text-xs text-indigo-400 font-mono">f(x) = {sub.m}x {bStr}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-indigo-700 pb-2">{t.hint}</p>

        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-2">
            <FuncGraphSVG m={sub.m} b={sub.b} x={sub.x} />
          </div>
        </div>

        {/* Question badge */}
        <div className="flex justify-center mb-3">
          <div className="bg-amber-100 border border-amber-300 rounded-xl px-4 py-1.5 text-amber-800 font-bold text-sm">
            f({sub.x}) = ?
          </div>
        </div>

        {!embedded ? (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
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
              placeholder={t.answer}
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
