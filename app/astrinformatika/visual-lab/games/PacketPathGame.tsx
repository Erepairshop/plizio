"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { WortWaechterRound, Language } from "@/lib/visualLab/languageTypes";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const T: Record<Language, { route: string; block: string; lives: string; done: string; score: string; correct: string; wrong: string }> = {
  de: { route: "✓ ROUTE", block: "✗ BLOCK", lives: "Leben", done: "Fertig!", score: "Punkte", correct: "Richtig!", wrong: "Falsch!" },
  hu: { route: "✓ ROUTE", block: "✗ BLOCK", lives: "Élet", done: "Kész!", score: "Pont", correct: "Helyes!", wrong: "Hibás!" },
  ro: { route: "✓ ROUTE", block: "✗ BLOCK", lives: "Vieți", done: "Gata!", score: "Scor", correct: "Corect!", wrong: "Greșit!" },
  en: { route: "✓ ROUTE", block: "✗ BLOCK", lives: "Lives", done: "Done!", score: "Score", correct: "Correct!", wrong: "Wrong!" },
};

interface PacketItem {
  label: string;
  isTarget: boolean;
}

function buildQueue(round: WortWaechterRound): PacketItem[] {
  const items: PacketItem[] = [
    { label: round.targetWord, isTarget: true },
    ...round.wrongWords.map((w) => ({ label: w, isTarget: false })),
  ];
  return shuffle(items);
}

export default function PacketPathGame({
  grade,
  lang,
  round,
  onDone,
}: {
  grade: number;
  lang: Language;
  round: WortWaechterRound;
  onDone?: (score: number) => void;
}) {
  void grade;
  const t = T[lang] ?? T.de;

  const queue = useMemo(() => buildQueue(round), [round.id]);
  const [idx, setIdx] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const [done, setDone] = useState(false);
  const [slideDir, setSlideDir] = useState<1 | -1>(1);
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current !== null) window.clearTimeout(timer.current);
  }, []);

  const current = queue[idx];

  const decide = (routeChoice: boolean) => {
    if (flash || done || !current) return;

    const correct = routeChoice === current.isTarget;
    const newScore = correct ? score + 10 : score;
    const newLives = correct ? lives : lives - 1;

    if (correct) setScore(newScore);
    else setLives(newLives);
    setFlash(correct ? "correct" : "wrong");
    setSlideDir(routeChoice ? 1 : -1);

    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setFlash(null);
      const nextIdx = idx + 1;
      if (nextIdx >= queue.length || newLives <= 0) {
        setDone(true);
        onDone?.(newScore);
      } else {
        setIdx(nextIdx);
      }
      timer.current = null;
    }, 750);
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden flex flex-col" style={{ background: "#030f12" }}>
      {/* Network glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(34,211,238,0.10), transparent 60%)" }} />

      {/* Title */}
      <div className="relative z-20 text-center pt-2 pb-0 shrink-0">
        <span className="text-[11px] tracking-widest uppercase font-mono" style={{ color: "rgba(34,211,238,0.5)" }}>🌐 {round.title[lang] ?? round.title.en}</span>
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
        {round.instruction[lang] ?? round.instruction.en}
      </p>

      {/* Center packet display */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {current && !done && (
            <motion.div
              key={`packet-${idx}`}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDir * 120 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-center"
            >
              {/* Packet label */}
              <div
                className="px-8 py-5 rounded-xl border-2 font-bold text-xl font-mono"
                style={{
                  background: "rgba(3,15,18,0.9)",
                  borderColor: "rgba(34,211,238,0.5)",
                  boxShadow: "0 0 24px rgba(34,211,238,0.2), inset 0 0 16px rgba(34,211,238,0.04)",
                  color: "#22d3ee",
                  textShadow: "0 0 8px rgba(34,211,238,0.7)",
                }}
              >
                <div className="text-[10px] text-cyan-400/40 mb-1 tracking-widest">{lang === "de" ? "PAKET" : lang === "hu" ? "CSOMAG" : lang === "ro" ? "PACHET" : "PACKET"}</div>
                {current.label}
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

      {/* Router control buttons */}
      <div className="relative z-20 flex shrink-0 gap-3 px-3 pb-4 pt-1">
        <motion.button
          onClick={() => decide(true)}
          disabled={!!flash || done}
          className="flex-1 h-[66px] rounded-xl border-2 font-black text-lg tracking-widest"
          style={{
            background: "rgba(3,15,18,0.85)",
            borderColor: "#22c55e",
            color: "#86efac",
            boxShadow: "0 0 16px rgba(34,197,94,0.4), inset 0 0 16px rgba(34,197,94,0.06)",
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(34,197,94,0.6)" }}
          whileTap={{ scale: 0.96 }}
        >
          {t.route}
        </motion.button>
        <motion.button
          onClick={() => decide(false)}
          disabled={!!flash || done}
          className="flex-1 h-[66px] rounded-xl border-2 font-black text-lg tracking-widest"
          style={{
            background: "rgba(3,15,18,0.85)",
            borderColor: "#ef4444",
            color: "#fca5a5",
            boxShadow: "0 0 16px rgba(239,68,68,0.4), inset 0 0 16px rgba(239,68,68,0.06)",
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(239,68,68,0.6)" }}
          whileTap={{ scale: 0.96 }}
        >
          {t.block}
        </motion.button>
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
              <div className="text-xl font-bold font-mono" style={{ color: "#22d3ee" }}>{score} {t.score}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
