"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { WORLD_ZONES, getWorldProgress, isZoneUnlocked } from "@/lib/world";

export default function WorldPage() {
  const [completedZones, setCompletedZones] = useState<string[]>([]);

  useEffect(() => {
    setCompletedZones(getWorldProgress().completedZones);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center px-4 pt-8 pb-12 gap-8">
      {/* Header */}
      <div className="w-full max-w-md flex items-center gap-3">
        <Link
          href="/"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-white font-black text-xl leading-tight">Plizio World</h1>
          <p className="text-white/40 text-xs">{completedZones.length} / {WORLD_ZONES.length} zóna teljesítve</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-md h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-green"
          initial={{ width: 0 }}
          animate={{ width: `${(completedZones.length / WORLD_ZONES.length) * 100}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Zones */}
      <div className="w-full max-w-md flex flex-col gap-4">
        {WORLD_ZONES.map((zone, i) => {
          const unlocked = isZoneUnlocked(i, completedZones);
          const completed = completedZones.includes(zone.id);

          return (
            <motion.div
              key={zone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="relative w-full rounded-2xl p-4 flex items-center gap-4 border transition-all"
                style={{
                  background: unlocked
                    ? `linear-gradient(135deg, ${zone.glow} 0%, rgba(18,18,42,0.95) 60%)`
                    : "rgba(255,255,255,0.03)",
                  borderColor: unlocked ? zone.color + "55" : "rgba(255,255,255,0.06)",
                  boxShadow: completed ? `0 0 20px ${zone.glow}` : "none",
                  opacity: unlocked ? 1 : 0.45,
                }}
              >
                {/* Emoji */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
                  style={{ background: unlocked ? zone.color + "22" : "rgba(255,255,255,0.05)" }}
                >
                  {unlocked ? zone.emoji : <Lock size={20} className="text-white/30" />}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-base">{zone.name}</span>
                    {completed && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: zone.color + "33", color: zone.color }}>
                        Kész ✓
                      </span>
                    )}
                  </div>
                  <p className="text-white/35 text-xs mt-0.5">
                    {unlocked
                      ? `${zone.games.length} játék`
                      : "Teljesítsd az előző zónát!"}
                  </p>
                </div>

                {/* Zóna szám */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                  style={{
                    background: completed ? zone.color : "rgba(255,255,255,0.07)",
                    color: completed ? "#000" : zone.color,
                  }}
                >
                  {i + 1}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Coming soon note */}
      <p className="text-white/20 text-xs text-center max-w-xs">
        A zónák hamarosan teljes expedíciókkal töltődnek fel!
      </p>
    </main>
  );
}
