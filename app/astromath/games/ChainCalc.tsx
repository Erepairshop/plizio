"use client";
// ChainCalc — Kettenrechnen challenge for Grade 4
// 3-step chain: [start] →op1→ [mid1] →op2→ [■] →op3→ [?]
// The second intermediate is hidden — user must compute 2 steps mentally
// 7 rounds, larger numbers

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const rand = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = rand(0, i); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function pick<T>(arr: T[]): T { return arr[rand(0, arr.length - 1)]; }

// ─── Types ────────────────────────────────────────────────────────────────────
interface Op { sym: "×" | "÷" | "+" | "−"; n: number }
interface Chain {
  start: number;
  op1: Op;
  mid1: number;   // visible
  op2: Op;
  mid2: number;   // HIDDEN (■)
  op3: Op;
  result: number; // this is what user must find
  options: number[];
}

// ─── Chain generator ──────────────────────────────────────────────────────────
function generateChain(topicKeys: string[]): Chain {
  const hasDiv = topicKeys.includes("div");
  const hasMul = topicKeys.includes("mul") || topicKeys.includes("place") || topicKeys.includes("place1k");

  // Step 1: mul or div → gives a clean mid1
  let start: number, op1: Op, mid1: number;
  const mulFactors = [2, 3, 4, 5, 6, 7, 8, 9];

  if (hasDiv && Math.random() < 0.35) {
    // Divide: start = divisor × quotient, mid1 = quotient
    const divisor = pick([2, 3, 4, 5, 6, 8]);
    const quotient = rand(5, 25);
    start = divisor * quotient;
    op1 = { sym: "÷", n: divisor };
    mid1 = quotient;
  } else {
    // Multiply: start small → mid1 larger
    const factor = pick(mulFactors);
    start = rand(5, 20);
    op1 = { sym: "×", n: factor };
    mid1 = start * factor;
  }

  // Step 2: +/− with a larger number → hidden result (mid2)
  const op2Add = Math.random() > 0.45;
  const op2n = rand(10, Math.min(50, op2Add ? 200 : mid1 - 5));
  const op2: Op = { sym: op2Add ? "+" : "−", n: op2n };
  const mid2 = op2Add ? mid1 + op2n : mid1 - op2n;

  // Step 3: +/− small-medium → final result
  const op3Add = Math.random() > 0.45;
  const op3n = rand(5, 30);
  const result = op3Add ? mid2 + op3n : mid2 - op3n;
  const op3: Op = { sym: op3Add ? "+" : "−", n: op3n };

  // Ensure result > 0; if not, regenerate (simple fallback)
  if (result <= 0 || mid2 <= 0) {
    return generateChain(topicKeys);
  }

  // Close distractors: force real mental calculation
  const offsets = shuffle([-1, 1, -2, 2, -5, 5, -10, 10, -3, 3]);
  const opts = new Set([result]);
  for (const off of offsets) {
    if (opts.size >= 4) break;
    const o = result + off;
    if (o > 0 && o !== result) opts.add(o);
  }
  while (opts.size < 4) opts.add(result + opts.size * 11);

  return { start, op1, mid1, op2, mid2, op3, result, options: shuffle([...opts]) };
}

function generateChains(topicKeys: string[], count = 7): Chain[] {
  return Array.from({ length: count }, () => generateChain(topicKeys));
}

// ─── Translations ─────────────────────────────────────────────────────────────
const L: Record<string, Record<string, string>> = {
  en: { title: "Chain Calculation!", instruction: "The ■ is hidden — calculate all steps!",
        correct: "Correct! ✓", wrong: "Not quite…", next: "Next", done: "Brilliant! ✨",
        hiddenHint: "■ = ?" },
  hu: { title: "Láncszámítás!", instruction: "A ■ rejtett — számold ki az összes lépést!",
        correct: "Helyes! ✓", wrong: "Nem egészen…", next: "Következő", done: "Fantasztikus! ✨",
        hiddenHint: "■ = ?" },
  de: { title: "Kettenrechnen!", instruction: "■ ist verborgen — rechne alle Schritte!",
        correct: "Richtig! ✓", wrong: "Nicht ganz…", next: "Weiter", done: "Fantastisch! ✨",
        hiddenHint: "■ = ?" },
  ro: { title: "Calcul în lanț!", instruction: "■ este ascuns — calculează toți pașii!",
        correct: "Corect! ✓", wrong: "Nu chiar…", next: "Înainte", done: "Fantastic! ✨",
        hiddenHint: "■ = ?" },
};

