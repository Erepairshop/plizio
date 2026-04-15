"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SatzbauSniperRound, Language } from "@/lib/visualLab/languageTypes";

const T: Record<Language, { instruction: string; correct: string; wrong: string; lives: string; done: string; build: string }> = {
  de: { instruction: "Schieß die Wörter in der richtigen Reihenfolge ab!", correct: "Treffer!", wrong: "Falsch!", lives: "Leben", done: "Satz fertig!", build: "Baue den Satz:" },
  hu: { instruction: "Lődd ki a szavakat a helyes sorrendben!", correct: "Találat!", wrong: "Hibás!", lives: "Élet", done: "Mondat kész!", build: "Épített mondat:" },
  ro: { instruction: "Trage cuvintele în ordinea corectă!", correct: "Lovit!", wrong: "Greșit!", lives: "Vieți", done: "Propoziție gata!", build: "Construiești:" },
  en: { instruction: "Shoot the words in the correct order!", correct: "Hit!", wrong: "Wrong!", lives: "Lives", done: "Sentence done!", build: "Build:" },
};

// Pre-defined float positions for up to 8 words (% of container)
const WORD_SLOTS = [
  { x: 12, y: 14 }, { x: 58, y: 8 },  { x: 78, y: 38 }, { x: 8,  y: 50 },
  { x: 44, y: 55 }, { x: 70, y: 68 }, { x: 25, y: 72 }, { x: 52, y: 28 },
];

// Drift animation per slot
const DRIFTS = [
  { x: [0, 8, -6, 4, 0],    y: [0, -8, 10, -4, 0] },
  { x: [0, -10, 6, -4, 0],  y: [0, 10, -6, 8, 0] },
  { x: [0, 6, -10, 3, 0],   y: [0, -10, 4, -8, 0] },
  { x: [0, -4, 12, -8, 0],  y: [0, 6, -10, 4, 0] },
  { x: [0, 10, -4, 6, 0],   y: [0, -4, 10, -8, 0] },
  { x: [0, -8, 4, -10, 0],  y: [0, 10, -3, 6, 0] },
  { x: [0, 6, -10, 4, 0],   y: [0, -8, 6, -4, 0] },
  { x: [0, -4, 8, -6, 0],   y: [0, 8, -10, 3, 0] },
];

type WordState = "idle" | "sniped" | "wrong" | "gone";

