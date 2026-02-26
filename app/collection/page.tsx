"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Trophy, Layers, ArrowLeft, Crosshair, Zap, Brain, Trash2, type LucideIcon } from "lucide-react";
import { getCards, getRarityConfig, type GameCard, type CardRarity } from "@/lib/cards";

const GAME_ICONS: Record<string, LucideIcon> = {
  quickpick: Crosshair,
  reflexgrid: Zap,
  memoryflash: Brain,
};

const GAME_COLORS: Record<string, string> = {
  quickpick: "#FF2D78",
  reflexgrid: "#00D4FF",
  memoryflash: "#B44DFF",
};

const RARITY_ORDER: CardRarity[] = ["legendary", "gold", "silver", "bronze"];

export default function CollectionPage() {
  const router = useRouter();
  const [cards, setCards] = useState<GameCard[]>([]);

  useEffect(() => {
    setCards(getCards());
  }, []);

  const sortedCards = [...cards].sort((a, b) => {
    const aIdx = RARITY_ORDER.indexOf(a.rarity);
    const bIdx = RARITY_ORDER.indexOf(b.rarity);
    if (aIdx !== bIdx) return aIdx - bIdx;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const rarityCounts = {
    legendary: cards.filter((c) => c.rarity === "legendary").length,
    gold: cards.filter((c) => c.rarity === "gold").length,
    silver: cards.filter((c) => c.rarity === "silver").length,
    bronze: cards.filter((c) => c.rarity === "bronze").length,
  };

  return (
    <main className="min-h-screen px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between max-w-lg mx-auto mb-6">
        <motion.button
          onClick={() => router.push("/")}
          className="p-2 rounded-xl bg-card border border-white/5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} className="text-white/40" />
        </motion.button>

        <div className="flex items-center gap-2">
          <Trophy size={20} className="text-gold" style={{ filter: "drop-shadow(0 0 6px rgba(255,215,0,0.4))" }} />
          <span className="text-gold font-bold">{cards.length}</span>
        </div>
      </div>

      {/* Rarity counters */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {RARITY_ORDER.map((rarity) => {
          const config = getRarityConfig(rarity);
          return (
            <div key={rarity} className="flex items-center gap-1.5 text-sm font-bold" style={{ color: config.color }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: config.color, boxShadow: `0 0 6px ${config.color}60` }} />
              {rarityCounts[rarity]}
            </div>
          );
        })}
      </motion.div>

      {/* Cards grid */}
      {cards.length === 0 ? (
        <motion.div
          className="flex flex-col items-center justify-center gap-4 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Layers size={48} className="text-white/10" />
          <p className="text-white/20 text-sm">
            <Crosshair size={14} className="inline mr-1" />
            →
            <Layers size={14} className="inline ml-1" />
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
          {sortedCards.map((card, i) => {
            const config = getRarityConfig(card.rarity);
            const GameIcon = GAME_ICONS[card.game] || Trophy;
            const gameColor = GAME_COLORS[card.game] || "#FFD700";

            return (
              <motion.div
                key={card.id}
                className="rounded-xl p-4 flex flex-col items-center gap-2.5 border"
                style={{
                  background: `linear-gradient(135deg, ${config.color}08, ${config.color}03)`,
                  borderColor: `${config.color}30`,
                  boxShadow: card.rarity === "legendary" || card.rarity === "gold"
                    ? `0 0 15px ${config.color}15`
                    : undefined,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                {/* Rarity label */}
                <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: config.color }}>
                  {config.label}
                </span>

                {/* Game icon */}
                <div
                  className="p-2.5 rounded-lg"
                  style={{ background: `${gameColor}12` }}
                >
                  <GameIcon size={28} style={{ color: gameColor, filter: `drop-shadow(0 0 6px ${gameColor}40)` }} />
                </div>

                {/* Score */}
                <span className="text-lg font-black text-white/80">
                  {card.score}/{card.total}
                </span>

                {/* Date */}
                <span className="text-[10px] text-white/20 font-mono">
                  {new Date(card.date).toLocaleDateString()}
                </span>
              </motion.div>
            );
          })}
        </div>
      )}
    </main>
  );
}
