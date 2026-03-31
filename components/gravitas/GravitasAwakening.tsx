"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  lang: string;
  onDone: () => void;
}

const T: Record<string, [string, string, string]> = {
  en: ["The shell responds...", "Eyes open.", "Your avatar is alive."],
  hu: ["A test válaszol...", "Szemek nyílnak.", "Az avatárod él."],
  de: ["Die Hülle antwortet...", "Augen öffnen sich.", "Dein Avatar lebt."],
  ro: ["Corpul răspunde...", "Ochii se deschid.", "Avatarul tău trăiește."],
};

type Phase = 0 | 1 | 2 | 3;

export default function GravitasAwakening({ lang, onDone }: Props) {
  const [phase, setPhase] = useState<Phase>(0);
  const t = T[lang] ?? T.en;

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 2000),
      setTimeout(() => setPhase(2), 4000),
      setTimeout(() => setPhase(3), 6000),
      setTimeout(() => onDone(), 8000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Phase 0-1: cyan pulse dot */}
      <AnimatePresence>
        {phase <= 1 && (
          <motion.div
            className="absolute rounded-full bg-cyan-400"
            style={{ boxShadow: "0 0 40px 10px rgba(34,211,238,0.6)" }}
            initial={{ width: 8, height: 8, opacity: 0.4 }}
            animate={phase === 0
              ? { width: 24, height: 24, opacity: 0.9 }
              : { width: 60, height: 60, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Phase 1: expanding rings */}
      <AnimatePresence>
        {phase === 1 && [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-cyan-400/60"
            initial={{ width: 60, height: 60, opacity: 0.8 }}
            animate={{ width: 320 + i * 80, height: 320 + i * 80, opacity: 0 }}
            transition={{ duration: 1.8, delay: i * 0.25, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Phase 2: pink avatar silhouette */}
      <AnimatePresence>
        {phase >= 2 && phase < 3 && (
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 100, height: 130,
              background: "radial-gradient(ellipse at center, rgba(236,72,153,0.95) 0%, rgba(168,85,247,0.5) 60%, transparent 100%)",
              boxShadow: "0 0 60px 20px rgba(236,72,153,0.5)",
            }}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Phase 3: white flash + fade out */}
      <AnimatePresence>
        {phase === 3 && (
          <motion.div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, white 0%, rgba(255,255,255,0.3) 50%, transparent 100%)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.0, times: [0, 0.35, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Text overlays */}
      <div className="absolute bottom-1/4 w-full flex flex-col items-center gap-3 px-6 pointer-events-none">
        <AnimatePresence>
          {phase === 1 && (
            <motion.p
              key="t1"
              className="text-cyan-300 text-lg font-light tracking-widest text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              {t[0]}
            </motion.p>
          )}
          {phase === 2 && (
            <motion.p
              key="t2"
              className="text-pink-300 text-xl font-semibold tracking-widest text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              {t[1]}
            </motion.p>
          )}
          {phase === 3 && (
            <motion.p
              key="t3"
              className="text-white text-2xl font-bold tracking-wide text-center"
              style={{ textShadow: "0 0 20px rgba(236,72,153,0.8)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              {t[2]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
