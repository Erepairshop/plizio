"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import GameCard from "@/components/GameCard";

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

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 gap-8">
      {/* Logo */}
      <Logo />

      {/* Game Cards - click = play */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {GAMES.map((game, i) => (
          <GameCard
            key={game.id}
            icon={game.icon}
            name={game.name}
            color={game.color}
            glowClass={game.glowClass}
            href={`/${game.id}`}
            delay={0.2 + i * 0.15}
          />
        ))}
      </div>

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
