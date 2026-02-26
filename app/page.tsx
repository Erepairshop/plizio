"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import GameCard from "@/components/GameCard";
import ThemeSelector from "@/components/ThemeSelector";
import ModeSelector from "@/components/ModeSelector";

const GAMES = [
  {
    id: "quickpick",
    icon: "🎯",
    name: "Quick Pick",
    color: "#FF2D78",
    glowClass: "hover:glow-pink",
  },
  {
    id: "reflexgrid",
    icon: "⚡",
    name: "Reflex Grid",
    color: "#00D4FF",
    glowClass: "hover:glow-blue",
  },
  {
    id: "memoryflash",
    icon: "🧠",
    name: "Memory Flash",
    color: "#B44DFF",
    glowClass: "hover:glow-purple",
  },
];

export default function Home() {
  const router = useRouter();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState("general");

  const handleSolo = () => {
    if (!selectedGame) return;
    router.push(`/${selectedGame}?theme=${selectedTheme}`);
  };

  const handleDuel = () => {
    if (!selectedGame) return;
    // Duel mode - Phase 2
    router.push(`/${selectedGame}?theme=${selectedTheme}&mode=duel`);
  };

  const handleGameClick = (gameId: string) => {
    setSelectedGame(gameId);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-8">
      {/* Logo */}
      <Logo />

      {/* Game Cards */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {GAMES.map((game, i) => (
          <div key={game.id} onClick={() => handleGameClick(game.id)}>
            <motion.div
              className={`rounded-2xl transition-all ${
                selectedGame === game.id
                  ? "ring-2 ring-offset-2 ring-offset-bg"
                  : ""
              }`}
              style={
                selectedGame === game.id
                  ? { boxShadow: `0 0 0 2px ${game.color}` }
                  : undefined
              }
            >
              <GameCard
                icon={game.icon}
                name={game.name}
                color={game.color}
                glowClass={game.glowClass}
                href="#"
                delay={0.2 + i * 0.15}
              />
            </motion.div>
          </div>
        ))}
      </div>

      {/* Theme Selector */}
      {selectedGame && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <ThemeSelector selected={selectedTheme} onSelect={setSelectedTheme} />
        </motion.div>
      )}

      {/* Mode Selector */}
      {selectedGame && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <ModeSelector onSolo={handleSolo} onDuel={handleDuel} />
        </motion.div>
      )}

      {/* Collection Icon */}
      <motion.div
        className="fixed bottom-6 right-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
          onClick={() => router.push("/collection")}
          className="bg-card border border-gold/30 p-3 rounded-full text-3xl glow-gold"
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          🏆
        </motion.button>
      </motion.div>
    </main>
  );
}
