"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Henger – Felszín és Térfogat",
    hint: "Számold ki a henger felszínét vagy térfogatát!",
    hintVolume: "Számold ki a henger térfogatát! (π ≈ 3)",
    hintSurface: "Számold ki a henger teljes felszínét! (π ≈ 3)",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    answer: "Válasz:",
    radius: "r",
    height: "m",
    volume: "Térfogat = ?",
    surface: "Felszín = ?",
  },
  de: {
    title: "Zylinder – Oberfläche und Volumen",
    hint: "Berechne Oberfläche oder Volumen des Zylinders!",
    hintVolume: "Berechne das Volumen des Zylinders! (π ≈ 3)",
    hintSurface: "Berechne die Gesamtoberfläche des Zylinders! (π ≈ 3)",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    answer: "Antwort:",
    radius: "r",
    height: "h",
    volume: "Volumen = ?",
    surface: "Oberfläche = ?",
  },
  en: {
    title: "Cylinder – Surface Area & Volume",
    hint: "Calculate the surface area or volume of the cylinder!",
    hintVolume: "Calculate the volume of the cylinder! (π ≈ 3)",
    hintSurface: "Calculate the total surface area! (π ≈ 3)",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    answer: "Answer:",
    radius: "r",
    height: "h",
    volume: "Volume = ?",
    surface: "Surface = ?",
  },
  ro: {
    title: "Cilindru – Arie și Volum",
    hint: "Calculează aria sau volumul cilindrului!",
    hintVolume: "Calculează volumul cilindrului! (π ≈ 3)",
    hintSurface: "Calculează aria totală a cilindrului! (π ≈ 3)",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    answer: "Răspuns:",
    radius: "r",
    height: "î",
    volume: "Volum = ?",
    surface: "Arie = ?",
  },
};

type CylMode = "volume" | "surface";

interface SubQuestion {
  r: number;
  h: number;
  mode: CylMode;
  answer: number;
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function CylinderSVG({ r, h }: { r: number; h: number }) {
  const W = 180, H = 160;
  const cx = W / 2;
  const rx = 40, ry = 14; // ellipse radii for the top/bottom ovals
  const bodyW = rx * 2;

  // Scale height visually (max h=10 → 100px body)
  const maxH = 10;
  const bodyH = Math.max(40, (h / maxH) * 100);
  const topY = (H - bodyH) / 2;
  const botY = topY + bodyH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
      {/* Cylinder body sides */}
      <motion.rect
        x={cx - rx} y={topY} width={bodyW} height={bodyH}
        fill="#c7d2fe" stroke="none"
        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
        style={{ transformOrigin: `${cx}px ${botY}px` }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      {/* Bottom ellipse */}
      <ellipse cx={cx} cy={botY} rx={rx} ry={ry} fill="#a5b4fc" stroke="#6366f1" strokeWidth="1.5" />
      {/* Left/right edge lines */}
      <line x1={cx - rx} y1={topY} x2={cx - rx} y2={botY} stroke="#6366f1" strokeWidth="1.5" />
      <line x1={cx + rx} y1={topY} x2={cx + rx} y2={botY} stroke="#6366f1" strokeWidth="1.5" />
      {/* Top ellipse */}
      <ellipse cx={cx} cy={topY} rx={rx} ry={ry} fill="#e0e7ff" stroke="#6366f1" strokeWidth="1.5" />

      {/* Radius arrow on top */}
      <line x1={cx} y1={topY} x2={cx + rx} y2={topY} stroke="#f59e0b" strokeWidth="2" strokeDasharray="3,2" />
      <text x={cx + rx / 2} y={topY - 5} textAnchor="middle" fontSize="10" fill="#d97706" fontWeight="bold">r={r}</text>

      {/* Height arrow on right */}
      <line x1={cx + rx + 10} y1={topY} x2={cx + rx + 10} y2={botY} stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,2" />
      <polygon points={`${cx + rx + 10},${topY} ${cx + rx + 7},${topY + 6} ${cx + rx + 13},${topY + 6}`} fill="#10b981" />
      <polygon points={`${cx + rx + 10},${botY} ${cx + rx + 7},${botY - 6} ${cx + rx + 13},${botY - 6}`} fill="#10b981" />
      <text x={cx + rx + 22} y={(topY + botY) / 2 + 4} fontSize="10" fill="#059669" fontWeight="bold">h={h}</text>
    </svg>
  );
}

export default function CylinderSurface({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaults: SubQuestion[] = [
    { r: 2, h: 5, mode: "volume", answer: 60 },   // π*r²*h ≈ 3*4*5 = 60
    { r: 3, h: 4, mode: "surface", answer: 126 },  // 2π*r*(r+h) ≈ 2*3*3*(3+4)=126
    { r: 2, h: 3, mode: "volume", answer: 36 },    // 3*4*3=36
  ];
  const subs = subQuestions || defaults;
  const sub = subs[0] || defaults[0];

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const hint = sub.mode === "volume" ? t.hintVolume : t.hintSurface;
  const badge = sub.mode === "volume" ? t.volume : t.surface;

  // Formula hint
  const formula = sub.mode === "volume"
    ? `V = π·r²·h ≈ 3·${sub.r}²·${sub.h}`
    : `A = 2π·r·(r+h) ≈ 2·3·${sub.r}·(${sub.r}+${sub.h})`;

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
      style={{ background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 60%, #ddd6fe 100%)" }}
    >
      {!embedded && (
        <div className="flex items-center gap-3 px-5 pt-4 pb-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">🥫</div>
          <div>
            <div className="font-extrabold text-indigo-900 text-sm">{t.title}</div>
            <div className="text-xs text-indigo-400 font-mono">r={sub.r} · h={sub.h}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-4">
        <p className="text-xs font-semibold text-center text-indigo-700 pb-2">{hint}</p>

        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-2">
            <CylinderSVG r={sub.r} h={sub.h} />
          </div>
        </div>

        {/* Formula hint */}
        <div className="flex justify-center mb-2">
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-1 text-indigo-700 text-xs font-mono">
            {formula}
          </div>
        </div>

        <div className="flex justify-center mb-3">
          <div className="bg-indigo-100 border border-indigo-300 rounded-xl px-4 py-1.5 text-indigo-800 font-bold text-sm">
            {badge}
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
