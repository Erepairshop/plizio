"use client";
// FillTheGap — fill-in-the-blank with choice buttons
// Shows sentence with "___" placeholder, user taps an option to fill it
import { memo, useState } from "react";
import { motion } from "framer-motion";
import { fireWrongAnswer } from "@/components/AITutorOverlay";

interface FillTheGapProps {
  sentence: string;   // sentence with "___" placeholder
  options: string[];  // 3-4 choices
  correct: string;    // correct choice
  color: string;
  onDone: (isCorrect: boolean) => void;
}

const FillTheGap = memo(function FillTheGap({ sentence, options, correct, color, onDone }: FillTheGapProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const parts = sentence.split("___");

  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt !== correct) {
      fireWrongAnswer({ question: sentence, wrongAnswer: opt, correctAnswer: correct, topic: "Fill the Gap", lang: "de" });
    }
    setTimeout(() => onDone(opt === correct), 800);
  };

  const isCorrect = selected === correct;

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Sentence display with filled gap */}
      <div className="w-full rounded-2xl px-4 py-4 text-center"
        style={{ background: "rgba(255,255,255,0.04)", border: `2px solid ${color}33` }}>
        <p className="text-white font-bold text-base leading-relaxed">
          {parts[0]}
          <span className="inline-block min-w-12 mx-1 px-2 py-0.5 rounded-lg font-black text-base"
            style={{
              background: selected ? (isCorrect ? "rgba(0,255,136,0.25)" : "rgba(255,107,107,0.2)") : `${color}22`,
              border: `2px solid ${selected ? (isCorrect ? "#00FF88" : "#FF6B6B") : color}`,
              color: selected ? (isCorrect ? "#00FF88" : "#FF6B6B") : color,
            }}>
            {selected ?? "___"}
          </span>
          {parts[1]}
        </p>
        {selected && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-xs font-black mt-2"
            style={{ color: isCorrect ? "#00FF88" : "#FF6B6B" }}>
            {isCorrect ? "✅" : `❌ → ${correct}`}
          </motion.p>
        )}
      </div>
      {/* Option buttons */}
      <div className="flex gap-2 w-full flex-wrap justify-center">
        {options.map(opt => (
          <motion.button key={opt}
            onClick={() => handleSelect(opt)}
            className="flex-1 min-w-16 py-3 rounded-xl font-black text-base"
            style={{
              background: selected === opt
                ? (opt === correct ? "rgba(0,255,136,0.2)" : "rgba(255,107,107,0.15)")
                : "rgba(255,255,255,0.06)",
              border: `2px solid ${selected === opt
                ? (opt === correct ? "#00FF88" : "#FF6B6B")
                : "rgba(255,255,255,0.2)"}`,
              color: selected === opt
                ? (opt === correct ? "#00FF88" : "#FF6B6B")
                : "white",
            }}
            whileTap={!selected ? { scale: 0.93 } : {}}>
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
});

export default FillTheGap;
