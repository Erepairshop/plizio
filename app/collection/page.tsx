"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Trophy, Layers, ArrowLeft, Gamepad2 } from "lucide-react";

export default function CollectionPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 gap-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
      >
        <Trophy size={56} className="text-gold" style={{ filter: "drop-shadow(0 0 15px rgba(255,215,0,0.4))" }} />
      </motion.div>

      <motion.div
        className="flex items-center gap-2 text-2xl font-bold text-white/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Layers size={24} />
        <span>0</span>
      </motion.div>

      <motion.p
        className="text-white/15 text-sm flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Gamepad2 size={16} />
        <span>→</span>
        <Layers size={16} />
      </motion.p>

      <motion.button
        onClick={() => router.push("/")}
        className="bg-card border border-neon-purple/20 text-neon-purple px-5 py-2.5 rounded-xl font-bold flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={18} />
      </motion.button>
    </main>
  );
}
