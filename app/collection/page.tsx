"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Trophy, Layers, ArrowLeft, Crosshair, Zap, Brain, Calendar, Mountain, Star, Info, ChevronDown, ChevronUp, type LucideIcon } from "lucide-react";
import { getCards, getRarityConfig, removeCardsByRarity, type GameCard, type CardRarity } from "@/lib/cards";
import { addSpecialCards, getSpecialCardCount } from "@/lib/specialCards";

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
  mathtest: "#FF8C00",
  wordscramble: "#00CED1",
  spotdiff: "#FF69B4",
  numberrush: "#7FFF00",
  milliomos: "#FFD700",
  racetrack: "#FF4500",
  citydrive: "#1E90FF",
};

const GAME_NAMES: Record<string, string> = {
  quickpick: "Quick Pick",
  reflexgrid: "Reflex Grid",
  memoryflash: "Memory Flash",
  daily: "Napi Kihívás",
  skyclimb: "Sky Climb",
  mathtest: "Matekteszt",
  wordscramble: "Szókeverő",
  spotdiff: "Különbségkereső",
  numberrush: "Számroham",
  milliomos: "Milliomos",
  racetrack: "Versenyút",
  citydrive: "Városvezetés",
};

const RARITY_ORDER: CardRarity[] = ["legendary", "gold", "silver", "bronze"];
const RARITY_RANK: Record<CardRarity, number> = { legendary: 0, gold: 1, silver: 2, bronze: 3 };

const RARITY_NAMES: Record<CardRarity, string> = {
  legendary: "Legendás",
  gold: "Arany",
  silver: "Ezüst",
  bronze: "Bronz",
};

// How many cards of each rarity = 1 star
const EXCHANGE_RATES: Record<CardRarity, number> = {
  legendary: 1,
  gold: 10,
  silver: 20,
  bronze: 30,
};

interface GameBest {
  game: string;
  bestCard: GameCard;
  count: number;
}

