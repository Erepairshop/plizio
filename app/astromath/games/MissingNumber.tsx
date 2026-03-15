"use client";
// MissingNumber — "Was fehlt?" challenge for Grade 4
// Shows equation with a glowing ? box — find the missing number
// Supports: div (multiplication/division inverses), units (conversions)
// 8 questions, MCQ 4 options

import { memo, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SpeakButton } from "@/lib/astromath-tts";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const rand = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = rand(0, i); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function uniqueOptions(correct: number, candidates: number[]): number[] {
  const opts = new Set([correct]);
  for (const c of shuffle(candidates)) { if (opts.size >= 4) break; if (c > 0) opts.add(c); }
  for (let i = 1; opts.size < 4; i++) opts.add(correct + i * 3);
  return shuffle([...opts]);
}

// ─── Types ────────────────────────────────────────────────────────────────────
interface MNQuestion {
  // The three parts of the equation displayed as: left OP mid = right
  // One of them is the "?" (the answer)
  parts: [string, string, string, string, string]; // [left, ×/÷, mid, =, right]
  questionSlot: 0 | 2 | 4;  // index in parts that is "?"
  answer: number;
  options: number[];
}

// ─── Generators ───────────────────────────────────────────────────────────────
function mulDivQuestion(): MNQuestion {
  const a = rand(2, 9), b = rand(2, 9);
  const product = a * b;

  const type = rand(0, 3); // 0: ?×b=p, 1: a×?=p, 2: p÷?=a, 3: p÷b=?
  let parts: [string, string, string, string, string];
  let answer: number;
  let candidates: number[];

  if (type === 0) {
    // ? × b = product
    parts = ["?", "×", String(b), "=", String(product)];
    answer = a;
    candidates = [a - 1, a + 1, a - 2, a + 2, b, product];
  } else if (type === 1) {
    // a × ? = product
    parts = [String(a), "×", "?", "=", String(product)];
    answer = b;
    candidates = [b - 1, b + 1, b - 2, b + 2, a, product];
  } else if (type === 2) {
    // product ÷ ? = a
    parts = [String(product), "÷", "?", "=", String(a)];
    answer = b;
    candidates = [b - 1, b + 1, b + 2, a, a - 1, a + 1];
  } else {
    // product ÷ b = ?
    parts = [String(product), "÷", String(b), "=", "?"];
    answer = a;
    candidates = [a - 1, a + 1, a - 2, a + 2, b, product - a];
  }

  return { parts, questionSlot: parts.indexOf("?") as 0 | 2 | 4, answer, options: uniqueOptions(answer, candidates) };
}

const UNIT_CONVS = [
  { from: "km", to: "m",   mult: 1000 },
  { from: "m",  to: "cm",  mult: 100  },
  { from: "kg", to: "g",   mult: 1000 },
  { from: "h",  to: "min", mult: 60   },
  { from: "l",  to: "ml",  mult: 1000 },
];

function unitQuestion(): MNQuestion {
  const conv = UNIT_CONVS[rand(0, UNIT_CONVS.length - 1)];
  const n = rand(1, 9);
  const total = n * conv.mult;

  // 50/50: find the converted value OR find the original
  if (Math.random() > 0.5) {
    // n [from] = ? [to]
    const parts: [string, string, string, string, string] = [
      `${n} ${conv.from}`, "=", "?", conv.to, "",
    ];
    // For display we'll use a 3-part format: "5 km = ? m"
    const wrongMult = conv.mult === 60 ? 6 : conv.mult / 10;
    const candidates = [n * wrongMult, total + conv.mult, total - conv.mult, n];
    return {
      parts: [`${n} ${conv.from}`, "=", "?", conv.to, ""],
      questionSlot: 2,
      answer: total,
      options: uniqueOptions(total, candidates),
    };
  } else {
    // ? [from] = total [to]
    const wrongN = [n + 1, n - 1, n * 10, n + 2].filter(x => x > 0);
    return {
      parts: ["?", conv.from, "=", `${total} ${conv.to}`, ""],
      questionSlot: 0,
      answer: n,
      options: uniqueOptions(n, wrongN),
    };
  }
}

