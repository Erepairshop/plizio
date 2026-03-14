"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LABELS = {
  hu: {
    title: "Pitagorasz-tétel",
    hint: "Számítsd ki a hiányzó oldalt!",
    hyp: "átfogó",
    leg: "befogó",
    check: "Ellenőrzés",
    correct: "Helyes!",
    wrong: "Nem egészen...",
    formula: "a² + b² = c²",
    answer: "Válasz (cm):",
  },
  de: {
    title: "Satz des Pythagoras",
    hint: "Berechne die fehlende Seite!",
    hyp: "Hypotenuse",
    leg: "Kathete",
    check: "Prüfen",
    correct: "Richtig!",
    wrong: "Nicht ganz...",
    formula: "a² + b² = c²",
    answer: "Antwort (cm):",
  },
  en: {
    title: "Pythagorean Theorem",
    hint: "Calculate the missing side!",
    hyp: "hypotenuse",
    leg: "leg",
    check: "Check",
    correct: "Correct!",
    wrong: "Not quite...",
    formula: "a² + b² = c²",
    answer: "Answer (cm):",
  },
  ro: {
    title: "Teorema lui Pitagora",
    hint: "Calculează latura lipsă!",
    hyp: "ipotenuză",
    leg: "catetă",
    check: "Verifică",
    correct: "Corect!",
    wrong: "Nu chiar...",
    formula: "a² + b² = c²",
    answer: "Răspuns (cm):",
  },
};

interface SubQuestion {
  answer: number | string;
  label?: string;
  a: number;
  b: number;
  findC: boolean; // true = find hypotenuse, false = find leg
}

interface Props {
  subQuestions?: SubQuestion[];
  lang?: "hu" | "de" | "en" | "ro";
  embedded?: boolean;
  onValueChange?: (val: string) => void;
  onAnswer?: (correct: boolean) => void;
}

function drawTriangle(
  ctx: CanvasRenderingContext2D,
  a: number,
  b: number,
  findC: boolean,
  scale: number
) {
  const ox = 20, oy = 20 + b * scale;
  // Right angle at origin
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Triangle fill
  ctx.beginPath();
  ctx.moveTo(ox, oy);
  ctx.lineTo(ox + a * scale, oy);
  ctx.lineTo(ox, oy - b * scale);
  ctx.closePath();
  ctx.fillStyle = "rgba(99,102,241,0.08)";
  ctx.fill();

  // Triangle stroke
  ctx.strokeStyle = "#6366F1";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Right angle marker
  const sq = 10;
  ctx.beginPath();
  ctx.moveTo(ox + sq, oy);
  ctx.lineTo(ox + sq, oy - sq);
  ctx.lineTo(ox, oy - sq);
  ctx.strokeStyle = "#6366F1";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Labels on sides
  ctx.fillStyle = "#312e81";
  ctx.font = "bold 14px sans-serif";
  ctx.textAlign = "center";

  // Bottom side = a
  ctx.fillText(`a = ${a}`, ox + (a * scale) / 2, oy + 18);
  // Left side = b
  ctx.save();
  ctx.translate(ox - 18, oy - (b * scale) / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(`b = ${b}`, 0, 0);
  ctx.restore();

  // Hypotenuse label
  const cx = ox + (a * scale) / 2;
  const cy = oy - (b * scale) / 2;
  ctx.save();
  ctx.translate(cx + 16, cy - 8);
  const angle = Math.atan2(b * scale, a * scale);
  ctx.rotate(-angle);
  if (findC) {
    ctx.fillStyle = "#EC4899";
    ctx.fillText("c = ?", 0, 0);
  } else {
    const c = Math.round(Math.sqrt(a * a + b * b));
    ctx.fillText(`c = ${c}`, 0, 0);
  }
  ctx.restore();

  // If finding a leg, label the question mark
  if (!findC) {
    // We'll mark b as unknown visually
    ctx.fillStyle = "#EC4899";
    ctx.save();
    ctx.translate(ox - 18, oy - (b * scale) / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("b = ?", 0, 0);
    ctx.restore();
    ctx.fillStyle = "#312e81";
    ctx.fillText(`a = ${a}`, ox + (a * scale) / 2, oy + 18);
  }
}

export default function PythagoreanVisual({
  subQuestions,
  lang = "en",
  embedded = false,
  onValueChange,
  onAnswer,
}: Props) {
  const t = LABELS[lang] || LABELS.en;

  const defaultSubs: SubQuestion[] = [
    { a: 3, b: 4, findC: true, answer: 5 },
    { a: 5, b: 12, findC: true, answer: 13 },
    { a: 6, b: 8, findC: false, answer: 8 },
  ];
  const subs = subQuestions || defaultSubs;

  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sub = subs[idx] || subs[0];
  const scale = Math.min(140 / Math.max(sub.a, sub.b), 18);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawTriangle(ctx, sub.a, sub.b, sub.findC, scale);
  }, [idx, sub.a, sub.b, sub.findC, scale]);

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
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            📐
          </div>
          <div>
            <div className="font-extrabold text-indigo-900 text-sm">{t.title}</div>
            <div className="text-xs text-indigo-400 font-mono">{t.formula}</div>
          </div>
        </div>
      )}

      <div className="px-5 pb-3">
        <p className="text-xs font-semibold text-center text-indigo-500 pb-2">{t.hint}</p>

        {/* Triangle canvas */}
        <div className="flex justify-center mb-3">
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-3 flex items-center justify-center" style={{ minHeight: 160 }}>
            <canvas
              ref={canvasRef}
              width={Math.max(sub.a * scale + 50, 180)}
              height={Math.max(sub.b * scale + 50, 160)}
            />
          </div>
        </div>

        {/* Formula hint */}
        <div className="text-center text-xs font-mono text-indigo-400 mb-3">{t.formula}</div>

        {/* Input */}
        {!embedded && (
          <div className="flex gap-2 justify-center mb-3">
            <input
              type="number"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              placeholder={t.answer}
              className="border-2 border-indigo-200 rounded-xl px-3 py-2 text-center text-indigo-900 font-bold text-lg w-32 focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white rounded-xl px-4 py-2 font-bold text-sm hover:bg-indigo-700 transition-colors"
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
              className="border-2 border-indigo-200 rounded-xl px-3 py-2 text-center text-indigo-900 font-bold text-lg w-36 focus:outline-none focus:border-indigo-500"
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
