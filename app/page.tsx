"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Crosshair, Zap, Brain, Trophy } from "lucide-react";
import Logo from "@/components/Logo";
import GameCard from "@/components/GameCard";

const GAMES = [
  {
    id: "quickpick",
    icon: Crosshair,
    name: "Quick Pick",
    color: "#FF2D78",
    gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
  },
  {
    id: "reflexgrid",
    icon: Zap,
    name: "Reflex Grid",
    color: "#00D4FF",
    gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "memoryflash",
    icon: Brain,
    name: "Memory Flash",
    color: "#B44DFF",
    gradient: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-10">
      {/* Logo */}
      <Logo />

      {/* Game Cards */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {GAMES.map((game, i) => (
          <GameCard
            key={game.id}
            icon={game.icon}
            name={game.name}
            color={game.color}
            gradient={game.gradient}
            href={`/${game.id}`}
            delay={0.2 + i * 0.15}
          />
        ))}
      </div>

      {/* Collection */}
      <motion.div
        className="fixed bottom-6 right-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <motion.button
          onClick={() => router.push("/collection")}
          className="bg-card border border-gold/20 p-3.5 rounded-full"
          style={{ boxShadow: "0 0 20px rgba(255,215,0,0.2)" }}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <Trophy size={24} className="text-gold" style={{ filter: "drop-shadow(0 0 6px rgba(255,215,0,0.5))" }} />
        </motion.button>
      </motion.div>
    </main>
  );
}
