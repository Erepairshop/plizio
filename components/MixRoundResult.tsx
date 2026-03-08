"use client";

import { motion } from "framer-motion";
import { Trophy, Loader2 } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";

const T = {
  en: { roundOf: "Round", of: "of", waiting: "Waiting for opponent..." },
  hu: { roundOf: "Kor", of: "ebbol", waiting: "Varakozas az ellenfelre..." },
  de: { roundOf: "Runde", of: "von", waiting: "Warte auf Gegner..." },
  ro: { roundOf: "Runda", of: "din", waiting: "Se asteapta adversarul..." },
};

interface MixRoundResultProps {
  roundNumber: number;
  totalRounds: number;
  p1Score: number;
  p2Score: number;
  p1Name: string;
  p2Name: string;
  isWaiting?: boolean;
}

export default function MixRoundResult({
  roundNumber,
  totalRounds,
  p1Score,
  p2Score,
  p1Name,
  p2Name,
  isWaiting = true,
}: MixRoundResultProps) {
  const { lang } = useLang();
  const t = T[lang] || T.en;

  const p1Wins = p1Score > p2Score;
  const p2Wins = p2Score > p1Score;
  const isDraw = p1Score === p2Score;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm px-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Round info */}
      <motion.div
        className="text-sm font-bold text-white/60 uppercase tracking-wider"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {t.roundOf} {roundNumber} {t.of} {totalRounds}
      </motion.div>

      {/* Scores */}
      <motion.div
        className="flex items-center justify-center gap-8 sm:gap-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        {/* P1 */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-2xl sm:text-3xl font-black" style={{ color: p1Wins ? "#00FF88" : p2Wins ? "#FF2D78" : "#00D4FF" }}>
            {p1Score}
          </div>
          <div className="text-xs sm:text-sm font-bold text-white/70">{p1Name}</div>
          {p1Wins && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Trophy size={16} className="text-gold" style={{ filter: "drop-shadow(0 0 6px rgba(255,215,0,0.6))" }} />
            </motion.div>
          )}
        </div>

        {/* VS */}
        <motion.div
          className="text-lg sm:text-xl font-black text-white/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          VS
        </motion.div>

        {/* P2 */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-2xl sm:text-3xl font-black" style={{ color: p2Wins ? "#00FF88" : p1Wins ? "#FF2D78" : "#00D4FF" }}>
            {p2Score}
          </div>
          <div className="text-xs sm:text-sm font-bold text-white/70">{p2Name}</div>
          {p2Wins && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Trophy size={16} className="text-gold" style={{ filter: "drop-shadow(0 0 6px rgba(255,215,0,0.6))" }} />
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Waiting indicator */}
      {isWaiting && (
        <motion.div
          className="flex flex-col items-center gap-3 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Loader2 size={20} className="animate-spin text-neon-blue" />
          <p className="text-white/60 text-xs sm:text-sm font-medium">{t.waiting}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
