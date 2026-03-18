"use client";
// MemoryPairCards — flip card memory game, match pairs
// Props: pairs ({a, b}[]), color, onDone () => void
import { memo, useState } from "react";
import { motion } from "framer-motion";

interface MemoryPairCardsProps {
  pairs: { a: string; b: string }[];
  color: string;
  onDone: () => void;
}

const MemoryPairCards = memo(function MemoryPairCards({ pairs, color, onDone }: MemoryPairCardsProps) {
  const [cards] = useState(() => {
    const all = pairs.flatMap((p, i) => [
      { id: `a${i}`, pairId: i, text: p.a },
      { id: `b${i}`, pairId: i, text: p.b },
    ]).sort(() => Math.random() - 0.5);
    return all;
  });
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [pending, setPending] = useState<string | null>(null);
  const [blocked, setBlocked] = useState(false);

  const handleFlip = (id: string) => {
    const card = cards.find(c => c.id === id);
    if (!card) return;
    if (blocked || flipped.has(id) || matched.has(card.pairId)) return;
    const newFlipped = new Set(flipped).add(id);
    setFlipped(newFlipped);
    if (!pending) {
      setPending(id);
    } else {
      const a = cards.find(c => c.id === pending)!;
      const b = card;
      if (a.pairId === b.pairId) {
        const newMatched = new Set(matched).add(a.pairId);
        setMatched(newMatched);
        setPending(null);
        if (newMatched.size === pairs.length) setTimeout(onDone, 600);
      } else {
        setBlocked(true);
        setTimeout(() => {
          setFlipped(prev => { const n = new Set(prev); n.delete(pending); n.delete(id); return n; });
          setPending(null);
          setBlocked(false);
        }, 900);
      }
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2 w-full px-1">
      {cards.map(card => {
        const isFlipped = flipped.has(card.id) || matched.has(card.pairId);
        const isMatched = matched.has(card.pairId);
        return (
          <motion.button key={card.id}
            className="h-14 rounded-xl border-2 font-bold text-xs flex items-center justify-center transition-all"
            style={{
              background: isMatched ? `${color}33` : isFlipped ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
              borderColor: isMatched ? color : isFlipped ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.9)",
            }}
            whileTap={{ scale: 0.93 }} onClick={() => handleFlip(card.id)}>
            {isFlipped ? card.text : "?"}
          </motion.button>
        );
      })}
    </div>
  );
});
export default MemoryPairCards;
