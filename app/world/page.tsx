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

// Bezier road segments between adjacent zones (in order)
const ROAD_SEGS = [
  "M 108,100 C 210,76 258,118 298,162",
  "M 298,162 C 338,206 336,252 272,290",
  "M 272,290 C 208,328 132,345 112,378",
  "M 112,378 C 92,412 158,455 228,488",
  "M 228,488 C 278,516 326,542 340,574",
];
const ROAD = ROAD_SEGS.join(" ");

// Island blob shapes per zone (irregular organic polygons)
const ISLAND_PATHS = [
  // 1. Hegyvidek (top-left)
  "M 108,52 C 138,46 165,60 168,80 C 172,100 162,128 140,136 C 118,144 82,138 66,118 C 50,98 55,72 75,60 C 85,55 98,54 108,52 Z",
  // 2. Ocean (top-right)
  "M 298,114 C 328,108 358,122 364,144 C 370,166 356,196 332,204 C 308,212 272,204 258,184 C 244,164 250,134 272,122 C 280,118 289,115 298,114 Z",
  // 3. Varos (mid-right)
  "M 272,242 C 302,236 332,252 338,272 C 344,292 330,326 306,334 C 282,342 248,332 238,312 C 228,292 236,260 258,248 C 263,244 268,243 272,242 Z",
  // 4. Erdo (mid-left)
  "M 112,332 C 144,324 172,340 178,362 C 184,384 168,414 144,420 C 120,426 82,416 68,394 C 54,372 62,342 84,333 C 94,329 103,333 112,332 Z",
  // 5. Sivatag (bottom-center)
  "M 228,442 C 264,434 298,450 308,474 C 318,498 302,530 274,538 C 246,546 202,534 188,510 C 174,486 186,454 210,444 C 216,441 222,443 228,442 Z",
  // 6. Vulkan (bottom-right)
  "M 340,528 C 368,522 394,538 398,558 C 402,578 388,608 364,614 C 340,620 306,610 296,590 C 286,570 298,542 318,532 C 325,529 333,529 340,528 Z",
];

// Small decorative terrain icons per zone (SVG path data, centered at 0,0)
const DECO: { path: string | string[]; tx: number; ty: number; scale?: number }[] = [
  // 1. Mountain peaks
  {
    path: ["M-14,10 L-7,0 L0,10", "M-1,10 L7,2 L15,10"],
    tx: 130, ty: 68,
  },
  // 2. Ocean waves
  {
    path: [
      "M-14,0 Q-10,-5 -7,0 Q-4,5 0,0 Q4,-5 7,0 Q10,5 14,0",
      "M-14,6 Q-10,1 -7,6 Q-4,11 0,6 Q4,1 7,6 Q10,11 14,6",
    ],
    tx: 322, ty: 138,
  },
  // 3. Buildings
  {
    path: [
      "M-13,-1 L-13,11 M-13,-1 L-6,-1 L-6,11",
      "M-4,-8 L-4,11 M-4,-8 L4,-8 L4,11",
      "M6,2 L6,11 M6,2 L13,2 L13,11",
    ],
    tx: 300, ty: 262,
  },
  // 4. Two pine trees
  {
    path: [
      "M-9,10 L-9,-2 M-15,-1 L-9,-10 L-3,-1",
      "M5,10 L5,-2 M-1,-1 L5,-10 L11,-1",
    ],
    tx: 84, ty: 354,
  },
  // 5. Sand dunes
  {
    path: [
      "M-16,0 Q-8,-10 0,0 Q8,-10 16,0",
      "M-9,5 Q-3,-3 3,5",
    ],
    tx: 204, ty: 516,
  },
  // 6. Volcano + flame
  {
    path: [
      "M-9,10 L-3,-2 L3,-2 L9,10",
      "M-3,-2 Q0,-14 3,-2",
    ],
    tx: 316, ty: 550,
  },
];

// Twinkling star positions (animated)
const TWINKLE_STARS = [
  { cx: 35, cy: 42, r: 1.2 },
  { cx: 185, cy: 28, r: 1.0 },
  { cx: 360, cy: 55, r: 1.3 },
  { cx: 62, cy: 220, r: 0.9 },
  { cx: 350, cy: 230, r: 1.1 },
  { cx: 155, cy: 450, r: 1.0 },
  { cx: 390, cy: 400, r: 1.2 },
  { cx: 20, cy: 510, r: 0.8 },
];

