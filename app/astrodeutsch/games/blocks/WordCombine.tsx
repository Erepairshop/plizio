"use client";
// WordCombine — word-part combination puzzle
// User taps chips (prefix, stem, suffix) in order to assemble a compound word
import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WordCombineProps {
  prefix?: string;   // optional prefix (e.g. "be-")
  stem: string;      // word stem (e.g. "spielen")
  suffix?: string;   // optional suffix (e.g. "-ung")
  result: string;    // expected assembled result (e.g. "Bespielung")
  color: string;
  onDone: (isCorrect: boolean) => void;
}

const WordCombine = memo(function WordCombine({ prefix, stem, suffix, result, color, onDone }: WordCombineProps) {
  const parts = [
    ...(prefix ? [prefix] : []),
    stem,
    ...(suffix ? [suffix] : []),
  ];

  const [tapped, setTapped] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const tapPart = (part: string) => {
    if (done || tapped.includes(part)) return;
    const next = [...tapped, part];
    setTapped(next);
    if (next.length === parts.length) {
      setDone(true);
      setTimeout(() => onDone(true), 1100);
    }
  };

  const combined = tapped
    .map(p => p.replace(/^-/, "").replace(/-$/, ""))
    .join("");

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Parts chips */}
      <div className="flex gap-2 justify-center flex-wrap">
        {parts.map((part, i) => {
          const isTapped = tapped.includes(part);
          return (
            <motion.button key={`${part}-${i}`}
              onClick={() => tapPart(part)}
              className="px-4 py-2.5 rounded-xl font-black text-lg border-2"
              style={{
                background: isTapped ? `${color}33` : "rgba(255,255,255,0.08)",
                borderColor: isTapped ? color : "rgba(255,255,255,0.2)",
                color: isTapped ? color : "rgba(255,255,255,0.8)",
                opacity: isTapped ? 0.5 : 1,
              }}
              whileTap={!isTapped ? { scale: 0.93 } : {}}>
              {part}
            </motion.button>
          );
        })}
      </div>

      {/* Result assembly display */}
      <div className="min-h-14 w-full flex items-center justify-center rounded-2xl"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div key="done"
              initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="text-center px-4">
              <p className="text-2xl font-black" style={{ color }}>{result}</p>
              <p className="text-xs font-bold mt-1" style={{ color: "#00FF88" }}>✅</p>
            </motion.div>
          ) : tapped.length > 0 ? (
            <motion.p key="building"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-xl font-black text-white/60">
              {combined}
              <span className="animate-pulse">_</span>
            </motion.p>
          ) : (
            <p className="text-white/20 text-sm">...</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

export default WordCombine;
