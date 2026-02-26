"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GameCardProps {
  icon: string;
  name: string;
  color: string;
  glowClass: string;
  href: string;
  delay: number;
}

export default function GameCard({ icon, name, color, glowClass, href, delay }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, type: "spring" }}
    >
      <Link href={href}>
        <motion.div
          className={`relative bg-card rounded-2xl p-6 sm:p-8 flex flex-col items-center gap-3 cursor-pointer border border-transparent ${glowClass}`}
          whileHover={{ scale: 1.05, borderColor: color }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-5xl sm:text-6xl">{icon}</span>
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color }}>
            {name}
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
