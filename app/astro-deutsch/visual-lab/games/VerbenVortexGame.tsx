"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { VerbenVortexRound } from "@/lib/visualLab/languageTypes";

type Lang = "de" | "hu" | "ro" | "en";

const DICTIONARY: Record<Lang, { title: string; correct: string; wrong: string }> = {
  en: { title: "Choose the correct verb", correct: "Correct!", wrong: "Wrong!" },
  de: { title: "Wähle das richtige Verb", correct: "Richtig!", wrong: "Falsch!" },
  hu: { title: "Válaszd ki a megfelelő igét", correct: "Helyes!", wrong: "Hibás!" },
  ro: { title: "Alege verbul corect", correct: "Corect!", wrong: "Greșit!" },
};

function shuffle<T>(values: T[]): T[] {
  const next = [...values];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const swapWith = Math.floor(Math.random() * (i + 1));
    [next[i], next[swapWith]] = [next[swapWith], next[i]];
  }
  return next;
}

export interface VerbenVortexGameProps {
  grade: number;
  lang: Lang;
  round: VerbenVortexRound;
  onDone?: (score: number) => void;
}

export default function VerbenVortexGame({ lang, round, onDone }: VerbenVortexGameProps) {
  const t = DICTIONARY[lang] ?? DICTIONARY.en;

  const allOptions = useMemo(() => {
    const set = new Set([round.correctVerb, ...round.wrongVerbs]);
    return shuffle(Array.from(set)).filter(Boolean);
  }, [round.correctVerb, round.wrongVerbs, round.id]);

  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [selected, setSelected] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    setGameState("playing");
    setSelected(null);
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [round.id]);

  const handleSelect = (option: string) => {
    if (gameState !== "playing") return;

    setSelected(option);
    const correct = option === round.correctVerb;
    setGameState(correct ? "won" : "lost");

    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (correct) {
        onDone?.(1);
      } else {
        setGameState("playing");
        setSelected(null);
      }
      timerRef.current = null;
    }, 700);
  };

  return (
    <div
      className="relative w-full h-[clamp(390px,78dvh,540px)] rounded-xl border border-fuchsia-500/20 overflow-hidden"
      style={{ background: `linear-gradient(140deg, ${round.theme.bg}, ${round.theme.accent}22)` }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: `radial-gradient(circle at 50% 24%, ${round.theme.accent}44, transparent 44%), radial-gradient(circle at 14% 86%, ${round.theme.accent}20, transparent 35%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full p-4 md:p-5">
        <div className="mb-3 rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-xs font-bold text-white/85 sm:text-sm">
          {round.title[lang] ?? round.title.en}
        </div>

        <div className="relative mb-4 grid place-items-center">
          <div
            className="rounded-full border-2 border-white/25 bg-slate-900/85 text-white shadow-2xl"
            style={{ width: 104, height: 104 }}
          >
            <div className="h-full flex items-center justify-center text-3xl sm:text-4xl font-black">{round.pronoun}</div>
          </div>
          <p className="mt-2 text-center text-sm text-white/80">{t.title}</p>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {allOptions.map((option) => {
            const isSelected = selected === option;
            const isCorrect = option === round.correctVerb;
            return (
              <button
                key={option}
                onPointerDown={() => handleSelect(option)}
                disabled={gameState !== "playing"}
                className={`min-h-14 rounded-xl border-2 px-4 py-3 text-left font-bold text-base transition sm:text-lg md:text-xl active:scale-[.985] ${
                  gameState === "playing"
                    ? "border-white/20 bg-black/45 text-white/95 hover:bg-white/10"
                    : isSelected && isCorrect
                      ? "border-emerald-300 bg-emerald-500/20 text-emerald-100"
                      : isSelected && !isCorrect
                        ? "border-rose-300 bg-rose-500/20 text-rose-100"
                        : "border-white/12 bg-black/25 text-white/70"
                }`}
              >
                <span className="leading-snug">{option}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {gameState !== "playing" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-3 bottom-5 z-20 rounded-xl border border-white/20 bg-black/70 px-4 py-3 text-center shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <p className={`text-2xl sm:text-3xl font-black ${gameState === "won" ? "text-emerald-300" : "text-rose-300"}`}>
                {gameState === "won" ? t.correct : t.wrong}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
