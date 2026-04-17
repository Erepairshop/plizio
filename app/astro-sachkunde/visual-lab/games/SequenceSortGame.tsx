"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { SequenceSortRound, SequenceSortItem } from "@/lib/visualLab/types";

interface Props {
  round: SequenceSortRound;
  onDone?: (score: number, total: number) => void;
}

export default function SequenceSortGame({ round, onDone }: Props) {
  const [items, setItems] = useState<SequenceSortItem[]>([]);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    // Shuffle sequence initially
    const shuffled = [...round.sequence].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setCompleted(false);
    setScore(0);
    setSelectedIdx(null);
  }, [round]);

  const checkWin = (currentItems: SequenceSortItem[]) => {
    const isCorrect = currentItems.every((item, i) => item.id === round.sequence[i].id);
    if (isCorrect && !completed) {
      setCompleted(true);
      setScore(round.sequence.length);
      setTimeout(() => onDone?.(round.sequence.length, round.sequence.length), 1500);
    }
  };

  const handleSelect = (index: number) => {
    if (completed) return;
    if (selectedIdx === null) {
      setSelectedIdx(index);
    } else {
      // Swap items
      const newItems = [...items];
      const temp = newItems[index];
      newItems[index] = newItems[selectedIdx];
      newItems[selectedIdx] = temp;
      setItems(newItems);
      setSelectedIdx(null);
      checkWin(newItems);
    }
  };

  return (
    <div
      className="rounded-[30px] border p-6 text-white shadow-2xl min-h-[400px] flex flex-col"
      style={{
        background: `radial-gradient(circle at top, ${round.theme.accent}33 0%, ${round.theme.bg} 72%, #040816 100%)`,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">Zeitlinie Sortieren</p>
        <h2 className="text-2xl font-black text-white/90">{round.title}</h2>
        <p className="mt-2 text-sm font-medium text-cyan-200">{round.instruction}</p>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {items.map((item, index) => {
            const isCorrect = completed && item.id === round.sequence[index].id;
            return (
              <motion.button
                key={item.id}
                layout
                onClick={() => handleSelect(index)}
                className={`
                  relative flex w-32 flex-col items-center justify-center gap-3 rounded-2xl border p-4 transition-all
                  ${selectedIdx === index ? "scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "hover:scale-105"}
                `}
                style={{
                  background: isCorrect
                    ? "rgba(16,185,129,0.2)"
                    : selectedIdx === index
                      ? `${round.theme.accent}55`
                      : "rgba(255,255,255,0.05)",
                  borderColor: isCorrect
                    ? "rgba(16,185,129,0.8)"
                    : selectedIdx === index
                      ? round.theme.accent
                      : "rgba(255,255,255,0.15)",
                }}
              >
                <div className="absolute -top-3 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[#040816] border border-white/20 text-xs font-bold text-white/50">
                  {index + 1}
                </div>
                <span className="text-5xl">{item.emoji}</span>
                <span className="text-center text-sm font-semibold leading-tight text-white/80">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
        
        {!completed && (
          <div className="mt-8 text-center text-sm text-white/40">
            Tippe auf zwei Karten, um ihre Positionen zu tauschen.
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {completed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center text-xl font-bold text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
          >
            Richtige Reihenfolge!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
