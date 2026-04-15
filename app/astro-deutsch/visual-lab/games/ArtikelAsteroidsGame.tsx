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

const ZONE_STYLE: Record<string, { border: string; glow: string; cls: string }> = {
  der:  { border: "#38bdf8", glow: "rgba(56,189,248,0.45)",  cls: "text-sky-300" },
  die:  { border: "#f472b6", glow: "rgba(244,114,182,0.45)", cls: "text-pink-300" },
  das:  { border: "#a3e635", glow: "rgba(163,230,53,0.45)",  cls: "text-lime-300" },
  a:    { border: "#38bdf8", glow: "rgba(56,189,248,0.45)",  cls: "text-sky-300" },
  an:   { border: "#f472b6", glow: "rgba(244,114,182,0.45)", cls: "text-pink-300" },
  the:  { border: "#a3e635", glow: "rgba(163,230,53,0.45)",  cls: "text-lime-300" },
};
const DEFAULT_ZONE = { border: "#a855f7", glow: "rgba(168,85,247,0.45)", cls: "text-purple-300" };

const FALL_SECS = [0, 5.5, 5, 4.5, 4, 3.5, 3, 2.7, 2.4];

export default function ArtikelAsteroidsGame({
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
  const [active, setActive] = useState(true); // word currently falling
  const [done, setDone] = useState(false);
  const [wordX, setWordX] = useState(() => 25 + Math.random() * 50);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = queue[idx];

  // Timeout when word hits bottom without a click
  useEffect(() => {
    if (done || !active || !current) return;
    timerRef.current = setTimeout(() => pick("__miss__"), (fallSecs + 0.1) * 1000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, active, done]);

  const pick = (article: string) => {
    if (!active || done || !current) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(false);

    const ok = article === current.article;
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
        setWordX(25 + Math.random() * 50);
        setActive(true);
      }
    }, 850);
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden flex flex-col" style={{ background: round.theme.bg }}>
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${round.theme.accent}18, transparent 55%)` }} />

      {/* HUD */}
      <div className="relative z-20 flex justify-between px-4 pt-3 pb-1 shrink-0">
        <div className="bg-black/50 px-3 py-1 rounded-full border border-white/10 text-xs text-white/70">
          {t.lives}: <span className="text-rose-400">{"❤️".repeat(Math.max(0, lives))}</span>
        </div>
        <div className="bg-black/50 px-3 py-1 rounded-full border border-white/10 text-xs">
          <span className="text-white/50 mr-1">{t.score}</span>
          <span className="font-bold text-white">{score}</span>
        </div>
        <div className="text-white/40 text-xs font-mono self-center">{idx + 1}/{queue.length}</div>
      </div>

      {/* Instruction */}
      <p className="relative z-10 text-center text-white/40 text-xs uppercase tracking-widest pb-1 shrink-0">
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
                className="px-6 py-3 rounded-2xl border-2 font-black text-white text-xl backdrop-blur-sm whitespace-nowrap"
                style={{
                  background: "rgba(0,0,0,0.65)",
                  borderColor: `${round.theme.accent}90`,
                  boxShadow: `0 0 22px ${round.theme.accent}50`,
                  textShadow: `0 0 8px ${round.theme.accent}90`,
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

      {/* Article zones */}
      <div className="relative z-20 flex shrink-0 gap-2 px-3 pb-4 pt-1">
        {round.categories.map((cat) => {
          const zs = ZONE_STYLE[cat] ?? DEFAULT_ZONE;
          return (
            <motion.button
              key={cat}
              onClick={() => pick(cat)}
              disabled={!active || done}
              className={`flex-1 h-[70px] rounded-2xl border-2 font-black text-3xl uppercase tracking-widest ${zs.cls}`}
              style={{
                background: "rgba(0,0,0,0.65)",
                borderColor: zs.border,
                boxShadow: `0 0 18px ${zs.glow}, inset 0 0 20px ${zs.glow}`,
              }}
              whileHover={{ scale: 1.05, boxShadow: `0 0 35px ${zs.glow}` }}
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
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
              className="text-center">
              <div className="text-6xl mb-3">{score >= queue.length * 7 ? "🏆" : "⭐"}</div>
              <div className="text-3xl font-black text-white mb-1">{t.done}</div>
              <div className="text-xl font-bold" style={{ color: round.theme.accent }}>{score} {t.score}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
