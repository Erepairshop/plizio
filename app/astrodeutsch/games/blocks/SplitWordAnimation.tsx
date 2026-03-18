"use client";
// SplitWordAnimation — shows a separable verb splitting
// Props: prefix (string), stem (string), fullVerb (string), sentence (string — use ___ for prefix),
//        color (string), nextLabel (string), onNext () => void
import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplitWordAnimationProps {
  prefix: string;
  stem: string;
  fullVerb: string;
  sentence: string;
  color: string;
  nextLabel: string;
  splitLabel: string;
  showLabel: string;
  onNext: () => void;
}

const SplitWordAnimation = memo(function SplitWordAnimation({
  prefix, stem, fullVerb, sentence, color, nextLabel, splitLabel, showLabel, onNext,
}: SplitWordAnimationProps) {
  const [phase, setPhase] = useState<"intro" | "split" | "sentence">("intro");

  const sentenceParts = sentence.split("___");

  return (
    <div className="w-full flex flex-col items-center gap-4 py-2">
      <AnimatePresence mode="wait">
        {phase === "intro" && (
          <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4">
            <div className="px-6 py-3 rounded-2xl border-2 text-2xl font-black text-white"
              style={{ borderColor: color, background: `${color}22` }}>
              {fullVerb}
            </div>
            <motion.button className="px-6 py-2.5 rounded-xl text-white text-sm font-bold"
              style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={() => setPhase("split")}>
              {splitLabel}
            </motion.button>
          </motion.div>
        )}
        {phase === "split" && (
          <motion.div key="split" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-1 text-2xl font-black">
              <motion.span initial={{ x: 0 }} animate={{ x: -8 }} transition={{ duration: 0.5 }}
                className="px-3 py-2 rounded-xl border-2"
                style={{ borderColor: color, background: `${color}33`, color: "#fff" }}>
                {prefix}
              </motion.span>
              <motion.span initial={{ x: 0 }} animate={{ x: 8 }} transition={{ duration: 0.5 }}
                className="px-3 py-2 rounded-xl border-2 border-white/30 text-white/90">
                {stem}
              </motion.span>
            </div>
            <motion.button className="px-6 py-2.5 rounded-xl text-white text-sm font-bold"
              style={{ background: color }} whileTap={{ scale: 0.95 }}
              onClick={() => setPhase("sentence")}>
              {showLabel}
            </motion.button>
          </motion.div>
        )}
        {phase === "sentence" && (
          <motion.div key="sentence" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4">
            <div className="px-4 py-3 rounded-2xl border text-base font-semibold text-center text-white/90 leading-relaxed"
              style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.05)" }}>
              {sentenceParts.map((part, i) => (
                <span key={i}>
                  {part}
                  {i < sentenceParts.length - 1 && (
                    <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }} className="font-black px-1 rounded"
                      style={{ color }}>
                      {prefix}
                    </motion.span>
                  )}
                </span>
              ))}
            </div>
            <motion.button className="px-6 py-2.5 rounded-xl text-white text-sm font-bold"
              style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={onNext}>
              {nextLabel}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
export default SplitWordAnimation;
