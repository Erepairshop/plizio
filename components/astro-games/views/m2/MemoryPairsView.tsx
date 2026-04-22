"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AstroGameProps, LocalizedText } from "../../types";

export type MemoryPairsRound = {
  id: string;
  taskDescription?: LocalizedText;
  pairs: { id: string; content: LocalizedText; emoji?: string }[];
};

type CardState = {
  uniqueId: string;
  pairId: string;
  content: LocalizedText;
  emoji?: string;
  isFlipped: boolean;
  isMatched: boolean;
};

export default function MemoryPairsView({
  rounds,
  color,
  lang,
  onDone,
  onCorrect,
  onWrong,
}: AstroGameProps<MemoryPairsRound>) {
  const [roundIdx, setRoundIdx] = useState(0);
  const [cards, setCards] = useState<CardState[]>([]);
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const currentRound = rounds[roundIdx];

  useEffect(() => {
    if (!currentRound) return;

    // Generate pairs (duplicate each item)
    const newCards: CardState[] = [];
    currentRound.pairs.forEach((pair) => {
      newCards.push({
        uniqueId: `${pair.id}-A`,
        pairId: pair.id,
        content: pair.content,
        emoji: pair.emoji,
        isFlipped: false,
        isMatched: false,
      });
      newCards.push({
        uniqueId: `${pair.id}-B`,
        pairId: pair.id,
        content: pair.content,
        emoji: pair.emoji,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }

    setCards(newCards);
    setFlippedIds([]);
    setMatchedPairs(new Set());
    setIsProcessing(false);
  }, [currentRound]);

  const handleNextRound = () => {
    if (roundIdx + 1 < rounds.length) {
      setRoundIdx(roundIdx + 1);
    } else {
      const totalPairs = rounds.reduce((acc, r) => acc + r.pairs.length, 0);
      onDone(score, totalPairs * 10);
    }
  };

  const handleCardClick = (uniqueId: string) => {
    if (isProcessing) return;

    const card = cards.find((c) => c.uniqueId === uniqueId);
    if (!card || card.isFlipped || card.isMatched || flippedIds.includes(uniqueId)) return;

    const newFlipped = [...flippedIds, uniqueId];
    setFlippedIds(newFlipped);

    // Update state to show flip immediately
    setCards((prev) =>
      prev.map((c) => (c.uniqueId === uniqueId ? { ...c, isFlipped: true } : c))
    );

    if (newFlipped.length === 2) {
      setIsProcessing(true);
      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find((c) => c.uniqueId === firstId);
      const secondCard = cards.find((c) => c.uniqueId === secondId);

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // Match
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.uniqueId === firstId || c.uniqueId === secondId
                ? { ...c, isMatched: true, isFlipped: false }
                : c
            )
          );
          setMatchedPairs((prev) => new Set(prev).add(firstCard.pairId));
          setScore((s) => s + 10);
          setFlippedIds([]);
          setIsProcessing(false);
          onCorrect?.();

          // Check round completion
          const currentMatches = matchedPairs.size + 1;
          if (currentMatches === currentRound.pairs.length) {
            setTimeout(handleNextRound, 800);
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.uniqueId === firstId || c.uniqueId === secondId
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setScore((s) => Math.max(0, s - 2));
          setFlippedIds([]);
          setIsProcessing(false);
          onWrong?.();
        }, 1000);
      }
    }
  };

  if (!currentRound) return null;

  const defaultTasks: Record<string, string> = {
    en: "Find the matching pairs!",
    hu: "Keresd meg a párokat!",
    de: "Finde die passenden Paare!",
    ro: "Găsește perechile potrivite!"
  };
  const taskText = currentRound.taskDescription 
    ? (currentRound.taskDescription[lang as keyof LocalizedText] || currentRound.taskDescription.en)
    : (defaultTasks[lang] || defaultTasks.en);

  const totalPairs = currentRound.pairs.length;
  const currentPairProgress = matchedPairs.size;

  const gridColsClass = cards.length <= 12 ? "grid-cols-3 md:grid-cols-4" : "grid-cols-4";

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
      {/* Header */}
      <div className="w-full bg-black/40 p-4 rounded-xl mb-4 text-center border-2 border-white/10">
        <div className="text-xl font-black text-white mb-2">🎯 {taskText}</div>
        <div className="text-white/70 font-bold mb-2">
          {currentPairProgress} / {totalPairs}
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color || "#4ade80" }}
            initial={{ width: 0 }}
            animate={{ width: `${(currentPairProgress / totalPairs) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="w-full flex justify-between mb-4 font-bold text-white/50 text-sm px-2">
        <span>Score: {score}</span>
        <span>Round: {roundIdx + 1} / {rounds.length}</span>
      </div>

      {/* Grid */}
      <div className={`grid ${gridColsClass} gap-3 md:gap-4 w-full max-w-md aspect-square`}>
        <AnimatePresence>
          {cards.map((card) => {
            const isVisible = card.isFlipped || card.isMatched;

            return (
              <motion.button
                key={card.uniqueId}
                onClick={() => handleCardClick(card.uniqueId)}
                disabled={card.isMatched || isProcessing && !flippedIds.includes(card.uniqueId)}
                className="relative w-full h-full rounded-xl flex flex-col items-center justify-center p-2 text-center shadow-md focus:outline-none focus:ring-4 focus:ring-offset-2 overflow-hidden"
                style={{
                  background: card.isMatched 
                    ? 'rgba(255,255,255,0.1)' 
                    : card.isFlipped 
                      ? 'rgba(255,255,255,0.9)' 
                      : 'rgba(0,0,0,0.5)',
                  borderColor: card.isMatched 
                    ? color || '#4ade80'
                    : 'rgba(255,255,255,0.2)',
                  borderWidth: '2px',
                  borderStyle: card.isMatched ? 'dashed' : 'solid',
                  opacity: card.isMatched ? 0.6 : 1,
                  minHeight: "64px",
                }}
                whileHover={!isVisible ? { scale: 1.05 } : {}}
                whileTap={!isVisible ? { scale: 0.95 } : {}}
                animate={{ rotateY: isVisible ? 180 : 0 }}
                transition={{ duration: 0.4 }}
                aria-label={isVisible ? card.content[lang as keyof LocalizedText] || card.content.en : "Hidden card"}
              >
                <div 
                  className="flex flex-col items-center justify-center w-full h-full"
                  style={{ 
                    transform: isVisible ? "rotateY(180deg)" : "none",
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {card.emoji && <span className="text-2xl md:text-3xl mb-1">{card.emoji}</span>}
                  <span className="text-xs md:text-sm font-bold text-slate-800 break-words line-clamp-2 leading-tight">
                    {card.content[lang as keyof LocalizedText] || card.content.en}
                  </span>
                </div>
                {!isVisible && (
                  <div className="absolute inset-0 flex items-center justify-center text-white/50 text-2xl font-bold">
                    ?
                  </div>
                )}
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
