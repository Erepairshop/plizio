"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swords, Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { subscribeToMatch, type MultiplayerMatch, type GameType, GAME_LABELS } from "@/lib/multiplayer";
import { supabase } from "@/lib/supabase/client";
import AvatarCompanion from "@/components/AvatarCompanion";
import { getGender, type AvatarGender } from "@/lib/gender";
import { getSkinDef, getActiveSkin } from "@/lib/skins";
import { getFaceDef, getActiveFace } from "@/lib/faces";
import { getActive, getTopDef, getBottomDef, getShoeDef, getCapeDef, getGlassesDef, getGloveDef } from "@/lib/clothing";
import { getActiveHat, getHatDef } from "@/lib/accessories";
import { useLang } from "@/components/LanguageProvider";

const T = {
  en: { waiting: "Waiting for", toAccept: "to accept...", cancel: "Cancel", accepted: "Challenge accepted!", starting: "Starting in" },
  hu: { waiting: "Varakozas,", toAccept: "elfogadja...", cancel: "Megse", accepted: "Kihivas elfogadva!", starting: "Indul" },
  de: { waiting: "Warte auf", toAccept: "...", cancel: "Abbrechen", accepted: "Angenommen!", starting: "Start in" },
  ro: { waiting: "Se asteapta ca", toAccept: "sa accepte...", cancel: "Anuleaza", accepted: "Provocare acceptata!", starting: "Incepe in" },
};

interface Props {
  match: MultiplayerMatch;
  myName: string;
  onCancel: () => void;
}

export default function ChallengeWaiting({ match, myName, onCancel }: Props) {
  const router = useRouter();
  const { lang } = useLang();
  const t = T[lang] || T.en;

  const [phase, setPhase] = useState<"waiting" | "accepted" | "countdown">("waiting");
  const [countdown, setCountdown] = useState(3);
  const [avatarMood, setAvatarMood] = useState<"idle" | "happy" | "victory">("idle");

  // Avatar state
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

  const opponentName = match.player1_name.toLowerCase() === myName.toLowerCase()
    ? match.player2_name
    : match.player1_name;
  const isP1 = match.player1_name.toLowerCase() === myName.toLowerCase();
  const gameLabel = GAME_LABELS[match.game as GameType] || match.game;

  // Poll for match status changes (opponent accepts)
  useEffect(() => {
    if (phase !== "waiting") return;

    const checkStatus = async () => {
      const { data } = await supabase
        .from("multiplayer_matches")
        .select("status")
        .eq("id", match.id)
        .single();

      if (data?.status === "playing") {
        setPhase("accepted");
        setAvatarMood("happy");
        setTimeout(() => {
          setPhase("countdown");
          setAvatarMood("victory");
          setCountdown(3);
        }, 1000);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 2000);
    return () => clearInterval(interval);
  }, [match.id, phase]);

  // Countdown
  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdown <= 0) {
      router.push(`/${match.game}?match=${match.id}&seed=${match.seed}&p=${isP1 ? "1" : "2"}`);
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, countdown, match, isP1, router]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="flex flex-col items-center gap-6 max-w-sm w-full"
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* Avatar */}
        <motion.div
          className="w-40 h-40 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AvatarCompanion
            mood={avatarMood}
            fixed={false}
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
            passThrough={true}
          />
        </motion.div>

        {/* Waiting phase */}
        {phase === "waiting" && (
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2">
              <Swords size={18} className="text-neon-pink" style={{ filter: "drop-shadow(0 0 8px rgba(255,45,120,0.4))" }} />
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">{gameLabel}</span>
            </div>

            <div className="flex items-center gap-3">
              <Loader2 size={16} className="animate-spin text-neon-blue" />
              <p className="text-white/70 text-sm">
                {t.waiting} <span className="font-bold text-neon-blue">{opponentName}</span> {t.toAccept}
              </p>
            </div>

            {/* Animated dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-neon-pink/40"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                />
              ))}
            </div>

            <motion.button
              onClick={onCancel}
              className="mt-4 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/40 font-bold text-xs"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <X size={12} />
              {t.cancel}
            </motion.button>
          </motion.div>
        )}

        {/* Accepted phase */}
        {phase === "accepted" && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-neon-green font-bold text-lg">{t.accepted}</p>
          </motion.div>
        )}

        {/* Countdown phase */}
        {phase === "countdown" && (
          <motion.div className="flex flex-col items-center gap-4">
            <p className="text-white/50 text-sm font-bold">{t.starting}...</p>
            <motion.div
              key={countdown}
              className="text-7xl font-black text-neon-blue"
              style={{ textShadow: "0 0 30px rgba(0,212,255,0.6)" }}
              initial={{ scale: 2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {countdown > 0 ? countdown : "GO!"}
            </motion.div>
            <p className="text-white/30 text-xs">
              {myName} vs {opponentName} — {gameLabel}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
