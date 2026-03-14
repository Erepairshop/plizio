"use client";
// FractionVisual — SVG pizza-slice fraction visualization
// Self-contained (generates own questions): show shaded circle, pick the correct fraction.
// Designed for Grade 4 Bruchrechnung island.

import { memo, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── SVG Pizza ────────────────────────────────────────────────────────────────
function pizzaSector(cx: number, cy: number, r: number, startA: number, endA: number): string {
  const x1 = cx + r * Math.cos(startA), y1 = cy + r * Math.sin(startA);
  const x2 = cx + r * Math.cos(endA),   y2 = cy + r * Math.sin(endA);
  const large = endA - startA > Math.PI ? 1 : 0;
  return `M ${cx},${cy} L ${x1},${y1} A ${r},${r} 0 ${large} 1 ${x2},${y2} Z`;
}

function PizzaSVG({ num, den, color, size = 96 }: { num: number; den: number; color: string; size?: number }) {
  const cx = size / 2, cy = size / 2, r = size * 0.42;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      {Array.from({ length: den }, (_, i) => {
        const startA = (i / den) * 2 * Math.PI - Math.PI / 2;
        const endA = ((i + 1) / den) * 2 * Math.PI - Math.PI / 2;
        return (
          <path key={i} d={pizzaSector(cx, cy, r, startA, endA)}
            fill={i < num ? color : "rgba(255,255,255,0.07)"}
            stroke="rgba(255,255,255,0.22)" strokeWidth={1.5} />
        );
      })}
      <circle cx={cx} cy={cy} r={3.5} fill="rgba(255,255,255,0.35)" />
      {/* Highlight */}
      <ellipse cx={cx * 0.7} cy={cy * 0.6} rx={r * 0.3} ry={r * 0.2} fill="white" opacity="0.1" />
    </svg>
  );
}

// ─── Question generation ───────────────────────────────────────────────────────
type Fraction = [number, number]; // [numerator, denominator]

const POOL: Fraction[] = [
  [1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
  [1,6],[5,6],[3,8],[5,8],[1,8],[7,8],
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeDis(correct: Fraction): Fraction[] {
  const [cn, cd] = correct;
  const candidates: Fraction[] = [];
  // Same denominator, different numerator
  for (let n = 1; n < cd; n++) if (n !== cn) candidates.push([n, cd]);
  // Different denominator, same numerator
  for (const [n, d] of POOL) if (n === cn && d !== cd) candidates.push([n, d]);
  // Random from pool
  for (const f of shuffle(POOL)) candidates.push(f);
  const seen = new Set([`${cn}/${cd}`]);
  const out: Fraction[] = [];
  for (const f of candidates) {
    const k = `${f[0]}/${f[1]}`;
    if (!seen.has(k) && out.length < 3) { seen.add(k); out.push(f); }
  }
  return shuffle([[...correct] as Fraction, ...out]);
}

interface FrQ { num: number; den: number; choices: Fraction[] }

function genQuestions(count: number): FrQ[] {
  return shuffle(POOL).slice(0, count).map(([n, d]) => ({ num: n, den: d, choices: makeDis([n, d]) }));
}

// ─── Translations ─────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  en: { question: "What fraction is shaded?", correct: "Correct! 🎉", wrong: "Answer was", next: "Next", done: "Done!" },
  hu: { question: "Mekkora rész van kiszínezve?", correct: "Helyes! 🎉", wrong: "A helyes:", next: "Következő", done: "Kész!" },
  de: { question: "Welcher Bruch ist gefärbt?", correct: "Richtig! 🎉", wrong: "Antwort war", next: "Weiter", done: "Fertig!" },
  ro: { question: "Ce fracție este colorată?", correct: "Corect! 🎉", wrong: "Răspuns:", next: "Înainte", done: "Gata!" },
};

// ─── Component ────────────────────────────────────────────────────────────────
const FractionVisual = memo(function FractionVisual({ color, onDone, onCorrect, onWrong, lang = "en" }: {
  color: string; onDone: (score: number, total: number) => void;
  onCorrect?: () => void; onWrong?: () => void; lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [questions] = useState(() => genQuestions(10));
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const scoreRef = useRef(0);
  const [score, setScore] = useState(0);

  const q = questions[idx];
  const correctKey = `${q.num}/${q.den}`;

  const confirm = useCallback((key: string) => {
    if (confirmed) return;
    setSelected(key);
    setConfirmed(true);
    if (key === correctKey) {
      scoreRef.current++;
      setScore(scoreRef.current);
      onCorrect?.();
    } else {
      onWrong?.();
    }
  }, [confirmed, correctKey, onCorrect, onWrong]);

  const next = useCallback(() => {
    if (idx + 1 >= questions.length) {
      onDone(scoreRef.current, questions.length);
    } else {
      setIdx(i => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  }, [idx, questions.length, onDone]);

  const isCorrect = selected === correctKey;

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto items-center">
      {/* Progress dots */}
      <div className="flex gap-1.5 w-full">
        {questions.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full transition-all"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Question label */}
      <p className="text-white/70 text-sm font-bold text-center">{lbl.question}</p>

      {/* Pizza */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }}
          className="rounded-3xl p-4 flex items-center justify-center"
          style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
          <PizzaSVG num={q.num} den={q.den} color={color} size={110} />
        </motion.div>
      </AnimatePresence>

      {/* Fraction choices */}
      <div className="grid grid-cols-2 gap-2.5 w-full">
        {q.choices.map((c, i) => {
          const key = `${c[0]}/${c[1]}`;
          const isThis = key === selected;
          const isRight = key === correctKey;
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.12)";
          let tc = "rgba(255,255,255,0.85)";
          if (confirmed) {
            if (isRight)       { bg = "rgba(0,255,136,0.2)"; border = "#00FF88"; tc = "#00FF88"; }
            else if (isThis)   { bg = "rgba(255,50,50,0.15)"; border = "#FF4444"; tc = "#FF6666"; }
          }
          return (
            <motion.button key={i} onClick={() => !confirmed && confirm(key)}
              className="py-4 rounded-2xl font-black text-xl text-center"
              style={{ background: bg, border: `2px solid ${border}`, color: tc }}
              whileTap={!confirmed ? { scale: 0.94 } : {}}>
              {c[0]}/{c[1]}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback + Next */}
      <AnimatePresence>
        {confirmed && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 items-center w-full">
            <span className="font-black text-base" style={{ color: isCorrect ? "#00FF88" : "#FF6666" }}>
              {isCorrect ? lbl.correct : `${lbl.wrong} ${correctKey}`}
            </span>
            <motion.button onClick={next}
              className="w-full py-4 rounded-2xl font-black text-white flex items-center justify-center gap-2 text-base"
              style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= questions.length ? lbl.done : lbl.next} <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default FractionVisual;
