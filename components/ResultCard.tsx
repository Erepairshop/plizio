"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ResultCardProps {
  score: number;
  total: number;
  time?: number;
  gameName: string;
  gameIcon: string;
  onPlayAgain: () => void;
}

export default function ResultCard({
  score,
  total,
  time,
  gameName,
  gameIcon,
  onPlayAgain,
}: ResultCardProps) {
  const router = useRouter();
  const percentage = Math.round((score / total) * 100);

  const getResultEmoji = () => {
    if (percentage >= 90) return "🔥";
    if (percentage >= 70) return "⭐";
    if (percentage >= 50) return "👍";
    return "💪";
  };

  const getScoreColor = () => {
    if (percentage >= 90) return "text-gold";
    if (percentage >= 70) return "text-neon-green";
    if (percentage >= 50) return "text-neon-blue";
    return "text-neon-pink";
  };

  const generateShareText = () => {
    const checks = Array.from({ length: total }, (_, i) => (i < score ? "✅" : "❌")).join("");
    const timeStr = time ? ` (${time}s)` : "";
    return `${gameIcon} ${gameName} ${score}/${total}${timeStr} | ${checks} | plizio.com`;
  };

  const handleShare = async () => {
    const text = generateShareText();
    if (navigator.share) {
      try {
        await navigator.share({ text });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-card rounded-3xl p-8 max-w-sm w-full flex flex-col items-center gap-5 border border-neon-purple/30"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {/* Result emoji */}
        <motion.span
          className="text-7xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {getResultEmoji()}
        </motion.span>

        {/* Score */}
        <motion.div
          className={`text-5xl font-black ${getScoreColor()}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {score}/{total}
        </motion.div>

        {/* Time */}
        {time !== undefined && (
          <motion.div
            className="text-lg text-white/50 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            ⏱ {time}s
          </motion.div>
        )}

        {/* Buttons */}
        <motion.div
          className="flex gap-3 w-full mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Share */}
          <motion.button
            onClick={handleShare}
            className="flex-1 bg-neon-blue/10 border border-neon-blue/40 text-neon-blue py-3 rounded-xl font-bold text-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            📤
          </motion.button>

          {/* Play again */}
          <motion.button
            onClick={onPlayAgain}
            className="flex-1 bg-neon-green/10 border border-neon-green/40 text-neon-green py-3 rounded-xl font-bold text-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            🔄
          </motion.button>

          {/* Home */}
          <motion.button
            onClick={() => router.push("/")}
            className="flex-1 bg-neon-purple/10 border border-neon-purple/40 text-neon-purple py-3 rounded-xl font-bold text-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            🏠
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
