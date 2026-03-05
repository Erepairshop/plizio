"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { WORLD_ZONES, getWorldProgress, isZoneUnlocked } from "@/lib/world";

// Zone positions on the SVG canvas (400x640 viewBox)
const ZONE_POS = [
  { cx: 108, cy: 100 }, // 1. Hegyvidek
  { cx: 298, cy: 162 }, // 2. Ocean
  { cx: 272, cy: 290 }, // 3. Varos
  { cx: 112, cy: 378 }, // 4. Erdo
  { cx: 228, cy: 488 }, // 5. Sivatag
  { cx: 340, cy: 574 }, // 6. Vulkan
];

// Smooth bezier path through all zone nodes in order
const ROAD =
  "M 108,100 C 210,76 258,118 298,162 C 338,206 336,252 272,290 " +
  "C 208,328 132,345 112,378 C 92,412 158,455 228,488 " +
  "C 278,516 326,542 340,574";

// Terrain blobs (decorative background, one per zone)
const TERRAIN = [
  { cx: 108, cy: 100, rx: 90, ry: 65, fill: "rgba(100,116,139,0.07)" },
  { cx: 298, cy: 162, rx: 75, ry: 55, fill: "rgba(14,165,233,0.06)" },
  { cx: 272, cy: 290, rx: 70, ry: 52, fill: "rgba(168,85,247,0.06)" },
  { cx: 112, cy: 378, rx: 80, ry: 58, fill: "rgba(34,197,94,0.06)" },
  { cx: 228, cy: 488, rx: 85, ry: 54, fill: "rgba(245,158,11,0.06)" },
  { cx: 340, cy: 574, rx: 65, ry: 48, fill: "rgba(239,68,68,0.07)" },
];

// Static background stars (deterministic positions)
const STARS = Array.from({ length: 36 }, (_, i) => ({
  cx: (i * 137.5 + 23) % 400,
  cy: (i * 97.3 + 17) % 640,
  r: i % 4 === 0 ? 1.4 : 0.7,
}));

// Friendly display names for game IDs
const GAME_NAMES: Record<string, string> = {
  numberpath: "Number Path",
  minisudoku: "Mini Sudoku",
  memoryflash: "Memory Flash",
  spotdiff: "Spot Diff",
  reflexrush: "Reflex Rush",
  quickpick: "Quick Pick",
  kodex: "Kodex",
  wordscramble: "Word Scramble",
  mathtest: "Math Test",
  numberrush: "Number Rush",
  patternforge: "Pattern Forge",
};

