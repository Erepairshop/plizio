"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef } from "@/lib/accessories";
import { useLang } from "@/components/LanguageProvider";

const T = {
  en: { victory: "Victory!", defeat: "Defeat!", draw: "Draw!", cont: "Continue" },
  hu: { victory: "Győzelem!", defeat: "Vereség!", draw: "Döntetlen!", cont: "Tovább" },
  de: { victory: "Sieg!", defeat: "Niederlage!", draw: "Unentschieden!", cont: "Weiter" },
  ro: { victory: "Victorie!", defeat: "Înfrângere!", draw: "Egalitate!", cont: "Continuă" },
};

interface Props {
  myScore: number;
  oppScore: number;
  myName: string;
  oppName: string;
  onContinue: () => void;
  formatScore?: (score: number) => string;
}

export default function MultiplayerResult({ myScore, oppScore, myName, oppName, onContinue, formatScore }: Props) {
  const { lang } = useLang();
  const t = T[lang] || T.en;

  const won = myScore > oppScore;
  const lost = myScore < oppScore;
  const draw = myScore === oppScore;

  // Avatar state (my avatar)
  const [gender] = useState<AvatarGender>(() => getGender());
  const [activeSkin] = useState(() => getSkinDef(getActiveSkin()));
  const [activeFace] = useState(() => getFaceDef(getActiveFace()));
  const [activeTop] = useState(() => { const id = getActive("top"); return id ? getTopDef(id) : null; });
  const [activeBottom] = useState(() => { const id = getActive("bottom"); return id ? getBottomDef(id) : null; });
  const [activeShoe] = useState(() => { const id = getActive("shoe"); return id ? getShoeDef(id) : null; });
  const [activeCape] = useState(() => { const id = getActive("cape"); return id ? getCapeDef(id) : null; });
  const [activeGlasses] = useState(() => { const id = getActive("glasses"); return id ? getGlassesDef(id) : null; });
  const [activeGloves] = useState(() => { const id = getActive("gloves"); return id ? getGloveDef(id) : null; });
  const [activeHat] = useState(() => { const id = getActiveHat(); return id ? getHatDef(id) : null; });

  const headlineText = draw ? t.draw : won ? t.victory : t.defeat;
  const headlineColor = draw ? "#00D4FF" : won ? "#00FF88" : "#FF2D78";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="flex flex-col items-center gap-4 max-w-sm w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        {/* Headline */}
        <motion.div
          className="text-4xl font-black tracking-tight"
          style={{ color: headlineColor, textShadow: `0 0 30px ${headlineColor}60` }}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {headlineText}
        </motion.div>

        {/* Two avatars side by side */}
        <div className="flex items-end justify-center gap-6 w-full">
          {/* My avatar (left) */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 relative">
              <AvatarCompanion
                fixed={false}
                mood={won || draw ? "victory" : "disappointed"}
                gender={gender}
                activeSkin={activeSkin}
                activeFace={activeFace}
                activeTop={activeTop}
                activeBottom={activeBottom}
                activeShoe={activeShoe}
                activeCape={activeCape}
                activeGlasses={activeGlasses}
                activeGloves={activeGloves}
                activeHat={activeHat}
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white/70 text-xs font-bold truncate max-w-[100px]">{myName}</span>
              <span className="text-2xl font-black" style={{ color: won ? "#00FF88" : lost ? "#FF2D78" : "#00D4FF" }}>
                {formatScore ? formatScore(myScore) : myScore}
              </span>
            </div>
            {won && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <Trophy size={24} className="text-gold" style={{ filter: "drop-shadow(0 0 8px rgba(255,215,0,0.6))" }} />
              </motion.div>
            )}
          </motion.div>

          {/* VS */}
          <motion.div
            className="text-white/20 text-lg font-black pb-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            VS
          </motion.div>

          {/* Opponent avatar (right) — default look */}
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 relative">
              <AvatarCompanion
                fixed={false}
                mood={lost || draw ? "victory" : "disappointed"}
                gender="boy"
                activeSkin={getSkinDef("default")}
                activeFace={getFaceDef("default")}
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white/70 text-xs font-bold truncate max-w-[100px]">{oppName}</span>
              <span className="text-2xl font-black" style={{ color: lost ? "#00FF88" : won ? "#FF2D78" : "#00D4FF" }}>
                {formatScore ? formatScore(oppScore) : oppScore}
              </span>
            </div>
            {lost && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <Trophy size={24} className="text-gold" style={{ filter: "drop-shadow(0 0 8px rgba(255,215,0,0.6))" }} />
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Continue button */}
        <motion.button
          onClick={onContinue}
          className="mt-4 px-8 py-3 rounded-xl font-bold text-sm border transition-colors"
          style={{
            backgroundColor: `${headlineColor}15`,
            borderColor: `${headlineColor}40`,
            color: headlineColor,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {t.cont}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
