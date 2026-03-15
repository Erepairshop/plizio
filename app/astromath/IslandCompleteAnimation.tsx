"use client";
/**
 * IslandCompleteAnimation — 13s cinematic when a player finishes an island
 *
 * Phases:
 *   0 → 1.2s   Space background fades in, island icon zooms to centre
 *   1.2 → 3s   "Island complete!" text + star burst
 *   3 → 4.5s   Island shrinks, astronaut walks in from left
 *   4.5 → 6s   Rocket descends from top-right
 *   6 → 8.5s   Energy particles stream into rocket fuel gauge
 *   8.5 → 10s  Astronaut boards rocket (slides in, hatch closes)
 *   10 → 12s   Rocket ignites + launches upward with trail
 *   12 → 13s   Screen fades out → onDone()
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playIslandComplete, playRocketDescend, playFueling, playLaunch } from "@/lib/astromath-sounds";

// ─── Island-Complete label translations ────────────────────────────────────────
const LABELS: Record<string, { complete: string; fueling: string; ready: string; liftoff: string }> = {
  en: { complete: "Island Complete!", fueling: "Collecting energy…", ready: "Ready for launch!", liftoff: "Liftoff!" },
  hu: { complete: "Sziget teljesítve!", fueling: "Energia gyűjtése…", ready: "Felszállásra kész!", liftoff: "Felszállás!" },
  de: { complete: "Insel geschafft!", fueling: "Energie sammeln…", ready: "Startbereit!", liftoff: "Abheben!" },
  ro: { complete: "Insulă completată!", fueling: "Colectare energie…", ready: "Gata de lansare!", liftoff: "Decolare!" },
};

// ─── SVG Rocket ───────────────────────────────────────────────────────────────
function RocketSVG({ color, flame }: { color: string; flame?: boolean }) {
  return (
    <svg width="90" height="170" viewBox="-45 -90 90 170" style={{ overflow: "visible" }}>
      {/* Engine flame */}
      {flame && (
        <g>
          <motion.ellipse cx={0} cy={92} rx={16} ry={28}
            fill="#FF6B00"
            animate={{ ry: [28, 38, 24], opacity: [1, 0.7, 1] }}
            transition={{ repeat: Infinity, duration: 0.14, ease: "easeInOut" }} />
          <motion.ellipse cx={0} cy={88} rx={10} ry={18}
            fill="#FFD700"
            animate={{ ry: [18, 26, 14] }}
            transition={{ repeat: Infinity, duration: 0.11 }} />
          <motion.ellipse cx={0} cy={83} rx={5} ry={8}
            fill="white"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 0.09 }} />
        </g>
      )}

      {/* Body gradient fill */}
      <defs>
        <linearGradient id="rocketBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#CCCCCC" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#AAAAAA" />
        </linearGradient>
        <linearGradient id="rocketNose" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Main body */}
      <ellipse cx={0} cy={20} rx={24} ry={60} fill="url(#rocketBody)" />
      {/* Colour stripe */}
      <ellipse cx={0} cy={35} rx={24} ry={10} fill={color} opacity={0.4} />

      {/* Nose cone */}
      <path d="M -24,-2 Q 0,-90 24,-2 Z" fill="url(#rocketNose)" />

      {/* Porthole window */}
      <circle cx={0} cy={5} r={13} fill="#001830" />
      <circle cx={0} cy={5} r={11} fill="#0A2A4A" />
      <circle cx={0} cy={5} r={9} fill="#0E3A6E" />
      {/* Window glare */}
      <ellipse cx={-3} cy={2} rx={5} ry={5} fill="rgba(0,200,255,0.55)" />
      <ellipse cx={-5} cy={-1} rx={2} ry={2} fill="rgba(255,255,255,0.4)" />

      {/* Left fin */}
      <path d="M -24,52 L -44,82 L -24,68 Z" fill={color} />
      <path d="M -24,52 L -44,82 L -24,68 Z" fill="rgba(0,0,0,0.15)" />
      {/* Right fin */}
      <path d="M 24,52 L 44,82 L 24,68 Z" fill={color} />

      {/* Engine bell */}
      <path d="M -16,76 L -12,88 L 12,88 L 16,76 Z" fill="#777" />
      <ellipse cx={0} cy={76} rx={16} ry={4} fill="#555" />
      <ellipse cx={0} cy={88} rx={12} ry={3} fill="#444" />

      {/* Colour accent band on body */}
      <ellipse cx={0} cy={-10} rx={24} ry={7} fill={color} opacity={0.25} />
    </svg>
  );
}

