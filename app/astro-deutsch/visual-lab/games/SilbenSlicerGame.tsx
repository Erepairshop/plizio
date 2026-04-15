"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SilbenSlicerRound, Language } from "@/lib/visualLab/languageTypes";

const T: Record<Language, { instruction: string; correct: string; wrong: string; lives: string; done: string; score: string; choose: string }> = {
  de: { instruction: "Wähle die richtige Silbentrennung!", correct: "Super Schnitt!", wrong: "Daneben!", lives: "Leben", done: "Fertig!", score: "Punkte", choose: "Wie wird das Wort getrennt?" },
  hu: { instruction: "Válaszd a helyes szótagolást!", correct: "Szuper vágás!", wrong: "Nem jó!", lives: "Élet", done: "Kész!", score: "Pont", choose: "Hogy tagolódik a szó?" },
  ro: { instruction: "Alege despărțirea corectă în silabe!", correct: "Tăietură bună!", wrong: "Greșit!", lives: "Vieți", done: "Gata!", score: "Scor", choose: "Cum se desparte cuvântul?" },
  en: { instruction: "Choose the correct syllable split!", correct: "Clean cut!", wrong: "Miss!", lives: "Lives", done: "Done!", score: "Score", choose: "How is the word split?" },
};

function buildOptions(syllables: string[]): string[][] {
  const correct = syllables;
  // Generate wrong options by shifting split points
  const word = syllables.join("");
  const wrongs: string[][] = [];

  if (syllables.length === 2) {
    // Try splitting at different positions
    for (let i = 1; i < word.length - 1; i++) {
      const candidate = [word.slice(0, i), word.slice(i)];
      if (candidate[0] !== correct[0]) { // different from correct
        wrongs.push(candidate);
        if (wrongs.length >= 2) break;
      }
    }
  } else if (syllables.length >= 3) {
    // Generate: merge first two, keep rest; and merge last two, keep rest
    wrongs.push([syllables[0] + syllables[1], ...syllables.slice(2)]);
    wrongs.push([...syllables.slice(0, syllables.length - 2), syllables[syllables.length - 2] + syllables[syllables.length - 1]]);
  }

  // Fill up to 2 wrongs if needed
  while (wrongs.length < 2) {
    const mid = Math.floor(word.length / 2) + wrongs.length;
    wrongs.push([word.slice(0, mid), word.slice(mid)]);
  }

  // Build 3 options: correct + 2 wrongs, shuffled
  const options = [correct, wrongs[0], wrongs[1].length ? wrongs[1] : wrongs[0]].slice(0, 3);
  return options.sort(() => Math.random() - 0.5);
}

function formatSplit(parts: string[]): string {
  return parts.join(" · ");
}

