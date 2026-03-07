"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, type LucideIcon } from "lucide-react";

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
  lastPlayedCategory?: string | null;
}

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */
const LETTER_COLORS = ["#FF2D78", "#00D4FF", "#00FF88", "#FFD700", "#B44DFF", "#FF2D78"];
const LETTERS = ["P", "L", "I", "Z", "I", "O"];
const R = 40; // planet radius — smaller for more room

/* ------------------------------------------------------------------ */
/* Per-category planet surface details                                 */
/* ------------------------------------------------------------------ */
interface PlanetTheme {
  /** extra SVG elements inside the planet circle */
  details: (cx: number, cy: number, r: number, color: string) => React.ReactNode;
  /** ring colour override (optional) */
  ring?: string;
}

const PLANET_THEMES: Record<string, PlanetTheme> = {
  /* Quiz & Reflex — electric/lightning feel */
  quizreflex: {
    details: (cx, cy, r, color) => (
      <g>
        {/* lightning bolt */}
        <path
          d={`M ${cx - 4},${cy - 14} L ${cx + 2},${cy - 2} L ${cx - 2},${cy - 2} L ${cx + 4},${cy + 14} L ${cx - 1},${cy + 2} L ${cx + 3},${cy + 2} Z`}
          fill={color} opacity={0.3}
        />
        {/* energy ring */}
        <ellipse cx={cx} cy={cy} rx={r * 0.7} ry={r * 0.25} fill="none" stroke={color} strokeWidth={0.8} opacity={0.2}
          transform={`rotate(-15, ${cx}, ${cy})`}
        />
      </g>
    ),
  },
  /* Adventure — mountain/terrain */
  adventure: {
    details: (cx, cy, r, color) => (
      <g>
        {/* mountain peaks */}
        <path d={`M ${cx - 14},${cy + 8} L ${cx - 6},${cy - 10} L ${cx + 2},${cy + 8} Z`} fill={color} opacity={0.25} />
        <path d={`M ${cx},${cy + 8} L ${cx + 8},${cy - 6} L ${cx + 16},${cy + 8} Z`} fill={color} opacity={0.18} />
        {/* snow cap */}
        <path d={`M ${cx - 8},${cy - 6} L ${cx - 6},${cy - 10} L ${cx - 4},${cy - 6} Z`} fill="white" opacity={0.3} />
      </g>
    ),
  },
  /* Brain — neural/synaptic pattern */
  brain: {
    details: (cx, cy, r, color) => (
      <g>
        {/* neural nodes */}
        {[
          { dx: -10, dy: -8 }, { dx: 8, dy: -12 }, { dx: -6, dy: 10 },
          { dx: 12, dy: 6 }, { dx: 0, dy: 0 },
        ].map((n, i) => (
          <circle key={i} cx={cx + n.dx} cy={cy + n.dy} r={2.5} fill={color} opacity={0.3} />
        ))}
        {/* connecting lines */}
        <line x1={cx - 10} y1={cy - 8} x2={cx} y2={cy} stroke={color} strokeWidth={0.6} opacity={0.2} />
        <line x1={cx + 8} y1={cy - 12} x2={cx} y2={cy} stroke={color} strokeWidth={0.6} opacity={0.2} />
        <line x1={cx} y1={cy} x2={cx - 6} y2={cy + 10} stroke={color} strokeWidth={0.6} opacity={0.2} />
        <line x1={cx} y1={cy} x2={cx + 12} y2={cy + 6} stroke={color} strokeWidth={0.6} opacity={0.2} />
      </g>
    ),
  },
  /* Logic — grid/puzzle pattern */
  logic: {
    details: (cx, cy, r, color) => (
      <g>
        {/* mini grid */}
        {[-8, 0, 8].map((dx) =>
          [-8, 0, 8].map((dy) => (
            <rect
              key={`${dx}-${dy}`}
              x={cx + dx - 2.5} y={cy + dy - 2.5}
              width={5} height={5} rx={1}
              fill={color}
              opacity={(dx === 0 && dy === 0) ? 0.35 : 0.12}
            />
          ))
        )}
      </g>
    ),
  },
};

/* Fallback for unknown categories */
const DEFAULT_THEME: PlanetTheme = {
  details: (cx, cy, _r, color) => (
    <g>
      <circle cx={cx - 8} cy={cy - 6} r={4} fill={color} opacity={0.12} />
      <circle cx={cx + 6} cy={cy + 4} r={3} fill={color} opacity={0.1} />
    </g>
  ),
};

