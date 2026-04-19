"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SatzbauSniperRound, Language } from "@/lib/visualLab/languageTypes";

const T: Record<Language, { correct: string; wrong: string; lives: string; done: string; build: string }> = {
  de: { correct: "Korrekt!", wrong: "Falsch!", lives: "Leben", done: "Code fertig!", build: "Roboter-Pfad:" },
  hu: { correct: "Helyes!", wrong: "Hibás!", lives: "Élet", done: "Kód kész!", build: "Robot útvonal:" },
  ro: { correct: "Corect!", wrong: "Greșit!", lives: "Vieți", done: "Cod gata!", build: "Traseul robotului:" },
  en: { correct: "Correct!", wrong: "Wrong!", lives: "Lives", done: "Code done!", build: "Robot path:" },
};

const WORD_SLOTS = [
  { x: 10, y: 12 }, { x: 55, y: 8 },  { x: 76, y: 36 }, { x: 7,  y: 48 },
  { x: 42, y: 53 }, { x: 68, y: 66 }, { x: 22, y: 70 }, { x: 50, y: 26 },
];

const DRIFTS = [
  { x: [0, 7, -5, 3, 0],   y: [0, -7, 9, -3, 0] },
  { x: [0, -8, 5, -3, 0],  y: [0, 9, -5, 7, 0] },
  { x: [0, 5, -9, 2, 0],   y: [0, -9, 3, -7, 0] },
  { x: [0, -3, 11, -7, 0], y: [0, 5, -9, 3, 0] },
  { x: [0, 9, -3, 5, 0],   y: [0, -3, 9, -7, 0] },
  { x: [0, -7, 3, -9, 0],  y: [0, 9, -2, 5, 0] },
  { x: [0, 5, -9, 3, 0],   y: [0, -7, 5, -3, 0] },
  { x: [0, -3, 7, -5, 0],  y: [0, 7, -9, 2, 0] },
];

type WordState = "idle" | "sniped" | "wrong" | "gone";

export default function CodeCommanderGame({
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

  const [displayWords] = useState<string[]>(() =>
    [...round.words].sort(() => Math.random() - 0.5)
  );

  const [wordStates, setWordStates] = useState<WordState[]>(() => displayWords.map(() => "idle"));
  const [built, setBuilt] = useState<string[]>([]);
  const [lives, setLives] = useState(3);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);

  const nextNeeded = correct[built.length];

  const handleClick = (displayIdx: number) => {
    if (done || wordStates[displayIdx] !== "idle") return;
    const word = displayWords[displayIdx];

    if (word === nextNeeded) {
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
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden flex flex-col" style={{ background: "#061008" }}>
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(57,255,20,0.10), transparent 65%)" }} />

      {/* Title */}
      <div className="relative z-20 text-center pt-2 pb-0 shrink-0">
        <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: "rgba(57,255,20,0.5)" }}>🤖 Code Commander</span>
      </div>

      {/* HUD */}
      <div className="relative z-20 flex justify-between px-4 pt-1 pb-1 shrink-0">
        <div className="bg-black/60 px-3 py-1 rounded-full border border-green-400/20 text-xs font-mono text-green-300/70">
          {t.lives}: <span className="text-rose-400">{"❤️".repeat(Math.max(0, lives))}</span>
        </div>
        <div className="bg-black/60 px-3 py-1 rounded-full border border-green-400/20 text-xs font-mono"
          style={{ color: "#39ff14" }}>
          {round.instruction.hu}
        </div>
      </div>

      {/* Floating words area */}
      <div className="relative flex-1" style={{ cursor: "crosshair" }}>
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
              className="absolute z-10 rounded-lg border-2 font-bold text-white px-3 py-1.5 backdrop-blur-sm select-none font-mono text-sm"
              style={{
                left: `${slot.x}%`,
                top: `${slot.y}%`,
                background: isSniped
                  ? "rgba(34,197,94,0.2)"
                  : isWrong
                  ? "rgba(239,68,68,0.2)"
                  : "rgba(6,16,8,0.85)",
                borderColor: isSniped
                  ? "#22c55e"
                  : isWrong
                  ? "#ef4444"
                  : "rgba(57,255,20,0.5)",
                boxShadow: isSniped
                  ? "0 0 22px rgba(34,197,94,0.7)"
                  : isWrong
                  ? "0 0 18px rgba(239,68,68,0.5)"
                  : "0 0 8px rgba(57,255,20,0.2)",
                color: isSniped ? "#22c55e" : isWrong ? "#ef4444" : "#39ff14",
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
              whileHover={st === "idle" ? { scale: 1.08, boxShadow: "0 0 20px rgba(57,255,20,0.6)" } : {}}
            >
              <span className="opacity-50 mr-1">&gt;_</span>{word}
            </motion.button>
          );
        })}

        {/* Flash */}
        <AnimatePresence>
          {flash && (
            <motion.div key={flash + built.length}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <span className={`text-4xl font-black drop-shadow-lg font-mono ${flash === "correct" ? "text-emerald-400" : "text-rose-400"}`}>
                {flash === "correct" ? t.correct : t.wrong}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Built path strip */}
      <div className="relative z-20 shrink-0 mx-3 mb-3 px-4 py-2.5 rounded-lg border border-green-400/20 bg-black/60 min-h-[44px] flex flex-wrap gap-1.5 items-center font-mono">
        <span className="text-green-400/30 text-xs mr-1">{t.build}</span>
        <AnimatePresence>
          {built.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="px-2.5 py-0.5 rounded text-sm font-bold"
              style={{ background: "rgba(57,255,20,0.15)", border: "1px solid rgba(57,255,20,0.5)", color: "#39ff14" }}
            >
              {word}
            </motion.span>
          ))}
        </AnimatePresence>
        {built.length === 0 && <span className="text-green-400/20 text-xs italic">…</span>}
      </div>

      {/* Done overlay */}
      <AnimatePresence>
        {done && (
          <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
              className="text-center px-8">
              <div className="text-6xl mb-3">{lives > 0 ? "🤖" : "💥"}</div>
              <div className="text-2xl font-black text-white mb-2 font-mono">{t.done}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                {correct.map((w, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-sm font-bold font-mono"
                    style={{ background: "rgba(57,255,20,0.15)", border: "1px solid rgba(57,255,20,0.5)", color: "#39ff14" }}>
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
