"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Transzformáció – Koordináta-rendszer",
    hintTranslate: "Add meg az új x-koordinátát eltolás után!",
    hintReflectX: "Tükrözés az x-tengelyre: add meg az új y-koordinátát!",
    hintReflectY: "Tükrözés az y-tengelyre: add meg az új x-koordinátát!",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    answer: "Válasz:",
    original: "Eredeti",
    image: "Kép",
  },
  de: {
    title: "Transformation – Koordinatensystem",
    hintTranslate: "Gib die neue x-Koordinate nach der Verschiebung an!",
    hintReflectX: "Spiegelung an x-Achse: neue y-Koordinate?",
    hintReflectY: "Spiegelung an y-Achse: neue x-Koordinate?",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    answer: "Antwort:",
    original: "Original",
    image: "Bild",
  },
  en: {
    title: "Transformation – Coordinate Grid",
    hintTranslate: "Give the new x-coordinate after translation!",
    hintReflectX: "Reflection across x-axis: new y-coordinate?",
    hintReflectY: "Reflection across y-axis: new x-coordinate?",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    answer: "Answer:",
    original: "Original",
    image: "Image",
  },
  ro: {
    title: "Transformare – Sistem de coordonate",
    hintTranslate: "Dă noua coordonată x după translație!",
    hintReflectX: "Reflexie față de axa x: noua coordonată y?",
    hintReflectY: "Reflexie față de axa y: noua coordonată x?",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    answer: "Răspuns:",
    original: "Original",
    image: "Imagine",
  },
};

type TransformType = "translate" | "reflectX" | "reflectY" | "rotate90";

interface SubQuestion {
  x: number;
  y: number;
  transform: TransformType;
  dx?: number;
  dy?: number;
  answer: number;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

const W = 220, H = 200, PAD = 24;
const SCALE = 20;
const OX = W / 2, OY = H / 2;

function toSvg(x: number, y: number) {
  return { sx: OX + x * SCALE, sy: OY - y * SCALE };
}

function GridSVG({ sub }: { sub: SubQuestion }) {
  const { x, y, transform, dx = 0, dy = 0 } = sub;

  const origPt = toSvg(x, y);
  let imgX = x, imgY = y;
  if (transform === "translate") { imgX = x + dx; imgY = y + dy; }
  else if (transform === "reflectX") { imgX = x; imgY = -y; }
  else if (transform === "reflectY") { imgX = -x; imgY = y; }
  else if (transform === "rotate90") { imgX = -y; imgY = x; }

  const imgPt = toSvg(imgX, imgY);
  const range = Math.floor((W / 2 - PAD) / SCALE);

  const gridLines = [];
  for (let gx = -range; gx <= range; gx++) {
    const sx = OX + gx * SCALE;
    gridLines.push(<line key={`gv${gx}`} x1={sx} y1={PAD} x2={sx} y2={H - PAD} stroke="#e2e8f0" strokeWidth="0.5" />);
  }
  const yrange = Math.floor((H / 2 - PAD) / SCALE);
  for (let gy = -yrange; gy <= yrange; gy++) {
    const sy = OY - gy * SCALE;
    gridLines.push(<line key={`gh${gy}`} x1={PAD} y1={sy} x2={W - PAD} y2={sy} stroke="#e2e8f0" strokeWidth="0.5" />);
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
      {gridLines}
      {/* Axes */}
      <line x1={PAD} y1={OY} x2={W - PAD} y2={OY} stroke="#94a3b8" strokeWidth="1.5" />
      <line x1={OX} y1={PAD} x2={OX} y2={H - PAD} stroke="#94a3b8" strokeWidth="1.5" />
      <text x={W - PAD + 2} y={OY + 10} fontSize="9" fill="#94a3b8">x</text>
      <text x={OX + 3} y={PAD - 2} fontSize="9" fill="#94a3b8">y</text>

      {/* Tick labels */}
      {[-4, -2, 2, 4].map(gx => {
        const sx = OX + gx * SCALE;
        return <text key={`tx${gx}`} x={sx} y={OY + 12} fontSize="8" textAnchor="middle" fill="#64748b">{gx}</text>;
      })}
      {[-4, -2, 2, 4].map(gy => {
        const sy = OY - gy * SCALE;
        return <text key={`ty${gy}`} x={OX - 14} y={sy + 3} fontSize="8" textAnchor="middle" fill="#64748b">{gy}</text>;
      })}

      {/* Arrow from original to image */}
      <motion.line
        x1={origPt.sx} y1={origPt.sy} x2={imgPt.sx} y2={imgPt.sy}
        stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
      />

      {/* Original point */}
      <motion.circle
        cx={origPt.sx} cy={origPt.sy} r={6} fill="#6366f1" stroke="white" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}
      />
      <text x={origPt.sx + 8} y={origPt.sy - 8} fontSize="9" fill="#6366f1" fontWeight="bold">({x},{y})</text>

      {/* Image point with question mark */}
      <motion.circle
        cx={imgPt.sx} cy={imgPt.sy} r={6} fill="#f59e0b" stroke="white" strokeWidth="2"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.3 }}
      />
      <text x={imgPt.sx + 8} y={imgPt.sy - 8} fontSize="9" fill="#d97706" fontWeight="bold">({imgX},?)</text>
    </svg>
  );
}

export default function TransformationGrid({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaults: SubQuestion[] = [
    { x: 2, y: 3, transform: "translate", dx: 2, dy: -1, answer: 4 },
    { x: 3, y: 4, transform: "reflectX", answer: -4 },
    { x: 4, y: 2, transform: "reflectY", answer: -4 },
  ];
  const subs = subQuestions || defaults;
  const sub = subs[0] || defaults[0];

  const hint =
    sub.transform === "translate" ? t.hintTranslate :
    sub.transform === "reflectX" ? t.hintReflectX :
    sub.transform === "reflectY" ? t.hintReflectY : t.hintTranslate;

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

  const transformLabel =
    sub.transform === "translate" ? `→ (+${sub.dx}, ${sub.dy})` :
    sub.transform === "reflectX" ? "⊥ x-axis" :
    sub.transform === "reflectY" ? "⊥ y-axis" :
    "↺ 90°";

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-xl"
      style={{ background: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-xl">🗺️</div>
          <div>
            <div className="font-extrabold text-orange-900 text-sm">{t.title}</div>
            <div className="text-xs text-orange-400 font-mono">({sub.x},{sub.y}) {transformLabel}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-orange-700 pb-2">{hint}</p>

        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 p-2">
            <GridSVG sub={sub} />
          </div>
        </div>

        <div className="flex justify-center mb-3">
          <div className="bg-orange-100 border border-orange-300 rounded-xl px-4 py-1.5 text-orange-800 font-bold text-sm">
            {transformLabel} → ?
          </div>
        </div>

        {!embedded ? (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="?"
              className="border-2 border-orange-200 rounded-xl px-3 py-2 text-center text-orange-900 font-bold text-lg w-28 focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-orange-500 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-orange-600 transition-colors"
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
              className="border-2 border-orange-200 rounded-xl px-3 py-2 text-center text-orange-900 font-bold text-lg w-32 focus:outline-none focus:border-orange-500"
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
