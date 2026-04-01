"use client";
import React, { useState, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Types ──────────────────────────────────────────────────── */

export interface DiagramArea {
  id: string;
  x: number;       // % from left (0-100)
  y: number;       // % from top (0-100)
  label: string;   // already resolved text (correct label for this area)
}

interface Props {
  /** The SVG illustration — rendered as-is, areas overlay on top */
  svg: React.ReactNode;
  /** Clickable areas on the diagram */
  areas: DiagramArea[];
  color: string;
  instruction: string;
  hint1: string;
  hint2: string;
  lang: string;
  onDone: (correct: boolean) => void;
}

/* ── Labels ─────────────────────────────────────────────────── */

const LABELS: Record<string, Record<string, string>> = {
  en: {
    tapArea: "Tap a flashing dot to label it",
    pickLabel: "Pick the correct label:",
    correct: "Correct!",
    wrong: "Try again!",
    allDone: "All labeled!",
    hint: "Hint",
  },
  de: {
    tapArea: "Tippe auf einen blinkenden Punkt",
    pickLabel: "Wähle die richtige Bezeichnung:",
    correct: "Richtig!",
    wrong: "Nochmal!",
    allDone: "Alles beschriftet!",
    hint: "Hinweis",
  },
  hu: {
    tapArea: "Koppints egy villogó pontra",
    pickLabel: "Válaszd ki a helyes címkét:",
    correct: "Helyes!",
    wrong: "Próbáld újra!",
    allDone: "Mind felcímkézve!",
    hint: "Tipp",
  },
  ro: {
    tapArea: "Atinge un punct care clipește",
    pickLabel: "Alege eticheta corectă:",
    correct: "Corect!",
    wrong: "Încearcă din nou!",
    allDone: "Toate etichetate!",
    hint: "Indiciu",
  },
};

/* ── Component ─────────────────────────────────────────────── */

const LabelDiagram = memo(function LabelDiagram({
  svg, areas, color, instruction, hint1, hint2, lang, onDone,
}: Props) {
  const t = LABELS[lang] ?? LABELS.en;

  // Track which areas have been correctly labeled
  const [labeled, setLabeled] = useState<Set<string>>(new Set());
  // Currently selected area (waiting for label pick)
  const [activeArea, setActiveArea] = useState<string | null>(null);
  // Feedback state
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  // Wrong attempts count
  const [wrongCount, setWrongCount] = useState(0);
  // Hints used
  const [hintsUsed, setHintsUsed] = useState(0);
  // Done
  const [done, setDone] = useState(false);

  // Shuffled label options (all area labels, shuffled once)
  const shuffledLabels = useMemo(() => {
    const labels = areas.map(a => ({ id: a.id, label: a.label }));
    for (let i = labels.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [labels[i], labels[j]] = [labels[j], labels[i]];
    }
    return labels;
  }, [areas]);

  // Remaining (unlabeled) options
  const remainingLabels = useMemo(
    () => shuffledLabels.filter(l => !labeled.has(l.id)),
    [shuffledLabels, labeled]
  );

  const handleAreaTap = useCallback((areaId: string) => {
    if (done || labeled.has(areaId)) return;
    setActiveArea(areaId);
    setFeedback(null);
  }, [done, labeled]);

  const handleLabelPick = useCallback((pickedId: string) => {
    if (!activeArea) return;

    if (pickedId === activeArea) {
      // Correct!
      setFeedback("correct");
      const next = new Set(labeled);
      next.add(activeArea);
      setLabeled(next);

      setTimeout(() => {
        setFeedback(null);
        setActiveArea(null);
        if (next.size === areas.length) {
          setDone(true);
          setTimeout(() => onDone(wrongCount === 0), 800);
        }
      }, 600);
    } else {
      // Wrong
      setFeedback("wrong");
      setWrongCount(w => w + 1);
      setTimeout(() => setFeedback(null), 800);
    }
  }, [activeArea, labeled, areas.length, wrongCount, onDone]);

  const handleHint = useCallback(() => {
    setHintsUsed(h => h + 1);
  }, []);

  // Determine current hint text
  const hintText = hintsUsed === 0 ? null : hintsUsed === 1 ? hint1 : hint2;

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-sm mx-auto">
      {/* Instruction */}
      <p className="text-xs font-semibold text-center text-white/60 px-4">
        {instruction}
      </p>

      {/* SVG with overlay areas */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-white/10"
        style={{ background: `linear-gradient(135deg, ${color}15, ${color}08)` }}>
        {/* The SVG illustration */}
        <div className="w-full">{svg}</div>

        {/* Clickable area dots */}
        {areas.map(area => {
          const isLabeled = labeled.has(area.id);
          const isActive = activeArea === area.id;

          return (
            <button
              key={area.id}
              onClick={() => handleAreaTap(area.id)}
              disabled={isLabeled || done}
              className="absolute z-10 flex items-center justify-center w-11 h-11 transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${area.x}%`, top: `${area.y}%` }}
            >
              {isLabeled ? (
                // Labeled: show green check + label text
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap"
                  style={{ background: `${color}cc`, color: "white" }}
                >
                  <span>✓</span>
                  <span>{area.label}</span>
                </motion.div>
              ) : (
                // Unlabeled: pulsing dot
                <motion.div
                  animate={isActive
                    ? { scale: [1, 1.4, 1], boxShadow: [`0 0 0 0 ${color}80`, `0 0 0 8px ${color}00`] }
                    : { scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }
                  }
                  transition={{ repeat: Infinity, duration: isActive ? 0.6 : 1.5 }}
                  className="w-5 h-5 rounded-full border-2 border-white"
                  style={{
                    background: isActive ? color : `${color}88`,
                    boxShadow: isActive ? `0 0 12px ${color}` : `0 0 6px ${color}66`,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Status text */}
      <AnimatePresence mode="wait">
        {done ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-sm font-bold text-center"
            style={{ color }}
          >
            {t.allDone} ✨
          </motion.div>
        ) : activeArea ? (
          <motion.div
            key="pick"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-2 w-full"
          >
            <p className="text-[11px] font-semibold text-white/50">{t.pickLabel}</p>

            {/* Feedback */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    feedback === "correct"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {feedback === "correct" ? t.correct : t.wrong}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Label choices */}
            <div className="flex flex-wrap justify-center gap-2 px-2">
              {remainingLabels.map(opt => (
                <motion.button
                  key={opt.id}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => handleLabelPick(opt.id)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-colors"
                  style={{
                    borderColor: `${color}44`,
                    background: `${color}11`,
                    color: "white",
                  }}
                >
                  {opt.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="tap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] text-white/40 text-center"
          >
            {t.tapArea}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Hint button */}
      {!done && hintsUsed < 2 && (
        <button
          onClick={handleHint}
          className="text-[10px] text-white/30 hover:text-white/50 transition-colors underline"
        >
          {t.hint}
        </button>
      )}
      {hintText && !done && (
        <p className="text-[10px] text-white/40 text-center px-4 italic">{hintText}</p>
      )}

      {/* Progress dots */}
      <div className="flex gap-1.5">
        {areas.map(a => (
          <div
            key={a.id}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ background: labeled.has(a.id) ? color : `${color}33` }}
          />
        ))}
      </div>
    </div>
  );
});

export default LabelDiagram;