// ─── SVG Astronaut ────────────────────────────────────────────────────────────
function AstronautSVG({ color }: { color: string }) {
  return (
    <svg width="70" height="100" viewBox="-35 -50 70 100" style={{ overflow: "visible" }}>
      {/* Helmet */}
      <circle cx={0} cy={-28} r={17} fill="#E0E0E0" />
      <circle cx={0} cy={-28} r={14} fill="#001525" />
      <ellipse cx={-3} cy={-30} rx={5} ry={5} fill="rgba(0,200,255,0.65)" />
      <ellipse cx={-6} cy={-33} rx={2.5} ry={2} fill="rgba(255,255,255,0.35)" />
      {/* Helmet ring */}
      <ellipse cx={0} cy={-12} rx={13} ry={3.5} fill="#CCCCCC" />

      {/* Suit body */}
      <rect x={-13} y={-10} width={26} height={32} rx={7} fill="#D8D8D8" />
      {/* Chest panel */}
      <rect x={-8} y={-4} width={16} height={14} rx={4} fill={color} opacity={0.7} />
      {/* Chest indicator lights */}
      <circle cx={-4} cy={0} r={2} fill="#FF4444" />
      <circle cx={0} cy={0} r={2} fill="#FFDD00" />
      <circle cx={4} cy={0} r={2} fill="#44FF88" />

      {/* Left arm */}
      <rect x={-23} y={-9} width={11} height={22} rx={5} fill="#D0D0D0" />
      <circle cx={-17} cy={14} r={5} fill="#BBBBBB" />
      {/* Right arm */}
      <rect x={12} y={-9} width={11} height={22} rx={5} fill="#D0D0D0" />
      <circle cx={17} cy={14} r={5} fill="#BBBBBB" />

      {/* Legs */}
      <rect x={-12} y={21} width={10} height={24} rx={5} fill="#C8C8C8" />
      <rect x={2} y={21} width={10} height={24} rx={5} fill="#C8C8C8" />
      {/* Boots */}
      <ellipse cx={-7} cy={46} rx={8} ry={4.5} fill="#888" />
      <ellipse cx={7} cy={46} rx={8} ry={4.5} fill="#888" />
    </svg>
  );
}

// ─── Fuel Gauge ───────────────────────────────────────────────────────────────
function FuelGauge({ pct, color }: { pct: number; color: string }) {
  const gaugeH = 80;
  const fillH = (pct / 100) * gaugeH;
  return (
    <svg width="32" height="110" viewBox="-16 -15 32 110">
      {/* Label */}
      <text x={0} y={-5} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={7} fontWeight="bold">FUEL</text>
      {/* Tube outline */}
      <rect x={-10} y={0} width={20} height={gaugeH} rx={10} fill="rgba(255,255,255,0.06)" stroke={color} strokeWidth={1.5} strokeOpacity={0.5} />
      {/* Clip region */}
      <clipPath id="fuel-clip-main">
        <rect x={-10} y={0} width={20} height={gaugeH} rx={10} />
      </clipPath>
      {/* Animated fill */}
      <motion.rect
        x={-10} width={20} rx={10}
        style={{ fill: color, opacity: 0.85 }}
        clipPath="url(#fuel-clip-main)"
        initial={{ y: gaugeH, height: 0 }}
        animate={{ y: gaugeH - fillH, height: fillH }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      />
      {/* Glow overlay */}
      {pct > 5 && (
        <motion.rect
          x={-10} width={20} rx={10}
          style={{ fill: "white", opacity: 0.12 }}
          clipPath="url(#fuel-clip-main)"
          initial={{ y: gaugeH, height: 0 }}
          animate={{ y: gaugeH - fillH, height: fillH }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />
      )}
      {/* Cap */}
      <rect x={-7} y={-15} width={14} height={18} rx={4} fill="#666" />
      <rect x={-5} y={-13} width={10} height={3} rx={2} fill="#888" />
    </svg>
  );
}

// ─── Energy Particle ─────────────────────────────────────────────────────────
function EnergyParticle({ color, i, fromX, fromY, toX, toY }: {
  color: string; i: number; fromX: number; fromY: number; toX: number; toY: number;
}) {
  const delay = i * 0.18;
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ width: 8, height: 8, background: color, boxShadow: `0 0 8px ${color}`, left: fromX, top: fromY }}
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ x: toX - fromX, y: toY - fromY, opacity: [1, 1, 0], scale: [1, 1.5, 0.5] }}
      transition={{ duration: 0.9, delay, ease: "easeIn" }}
    />
  );
}