// Static background stars
const STATIC_STARS = Array.from({ length: 28 }, (_, i) => ({
  cx: (i * 137.5 + 23) % 400,
  cy: (i * 97.3 + 17) % 640,
  r: 0.6,
}));

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

  // Progress character sits at the last unlocked zone position
  const progressIdx = Math.max(
    0,
    WORLD_ZONES.findIndex((z, i) => !isZoneUnlocked(i, completedZones)) - 1
  );
  const charPos = ZONE_POS[Math.min(progressIdx, ZONE_POS.length - 1)];

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
          <defs>
            {/* Ocean water gradient */}
            <radialGradient id="waterGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0c2a4a" stopOpacity="1" />
              <stop offset="100%" stopColor="#060f1e" stopOpacity="1" />
            </radialGradient>
            {/* Island edge shadow */}
            <filter id="islandShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
            </filter>
            {/* Glow filter */}
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Ocean background */}
          <rect x="0" y="0" width="400" height="640" fill="url(#waterGrad)" />

          {/* Animated water shimmer lines */}
          {[80, 180, 280, 380, 480, 580].map((y, i) => (
            <motion.line
              key={i}
              x1="0" y1={y} x2="400" y2={y}
              stroke="rgba(14,165,233,0.06)"
              strokeWidth={1}
              animate={{ opacity: [0.3, 0.8, 0.3], y1: [y, y + 4, y], y2: [y, y + 4, y] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          ))}

          {/* Static stars */}
          {STATIC_STARS.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="rgba(255,255,255,0.25)" />
          ))}

          {/* Twinkling stars */}
          {TWINKLE_STARS.map((s, i) => (
            <motion.circle
              key={i}
              cx={s.cx}
              cy={s.cy}
              r={s.r}
              fill="white"
              animate={{ opacity: [0.2, 1, 0.2], r: [s.r, s.r * 1.6, s.r] }}
              transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            />
          ))}

          {/* Island blobs (land) */}
          {ISLAND_PATHS.map((d, i) => {
            const zone = WORLD_ZONES[i];
            const unlocked = isZoneUnlocked(i, completedZones);
            const done = completedZones.includes(zone.id);
            return (
              <motion.path
                key={i}
                d={d}
                fill={unlocked ? `#1a3a2a` : "#111827"}
                stroke={unlocked ? zone.color + "44" : "rgba(255,255,255,0.06)"}
                strokeWidth={1.5}
                filter="url(#islandShadow)"
                style={{
                  filter: done
                    ? `drop-shadow(0 0 8px ${zone.color}55) drop-shadow(0 3px 4px #000)`
                    : "drop-shadow(0 3px 4px #000)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 + i * 0.08, duration: 0.5 }}
              />
            );
          })}

          {/* Terrain decorations per zone */}
          {DECO.map((d, i) => {
            const zone = WORLD_ZONES[i];
            const unlocked = isZoneUnlocked(i, completedZones);
            const paths = Array.isArray(d.path) ? d.path : [d.path];
            return (
              <g
                key={i}
                transform={`translate(${d.tx}, ${d.ty}) scale(${d.scale ?? 1})`}
                opacity={unlocked ? 0.65 : 0.18}
              >
                {paths.map((p, j) => (
                  <path
                    key={j}
                    d={p}
                    fill="none"
                    stroke={unlocked ? zone.color : "rgba(255,255,255,0.4)"}
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
              </g>
            );
          })}

          {/* Completed road segments (colored glow) */}
          {ROAD_SEGS.map((seg, i) => {
            const destZone = WORLD_ZONES[i + 1];
            const show = destZone && completedZones.includes(WORLD_ZONES[i].id);
            if (!show) return null;
            return (
              <motion.path
                key={i}
                d={seg}
                fill="none"
                stroke={WORLD_ZONES[i].color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeOpacity={0.5}
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            );
          })}

          {/* Road shadow */}
          <path d={ROAD} fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth={12} strokeLinecap="round" />

          {/* Dashed road */}
          <path
            d={ROAD}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeDasharray="8 12"
          />

          {/* Animated road reveal */}
          <motion.path
            d={ROAD}
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth={2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.2 }}
          />

          {/* Progress character (current position) */}
          {completedZones.length > 0 && (
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              <circle cx={charPos.cx} cy={charPos.cy - 34} r={10} fill="#fff" opacity={0.95} />
              <text x={charPos.cx} y={charPos.cy - 34} textAnchor="middle" dominantBaseline="central" fontSize={11}>
                ⭐
              </text>
              {/* Pin line */}
              <line
                x1={charPos.cx}
                y1={charPos.cy - 24}
                x2={charPos.cx}
                y2={charPos.cy - 22}
                stroke="white"
                strokeWidth={1.5}
                opacity={0.6}
              />
            </motion.g>
          )}

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
                animate={{ scale: 1, opacity: unlocked ? 1 : 0.45 }}
                transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 180, damping: 16 }}
              >
                {/* Glow bloom for done */}
                {done && (
                  <motion.circle
                    cx={cx} cy={cy} r={34}
                    fill={zone.color + "16"}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                )}

                {/* Pulse ring for active-incomplete */}
                {unlocked && !done && !isSel && (
                  <motion.circle
                    cx={cx} cy={cy} r={22}
                    fill="none"
                    stroke={zone.color}
                    strokeWidth={1.5}
                    strokeOpacity={0.5}
                    animate={{ r: [22, 36], opacity: [0.5, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: i * 0.35 }}
                  />
                )}

                {/* Selection ring */}
                {isSel && (
                  <motion.circle
                    cx={cx} cy={cy} r={28}
                    fill="none"
                    stroke={zone.color}
                    strokeWidth={2.5}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Completion ring */}
                {done && !isSel && (
                  <circle cx={cx} cy={cy} r={26} fill="none" stroke={zone.color} strokeWidth={1.5} strokeOpacity={0.6} />
                )}

                {/* Main circle */}
                <circle
                  cx={cx} cy={cy} r={21}
                  fill={done ? zone.color + "44" : unlocked ? zone.color + "25" : "rgba(255,255,255,0.06)"}
                  stroke={unlocked ? zone.color : "rgba(255,255,255,0.12)"}
                  strokeWidth={done ? 2 : 1.5}
                  style={{ filter: done ? `drop-shadow(0 0 10px ${zone.color})` : "none" }}
                />

                {/* Emoji / lock */}
                <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize={unlocked ? 17 : 13}>
                  {unlocked ? zone.emoji : "\uD83D\uDD12"}
                </text>

                {/* Done badge */}
                {done && (
                  <>
                    <circle cx={cx + 15} cy={cy - 15} r={9} fill={zone.color} />
                    <text x={cx + 15} y={cy - 15} textAnchor="middle" dominantBaseline="central" fontSize={10} fontWeight="900" fill="#000">
                      ✓
                    </text>
                  </>
                )}

                {/* Name label */}
                <text
                  x={cx} y={cy + 32}
                  textAnchor="middle" fontSize={8.5} fontWeight="700" letterSpacing={0.5}
                  fill={unlocked ? "rgba(255,255,255,0.80)" : "rgba(255,255,255,0.20)"}
                >
                  {zone.name.toUpperCase()}
                </text>
                <text
                  x={cx} y={cy + 43}
                  textAnchor="middle" fontSize={7} fontWeight="600"
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="rounded-2xl p-5 border"
                style={{
                  background: `linear-gradient(135deg, ${selZone.glow} 0%, rgba(12,18,36,0.98) 65%)`,
                  borderColor: selZone.color + "44",
                  boxShadow: selDone ? `0 0 28px ${selZone.glow}` : "none",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{selUnlocked ? selZone.emoji : "🔒"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-white font-black text-lg">{selZone.name}</span>
                      {selDone && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: selZone.color + "30", color: selZone.color }}>
                          Teljesitve ✓
                        </span>
                      )}
                      {selUnlocked && !selDone && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: selZone.color + "20", color: selZone.color }}>
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
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selZone.games.map((g) => (
                        <span key={g} className="text-xs px-3 py-1.5 rounded-lg font-semibold"
                          style={{ background: selZone.color + "22", color: selZone.color }}>
                          {GAME_NAMES[g] ?? g}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/${selZone.games[0]}/`}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-opacity hover:opacity-80 active:opacity-70"
                      style={{ background: selZone.color, color: "#000" }}
                    >
                      Jatek inditasa <ChevronRight size={15} />
                    </Link>
                  </>
                ) : (
                  <div className="text-center py-3 rounded-xl text-sm font-medium"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)" }}>
                    Zarolt zona
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selected === null && (
        <p className="text-white/15 text-xs text-center mt-3 px-6">
          Koppints egy zonara a reszletekert
        </p>
      )}
    </main>
  );
}
