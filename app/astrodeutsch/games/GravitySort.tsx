"use client";
// GravitySort for AstroDeutsch — tap items in the correct order
// Each round uses a question's answer and distractors to form a sort challenge.
// For German learning: sort words/phrases alphabetically, or order sentence parts.

import { memo, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { MathQuestion } from "@/lib/mathCurriculum";
import { SpeakButton } from "@/lib/astromath-tts";

// ─── Labels ───────────────────────────────────────────────────────────────────
const LABELS: Record<string, Record<string, string>> = {
  de: {
    hint: "Tippe in der richtigen Reihenfolge!",
    correct: "Richtig! ✓",
    wrong: "Falsch!",
    correctOrder: "Richtige Reihenfolge:",
    round: "Runde",
    of: "von",
    done: "Fertig!",
  },
  en: {
    hint: "Tap in the correct order!",
    correct: "Correct! ✓",
    wrong: "Wrong!",
    correctOrder: "Correct order:",
    round: "Round",
    of: "of",
    done: "Done!",
  },
  hu: {
    hint: "Koppints a helyes sorrendben!",
    correct: "Helyes! ✓",
    wrong: "Téves!",
    correctOrder: "Helyes sorrend:",
    round: "Forduló",
    of: "/",
    done: "Kész!",
  },
  ro: {
    hint: "Atinge în ordinea corectă!",
    correct: "Corect! ✓",
    wrong: "Greșit!",
    correctOrder: "Ordinea corectă:",
    round: "Rundă",
    of: "din",
    done: "Gata!",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Build a sort round from a MathQuestion.
 *
 * Strategy: Take the question text as the "context" prompt, use the
 * options (shuffled) as the items to sort, and the correctAnswer as the
 * item that must come FIRST (or in its natural alphabetical/given position).
 *
 * For German grammar questions the options are typically 4 answer choices.
 * We sort them alphabetically (case-insensitive) as the "correct" ordering —
 * a well-known, learner-accessible rule. The correct answer from the question
 * becomes the expected first element when correct answer is alphabetically first,
 * otherwise we sort all options and the player taps them A→Z.
 */
interface SortRound {
  prompt: string;           // question text shown above items
  items: string[];          // shuffled display order
  sorted: string[];         // correct tap order (alphabetical)
}

function buildSortRound(q: MathQuestion): SortRound {
  const opts = (q.options ?? []).map(String).filter(Boolean);

  // Deduplicate and take up to 5 items
  const unique = [...new Set(opts)].slice(0, 5);

  // If fewer than 2 options, fall back to answer + dummy
  if (unique.length < 2) {
    const fallback = [String(q.correctAnswer), "—"];
    return { prompt: q.question, items: shuffle(fallback), sorted: fallback };
  }

  // Correct ordering: alphabetical (locale-aware, case-insensitive)
  const sorted = [...unique].sort((a, b) =>
    a.localeCompare(b, "de", { sensitivity: "base" })
  );

  return { prompt: q.question, items: shuffle(unique), sorted };
}

// ─── Component ────────────────────────────────────────────────────────────────
const GravitySort = memo(function GravitySort({
  questions,
  color,
  onDone,
  lang = "de",
}: {
  questions: MathQuestion[];
  color: string;
  onDone: (score: number, total: number) => void;
  onCorrect?: () => void;
  onWrong?: () => void;
  lang?: string;
}) {
  const t = LABELS[lang] ?? LABELS.de;
  const ROUNDS = Math.min(5, questions.length);

  // Pre-build all rounds once from the questions prop
  const rounds = useMemo<SortRound[]>(() => {
    const pool = shuffle([...questions]).slice(0, ROUNDS);
    return pool.map(buildSortRound);
  }, [questions, ROUNDS]);

  const [round, setRound] = useState(0);
  const [tapped, setTapped] = useState<number[]>([]); // indices of items in display order
  const [correct, setCorrect] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const roundData = rounds[round];

  const tap = useCallback((displayIdx: number) => {
    if (feedback || tapped.includes(displayIdx) || !roundData) return;

    const newTapped = [...tapped, displayIdx];
    setTapped(newTapped);

    if (newTapped.length === roundData.items.length) {
      // Check order: map tapped display indices → actual item strings
      const userOrder = newTapped.map((i) => roundData.items[i]);
      const isCorrect = userOrder.every((s, i) => s === roundData.sorted[i]);
      const newCorrect = isCorrect ? correct + 1 : correct;
      setFeedback(isCorrect ? "correct" : "wrong");
      setCorrect(newCorrect);

      setTimeout(() => {
        const nextRound = round + 1;
        if (nextRound >= ROUNDS) {
          onDone(newCorrect, ROUNDS);
        } else {
          setRound(nextRound);
          setTapped([]);
          setFeedback(null);
        }
      }, 950);
    }
  }, [feedback, tapped, roundData, correct, round, ROUNDS, onDone]);

  if (!roundData) return null;

  return (
    <div className="flex flex-col gap-5 w-full max-w-sm mx-auto items-center">
      {/* Progress bar — one segment per round */}
      <div className="flex gap-1.5 w-full">
        {Array.from({ length: ROUNDS }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-2 rounded-full transition-colors"
            style={{
              background:
                i < round
                  ? "#00FF88"
                  : i === round
                  ? color
                  : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
      </div>

      {/* Round counter */}
      <div className="flex items-center justify-between w-full px-1">
        <span className="text-xs font-bold text-white/50">
          {t.round} {round + 1} {t.of} {ROUNDS}
        </span>
        <span className="text-xs font-black" style={{ color }}>
          ⭐ {correct}
        </span>
      </div>

      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-white/60 px-2">
        {t.hint}
      </p>

      {/* Prompt / question context */}
      <AnimatePresence mode="wait">
        <motion.div
          key={round}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="w-full rounded-2xl px-4 py-3 flex items-center justify-center gap-2"
          style={{
            background: `${color}12`,
            border: `1.5px solid ${color}30`,
            minHeight: 60,
          }}
        >
          <p className="text-white/80 text-sm font-semibold text-center leading-snug">
            {roundData.prompt}
          </p>
          <SpeakButton text={roundData.prompt} lang={lang === "de" ? "de" : "en"} size={13} />
        </motion.div>
      </AnimatePresence>

      {/* Tappable items */}
      <div className="flex gap-2 flex-wrap justify-center w-full">
        {roundData.items.map((item, displayIdx) => {
          const tapOrder = tapped.indexOf(displayIdx); // -1 if not yet tapped
          const isTapped = tapOrder >= 0;

          let bg = "rgba(255,255,255,0.07)";
          let border = "rgba(255,255,255,0.15)";
          let textColor = "rgba(255,255,255,0.75)";

          if (isTapped) {
            if (feedback === "correct") {
              bg = "rgba(0,255,136,0.22)";
              border = "#00FF88";
              textColor = "#00FF88";
            } else if (feedback === "wrong") {
              bg = "rgba(255,50,50,0.18)";
              border = "#FF4444";
              textColor = "#FF6666";
            } else {
              bg = `${color}28`;
              border = color;
              textColor = "#fff";
            }
          }

          return (
            <motion.button
              key={displayIdx}
              onClick={() => tap(displayIdx)}
              className="relative px-3 py-3 rounded-xl font-black text-sm flex items-center justify-center"
              style={{
                background: bg,
                border: `2.5px solid ${border}`,
                color: textColor,
                opacity: isTapped && !feedback ? 0.75 : 1,
                minWidth: 64,
                maxWidth: 140,
              }}
              whileTap={!isTapped && !feedback ? { scale: 0.88 } : {}}
            >
              {item}
              {/* Order badge */}
              {isTapped && (
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center"
                  style={{ background: feedback ? (feedback === "correct" ? "#00FF88" : "#FF4444") : color, color: "#fff" }}
                >
                  {tapOrder + 1}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Correct order hint — shown only on wrong answer */}
      <AnimatePresence>
        {feedback === "wrong" && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-1.5"
          >
            <p className="text-white/40 text-xs font-semibold">{t.correctOrder}</p>
            <div className="flex gap-1.5 flex-wrap justify-center">
              {roundData.sorted.map((s, i) => (
                <span key={i} className="text-white/60 font-bold text-xs bg-white/10 px-2 py-1 rounded-lg">
                  {i + 1}. {s}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback label */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-xl font-black"
            style={{ color: feedback === "correct" ? "#00FF88" : "#FF6666" }}
          >
            {feedback === "correct" ? t.correct : t.wrong}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default GravitySort;
