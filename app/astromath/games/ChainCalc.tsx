"use client";
// ChainCalc — Kettenrechnen challenge for Grade 4
// Shows a chain: [start] →×8→ [32] →+5→ [?]  — pick the final result from 4 options
// 5 rounds, each with 2 operations

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

// ─── Types ────────────────────────────────────────────────────────────────────
interface Op { sym: "×" | "÷" | "+" | "−"; n: number }
interface Chain {
  start: number;
  op1: Op;
  mid: number;
  op2: Op;
  result: number;
  options: number[];
}

// ─── Chain generator ──────────────────────────────────────────────────────────
function generateChain(topicKeys: string[]): Chain {
  const hasDiv = topicKeys.includes("div");
  const hasMul = topicKeys.includes("mul");

  let start: number, op1: Op, mid: number, op2: Op, result: number;

  // Decide first operation
  const useDiv = hasDiv && !hasMul;

  if (useDiv) {
    // Divide first: guaranteed exact
    const b = rand(2, 9), c = rand(2, 9);
    start = b * c;
    op1 = { sym: "÷", n: b };
    mid = c;
  } else {
    // Multiply first
    const a = rand(2, 9), b = rand(2, 9);
    start = a;
    op1 = { sym: "×", n: b };
    mid = a * b;
  }

  // Second operation: always + or −, small number
  const c = rand(1, Math.min(15, mid - 1));
  const addOrSub = Math.random() > 0.4 ? "+" : "−";
  op2 = { sym: addOrSub as "+" | "−", n: c };
  result = addOrSub === "+" ? mid + c : mid - c;

  // Build 4 distinct options
  const opts = new Set([result]);
  const offsets = shuffle([-1, 1, -2, 2, -3, 3, -5, 5, -10, 10]);
  for (const off of offsets) {
    if (opts.size >= 4) break;
    const o = result + off;
    if (o > 0) opts.add(o);
  }
  // Fallback: ensure 4 options
  for (let i = 1; opts.size < 4; i++) opts.add(result + i * 7);

  return { start, op1, mid, op2, result, options: shuffle([...opts]) };
}

function generateChains(topicKeys: string[], count = 5): Chain[] {
  return Array.from({ length: count }, () => generateChain(topicKeys));
}

// ─── Translations ─────────────────────────────────────────────────────────────
const L: Record<string, Record<string, string>> = {
  en: { title: "Chain Calculation!", instruction: "Follow the chain and find the final result!",
        correct: "Correct! ✓", wrong: "Not quite…", next: "Next", done: "Brilliant! ✨" },
  hu: { title: "Láncszámítás!", instruction: "Kövesd a láncot és találd meg a végeredményt!",
        correct: "Helyes! ✓", wrong: "Nem egészen…", next: "Következő", done: "Fantasztikus! ✨" },
  de: { title: "Kettenrechnen!", instruction: "Folge der Kette und finde das Ergebnis!",
        correct: "Richtig! ✓", wrong: "Nicht ganz…", next: "Weiter", done: "Fantastisch! ✨" },
  ro: { title: "Calcul în lanț!", instruction: "Urmează lanțul și găsește rezultatul!",
        correct: "Corect! ✓", wrong: "Nu chiar…", next: "Înainte", done: "Fantastic! ✨" },
};

// ─── Chain Node ───────────────────────────────────────────────────────────────
function ChainNode({
  value, isResult, color, answered, correct,
}: {
  value: number | "?"; isResult?: boolean; color: string;
  answered?: boolean; correct?: boolean;
}) {
  const isQuestion = value === "?";
  return (
    <motion.div
      className="flex items-center justify-center rounded-2xl font-black text-2xl min-w-[52px] h-14 px-3"
      style={{
        background: answered && isQuestion ? (correct ? "rgba(0,255,136,0.2)" : "rgba(255,100,100,0.15)") :
                    isQuestion ? `${color}18` : "rgba(255,255,255,0.08)",
        border: `2.5px ${isQuestion ? "dashed" : "solid"} ${
          answered && isQuestion ? (correct ? "#00FF88" : "#FF6B6B") :
          isQuestion ? color : "rgba(255,255,255,0.2)"
        }`,
        color: isQuestion ? color : "rgba(255,255,255,0.92)",
      }}
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
    <div className="flex items-center gap-0.5">
      <div className="w-3 h-0.5 rounded-full" style={{ background: `${color}50` }} />
      <div className="flex flex-col items-center -mx-0.5">
        <span className="text-[11px] font-black leading-none" style={{ color }}>
          {op.sym}{op.n}
        </span>
        <span className="text-white/20 text-xs leading-none">→</span>
      </div>
      <div className="w-3 h-0.5 rounded-full" style={{ background: `${color}50` }} />
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

  const next = useCallback(() => {
    setSelected(null);
    if (idx + 1 >= chains.length) { onDone(score + (isCorrect ? 0 : 0), chains.length); return; }
    setIdx(i => i + 1);
  }, [idx, chains.length, onDone, score, isCorrect]);

  // separate done call to capture final score
  const handleNext = useCallback(() => {
    const finalScore = score + (isCorrect ? 0 : 0); // already added in handleSelect
    if (idx + 1 >= chains.length) { onDone(score, chains.length); return; }
    setSelected(null);
    setIdx(i => i + 1);
  }, [idx, chains.length, onDone, score, isCorrect]);

  // Show the result value in the ? node after answering
  const resultDisplay: number | "?" = answered ? chain.result : "?";

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

      {/* Chain visual */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
          className="flex items-center justify-center gap-1 py-4 px-2 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <ChainNode value={chain.start} color={color} />
          <Arrow op={chain.op1} color={color} />
          <ChainNode value={chain.mid} color={color} />
          <Arrow op={chain.op2} color={color} />
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
            <p className="text-center font-black text-base"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? t.correct : `${t.wrong}  ${chain.start} ${chain.op1.sym}${chain.op1.n} = ${chain.mid}, ${chain.mid} ${chain.op2.sym}${chain.op2.n} = ${chain.result}`}
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
