import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Props {
  lang: string;
  onDone: () => void;
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

export default function AwakeningCeremony({ lang, onDone }: Props) {
  const [showButton, setShowButton] = useState(false);

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
          backgroundColor: ["#db2777", "#ffffff", "#f59e0b"],
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
              "0 0 20px #db2777",
              "0 0 60px #ffffff",
              "0 0 40px #f59e0b",
              "0 0 20px #db2777",
            ],
            borderColor: ["#db2777", "#ffffff", "#f59e0b", "#db2777"],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="w-32 h-32 rounded-full border-2 flex items-center justify-center"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_#fff]" 
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
