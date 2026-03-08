"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LogOut, X } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";

const T = {
  en: { title: "Leave match?", body: "Your opponent will be notified that you left.", stay: "Stay", leave: "Leave" },
  hu: { title: "Kilepesz?", body: "Az ellenfeled ertesitest kap hogy elhagytad a jatekot.", stay: "Maradok", leave: "Kilepek" },
  de: { title: "Spiel verlassen?", body: "Dein Gegner wird benachrichtigt.", stay: "Bleiben", leave: "Verlassen" },
  ro: { title: "Parasesti meciul?", body: "Adversarul tau va fi notificat.", stay: "Raman", leave: "Parasesc" },
};

interface Props {
  open: boolean;
  onStay: () => void;
  onLeave: () => void;
}

export default function MultiplayerExitConfirm({ open, onStay, onLeave }: Props) {
  const { lang } = useLang();
  const t = T[lang] || T.en;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-card border border-white/10 rounded-2xl p-6 max-w-xs w-full flex flex-col items-center gap-4"
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 30 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="w-12 h-12 rounded-full bg-neon-pink/10 border border-neon-pink/30 flex items-center justify-center">
              <LogOut size={22} className="text-neon-pink" />
            </div>

            <h3 className="text-white font-bold text-lg">{t.title}</h3>
            <p className="text-white/70 text-sm text-center">{t.body}</p>

            <div className="flex gap-3 w-full mt-2">
              <motion.button
                onClick={onStay}
                className="flex-1 py-3 rounded-xl bg-neon-green/15 border border-neon-green/30 text-neon-green font-bold text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.stay}
              </motion.button>
              <motion.button
                onClick={onLeave}
                className="flex-1 py-3 rounded-xl bg-neon-pink/15 border border-neon-pink/30 text-neon-pink font-bold text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.leave}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
