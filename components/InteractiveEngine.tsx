"use client";
import React, { useState, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { InteractiveDef, InteractiveRound } from "./interactive/types";
import BlockDrag from "./interactive/BlockDrag";
import NumberLineTap from "./interactive/NumberLineTap";

/* ── Props ──────────────────────────────────────────────────── */

export interface InteractiveEngineProps {
  def: InteractiveDef;
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

/* ── UI Labels ──────────────────────────────────────────────── */

const UI: Record<string, Record<string, string>> = {
  en: {
    round: "Task",
    of: "of",
    done: "Well done!",
    score: "Score",
    next: "Continue",
    finish: "Finish",
    close: "✕",
  },
  de: {
    round: "Aufgabe",
    of: "von",
    done: "Gut gemacht!",
    score: "Ergebnis",
    next: "Weiter",
    finish: "Fertig",
    close: "✕",
  },
  hu: {
    round: "Feladat",
    of: "/",
    done: "Szép munka!",
    score: "Eredmény",
    next: "Tovább",
    finish: "Befejezés",
    close: "✕",
  },
  ro: {
    round: "Sarcină",
    of: "din",
    done: "Bravo!",
    score: "Scor",
    next: "Continuă",
    finish: "Terminat",
    close: "✕",
  },
};

/* ── Main Engine ────────────────────────────────────────────── */

function InteractiveEngine({
  def,
  color = "#3B82F6",
  lang = "en",
  onDone,
  onClose,
}: InteractiveEngineProps) {
  const t = UI[lang] || UI.en;
  const labels = def.labels[lang] || def.labels.en || {};
  const L = (key: string) => labels[key] || key;

  const totalRounds = def.rounds.length;
  const [round, setRound] = useState(0);
  const [phase, setPhase] = useState<"active" | "transition">("active");

  const scoreRef = useRef(0);
  const totalRef = useRef(0);

  /* ── round done handler ────────────────────────────────── */
  const handleRoundDone = useCallback(
    (correct: boolean) => {
      totalRef.current += 1;
      if (correct) scoreRef.current += 1;

      setPhase("transition");
    },
    []
  );

  /* ── advance to next round or finish ───────────────────── */
  const handleNext = useCallback(() => {
    if (round >= totalRounds - 1) {
      // all rounds done
      onDone?.(scoreRef.current, totalRef.current);
    } else {
      setRound((r) => r + 1);
      setPhase("active");
    }
  }, [round, totalRounds, onDone]);

  /* ── progress bar ──────────────────────────────────────── */
  const progress = ((round + (phase === "transition" ? 1 : 0)) / totalRounds) * 100;

  /* ── current round config ──────────────────────────────── */
  const rd = def.rounds[round];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#060614] overflow-hidden">
      {/* ── header ─────────────────────────────────────────── */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-2">
        {/* close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors text-lg font-bold"
          >
            {t.close}
          </button>
        )}

        {/* progress bar */}
        <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${color}, ${color}cc)`,
              boxShadow: `0 0 8px ${color}60`,
            }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* round counter */}
        <span className="text-xs font-bold text-white/50 whitespace-nowrap">
          {t.round} {round + 1} {t.of} {totalRounds}
        </span>
      </div>

      {/* ── score dots ─────────────────────────────────────── */}
      <div className="flex justify-center gap-1.5 px-4 pb-2">
        {def.rounds.map((_, i) => {
          let dotColor = "bg-white/10";
          if (i < round || (i === round && phase === "transition")) {
            // completed round
            dotColor =
              i < round
                ? scoreRef.current > i
                  ? "bg-green-400"
                  : "bg-red-400/60"
                : phase === "transition"
                  ? scoreRef.current > totalRef.current - 1
                    ? "bg-green-400"
                    : "bg-red-400/60"
                  : "bg-white/10";
          }
          if (i === round && phase === "active") dotColor = "bg-white/30";
          return (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${dotColor}`}
            />
          );
        })}
      </div>

      {/* ── round content ──────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          {phase === "active" && (
            <motion.div
              key={`round-${round}`}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md flex flex-col items-center"
            >
              {renderRound(rd, color, lang, L, handleRoundDone)}
            </motion.div>
          )}

          {phase === "transition" && (
            <motion.div
              key={`trans-${round}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              {/* success particles */}
              <div className="relative w-20 h-20">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: color,
                      top: "50%",
                      left: "50%",
                    }}
                    initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    animate={{
                      opacity: 0,
                      scale: 0,
                      x: Math.cos((i * Math.PI * 2) / 8) * 50,
                      y: Math.sin((i * Math.PI * 2) / 8) * 50,
                    }}
                    transition={{ duration: 0.7, delay: i * 0.03 }}
                  />
                ))}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                  style={{ background: `${color}20`, border: `2px solid ${color}40` }}
                >
                  {scoreRef.current >= totalRef.current ? "⭐" : "👍"}
                </motion.div>
              </div>

              <p className="text-lg font-black text-white/80">{t.done}</p>

              <p className="text-sm font-bold text-white/50">
                {t.score}: {scoreRef.current}/{totalRef.current}
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleNext}
                className="px-8 py-3 rounded-xl text-white font-extrabold text-base shadow-lg"
                style={{ background: color, boxShadow: `0 4px 20px ${color}40` }}
              >
                {round >= totalRounds - 1 ? t.finish : t.next}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Round renderer ─────────────────────────────────────────── */

