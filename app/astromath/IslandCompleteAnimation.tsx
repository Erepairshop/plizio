"use client";
/**
 * IslandCompleteAnimation — Cinematic island-complete sequence (~14s)
 *
 * Phases:
 *   0 → 1.5s   Space pull-back: planet rises from bottom, island icon on surface
 *   1.5 → 3.5s "Island Complete!" banner + score reveal (X/Y correct)
 *   3.5 → 5s   Rocket descends from orbit, landing lights
 *   5 → 8.5s   Energy orbs (1 per correct answer) stream into fuel gauge
 *   8.5 → 10s  Astronaut boards, "Ready for launch!" + engine warm-up glow
 *   10 → 12s   Ignition + launch — planet shrinks, star streaks
 *   12 → 14s   Fade out → onDone()
 */
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GRADE_PLANETS } from "@/app/astromath/planets";
import { playIslandComplete, playRocketDescend, playFueling, playLaunch } from "@/lib/astromath-sounds";

// ─── Translations ────────────────────────────────────────────────────────────
const LABELS: Record<string, {
  complete: string; fueling: string; ready: string; liftoff: string;
  correct: string; energy: string;
}> = {
  en: { complete: "Island Complete!", fueling: "Collecting energy…", ready: "Ready for launch!", liftoff: "Liftoff!", correct: "correct", energy: "Energy" },
  hu: { complete: "Sziget teljesítve!", fueling: "Energia gyűjtése…", ready: "Felszállásra kész!", liftoff: "Felszállás!", correct: "helyes", energy: "Energia" },
  de: { complete: "Insel geschafft!", fueling: "Energie sammeln…", ready: "Startbereit!", liftoff: "Abheben!", correct: "richtig", energy: "Energie" },
  ro: { complete: "Insulă completată!", fueling: "Colectare energie…", ready: "Gata de lansare!", liftoff: "Decolare!", correct: "corecte", energy: "Energie" },
};

// ─── Cinematic Rocket SVG ────────────────────────────────────────────────────
function RocketSVG({ color, flame, warmUp }: { color: string; flame?: boolean; warmUp?: boolean }) {
  return (
    <svg width="80" height="150" viewBox="-40 -80 80 150" style={{ overflow: "visible" }}>
      {/* Engine flame */}
      {flame && (
        <g>
          <motion.ellipse cx={0} cy={82} rx={18} ry={40}
            fill="#FF6B00"
            animate={{ ry: [40, 55, 35], opacity: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 0.12, ease: "easeInOut" }} />
          <motion.ellipse cx={0} cy={78} rx={12} ry={25}
            fill="#FFD700"
            animate={{ ry: [25, 36, 20] }}
            transition={{ repeat: Infinity, duration: 0.09 }} />
          <motion.ellipse cx={0} cy={74} rx={6} ry={12}
            fill="white"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 0.07 }} />
          {/* Outer glow */}
          <motion.ellipse cx={0} cy={90} rx={24} ry={50}
            fill="#FF6B00" opacity={0.15}
            animate={{ ry: [50, 65, 45] }}
            transition={{ repeat: Infinity, duration: 0.14 }} />
        </g>
      )}
      {/* Warm-up glow */}
      {warmUp && !flame && (
        <motion.ellipse cx={0} cy={72} rx={10} ry={8}
          fill="#FF6B00"
          animate={{ opacity: [0, 0.6, 0.3, 0.7, 0.4], ry: [8, 14, 10, 16, 8] }}
          transition={{ repeat: Infinity, duration: 0.8 }} />
      )}

      <defs>
        <linearGradient id="rb" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#CCCCCC" />
          <stop offset="40%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#AAAAAA" />
        </linearGradient>
        <linearGradient id="rn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Main body */}
      <ellipse cx={0} cy={18} rx={22} ry={55} fill="url(#rb)" />
      {/* Colour stripe */}
      <ellipse cx={0} cy={32} rx={22} ry={9} fill={color} opacity={0.4} />
      {/* Nose cone */}
      <path d="M -22,-2 Q 0,-80 22,-2 Z" fill="url(#rn)" />
      {/* Porthole */}
      <circle cx={0} cy={4} r={12} fill="#001830" />
      <circle cx={0} cy={4} r={10} fill="#0A2A4A" />
      <circle cx={0} cy={4} r={8} fill="#0E3A6E" />
      <ellipse cx={-3} cy={1} rx={4.5} ry={4.5} fill="rgba(0,200,255,0.55)" />
      <ellipse cx={-5} cy={-2} rx={2} ry={2} fill="rgba(255,255,255,0.4)" />
      {/* Left fin */}
      <path d="M -22,48 L -40,74 L -22,62 Z" fill={color} />
      <path d="M -22,48 L -40,74 L -22,62 Z" fill="rgba(0,0,0,0.15)" />
      {/* Right fin */}
      <path d="M 22,48 L 40,74 L 22,62 Z" fill={color} />
      {/* Engine bell */}
      <path d="M -14,68 L -10,78 L 10,78 L 14,68 Z" fill="#777" />
      <ellipse cx={0} cy={68} rx={14} ry={3.5} fill="#555" />
      <ellipse cx={0} cy={78} rx={10} ry={2.5} fill="#444" />
      {/* Accent band */}
      <ellipse cx={0} cy={-10} rx={22} ry={6} fill={color} opacity={0.25} />
    </svg>
  );
}

