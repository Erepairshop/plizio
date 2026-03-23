"use client";
// SentenceReorder — tap-to-place word ordering game
// User taps word chips to move them into answer slots in order
import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

interface SentenceReorderProps {
  words: string[];       // scrambled word tokens
  correct: string[];     // correct order (same tokens)
  color: string;
  onDone: (isCorrect: boolean) => void;
}

const SentenceReorder = memo(function SentenceReorder({ words, correct, color, onDone }: SentenceReorderProps) {
  const [pool, setPool] = useState<string[]>(() => [...words].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const tapFromPool = (word: string, idx: number) => {
    if (submitted) return;
    const newPool = [...pool];
    newPool.splice(idx, 1);
    const newPlaced = [...placed, word];
    setPool(newPool);
    setPlaced(newPlaced);
    if (newPlaced.length === correct.length) {
      const ok = newPlaced.every((w, i) => w === correct[i]);
      setIsCorrect(ok);
      setSubmitted(true);
      if (!ok) {
        fireWrongAnswer({
          question: "Sentence Reorder",
          wrongAnswer: newPlaced.join(" "),
          correctAnswer: correct.join(" "),
          topic: "Sentence Reorder",
          lang: "hu",
        });
      }
      setTimeout(() => onDone(ok), 900);
    }
  };

  const tapFromPlaced = (idx: number) => {
    if (submitted) return;
    const word = placed[idx];
    const newPlaced = [...placed];
    newPlaced.splice(idx, 1);
    setPlaced(newPlaced);
    setPool(prev => [...prev, word]);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Answer slots */}
      <div className="flex flex-wrap gap-1.5 justify-center min-h-10 px-2 py-2 rounded-2xl"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${submitted ? (isCorrect ? "#00FF88" : "#FF6B6B") : `${color}44`}` }}>
        {placed.length === 0 && (
          <span className="text-white/20 text-xs self-center">...</span>
        )}
        <AnimatePresence>
          {placed.map((word, i) => (
            <motion.button key={`placed-${i}-${word}`}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              className="px-2.5 py-1 rounded-lg text-sm font-bold border-2"
              style={{
                background: submitted ? (isCorrect ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)") : `${color}22`,
                borderColor: submitted ? (isCorrect ? "#00FF88" : "#FF6B6B") : color,
                color: "rgba(255,255,255,0.9)",
              }}
              whileTap={!submitted ? { scale: 0.9 } : {}}
              onClick={() => tapFromPlaced(i)}>
              {word}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      {/* Word pool */}
      <div className="flex flex-wrap gap-2 justify-center px-2">
        <AnimatePresence>
          {pool.map((word, i) => (
            <motion.button key={`pool-${i}-${word}`}
              initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8 }}
              className="px-3 py-1.5 rounded-xl text-sm font-bold border-2"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.9)",
              }}
              whileTap={{ scale: 0.92 }}
              onClick={() => tapFromPool(word, i)}>
              {word}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      {submitted && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-center text-sm font-black"
          style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
          {isCorrect ? "✅" : `❌ → ${correct.join(" ")}`}
        </motion.p>
      )}
    </div>
  );
});

export default SentenceReorder;