export default function CollectionPage() {
  const router = useRouter();
  const [cards, setCards] = useState<GameCard[]>([]);
  const [stars, setStars] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [exchanged, setExchanged] = useState(false);

  useEffect(() => {
    setCards(getCards());
    setStars(getSpecialCardCount());
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

  const exchangeableStars = {
    legendary: rarityCounts.legendary,
    gold: Math.floor(rarityCounts.gold / 10),
    silver: Math.floor(rarityCounts.silver / 20),
    bronze: Math.floor(rarityCounts.bronze / 30),
  };
  const totalExchangeable = Object.values(exchangeableStars).reduce((a, b) => a + b, 0);

  const handleExchange = () => {
    if (totalExchangeable === 0) return;
    removeCardsByRarity("legendary", exchangeableStars.legendary);
    removeCardsByRarity("gold", exchangeableStars.gold * 10);
    removeCardsByRarity("silver", exchangeableStars.silver * 20);
    removeCardsByRarity("bronze", exchangeableStars.bronze * 30);
    const newTotal = addSpecialCards(totalExchangeable);
    setStars(newTotal);
    setCards(getCards());
    setExchanged(true);
    setTimeout(() => setExchanged(false), 2500);
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

        <h1 className="text-white font-bold text-lg">Kártyagyűjtemény</h1>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <Star size={14} className="text-yellow-400" />
          <span className="text-yellow-400 font-bold text-sm">{stars}</span>
        </div>
      </div>

      {/* Rarity counters */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {RARITY_ORDER.map((rarity) => {
          const config = getRarityConfig(rarity);
          return (
            <div key={rarity} className="flex flex-col items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: config.color, boxShadow: `0 0 6px ${config.color}60` }} />
              <span className="text-[10px] font-bold" style={{ color: config.color }}>{RARITY_NAMES[rarity]}</span>
              <span className="text-xs font-black" style={{ color: config.color }}>{rarityCounts[rarity]}</span>
            </div>
          );
        })}
      </motion.div>

      <div className="max-w-lg mx-auto space-y-4">
        {/* Exchange panel */}
        <motion.div
          className="rounded-2xl p-4 border border-yellow-500/20"
          style={{ background: "rgba(255, 215, 0, 0.04)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-400" />
              <span className="text-white/80 font-bold text-sm">Kártyák beváltása</span>
            </div>
            <span className="text-yellow-400 font-black text-xl">+{totalExchangeable} ⭐</span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            {(["legendary", "gold", "silver", "bronze"] as CardRarity[]).map((rarity) => {
              const config = getRarityConfig(rarity);
              const count = rarityCounts[rarity];
              const rate = EXCHANGE_RATES[rarity];
              const earnedStars = exchangeableStars[rarity];
              const usedCards = rarity === "legendary" ? earnedStars : earnedStars * rate;
              return (
                <div key={rarity} className="px-3 py-2 rounded-xl" style={{ background: `${config.color}08`, border: `1px solid ${config.color}15` }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-black" style={{ color: config.color }}>{RARITY_NAMES[rarity]}</span>
                    <span className="text-yellow-400 text-[11px] font-bold">{earnedStars} ⭐</span>
                  </div>
                  <div className="text-white/30 text-[10px]">
                    {count} db · {usedCards}/{count} bevált
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-white/25 text-[10px] mb-3 text-center leading-relaxed">
            1 legendás = 1⭐ &nbsp;·&nbsp; 10 arany = 1⭐ &nbsp;·&nbsp; 20 ezüst = 1⭐ &nbsp;·&nbsp; 30 bronz = 1⭐
          </div>

          <AnimatePresence mode="wait">
            {exchanged ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="w-full py-2.5 rounded-xl font-bold text-sm text-center text-green-400 border border-green-500/30"
                style={{ background: "rgba(0,255,100,0.06)" }}
              >
                ✓ Sikeresen becserélve!
              </motion.div>
            ) : (
              <motion.button
                key="btn"
                onClick={handleExchange}
                disabled={totalExchangeable === 0}
                className="w-full py-2.5 rounded-xl font-bold text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: totalExchangeable > 0
                    ? "linear-gradient(135deg, #FFD700, #FF8C00)"
                    : "rgba(255,255,255,0.05)",
                  color: totalExchangeable > 0 ? "#000" : "rgba(255,255,255,0.3)",
                }}
                whileHover={totalExchangeable > 0 ? { scale: 1.02 } : undefined}
                whileTap={totalExchangeable > 0 ? { scale: 0.98 } : undefined}
              >
                {totalExchangeable > 0
                  ? `Becserélem (+${totalExchangeable} ⭐)`
                  : "Nincs elegendő kártya a beváltáshoz"}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info section */}
        <motion.div
          className="rounded-2xl border border-white/8 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.02)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="w-full flex items-center justify-between px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <Info size={16} className="text-white/40" />
              <span className="text-white/60 font-bold text-sm">Hogyan működnek a kártyák?</span>
            </div>
            {showInfo
              ? <ChevronUp size={16} className="text-white/30" />
              : <ChevronDown size={16} className="text-white/30" />}
          </button>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-4 border-t border-white/5 pt-3">
                  {/* Streak */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base">🔥</span>
                      <span className="text-white/80 font-bold text-sm">Streak (napi sorozat)</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed pl-6">
                      Ha egymás utáni napokon játszol, streak-et gyűjtesz. Minden nap <span className="text-white/60 font-bold">+2%</span> bónuszt ad az effektív pontszázalékodhoz (max <span className="text-white/60 font-bold">+15%</span> = 7+ nap).
                    </p>
                  </div>

                  {/* Rarity rules */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base">🃏</span>
                      <span className="text-white/80 font-bold text-sm">Kártya ritkasági szintek</span>
                    </div>
                    <div className="space-y-2 pl-6">
                      {([
                        { rarity: "legendary" as CardRarity, rule: "100% eredmény + legalább 10 napos streak" },
                        { rarity: "gold" as CardRarity, rule: "95%+ effektív pontszám (alap% + streak bónusz)" },
                        { rarity: "silver" as CardRarity, rule: "70%+ effektív pontszám" },
                        { rarity: "bronze" as CardRarity, rule: "70% alatt" },
                      ]).map(({ rarity, rule }) => {
                        const config = getRarityConfig(rarity);
                        return (
                          <div key={rarity} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full shrink-0 mt-1" style={{ backgroundColor: config.color }} />
                            <div>
                              <span className="text-[11px] font-black" style={{ color: config.color }}>{RARITY_NAMES[rarity]}: </span>
                              <span className="text-white/35 text-[11px]">{rule}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Games that support legendary */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base">👑</span>
                      <span className="text-white/80 font-bold text-sm">Hol szerezhető legendás kártya?</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed pl-6">
                      Matekteszt, Milliomos, Szókeverő, Különbségkereső, Quick Pick, Számroham — ezekben a játékokban szerezhető legendás kártya (streak figyelembe van véve).
                    </p>
                  </div>

                  {/* Stars */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base">⭐</span>
                      <span className="text-white/80 font-bold text-sm">Csillagok (⭐)</span>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed pl-6">
                      Mérföldkövek teljesítésekor, megosztásokért, kártyák beváltásával szerezhető. A boltban skinek és egyebek vásárolhatók érte.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Game cards */}
        {cards.length === 0 ? (
          <motion.div
            className="flex flex-col items-center justify-center gap-4 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Layers size={48} className="text-white/10" />
            <p className="text-white/20 text-sm">Játssz, hogy kártyákat gyűjts!</p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-3">
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
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="p-3 rounded-xl shrink-0" style={{ background: `${gameColor}12` }}>
                    <GameIcon size={24} style={{ color: gameColor, filter: `drop-shadow(0 0 6px ${gameColor}40)` }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white/70 text-sm font-bold">{gameName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: config.color }}>
                        {RARITY_NAMES[gb.bestCard.rarity]}
                      </span>
                      <span className="text-white/20 text-[10px]">•</span>
                      <span className="text-white/30 text-xs font-bold">
                        {gb.bestCard.score}/{gb.bestCard.total}
                      </span>
                    </div>
                  </div>

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
      </div>
    </main>
  );
}