export default function SilbenSlicerGame({
  lang,
  round,
  onDone,
}: {
  grade: number;
  lang: Language;
  round: SilbenSlicerRound;
  onDone?: (score: number) => void;
}) {
  const t = T[lang] ?? T.de;

  const [items] = useState(() =>
    round.words.map((entry) => ({
      word: entry.word,
      syllables: entry.syllables,
      options: buildOptions(entry.syllables),
    }))
  );

  const [idx, setIdx] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [flash, setFlash] = useState<"correct" | "wrong" | null>(null);
  const [sliced, setSliced] = useState(false); // word splitting animation
  const [done, setDone] = useState(false);
  const [chosenOpt, setChosenOpt] = useState<string[] | null>(null);

  const current = items[idx];

  const handleOption = (opt: string[]) => {
    if (flash || done || !current) return;
    const isCorrect = opt.join("") === current.syllables.join("") &&
      opt.length === current.syllables.length &&
      opt.every((s, i) => s === current.syllables[i]);

    setChosenOpt(opt);
    setFlash(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
      setSliced(true);
      setScore((s) => s + 10);
    } else {
      setLives((l) => l - 1);
    }

    setTimeout(() => {
      setFlash(null);
      setSliced(false);
      setChosenOpt(null);
      const nextIdx = idx + 1;
      const newLives = isCorrect ? lives : lives - 1;
      if (nextIdx >= items.length || newLives <= 0) {
        setDone(true);
        onDone?.(isCorrect ? score + 10 : score);
      } else {
        setIdx(nextIdx);
      }
    }, 1100);
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden flex flex-col" style={{ background: round.theme.bg }}>
      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 60%, ${round.theme.accent}22, transparent 65%)` }} />

      {/* HUD */}
      <div className="relative z-20 flex justify-between px-4 pt-3 pb-2 shrink-0">
        <div className="bg-black/50 px-3 py-1 rounded-full border border-white/10 text-xs text-white/70">
          {t.lives}: <span className="text-rose-400">{"❤️".repeat(Math.max(0, lives))}</span>
        </div>
        <div className="bg-black/50 px-3 py-1 rounded-full border border-white/10 text-xs">
          <span className="text-white/50 mr-1">{t.score}</span>
          <span className="font-bold text-white">{score}</span>
        </div>
        <div className="text-white/40 text-xs font-mono self-center">{idx + 1}/{items.length}</div>
      </div>

      {/* Main area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-6 px-6">
        {/* Question */}
        <p className="text-white/50 text-xs uppercase tracking-widest">{t.choose}</p>

        {/* Word display — splits apart on correct */}
        <div className="flex items-center justify-center gap-0">
          <AnimatePresence mode="wait">
            {current && !done && (
              sliced ? (
                // Sliced state: syllables fly apart
                <motion.div key={`sliced-${idx}`} className="flex items-center gap-2">
                  {current.syllables.map((syl, si) => (
                    <motion.span
                      key={si}
                      initial={{ x: 0, opacity: 1 }}
                      animate={{ x: (si - (current.syllables.length - 1) / 2) * 30, opacity: 1 }}
                      className="font-black text-3xl text-white px-3 py-2 rounded-xl border"
                      style={{ borderColor: `${round.theme.accent}70`, background: `${round.theme.accent}20` }}
                    >
                      {syl}
                    </motion.span>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key={`word-${idx}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="font-black text-white text-4xl px-8 py-4 rounded-2xl border-2 backdrop-blur-sm"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    borderColor: flash === "correct"
                      ? "#22c55e"
                      : flash === "wrong"
                      ? "#ef4444"
                      : `${round.theme.accent}80`,
                    boxShadow: flash === "correct"
                      ? "0 0 30px rgba(34,197,94,0.6)"
                      : flash === "wrong"
                      ? "0 0 20px rgba(239,68,68,0.5)"
                      : `0 0 20px ${round.theme.accent}40`,
                  }}
                >
                  {current.word}
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* Flash label */}
        <AnimatePresence>
          {flash && (
            <motion.p key={flash + idx}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className={`text-xl font-black uppercase tracking-widest ${flash === "correct" ? "text-emerald-400" : "text-rose-400"}`}>
              {flash === "correct" ? t.correct : t.wrong}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Split options */}
        {current && !done && (
          <div className="flex flex-col gap-2.5 w-full max-w-xs">
            {current.options.map((opt, oi) => {
              const isChosen = chosenOpt === opt;
              const isCorrectOpt = opt.every((s, i) => s === current.syllables[i]) && opt.length === current.syllables.length;
              let btnColor = `${round.theme.accent}50`;
              let btnBg = "rgba(0,0,0,0.5)";
              if (isChosen && flash === "correct") { btnColor = "#22c55e"; btnBg = "rgba(34,197,94,0.15)"; }
              if (isChosen && flash === "wrong") { btnColor = "#ef4444"; btnBg = "rgba(239,68,68,0.15)"; }
              if (!isChosen && flash === "correct" && isCorrectOpt) { btnColor = "#22c55e60"; }

              return (
                <motion.button
                  key={oi}
                  onClick={() => handleOption(opt)}
                  disabled={!!flash || done}
                  className="w-full py-3 rounded-xl border-2 font-bold text-white text-lg backdrop-blur-sm transition-colors"
                  style={{ borderColor: btnColor, background: btnBg }}
                  whileHover={!flash ? { scale: 1.03, borderColor: round.theme.accent } : {}}
                  whileTap={!flash ? { scale: 0.97 } : {}}
                >
                  ✂️ {formatSplit(opt)}
                </motion.button>
              );
            })}
          </div>
        )}
      </div>

      {/* Done overlay */}
      <AnimatePresence>
        {done && (
          <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}
              className="text-center">
              <div className="text-6xl mb-3">{score >= items.length * 7 ? "🏆" : "⭐"}</div>
              <div className="text-3xl font-black text-white mb-1">{t.done}</div>
              <div className="text-xl font-bold" style={{ color: round.theme.accent }}>{score} {t.score}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