// ─── Astronaut SVG (smaller, for boarding) ──────────────────────────────────
function AstronautSVG({ color }: { color: string }) {
  return (
    <svg width="50" height="72" viewBox="-25 -36 50 72" style={{ overflow: "visible" }}>
      <circle cx={0} cy={-22} r={13} fill="#E0E0E0" />
      <circle cx={0} cy={-22} r={10.5} fill="#001525" />
      <ellipse cx={-2} cy={-24} rx={4} ry={4} fill="rgba(0,200,255,0.6)" />
      <ellipse cx={0} cy={-10} rx={10} ry={3} fill="#CCCCCC" />
      <rect x={-10} y={-7} width={20} height={26} rx={6} fill="#D8D8D8" />
      <rect x={-6} y={-2} width={12} height={10} rx={3} fill={color} opacity={0.7} />
      <circle cx={-3} cy={1} r={1.5} fill="#FF4444" />
      <circle cx={0} cy={1} r={1.5} fill="#FFDD00" />
      <circle cx={3} cy={1} r={1.5} fill="#44FF88" />
      <rect x={-17} y={-6} width={8} height={17} rx={4} fill="#D0D0D0" />
      <rect x={9} y={-6} width={8} height={17} rx={4} fill="#D0D0D0" />
      <rect x={-9} y={18} width={8} height={16} rx={4} fill="#C8C8C8" />
      <rect x={1} y={18} width={8} height={16} rx={4} fill="#C8C8C8" />
      <ellipse cx={-5} cy={35} rx={6} ry={3.5} fill="#888" />
      <ellipse cx={5} cy={35} rx={6} ry={3.5} fill="#888" />
    </svg>
  );
}

// ─── Circular Fuel Gauge ─────────────────────────────────────────────────────
function CircularFuelGauge({ pct, color, label }: { pct: number; color: string; label: string }) {
  const r = 30;
  const circ = 2 * Math.PI * r;
  const filled = circ * (pct / 100);
  return (
    <div className="relative flex flex-col items-center">
      <svg width="76" height="76" viewBox="0 0 76 76">
        {/* Background track */}
        <circle cx={38} cy={38} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={6} />
        {/* Filled arc */}
        <motion.circle cx={38} cy={38} r={r} fill="none"
          stroke={color} strokeWidth={6} strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - filled }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
        />
        {/* Glow */}
        <motion.circle cx={38} cy={38} r={r} fill="none"
          stroke={color} strokeWidth={2} strokeLinecap="round" opacity={0.3}
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - filled }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%", filter: "blur(4px)" }}
        />
        {/* Center icon */}
        <text x={38} y={42} textAnchor="middle" fill="white" fontSize={16} fontWeight="bold">⚡</text>
      </svg>
      <span className="text-[10px] font-bold mt-1 tracking-wider uppercase" style={{ color }}>{label}</span>
    </div>
  );
}

