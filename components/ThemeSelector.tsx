"use client";

import { motion } from "framer-motion";

export interface Theme {
  id: string;
  icon: string;
  color: string;
}

export const THEMES: Theme[] = [
  { id: "general", icon: "🌍", color: "#00D4FF" },
  { id: "music", icon: "🎵", color: "#FF2D78" },
  { id: "football", icon: "⚽", color: "#00FF88" },
  { id: "anime", icon: "🌟", color: "#FFD700" },
  { id: "gaming", icon: "🎮", color: "#8B5CF6" },
  { id: "geography", icon: "📍", color: "#06B6D4" },
  { id: "social", icon: "📱", color: "#F97316" },
  { id: "movies", icon: "🎬", color: "#EF4444" },
];

interface ThemeSelectorProps {
  selected: string;
  onSelect: (id: string) => void;
}

export default function ThemeSelector({ selected, onSelect }: ThemeSelectorProps) {
  return (
    <motion.div
      className="flex items-center justify-center gap-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      {THEMES.map((theme) => (
        <motion.button
          key={theme.id}
          onClick={() => onSelect(theme.id)}
          className={`text-3xl sm:text-4xl p-2 rounded-xl transition-all ${
            selected === theme.id
              ? "bg-card ring-2"
              : "opacity-50 hover:opacity-80"
          }`}
          style={
            selected === theme.id
              ? {
                  boxShadow: `0 0 0 2px ${theme.color}, 0 0 15px ${theme.color}40, 0 0 30px ${theme.color}20`,
                }
              : undefined
          }
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme.icon}
        </motion.button>
      ))}
    </motion.div>
  );
}
