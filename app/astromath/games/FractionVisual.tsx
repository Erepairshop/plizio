"use client";
// FractionVisual — SVG pizza-slice fraction visualization
// TEACHES first (2 guided discovery rounds), then quizzes (10 MCQ rounds).
// Teaching rounds: step by step, no wrong answers — tap slices to learn.
// Designed for Grade 4+ Bruchrechnung island.

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
  en: {
    question: "What fraction is shaded?", correct: "Correct! 🎉", wrong: "Answer was", next: "Next", done: "Done!",
    teachTitle: "What is a Fraction?",
    teachIntro: "A fraction shows how many equal parts are filled.",
    teachStep1: "Here is a circle divided into equal slices:",
    teachTap: "Tap each slice to color it!",
    teachFilled: "filled",
    teachOf: "of",
    teachRule: "Fraction = colored slices ÷ total slices",
    teachSo: "So the fraction is:",
    teachReady: "Now let's practice!",
    teachNext: "Next",
  },
  hu: {
    question: "Mekkora rész van kiszínezve?", correct: "Helyes! 🎉", wrong: "A helyes:", next: "Következő", done: "Kész!",
    teachTitle: "Mi az a tört?",
    teachIntro: "A tört megmutatja, hány egyenlő rész van kitöltve.",
    teachStep1: "Íme egy kör, egyenlő szeletekre osztva:",
    teachTap: "Koppints minden szeletre a színezéshez!",
    teachFilled: "kitöltve",
    teachOf: "/",
    teachRule: "Tört = színes szeletek ÷ összes szelet",
    teachSo: "Tehát a tört:",
    teachReady: "Most gyakoroljunk!",
    teachNext: "Következő",
  },
  de: {
    question: "Welcher Bruch ist gefärbt?", correct: "Richtig! 🎉", wrong: "Antwort war", next: "Weiter", done: "Fertig!",
    teachTitle: "Was ist ein Bruch?",
    teachIntro: "Ein Bruch zeigt, wie viele gleiche Teile gefärbt sind.",
    teachStep1: "Hier ist ein Kreis, in gleiche Stücke geteilt:",
    teachTap: "Tippe auf jedes Stück zum Einfärben!",
    teachFilled: "gefärbt",
    teachOf: "von",
    teachRule: "Bruch = gefärbte Stücke ÷ alle Stücke",
    teachSo: "Der Bruch ist also:",
    teachReady: "Jetzt üben wir!",
    teachNext: "Weiter",
  },
  ro: {
    question: "Ce fracție este colorată?", correct: "Corect! 🎉", wrong: "Răspuns:", next: "Înainte", done: "Gata!",
    teachTitle: "Ce este o fracție?",
    teachIntro: "O fracție arată câte părți egale sunt colorate.",
    teachStep1: "Iată un cerc împărțit în felii egale:",
    teachTap: "Atinge fiecare felie pentru a o colora!",
    teachFilled: "colorate",
    teachOf: "din",
    teachRule: "Fracție = felii colorate ÷ total felii",
    teachSo: "Deci fracția este:",
    teachReady: "Acum să exersăm!",
    teachNext: "Înainte",
  },
};

// ─── Teaching Phase ──────────────────────────────────────────────────────────
// 2 guided rounds: student taps slices to color them, then sees the fraction.
// Round 1: circle with 4 slices → color 3 → fraction is 3/4
// Round 2: circle with 6 slices → color 2 → fraction is 2/6

interface TeachRound { den: number; target: number }
const TEACH_ROUNDS: TeachRound[] = [
  { den: 4, target: 3 },
  { den: 6, target: 2 },
];