// ─── G1 generators ────────────────────────────────────────────────────────────
function g1AddSubQuestion(max: number): MNQuestion {
  const type = rand(0, 3);
  let parts: [string, string, string, string, string];
  let answer: number;

  if (type === 0) {
    // a + ? = sum
    const a = rand(1, max - 1), b = rand(1, max - a);
    parts = [String(a), "+", "?", "=", String(a + b)];
    answer = b;
  } else if (type === 1) {
    // ? + b = sum
    const b = rand(1, max - 1), a = rand(1, max - b);
    parts = ["?", "+", String(b), "=", String(a + b)];
    answer = a;
  } else if (type === 2) {
    // a − ? = result
    const a = rand(2, max), b = rand(1, a - 1);
    parts = [String(a), "−", "?", "=", String(a - b)];
    answer = b;
  } else {
    // ? − b = result
    const b = rand(1, max - 2), result = rand(1, max - b);
    const a = result + b;
    if (a > max) return g1AddSubQuestion(max);
    parts = ["?", "−", String(b), "=", String(result)];
    answer = a;
  }
  const candidates = [answer - 1, answer + 1, answer - 2, answer + 2].filter(v => v > 0 && v <= max + 2);
  return { parts, questionSlot: parts.indexOf("?") as 0 | 2 | 4, answer, options: uniqueOptions(answer, candidates) };
}

function g1VerdoppelnQuestion(): MNQuestion {
  const n = rand(1, 9);
  const answer = n * 2;
  const candidates = [answer - 2, answer - 1, answer + 1, answer + 2].filter(v => v > 0);
  return {
    parts: [String(n), "+", String(n), "=", "?"],
    questionSlot: 4,
    answer,
    options: uniqueOptions(answer, candidates),
  };
}

function g1ErgaenzenQuestion(): MNQuestion {
  // ? + b = 10  or  a + ? = 10
  const b = rand(1, 9);
  const a = 10 - b;
  const type = rand(0, 1);
  const answer = type === 0 ? a : b;
  const parts: [string, string, string, string, string] = type === 0
    ? ["?", "+", String(b), "=", "10"]
    : [String(a), "+", "?", "=", "10"];
  const candidates = [answer - 1, answer + 1, answer - 2, answer + 2].filter(v => v > 0 && v < 10);
  return { parts, questionSlot: type === 0 ? 0 : 2, answer, options: uniqueOptions(answer, candidates) };
}

function generateQuestions(topicKeys: string[], count = 8): MNQuestion[] {
  // G1 detection — all G1 island topic keys
  const ALL_G1_KEYS = [
    "add10", "add20", "sub10", "sub20",
    "g1_tausch", "g1_zahlzerlegung", "g1_ergaenzen", "g1_verdoppeln", "g1_halbieren",
    "g1_count", "g1_compare", "g1_pos", "g1_visual", "g1_fraction",
    "g1_num1120", "g1_place_value20", "g1_sequence", "g1_data",
    "g1_shapes", "g1_spatial", "g1_pattern",
    "g1_clock", "g1_coins", "g1_weight", "g1_volume", "g1_laenger", "g1_wochentage",
    "word",
  ];
  const isG1 = topicKeys.some(k => ALL_G1_KEYS.includes(k));

  if (isG1) {
    const max = topicKeys.some(k =>
      k.includes("20") || k === "g1_sequence" || k === "g1_data" ||
      k === "g1_num1120" || k === "g1_place_value20"
    ) ? 20 : 10;
    const hasVerd = topicKeys.some(k => ["g1_verdoppeln", "g1_halbieren"].includes(k));
    const hasErg  = topicKeys.some(k => k === "g1_ergaenzen");
    const gens: (() => MNQuestion)[] = [() => g1AddSubQuestion(max)];
    if (hasVerd) gens.push(() => g1VerdoppelnQuestion());
    if (hasErg)  gens.push(() => g1ErgaenzenQuestion());
    return Array.from({ length: count }, () => gens[rand(0, gens.length - 1)]());
  }

  const hasUnits = topicKeys.some(k => k.includes("unit"));
  const gen = () => hasUnits ? (Math.random() > 0.3 ? unitQuestion() : mulDivQuestion()) : mulDivQuestion();
  return Array.from({ length: count }, gen);
}

// ─── Translations ─────────────────────────────────────────────────────────────
const L: Record<string, Record<string, string>> = {
  en: { title: "What's missing?", instruction: "Find the missing number!", correct: "Correct! ✓",
        wrong: "Not quite…", next: "Next", done: "Brilliant! ✨", answer: "Answer:" },
  hu: { title: "Mi hiányzik?", instruction: "Találd meg a hiányzó számot!", correct: "Helyes! ✓",
        wrong: "Nem egészen…", next: "Következő", done: "Fantasztikus! ✨", answer: "Válasz:" },
  de: { title: "Was fehlt?", instruction: "Finde die fehlende Zahl!", correct: "Richtig! ✓",
        wrong: "Nicht ganz…", next: "Weiter", done: "Fantastisch! ✨", answer: "Antwort:" },
  ro: { title: "Ce lipsește?", instruction: "Găsește numărul lipsă!", correct: "Corect! ✓",
        wrong: "Nu chiar…", next: "Înainte", done: "Fantastic! ✨", answer: "Răspuns:" },
};