// ─── Chain Node ───────────────────────────────────────────────────────────────
function ChainNode({ value, isResult, isHidden, color, answered, correct }: {
  value: number | "?" | "■"; isResult?: boolean; isHidden?: boolean; color: string;
  answered?: boolean; correct?: boolean;
}) {
  const isQuestion = value === "?";
  const bg = answered && isQuestion
    ? (correct ? "rgba(0,255,136,0.2)" : "rgba(255,100,100,0.15)")
    : isHidden ? `${color}10`
    : isQuestion ? `${color}18`
    : "rgba(255,255,255,0.08)";

  const border = answered && isQuestion
    ? (correct ? "#00FF88" : "#FF6B6B")
    : isHidden ? `${color}40`
    : isQuestion ? color
    : "rgba(255,255,255,0.2)";

  const textColor = isHidden ? `${color}70`
    : isQuestion ? color
    : "rgba(255,255,255,0.92)";

  return (
    <motion.div
      className="flex items-center justify-center rounded-2xl font-black text-2xl min-w-[48px] h-13 px-2.5"
      style={{ background: bg, border: `2.5px ${isQuestion || isHidden ? "dashed" : "solid"} ${border}`, color: textColor, minHeight: "52px" }}
      animate={isQuestion && !answered ? {
        boxShadow: [`0 0 0px ${color}00`, `0 0 12px ${color}60`, `0 0 0px ${color}00`],
      } : {}}
      transition={isQuestion && !answered ? { duration: 1.6, repeat: Infinity } : {}}>
      {value}
    </motion.div>
  );
}

// ─── Arrow ────────────────────────────────────────────────────────────────────
function Arrow({ op, color }: { op: Op; color: string }) {
  return (
    <div className="flex items-center gap-0.5 shrink-0">
      <div className="w-2 h-0.5 rounded-full" style={{ background: `${color}50` }} />
      <div className="flex flex-col items-center -mx-0.5">
        <span className="text-[10px] font-black leading-none" style={{ color }}>
          {op.sym}{op.n}
        </span>
        <span className="text-white/20 text-xs leading-none">→</span>
      </div>
      <div className="w-2 h-0.5 rounded-full" style={{ background: `${color}50` }} />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const ChainCalc = memo(function ChainCalc({
  topicKeys, color, onDone, lang = "en",
}: {
  topicKeys: string[]; color: string;
  onDone: (score: number, total: number) => void; lang?: string;
}) {
  const t = L[lang] ?? L.en;
  const [chains] = useState(() => generateChains(topicKeys));
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const chain = chains[idx];
  const answered = selected !== null;
  const isCorrect = selected === chain.result;

  const handleSelect = (opt: number) => {
    if (answered) return;
    setSelected(opt);
    if (opt === chain.result) setScore(s => s + 1);
  };

  const handleNext = useCallback(() => {
    const addedScore = isCorrect ? 1 : 0;
    if (idx + 1 >= chains.length) { onDone(score + addedScore, chains.length); return; }
    setSelected(null);
    setIdx(i => i + 1);
  }, [idx, chains.length, onDone, score, isCorrect]);

  const resultDisplay: number | "?" = answered ? chain.result : "?";
  const mid2Display: number | "■" = answered ? chain.mid2 : "■";

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {chains.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Title + instruction */}
      <div className="text-center">
        <p className="text-base font-black" style={{ color }}>{t.title}</p>
        <p className="text-xs text-white/50 mt-0.5">{t.instruction}</p>
      </div>

      {/* Chain visual — 3 steps */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
          className="flex items-center justify-center gap-1 py-4 px-2 rounded-2xl overflow-x-auto"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <ChainNode value={chain.start} color={color} />
          <Arrow op={chain.op1} color={color} />
          <ChainNode value={chain.mid1} color={color} />
          <Arrow op={chain.op2} color={color} />
          <ChainNode value={mid2Display} isHidden={!answered} color={color} answered={answered} />
          <Arrow op={chain.op3} color={color} />
          <ChainNode value={resultDisplay} isResult color={color} answered={answered} correct={isCorrect} />
        </motion.div>
      </AnimatePresence>

      {/* MCQ options */}
      <div className="grid grid-cols-2 gap-2">
        {chain.options.map((opt) => {
          const isSelected = selected === opt;
          const showCorrect = answered && opt === chain.result;
          const showWrong   = answered && isSelected && opt !== chain.result;
          return (
            <motion.button key={opt}
              onClick={() => handleSelect(opt)}
              disabled={answered}
              className="py-4 rounded-2xl font-black text-xl"
              style={{
                background: showCorrect ? "rgba(0,255,136,0.2)" : showWrong ? "rgba(255,80,80,0.15)" :
                            isSelected  ? `${color}20` : "rgba(255,255,255,0.07)",
                border: `2px solid ${showCorrect ? "#00FF88" : showWrong ? "#FF6B6B" :
                         isSelected ? color : "rgba(255,255,255,0.15)"}`,
                color: showCorrect ? "#00FF88" : showWrong ? "#FF6B6B" :
                       isSelected ? color : "rgba(255,255,255,0.85)",
              }}
              whileTap={!answered ? { scale: 0.94 } : {}}>
              {opt}
            </motion.button>
          );
        })}
      </div>

      {/* Feedback + next */}
      <AnimatePresence>
        {answered && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2">
            <p className="text-center font-black text-sm"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect
                ? t.correct
                : `${t.wrong}  ■=${chain.mid2}, ${chain.mid2}${chain.op3.sym}${chain.op3.n}=${chain.result}`}
            </p>
            <motion.button onClick={handleNext}
              className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
              style={{ background: `linear-gradient(135deg, ${color}50, ${color}90)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= chains.length ? t.done : t.next} <ChevronRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default ChainCalc;
