"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CollectionPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 gap-8">
      <motion.div
        className="text-6xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        🏆
      </motion.div>

      <motion.div
        className="text-2xl font-bold text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        🃏 × 0
      </motion.div>

      <motion.p
        className="text-white/20 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        🎮 ➡️ 🃏
      </motion.p>

      <motion.button
        onClick={() => router.push("/")}
        className="bg-card border border-neon-purple/30 text-neon-purple px-6 py-3 rounded-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🏠
      </motion.button>
    </main>
  );
}
