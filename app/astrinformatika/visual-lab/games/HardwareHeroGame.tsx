"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ArtikelAsteroidsRound, Language } from "@/lib/visualLab/languageTypes";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const T: Record<Language, { correct: string; wrong: string; lives: string; done: string; score: string; next: string }> = {
  de: { correct: "Richtig! ✓", wrong: "Falsch!", lives: "Leben", done: "Fertig!", score: "Punkte", next: "Weiter" },
  hu: { correct: "Helyes! ✓", wrong: "Hibás!", lives: "Élet", done: "Kész!", score: "Pont", next: "Következő" },
  ro: { correct: "Corect! ✓", wrong: "Greșit!", lives: "Vieți", done: "Gata!", score: "Scor", next: "Următor" },
  en: { correct: "Correct! ✓", wrong: "Wrong!", lives: "Lives", done: "Done!", score: "Score", next: "Next" },
};

const PORT_COLORS = [
  { border: "#818cf8", glow: "rgba(129,140,248,0.5)", text: "#a5b4fc" },
  { border: "#a78bfa", glow: "rgba(167,139,250,0.5)", text: "#c4b5fd" },
  { border: "#7c3aed", glow: "rgba(124,58,237,0.5)", text: "#a78bfa" },
  { border: "#6366f1", glow: "rgba(99,102,241,0.5)", text: "#818cf8" },
];

export default function HardwareHeroGame({
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
  void grade;
  const t = T[lang] ?? T.de;

  const [queue] = useState(() => [...round.words].sort(() => Math.random() - 0.5));
  const [idx, setIdx] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const [flyUp, setFlyUp] = useState(false);
  const [done, setDone] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
  }, []);

  const current = queue[idx];

  const pick = (cat: string) => {
    if (flash || done || !current) return;

    const ok = cat === current.article;
    const newScore = ok ? score + 10 : score;
    const newLives = ok ? lives : lives - 1;

    if (ok) {
      setScore(newScore);
      setFlyUp(true);
      setFlash("correct");
    } else {
      setLives(newLives);
      setFlash("wrong");
    }

    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setFlash(null);
      setFlyUp(false);
      const nextIdx = idx + 1;
      if (nextIdx >= queue.length || newLives <= 0) {
        setDone(true);
        onDone?.(newScore);
      } else {
        setIdx(nextIdx);
      }
      timer.current = null;
    }, ok ? 900 : 700);
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden flex flex-col" style={{ background: "#0f0520" }}>
      {/* Circuit glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(129,140,248,0.12), transparent 60%)" }} />

      {/* Circuit lines decoration */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 320 500">
        <line x1="0" y1="120" x2="320" y2="120" stroke="#818cf8" strokeWidth="0.5" />
        <line x1="160" y1="0" x2="160" y2="500" stroke="#818cf8" strokeWidth="0.5" />
        <circle cx="160" cy="120" r="4" fill="none" stroke="#818cf8" strokeWidth="1" />
      </svg>

      {/* Title */}
      <div className="relative z-20 text-center pt-2 pb-0 shrink-0">
        <span className="text-[11px] tracking-widest uppercase" style={{ color: "rgba(129,140,248,0.6)" }}>🖥️ {round.title[lang] ?? round.title.en}</span>
      </div>

      {/* HUD */}
      <div className="relative z-20 flex justify-between px-4 pt-1 pb-1 shrink-0">
        <div className="bg-black/60 px-3 py-1 rounded-full border border-indigo-400/20 text-xs text-indigo-300/70">
          {t.lives}: <span className="text-rose-400">{"❤️".repeat(Math.max(0, lives))}</span>
        </div>
        <div className="bg-black/60 px-3 py-1 rounded-full border border-indigo-400/20 text-xs">
          <span className="text-indigo-400/50 mr-1">{t.score}</span>
          <span className="font-bold text-indigo-300">{score}</span>
        </div>
        <div className="text-indigo-400/30 text-xs self-center">{idx + 1}/{queue.length}</div>
      </div>

      {/* Instruction */}
      <p className="relative z-10 text-center text-indigo-300/40 text-xs uppercase tracking-widest pb-1 shrink-0">
        {round.instruction[lang] ?? round.instruction.en}
      </p>

      {/* Center item display */}
      <div className="relative flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {current && !done && (
            <motion.div
              key={`item-${idx}`}
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={flyUp ? { opacity: 0, y: -120, scale: 0.5 } : { opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: flyUp ? 0.5 : 0.3 }}
              className="text-center px-8"
            >
              <div
                className="px-8 py-6 rounded-2xl border-2 text-2xl font-black text-white"
                style={{
                  background: "rgba(15,5,32,0.9)",
                  borderColor: "rgba(129,140,248,0.6)",
                  boxShadow: "0 0 30px rgba(129,140,248,0.25), inset 0 0 20px rgba(129,140,248,0.05)",
                  textShadow: "0 0 12px rgba(129,140,248,0.8)",
                  color: "#a5b4fc",
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
              <span className={`text-4xl font-black uppercase tracking-widest drop-shadow-lg ${flash === "correct" ? "text-emerald-400" : "text-rose-400"}`}>
                {flash === "correct" ? t.correct : t.wrong}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Docking port category buttons */}
      <div className="relative z-20 flex shrink-0 gap-2 px-3 pb-4 pt-1">
        {round.categories.map((cat, ci) => {
          const pc = PORT_COLORS[ci % PORT_COLORS.length];
          return (
            <motion.button
              key={cat}
              onClick={() => pick(cat)}
              disabled={!!flash || done}
              className="flex-1 h-[64px] rounded-xl border-2 font-black text-lg uppercase tracking-widest"
              style={{
                background: "rgba(15,5,32,0.85)",
                borderColor: pc.border,
                color: pc.text,
                boxShadow: `0 0 14px ${pc.glow}, inset 0 0 16px ${pc.glow.replace("0.5", "0.06")}`,
              }}
              whileHover={{ scale: 1.04, boxShadow: `0 0 28px ${pc.glow}` }}
              whileTap={{ scale: 0.96 }}
            >
              ⬡ {cat}
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
              <div className="text-3xl font-black text-white mb-1">{t.done}</div>
              <div className="text-xl font-bold" style={{ color: "#818cf8" }}>{score} {t.score}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