export default function SatzbauSniperGame({
  lang,
  round,
  onDone,
}: {
  grade: number;
  lang: Language;
  round: SatzbauSniperRound;
  onDone?: (score: number) => void;
}) {
  const t = T[lang] ?? T.de;
  const correct = round.correctOrder;

  // Shuffled display words (same as round.words but ordered by slot)
  const [displayWords] = useState<string[]>(() =>
    [...round.words].sort(() => Math.random() - 0.5)
  );

  const [wordStates, setWordStates] = useState<WordState[]>(() => displayWords.map(() => "idle"));
  const [built, setBuilt] = useState<string[]>([]); // words added to sentence so far
  const [lives, setLives] = useState(3);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);

  // Next word needed
  const nextNeeded = correct[built.length];

  const handleClick = (displayIdx: number) => {
    if (done || wordStates[displayIdx] !== "idle") return;
    const word = displayWords[displayIdx];

    if (word === nextNeeded) {
      // Correct!
      setWordStates((prev) => prev.map((s, i) => (i === displayIdx ? "sniped" : s)));
      setFlash("correct");
      const newBuilt = [...built, word];
      setTimeout(() => {
        setWordStates((prev) => prev.map((s, i) => (i === displayIdx ? "gone" : s)));
        setBuilt(newBuilt);
        setFlash(null);
        if (newBuilt.length >= correct.length) {
          setDone(true);
          onDone?.(Math.max(lives, 1) * 20 + built.length * 5);
        }
      }, 500);
    } else {
      // Wrong order
      setWordStates((prev) => prev.map((s, i) => (i === displayIdx ? "wrong" : s)));
      setFlash("wrong");
      const nl = lives - 1;
      setLives(nl);
      setTimeout(() => {
        setWordStates((prev) => prev.map((s, i) => (i === displayIdx ? "idle" : s)));
        setFlash(null);
        if (nl <= 0) { setDone(true); onDone?.(0); }
      }, 600);
    }
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden flex flex-col" style={{ background: round.theme.bg }}>
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${round.theme.accent}18, transparent 65%)` }} />

      {/* Crosshair cursor hint */}
      <style>{`.sniper-area { cursor: crosshair; }`}</style>

      {/* HUD */}
      <div className="relative z-20 flex justify-between px-4 pt-3 pb-1 shrink-0">
        <div className="bg-black/50 px-3 py-1 rounded-full border border-white/10 text-xs text-white/70">
          {t.lives}: <span className="text-rose-400">{"❤️".repeat(Math.max(0, lives))}</span>
        </div>
        <div className="bg-black/50 px-3 py-1 rounded-full border text-xs font-medium"
          style={{ borderColor: `${round.theme.accent}40`, color: round.theme.accent }}>
          {t.instruction}
        </div>
      </div>

      {/* Floating words area */}
      <div className="relative sniper-area flex-1">
        {displayWords.map((word, idx) => {
          const slot = WORD_SLOTS[idx % WORD_SLOTS.length];
          const drift = DRIFTS[idx % DRIFTS.length];
          const st = wordStates[idx];
          if (st === "gone") return null;

          const isSniped = st === "sniped";
          const isWrong = st === "wrong";

          return (
            <motion.button
              key={idx}
              onClick={() => handleClick(idx)}
              className="absolute z-10 rounded-xl border-2 font-bold text-white px-4 py-2 backdrop-blur-sm select-none"
              style={{
                left: `${slot.x}%`,
                top: `${slot.y}%`,
                fontSize: word.length > 10 ? "0.8rem" : "0.95rem",
                background: isSniped
                  ? "rgba(34,197,94,0.25)"
                  : isWrong
                  ? "rgba(239,68,68,0.25)"
                  : "rgba(0,0,0,0.55)",
                borderColor: isSniped
                  ? "#22c55e"
                  : isWrong
                  ? "#ef4444"
                  : `${round.theme.accent}70`,
                boxShadow: isSniped
                  ? "0 0 28px rgba(34,197,94,0.7)"
                  : isWrong
                  ? "0 0 20px rgba(239,68,68,0.5)"
                  : `0 0 10px ${round.theme.accent}28`,
                cursor: done ? "default" : "crosshair",
              }}
              animate={
                st === "idle"
                  ? { x: drift.x, y: drift.y }
                  : st === "wrong"
                  ? { x: [-5, 5, -4, 4, 0], rotate: [-2, 2, -2, 0] }
                  : { scale: [1, 1.4, 0], opacity: [1, 1, 0] }
              }
              transition={
                st === "idle"
                  ? { duration: 6 + idx * 1.1, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.45 }
              }
              whileHover={st === "idle" ? { scale: 1.1, boxShadow: `0 0 22px ${round.theme.accent}60` } : {}}
            >
              {word}
            </motion.button>
          );
        })}

        {/* Flash overlay */}
        <AnimatePresence>
          {flash && (
            <motion.div key={flash + built.length}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <span className={`text-4xl font-black drop-shadow-lg ${flash === "correct" ? "text-emerald-400" : "text-rose-400"}`}>
                {flash === "correct" ? t.correct : t.wrong}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Built sentence strip */}
      <div className="relative z-20 shrink-0 mx-3 mb-3 px-4 py-2.5 rounded-xl border border-white/10 bg-black/50 min-h-[44px] flex flex-wrap gap-1.5 items-center">
        <span className="text-white/30 text-xs mr-1">{t.build}</span>
        <AnimatePresence>
          {built.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="px-2.5 py-0.5 rounded-lg text-sm font-bold text-white"
              style={{ background: `${round.theme.accent}30`, border: `1px solid ${round.theme.accent}60` }}
            >
              {word}
            </motion.span>
          ))}
        </AnimatePresence>
        {built.length === 0 && <span className="text-white/20 text-xs italic">…</span>}
      </div>

      {/* Done overlay */}
      <AnimatePresence>
        {done && (
          <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
              className="text-center px-8">
              <div className="text-6xl mb-3">{lives > 0 ? "🎯" : "💥"}</div>
              <div className="text-2xl font-black text-white mb-2">{t.done}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                {correct.map((w, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-sm font-bold text-white"
                    style={{ background: `${round.theme.accent}30`, border: `1px solid ${round.theme.accent}50` }}>
                    {w}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
