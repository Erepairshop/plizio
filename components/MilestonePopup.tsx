"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { checkNewMilestones, claimMilestone } from "@/lib/milestones";

export default function MilestonePopup() {
  const [milestones, setMilestones] = useState<{ id: string; reward: number; icon: string }[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    const newOnes = checkNewMilestones();
    if (newOnes.length > 0) setMilestones(newOnes);
  }, []);

  if (milestones.length === 0) return null;
  const current = milestones[currentIdx];
  if (!current) return null;

  const handleClaim = () => {
    claimMilestone(current.id);
    setClaimed(true);
    setTimeout(() => {
      setClaimed(false);
      if (currentIdx + 1 < milestones.length) {
        setCurrentIdx((i) => i + 1);
      } else {
        setMilestones([]);
      }
    }, 800);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-card border border-[#E040FB]/30 rounded-2xl p-6 flex flex-col items-center gap-4 max-w-xs w-full mx-4"
          style={{ boxShadow: "0 0 30px rgba(224,64,251,0.2)" }}
          initial={{ scale: 0.8, y: 20 }} animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 15 }}
        >
          <motion.div
            className="text-5xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.6 }}
          >
            {current.icon}
          </motion.div>

          <span className="text-white/40 text-xs font-bold tracking-widest">MILESTONE</span>

          <div className="flex items-center gap-2">
            <Star size={18} className="text-[#E040FB]" style={{ filter: "drop-shadow(0 0 6px rgba(224,64,251,0.5))" }} />
            <span className="text-[#E040FB] font-bold text-lg">+{current.reward}</span>
          </div>

          <motion.button
            onClick={handleClaim}
            className="bg-[#E040FB]/15 border border-[#E040FB]/40 px-6 py-2.5 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={claimed}
          >
            <span className="text-[#E040FB] font-bold text-sm">
              {claimed ? "Megszerezve!" : "Begyujtes"}
            </span>
          </motion.button>

          {milestones.length > 1 && (
            <span className="text-white/20 text-xs">{currentIdx + 1} / {milestones.length}</span>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
