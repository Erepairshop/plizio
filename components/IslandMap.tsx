"use client";

import { useState, useRef } from "react";
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
  /** centre in the 800x600 viewBox */
  cx: number;
  cy: number;
  games: IslandGame[];
}

/* ------------------------------------------------------------------ */
/* Wave layers (parallax ocean)                                        */
/* ------------------------------------------------------------------ */
function OceanWaves() {
  return (
    <g>
      {/* deep water */}
      <rect x={0} y={0} width={800} height={600} fill="#0a1628" />

      {/* wave layers — subtle colour bands */}
      <ellipse cx={400} cy={620} rx={500} ry={120} fill="#0d1f3c" opacity={0.6} />
      <ellipse cx={400} cy={640} rx={480} ry={100} fill="#0f2847" opacity={0.5} />

      {/* animated foam lines */}
      {[180, 310, 440, 530].map((y, i) => (
        <motion.path
          key={i}
          d={`M -40,${y} Q 100,${y - 8} 200,${y} T 400,${y} T 600,${y} T 840,${y}`}
          fill="none"
          stroke="rgba(100,200,255,0.06)"
          strokeWidth={1.5}
          animate={{ x: [0, i % 2 === 0 ? 30 : -30, 0] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Single Island SVG                                                   */
/* ------------------------------------------------------------------ */
interface IslandShapeProps {
  island: Island;
  selected: boolean;
  onClick: () => void;
}

function IslandShape({ island, selected, onClick }: IslandShapeProps) {
  const { cx, cy, color, glow, label } = island;
  const r = 64;

  return (
    <g
      className="cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={label}
    >
      {/* glow ring */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={r + 16}
        fill="none"
        stroke={glow}
        strokeWidth={selected ? 3 : 1.5}
        opacity={selected ? 0.8 : 0.3}
        animate={{
          r: selected ? r + 22 : r + 16,
          opacity: selected ? 0.8 : 0.3,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* island base — gradient blob */}
      <defs>
        <radialGradient id={`ig-${island.id}`} cx="40%" cy="35%">
          <stop offset="0%" stopColor={color} stopOpacity={0.35} />
          <stop offset="70%" stopColor={color} stopOpacity={0.12} />
          <stop offset="100%" stopColor={color} stopOpacity={0.04} />
        </radialGradient>
      </defs>

      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill={`url(#ig-${island.id})`}
        stroke={color}
        strokeWidth={1.5}
        strokeOpacity={0.3}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      {/* terrain detail dots — give texture */}
      {[
        { dx: -18, dy: -22, s: 6 },
        { dx: 12, dy: -16, s: 8 },
        { dx: -8, dy: 8, s: 5 },
        { dx: 20, dy: 14, s: 7 },
        { dx: -24, dy: 4, s: 4 },
      ].map((d, i) => (
        <circle
          key={i}
          cx={cx + d.dx}
          cy={cy + d.dy}
          r={d.s}
          fill={color}
          opacity={0.12 + i * 0.02}
        />
      ))}

      {/* label */}
      <text
        x={cx}
        y={cy + r + 18}
        textAnchor="middle"
        fill={color}
        fontSize={11}
        fontWeight={700}
        letterSpacing={1.5}
        style={{ textTransform: "uppercase" as const, filter: `drop-shadow(0 0 6px ${glow})` }}
      >
        {label}
      </text>

      {/* game count badge */}
      <circle cx={cx + r - 8} cy={cy - r + 8} r={10} fill={color} opacity={0.9} />
      <text
        x={cx + r - 8}
        y={cy - r + 12}
        textAnchor="middle"
        fill="#fff"
        fontSize={10}
        fontWeight={800}
      >
        {island.games.length}
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Connecting paths between islands                                    */
/* ------------------------------------------------------------------ */
function ConnectionPaths({ islands }: { islands: Island[] }) {
  if (islands.length < 2) return null;
  const pairs: [Island, Island][] = [];
  for (let i = 0; i < islands.length - 1; i++) {
    pairs.push([islands[i], islands[i + 1]]);
  }
  return (
    <g>
      {pairs.map(([a, b], i) => {
        const mx = (a.cx + b.cx) / 2 + (i % 2 === 0 ? 40 : -40);
        const my = (a.cy + b.cy) / 2;
        return (
          <motion.path
            key={i}
            d={`M ${a.cx},${a.cy} Q ${mx},${my} ${b.cx},${b.cy}`}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={2}
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.2 }}
          />
        );
      })}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Game list panel (opens when island is selected)                     */
/* ------------------------------------------------------------------ */
function GamePanel({
  island,
  onClose,
}: {
  island: Island;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* panel */}
      <motion.div
        className="relative z-10 w-full max-w-md mx-4 mb-4 pointer-events-auto"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div
          className="rounded-2xl border p-5 backdrop-blur-xl"
          style={{
            background: `linear-gradient(135deg, ${island.color}15, #12122Af0)`,
            borderColor: `${island.color}30`,
          }}
        >
          {/* header */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/50 hover:bg-white/20 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <h2
              className="text-lg font-bold tracking-wide"
              style={{ color: island.color }}
            >
              {island.label}
            </h2>
          </div>

          {/* game grid */}
          <div className="grid grid-cols-2 gap-3">
            {island.games.map((game, i) => {
              const Icon = game.icon;
              return (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link href={`/${game.id}`}>
                    <div
                      className="flex items-center gap-3 rounded-xl p-3 border border-white/5 hover:border-white/15 bg-white/5 hover:bg-white/10 transition-all active:scale-95"
                    >
                      <div
                        className="p-2 rounded-lg"
                        style={{ background: `${game.color}20` }}
                      >
                        <Icon size={20} style={{ color: game.color }} />
                      </div>
                      <span className="text-white/90 text-sm font-semibold truncate">
                        {game.name}
                      </span>
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
/* Main Island Map                                                     */
/* ------------------------------------------------------------------ */
export default function IslandMap({ islands }: { islands: Island[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedIsland = islands.find((i) => i.id === selectedId) ?? null;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto"
      style={{ perspective: "900px" }}
    >
      {/* 2.5D tilt wrapper */}
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(12deg)",
        }}
        animate={{
          rotateX: selectedId ? 0 : 12,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto rounded-2xl overflow-hidden"
          style={{
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
          }}
        >
          <OceanWaves />
          <ConnectionPaths islands={islands} />
          {islands.map((island) => (
            <IslandShape
              key={island.id}
              island={island}
              selected={selectedId === island.id}
              onClick={() =>
                setSelectedId(selectedId === island.id ? null : island.id)
              }
            />
          ))}
        </svg>
      </motion.div>

      {/* Game panel overlay */}
      <AnimatePresence>
        {selectedIsland && (
          <GamePanel
            island={selectedIsland}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      {/* Hidden SEO links */}
      <nav className="sr-only" aria-label="Games">
        {islands.flatMap((island) =>
          island.games.map((game) => (
            <a key={game.id} href={`/${game.id}/`}>
              {game.name}
            </a>
          ))
        )}
      </nav>
    </div>
  );
}