function renderRound(
  rd: InteractiveRound,
  color: string,
  lang: string,
  L: (key: string) => string,
  onDone: (correct: boolean) => void
) {
  switch (rd.type) {
    case "block-drag":
      return (
        <BlockDrag
          mode={rd.mode}
          groups={rd.groups}
          answer={rd.answer}
          tens={rd.tens}
          ones={rd.ones}
          blockIcon={rd.blockIcon}
          blockColor={rd.blockColor}
          color={color}
          instruction={L(rd.instruction)}
          hint1={L(rd.hint1)}
          hint2={L(rd.hint2)}
          lang={lang}
          onDone={onDone}
        />
      );

    case "number-line":
      return (
        <NumberLineTap
          min={rd.min}
          max={rd.max}
          start={rd.start}
          target={rd.target}
          step={rd.step}
          showJumps={rd.showJumps}
          jumpCount={rd.jumpCount}
          color={color}
          instruction={L(rd.instruction)}
          hint1={L(rd.hint1)}
          hint2={L(rd.hint2)}
          lang={lang}
          onDone={onDone}
        />
      );

    case "balance":
      return (
        <BalancePlaceholder
          instruction={L(rd.instruction)}
          color={color}
          onDone={onDone}
        />
      );

    case "step-solver":
      return (
        <StepSolverPlaceholder
          instruction={L(rd.instruction)}
          color={color}
          onDone={onDone}
        />
      );

    case "pattern-tap":
      return (
        <PatternTapPlaceholder
          instruction={L(rd.instruction)}
          color={color}
          onDone={onDone}
        />
      );

    default:
      return <div className="text-white/50">Unknown round type</div>;
  }
}

/* ── Placeholder components for future types ─────────────── */
/* These will be replaced with real implementations later     */

function BalancePlaceholder({ instruction, color, onDone }: { instruction: string; color: string; onDone: (c: boolean) => void }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm font-bold text-white/80">{instruction}</p>
      <p className="text-white/40 text-xs">Balance — coming soon</p>
      <button onClick={() => onDone(true)} className="px-6 py-2 rounded-xl text-white font-bold" style={{ background: color }}>Skip</button>
    </div>
  );
}

function StepSolverPlaceholder({ instruction, color, onDone }: { instruction: string; color: string; onDone: (c: boolean) => void }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm font-bold text-white/80">{instruction}</p>
      <p className="text-white/40 text-xs">Step Solver — coming soon</p>
      <button onClick={() => onDone(true)} className="px-6 py-2 rounded-xl text-white font-bold" style={{ background: color }}>Skip</button>
    </div>
  );
}

function PatternTapPlaceholder({ instruction, color, onDone }: { instruction: string; color: string; onDone: (c: boolean) => void }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm font-bold text-white/80">{instruction}</p>
      <p className="text-white/40 text-xs">Pattern Tap — coming soon</p>
      <button onClick={() => onDone(true)} className="px-6 py-2 rounded-xl text-white font-bold" style={{ background: color }}>Skip</button>
    </div>
  );
}

export default memo(InteractiveEngine);
