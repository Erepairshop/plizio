"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface GameCardProps {
  icon: LucideIcon;
  name: string;
  color: string;
  gradient: string;
  href: string;
  delay: number;
}

export default function GameCard({ icon: Icon, name, color, gradient, href, delay }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, type: "spring" }}
    >
      <Link href={href}>
        <motion.div
          className="relative bg-card rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-4 cursor-pointer border border-white/5 overflow-hidden group w-32 sm:w-36"
          whileHover={{ scale: 1.07, borderColor: `${color}60` }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Gradient background glow */}
          <motion.div
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${gradient}`}
            style={{ filter: "blur(40px)" }}
          />

          {/* Icon */}
          <motion.div
            className="relative z-10 p-3 rounded-xl"
            style={{
              background: `${color}15`,
              boxShadow: `0 0 20px ${color}20`,
            }}
          >
            <Icon
              size={36}
              style={{
                color,
                filter: `drop-shadow(0 0 8px ${color}60)`,
              }}
            />
          </motion.div>

          {/* Name */}
          <span
            className="relative z-10 text-xs font-bold tracking-widest uppercase"
            style={{ color }}
          >
            {name}
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
