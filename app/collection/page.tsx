"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Trophy, Layers, ArrowLeft, Crosshair, Zap, Brain, Calendar, Mountain, type LucideIcon } from "lucide-react";
import { getCards, getRarityConfig, type GameCard, type CardRarity } from "@/lib/cards";

const GAME_ICONS: Record<string, LucideIcon> = {
  quickpick: Crosshair,
  reflexgrid: Zap,
  memoryflash: Brain,
  daily: Calendar,
  skyclimb: Mountain,
};

const GAME_COLORS: Record<string, string> = {
  quickpick: "#FF2D78",
  reflexgrid: "#00D4FF",
  memoryflash: "#B44DFF",
  daily: "#FFD700",
  skyclimb: "#00FF88",
};

const GAME_NAMES: Record<string, string> = {
  quickpick: "Quick Pick",
  reflexgrid: "Reflex Grid",
  memoryflash: "Memory Flash",
  daily: "Daily",
  skyclimb: "Sky Climb",
};

const RARITY_ORDER: CardRarity[] = ["legendary", "gold", "silver", "bronze"];
const RARITY_RANK: Record<CardRarity, number> = { legendary: 0, gold: 1, silver: 2, bronze: 3 };

interface GameBest {
  game: string;
  bestCard: GameCard;
  count: number;
}

export default function CollectionPage() {
  const router = useRouter();
  const [cards, setCards] = useState<GameCard[]>([]);

  useEffect(() => {
    setCards(getCards());
  }, []);

  // Group by game, find best card per game
  const gameBests: GameBest[] = (() => {
    const grouped: Record<string, GameCard[]> = {};
    for (const card of cards) {
      if (!grouped[card.game]) grouped[card.game] = [];
      grouped[card.game].push(card);
    }
    return Object.entries(grouped)
      .map(([game, gameCards]) => {
        const best = gameCards.reduce((a, b) =>
          RARITY_RANK[a.rarity] < RARITY_RANK[b.rarity] ? a :
          RARITY_RANK[a.rarity] > RARITY_RANK[b.rarity] ? b :
          a.score / a.total >= b.score / b.total ? a : b
        );
        return { game, bestCard: best, count: gameCards.length };
      })
      .sort((a, b) => RARITY_RANK[a.bestCard.rarity] - RARITY_RANK[b.bestCard.rarity]);
  })();

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

      {/* Game cards - one per game, showing best */}
      {cards.length === 0 ? (
        <motion.div
          className="flex flex-col items-center justify-center gap-4 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Layers size={48} className="text-white/10" />
          <p className="text-white/20 text-sm">Play games to earn cards</p>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-3 max-w-lg mx-auto">
          {gameBests.map((gb, i) => {
            const config = getRarityConfig(gb.bestCard.rarity);
            const GameIcon = GAME_ICONS[gb.game] || Trophy;
            const gameColor = GAME_COLORS[gb.game] || "#FFD700";
            const gameName = GAME_NAMES[gb.game] || gb.game;

            return (
              <motion.div
                key={gb.game}
                className="rounded-2xl p-4 flex items-center gap-4 border"
                style={{
                  background: `linear-gradient(135deg, ${gameColor}08, ${config.color}05)`,
                  borderColor: `${config.color}25`,
                  boxShadow: gb.bestCard.rarity === "legendary" || gb.bestCard.rarity === "gold"
                    ? `0 0 20px ${config.color}10`
                    : undefined,
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Game icon */}
                <div
                  className="p-3 rounded-xl shrink-0"
                  style={{ background: `${gameColor}12` }}
                >
                  <GameIcon size={24} style={{ color: gameColor, filter: `drop-shadow(0 0 6px ${gameColor}40)` }} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white/70 text-sm font-bold">{gameName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: config.color }}>
                      {config.label}
                    </span>
                    <span className="text-white/20 text-[10px]">•</span>
                    <span className="text-white/30 text-xs font-bold">
                      {gb.bestCard.score}/{gb.bestCard.total}
                    </span>
                  </div>
                </div>

                {/* Count badge */}
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg shrink-0"
                  style={{ background: `${gameColor}10` }}
                >
                  <Layers size={12} style={{ color: gameColor }} />
                  <span className="font-bold text-sm" style={{ color: gameColor }}>
                    {gb.count}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </main>
  );
}
