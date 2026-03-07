"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, Flame, Star, Layers, type LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */
export interface IslandGame {
  id: string;
  icon: LucideIcon;
  name: string;
  color: string;
}

export interface Island {
  id: string;
  label: string;
  color: string;
  glow: string;
  cx: number;
  cy: number;
  games: IslandGame[];
}

interface IslandMapProps {
  islands: Island[];
  username: string | null;
  streak: number;
  specialCount: number;
  cardCount: number;
}

/* ------------------------------------------------------------------ */
/* Colour constants                                                    */
/* ------------------------------------------------------------------ */
const LETTER_COLORS = ["#FF2D78", "#00D4FF", "#00FF88", "#FFD700", "#B44DFF", "#FF2D78"];
const LETTERS = ["P", "L", "I", "Z", "I", "O"];

/* ------------------------------------------------------------------ */
/* Ocean background                                                    */
/* ------------------------------------------------------------------ */
function OceanBg() {
  return (
    <g>
      <rect x={0} y={0} width={800} height={900} fill="#070e1a" />
      {/* depth bands */}
      <ellipse cx={400} cy={850} rx={520} ry={200} fill="#0b1729" opacity={0.7} />
      <ellipse cx={400} cy={900} rx={500} ry={160} fill="#0e1e36" opacity={0.5} />
      {/* subtle stars in the top area */}
      {[
        { x: 60, y: 30, r: 1.2 }, { x: 180, y: 18, r: 0.8 }, { x: 320, y: 40, r: 1 },
        { x: 500, y: 22, r: 0.7 }, { x: 650, y: 35, r: 1.1 }, { x: 740, y: 15, r: 0.9 },
        { x: 120, y: 55, r: 0.6 }, { x: 420, y: 10, r: 1.3 }, { x: 580, y: 50, r: 0.5 },
      ].map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="rgba(200,220,255,0.3)" />
      ))}
      {/* wave lines */}
      {[260, 420, 560, 700, 800].map((y, i) => (
        <motion.path
          key={i}
          d={`M -40,${y} Q 100,${y - 6} 200,${y} T 400,${y} T 600,${y} T 840,${y}`}
          fill="none"
          stroke="rgba(80,180,255,0.04)"
          strokeWidth={1.2}
          animate={{ x: [0, i % 2 === 0 ? 25 : -25, 0] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Single Island                                                       */
/* ------------------------------------------------------------------ */
function IslandShape({
  island,
  selected,
  onClick,
}: {
  island: Island;
  selected: boolean;
  onClick: () => void;
}) {
  const { cx, cy, color, glow, label } = island;
  const r = 58;

  return (
    <g className="cursor-pointer" onClick={onClick} role="button" tabIndex={0} aria-label={label}>
      {/* outer glow pulse */}
      <motion.circle
        cx={cx} cy={cy} r={r + 20}
        fill="none" stroke={glow}
        strokeWidth={selected ? 2.5 : 1}
        opacity={selected ? 0.7 : 0.15}
        animate={{ r: selected ? r + 26 : r + 20, opacity: selected ? 0.7 : 0.15 }}
        transition={{ duration: 0.4 }}
      />

      {/* gradient fill */}
      <defs>
        <radialGradient id={`ig-${island.id}`} cx="40%" cy="35%">
          <stop offset="0%" stopColor={color} stopOpacity={0.4} />
          <stop offset="60%" stopColor={color} stopOpacity={0.15} />
          <stop offset="100%" stopColor={color} stopOpacity={0.03} />
        </radialGradient>
      </defs>

      <motion.circle
        cx={cx} cy={cy} r={r}
        fill={`url(#ig-${island.id})`}
        stroke={color} strokeWidth={1.5} strokeOpacity={0.25}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      {/* terrain dots */}
      {[
        { dx: -16, dy: -20, s: 5 }, { dx: 10, dy: -14, s: 7 },
        { dx: -6, dy: 6, s: 4 }, { dx: 18, dy: 12, s: 6 }, { dx: -22, dy: 3, s: 3 },
      ].map((d, i) => (
        <circle key={i} cx={cx + d.dx} cy={cy + d.dy} r={d.s} fill={color} opacity={0.1 + i * 0.02} />
      ))}

      {/* label */}
      <text
        x={cx} y={cy + r + 16}
        textAnchor="middle" fill={color}
        fontSize={10} fontWeight={700} letterSpacing={1.5}
        style={{ textTransform: "uppercase" as const, filter: `drop-shadow(0 0 4px ${glow})` }}
      >
        {label}
      </text>

      {/* game count */}
      <circle cx={cx + r - 6} cy={cy - r + 6} r={9} fill={color} opacity={0.85} />
      <text x={cx + r - 6} y={cy - r + 10} textAnchor="middle" fill="#fff" fontSize={9} fontWeight={800}>
        {island.games.length}
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Connecting paths                                                    */
/* ------------------------------------------------------------------ */
function ConnectionPaths({ islands }: { islands: Island[] }) {
  if (islands.length < 2) return null;
  return (
    <g>
      {islands.slice(0, -1).map((a, i) => {
        const b = islands[i + 1];
        const mx = (a.cx + b.cx) / 2 + (i % 2 === 0 ? 40 : -40);
        const my = (a.cy + b.cy) / 2;
        return (
          <motion.path
            key={i}
            d={`M ${a.cx},${a.cy} Q ${mx},${my} ${b.cx},${b.cy}`}
            fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={1.5} strokeDasharray="5 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
          />
        );
      })}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Game panel                                                          */
/* ------------------------------------------------------------------ */
function GamePanel({ island, onClose }: { island: Island; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-end justify-center pointer-events-none"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      />
      <motion.div
        className="relative z-10 w-full max-w-md mx-4 mb-6 pointer-events-auto"
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div
          className="rounded-2xl border p-5 backdrop-blur-xl"
          style={{
            background: `linear-gradient(135deg, ${island.color}12, #0a0a1af0)`,
            borderColor: `${island.color}25`,
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <h2 className="text-lg font-bold tracking-wide" style={{ color: island.color }}>
              {island.label}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {island.games.map((game, i) => {
              const Icon = game.icon;
              return (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/${game.id}`}>
                    <div className="flex items-center gap-3 rounded-xl p-3 border border-white/5 hover:border-white/15 bg-white/5 hover:bg-white/10 transition-all active:scale-95">
                      <div className="p-2 rounded-lg" style={{ background: `${game.color}20` }}>
                        <Icon size={20} style={{ color: game.color }} />
                      </div>
                      <span className="text-white/90 text-sm font-semibold truncate">{game.name}</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Main — Fullscreen Island Map                                        */
/* ------------------------------------------------------------------ */
export default function IslandMap({ islands, username, streak, specialCount, cardCount }: IslandMapProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIsland = islands.find((i) => i.id === selectedId) ?? null;

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ perspective: "1000px" }}>
      {/* 2.5D tilt wrapper — full viewport SVG */}
      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d", transformOrigin: "center 40%" }}
        animate={{ rotateX: selectedId ? 0 : 8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg
          viewBox="0 0 800 900"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
        >
          <OceanBg />

          {/* Logo area — PLIZIO text at top */}
          <g>
            {LETTERS.map((letter, i) => (
              <text
                key={i}
                x={310 + i * 34}
                y={95}
                textAnchor="middle"
                fontSize={38}
                fontWeight={900}
                fill={LETTER_COLORS[i]}
                style={{ filter: `drop-shadow(0 0 8px ${LETTER_COLORS[i]}60)` }}
              >
                {letter}
              </text>
            ))}
            <text x={400} y={115} textAnchor="middle" fontSize={8} fontWeight={600} letterSpacing={3} fill="rgba(255,255,255,0.25)">
              PLAY &middot; LEARN &middot; THINK
            </text>

            {/* Username */}
            {username && (
              <text x={400} y={140} textAnchor="middle" fontSize={11} fontWeight={700} fill="rgba(255,255,255,0.2)" letterSpacing={1}>
                {username}
              </text>
            )}
          </g>

          {/* Stats bar */}
          <g>
            {streak > 0 && (
              <text x={340} y={168} textAnchor="end" fontSize={11} fontWeight={700} fill="#FFD700" opacity={0.6}>
                🔥 {streak}
              </text>
            )}
            {specialCount > 0 && (
              <text x={400} y={168} textAnchor="middle" fontSize={11} fontWeight={700} fill="#E040FB" opacity={0.6}>
                ⭐ {specialCount}
              </text>
            )}
            {cardCount > 0 && (
              <text x={460} y={168} textAnchor="start" fontSize={11} fontWeight={700} fill="rgba(255,255,255,0.25)">
                🃏 {cardCount}
              </text>
            )}
          </g>

          <ConnectionPaths islands={islands} />

          {islands.map((island) => (
            <IslandShape
              key={island.id}
              island={island}
              selected={selectedId === island.id}
              onClick={() => setSelectedId(selectedId === island.id ? null : island.id)}
            />
          ))}
        </svg>
      </motion.div>

      {/* Game panel overlay */}
      <AnimatePresence>
        {selectedIsland && (
          <GamePanel island={selectedIsland} onClose={() => setSelectedId(null)} />
        )}
      </AnimatePresence>

      {/* Hidden SEO links */}
      <nav className="sr-only" aria-label="Games">
        {islands.flatMap((island) =>
          island.games.map((game) => (
            <a key={game.id} href={`/${game.id}/`}>{game.name}</a>
          ))
        )}
      </nav>
    </div>
  );
}