// ─── Star burst ───────────────────────────────────────────────────────────────
function StarBurst({ color }: { color: string }) {
  const rays = Array.from({ length: 12 }, (_, i) => i);
  return (
    <svg width="120" height="120" viewBox="-60 -60 120 120" className="absolute inset-0 m-auto pointer-events-none">
      {rays.map(i => {
        const angle = (i * 360) / 12;
        const rad = (angle * Math.PI) / 180;
        const x2 = Math.cos(rad) * 55;
        const y2 = Math.sin(rad) * 55;
        return (
          <motion.line key={i} x1={0} y1={0} x2={x2} y2={y2}
            stroke={color} strokeWidth={2} strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0, 0.8, 0], pathLength: [0, 1, 1] }}
            transition={{ duration: 0.8, delay: i * 0.04 }}
          />
        );
      })}
    </svg>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
interface Props {
  islandIcon: string;
  islandColor: string;
  islandName: string;
  lang?: string;
  onDone: () => void;
}

export default function IslandCompleteAnimation({ islandIcon, islandColor, islandName, lang = "en", onDone }: Props) {
  const [phase, setPhase] = useState(0);
  const t = LABELS[lang] ?? LABELS.en;

  // Phase timeline + hangeffektek
  useEffect(() => {
    const ts = [
      setTimeout(() => { setPhase(1); playIslandComplete(); }, 1200),   // island icon + fanfár
      setTimeout(() => setPhase(2), 3000),                              // astronaut walks in
      setTimeout(() => { setPhase(3); playRocketDescend(); }, 4800),    // rocket descends + whoosh
      setTimeout(() => { setPhase(4); playFueling(); }, 6200),          // fueling + elektromos hang
      setTimeout(() => setPhase(5), 8800),                              // astronaut boards
      setTimeout(() => { setPhase(6); playLaunch(); }, 10200),          // ignition + launch hang
      setTimeout(() => setPhase(7), 12000),                             // fade out
      setTimeout(onDone, 13000),
    ];
    return () => ts.forEach(clearTimeout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Particle positions (relative to absolute container)
  const particleCount = 10;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: "#060614" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: phase >= 7 ? 0 : 1 }}
      transition={{ duration: phase >= 7 ? 1.2 : 0.6 }}
    >
      {/* Space background stars */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.div key={i} className="absolute rounded-full bg-white"
          style={{
            left: `${(i * 47 + 13) % 100}%`,
            top: `${(i * 61 + 7) % 100}%`,
            width: (i % 3) * 0.8 + 0.5,
            height: (i % 3) * 0.8 + 0.5,
          }}
          animate={{ opacity: [0.1, 0.7, 0.1] }}
          transition={{ duration: 2 + (i % 5) * 0.4, delay: (i % 8) * 0.3, repeat: Infinity }}
        />
      ))}

      {/* ── Phase 0-2: Island icon zooms in ── */}
      <AnimatePresence>
        {phase >= 1 && phase < 3 && (
          <motion.div key="island-icon"
            className="absolute flex flex-col items-center gap-4"
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: phase < 2 ? 1.4 : 0.5, opacity: phase < 2 ? 1 : 0, y: phase >= 2 ? -80 : 0 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}>

            {/* Star burst behind icon */}
            {phase === 1 && <StarBurst color={islandColor} />}

            <div className="relative flex flex-col items-center">
              <motion.div
                className="text-7xl"
                animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.08, 0.97, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}>
                {islandIcon}
              </motion.div>
              <motion.p
                className="mt-3 text-xl font-black text-white text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}>
                {t.complete}
              </motion.p>
              <motion.p
                className="text-sm font-bold mt-1"
                style={{ color: islandColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}>
                {islandName}
              </motion.p>
              {/* Orbiting stars */}
              {[0, 1, 2].map(i => (
                <motion.div key={i} className="absolute text-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, delay: i * 1, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: `${60 + i * 8}px 0px` }}>
                  ⭐
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Phase 2+: Astronaut ── */}
      <AnimatePresence>
        {phase >= 2 && phase < 6 && (
          <motion.div key="astronaut"
            className="absolute"
            style={{ bottom: "22%", left: "15%" }}
            initial={{ x: -120, opacity: 0 }}
            animate={{
              x: phase >= 5 ? 110 : 0,   // boards the rocket at phase 5
              opacity: phase >= 5 ? 0 : 1,
              scale: phase >= 5 ? 0.4 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18, duration: phase >= 5 ? 0.8 : 0.6 }}>
            <AstronautSVG color={islandColor} />
            {/* Wave on arrival */}
            {phase === 2 && (
              <motion.div className="absolute -top-8 -right-4 text-2xl"
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{ delay: 0.6, duration: 1 }}>
                👋
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Phase 3+: Rocket ── */}
      <AnimatePresence>
        {phase >= 3 && phase < 7 && (
          <motion.div key="rocket"
            className="absolute"
            style={{ right: "18%", bottom: "18%" }}
            initial={{ y: -300, opacity: 0 }}
            animate={{
              y: phase >= 6 ? -400 : 0,
              x: phase >= 6 ? 80 : 0,
              opacity: phase >= 6 ? 0 : 1,
              rotate: phase >= 6 ? -15 : 0,
            }}
            transition={{
              y: { type: "spring", stiffness: 150, damping: 22 },
              ...(phase >= 6 ? { duration: 1.5, ease: "easeIn" } : {}),
            }}>
            <RocketSVG color={islandColor} flame={phase >= 6} />

            {/* Fuel gauge on the side of rocket */}
            <div className="absolute -left-10 top-10">
              <FuelGauge pct={phase >= 4 ? 100 : 0} color={islandColor} />
            </div>

            {/* "Fueling" label */}
            {phase === 4 && (
              <motion.p
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap"
                style={{ color: islandColor }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {t.fueling}
              </motion.p>
            )}
            {/* "Ready!" label */}
            {phase === 5 && (
              <motion.p
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap text-green-400"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {t.ready}
              </motion.p>
            )}
            {/* Liftoff label */}
            {phase === 6 && (
              <motion.p
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-lg font-black whitespace-nowrap"
                style={{ color: islandColor }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.3 }}>
                {t.liftoff}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Phase 4: Energy particles streaming from island icon to fuel gauge ── */}
      {phase === 4 && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: particleCount }, (_, i) => (
            <EnergyParticle
              key={i} i={i} color={islandColor}
              fromX={window.innerWidth * 0.25 - 4}
              fromY={window.innerHeight * 0.35 - 4}
              toX={window.innerWidth * 0.72}
              toY={window.innerHeight * 0.42}
            />
          ))}
          {/* Repeat wave */}
          {Array.from({ length: particleCount }, (_, i) => (
            <EnergyParticle
              key={`b-${i}`} i={i + particleCount * 0.5} color={islandColor}
              fromX={window.innerWidth * 0.3}
              fromY={window.innerHeight * 0.38}
              toX={window.innerWidth * 0.72}
              toY={window.innerHeight * 0.42}
            />
          ))}
        </div>
      )}

      {/* ── Phase 4+: Floating island icon (energy source) ── */}
      {phase >= 4 && phase < 6 && (
        <motion.div
          className="absolute text-5xl"
          style={{ left: "20%", top: "30%" }}
          animate={{ scale: [1, 1.1, 1], opacity: phase >= 5 ? [1, 0] : 1 }}
          transition={{ duration: 1.5, repeat: phase >= 5 ? 0 : Infinity }}>
          {islandIcon}
        </motion.div>
      )}

      {/* ── Rocket exhaust trail (phase 6) ── */}
      {phase >= 6 && (
        <motion.div
          className="absolute pointer-events-none"
          style={{ right: "28%", bottom: "28%", width: 40, height: 120 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.5 }}>
          {[0, 1, 2, 3, 4].map(i => (
            <motion.div key={i}
              className="absolute rounded-full"
              style={{
                width: 8 + i * 4, height: 8 + i * 4,
                background: i === 0 ? "#FFD700" : i === 1 ? "#FF6B00" : "rgba(255,100,0,0.3)",
                left: "50%", transform: "translateX(-50%)",
                top: 40 + i * 18,
              }}
              animate={{ opacity: [0.9, 0.3, 0], scale: [1, 2, 3] }}
              transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }} />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
