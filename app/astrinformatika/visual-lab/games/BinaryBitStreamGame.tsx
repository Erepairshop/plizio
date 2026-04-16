"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ArtikelAsteroidsRound, Language } from "@/lib/visualLab/languageTypes";

const T: Record<Language, { correct: string; wrong: string; lives: string; done: string; score: string }> = {
  de: { correct: "Richtig!", wrong: "Falsch!", lives: "Leben", done: "Geschafft!", score: "Punkte" },
  hu: { correct: "Helyes!", wrong: "Hibás!", lives: "Élet", done: "Kész!", score: "Pont" },
  ro: { correct: "Corect!", wrong: "Greșit!", lives: "Vieți", done: "Gata!", score: "Scor" },
  en: { correct: "Correct!", wrong: "Wrong!", lives: "Lives", done: "Done!", score: "Score" },
};

const FALL_SECS = [0, 5.5, 5, 4.5, 4, 3.5, 3, 2.7, 2.4];

const CAT_COLORS = [
  { border: "#38bdf8", glow: "rgba(56,189,248,0.5)", text: "#7dd3fc" },
  { border: "#22d3ee", glow: "rgba(34,211,238,0.5)", text: "#67e8f9" },
  { border: "#06b6d4", glow: "rgba(6,182,212,0.5)", text: "#a5f3fc" },
  { border: "#0ea5e9", glow: "rgba(14,165,233,0.5)", text: "#bae6fd" },
];

export default function BinaryBitStreamGame({
  grade,
  lang,
  round,
  onDone,
}: {
  grade: number;
  lang: Language;
  round: ArtikelAsteroidsRound;
  onDone?: (score: number) => void;
}) {
  const t = T[lang] ?? T.de;
  const fallSecs = FALL_SECS[Math.min(grade, 8)] ?? 4;

  const [queue] = useState(() => [...round.words].sort(() => Math.random() - 0.5));
  const [idx, setIdx] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const [active, setActive] = useState(true);
  const [done, setDone] = useState(false);
  const [wordX, setWordX] = useState(() => 20 + Math.random() * 60);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = queue[idx];

  useEffect(() => {
    if (done || !active || !current) return;
    timerRef.current = setTimeout(() => pick("__miss__"), (fallSecs + 0.1) * 1000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, active, done]);

  const pick = (cat: string) => {
    if (!active || done || !current) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(false);

    const ok = cat === current.article;
    const newScore = ok ? score + 10 : score;
    const newLives = ok ? lives : lives - 1;

    if (ok) setScore(newScore);
    else setLives(newLives);
    setFlash(ok ? "correct" : "wrong");

    setTimeout(() => {
      setFlash(null);
      const nextIdx = idx + 1;
      if (nextIdx >= queue.length || newLives <= 0) {
        setDone(true);
        onDone?.(newScore);
      } else {
        setIdx(nextIdx);
        setWordX(20 + Math.random() * 60);
        setActive(true);
      }
    }, 850);
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden flex flex-col" style={{ background: "#040d1c" }}>
      {/* Matrix scan line */}
      <motion.div
        className="absolute inset-x-0 h-px pointer-events-none z-10"
        style={{ background: "rgba(56,189,248,0.15)" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.12), transparent 55%)" }} />

      {/* Title */}
      <div className="relative z-20 text-center pt-2 pb-0 shrink-0">
        <span className="font-mono text-[11px] text-cyan-400/60 tracking-widest uppercase">💾 Binary Bit-Stream</span>
      </div>

      {/* HUD */}
      <div className="relative z-20 flex justify-between px-4 pt-1 pb-1 shrink-0">
        <div className="bg-black/60 px-3 py-1 rounded-full border border-cyan-400/20 text-xs font-mono text-cyan-300/70">
          {t.lives}: <span className="text-rose-400">{"❤️".repeat(Math.max(0, lives))}</span>
        </div>
        <div className="bg-black/60 px-3 py-1 rounded-full border border-cyan-400/20 text-xs font-mono">
          <span className="text-cyan-400/50 mr-1">{t.score}</span>
          <span className="font-bold text-cyan-300">{score}</span>
        </div>
        <div className="text-cyan-400/30 text-xs font-mono self-center">{idx + 1}/{queue.length}</div>
      </div>

      {/* Instruction */}
      <p className="relative z-10 text-center text-cyan-300/40 text-xs font-mono uppercase tracking-widest pb-1 shrink-0">
        {round.instruction}
      </p>

      {/* Fall zone */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          {current && !done && (
            <motion.div
              key={`word-${idx}`}
              className="absolute z-10"
              style={{ left: `${wordX}%`, x: "-50%" }}
              initial={{ y: -60 }}
              animate={active ? { y: 310 } : { opacity: 0, scale: 0.5 }}
              transition={active ? { duration: fallSecs, ease: "linear" } : { duration: 0.25 }}
            >
              <div
                className="px-5 py-2.5 rounded-lg border-2 font-black text-white text-xl backdrop-blur-sm whitespace-nowrap font-mono"
                style={{
                  background: "rgba(4,13,28,0.85)",
                  borderColor: "rgba(56,189,248,0.7)",
                  boxShadow: "0 0 20px rgba(56,189,248,0.4), inset 0 0 10px rgba(56,189,248,0.08)",
                  textShadow: "0 0 10px rgba(56,189,248,0.9)",
                  color: "#38bdf8",
                }}
              >
                {current.word}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flash */}
        <AnimatePresence>
          {flash && (
            <motion.div key={flash + idx}
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <span className={`text-4xl font-black uppercase tracking-widest drop-shadow-lg font-mono ${flash === "correct" ? "text-emerald-400" : "text-rose-400"}`}>
                {flash === "correct" ? t.correct : t.wrong}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Category buttons (energy cells) */}
      <div className="relative z-20 flex shrink-0 gap-2 px-3 pb-4 pt-1">
        {round.categories.map((cat, ci) => {
          const cc = CAT_COLORS[ci % CAT_COLORS.length];
          return (
            <motion.button
              key={cat}
              onClick={() => pick(cat)}
              disabled={!active || done}
              className="flex-1 h-[66px] rounded-xl border-2 font-black text-2xl font-mono uppercase tracking-widest"
              style={{
                background: "rgba(4,13,28,0.85)",
                borderColor: cc.border,
                color: cc.text,
                boxShadow: `0 0 16px ${cc.glow}, inset 0 0 18px ${cc.glow.replace("0.5", "0.08")}`,
              }}
              whileHover={{ scale: 1.04, boxShadow: `0 0 30px ${cc.glow}` }}
              whileTap={{ scale: 0.96 }}
            >
              {cat}
            </motion.button>
          );
        })}
      </div>

      {/* Done overlay */}
      <AnimatePresence>
        {done && (
          <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
              className="text-center">
              <div className="text-6xl mb-3">{score >= queue.length * 7 ? "🏆" : "⭐"}</div>
              <div className="text-3xl font-black text-white mb-1 font-mono">{t.done}</div>
              <div className="text-xl font-bold font-mono" style={{ color: "#38bdf8" }}>{score} {t.score}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
