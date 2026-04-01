"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, type LucideIcon } from "lucide-react";
import dynamic from "next/dynamic";
import type { AvatarCompanionProps } from "@/components/AvatarCompanion";

const AvatarCompanion = dynamic(() => import("@/components/AvatarCompanion"), { ssr: false });

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
  avatarProps?: Partial<AvatarCompanionProps> | null;
}

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */
const LETTER_COLORS = ["#FF2D78", "#00D4FF", "#00FF88", "#FFD700", "#B44DFF", "#FF2D78"];
const LETTERS = ["P", "L", "I", "Z", "I", "O"];
const R = 46; // planet radius — bigger for mobile visibility

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
    details: (cx, cy, _r, color) => (
      <g>
        {/* mountain peaks */}
        <path d={`M ${cx - 14},${cy + 8} L ${cx - 6},${cy - 10} L ${cx + 2},${cy + 8} Z`} fill={color} opacity={0.25} />
        <path d={`M ${cx},${cy + 8} L ${cx + 8},${cy - 6} L ${cx + 16},${cy + 8} Z`} fill={color} opacity={0.18} />
        {/* snow cap */}
        <path d={`M ${cx - 8},${cy - 6} L ${cx - 6},${cy - 10} L ${cx - 4},${cy - 6} Z`} fill="white" opacity={0.3} />
      </g>
    ),
  },
  /* Learn — open book with knowledge glow */
  brain: {
    details: (cx, cy, _r, color) => (
      <g>
        {/* open book shape */}
        <path
          d={`M ${cx},${cy + 4} L ${cx - 14},${cy - 4} L ${cx - 14},${cy + 10} L ${cx},${cy + 14} Z`}
          fill={color} opacity={0.2}
        />
        <path
          d={`M ${cx},${cy + 4} L ${cx + 14},${cy - 4} L ${cx + 14},${cy + 10} L ${cx},${cy + 14} Z`}
          fill={color} opacity={0.15}
        />
        {/* book spine */}
        <line x1={cx} y1={cy + 2} x2={cx} y2={cy + 14} stroke={color} strokeWidth={1} opacity={0.35} />
        {/* page lines left */}
        <line x1={cx - 11} y1={cy} x2={cx - 3} y2={cy + 6} stroke={color} strokeWidth={0.5} opacity={0.2} />
        <line x1={cx - 11} y1={cy + 3} x2={cx - 3} y2={cy + 9} stroke={color} strokeWidth={0.5} opacity={0.2} />
        {/* page lines right */}
        <line x1={cx + 11} y1={cy} x2={cx + 3} y2={cy + 6} stroke={color} strokeWidth={0.5} opacity={0.2} />
        <line x1={cx + 11} y1={cy + 3} x2={cx + 3} y2={cy + 9} stroke={color} strokeWidth={0.5} opacity={0.2} />
        {/* sparkle / knowledge dots floating above */}
        <circle cx={cx - 6} cy={cy - 10} r={1.5} fill={color} opacity={0.4} />
        <circle cx={cx + 4} cy={cy - 14} r={1.2} fill={color} opacity={0.3} />
        <circle cx={cx + 10} cy={cy - 8} r={1.8} fill={color} opacity={0.35} />
      </g>
    ),
  },
  /* Logic — grid/puzzle pattern */
  logic: {
    details: (cx, cy, _r, color) => (
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
  /* Sport — ball with motion lines */
  sport: {
    details: (cx, cy, _r, color) => (
      <g>
        <circle cx={cx + 2} cy={cy - 2} r={8} fill="none" stroke={color} strokeWidth={1.2} opacity={0.3} />
        <path d={`M ${cx - 10},${cy - 6} L ${cx - 5},${cy - 6}`} stroke={color} strokeWidth={0.8} opacity={0.2} />
        <path d={`M ${cx - 12},${cy - 2} L ${cx - 6},${cy - 2}`} stroke={color} strokeWidth={0.8} opacity={0.25} />
        <path d={`M ${cx - 10},${cy + 2} L ${cx - 5},${cy + 2}`} stroke={color} strokeWidth={0.8} opacity={0.2} />
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
/* Star field — more stars, denser, with parallax support              */
/* ------------------------------------------------------------------ */
const STARS = (() => {
  const stars: { x: number; y: number; r: number; speed: number; brightness: number }[] = [];
  // Use deterministic "random" based on index for SSR safety
  for (let i = 0; i < 60; i++) {
    const seed = (i * 7919 + 104729) % 100000;
    stars.push({
      x: (seed % 500),
      y: ((seed * 3) % 900),
      r: 0.3 + (seed % 10) / 10,
      speed: 2 + (seed % 8),     // twinkle speed
      brightness: 0.15 + (seed % 30) / 100,
    });
  }
  return stars;
})();

/* ------------------------------------------------------------------ */
/* Universe background with parallax                                   */
/* ------------------------------------------------------------------ */
function UniverseBg({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  // Parallax layers: distant stars move less, close stars move more
  const farOffset = { x: mouseX * -2, y: mouseY * -2 };
  const midOffset = { x: mouseX * -5, y: mouseY * -5 };

  return (
    <g>
      <rect x={-20} y={-20} width={540} height={940} fill="#070e1a" />

      {/* Deep space nebula */}
      <ellipse cx={130} cy={400} rx={140} ry={120} fill="rgba(0,80,255,0.02)" />
      <ellipse cx={400} cy={250} rx={100} ry={80} fill="rgba(180,77,255,0.015)" />
      <ellipse cx={300} cy={700} rx={120} ry={90} fill="rgba(0,200,150,0.012)" />

      {/* Far stars layer — subtle parallax */}
      <g transform={`translate(${farOffset.x}, ${farOffset.y})`}>
        {STARS.slice(0, 30).map((s, i) => (
          <motion.circle
            key={`far-${i}`} cx={s.x} cy={s.y} r={s.r * 0.7}
            fill={`rgba(200,220,255,${s.brightness * 0.8})`}
            animate={{ opacity: [s.brightness * 0.5, s.brightness, s.brightness * 0.5] }}
            transition={{ duration: s.speed, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          />
        ))}
      </g>

      {/* Mid stars layer — more parallax */}
      <g transform={`translate(${midOffset.x}, ${midOffset.y})`}>
        {STARS.slice(30, 60).map((s, i) => (
          <motion.circle
            key={`mid-${i}`} cx={s.x} cy={s.y} r={s.r}
            fill={`rgba(220,240,255,${s.brightness})`}
            animate={{ opacity: [s.brightness * 0.4, s.brightness * 1.2, s.brightness * 0.4] }}
            transition={{ duration: s.speed * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
          />
        ))}
      </g>

      {/* Occasional shooting star */}
      <motion.line
        x1={80} y1={60} x2={110} y2={70}
        stroke="rgba(255,255,255,0.3)" strokeWidth={1} strokeLinecap="round"
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: [0, 0.6, 0], x: [0, 80], y: [0, 30] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 12, ease: "easeOut" }}
      />
      <motion.line
        x1={350} y1={120} x2={370} y2={130}
        stroke="rgba(255,255,255,0.25)" strokeWidth={0.8} strokeLinecap="round"
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ opacity: [0, 0.5, 0], x: [0, 60], y: [0, 25] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 18, delay: 7, ease: "easeOut" }}
      />

      {/* Cosmic dust / wave lines */}
      {[300, 500, 700].map((y, i) => (
        <motion.path
          key={i}
          d={`M -20,${y} Q 60,${y - 6} 125,${y} T 250,${y} T 375,${y} T 520,${y}`}
          fill="none" stroke="rgba(80,180,255,0.025)" strokeWidth={0.8}
          animate={{ x: [0, i % 2 === 0 ? 14 : -14, 0] }}
          transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Planet with idle animation + hover/tap effects                      */
/* ------------------------------------------------------------------ */
function Planet({
  island,
  selected,
  onClick,
  floatOffset,
}: {
  island: Island;
  selected: boolean;
  onClick: () => void;
  floatOffset: number;  // unique offset for floating animation per planet
}) {
  const { cx, cy, color, glow, label, id } = island;
  const theme = PLANET_THEMES[id] ?? DEFAULT_THEME;

  // Idle floating Y offset
  const floatY = cy + floatOffset;

  return (
    <motion.g
      className="cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={label}
      animate={{ y: floatOffset }}
      transition={{ duration: 0 }} // instant — floatOffset is animated externally
    >
      {/* big soft ambient glow behind planet */}
      <motion.circle
        cx={cx} cy={cy} r={R * 2.2}
        fill={glow}
        animate={{ opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 4 + floatOffset * 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx={cx} cy={cy} r={R * 1.5} fill={glow} opacity={0.08} />

      {/* Pulsing halo ring (idle animation) */}
      <motion.circle
        cx={cx} cy={cy} r={R + 20}
        fill="none" stroke={glow} strokeWidth={0.5}
        animate={{
          r: [R + 18, R + 24, R + 18],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: floatOffset * 0.3 }}
      />

      {/* outer ring glow — enhanced on selected */}
      <motion.circle
        cx={cx} cy={cy}
        fill="none" stroke={glow}
        initial={{
          r: R + 14,
          strokeWidth: 1.2,
          opacity: 0.25,
        }}
        animate={{
          r: selected ? R + 18 : R + 14,
          strokeWidth: selected ? 2.5 : 1.2,
          opacity: selected ? 0.8 : 0.25,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Selected: extra pulsing ring */}
      {selected && (
        <motion.circle
          cx={cx} cy={cy} r={R + 22}
          fill="none" stroke={glow} strokeWidth={1}
          animate={{
            r: [R + 20, R + 28, R + 20],
            opacity: [0.4, 0.1, 0.4],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* atmosphere glow */}
      <defs>
        <radialGradient id={`pg-${id}`} cx="35%" cy="30%">
          <stop offset="0%" stopColor={color} stopOpacity={0.6} />
          <stop offset="40%" stopColor={color} stopOpacity={0.3} />
          <stop offset="75%" stopColor={color} stopOpacity={0.12} />
          <stop offset="100%" stopColor={color} stopOpacity={0.04} />
        </radialGradient>
      </defs>

      {/* planet body — scale up on hover/tap */}
      <motion.circle
        cx={cx} cy={cy} r={R}
        fill={`url(#pg-${id})`}
        stroke={color} strokeWidth={1.5} strokeOpacity={0.35}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 1.15 }}
        animate={{ scale: selected ? 1.08 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ originX: `${cx}px`, originY: `${cy}px` }}
      />

      {/* category-specific surface details */}
      {theme.details(cx, cy, R, color)}

      {/* highlight arc (top-left shine) */}
      <path
        d={`M ${cx - R * 0.5},${cy - R * 0.7} A ${R * 0.8},${R * 0.8} 0 0,1 ${cx + R * 0.3},${cy - R * 0.8}`}
        fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth={2} strokeLinecap="round"
      />

      {/* label below */}
      <text
        x={cx} y={cy + R + 18}
        textAnchor="middle" fill={color}
        fontSize={11} fontWeight={800} letterSpacing={1.5}
        style={{ textTransform: "uppercase" as const, filter: `drop-shadow(0 0 6px ${glow})` }}
      >
        {label}
      </text>

      {/* game count badge */}
      <circle cx={cx + R - 4} cy={cy - R + 4} r={9} fill={color} opacity={0.9} />
      <text x={cx + R - 4} y={cy - R + 7.5} textAnchor="middle" fill="#fff" fontSize={9} fontWeight={800}>
        {island.games.length}
      </text>
    </motion.g>
  );
}

/* ------------------------------------------------------------------ */
/* Orbit paths between planets — brighter, with energy pulse           */
/* ------------------------------------------------------------------ */
function OrbitPaths({ islands }: { islands: Island[] }) {
  if (islands.length < 2) return null;
  return (
    <g>
      {islands.slice(0, -1).map((a, i) => {
        const b = islands[i + 1];
        const mx = (a.cx + b.cx) / 2 + (i % 2 === 0 ? 35 : -35);
        const my = (a.cy + b.cy) / 2;
        const pathD = `M ${a.cx},${a.cy} Q ${mx},${my} ${b.cx},${b.cy}`;
        // Blend colors from connected planets
        const blendColor = a.color;
        return (
          <g key={i}>
            {/* Base path — brighter */}
            <motion.path
              d={pathD}
              fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={1.2} strokeDasharray="5 5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
            />
            {/* Energy pulse traveling along the path */}
            <motion.path
              d={pathD}
              fill="none" stroke={blendColor} strokeWidth={2}
              strokeDasharray="8 200"
              strokeLinecap="round"
              opacity={0.3}
              animate={{ strokeDashoffset: [200, -200] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "linear", delay: i * 1.5 }}
            />
          </g>
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
/* SVG glow ring under avatar (stays in SVG)                           */
/* ------------------------------------------------------------------ */
function AvatarGlow({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      {/* Arrival glow burst */}
      <motion.circle
        cx={cx} cy={cy} r={18}
        fill={color} opacity={0}
        animate={{ r: [14, 30, 30], opacity: [0.4, 0.1, 0] }}
        transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
      />
      <ellipse cx={cx} cy={cy + R - 2} rx={8} ry={3} fill={color} opacity={0.3} />
      <motion.circle
        cx={cx} cy={cy} r={14}
        fill="none" stroke={color} strokeWidth={0.6}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.g>
  );
}

/* ------------------------------------------------------------------ */
/* Hook: SVG viewBox → DOM pixel position                              */
/* ------------------------------------------------------------------ */
function useSvgToDOM(svgRef: React.RefObject<SVGSVGElement | null>, vx: number, vy: number) {
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);

  const calc = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    // viewBox 0 0 500 900, xMidYMin meet
    const scaleW = rect.width / 500;
    const scaleH = rect.height / 900;
    const scale = Math.min(scaleW, scaleH);
    const renderedW = 500 * scale;
    const offsetX = (rect.width - renderedW) / 2; // xMid
    const offsetY = 0; // yMin
    setPos({
      left: rect.left + offsetX + vx * scale,
      top: rect.top + offsetY + vy * scale,
    });
  }, [svgRef, vx, vy]);

  useEffect(() => {
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [calc]);

  return pos;
}

/* ------------------------------------------------------------------ */
/* Planet idle float animation (returns offset per planet index)        */
/* ------------------------------------------------------------------ */
function usePlanetFloats(count: number) {
  const [offsets, setOffsets] = useState<number[]>(() => new Array(count).fill(0));
  const frameRef = useRef(0);

  useEffect(() => {
    let raf: number;
    const startTime = performance.now();
    const loop = (now: number) => {
      const t = (now - startTime) / 1000;
      const newOffsets = new Array(count).fill(0).map((_, i) => {
        // Each planet has a unique phase and slightly different speed
        const phase = i * 1.3;
        const speed = 0.3 + i * 0.05;
        return Math.sin(t * speed + phase) * 3; // +-3px float
      });
      setOffsets(newOffsets);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [count]);

  return offsets;
}

/* ------------------------------------------------------------------ */
/* Card flash effect — listens for plizio-cards-changed event          */
/* ------------------------------------------------------------------ */
function useCardFlash() {
  const [flashCat, setFlashCat] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => {
      // When a new card is earned, flash the last played category
      try {
        const cards = JSON.parse(localStorage.getItem("plizio_cards") || "[]");
        if (cards.length > 0) {
          const sorted = [...cards].sort((a: { date: string }, b: { date: string }) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          const lastGame = sorted[0]?.game;
          if (lastGame) {
            // Use the GAME_TO_CATEGORY mapping indirectly — we flash the category that owns this game
            setFlashCat(lastGame);
            setTimeout(() => setFlashCat(null), 2000);
          }
        }
      } catch {}
    };
    window.addEventListener("plizio-cards-changed", handler);
    return () => window.removeEventListener("plizio-cards-changed", handler);
  }, []);

  return flashCat;
}

/* ------------------------------------------------------------------ */
/* Main — Fullscreen Island Map                                        */
/* ------------------------------------------------------------------ */
export default function IslandMap({ islands, username, streak, specialCount, cardCount, lastPlayedCategory, avatarProps }: IslandMapProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIsland = islands.find((i) => i.id === selectedId) ?? null;
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Avatar tap state (handler defined after targetIsland below)
  const [avatarJump, setAvatarJump] = useState<{ reaction: "wave" | null; timestamp: number }>({ reaction: null, timestamp: 0 });
  const [interacting, setInteracting] = useState(false);

  // Mouse/touch parallax
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      // Normalize to -1..1 range, then multiply by small factor
      setMouseOffset({
        x: ((e.clientX - cx) / cx) * 1,
        y: ((e.clientY - cy) / cy) * 1,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Planet idle float
  const floatOffsets = usePlanetFloats(islands.length);

  // Avatar smooth movement
  const prevTargetRef = useRef<{ cx: number; cy: number } | null>(null);
  const [avatarAnimating, setAvatarAnimating] = useState(false);

  // Find the target planet for the avatar
  const targetIsland = lastPlayedCategory
    ? islands.find((i) => i.id === lastPlayedCategory)
    : islands[0];
  const avatarSvgX = targetIsland?.cx ?? 0;
  const avatarSvgY = targetIsland ? targetIsland.cy + R - 18 : 0; // sit on top of planet
  const avatarPos = useSvgToDOM(svgRef, avatarSvgX, avatarSvgY);

  // Avatar tap → wave reaction + open planet panel (defined after targetIsland)
  const handleAvatarTap = useCallback(() => {
    setAvatarJump({ reaction: "wave", timestamp: Date.now() });
    setInteracting(true);
    setTimeout(() => setInteracting(false), 2000);
    if (targetIsland) setSelectedId(targetIsland.id);
  }, [targetIsland]);

  // Track previous position for smooth movement
  useEffect(() => {
    if (targetIsland && prevTargetRef.current) {
      const prev = prevTargetRef.current;
      if (prev.cx !== targetIsland.cx || prev.cy !== targetIsland.cy) {
        setAvatarAnimating(true);
        setTimeout(() => setAvatarAnimating(false), 800);
      }
    }
    if (targetIsland) {
      prevTargetRef.current = { cx: targetIsland.cx, cy: targetIsland.cy };
    }
  }, [targetIsland?.cx, targetIsland?.cy]);

  const AVATAR_SIZE = 90;

  // Card flash
  const flashGame = useCardFlash();
  // Check if any island contains the flashed game
  const flashIslandId = flashGame
    ? islands.find(isl => isl.games.some(g => g.id === flashGame))?.id ?? null
    : null;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-[#070e1a]" style={{ perspective: "1000px" }}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d", transformOrigin: "center 35%" }}
        animate={{ rotateX: selectedId ? 0 : 8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 500 900"
          preserveAspectRatio="xMidYMin meet"
          className="w-full h-full"
        >
          <UniverseBg mouseX={mouseOffset.x} mouseY={mouseOffset.y} />

          {/* Logo — PLIZIO */}
          <g>
            {LETTERS.map((letter, i) => (
              <text
                key={i}
                x={177 + i * 25}
                y={100}
                textAnchor="middle"
                fontSize={30}
                fontWeight={900}
                fill={LETTER_COLORS[i]}
                style={{ filter: `drop-shadow(0 0 8px ${LETTER_COLORS[i]}50)` }}
              >
                {letter}
              </text>
            ))}
            <text x={250} y={118} textAnchor="middle" fontSize={8} fontWeight={600} letterSpacing={3} fill="rgba(255,255,255,0.5)">
              PLAY · LEARN · THINK
            </text>
            {username && (
              <text x={250} y={138} textAnchor="middle" fontSize={11} fontWeight={700} fill="rgba(255,255,255,0.45)" letterSpacing={0.8}>
                {username}
              </text>
            )}
          </g>

          {/* Stats — centered row */}
          <g>
            {(() => {
              const items: { emoji: string; value: number; color: string }[] = [];
              if (streak > 0) items.push({ emoji: "\uD83D\uDD25", value: streak, color: "#FFD700" });
              if (specialCount > 0) items.push({ emoji: "\u2B50", value: specialCount, color: "#E040FB" });
              if (cardCount > 0) items.push({ emoji: "\uD83C\uDCCF", value: cardCount, color: "rgba(255,255,255,0.5)" });
              const gap = 60;
              const totalW = (items.length - 1) * gap;
              const startX = 250 - totalW / 2;
              return items.map((item, i) => (
                <text
                  key={i}
                  x={startX + i * gap}
                  y={162}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight={800}
                  fill={item.color}
                  opacity={0.8}
                >
                  {item.emoji} {item.value}
                </text>
              ));
            })()}
          </g>

          <OrbitPaths islands={islands} />

          {islands.map((island, idx) => (
            <g key={island.id}>
              {/* Card flash effect on planet */}
              {flashIslandId === island.id && (
                <motion.circle
                  cx={island.cx} cy={island.cy} r={R * 1.5}
                  fill={island.color}
                  initial={{ opacity: 0.5, scale: 0.8 }}
                  animate={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 1.5 }}
                />
              )}
              <Planet
                island={island}
                selected={selectedId === island.id}
                onClick={() => setSelectedId(selectedId === island.id ? null : island.id)}
                floatOffset={floatOffsets[idx] ?? 0}
              />
            </g>
          ))}

          {/* SVG glow under avatar */}
          {targetIsland && (
            <AvatarGlow cx={targetIsland.cx} cy={targetIsland.cy} color={targetIsland.color} />
          )}
        </svg>
      </motion.div>

      {/* DOM overlay: real 3D avatar on the planet */}
      {avatarProps && targetIsland && avatarPos && (
        <motion.div
          className="fixed z-20"
          style={{
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            pointerEvents: "none",
          }}
          initial={{ opacity: 0, left: avatarPos.left - AVATAR_SIZE / 2, top: avatarPos.top - AVATAR_SIZE * 0.75 }}
          animate={{
            opacity: 1,
            left: avatarPos.left - AVATAR_SIZE / 2,
            top: avatarPos.top - AVATAR_SIZE * 0.75,
          }}
          transition={avatarAnimating
            ? { left: { duration: 0.8, ease: "easeInOut" }, top: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }, opacity: { delay: 1.2, duration: 0.5 } }
            : { opacity: { delay: 1.2, duration: 0.5 } }
          }
        >
          {/* Inner div: continuous floating animation + tap handler */}
          <motion.div
            style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            onClick={handleAvatarTap}
          >
            <AvatarCompanion
              fixed={false}
              mood={interacting ? "happy" : (avatarAnimating ? "happy" : "idle")}
              jumpTrigger={avatarJump}
              passThrough={true}
              {...avatarProps}
            />
          </motion.div>
        </motion.div>
      )}

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