function TeachingPhase({ color, lang, onDone }: { color: string; lang: string; onDone: () => void }) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [roundIdx, setRoundIdx] = useState(0);
  const [filled, setFilled] = useState<Set<number>>(new Set());
  const [revealed, setRevealed] = useState(false);

  const round = TEACH_ROUNDS[roundIdx];
  const allFilled = filled.size >= round.target;

  const tapSlice = useCallback((i: number) => {
    if (revealed || filled.has(i) || filled.size >= round.target) return;
    setFilled(prev => new Set([...prev, i]));
  }, [revealed, filled, round.target]);

  const handleReveal = useCallback(() => setRevealed(true), []);

  const handleNext = useCallback(() => {
    if (roundIdx + 1 >= TEACH_ROUNDS.length) {
      onDone();
    } else {
      setRoundIdx(r => r + 1);
      setFilled(new Set());
      setRevealed(false);
    }
  }, [roundIdx, onDone]);

  const cx = 60, cy = 60, r = 50;

  return (
    <div className="flex flex-col gap-3 w-full max-w-sm mx-auto items-center">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-lg font-black text-white/90">{lbl.teachTitle}</h3>
        <p className="text-white/50 text-xs font-medium mt-1">{lbl.teachIntro}</p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-2">
        {TEACH_ROUNDS.map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full"
            style={{ background: i < roundIdx ? "#00FF88" : i === roundIdx ? color : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>

      {/* Instruction */}
      <p className="text-white/50 text-xs font-bold text-center">{lbl.teachStep1}</p>

      {/* Interactive Pizza */}
      <motion.div key={roundIdx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl p-5 flex items-center justify-center"
        style={{ background: `${color}10`, border: `1.5px solid ${color}30` }}>
        <svg width={120} height={120} viewBox="0 0 120 120" fill="none">
          {Array.from({ length: round.den }, (_, i) => {
            const startA = (i / round.den) * 2 * Math.PI - Math.PI / 2;
            const endA = ((i + 1) / round.den) * 2 * Math.PI - Math.PI / 2;
            const isFilled = filled.has(i);
            return (
              <motion.path key={i}
                d={pizzaSector(cx, cy, r, startA, endA)}
                fill={isFilled ? color : "rgba(255,255,255,0.07)"}
                stroke="rgba(255,255,255,0.22)" strokeWidth={1.5}
                onClick={() => tapSlice(i)}
                style={{ cursor: !isFilled && filled.size < round.target ? "pointer" : "default" }}
                animate={isFilled ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.2 }}
              />
            );
          })}
          <circle cx={cx} cy={cy} r={3.5} fill="rgba(255,255,255,0.35)" />
        </svg>
      </motion.div>

      {/* Tap hint or counter */}
      {!allFilled ? (
        <p className="text-white/60 text-xs font-bold text-center">{lbl.teachTap}</p>
      ) : (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2 items-center w-full">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black" style={{ color }}>
              {round.target} {lbl.teachOf} {round.den}
            </span>
            <span className="text-white/50 text-sm font-bold">{lbl.teachFilled}</span>
          </div>

          {!revealed ? (
            <motion.button onClick={handleReveal}
              className="w-full py-3 rounded-2xl font-black text-white text-sm"
              style={{ background: `${color}22`, border: `2px solid ${color}55` }}
              whileTap={{ scale: 0.97 }}>
              {lbl.teachSo}
            </motion.button>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col gap-2 items-center w-full">
              <div className="w-full rounded-2xl px-5 py-4"
                style={{ background: "rgba(0,255,136,0.08)", border: "2px solid rgba(0,255,136,0.3)" }}>
                <p className="text-white/50 text-xs font-bold text-center mb-1">{lbl.teachRule}</p>
                <p className="text-center text-3xl font-black" style={{ color: "#00FF88" }}>
                  {round.target}/{round.den}
                </p>
              </div>

              <motion.button onClick={handleNext}
                className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${color}55, ${color}99)`, border: `2px solid ${color}` }}
                whileTap={{ scale: 0.97 }}>
                {roundIdx + 1 >= TEACH_ROUNDS.length ? lbl.teachReady : lbl.teachNext} <ChevronRight size={16} />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
const FractionVisual = memo(function FractionVisual({ color, onDone, onCorrect, onWrong, lang = "en" }: {
  color: string; onDone: (score: number, total: number) => void;
  onCorrect?: () => void; onWrong?: () => void; lang?: string;
}) {
  const lbl = LABELS[lang] ?? LABELS.en;
  const [teachDone, setTeachDone] = useState(false);
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

  // Teaching phase first
  if (!teachDone) {
    return <TeachingPhase color={color} lang={lang} onDone={() => setTeachDone(true)} />;
  }

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
