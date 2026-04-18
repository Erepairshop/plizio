"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type MemoryPairsRound = {
  id: string;
  taskDescription: LocalizedText;
  pairs: { id: string; content: string }[];
};

export default function MemoryPairsView({
  rounds,
  color,
  lang,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<MemoryPairsRound>) {
  const [currentRoundIdx, setCurrentRoundIdx] = useState(0);
  const [cards, setCards] = useState<{ id: string; pairId: string; content: string; isFlipped: boolean; isMatched: boolean }[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const currentRound = rounds[currentRoundIdx];

  useEffect(() => {
    if (!currentRound) return;

    const newCards: { id: string; pairId: string; content: string; isFlipped: boolean; isMatched: boolean }[] = [];
    currentRound.pairs.forEach((pair: any, idx: number) => {
      newCards.push({ id: `card-${idx}-A`, pairId: pair.id, content: pair.content, isFlipped: false, isMatched: false });
      newCards.push({ id: `card-${idx}-B`, pairId: pair.id, content: pair.content, isFlipped: false, isMatched: false });
    });

    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }

    setCards(newCards);
    setFlippedIndices([]);
  }, [currentRound]);

  if (!currentRound) return null;

  const handleCardClick = (index: number) => {
    if (cards[index].isMatched || cards[index].isFlipped || flippedIndices.length === 2) {
      return;
    }

    const newFlippedIndices = [...flippedIndices, index];
    setFlippedIndices(newFlippedIndices);

    setCards((prev) =>
      prev.map((card, i) => (i === index ? { ...card, isFlipped: true } : card))
    );

    if (newFlippedIndices.length === 2) {
      const [firstIdx] = newFlippedIndices;
      const firstCard = cards[firstIdx];
      const secondCard = cards[index];

      if (firstCard.pairId === secondCard.pairId) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, i) =>
              i === firstIdx || i === index ? { ...card, isMatched: true } : card
            )
          );
          setFlippedIndices([]);
          setScore((s) => s + 1);
          if (onCorrect) onCorrect();

          const matchedCount = cards.filter((c) => c.isMatched).length;
          if (matchedCount + 2 === cards.length) {
            setTimeout(() => {
              if (currentRoundIdx < rounds.length - 1) {
                setCurrentRoundIdx((prev) => prev + 1);
              } else {
                onDone(score + 1, rounds.length * (cards.length / 2));
              }
            }, 800);
          }
        }, 500);
      } else {
        if (onWrong) onWrong();
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card, i) =>
              i === firstIdx || i === index ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  const progress = (currentRoundIdx / rounds.length) * 100;
  const gridColsClass = cards.length <= 12 ? "grid-cols-3 md:grid-cols-4" : "grid-cols-4";

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4 space-y-6">
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
          <span>{`Round ${currentRoundIdx + 1} / ${rounds.length}`}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: `${(currentRoundIdx / rounds.length) * 100}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 min-h-[60px] flex items-center justify-center">
        {currentRound.taskDescription[lang]}
      </h2>

      <div className={`grid ${gridColsClass} gap-3 md:gap-4 w-full aspect-square max-w-md`}>
        {cards.map((card, index) => (
          <motion.button
            key={card.id}
            onClick={() => handleCardClick(index)}
            className="relative w-full h-full rounded-xl flex items-center justify-center text-3xl md:text-5xl shadow-sm focus:outline-none focus:ring-4 focus:ring-offset-2"
            style={{
              backgroundColor: card.isMatched ? "transparent" : card.isFlipped ? "white" : color,
              border: card.isMatched ? `2px dashed ${color}` : "none",
              color: card.isFlipped ? color : "transparent",
              minHeight: "44px",
              minWidth: "44px",
              cursor: card.isMatched ? "default" : "pointer"
            }}
            whileHover={!card.isMatched && !card.isFlipped ? { scale: 1.05 } : {}}
            whileTap={!card.isMatched && !card.isFlipped ? { scale: 0.95 } : {}}
            animate={{ rotateY: card.isFlipped ? 180 : 0, opacity: card.isMatched ? 0.3 : 1 }}
            transition={{ duration: 0.4 }}
            disabled={card.isMatched || card.isFlipped}
            aria-label={card.isFlipped || card.isMatched ? card.content : "Hidden card"}
            tabIndex={0}
          >
            <div style={{ transform: card.isFlipped ? "rotateY(180deg)" : "none" }}>
              {(card.isFlipped || card.isMatched) ? card.content : "?"}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
