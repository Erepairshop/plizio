"use client";
// TapToHighlight — tap words in a sentence to mark them
// Props: sentence (string — words separated by spaces, punctuation attached),
//        correctIndices (number[]), color (string),
//        label (what to tap for, e.g. "Tippe auf das Subjekt"),
//        onDone (correct: boolean) => void
import { memo, useState } from "react";
import { motion } from "framer-motion";

interface TapToHighlightProps {
  sentence: string;
  correctIndices: number[];
  color: string;
  label: string;
  checkLabel: string;
  onDone: (correct: boolean) => void;
}

const TapToHighlight = memo(function TapToHighlight({ sentence, correctIndices, color, label, checkLabel, onDone }: TapToHighlightProps) {
  const words = sentence.split(" ");
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggle = (i: number) => {
    if (submitted) return;
    setSelected(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const handleCheck = () => {
    setSubmitted(true);
    const correct = correctIndices.every(i => selected.has(i)) && selected.size === correctIndices.length;
    setTimeout(() => onDone(correct), 900);
  };

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <p className="text-xs font-semibold text-white/70 text-center px-2">{label}</p>
      <div className="flex flex-wrap gap-1.5 justify-center px-2">
        {words.map((w, i) => {
          let bg = "rgba(255,255,255,0.06)";
          let border = "rgba(255,255,255,0.12)";
          if (submitted) {
            if (correctIndices.includes(i)) { bg = `${color}33`; border = color; }
            else if (selected.has(i)) { bg = "#ef444422"; border = "#ef4444"; }
          } else if (selected.has(i)) {
            bg = `${color}33`; border = color;
          }
          return (
            <motion.button key={i}
              className="px-2 py-1 rounded-lg text-sm font-semibold border transition-all"
              style={{ background: bg, borderColor: border, color: "rgba(255,255,255,0.9)" }}
              whileTap={{ scale: 0.9 }} onClick={() => toggle(i)}>
              {w}
            </motion.button>
          );
        })}
      </div>
      {!submitted && (
        <motion.button className="px-6 py-2 rounded-xl text-white text-sm font-bold"
          style={{ background: color }} whileTap={{ scale: 0.95 }} onClick={handleCheck}>
          {checkLabel}
        </motion.button>
      )}
    </div>
  );
});
export default TapToHighlight;
