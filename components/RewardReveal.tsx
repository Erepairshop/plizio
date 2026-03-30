"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, Crosshair, Zap, Brain, Calendar, Mountain, Car, Search, Hash, Shuffle, Crown, Calculator, GitBranch, Grid3x3, Rocket, Timer, type LucideIcon } from "lucide-react";
import { type CardRarity, getRarityConfig } from "@/lib/cards";
import Confetti from "@/components/Confetti";

interface RewardRevealProps {
  rarity: CardRarity;
  game: string;
  score: number;
  total: number;
  onDone: () => void;
}

const GAME_ICONS: Record<string, LucideIcon> = {
  quickpick: Crosshair,
  reflexgrid: Zap,
  memoryflash: Brain,
  daily: Calendar,
  skyclimb: Mountain,
  citydrive: Car,
  spotdiff: Search,
  numberrush: Hash,
  pipeflow: GitBranch,
  deductiongrid: Grid3x3,
  deductiongrid2: Rocket,
  timeecho: Timer,
  wordscramble: Shuffle,
  milliomos: Crown,
  mathtest: Calculator,
};

const GAME_COLORS: Record<string, string> = {
  quickpick: "#FF2D78",
  reflexgrid: "#00D4FF",
  memoryflash: "#B44DFF",
  daily: "#FFD700",
  skyclimb: "#00FF88",
  citydrive: "#FF6B00",
  spotdiff: "#F59E0B",
  numberrush: "#22D3EE",
  pipeflow: "#22C55E",
  deductiongrid: "#8B5CF6",
  deductiongrid2: "#6366F1",
  timeecho: "#00FFFF",
  wordscramble: "#34D399",
  milliomos: "#FFD700",
  mathtest: "#FFD700",
};

export default function RewardReveal({ rarity, game, score, total, onDone }: RewardRevealProps) {
  const [revealed, setRevealed] = useState(false);
  const config = getRarityConfig(rarity);
  const GameIcon = GAME_ICONS[game] || Trophy;
  const gameColor = GAME_COLORS[game] || "#FFD700";

  const handleReveal = () => {
    if (!revealed) setRevealed(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/80 backdrop-blur-md px-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleReveal}
    >
      {/* Confetti for gold/legendary */}
      {revealed && (rarity === "gold" || rarity === "legendary") && (
        <Confetti count={rarity === "legendary" ? 60 : 35} />
      )}

      {/* Card */}
      <div className="perspective-1000" style={{ perspective: "1000px" }}>
        <motion.div
          className="relative w-56 h-80 cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
          animate={revealed ? { rotateY: 180 } : { rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
          {/* Card back */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-card to-bg border-2 border-white/10 flex items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
            animate={!revealed ? { scale: [1, 1.02, 1] } : {}}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <Sparkles size={48} className="text-white/20" />
            </motion.div>
          </motion.div>

          {/* Card front */}
          <motion.div
            className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-4 p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background: `linear-gradient(135deg, ${config.color}15, ${config.color}05, ${config.color}10)`,
              border: `2px solid ${config.color}60`,
              boxShadow: revealed ? config.glow : undefined,
            }}
          >
            {/* Rarity label */}
            <motion.div
              className="text-xs font-black tracking-[0.3em] uppercase"
              style={{ color: config.color }}
              initial={{ opacity: 0 }}
              animate={revealed ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              {config.label}
            </motion.div>

            {/* Game icon */}
            <motion.div
              className="p-4 rounded-2xl"
              style={{
                background: `${gameColor}15`,
                boxShadow: `0 0 20px ${gameColor}20`,
              }}
              initial={{ scale: 0 }}
              animate={revealed ? { scale: 1 } : {}}
              transition={{ delay: 0.9, type: "spring" }}
            >
              <GameIcon
                size={48}
                style={{
                  color: gameColor,
                  filter: `drop-shadow(0 0 10px ${gameColor}60)`,
                }}
              />
            </motion.div>

            {/* Score */}
            <motion.div
              className="text-3xl font-black text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={revealed ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
            >
              {total > 0 ? `${score}/${total}` : score}
            </motion.div>

            {/* Date */}
            <motion.div
              className="text-xs text-white/30 font-mono"
              initial={{ opacity: 0 }}
              animate={revealed ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              {new Date().toLocaleDateString()}
            </motion.div>

            {/* Shimmer effect for gold/legendary */}
            {(rarity === "gold" || rarity === "legendary") && revealed && (
              <motion.div
                className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(105deg, transparent 40%, ${config.color}20 45%, ${config.color}30 50%, ${config.color}20 55%, transparent 60%)`,
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Tap hint / Continue button */}
      <AnimatePresence>
        {!revealed ? (
          <motion.div
            className="text-white/30 text-sm font-medium flex items-center gap-2"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Sparkles size={14} />
            TAP
          </motion.div>
        ) : (
          <motion.button
            className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/50 text-sm font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            onClick={(e) => {
              e.stopPropagation();
              onDone();
            }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            OK
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
