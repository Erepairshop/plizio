"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Hatványok vizuálisan",
    hint: "Számolja meg a négyzeteket / kockákat és adja meg a hatványt!",
    squareTab: "Négyzet (n²)",
    cubeTab: "Kocka (n³)",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    answer: "Érték:",
    gridLabel: (n: number) => `${n}² = ?`,
    cubeLabel: (n: number) => `${n}³ = ?`,
  },
  de: {
    title: "Potenzen visualisiert",
    hint: "Zähle die Quadrate / Würfel und gib die Potenz an!",
    squareTab: "Quadrat (n²)",
    cubeTab: "Würfel (n³)",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    answer: "Wert:",
    gridLabel: (n: number) => `${n}² = ?`,
    cubeLabel: (n: number) => `${n}³ = ?`,
  },
  en: {
    title: "Powers Visualized",
    hint: "Count the squares / cubes and give the value of the power!",
    squareTab: "Square (n²)",
    cubeTab: "Cube (n³)",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    answer: "Value:",
    gridLabel: (n: number) => `${n}² = ?`,
    cubeLabel: (n: number) => `${n}³ = ?`,
  },
  ro: {
    title: "Puteri vizualizate",
    hint: "Numără pătratele / cuburile și dă valoarea puterii!",
    squareTab: "Pătrat (n²)",
    cubeTab: "Cub (n³)",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    answer: "Valoare:",
    gridLabel: (n: number) => `${n}² = ?`,
    cubeLabel: (n: number) => `${n}³ = ?`,
  },
};

interface SubQuestion {
  n: number;
  type: "square" | "cube";
  answer: number | string;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const COLORS = [
  "#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B",
  "#0EA5E9", "#EF4444", "#F97316",
];

function SquareGrid({ n }: { n: number }) {
  const size = Math.min(28, Math.floor(160 / n));
  const gap = 2;
  return (
    <div className="flex justify-center">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${n}, ${size}px)`,
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: n * n }, (_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.02, type: "spring", stiffness: 300 }}
            style={{
              width: size,
              height: size,
              backgroundColor: COLORS[n % COLORS.length],
              borderRadius: 3,
              opacity: 0.85,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Isometric cube visualization using SVG
function IsoCube({ n }: { n: number }) {
  const tw = 20, th = 10, cubeH = 14;
  const cols = n, rows = n;
  // Draw a grid of isometric unit cubes
  const totalW = (cols + rows) * tw + 20;
  const totalH = cubeH * n + (cols + rows) * th + 20;
  const ox = rows * tw + 10;
  const oy = 10;

  const cubes = [];
  for (let z = 0; z < n; z++) {
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const sx = ox + (x - y) * tw;
        const sy = oy + (x + y) * th - z * cubeH;
        const col = COLORS[n % COLORS.length];
        // Lighten top, darken sides
        cubes.push(
          <g key={`${x}-${y}-${z}`}>
            {/* Top face */}
            <path
              d={`M ${sx},${sy} L ${sx + tw},${sy + th} L ${sx},${sy + th * 2} L ${sx - tw},${sy + th} Z`}
              fill={col}
              opacity="0.9"
              stroke="white"
              strokeWidth="0.5"
            />
            {/* Left face */}
            <path
              d={`M ${sx - tw},${sy + th} L ${sx},${sy + th * 2} L ${sx},${sy + th * 2 + cubeH} L ${sx - tw},${sy + th + cubeH} Z`}
              fill={col}
              opacity="0.55"
              stroke="white"
              strokeWidth="0.5"
            />
            {/* Right face */}
            <path
              d={`M ${sx + tw},${sy + th} L ${sx},${sy + th * 2} L ${sx},${sy + th * 2 + cubeH} L ${sx + tw},${sy + th + cubeH} Z`}
              fill={col}
              opacity="0.7"
              stroke="white"
              strokeWidth="0.5"
            />
          </g>
        );
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      width={Math.min(totalW, 200)}
      height={Math.min(totalH, 180)}
      style={{ overflow: "visible" }}
    >
      {cubes}
    </svg>
  );
}

export default function PowerGrid({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaultSubs: SubQuestion[] = [
    { n: 4, type: "square", answer: 16 },
    { n: 3, type: "cube", answer: 27 },
    { n: 5, type: "square", answer: 25 },
  ];
  const subs = subQuestions || defaultSubs;

  const [idx] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const sub = subs[idx] || subs[0];
  const isSquare = sub.type === "square";

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
      style={{ background: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #ede9fe 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
            {isSquare ? "²" : "³"}
          </div>
          <div>
            <div className="font-extrabold text-purple-900 text-sm">{t.title}</div>
            <div className="text-xs text-purple-400 font-mono">
              {isSquare ? t.squareTab : t.cubeTab}
            </div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-purple-600 pb-2">{t.hint}</p>

        {/* Expression */}
        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 px-6 py-2 text-2xl font-black text-purple-800 font-mono">
            {isSquare ? t.gridLabel(sub.n) : t.cubeLabel(sub.n)}
          </div>
        </div>

        {/* Visual grid / cube */}
        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-4 flex items-center justify-center" style={{ minHeight: 120 }}>
            {isSquare && sub.n <= 7 ? (
              <SquareGrid n={sub.n} />
            ) : (
              <IsoCube n={Math.min(sub.n, 4)} />
            )}
          </div>
        </div>

        {/* Count hint */}
        <div className="text-center text-xs text-purple-500 mb-3 font-mono">
          {isSquare
            ? `${sub.n} × ${sub.n} = ?`
            : `${sub.n} × ${sub.n} × ${sub.n} = ?`}
        </div>

        {/* Input */}
        {!embedded && (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
              className="border-2 border-purple-200 rounded-xl px-3 py-2 text-center text-purple-900 font-bold text-lg w-32 focus:outline-none focus:border-purple-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-purple-600 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-purple-700 transition-colors"
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
              className="border-2 border-purple-200 rounded-xl px-3 py-2 text-center text-purple-900 font-bold text-lg w-36 focus:outline-none focus:border-purple-500"
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
