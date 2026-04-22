"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TippSturmRound, Language } from "@/lib/visualLab/languageTypes";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const T: Record<Language, { flash: string; select: string; done: string; score: string; memorize: string; pick: string }> = {
  de: { flash: "MERKE!", select: "Was sahst du?", done: "Fertig!", score: "Punkte", memorize: "Merke dir diese Dateien!", pick: "Wähle die gemerkten:" },
  hu: { flash: "JEGYEZD MEG!", select: "Mit láttál?", done: "Kész!", score: "Pont", memorize: "Jegyezd meg ezeket!", pick: "Válaszd ki a látottakat:" },
  ro: { flash: "MEMOREAZĂ!", select: "Ce ai văzut?", done: "Gata!", score: "Scor", memorize: "Memorează fișierele!", pick: "Selectează ce ai văzut:" },
  en: { flash: "MEMORIZE!", select: "What did you see?", done: "Done!", score: "Score", memorize: "Memorize these files!", pick: "Pick what you saw:" },
};

function generateDecoys(words: string[]): string[] {
  const decoys: string[] = [];
  for (const word of words) {
    const dotIdx = word.lastIndexOf(".");
    if (dotIdx > 0) {
      const base = word.slice(0, dotIdx);
      const ext = word.slice(dotIdx);
      decoys.push(`${base}2${ext}`);
      decoys.push(`${base}_copy${ext}`);
    } else {
      decoys.push(`${word}2`);
      decoys.push(`${word}_x`);
    }
  }
  return decoys;
}

type Phase = "flash" | "select" | "result";