/* ------------------------------------------------------------------ */
/* Ocean background                                                    */
/* ------------------------------------------------------------------ */
function OceanBg() {
  return (
    <g>
      <rect x={0} y={0} width={800} height={900} fill="#070e1a" />
      <ellipse cx={400} cy={860} rx={520} ry={200} fill="#0b1729" opacity={0.6} />
      {/* stars */}
      {[
        { x: 50, y: 25, r: 1.1 }, { x: 160, y: 15, r: 0.7 }, { x: 310, y: 38, r: 0.9 },
        { x: 490, y: 20, r: 0.6 }, { x: 640, y: 32, r: 1 }, { x: 740, y: 12, r: 0.8 },
        { x: 100, y: 52, r: 0.5 }, { x: 410, y: 8, r: 1.2 }, { x: 570, y: 48, r: 0.4 },
        { x: 700, y: 55, r: 0.6 }, { x: 250, y: 60, r: 0.7 },
      ].map((s, i) => (
        <motion.circle
          key={i} cx={s.x} cy={s.y} r={s.r} fill="rgba(200,220,255,0.35)"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* nebula glow */}
      <ellipse cx={200} cy={400} rx={180} ry={120} fill="rgba(0,100,255,0.02)" />
      <ellipse cx={600} cy={600} rx={160} ry={100} fill="rgba(180,77,255,0.015)" />
      {/* wave lines */}
      {[300, 450, 600, 740].map((y, i) => (
        <motion.path
          key={i}
          d={`M -40,${y} Q 100,${y - 5} 200,${y} T 400,${y} T 600,${y} T 840,${y}`}
          fill="none" stroke="rgba(80,180,255,0.03)" strokeWidth={1}
          animate={{ x: [0, i % 2 === 0 ? 20 : -20, 0] }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Planet (was "Island")                                               */
/* ------------------------------------------------------------------ */
function Planet({
  island,
  selected,
  onClick,
}: {
  island: Island;
  selected: boolean;
  onClick: () => void;
}) {
  const { cx, cy, color, glow, label, id } = island;
  const theme = PLANET_THEMES[id] ?? DEFAULT_THEME;

  return (
    <g className="cursor-pointer" onClick={onClick} role="button" tabIndex={0} aria-label={label}>
      {/* outer glow */}
      <motion.circle
        cx={cx} cy={cy} r={R + 14}
        fill="none" stroke={glow}
        strokeWidth={selected ? 2 : 0.8}
        opacity={selected ? 0.6 : 0.12}
        animate={{ r: selected ? R + 18 : R + 14, opacity: selected ? 0.6 : 0.12 }}
        transition={{ duration: 0.4 }}
      />

      {/* atmosphere glow */}
      <defs>
        <radialGradient id={`pg-${id}`} cx="35%" cy="30%">
          <stop offset="0%" stopColor={color} stopOpacity={0.45} />
          <stop offset="50%" stopColor={color} stopOpacity={0.18} />
          <stop offset="100%" stopColor={color} stopOpacity={0.03} />
        </radialGradient>
      </defs>

      {/* planet body */}
      <motion.circle
        cx={cx} cy={cy} r={R}
        fill={`url(#pg-${id})`}
        stroke={color} strokeWidth={1.2} strokeOpacity={0.2}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      {/* category-specific surface details */}
      {theme.details(cx, cy, R, color)}

      {/* highlight arc (top-left shine) */}
      <path
        d={`M ${cx - R * 0.5},${cy - R * 0.7} A ${R * 0.8},${R * 0.8} 0 0,1 ${cx + R * 0.3},${cy - R * 0.8}`}
        fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1.5} strokeLinecap="round"
      />

      {/* label below */}
      <text
        x={cx} y={cy + R + 14}
        textAnchor="middle" fill={color}
        fontSize={9} fontWeight={700} letterSpacing={1.2}
        style={{ textTransform: "uppercase" as const, filter: `drop-shadow(0 0 3px ${glow})` }}
      >
        {label}
      </text>

      {/* game count badge */}
      <circle cx={cx + R - 4} cy={cy - R + 4} r={8} fill={color} opacity={0.85} />
      <text x={cx + R - 4} y={cy - R + 7.5} textAnchor="middle" fill="#fff" fontSize={8} fontWeight={800}>
        {island.games.length}
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Orbit paths between planets                                         */
/* ------------------------------------------------------------------ */
function OrbitPaths({ islands }: { islands: Island[] }) {
  if (islands.length < 2) return null;
  return (
    <g>
      {islands.slice(0, -1).map((a, i) => {
        const b = islands[i + 1];
        const mx = (a.cx + b.cx) / 2 + (i % 2 === 0 ? 35 : -35);
        const my = (a.cy + b.cy) / 2;
        return (
          <motion.path
            key={i}
            d={`M ${a.cx},${a.cy} Q ${mx},${my} ${b.cx},${b.cy}`}
            fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={1} strokeDasharray="4 6"
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
            background: `linear-gradient(135deg, ${island.color}10, #0a0a1af0)`,
            borderColor: `${island.color}20`,
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
/* Avatar marker on a planet                                           */
/* ------------------------------------------------------------------ */
function AvatarMarker({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      {/* Glow under avatar */}
      <ellipse cx={cx} cy={cy + R - 2} rx={6} ry={2.5} fill={color} opacity={0.3} />
      {/* Small avatar silhouette */}
      <g transform={`translate(${cx}, ${cy + R - 16})`}>
        {/* Body */}
        <rect x={-4} y={2} width={8} height={10} rx={2} fill="#e8c9a0" opacity={0.9} />
        {/* Head */}
        <circle cx={0} cy={-2} r={5} fill="#e8c9a0" opacity={0.9} />
        {/* Hair */}
        <path d="M -5,-4 Q -5,-8 0,-8 Q 5,-8 5,-4 L 4,-3 Q 3,-6 0,-6 Q -3,-6 -4,-3 Z" fill="#4a2e10" opacity={0.85} />
        {/* Eyes */}
        <circle cx={-1.8} cy={-2.2} r={0.8} fill="#2a2a2a" />
        <circle cx={1.8} cy={-2.2} r={0.8} fill="#2a2a2a" />
        {/* Smile */}
        <path d="M -1.5,0 Q 0,1.5 1.5,0" fill="none" stroke="#b06060" strokeWidth={0.5} />
        {/* Outline glow */}
        <circle cx={0} cy={0} r={12} fill="none" stroke={color} strokeWidth={0.6} opacity={0.25} />
      </g>
    </motion.g>
  );
}

/* ------------------------------------------------------------------ */
/* Main — Fullscreen Island Map                                        */
/* ------------------------------------------------------------------ */
export default function IslandMap({ islands, username, streak, specialCount, cardCount, lastPlayedCategory }: IslandMapProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIsland = islands.find((i) => i.id === selectedId) ?? null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#070e1a]" style={{ perspective: "1000px" }}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d", transformOrigin: "center 40%" }}
        animate={{ rotateX: selectedId ? 0 : 8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg
          viewBox="0 0 800 900"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full max-w-[520px] sm:max-w-none"
        >
          <OceanBg />

          {/* Logo — PLIZIO */}
          <g>
            {LETTERS.map((letter, i) => (
              <text
                key={i}
                x={314 + i * 30}
                y={88}
                textAnchor="middle"
                fontSize={34}
                fontWeight={900}
                fill={LETTER_COLORS[i]}
                style={{ filter: `drop-shadow(0 0 8px ${LETTER_COLORS[i]}50)` }}
              >
                {letter}
              </text>
            ))}
            <text x={400} y={106} textAnchor="middle" fontSize={7} fontWeight={600} letterSpacing={2.5} fill="rgba(255,255,255,0.2)">
              PLAY · LEARN · THINK
            </text>
            {username && (
              <text x={400} y={126} textAnchor="middle" fontSize={10} fontWeight={700} fill="rgba(255,255,255,0.18)" letterSpacing={0.8}>
                {username}
              </text>
            )}
          </g>

          {/* Stats */}
          <g>
            {streak > 0 && (
              <text x={345} y={150} textAnchor="end" fontSize={10} fontWeight={700} fill="#FFD700" opacity={0.5}>
                🔥 {streak}
              </text>
            )}
            {specialCount > 0 && (
              <text x={400} y={150} textAnchor="middle" fontSize={10} fontWeight={700} fill="#E040FB" opacity={0.5}>
                ⭐ {specialCount}
              </text>
            )}
            {cardCount > 0 && (
              <text x={455} y={150} textAnchor="start" fontSize={10} fontWeight={700} fill="rgba(255,255,255,0.2)">
                🃏 {cardCount}
              </text>
            )}
          </g>

          <OrbitPaths islands={islands} />

          {islands.map((island) => (
            <Planet
              key={island.id}
              island={island}
              selected={selectedId === island.id}
              onClick={() => setSelectedId(selectedId === island.id ? null : island.id)}
            />
          ))}

          {/* Avatar marker on last-played planet */}
          {(() => {
            const target = lastPlayedCategory
              ? islands.find((i) => i.id === lastPlayedCategory)
              : islands[0];
            return target ? <AvatarMarker cx={target.cx} cy={target.cy} color={target.color} /> : null;
          })()}
        </svg>
      </motion.div>

      <AnimatePresence>
        {selectedIsland && (
          <GamePanel island={selectedIsland} onClose={() => setSelectedId(null)} />
        )}
      </AnimatePresence>

      {/* SEO links */}
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
