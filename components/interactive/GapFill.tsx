"use client";
import React, { useState, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Props ───────────────────────────────────────────────── */

interface Props {
  sentence: string;       // sentence with "___" placeholder, already resolved text
  choices: string[];      // 4 options (already resolved text)
  correctIndex: number;   // index of correct choice in the array
  color: string;
  instruction: string;    // already resolved label text
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Labels ─────────────────────────────────────────────── */

const L: Record<string, Record<string, string>> = {
  en: {
    fillTheGap: "Fill in the blank",
    great: "Great!",
    tryAgain: "Try again",
    correctAnswer: "Correct answer:",
  },
  de: {
    fillTheGap: "Fülle die Lücke",
    great: "Super!",
    tryAgain: "Nochmal!",
    correctAnswer: "Richtige Antwort:",
  },
  hu: {
    fillTheGap: "Töltsd ki az üres helyet",
    great: "Szuper!",
    tryAgain: "Próbáld újra!",
    correctAnswer: "Helyes válasz:",
  },
  ro: {
    fillTheGap: "Completează spațiul",
    great: "Excelent!",
    tryAgain: "Încearcă din nou!",
    correctAnswer: "Răspunsul corect:",
  },
};

/* ── helpers: split sentence around "___" ──────────────── */
function splitSentence(sentence: string): [string, string] {
  const gapIdx = sentence.indexOf("{gap}");
  if (gapIdx !== -1) return [sentence.slice(0, gapIdx), sentence.slice(gapIdx + 5)];
  const idx = sentence.indexOf("___");
  if (idx === -1) return [sentence, ""];
  return [sentence.slice(0, idx), sentence.slice(idx + 3)];
}

/* ── Component ──────────────────────────────────────────── */

function GapFill({
  sentence,
  choices,
  correctIndex,
  color,
  instruction,
  hint1,
  hint2,
  lang,
  onDone,
}: Props) {
  const t = L[lang] || L.en;
  const [before, after] = splitSentence(sentence);

  const [selected, setSelected] = useState<number | null>(null);
  const [wrongCount, setWrongCount] = useState(0);
  const [showHint, setShowHint] = useState("");
  const [solved, setSolved] = useState(false);
  const [shakeIdx, setShakeIdx] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<"correct" | "wrong" | null>(null);
  const doneCalledRef = useRef(false);

  /* gap fill state: null = empty, number = chosen index */
  const [filledWith, setFilledWith] = useState<number | null>(null);

  /* ── tap a choice ────────────────────────────────────── */
  const handleChoice = useCallback(
    (idx: number) => {
      if (solved) return;

      // fill the gap visually
      setFilledWith(idx);
      setSelected(idx);

      const isCorrect = idx === correctIndex;

      if (isCorrect) {
        setSolved(true);
        setShowHint("");
        setShowResult("correct");
        if (!doneCalledRef.current) {
          doneCalledRef.current = true;
          setTimeout(() => onDone(true), 1300);
        }
      } else {
        const newWrong = wrongCount + 1;
        setWrongCount(newWrong);
        setShowResult("wrong");
        setShakeIdx(idx);
        setTimeout(() => {
          setShowResult(null);
          setShakeIdx(null);
          setFilledWith(null);
          setSelected(null);
        }, 750);

        if (newWrong === 1) setShowHint(hint1);
        else if (newWrong === 2) setShowHint(hint2);
        else {
          // 3rd wrong → auto-solve
          setSolved(true);
          setFilledWith(correctIndex);
          setSelected(correctIndex);
          setShowResult("correct");
          if (!doneCalledRef.current) {
            doneCalledRef.current = true;
            setTimeout(() => onDone(false), 1800);
          }
        }
      }
    },
    [solved, correctIndex, wrongCount, hint1, hint2, onDone]
  );

  /* ── gap display ─────────────────────────────────────── */
  const gapText = filledWith !== null ? choices[filledWith] : null;
  const gapCorrect = solved && filledWith === correctIndex;
  const gapWrong = showResult === "wrong" && filledWith !== null;

  /* ── render ──────────────────────────────────────────── */
  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto select-none">
      {/* instruction */}
      <p className="text-sm font-bold text-center text-white/80 px-4">
        {instruction || t.fillTheGap}
      </p>

      {/* sentence display with gap */}
      <div
        className="w-full rounded-2xl px-4 py-4 text-center text-base font-semibold leading-relaxed"
        style={{ background: `${color}12`, border: `1px solid ${color}25` }}
      >
        <span className="text-white/90">{before}</span>

        {/* the gap itself */}
        <motion.span
          layout
          className="inline-flex items-center justify-center mx-1 px-2 py-0.5 rounded-lg font-extrabold text-sm min-w-[48px]"
          style={
            gapCorrect
              ? {
                  background: "rgba(0,220,100,0.22)",
                  border: "2px solid rgba(0,220,100,0.6)",
                  color: "#4ade80",
                }
              : gapWrong
              ? {
                  background: "rgba(255,80,80,0.18)",
                  border: "2px solid rgba(255,80,80,0.5)",
                  color: "#f87171",
                }
              : gapText
              ? {
                  background: `${color}28`,
                  border: `2px solid ${color}60`,
                  color: "rgba(255,255,255,0.95)",
                }
              : {
                  background: "transparent",
                  borderBottom: `2.5px solid ${color}`,
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  color: "transparent",
                  // pulsing underline via animation class below
                }
          }
          animate={
            !gapText
              ? { opacity: [0.4, 1, 0.4] }
              : { opacity: 1 }
          }
          transition={
            !gapText
              ? { repeat: Infinity, duration: 1.6, ease: "easeInOut" }
              : { duration: 0.2 }
          }
        >
          {gapText ?? "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
        </motion.span>

        <span className="text-white/90">{after}</span>
      </div>

      {/* 2×2 choice grid */}
      <div className="w-full grid grid-cols-2 gap-2">
        {choices.map((choice, idx) => {
          const isSelected = selected === idx;
          const isCorrectChoice = solved && idx === correctIndex;
          const isWrongSelected = isSelected && showResult === "wrong";
          const isShaking = shakeIdx === idx;

          return (
            <motion.button
              key={idx}
              animate={
                isShaking
                  ? { x: [0, -6, 6, -5, 5, 0] }
                  : { x: 0 }
              }
              transition={{ duration: 0.4 }}
              whileTap={!solved ? { scale: 0.93 } : {}}
              onClick={() => handleChoice(idx)}
              disabled={solved}
              className="py-3 rounded-xl font-extrabold text-sm border-2 transition-colors disabled:cursor-default"
              style={
                isCorrectChoice
                  ? {
                      background: "rgba(0,220,100,0.22)",
                      borderColor: "rgba(0,220,100,0.6)",
                      color: "#4ade80",
                    }
                  : isWrongSelected
                  ? {
                      background: "rgba(255,80,80,0.14)",
                      borderColor: "rgba(255,80,80,0.5)",
                      color: "#f87171",
                      opacity: 0.8,
                    }
                  : isSelected && !solved
                  ? {
                      background: `${color}28`,
                      borderColor: `${color}70`,
                      color: "rgba(255,255,255,0.95)",
                    }
                  : {
                      background: "rgba(255,255,255,0.06)",
                      borderColor: "rgba(255,255,255,0.14)",
                      color: "rgba(255,255,255,0.80)",
                    }
              }
            >
              {choice}
            </motion.button>
          );
        })}
      </div>

      {/* correct answer reveal (after auto-solve) */}
      <AnimatePresence>
        {solved && wrongCount >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full rounded-xl p-3 text-xs text-center"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
              color: `${color}`,
            }}
          >
            {t.correctAnswer}{" "}
            <span className="font-bold">{choices[correctIndex]}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* hint bubble */}
      <AnimatePresence>
        {showHint && !solved && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full rounded-xl p-3 text-sm text-center"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
              color: `${color}`,
            }}
          >
            💡 {showHint}
          </motion.div>
        )}
      </AnimatePresence>

      {/* result flash */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className={`text-2xl font-black ${
              showResult === "correct" ? "text-green-400" : "text-red-400"
            }`}
          >
            {showResult === "correct" ? `✓ ${t.great}` : `✗ ${t.tryAgain}`}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(GapFill);
