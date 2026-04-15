"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WortWaechterRound, Language } from "@/lib/visualLab/languageTypes";

const T: Record<Language, { find: string; correct: string; wrong: string; lives: string; done: string }> = {
  de: { find: "Finde das richtig geschriebene Wort!", correct: "Richtig!", wrong: "Falsch!", lives: "Leben", done: "Klasse!" },
  hu: { find: "Keresd a helyesen írt szót!", correct: "Helyes!", wrong: "Hibás!", lives: "Élet", done: "Szuper!" },
  ro: { find: "Găsește cuvântul scris corect!", correct: "Corect!", wrong: "Greșit!", lives: "Vieți", done: "Bravo!" },
  en: { find: "Find the correctly spelled word!", correct: "Correct!", wrong: "Wrong!", lives: "Lives", done: "Well done!" },
};

// Scattered positions (% of container width/height) — up to 7 words
const SLOTS = [
  { x: 14, y: 16 }, { x: 58, y: 10 }, { x: 76, y: 44 },
  { x: 6,  y: 56 }, { x: 46, y: 60 }, { x: 28, y: 38 }, { x: 68, y: 74 },
];

// Gentle drift paths per bubble index
const DRIFTS = [
  { x: [0, 12, -8, 6, 0],   y: [0, -10, 14, -6, 0] },
  { x: [0, -14, 8, -4, 0],  y: [0, 12, -8, 10, 0] },
  { x: [0, 10, -12, 4, 0],  y: [0, -14, 6, -10, 0] },
  { x: [0, -6, 16, -10, 0], y: [0, 8, -12, 4, 0] },
  { x: [0, 14, -6, 8, 0],   y: [0, -6, 14, -12, 0] },
  { x: [0, -10, 4, -14, 0], y: [0, 14, -4, 8, 0] },
  { x: [0, 8, -14, 6, 0],   y: [0, -12, 8, -6, 0] },
];

type BubbleState = "idle" | "wrong" | "correct" | "gone";

export default function WortWaechterGame({
  lang,
  round,
  onDone,
}: {
  grade: number;
  lang: Language;
  round: WortWaechterRound;
  onDone?: (score: number) => void;
}) {
  const t = T[lang] ?? T.de;

  // Build shuffled word list once
  const [words] = useState<{ word: string; isCorrect: boolean }[]>(() =>
    [round.targetWord, ...round.wrongWords]
      .slice(0, 7)
      .sort(() => Math.random() - 0.5)
      .map((word) => ({ word, isCorrect: word === round.targetWord }))
  );

  const [states, setStates] = useState<BubbleState[]>(() => words.map(() => "idle"));
  const [lives, setLives] = useState(3);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);

  const handleClick = (idx: number) => {
    if (done || states[idx] !== "idle") return;
    const { isCorrect } = words[idx];

    if (isCorrect) {
      setStates((prev) => prev.map((s, i) => (i === idx ? "correct" : s === "idle" ? "gone" : s)));
      setFlash("correct");
      setDone(true);
      setTimeout(() => onDone?.(Math.max(lives, 1) * 30 + 10), 1800);
    } else {
      setStates((prev) => prev.map((s, i) => (i === idx ? "wrong" : s)));
      setFlash("wrong");
      const nl = lives - 1;
      setLives(nl);
      setTimeout(() => {
        setStates((prev) => prev.map((s, i) => (i === idx ? "gone" : s)));
        setFlash(null);
        if (nl <= 0) { setDone(true); onDone?.(0); }
      }, 650);
    }
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden" style={{ background: round.theme.bg }}>
      {/* BG radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 100%, ${round.theme.accent}22, transparent 65%)` }} />

      {/* Orbit ring */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <ellipse cx="50%" cy="50%" rx="48%" ry="42%" fill="none" stroke={round.theme.accent} strokeWidth="1" strokeDasharray="5 12" />
      </svg>

      {/* HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-20 pointer-events-none">
        <div className="bg-black/50 px-3 py-1 rounded-full border border-white/10 text-xs text-white/70">
          {t.lives}: <span className="text-rose-400">{"❤️".repeat(Math.max(0, lives))}</span>
        </div>
        <div className="bg-black/50 px-3 py-1 rounded-full border text-xs font-bold"
          style={{ borderColor: `${round.theme.accent}50`, color: round.theme.accent }}>
          {round.instruction}
        </div>
      </div>

      {/* Instruction */}
      <div className="absolute top-14 left-0 right-0 text-center z-10 pointer-events-none">
        <p className="text-white/45 text-xs uppercase tracking-widest">{t.find}</p>
      </div>

      {/* Floating bubbles */}
      {words.map((w, idx) => {
        const slot = SLOTS[idx] ?? SLOTS[0];
        const drift = DRIFTS[idx % DRIFTS.length];
        const st = states[idx];
        if (st === "gone") return null;

        const isWrong = st === "wrong";
        const isCorrect = st === "correct";

        return (
          <motion.button
            key={idx}
            onClick={() => handleClick(idx)}
            className="absolute z-10 rounded-full font-black text-white border-2 px-5 py-3 backdrop-blur-sm select-none"
            style={{
              left: `${slot.x}%`,
              top: `${slot.y}%`,
              fontSize: w.word.length > 10 ? "0.8rem" : w.word.length > 7 ? "0.95rem" : "1.1rem",
              background: isCorrect ? "rgba(34,197,94,0.2)" : isWrong ? "rgba(239,68,68,0.2)" : "rgba(0,0,0,0.5)",
              borderColor: isCorrect ? "#22c55e" : isWrong ? "#ef4444" : `${round.theme.accent}70`,
              boxShadow: isCorrect
                ? "0 0 35px rgba(34,197,94,0.7)"
                : isWrong
                ? "0 0 20px rgba(239,68,68,0.5)"
                : `0 0 12px ${round.theme.accent}28`,
              cursor: done ? "default" : "pointer",
            }}
            animate={
              st === "idle"
                ? { x: drift.x, y: drift.y }
                : st === "wrong"
                ? { x: [-6, 6, -5, 5, -3, 3, 0] }
                : { scale: [1, 1.25, 1.05, 1.15, 1] }
            }
            transition={
              st === "idle"
                ? { duration: 7 + idx * 1.2, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.4 }
            }
            whileHover={st === "idle" ? { scale: 1.1 } : {}}
          >
            {w.word}
          </motion.button>
        );
      })}

      {/* Flash result badge */}
      <AnimatePresence>
        {flash && (
          <motion.div
            key={flash}
            initial={{ opacity: 0, y: 15, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 px-8 py-3 rounded-2xl bg-black/90 border backdrop-blur-xl"
            style={{ borderColor: flash === "correct" ? "#22c55e" : "#ef4444" }}
          >
            <span className={`text-2xl font-black uppercase tracking-widest ${flash === "correct" ? "text-emerald-400" : "text-rose-400"}`}>
              {flash === "correct" ? t.correct : t.wrong}
            </span>
          </motion.div>
        )}
        {done && flash === "correct" && (
          <motion.div key="done-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/55 backdrop-blur-sm">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.3 }}
              className="text-center">
              <div className="text-6xl mb-3">⭐</div>
              <div className="text-3xl font-black text-emerald-400">{t.done}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