export default function VirusVaultGame({
  grade,
  lang,
  round,
  onDone,
}: {
  grade: number;
  lang: Language;
  round: TippSturmRound;
  onDone?: (score: number) => void;
}) {
  void grade;
  const t = T[lang] ?? T.de;

  const [phase, setPhase] = useState<Phase>("flash");
  const [timeLeft, setTimeLeft] = useState(round.flashDuration);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [done, setDone] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const originals = round.words;
  const allItems = useMemo(() => {
    const decoys = generateDecoys(originals);
    return shuffle([...originals, ...decoys]);
  }, [round.id]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (phase !== "flash") return;
    const interval = 100;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= interval) {
          clearInterval(timerRef.current!);
          setPhase("select");
          return 0;
        }
        return prev - interval;
      });
    }, interval);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase]);

  const toggleSelect = (item: string) => {
    if (phase !== "select") return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const confirm = () => {
    if (phase !== "select") return;
    let score = 0;
    for (const orig of originals) {
      if (selected.has(orig)) score += 10;
    }
    for (const item of selected) {
      if (!originals.includes(item)) score = Math.max(0, score - 5);
    }
    setFinalScore(score);
    setDone(true);
    setPhase("result");
    onDone?.(score);
  };

  const pct = timeLeft / round.flashDuration;

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden flex flex-col" style={{ background: "#150505" }}>
      {/* Red glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(248,113,113,0.12), transparent 60%)" }} />

      {/* Scan line animation during flash */}
      {phase === "flash" && (
        <motion.div
          className="absolute inset-x-0 h-1 pointer-events-none z-10"
          style={{ background: "rgba(248,113,113,0.3)" }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* Title */}
      <div className="relative z-20 text-center pt-2 pb-0 shrink-0">
        <span className="text-[11px] tracking-widest uppercase font-mono" style={{ color: "rgba(248,113,113,0.5)" }}>🔐 Virus Vault</span>
      </div>

      {/* HUD */}
      <div className="relative z-20 flex justify-between items-center px-4 pt-1 pb-1 shrink-0">
        <div className="bg-black/60 px-3 py-1 rounded-full border border-red-400/20 text-xs font-mono text-red-300/70">
          {phase === "flash" ? t.memorize : phase === "select" ? t.pick : t.done}
        </div>
        {phase === "flash" && (
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-black/50 rounded-full border border-red-400/20 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "#f87171", width: `${pct * 100}%` }}
                animate={{ width: `${pct * 100}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        )}
        {phase !== "flash" && (
          <div className="bg-black/60 px-3 py-1 rounded-full border border-red-400/20 text-xs font-mono">
            <span className="text-red-400/50 mr-1">{t.score}</span>
            <span className="font-bold text-red-300">{finalScore}</span>
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="relative flex-1 overflow-hidden px-3 py-2">
        {phase === "flash" && (
          <div className="grid grid-cols-3 gap-2 h-full content-center">
            {originals.map((word) => (
              <motion.div
                key={word}
                className="flex items-center justify-center px-2 py-2 rounded-lg border text-center font-mono text-sm font-bold"
                style={{
                  background: "rgba(21,5,5,0.9)",
                  borderColor: "rgba(248,113,113,0.6)",
                  color: "#fca5a5",
                  boxShadow: "0 0 12px rgba(248,113,113,0.3)",
                }}
                animate={{ boxShadow: ["0 0 8px rgba(248,113,113,0.2)", "0 0 20px rgba(248,113,113,0.5)", "0 0 8px rgba(248,113,113,0.2)"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                {word}
              </motion.div>
            ))}
          </div>
        )}

        {phase === "select" && (
          <div className="grid grid-cols-3 gap-2 h-full content-start overflow-y-auto">
            {allItems.map((item) => {
              const isSelected = selected.has(item);
              return (
                <motion.button
                  key={item}
                  onClick={() => toggleSelect(item)}
                  className="px-2 py-2 rounded-lg border text-center font-mono text-sm font-bold"
                  style={{
                    background: isSelected ? "rgba(248,113,113,0.2)" : "rgba(21,5,5,0.85)",
                    borderColor: isSelected ? "#f87171" : "rgba(248,113,113,0.3)",
                    color: isSelected ? "#fca5a5" : "rgba(252,165,165,0.5)",
                    boxShadow: isSelected ? "0 0 14px rgba(248,113,113,0.4)" : "none",
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {item}
                </motion.button>
              );
            })}
          </div>
        )}

        {phase === "result" && (
          <div className="grid grid-cols-3 gap-2 h-full content-start overflow-y-auto">
            {allItems.map((item) => {
              const isOrig = originals.includes(item);
              const wasSel = selected.has(item);
              const correct = isOrig && wasSel;
              const miss = isOrig && !wasSel;
              const fp = !isOrig && wasSel;
              return (
                <div
                  key={item}
                  className="px-2 py-2 rounded-lg border text-center font-mono text-xs font-bold"
                  style={{
                    background: correct ? "rgba(34,197,94,0.15)" : miss ? "rgba(251,191,36,0.1)" : fp ? "rgba(239,68,68,0.15)" : "rgba(21,5,5,0.6)",
                    borderColor: correct ? "#22c55e" : miss ? "#fbbf24" : fp ? "#ef4444" : "rgba(248,113,113,0.15)",
                    color: correct ? "#86efac" : miss ? "#fde68a" : fp ? "#fca5a5" : "rgba(252,165,165,0.3)",
                  }}
                >
                  {correct ? "✓ " : miss ? "? " : fp ? "✗ " : ""}{item}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Confirm button */}
      {phase === "select" && (
        <div className="relative z-20 shrink-0 px-3 pb-4">
          <motion.button
            onClick={confirm}
            className="w-full h-[52px] rounded-xl border-2 font-black text-lg font-mono uppercase tracking-widest"
            style={{
              background: "rgba(21,5,5,0.85)",
              borderColor: "#f87171",
              color: "#fca5a5",
              boxShadow: "0 0 16px rgba(248,113,113,0.4)",
            }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 28px rgba(248,113,113,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            🔐 {t.done}
          </motion.button>
        </div>
      )}

      {/* Done overlay */}
      <AnimatePresence>
        {done && phase === "result" && (
          <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="absolute bottom-0 inset-x-0 z-40 flex items-end justify-center pb-6">
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-center">
              <div className="text-4xl mb-1">{finalScore >= originals.length * 8 ? "🏆" : "⭐"}</div>
              <div className="text-xl font-black text-white font-mono">{finalScore} {t.score}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