export default function WorldPage() {
  const [completedZones, setCompletedZones] = useState<string[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    setCompletedZones(getWorldProgress().completedZones);
  }, []);

  const selZone = selected !== null ? WORLD_ZONES[selected] : null;
  const selUnlocked = selected !== null ? isZoneUnlocked(selected, completedZones) : false;
  const selDone = selZone ? completedZones.includes(selZone.id) : false;

  return (
    <main
      className="min-h-screen flex flex-col items-center pb-8 select-none"
      style={{ background: "#0A0A1A" }}
      onClick={() => setSelected(null)}
    >
      {/* Header */}
      <div className="w-full max-w-md flex items-center gap-3 px-4 pt-6 pb-1">
        <Link
          href="/"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors shrink-0"
        >
          <ArrowLeft size={16} />
        </Link>
        <div className="flex-1 min-w-0">
          <h1 className="text-white font-black text-xl leading-tight">Plizio World</h1>
          <p className="text-white/40 text-xs">
            {completedZones.length} / {WORLD_ZONES.length} zona teljesitve
          </p>
        </div>
        {/* Mini progress dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          {WORLD_ZONES.map((z) => (
            <div
              key={z.id}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: completedZones.includes(z.id) ? z.color : "rgba(255,255,255,0.10)",
                boxShadow: completedZones.includes(z.id) ? `0 0 6px ${z.glow}` : "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* SVG Map */}
      <div className="w-full max-w-md px-2" onClick={(e) => e.stopPropagation()}>
        <svg
          viewBox="0 0 400 640"
          className="w-full"
          style={{
            maxHeight: selected !== null ? "46vh" : "68vh",
            transition: "max-height 0.3s ease",
          }}
        >
          {/* Stars */}
          {STARS.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="rgba(255,255,255,0.18)" />
          ))}

          {/* Terrain blobs */}
          {TERRAIN.map((t, i) => (
            <ellipse key={i} cx={t.cx} cy={t.cy} rx={t.rx} ry={t.ry} fill={t.fill} />
          ))}

          {/* Road shadow */}
          <path d={ROAD} fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth={14} strokeLinecap="round" />

          {/* Dashed road surface */}
          <path
            d={ROAD}
            fill="none"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray="9 13"
          />

          {/* Animated reveal line */}
          <motion.path
            d={ROAD}
            fill="none"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.1 }}
          />

          {/* Zone nodes */}
          {WORLD_ZONES.map((zone, i) => {
            const { cx, cy } = ZONE_POS[i];
            const unlocked = isZoneUnlocked(i, completedZones);
            const done = completedZones.includes(zone.id);
            const isSel = selected === i;

            return (
              <motion.g
                key={zone.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(isSel ? null : i);
                }}
                style={{ cursor: "pointer" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: unlocked ? 1 : 0.4 }}
                transition={{ delay: 0.25 + i * 0.12, type: "spring", stiffness: 180, damping: 16 }}
              >
                {/* Glow blob behind completed zones */}
                {done && (
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={32}
                    fill={zone.color + "18"}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  />
                )}

                {/* Pulse ring for active-but-incomplete */}
                {unlocked && !done && !isSel && (
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={22}
                    fill="none"
                    stroke={zone.color}
                    strokeWidth={1.5}
                    strokeOpacity={0.5}
                    animate={{ r: [22, 34], opacity: [0.5, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: i * 0.3 }}
                  />
                )}

                {/* Selection ring */}
                {isSel && (
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={28}
                    fill="none"
                    stroke={zone.color}
                    strokeWidth={2.5}
                    strokeOpacity={0.9}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Completion ring */}
                {done && !isSel && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={26}
                    fill="none"
                    stroke={zone.color}
                    strokeWidth={1.5}
                    strokeOpacity={0.55}
                  />
                )}

                {/* Main circle */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={21}
                  fill={
                    done
                      ? zone.color + "40"
                      : unlocked
                      ? zone.color + "20"
                      : "rgba(255,255,255,0.05)"
                  }
                  stroke={unlocked ? zone.color : "rgba(255,255,255,0.10)"}
                  strokeWidth={done ? 2 : 1.5}
                  style={{ filter: done ? `drop-shadow(0 0 10px ${zone.color})` : "none" }}
                />

                {/* Emoji or lock */}
                <text
                  x={cx}
                  y={cy}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={unlocked ? 17 : 14}
                >
                  {unlocked ? zone.emoji : "\uD83D\uDD12"}
                </text>

                {/* Done badge */}
                {done && (
                  <>
                    <circle cx={cx + 15} cy={cy - 15} r={9} fill={zone.color} />
                    <text
                      x={cx + 15}
                      y={cy - 15}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={10}
                      fontWeight="900"
                      fill="#000"
                    >
                      ✓
                    </text>
                  </>
                )}

                {/* Zone name label */}
                <text
                  x={cx}
                  y={cy + 32}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight="700"
                  fill={unlocked ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.18)"}
                  letterSpacing={0.6}
                >
                  {zone.name.toUpperCase()}
                </text>

                {/* Zone number */}
                <text
                  x={cx}
                  y={cy + 43}
                  textAnchor="middle"
                  fontSize={7.5}
                  fontWeight="600"
                  fill={unlocked ? zone.color : "rgba(255,255,255,0.12)"}
                >
                  {i + 1}. ZONA
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Detail panel */}
      <div className="w-full max-w-md px-4" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence>
          {selZone && selected !== null && (
            <motion.div
              key={selZone.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.22 }}
            >
              <div
                className="rounded-2xl p-5 border"
                style={{
                  background: `linear-gradient(135deg, ${selZone.glow} 0%, rgba(18,18,42,0.98) 65%)`,
                  borderColor: selZone.color + "44",
                  boxShadow: selDone ? `0 0 28px ${selZone.glow}` : "none",
                }}
              >
                {/* Zone header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{selUnlocked ? selZone.emoji : "🔒"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white font-black text-lg">{selZone.name}</span>
                      {selDone && (
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: selZone.color + "30", color: selZone.color }}
                        >
                          Teljesitve ✓
                        </span>
                      )}
                      {selUnlocked && !selDone && (
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: selZone.color + "20", color: selZone.color }}
                        >
                          Aktiv
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-xs mt-0.5">
                      {selUnlocked
                        ? `${selZone.games.length} jatek elerheto`
                        : "Teljesitsd az elozo zonat a feloldashoz"}
                    </p>
                  </div>
                </div>

                {selUnlocked ? (
                  <>
                    {/* Game chips */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selZone.games.map((g) => (
                        <span
                          key={g}
                          className="text-xs px-3 py-1.5 rounded-lg font-semibold"
                          style={{ background: selZone.color + "22", color: selZone.color }}
                        >
                          {GAME_NAMES[g] ?? g}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/${selZone.games[0]}/`}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-80 active:opacity-70"
                      style={{ background: selZone.color, color: "#000" }}
                    >
                      Jatek inditasa
                      <ChevronRight size={15} />
                    </Link>
                  </>
                ) : (
                  <div
                    className="text-center py-3 rounded-xl text-sm font-medium"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }}
                  >
                    Zarolt zona
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selected === null && (
        <p className="text-white/15 text-xs text-center mt-4 px-6">
          Koppints egy zonara a reszletekert
        </p>
      )}
    </main>
  );
}
