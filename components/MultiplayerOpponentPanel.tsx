"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef } from "@/lib/skins";
import { getFaceDef } from "@/lib/faces";

interface MultiplayerOpponentPanelProps {
  opponentName: string;
  opponentScore: number;
  opponentMood?: "idle" | "focused" | "happy" | "surprised" | "victory" | "disappointed";
  totalRounds: number;
  isVisible: boolean;
  scoreJustIncreased?: boolean;
}

export default function MultiplayerOpponentPanel({
  opponentName,
  opponentScore,
  opponentMood = "focused",
  totalRounds,
  isVisible,
  scoreJustIncreased = false,
}: MultiplayerOpponentPanelProps) {
  const [prevScore, setPrevScore] = useState(opponentScore);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    if (opponentScore > prevScore) {
      setShowPulse(true);
      setPrevScore(opponentScore);
      setTimeout(() => setShowPulse(false), 600);
    } else {
      setPrevScore(opponentScore);
    }
  }, [opponentScore, prevScore]);

  if (!isVisible) return null;

  const scorePercentage = (opponentScore / totalRounds) * 100;

  return (
    <motion.div
      className="fixed right-4 top-4 sm:right-6 sm:top-6 z-40 flex flex-col items-center gap-3"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Card */}
      <motion.div
        className="bg-card/80 backdrop-blur-sm border border-neon-blue/30 rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-3 min-w-fit"
        animate={showPulse ? { scale: [1, 1.05, 1], borderColor: ["rgba(0,212,255,0.3)", "rgba(0,212,255,0.8)", "rgba(0,212,255,0.3)"] } : {}}
        transition={{ duration: 0.6 }}
        style={{
          boxShadow: showPulse ? "0 0 20px rgba(0,212,255,0.6)" : "0 0 10px rgba(0,212,255,0.2)",
        }}
      >
        {/* Avatar mini */}
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <AvatarCompanion
            fixed={false}
            mood={opponentMood}
            gender="boy"
            activeSkin={getSkinDef("default")}
            activeFace={getFaceDef("default")}
            passThrough={true}
          />
        </motion.div>

        {/* Name */}
        <div className="text-center">
          <div className="text-xs sm:text-sm font-bold text-white/70 truncate max-w-[120px]">
            {opponentName}
          </div>
        </div>

        {/* Score */}
        <motion.div
          className="text-center"
          animate={showPulse ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl sm:text-3xl font-black text-neon-blue" style={{ textShadow: "0 0 15px rgba(0,212,255,0.6)" }}>
            {opponentScore}
          </div>
          <div className="text-xs text-white/50 font-mono">
            / {totalRounds}
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"
          layout
        >
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue to-neon-green"
            initial={{ width: 0 }}
            animate={{ width: `${scorePercentage}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Spark effect when scoring */}
        <AnimatePresence>
          {showPulse && (
            <motion.div
              className="absolute -top-8 -right-2 text-neon-green"
              initial={{ opacity: 1, scale: 0, y: 0 }}
              animate={{ opacity: 0, scale: 1, y: -20 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Zap size={20} fill="currentColor" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* VS label */}
      <div className="text-xs font-bold text-white/40 uppercase tracking-widest">
        VS
      </div>
    </motion.div>
  );
}