// ─── Energy Orb (flies from planet surface to rocket) ────────────────────────
function EnergyOrb({ color, i, total, startDelay }: {
  color: string; i: number; total: number; startDelay: number;
}) {
  // Distribute orbs in a slight arc from bottom-center to the rocket
  const spread = 160; // px horizontal spread
  const startX = ((i / Math.max(total - 1, 1)) - 0.5) * spread;
  const startY = 80 + (Math.random() * 30);
  const delay = startDelay + i * 0.15;
  const size = 6 + Math.random() * 4;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size, height: size,
        background: `radial-gradient(circle, white 0%, ${color} 60%, transparent 100%)`,
        boxShadow: `0 0 12px ${color}, 0 0 24px ${color}40`,
        left: "50%", bottom: "18%",
      }}
      initial={{ x: startX, y: startY, opacity: 0, scale: 0 }}
      animate={{
        x: [startX, startX * 0.3, 60],
        y: [startY, startY * 0.3, -120],
        opacity: [0, 1, 1, 0],
        scale: [0, 1.2, 1, 0.3],
      }}
      transition={{ duration: 1.2, delay, ease: "easeInOut" }}
    />
  );
}

// ─── Star streak (during launch) ────────────────────────────────────────────
function StarStreak({ i }: { i: number }) {
  const x = 5 + ((i * 37 + 11) % 90);
  const delay = (i * 0.08) % 0.5;
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`, top: 0,
        width: 1.5, height: 0,
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), transparent)",
      }}
      initial={{ height: 0, top: "-5%", opacity: 0 }}
      animate={{ height: 80, top: "110%", opacity: [0, 0.8, 0] }}
      transition={{ duration: 0.6, delay, ease: "easeIn" }}
    />
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
interface Props {
  islandIcon: string;
  islandColor: string;
  islandName: string;
  lang?: string;
  grade?: number;         // 1-8, for planet SVG
  score?: number;         // correct answers
  total?: number;         // total questions
  onDone: () => void;
}

export default function IslandCompleteAnimation({
  islandIcon, islandColor, islandName, lang = "en", grade = 1,
  score = 8, total = 10, onDone,
}: Props) {
  const [phase, setPhase] = useState(0);
  const t = LABELS[lang] ?? LABELS.en;

  // Planet component for this grade
  const PlanetComp = GRADE_PLANETS[Math.min(Math.max(grade - 1, 0), 7)];

  // Number of energy orbs = score (capped for perf)
  const orbCount = Math.min(score, 15);
  const fuelPct = total > 0 ? Math.round((score / total) * 100) : 100;

  // Random star positions (stable across renders)
  const stars = useMemo(() =>
    Array.from({ length: 60 }, (_, i) => ({
      x: (i * 47 + 13) % 100,
      y: (i * 61 + 7) % 100,
      size: (i % 3) * 0.8 + 0.6,
      delay: (i % 8) * 0.3,
      dur: 2 + (i % 5) * 0.4,
    })),
  []);

  // Phase timeline
  useEffect(() => {
    const ts = [
      setTimeout(() => { setPhase(1); playIslandComplete(); }, 1500),     // planet revealed + banner
      setTimeout(() => setPhase(2), 3500),                                 // rocket descends
      setTimeout(() => { setPhase(3); playRocketDescend(); }, 3800),
      setTimeout(() => { setPhase(4); playFueling(); }, 5000),             // energy orbs stream
      setTimeout(() => setPhase(5), 8500),                                 // astronaut boards + warm-up
      setTimeout(() => { setPhase(6); playLaunch(); }, 10000),             // ignition + launch
      setTimeout(() => setPhase(7), 12000),                                // fade out
      setTimeout(onDone, 14000),
    ];
    return () => ts.forEach(clearTimeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{ background: "#060614" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: phase >= 7 ? 0 : 1 }}
      transition={{ duration: phase >= 7 ? 1.5 : 0.8 }}
    >
      {/* ── Starfield ── */}
      {stars.map((s, i) => (
        <motion.div key={i} className="absolute rounded-full bg-white pointer-events-none"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={phase >= 6
            ? { y: [0, 600], opacity: [0.6, 0] }    // star streaks during launch
            : { opacity: [0.15, 0.7, 0.15] }
          }
          transition={phase >= 6
            ? { duration: 0.8, delay: s.delay * 0.3 }
            : { duration: s.dur, delay: s.delay, repeat: Infinity }
          }
        />
      ))}

      {/* ── Star streaks during launch (phase 6) ── */}
      {phase === 6 && Array.from({ length: 25 }, (_, i) => (
        <StarStreak key={i} i={i} />
      ))}

      {/* ── Planet rising from bottom ── */}
      <motion.div
        className="absolute left-1/2 pointer-events-none"
        style={{ bottom: 0, x: "-50%" }}
        initial={{ y: 200, scale: 1.5 }}
        animate={{
          y: phase >= 6 ? 400 : phase >= 1 ? 40 : 200,     // rise up, then sink on launch
          scale: phase >= 6 ? 0.5 : phase >= 1 ? 1.8 : 1.5,
          opacity: phase >= 6 ? 0 : 1,
        }}
        transition={{
          type: "spring", stiffness: 60, damping: 20,
          ...(phase >= 6 ? { duration: 1.5, type: "tween", ease: "easeIn" } : {}),
        }}
      >
        <PlanetComp size={280} />
        {/* Atmosphere glow */}
        <div className="absolute inset-0 rounded-full"
          style={{
            width: 280, height: 280,
            boxShadow: `0 0 60px ${islandColor}40, 0 0 120px ${islandColor}20, inset 0 0 40px ${islandColor}15`,
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* ── Island icon on planet surface ── */}
      <AnimatePresence>
        {phase >= 0 && phase < 5 && (
          <motion.div
            className="absolute left-1/2 pointer-events-none flex flex-col items-center"
            style={{ bottom: "28%" }}
            initial={{ x: "-50%", y: 100, opacity: 0, scale: 0.3 }}
            animate={{
              y: phase >= 1 ? 0 : 100,
              opacity: phase >= 4 ? [1, 0.5, 0] : 1,
              scale: phase >= 1 ? 1 : 0.3,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16 }}
          >
            {/* Glow ring around icon */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 100, height: 100, top: -14, left: "50%", x: "-50%",
                border: `2px solid ${islandColor}`,
                boxShadow: `0 0 20px ${islandColor}60, 0 0 40px ${islandColor}30`,
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div className="text-6xl relative z-10"
              animate={{ rotate: [0, -5, 5, 0], y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
              {islandIcon}
            </motion.div>
            {/* Island name badge */}
            <motion.div
              className="mt-2 px-4 py-1 rounded-full text-xs font-bold"
              style={{
                background: `${islandColor}20`, color: islandColor,
                border: `1px solid ${islandColor}40`,
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}>
              {islandName}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── "Island Complete!" banner (phase 1+) ── */}
      <AnimatePresence>
        {phase >= 1 && phase < 4 && (
          <motion.div
            key="banner"
            className="absolute inset-x-0 top-[12%] flex flex-col items-center gap-3 pointer-events-none"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 16 }}
          >
            {/* Title glow */}
            <motion.h1
              className="text-2xl sm:text-3xl font-black text-white tracking-wide text-center"
              style={{ textShadow: `0 0 30px ${islandColor}80, 0 0 60px ${islandColor}40` }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t.complete}
            </motion.h1>

            {/* Score badge */}
            <motion.div
              className="flex items-center gap-2 px-5 py-2 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <span className="text-lg">✨</span>
              <span className="text-white/90 font-bold text-lg">{score}/{total}</span>
              <span className="text-white/50 text-sm font-medium">{t.correct}</span>
            </motion.div>

            {/* Orbiting stars */}
            {[0, 1, 2].map(i => (
              <motion.div key={i} className="absolute text-xl pointer-events-none"
                style={{ top: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, delay: i * 1.3, repeat: Infinity, ease: "linear" }}
                >
                <motion.span style={{
                  display: "inline-block",
                  transformOrigin: `${55 + i * 10}px 0px`,
                }}>
                  ⭐
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Rocket (phase 3+) ── */}
      <AnimatePresence>
        {phase >= 3 && phase < 7 && (
          <motion.div key="rocket"
            className="absolute pointer-events-none"
            style={{ right: "25%", bottom: "30%" }}
            initial={{ y: -350, opacity: 0 }}
            animate={{
              y: phase >= 6 ? -500 : 0,
              opacity: phase >= 6 ? [1, 1, 0] : 1,
              x: phase >= 6 ? 40 : 0,
            }}
            transition={{
              y: phase >= 6
                ? { duration: 1.8, ease: [0.4, 0, 0.2, 1] }
                : { type: "spring", stiffness: 100, damping: 18 },
              opacity: phase >= 6 ? { duration: 1.8 } : { duration: 0.4 },
            }}
          >
            <RocketSVG color={islandColor} flame={phase >= 6} warmUp={phase === 5} />

            {/* Landing lights (phases 3-4) */}
            {phase >= 3 && phase < 5 && (
              <motion.div className="absolute -bottom-4 left-1/2"
                style={{ x: "-50%", width: 60, height: 8, borderRadius: 4 }}
                animate={{ opacity: [0.3, 0.7, 0.3], boxShadow: [`0 0 12px ${islandColor}60`, `0 0 24px ${islandColor}80`, `0 0 12px ${islandColor}60`] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fuel Gauge (phase 4+) — next to rocket ── */}
      <AnimatePresence>
        {phase >= 4 && phase < 6 && (
          <motion.div key="gauge"
            className="absolute pointer-events-none"
            style={{ right: "8%", bottom: "32%" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CircularFuelGauge pct={fuelPct} color={islandColor} label={t.energy} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fueling label (phase 4) ── */}
      {phase === 4 && (
        <motion.p
          className="absolute bottom-[22%] inset-x-0 text-center text-sm font-bold pointer-events-none"
          style={{ color: islandColor, textShadow: `0 0 16px ${islandColor}60` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {t.fueling}
        </motion.p>
      )}

      {/* ── Energy orbs streaming (phase 4) ── */}
      {phase === 4 && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: orbCount }, (_, i) => (
            <EnergyOrb key={i} i={i} total={orbCount} color={islandColor} startDelay={0} />
          ))}
          {/* Second wave */}
          {Array.from({ length: Math.min(orbCount, 8) }, (_, i) => (
            <EnergyOrb key={`w2-${i}`} i={i} total={Math.min(orbCount, 8)} color={islandColor} startDelay={1.5} />
          ))}
        </div>
      )}

      {/* ── Astronaut (phase 3-5, walks in then boards) ── */}
      <AnimatePresence>
        {phase >= 3 && phase < 6 && (
          <motion.div key="astro"
            className="absolute pointer-events-none"
            style={{ bottom: "26%", left: "22%" }}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: phase >= 5 ? 130 : 0,
              opacity: phase >= 5 ? 0 : 1,
              scale: phase >= 5 ? 0.4 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 16 }}
          >
            <AstronautSVG color={islandColor} />
            {/* Wave */}
            {phase === 3 && (
              <motion.div className="absolute -top-6 -right-3 text-xl"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ delay: 0.5, duration: 1 }}>
                👋
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── "Ready for launch!" (phase 5) ── */}
      {phase === 5 && (
        <motion.div
          className="absolute inset-x-0 top-[20%] flex flex-col items-center gap-2 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.p className="text-lg font-black text-green-400"
            style={{ textShadow: "0 0 20px rgba(74,222,128,0.5)" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {t.ready}
          </motion.p>
        </motion.div>
      )}

      {/* ── "Liftoff!" (phase 6) ── */}
      {phase === 6 && (
        <motion.div
          className="absolute inset-x-0 top-[30%] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.3, 1.4, 1.2, 1.5] }}
          transition={{ duration: 1.8 }}
        >
          <span className="text-3xl font-black tracking-widest"
            style={{ color: islandColor, textShadow: `0 0 40px ${islandColor}80, 0 2px 0 rgba(0,0,0,0.5)` }}>
            {t.liftoff}
          </span>
        </motion.div>
      )}

      {/* ── Screen shake during launch (phase 6) ── */}
      {phase === 6 && (
        <motion.div className="fixed inset-0 pointer-events-none"
          animate={{ x: [0, -3, 4, -2, 3, -1, 0], y: [0, 2, -3, 1, -2, 1, 0] }}
          transition={{ duration: 0.4, repeat: 3 }}
        />
      )}

      {/* ── Exhaust particles during launch (phase 6) ── */}
      {phase >= 6 && phase < 7 && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }, (_, i) => {
            const x = 55 + (Math.random() - 0.5) * 20;
            const startY = 55 + Math.random() * 15;
            return (
              <motion.div key={`ex-${i}`}
                className="absolute rounded-full"
                style={{
                  width: 4 + Math.random() * 6,
                  height: 4 + Math.random() * 6,
                  background: i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#FF6B00" : "rgba(255,100,0,0.5)",
                  left: `${x}%`, top: `${startY}%`,
                }}
                animate={{
                  y: [0, 200 + Math.random() * 100],
                  opacity: [0.9, 0],
                  scale: [1, 2.5],
                }}
                transition={{ duration: 0.8 + Math.random() * 0.4, delay: i * 0.08, repeat: 2 }}
              />
            );
          })}
        </div>
      )}

      {/* ── Vignette overlay ── */}
      <div className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </motion.div>
  );
}
