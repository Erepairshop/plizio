"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserX } from "lucide-react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { useLang } from "@/components/LanguageProvider";

const T = {
  en: { left: "left the game", back: "Back" },
  hu: { left: "elhagyta a jatekot", back: "Vissza" },
  de: { left: "hat das Spiel verlassen", back: "Zuruck" },
  ro: { left: "a parasit jocul", back: "Inapoi" },
};

interface Props {
  matchId: string;
  opponentName: string;
  onBack?: () => void;
}

export default function MultiplayerAbandonNotice({ matchId, opponentName, onBack }: Props) {
  const router = useRouter();
  const { lang } = useLang();
  const t = T[lang] || T.en;
  const [abandoned, setAbandoned] = useState(false);

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase
        .from("multiplayer_matches")
        .select("status")
        .eq("id", matchId)
        .single();

      if (data?.status === "abandoned") {
        setAbandoned(true);
      }
    };

    const interval = setInterval(check, 3000);
    return () => clearInterval(interval);
  }, [matchId]);

  const handleBack = () => {
    if (onBack) onBack();
    else router.push("/multiplayer");
  };

  return (
    <AnimatePresence>
      {abandoned && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col items-center gap-5 max-w-xs w-full"
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, delay: 0.1 }}
            >
              <UserX size={30} className="text-neon-pink" />
            </motion.div>

            <p className="text-white/70 text-sm text-center">
              <span className="font-bold text-neon-blue">{opponentName}</span>
              {" "}{t.left}
            </p>

            <motion.button
              onClick={handleBack}
              className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white/50 font-bold text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.back}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
