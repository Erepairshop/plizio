import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { StarholdAvatarProfile } from "@/lib/gravitas/sim/types";

interface Props {
  lang: string;
  onDone: () => void;
  profile?: StarholdAvatarProfile | null;
}

const TEXTS: Record<string, string> = {
  en: "AVATAR AWAKENED",
  hu: "AZ AVATÁR FELÉBREDT",
  de: "AVATAR ERWACHT",
  ro: "AVATAR TREZIT",
};

const CONTINUE_TEXTS: Record<string, string> = {
  en: "Continue",
  hu: "Folytatás",
  de: "Fortfahren",
  ro: "Continuă",
};

export default function AwakeningCeremony({ lang, onDone, profile }: Props) {
  const [showButton, setShowButton] = useState(false);
  const accent = profile?.archetype === "protective"
    ? "#10b981"
    : profile?.archetype === "curious"
      ? "#8b5cf6"
      : profile?.archetype === "bold"
        ? "#f59e0b"
        : "#22d3ee";

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        animate={{
          backgroundColor: [accent, "#ffffff", accent],
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-12"
      >
        <motion.div
        animate={{
          boxShadow: [
              `0 0 20px ${accent}`,
              "0 0 60px #ffffff",
              `0 0 40px ${accent}`,
              `0 0 20px ${accent}`,
            ],
            borderColor: [accent, "#ffffff", accent, accent],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="w-32 h-32 rounded-full border-2 flex items-center justify-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-4 rounded-full bg-white"
            style={{ boxShadow: `0 0 15px ${accent}` }}
          />
        </motion.div>

        <div className="flex flex-col items-center gap-2">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-4xl md:text-6xl font-black tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 text-center px-6"
          >
            {TEXTS[lang] || TEXTS.en}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="w-48 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
        </div>

        {profile && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="max-w-[520px] rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-sm"
          >
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/45 font-black">
              Avatar imprint
            </div>
            <div className="mt-2 text-lg md:text-xl font-black tracking-[0.16em] text-white">
              {profile.title[lang as keyof typeof profile.title] || profile.title.en}
            </div>
            <div className="mt-2 text-[11px] leading-relaxed text-white/55">
              {profile.answers.map((answer) => answer.label[lang as keyof typeof answer.label] || answer.label.en).join(" · ")}
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {showButton && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={onDone}
              className="mt-8 px-10 py-4 rounded-full bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-white/90 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              {CONTINUE_TEXTS[lang] || CONTINUE_TEXTS.en}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        animate={{
          opacity: [0, 0.05, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none bg-white"
      />
    </motion.div>
  );
}