// ─── Equation display ─────────────────────────────────────────────────────────
function EquationDisplay({
  parts, slot, color, answered, answer,
}: {
  parts: MNQuestion["parts"]; slot: number; color: string;
  answered: boolean; answer: number;
}) {
  // Build display parts: show "?" box for the slot, render others as text
  // Parts format varies: mul/div = 5 parts, units = compact
  const isUnitEq = parts[1] === "=" && (parts[0].includes(" ") || parts[2] === "?");

  const renderPart = (val: string, i: number) => {
    if (!val) return null;
    if (i === slot) {
      return (
        <motion.span key="qbox"
          className="inline-flex items-center justify-center min-w-[2.8rem] h-12 rounded-xl font-black text-2xl px-2"
          style={{
            background: answered ? "rgba(0,255,136,0.2)" : `${color}20`,
            border: `2px solid ${answered ? "#00FF88" : color}`,
            color: answered ? "#00FF88" : color,
          }}
          animate={!answered ? { boxShadow: [`0 0 0px ${color}00`, `0 0 14px ${color}70`, `0 0 0px ${color}00`] } : {}}
          transition={!answered ? { duration: 1.4, repeat: Infinity } : {}}>
          {answered ? answer : "?"}
        </motion.span>
      );
    }
    // Operator/equals: smaller
    if (val === "×" || val === "÷" || val === "=" || val === "+" || val === "−") {
      return <span key={i} className="text-2xl text-white/50 font-black mx-0.5">{val}</span>;
    }
    return <span key={i} className="text-2xl text-white/90 font-black">{val}</span>;
  };

  // Unit equations: compact "5 km = ? m" or "? km = 4000 m"
  if (isUnitEq) {
    return (
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {renderPart(parts[0], 0)}
        <span className="text-2xl text-white/50 font-black">=</span>
        {parts[2] === "?" ? renderPart("?", 2) : <span className="text-2xl text-white/90 font-black">{parts[2]}</span>}
        {parts[3] && <span className="text-xl text-white/70 font-bold">{parts[3]}</span>}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {parts.filter(Boolean).map((p, i) => renderPart(p, i))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const MissingNumber = memo(function MissingNumber({
  topicKeys, color, onDone, lang = "en",
}: {
  topicKeys: string[]; color: string;
  onDone: (score: number, total: number) => void; lang?: string;
}) {
  const t = L[lang] ?? L.en;
  const [qs] = useState(() => generateQuestions(topicKeys));
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const q = qs[idx];
  const answered = selected !== null;
  const isCorrect = selected === q.answer;

  const handleSelect = (opt: number) => {
    if (answered) return;
    setSelected(opt);
    if (opt === q.answer) setScore(s => s + 1);
  };

  const handleNext = useCallback(() => {
    setSelected(null);
    if (idx + 1 >= qs.length) { onDone(score, qs.length); return; }
    setIdx(i => i + 1);
  }, [idx, qs.length, onDone, score]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
      {/* Progress */}
      <div className="flex gap-1.5">
        {qs.map((_, i) => (
          <div key={i} className="flex-1 h-2 rounded-full"
            style={{ background: i < idx ? "#00FF88" : i === idx ? color : "rgba(255,255,255,0.12)" }} />
        ))}
      </div>

      {/* Title */}
      <div className="flex items-center justify-center gap-2">
        <div className="text-center">
          <p className="text-base font-black" style={{ color }}>{t.title}</p>
          <p className="text-xs text-white/50 mt-0.5">{t.instruction}</p>
        </div>
        <SpeakButton text={q.parts.filter(Boolean).map(p => p === "?" ? "..." : p).join(" ")} lang={lang} size={16} />
      </div>

      {/* Equation card */}
      <AnimatePresence mode="wait">
        <motion.div key={idx}
          initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="rounded-2xl py-8 px-4 flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <EquationDisplay parts={q.parts} slot={q.questionSlot} color={color}
            answered={answered} answer={q.answer} />
        </motion.div>
      </AnimatePresence>

      {/* MCQ options — 2×2 grid */}
      <div className="grid grid-cols-2 gap-2">
        {q.options.map(opt => {
          const isSelected = selected === opt;
          const showCorrect = answered && opt === q.answer;
          const showWrong   = answered && isSelected && opt !== q.answer;
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

      {/* Feedback + next button */}
      <AnimatePresence>
        {answered && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2">
            <p className="text-center font-black text-sm"
              style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
              {isCorrect ? t.correct : `${t.wrong}  ${t.answer} ${q.answer}`}
            </p>
            <motion.button onClick={handleNext}
              className="w-full py-3.5 rounded-2xl font-black text-white text-sm flex items-center justify-center gap-2"
              style={{ background: `linear-gradient(135deg, ${color}50, ${color}90)`, border: `2px solid ${color}` }}
              whileTap={{ scale: 0.97 }}>
              {idx + 1 >= qs.length ? t.done : t.next} <ChevronRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default MissingNumber;
