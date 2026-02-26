"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Share2, RotateCcw, Home, Flame, Star, ThumbsUp, Dumbbell } from "lucide-react";

interface ResultCardProps {
  score: number;
  total: number;
  time?: number;
  gameName: string;
  gameIcon: React.ReactNode;
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

  const getResultIcon = () => {
    if (percentage >= 90) return <Flame size={56} className="text-gold" style={{ filter: "drop-shadow(0 0 12px rgba(255,215,0,0.6))" }} />;
    if (percentage >= 70) return <Star size={56} className="text-neon-green" style={{ filter: "drop-shadow(0 0 12px rgba(0,255,136,0.6))" }} />;
    if (percentage >= 50) return <ThumbsUp size={56} className="text-neon-blue" style={{ filter: "drop-shadow(0 0 12px rgba(0,212,255,0.6))" }} />;
    return <Dumbbell size={56} className="text-neon-purple" style={{ filter: "drop-shadow(0 0 12px rgba(180,77,255,0.6))" }} />;
  };

  const getScoreColor = () => {
    if (percentage >= 90) return "#FFD700";
    if (percentage >= 70) return "#00FF88";
    if (percentage >= 50) return "#00D4FF";
    return "#FF2D78";
  };

  const generateShareText = () => {
    const checks = Array.from({ length: total }, (_, i) => (i < score ? "✅" : "❌")).join("");
    const timeStr = time ? ` (${time}s)` : "";
    return `${gameName} ${score}/${total}${timeStr} | ${checks} | plizio.com`;
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

  const scoreColor = getScoreColor();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-card rounded-3xl p-8 max-w-sm w-full flex flex-col items-center gap-5 border border-white/10"
        style={{ boxShadow: `0 0 40px ${scoreColor}15` }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {/* Result icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {getResultIcon()}
        </motion.div>

        {/* Score */}
        <motion.div
          className="text-5xl font-black"
          style={{ color: scoreColor, textShadow: `0 0 20px ${scoreColor}40` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {score}/{total}
        </motion.div>

        {/* Time */}
        {time !== undefined && (
          <motion.div
            className="text-lg text-white/40 font-mono flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-sm">⏱</span> {time}s
          </motion.div>
        )}

        {/* Buttons */}
        <motion.div
          className="flex gap-3 w-full mt-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleShare}
            className="flex-1 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue py-3 rounded-xl flex items-center justify-center"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(0,212,255,0.15)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Share2 size={20} />
          </motion.button>

          <motion.button
            onClick={onPlayAgain}
            className="flex-1 bg-neon-green/10 border border-neon-green/30 text-neon-green py-3 rounded-xl flex items-center justify-center"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(0,255,136,0.15)" }}
            whileTap={{ scale: 0.97 }}
          >
            <RotateCcw size={20} />
          </motion.button>

          <motion.button
            onClick={() => router.push("/")}
            className="flex-1 bg-neon-purple/10 border border-neon-purple/30 text-neon-purple py-3 rounded-xl flex items-center justify-center"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(180,77,255,0.15)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Home size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
